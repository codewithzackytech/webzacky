import express from 'express'
import jwt from 'jsonwebtoken'
import path from 'path'
// const jwt = require('jsonwebtoken')
// const dotenv = require('dotenv')
// const path = require('path')



module.exports = (req, res, next) => {

    const token = req.cookies.AuthToken

    try {

        jwt.verify(token, process.env.TokenKey);

        next()
    } catch (error) {
        res.clearCookie("AuthToken")
        return res.sendFile(path.join(__dirname, "../public/index.html"))
    }

}