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
                Avion School Batch 6
            </h1>

            <p id = 'intro-description'>
                We consider many factors when assessing applications.
                Don't hesitate to try!
            </p>
        </div>


        <div className = 'registrationSurvey'>
            <form id = 'survey' method = 'post'>


                <h3 id = 'heading-label'>My Details</h3>

                <div className = 'basic-section'>
                    <label id = 'name-label'>Full Name</label>
                        <input id = 'name' type = 'text' placeholder = 'John Rivera' required/>
        
                    <label id = 'email-label'>Lead Email (Hopefully Zoom-Linked)</label>
                        <input id = 'email' type = 'email' placeholder = 'johnr@gmail.com' required />
        
                    <label id = 'phone-label'>Your Cellphone</label>
                        <input id = 'phone' type = 'tel' placeholder = '63 999 888 7777' name = 'phone_data' 
                        pattern = '63-[0-9]{3}-[0-9]{3}-[0-9]{4}' required />
        
                    <label id = 'dropdown-label'>Life Status</label>
                    <select id = 'dropdown'>
                        <option>High School</option>
                        <option>College or Graduate School</option>
                        <option>Full-Time Work</option>
                        <option>Self-Employed</option>
                        <option>Looking for the Next Life Event!</option>
                    </select>
                </div>


                <div className = 'location-section'> 
                    <label id = 'radio-label-2'><h3>I Am Based In</h3></label>

                    <div className = 'location-UK'>
                        <input id = 'cardiffUK' type = 'radio' value = 'Cardiff' name = 'UK'/>
                        <label for = 'cardiffUK'>North America</label>
                        <input id = 'edinburghUK' type = 'radio' value = 'Edinburgh' name = 'UK'/>
                        <label for = 'edinburghUK'>The Philippines</label>
                        <input id = 'londonUK' type = 'radio' value = 'London' name = 'UK'/>
                        <label for = 'londonUK'>The Middle East</label>
                        <input id = 'otherUK' type = 'radio' value = 'other' name = 'UK'/>
                        <label for = 'otherUK'>Another Country</label>
                    </div>
                </div> 


                <div className = 'hiring-section'>
                    <label id = 'checkbox-label'><h3>I Have the Following</h3></label>

                    <div className = 'checkbox-engineer'>
                        <input id = 'fullstackengineer' type = 'checkbox' value = 'fullstack' name = 'engineer'/>
                        <label for = 'fullstackengineer'>Tech Degree (Computer Science, Computer Engineering, ECE)</label>
                        <input id = 'backendengineer' type = 'checkbox' value = 'backend' name = 'engineer'/>
                        <label for = 'backendengineer'>Non-Tech Degree (diplomas, Business, Statistics)</label>
                        <input id = 'frontendengineer' type = 'checkbox' value = 'frontend' name = 'engineer'/>
                        <label for = 'frontendengineer'>Self-Taught Programming or Work Experience</label>
                    </div>
                </div>


                <div className = 'submit-section'>
                    <label id = 'pitch-label' for = 'pitch'><h3>To the Batch, I Will Contribute</h3></label>
                    <textarea id = 'pitch' name = 'pitch' rows = '4' cols = '50'>
Please describe what unique factor you can offer your potential classmates. This can be recruiting tips from personal experience, insight on Java, business savvy, or art talent!
                    </textarea>

                    <Link to = '/applicationaccepted' id = 'submit'><p>SUBMIT!</p></Link> 
                </div>


            </form>
        </div>


        <footer id = 'registrationLegal'>
            <label><h2>Legal Stuff</h2></label>

            <p id = 'legal-text'>
                We can sue you if you refuse to pay, despite getting a tech job. 
                We can sue you if you harass classmates or teachers.
            </p>
        </footer>


    </div>
  );
}

export default Registration;
