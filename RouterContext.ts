/*
 * Copyright 2021 Marek Kobida
 */

import React from 'react';
import Router from '@warden-sk/router/Router';

interface C {
  router?: Router<[]>;
  test?: (url: string) => any;
}

const RouterContext = React.createContext<C>({});

export default RouterContext;
