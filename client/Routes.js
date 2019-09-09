import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import HomePage from "./pages/Home";
import AddProjectPage from "./pages/AddProject";

export default (props) => {
  return <Switch>
    <Route key="root" path="/" exact render={() => <Redirect to="/home"/> }/>
    <Route key="home" path="/home" exact component={HomePage} />
    <Route key="add"  path="/projects/add" exact component={AddProjectPage} />
  </Switch>
}
