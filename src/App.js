import "./App.scss";
import AppHeader from "./component/layout/AppHeader";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { Suspense, lazy } from "react";
import Footer from "./component/layout/Footer";

const Register = lazy(() => import("./component/register/Register"));

function App() {
  return (
    <Router>
      <div className="container">
        <AppHeader />
        <Suspense fallback={<div className="loader"></div>}>
          <Switch>
            <Route exact path="/Register" component={Register} />
          </Switch>
        </Suspense>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
