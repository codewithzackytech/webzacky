import express from 'express'
import { GetComment, GetCommentById, GetViews, PostComment, PostContact, PostSignIn, PostSignUp, PostSubscribe, SaveViews } from '../views/api.js'
const app = express.Router()

app.post("/contact", PostContact)
app.post("/signup", PostSignUp)
app.post("/comment", PostComment)
app.get("/comments/:id", GetCommentById)
app.get("/comments", GetComment)
app.post("/signin", PostSignIn)
app.post("/view", SaveViews)
app.get("/views/:id", GetViews)
app.post("/subscribe", PostSubscribe)
export default app;


