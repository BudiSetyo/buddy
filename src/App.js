import Login from './pages/login/Index';
import Register from './pages/register/Index';
import ResetPass from './pages/resetPassword/Index';
import ResetPass2 from './pages/resetPassword-2/Index';
import ResetPass3 from './pages/resetPassword-3/Index';
import ResetPass4 from './pages/resetPassword-4/Index';
import Profile from './pages/profile/Index';
import Dashboard from './pages/dashboard/Index';
import ActivityUser from './pages/activityUser/Index';

import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';

import './App.css';

const isAuthenticated = localStorage.getItem('id') && true;

const MustNotBeloggedIn = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      !isAuthenticated ? <Component {...props} /> : <Redirect to="/dashboard" />
    }
  />
);

const LoginRequired = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
    }
  />
);

function App() {
  return (
    <Router>
      <Route exact path="/">
        <Redirect to="/login" />
      </Route>

      <MustNotBeloggedIn exact path="/login" component={Login} />

      <MustNotBeloggedIn exact path="/register" component={Register} />

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

      <LoginRequired path="/dashboard" component={Dashboard} />

      <Route path="/activityUser">
        <ActivityUser />
      </Route>
    </Router>
  );
}

export default App;
