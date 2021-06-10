import React, { useState } from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link, NavLink,
}
  from 'react-router-dom';
import Blogovervieuw from "./pages/Blogovervieuw";
import Homepage from "./pages/Homepage";
import Loginpage from "./pages/Loginpage";
import Blogpostpage from "./pages/Blogpostpage";
import Header from "./components/Header";
import Links from "./components/Links";


function App() {
  // We houden in de state bij of iemand is "ingelogd" (simpele versie)
  const [isAuthenticated, toggleIsAuthenticated ] = useState(false);

  return (
      <Router>
<div>
  <Header/>
</div>



    <div>
      Maak hier jouw prachtige blog-applicatie!
    </div>

        <Switch>

          <Route path="/homepage">
            <Homepage/>
          </Route>

          <Route path="/loginpage">
            <Loginpage/>
          </Route>

          <Route path="/blogpostpage">
            <Blogpostpage/>
          </Route>

          <Route path="/blogovervieuw">
            <Blogovervieuw/>
          </Route>

        </Switch>

      </Router>
  );
}

export default App;
