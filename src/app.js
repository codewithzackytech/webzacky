import express, { urlencoded } from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv'
import contact from "./routers/api.js";
import cors from 'cors'
import path from "path";

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
app.use("/ImplementingfontSizeAppinReactNativeRedux", express.static(path.join(__dirname + "/public")))
app.use("/ImplementingCustomFontsAppinReactNative", express.static(path.join(__dirname + "/public")))
app.use("/DjangoModelAuthPermission", express.static(path.join(__dirname + "/public")))
app.use("/ElectronjsMultiPlatformArchitectureDeployment", express.static(path.join(__dirname + "/public")))
app.use("/ExtendsUserinDjangoRestFramworkLoginTokenAuth", express.static(path.join(__dirname + "/public")))
app.use("/ImplementationwithJWTusingNode", express.static(path.join(__dirname + "/public")))
app.use("/ImplementationwithPushNotificationUsingReactNative", express.static(path.join(__dirname + "/public")))
app.use("/HashingPasswordsinNodeandExpressusingbcrypt", express.static(path.join(__dirname + "/public")))
app.use("/ImplementingCRUDAPiusingNodejs/ExpressandMongodb", express.static(path.join(__dirname + "/public")))
app.use("/ImplementationwithJWTusingNode/Expressjs", express.static(path.join(__dirname + "/public")))

app.use("/tutorials", express.static(path.join(__dirname + "/public")))



app.use('/api', contact)


const connectDB = async () => {

    const mongoAtlasUri =
        "mongodb+srv://zacky:fightalignitem%40%2F%3F%40%2F@mycluster1.rcrtpcx.mongodb.net/webzackyDB?retryWrites=true&w=majority";
    try {
        // Connect to the MongoDB cluster
        mongoose.connect(
            mongoAtlasUri,
            { useNewUrlParser: true, useUnifiedTopology: true },
            () => console.log("Atlas connected")
        );

        // console.log('mongo connected')
    } catch (err) {
        console.log('Atlas disconnected!')
    }
}

app.listen(PORT, () => {
    connectDB()
    console.log(`Running on port ${PORT}`)
})
