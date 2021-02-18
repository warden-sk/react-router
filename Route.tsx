/*
 * Copyright 2021 Marek Kobida
 */

import React from 'react';
import RouterContext from './RouterContext';

interface P {
  children: React.ReactNode;
  path: string;
}

function Route({ children, path }: P) {
  const { assignCurrentRoute, assignCurrentUrlParameters, currentRoute, router } = React.useContext(RouterContext);

  React.useEffect(() => {
    const route = router?.addRoute(path);

    route?.get(urlParameters => {
      assignCurrentRoute?.(route);
      assignCurrentUrlParameters?.(urlParameters);
    });
  }, []);

  return currentRoute?.path[0] === path ? <>{children}</> : null;
}

export default Route;
