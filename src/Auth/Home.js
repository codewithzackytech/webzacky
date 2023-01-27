import React, { Component } from 'react';

import icon from '../assets/images/logo.png'

import mysql from '../assets/images/mysql.png'
import vue from '../assets/images/vue.png'
import react from '../assets/images/react.png'

import developer from '../assets/images/developer.jpg'

import Authentication from './Authentication';
import 'bootstrap/dist/css/bootstrap.min.css'

import 'bootstrap/js/dist/collapse'
import 'bootstrap/js/dist/offcanvas'
import 'bootstrap/js/dist/dropdown'


import {
  Label,
  Button
} from 'reactstrap'

class Quize extends Component {
  constructor(props) {
    super(props);
    this.state = {
      new_user: true,
      activeQuize: null
    }
  }
  render() {
    return (
      <div className="bg-dark App">



        <nav class="navbar navbar-expand-lg navbar-light bg-white">
          <div class="container-fluid">

            <img src={icon} width="40" height="40" className="" />
            <Label className="title">Sudo PDF</Label>


            <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>

            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">Nefux Cloud</a>
                </li>

                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">Developers</a>
                </li>

                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">Surface</a>
                </li>

                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">Support</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">Contact</a>
                </li>


              </ul>

              <a class="nav-link">
                Score:
              </a>

              <div class="nav-item dropdown paddleftforuser">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Zacky jamel
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a class="dropdown-item" href="#">LogOut</a></li>

                </ul>



              </div>


              <Label>      </Label>

            </div>
          </div>
        </nav>








        <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
          <div class="offcanvas-header">
            <img src={icon} width="40" height="40" className="" />
            <Label className="title">Sudo PDF</Label>

            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>

          <div class="offcanvas-body">
            <div>
              Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
            </div>
            <div class="dropdown mt-3">
              <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown">
                Dropdown button
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </div>
          </div>
        </div>


        <Label className="p-3  d-flex text-white mb-0 redpg2 d-flex justify-content-center align-items-center">Get FREE real time programing project Quize & Certificate Of Completion</Label>











        <div className="">



          <div className="d-flex justify-content-center align-items-center about-cards redpg pt-5 pb-5 getaboutme" id="getaboutme">


            <div className=" row m-5 mb-0 mt-0 ">
              <Label className="tonow text-dark">Get start</Label>
              <Label className="aboutme text-success">SELECT YOUR PROGRAMMING BOOK</Label>
            </div>








            <div className="mt-5">


              <div className="d-flex col about-cards justify-content-center align-items-center col-md-20 ">
                <div className="card  gold cardone  m-2 p-5 experiencebox bg-white" >
                  <img src={react} width="200" height="130" className="" />
                  <Label className="experienceHeader text-info darkOne">React 18</Label>
                  <Label className="text-dark">Complete PDF, SAMPLE GUIDE</Label>
                </div>



                <div className="card  gold cardone  m-2 p-5 experiencebox bg-white" >
                  <img src={mysql} width="200" height="130" className="" />
                  <Label className="experienceHeader text-info darkOne">MySQL</Label>
                  <Label className="text-dark">Complete PDF, SAMPLE GUIDE</Label>
                </div>


                <div className="card  gold cardone  m-2 p-5 experiencebox bg-white">
                  <img src={vue} width="200" height="130" className="" />
                  <Label className="experienceHeader text-info darkOne">Vue 15</Label>
                  <Label className="text-dark">Complete PDF, SAMPLE GUIDE</Label>
                </div>




              </div>




              <div className="mt-5">

              </div>
            </div>



          </div>




        </div>








      </div>

    )
  }
}
export default Quize;
