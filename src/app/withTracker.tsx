import React, { useEffect } from 'react';
import ReactGA from 'react-ga';

/* utils */
import { getCookie } from 'app/utils/generic';

export const withTracker = (WrappedComponent, props = {}) => {
  const trackPage = page => {
    if (
      getCookie('cookieNotice') &&
      window.location.hostname === 'www.humportal.org'
    ) {
      ReactGA.set({
        page,
      });
      ReactGA.pageview(page);
    }
  };

  const HOC = hocProps => {
    useEffect(() => trackPage(hocProps.location.pathname), [
      hocProps.location.pathname,
    ]);

    return <WrappedComponent {...hocProps} {...props} />;
  };

  return HOC;
};
