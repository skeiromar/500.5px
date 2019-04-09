import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(props) {

    const {navbarStyle, navbarElems, navbarLogo, navRightElems} = styles;
    return (
        <div>

            <nav style={navbarStyle}>
                <ul >
                    <li style={navbarElems}>
                        <a href="/#/" >
                            500.5px
                        </a>
                    </li>
                    <li>Discover</li>
                    <li>About</li>
                </ul>
                <ul style={[navbarLogo, navRightElems]}>
                    <li>
                        <Link to="/login">log in</Link>

                    </li>
                    <li>
                    <Link to="/signup">sign up</Link>

                    </li>
                </ul>
               
                <br/>

            </nav>

        </div>
    )
}


const styles = {
    navbarStyle: {
        display: 'flex',
        justifyContent: 'flex-start',
        background: 'white',
        color: 'rgb(82, 85, 88)',
        height: '50px',
        borderBottom: '0.8px solid rgba(173, 173, 173, 0.603)',
        paddingTop: '6px',
        paddingBottom: '6px',
    },
    navbarElems: {
        display: 'flex',
        flexDirection: 'flex-start',
        listStyle: 'none',
        alignItems: 'center',
        paddingLeft: '20px',
    },
    navbarLogo: {
        fontFamily: "Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        fontSize: '23px',
        color: 'black',
    },
    navRightElems: {
        position: 'absolute',
        right: '4%',
        top: '0%',
    },
    


};

export default Navbar;
