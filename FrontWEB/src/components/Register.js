import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {addUser} from "../actions/addUser";

class Register extends Component {
    constructor() {
        super();
        this.state = {
            username: "",
            email: "",
            password: ""
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    onSubmit(e) {
        e.preventDefault();
        const newUser = {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password
        }
        console.log(newUser);
        this.props.addUser(newUser, this.props.history);
    }

    render() {
        return (
            <div id="large">
                <form className="Form" action="" onSubmit={this.onSubmit}>
                    <div id="sign">Registration</div>
                    <div id="username">Username</div>
                    <input id="FormInput" type="text" name="username" placeholder="Username" value={this.state.username}
                           onChange={this.onChange}/>
                    <div id="email">Email</div>
                    <input id="FormInput" type="email" name="email" placeholder="Email" value={this.state.email}
                           onChange={this.onChange}/>
                    <div id="password">Password</div>
                    <input id="FormInput" type="password" name="password" placeholder="Password"
                           value={this.state.password}
                           onChange={this.onChange}/>
                    <div id="password">Confirm Password</div>
                    <input id="FormInput" type="password" placeholder="Confirm Password"/>
                    <div className="PassAcc">
                        Already have an account? <a id="noAcc" href="/login"> Login.</a>
                    </div>
                    <input id="FormSubmit" type="submit" value="Submit"/>
                </form>
            </div>
        );
    }
}

addUser.PropTypes = {
    addUser: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
}
const mapStateToProps = state => ({
    error: state.errors
})
export default connect(mapStateToProps, {addUser})(Register);