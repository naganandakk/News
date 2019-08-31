import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

import Header from './components/Header';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      {/* The rest of your application */}
      <Header />
      <Sidebar />
    </React.Fragment>
  );
}

export default App;