import React from 'react';

import Content from './Content.tsx'

const Body = () => {
    const dayColor = "#5C8374";
    const weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    const date = new Date();
    const weekDay = weekDays[date.getDay()];
    return (
        <div className="PageBody">
            Welcome to Portaal, Joey.
            Have a great <font color={dayColor}>{weekDay}</font>! <br></br>
            <Content />
            What would you like to visit today?
        </div>
    )
}

export default Body;