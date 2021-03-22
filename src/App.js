import Login from './pages/login/Index';
import Register from './pages/register/Index';
import ResetPass from './pages/resetPassword/Index';
import ResetPass2 from './pages/resetPassword-2/Index';
import ResetPass3 from './pages/resetPassword-3/Index';
import ResetPass4 from './pages/resetPassword-4/Index';
import Profile from './pages/profile/Index';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.css';

function App() {
  return (
    <Router>
      <Switch>

        <Route exact path="/">
          <Login />
        </Route>

        <Route path="/register">
          <Register />
        </Route>

        <Route path="/resetPassword">
          <ResetPass />
        </Route>

        <Route path="/resetPassword2">
          <ResetPass2 />
        </Route>

        <Route path="/resetPassword3">
          <ResetPass3 />
        </Route>

        <Route path="/resetPassword4">
          <ResetPass4 />
        </Route>

        <Route path="/profile">
          <Profile />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
