import get from 'lodash/get';
import find from 'lodash/find';

export const getTableData = (rawData, codelist) => {
  const providers = [];
  const expandableData = [];
  const arr = get(
    rawData,
    'facet_counts.facet_pivot["transaction_provider_org_narrative,transaction_provider_org_ref,transaction_provider_org_type,iati_identifier,transaction_value_currency"]',
    []
  );
  arr.forEach(facet => {
    get(facet, 'pivot', []).forEach(fpivot => {
      get(fpivot, 'pivot', []).forEach(fpivotpivot => {
        const currency = get(fpivotpivot, 'pivot[0].pivot[0].value', '');
        providers.push([
          facet.value,
          fpivot.value,
          get(find(codelist, { code: fpivotpivot.value }), 'name', ''),
          fpivotpivot.pivot.length,
          '',
          {
            currency,
            num: fpivotpivot.stats.stats_fields.transaction_value.sum,
          },
        ] as never);
        const providerActivities = [];
        fpivotpivot.pivot.forEach(activity => {
          providerActivities.push([
            {
              value: activity.value,
              link: `/activity-detail/${activity.value}`,
              type: 'LinkCellModule',
              colSpan: 4,
            },
            {
              value: '',
              colSpan: 1,
            },
            {
              value: new Intl.NumberFormat(undefined, {
                currency: activity.pivot[0].value,
                style: 'currency',
                currencyDisplay: 'symbol',
              }).format(activity.stats.stats_fields.transaction_value.sum),
              colSpan: 1,
            },
          ] as never);
        });
        expandableData.push(providerActivities as never);
      });
    });
  });
  return { data: providers, expData: expandableData };
};
