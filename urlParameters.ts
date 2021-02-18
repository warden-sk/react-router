/*
 * Copyright 2021 Marek Kobida
 */

import React from 'react';
import RouterContext from './RouterContext';

function urlParameters(): Partial<Record<string, string>> {
  const { currentUrlParameters } = React.useContext(RouterContext);

  return currentUrlParameters || {};
}

export default urlParameters;
