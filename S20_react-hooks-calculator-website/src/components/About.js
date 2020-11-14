import React from 'react';


function About() {
  return (
    <div>

        <div id = 'serviceIntro'>

            <h1 id = 'intro-title'>
                The Community Advance
            </h1>

            <div id = 'iphone6'>
                <h3 id = 'intro-description-1'>
                    Borrow GBP 15,000. Quarterly payments tied to startup sales. No. Interest.
                </h3>

                <h3 id = 'intro-description-2'>
                    A little bit of inflation for us = A great deflation of risk for you.
                </h3>
            </div>

            <div id = 'intro-container'>
                <div className = 'intro-set'>
                    <h3 className = 'intro-labels' id = 'intro-label-1'>
                        Small Payable Loan
                    </h3>
                    <img id = 'small' src = 'assets/service_2.svg' alt = 'Graphic 2'/>
                </div>

                <div className = 'intro-set' id = 'intro-set2'>
                    <h3 className = 'intro-labels' id = 'intro-label-2'>
                        Tied to Your Success
                    </h3>
                    <img id = 'tied' src = 'assets/service_3.svg' alt = 'Graphic 3'/>     
                </div>

                <div className = 'intro-set'>
                    <h3 className = 'intro-labels' id = 'intro-label-3'>
                        No Capitalistic Interest
                    </h3>
                    <img id = 'interest' src = 'assets/service_4.svg' alt = 'Graphic 4'/>                
                </div>
            </div>

        </div>


        <div id = 'serviceExplanation'>

            <video id = 'video' controls = 'controls' src = 'assets/video.mp4' 
                width = "700" height = "473">
                Your browser does not support the HTML5 Video element.
            </video>

        </div>


        <footer id = 'serviceFooter'>
            <form id = 'form' action = 'email_rejected.html' method = 'GET'>
                <h2 id = 'heading-label'>Inquiry Form</h2>

                <div id = 'submit-section'>
                    <label id = 'email-label'>Team Email</label>
                        <input id = 'email' type = 'email' placeholder = 'ceo@moteventures.com' name = 'email_data' />

                    <input id = 'submit' type = 'submit' value = 'SUBMIT'/>
                </div>
            </form>
        </footer>

    </div>
  );
}

export default About;
