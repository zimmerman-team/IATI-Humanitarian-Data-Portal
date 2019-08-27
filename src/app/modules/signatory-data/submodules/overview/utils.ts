/* eslint-disable no-restricted-globals */
import get from 'lodash/get';
import find from 'lodash/find';
import sortBy from 'lodash/sortBy';
import {
  YearBarChartObjectModel,
  HumanitarianDonutModel,
} from 'app/modules/signatory-data/submodules/overview/model';
import {
  ListItemModel,
  ListModel,
} from 'app/components/datadisplay/Lists/model';

const dateFormat = date => {
  const months = [
    'JAN',
    'FEB',
    'MAR',
    'APR',
    'MAY',
    'JUN',
    'JUL',
    'AUG',
    'SEP',
    'OCT',
    'NOV',
    'DEC',
  ];
  const currentDatetime = new Date(date);
  const formattedDate = `${currentDatetime.getDate()}-${
    months[currentDatetime.getMonth()]
  }-${currentDatetime.getFullYear()}`;
  return formattedDate;
};

export const getYearBarChartData = (
  rawData,
  years
): YearBarChartObjectModel[] => {
  const yearValues: YearBarChartObjectModel[] = [];
  if (rawData.length > 0) {
    years.forEach(y => {
      const nonHumActYearKey = find(
        Object.keys(get(find(rawData, { value: '0' }), 'queries', [])),
        key => key.indexOf(y.toString()) > -1
      );
      const nonHumActYearCount = nonHumActYearKey
        ? find(rawData, { value: '0' }).queries[nonHumActYearKey as string]
        : 0;
      const humActYearKey = find(
        Object.keys(get(find(rawData, { value: '1' }), 'queries', [])),
        key => key.indexOf(y.toString()) > -1
      );
      const humActYearCount = humActYearKey
        ? find(rawData, { value: '1' }).queries[humActYearKey as string]
        : 0;
      yearValues.push({
        year: y,
        activities: nonHumActYearCount + humActYearCount,
        activitiesColor: '#d7d8d9',
        humanitarianActivities: humActYearCount,
        humanitarianActivitiesColor: '#5accbf',
      });
    });
  }
  return sortBy(yearValues, 'year');
};

export const getHumanitarianElementsData = (
  rawData,
  humActCount
): HumanitarianDonutModel[] => {
  const donutValues: HumanitarianDonutModel[] = [
    { activity: 'Hum. activities with UN HRP codes', value: 0 },
    { activity: 'Hum. activities with Cluster codes ', value: 0 },
    { activity: 'Hum. activities Glide codes ', value: 0 },
    {
      activity:
        '% of activities with both humanitarian indicator and also a valid humanitarian sector code',
      value: 0,
    },
  ];
  if (rawData) {
    donutValues.forEach((item, index) => {
      const value =
        (get(rawData, `facets.humElData_${index + 1}.count`, 0) * 100) /
        humActCount;
      donutValues[index].value = isNaN(value) ? 0 : Math.round(value);
    });
  }

  return donutValues;
};

export const getStatusData = (rawData): ListItemModel[] => {
  return [
    {
      label: 'Latest version of the IATI standard used',
      tooltip: 'Latest version of the IATI standard used',
      values: [{ version: get(rawData, 'facets.latest_iati_version', '') }],
    },
    {
      label: 'Activities with data errors',
      tooltip: 'Activities with data errors',
      values: [{ version: '' }],
    },
    {
      label: 'Latest update',
      tooltip: 'Latest update',
      values: [
        {
          date: dateFormat(
            get(rawData, 'facets.latest_update', '').slice(0, 10)
          ),
        },
      ],
    },
    {
      label: 'Data first published',
      tooltip: 'Data first published',
      values: [
        {
          date: dateFormat(
            get(rawData, 'facets.data_first_published', '').slice(0, 10)
          ),
        },
      ],
    },
  ];
};

