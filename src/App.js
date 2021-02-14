import React, { lazy, Suspense } from 'react';
import { Switch, Route, useLocation } from "react-router-dom";

import Spinner from "./components/modules/spinner/Spinner";

import FetchState from "./context/fetch/FetchState";
import AlertState from "./context/alert/AlertState";

import { StyledApp} from "./styles/styleComponents/StyledApp";

const ModalDetailsMovie = lazy(() => import('./components/pages/ModalDetailsMovie'));
const Main = lazy(() => import('./components/pages/Main'));

const App = () => {

  let location = useLocation();
  let background = location.state && location.state.background;

  return (
    <StyledApp>
      <FetchState>
        <AlertState>
          <Suspense fallback={<Spinner />}>
            <Switch location={background || location}>
              <Route path="/" component={Main} />
            </Switch >
            {background && <Route path="/movie/:id" children={<ModalDetailsMovie />} />}
          </Suspense>
        </AlertState>
      </FetchState>
    </StyledApp>
  );
};

export default App;
