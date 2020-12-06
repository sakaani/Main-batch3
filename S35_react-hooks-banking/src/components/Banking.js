// Section A: Imports key modules 
import React from 'react';
import { useState } from 'react';



// SET 1: Eight basic banking functions - five per account type
function depositChecking(name, amount) {
    for (let x of customer_array) {
        if(x.Name === name) {
            return x.CheckingBalance += amount;
        };

};
};

function withdrawChecking(name, amount) {
    for (let x of customer_array) {
        if(x.Name === name) {
            let negative_amount = -amount
            if(amount <= x.CheckingBalance) {
                return x.CheckingBalance += negative_amount;
            } else {x.CheckingBalance = 0}
        };

};
};

function getCheckingName(name) {
    for (let x of customer_array) {
        if(x.Name === name) {
            return x.CheckingName;
        };

};
};

function getCheckingBalance(name) {
    for (let x of customer_array) {
        if(x.Name === name) {
            return x.CheckingBalance;
        };

};
};

function depositSavings(name, amount) {
    for (let x of customer_array) {
        if(x.Name === name) {
            return x.SavingsBalance += amount;
        };

};
};

function withdrawSavings(name, amount) {
    for (let x of customer_array) {
        if(x.Name === name) {
            let negative_amount = -amount
            if(amount <= x.SavingsBalance) {
                return x.SavingsBalance += negative_amount;
            } else {x.SavingsBalance = 0}
        };

};
};

function getSavingsName(name) {
    for (let x of customer_array) {
        if(x.Name === name) {
            return x.SavingsName;
        };

};
};

function getSavingsBalance(name) {
    for (let x of customer_array) {
        if(x.Name === name) {
            return x.SavingsBalance;
        };

};
};


// SET 2: Four more database functions
function findUser(name) {
    for (let x of customer_array) {
        if(x.Name === name) {
            return x.Name;
        };

};
};

function findStatus(name) {
    for (let x of customer_array) {
        if(x.Name === name) {
            return x.Status;
        };

};
};

// Creation of constructor function, creation, and deletion
var Customer = function(customerName, customerStatus) {
    this.Name = customerName;
    this.Balance = 0;
    this.Status = customerStatus;
};

function createUser(customerName, customerStatus) {
    var test = new Customer(customerName, customerStatus);
    customer_array.push(test);
    return customer_array;
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

    CheckingName: 'Malaysia Checking',
    CheckingBalance: 12000.20,

    SavingsName: 'Singapore Savings',
    SavingsBalance: 2002303
};

var customer_array = [Customer1, Customer2, Customer3];
var sender = Customer3.Name;
var receiver = Customer2.Name;



