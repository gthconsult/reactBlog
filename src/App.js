import React from 'react';
import Navbar from './Navbar';
import Content from './Content'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Create from './Create';
import BlogDetail from './BlogDetail';
function App() {
  return (
    <Router>
        <div className="App">
              <Navbar/>
            <div className="content">
            <Routes>
                <Route path="/" element={<Content />} />
                <Route path="/create" element={<Create />} />
                <Route path="/blog/:id" element={<BlogDetail />} />
           </Routes>
            
            </div>
        </div>
    </Router>
  );
}

export default App;
