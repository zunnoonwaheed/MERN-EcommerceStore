import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import AdminPanel from './pages/AdminPanel';

function AdminApp() {
  return (
    <Router>
      <Switch>
        <Route path="/admin" component={AdminPanel} />
        <Redirect from="/" to="/admin" />
      </Switch>
    </Router>
  );
}

export default AdminApp;

