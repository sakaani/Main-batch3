import React from 'react';


function ApplicationInquired () {
  return (
    <div>


        <div className = 'inquiredIntro'>
            <h1 id = 'intro-title'>
                Cellphone Submitted
            </h1>

            <h3 id = 'intro-description'>
                One of our mentors will message within the day, to schedule the best time to answer your questions!
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

export default ApplicationInquired;
