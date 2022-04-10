import React, { useContext } from "react";

/// React router dom
import { Switch, Route } from "react-router-dom";

/// Css
import "./index.css";
import "./chart.css";
import "./step.css";

/// Layout
import Nav from "./layouts/nav";
import Footer from "./layouts/Footer";
/// Dashboard
import Home from "./components/Dashboard/Home";
import UiCards from "./components/bootstrap/Cards";
import ProductDetail from "./pages/ProductDetail";

/// Pages
import Error404 from "./pages/Error404";
import { lazy, Suspense, useEffect } from "react";
import Setting from "./layouts/Setting";
import { ThemeContext } from "../context/ThemeContext";
import EventSidebar from "./layouts/EventSidebar";
import { Row, Card, Col, Button } from "react-bootstrap";
const Todo = lazy(() => import("./pages/Todo"));
// console.log(Todo);
const Markup = (props) => {
  const { menuToggle } = useContext(ThemeContext);
  const routes = [
    /// Dashboard
    { url: "", component: Home },
    { url: "blank", component: Home },
    { url: "todo", component: Todo },

    /// pages

    { url: "page-error-404", component: Error404 },
  ];
  let path = window.location.pathname;
  path = path.split("/");
  path = path[path.length - 1];

  let pagePath = path.split("-").includes("page");
  return (
    <>
      <div
        id={`${!pagePath ? "main-wrapper" : ""}`}
        className={`${!pagePath ? "show" : "mh100vh"}  ${
          menuToggle ? "menu-toggle" : ""
        }`}
      >
        {!pagePath && <Nav />}

        <div className={`${!pagePath ? "content-body" : ""}`}>
          <div
            className={`${!pagePath ? "container-fluid" : ""}`}
            style={{ minHeight: window.screen.height - 60 }}
          >
            {props.route}
            {props.route2}
          </div>
        </div>
        {!pagePath && <Footer />}
      </div>
      <Setting />
    </>
  );
};

export default Markup;
