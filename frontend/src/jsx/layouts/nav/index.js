import React, { Fragment, useState, useContext } from "react";
import SearchContext from "../../../context/SearchContext";
import SideBar from "./SideBar";
import NavHader from "./NavHader";
import Header from "./Header";
import ChatBox from "../ChatBox";
import ProductList from "../../pages/ProductList";
import App from "../../../App";
const JobieNav = ({ title, onClick: ClickToAddEvent, onClick2, onClick3 }) => {
  const [searchItem, setSearchItem] = useState("");
  const [toggle, setToggle] = useState("");
  console.log(searchItem);
  const onClick = (name) => setToggle(toggle === name ? "" : name);
  return (
    <Fragment>
      <NavHader />
      <ChatBox onClick={() => onClick("chatbox")} toggle={toggle} />
      <SearchContext.Provider value={{ searchItem, setSearchItem }}>
        <Header
          onNote={() => onClick("chatbox")}
          onNotification={() => onClick("notification")}
          onProfile={() => onClick("profile")}
          toggle={toggle}
          title={title}
          onBox={() => onClick("box")}
          onClick={() => ClickToAddEvent()}
        />
        <div style={{ visibility: "hidden", width: "0px", height: "0px" }}>
          <ProductList />
        </div>
      </SearchContext.Provider>
      <SideBar />
    </Fragment>
  );
};

export default JobieNav;
