import React, {Component} from 'react';
import {Link} from "react-router-dom"

class SignIn extends Component {
    render() {
        return (
            <div id="large">
                <form className="Form" action="">
                    <div id="sign">Login</div>
                    <div id="email">Email</div>
                    <input id="FormInput" type="email" placeholder="Email"/>
                    <div id="password">Password</div>
                    <input id="FormInput" type="password" placeholder="Password"/>
                    <div className="PassAcc">
                        <Link id="forlink" to="forgot-password">Forgot password?</Link>
                        Don't have an account? <Link id="noAcc" to="registration"> Register.</Link>
                    </div>
                    <input id="FormSubmit" type="submit" value="Submit"/>
                </form>
            </div>
        );
    }
}

export default SignIn;