import React from 'react';
import { withRouter } from 'react-router';
import { ResultDetailLayout } from 'app/modules/ResultDetails/layout';

/* mock */

/* store */
import { resStore } from 'app/modules/ResultDetails/store';
import { useStoreState } from 'easy-peasy';

/* consts */
import { ResultQuery } from 'app/modules/ResultDetails/const';

/* utils */
import get from 'lodash/get';
import { getEngText } from 'app/utils/generic';
import { formatResultElements } from 'app/modules/ResultDetails/utils/formatResultElements';

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
      values: ResultQuery(
        decodeURIComponent(props.match.params.code).replace(/:/g, '\\:')
      ),
    });
  }, []);

  const resDetail = get(state.results, 'data.data.response.docs[0]', null);

  const title =
    resDetail &&
    getEngText({ narratives: get(resDetail, 'result_title', []) }, false);
  const description =
    resDetail &&
    getEngText({ narratives: get(resDetail, 'result_title', []) }, false);

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
