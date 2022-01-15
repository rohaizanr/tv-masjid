import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Main from './Display/Main';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/">
          <Main />
        </Route>
      </Routes>
    </Router>
  );
}

ReactDOM.render(<Main />, document.getElementById('root'));
