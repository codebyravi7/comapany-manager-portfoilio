import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Entries = () => {
  const [entries, setEntries] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedEntries = JSON.parse(localStorage.getItem("jobEntries")) || [];
    setEntries(storedEntries.reverse());
  }, []);

  const updateStatus = (index, status) => {
    const updatedEntries = [...entries];
    updatedEntries[index].status = status;
    localStorage.setItem("jobEntries", JSON.stringify(updatedEntries));
    setEntries(updatedEntries);
  };

  const deleteEntry = (index) => {
    const updatedEntries = entries.filter((_, i) => i !== index);
    localStorage.setItem("jobEntries", JSON.stringify(updatedEntries));
    setEntries(updatedEntries);
  };

  const handleGoBack = () => {
    navigate("/");
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Rejected":
        return "bg-red-200"; // Light red for rejected
      case "Selected":
        return "bg-green-200"; // Light green for selected
      default:
        return "bg-yellow-200"; // Light yellow for others
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-lg font-bold mb-4">Job Entries</h2>
      <button
        onClick={handleGoBack}
        className="mb-4 bg-blue-500 text-white py-2 px-4 rounded-md"
      >
        Add New Entry
      </button>
      <ul>
        {entries.map((entry, index) => (
          <li
            key={index}
            className={`mb-4 p-4 border rounded-md ${getStatusColor(
              entry.status
            )}`}
          >
            <h3 className="font-bold">{entry.companyName}</h3>
            <p>Pay Scale: {entry.payScale}</p>
            <p>Job Type: {entry.jobType}</p>
            <p>Job Role: {entry.jobRole}</p>
            <p>Workplace: {entry.workplace}</p>
            <p>Date Created: {entry.dateCreated}</p>
            <p>Status: {entry.status}</p>
            <div className="flex space-x-2">
              <select
                value={entry.status}
                onChange={(e) => updateStatus(index, e.target.value)}
                className="border rounded-md p-1"
              >
                <option value="Selected">Selected</option>
                <option value="Rejected">Rejected</option>
                <option value="Interview">Interview</option>
                <option value="Aptitude Round">Aptitude Round</option>
                <option value="Coding Round">Coding Round</option>
              </select>
              <button
                onClick={() => deleteEntry(index)}
                className="bg-red-500 text-white py-1 px-3 rounded-md hover:bg-red-600 transition"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Entries;
