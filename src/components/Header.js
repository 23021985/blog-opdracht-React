import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link, NavLink
}
    from 'react-router-dom';
import Links from "./Links";


function Header(props) {
    return (
<header className="App-header">
            <h1>Dit is de header!</h1>


                        <Links/>

</header>

    );
}

export default Header;