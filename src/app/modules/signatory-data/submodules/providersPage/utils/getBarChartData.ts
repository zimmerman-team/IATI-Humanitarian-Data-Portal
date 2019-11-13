import get from 'lodash/get';
import find from 'lodash/find';
import findIndex from 'lodash/findIndex';
import { HorizontalBarChartCardModel } from 'app/components/surfaces/Cards/HorizontalBarChartCard/model';

interface ValueItem {
  code: string | null;
  name: string;
  value: number;
  percentage: number;
}

// a helper function to get the
// total count from the transaction organisations
// now we need to calculate this on the frontend
// because iati standard is very no standardish
// with its requirements for these transaction
// organisations
function getTotalCount(allProviders): number {
  let providerCount = 0;
  allProviders.forEach(orgTitle => {
    // so if the title value is not null
    // we found an organisation with a title
    // hooray!
    // then we can add the count of
    // all the underlying org refs
    // to the total count of organisations
    // doesn't matter if a ref was specified or not
    // cause #JustIatiDataThings
    if (orgTitle.value) {
      orgTitle.pivot.forEach(orgRef => {
        // AAAAND BECAUSE We have organisations
        // with the same narrative AND with the same ref
        // BUT with different types
        // we will treat those as different organisations
        // and loop through the types as well
        orgRef.pivot.forEach(() => {
          providerCount += 1;
        });
      });
    } else {
      // now if org title value does NOT exist
      // we need to loop through ALL of the
      // existing org refs under the org title
      // and if they exist add their count to the total
      // because #JustIati+SolrThings
      orgTitle.pivot.forEach(orgRef => {
        if (orgRef.value) {
          // AAAAND BECAUSE We have organisations
          // with the same narrative AND with the same ref
          // BUT with different types
          // we will treat those as different organisations
          // and loop through the types as well
          orgRef.pivot.forEach(() => {
            providerCount += 1;
          });
        }
      });
    }
  });
  return providerCount;
}

export const getBarChartData = (
  rawData,
  codelist,
  allProviders,
  title,
  facetKey
): HorizontalBarChartCardModel => {
  const barData: any = {
    title,
    data: {
      values: [],
    },
  };

  if (allProviders && codelist && rawData) {
    const orgData = get(rawData, facetKey);
    const totalCount = getTotalCount(allProviders);
    const values: ValueItem[] = [];
    // now if an organisation doesn't have
    // a title or a ref
    // we need to skip it, cause it doesn't exists
    // so we'll use this variable to skip
    // the REALLY non-existant transaction organisation
    let skip = false;
    // so here we'll loop through transactions titles
    orgData.forEach(org => {
      if (org.value && skip) {
        skip = false;
      } else if (!org.value) {
        skip = true;
      }
      // then here we'll loop through transaction refs
      org.pivot.forEach(orgRef => {
        if (skip && orgRef.value) {
          skip = false;
        }
        if (!skip) {
          // and finally we loop through the transaction types
          // and add them to the appropriate values item
          orgRef.pivot.forEach(orgType => {
            const valIndex = findIndex(values, ['code', orgType.value]);
            if (valIndex === -1) {
              let typeName = find(codelist, ['code', orgType.value]);

              if (typeName) {
                typeName = typeName.name;
              } else {
                typeName = 'Not Provided';
              }

              values.push({
                code: orgType.value,
                name: typeName,
                value: 1,
                percentage: Math.round(100 / totalCount),
              });
            } else {
              const newValue = values[valIndex].value + 1;
              values[valIndex].value = newValue;
              values[valIndex].percentage = Math.round(
                (newValue * 100) / totalCount
              );
            }
          });
        }
      });
    });

    barData.data.values = values;
  }

  return barData;
};
