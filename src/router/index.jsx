import React from "react";
import {
  Switch,
  Route,
} from "react-router-dom";

import Loadable from 'react-loadable';

const User = Loadable({ loader: () => import('../components/User'), loading: () => <div>chargement</div> });
const Book = Loadable({ loader: () => import('../components/Book'), loading: () => <div>chargement</div> });
const Location = Loadable({ loader: () => import('../components/Location'), loading: () => <div>chargement</div> });

function RouterApp() {
  return (
    <>
      <Switch>
        <Route path="/user">
          <User />
        </Route>
        <Route path="/book">
          <Book />
        </Route>
        <Route path="/location">
          <Location />
        </Route>
      </Switch>
    </>
  );
}

export default RouterApp;
