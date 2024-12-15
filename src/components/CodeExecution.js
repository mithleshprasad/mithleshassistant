import React, { useState } from 'react';
import CodeEditor from './CodeEditor'; // Assuming you already have this component

function CodeExecution() {
  const [output, setOutput] = useState('');

  const handleRunCode = (code) => {
    try {
      const result = eval(code); // Warning: Avoid using eval in production
      setOutput(result !== undefined ? result.toString() : 'Code executed successfully.');
    } catch (error) {
      setOutput(`Error: ${error.message}`);
    }
  };

  return (
    <div>
      <h2>Code Execution</h2>
      <CodeEditor onRunCode={handleRunCode} />
      <h3>Output:</h3>
      <pre className="bg-light p-3 rounded">{output || 'Your output will appear here.'}</pre>
    </div>
  );
}

export default CodeExecution;
