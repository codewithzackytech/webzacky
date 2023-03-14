import React, { Component } from "react";

import icon from "../assets/images/navIcon.png";
import icon2 from "../assets/images/icon.png";
import electronjs from "../assets/images/electronjs.png";
import godot from "../assets/images/godot.png";

import icon3 from "../assets/images/icon.png";
import icon4 from "../assets/images/icon4.png";
import { FaReact, FaPython, FaNodeJs, FaAndroid, FaFlask, FaCoffee, FaLinkedin, FaWhatsapp, FaFacebook, FaGithub, FaMoon, FaSun, FaBars, FaTimes as FaClose, FaComment, FaEye, FaClock, FaLeaf, FaGamepad, FaCode, FaWaze } from 'react-icons/fa';

import homeScreenApp from "../assets/images/homeScreenApp.png";
// import mysql from '../../assets/images/mysql.png'
// import vue from '../../assets/images/vue.png'
// import react from '../../assets/images/react.png'

// import developer from '../../assets/images/developer.jpg'

// import Authentication from './Authentication';
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
import userIcon1 from "../../src/assets/images/face1.jpg";
import userIcon2 from "../../src/assets/images/face2.jpg";
import userIcon3 from "../../src/assets/images/face3.jpg";
import userIcon4 from "../../src/assets/images/face4.jpg";
import userIcon5 from "../../src/assets/images/face5.jpg";

import Group5 from "../../src/assets/images/Group5.svg";
import Group7 from "../../src/assets/images/Group7.svg";
import Group12 from "../../src/assets/images/Group12.svg";


import axios from "axios";

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
import NavBar from "../components/NavBar";
import WelContent from "./WelContent";

