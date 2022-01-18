import React, {useEffect, useState} from 'react'
import './Style.scss'
import ProfilImg1 from '../../images/profilbild2.jpg'
import EnFlag from '../../images/enFlag.png'
import { Link, useNavigate } from "react-router-dom";

import Card from 'react-bootstrap/Card'

function MyLebenslauf() {
    const navigate = useNavigate();
    const [lang, setLang] = useState('')

    const languageFunction = async () =>{
        if(lang==='De'){
            setLang('En')
            navigate("/myresume")
        }else{
            setLang('De')
        }
    }
    useEffect(()=>{
        languageFunction()
    }, [])


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
                    <div className="col-md-8">
                        <div className="card-body">
                            <h1 className="card-title mb-3">Matheus Renaud</h1>
                                
                            <h5 className="card-text text-md-start">WEB DEVELOPER</h5>
                            <p className="card-text text-md-start">Die Tätigkeit als Full-Stack Developer stellt für mich eine reizvolle berufliche Perspektive dar. Ich würde mich freuen, meine Berufslaufbahn bei Ihnen zu beginnen.

Zurzeit gehe ich noch zur Schule. Meine ersten beruflichen Erfahrungen sammelte ich als Tutor am DCI Digital Career Institute in der Softwareentwicklung gewinnen.

Mit mir gewinnt Ihr Unternehmen einen begeisterungsfähigen, kreativen und teamfähigen Mitarbeiter. Besonders hervorheben möchte ich meine schnelle Auffassungsgabe, mein Einfühlungsvermögen und meine Verantwortungsbereitschaft. Ich besitze gute Kenntnisse im Umgang mit JavaScript. Des Weiteren verfüge ich über fließende Deutsch- und Englischkenntnisse. Ich widme mich meinen neuen Aufgaben und Herausforderungen stets mit großer Motivation und vollem Einsatz.</p>
                            <span><img src={EnFlag} onClick={languageFunction} className='' alt='english flag' />For english</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container card mb-4">
                <h2 className="card-header">
                    Arbeitserfahrung
                </h2>
                <div className="card-body mx-2">
                    <h5 className="card-text mb-4 text-md-start">Tutor Lehrerassistent</h5>
                            <h6 className='card-text text-md-start'>DCI Digital Career Institute</h6>
                            <p className='card-text text-md-start'>Mai 2021 - April 2022</p>
                            <ul>
                                <li className="card-text text-start">Unterstützung und Anleitung bei Lernschwierigkeiten von Schülern.</li>

                                <li className="card-text text-start">Unterstützung bei studentischen Projekten.</li>

                            </ul>
                            
                </div>
                <div className="card-body  mx-2">
                    <h5 className="card-text mb-4 text-md-start">Bar Supervisor</h5>
                            <h6 className='card-text text-md-start'>Park Inn by Radisson‎ Cologne City West</h6>
                            <p className='card-text text-md-start'>September 2019 - Oktober 2020</p>
                            <ul>
                                <li className="card-text text-start">Schulung des Personals</li>

                                <li className="card-text text-start">Überarbeitung und Erstellung neuer Barmenüs</li>

                                <li className="card-text text-start">Bearbeitung von Kundenbeschwerden</li>



                            </ul>
                            
                </div>
                <div className="card-body  mx-2">
                    <h5 className="card-text mb-4 text-md-start">Internationaler Reiseleiter & Veranstalter</h5>
                            <h6 className='card-text text-md-start'>New It Club Brazil</h6>
                            <p className='card-text text-md-start'>Juli 2011 - Juli 2019</p>
                            <ul>
                                <li className="card-text text-start">Betrieb und Logistik von Reisegruppen.</li>

                                <li className="card-text text-start">Guiding-Gruppen in Europa und den USA</li>
                                <li className="card-text text-start">Entwicklung und Verbesserung von Reiserouten für Gruppen</li>

                            </ul>
                            
                </div>
                
            </div>
            <div className="container card mb-4">
                <h2 className="card-header">
                    Bildung
                </h2>
                <div className="card-body mx-2">
                    <h3 className="card-text mb-4 text-md-start">Zertifizierung Full-Stack-Entwickler</h3>
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
                    Fähigkeiten
                </h2>
                <div className="card-body mx-2">
                    
                            <ul>
                                <li className="card-text text-start">Front-End / Back-End Coding</li>

                                <li className="card-text text-start">Custom Databases</li>
                                <li className="card-text text-start">User Interface / User Experience</li>
                                <li className="card-text text-start">Web-Design</li>
                                <li className="card-text text-start">Full-Stack-Web- und Multiplattform-Mobile-App-Entwicklung</li>

                            </ul>
                            
                </div>
                
                
            </div>
                
        </div>
    
    )
}

export default MyLebenslauf
