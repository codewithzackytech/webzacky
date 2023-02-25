import express, { urlencoded } from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv'
import contact from "./routers/api.js";
import cors from 'cors'
import path from "path";

//products 
let EnglishSomaliDictionaryCureentVersion = 0.1;

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express()
// app.use(express.static(path.join(__dirname + "/public")))

const PORT = process.env.PORT || 5000
app.use(express.json())
app.use(cors())

dotenv.config()

app.use("/", express.static(path.join(__dirname + "/public")))
app.use("/GettingStartedwithElectronbyCreatingaReactApp", express.static(path.join(__dirname + "/public")))
app.use("/CreateaFirstPersonShooterinGodot", express.static(path.join(__dirname + "/public")))
app.use("/Godot3DCameraCameraControllerMovement", express.static(path.join(__dirname + "/public")))
app.use("/GODOM4CloneUsingGodotEngine", express.static(path.join(__dirname + "/public")))
app.use("/3DGameLeveltransitionusingGodotEngine", express.static(path.join(__dirname + "/public")))
app.use("/BuildYourFirst2DGameusingGodotEngine", express.static(path.join(__dirname + "/public")))
app.use("/Zalson3DGameBuiltwithGodotEngine", express.static(path.join(__dirname + "/public")))
app.use("/PushNotificationImplementationwithElectronandReactjs", express.static(path.join(__dirname + "/public")))
app.use("/ImplementingCRUDAPiusingNodejs", express.static(path.join(__dirname + "/public")))
app.use("/ImplementingfontSizeAppinReactNativeRedux/ReactRedux", express.static(path.join(__dirname + "/public")))
app.use("/ImplementingCustomFontsAppinReactNative/Expo", express.static(path.join(__dirname + "/public")))
app.use("/DjangoModelAuthPermission", express.static(path.join(__dirname + "/public")))
app.use("/ElectronjsMultiPlatformArchitectureDeployment", express.static(path.join(__dirname + "/public")))
app.use("/ExtendsUserinDjangoRestFramworkLoginTokenAuth", express.static(path.join(__dirname + "/public")))
app.use("/ImplementationwithJWTusingNode", express.static(path.join(__dirname + "/public")))
app.use("/ImplementationwithPushNotificationUsingReactNative/Expo", express.static(path.join(__dirname + "/public")))
app.use("/HashingPasswordsinNodeandExpressusingbcrypt", express.static(path.join(__dirname + "/public")))
app.use("/ImplementingCRUDAPiusingNodejs/ExpressandMongodb", express.static(path.join(__dirname + "/public")))
app.use("/ImplementationwithJWTusingNode/Expressjs", express.static(path.join(__dirname + "/public")))

app.use("/tutorials", express.static(path.join(__dirname + "/public")))
app.use("/privacypolicy", express.static(path.join(__dirname + "/public")))

app.use("/feedback", express.static(path.join(__dirname + "/public")))

app.use("/EnglishSomaliDictionary", express.static(path.join(__dirname + "/public")))


app.get('/api/EnglishSomaliDictionaryCureentVersion', (req, res) => {
    res.send({ EnglishSomaliDictionaryCureentVersion })
})



app.use('/api', contact)


const connectDB = async () => {

    const mongoAtlasUri = process.env.DB_CONNECTION
    try {
        // Connect to the MongoDB cluster
        mongoose.connect(
            mongoAtlasUri,
            { useNewUrlParser: true, useUnifiedTopology: true },
            () => console.log("MongoAtlas connected")
        );

        // console.log('mongo connected')
    } catch (err) {
        console.log('MongoAtlas disconnected!')
    }
}

app.listen(PORT, () => {
    connectDB()
    console.log(`Running on port ${PORT}`)
})
