import React from 'react';

import Content from './Content.tsx'
import Search from './Search.tsx'

const Body = () => {
    return (
        <div className="PageBody">
            Welcome to Portaal.
            <Search />
            <Content />
            What would you like to visit today?
        </div>
    )
}

export default Body;