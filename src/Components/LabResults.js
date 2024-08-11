import React from "react";
import './LabResults.css'


export default function LabResults({ labResults }){
    return (
        <div className="lr patients">
            <div className="heading">
                <h4>Lab Results</h4>
            </div>

            <div className="tests">
            {labResults.map((test, index) => (
                    <div key={index} className="test-item">
                        <div className="test-name">{test}</div>
                        <i className="fa-solid fa-download"></i>
                    </div>
                ))}
            </div>
        </div>
    )
    
}