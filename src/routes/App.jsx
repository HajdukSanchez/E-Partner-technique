import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Containers
import Home from '../containers/Home';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
    </Router>
  );
};

export default App;
