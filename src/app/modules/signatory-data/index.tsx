import React from 'react';
import { signatoryDataMock } from './mock';
import { SignatoryDataLayout } from 'app/modules/signatory-data/layout';
import useTitle from 'react-use/lib/useTitle';
export function SignatoryData() {
  useTitle(`MLT - ${signatoryDataMock.title}`);

  return (
    <SignatoryDataLayout
      title={signatoryDataMock.title}
      description={signatoryDataMock.description}
      signatories={signatoryDataMock.signatories}
    />
  );
}
