import React from 'react'
import './LogHome.scss'
import './Style.scss'
import Weather from './Weather'
import ProfilImg from '../../images/profilbild2.jpg'
import Sass from '../../images/sass.png'
import JsImg from '../../images/javascript.png'
import HtmlImg from '../../images/HTML5.png'
import CSS3Img from '../../images/css3.jpeg'
import ReactImg from '../../images/reactLogo.png';
import NodeImg from '../../images/nodeLogo.png'



function LogHome() {
    return (
<div>

      <div className="header" id='home'>
        
        <section className="container d-md-flex justify-content-center headerimagetext">
            <Weather />
            <div className="header-items d-lg-flex">
                <div className="justify-content-center">
                    <div className="headertext fw-bolder lead">
                        <p className=" translate-middle">
                        <span className="position-relative w-100"></span>
                        </p>
                    
                    </div>

                    <div className="profilbild tilt-in-top-2">
                    <img src={ProfilImg}
                        className=""
                        alt="profileImage"
                    />

                    {/* <p className="headertextp4 text-center fw-bolder lead text-primary">
                        I work Freelance!
                    </p> */}
                    </div>
                </div>
            </div>
        </section>
        </div>
        <main>
        <section className="container my-5">
            <div className="row justify-content-center gap-3">
            <div className="col-10">
                <div className="header-card header-card-lg full-stack-card">
                <div className="gg-laptop"></div>
                <ul className="list-unstyled m-2">
                    <h5>Full-Stack Developer</h5>
                    <li>HTML5</li>
                    <li>Sass</li>
                    <li>Bootstrap</li>
                    <li>JavaScript</li>
                    <li>Githup</li>
                </ul>
                </div>
            </div>
            <div className="col-10">
                <div className="header-card header-card-lg backend-card">
                <div className="gg-terminal"></div>
                <ul className="list-unstyled m-2">
                    <h5>Backend Developer</h5>
                    <li>Node.js</li>
                    <li>NoSQL</li>
                    <li>MongoDB</li>
                    <li>Express.js</li>
                </ul>
                </div>
            </div>
            <div className="col-10">
                <div className="header-card header-card-lg frontend-card">
                <div className="gg-browser"></div>
                <ul className="list-unstyled m-2">
                    <h5>Frontend Developer</h5>
                    <li>React.js</li>
                    <li>Bootstrap</li>
                    <li>Axios</li>
                    <li>JQuery</li>
                    <li>ContextAPI</li>
                </ul>
                </div>
            </div>
            </div>
        </section>
        <section className="container main-container my-5 p-3" id="developer">
            <div className="row justify-content-sm-between">
            <div className="col-lg-12 fs-3 text">
                <h1>Full Stack Developer</h1>
                <br />
                <p>
                As a recent graduate from the DCI Digit Career Institute with an Associate of Technology in Web Development, I am extremely interested in the Full Stack Developer opportunity.  I am confident that I am well-prepared to be a valuable contributor to company growth and success.
In today's economy, there's no time to waste on workers who lack the necessary skills and motivation. I've got what you need.
                </p>
                <p>
                Through my academic journey, I applied a strong focus on building my Node.js and React abilities. I am detail-oriented and meticulous when managing competing priorities within tight deadlines. I work best in roles where utilizing JavaScript allows me to make a positive impact while using creative problem-solving to resolve issues and achieve goals.
                </p>
                <p>
                My academic strengths have greatly contributed to the development of my teamwork, time-management and problem-solving skills. I bring clear and effective communicating to build professional connections with co-workers, management and customers. I would welcome the opportunity to further discuss the details of my experience and attributes which I believe will be an asset to the your team. Please review my resume for additional insight into my background. 
                </p>
                <p>
                    Thank you for your time and consideration.
                </p>
            </div>
            <div
                className="
                col-sm-12 col-md-6
                gap-sm-3
                col-xl-4 col-xxl-4
                gap-xxl-5
                d-flex
                justify-content-center
                my-3
                "
            >
                <div className="card sale-card">
                <img
                    src={HtmlImg}
                    className="tools-logo m-auto p-2"
                    alt="html-logo"
                />

                <h5 className="card-title m-auto fs-3 fw-bolder">HTML5</h5>
                </div>
            </div>
            <div
                className="
                col-sm-12 col-md-6
                gap-sm-3
                col-xl-4 col-xxl-4
                gap-xxl-5
                d-flex
                justify-content-center
                my-3
                "
            >
                <div className="card sale-card">
                <img
                    src={CSS3Img}
                    className="tools-logo m-auto p-2"
                    alt="css3-logo"
                />

                <h5 className="card-title m-auto fs-3 fw-bolder">CSS3</h5>
                </div>
            </div>
            <div
                className="
                col-sm-12 col-md-6
                gap-sm-3
                col-xl-4 col-xxl-4
                gap-xxl-5
                d-flex
                justify-content-center
                my-3
                "
            >
                <div className="card sale-card">
                <img
                    src={Sass}
                    className="tools-logo m-auto p-2"
                    alt="sass-logo"
                />

                <h5 className="card-title m-auto fs-3 fw-bolder">Sass</h5>
                </div>
            </div>
            <div
                className="
                col-sm-12 col-md-6
                gap-sm-3
                col-xl-4 col-xxl-4
                gap-xxl-5
                d-flex
                justify-content-center
                my-3
                "
            >
                <div className="card sale-card">
                <img
                    src={JsImg}
                    className="tools-logo m-auto p-2"
                    alt="js logo"
                />

                <h5 className="card-title m-auto fs-3 fw-bolder">JavaScript</h5>
                </div>
            </div>
            <div
                className="
                col-sm-12 col-md-6
                gap-sm-3
                col-xl-4 col-xxl-4
                gap-xxl-5
                d-flex
                justify-content-center
                my-3
                "
            >
                <div className="card sale-card">
                <img
                    src={ReactImg}
                    className="tools-logo m-auto p-2"
                    alt="react-logo"
                />

                <h5 className="card-title m-auto fs-3 fw-bolder">React.js</h5>
                </div>
            </div>
            <div
                className="
                col-sm-12 col-md-6
                gap-sm-3
                col-xl-4 col-xxl-4
                gap-xxl-5
                d-flex
                justify-content-center
                my-3
                "
            >
                <div className="card sale-card">
                <img
                    src={NodeImg}
                    className="tools-logo m-auto p-2"
                    alt="Node-logo"
                />

                <h5 className="card-title m-auto fs-3 fw-bolder">Node.js</h5>
                </div>
            </div>
         </div>
        </section>
        </main>
</div>
    )
}

export default LogHome
