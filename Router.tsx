/*
 * Copyright 2021 Marek Kobida
 */

import { history, router } from './common';
import React from 'react';
import RouterContext from './RouterContext';

interface P {
  children: React.ReactNode;
}

function Router({ children }: P) {
  const [, update] = React.useState({});

  React.useEffect(() => {
    history.onRoute = () => update({});

    history.pushState();

    window.addEventListener('popstate', () => history.pushState());
  }, []);

  return <RouterContext.Provider value={{ history, router }}>{children}</RouterContext.Provider>;
}

export default Router;
