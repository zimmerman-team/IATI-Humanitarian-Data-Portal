// tslint:disable-next-line: import-name
import React from 'react';
import { SubmoduleHeaderLayout } from 'app/modules/signatory-data/submodules/common/signatory-data-header/layout';
import { SubmoduleHeaderLayoutModel } from 'app/modules/signatory-data/submodules/common/signatory-data-header/model';

export function SubmoduleHeader(props: SubmoduleHeaderLayoutModel) {
  return <SubmoduleHeaderLayout {...props} />;
}
