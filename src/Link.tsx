import React from 'react';

const Link = (props) => {
    return (
        <div>
            <a href={props.url}>{props.name}</a>
        </div>
    )
}

export default Link;