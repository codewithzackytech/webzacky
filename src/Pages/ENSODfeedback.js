
import React, { Component } from "react";

import icon from "../assets/images/navIcon.png";
import icon2 from "../assets/images/icon.png";
import electronjs from "../assets/images/electronjs.png";
import godot from "../assets/images/godot.png";

import icon3 from "../assets/images/icon.png";
import icon4 from "../assets/images/icon4.png";
import { FaReact, FaPython, FaNodeJs, FaAndroid, FaFlask, FaCoffee, FaLinkedin, FaWhatsapp, FaFacebook, FaGithub, FaMoon, FaSun, FaBars, FaTimes as FaClose, FaComment, FaEye, FaClock, FaLeaf, FaGamepad, FaCode, FaWaze, FaUser } from 'react-icons/fa';

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
import SuccessPost from "../MessagesModal/SuccessPost";

class ENSODfeedback extends Component {
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
            successpostModal: false,
            successpostSatatus: null,
            successpostMessage: null
        };
    }



    LoginInfoModalToggle = () => {
        this.setState({ LoginInfoModal: !this.state.LoginInfoModal });
    };

    RegisterInfoModalToggle = () => {
        this.setState({ RegisterInfoModal: !this.state.RegisterInfoModal });
    };

    signInToggle = () => {
        this.setState({ signInToggle: !this.state.signInToggle });
    };

    signUpToggle = () => {
        this.setState({ signUpToggle: !this.state.signUpToggle });
    };


    SuccesspostModal = () => {
        this.setState({ successpostModal: !this.state.successpostModal });

    }


    handleChange = (e) => {
        const { name, value } = e.target;
        const credential = { ...this.state.credential, [name]: value };
        this.setState({ credential });
    };


    LogOut = () => {
        localStorage.clear();
        // this.setState({ new_user: undefined });
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
            .post("http://localhost:5000/api/contact/", data)
            .then((response) => {
                console.log(response.data)
                this.setState({ successpostMessage: response.data.message })
                this.setState({ successpostSatatus: response.data.status })
                this.setState({ successpostModal: true })
            })
            .catch((error) => {
                this.setState({ successpostModal: true })
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









                            <div
                                id="sidebar"
                                class=""
                                style={{ backgroundColor: Darktheme ? '#242526' : "#fff" }}
                            >










                            </div>











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
                                    href="#"
                                >
                                    Tutorials
                                </a>
                            </h4>

                            <h4 class="nav-item mb-3">
                                <a
                                    className={`nav-h4nk active ${this.state.isDark ? "text-white" : "text-dark"
                                        }`}
                                    aria-current="page"
                                    href="/"
                                >
                                    Projects
                                </a>
                            </h4>





                            <p class="nav-item mb-3">
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
                                    {Darktheme ? (<FaSun size={30} />) : (<FaMoon size={30} />)}   {Darktheme ? ' Light Theme' : ' Dark Theme'}
                                </a>
                            </p>






                            <Label>____________</Label>
                            <a href='https://github.com/codewithzackytech'>
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
                                    Free Opensource Games <FaGamepad size={30} />
                                </Button>


                            </a>

                            <div>
                                <div>
                                    <Label>____________</Label>
                                </div>
                                {this.state.new_user == undefined ||
                                    this.state.new_user == null ? (
                                    <>
                                        <li

                                            onClick={() => {
                                                if (this.state.acceptCookie || localStorage.getItem('cookiePermission') == 'true' || localStorage.getItem('cookiePermission') != 'false')
                                                    this.setState({ signInToggle: true })
                                                else
                                                    this.setState({ cookieModal: true })
                                            }}
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

                                            onClick={() => {
                                                if (this.state.acceptCookie || localStorage.getItem('cookiePermission') == 'true' || localStorage.getItem('cookiePermission') != 'false')
                                                    this.setState({ signUpToggle: true })
                                                else
                                                    this.setState({ cookieModal: true })
                                            }}
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
                                    </>
                                ) : (
                                    <div className="row">
                                        <a
                                            class="nav-item nav-h4nk active text-success"
                                            href="/"
                                            onClick={() => this.LogOut()}
                                            data-bs-dismiss="offcanvas"
                                            aria-label="Close"
                                        >
                                            <FaUser size={30} className={`${this.state.isDark ? "text-white" : "text-dark"
                                                }`} /> <Label className="text-danger h5 fw-bold">LogOut </Label>
                                        </a>
                                        <Label className="ml-3 text-muted">({localStorage.getItem("userToken")})</Label>
                                    </div>
                                )}





                            </div>
                        </ul>
                    </div>
                </div>




                <div className="mt-0">


                    <div class="content-wrapper" style={{
                        backgroundColor: this.state.isDark ? "#242526" : "white",
                        // backgroundColor: "#242526",

                        color: this.state.isDark ? "#f0f0f0" : "#242526",
                    }}>


                        <div class="container" id="tutorial">




                            <section
                                class=" pb-3 mb-5"
                                style={{
                                    backgroundColor: this.state.isDark ? "#242526" : "white",
                                }}
                            >
                                <div class="">
                                    <div class="text-center mb-5 mx-3">
                                        <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                                        </div>
                                        <FaLeaf size={50} className="my-3 text-success" />
                                        <h2 class="fw-bolder text-success">Web Zacky</h2>
                                        <p class=" text-muted">Games & Client/Server Solution</p>
                                        <p class="lead text-muted"><span className={`${Darktheme ? 'text-muted' : 'text-dark'}`}>Tell Me Something,</span> I We'd love to hear from you</p>





                                    </div>
                                    <div class="row gx-5 justify-content-center">
                                        <div class="col-lg-20">
                                            <form>
                                                {/* <!-- Name input--> */}
                                                <div class="form-floating mb-3">
                                                    <input
                                                        class="form-control"
                                                        id="name"
                                                        type="text"
                                                        placeholder="Enter your name..."
                                                        name="fullName"
                                                        onChange={this.handleChangeContact}
                                                        data-sb-validations="required"
                                                        style={{
                                                            backgroundColor: this.state.isDark
                                                                ? "#363738"
                                                                : null,
                                                            color: this.state.isDark
                                                                ? "#ffff"
                                                                : '#242526',
                                                        }}
                                                    />
                                                    <label for="name">Full name</label>
                                                    <div
                                                        class="invalid-feedback"
                                                        data-sb-feedback="name:required"
                                                    >
                                                        A name is required.
                                                    </div>
                                                </div>
                                                {/* <!-- Email address input--> */}
                                                <div class="form-floating mb-3">
                                                    <input
                                                        class="form-control"
                                                        id="email"
                                                        type="email"
                                                        name="email"
                                                        onChange={this.handleChangeContact}
                                                        placeholder="name@example.com"
                                                        data-sb-validations="required,email"
                                                        style={{
                                                            backgroundColor: this.state.isDark
                                                                ? "#363738"
                                                                : null,
                                                            color: this.state.isDark
                                                                ? "#ffff"
                                                                : '#242526',
                                                        }}
                                                    />
                                                    <label for="email">Email address</label>
                                                    <div
                                                        class="invalid-feedback"
                                                        data-sb-feedback="email:required"
                                                    >
                                                        An email is required.
                                                    </div>
                                                    <div
                                                        class="invalid-feedback"
                                                        data-sb-feedback="email:email"
                                                    >
                                                        Email is not valid.
                                                    </div>
                                                </div>

                                                {/* <!-- Message input--> */}
                                                <div class="form-floating mb-3">
                                                    <textarea
                                                        class="form-control"
                                                        id="message"
                                                        type="text"
                                                        onChange={this.handleChangeContact}
                                                        name="message"
                                                        placeholder="Enter your message here..."
                                                        style={{
                                                            lineHeight: 2,
                                                            height: 150,
                                                            backgroundColor: this.state.isDark
                                                                ? "#363738"
                                                                : null,
                                                            color: this.state.isDark
                                                                ? "#ffff"
                                                                : '#242526',
                                                        }}
                                                        data-sb-validations="required"
                                                    ></textarea>
                                                    <label for="message">Message</label>
                                                    <div
                                                        class="invalid-feedback"
                                                        data-sb-feedback="message:required"
                                                    >
                                                        A message is required.
                                                    </div>
                                                </div>

                                                <div class="d-grid">
                                                    <button
                                                        onClick={() => this.SubmiteContact()}
                                                        class="btn btn-success btn-lg"
                                                        id="submitButton"
                                                        type="button"
                                                    >
                                                        Send
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
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




                {this.state.successpostModal ? (
                    <SuccessPost
                        toggle={this.SuccesspostModal}
                        status={this.state.successpostSatatus}
                        message={this.state.successpostMessage}


                    />
                ) : null}




                {/* {localStorage.getItem('cookiePermission') == undefined ? (
          <CookieModal
            toggle={this.CookieToggle}
            acceptCookie={this.acceptCookie}

          />
        ) : null} */}
            </div>
        );
    }
}
export default ENSODfeedback;
