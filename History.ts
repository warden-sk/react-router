/*
 * Copyright 2021 Marek Kobida
 */

import Router from '@warden-sk/router/Router';

class History {
  onRoute?: () => any;

  #router: Router;

  constructor(router: Router) {
    this.#router = router;
  }

  link(to: string): string {
    return `#${to}`;
  }

  route(to?: string): this {
    if (to) {
      history.pushState(null, '', `#${to}`);
    } else {
      to = location.hash.substring(1) || '/';
    }

    this.#router.test('GET', to);

    this.onRoute?.();

    return this;
  }
}

export default History;
