/*
 * Copyright 2021 Marek Kobida
 */

import R from '@warden-sk/router/Router';
import React from 'react';
import RouterContext from './RouterContext';

interface P {
  children: React.ReactNode;
}

const router = new R<[]>().assignContext([]);

function Router({ children }: P) {
  const [, update] = React.useState({});

  function test(url?: string) {
    if (typeof url === 'string') {
      history.pushState(null, '', `#${url}`);
    }

    if (typeof url === 'undefined') {
      url = location.hash.substring(1) || '/';
    }

    const is = router.test('GET', url);

    update({});

    return is;
  }

  React.useEffect(() => {
    test();

    window.addEventListener('popstate', () => test());
  }, []);

  return <RouterContext.Provider value={{ router, test }}>{children}</RouterContext.Provider>;
}

export default Router;
