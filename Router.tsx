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

router.context = [];

function Router({ children }: P) {
  const [, update] = React.useState();

  function test1(url?: string) {
    if (typeof url === 'undefined') {
      url = location.hash.substring(1) || '/';
    }

    router.test('GET', url);

    update(undefined);
  }

  function test2(url: string) {
    history.pushState(null, '', `#${url}`);

    test1(url);
  }

  React.useEffect(() => {
    test1();

    window.addEventListener('popstate', () => test1());
  }, []);

  return <RouterContext.Provider value={{ router, test: test2 }}>{children}</RouterContext.Provider>;
}

export default Router;
