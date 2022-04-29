import React from 'react';
import Clock from './Clock.jsx';

const App = () => {
    return (
        <>
        <Clock location = "New York" offset = {-5} />
        <Clock start = "Kyiv" offset = {2} />
        <Clock start = "London" offset = {0} />

        </>
    );
}

export default App;