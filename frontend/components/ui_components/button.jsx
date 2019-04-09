import React, { Component } from 'react'

class Button extends Component {

    


    render() {
        const { buttonStyle } = styles;
        const { text } = this.props;

        return (
            <div style={buttonStyle}> 
                {text}
            </div>
        )
    }
}

const styles = {
    buttonStyle: {
        fontSize: 20
    }
};


export default Button;