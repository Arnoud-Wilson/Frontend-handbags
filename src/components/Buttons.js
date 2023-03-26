import React from 'react';

function Button (props) {
    return (
        <button
            type={props.type}
            disabled={props.disabled}
            onClick={ () => {console.log(props.title)}}
            >{props.title}</button>
    );
}

export default Button;