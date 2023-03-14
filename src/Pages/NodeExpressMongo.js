import React, { Component } from "react";
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import {
  dark, tomorrow, atomDark, darcula, vscDarkPlus, vs,
  holiTheme, nightOwl, a11yDark, duotoneForest, lucario, duotoneDark, oneDark, oneLight,

} from 'react-syntax-highlighter/dist/esm/styles/prism'
import { FaWhatsapp, FaFacebook, FaLinkedin, FaGithub, FaCoffee, FaSun, FaMoon, FaBars, FaTimes as FaClose, FaClock, FaComment, FaEye, FaSign, FaGamepad, FaUser, FaLeaf } from 'react-icons/fa';

import code from "../code.";

import icon from "../assets/images/navIcon.png";
import icon2 from "../assets/images/icon.png";
import icon3 from "../assets/images/icon.png";
import icon4 from "../assets/images/icon4.png";
import devImg from "../assets/images/dev.jpg";
import NodeMongo from "../assets/images/NodeMongo.jpg";



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
  Form,
  ModalHeader,
  ModalBody,
  Modal,
  ModalFooter,
  FormGroup,
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "reactstrap";
import AuthorBio from "../components/AuthorBio";
import AuthorBiof from "../components/AuthorBiof";
import NavBar from "../components/NavBar";
import Comments from "../components/comments";

class NodeExpressMongo extends Component {
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
    axios.get(`/api/views/${6}`)
      .then((response) => {


        console.log(response.data.length)

        this.setState({ views: response.data.length })


      })
      .catch((error) => console.log(error))
      .finally(() => console.log('request completed!'))


    axios.get(`/api/comments/${6}`)
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
                    Implementing CRUD APi using Node.js / Express.js and Mongodb
                  </p>
                  <p className="mx-4" style={{ color: Darktheme ? 'grey' : 'grey' }}>
                    <FaClock className="mr-2" />  Dec 12, 2021 <FaEye className="mx-2" /> {this.state.views} views
                  </p>


                  <p className="mx-4" style={{ color: Darktheme ? 'grey' : 'grey' }}>
                    <FaComment className="mx-2" /> {this.state.number_of_comment} comments
                  </p>






                  <p class="h3  m-4 " style={{ fontFamily: "sans-serif", color: Darktheme ? 'white' : 'black' }}>
                    Introduction

                  </p>





                  <p
                    className="m-5 p"
                    style={{
                      color: Darktheme ? '#f0f0f0' : '#242526',
                      letterSpacing: 1,
                      fontFamily: "sans-serif",
                    }}>
                    This tutorial we are creating User CRUD Api using Node/Express and Mongodb for database, but you can use mysql, if your app is big and you wanna make relation to your tables like Banking Software just go Mysql even i will show you how to connect MySQL to Node appliction in the bottom section.

                  </p>






                  <p class="h3  m-4 " style={{ fontFamily: "sans-serif", color: Darktheme ? 'white' : 'black' }}>

                    Installation
                  </p>












                  <p
                    className="m-5 p"
                    style={{
                      color: Darktheme ? '#f0f0f0' : '#242526',
                      letterSpacing: 1,
                      fontFamily: "sans-serif",
                    }}>
                    I'm assuming you have knowledge about npm and how it works :) in the bellow json file is my package.json file just see all dependencies and install to your project, don't copy/past the code without installing dependencies otherwise you may get error.
                    see my <code>package.json</code> and install all dependencies there.
                  </p>






                  <div style={{ borderRadius: 100 }} className="">

