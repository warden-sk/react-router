/*
 * Copyright 2021 Marek Kobida
 */

import React from 'react';
import RouterContext from './RouterContext';

interface P {
  children: React.ReactNode;
  to: string;
}

function Link({ children, to }: P) {
  const { test } = React.useContext(RouterContext);

  function onClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    event.preventDefault();

    test?.(to);
  }

  return (
    <a href={`#${to}`} onClick={onClick}>
      {children}
    </a>
  );
}

export default Link;
