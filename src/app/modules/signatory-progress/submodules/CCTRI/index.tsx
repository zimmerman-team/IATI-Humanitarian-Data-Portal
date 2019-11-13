// thirdparty
import React from 'react';
import useTitle from 'react-use/lib/useTitle';
import get from 'lodash/get';
// codebase
import { CCTRILayout } from 'app/modules/signatory-progress/submodules/CCTRI/layout';
import { signProgStore } from 'app/modules/signatory-progress/store';

export function CCTRI() {
  useTitle('IATI Humanitarian Data Portal - CCTRIs Target');
  // todo: look into Error:(11, 10) TS2589: Type instantiation is excessively deep and possibly infinite.
  const [state, actions] = signProgStore();
  React.useEffect(() => {
    actions.cctriCMS.fetch({});
  }, []);
  return (
    <CCTRILayout
      sections={[
        { content: get(state.cctriCMS.data, '[0].summary', '') },
        { content: get(state.cctriCMS.data, '[0].body', '') },
      ]}
      title={get(state.cctriCMS.data, '[0].title', '')}
    />
  );
}
