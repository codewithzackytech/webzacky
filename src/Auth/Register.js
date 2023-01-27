import React, { Component } from 'react';

// import icon from '../assets/images/icon.png'
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




export default class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            credential: null
        }
    }

    handleChange = (e) => {
        const { name, value } = e.target
        const credential = { ...this.state.credential, [name]: value }

        this.setState({ credential })
    }

    SignUp = () => {

        const credential = this.state.credential;
        axios.post("/api/signup/", this.state.credential)
            .then((response) => {
                console.log(response.data)
                this.props.toggle()


            })
            .catch((error) => console.log(error))
            .finally(() => console.log('request completed!'))
    }

    render() {
        const { toggle } = this.props;
        return (
            <Modal isOpen={true} toggle={toggle}>


                <ModalHeader toggle={toggle}>SignUp</ModalHeader>
                <ModalBody>

                    <Form>




                        <FormGroup>
                            <Label for="fullName">FullName</Label>
                            <Input

                                type="text"
                                name="FullName"
                                required={true}


                                onChange={this.handleChange}
                                placeholder={'FullName'}

                            />
                        </FormGroup>



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
                                placeholder={'Password'}

                            />
                        </FormGroup>


                        <FormGroup>
                            <Label for="description">Comfirm Password</Label>
                            <Input

                                type="password"
                                name="Comfirm_Password"
                                required={true}

                                onChange={this.handleChange}
                                placeholder={'Comfirm password'}

                            />
                        </FormGroup>





                        <ModalFooter>
                            <Button color="success" onClick={() => this.SignUp()} type="submit">SignUp</Button>
                        </ModalFooter>

                    </Form>




                </ModalBody>





            </Modal>
        );
    }
}
