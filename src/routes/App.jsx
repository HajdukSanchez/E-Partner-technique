import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// Styles
import '../styles/App.scss';

// Containers
import Home from '../containers/Home';
// Components
import Layout from '../components/Layout';

const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path='/' component={Home} />
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;
