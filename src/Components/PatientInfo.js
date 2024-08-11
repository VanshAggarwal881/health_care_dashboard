import {React} from 'react';
import './PatientInfo.css'

export default function PatientInfo(){
    return(
        <div className="patientinfo patients">
            <div className='patientpng'></div>
            <div className='patient-name'>Jessica Taylor</div>

            <div className='basic-info'>
                <div className='dob inner-basic-info'>
                    <div className='dob-icon info-icon'></div>
                    <div className='dob-context'>
                        <p>Date of Birth</p>
                        <h4>August 23, 1996</h4>
                    </div>
                    
                </div>
                <div className='p-gender inner-basic-info'>
                <div className='gender-icon info-icon'></div>
                    <div className='dob-context'>
                        <p>gender</p>
                        <h4>Female</h4>
                    </div>
                </div>

                <div className='p-contact-info inner-basic-info'>
                <div className='contact-icon info-icon'></div>
                    <div className='dob-context'>
                        <p>contact info.</p>
                        <h4>(415) 555-1234</h4>
                    </div>
                </div>

                <div className='p-e-contact-info inner-basic-info'>
                <div className='contact-icon info-icon'></div>
                    <div className='dob-context'>
                        <p>Emergency Contacts</p>
                        <h4>(415) 555-5678</h4>
                    </div>
                </div>

                <div className='insurance inner-basic-info'>
                <div className='insurance-icon info-icon'></div>
                    <div className='dob-context'>
                        <p>Insurance Provider</p>
                        <h4>Sunrise Health Assurance</h4>
                    </div>
                </div>

            </div>

            <div className='show-btn-div'>

                <div className='btn-div'>
                Show All Information

                </div>

            </div>

        </div>
    )
}