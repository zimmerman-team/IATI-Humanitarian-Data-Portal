import { useEffect } from "react";

// Apparently the default behaviour of react router when clicking a link is to save it's scroll position
// Use this util where you want the page to start on top
// https://github.com/ReactTraining/react-router/blob/master/packages/react-router-dom/docs/guides/scroll-restoration.md
export function ScrollToTop() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}
