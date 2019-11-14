/* models/interfaces */
import { ListModel } from 'app/components/datadisplay/Lists/model';
import { ResultItem } from 'app/modules/ResultDetails/store/interface';
import { ListCellModel } from 'app/components/datadisplay/Lists/common/SimpleListItem/model';

/* utils */
import {
  formatTableCardItems,
  KeyItemModel,
} from 'app/modules/activityDetails/utils/formatTableCardItems';
import { getNarrativeText } from 'app/utils/generic';
import get from 'lodash/get';

/* consts */
import {
  baselineFields,
  dimensionFields,
  indicatorFields,
  indicatorRefFields,
  resDocLinkFields,
  resRefFields,
  targActFields,
} from '../const';

function correctFields(perIndex: number): KeyItemModel[] {
  let correctedFields: KeyItemModel[] = targActFields;
  // so here we need to remove the heading from all
  // underlying things
  if (perIndex !== 0) {
    correctedFields = targActFields.map(field => {
      const fieldItem: KeyItemModel = {
        key: field.key,
      };

      if (field.emptyValString) {
        fieldItem.emptyValString = field.emptyValString;
      }

      if (field.arrayKey) {
        fieldItem.arrayKey = field.arrayKey;
      }

      return fieldItem;
    });
  }

  return correctedFields;
}

