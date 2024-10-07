import React from 'react';

import Content from './Content.tsx'

const Body = () => {
    return (
        <div className="PageBody">
            Welcome to Portaal.
            <Content />
            What would you like to visit today?
        </div>
    )
}

export default Body;