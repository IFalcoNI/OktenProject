import React, {Component} from 'react';
import {Link} from "react-router-dom"
class ForgotPassword extends Component {
    render() {
        return (
            <div id="large">
                <form className="Form" action="">
                    <div id="email">Email</div>
                    <input id="FormInput" type="email" placeholder="Email"/>
                    <input id="FormSubmit" type="submit" value="Submit"/>
                </form>
            </div>
        );
    }
}

export default ForgotPassword;