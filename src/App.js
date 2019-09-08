import React from 'react';
import { Switch, Route } from 'react-router';
import { HashRouter } from 'react-router-dom';

import './styles/global.css';
import Layout from './layout';

import TopStories from './pages/top-stories';
import Topics from './pages/topics';
import Search from './pages/search';

export default function() {
  return (
    <HashRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={TopStories} />
          <Route exact path="/topics/:topicID" component={Topics} />
          <Route exact path="/topics/:topicID/sections/:sectionID" component={Topics} />
          <Route exact path="/search" component={Search} />
        </Switch>
      </Layout>
    </HashRouter>
  );
}