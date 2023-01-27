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
import { FaCookie, FaCookieBite, FaLeaf } from 'react-icons/fa';



export default class CookieModal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            credential: null
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
        const { toggle, acceptCookie, closeCookie } = this.props;
        return (

            <Modal isOpen={true} toggle={toggle} style={{ marginTop: 350, marginRight: 830 }}>


                <ModalHeader toggle={toggle} className="bg-dark text-white ">
                    <Label className="text-white fw-bold">Cookie</Label>
                </ModalHeader>
                <ModalBody className="bg-dark">
                    <FaCookieBite size={50} className="text-white my-3" />

                    <Label className="text-white">
                        by clicking <span className="fw-bold">Accept cookie</span> you agree WebZacky can store cookie on your device and disclose information in accordance with our <span style={{ textDecorationLine: 'underline' }}>Cookie Policy</span>.

                    </Label>








                </ModalBody>



                <ModalFooter className="bg-dark">
                    <Button className="btn btn-info" onClick={() => {
                        localStorage.setItem("cookiePermission", true)
                        acceptCookie(true)
                    }}>Accept Cookie</Button>
                    <Button className="btn btn-danger" onClick={() => {

                        toggle()
                    }} type="reset">Close</Button>


                </ModalFooter>



            </Modal>
        )
    }
}
