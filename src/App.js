import "./App.scss";
import AppHeader from "./component/layout/AppHeader";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { Suspense, lazy } from "react";
import Footer from "./component/layout/Footer";
import { Provider } from "react-redux";
import store from "./redux/store";
const Register = lazy(() => import("./component/register/Register"));
const Login = lazy(() => import("./component/login/Login"));
const Home = lazy(() => import("./component/home/Home"));
const Product = lazy(() => import("./component/product/Product"));

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="container">
          <AppHeader />
          <Suspense fallback={<div className="loader-wrapper"><div className="loader"></div></div>}>
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
    </Provider>
  );
}

export default App;
