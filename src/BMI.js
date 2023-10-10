import React, { useRef, useState } from 'react';
import './BmiCalculator.css'; // Import your CSS file for styling

const BmiText = ({ bmi }) => {
  let bmiText;
  if (bmi < 18.5) {
    bmiText = 'Underweight';
  } else if (bmi > 30) {
    bmiText = 'Overweight';
  } else {
    bmiText = 'Normal';
  }

  return (
    <div className="bmi-result">
      <h1>{bmiText}</h1>
    </div>
  );
};

export default function Bmi() {
  const w_inputRef = useRef(null);
  const h_inputRef = useRef(null);
  const [Bmi, setBmi] = useState(0);

  const calBmi = () => {
    const w = parseFloat(w_inputRef.current.value);
    const h = parseFloat(h_inputRef.current.value) / 100;
    setBmi(w / Math.pow(h, 2));
  };

  return (
    <div className="bmi-container">
      <h3 className="bmi-title">BMI Calculator</h3>
      <div className="input-group">
        <label>Weight:</label>
        <input type="text" ref={w_inputRef} /> kg
      </div>
      <div className="input-group">
        <label>Height:</label>
        <input type="text" ref={h_inputRef} /> cm
      </div>
      <button className="calculate-button" onClick={calBmi}>
        Calculate!
      </button>
      <div className="bmi-value">BMI value: {Bmi.toFixed(2)}</div>
      <BmiText bmi={Bmi} />
    </div>
  );
}