export const getActivitySummaryData = (rawData): ListModel => {
  const humanitarianCount = get(
    find(rawData.yearsData, { value: '1' }),
    'count',
    0
  );
  const allActivitiesCount =
    humanitarianCount +
    get(find(rawData.yearsData, { value: '0' }), 'count', 0);
  return {
    title: 'Activity Summary',
    subtitle: '',
    items: [
      {
        label: 'All activities',
        tooltip: 'All activities',
        values: [
          {
            qtc: undefined,
            ptc: allActivitiesCount,
          },
        ],
      },
      {
        label: 'Humanitarian activities',
        values: [
          {
            qtc: `${Math.round(
              (humanitarianCount * 100) / allActivitiesCount
            )}%`,
            ptc: humanitarianCount,
          },
        ],
      },
      {
        label: 'Current humanitarian activities',
        values: [
          {
            qtc: `${Math.round(
              (get(rawData.currentHumActData, 'facets.currentHumValuesData.count', 0) * 100) /
                allActivitiesCount
            )}%`,
            ptc: get(rawData.currentHumActData, 'facets.currentHumValuesData.count', 0),
          },
        ],
      },
    ],
  };
};

export const getHumActFTSData = (rawData): ListModel => {
  const allActCount = get(rawData, 'facets.count', 0) || 1;
  const itemCounts = [
    get(rawData, 'facets.humActFTSData_1.count', 0),
    get(rawData, 'facets.humActFTSData_2.count', 0),
    get(rawData, 'facets.humActFTSData_3.count', 0),
    get(rawData, 'facets.humActFTSData_4.count', 0),
    get(rawData, 'facets.humActFTSData_5.count', 0),
    get(rawData, 'facets.humActFTSData_6.count', 0),
  ];
  return {
    title: 'Hum. activities with FTS Import related',
    subtitle: 'Activities with humanitarian OECD DAC sector code(s)',
    items: [
      {
        label:
          'Activities with humanitarian OECD DAC sector code 700 or 70000 range',
        tooltip:
          'Activities with humanitarian OECD DAC sector code 700 or 70000 range',
        values: [
          {
            qtc: `${Math.round((itemCounts[0] * 100) / allActCount)}%`,
            ptc: itemCounts[0],
          },
        ],
      },
      {
        label: 'With humanitarian indicator',
        tooltip: 'With humanitarian indicator',
        values: [
          {
            qtc: `${Math.round((itemCounts[1] * 100) / allActCount)}%`,
            ptc: itemCounts[1],
          },
        ],
      },
      {
        label: 'With UN Humanitarian Response Plan(s)',
        tooltip: 'With UN Humanitarian Response Plan(s)',
        values: [
          {
            qtc: `${Math.round((itemCounts[2] * 100) / allActCount)}%`,
            ptc: itemCounts[2],
          },
        ],
      },
      {
        label: 'With GLIDE code(s)',
        tooltip: 'With GLIDE code(s)',
        values: [
          {
            qtc: `${Math.round((itemCounts[3] * 100) / allActCount)}%`,
            ptc: itemCounts[3],
          },
        ],
      },
      {
        label:
          "With organisation's own internal crisis codes(ie using vocab '99')",
        tooltip:
          "With organisation's own internal crisis codes(ie using vocab '99')",
        values: [
          {
            qtc: `${Math.round((itemCounts[4] * 100) / allActCount)}%`,
            ptc: itemCounts[4],
          },
        ],
      },
      {
        label: 'With clusters',
        tooltip: 'With clusters',
        values: [
          {
            qtc: `${Math.round((itemCounts[5] * 100) / allActCount)}%`,
            ptc: itemCounts[5],
          },
        ],
      },
    ],
  };
};

export const getHumActwGBClassificationsData = (rawData): ListModel => {
  const allActCount = get(rawData, 'facets.count', 0) || 1;
  const itemCounts = [
    get(rawData, 'facets.humActwGBClassificationsData_1.count', 0),
    get(rawData, 'facets.humActwGBClassificationsData_2.count', 0),
    get(rawData, 'facets.humActwGBClassificationsData_3.count', 0),
    get(rawData, 'facets.humActwGBClassificationsData_4.count', 0),
  ];
  return {
    title: 'Hum. activity with Grand Bargain classifications',
    subtitle: 'Activities with humanitarian OECD DAC sector code(s)',
    items: [
      {
        label: 'Earmarked for Grand Bargain (Categories)',
        tooltip: 'Earmarked for Grand Bargain (Categories)',
        values: [
          {
            qtc: `${Math.round((itemCounts[0] * 100) / allActCount)}%`,
            ptc: itemCounts[0],
          },
        ],
      },
      {
        label: 'Earmarked for Grand Bargain (Modalities)',
        tooltip: 'Earmarked for Grand Bargain (Modalities)',
        values: [
          {
            qtc: `${Math.round((itemCounts[1] * 100) / allActCount)}%`,
            ptc: itemCounts[1],
          },
        ],
      },
      {
        label: 'Where a Partner Country Based NGO is referenced',
        tooltip: 'Where a Partner Country Based NGO is referenced',
        values: [
          {
            qtc: `${Math.round((itemCounts[2] * 100) / allActCount)}%`,
            ptc: itemCounts[2],
          },
        ],
      },
      {
        label: 'Cash transfer (Not yet available in IATI Standard)',
        tooltip: 'Cash transfer (Not yet available in IATI Standard)',
        values: [{ qtc: 'TBD', ptc: 'TBD' }],
      },
    ],
  };
};

