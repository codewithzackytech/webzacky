import React, { Component } from "react";
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import {
  dark, tomorrow, atomDark, darcula, vscDarkPlus, vs,
  holiTheme, nightOwl, a11yDark, duotoneForest, lucario, duotoneDark, oneDark, oneLight,


} from 'react-syntax-highlighter/dist/esm/styles/prism'
import { FaWhatsapp, FaFacebook, FaLinkedin, FaGithub, FaCoffee, FaSun, FaMoon, FaBars, FaTimes as FaClose, FaClock, FaComment, FaEye, FaSign, FaGamepad, FaLeaf, FaUser } from 'react-icons/fa';
import AuthorBiof from "../components/AuthorBiof";
import code from "../code.";

import icon from "../assets/images/navIcon.png";
import icon2 from "../assets/images/icon.png";
import icon3 from "../assets/images/icon.png";
import icon4 from "../assets/images/icon4.png";
import devImg from "../assets/images/dev.jpg";

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
  Button,
  Input,
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
  Form,
  ModalHeader,
  ModalBody,
  Modal,
  ModalFooter,
  FormGroup,
} from "reactstrap";
import AuthorBio from "../components/AuthorBio";
import NavBar from "../components/NavBar";
import Comments from "../components/comments";

class DjangoAuthModel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      new_user: localStorage.getItem("userToken"),
      activeQuize: null,
      isDark: true,
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
    axios.get(`/api/views/${8}`)
      .then((response) => {


        console.log(response.data.length)

        this.setState({ views: response.data.length })


      })
      .catch((error) => console.log(error))
      .finally(() => console.log('request completed!'))


    axios.get(`/api/comments/${8}`)
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




                <Accordion toggle={false} className="mt-5">
                  <AccordionHeader className="mt-5">Author's Bio</AccordionHeader>

                  <AccordionBody className="mt-5">
                    {/* <AccordionItem style={{ backgroundColor: Darktheme ? '#242526' : 'white' }}> */}
                    <AuthorBiof
                      Darktheme={Darktheme}
                    />
                    {/* </AccordionItem> */}
                  </AccordionBody>

                </Accordion>

              </div>
            </ul>
          </div>
        </div>

        {/* author view */}
        <div class="container-fluid bg-info">
          <div class="row">
            <div
              id="sidebar"
              class="col-md-3 col-lg-3 d-md-block sidebar collapse mt-0"
              style={{ backgroundColor: Darktheme ? '#242526' : "#fffefe" }}
            >
              <AuthorBio

                Darktheme={Darktheme}
              />



            </div>
            <main class="col-md-9 ml-sm-auto col-lg-9 " style={{ backgroundColor: Darktheme ? '#242526' : '#fffefe' }}>
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
                    Django Model Authentication Permission
                  </p>

                  <p className="mx-4" style={{ color: Darktheme ? 'grey' : 'grey' }}>
                    <FaClock className="mr-2" />  Jan 7, 2022 <FaEye className="mx-2" /> {this.state.views} views
                  </p>


                  <p className="mx-4" style={{ color: Darktheme ? 'grey' : 'grey' }}>
                    <FaComment className="mx-2" /> {this.state.number_of_comment} comments
                  </p>






                  <p
                    className="mx-5 p"
                    style={{
                      color: Darktheme ? '#f0f0f0' : '#242526',
                      letterSpacing: 1,
                      fontFamily: "sans-serif",
                    }}>
                    if you're developing Django BackEnd and every thing is working but you need permission some of your view functions, may be you wanna allow authenticated users to view/see some of your view functions if that is your problem this tutorial is for you, so let's begin.

                  </p>


                  <p class="h3  m-4 " style={{ fontFamily: "sans-serif", color: Darktheme ? 'white' : 'black' }}>

                    Implementation
                  </p>



                  <p
                    className="mx-5 p"
                    style={{
                      color: Darktheme ? '#f0f0f0' : '#242526',
                      letterSpacing: 1,
                      fontFamily: "sans-serif",
                    }}>
                    Import this classes first

                  </p>





                  <div style={{ borderRadius: 100 }} className="">

                    <ReactMarkdown
                      className="rounded-5"
                      children={
                        `
  
  ~~~py
 from rest_framework.authentication import TokenAuthentication
 from rest_framework.permissions import IsAuthenticated
  ~~~


  `}
                      components={{
                        code({ node, inline, className, children, ...props }) {
                          const match = /language-(\w+)/.exec(className || '')
                          return !inline && match ? (
                            <SyntaxHighlighter
                              children={String(children).replace(/\n$/, '')}
                              style={Darktheme ? oneDark : oneLight}
                              //tomorrow, atomDark,darcula,vscDarkPlus,vs
                              //holiTheme,nightOwl,a11yDark,duotoneForest,lucario

                              language={"py"}
                              PreTag="div"
                              {...props}
                            />
                          ) : (
                            <code className={className} {...props}>
                              {children}
                            </code>
                          )
                        }
                      }}
                    />
                  </div>











                  <p
                    className="mx-5 p"
                    style={{
                      color: Darktheme ? '#f0f0f0' : '#242526',
                      letterSpacing: 1,
                      fontFamily: "sans-serif",
                    }}>
                    The Add this code inside your viewset class

                  </p>






                  <div style={{ borderRadius: 100 }} className="">

                    <ReactMarkdown
                      className="rounded-5"
                      children={
                        `
  
  ~~~py
authentication_class = [TokenAuthentication, ]
permission_class = [IsAuthenticated, ]
  ~~~


  `}
                      components={{
                        code({ node, inline, className, children, ...props }) {
                          const match = /language-(\w+)/.exec(className || '')
                          return !inline && match ? (
                            <SyntaxHighlighter
                              children={String(children).replace(/\n$/, '')}
                              style={Darktheme ? oneDark : oneLight}
                              //tomorrow, atomDark,darcula,vscDarkPlus,vs
                              //holiTheme,nightOwl,a11yDark,duotoneForest,lucario

                              language={"py"}
                              PreTag="div"
                              {...props}
                            />
                          ) : (
                            <code className={className} {...props}>
                              {children}
                            </code>
                          )
                        }
                      }}
                    />
                  </div>



                  <p
                    className="mx-5 p"
                    style={{
                      color: Darktheme ? '#f0f0f0' : '#242526',
                      letterSpacing: 1,
                      fontFamily: "sans-serif",
                    }}>

                    Then add this <code>Authorization</code> paramiter to your axios or fetch function like this
                  </p>





                  <div style={{ borderRadius: 100 }} className="">

                    <ReactMarkdown
                      className="rounded-5"
                      children={
                        `
  
  ~~~py

 const token = this.props.token
 
 getData = () => {
  fetch('http://localhost:8000/api/data', {
    method:'Get',
    headers: {
      'Content-Type': 'application/json',
      // may be you're getting as a prop (other module)
      Authorization: token // you can also do this 'Token ${this.props.token}',
    },
    body: JSON.stringify(this.state.data)
  })
  .then(data => data.json())
  .then(
    data => {
      this.setState({data: data})
    }
  )
  .catch( error => console.error(error))
}

  ~~~


  `}
                      components={{
                        code({ node, inline, className, children, ...props }) {
                          const match = /language-(\w+)/.exec(className || '')
                          return !inline && match ? (
                            <SyntaxHighlighter
                              children={String(children).replace(/\n$/, '')}
                              style={Darktheme ? oneDark : oneLight}
                              //tomorrow, atomDark,darcula,vscDarkPlus,vs
                              //holiTheme,nightOwl,a11yDark,duotoneForest,lucario

                              language={"js"}
                              PreTag="div"
                              {...props}
                            />
                          ) : (
                            <code className={className} {...props}>
                              {children}
                            </code>
                          )
                        }
                      }}
                    />
                  </div>







                  <p
                    className="m-5 p"
                    style={{
                      color: Darktheme ? '#f0f0f0' : '#242526',
                      letterSpacing: 1,
                      fontFamily: "sans-serif",
                    }}>

                    Happy Coding <FaCoffee />
                  </p>


                  <p
                    className="m-5 p"
                    style={{
                      color: Darktheme ? '#f0f0f0' : '#242526',
                      letterSpacing: 1,
                      fontFamily: "sans-serif",
                    }}>

                    Don't forget to comment :)
                  </p>



                  <Comments
                    Darktheme={Darktheme}
                    tutorialID={8}
                    getCommented_and_Visitors_Peples={this.getCommented_and_Visitors_Peples}
                    tutorialName={'Electron.js Multi-Platform Architecture Deployment'}
                  />





                  <div aria-label="">





                    <div className="">




                      <footer class="border-top">

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
export default DjangoAuthModel;
