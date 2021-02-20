/*
 * Copyright 2021 Marek Kobida
 */

import React from 'react';
import RouterContext from './RouterContext';
import invariant from '@warden-sk/helpers/invariant';

function currentUrlParameters(): Partial<Record<string, string>> {
  const { history } = React.useContext(RouterContext);

  invariant(history, 'The history is not assigned.');

  return history.currentUrlParameters();
}

export default currentUrlParameters;