class Tutorials extends Component {
    constructor(props) {
        super(props);
        this.state = {
            new_user: localStorage.getItem("userToken"),
            activeQuize: null,
            isDark: true,
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







    handleChange = (e) => {
        const { name, value } = e.target;
        const credential = { ...this.state.credential, [name]: value };
        this.setState({ credential });
    };




    handleChangeContact = (e) => {
        const { name, value } = e.target;
        const Contact = { ...this.state.Contact, [name]: value };
        this.setState({ Contact });
    };



    handleChangeSubscribe = (e) => {
        const { name, value } = e.target;
        const Subscribe = { ...this.state.Subscribe, [name]: value };
        this.setState({ Subscribe });
    };



    SubmiteSubscribe = () => {

        const data = this.state.Subscribe;

        axios
            .post("/api/subscribe/", data)
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error)
            })
            .finally(() => console.log("request completed!"));
    };


    SubmiteContact = () => {

        const data = this.state.Contact;

        axios
            .post("/api/contact/", data)
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error)
            })
            .finally(() => console.log("request completed!"));
    };






    saveViews = (id) => {

        axios.get(`/api/views/${2}`)
            .then((response) => {


                console.log(response.data.length)

                this.setState({ views: response.data.length })
                const Views = response.data.length + 1
                const TutorialID = id
                axios.post(`/api/view`, { Views, TutorialID })
                    .then((response) => {
                        console.log(response.data)
                    })
                    .catch((error) => console.log(error))


            })
            .catch((error) => console.log(error))
            .finally(() => console.log('request completed!'))





    }

    handleTheme = () => {
        this.setState({ isDark: !this.state.isDark })
    }
    render() {
        const Darktheme = this.state.isDark
        return (
            <div
            // className={`App ${this.state.isDark ? "text-white" : "text-white"}`}
            // style={{backgroundColor: this.state.isDark ? "#242526" : "white"}}
            // id="home"
            >

                <NavBar
                    handleTheme={this.handleTheme}
                    Darktheme={Darktheme}
                />

                <div
                    class={`offcanvas offcanvas-start ${this.state.isDark ? "text-white" : "text-dark"
                        }`}
                    style={{ backgroundColor: this.state.isDark ? "#242526" : "#fff" }}
                    tabindex="-1"
                    id="offcanvasExample"
                    aria-labelledby="offcanvasExampleLabel"
                >
                    <div class="offcanvas-header">
                        <div className="justify-content-center align-item-center d-flex pb-1">
                            {/* <img src={icon3} width="40" height="40" className="titleicon2" /> */}
                            <a href="/">
                                <Label
                                    className={`title    p-2 px-5 bg-success`}
                                    style={{
                                        cursor: 'pointer',
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


                        </div>




                        <a>
                            <FaClose
                                className="mr-3"
                                size={30}
                                style={{ borderWidth: 0, color: Darktheme ? 'white' : 'black', backgroundColor: Darktheme ? "#242526" : '#fff' }}
                                type="button"
                                class="btn-close text-reset btn-danger"
                                data-bs-dismiss="offcanvas"
                                aria-label="Close"

                            />
                        </a>


                    </div>

                    <div class="offcanvas-body mt-2 ">
                        <div className="mb-4">
                            {this.state.new_user == undefined ||
                                this.state.new_user == null ? null : (
                                <a
                                    class="dropdown-item text-danger"
                                    href="#"
                                    onClick={() => this.LogOut()}
                                    data-bs-dismiss="offcanvas"
                                    aria-label="Close"
                                >
                                    LogOut
                                </a>
                            )}
                        </div>

                        <ul class="navbar-nav me-auto  mb-lg-0 ">
                            <h4
                                className={`nav-item mb-3 ${this.state.isDark ? "text-white" : "text-dark"
                                    }`}
                            >
                                <a
                                    className={`nav-h4nk active ${this.state.isDark ? "text-white" : "text-dark"
                                        }`}
                                    aria-current="page"
                                    href="/docs"
                                >
                                    Docs
                                </a>
                            </h4>

                            <h4 class="nav-item mb-3">
                                <a
                                    className={`nav-h4nk active ${this.state.isDark ? "text-white" : "text-dark"
                                        }`}
                                    aria-current="page"
                                    href="#tutorial"
                                >
                                    Tutorials
                                </a>
                            </h4>

                            <h4 class="nav-item mb-3">
                                <a
                                    className={`nav-h4nk active ${this.state.isDark ? "text-white" : "text-dark"
                                        }`}
                                    aria-current="page"
                                    href="#opensource"
                                >
                                    Projects
                                </a>
                            </h4>

                            <h4 class="nav-item mb-3">
                                <a
                                    className={`nav-h4nk active ${this.state.isDark ? "text-white" : "text-dark"
                                        }`}
                                    style={{ cursor: "pointer" }}
                                    aria-current="page"
                                    onClick={() => {
                                        this.setState({ isDark: !this.state.isDark });
                                        // alert(this.state.isDark)
                                    }}
                                >
                                    {Darktheme ? (<FaSun />) : (<FaMoon />)}  {Darktheme ? ' Light Theme' : ' Dark Theme'}
                                </a>
                            </h4>
                            <Label>____________</Label>
                            <a href="https://github.com/codewithzackytech/">

                                <Button

                                    className={`mr-2 btn ${Darktheme ? 'btn-outline-dark' : 'btn-dark'} px-5`}

                                    onClick={() => null}
                                    style={{
                                        borderWidth: 0,
                                        // backgroundColor: "green",
                                        // color: "white",
                                        // borderRadius: 10,
                                        fontFamily: 'revert',
                                        letterSpacing: 1
                                    }}
                                >
                                    Free Opensource Games <FaGamepad />
                                </Button>
                            </a>




                            <div>
                                <div>
                                    <Label>____________</Label>
                                </div>
                                <li
                                    onClick={() => this.setState({ signInToggle: true })}
                                    data-bs-dismiss="offcanvas"
                                    aria-label="Close"
                                >
                                    <a
                                        className={`dropdown-item ${this.state.isDark ? "text-white" : "text-dark"
                                            }`}
                                        href="#"
                                    >
                                        SignIn
                                    </a>
                                </li>
                                <li
                                    onClick={() => this.setState({ signUpToggle: true })}
                                    data-bs-dismiss="offcanvas"
                                    aria-label="Close"
                                >
                                    <a
                                        className={`dropdown-item ${this.state.isDark ? "text-white" : "text-dark"
                                            }`}
                                        href="#"
                                    >
                                        SignUp
                                    </a>
                                </li>
                            </div>
                        </ul>
                    </div>
                </div>

                <div>

                    <div class="content-wrapper" style={{
                        backgroundColor: this.state.isDark ? "#242526" : "white",
                        color: this.state.isDark ? "#f0f0f0" : "#242526",
                    }}>
                        <div class="container" id="tutorial">
                            <section class="case-studies">
                                <div class="row grid-margin ">
                                    <div class="col-12 text-center pb-5">
                                        <h2 className="text-success ">Tutorials!</h2>
                                        <h6 class="section-subtitle text-muted">
                                            Recent Tutorial
                                        </h6>
                                    </div>

                                    {/* <!-- Features section--> */}
                                    <section class="border-bottom pb-5" id="features">
                                        <div class="container px-5 ">
                                            <div class="row gx-5">
                                                <div class="col-lg-4 mb-5 mb-lg-0">
                                                    <div class={`feature bg-primary ${Darktheme ? 'bg-success' : 'bg-success'} text-white rounded-3 mb-3 card p-2 `}>
                                                        <i class="bi bi-collection"></i>
                                                    </div>



                                                    <img src={electronjs}
                                                        width={70}
                                                        className="my-3"
                                                    />




                                                    <h2 class="h4 fw-bolder text-muted">Integration for React.js & Electron.js</h2>
                                                    <p>
                                                        If you are experienced React.js Developer and you wanna getstart Electron.js Just by Using your web experience GetStart this tutorial
                                                    </p>


                                                    <p className="mx-4 mr-0" style={{ color: Darktheme ? 'grey' : 'grey' }}>
                                                        <FaClock className="mr-2" />March 23, 2021
                                                    </p>






                                                    <a class="text-decoration-none text-info" href='/GettingStartedwithElectronbyCreatingaReactApp' onClick={() => this.saveViews(1)}>
                                                        Get start here
                                                        <i class="bi bi-arrow-right"></i>
                                                    </a>
                                                </div>















                                                <div class="col-lg-4 mb-5 mb-lg-0 ">
                                                    <div class={`feature bg-primary ${Darktheme ? 'bg-success' : 'bg-success'} text-white rounded-3 mb-3 card p-2 `}>
                                                        <i class="bi bi-collection"></i>
                                                    </div>



                                                    <img src={electronjs}
                                                        width={70}
                                                        className="my-3"
                                                    />




                                                    <h2 class="h4 fw-bolder text-muted">Electron.js + React.js PushNotification</h2>
                                                    <p>
                                                        If you wanna Integrate React.js and Electron.js as well as you wanna access Electron built in function like PushNotification GetStart this tutorial
                                                    </p>


                                                    <p className="mx-4 mr-0" style={{ color: Darktheme ? 'grey' : 'grey' }}>
                                                        <FaClock className="mr-2" />March 23, 2021
                                                    </p>

                                                    <a class="text-decoration-none text-info" href="/PushNotificationImplementationwithElectronandReactjs" onClick={() => this.saveViews(2)}>
                                                        Get start here
                                                        <i class="bi bi-arrow-right"></i>
                                                    </a>


                                                </div>










                                                <div class="col-lg-4 mb-5 mb-lg-0 ">
                                                    <div class={`feature bg-primary ${Darktheme ? 'bg-success' : 'bg-success'} text-white rounded-3 mb-3 card p-2 `}>
                                                        <i class="bi bi-collection"></i>
                                                    </div>



                                                    <img src={electronjs}
                                                        width={70}
                                                        className="my-3"
                                                    />




                                                    <h2 class="h4 fw-bolder text-muted">Electron.js Multi-Platform Architecture Deployment</h2>
                                                    <p>
                                                        If you completed your project and you'r ready for deployment GetStart this tutorial, this tutorial will cover (Linux, Windows, Mac) Architecture deployment
                                                    </p>


                                                    <p className="mx-4 mr-0" style={{ color: Darktheme ? 'grey' : 'grey' }}>
                                                        <FaClock className="mr-2" />March 23, 2021
                                                    </p>

                                                    <a class="text-decoration-none text-info" href="/ElectronjsMultiPlatformArchitectureDeployment" onClick={() => this.saveViews(3)}>
                                                        Get start here
                                                        <i class="bi bi-arrow-right"></i>
                                                    </a>


                                                </div>










                                                <div class="col-lg-4 mb-5 mb-lg-0">
                                                    <div class={`feature bg-primary ${Darktheme ? 'bg-success' : 'bg-success'} text-white rounded-3 mb-3 card p-2 `}>
                                                        <i class="bi bi-building"></i>
                                                    </div>


                                                    <FaNodeJs
                                                        color="green"
                                                        size={60}
                                                        className="my-4"
                                                    />



                                                    <h2 class="h4 fw-bolder text-muted">JWT using Node.js / Express</h2>
                                                    <p>
                                                        If you're developing Node.js Login based application and you don't wanna your users login every time they visit your web-app but you want is to keep login, if that's your problem just GetStart this tutorial.
                                                    </p>



                                                    <p className="mx-4 mr-0" style={{ color: Darktheme ? 'grey' : 'grey' }}>
                                                        <FaClock className="mr-2" />Jan 17, 2023
                                                    </p>

                                                    <a class="text-decoration-none text-info" href="/ImplementationwithJWTusingNode/Expressjs" onClick={() => this.saveViews(4)}>
                                                        Get start here
                                                        <i class="bi bi-arrow-right"></i>
                                                    </a>
                                                </div>














                                                <div class="col-lg-4 mb-5 mb-lg-0 mt-3">
                                                    <div class={`feature bg-primary ${Darktheme ? 'bg-success' : 'bg-success'} text-white rounded-3 mb-3 card p-2 `}>
                                                        <i class="bi bi-building"></i>
                                                    </div>


                                                    <FaNodeJs
                                                        color="green"
                                                        size={60}
                                                        className="my-4"
                                                    />



                                                    <h2 class="h4 fw-bolder text-muted">Node.js / Express.js Password Hashing Algorithm</h2>
                                                    <p>
                                                        Some times it's usefull to hash your password coz there's a reason to hash like hacker or may be you don't want allow some part of your team the customers secret key, so if this is your problem GetStart this tutorial.
                                                    </p>


                                                    <p className="mx-4 mr-0" style={{ color: Darktheme ? 'grey' : 'grey' }}>
                                                        <FaClock className="mr-2" />Dec 17, 2022
                                                    </p>

                                                    <a class="text-decoration-none text-info" href="/HashingPasswordsinNodeandExpressusingbcrypt" onClick={() => this.saveViews(5)}>
                                                        Get start here
                                                        <i class="bi bi-arrow-right"></i>
                                                    </a>
                                                </div>




















                                                <div class="col-lg-4 mb-5 mb-lg-0 mt-3">
                                                    <div class={`feature bg-primary ${Darktheme ? 'bg-success' : 'bg-success'} text-white rounded-3 mb-3 card p-2 `}>
                                                        <i class="bi bi-building"></i>
                                                    </div>


                                                    <FaNodeJs
                                                        color="green"
                                                        size={60}
                                                        className="my-4"
                                                    />



                                                    <h2 class="h4 fw-bolder text-muted">Node.js / Express.js CRUD APi Using Mongodb</h2>
                                                    <p>
                                                        If this is your first time using togather Express.js and Mongodb GetStart this tutorial
                                                    </p>


                                                    <p className="mx-4 mr-0" style={{ color: Darktheme ? 'grey' : 'grey' }}>
                                                        <FaClock className="mr-2" />Dec 12, 2021
                                                    </p>

                                                    <a class="text-decoration-none text-info" href="/ImplementingCRUDAPiusingNodejs/ExpressandMongodb" onClick={() => this.saveViews(6)}>
                                                        Get start here
                                                        <i class="bi bi-arrow-right"></i>
                                                    </a>
                                                </div>
























                                                <div class="col-lg-4 pt-3">
                                                    <div class={`feature bg-primary ${Darktheme ? 'bg-success' : 'bg-success'} text-white rounded-3 mb-3 card p-2 `}>
                                                        <i class="bi bi-toggles2"></i>
                                                    </div>


                                                    <FaPython
                                                        color="gold"
                                                        size={60}
                                                        className="my-4"
                                                    />



                                                    <h2 class="h4 fw-bolder text-muted">
                                                        Extends User in Django-Rest-Framwork Login Token Auth
                                                    </h2>
                                                    <p>
                                                        if you want kind of, let your user login and validate that credential and at the same time you want return user token as well as if you want let system return token as well as information about the login use GetStart this tutorial.
                                                    </p>


                                                    <p className="mx-4 mr-0" style={{ color: Darktheme ? 'grey' : 'grey' }}>
                                                        <FaClock className="mr-2" />Jan 7, 2023
                                                    </p>

                                                    <a class="text-decoration-none text-info" href="/ExtendsUserinDjangoRestFramworkLoginTokenAuth" onClick={() => this.saveViews(7)}>
                                                        Get start here
                                                        <i class="bi bi-arrow-right"></i>
                                                    </a>


                                                </div>













                                                <div class="col-lg-4 pt-3">
                                                    <div class={`feature bg-primary ${Darktheme ? 'bg-success' : 'bg-success'} text-white rounded-3 mb-3 card p-2 `}>
                                                        <i class="bi bi-toggles2"></i>
                                                    </div>


                                                    <FaPython
                                                        color="gold"
                                                        size={60}
                                                        className="my-4"
                                                    />



                                                    <h2 class="h4 fw-bolder text-muted">
                                                        Django Model Auth Permission
                                                    </h2>
                                                    <p>

                                                        if you're developing Django BackEnd but you need permission some of your view functions, may be you wanna allow authenticated users to view/see some of your view functions if that is your problem GetStart this tutorial.


                                                    </p>


                                                    <p className="mx-4 mr-0" style={{ color: Darktheme ? 'grey' : 'grey' }}>
                                                        <FaClock className="mr-2" />Jan 7, 2022
                                                    </p>

                                                    <a class="text-decoration-none text-info" href="/DjangoModelAuthPermission" onClick={() => this.saveViews(8)}>
                                                        Get start here
                                                        <i class="bi bi-arrow-right"></i>
                                                    </a>


                                                </div>








                                                <div class="col-lg-4 mb-5 mb-lg-0 mt-3">
                                                    <div class={`feature bg-primary ${Darktheme ? 'bg-success' : 'bg-success'} text-white rounded-3 mb-3 card p-2 `}>
                                                        <i class="bi bi-building"></i>
                                                    </div>



                                                    <img src={godot}
                                                        width={60}
                                                        className="my-3"
                                                    />



                                                    <h2 class="h4 fw-bolder text-muted">Your First 2D Game with Godot4</h2>
                                                    <p>
                                                        Are you eager to get started making your own 2D & 3D games?
                                                        if yes, Godot is the right choose, even if you're come from Unity or Unreal
                                                        you're in the right way GetStart Godot.
                                                    </p>


                                                    <p className="mx-4 mr-0" style={{ color: Darktheme ? 'grey' : 'grey' }}>
                                                        <FaClock className="mr-2" />Dec 5, 2022
                                                    </p>

                                                    <a class="text-decoration-none text-info" href="/BuildYourFirst2DGameusingGodotEngine" onClick={() => this.saveViews(9)}>
                                                        Get start here
                                                        <i class="bi bi-arrow-right"></i>
                                                    </a>
                                                </div>






                                                <div class="col-lg-4 mb-5 mb-lg-0 mt-3">
                                                    <div class={`feature bg-primary ${Darktheme ? 'bg-success' : 'bg-success'} text-white rounded-3 mb-3 card p-2 `}>
                                                        <i class="bi bi-building"></i>
                                                    </div>



                                                    <img src={godot}
                                                        width={60}
                                                        className="my-3"
                                                    />



                                                    <h2 class="h4 fw-bolder text-muted">Godot 3D Level transition</h2>
                                                    <p>
                                                        If your game levels completed but the only thing you need is Level transition GetStart start this tutorial.
                                                    </p>


                                                    <p className="mx-4 mr-0" style={{ color: Darktheme ? 'grey' : 'grey' }}>
                                                        <FaClock className="mr-2" />Dec 17, 2022
                                                    </p>

                                                    <a class="text-decoration-none text-info" href="/3DGameLeveltransitionusingGodotEngine" onClick={() => this.saveViews(10)}>
                                                        Get start here
                                                        <i class="bi bi-arrow-right"></i>
                                                    </a>
                                                </div>












                                                <div class="col-lg-4 mb-5 mb-lg-0 mt-3">
                                                    <div class={`feature bg-primary ${Darktheme ? 'bg-success' : 'bg-success'} text-white rounded-3 mb-3 card p-2 `}>
                                                        <i class="bi bi-building"></i>
                                                    </div>



                                                    <img src={godot}
                                                        width={60}
                                                        className="my-3"
                                                    />



                                                    <h2 class="h4 fw-bolder text-muted">Zalson 3D Complete Game</h2>
                                                    <p>
                                                        Zalson is 3D game developed by Zacky-J the web author, so there's free environment design or levels, player animation,Api,Movement GetStart start if you're interesting.
                                                    </p>


                                                    <p className="mx-4 mr-0" style={{ color: Darktheme ? 'grey' : 'grey' }}>
                                                        <FaClock className="mr-2" />Dec 3, 2022
                                                    </p>

                                                    <a class="text-decoration-none text-info" href="/Zalson3DGameBuiltwithGodotEngine" onClick={() => this.saveViews(11)}>
                                                        Get start here
                                                        <i class="bi bi-arrow-right"></i>
                                                    </a>
                                                </div>





                                                <div class="col-lg-4 mb-5 mb-lg-0 mt-3">
                                                    <div class={`feature bg-primary ${Darktheme ? 'bg-success' : 'bg-success'} text-white rounded-3 mb-3 card p-2 `}>
                                                        <i class="bi bi-building"></i>
                                                    </div>

                                                    <img src={godot}
                                                        width={60}
                                                        className="my-3"
                                                    />


                                                    <h2 class="h4 fw-bolder text-muted">Godot 3D FPC Charecter Movement</h2>
                                                    <p>
                                                        If you want source code of godot FPC Charecter Movement GetStart start this one.
                                                    </p>


                                                    <p className="mx-4 mr-0" style={{ color: Darktheme ? 'grey' : 'grey' }}>
                                                        <FaClock className="mr-2" />July 10, 2022
                                                    </p>

                                                    <a class="text-decoration-none text-info" href="/CreateaFirstPersonShooterinGodot" onClick={() => this.saveViews(12)}>
                                                        Get start here
                                                        <i class="bi bi-arrow-right"></i>
                                                    </a>


                                                </div>










                                                <div class="col-lg-4 mb-5 mb-lg-0 mt-3">
                                                    <div class={`feature bg-primary ${Darktheme ? 'bg-success' : 'bg-success'} text-white rounded-3 mb-3 card p-2 `}>
                                                        <i class="bi bi-building"></i>
                                                    </div>



                                                    <img src={godot}
                                                        width={60}
                                                        className="my-3"
                                                    />



                                                    <h2 class="h4 fw-bolder text-muted">Godot 3D Camera Movement</h2>
                                                    <p>
                                                        If your game player is ready, but the only thing you need is implementing Camera Movement GetStart this tutorial.
                                                    </p>


                                                    <p className="mx-4 mr-0" style={{ color: Darktheme ? 'grey' : 'grey' }}>
                                                        <FaClock className="mr-2" />Dec 20, 2022
                                                    </p>

                                                    <a class="text-decoration-none text-info" href="/Godot3DCameraCameraControllerMovement" onClick={() => this.saveViews(13)}>
                                                        Get start here
                                                        <i class="bi bi-arrow-right"></i>
                                                    </a>
                                                </div>











                                                <div class="col-lg-4 mb-5 mb-lg-0 mt-3">
                                                    <div class={`feature bg-primary ${Darktheme ? 'bg-success' : 'bg-success'} text-white rounded-3 mb-3 card p-2 `}>
                                                        <i class="bi bi-building"></i>
                                                    </div>



                                                    <img src={godot}
                                                        width={60}
                                                        className="my-3"
                                                    />



                                                    <h2 class="h4 fw-bolder text-muted">Godot 3D GODOM Clone</h2>
                                                    <p>
                                                        This is GODOM4 clone, if you're experienced game developer you can get this project and start your own GODOM5 new release :).
                                                    </p>


                                                    <p className="mx-4 mr-0" style={{ color: Darktheme ? 'grey' : 'grey' }}>
                                                        <FaClock className="mr-2" />Dec 19, 2022
                                                    </p>

                                                    <a class="text-decoration-none text-info" href="/GODOM4CloneUsingGodotEngine" onClick={() => this.saveViews(14)}>
                                                        Get start here
                                                        <i class="bi bi-arrow-right"></i>
                                                    </a>
                                                </div>

                                                <div class="col-lg-4 mb-5 mb-lg-0 mt-3">
                                                    <div class={`feature bg-primary ${Darktheme ? 'bg-success' : 'bg-success'} text-white rounded-3 mb-3 card p-2 `}>
                                                        <i class="bi bi-building"></i>
                                                    </div>




                                                    <FaReact
                                                        color="dodgerblue"
                                                        size={60}
                                                        className="my-4"
                                                    />



                                                    <h2 class="h4 fw-bolder text-muted">ReactNative/Expo Custom Fonts</h2>
                                                    <p>
                                                        If you need how to implement Custom Font to your React Native/Expo App, GetStart this tutorial.
                                                    </p>


                                                    <p className="mx-4 mr-0" style={{ color: Darktheme ? 'grey' : 'grey' }}>
                                                        <FaClock className="mr-2" />Jan 14, 2022
                                                    </p>

                                                    <a class="text-decoration-none text-info" href="/ImplementingCustomFontsAppinReactNative/Expo" onClick={() => this.saveViews(15)}>
                                                        Get start here
                                                        <i class="bi bi-arrow-right"></i>
                                                    </a>
                                                </div>



                                                <div class="col-lg-4 mb-5 mb-lg-0 mt-3">
                                                    <div class={`feature bg-primary ${Darktheme ? 'bg-success' : 'bg-success'} text-white rounded-3 mb-3 card p-2 `}>
                                                        <i class="bi bi-building"></i>
                                                    </div>

                                                    <FaReact
                                                        color="dodgerblue"
                                                        size={60}
                                                        className="my-4"
                                                    />

                                                    <h2 class="h4 fw-bolder text-muted">ReactNative/Expo PushNotification</h2>
                                                    <p>
                                                        If you need how to implement PushNotification to your React Native/Expo App, GetStart this tutorial.
                                                    </p>


                                                    <p className="mx-4 mr-0" style={{ color: Darktheme ? 'grey' : 'grey' }}>
                                                        <FaClock className="mr-2" />May 10, 2022
                                                    </p>

                                                    <a class="text-decoration-none text-info" href="/ImplementationwithPushNotificationUsingReactNative/Expo" onClick={() => this.saveViews(16)}>
                                                        Get start here
                                                        <i class="bi bi-arrow-right"></i>
                                                    </a>
                                                </div>


                                                <div class="col-lg-4 mb-5 mb-lg-0 mt-3">
                                                    <div class={`feature bg-primary ${Darktheme ? 'bg-success' : 'bg-success'} text-white rounded-3 mb-3 card p-2 `}>
                                                        <i class="bi bi-building"></i>
                                                    </div>


                                                    <FaReact
                                                        color="dodgerblue"
                                                        size={60}
                                                        className="my-4"
                                                    />

                                                    <h2 class="h4 fw-bolder text-muted">ReactNative/Expo Redux/React-redux</h2>
                                                    <p>
                                                        If you need how to implement fontSize to your App using redux/react-redux, GetStart this tutorial.
                                                    </p>

                                                    <p className="mx-4 mr-0" style={{ color: Darktheme ? 'grey' : 'grey' }}>
                                                        <FaClock className="mr-2" />May 17, 2022
                                                    </p>

                                                    <a class="text-decoration-none text-info" href="/ImplementingfontSizeAppinReactNativeRedux/ReactRedux" onClick={() => this.saveViews(17)}>
                                                        Get start here
                                                        <i class="bi bi-arrow-right"></i>
                                                    </a>
                                                </div>

                                            </div>
                                        </div>
                                    </section>
                                </div>
                            </section>




                            <section class={`contact-details pt-5 `} id="contactus">
                                <div class={`row text-center text-md-left`}>


                                    <div class="col-12 col-md-6 col-lg-3 grid-margin">
                                        <h5 class="pb-2">Our Guidelines</h5>
                                        <a href="#">
                                            <p class="m-0 pb-2">Terms</p>
                                        </a>
                                        <a href="#">
                                            <p class="m-0 pt-1 pb-2">Privacy policy</p>
                                        </a>
                                        <a href="#">
                                            <p class="m-0 pt-1 pb-2">Cookie Policy</p>
                                        </a>
                                        <a href="#">
                                            <p class="m-0 pt-1">Discover</p>
                                        </a>
                                    </div>
                                    <div class="col-12 col-md-6 col-lg-3 grid-margin">
                                        <h5 class="pb-2">Author</h5>
                                        <p class="text-muted">Zacky Jamel</p>

                                        <div class="">
                                            <p class="text-muted m-0">Author's full Profile</p>
                                        </div>

                                        <div className="col">


                                            <a href="#">
                                                <FaLinkedin className="mx-2" />
                                            </a>
                                            <a href="https://github.com/codewithzackytech">
                                                <FaGithub className="" />
                                            </a>
                                        </div>

                                    </div>

                                    <div class="col-12 col-md-6 col-lg-3 grid-margin">
                                        <h5 class="pb-2">Get in Touch</h5>
                                        <p class="text-muted">
                                            Don’t miss any updates of our new product!
                                        </p>
                                        <form>
                                            <input
                                                type="text"
                                                class="form-control"
                                                name="Email"
                                                id="Email"
                                                onChange={this.handleChangeSubscribe}
                                                placeholder="Email address"
                                            />
                                            <div class="pt-3">
                                                <button class="btn btn-success" type="button"
                                                    onClick={() => this.SubmiteSubscribe()}
                                                >Subscribe</button>
                                            </div>
                                        </form>
                                    </div>








                                </div>
                            </section>
                            <footer class="border-top">



                                <Label
                                    className={`title    p-2 px-5 bg-success`}
                                    style={{
                                        letterSpacing: 2,
                                        borderBottomRightRadius: 100,
                                        color: "#fff",
                                        fontStyle: "-moz-initial",
                                        // backgroundColor: "#f0f0f0",
                                    }}
                                >
                                    <FaLeaf size={20} /> Web Zacky {" " + " "}
                                </Label>



                                <p class="text-center text-muted pt-4">
                                    Copyright © 2023
                                    <a
                                        href="https://www.bootstrapdash.com/"
                                        class="px-2 text-success"
                                    >
                                        Web Zacky <FaLeaf />
                                    </a>
                                    All rights reserved.
                                </p>

                                <p class="text-center text-muted px-4">

                                    Built in MERN Stack <FaCoffee />
                                </p>






                            </footer>

                            <div
                                class="modal fade"
                                id="exampleModal"
                                tabindex="-1"
                                role="dialog"
                                aria-labelledby="exampleModalLabel"
                                aria-hidden="true"
                            >
                                <div class="modal-dialog" role="document">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h4 class="modal-title" id="exampleModalLabel">
                                                Contact Us
                                            </h4>
                                        </div>
                                        <div class="modal-body">
                                            <form action="/contact">
                                                <div class="form-group">
                                                    <label for="Name">Name</label>
                                                    <input
                                                        type="text"
                                                        class="form-control"
                                                        id="Name"
                                                        placeholder="Name"
                                                    />
                                                </div>
                                                <div class="form-group">
                                                    <label for="Email">Email</label>
                                                    <input
                                                        type="email"
                                                        class="form-control"
                                                        id="Email-1"
                                                        placeholder="Email"
                                                    />
                                                </div>
                                                <div class="form-group">
                                                    <label for="Message">Message</label>
                                                    <textarea
                                                        class="form-control"
                                                        id="Message"
                                                        placeholder="Enter your Message"
                                                    ></textarea>
                                                </div>
                                            </form>
                                        </div>
                                        <div class="modal-footer">
                                            <button
                                                type="button"
                                                class="btn btn-light"
                                                data-dismiss="modal"
                                            >
                                                Close
                                            </button>
                                            <button type="button" class="btn btn-success">
                                                Submit
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* {this.state.signInToggle ? (
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





        {localStorage.getItem('cookiePermission') == undefined ? (
          <CookieModal
            toggle={this.CookieToggle}
            acceptCookie={this.acceptCookie}

          />
        ) : null} */}
            </div>
        );
    }
}
export default Tutorials;
