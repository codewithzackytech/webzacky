import React, { Component } from "react";
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import {
  dark, tomorrow, atomDark, darcula, vscDarkPlus, vs,
  holiTheme, nightOwl, a11yDark, duotoneForest, lucario, duotoneDark, oneDark, oneLight,


} from 'react-syntax-highlighter/dist/esm/styles/prism'
import { FaWhatsapp, FaFacebook, FaLinkedin, FaGithub, FaCoffee, FaSun, FaMoon, FaBars, FaTimes as FaClose, FaClock, FaComment, FaEye, FaSign, FaGamepad, FaLeaf, FaUser } from 'react-icons/fa';

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
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
  Input,
  Form,
  ModalHeader,
  ModalBody,
  Modal,
  ModalFooter,
  FormGroup,
} from "reactstrap";
import Media from "../components/nav";
import Comments from "../components/comments";
import AuthorBio from "../components/AuthorBio";
import NavBar from "../components/NavBar";
import AuthorBiof from "../components/AuthorBiof";

class About extends Component {
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
      tutorialID: 1,
      AuthError: null,
      RegError: null,
      RegisterInfoModal: false,
      data: 'this is \n bag',
      number_of_comment: 0,
      views: 0
    };
  }

  LoginInfoModalToggle = () => {
    this.setState({ LoginInfoModal: !this.state.LoginInfoModal });
  };


  getCommented_and_Visitors_Peples = () => {
    axios.get(`/api/views/${1}`)
      .then((response) => {


        console.log(response.data.length)

        this.setState({ views: response.data.length })


      })
      .catch((error) => console.log(error))
      .finally(() => console.log('request completed!'))


    axios.get(`/api/comments/${1}`)
      .then((response) => {

        console.log(response.data.length)

        this.setState({ number_of_comment: response.data.length })



      })
      .catch((error) => console.log(error))
      .finally(() => console.log('request completed!'))
  }
  componentDidMount = () => this.getCommented_and_Visitors_Peples()



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
                  href="/"
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
              <a href="https://github.com/codewithzackytech/opensourcegames">

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
              class=" col-lg-3 d-md-block sidebar collapse mt-0"
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
                    Getting Started with Electron by Creating a React App
                  </p>
                  <p className="mx-4" style={{ color: Darktheme ? 'grey' : 'grey' }}>
                    <FaClock className="mr-2" />  March 23, 2021 <FaEye className="mx-2" /> {this.state.views} views
                  </p>


                  <p className="mx-4" style={{ color: Darktheme ? 'grey' : 'grey' }}>
                    <FaComment className="mx-2" /> {this.state.number_of_comment} comments
                  </p>


                  <p class="h5 m-4 mt-5" style={{ fontFamily: "sans-serif", color: Darktheme ? 'dodgerblue' : 'black' }}>
                    Electron with <code>Create-React-App</code>
                  </p>

                  <p
                    className="m-2 p"
                    style={{
                      color: Darktheme ? '#f0f0f0' : '#242526',
                      letterSpacing: 1,
                      fontFamily: "sans-serif",

                    }}
                  >
                    The methods of creating desktop applications have come a
                    long way.{"\n"} Every day, developers are coming up with
                    easier to use options for creating desktop applications.
                    Electron is one of those solutions. It uses web technologies
                    wrapped around Node.js to come up with web technologies.
                  </p>

                  <p
                    className="m-2 p"
                    style={{
                      color: Darktheme ? '#f0f0f0' : '#242526',
                      letterSpacing: 1,
                      fontFamily: "sans-serif",
                    }}
                  >
                    For a more detailed introduction to the whole Electron.js
                    ecosystem, you can read this article. Electron uses HTML/CSS
                    and JavaScript traditionally. You can use HTML, CSS, and
                    vanilla JavaScript to build Electron applications.
                  </p>
                  <p
                    className="m-2 p"
                    style={{
                      color: Darktheme ? '#f0f0f0' : '#242526',
                      letterSpacing: 1,
                      fontFamily: "sans-serif",
                    }}
                  >
                    Other options available include using React and other
                    JavaScript frameworks. In this article, we will accomplish
                    the following:
                  </p>

                  <ul

                    class={`m-5 ${Darktheme ? 'text-white' : 'text-dark'}`}
                    style={{
                      letterSpacing: 1,
                      fontFamily: "sans-serif",
                    }}
                  >
                    <li>
                      <p className="">
                        We will create a React.js app using <code>Create-React-App </code><p className="text-info">but you can use other tools like Vite</p>
                      </p>
                    </li>
                    <li>
                      {" "}
                      <p className="">
                        Install Electron into the application.
                      </p>
                    </li>
                    <li>
                      {" "}
                      <p className="">
                        Configure Electron in the React.js app.
                      </p>
                    </li>
                    <li>
                      <p className="">
                        Finally, use the default React App as desktop application using
                        Electron and React.
                      </p>
                    </li>
                  </ul>
                  <p class={`h3 m-4 mt-5 ${Darktheme ? 'text-white' : 'text-dark'}`} style={{ fontFamily: "sans-serif" }}>
                    <p className="text-info h3 m-4 mt-5 ">Electron with <code>Create-React-App</code></p>
                  </p>

                  <p
                    className="m-2 p"
                    style={{
                      color: Darktheme ? '#f0f0f0' : '#242526',
                      letterSpacing: 1,
                      fontFamily: "sans-serif",
                    }}
                  >
                    To follow along comfortably with the following tutorial, you
                    will need to have
                  </p>

                  <ul
                    class={`m-5 ${Darktheme ? 'text-white' : 'text-dark'}`}
                    style={{
                      letterSpacing: 1,
                      fontFamily: "sans-serif",
                    }}
                  >
                    <li>
                      <p className="">
                        A basic understanding of React and how it works.
                      </p>
                    </li>

                    <li>
                      <p className="">
                        Node.js installed. If not, you can install it from here.
                      </p>
                    </li>
                  </ul>

                  <p class={`h3 m-4 mt-5 ${Darktheme ? 'text-white' : 'text-dark'}`} style={{ fontFamily: "sans-serif" }}>
                    Setting up the application
                  </p>

                  <p
                    className="m-2 p"
                    style={{
                      color: Darktheme ? '#f0f0f0' : '#242526',
                      letterSpacing: 1,
                      fontFamily: "sans-serif",
                    }}
                  >
                    This guide will use create-react-app to scaffold the
                    application. create-react-app is a project generator for
                    React application.
                  </p>

                  <p
                    className="m-2 p"
                    style={{
                      color: Darktheme ? '#f0f0f0' : '#242526',
                      letterSpacing: 1,
                      fontFamily: "sans-serif",
                    }}
                  >
                    In my personal opinion, when building a React app with CRA,
                    it is relatively easier to create desktop applications
                    compared to when you are building the React project from
                    scratch.
                  </p>

                  <p
                    className="m-2 p"
                    style={{
                      color: Darktheme ? '#f0f0f0' : '#242526',
                      letterSpacing: 1,
                      fontFamily: "sans-serif",
                    }}
                  >
                    Navigate to your working directory. Initialize your React
                    app using npx as follows. Make sure to give your project a
                    fancy and memorable name, I will name my application
                    electron-react-demo.
                  </p>
                  <div aria-label="">




                    <div style={{ borderRadius: 100 }} className="">

                      <ReactMarkdown
                        className="rounded-5"
                        children={
                          `
  
  ~~~py
 npx create-react-app electron-react-demo
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

                                language={"cmd"}
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



                    <div style={{}} className="">

                      <ReactMarkdown
                        //  className="pl-3"
                        children={
                          `
  
  ~~~py
 cd ~/ your-prefered-location
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
                      className="m-2 p"
                      style={{
                        color: Darktheme ? '#f0f0f0' : '#242526',
                        letterSpacing: 1,
                        fontFamily: "sans-serif",
                      }}
                    >
                      The command also installed a useful npm package called
                      electron-is-dev used for checking whether our electron app
                      is in development or production. You used the -D flag to
                      install electron under dev dependancies.
                    </p>

                    <p
                      className="m-2 p"
                      style={{
                        color: Darktheme ? '#f0f0f0' : '#242526',
                        letterSpacing: 1,
                        fontFamily: "sans-serif",
                      }}
                    >
                      Next, create a configuration file for Electron. Create it
                      in the public folder where all the HTML code is located
                      which in your case is in the public folder called
                      electron.js /public/electron.js.
                    </p>

                    <p
                      className="m-2 p"
                      style={{
                        color: Darktheme ? '#f0f0f0' : '#242526',
                        letterSpacing: 1,
                        fontFamily: "sans-serif",
                      }}
                    >
                      The next step is to add the Electron configuration into
                      the file.
                    </p>

                    <p
                      className="m-2 p"
                      style={{
                        color: Darktheme ? '#f0f0f0' : '#242526',
                        letterSpacing: 1,
                        fontFamily: "sans-serif",
                      }}
                    >
                      Paste this code into the electron.js file:
                    </p>

                    <div style={{}} className="">

                      <ReactMarkdown
                        //  className="pl-3"
                        children={
                          `
  
  ~~~py
    const path = require('path');

    const { app, BrowserWindow } = require('electron');
    const isDev = require('electron-is-dev');

    function createWindow() {

      // Create the browser window.

      const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
          nodeIntegration: true,
        },
      });

      // and load the index.html of the app.
      // win.loadFile("index.html");
      win.loadURL(
        isDev
          ? 'http://localhost:3000'
          : "file://${path}, '../build/index.html')}"
      );
      // Open the DevTools.
      if (isDev) {
        win.webContents.openDevTools({ mode: 'detach' });
      }
    }


    // This method will be called when Electron has finished
    // initialization and is ready to create browser windows.
    // Some APIs can only be used after this event occurs.
    app.whenReady().then(createWindow);

    // Quit when all windows are closed, except on macOS. There, it's common
    // for applications and their menu bar to stay active until the user quits
    // explicitly with Cmd + Q.
    app.on('window-all-closed', () => {
      if (process.platform !== 'darwin') {
        app.quit();
      }
    });

    app.on('activate', () => {
      if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
      }
    });
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




                    <p className="m-2 p"
                      style={{
                        color: Darktheme ? '#f0f0f0' : '#242526',
                        letterSpacing: 1,
                        fontFamily: "sans-serif",
                      }}
                    >
                      The code creates a Browserwindow instance provided by electron, which is used to render the web contents. It then loads the HTML file in the directory on to the <code>Browserwindow</code>.
                    </p>



                    <p className="m-2 p"
                      style={{
                        color: Darktheme ? '#f0f0f0' : '#242526',
                        letterSpacing: 1,
                        fontFamily: "sans-serif",
                      }}
                    >
                      It also handles other window events like closed when the window is closed, focus when the window is in focus, ready-to-show when the web page has been rendered, and window states like maximize, minimize, restore.
                    </p>




                    <p className="m-2 p"
                      style={{
                        color: Darktheme ? '#f0f0f0' : '#242526',
                        letterSpacing: 1,
                        fontFamily: "sans-serif",
                      }}
                    >
                      To read more on the configuration, you can visit the docs.

                    </p>


                    <p className="m-2 p"
                      style={{
                        color: Darktheme ? '#f0f0f0' : '#242526',
                        letterSpacing: 1,
                        fontFamily: "sans-serif",
                      }}
                    >
                      The significant change is that you added a custom HTML file to be launched. This will be in your build file, which will be the destination in production.

                    </p>



                    <p className="m-2 p"
                      style={{
                        color: Darktheme ? '#f0f0f0' : '#242526',
                        letterSpacing: 1,
                        fontFamily: "sans-serif",
                      }}
                    >

                    </p>



                    <p class={`h3 m-4 mt-5 ${Darktheme ? 'text-white' : 'text-dark'}`} style={{ fontFamily: "sans-serif" }}>
                      Configuring package.json
                    </p>


                    <p className="m-2 p"
                      style={{
                        color: Darktheme ? '#f0f0f0' : '#242526',
                        letterSpacing: 1,
                        fontFamily: "sans-serif",
                      }}
                    >
                      You now have electron installed, but still have to make a few changes in the <code>package.json</code> to syncronize the browser and desktop builds. First, update the project’s entry file.
                    </p>


                    <p className="m-2 p"
                      style={{
                        color: Darktheme ? '#f0f0f0' : '#242526',
                        letterSpacing: 1,
                        fontFamily: "sans-serif",
                      }}
                    >
                      In your <code>package.json</code> file, add this before your scripts:


                    </p>


                    <p className="mx-5 p"
                      style={{
                        color: Darktheme ? '#f0f0f0' : '#242526',
                        letterSpacing: 1,
                        fontFamily: "sans-serif",
                      }}
                    >This means your electron.js file is in <code>public</code> directory
                    </p>

                    <div style={{}} className="">

                      <ReactMarkdown
                        //  className="pl-3"
                        children={
                          `
  
  ~~~py
 "main": "public/electron.js",
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




                    <p className="mx-5 p"
                      style={{
                        color: Darktheme ? '#f0f0f0' : '#242526',
                        letterSpacing: 1,
                        fontFamily: "sans-serif",
                      }}
                    >For <span className="text-info">Production Mode</span> This will launch current <code>.html</code> file BUT by default it's <code>'/'</code>
                    </p>




                    <div style={{}} className="">

                      <ReactMarkdown
                        //  className="pl-3"
                        children={
                          `
  
  ~~~py
 "homepage": "./",
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



                    <p className="m-2 p"
                      style={{
                        color: Darktheme ? '#f0f0f0' : '#242526',
                        letterSpacing: 1,
                        fontFamily: "sans-serif",
                      }}
                    >
                      Next, install the following packages, <p className="text-info">concurrently</p> and <p className="text-info">wait-on.</p> These packages will listen to the app, and when it launches on the browser, it will launch as an electron app instead.
                    </p>



                    <div style={{}} className="">

                      <ReactMarkdown
                        //  className="pl-3"
                        children={
                          `
  
  ~~~py
 npm i -D concurrently wait-on
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




                    <p className="m-2 p"
                      style={{
                        color: Darktheme ? '#f0f0f0' : '#242526',
                        letterSpacing: 1,
                        fontFamily: "sans-serif",
                      }}
                    >
                      <code>Concurently</code> allows us to run mutliple commands within one script and <code>wait-on</code> will wait for port 3000 which is the default CRA port, to launch the app.
                    </p>


                    <p className="m-2 p"
                      style={{
                        color: Darktheme ? '#f0f0f0' : '#242526',
                        letterSpacing: 1,
                        fontFamily: "sans-serif",
                      }}
                    >
                      The flag, <code>BROWSER=none</code> that you passed in the dev script will prevent the browser from launching once the React app compiles successfully.
                    </p>


                    <p className="m-2 p"
                      style={{
                        color: Darktheme ? '#f0f0f0' : '#242526',
                        letterSpacing: 1,
                        fontFamily: "sans-serif",
                      }}
                    >
                      Under <code>scripts</code> in your <code>package.json </code>file, add:
                    </p>



                    <div style={{}} className="">

                      <ReactMarkdown
                        //  className="pl-3"
                        children={
                          `
  
  ~~~py

"scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "dev": "concurrently -k \"BROWSER=none npm start\" \"npm:electron\"",
    "electron": "wait-on tcp:3000 && electron ."
  },
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



                    <p className="m-2 p"
                      style={{
                        color: Darktheme ? '#f0f0f0' : '#242526',
                        letterSpacing: 1,
                        fontFamily: "sans-serif",
                      }}
                    >
                      Just like that, you have everything set up. Running npm run dev should launch an electron app.
                    </p>



                    <p class={`h3 m-4 mt-5 ${Darktheme ? 'text-white' : 'text-dark'}`} style={{ fontFamily: "sans-serif" }}>
                      Conclusion
                    </p>


                    <p className="mx-5 p"
                      style={{
                        color: Darktheme ? '#f0f0f0' : '#242526',
                        letterSpacing: 1,
                        fontFamily: "sans-serif",
                      }}
                    >
                      In this article, we covered how to setup a simple desktop application using <code>Create-React-App</code> and <p className="p"
                        style={{
                          color: 'dodgerblue',
                          letterSpacing: 1,
                          fontFamily: "sans-serif",
                        }}
                      >Electron.js</p>
                    </p>



                    <p className="m-2 p"
                      style={{
                        color: Darktheme ? '#f0f0f0' : '#242526',
                        letterSpacing: 1,
                        fontFamily: "sans-serif",
                      }}
                    >
                      Electron offers the power to build desktop applications using Node.js and web technologies. This premise makes it very easy to get started with a desktop application.
                    </p>



                    <p className="m-2 p"
                      style={{
                        color: Darktheme ? '#f0f0f0' : '#242526',
                        letterSpacing: 1,
                        fontFamily: "sans-serif",
                      }}
                    >
                      You can find the full code for the tutorial <span className="text-info " style={{ cursor: 'pointer' }}>here.</span>
                    </p>




                    <p className="m-2 p"
                      style={{
                        color: Darktheme ? '#f0f0f0' : '#242526',
                        letterSpacing: 1,
                        fontFamily: "sans-serif",
                      }}
                    >
                      Happy coding!
                    </p>










                    <Comments
                      Darktheme={Darktheme}
                      tutorialID={this.state.tutorialID}
                      getCommented_and_Visitors_Peples={this.getCommented_and_Visitors_Peples}
                      tutorialName={'Getting Started with Electron by Creating a React App'}
                    />













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
export default About;
