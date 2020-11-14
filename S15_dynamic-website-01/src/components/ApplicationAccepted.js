import React from 'react';


function ApplicationAccepted () {
  return (
    <div>


        <div className = 'acceptedIntro'>
            <h1 id = 'intro-title'>
                Application Accepted
            </h1>

            <h3 id = 'intro-description'>
                Our team will follow up within a month, with feedback on your application.
            </h3>
        </div>


        {/* <script>
            function processForm() {
                const url = location.search.substring(1).split('&');
                const temp = url[0].split('=');
                n = unescape( temp[1] );
                alert(n + ' has applied for Avion School Batch 5.');
            }
        </script>  */}


    </div>
  );
}

export default ApplicationAccepted;
