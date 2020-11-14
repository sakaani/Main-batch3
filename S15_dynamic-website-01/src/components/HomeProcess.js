import React from 'react';
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";


function homeProcess() {
  return (
    <div>


        <div className = 'homeProcess'>

            <section id = 'process-cards'>
                <div className = 'card-set' id = 'card-set1'>
                    <h3 id = 'card1'>
                        Curriculum Based on Real Life
                    </h3>
                    <img className = 'cards' src = 'assets/process_1.svg' alt = 'Graphic 2'/>
                </div>
        
                <div className = 'card-set' id = 'card-set2'>
                    <h3 id = 'card2'>
                        Success-Based Payments
                    </h3>
                    <img className = 'cards' src = 'assets/process_2.svg' alt = 'Graphic 3'/>     
                </div>

                <div className = 'card-set' id = 'card-set3'>
                    <h3 id = 'card3'>
                        Bespoke Career Help
                    </h3>
                    <img className = 'cards' src = 'assets/process_3.svg' alt = 'Graphic 4'/>                
                </div>
            </section>

            <img id = 'classmates' src = 'assets/process_4.png' alt = 'Graphic 5'/>  

            <section id = 'process-course'>
                <h2 id = 'course-description0'>
                    The Avion School Method
                </h2>

                <h3 className = 'course-description' id = 'course-description1'>
                    Step 1: Fill out the application. Qualify for the Pre-Course.
                </h3>

                <h3 className = 'course-description' id = 'course-description2'>
                    Step 2: Do well on the Pre-Course to confirm acceptance into Main Course.
                </h3>

                <h3 className = 'course-description' id = 'course-description3'>
                    Step 3: Choose full-time (36 full-day classes, 3 weekly) or part-time course (90 half-day, 5 weekly).
                </h3>

                <h3 className = 'course-description' id = 'course-description4'>
                    Step 4: Choose 'Pay Later' or pay upfront with a 57% discount!
                </h3>

                <h3 className = 'course-description' id = 'course-description5'>
                    Step 5: Break into tech!
                </h3>
            </section>

        </div>


        <footer className = 'homeContact'>

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

export default homeProcess;
