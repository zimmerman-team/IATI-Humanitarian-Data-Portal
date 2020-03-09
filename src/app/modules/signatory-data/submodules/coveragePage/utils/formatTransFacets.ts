import { CovOrgItemModel } from '../store/interfaces';

/* utils */
import get from 'lodash/get';
import moment from 'moment';
import sortBy from 'lodash/sortBy';

// forms a query acceptable date out of the passed in date
function getQueryDate(rawDate: string): string {
  const date = moment(rawDate);
  let month = date.month() + 1 + '';
  month = month.length < 2 ? `0${month}` : month;
  let day = date.date() + '';
  day = day.length < 2 ? `0${day}` : day;
  return `${date.year()}-${month}-${day}T00:00:00Z`;
}

const dateRangeFacet = (startDate: string, endDate: string): string => {
  return `"date_range_${startDate}_${endDate}": {
            type: 'query',
            q:
              'transaction_date_iso_date_f:[${startDate} TO ${endDate}]',
            facet: {
              trans_currency: {
                type: 'terms',
                field: 'transaction_value_currency',
                facet: { transaction_sum: 'sum(transaction_value)' },
              },
            },
          },`;
};

// helper function to get the gap period
function getGapPeriod(prevDate: string, currRawDate: string): string | null {
  const currDate = moment(currRawDate);
  // so here we check if there's a gap between periods
  // and push in the gap if there is one
  const momDate = moment(prevDate);
  // we add one day because most of these periods and the
  // day before another perido starts
  const momAddDate = momDate.add(1, 'days');

  if (!currDate.isSame(momDate, 'day') && !currDate.isSame(momAddDate, 'day')) {
    // aaand we add the gap period
    return dateRangeFacet(
      getQueryDate(momAddDate.format()),
      getQueryDate(currDate.subtract(1, 'days').format())
    );
  }

  return null;
}

// a helper function that will form transaction
// facets according to the organisation information
// mainly will be forming period query facets, according to the
// organisations expenditure periods mentioned
export function formatTransFacets(
  covOrgItem: CovOrgItemModel[] | null,
  firstTransDate: string
): string {
  const covOrgDataz =
    covOrgItem && get(covOrgItem, '[0].organisation_total_expenditure');

  if (covOrgDataz && covOrgDataz.length > 0) {
    // we sort the org data by period start so that everything would be definetely correct
    const covOrgData = sortBy(covOrgDataz, ['period_start']);
    // formatDate(transPerStart.format()),
    // so first we add the facet from the start of the internet
    // to the start of the very first mentioned period
    const startDate = moment(covOrgData[0].period_start).subtract(1, 'days');
    let transfacets = dateRangeFacet(
      firstTransDate,
      getQueryDate(startDate.format())
    );

    // variable to store the previous last period
    // for period gap checking
    let prevDate: string | null = null;
    // and here we'll loop through the period items and create facets for those periods
    // and we'll also check for any gaps and create facets for those
    covOrgData.forEach(orgExp => {
      if (prevDate) {
        const period = getGapPeriod(prevDate, orgExp.period_start);
        if (period) {
          transfacets = transfacets.concat(period);
        }
      }

      // adding the normal period
      transfacets = transfacets.concat(
        dateRangeFacet(
          getQueryDate(orgExp.period_start),
          getQueryDate(orgExp.period_end)
        )
      );

      prevDate = orgExp.period_end;
    });

    if (prevDate) {
      // and here we add the facet query
      // for transactions that happened after the last
      // period end
      const today = moment();
      const period = getGapPeriod(prevDate, today.format());
      if (
        period &&
        moment(prevDate)
          .add(1, 'days')
          .isBefore(today, 'day')
      ) {
        transfacets = transfacets.concat(period);
      }
    }

    return transfacets;
  }

  // so if there's no organisation periods
  // we do annual transaction query, and in the
  // formating function we'll add 'No Data'
  // for operational funds
  return `date_range_unsepcified: {
            type: 'range',
            field: 'transaction_date_iso_date',
            start: '1900-01-01T00:00:00Z',
            end: 'NOW',
            gap: '+12MONTHS',
            mincount: 1,
            facet: {
              trans_currency: {
                type: 'terms',
                field: 'transaction_value_currency',
                facet: { transaction_sum: 'sum(transaction_value)' },
              },
            },
      },`;
}
