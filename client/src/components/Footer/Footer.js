import React from 'react'
import "./Style.scss"

function Footer() {
    return (
        <div className='footer' id='footer'>
            <footer className="container">
                <section className="text-center">
                    <section className="m-0 footer-text">
                        <div className="footer-image"></div>
                        <div id="contact" className="absolute-bottom p-3 footerColorClass">
                                <h2 className='text-light'>Matheus Vegele Renaud</h2>
                                <p className='text-light'>Cologne / Germany</p>
                                <p className='text-light'>matheusvrenaud@gmail.com</p>
                                <p className='text-light'>+4917662519483</p>

                                <span className='text-light'>
                                &copy; 2021 Made by Matheus-Renaud. All rights reserved!
                                </span>
                        </div>
                    </section>
                </section>
            </footer>
        </div>
    )
}

export default Footer
