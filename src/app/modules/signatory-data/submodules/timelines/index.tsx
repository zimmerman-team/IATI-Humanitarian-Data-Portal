import React, { useEffect } from 'react';
import { withRouter } from 'react-router';
import { TimelinesLayout } from 'app/modules/signatory-data/submodules/timelines/layout';

/* store */
import { timeStore } from 'app/modules/signatory-data/submodules/timelines/store';

/* consts */
import {
  orgFreqQuery,
  timlagQuery,
} from 'app/modules/signatory-data/submodules/timelines/const';

/* utils */
import get from 'lodash/get';
import { formatTimeTable } from 'app/modules/signatory-data/submodules/timelines/utils/formatTimeTable';
import { formatFrequency } from 'app/modules/signatory-data/submodules/timelines/utils/formatFrequencyTable';

function TimelinesF(props) {
  const [state, actions] = timeStore();

  useEffect(() => {
    actions.timeLag.fetch({
      values: timlagQuery(decodeURIComponent(props.match.params.code)),
    });
    actions.frequency.fetch({
      values: orgFreqQuery(decodeURIComponent(props.match.params.code)),
    });
  }, []);

  const timelagData = get(
    state.timeLag,
    'data.data.facets.monthly_transactions.buckets',
    null
  );

  const orgFrequency = get(state.frequency, 'data.data', null);

  return (
    <TimelinesLayout
      timelagData={formatTimeTable(timelagData)}
      freqData={formatFrequency(orgFrequency)}
    />
  );
}

export const Timelines = withRouter(TimelinesF);
