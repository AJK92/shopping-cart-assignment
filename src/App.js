import "./App.scss";
import AppHeader from "./component/layout/AppHeader";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { Suspense, lazy } from "react";
import Footer from "./component/layout/Footer";
import Home from "./component/home/Home";
import Product from "./component/product/Product";

const Register = lazy(() => import("./component/register/Register"));
const Login = lazy(() => import("./component/login/Login"));

function App() {
  return (
    <Router>
      <div className="container">
        <AppHeader />
        <Suspense fallback={<div className="loader"></div>}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/product" component={Product} />
          </Switch>
        </Suspense>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
