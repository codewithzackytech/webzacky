import React, { Component } from 'react';

import { FaReact, FaPython, FaNodeJs, FaAndroid, FaFlask, FaCoffee, FaLinkedin, FaWhatsapp, FaFacebook, FaGithub, FaMoon, FaSun, FaBars, FaTimes as FaClose, FaComment, FaEye, FaClock, FaLeaf, FaGamepad, FaCode, FaWaze } from 'react-icons/fa';

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
} from "reactstrap";


class Media extends Component {
    constructor(props) {
        super(props);
        this.state = {

            isDark: false

        };
    }
    render() {
        const Darktheme = this.state.isDark
        return (
            <div className="">
                <FaWhatsapp className="px-2" size={40} color={Darktheme ? "white" : "black"} />
                <FaFacebook className="px-2" size={40} color={Darktheme ? "white" : "black"} />
                <FaLinkedin className="px-2" size={40} color={Darktheme ? "white" : "black"} />
                <FaGithub className="px-2" size={40} color={Darktheme ? "white" : "black"} />

            </div>
        );
    }
}

export default Media;
