import React from 'react';
import Header from './Header.tsx'
import Body from './Body.tsx'
import Footer from './Footer.tsx'

const App = () => {
    return (
        <div>
            <div className="Page">
                <Header />
                <Body />
                <Footer />
            </div>
        </div>
    );
}

export default App;
