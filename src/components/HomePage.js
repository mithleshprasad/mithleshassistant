<div className={`App `}>
<header className="App-header">
  <div className="content">

  <h1>DSA Learning Hub</h1>
  </div>
  <hr />
  <div className="content">
    <section className="output-container">
  <h1>Master Data Structures and Algorithms Step by Step</h1>
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
      {/* <button onClick={fetchProblems}>Fetch Problems</button> */}
      <h2>API Response</h2>
      <pre id="output">{output1}</pre>
    </section>

 
  
   
  </div>
</header>

<footer>
  <p>&copy; 2024 DSA Learning Hub. All Rights Reserved.</p>
</footer>
</div>