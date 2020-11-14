import React from 'react';
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";


function HomeContact() {
  return (
    <div>


        <footer className = 'homeContactSpecial'>

            <form id = 'form' action = 'email_rejected.html' method = 'GET'>
                <h2 id = 'contact-label'>Get A Callback</h2>

                <h3 id = 'contact-description'>
                    Software is eating the world. Will you be food? Or will you feast?
                </h3>

                <div id = 'submit-section'>
                    <label id = 'phone-label'>Your Cellphone</label>
                        <input id = 'phone' type = 'tel' placeholder = '63-999-888-7777' name = 'phone_data' 
                        pattern = '63-[0-9]{3}-[0-9]{3}-[0-9]{4}' required />

                    <Link to = '/applicationinquired' id = 'submit'><p>Talk to Us Today!</p></Link> 
                </div>
            </form>

        </footer>


    </div>
  );
}

export default HomeContact;
