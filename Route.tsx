/*
 * Copyright 2021 Marek Kobida
 */

import React from 'react';
import RouterContext from './RouterContext';
import invariant from '@warden-sk/helpers/invariant';

interface P {
  children: React.ReactNode;
  url: string;
}

function Route({ children, url }: P) {
  const { router } = React.useContext(RouterContext);

  invariant(router, 'The router is not assigned.');

  React.useEffect(() => {
    router.addRoute(url).get(() => {});
  }, []);

  return router.currentRoute?.url[0] === url ? <>{children}</> : null;
}

export default Route;
