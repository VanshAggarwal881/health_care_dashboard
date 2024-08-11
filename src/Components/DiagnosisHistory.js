import React from "react";
import './DiagnosisHistory.css'
import BloodPressureChart from "./BloodPressureChart";

export default function DiagnosisHistory({ bloodPressureData, checkupdata }) {
    console.log({ checkupdata });

    // Conditionally render the checkup information only if checkupdata is available
    if (!checkupdata) {
        return <div>Loading checkup data...</div>;
    }

    return (
        <div className="dh patients">
            <div className="heading">
                <h4>Diagnosis History</h4>
            </div>

            <div className="chartdiv">
                <BloodPressureChart bloodPressureData={bloodPressureData}></BloodPressureChart>
            </div>

            <div className="checkup">
                <div className="rr factors">
                    <div className="factor png"></div>
                    <div className="checkupname">
                        <span>Respiratory Rate</span>
                        <div className="values">{checkupdata.respiratory_rate.value} bpm</div>
                    </div>

                    <div className="levels">{checkupdata.respiratory_rate.levels}</div>
                </div>
                <div className="temp factors">
                    <div className="factor png"></div>
                    <div className="checkupname">
                        <span>Temperature</span>
                        <div className="values">{checkupdata.temperature.value}&#176;F</div>
                    </div>
                    <div className="levels">{checkupdata.temperature.levels}</div>
                </div>
                <div className="hr factors">
                    <div className="factor png"></div>
                    <div className="checkupname">
                        <span>Heart Rate</span>
                        <div className="values">{checkupdata.heart_rate.value} bpm</div>
                    </div>
                    <div className="levels"> <i class="fa-solid fa-caret-down"></i> {checkupdata.heart_rate.levels}</div>
                </div>
            </div>
        </div>
    );
}
