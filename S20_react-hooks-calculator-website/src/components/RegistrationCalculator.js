import React from 'react';

import ClearButton from './calculator/ClearButton';
import BackButton from './calculator/BackButton';
import NegativeButton from './calculator/NegativeButton';
import EqualButton from './calculator/EqualButton';

import Display from './calculator/Display';

import NumberButton from './calculator/NumberButton';
import FunctionButton from './calculator/FunctionButton';


const Calculator = () => (
  <div className = 'calculatorWhole'>

    <div className = 'calculatorDisplay'>
      <h3 id = 'calculator-label'>Investment Calculator</h3>
      <Display />
    </div>

    <div className = 'calculatorKeys'>
      <div className = 'calculator-rows' id = 'calculator-row1'>
        <ClearButton className = 'calculator-buttons'/>
        <BackButton className = 'calculator-buttons'/>
        <NegativeButton className = 'calculator-buttons'/>
        <FunctionButton buttonValue = '/'  className = 'calculator-buttons'/>
      </div>

      <div className = 'calculator-rows' id = 'calculator-row2'>
        <NumberButton buttonValue = {7} className = 'calculator-buttons'/>
        <NumberButton buttonValue = {8} className = 'calculator-buttons'/>
        <NumberButton buttonValue = {9} className = 'calculator-buttons'/>
        <FunctionButton buttonValue = '*' className = 'calculator-buttons'/>
      </div>

      <div className = 'calculator-rows' id = 'calculator-row3'>
        <NumberButton buttonValue = {4} className = 'calculator-buttons'/>
        <NumberButton buttonValue = {5} className = 'calculator-buttons'/>
        <NumberButton buttonValue = {6} className = 'calculator-buttons'/>
        <FunctionButton buttonValue = '--' className = 'calculator-buttons'/>
      </div>

      <div className = 'calculator-rows' id = 'calculator-row4'>
        <NumberButton buttonValue = {1} className = 'calculator-buttons'/>
        <NumberButton buttonValue = {2} className = 'calculator-buttons'/>
        <NumberButton buttonValue = {3} className = 'calculator-buttons'/>
        <FunctionButton buttonValue = '+' className = 'calculator-buttons'/>
      </div>

      <div className = 'calculator-rows' id = 'calculator-row5'>
        <div className = 'zero-button'>
          <NumberButton buttonValue = {0} className = 'calculator-buttons'/>
        </div>
        <NumberButton buttonValue = '.' className = 'calculator-buttons'/>
        <EqualButton className = 'calculator-buttons'/>
      </div>
    </div>
    
  </div>
);

export default Calculator;