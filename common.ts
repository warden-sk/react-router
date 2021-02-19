/*
 * Copyright 2021 Marek Kobida
 */

import History from './History';
import Router from '@warden-sk/router/Router';

export const router = new Router();

export const history = new History(router);
