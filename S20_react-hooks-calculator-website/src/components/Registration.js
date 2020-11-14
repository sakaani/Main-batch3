import React from 'react';

import Calculator from './RegistrationCalculator';
import NumberProvider from './calculator/NumberProvider';


function Registration() {
  return (
    <div>

        <div className = 'registrationIntro'>
            <h1 id = 'intro-title'>
            Mote Launch Cohort 2023 Registration
            </h1>

            <p id = 'intro-description'>
            Your team will be applying for a Community Advance - the world's 
            first zero-interest, no-future equity venture debt.
            </p>
        </div>


        <div className = 'registrationSurvey'>
            <form id = 'survey' method = 'post'>

                <h3 id = 'heading-label'>We Are</h3>

                <div className = 'basic-section'>
                    <label id = 'name-label'>Startup Name:</label>
                        <input id = 'name' type = 'text' placeholder = 'Mote.io'/>
        
                    <label id = 'email-label'>Lead Email:</label>
                        <input id = 'email' type = 'email' placeholder = 'ceo@moteventures.com'/>
        
                    <label id = 'number-label'>Team Members:</label>
                        <input id = 'number' type = 'number' placeholder = '2' min = '1' max = '5'/>
        
                    <label id = 'dropdown-label'>Industry:</label>
                    <select id = 'dropdown'>
                        <option>EdTech</option>
                        <option>WorkTech</option>
                        <option>FinTech</option>
                        <option>DeepTech</option>
                        <option>InfraTech</option>
                    </select>
        
                    <label id = 'radio-label-1'>Startup Stage:</label>
                        <div class = 'radio-stage'>
                            <input id = 'ideationStage' type = 'radio' value = 'ideation' name = 'stage'/>
                            <label for = 'ideationStage'>Ideation</label>
                            <input id = 'preseedStage' type = 'radio' value = 'preseed' name = 'stage'/>
                            <label for = 'preseedStage'>Pre-Seed</label>
                            <input id = 'seedStage' type = 'radio' value = 'seed' name = 'stage'/>
                            <label for = 'seedStage'>Seed</label>
                        </div>
                </div>


                <div className = 'location-section'> 
                    <h3 id = 'radio-label-2'>We Are Based In</h3>

                    <div class = 'location-UK'>
                        <input id = 'cardiffUK' type = 'radio' value = 'Cardiff' name = 'UK'/>
                        <label for = 'cardiffUK'>Cardiff</label>
                        <input id = 'edinburghUK' type = 'radio' value = 'Edinburgh' name = 'UK'/>
                        <label for = 'edinburghUK'>Edinburgh</label>
                        <input id = 'londonUK' type = 'radio' value = 'London' name = 'UK'/>
                        <label for = 'londonUK'>London</label>
                        <input id = 'otherUK' type = 'radio' value = 'other' name = 'UK'/>
                        <label for = 'otherUK'>Other City</label>
                    </div>

                    <div className = 'location-density'>
                        <input id = 'ruralDensity' type = 'radio' value = 'Rural' name = 'Density'/>
                        <label for = 'ruralDensity'>Rural or Suburban</label>
                        <input id = 'urbanDensity' type = 'radio' value = 'Urban' name = 'Density'/>
                        <label for = 'urbanDensity'>Urban</label>
                    </div>
                </div> 


                <div className = 'hiring-section'>
                    <h3 id = 'checkbox-label'>We Have Hired A</h3>

                    <div class = 'checkbox-engineer'>
                        <input id = 'fullstackengineer' type = 'checkbox' value = 'fullstack' name = 'engineer'/>
                        <label for = 'fullstackengineer'>Full Stack Engineer</label>
                        <input id = 'backendengineer' type = 'checkbox' value = 'backend' name = 'engineer'/>
                        <label for = 'backendengineer'>Front End Engineer</label>
                        <input id = 'frontendengineer' type = 'checkbox' value = 'frontend' name = 'engineer'/>
                        <label for = 'frontendengineer'>Back End Engineer</label>
                    </div>

                    <div className = 'checkbox-nonengineer'>
                        <input id = 'saleslead' type = 'checkbox' value = 'sales' name = 'nonengineer'/>
                        <label for = 'saleslead'>Sales Lead</label>
                        <input id = 'advertisinglead' type = 'checkbox' value = 'advertising' name = 'nonengineer'/>
                        <label for = 'advertisinglead'>Advertising Lead</label>
                        <input id = 'customersuccess' type = 'checkbox' value = 'customer' name = 'nonengineer'/>
                        <label for = 'customersuccess'>Customer Success</label>
                    </div>
                </div>


                <div className = 'submit-section'>
                    <h3 id = 'pitch-label'>Three-Sentence Pitch</h3>
                    <textarea id = 'pitch' name = 'pitch' rows = '4' cols = '50'>
                    Please describe your business in 3 sentences only.
                    </textarea>

                    <input id = 'submit' type = 'submit' value = 'SUBMIT'/>
                </div>

            </form>
        </div>

        <NumberProvider>
            <Calculator />
        </NumberProvider>

        <img id = 'upplane' src = 'assets/registration_2.png' alt = 'Graphic 2'/>
        <img id = 'leftplane' src = 'assets/registration_1.png' alt = 'Graphic 1'/>

    </div>
  );
}

export default Registration;



