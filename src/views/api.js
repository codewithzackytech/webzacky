import contact from "../models/contact.js"
import signup from "../models/signup.js"
import subscribe from "../models/subscribe.js"
import Joi from "joi"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import comment from "../models/comment.js"
import Views from "../models/Views.js"


export const PostContact = async (req, res) => {
    const saved = new contact(req.body)
    console.log(req.body)

    try {
        const result = await saved.save()
        res.status(201).send(result)
    } catch (err) {
        res.status(404).send(err.message)
    }
    // res.status(201).send("result")

}

export const PostSubscribe = async (req, res) => {
    const saved = new subscribe(req.body)
    console.log(req.body)

    try {
        const result = await saved.save()
        res.status(201).send(result)
    } catch (err) {
        res.status(404).send(err.message)
    }
    // res.status(201).send("result")

}



export const PostSignUp = async (req, res) => {

    const Password = await bcrypt.hash(req.body.Password, 10)
    const Comfirm_Password = req.body.Comfirm_Password
    const FullName = req.body.FullName
    const Email = req.body.Email

    if (req.body.Password == req.body.Comfirm_Password) {
        const saved = new signup({ Email, FullName, Password })
        console.log(req.body)

        try {
            const result = await saved.save()
            res.status(201).send(result)
        } catch (err) {
            res.status(404).send(err.message)
        }
        // res.status(201).send("result")
    }
    else
        res.status(404).send("The two passwords should be the same :)")




}



export const PostComment = async (req, res) => {

    const saved = new comment(req.body)
    console.log(req.body)

    try {
        const result = await saved.save()
        res.status(201).send(result)
    } catch (err) {
        res.status(404).send(err.message)
    }
    // res.status(201).send("result")

}



export const SaveViews = async (req, res) => {

    const saved = new Views(req.body)
    console.log(req.body)

    try {
        const result = await saved.save()
        res.status(201).send(result)
    } catch (err) {
        res.status(404).send(err.message)
    }
    // res.status(201).send("result")

}



export const GetViews = async (req, res) => {


    try {
        const result = await (await Views.find({ "TutorialID": req.params.id }))
        res.status(201).send(result)
    } catch (err) {
        res.status(404).send(err.message)
    }
    // res.status(201).send("result")

}

export const GetComment = async (req, res) => {



    try {
        const result = await comment.find()
        res.status(201).send(result)
    } catch (err) {
        res.status(404).send(err.message)
    }
    // res.status(201).send("result")

}



export const GetCommentById = async (req, res) => {



    try {
        const result = await comment.find({ "TutorialID": req.params.id })
        res.status(201).send(result)
    } catch (err) {
        res.status(404).send(err.message)
    }
    // res.status(201).send("result")

}









export const PostSignIn = async (req, res) => {

    let Email;
    let Password;

    const credentialData = req.body
    //input validation

    const credential = Joi.object({
        Email: Joi.string().min(3).required(),
        Password: Joi.string().min(3).required()
    })

    const data = await signup.find({ "Email": `${req.body.Email}` })
    console.log(data[0])

    try {


        Email = data[0].Email
        Password = data[0].Password
    } catch (err) {
        res.status(404).send("Access Denied : (")
    }



    const credentialStatus = credential.validate(credentialData)






    const isValid = await bcrypt.compare(req.body.Password, Password)


    try {

        // input validation Error
        // if (credentialStatus.error)
        //     return res.status(500).send(credentialStatus.error.details[0].message)
        //for checking if passcode is correct or not
        if (isValid) {

            console.log("password match")
            // const newAccessTime = await setAccessTime(userData.user[0].username)
            // console.log(newAccessTime)
            // jwt
            const token = jwt.sign({ Email }, process.env.TokenKey, { expiresIn: '7d' })

            res.cookie("AuthToken", token)

            const username = data[0].Email
            return res.status(200).json({ "AuthToken": token, username })


        }

        else
            return res.status(500).send("Access Denied :(")


    } catch (error) {
        return res.status(500).send("Access Denied :(" + error)
    }

}