                    <ReactMarkdown
                      className="rounded-5"
                      children={
                        `
  
  ~~~py
 {
  "name": "ExpressApp",
  "version": "1.0.0",
  "type":"module",
  "description": "",
  "scripts": {
    "start": "npx nodemon --experimental-modules --es-module-specifier-resolution=node ./App.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^5.0.0-beta.1",
    "mongoose": "^6.8.2",
    "mysql2": "^2.3.3",
    "dotenv": "^16.0.3",
  },
  "devDependencies": {
    "nodemon": "^2.0.20"
  }
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








                  <p class="h3  m-4 " style={{ fontFamily: "sans-serif", color: Darktheme ? 'white' : 'black' }}>
                    Project Look

                  </p>


                  <p
                    className="m-5 p"
                    style={{
                      color: Darktheme ? '#f0f0f0' : '#242526',
                      letterSpacing: 1,
                      fontFamily: "sans-serif",
                    }}>
                    Follow the same bellow screenshot, then just copy past,
                    by the way i'm following Django petterns bcz it was may first BackEnd.

                  </p>


                  <img
                    src={NodeMongo}

                    className="col-md-8 px-3 "

                  />









                  <p class="h3  m-4 " style={{ fontFamily: "sans-serif", color: Darktheme ? 'white' : 'black' }}>

                    Main File
                  </p>




                  <p
                    className="m-5 p"
                    style={{
                      color: Darktheme ? '#f0f0f0' : '#242526',
                      letterSpacing: 1,
                      fontFamily: "sans-serif",
                    }}>

                    Here is main<code> App.js</code> file
                  </p>




                  <div style={{ borderRadius: 100 }} className="">

                    <ReactMarkdown
                      className="rounded-5"
                      children={
                        `
  
  ~~~py
 import express from "express";
import dotenv from "dotenv";
import mongoose, {mongo} from "mongoose";
import userURL from "./Users/urls/user.js";
dotenv.config();

mongoose.set("strictQuery", true);
const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.json());

// core urls

app.use("/api/users", userURL);

const dbConnection = async () => {
  try {
    const db = mongoose.connect("mongodb://localhost:27017/MernApi");

    for (var i = 0; i < collections.length; i++) {
      console.log("Collection: " + collections[i]); // print the name of each collection
      db.getCollection(collections[i]).find().forEach(printjson); //and then print     the json of each of its elements
    }
    console.log("db connected");
  } catch (err) {
    console.error(err.message);
  }
};

app.listen(PORT, () => {
  dbConnection();

  // you can use PORT variable here
  console.log("listening on 3000");
  
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






                  <p class="h3  m-4 " style={{ fontFamily: "sans-serif", color: Darktheme ? 'white' : 'black' }}>
                    Model (user database file)

                  </p>





                  <div style={{ borderRadius: 100 }} className="">

                    <ReactMarkdown
                      className="rounded-5"
                      children={
                        `
  
  ~~~py
 import mongoose from "mongoose";

const {Schema} = mongoose;

const userSchama = new Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  fullName: {
    type: String,
    required: true,
  },
});

export default mongoose.model("User", userSchama);

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





                  <p class="h3  m-4 " style={{ fontFamily: "sans-serif", color: Darktheme ? 'white' : 'black' }}>
                    Views (user Views file )

                  </p>





                  <div style={{ borderRadius: 100 }} className="">

                    <ReactMarkdown
                      className="rounded-5"
                      children={
                        `
  
  ~~~py
 import user from "../models/user.js";

export const SignUp = async (req, res) => {
  const newUser = new user(req.body);

  try {
    const savedUser = await newUser.save();
    res.status(200).send(savedUser);
  } catch (erro) {
    res.send(erro.message);
  }
};

export const DeleteUser = async (req, res) => {
  try {
    const deletedUser = await user.findByIdAndDelete(req.params.userId);
    res.send(deletedUser);
  } catch (erro) {
    res.send(erro.message);
  }
};

export const UpdateUser = async (req, res) => {
  try {
    const updatedUser = await user.findByIdAndUpdate(
      req.params.userId,
      req.body,
      {
        new: true,
      }
    );
    res.send(updatedUser);
  } catch (erro) {
    res.send(erro.message);
  }
};

export const getUsers = async (req, res) => {
  try {
    const users = await user.find();
    res.send(users);
  } catch (error) {
    res.send(error.message);
  }
};

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







                  <p class="h3  m-4 " style={{ fontFamily: "sans-serif", color: Darktheme ? 'white' : 'black' }}>

                    URL (user based urls file)
                  </p>





                  <div style={{ borderRadius: 100 }} className="">

                    <ReactMarkdown
                      className="rounded-5"
                      children={
                        `
  
  ~~~py
import express from "express";
import {SignUp, DeleteUser, UpdateUser, getUsers} from "../view/user.js";
const router = express.Router();

// url patterns

router.post("/signup", SignUp);
router.delete("/:userId", DeleteUser);
router.put("/:userId", UpdateUser);
router.get("/", getUsers);
export default router;

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
                    Now start the app by typing

                  </p>


                  <div style={{ borderRadius: 100 }} className="">

                    <ReactMarkdown
                      className="rounded-5"
                      children={
                        `
  
  ~~~py
 npm start or yarn start
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






                  <p
                    className="m-5 p"
                    style={{
                      color: Darktheme ? '#f0f0f0' : '#242526',
                      letterSpacing: 1,
                      fontFamily: "sans-serif",
                    }}>
                    Then all routing will work properly, if you get an error just PUT in the comment bellow

                  </p>





                  <p class="h3  m-4 " style={{ fontFamily: "sans-serif", color: Darktheme ? 'white' : 'black' }}>
                    Node/Express with MySQL (integration)

                  </p>



                  <p
                    className="mx-5 p"
                    style={{
                      color: Darktheme ? '#f0f0f0' : '#242526',
                      letterSpacing: 1,
                      fontFamily: "sans-serif",
                    }}>

                    You can do the same with mysql, just only follow the same instruction
                  </p>


                  <div style={{ borderRadius: 100 }} className="">

                    <ReactMarkdown
                      className="rounded-5"
                      children={
                        `
  
  ~~~py
 npm install mysql2
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





                  <p
                    className="mx-5 p"
                    style={{
                      color: Darktheme ? '#f0f0f0' : '#242526',
                      letterSpacing: 1,
                      fontFamily: "sans-serif",
                    }}>

                    <code>mysql2</code> is much better updated then <code>mysql</code>
                  </p>













                  <div style={{ borderRadius: 100 }} className="">

                    <ReactMarkdown
                      className="rounded-5"
                      children={
                        `
  
  ~~~py
HOST = '127.0.0.1'
USER = 'root'
PASSWORD = ''
DB = 'User_db'

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
                    className="mx-5 p"
                    style={{
                      color: Darktheme ? '#f0f0f0' : '#242526',
                      letterSpacing: 1,
                      fontFamily: "sans-serif",
                    }}>

                    This is <code>.env</code> file, save it as <code>.env</code>, BUT you can use it inside the code if you don't care about security.
                  </p>



                  <div style={{ borderRadius: 100 }} className="">

                    <ReactMarkdown
                      className="rounded-5"
                      children={
                        `
  
  ~~~py
import mysql from 'mysql2'
import dotenv from 'dotenv'

dotenv.config()

const pool = mysql.createPool({
    host:process.env.HOST,   // '127.0.0.1'
    user:process.env.USER,  // 'root'
    password:process.env.PASSWORD,  // ''
    database:process.env_DB // 'User_db'
})


pool.query('SELECT * FROM TBLNAME') 


    

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




                  <p class="h3  m-4 " style={{ fontFamily: "sans-serif", color: Darktheme ? 'white' : 'black' }}>
                    Conclusion

                  </p>



                  <p
                    className="m-5 p"
                    style={{
                      color: Darktheme ? '#f0f0f0' : '#242526',
                      letterSpacing: 1,
                      fontFamily: "sans-serif",
                    }}>
                    Know you have complete USER CRUD APi if you have any question about the tuto... or may be you get same BUG PUT down in the bellow comment section.
                  </p>


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
                    tutorialID={6}
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
export default NodeExpressMongo;
