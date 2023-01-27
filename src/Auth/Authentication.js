import React, { Component } from 'react';

import logo from '../logo.svg';
import LoginModel from './Login'
import RegisterModel from './Register'
// import Quize from '../Screens/Quize';
//assets
import axios from 'axios'
import icon from '../assets/images/icon.png'
import {
    Label,
    Button,
  
    

} from 'reactstrap'

class Authentication extends Component {
  constructor(props) {
    super(props);
    this.state = {
      new_user:true,
      loginModal:false,
      credential:null,
      registerModal:false
    }
  }


  handleChange = (e) => {
        const {name, value} = e.target

        const credential = {...this.state.credential, [name]:value}
        this.setState({credential})
        

  }

  SignIn = () => {
        this.loginToggle()
        const granted = 200
        const failed = 400
        const credential = this.state.credential;
        axios.post('http://localhost:8000/signin/', credential)
        .then((res) => {
          if(res.status == granted){
            localStorage.setItem("credential", JSON.stringify(res.data))
            localStorage.setItem("token", res.data.token)
          }
        })
        .catch((err) => console.log(err))
        .finally(() => console.log('request completed'))
  }

  SignUp = () => {
      alert('signup')

  }


  loginToggle = () => {
      this.setState({loginModal:!this.state.loginModal})
  }

    registerToggle = () => {
      this.setState({registerModal:!this.state.registerModal})
  }


  render() {
    return (
       <div className="App">


         
         <div className="bg-dark p-4">
            <div className="">
            <img src={icon} width="70" height="73" className="imgicon mt-5" /> 
          </div>

          <div className="row">
                <Label className="title text-light">Nefux Cloud</Label>
               
                  <Label className="secondTitlelabel">Programing Quize Provider Campany</Label>
          </div>
         </div>

             <Label className="mt-5 authenticatelabel">Authenticate to start the service</Label>
           <div className="mt-2">
               <Button className="btn btn-success m-2" onClick={() => this.setState({loginModal:true})}>SignIn / SignUp</Button>
               
         </div>


         {this.state.loginModal ? (
         <LoginModel 
         toggle={this.loginToggle}
         SignIn={this.SignIn}
         handleChange={this.handleChange}
         />
         ):null}
         
         
         
         {this.state.registerModal ? (
         <RegisterModel 
         toggle={this.registerToggle}
         SignUp={this.SignUp}
         handleChange={this.handleChange}
         />
         ):null}
      


    </div>
    )
}
}
export default Authentication;
