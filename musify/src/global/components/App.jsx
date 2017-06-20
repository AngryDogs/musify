import React from 'react';
import LandingPage from '../../landingPage';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={LandingPage} />
    </div>
  </Router>
);

export default App;
