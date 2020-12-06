import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Login from './Login';
import Banking from './Banking';
import Registration from './Registration';
import Inquiry from './Inquiry';
import CustomerAccepted from './CustomerAccepted';



function Header() {
  return (
    <div>

        <div className = 'uniformHeader'>
            <img id = 'logo' src = 'assets/logo_1.png' alt = 'Logo'/>

            <nav className = 'nav'>
                <Router>

                    <Link to = '/login'><a className = 'nav-link' href = '/components/Login.js'>Login Page</a></Link>
                    <Link to = '/banking'><a className = 'nav-link' href = '/components/Banking.js'>Personal Banking</a></Link>

                    <Link to = '/login'><a id = 'logout' className = 'nav-link' href = '/components/Registration.js'>LOG OUT</a></Link>

                    <Switch>
                        <Route path = '/login'>
                            <Login />
                        </Route>

                        <Route path = '/banking'>
                            <Banking />
                        </Route>

                        <Route path = '/registration'>
                            <Registration /> 
                        </Route>      

                        <Route path = '/inquiry'>
                            <Inquiry /> 
                        </Route>       

                        <Route path = '/customeraccepted'>
                            <CustomerAccepted /> 
                        </Route>                         
                    </Switch>

                </Router>
            </nav>
        </div>

    </div>
  );
}

export default Header;
