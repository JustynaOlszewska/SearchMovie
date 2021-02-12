import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Spinner from "./components/modules/spinner/Spinner";

import FetchState from "./context/fetch/FetchState";
import AlertState from "./context/alert/AlertState";

import Search from "./components/pages/Search";

const ListMovie = lazy(() => import("./components/pages/ListMovie"));

const App = () => {

  return (
    <div>
      <Router>
        <FetchState>
          <AlertState>
            <Search />
            <Suspense fallback={<Spinner />}>
              <Switch>
                <Route path="/listMovies" component={ListMovie} />
              </Switch>
            </Suspense>
          </AlertState>
        </FetchState>
      </Router>
    </div>
  );
};

export default App;
