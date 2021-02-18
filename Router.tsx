/*
 * Copyright 2021 Marek Kobida
 */

import R from '@warden-sk/router/Router';
import React from 'react';
import RouterContext from './RouterContext';

interface P {
  children: React.ReactNode;
}

const router = new R<[]>();

function test() {
  const url = location.hash.substring(1) || '/';

  router.test('GET', url);
}

function Router({ children }: P) {
  const [currentRoute, assignCurrentRoute] = React.useState<any>();
  const [currentUrlParameters, assignCurrentUrlParameters] = React.useState<any>();

  React.useEffect(() => {
    router.assignContext([]);

    test();

    window.addEventListener('popstate', test);
  }, []);

  return (
    <RouterContext.Provider
      value={{ assignCurrentRoute, assignCurrentUrlParameters, currentRoute, currentUrlParameters, router }}
    >
      {children}
    </RouterContext.Provider>
  );
}

export default Router;
