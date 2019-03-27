import React, {Component} from 'react';
import {Link} from 'react-router-dom';

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

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        const whatev = this.props.processForm;
        whatev.login ? whatev.login(user).then(() => this.props.history.push('/')) : whatev.signup(user).then(() => this.props.history.push('/'));
    }

    onChange(type) {
        return (e) => {
            this.setState({
                [type]: e.target.value
            });
        };
    }
    handleDemoLogin() {
        const user = {username: 'helloworld', password: 'factorized'};
        const whatev = this.props.processForm;
        whatev.login(user).then(() => this.props.history.push('/'));
    }
    render() {
        return this.props.formType === "login" ? (
            <>
            <Link to="/signup"></Link>
            <form onSubmit={this.handleSubmit} className="form-container">
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
                    <button onClick={this.handleDemoLogin} className="button-log">demo sign in</button>
                </li>
                </ul>

            </form>
            </>
        ) : (
            <>  
            <Link to="/signup"></Link>
            <form onSubmit={this.handleSubmit} className="form-container">
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

                </ul>
            </form>
            </>
        )
    }
}