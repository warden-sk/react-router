/*
 * Copyright 2021 Marek Kobida
 */

import React from 'react';
import RouterContext from './RouterContext';

interface P {
  children: React.ReactNode;
  url: string;
}

function Route({ children, url }: P) {
  const { assignCurrentRoute, assignCurrentUrlParameters, currentRoute, router } = React.useContext(RouterContext);

  React.useEffect(() => {
    const route = router?.addRoute(url);

    route?.get(urlParameters => {
      assignCurrentRoute?.(route);
      assignCurrentUrlParameters?.(urlParameters);
    });
  }, []);

  return currentRoute?.url[0] === url ? <>{children}</> : null;
}

export default Route;
