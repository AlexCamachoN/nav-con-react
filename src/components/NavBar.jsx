import React from 'react'
import logo from '../logoblanco.png';



function NavBar() {
    return ( 
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src={logo} width='100'/>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <a className="nav-link " aria-current="page" href="#">Inicio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Obras</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Reconocimientos</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link ">Novedades</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link ">🛒🛒🛒
                                
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;
