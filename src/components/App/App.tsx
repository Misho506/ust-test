import React from 'react';
import {
  BrowserRouter as Router, Switch, Route,
} from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import { ToastContainer } from 'react-toastify';
import Home from '../pages/Home/Home';

// Custom Theme
import customTheme from '../../utils/customTheme';
import 'react-toastify/dist/ReactToastify.css';

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
        <ToastContainer />
      </ThemeProvider>
    </div>
  );
}

export default App;
