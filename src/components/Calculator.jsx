import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CalculatorContext } from './CalculatorProvider';

const Calculator = () => {
  const { currentNumber, addNumber } = useContext(CalculatorContext);

  return (
    <div className="calculator">
      <h1>Current Number: {currentNumber}</h1>
      <div className="numbers-grid">
        {[...Array(10).keys()].map((num) => (
          <button key={num} onClick={() => addNumber(num)}>
            {num}
          </button>
        ))}
      </div>
      <Link to="/result">Go to Result</Link>
    </div>
  );
};

export default Calculator;
