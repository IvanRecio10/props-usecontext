import React, { createContext, useState } from 'react';

export const CalculatorContext = createContext();

export const CalculatorProvider = ({ children }) => {
  const [selectedNumbers, setSelectedNumbers] = useState([]);
  const [currentNumber, setCurrentNumber] = useState(0);

  const addNumber = (number) => {
    setSelectedNumbers([...selectedNumbers, number]);
    setCurrentNumber(currentNumber + number);
  };

  const resetCalculator = () => {
    setSelectedNumbers([]);
    setCurrentNumber(0);
  };

  return (
    <CalculatorContext.Provider
      value={{ selectedNumbers, currentNumber, addNumber, resetCalculator }}
    >
      {children}
    </CalculatorContext.Provider>
  );
};
