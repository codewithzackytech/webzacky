import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "../style.css";
import "../App.css";

import "bootstrap/js/dist/collapse";
import homepc from "../assets/images/homepc.png";
import homecup from "../assets/images/homecup.png";
import background from "../assets/images/6.jpg";
import uptodown from '../assets/images/uptodown.jpg'

import {
    Label,


} from "reactstrap";
import { FaDesktop, FaGamepad, FaLeaf, FaMobile, FaServer, FaAngleRight, FaAngleDoubleDown } from 'react-icons/fa';

import "bootstrap/js/dist/offcanvas";
import "bootstrap/js/dist/dropdown";
class WelContent extends Component {
    constructor(props) {
        super(props);
        this.state = {

            isDark: this.props.Darktheme,
            new_user: true

        };
    }


    render() {
        const Darktheme = this.props.Darktheme

        return (
            // ${ Darktheme ? "bg-dark" : "bg-white" } px - 3`}
            <div className={`ui vertical stripe segment mt-0 px-3 backgroundC ${Darktheme ? "bg-dark" : "bg-white"}`}
                style={{ flexWrap: 'wrap', }}
            >
                <div className="ui middle aligned stackable grid container">
                    <div className="row justify-content-around align-items-center d-flex">
                        <div className="eight wide column ">
                            {/* titleContent */}
                            <div className=" mb-0 pb-0" >
                                {/* <img src={icon} width="150" className="titleicon2 mr-2" /> */}


                                <h1
                                    class={`display-5 fw-bolder  ${Darktheme ? 'text-white' : 'text-dark'} mb-2 text-white`}

                                >Take your experience ‍to the next level</h1>

                                <div className="" style={{ flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                                    <div className='justify-content-center align-items-center row col-md-7'>



                                        <span className="text-success mx-3 h6 my-5">WebZacky <FaLeaf />
                                            <span
                                                class="font-weight-normal h6 mb-3 my-5 mt-0  mb-0 mx-2"
                                                style={{ letterSpacing: 1, color: "grey" }}
                                            >
                                                provides solution for Real Time Software, Client/Server Tools & Games Development

                                            </span>
                                        </span>




                                    </div>


                                    <img src={homecup}
                                        width={100}
                                        className=""
                                    />

                                </div>



                                <div class="d-grid gap-3 d-sm-flex justify-content-sm-center pb-3 mt-5 ">
                                    <a
                                        class="px-4 btn btn-lg  me-sm-3 m-3 btn-success rounded-5  py-3"
                                        style={{
                                            fontSize: 15,
                                            // backgroundColor: Darktheme ? 'rgb(9, 9, 116)' : 'rgb(9, 9, 116)'
                                        }}
                                        href={"/tutorials"}
                                    // onClick={() => {
                                    //     if (
                                    //         this.state.new_user == null ||
                                    //         this.state.new_user == undefined
                                    //     )
                                    //         this.setState({ LoginInfoModal: true });
                                    // }}
                                    >
                                        GetStart For Free <FaAngleRight className="ml-3" />
                                    </a>












                                </div>






                            </div>
                        </div>



                    </div>
                    <div className={`row mb-0 ${Darktheme ? "bg-dark" : "bg-white"}`}>
                        <div className="center aligned column">






















                            {/* <Label className="h1 mt-5">What We Do?</Label> */}

                            <div className=" pt-4 d-flex justify-content-center align-items-center about-cards  pt-5 pb-5 getaboutme mt-5" id="getaboutme" >



                                <FaAngleDoubleDown size={60} className="text-success" />
                                {/* <div className="border-top px-5 text"></div> */}
                                <div className="border-bottom pb-3 col-md-5 mt-5  mx-5 mb-5">




                                    <Label className={`tonow  display-6 ${Darktheme ? 'text-muted' : 'text-muted'} fw-100`}>We Provide Solution for Developers Tools</Label>

                                    {/* left corner */}
                                    <div className="d-flex justify-content-center align-items-center mx-5 ">

                                        <Label className="text-success justify-content-center align-items-center d-flex " style={{ fontSize: 18 }}>WebZacky <FaLeaf size={30} className="text-success" /></Label>


                                        <img src={homepc}
                                            width={100}
                                            className="mx-4 my-3"
                                        />
                                        {/* 
                                        <div className='justfy-content-center align-item-center mx-5' style={{ flexWrap: 'nowrap' }}>
                                        
                                            <img src={homecup}
                                                width={30}
                                                className="my-3"
                                            />


                                            
                                            <img src={homepc}
                                                width={100}
                                                className="my-3"
                                            />
                                            
                                        </div> */}
                                    </div>
                                </div>





                            </div>



                            <section class="pb-5 mb-0" id="features">
                                <div class="container px-5  pb-5">
                                    <div class="row gx-5">
                                        <div class="col-lg-4 mb-5 mb-lg-0">
                                            <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                                            </div>
                                            <FaGamepad size={60} className="text-success my-2" />
                                            <h2 class="h4 fw-bolder text-success">Game Development</h2>
                                            <p className="text-muted">We provide GODOT tutorials and opensource game development projects that can make you better video game developer</p>

                                        </div>
                                        <div class="col-lg-4 mb-5 mb-lg-0">
                                            <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                                            </div>

                                            <FaMobile size={30} className="text-success" />
                                            <FaDesktop size={60} className="text-success my-3" />
                                            <h2 class="h4 fw-bolder text-success">Client-Side Development</h2>
                                            <p className="text-muted">We provide JS-UI Based tutorials that solve modern developers Bugs, Like React.js, Electron.js</p>

                                        </div>
                                        <div class="col-lg-4 mb-5 mb-lg-0">
                                            <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                                            </div>
                                            {/* <FaMobile size={30} className="text-success" /> */}
                                            <FaServer size={60} className="text-success my-3" />

                                            {/* <FaServer size={60} className="text-success my-2" /> */}
                                            <h2 class="h4 fw-bolder text-success">Server-Side Development</h2>
                                            <p className="text-muted">We provide JS/Python Based BackEnd tutorials that solve modern developers Bugs, Like Django, Express, Mongodb, MySQL tutorials</p>
                                        </div>
                                    </div>






                                </div>
                                {localStorage.getItem("userToken") == undefined || localStorage.getItem("userToken") == null ? (
                                    <>

                                        <div className='row align-item-center d-flex justify-content-center '>
                                            <img src={uptodown}
                                                width={10}
                                                // style={{ borderRadius: 100 }}
                                                height={100}
                                                className="mx-4 my-3 col-md-4 rounded-4"
                                            />
                                            <Label className={`tonow  display-6 ${Darktheme ? 'text-white' : 'text-dark'} fw-100`}>{'Real Time Software'.toUpperCase()}</Label>

                                        </div>
                                        <p className="text-muted mt-5">{'See Our Free Products that people see valuable'.toUpperCase()}</p>

                                        <p className="text-muted">{'Which works both Mobile & Destkop'.toUpperCase()}</p>
                                        <a
                                            class="px-5 btn btn-lg  me-sm-3 m-2 btn-success rounded-5 p-3  "
                                            style={{
                                                fontSize: 14,
                                                // backgroundColor: Darktheme ? 'rgb(9, 9, 116)' : 'rgb(9, 9, 116)'
                                            }}
                                            href={"https://en.uptodown.com/developer/apkzacky"}
                                        // onClick={() => {

                                        //     this.props.signUpToggle()
                                        // }}
                                        >
                                            Life Demo <FaAngleRight className="ml-3" />
                                        </a>
                                    </>
                                ) : null}
                            </section>






                        </div>
                    </div>
                </div >
            </div >
        );
    }
}

export default WelContent;
