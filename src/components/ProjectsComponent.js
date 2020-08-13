import React from 'react';
import { Jumbotron, Media } from 'reactstrap';
import Pokeball from '../images/pokeffective.png';
import InterlabLogo from '../images/interlab.png';
import { Link } from 'react-router-dom';

function Pokeffective() {
    return(
        <div className="container">
            <div className="row justify-content-center align-items-center mt-4 mt-sm-0 mb-2 proyectCard">
                <div className="col-12 col-sm-2 container mb-5 mt-4">
                    <Media left middle className="iconCool row justify-content-center">
                        <Media object className="pokeball" src={Pokeball} alt="pokeball"></Media>
                    </Media>
                </div>
                <div className="col-12 col-sm-6 mt-4 mb-2">
                    <Media body className="ml-4">
                        <Media heading>Pokeffective</Media>
                        <p className="mb-4">Pokeffective is a Pokemon type calculator, developed in Vue.js. I was in charge of the design, and the programming of this Application, and was made using responsive design and UX techniques.</p>
                        <a href="https://github.com/8rb/Pokeffective2" target="_blank" rel="noopener noreferrer">
                            <i className="codeIcon fas fa-code fa-2x"></i>
                        </a>
                        <a href="https://pokeffective.onrender.com/" target="_blank" rel="noopener noreferrer">
                            <i className="projectIcon fas fa-external-link-alt fa-2x ml-4"></i>
                        </a>
                    </Media>
                </div>
            </div>
        </div>
    );
}

function Interlab() {
    return(
        <div className="container">
            <div className="row justify-content-center align-items-center mt-4 mt-sm-0 mb-2 proyectCard">
                <div className="col-12 col-sm-2 container mb-5 mt-4">
                    <Media left middle className="iconCool row justify-content-center"
                        href="https://interlab.onrender.com/#/" target="_blank" rel="noopener noreferrer">
                        <Media object className="interlabLogo rounded-circle" src={InterlabLogo} alt="InterLab"
                            >
                        </Media>
                    </Media>
                </div>
                <div className="col-12 col-sm-6 mt-4 mb-2">
                    <Media body className="ml-4">
                        <Media heading>InterLab</Media>
                        <p className="mb-4">Interlab is a LinkedIn clone, developed in Vue.js in the Front-End and .Net Core in the backend. I was in charge of the Majority of the Front-End programming and the database design.</p>
                        <a href="https://github.com/8rb/interlab-webapps" target="_blank" rel="noopener noreferrer">
                            <i className="codeIcon fas fa-code fa-2x"></i>
                        </a>
                        <a href="https://interlab.onrender.com/#/" target="_blank" rel="noopener noreferrer">
                            <i className="projectIcon fas fa-external-link-alt fa-2x ml-4"></i>
                        </a>
                    </Media>
                </div>
            </div>
        </div>
    );
}

function Projects() {
        return(
            <Jumbotron className="jumbotron row align-items-center projects bg">
                <div className="container">
                    <div className="row justify-content-center">
                        <Link className="nav-link" to="/home">
                            <span className="homeIcon fas fa-angle-up fa-2x"></span>
                        </Link>
                    </div>
                </div>
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-auto offset-0">
                            <h1>My</h1>
                        </div>
                        <div className="col-auto offset-0">
                            <h1>Projects</h1>
                        </div>
                    </div>
                </div>
                <Pokeffective></Pokeffective>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <hr></hr>
                        </div>
                    </div>
                </div>
                <Interlab></Interlab>
            </Jumbotron>
        )
}

export default Projects;