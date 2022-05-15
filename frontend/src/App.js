import { lazy, Suspense, useEffect, useContext, useState } from "react";
import UiCards from "./jsx/components/bootstrap/Cards";
import { Row, Card, Col, Button, Nav } from "react-bootstrap";
import useAlan from "./jsx/hooks/useAlan";
// import Chat from "./jsx/components/chatBox/Chat";

/// Components
import Navb from "./jsx/layouts/nav";
import Footer from "./jsx/layouts/Footer";
import ProductDetail from "./jsx/pages/ProductDetail";
import SearchContext from "./context/SearchContext";
import SubcategoryDetail from "./jsx/pages/SubcategoryDetail";
import ProductList from "./jsx/pages/ProductList";
import Profile from "./jsx/pages/Profile";
import SubCategoryList from "./jsx/pages/SubCategoryList";
import CreateProduct from "./jsx/pages/CreateProduct";
import CategoryList from "./jsx/pages/CategoryList";
import CreateSubcategory from "./jsx/pages/CreateSubcategory";
import CreateCategory from "./jsx/pages/CreateCategory";
import EventSidebar from "./jsx/layouts/EventSidebar";
import { ThemeContext } from "../src/context/ThemeContext";
import ProductContext from "./context/ProductContext";
import Editable from "./jsx/pages/Editable";
import { connect, useDispatch } from "react-redux";
import { Route, Switch, withRouter } from "react-router-dom";
import Calendar from "./jsx/pages/Calendar";

import Index from "./jsx";
import DataTable from "./jsx/pages/DataTable";
// action
import { checkAutoLogin } from "./services/AuthService";
import { isAuthenticated } from "./store/selectors/AuthSelectors";
/// Style
import "./vendor/bootstrap-select/dist/css/bootstrap-select.min.css";
import "./css/style.css";

const SignUp = lazy(() => import("./jsx/pages/Registration"));
const ForgotPassword = lazy(() => import("./jsx/pages/ForgotPassword"));

const Login = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("./jsx/pages/Login")), 500);
  });
});

function App(props) {
  const { menuToggle } = useContext(ThemeContext);
  const dispatch = useDispatch();
  useEffect(() => {
    checkAutoLogin(dispatch, props.history);
  }, [dispatch, props.history]);

  let routes = (
    <Switch>
      <Route path="/login" component={Login} />

      <Route path="/page-register" component={SignUp} />
      <Route path="/page-forgot-password" component={ForgotPassword} />
    </Switch>
  );

  let routesb = (
    <Switch>
      <Route path="/dashboard">
        <Index
          route={<UiCards />}
          route2={<EventSidebar />}
          route3={<Editable />}
        />
      </Route>
      <Route path="/app-profile">
        <Index route={<Profile />} />
      </Route>

      <Route path="/ecom-product-detail/:id">
        <Index route={<ProductDetail />} />
      </Route>

      <Route path="/CreateProduct">
        <Index route={<CreateProduct />} />
      </Route>
      <Route path="/CreateCategory">
        <Index route={<CreateCategory />} />
      </Route>
      <Route path="/CreateSubcategory">
        <Index route={<CreateSubcategory />} />
      </Route>
      <Route path="/ecom-subcategories">
        <Index route={<SubCategoryList />} />
      </Route>

      <Route path="/SubCategoryDetail">
        <Index route={<SubcategoryDetail />} />
      </Route>

      <Route path="/ecom-customers">
        <Index route={<DataTable />} />
      </Route>

      <Route path="/ecom-product-list">
        <Index route={<ProductList />} />
      </Route>
      <Route path="/ecom-categories">
        <Index route={<CategoryList />} />
      </Route>
    </Switch>
  );

  if (props.isAuthenticated) {
    return (
      <>
        <Suspense
          fallback={
            <div id="preloader">
              <div className="sk-three-bounce">
                <div className="sk-child sk-bounce1"></div>
                <div className="sk-child sk-bounce2"></div>
                <div className="sk-child sk-bounce3"> </div>
              </div>
            </div>
          }
        >
          {routesb}
        </Suspense>
      </>
    );
  } else {
    return (
      <div className="vh-100">
        <Suspense
          fallback={
            <div id="preloader">
              <div className="sk-three-bounce">
                <div className="sk-child sk-bounce1 9"></div>
                <div className="sk-child sk-bounce2 2"></div>
                <div className="sk-child sk-bounce3 2"></div>
              </div>
            </div>
          }
        >
          {routes}
        </Suspense>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: isAuthenticated(state),
  };
};

export default withRouter(connect(mapStateToProps)(App));
