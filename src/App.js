// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import Home from './components/Home';
// import FetchAPI from './components/FetchAPI';
// import CodeExecution from './components/CodeExecution';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css'; // Import the updated CSS file
// import ProblemPage from './components/ProblemPage';

// function App() {
//   return (
//     <Router>
//       <div className="d-flex flex-column min-vh-100">
//         <div className="d-flex flex-grow-1">
//           {/* Sidebar */}
//           <nav className="bg-dark text-white vh-100 p-3" style={{ width: '250px' }}>
//             <h3 className="text-center">DSA Hub</h3>
//             <ul className="nav flex-column">
//               <li className="nav-item">
//                 <Link to="/" className="nav-link text-white">Home</Link>
//               </li>
//               <li className="nav-item">
//                 <Link to="/fetch-api" className="nav-link text-white">Fetch API</Link>
//               </li>
//               <li className="nav-item">
//                 <Link to="/code-execution" className="nav-link text-white">Code Execution</Link>
//               </li>
//             </ul>
//           </nav>

//           {/* Main Content */}
//           <div className="flex-grow-1">
//             <header className="bg-primary text-white p-3">
//               <h1 className="mb-0">DSA Learning Hub</h1>
//             </header>

//             <main className="p-4">
//               <Routes>
//                 <Route path="/" element={<Home />} />
//                 <Route path="/fetch-api" element={<FetchAPI />} />
//                 <Route path="/code-execution" element={<CodeExecution />} />
//                 <Route path="/problem/:type/:id" element={<ProblemPage />} />

//               </Routes>
//             </main>
//           </div>
//         </div>

//         {/* Footer */}
//         <footer className="bg-dark text-white text-center py-3 mt-auto">
//           &copy; 2024 DSA Learning Hub. All Rights Reserved.
//         </footer>
//       </div>
//     </Router>
//   );
// }

// export default App;


import React from "react";
import JarvisAssistant from "./JarvisAssistant";
import "./App.css"; // Include your styles here

function App() {
  return (
    <div className="App">
      <JarvisAssistant />
    </div>
  );
}

export default App;
