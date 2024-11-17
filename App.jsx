import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Mainpage from './components/Mainpage/Mainpage';
import Sidebar from './components/Mainpage/Sidebar/Sidebar';
import CreateJobDescription from './components/JobDescription/Create/CreateJobDescription';
import EditJobDescription from './components/JobDescription/Edit/EditJobDescription';
import CandidateFiltering from './components/CandidateFiltering/CandidateFiltering';
import FilteredCandidates from './components/FilteredCandidates/FilteredCandidates';

function App() {
  const [activeComponent, setActiveComponent] = useState('main');
  const [resumeData, setResumeData] = useState([]);

  const handleComponentChange = (component) => setActiveComponent(component);
  const handleResumeUpload = (data) => {
    if (data && data.length > 0) {
      setResumeData(data);
    } else {
      console.warn("No data available from resume upload.");
    }
  };

  return (
    <Router>
      <div className='APPA' style={{ overflowY: 'auto', height: '100vh', backgroundColor:'#d16501' }}>
        <Navbar onComponentChange={handleComponentChange} handleResumeUpload={handleResumeUpload} />

        <div className="main-content">
          {activeComponent === 'createJob' && <CreateJobDescription />}
          {activeComponent === 'editJob' && <EditJobDescription />}
        
        </div>

        <Routes>
          <Route path="/" element={<Sidebar onComponentChange={handleComponentChange}/>} />
          <Route path="/job-description/create" element={<CreateJobDescription />} />
          <Route path="/job-description/edit" element={<EditJobDescription />} />
          <Route path="/filteredCandidates" element={<FilteredCandidates/>}/>
          <Route path="/candidateFiltering" element={<CandidateFiltering  data={resumeData}/>}/>
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
