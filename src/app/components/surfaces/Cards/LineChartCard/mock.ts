import { LineChartCardModel } from './model';

//TODO: refactor to not use values.values
export const mockData: LineChartCardModel = {
  title: 'Data publication aggregated signatory progress',
  values: {
    values: [
      {
        id: 'Signatories publish to IATI',
        data: [
          {
            x: '31 June 2017',
            y: 12,
          },
          {
            x: '31 Dec 2017',
            y: 16,
          },
          {
            x: '31 Apr 2018',
            y: 22,
          },
          {
            x: '31 Dec 2018',
            y: 30,
          },
          {
            x: '31 May 2019',
            y: 35,
          },
        ],
      },
      {
        id: 'Provides granular v2.02 data',
        data: [
          {
            x: '31 June 2017',
            y: 1,
          },
          {
            x: '31 Dec 2017',
            y: 20,
          },
          {
            x: '31 Apr 2018',
            y: 5,
          },
          {
            x: '31 Dec 2018',
            y: 60,
          },
          {
            x: '31 May 2019',
            y: 80,
          },
        ],
      },
      {
        id: 'Publishing hum. activity data',
        data: [
          {
            x: '31 June 2017',
            y: 20,
          },
          {
            x: '31 Dec 2017',
            y: 30,
          },
          {
            x: '31 Apr 2018',
            y: 40,
          },
          {
            x: '31 Dec 2018',
            y: 50,
          },
          {
            x: '31 May 2019',
            y: 60,
          },
        ],
      },
    ],
  },
};
