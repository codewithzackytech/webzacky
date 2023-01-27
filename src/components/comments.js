import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "../style.css";
import "../App.css";
import "bootstrap/js/dist/collapse";
import "bootstrap/js/dist/offcanvas";
import axios from 'axios';

import "bootstrap/js/dist/dropdown";
import { FaUser } from 'react-icons/fa';
class Comments extends Component {
    constructor(props) {
        super(props);
        this.state = {

            isDark: this.props.Darktheme,
            allComments: [],
            commentData: null,
            commented: false
        };
    }

    handleChange = (e) => {
        const { name, value } = e.target
        const commentData = { ...this.state.commentData, [name]: value }

        this.setState({ commentData })

    }

    componentDidMount = () => {

        axios.get("http://localhost:5000/api/comments/")
            .then((response) => {
                this.setState({ allComments: response.data })
                console.log("comments " + this.state.allComments)

            })
            .catch((error) => console.log(error))
            .finally(() => console.log('request completed!'))
    }

    submiteComment = () => {
        const data = this.state.commentData
        let FullName = data.FullName
        let Comment = data.Comment


        let TutorialName = this.props.tutorialName
        let TutorialID = this.props.tutorialID


        // console.log("data is: " + FullName, Comment, TutorialName, TutorialID)

        axios.post("http://localhost:5000/api/comment/", { FullName, Comment, TutorialName, TutorialID })
            .then((response) => {

                console.log(response.data)
                this.state.allComments.push(response.data)
                this.props.getCommented_and_Visitors_Peples()
                this.setState({ commented: true })
                setTimeout(() => {
                    this.setState({ commented: false })

                }, 4000);

            })
            .catch((error) => console.log(error))
            .finally(() => console.log('request completed!'))
    }



    render() {
        const Darktheme = this.props.Darktheme
        const isDark = this.props.Darktheme

        return (
            <div>
                <section
                    class=" pb-3 mb-5"
                    style={{
                        backgroundColor: Darktheme ? "#242526" : "white",
                    }}
                >
                    <div class="mt-5">



















                        <div
                            class="card customer-cards"
                            style={{
                                backgroundColor: Darktheme ? "#363738" : 'rgb(248, 248, 248)',
                            }}
                        >
                            <div class="card-body m-0">

                                <div class="text-center row">



                                    <div class="text-center ">
                                        <div class="feature bg-primary bg-gradient text-white rounded-3">
                                            <i class="bi bi-envelope"></i>
                                        </div>
                                        <p class="fw-bolder text-success h5">See Public comments!</p>


                                    </div>

                                    <p class="lead mb-4 text-muted">
                                        peoples have the same problem
                                    </p>

                                    {/* messages */}






                                    {this.state.allComments.map(comment => comment.TutorialID == this.props.tutorialID ? (
                                        <div className="card mt-2" style={{ backgroundColor: Darktheme ? '#454545' : 'rgb(236, 237, 241)', borderBottomRightRadius: 40, borderTopLeftRadius: 40 }}>
                                            <h6 class="card-title pt-3 text-info fw-bolder">
                                                {comment.FullName}
                                            </h6>

                                            <p
                                                class={`m-0 py-3  ${Darktheme ? "text-white" : "text-muted"
                                                    }`}
                                            >
                                                {comment.Comment}
                                            </p>
                                        </div>
                                    ) : null)}






                                    <div class="content-divider m-auto"></div>

                                </div>
                            </div>
                        </div>













                    </div>
                </section>





                <div class="row gx-5 justify-content-center pb-5">

                    {this.state.commented ? (
                        <p className="text-success h3">Your comment is on the public view!</p>
                    ) : (
                        <>

                            <div class="pb-1">
                                <div class="text-center mb-5">
                                    <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                                        <i class="bi bi-envelope"></i>
                                    </div>
                                    <h2 class="fw-bolder text-success">Comment </h2>
                                    <p class="lead mb-0 text-muted">
                                        It will be helpfull for others
                                    </p>
                                </div>
                            </div>

                            <div class="col-lg-30">
                                <form>
                                    {/* <!-- Name input--> */}
                                    <div class="form-floating mb-3">
                                        <input
                                            class="form-control"
                                            id="name"
                                            onChange={this.handleChange}
                                            type="text"
                                            name="FullName"
                                            placeholder="Enter your name..."
                                            data-sb-validations="required"
                                            style={{
                                                backgroundColor: Darktheme
                                                    ? "#363738"
                                                    : null,
                                                color: Darktheme
                                                    ? "#ffff"
                                                    : '#242526',
                                            }}
                                        />
                                        <label for="name" style={{
                                            color: Darktheme
                                                ? "#ffff"
                                                : '#242526',
                                        }}>Full name</label>
                                        <div
                                            class="invalid-feedback"
                                            data-sb-feedback="name:required"
                                        >
                                            A name is required.
                                        </div>
                                    </div>

                                    {/* <!-- Message input--> */}
                                    <div class="form-floating mb-3">
                                        <textarea
                                            class="form-control"
                                            id="message"
                                            type="text"
                                            name="Comment"
                                            onChange={this.handleChange}
                                            placeholder="Enter your message here..."
                                            style={{
                                                lineHeight: 2,
                                                height: 150,
                                                color: Darktheme
                                                    ? "#ffff"
                                                    : '#242526',
                                                backgroundColor: Darktheme
                                                    ? "#363738"
                                                    : null,
                                            }}
                                            data-sb-validations="required"
                                        ></textarea>
                                        <label for="message" style={{
                                            color: Darktheme
                                                ? "#ffff"
                                                : '#242526',
                                        }}>Your comment</label>
                                        <div
                                            class="invalid-feedback"
                                            data-sb-feedback="message:required"
                                        >
                                            A comment is required.
                                        </div>
                                    </div>

                                    <div class="d-grid">
                                        <button
                                            onClick={() => this.submiteComment()}
                                            class="btn btn-success btn-lg"
                                            id="submitButton"
                                            type="button"
                                        >
                                            Submit
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </>
                    )}
                </div>


            </div>
        );
    }
}

export default Comments;
