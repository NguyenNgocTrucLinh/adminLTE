import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from "./components/Header";
import SideBar from "./components/Sidebar";
import Content from "./components/Content";
import ControlSidebar from "./components/ControlSidebar";
import Footer from "./components/Footer";
import Content2 from './components/Content2'
import HomePage from './components/HomePage/homePage'
import Login from './components/Examples/login'
import { BrowserRouter as Router, Route} from "react-router-dom";
import Register from './components/Examples/register';
function App() {
    return (
        <div className="app">
           <Router>
           <Route path="/" exact component={HomePage}/>
           <Route path="/login" component={Login}/>
           <Route path="/register" component={Register}/>
           </Router>
        </div>
    );
}

export default App;

