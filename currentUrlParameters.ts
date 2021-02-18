/*
 * Copyright 2021 Marek Kobida
 */

import React from 'react';
import RouterContext from './RouterContext';
import invariant from '@warden-sk/helpers/invariant';

function currentUrlParameters(): Partial<Record<string, string>> {
  const { router } = React.useContext(RouterContext);

  invariant(router, 'The router is not assigned.');

  return router.currentRoute?.currentUrlParameters || {};
}

export default currentUrlParameters;
