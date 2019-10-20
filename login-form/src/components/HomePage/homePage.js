import React, { Component } from "react";
import Header from "../Header";
import SideBar from "../Sidebar";
import ControlSidebar from "../ControlSidebar";
import Footer from "../Footer";
import Content from "../Content";
export default class homePage extends Component {
  render() {
    return (
      <div>
        <Header />
        <SideBar />
        <Content/>
        <ControlSidebar />
        <Footer />
      </div>
    );
  }
}
