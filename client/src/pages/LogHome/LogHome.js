import React from 'react'
import './LogHome.scss'
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
    <body>
      <header className="">
        <section className="container d-md-flex justify-content-center headerimagetext">
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

                    <p className="headertextp4 text-center fw-bolder lead text-primary">
                        I work Freelance!
                    </p>
                    </div>
                </div>
            </div>
        </section>
        </header>
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
                    <li>javascript</li>
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
                <h1>Front End Developer</h1>
                <br />
                <p>
                First impressions mean everything in business and a good website
                design is the key to exploiting this. In my opinion a great site
                is not measured by looks alone, but also by functionality and
                usability.
                </p>
                <p>
                I am proficient in HTML and I have a basic knowledge of structured
                programming languages and knowledge of system development,
                Processors, CSS and JavaScript.
                </p>
                <p>
                My objective is to create and maintain optimally functional
                websites and applications as tools in achieving the company’s
                mission and vision. As a part of a competent web developing team,
                I intend to generate maximum traffic to these projects by
                showcasing high-quality SEO content, user- and mobile-friendly
                navigation, and promotion to as many social media platforms as
                possible. One of my goals includes constantly improving my
                expertise in web development.
                </p>
                <p>
                I can prepare documents and keep accurate daily reports. I am
                self-motivated, I use good judgment and I have the ability to
                manage my time wisely to meet deadlines. I have excellent verbal
                and written skills that make it easy to understand information and
                to articulate my ideas clearly, so others can understand.
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
                    class="tools-logo m-auto p-2"
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
                    class="tools-logo m-auto p-2"
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
                    class="tools-logo m-auto p-2"
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
                    class="tools-logo m-auto p-2"
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
                    class="tools-logo m-auto p-2"
                    alt="Node-logo"
                />

                <h5 className="card-title m-auto fs-3 fw-bolder">Node.js</h5>
                </div>
            </div>
         </div>
        </section>
        </main>
        
        
  </body>
</div>
    )
}

export default LogHome
