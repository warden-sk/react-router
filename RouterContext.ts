/*
 * Copyright 2021 Marek Kobida
 */

import History from './History';
import React from 'react';
import Router from '@warden-sk/router/Router';

interface Context {
  history?: History;
  router?: Router;
}

const RouterContext = React.createContext<Context>({});

export default RouterContext;
