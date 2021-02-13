import React, { lazy, Suspense } from 'react';
import { Switch, Route, useLocation } from "react-router-dom";

import Spinner from "./components/modules/spinner/Spinner";

import FetchState from "./context/fetch/FetchState";
import AlertState from "./context/alert/AlertState";

import Search from "./components/pages/Search";

const ListMovie = lazy(() => import("./components/pages/ListMovie"));
const ModalDetailsMovie = lazy(() => import('./components/pages/ModalDetailsMovie'));

const App = () => {

  let location = useLocation();
  let background = location.state && location.state.background;

  return (
    <>
      <FetchState>
        <AlertState>
          <Search />
          <Suspense fallback={<Spinner />}>
            <Switch location={background || location}>

              <Route path="/listMovies" component={ListMovie} />
            </Switch >
            {background && <Route path="/movie/:id" children={<ModalDetailsMovie />} />}
          </Suspense>
        </AlertState>
      </FetchState>
    </>
  );
};

export default App;
