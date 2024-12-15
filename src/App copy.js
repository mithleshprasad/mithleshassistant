import React, { useState } from 'react';
import './App.css';
import CodeEditor from './components/CodeEditor';

function App() {
  const [output, setOutput] = useState('');

  const handleRunCode = (code) => {
    try {
      const result = eval(code); // Warning: Use eval cautiously in production
      setOutput(result !== undefined ? result.toString() : 'Code executed successfully. No output.');
      console.warn("Execution Result:", result);
    } catch (error) {
      setOutput(`Error: ${error.message}`);
    }
  };
  const [output1, setOutput1] = useState('Click a button to see the response');
  const [submenuVisible, setSubmenuVisible] = useState({});

  const fetchInfo = async () => {
    const response = await fetch('https://dsa-07qz.onrender.com/info');
    const data = await response.json();
    setOutput1(JSON.stringify(data, null, 2));
  };

  const fetchArray = async () => {
    const response = await fetch('https://dsa-07qz.onrender.com/array/array');
    const data = await response.json();
    setOutput1(JSON.stringify(data, null, 2));
  };

  const fetchArraySum = async () => {
    const response = await fetch('https://dsa-07qz.onrender.com/array/arraySum');
    const data = await response.json();
    setOutput1(JSON.stringify(data, null, 2));
  };


  return (
    <>
    <div className="App">
  
      <header className="App-header">
        <h1>DSA Learning Hub</h1>
        <p>Master Data Structures and Algorithms Step by Step</p>
        <hr></hr>
        <div className="content">
       
          <section className="output-container">
        <h2>DSA Practice Problems</h2>
          <CodeEditor onRunCode={handleRunCode} />
          </section>
          <section className="output-container">
          <h3>Output:</h3>
          <pre className="output">{output || 'Your output will appear here.'}</pre>
          </section>
        

          <section className="output-container">
          <button onClick={fetchInfo}>Fetch Info</button>
            <button onClick={fetchArray}>Fetch Array</button>
            <button onClick={fetchArraySum}>Fetch Sum Of Array</button>
            <h2>API Response</h2>
            <pre id="output">{output1}</pre>
          </section>
        </div>
       
      
       
      </header>
      <section>
            {/* <h2>API Endpoints</h2> */}
            <footer>
        <p>&copy; 2024 DSA Learning Hub. All Rights Reserved.</p>
      </footer>
          </section>
    </div>
   
    </>
  );
}

export default App;
