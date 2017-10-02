import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Layout from './layout';

import App from '../home';
import Question from '../question';

export default function createRoutes() {
  return (
    <Route path="/" component={Layout}>
      <IndexRoute component={App} />
      <Route path="/q" component={Question} />
      <Route path="*" component={App} />
    </Route>
  );
}
