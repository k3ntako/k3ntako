import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import HomePage from "./pages/Home";

export default (props) => {
  return (
    <Switch>
      <Route key="root" path="/" exact component={HomePage} />
      <Redirect to="/" />
    </Switch>
  );
};
