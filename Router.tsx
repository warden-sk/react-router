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

    history.route();

    window.addEventListener('popstate', () => history.route());
  }, []);

  return <RouterContext.Provider value={{ history, router }}>{children}</RouterContext.Provider>;
}

export default Router;