export const getHumOtherClassOfInterestData = (rawData): ListModel => {
  const allActCount = get(rawData, 'facets.count', 0) || 1;
  const itemCounts = [
    get(rawData, 'facets.humOtherClassOfInterestData_1.count', 0),
    get(rawData, 'facets.humOtherClassOfInterestData_2.count', 0),
    get(rawData, 'facets.humOtherClassOfInterestData_3.count', 0),
    get(rawData, 'facets.humOtherClassOfInterestData_4.count', 0),
  ];
  return {
    title: 'Hum. other classifications of intererest',
    items: [
      {
        label: 'OECD DAC sector codes',
        tooltip: 'OECD DAC sector codes',
        values: [
          {
            qtc: `${Math.round((itemCounts[0] * 100) / allActCount)}%`,
            ptc: itemCounts[0],
          },
        ],
      },
      {
        label: 'OECD DAC aid types',
        tooltip: 'OECD DAC aid types',
        values: [
          {
            qtc: `${Math.round((itemCounts[1] * 100) / allActCount)}%`,
            ptc: itemCounts[1],
          },
        ],
      },
      {
        label: 'Sustainable Development Goals (SDGs)',
        tooltip: 'Sustainable Development Goals (SDGs)',
        values: [
          {
            qtc: `${Math.round((itemCounts[2] * 100) / allActCount)}%`,
            ptc: itemCounts[2],
          },
        ],
      },
      {
        label: 'OECD DAC gender marker',
        tooltip: 'OECD DAC gender marker',
        values: [
          {
            qtc: `${Math.round((itemCounts[3] * 100) / allActCount)}%`,
            ptc: itemCounts[3],
          },
        ],
      },
    ],
  };
};
export const getHumResultsData = (rawData): ListModel => {
  const allActCount = get(rawData, 'facets.count', 0) || 1;
  const itemCounts = [
    get(rawData, 'facets.humResultsData_1.count', 0),
    get(rawData, 'facets.humResultsData_2.count', 0),
    get(rawData, 'facets.humResultsData_3.count', 0),
    get(rawData, 'facets.humResultsData_4.count', 0),
  ];
  return {
    title: 'Humanitarian results',
    items: [
      {
        label: 'Activities with results',
        tooltip: 'Activities with results',
        values: [
          {
            qtc: `${Math.round((itemCounts[0] * 100) / allActCount)}%`,
            ptc: itemCounts[0],
          },
        ],
      },
      {
        label: 'With results documents links',
        tooltip: 'With results documents links',
        values: [
          {
            qtc: `${Math.round((itemCounts[1] * 100) / allActCount)}%`,
            ptc: itemCounts[1],
          },
        ],
      },
      {
        label: 'With result indicators with baseline and target values',
        tooltip: 'With result indicators with baseline and target values',
        values: [
          {
            qtc: `${Math.round((itemCounts[2] * 100) / allActCount)}%`,
            ptc: itemCounts[2],
          },
        ],
      },
      {
        label: 'With result indicator documents links',
        tooltip: 'With result indicator documents links',
        values: [
          {
            qtc: `${Math.round((itemCounts[3] * 100) / allActCount)}%`,
            ptc: itemCounts[3],
          },
        ],
      },
    ],
  };
};

