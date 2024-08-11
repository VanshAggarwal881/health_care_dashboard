import React from "react";
import './Patients.css';

export default function Patients({ patients }) {
    return (
        <div className="patients">
            <div className="heading">
                <h4>Patients</h4>
                <i className="fa-solid fa-magnifying-glass"></i>
            </div>

            <div className="patient-list">
                {/* Loop through each patient and render their information */}
                {patients.map((patient, index) => (
                    <div className="patient-info" key={index}>
                        <div className="paitent-img">
                            <img src={patient.profile_picture} alt={`${patient.name}`} />
                        </div>
                        <div className="patient-detail">
                            <p className="patient-names drname">{patient.name}</p>
                            <span className="gender drof">{patient.gender}, {patient.age}</span>
                            {/* <span className="age">{patient.age}</span> */}
                        </div>

                        {/* <div className="threedots"></div> */}
                    </div>
                ))}
            </div>
        </div>
    );
}
