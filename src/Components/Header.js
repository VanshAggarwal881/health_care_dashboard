import React from "react"; 
import './Header.css'

export default function Header(){
    return(
        <div className="header">
            <div className="logodiv"></div>

            <div className="nav"
            >
                <div className="overview flex">
                    <div className="logos homelogo"></div>
                    <div className="content">Overview</div>
                </div>
                <div className="patient flex">
                <div className="logos patientlogo"></div>
                <div className="content">Patients</div>
                </div>
                <div className="schedule flex">
                <div className="logos schedulelogo"></div>
                <div className="content">Schedule</div>
                </div>
                <div className="message flex">
                <div className="logos messagelogo"></div>
                <div className="content">Message</div>
                </div>
                <div className="transactions flex">
                <div className="logos transactionlogo"></div>
                <div className="content">Transactions</div>
                </div>
            </div>

            <div className="drside flex">
                <div className="drimg"></div>
                <div className="drinfo">
                    <p className="drname">Dr. Jose Simmons</p>
                    <p className="drof">General Practitioner</p>
                </div>

                <hr className="line"></hr>

                <div className="settings"></div>
                <div className="threedots">
                </div>

            </div>
        </div>
    )
}