/*
 * Copyright 2021 Marek Kobida
 */

import Route from '@warden-sk/router/Route';
import Router from '@warden-sk/router/Router';

class History {
  currentRoute?: Route;

  onRoute?: () => any;

  #router: Router;

  constructor(router: Router) {
    this.#router = router;
  }

  createLink(url: string): string {
    return `#${url}`;
  }

  currentUrl(): string {
    return location.hash.substring(1) || '/';
  }

  currentUrlParameters(): Partial<Record<string, string>> {
    return this.currentRoute?.readUrlParameters(this.currentUrl()) || {};
  }

  pushState(url?: string): this {
    if (url) {
      history.pushState(null, '', this.createLink(url));
    } else {
      url = this.currentUrl();
    }

    this.currentRoute = this.#router.test('GET', url);

    this.onRoute?.();

    return this;
  }
}

export default History;
