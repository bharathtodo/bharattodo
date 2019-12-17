import React from 'react';

function Input(props) {
    return (
        <div>
            <input type="number"  value={props.text} onChange={props.handleChange} />
        </div>
    );
}

export default Input;