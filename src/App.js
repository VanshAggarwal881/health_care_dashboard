// import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import './App.css';

import Header from './Components/Header';
import Patients from './Components/Patients';
import DiagnosisHistory from './Components/DiagnosisHistory';
import PatientInfo from './Components/PatientInfo';
import DiagnosticList from './Components/DiagnosticList';
import LabResults from './Components/LabResults';

function App() {
  const [patients, setPatients] = useState([]);
  const [checkupdata, setCheckupData] = useState(null);
  const [diagnosticList, setDiagnosticList] = useState([]);
  const [labResults, setLabResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let username = 'coalition';
        let password = 'skills-test';
        let auth = btoa(`${username}:${password}`);

        const response = await fetch('https://fedskillstest.coalitiontechnologies.workers.dev', {
          headers: {
            'Authorization': `Basic ${auth}`
          }
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        setPatients(data); // Store the fetched data in the state
        
        if (data[3]) { // Ensure patients data is available before accessing it
          setCheckupData(data[3].diagnosis_history[0]);
          setDiagnosticList(data[3].diagnostic_list); // Set the diagnostic list
          setLabResults(data[3].lab_results); // Set the lab results
        }
      } catch (error) {
        console.warn(error);
      }
    };

    fetchData(); // Call the async function

  }, []); // Empty dependency array ensures this runs only once after the component mounts

    const bloodPressureData = patients.length > 0 
        ? patients[3].diagnosis_history.slice(0, 6).reverse().map(p => ({
            month: `${p.month} ${p.year}`,
            systolic: p.blood_pressure.systolic.value,
            diastolic: p.blood_pressure.diastolic.value
        }))
        : [];

  return (
    <div className='artboard'>
      <Header></Header>
      <div className='about'>
        <Patients patients = {patients}></Patients>
        <DiagnosisHistory bloodPressureData={bloodPressureData} checkupdata = {checkupdata}></DiagnosisHistory>
        <PatientInfo></PatientInfo>
        

      </div>
      <DiagnosticList diagnosticList={diagnosticList}></DiagnosticList>
      <LabResults labResults={labResults}></LabResults>
    </div>
  );
}

export default App;
