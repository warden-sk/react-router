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
  const { history, router } = React.useContext(RouterContext);

  invariant(history, 'The history is not assigned.');
  invariant(router, 'The router is not assigned.');

  React.useEffect(() => {
    router.addRoute(url).get(() => {});
  }, []);

  return history.currentRoute?.url[0] === url ? <>{children}</> : null;
}

export default Route;