export const getHumActWLocationInfoData = (rawData): ListModel => {
  const allActCount = get(rawData, 'facets.count', 0) || 1;
  const itemCounts = [
    get(rawData, 'facets.humActWLocationInfoData_1.count', 0),
    get(rawData, 'facets.humActWLocationInfoData_2.count', 0),
    get(rawData, 'facets.humActWLocationInfoData_3.count', 0),
    get(rawData, 'facets.humActWLocationInfoData_4.count', 0),
  ];
  return {
    title: 'Hum. activites with location information',
    items: [
      {
        label: 'Activities with recipient countries',
        tooltip: 'Activities with recipient countries',
        values: [
          {
            qtc: `${Math.round((itemCounts[0] * 100) / allActCount)}%`,
            ptc: itemCounts[0],
          },
        ],
      },
      {
        label: 'With latitude / longitude coordinates',
        tooltip: 'With latitude / longitude coordinates',
        values: [
          {
            qtc: `${Math.round((itemCounts[1] * 100) / allActCount)}%`,
            ptc: itemCounts[1],
          },
        ],
      },
      {
        label:
          'Describing location according to a recognised geo-location gazetteer',
        tooltip:
          'Describing location according to a recognised geo-location gazetteer',
        values: [
          {
            qtc: `${Math.round((itemCounts[2] * 100) / allActCount)}%`,
            ptc: itemCounts[2],
          },
        ],
      },
      {
        label: 'Using any other type of sub-national location data',
        tooltip: 'Using any other type of sub-national location data',
        values: [
          {
            qtc: `${Math.round((itemCounts[3] * 100) / allActCount)}%`,
            ptc: itemCounts[3],
          },
        ],
      },
    ],
  };
};

export const getHumActWMultiYearFundingData = (rawData): ListModel => {
  const allActCount = get(rawData, 'facets.count', 0) || 1;
  const itemCounts = [
    get(rawData, 'facets.humActWMultiYearFundData_1.count', 0),
    get(rawData, 'facets.humActWMultiYearFundData_2.count', 0),
    get(rawData, 'facets.humActWMultiYearFundData_3.count', 0),
  ];
  return {
    title: 'Hum. activites with multi-year funding',
    items: [
      {
        label: 'Current hum. activities with duration > 24 months',
        tooltip: 'Current hum. activities with duration > 24 months',
        values: [
          {
            qtc: `${Math.round((itemCounts[0] * 100) / allActCount)}%`,
            ptc: itemCounts[0],
          },
        ],
      },
      {
        label: 'Current Hum. Activities > 24 months with budget exempt',
        tooltip: 'Current Hum. Activities > 24 months with budget exempt',
        values: [
          {
            qtc: `${Math.round((itemCounts[1] * 100) / allActCount)}%`,
            ptc: itemCounts[1],
          },
        ],
      },
      {
        label:
          "Current hum. activities > 24 months & budgets for > 'next' 12 months",
        tooltip:
          "Current hum. activities > 24 months & budgets for > 'next' 12 months",
        values: [
          {
            qtc: `${Math.round((itemCounts[2] * 100) / allActCount)}%`,
            ptc: itemCounts[2],
          },
        ],
      },
    ],
  };
};
export const getFinancialReportingData = (rawData): ListModel => {
  // const allActCount = get(rawData, 'facets.count', 0) || 1;
  const itemCounts = [
    get(rawData, 'facets.currency.buckets[0].val', ''),
    // get(rawData, 'facets.financialReportData_1.count', 0),
    // get(rawData, 'facets.financialReportData_2.count', 0),
    // get(rawData, 'facets.financialReportData_3.count', 0),
    // get(rawData, 'facets.financialReportData_4.count', 0),
  ];
  return {
    title: 'Financial reporting',
    items: [
      {
        label: 'Default currency',
        tooltip: 'Default currency',
        values: [
          {
            qtc: '',
            ptc: itemCounts[0],
          },
        ],
      },
      {
        label: 'Reports to UN OCHA Financial Tracking Service (FTS)',
        tooltip: 'Reports to UN OCHA Financial Tracking Service (FTS)',
        values: [
          {
            qtc: '',
            ptc: 'TBD',
          },
        ],
      },
      {
        label: 'Reports to UN OCHA For FTS via IATI',
        tooltip: 'Reports to UN OCHA For FTS via IATI',
        values: [
          {
            qtc: '',
            ptc: 'TBD',
          },
        ],
      },
      {
        label: 'Reports to European Union (EDRIS)',
        tooltip: 'Reports to European Union (EDRIS)',
        values: [
          {
            qtc: '',
            ptc: 'TBD',
          },
        ],
      },
      {
        label: 'Coverage for [2019]',
        tooltip: 'Coverage for [2019]',
        values: [
          {
            qtc: '',
            ptc: 'TBD',
          },
        ],
      },
    ],
  };
};
