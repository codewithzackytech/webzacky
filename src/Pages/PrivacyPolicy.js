import React, { Component } from "react";
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import {
    dark, tomorrow, atomDark, darcula, vscDarkPlus, vs,
    holiTheme, nightOwl, a11yDark, duotoneForest, lucario, duotoneDark, oneDark, oneLight,


} from 'react-syntax-highlighter/dist/esm/styles/prism'
import { FaWhatsapp, FaFacebook, FaLinkedin, FaGithub, FaCoffee, FaSun, FaMoon, FaBars, FaTimes as FaClose, FaClock, FaComment, FaEye, FaSign, FaGamepad, FaLeaf, FaUser } from 'react-icons/fa';

import code from "../code.";

import icon from "../assets/images/navIcon.png";
import icon2 from "../assets/images/icon.png";
import icon3 from "../assets/images/icon.png";
import icon4 from "../assets/images/icon4.png";
import devImg from "../assets/images/dev.jpg";
import DemoVideo from "../assets/videos/ESD.mp4";


import Login from "../Auth/Login";
import Register from "../Auth/Register";
import LoginInfoModal from "../MessagesModal/LoginInfo";
import RegisterInfoModal from "../MessagesModal/RegisterInfo";


// Did you know you can use tildes instead of backticks for code in markdown? ✨

// import homeScreenApp from "./assets/images/homeScreenApp.png";
// import mysql from '../assets/images/mysql.png'
// import vue from '../assets/images/vue.png'
// import react from '../assets/images/react.png'

// import developer from '../assets/images/developer.jpg'

import Authentication from '../Auth/Authentication';
import "bootstrap/dist/css/bootstrap.min.css";
import "../style.css";
import "../App.css";

import "bootstrap/js/dist/collapse";
import "bootstrap/js/dist/offcanvas";
import "bootstrap/js/dist/dropdown";

import axios from "axios";







import {
    Label,
    Accordion,
    AccordionBody,
    AccordionHeader,
    AccordionItem,
    Button,
    Input,
    Form,
    ModalHeader,
    ModalBody,
    Modal,
    ModalFooter,
    FormGroup,
} from "reactstrap";
import AuthorBio from "../components/AuthorBio";
import NavBar from "../components/NavBar";
import AuthorBiof from "../components/AuthorBiof";
import Comments from "../components/comments";

class PrivacyPolicy extends Component {
    constructor(props) {
        super(props);
        this.state = {
            new_user: localStorage.getItem("userToken"),
            activeQuize: null,
            isDark: false,
            signInToggle: false,
            singUpToggle: false,
            credential: null,
            LoginInfoModal: false,
            AuthError: null,
            RegError: null,
            RegisterInfoModal: false,
            data: 'this is \n bag',
            number_of_comment: 0,
            views: 0

        };
    }




    getCommented_and_Visitors_Peples = () => {
        axios.get(`/api/views/${101}`)
            .then((response) => {


                console.log(response.data.length)

                this.setState({ views: response.data.length })


            })
            .catch((error) => console.log(error))
            .finally(() => console.log('request completed!'))


        axios.get(`/api/comments/${101}`)
            .then((response) => {

                console.log(response.data.length)

                this.setState({ number_of_comment: response.data.length })



            })
            .catch((error) => console.log(error))
            .finally(() => console.log('request completed!'))
    }
    componentDidMount = () => this.getCommented_and_Visitors_Peples()



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
                console.log(response.data);
                localStorage.setItem("AuthToken", response.data.DeedCashToken);
                localStorage.setItem("userToken", response.data.username);
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

    handleTheme = () => {
        this.setState({ isDark: !this.state.isDark })
    }



