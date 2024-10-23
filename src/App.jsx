import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import JobForm from "./components/Form";
import Entries from "./components/Entries";
import "./index.css";

function App() {
  return (
    <Router>
      <div className="bg-custom bg-cover bg-center min-h-screen">
        <Routes>
          <Route path="/" element={<JobForm />} />
          <Route path="/entries" element={<Entries />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
