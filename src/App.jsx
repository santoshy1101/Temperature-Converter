import React, { useState } from 'react';
import "./App.css"

function TemperatureConverter() {
  const [temperature, setTemperature] = useState('');
  const [scale, setScale] = useState('celsius');
  const [result, setResult] = useState('');
  const [error, setError] = useState('');

  const handleTemperatureChange = (e) => {
    setTemperature(e.target.value);
  };

  const handleScaleChange = (e) => {
    setScale(e.target.value);
  };

  const convertToCelsius = () => {
    if (isNaN(temperature)) {
      setError('Please enter a valid number');
      setResult('');
    } else {
      setError('');
      const convertedTemperature = scale === 'fahrenheit'
        ? ((parseFloat(temperature) - 32) * 5/9).toFixed(2)
        : temperature;
      setResult(`${temperature}°${scale.toUpperCase()} is equal to ${convertedTemperature}°C`);
    }
  };

  const convertToFahrenheit = () => {
    if (isNaN(temperature)) {
      setError('Please enter a valid number');
      setResult('');
    } else {
      setError('');
      const convertedTemperature = scale === 'celsius'
        ? ((parseFloat(temperature) * 9/5) + 32).toFixed(2)
        : temperature;
      setResult(`${temperature}°${scale.toUpperCase()} is equal to ${convertedTemperature}°F`);
    }
  };

  return (
    <div className="temperature-converter">
      <h2>Temperature Converter</h2>
      <div className='container'>
        <input
          type="text"
          placeholder="Enter temperature"
          value={temperature}
          onChange={handleTemperatureChange}
        />
        <select onChange={handleScaleChange} value={scale}>
          <option value="celsius">Celsius</option>
          <option value="fahrenheit">Fahrenheit</option>
        </select>
      </div>
      <div>
        <button onClick={convertToCelsius}>Convert to Celsius</button>
        <button onClick={convertToFahrenheit}>Convert to Fahrenheit</button>
      </div>
      {error && <p className="error">{error}</p>}
      {result && <p className="result">{result}</p>}
    </div>
  );
}

export default TemperatureConverter;
