import React, {Component} from 'react';
import {
    Switch,
    Route,
} from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Video from "../pages/Video";
import News from "../pages/News";
import Register from "./Register";
import SignIn from "./SignIn";
import ForgotPassword from "./ForgotPassword";


class RouterComponent extends Component {
    render() {
        return (
            <Switch>
                <Route path="/news">
                    <News/>
                </Route>
                <Route path="/about">
                    <About/>
                </Route>
                <Route path="/video">
                    <Video/>
                </Route>
                <Route path="/registration">
                    <Register/>
                </Route>
                <Route path="/login">
                    <SignIn/>
                </Route>
                <Route path="/forgot-password">
                    <ForgotPassword/>
                </Route>
                <Route path="">
                    <Home/>
                </Route>
            </Switch>
        );
    }
}

export default RouterComponent;