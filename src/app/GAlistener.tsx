/* base */
import React from 'react';
import ReactGA from 'react-ga';

/* utils */
import { useHistory } from 'react-router';
import { getCookie } from 'app/utils/generic';

const sendPageView = location => {
  ReactGA.set({ page: location.pathname });
  ReactGA.pageview(location.pathname);
};

const GAListener = ({ children, trackingId }) => {
  const history = useHistory();
  // eslint-disable-next-line consistent-return
  React.useEffect(() => {
    if (
      getCookie('cookieNotice') &&
      window.location.hostname === 'www.humportal.org'
    ) {
      sendPageView(history.location);
      return history.listen(sendPageView);
    }
  }, [history, trackingId]);

  return children;
};

export default GAListener;