export function formatResultElements(
  resDetail: ResultItem | null,
  measCodeName,
  indVocCodeNames
): ListModel[] {
  const elementLists: ListModel[] = [];
  if (resDetail) {
    // pushing document links
    elementLists.push({
      title: 'Document Links',
      type: 'ExpTableCard',
      elName: 'docLinks',
      tableCItems: formatTableCardItems(
        resDetail,
        'result_document_link',
        resDocLinkFields,
        true
      ),
    });

    // pushing result references
    elementLists.push({
      title: 'References',
      type: 'ExpTableCard',
      elName: 'refs',
      tableCItems: formatTableCardItems(
        resDetail,
        'result_reference',
        resRefFields
      ),
    });

    // pushing indicators
    elementLists.push({
      title: 'Indicators',
      type: 'ExpTableCard',
      elName: 'indicators',
      tableCItems: formatTableCardItems(
        resDetail,
        'result_indicator',
        indicatorFields(measCodeName)
      ),
    });

    // now here for each result indicator
    // will push in a tablecard for that indicators
    // reocurring elements and we'll give the table cards title
    // the indicators name
    if (resDetail.result_indicator) {
      resDetail.result_indicator.forEach((indicator, index) => {
        // we need to use the first array element
        // cause of the double array which is just unneeded
        const indTitle = getNarrativeText(
          get(indicator, 'title.narratives', [])
        );

        // pushing indicators document links
        elementLists.push({
          title: `${indTitle} - Document Links`,
          type: 'ExpTableCard',
          elName: `${indTitle}${index}docLinks`,
          tableCItems: formatTableCardItems(
            indicator[0],
            'document_links',
            resDocLinkFields
          ),
        });

        // pushing indicators references
        elementLists.push({
          title: `${indTitle} - References`,
          type: 'ExpTableCard',
          elName: `${indTitle}${index}refs`,
          tableCItems: formatTableCardItems(
            indicator,
            'references',
            indicatorRefFields(indVocCodeNames)
          ),
        });

        // pushing baselines for the indicator
        elementLists.push({
          title: `${indTitle} - Base Lines`,
          type: 'ExpTableCard',
          elName: `${indTitle}${index}base`,
          tableCItems: formatTableCardItems(
            indicator,
            'baseline',
            baselineFields
          ),
        });

        // and here we'll loop through baselines
        // and then push the baselines reocurring elements
        // into the element list and we form that cards name
        // out of the indicator title the base line year
        // and baselines value, if no value is provided we use qualitive
        if (indicator.baseline) {
          indicator.baseline.forEach((baseline, baseIndex) => {
            const baseVal =
              baseline.value !== null ? baseline.value : 'Qualitive';
            const baseTitle = `${indTitle} - Base Line of ${baseline.year} - ${baseVal}`;

            // pushing dimensions for baseline
            elementLists.push({
              title: `${baseTitle} - Dimensions`,
              type: 'ExpTableCard',
              elName: `${baseTitle}${index}${baseIndex}dim`,
              tableCItems: formatTableCardItems(
                baseline,
                'dimensions',
                dimensionFields
              ),
            });

            // pushing document links for baseline
            elementLists.push({
              title: `${baseTitle} - Document Links`,
              type: 'ExpTableCard',
              elName: `${baseTitle}${index}${baseIndex}docLinks`,
              tableCItems: formatTableCardItems(
                baseline,
                'document_links',
                resDocLinkFields
              ),
            });
          });
        }

        if (indicator.periods) {
          // oke so here we push in the card for the indicators targets
          // BUT we want to form the items in the period array and after its been done
          // we want to set the targets items by joining each poriods targets
          // so that they would all go into one card, this should look prettier
          // so to achieve this we currently set the items as empty aray
          // and we retain this elements index
          elementLists.push({
            title: `${indTitle} - Targets`,
            type: 'ExpTableCard',
            elName: `${indTitle}${index}target`,
            tableCItems: [],
          });
          const targetIndex = elementLists.length - 1;
          let targetItems: ListCellModel[][] = [];

          // so here we loop through the provided periods
          indicator.periods.forEach((period, perIndex) => {
            // and here we loop through the periods and concat their target
            // data together

            targetItems = targetItems.concat(
              formatTableCardItems(
                period,
                'targets',
                correctFields(perIndex),
                false,
                `${period.period_start} to ${period.period_end}`,
                'Period',
                perIndex
              )
            );

            // and here we'll loop through period targets
            // and then push the period targets reocurring elements
            // into the element list and we form that cards name
            // out of the indicator title the period target years
            // and period target value, if no value is provided we use qualitive
            if (period.targets) {
              period.targets.forEach((target, targIndex) => {
                const targetVal =
                  target.value !== null ? target.value : 'Qualitive';

                const targetTitle = `${indTitle} - Targets for ${period.period_start} to ${period.period_end} - ${targetVal}`;
                // pushing dimensions for baseline
                elementLists.push({
                  title: `${targetTitle} - Dimensions`,
                  type: 'ExpTableCard',
                  elName: `${targetTitle}${perIndex}${targIndex}dim`,
                  tableCItems: formatTableCardItems(
                    target,
                    'dimensions',
                    dimensionFields
                  ),
                });

                // pushing document links for baseline
                elementLists.push({
                  title: `${targetTitle} - Document Links`,
                  type: 'ExpTableCard',
                  elName: `${targetTitle}${perIndex}${targIndex}docLinks`,
                  tableCItems: formatTableCardItems(
                    target,
                    'document_links',
                    resDocLinkFields
                  ),
                });
              });
            }
          });

          // and here after all of the loops are done
          // we set the targets card items to the
          // merged targetItems array
          elementLists[targetIndex].tableCItems = targetItems;

          // and here we apply the same logic of targets but for the actuals
          elementLists.push({
            title: `${indTitle} - Actuals`,
            type: 'ExpTableCard',
            elName: `${indTitle}${index}actual`,
            tableCItems: [],
          });

          const actualIndex = elementLists.length - 1;
          let actualItems: ListCellModel[][] = [];

          // so here we loop through the provided periods
          indicator.periods.forEach((period, perIndex) => {
            // and here we loop through the periods and concat their actual
            // data together
            actualItems = actualItems.concat(
              formatTableCardItems(
                period,
                'actuals',
                correctFields(perIndex),
                false,
                `${period.period_start} to ${period.period_end}`,
                'Period',
                perIndex
              )
            );

            // and here we'll loop through period actuals
            // and then push the period actual reocurring elements
            // into the element list and we form that cards name
            // out of the indicator title the period actual years
            // and period actual value, if no value is provided we use qualitive
            if (period.actuals) {
              period.actuals.forEach((actual, actIndex) => {
                const actVal =
                  actual.value !== null ? actual.value : 'Qualitive';

                const actualTitle = `${indTitle} - Actuals for ${period.period_start} to ${period.period_end} - ${actVal}`;
                // pushing dimensions for actual
                elementLists.push({
                  title: `${actualTitle} - Dimensions`,
                  type: 'ExpTableCard',
                  elName: `${actualTitle}${perIndex}${actIndex}dim`,
                  tableCItems: formatTableCardItems(
                    actual,
                    'dimensions',
                    dimensionFields
                  ),
                });

                // pushing document links for actual
                elementLists.push({
                  title: `${actualTitle} - Document Links`,
                  type: 'ExpTableCard',
                  elName: `${actualTitle}${perIndex}${actIndex}docLinks`,
                  tableCItems: formatTableCardItems(
                    actual,
                    'document_links',
                    resDocLinkFields
                  ),
                });
              });
            }
          });

          // and here after all of the loops are done
          // we set the actuals card items to the
          // merged actualItems array
          elementLists[actualIndex].tableCItems = actualItems;
        }
      });
    }
  }
  return elementLists;
}
