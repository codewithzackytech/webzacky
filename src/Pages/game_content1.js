import React, { Component } from "react";
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import {
  dark, tomorrow, atomDark, darcula, vscDarkPlus, vs,
  holiTheme, nightOwl, a11yDark, duotoneForest, lucario, duotoneDark, oneDark, oneLight,


} from 'react-syntax-highlighter/dist/esm/styles/prism'
import { FaWhatsapp, FaFacebook, FaLinkedin, FaGithub, FaCoffee, FaSun, FaMoon, FaBars, FaTimes as FaClose, FaClock, FaComment, FaEye, FaSign, FaGamepad, FaSmile, FaLeaf, FaUser } from 'react-icons/fa';

import code from "../code.";

import icon from "../assets/images/navIcon.png";
import icon2 from "../assets/images/icon.png";
import icon3 from "../assets/images/icon.png";
import icon4 from "../assets/images/icon4.png";
import devImg from "../assets/images/dev.jpg";
import fpc from "../assets/images/godot/fpc.png";

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
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
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

class Game_Content1 extends Component {
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
    axios.get(`/api/views/${12}`)
      .then((response) => {


        console.log(response.data.length)

        this.setState({ views: response.data.length })


      })
      .catch((error) => console.log(error))
      .finally(() => console.log('request completed!'))


    axios.get(`/api/comments/${12}`)
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
                    Create a First-Person Shooter in Godot - (Player only)
                  </p>
                  <p className="mx-4" style={{ color: Darktheme ? 'grey' : 'grey' }}>
                    <FaClock className="mr-2" />  July 10, 2022 <FaEye className="mx-2" /> {this.state.views} views
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
                    Welcome to the tutorial, and get ready to learn some in-demand skills for creating first-person
                    shooter games! Throughout this tutorial, we will work with the 3D aspects of the Godot game
                    engine to enhance your foundations when it comes to action game development. Additionally,
                    we'll be creating a first-person shooter from scratch, which will show you how to set up the FPS
                    player and camera, enemies, efficient shooting mechanics, health and ammo pickups, and
                    more.
                  </p>






                  <p
                    className="m-5 p"
                    style={{
                      color: Darktheme ? '#f0f0f0' : '#242526',
                      letterSpacing: 1,
                      fontFamily: "sans-serif",
                    }}>
                    Before we begin, it's important to know that a basic understanding of the Godot engine is
                    required. If this is your first time using Godot, I recommend you read through the How to Make
                    First Game with Godot chapter first. It will teach you how to install Godot, and the basics of the
                    engine and GDScript.
                  </p>



                  <img
                    src={fpc}

                    className="col-md-8 mx-3"

                  />




                  <p class="h3  m-4 " style={{ fontFamily: "sans-serif", color: Darktheme ? 'white' : 'black' }}>
                    Complete Project Files
                  </p>





                  <p
                    className="m-5 p"
                    style={{
                      color: Darktheme ? '#f0f0f0' : '#242526',
                      letterSpacing: 1,
                      fontFamily: "sans-serif",
                    }}>
                    For this project, we'll be using a handful of pre-made assets such as models and textures.
                    Some of these are custom-built, while others are from kenney.nl, a website for public domain
                    game assets.

                  </p>




                  <p class="h3  m-4 " style={{ fontFamily: "sans-serif", color: Darktheme ? 'white' : 'black' }}>

                    Let's Begin
                  </p>


                  <p
                    className="m-5 p"
                    style={{
                      color: Darktheme ? '#f0f0f0' : '#242526',
                      letterSpacing: 1,
                      fontFamily: "sans-serif",
                    }}>
                    Im asuming every is setup, Environment (Levels), Gui Menu, but the only thing you need is how to make Player Movement so let's begin.
                  </p>




                  <p class="h3  m-4 " style={{ fontFamily: "sans-serif", color: Darktheme ? 'white' : 'black' }}>

                    Scripting the Player
                  </p>


                  <p
                    className="m-5 p"
                    style={{
                      color: Darktheme ? '#f0f0f0' : '#242526',
                      letterSpacing: 1,
                      fontFamily: "sans-serif",
                    }}>
                    Now that we have our player scene setup, let's get to scripting the player movement, jumping,
                    gravity, shooting, etc

                  </p>



                  <p
                    className="m-5 p"
                    style={{
                      color: Darktheme ? '#f0f0f0' : '#242526',
                      letterSpacing: 1,
                      fontFamily: "sans-serif",
                    }}>

                    In the Player scene, create a new script on the Player node. By default, it should be called
                    Player.gd. We'll begin by filling in our variables.
                  </p>































                  <div style={{ borderRadius: 100 }} className="">

