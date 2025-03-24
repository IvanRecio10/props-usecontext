import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CalculatorProvider } from './CalculatorProvider';
import Calculator from './Calculator';
import Result from './Result';

function App() {
  return (
    <CalculatorProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Calculator />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </Router>
    </CalculatorProvider>
  );
}

export default App;
