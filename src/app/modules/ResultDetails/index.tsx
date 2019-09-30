import React from 'react';
import { withRouter } from 'react-router';
import { ResultDetailLayout } from './layout';

/* mock */
import { mockData } from '../activityDetails/mock';

/* store */
import { resStore } from './store';
import { useStoreState } from 'easy-peasy';

/* consts */
import { ResultQuery } from './const';

/* utils */
import get from 'lodash/get';
import { getNarrativeText } from 'app/utils/generic';
import { formatResultElements } from './utils/formatResultElements';

function ResultDetailF(props) {
  const [state, action] = resStore();

  const measCodeName = useStoreState(
    reduxstate => reduxstate.codelists.measCodeName
  );

  const indVocCodeNames = useStoreState(
    reduxstate => reduxstate.codelists.indVocCodeNames
  );

  React.useEffect(() => {
    action.results.fetch({
      values: ResultQuery(decodeURIComponent(props.match.params.code)),
    });
  }, []);

  const resDetail = get(state.results, 'data.data.response.docs[0]', null);

  const title =
    resDetail && getNarrativeText(get(resDetail, 'result_title', []), true);
  const description =
    resDetail &&
    getNarrativeText(get(resDetail, 'result_description', []), true);

  return (
    <ResultDetailLayout
      title={title}
      description={description}
      lists={formatResultElements(
        resDetail,
        get(measCodeName, 'data.data', []),
        get(indVocCodeNames, 'data.data', [])
      )}
    />
  );
}

export const ResultDetail = withRouter(ResultDetailF);
