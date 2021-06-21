import React from 'react';
import {
  BrowserRouter as Router, Switch, Route,
} from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import Home from '../pages/Home/Home';

// Custom Theme
import customTheme from '../../utils/customTheme';

import './App.scss';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={customTheme}>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
