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
  const { router } = React.useContext(RouterContext);

  React.useEffect(() => {
    router?.addRoute(url).get(() => {});
  }, []);

  return router?.currentRoute?.url[0] === url ? <>{children}</> : null;
}

export default Route;
