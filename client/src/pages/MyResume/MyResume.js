import React, {useEffect, useState} from 'react'
import './Style.scss'
import ProfilImg1 from '../../images/profilbild2.jpg';

import GeFlag from '../../images/gerFlag.png'


import { Link, useNavigate } from "react-router-dom";


import Card from 'react-bootstrap/Card'

function MyResume() {
    const navigate = useNavigate();
    const [lang, setLang] = useState('')

    const languageFunction = async () =>{
        if(lang==='En'){
            setLang('De')
            navigate("/mylebenslauf")
        }else{
            setLang('En')
        }
    }

    useEffect(()=>{
        languageFunction()
    }, [])
 
    console.log(lang);




    return (
        <div className="">
            <div className="container card header_card">
                <div className="row g-0">
                    <div className="col-md-2 ">
                        <img src={ProfilImg1}
                            className="img-thumbnail p-3 rounded-start profileImg"
                            alt="profileImage"
                        />
                    </div>
                    <div className="col-md-8 textClass">
                        <div className="card-body">
                            <h1 className="card-title mb-3">Matheus Renaud</h1>
                            
                            <h5 className="card-text text-md-start">WEB DEVELOPER</h5>
                            <p className="card-text text-md-start">I'm an enthusiastic Junior
                            Web Developer, graduating
                            from the Digital Career
                            Institute.
                            Specialized in Smartphone
                            Applications and Company
                            Websites.
                            I am fluent in English,
                            German, and Portuguese
                            additional basic knowledge in
                            Spanish.</p>
                            <span><img src={GeFlag}
                                onClick={languageFunction}
                                 className='' alt='german flag' />Auf Deutsch umzustellen</span>
                            
                        </div>
                    </div>
                </div>
            </div>

            <div className="container card mb-4">
                <h2 className="card-header">
                    Experience
                </h2>
                <div className="card-body mx-2">
                    <h5 className="card-text mb-4 text-md-start">Tutor Teacher Assistant</h5>
                            <h6 className='card-text text-md-start'>DCI Digital Career Institute</h6>
                            <p className='card-text text-md-start'>May 2021 - April 2022</p>
                            <ul>
                                <li className="card-text text-start">Support and guidance in students' learning
                                difficulties</li>

                                <li className="card-text text-start">Support on student projects</li>

                            </ul>
                            
                </div>
                <div className="card-body  mx-2">
                    <h5 className="card-text mb-4 text-md-start">Bar Supervisor</h5>
                            <h6 className='card-text text-md-start'>Park Inn by Radisson‎ Cologne City West</h6>
                            <p className='card-text text-md-start'>September 2019 - October 2020</p>
                            <ul>
                                <li className="card-text text-start">Training to staff</li>

                                <li className="card-text text-start">Revision and creating new bar menus</li>

                                <li className="card-text text-start">Handling customer complaints</li>



                            </ul>
                            
                </div>
                <div className="card-body  mx-2">
                    <h5 className="card-text mb-4 text-md-start">International Tour Guide & Operator</h5>
                            <h6 className='card-text text-md-start'>New It Club Brazil</h6>
                            <p className='card-text text-md-start'>July 2011 - July 2019</p>
                            <ul>
                                <li className="card-text text-start">Tour Groups Operation & Logistics</li>

                                <li className="card-text text-start">Guiding groups in Europe and the USA</li>
                                <li className="card-text text-start">Developing and improving travel itineraries for groups</li>

                            </ul>
                            
                </div>
                
            </div>
            <div className="container card mb-4">
                <h2 className="card-header">
                    Education
                </h2>
                <div className="card-body mx-2">
                    <h3 className="card-text mb-4 text-md-start">Certification Full-stack Developer</h3>
                    <ul>
                        <li className='card-text list-unstyled text-md-start'>DCI Digital Career Institute </li>
                        <li className='card-text list-unstyled text-md-start'>2022</li>
                    </ul>           
                </div>
                <div className="card-body mx-2">
                    <h3 className="card-text mb-4 text-md-start">Bachelor Tourism & Event Management</h3>
                    <ul>
                        <li className='card-text list-unstyled text-md-start'>SENAC - School of Hotel Management</li>
                        <li className='card-text list-unstyled text-md-start'>2002</li>
                    </ul>           
                </div>

                
                
            </div>
            <div className="container card">
                <h2 className="card-header">
                    Skills
                </h2>
                <div className="card-body mx-2">
                    
                            <ul>
                                <li className="card-text text-start">Front-End / Back-End Coding</li>

                                <li className="card-text text-start">Custom Databases</li>
                                <li className="card-text text-start">User Interface / User Experience</li>
                                <li className="card-text text-start">Web Design</li>
                                <li className="card-text text-start">Full Stack Web and Multiplatform Mobile App Development</li>

                            </ul>
                            
                </div>
                
                
            </div>
                
        </div>
    
    )
}

export default MyResume
