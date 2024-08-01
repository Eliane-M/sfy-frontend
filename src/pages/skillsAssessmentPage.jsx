import React from "react";
import NavBar from "../components/general/Navbar";
import { FaPlus } from "react-icons/fa";

const AnswerCard = ({answer}) => {
    return(
        <>
        <div style={{paddingBlock: '20px', display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center', border: '1px solid black', borderRadius: '12px', minWidth: '250px'}}>
            <FaPlus/>
            <p>{answer}</p>
        </div>
        </>
    )
}

const SkillsAssessmentPage = () => {
    return (
        <>
        <NavBar/>
        <div className="course-details-container">
            <div className="names">
                <div className="img-container">
                    <img src="" alt="" />
                </div>
                <div className="title">
                <h3>COURSE NAME</h3>
                <h4>Assessment</h4>
                </div>
                
            </div>

            <div>
                <div className="first-row" >
                    <h4>Question 1</h4>
                    <p style={{maxWidth: '800px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed 
                        vel purus auctor, consectetur neque vitae, bibendum nisi. Sed vel purus 
                        auctor, consectetur neque vitae, bibendum nisi. Sed vel purus auctor, consectetur neque vitae, bibendum nisi.</p>
                    <div className="answers" style={{display: 'flex', gap: '10px', flexWrap: 'wrap'}}>
                        <AnswerCard answer='answer 1'/>
                        <AnswerCard answer='answer 2'/>
                        <AnswerCard answer='answer 3'/>
                        <AnswerCard answer='answer 4'/>
                    </div>
                    
                </div>
            </div>
            <div>
                <div className="first-row" >
                    <h4>Question 2</h4>
                    <p style={{maxWidth: '800px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed 
                        vel purus auctor, consectetur neque vitae, bibendum nisi. Sed vel purus 
                        auctor, consectetur neque vitae, bibendum nisi. Sed vel purus auctor, consectetur neque vitae, bibendum nisi.</p>
                    <div className="answers" style={{display: 'flex', gap: '10px', flexWrap: 'wrap'}}>
                        <AnswerCard answer='answer 1'/>
                        <AnswerCard answer='answer 2'/>
                        <AnswerCard answer='answer 3'/>
                        <AnswerCard answer='answer 4'/>
                    </div>
                    
                </div>
            </div>
            <div>
                <div className="first-row" >
                    <h4>Question 3</h4>
                    <p style={{maxWidth: '800px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed 
                        vel purus auctor, consectetur neque vitae, bibendum nisi. Sed vel purus 
                        auctor, consectetur neque vitae, bibendum nisi. Sed vel purus auctor, consectetur neque vitae, bibendum nisi.</p>
                    <div className="answers" style={{display: 'flex', gap: '10px', flexWrap: 'wrap'}}>
                        <AnswerCard answer='answer 1'/>
                        <AnswerCard answer='answer 2'/>
                        <AnswerCard answer='answer 3'/>
                        <AnswerCard answer='answer 4'/>
                    </div>
                    
                </div>
            </div>
        </div>
        </>
    );

}

export default SkillsAssessmentPage;