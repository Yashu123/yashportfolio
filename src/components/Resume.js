import React from 'react';
import '../Resume.css'
import amazonPic from '../images/Amazon-Logo_Feature.jpg'
import verizonPic from '../images/verizon-logo-phone-7147.webp'
import deltaPic from '../images/delta-logo-removebg-preview.png'
import deltaPict from '../images/delta-pic.jpg'
import cuDenverPic from '../images/cudenver.jpg'


export default function Resume() {

    return (
        <div className="resume-container">
            <div className="resume-title">
                Want to know about me. Talk to me, thats the only way you can know better me.
            </div>
            <div className="resume-workExperience">
                <p>Having overall 2+ years of Experience in software Industry.
                I am API developer with a demonstrated history of working in the airlines,
                telecommunication industries. Skilled in MySQL, MongoDb, Oracle Database,
                Spring Boot,REST, NodeJS, Python(flask,Django)frameworks and React JS.
                Strong engineering professional with a Master's degree focused in Computer
                   and Information Sciences and Support Services from University of Colorado Denver </p>
            </div>
            <div className="resume-workCompanies">
                <div className="resume-company1">
                    <div className="company1-info">
                        <img className="amazon-pic" src={amazonPic} alt="amazon.jpg" />
                    </div>
                    <div className="company1-JobDescription">
                        <p>I started my career as "Customer Service Asscociate" at Amazon.
                        My job was to assist customers with their products delivery. This role in
                        amazon taught me how to deal with difficult situations with different people.
                    </p>
                    </div>
                </div>
                <div className="resume-company2">
                    <div className="company2-info">
                        <img className="delta-pic" src={deltaPic} alt="delta.jpg" />
                        <img className="delta-pic1" src={deltaPict} alt="delta.jpg" />

                    </div>
                    <div className="company2-JobDescription">
                        <p> My designation at Delta was Java Developer. I worked in project named "SNAPP" which
                        is currently being used at Airports at Delta check-in counters. My work was to refactor existing SOAP services to
                        RestFul Web Services using Java. Used Spring Framework to implement REST API's.
                        We at Delta followed Agile Methodology.
                             </p>
                    </div>
                </div>
                <div className="resume-company3">
                    <div className="company3-info">
                        <img className="verizon-pic" src={verizonPic} alt="verizon.jpg" />
                    </div>
                    <div className="company3-JobDescription">
                        At verizon, my designation is NodeJS Developer. Currently, in this company i am working on a project
                        named "VSON" which is about optimizing Network towers through algorithms. Using Express JS Framework to
                        implement API's in Node. We follow Agile Methodology at Verizon.
                        </div>
                </div>
            </div>
        </div>
    )
}

