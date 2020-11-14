import React, { useContext } from 'react';
import { NumberContext } from './NumberProvider';


const NegativeButton = ({ buttonValue }) => {
  const { handleNegativeButton } = useContext(NumberContext);

  return (
    <button type = 'button' onClick = { () => handleNegativeButton(buttonValue) }>
      {buttonValue = '-'}
    </button>
  );

};

export default NegativeButton;