import React from 'react'

import './Style.scss'

function IconsNavbar() {
    
    return (
        <div className="navbar2">
            <nav className="">
                    <a
                        href="https://github.com/MVRenaud" target={"#"}
                        className="text-decoration-none m-2 m-lg-0"
                    >
                        <i class="bi bi-github d-lg-block"></i></a>
                    <a
                        href="https://www.linkedin.com/in/matheus-renaud-a71069110/" target={"#"}
                        className="text-decoration-none m-2  m-lg-0"
                    >
                        <i class="bi bi-linkedin d-lg-block"></i></a>
                    <a
                        href="https://www.facebook.com/matheus.renaud" target={"#"}
                        className="text-decoration-none m-2 m-lg-0"
                    >
                        <i class="bi bi-facebook d-lg-block"></i></a>
            </nav>
        </div>
    )
}

export default IconsNavbar
