// Section A: Imports key modules 
import React from 'react';
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";
import { useState } from 'react';



// SET 2: One database function - with two component sub-functions
function findEmail(email) {
    for (let x of customer_array) {
        if(x.Email === email) {
            tempo_name = x.Name
            return tempo_name;
        };

};
};

function findPassword(password) {
    for (let x of customer_array) {
        if(x.Password === password) {
            tempo_password = x.Password
            return tempo_password;
        };

};
};

function login(email, password) {
    if( findEmail(email) !== undefined && findPassword(password) !== undefined) {
        return 'Login successful!'
    } else {return 'Error 100: Wrong_email_or_password'};
    
};


// SET 3: Creation of dummy customers and array of objects
const Customer1 = {
    Name: 'Matthew Falcotelo',
    Email: 'matthew@avionbank.com',
    Password: 'nanaymo',
    Status: 'API Basic',

    CheckingName: 'Account 1: Food',
    CheckingBalance: 3000.50,

    SavingsName: 'Account 2: Emergency Fund',
    SavingsBalance: 0
};

const Customer2 = {
    Name: 'Rohan Khanna',
    Email: 'rohan@avionbank.com',
    Password: 'tataymo',
    Status: 'API Preferred',

    CheckingName: 'Stuff',
    CheckingBalance: 2000.20,

    SavingsName: 'Savings',
    SavingsBalance: 102303
};

const Customer3 = {
    Name: 'Johnathan Lee',
    Email: 'lee@avionbank.com',
    Password: 'titomo',
    Status: 'API Preferred',

    CheckingName: 'Stuff',
    CheckingBalance: 12000.20,

    SavingsName: 'Savings',
    SavingsBalance: 2002303
};

var customer_array = [Customer1, Customer2, Customer3];

// Placeholder for user markers
var tempo_name;
var tempo_password;



// Section B: Creates main hook for Login webpage
function Login() {
// Sets up various use states for account security features on Login webpage
const [email, setEmailValue] = useState('');
const [password, setPasswordValue] = useState('');

// const [name, setName] = useState( findUser(active_user) );


// Sets up Email and Password input
const emailInput = (event) => {
    setEmailValue(event.target.value);
};

const passwordInput = (event) => {
    setPasswordValue(event.target.value);
};

const loginButton = (event) => {
    let login_result = login(email, password);
    alert(login_result);

    event.preventDefault();
    setEmailValue('');
    setPasswordValue('');
};



    return(
        <div>
        

            <div className = 'loginTotal'>
                <form id = 'survey' method = 'post'>
                    <h3 id = 'heading-label'>Login Page</h3>

                    <div className = 'account-section'>
                        <label id = 'email-label'>Email Address</label>
                            <input type = 'email' value = {email} onChange = {emailInput} placeholder = 'jrivera@gmail.com' required />
            
                        <label id = 'password-label'>Password</label>
                            <input type = 'text' value = {password} onChange = {passwordInput} placeholder = 'password' required />
                    </div>

                    <div className = 'login-section'>
                        <button onClick = {loginButton} className = 'login'>
                            <Link to = '/banking' id = 'login-text'><p>LOG IN</p></Link> 
                        </button>

                        <Link to = '/registration' id = 'enroll'><p>REGISTER</p></Link>
                    </div>
                
                </form>
            </div>


            <footer className = 'loginFooter'>

                <img className = 'footer_graphic' src = 'assets/process_2.svg' alt = 'Graphic 3'/>     

                <form id = 'form' action = 'email_rejected.html' method = 'GET'>
                    <h2 id = 'contact-label'>Get A Callback</h2>

                    <h3 id = 'contact-description'>
                        We want to be your banker. We want to be your child's banker. We want to be your great-grandchild's banker.
                    </h3>

                    <div id = 'submit-section'>
                        <label id = 'phone-label'>Your Cellphone</label>
                            <input id = 'phone' type = 'tel' placeholder = '63-999-888-7777' name = 'phone_data' 
                            pattern = '63-[0-9]{3}-[0-9]{3}-[0-9]{4}' required />

                        <Link to = '/inquiry' id = 'submit'><p>Talk to Us Today!</p></Link> 
                    </div>
                </form>

            </footer>


        </div>
    );
}

export default Login;