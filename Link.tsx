/*
 * Copyright 2021 Marek Kobida
 */

import React from 'react';
import RouterContext from './RouterContext';
import invariant from '@warden-sk/helpers/invariant';

interface P {
  children: React.ReactNode;
  url: string;
}

function Link({ children, url }: P) {
  const { history } = React.useContext(RouterContext);

  invariant(history, 'The history is not assigned.');

  const onClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();

    history.pushState(url);
  };

  return (
    <a href={history.createLink(url)} onClick={onClick}>
      {children}
    </a>
  );
}

export default Link;
