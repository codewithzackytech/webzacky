import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "../style.css";
import "../App.css";
import "bootstrap/js/dist/collapse";
import "bootstrap/js/dist/offcanvas";
import "bootstrap/js/dist/dropdown";
import devImg from "../assets/images/dev.jpg";

import { FaCoffee, FaWhatsapp, FaGithub, FaLinkedin, FaFacebook, } from 'react-icons/fa';

import ReactWhatsapp from 'react-whatsapp'
class AuthorBio extends Component {
    render() {
        const Darktheme = this.props.Darktheme
        return (
            <React.Fragment>

                <div class=" justify-content-center align-items-center d-flex">
                    <img
                        src={devImg}
                        width="40%"
                        // height="30%"
                        style={{ borderRadius: 200, }}
                        className="titleicon2 "
                    />
                </div>

                <div class="justify-content-center align-items-center d-flex">
                    <div className="justify-content-center align-items-center d-flex row">
                        <p class="h3 mt-3 fw-bold" style={{ color: Darktheme ? "white" : "black" }}>
                            Zacky Jamel
                        </p>
                    </div>
                </div>



                <div class="justify-content-center align-items-center d-flex">
                    <div className="justify-content-center align-items-center d-flex row">
                        <p class="p text-muted">
                            Indie Developer <FaCoffee />
                        </p>
                    </div>
                </div>





                <div class="justify-content-center align-items-center mx-5">
                    <div className="justify-content-center align-items-center d-flex col">
                        <p
                            class=" fw-bold"
                            style={{ color: "grey", fontFamily: "sans-serif" }}
                        >
                            {/* Zacky Jamel is a second-year student developer who uses
                    Javascript and python for his new product. */}
                            Zacky is a young Student & Freelancer Developer, ( Fullstack Mobile app Developer
                            by Day &
                            Game Developer by Night ).  Also He uses JS/TS 70% for his work. He has a great passion for
                            building solutions and open source development.
                            {"\n==>"} Now Doing FAANG interview :)
                        </p>
                    </div>
                </div>






                <div class="justify-content-center align-items-center d-flex pt-2">
                    <div className="justify-content-around align-items-center d-flex col">
                        <div className="mx-4 col">
                            <ReactWhatsapp number="00251942354223" message="Hi Zacky!, " className="whatsapp bg-success text-light px-0 mx-2">

                                <FaWhatsapp className="px-2" size={40} color={Darktheme ? "white" : "white"} />
                            </ReactWhatsapp>
                            {/* <FaFacebook className="px-2" size={40} color={Darktheme ? "white" : "black"} /> */}
                            {/* <FaLinkedin className="px-0  mx-2" size={40} color={Darktheme ? "white" : "black"} /> */}
                            <a href="https://github.com/codewithzackytech"><FaGithub className="px-0  mx-2" size={40} color={Darktheme ? "white" : "black"} /></a>

                        </div>
                    </div>
                </div>

            </React.Fragment>
        );
    }
}

export default AuthorBio;
