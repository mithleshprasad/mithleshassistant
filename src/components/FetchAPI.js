import React, { useState } from 'react';

function FetchAPI() {
  const [output, setOutput] = useState('Click a button to see the response');

  const fetchInfo = async () => {
    const response = await fetch('https://dsa-07qz.onrender.com/info');
    const data = await response.json();
    setOutput(JSON.stringify(data, null, 2));
  };

  const fetchArray = async () => {
    const response = await fetch('https://dsa-07qz.onrender.com/array/array');
    const data = await response.json();
    setOutput(JSON.stringify(data, null, 2));
  };

  const fetchArraySum = async () => {
    const response = await fetch('https://dsa-07qz.onrender.com/array/arraySum');
    const data = await response.json();
    setOutput(JSON.stringify(data, null, 2));
  };

  return (
    <div className="container">
      <h2>Fetch API Data</h2>
      <div className="btn-group mb-3">
        <button onClick={fetchInfo} className="btn btn-primary">Fetch Info</button>
        <button onClick={fetchArray} className="btn btn-success">Fetch Array</button>
        <button onClick={fetchArraySum} className="btn btn-warning">Fetch Array Sum</button>
      </div>
      <pre className="bg-light p-3 rounded">{output}</pre>
    </div>
  );
}

export default FetchAPI;
