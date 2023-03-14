import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "../style.css";
import "../App.css";
import "bootstrap/js/dist/collapse";
import "bootstrap/js/dist/offcanvas";
import "bootstrap/js/dist/dropdown";
import Login from "../../src/Auth/Login";
import Register from "../../src/Auth/Register";
import LoginInfoModal from "../MessagesModal/LoginInfo";
import RegisterInfoModal from "../MessagesModal/RegisterInfo";
import CookieModal from '../MessagesModal/CookieModal'
import axios from 'axios';



import { FaReact, FaPython, FaNodeJs, FaAndroid, FaFlask, FaCoffee, FaLinkedin, FaWhatsapp, FaFacebook, FaGithub, FaMoon, FaSun, FaBars, FaTimes as FaClose, FaComment, FaEye, FaClock, FaLeaf, FaGamepad, FaCode, FaWaze } from 'react-icons/fa';
import { IoMoon } from 'react-icons/io5';

import {
    Label,
    Button,
    Input,
    Form,
    ModalHeader,
    ModalBody,
    Modal,
    ModalFooter,
    FormGroup,
} from "reactstrap";




class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {

            isDark: false,
            new_user: localStorage.getItem("userToken"),
            activeQuize: null,
            signInToggle: false,
            acceptCookie: false,
            cencelCookie: null,
            singUpToggle: false,
            integrationwithelectronandreact: 'electronjs',
            NodejsExpressjsPasswordHashingAlgorithm: 'bcrypt',
            credential: null,
            LoginInfoModal: false,
            AuthError: null,
            Contact: null,
            Subscribe: null,
            RegError: null,
            cookieModal: true,
            RegisterInfoModal: false,

        };
    }




    LoginInfoModalToggle = () => {
        this.setState({ LoginInfoModal: !this.state.LoginInfoModal });
    };
    CookieToggle = () => {
        this.setState({ cookieModal: !this.state.cookieModal })
    }

    acceptCookie = (value) => {
        this.setState({ acceptCookie: value })
        this.CookieToggle()

    }


    RegisterInfoModalToggle = () => {
        this.setState({ RegisterInfoModal: !this.state.RegisterInfoModal });
    };

    signInToggle = () => {
        this.setState({ signInToggle: !this.state.signInToggle });
    };

    signUpToggle = () => {
        this.setState({ signUpToggle: !this.state.signUpToggle });
    };

    LogOut = () => {
        localStorage.clear();
        this.setState({ new_user: undefined });
    };

    handleChange = (e) => {
        const { name, value } = e.target;
        const credential = { ...this.state.credential, [name]: value };
        this.setState({ credential });
    };

    SignIn = () => {
        this.signInToggle();
        this.setState({ LoginInfoModal: false });

        const credential = this.state.credential;

        axios
            .post("http://localhost:8000/signin/", credential)
            .then((response) => {
                localStorage.setItem("AuthToken", response.data.DeedCashToken);
                localStorage.setItem("userToken", response.data.username);
                // console.log(response.data);
                const username = response.data.username;

                if (username != undefined || username != null)
                    this.setState({ new_user: response.data.username });
            })
            .catch((error) => {
                this.LoginInfoModalToggle();
                this.setState({ AuthError: error.response.data });
            })
            .finally(() => console.log("request completed!"));
    };

    SignUp = () => {
        this.signUpToggle();
        this.setState({ LoginInfoModal: false });

        const credential = this.state.credential;

        axios
            .post("http://localhost:8000/signup/", credential)
            .then((response) => {
                console.log(response.data);
                localStorage.setItem("AuthToken", response.data.DeedCashToken);
                localStorage.setItem("userToken", response.data.username);
                const username = response.data.username;

                if (username != undefined || username != null)
                    this.setState({ new_user: response.data.username });
            })
            .catch((error) => {
                this.RegisterInfoModalToggle();
                this.setState({ RegError: error.response.data });
            })
            .finally(() => console.log("request completed!"));
    };

    render() {
        const Darktheme = this.props.Darktheme

        return (

            <nav
                class="navbar navbar-expand-lg pt-1 pb-0"
                style={{
                    borderWidth: 0,
                    // borderBottomStyle: 'hidden',
                    borderBottomWidth: 0,
                    borderColor: 'white',
                    // backgroundColor: "rgb(242, 255, 236)",
                    backgroundColor: Darktheme ? "#242526" : 'white',
                    //   ? "rgb(238, 243, 255)"
                    //   : "rgb(238, 243, 255)",
                    // position: "sticky",
                }}
            >
                <div class="container-fluid">
                    {/* <div className="justify-content-center align-item-center d-flex pb-1 "> */}
                    {/* <img src={icon} width="50" className="titleicon2" /> */}
                    <a href="/">
                        <Label
                            className={`title    p-2 px-5 bg-success`}
                            style={{
                                cursor: 'pointer',
                                // backgroundColor: Darktheme ? 'rgb(9, 9, 116)' : 'rgb(9, 9, 116)',
                                letterSpacing: 2,
                                borderBottomRightRadius: 100,
                                color: Darktheme ? "white" : "white",
                                fontStyle: "-moz-initial",
                                // backgroundColor: "blueviolet",
                            }}
                        >
                            <FaLeaf size={20} /> Web Zacky {" " + " "}
                        </Label>
                    </a>

                    <a>
                        <FaBars
                            // class="navbar-toggler-icon  m-3"
                            className="mr-2 navbar-toggler"

                            size={44}
                            style={{ color: Darktheme ? '#f0f0f0' : 'black', borderWidth: 0 }}

                            type="button"
                            data-bs-toggle="offcanvas"
                            data-bs-target="#offcanvasExample"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"

                        />
                    </a>


                    <div
                        class="collapse navbar-collapse navSpace ml-5"
                        id="navbarSupportedContent"
                    >
                        <ul class="navbar-nav me-auto  mb-lg-0 ">
                            <li class="nav-item">
                                <a

                                    class={`nav-link active ${Darktheme ? 'text-white' : 'text-dark'}`}

                                    aria-current="page"
                                    href="/docs"
                                >
                                    Docs
                                </a>
                            </li>

                            <li class="nav-item">
                                <a
                                    class={`nav-link active ${Darktheme ? 'text-white' : 'text-dark'}`}

                                    aria-current="page"
                                    href="/tutorials"
                                >
                                    Tutorials
                                </a>
                            </li>



                            <div class="nav-item dropdown">

                                <a
                                    class={`nav-link dropdown-toggle ${Darktheme ? 'text-white' : 'text-muted'}`}
                                    href="#"
                                    id="navbarDropdown"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    {/* {this.state.new_user == undefined || null
                                        ? "More"
                                        : this.state.new_user} */}
                                    Projects
                                </a>

                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">

                                    <div>
                                        <li >
                                            <a class="dropdown-item" href="https://github.com/codewithzackytech/ZalsonGame">
                                                Zalson 3D game
                                            </a>
                                        </li>

                                        <li >
                                            <a class="dropdown-item" href="https://github.com/codewithzackytech/Simple2DGame">
                                                2D beginner game
                                            </a>
                                        </li>


                                        <li >
                                            <a class="dropdown-item" href="https://github.com/codewithzackytech/Godom_clone">
                                                Godom4 clone
                                            </a>
                                        </li>


                                    </div>







                                </ul>
                            </div>

                            <div class="nav-item dropdown">

                                <a
                                    class={`nav-link dropdown-toggle ${Darktheme ? 'text-white' : 'text-muted'}`}
                                    href="#"
                                    id="navbarDropdown"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    {/* {this.state.new_user == undefined || null
                                        ? "More"
                                        : this.state.new_user} */}
                                    RealTime Software
                                </a>

                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">

                                    <div>
                                        <li >
                                            <a class="dropdown-item" href="https://english-somali-dictionary.uptodown.com/windows">
                                                English Somali Dictionary For PC
                                            </a>
                                        </li>

                                        <li >
                                            <a class="dropdown-item" href="https://english-somali-dictionary.uptodown.com/android">
                                                English Somali Dictionary For Mobile
                                            </a>
                                        </li>


                                    </div>



                                </ul>
                            </div>






                        </ul>

                        {/* <span
                className="mr-4 p"
                style={{
                  fontFamily: "sans-serif",
                  letterSpacing: 2,
                  color: "blue",
                }}
              >
                Web Zacky Official Whatsapp Group
              </span> */}


                        <a href='https://github.com/codewithzackytech'>
                            <Button

                                className={`mr-2 btn ${Darktheme ? '' : 'btn-outline-dark'} px-5 mb-1`}

                                onClick={() => null}
                                style={{
                                    borderWidth: 0,
                                    backgroundColor: Darktheme ? "#242526" : null,
                                    color: Darktheme ? "#fff" : null,
                                    // borderRadius: 10,
                                    fontFamily: 'revert',
                                    letterSpacing: 1
                                }}
                            >
                                Free Opensource Games <FaGamepad size={30} />
                            </Button>
                        </a>


                        <a
                            className="text-dark mr-2 "
                            style={{
                                cursor: "pointer",
                                // backgroundColor: Darktheme ? 'gold' : 'whitesmoke'
                            }}
                            onClick={() => {
                                this.setState({ isDark: !Darktheme });
                                this.props.handleTheme(Darktheme)
                                // alert(this.state.isDark)
                            }}
                        >

                            {Darktheme ? (<FaSun color={`yellow`} size={20} />) : (<IoMoon color={'grey'} size={20} />)}
                        </a>

                        {this.state.new_user == undefined || null ? (
                            <div>

                                <Label className={`mt-2 mx-4 ${Darktheme ? 'text-white' : 'text-dark'}`} onClick={() => {
                                    if (this.state.acceptCookie || localStorage.getItem('cookiePermission') == 'true' || localStorage.getItem('cookiePermission') != 'false')
                                        this.setState({ signInToggle: true })
                                    else
                                        this.setState({ cookieModal: true })
                                }} style={{ cursor: 'pointer' }}>Login</Label>

                                <Button
                                    className={`mr-2 btn ${Darktheme ? 'btn-danger' : 'btn-danger'} rounded-5 px-4 mb-1`} onClick={() => {

                                        if (this.state.acceptCookie || localStorage.getItem('cookiePermission') == 'true' || localStorage.getItem('cookiePermission') != 'false')
                                            this.setState({ signUpToggle: true })
                                        else
                                            this.setState({ cookieModal: true })
                                    }}>
                                    Sign Up
                                </Button>

                            </div>
                        ) : (

                            <div class="nav-item dropdown ml-4">

                                <a
                                    class={`nav-link dropdown-toggle ${Darktheme ? 'text-info' : 'text-info'}`}
                                    href="#"
                                    id="navbarDropdown"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    {/* {this.state.new_user == undefined || null
                                        ? "More"
                                        : this.state.new_user} */}
                                    {this.state.new_user}
                                </a>

                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">

                                    <div>
                                        <li>
                                            <a class="dropdown-item" href="#" onClick={() => this.LogOut()}>
                                                LogOut
                                            </a>
                                        </li>

                                    </div>



                                </ul>
                            </div>
                        )}

                    </div>


                    {this.state.signInToggle ? (
                        <Login
                            toggle={this.signInToggle}
                            SignIn={this.SignIn}
                            handleChange={this.handleChange}
                        />
                    ) : null}

                    {this.state.signUpToggle ? (
                        <Register
                            toggle={this.signUpToggle}
                            SignUp={this.SignUp}
                            handleChange={this.handleChange}
                            AuthError={this.state.RegError}
                        />
                    ) : null}

                    {this.state.LoginInfoModal ? (
                        <LoginInfoModal
                            toggle={this.LoginInfoModalToggle}
                            signinToggle={this.signInToggle}
                            cookieAccepted={this.state.acceptCookie}
                            signupToggle={this.signUpToggle}
                            AuthChecker={this.LoginInfoModalToggle}
                            AuthError={this.state.AuthError}
                        />
                    ) : null}

                    {this.state.RegisterInfoModal ? (
                        <RegisterInfoModal
                            toggle={this.RegisterInfoModalToggle}
                            signinToggle={this.signInToggle}
                            signupToggle={this.signUpToggle}
                            AuthChecker={this.RegisterInfoModalToggle}
                            RegError={this.state.RegError}
                        />
                    ) : null}




                    {localStorage.getItem("cookiePermission") == undefined || localStorage.getItem("cookiePermission") == 'false' ? (
                        <>

                            {this.state.cookieModal ? (
                                <CookieModal
                                    toggle={this.CookieToggle}

                                    acceptCookie={this.acceptCookie}

                                />
                            ) : null}
                        </>
                    ) : null}

                </div>
            </nav>
        );
    }
}

export default NavBar;
