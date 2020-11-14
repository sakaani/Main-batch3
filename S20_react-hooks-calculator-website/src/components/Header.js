import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Homepage from './Homepage';
import About from './About';
import Registration from './Registration';


function Header() {
  return (
    <div>

        <div className = 'uniformHeader'>
            <img id = 'logo' src = 'assets/logo_1.jpg' alt = 'Logo'/>

            <nav className = 'nav'>
                <Router>

                    <Link to = '/homepage'><a className = 'nav-link' href = '/components/Homepage.js'>Home</a></Link>
                    <Link to = '/about'><a className = 'nav-link' href = '/components/About.js'>About</a></Link>
                    <Link to = '/registration'><a className = 'nav-link' href = '/components/Registration.js'>Registration</a></Link> 

                    <Switch>
                        <Route path = '/about'>
                            <About />
                        </Route>
                        <Route path = '/registration'>
                            <Registration /> 
                        </Route>
                        <Route path = '/homepage'>
                            <Homepage />
                        </Route>
                    </Switch>

                </Router>
            </nav>
        </div>

    </div>
  );
}

export default Header;
