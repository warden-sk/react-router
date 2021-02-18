/*
 * Copyright 2021 Marek Kobida
 */

import React from 'react';
import Route from '@warden-sk/router/Route';
import Router from '@warden-sk/router/Router';

interface C {
  assignCurrentRoute?: (route: this['currentRoute']) => any;
  assignCurrentUrlParameters?: (urlParameters: this['currentUrlParameters']) => any;
  currentRoute?: Route<[]>;
  currentUrlParameters?: Partial<Record<string, string>>;
  router?: Router<[]>;
}

const RouterContext = React.createContext<C>({});

export default RouterContext;
