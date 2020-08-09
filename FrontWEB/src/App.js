import React from 'react';
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import {
    BrowserRouter as Router,
} from "react-router-dom";
import RouterComponent from "./components/RouterComponent";
import {Provider} from "react-redux";
import store from "./store/store";

function App() {
    return (
        <Provider store={store}>
            <Router>
                <Header/>
                <RouterComponent/>
                <Footer/>
            </Router>
        </Provider>
    );
}

export default App;
