import React from 'react';
import { connect } from 'react-redux';
import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import { Switch, Route } from 'react-router';
import { HashRouter } from 'react-router-dom';
import Container from '@material-ui/core/Container';

import TopStories from './components/news/TopStories';
import Topics from './components/news/Topics';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

const useStyles = makeStyles(theme => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: 0,
    marginTop: 60
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 240,
    width: `calc(100% - 240px)`,
  },
}));

const AppComponent = (props) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Header />
      <Sidebar />
      <Container fixed className={clsx(classes.content, {
          [classes.contentShift]: props.uiState.sidebarDesktop,
      })}>
        <HashRouter>
          <Switch>
            <Route exact path="/" component={TopStories} />
            <Route exact path="/topics/:topicID" component={Topics} />
          </Switch>
        </HashRouter>
      </Container>
    </React.Fragment>
  );
}

class App extends React.Component {

  render() {
    return (
      <AppComponent
        uiState={this.props.uiState}
      />
    )
  }
}
const mapStateToProps = (state) => {
  return {
    uiState: state.uiState
  }
};

export default connect(
  mapStateToProps,
  null
)(App);