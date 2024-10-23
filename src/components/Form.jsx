import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const JobForm = () => {
  const [companyName, setCompanyName] = useState("");
  const [payScale, setPayScale] = useState("2000");
  const [jobType, setJobType] = useState("Intern");
  const [jobRole, setJobRole] = useState("Web Developer");
  const [workplace, setWorkplace] = useState("Work from Home");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const entry = {
      companyName,
      payScale,
      jobType,
      jobRole,
      workplace,
      dateCreated: new Date().toLocaleDateString(),
      status: "Pending",
    };
    const existingEntries =
      JSON.parse(localStorage.getItem("jobEntries")) || [];
    localStorage.setItem(
      "jobEntries",
      JSON.stringify([...existingEntries, entry])
    );
    navigate("/entries");
  };

  return (
    <div className="">
      <form
        onSubmit={handleSubmit}
        className="border-2 max-w-md mx-auto p-4 bg-white shadow-lg rounded-lg"
      >
        <h2 className="text-lg font-bold mb-4 text-center">Add Job Entry</h2>
        <div className="mb-4 p-2 ouline-none border-2 rounded-lg border-blue-200">
          <label className="block font-medium text-gray-700">
            Company Name
          </label>
          <input
            type="text"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            className="p-1 border-2 mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            required
          />
        </div>
        <div className="mb-4 p-2 ouline-none border-2 rounded-lg border-blue-200">
          <label className="block text-sm font-medium text-gray-700">
            Pay Scale
          </label>
          <select
            value={payScale}
            onChange={(e) => setPayScale(e.target.value)}
            className="p-1 border-2 mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          >
            <option value="2000">2000</option>
            <option value="3000">3000</option>
            <option value="5000">5000</option>
            <option value="8000">8000</option>
            <option value="10000">10000</option>
            <option value="20000">20000</option>
            <option value="4-5 lakh">4-5 lakh</option>
            <option value="6-8 lakh">6-8 lakh</option>
            <option value="8-12 lakh">8-12 lakh</option>
            <option value="above 12 lakh">above 12 lakh</option>
          </select>
        </div>
        <div className="mb-4 p-2 ouline-none border-2 rounded-lg border-blue-200">
          <label className="block text-sm font-medium text-gray-700">
            Job Type
          </label>
          <select
            value={jobType}
            onChange={(e) => setJobType(e.target.value)}
            className="p-1 border-2 mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          >
            <option value="Intern">Intern</option>
            <option value="Full-Time">Full-Time</option>
          </select>
        </div>
        <div className="mb-4 p-2 ouline-none border-2 rounded-lg border-blue-200">
          <label className="block text-sm font-medium text-gray-700">
            Job Role
          </label>
          <select
            value={jobRole}
            onChange={(e) => setJobRole(e.target.value)}
            className="p-1 border-2 mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          >
            <option value="Web Developer">Web Developer</option>
            <option value="Full Stack">Full Stack</option>
            <option value="Front End">Front End</option>
            <option value="Backend">Backend</option>
            <option value="SDE">SDE</option>
          </select>
        </div>
        <div className="mb-4 p-2 ouline-none border-2 rounded-lg border-blue-200">
          <label className="block text-sm font-medium text-gray-700">
            Workplace
          </label>
          <select
            value={workplace}
            onChange={(e) => setWorkplace(e.target.value)}
            className="p-1 border-2 mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          >
            <option value="Work from Home">Work from Home</option>
            <option value="Office">Office</option>
            <option value="Hybrid">Hybrid</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default JobForm;
