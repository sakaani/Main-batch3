import React, { useContext } from 'react';
import { NumberContext } from './NumberProvider';


const ClearButton = ({ buttonValue }) => {
  const { handleClearButton } = useContext(NumberContext);

  return (
    <button type = 'button' onClick = { () => handleClearButton(buttonValue) }>
      {buttonValue = 'C'}
    </button>
  );

};

export default ClearButton;