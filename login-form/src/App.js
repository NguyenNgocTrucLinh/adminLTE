import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from "./components/Header";
import SideBar from "./components/Sidebar";
import Content from "./components/Content";
import ControlSidebar from "./components/ControlSidebar";
import Footer from "./components/Footer";
import Content2 from './components/Content2'

function App() {
    return (
        <div className="wrapper">
            <BrowserRouter>
                <Header/>
                <SideBar/>
                <Content/>
                <ControlSidebar/>
                <Footer/>
            </BrowserRouter>
        </div>
    );
}

export default App;

