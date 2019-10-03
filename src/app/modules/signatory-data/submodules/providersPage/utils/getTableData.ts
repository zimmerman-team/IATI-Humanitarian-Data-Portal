import get from 'lodash/get';
import find from 'lodash/find';
import { convertCurr } from 'app/utils/currency';

export const getTableData = (rawData, facetKey, codelist, typeSum) => {
  const providers = [];
  const arr = get(rawData, facetKey, []);
  arr.forEach(facet => {
    get(facet, 'pivot', []).forEach(fpivot => {
      // so if the organisation has a name or a ref
      // only then we process it. CAUSE ACCORDING TO
      // THE IATI STANDARD these orgs should have
      // either a ref or a name, but not all #PeopleUploadingIatiData
      // provide this...
      if (facet.value || fpivot.value) {
        get(fpivot, 'pivot', []).forEach(fpivotpivot => {
          // so here we'll need to add the values only of
          // incoming funds type transactions as requested
          // by Wendy - https://basecamp.com/1938785/projects/16465375/messages/87425232
          // and its code is 1
          // so we'll be looping through all the transaction types
          // add the transaction type values with transaction type code 1
          // and we will convert all of the values to the first detected value currency
          let currency: null | string = null;
          let value = 0;
          // so we loop through activities here
          const iatiActivities = get(fpivotpivot, 'pivot', []);
          iatiActivities.forEach(activity => {
            const transTypes = get(activity, 'pivot', []);
            // then we loop through transaction types here
            transTypes.forEach(transType => {
              if (transType.value === typeSum) {
                // and if its the correct trans type
                // we loop through the currencies
                // convert the amounts to the first occured currency
                // and add them all up
                const transCurrencies = get(transType, 'pivot', []);
                transCurrencies.forEach(transCurr => {
                  let sumValue = get(
                    transCurr,
                    'stats.stats_fields.transaction_value.sum',
                    0
                  );

                  if (!currency) {
                    // and we'll use the first occuring trans currency value as
                    // the trans currency value for all
                    currency = transCurr.value || 'USD';
                  }

                  // if the current currency is not equal to the default one
                  // we convert the sum to the default currency
                  if (
                    currency &&
                    currency !== transCurr.value &&
                    transCurr.value
                  ) {
                    sumValue = convertCurr(sumValue, transCurr.value, currency);
                  }

                  // aaand finally we add the converted value to the whole
                  value += sumValue;
                });
              }
            });
          });

          providers.push([
            facet.value || 'Not Provided',
            fpivot.value || 'Not Provided',
            get(
              find(codelist, { code: fpivotpivot.value }),
              'name',
              'Not Provided'
            ),
            fpivotpivot.pivot.length,
            {
              currency: currency || 'USD',
              num: value,
            },
          ] as never);
        });
      }
    });
  });
  return providers;
};
