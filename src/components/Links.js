import React from 'react';
import {NavLink} from "react-router-dom";
import Homepage from "../pages/Homepage";
import Blogovervieuw from "../pages/Blogovervieuw";

function Links(props) {
    return (
        <div>
            <h1>Navigeer via de links naar de andere pagina's</h1>
            <ul>
                <li>
                    <NavLink to="/homepage" activeClassName="active-link">Homepage</NavLink>
                </li>

                <li>
                    <NavLink to="/blogovervieuw" activeClassName="active-link">Blogovervieuw</NavLink>
                </li>

                <li>
                    <NavLink to="/blogpostpage" activeClassName="active-link">Blogpostpage</NavLink>
                </li>

                <li>
                    <NavLink to="/loginpage" activeClassName="active-link">Loginpage</NavLink>
                </li>
            </ul>
        </div>
    );
}

export default Links;