// Section B: Creates main hook for Balance webpage
function Balance() {
// Sets up various use states for dynamic updating of account information
    const [name, setName] = useState( findUser(sender) );
    const [status, setStatus] = useState( findStatus(sender) );
    const [checking_name, setCheckingName] = useState( getCheckingName(sender) );
    const [savings_name, setSavingsName] = useState( getSavingsName(sender) );

    const [cd_amount, setCDValue] = useState(0);
    const [cw_amount, setCWValue] = useState(0);
    const [ct_amount, setCTValue] = useState(0);
    const [checking_balance, setCheckingBalance] = useState( getCheckingBalance(sender) );

    const [name_receiver, setNameReceiver] = useState( findUser(receiver) );

    const [sd_amount, setSDValue] = useState(0);
    const [sw_amount, setSWValue] = useState(0);
    const [st_amount, setSTValue] = useState(0);
    const [savings_balance, setSavingsBalance] = useState( getSavingsBalance(sender) );


// Set up functions for Deposit, Withdrawal, and Transfer buttons

// Deposit to active user's Checking account
const depositCheckingInput = (event) => {
    setCDValue(event.target.value);
};

const depositCheckingButton = (event) => {
    let new_checking_balance = depositChecking(findUser(sender), parseInt(cd_amount));
    setCheckingBalance(new_checking_balance);

    event.preventDefault();
    setCDValue(0);
};


// Withdraw from active user's Checking account
const withdrawCheckingInput = (event) => {
    setCWValue(event.target.value);
};

const withdrawCheckingButton = (event) => {
    let new_checking_balance = withdrawChecking(findUser(sender), parseInt(cw_amount));
    setCheckingBalance(new_checking_balance);

    event.preventDefault();
    setCWValue(0);
};


// Transfer from active user's Checking account to a selected user
const transferCheckingInput = (event) => {
    setCTValue(event.target.value);
};

const transferCheckingButton = (event) => {
    let new_checking_balance = withdrawChecking(findUser(sender), parseInt(ct_amount));
    setCheckingBalance(new_checking_balance);

    depositChecking(findUser(receiver), parseInt(ct_amount));

    event.preventDefault();
    setCTValue(0);
};


// Deposit to active user's Savings account
const depositSavingsInput = (event) => {
    setSDValue(event.target.value);
};

const depositSavingsButton = (event) => {
    let new_savings_balance = depositSavings(findUser(sender), parseInt(sd_amount));
    setSavingsBalance(new_savings_balance);

    event.preventDefault();
    setSDValue(0);
};


// Withdraw from active user's Savings account
const withdrawSavingsInput = (event) => {
    setSWValue(event.target.value);
};

const withdrawSavingsButton = (event) => {
    let new_savings_balance = withdrawSavings(findUser(sender), parseInt(sw_amount));
    setSavingsBalance(new_savings_balance);

    event.preventDefault();
    setSWValue(0);
};


// Transfer from active user's Savings account to a selected user
const transferSavingsInput = (event) => {
    setSTValue(event.target.value);
};

const transferSavingsButton = (event) => {
    let new_savings_balance = withdrawSavings(findUser(sender), parseInt(st_amount));
    setSavingsBalance(new_savings_balance);

    depositSavings(findUser(receiver), parseInt(st_amount));

    event.preventDefault();
    setSTValue(0);
};


// TEMP: Placeholder for user marker - temporary use states and button for setting user
const userInput = (event) => {
    setName(event.target.value);
};

const userButton = (event) => {
    sender = findUser(name)

    event.preventDefault();
    setName('');
};



  return (
    <div>


        <div className = 'balanceAccount'>
            <div className = 'hero-text'>


{/* TEMP: Placeholder for user marker - temporary use states and button for setting user */}
<section id = 'user-selection'>
    <input type = 'text' value = {name} onChange = {userInput} placeholder = 'Name of Customer' required />

    <button onClick = {userButton}>
        Select User
    </button>
</section>

                <h1 id = 'title'>
                    {name}
                </h1>

                <h2 id = 'status'>
                    {status}
                </h2>

                <img id = 'person' src = 'assets/Matthew Falcotelo.jpg' alt = 'Graphic 1'/>

                <form className = 'numbers'>
                    <section className = 'numbers-account'>
                        <h3 className = 'numbers-name'>{checking_name}</h3>
                        <h3 className = 'numbers-money'>PHP {checking_balance}</h3>
                    </section>

                    <section className = 'numbers-account'>
                        <h3 className = 'numbers-name'>{savings_name}</h3>
                        <h3 className = 'numbers-money'>PHP {savings_balance}</h3>
                    </section>
                </form>

                <section className = 'basic_banking'>


                    <section className = 'basic_banking_set1'>

                        <section id = 'checking-deposit'>
                            <input type = 'number' value = {cd_amount} onChange = {depositCheckingInput} min = '0' max = '50000' className = 'basic_banking_inputs' />

                            <button onClick = {depositCheckingButton} className = 'basic_banking_buttons'>
                                Deposit to {checking_name}
                            </button>
                        </section>

                        <section id = 'checking-withdraw' className = 'basic_banking_sets'>
                            <input type = 'number' value = {cw_amount} onChange = {withdrawCheckingInput} min = '0' max = '50000' className = 'basic_banking_inputs' />

                            <button onClick = {withdrawCheckingButton} className = 'basic_banking_buttons'>
                                Withdraw from {checking_name}
                            </button>
                        </section>

                        <section id = 'checking-transfer' className = 'basic_banking_sets'>
                            <input type = 'number' value = {ct_amount} onChange = {transferCheckingInput} min = '0' max = '50000' className = 'basic_banking_inputs' />

                            <button onClick = {transferCheckingButton} className = 'basic_banking_buttons'>
                                Transfer to {name_receiver} from {checking_name}
                            </button>
                        </section>

                    </section>

                    <section className = 'basic_banking_set2'>

                        <section id = 'savings-deposit' className = 'basic_banking_sets'>
                            <input type = 'number' value = {sd_amount} onChange = {depositSavingsInput} min = '0' max = '50000' className = 'basic_banking_inputs' />

                            <button onClick = {depositSavingsButton} className = 'basic_banking_buttons'>
                                Deposit to {savings_name}
                            </button>
                        </section>

                        <section id = 'savings-withdraw' className = 'basic_banking_sets'>
                            <input type = 'number' value = {sw_amount} onChange = {withdrawSavingsInput} min = '0' max = '50000' className = 'basic_banking_inputs' />

                            <button onClick = {withdrawSavingsButton} className = 'basic_banking_buttons'>
                                Withdraw from {savings_name}
                            </button>
                        </section>

                        <section id = 'savings-transfer' className = 'basic_banking_sets'>
                            <input type = 'number' value = {st_amount} onChange = {transferSavingsInput} min = '0' max = '50000' className = 'basic_banking_inputs' />

                            <button onClick = {transferSavingsButton} className = 'basic_banking_buttons'>
                                Transfer to {name_receiver} from {savings_name}
                            </button>
                        </section>

                    </section>


                </section>


            </div>
        </div>


    </div>
  );
}

export default Balance;
