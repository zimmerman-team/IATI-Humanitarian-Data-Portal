/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import useTitle from 'react-use/lib/useTitle';

import get from 'lodash/get';
import { CCTRILayout } from './layout';
import { signProgStore } from '../../store';

export function CCTRI() {
  useTitle('MLT - CCTRIs Target');
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
