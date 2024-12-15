import React ,{useState}from 'react';
import { useParams } from 'react-router-dom';
import CodeEditor from './CodeEditor';
function ProblemPage() {
  const { type,id } = useParams();

  const problems = {
    1: "Write a program to find the largest element in an array.",
    2: "Write a program to reverse an array.",
    3: "Find the missing number in an array of size n containing numbers from 1 to n+1.",
    4: "Find duplicate elements in an array.",
    5: "Find the second largest element in an array.",
    6: "Check if the given array is sorted.",
    7: "Rotate an array k times to the right.",
    8: "Find the intersection of two arrays.",
    9: "Sort an array in ascending order.",
    10: "Find the sum of all elements in an array.",
    11: "Find a pair of elements with a given sum in an array.",
    12: "Merge two sorted arrays into one sorted array.",
    13: "Move all zeros in an array to the end while maintaining the order of other elements.",
    14: "Find the subarray with the maximum product in an array.",
    15: "Find a continuous subarray that sums to a given value.",
    16: "Find the length of the longest consecutive sequence in an array.",
    17: "Check if two arrays are equal.",
    18: "Find the majority element in an array.",
    19: "Find all triplets in an array that sum to a given value.",
    20: "Find the missing ranges in an unsorted array.",
  };
  
  
  const [output, setOutput] = useState('');

  const handleRunCode = (code) => {
    try {
      // NOTE: Using eval for demonstration. Avoid using eval in production.
      const result = eval(code); 
      setOutput(result !== undefined ? result.toString() : 'Code executed successfully.');
    } catch (error) {
      setOutput(`Error: ${error.message}`);
    }
  };

  return (
    <div>
      <h2>Problem {id}</h2>
      <p>{problems[id] || "Problem not found!"}</p>
      <h3>Code Editor</h3>
      <CodeEditor onRunCode={handleRunCode} />

      <section className="output-container">
        <h3>Output:</h3>
        <pre className="output">{output || 'Your output will appear here.'}</pre>
      </section>
    </div>
  );
}

export default ProblemPage;
