import React from 'react';

const Link = (props) => {
    return (
        <div className="Site">
            <a href={props.url}>{props.name}</a>
        </div>
    )
}

export default Link;