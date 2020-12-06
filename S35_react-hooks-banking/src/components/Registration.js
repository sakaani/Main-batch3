import React from 'react';
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";



function Registration() {
  return (
    <div>


        <div className = 'registrationIntro'>
            <h1 id = 'intro-title'>
                New Account Registration
            </h1>

            <p id = 'intro-description'>
                Avion of the Philippine Islands commit to industry-wide KYC standards; and 
                to the implementation of RA 10365.
            </p>
        </div>


        <div className = 'registrationSurvey'>
            <form id = 'survey' method = 'post'>


                <h3 id = 'heading-label'>Personal Information</h3>

                <div className = 'basic-section'>
                    <label id = 'name-label'>Full Legal Name</label>
                        <input id = 'name' type = 'text' placeholder = 'John Rivera' required/>
        
                    <label id = 'email-label'>Personal Email</label>
                        <input id = 'email' type = 'email' placeholder = 'johnr@gmail.com' required />
        
                    <label id = 'phone-label'>Your Cellphone</label>
                        <input id = 'phone' type = 'tel' placeholder = '63 999 888 7777' name = 'phone_data' 
                        pattern = '63-[0-9]{3}-[0-9]{3}-[0-9]{4}' required />
        
                    <label id = 'dropdown-status-label'>Life Status</label>
                    <select id = 'dropdown-status'>
                        <option>Student or Intern</option>
                        <option>Unemployed</option>
                        <option>Part-Time Work</option>
                        <option>Full-Time Work</option>
                        <option>Self-Employed</option>
                        <option>Retired</option>
                    </select>
                </div>


                <div className = 'location-section'> 
                    <label id = 'dropdown-address-label'><h3>City of Residency</h3></label>

                    <select id = 'dropdown-address'>
                        <option>City of Manila</option>
                        <option>Quezon City</option>
                        <option>Other NCR</option>
                        <option>Luzon</option>
                        <option>Visayas</option>
                        <option>Mindanao</option>
                    </select>
                </div> 


                <div className = 'income-section'>
                    <label id = 'checkbox-label'><h3>I Have the Following</h3></label>

                    <div className = 'checkbox-accomplishments'>
                        <input id = 'schooling' type = 'checkbox' value = 'fullstack' name = 'schooling'/>
                        <label for = 'schooling'>High School Diploma or Bachelor's Degree</label>
                        <input id = 'employment' type = 'checkbox' value = 'backend' name = 'employment'/>
                        <label for = 'employment'>Part-Time Job or Full-Time Job</label>
                        <input id = 'identification' type = 'checkbox' value = 'frontend' name = 'identification'/>
                        <label for = 'identification'>Government-Issued ID</label>
                    </div>
                </div>


                <div className = 'submit-section'>
                    <Link to = '/customeraccepted' id = 'submit'><p>SUBMIT!</p></Link> 
                </div>


            </form>
        </div>


        <footer id = 'registrationLegal'>
            <label><h2>Legal Stuff</h2></label>

            <p id = 'legal-text'>
                If you holdup the bank, you will go to jail because you are a bad boi.
                If you refuse to pay loan interest, you will go to jail too.
            </p>
        </footer>
        
    </div>
  );
}

export default Registration;