                    <ReactMarkdown
                      className="rounded-5"
                      children={
                        `
  
  ~~~py
    extends KinematicBody

    # stats
    var curHp : int = 10
    var maxHp : int = 10
    var ammo : int = 15
    var score: int = 0

    # physics
    var moveSpeed : float = 5.0
    var jumpForce : float = 5.0
    var gravity : float = 12.0

    # cam look
    var minLookAngle : float = -90.0
    var maxLookAngle : float = 90.0
    var lookSensitivity : float = 10.0

    # vectors
    var vel : Vector3 = Vector3()
    var mouseDelta : Vector2 = Vector2()

    # components
    onready var camera : Camera = get_node("Camera")
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

                              language={"java"}
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

                    First, we can begin by setting up the ability to look around. The _Input function is built into
                    Godot and gets called whenever an input is detected (keyboard, mouse click and movement).
                    What we're doing here, is getting the direction and length that our mouse moved.
                  </p>








                  <div style={{ borderRadius: 100 }} className="">

                    <ReactMarkdown
                      className="rounded-5"
                      children={
                        `
  
  ~~~py
# called every frame	
func _process(delta):
	
	# rotate the camera along the x axis
	camera.rotation_degrees.x -= mouseDelta.y * lookSensitivity * delta
	
	# clamp camera x rotation axis
	camera.rotation_degrees.x = clamp(camera.rotation_degrees.x, minLookAngle, maxLookAngle)
	
	# rotate the player along their y axis
	rotation_degrees.y -= mouseDelta.x * lookSensitivity * delta
	
	# reset the mouse delta vector
	mouseDelta = Vector2()
	
	# check to see if we have shot
	if Input.is_action_just_pressed("shoot") and ammo > 0:
		shoot()
		
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

                              language={"java"}
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

                    We can now press Play and see that we look around when we move the mouse
                  </p>



                  <p
                    className="m-5 p"
                    style={{
                      color: Darktheme ? '#f0f0f0' : '#242526',
                      letterSpacing: 1,
                      fontFamily: "sans-serif",
                    }}>

                    Next up is movement. This will all be done in the _physics_process function. It's built into the
                    KinematicBody node and gets called 60 times a second (good for physics).
                  </p>






























                  <div style={{ borderRadius: 100 }} className="">

                    <ReactMarkdown
                      className="rounded-5"
                      children={
                        `
  
  ~~~py
 
# called 60 times a second
func _physics_process(delta):

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

                              language={"java"}
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

                    First, we're going to check for our keyboard inputs.
                  </p>





























                  <div style={{ borderRadius: 100 }} className="">

                    <ReactMarkdown
                      className="rounded-5"
                      children={
                        `
  
  ~~~py
 	# reset the x and z velocity
	vel.x = 0
	vel.z = 0
	
	var input = Vector2()
	
	# movement inputs
	if Input.is_action_pressed("move_forward"):
		input.y -= 1
	if Input.is_action_pressed("move_backward"):
		input.y += 1
	if Input.is_action_pressed("move_left"):
		input.x -= 1
	if Input.is_action_pressed("move_right"):
		input.x += 1
		
	input = input.normalized()

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

                              language={"java"}
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

                    Next, we need to get the forward and right direction of our player, so we know which way we're
                    facing and can apply that to our velocity.
                  </p>





                  <div style={{ borderRadius: 100 }} className="">

                    <ReactMarkdown
                      className="rounded-5"
                      children={
                        `
  
  ~~~py
 	# get the forward and right directions
	var forward = global_transform.basis.z
	var right = global_transform.basis.x
	
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

                              language={"java"}
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

                    We can then set our velocity, apply gravity and move the player!
                  </p>







                  <div style={{ borderRadius: 100 }} className="">

                    <ReactMarkdown
                      className="rounded-5"
                      children={
                        `
  
  ~~~py
 	# set the velocity
	vel.x = relativeDir.x * moveSpeed
	vel.z = relativeDir.z * moveSpeed	
	
	# apply gravity
	vel.y -= gravity * delta
	
	# move the player
	vel = move_and_slide(vel, Vector3.UP)
	
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

                              language={"java"}
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

                    This book is brought to you by Zenva - Enroll in our Godot Game Development Mini-Degree to master 2D
                    and 3D game development with the free, open-source Godot game engine
                    © Zenva Pty Ltd 2020. All rights reserved
                    Finally, we're going to check for the jump action and change the Y velocity when that happens.
                  </p>







                  <div style={{ borderRadius: 100 }} className="">

                    <ReactMarkdown
                      className="rounded-5"
                      children={
                        `
  
  ~~~py
 	# jumping
	if Input.is_action_pressed("jump") and is_on_floor():
		vel.y = jumpForce

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

                              language={"java"}
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
                    This book is brought to you by Zenva - Enroll in our Godot Game Development Mini-Degree to master 2D
                    and 3D game development with the free, open-source Godot game engine
                    © Zenva Pty Ltd 2020. All rights reserved
                    Finally, we're going to check for the jump action and change the Y velocity when that happens.
                    If we press the play button now, you'll be able to move, look around and jump. That's how to
                    create a basic first-person controller in Godot. Now let's get working on the rest of the game.

                  </p>





                  <p class="h3  m-4 " style={{ fontFamily: "sans-serif", color: Darktheme ? 'white' : 'black' }}>

                    Heres Full Player Script
                  </p>





                  <div style={{ borderRadius: 100 }} className="">

                    <ReactMarkdown
                      className="rounded-5"
                      children={
                        `
  
  ~~~py
extends KinematicBody

# stats
var curHp : int = 10
var maxHp : int = 10
var ammo : int = 15
var score: int = 0

# physics
var moveSpeed : float = 5.0
var jumpForce : float = 5.0
var gravity : float = 12.0

# cam look
var minLookAngle : float = -90.0
var maxLookAngle : float = 90.0
var lookSensitivity : float = 10.0

# vectors
var vel : Vector3 = Vector3()
var mouseDelta : Vector2 = Vector2()

# components
onready var camera : Camera = get_node("Camera")
onready var muzzle : Spatial = get_node("Camera/Muzzle")
onready var bulletScene = load("res://Bullet.tscn")
onready var ui : Node = get_node("/root/MainScene/CanvasLayer/UI")

func _ready ():
	
	# hide and lock the mouse cursor
	Input.set_mouse_mode(Input.MOUSE_MODE_CAPTURED)
	
	# set the UI
	ui.update_health_bar(curHp, maxHp)
	ui.update_ammo_text(ammo)
	ui.update_score_text(score)

# called 60 times a second
func _physics_process(delta):

	# reset the x and z velocity
	vel.x = 0
	vel.z = 0
	
	var input = Vector2()
	
	# movement inputs
	if Input.is_action_pressed("move_forward"):
		input.y -= 1
	if Input.is_action_pressed("move_backward"):
		input.y += 1
	if Input.is_action_pressed("move_left"):
		input.x -= 1
	if Input.is_action_pressed("move_right"):
		input.x += 1
		
	input = input.normalized()
	
	# get the forward and right directions
	var forward = global_transform.basis.z
	var right = global_transform.basis.x
	
	var relativeDir = (forward * input.y + right * input.x)
	
	# set the velocity
	vel.x = relativeDir.x * moveSpeed
	vel.z = relativeDir.z * moveSpeed	
	
	# apply gravity
	vel.y -= gravity * delta
	
	# move the player
	vel = move_and_slide(vel, Vector3.UP)
	
	# jumping
	if Input.is_action_pressed("jump") and is_on_floor():
		vel.y = jumpForce

# called every frame	
func _process(delta):
	
	# rotate the camera along the x axis
	camera.rotation_degrees.x -= mouseDelta.y * lookSensitivity * delta
	
	# clamp camera x rotation axis
	camera.rotation_degrees.x = clamp(camera.rotation_degrees.x, minLookAngle, maxLookAngle)
	
	# rotate the player along their y axis
	rotation_degrees.y -= mouseDelta.x * lookSensitivity * delta
	
	# reset the mouse delta vector
	mouseDelta = Vector2()
	
	# check to see if we have shot
	if Input.is_action_just_pressed("shoot") and ammo > 0:
		shoot()
		
# called when an input is detected
func _input(event):
	
	if event is InputEventMouseMotion:
		mouseDelta = event.relative

# called when we press the shoot button - spawn a new bullet	
func shoot ():
	
	var bullet = bulletScene.instance()
	get_node("/root/MainScene").add_child(bullet)
	
	bullet.global_transform = muzzle.global_transform
	
	ammo -= 1
	
	ui.update_ammo_text(ammo)

# called when an enemy damages us
func take_damage (damage):
	
	curHp -= damage
	
	ui.update_health_bar(curHp, maxHp)
	
	if curHp <= 0:
		die()

# called when our health reaches 0	
func die ():
	
	get_tree().reload_current_scene()
	
func add_score (amount):
	
	score += amount
	ui.update_score_text(score)
	
func add_health (amount):
	
	curHp += amount
	
	if curHp > maxHp:
		curHp = maxHp
		
	ui.update_health_bar(curHp, maxHp)
	
func add_ammo (amount):
	
	ammo += amount
	ui.update_ammo_text(ammo)

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

                              language={"java"}
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
                    tutorialID={12}
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
export default Game_Content1;
