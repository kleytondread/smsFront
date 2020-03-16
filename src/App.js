import React from 'react';
import './App.css';
import { HomePage } from './screens/Home/HomePage';
import { Router, Switch } from 'react-router-dom';
import { createBrowserHistory} from 'history';
const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Switch>
        <div className="app d-flex align-items-center justify-content-center h-100">
          <HomePage/>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
