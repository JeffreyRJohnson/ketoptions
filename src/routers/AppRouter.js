import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AddMenuItem from '../components/AddMenuItem';
import DashboardPage from '../components/DashboardPage';
import DeleteMenuItem from '../components/DeleteMenuItem';
import EditMenuItem from '../components/EditMenuItem';
import Header from '../components/Header';
import LandingPage from '../components/LandingPage';
import NotFoundPage from '../components/NotFoundPage';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={LandingPage} exact={true} />
        <Route path="/dashboard" component={DashboardPage} />
        <Route path="/create" component={AddMenuItem} />
        <Route path="/edit/:id" component={EditMenuItem} />
        <Route path="/delete" component={DeleteMenuItem} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
