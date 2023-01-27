import React, { Component } from 'react';


import {
    Label,
    Button,

    ModalHeader,
    ModalBody,
    Modal,
    ModalFooter,
   

} from 'reactstrap'
// import axios from 'axios';




export default class RegisterInfo extends Component {

  constructor(props){
    super(props);
    this.state = {
      credential:null
    }
  }
 
  // handleCredential = (e) => {
  //   const {name, value} = e.target
  //   const credential = {...this.state.credential, [name]:value}

  //   this.setState({credential})
  // }

  // SignIn = () => {
  //   const credential = this.state.credential;
  //   axios.post("http://localhost:8000/signin/", this.state.credential)
  //   .then((response) => {
  //   console.log(response.data)
  //     response.request.cookie("fsdf")
  //     localStorage.setItem("token", response.data.token)
  //   })
  //   .catch((error) => console.log(error))
  //   .finally(() => console.log('request completed!'))   
  // }

  render() {
    const {toggle, signinToggle, signupToggle, AuthChecker, RegError} = this.props;
    return (
      <Modal isOpen={true} toggle={toggle}>


                <ModalHeader toggle={toggle}>{RegError == null ? 'Hello.':'Authentication failed!'}</ModalHeader>
                    <ModalBody>

                    {RegError == null ? (
                        <div>
                             <Label className="mr-2 text-muted">Seems you're new :) </Label>
                             <Label className="text-muted"> PS. Login to start the service.</Label>

                        </div>
                    ):(
                        <Label>{RegError}</Label>
                    )}

                                   

                       




                    </ModalBody>



                <ModalFooter>
                    <Button className="btn btn-success" onClick={() => {
                        AuthChecker()
                        signinToggle()
                    }}>SignIn</Button>
                    <Button className="btn btn-outline-success" onClick={() => {
                        AuthChecker()
                        signupToggle()
                    }}>SignUp</Button>

                </ModalFooter>



            </Modal>
    );
  }
}
