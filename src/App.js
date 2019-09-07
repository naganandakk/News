import React from 'react';
import { Switch, Route } from 'react-router';
import { HashRouter } from 'react-router-dom';

import './styles/global.css';
import Layout from './layout';

import TopStories from './pages/top-stories';
import Topics from './pages/topics';

export default function() {
  return (
    <HashRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={TopStories} />
          <Route exact path="/topics/:topicID" component={Topics} />
        </Switch>
      </Layout>
    </HashRouter>
  );
}