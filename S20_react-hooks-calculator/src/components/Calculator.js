import React from 'react';

import ClearButton from './ClearButton';
import BackButton from './BackButton';
import NegativeButton from './NegativeButton';
import EqualButton from './EqualButton';

import Display from './Display';
import { CalculatorStyles } from './Styles';

import NumberButton from './NumberButton';
import FunctionButton from './FunctionButton';


const Calculator = () => (
  <CalculatorStyles>

    <div className = 'calculatorDisplay'>
      <h3 id = 'calculator-label'>Investment Calculator</h3>
      <Display />
    </div>

    <div className = 'calculatorKeys'>
      <ClearButton />
      <BackButton />
      <NegativeButton />
      <FunctionButton buttonValue = '/' />

      <NumberButton buttonValue = {7} />
      <NumberButton buttonValue = {8} />
      <NumberButton buttonValue = {9} />
      <FunctionButton buttonValue = '*' />

      <NumberButton buttonValue = {4} />
      <NumberButton buttonValue = {5} />
      <NumberButton buttonValue = {6} />
      <FunctionButton buttonValue = '--' />

      <NumberButton buttonValue = {1} />
      <NumberButton buttonValue = {2} />
      <NumberButton buttonValue = {3} />
      <FunctionButton buttonValue = '+' />

      <div className = 'zero-button'>
        <NumberButton buttonValue = {0} />
      </div>
      <NumberButton buttonValue = '.' />
      <EqualButton />
    </div>
    
  </CalculatorStyles>
);

export default Calculator;