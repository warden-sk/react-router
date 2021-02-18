/*
 * Copyright 2021 Marek Kobida
 */

import React from 'react';
import RouterContext from './RouterContext';

function currentUrlParameters(): Partial<Record<string, string>> {
  const { router } = React.useContext(RouterContext);

  return router?.currentRoute?.currentUrlParameters || {};
}

export default currentUrlParameters;
