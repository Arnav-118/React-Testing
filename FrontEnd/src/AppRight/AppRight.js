import React from "react";
import '../App.css';
import './AppRight.css';

function AppRight()
{
    return(
        <div className="appRight">
            <div className="CTASide">
                <div className="CTA">
                <div className="icons"></div>
                <div className="CTADetails">
                    <p className="title">Organised Analysis</p>
                    <p className="textDetails1">
                        100 + management software suite includes<br />
                        everything your business needs to flourish,<br />
                        including Assignment and notes monitoring, automated attendance, and syllabus management.</p>
                    <p className="title">Attendance List</p>
                    <p className="textDetails">
                        A better and faster way to manage attendance with our adaptive algorithm that is personalized for you</p>
                    <p className="title">Take Tests</p>
                    <p className="textDetails">
                        Using a variety of tools, create many subjective and objective exams with easy analysis and grading system</p>
                    <p className="title">Colloborative doubt solving</p>
                    <p className="textDetails">
                        Clear all student doubts easily and help them move towards their goals</p>
                    </div>
                </div>
            </div>
        </div>
  );
}

export default AppRight;