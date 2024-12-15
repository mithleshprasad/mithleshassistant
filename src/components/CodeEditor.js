import React, { useState } from 'react';

function CodeEditor({ onRunCode }) {
  const [code, setCode] = useState('');

  const handleChange = (event) => {
    setCode(event.target.value);
  };

  const handleRun = () => {
    onRunCode(code);
  };

  return (
    <div>
      <textarea
        value={code}
        onChange={handleChange}
        placeholder="Write your code here..."
        style={{ width: '100%', height: '200px', marginBottom: '10px' }}
      ></textarea>
      <br />
      <button onClick={handleRun}>Run Code</button>
    </div>
  );
}

export default CodeEditor;
