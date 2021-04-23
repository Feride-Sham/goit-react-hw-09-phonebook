import React, { Suspense, lazy, useEffect } from "react";
import { Switch } from "react-router-dom";
import { useDispatch } from "react-redux";

import { Container } from "./components/Container";
import { PrivateRoute } from "./components/PrivateRoute";
import { PublicRoute } from "./components/PublicRoute";
import AppBar from "./components/AppBar/AppBar";
import routes from "./routes";
import { authOperations } from "./redux/auth";

import "./App.css";

const HomeView = lazy(() =>
  import("./views/HomeView.js" /* webpackChunkName: "home-view" */)
);
const ContactsView = lazy(() =>
  import("./views/ContactsView.js" /* webpackChunkName: "contacts-view" */)
);
const LoginView = lazy(() =>
  import("./views/LoginView.js" /* webpackChunkName: "login-view" */)
);
const RegistrationView = lazy(() =>
  import(
    "./views/RegistrationView.js" /* webpackChunkName: "registration-view" */
  )
);

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);

  return (
    <>
      <div className="App">
        <AppBar />
        <Container>
          <Suspense fallback={<h1>Load..</h1>}>
            <Switch>
              <PublicRoute exact path={routes.home}>
                <HomeView />
              </PublicRoute>
              <PublicRoute
                path={routes.registration}
                restricted
                redirectTo={routes.contacts}
              >
                <RegistrationView />
              </PublicRoute>
              <PublicRoute
                path={routes.login}
                restricted
                redirectTo={routes.contacts}
              >
                <LoginView />
              </PublicRoute>
              <PrivateRoute path={routes.contacts} redirectTo={routes.login}>
                <ContactsView />
              </PrivateRoute>
            </Switch>
          </Suspense>
        </Container>
      </div>
    </>
  );
}
