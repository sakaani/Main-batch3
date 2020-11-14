import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


function Homepage() {
  return (
    <div>

        <div className = 'homeLanding'>

            <div className = 'landing-text'>
                <h1 id = 'title'>
                    Mote Launch
                </h1>

                <Link to = '/registration' id = 'getustoseed'><p>TO SEED!</p></Link> 
            </div>

            <img id = 'hero-image' src = 'assets/hero_1.svg' alt = 'Hero 1'/>

        </div>


        <div className = 'homeCriteria'>
            <h2 id = 'criteria-headline'>
                GBP 15,000 TO FOUR PRE-SEED TEAMS PER YEAR
            </h2>

            <h4 id = 'criteria-explanation'>
                <p>It's never been easier to make an MVP. It's also 
                    never been harder to validate a product. Mote is a 
                    non-profit, founder-funded NGO that will help you 
                    handle the trade-off!
                </p>
                <p>We pioneered the Community Advance - the world's first 
                    zero-interest, no-future equity venture debt.
                </p>
                <p>
                    We are industry and country agnostic. We primarily work 
                    with software teams; but do not care about "background". 
                    We do care about integrity + diligence + team dynamics.
                </p>
            </h4>
        </div>


    </div>
  );
}

export default Homepage;
