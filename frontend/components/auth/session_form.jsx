import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import PermNavContainer from '../permanent_nav/perm_nav_container';

export default class SessionForm extends Component{
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemoLogin = this.handleDemoLogin.bind(this);

    }
    componentDidUpdate(e) {
        
        if (this.props.location.pathname !== e.location.pathname) {

            this.props.clearErrors();
        }
    }
    handleSubmit(e) {
        e.preventDefault();
        // console.log(this.props)
        const user = Object.assign({}, this.state);
        const whatev = this.props.processForm;
        whatev.login ? whatev.login(user)
        .then(() => 
        this.props.history.push('/feed'), errors => this.props.receiveSessionErrors(errors.responseJSON)) : 
        whatev.signup(user)
        .then(() => 
        this.props.history.push('/feed'), errors => this.props.receiveSessionErrors(errors.responseJSON) );
    }

    onChange(type) {
        return (e) => {
            this.setState({
                [type]: e.target.value
            });
        };
    }
    handleDemoLogin(e) {
        e.preventDefault();
        const user = {username: 'helloworld', password: 'factorized'};
        this.props.demoLogin(user).then(() => this.props.history.push('/feed'));
    }
    render() {
        return this.props.formType === "login" ? (
            <>
            <PermNavContainer />
            <form onSubmit={this.handleSubmit} className="form-container">
                <h2>Join 500.5px</h2>
                <p>Share your photos, get inspired, and grow your skills.</p>
                <ul className="li-wo-bullets">


                <p className="form-label">Username</p>
                <li className="form-components">
                <input type="text" onChange={this.onChange("username")} name="" id="" className="form-input"/>
                </li>


                <p className="form-label">Password</p>
                <li className="form-components">
                <input type="password" onChange={this.onChange("password")} name="" id="" className="form-input"/>
                </li>

                <li className="button-log-submit">

                    <input  type="submit" value="sign in" />
                </li>
                <li >
                    <button onClick={this.handleDemoLogin} className="button-log demo-btn">demo sign in</button>
                </li>
                <li >
                    {/* <button onClick={this.props.openModal} className="button-log demo-btn">demo sign in</button> */}
                </li>
                </ul>
                <p className="session-errors">
                {this.props.errors}
                </p>
            </form>
            </>
        ) : (
            <>  
            <PermNavContainer />

            <form onSubmit={this.handleSubmit} className="form-container">
            <h2>Join 500.5px</h2>
                <p>Share your photos, get inspired, and grow your skills.</p>
                <ul className="li-wo-bullets">

                <label htmlFor="" /><p className="form-label">Username</p>
                <li className="form-components">
                <input type="text" onChange={this.onChange("username")}  className="form-input"/>
                

                </li>
                <label htmlFor="" /><p className="form-label">Email</p>
                <li className="form-components">
                <input type="text" onChange={this.onChange("email")}  className="form-input"/>

                </li>    

                <label htmlFor="" /><p className="form-label">Password</p>
                <li className="form-components">
                <input type="password" onChange={this.onChange("password")}  className="form-input"/>

                </li>


                <li className="button-log-submit">
                <input type="submit" value="sign up" />
                </li>
                <p>
                Already have an account? <a href="/#/login" className="lighten-a">Log in</a> 

                </p>
                </ul>
                <p className="session-errors">
                {this.props.errors}
                </p>
            </form>
            

            </>
        )
    }
}