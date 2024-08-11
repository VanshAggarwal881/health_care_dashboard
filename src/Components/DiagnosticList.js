import React from "react";
import './DiagnosticList.css'


export default function DiagnosticList({ diagnosticList }){
    return(
        <div className="dl patients">
            <div className="heading">
                <h4>Diagnostic List</h4>
            </div>

            <div className="dl-description dl-common">
                <div>Problem/Diagnosis</div>
                <div className="dl-common-description">Description</div>
                <div>Status</div>

            </div>

            <div className="dl-list">
            {diagnosticList.map((diagnosis, index) => (
                    <div key={index} className="dl-item dl-common">
                        <div className="dl-name">{diagnosis.name}</div>
                        <div className="dl-desc dl-common-description">{diagnosis.description}</div>
                        <div className="dl-status">{diagnosis.status}</div>
                    </div>
                ))}

            </div>

        </div>
    )
}