    render() {
        const path = '${path.join(__dirname'
        const Darktheme = this.state.isDark
        return (
            <div>

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
                                            href="#"
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

                {/* author view */}
                <div class="container-fluid bg-info">
                    <div class="row">

                        <main class="ml-sm-auto " style={{ backgroundColor: Darktheme ? '#242526' : '#fffefe' }}>
                            {/* <ol class="breadcrumb bg-info">
                <li class="breadcrumb-item">
                  <a href="#" className="h1">
                    DashboardDashboardDashboardDashboardDashboardDashboard
                  </a>
                </li>
              </ol> */}

                            <div className="">
                                <div className="">
                                    <p
                                        class="h3  m-4 "
                                        style={{ fontFamily: "sans-serif", color: Darktheme ? 'white' : 'black' }}
                                    >
                                        English Somali Dictionary for PC
                                    </p>




                                    <p class="h3  m-4 " style={{ fontFamily: "sans-serif", color: Darktheme ? 'white' : 'black' }}>
                                        Privacy Policy

                                    </p>








                                    <div className="col-md-10">



                                        <p style={{ color: 'black', fontWeight: 'bold', fontStyle: 'normal' }} >English-Somali Dictionary</p> built for students & employees to use desktop offline translation as free software. this SERVICE provided by student developer:<br />Zacky Jamel based in Somali<br />at <p style={{ LabelDecorationLine: 'line-through', color: 'red' }}>no cost</p> and is intended for use as is.

                                        <br /><br />This page is  used to inform visitors regarding my policies with the collection, use, and disclosure of Personal Information if anyone decided to use my Service.<br /><br />

                                        If you choose to use my Service, then you agree to the collection and use of information in relation to this policy. The Personal Information that I collect is used for providing and improving the Service. I will not use or share your information with anyone except as described in this Privacy Policy.<br /><br />




                                        <p style={{ fontWeight: 'bold', color: 'red' }}>Information Collection and Use</p><br /><br />

                                        For a better experience, while using our Service, I may require you to provide us with certain personally identifiable information, including but not limited to Nothing . The information that I request will be retained on your device and is not collected by me in any way.<br /><br />

                                        The app does use third party services that may collect information used to identify you.<br /><br />

                                        Link to privacy policy of third party service providers used by the app<br /><br />

                                        <p style={{ color: 'dodgerblue', LabelDecorationColor: 'grey', LabelDecorationLine: 'underline', }} onPress={() => null}>Google Play Services</p><br />

                                        <p style={{ color: 'dodgerblue', LabelDecorationColor: 'grey', LabelDecorationLine: 'underline' }} onPress={() => null}>Firebase Analytics</p>
                                        <br /><br />



                                        <p style={{ color: 'red', fontWeight: 'bold' }}>Bug Notification</p><br /><br />

                                        I want to inform you that whenever you use my Service, in a case of an error in the app. I collect data and information on your phone called Reported Bug. This Reported Bug may include detected generated bugs and some information about your system such as device name, operating system version, to help you that you may need some Update,<br />But Note that system doesn't collect your input-Data<br /><br />



                                        <p style={{ color: 'red', fontWeight: 'bold' }}>Cookies</p><br /><br />

                                        Cookies are files with a small amount of data that are commonly used as anonymous unique identifiers. These are sent to your browser from the websites that you visit and are stored on your device's internal memory.
                                        <br /><br />
                                        This Service does not use these “cookies” explicitly. However, the app may use third party code and libraries that use “cookies” to collect information and improve their services. You have the option to either accept or refuse these cookies and know when a cookie is being sent to your device. If you choose to refuse our cookies, you may not be able to use some portions of this Service.

                                        <br /><br />

                                        <p style={{ color: 'red', fontWeight: 'bold' }}>Service Providers</p><br /><br />


                                        <p style={{}}>I'm Senior Software-Engineer<br />Student Freelancer based in SOMALI.<br />The reason why i'm building this product is:</p>

                                        <p style={{}}>{'\n \n'}*To make more easy way How community<br /> Make payment;</p><br />
                                        <p style={{}}>*To simplify merchant's JOB;</p><br />
                                        <p style={{}}>*To provide all types of customers<br /> easy way that they can make payment</p><br />
                                        <p style={{}}><br />
                                            I want to inform users of this Service that these third parties have access to your Personal Information. The reason is to perform the tasks assigned to them on our behalf. However, they are obligated not to disclose or use the information for any other purpose.
                                            <br /><br /><br />


                                            <p style={{ color: 'red', fontWeight: 'bold' }}>Security</p><br /><br />

                                            I value your trust in providing us your Personal Information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and I cannot guarantee its absolute security.
                                            <br /><br /><br />




                                            <p style={{ color: 'red', fontWeight: 'bold' }}>Links to Other Sites</p>
                                            <br /><br />

                                            This Service may contain links to other sites. If you click on a third-party link, you will be directed to that site. Note that these external sites are not operated by me. Therefore, I strongly advise you to review the Privacy Policy of these websites. I have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.
                                            <br /><br /><br />


                                            <p style={{ color: 'red', fontWeight: 'bold' }}>Children’s Privacy</p><br /><br />

                                            These Services do not address anyone under the age of 13. I do not knowingly collect personally identifiable information from children under 13. In the case I discover that a child under 13 has provided me with personal information, I immediately delete this from our servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact me so that I will be able to do necessary actions.



                                            Changes to This Privacy Policy

                                            I may update our Privacy Policy from time to time. Thus, you are advised to review this page periodically for any changes. I will notify you of any changes by posting the new Privacy Policy on this page. These changes are effective immediately after they are posted on this page.
                                            <br /><br /><br />



                                            <p style={{ color: 'red', fontWeight: 'bold' }}>Contact Us</p>
                                            <br /><br />


                                            If you have any questions or suggestions about my Privacy Policy, do not hesitate to contact<br />me on<br /> zackyjamel@gmail.com.<br />



                                            <br /><br /><br />

                                        </p>
                                    </div>



                                    <div aria-label="">





                                        <div className="">




                                            <footer class="border-top pb-4">

                                                <Label
                                                    className={`title    p-2 px-5 bg-success`}
                                                    style={{
                                                        letterSpacing: 2,
                                                        borderBottomRightRadius: 100,
                                                        color: Darktheme ? "white" : "white",
                                                        fontStyle: "-moz-initial",
                                                        // backgroundColor: "blueviolet",
                                                    }}
                                                >
                                                    Web Zacky {" " + " "}
                                                </Label>


                                                <p class="text-center text-muted pt-4">
                                                    Copyright © 2023
                                                    <a
                                                        href="https://www.bootstrapdash.com/"
                                                        class="px-1 text-success"
                                                    >
                                                        Web Zacky  <FaLeaf />
                                                    </a>
                                                    All rights reserved.
                                                </p>
                                                <p class="text-center text-muted px-4">

                                                    Built in MERN Stack <FaCoffee />
                                                </p>

                                            </footer>
                                        </div>

















                                    </div>
                                </div>
                            </div>
                        </main>




                    </div>
                </div>








                {this.state.signInToggle ? (
                    <Login
                        toggle={this.signInToggle}
                        Darktheme={Darktheme}
                        SignIn={this.SignIn}
                        handleChange={this.handleChange}
                    />
                ) : null}

                {this.state.signUpToggle ? (
                    <Register
                        toggle={this.signUpToggle}
                        SignUp={this.SignUp}
                        Darktheme={Darktheme}
                        handleChange={this.handleChange}
                        AuthError={this.state.RegError}
                    />
                ) : null}

                {this.state.LoginInfoModal ? (
                    <LoginInfoModal
                        Darktheme={Darktheme}
                        toggle={this.LoginInfoModalToggle}
                        signinToggle={this.signInToggle}
                        signupToggle={this.signUpToggle}
                        AuthChecker={this.LoginInfoModalToggle}
                        AuthError={this.state.AuthError}
                    />
                ) : null}

                {this.state.RegisterInfoModal ? (
                    <RegisterInfoModal
                        Darktheme={Darktheme}
                        toggle={this.RegisterInfoModalToggle}
                        signinToggle={this.signInToggle}
                        signupToggle={this.signUpToggle}
                        AuthChecker={this.RegisterInfoModalToggle}
                        RegError={this.state.RegError}
                    />
                ) : null}

            </div>


        );
    }
}
export default PrivacyPolicy;
