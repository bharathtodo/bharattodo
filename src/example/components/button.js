import React from 'react';

const Button = (props) => {
    return (
        <div>
            <button onClick={props.handleClick}>Click Me</button>
        </div>
    );
};

export default Button;