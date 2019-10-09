import React from 'react';
import { CCTRILayout } from './layout';
import { mockData } from './mock';
import useTitle from 'react-use/lib/useTitle';
import { signatoryDataMock } from 'app/modules/signatory-data/mock';

export function CCTRI() {
  useTitle(`MLT - CCTRI`);

  return <CCTRILayout sections={mockData.sections} title={mockData.title} />;
}
