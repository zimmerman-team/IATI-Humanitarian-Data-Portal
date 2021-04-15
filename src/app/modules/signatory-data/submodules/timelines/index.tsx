import React, { useEffect } from 'react';
import { withRouter } from 'react-router';
import { useStoreState } from 'app/state/store/hooks';
import { TimelinesLayout } from 'app/modules/signatory-data/submodules/timelines/layout';

/* store */
import { timeStore } from 'app/modules/signatory-data/submodules/timelines/store';

/* consts */
import {
  firstPubQuery,
  orgFreqQuery,
  timlagQuery,
} from 'app/modules/signatory-data/submodules/timelines/const';

/* utils */
import get from 'lodash/get';
import find from 'lodash/find';
import { formatTimeTable } from 'app/modules/signatory-data/submodules/timelines/utils/formatTimeTable';
import { formatFrequency } from 'app/modules/signatory-data/submodules/timelines/utils/formatFrequencyTable';
import { getTimeLagName } from 'app/modules/signatory-data/submodules/timelines/utils/getTimeLagName';
import { getFrequencyRating } from 'app/modules/signatory-data/submodules/timelines/utils/getFrequencyRating';

function TimelinesF(props) {
  const [state, actions] = timeStore();

  useEffect(() => {
    actions.timeLag.fetch({
      values: timlagQuery(decodeURIComponent(props.match.params.code)),
    });
    actions.frequency.fetch({
      values: orgFreqQuery(decodeURIComponent(props.match.params.code)),
    });
    actions.firstPubDate.fetch({
      values: firstPubQuery(decodeURIComponent(props.match.params.code)),
    });
  }, []);

  const timelagData = get(
    state.timeLag,
    'data.data.facets.monthly_transactions.buckets',
    null
  );

  const orgFrequency = get(state.frequency, 'data.data', null);

  const timeLagTableData = formatTimeTable(timelagData);
  const freqTableData = formatFrequency(orgFrequency);

  const signatory = useStoreState(rstate =>
    find(get(rstate.gbsignatories, 'data', []), {
      // @ts-ignore
      IATIOrgRef: props.match.params.code,
    })
  );
  const signatoryFreqCSV = useStoreState(rstate =>
    find(get(rstate.sigFrequenciesCSV, 'data.data', []), {
      'Publisher Registry Id': get(signatory, 'regPubId', ''),
    })
  );

  return (
    <TimelinesLayout
      freqRating={getFrequencyRating(
        freqTableData,
        get(
          state.firstPubDate,
          'data.data.response.docs[0].dataset_date_created',
          '1900-01-01'
        )
      )}
      timeLagName={getTimeLagName(timeLagTableData)}
      timelagData={timeLagTableData}
      freqData={freqTableData}
      freqDataCSV={signatoryFreqCSV}
    />
  );
}

export const Timelines = withRouter(TimelinesF);
