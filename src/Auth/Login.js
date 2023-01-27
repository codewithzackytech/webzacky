import React, { Component } from 'react';
import axios from 'axios';

import {
  Label,
  Button,
  Input,
  Form,
  ModalHeader,
  ModalBody,
  Modal,
  ModalFooter,
  FormGroup

} from 'reactstrap'
// import axios from 'axios';




export default class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      credential: null,
      cookieAccepted: localStorage.getItem("cookiePermission")
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target
    const credential = { ...this.state.credential, [name]: value }

    this.setState({ credential })
  }

  SignIn = () => {
    this.props.toggle()
    const credential = this.state.credential;
    axios.post("/api/signin/", this.state.credential)
      .then((response) => {
        console.log(response.data)
        if (this.state.cookieAccepted == 'true') {
          localStorage.setItem("AuthToken", response.data.AuthToken)
          localStorage.setItem("userToken", response.data.username)
        }

      })
      .catch((error) => console.log(error))
      .finally(() => console.log('request completed!'))
  }

  render() {
    const { toggle } = this.props;

    return (
      <Modal isOpen={true} toggle={toggle} >



        <ModalHeader toggle={toggle}>Login</ModalHeader>
        <ModalBody>

          <Form method="POST">

            <FormGroup>
              <Label for="title">Email</Label>
              <Input

                type="email"
                name="Email"
                required={true}
                onChange={this.handleChange}
                placeholder={'Email'}

              />
            </FormGroup>




            <FormGroup>
              <Label for="description">Password</Label>
              <Input

                type="password"
                name="Password"
                required={true}
                onChange={this.handleChange}
                placeholder={'password'}

              />
            </FormGroup>



            <ModalFooter>
              <Button color="success" onClick={() => this.SignIn()} type="submit">SignIn</Button>
            </ModalFooter>

          </Form>




        </ModalBody>





      </Modal>
    );
  }
}
