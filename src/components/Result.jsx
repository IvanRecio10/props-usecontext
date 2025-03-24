import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CalculatorContext } from './CalculatorProvider';

const Result = () => {
  const { selectedNumbers, currentNumber, resetCalculator } = useContext(CalculatorContext);

  return (
    <div className="result">
      <h1>Result: {currentNumber}</h1>
      <p>Numbers selected: {selectedNumbers.join(', ')}</p>
      <button onClick={resetCalculator}>Reset</button>
      <Link to="/">Back to Calculator</Link>
    </div>
  );
};

export default Result;
