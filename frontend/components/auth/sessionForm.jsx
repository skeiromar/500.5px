import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import PermNavContainer from '../permanent_nav/perm_nav_container';

function SessionForm(props) {
    const [session, setSession] = useState({
        username: "",
        password: ""
    });
    
    useEffect(() => {
        if (props.errors.length > 0)
            props.clearErrors();
    }, []);

    useEffect(() => {
        return () => {
            if (props.errors.length > 0) props.clearErrors();
        };
    }, [props.location.pathname]);

    function onChange(type) {
        return (e) => {
          setSession({...session, [type]: e.target.value});
        };
    }

    function handleDemoLogin(e) {
        e.preventDefault();

        const user = {
          username: 'helloworld',
          password: 'factorized'
        };

        props
          .demoLogin(user)
          .then(() => props.history.push('/feed'));
    }

    function handleSubmit(e) {
        e.preventDefault();
        
        const user = Object.assign({}, session);
        const sessionType = props.processForm;

        sessionType.login ? 
            sessionType
                .login(user)
                .then(() => props.history.push('/feed'), errors => props.receiveSessionErrors(errors.responseJSON))
            : sessionType
                .signup(user)
                .then(() => props.history.push('/feed'), errors => props.receiveSessionErrors(errors.responseJSON));
    }

    return props.formType === "login" ? (
        <>
            <PermNavContainer /> 
            <form onSubmit={handleSubmit} className="form-container">
                <h2>Join 500.5px</h2>
                <p>Share your photos, get inspired, and grow your skills</p>
                
                <ul className="li-wo-bullets">
                    <p className="form-label">Username</p>
                    <li className="form-components">
                        <input type="text" onChange={onChange("username")} className="form-input"/>
                    </li>
                    <p className="form-label">Password</p>
                    <li className="form-components">
                        <input type="password" onChange={onChange("password")} className="form-input"/>
                    </li>
                    <li onClick={handleSubmit} className="button-log-submit"> 
                        <input type="submit" value="sign in"/> 
                    </li>
                    <li>
                        <button onClick={handleDemoLogin} className="button-log demo-btn">demo sign in</button>
                    </li>
                </ul>
                <p className="session-errors">{props.errors}</p>
            </form>
        </>
    ) : (
        <>
            <PermNavContainer />
            <form onSubmit={handleSubmit} className="form-container"> 
                <h2>Join 500.5px</h2> 
                <p> Share your photos, get inspired, and grow your skills.</p>
                
                <ul className="li-wo-bullets">
                    <p className="form-label">Username</p> 
                    <li className="form-components"> 
                        <input type="text" onChange={onChange("username")} className="form-input"/> 
                    </li>
                    <p className="form-label">Email</p> 
                    <li className="form-components"> 
                        <input type="text" onChange={onChange("email")} className="form-input"/> 
                    </li>    
                    <p className="form-label">Password</p> 
                    <li className="form-components"> 
                        <input type="password" onChange={onChange("password")} className="form-input"/> 
                    </li>

                    <li onClick={handleSubmit} className="button-log-submit">
                        <input type="submit" value="sign up" /> 
                    </li> 
                    <p> Already have an account? 
                        <a href="/#/login" className="lighten-a">Log in</a>
                    </p>
                </ul> 

                <p className="session-errors">
                    {props.errors}
                </p> 
            </form>
        </>
    );
}

export default SessionForm;
