import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Homepage from './Homepage';
import HomeProcess from './HomeProcess';
import HomeContact from './HomeContact';
import Registration from './Registration';
import ApplicationInquired from './ApplicationInquired';
import ApplicationAccepted from './ApplicationAccepted';


function Header() {
  return (
    <div>

        <div className = 'uniformHeader'>
            <img id = 'logo' src = 'assets/logo_1.png' alt = 'Logo'/>

            <nav className = 'nav'>
                <Router>

                    <Link to = '/homepage'><a className = 'nav-link' href = '/components/Homepage.js'>About</a></Link>
                    <Link to = '/homeprocess'><a className = 'nav-link' href = '/components/HomeProcess.js'>Process</a></Link>
                    <Link to = '/homecontact'><a className = 'nav-link' href = '/components/HomeContact.js'>Contact</a></Link>

                    <Link to = '/registration'><a id = 'enroll1' className = 'nav-link' href = '/components/Registration.js'>ENROLL NOW</a></Link> 

                    <Switch>
                        <Route path = '/homepage'>
                            <Homepage />
                        </Route>

                        <Route path = '/homeprocess'>
                            <HomeProcess />
                        </Route>

                        <Route path = '/homecontact'>
                            <HomeContact />
                        </Route>

                        <Route path = '/registration'>
                            <Registration /> 
                        </Route>      

                        <Route path = '/applicationinquired'>
                            <ApplicationInquired /> 
                        </Route>       

                        <Route path = '/applicationaccepted'>
                            <ApplicationAccepted /> 
                        </Route>                         
                    </Switch>

                </Router>
            </nav>
        </div>

    </div>
  );
}

export default Header;
