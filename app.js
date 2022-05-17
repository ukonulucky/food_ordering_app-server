// installed modules
import express from "express"
import cors from "cors"
import dotenv from "dotenv"

// created modules 
import dbConnect from "./db/dbConnect.js"
import router from "./routes/routes.js"

// initialising port number
const Port = process.env.PORT || process.env.server_Port 

//  
const app = express()
dotenv.config()

 // initializing middlewares
 app.use(cors())
app.use(express.json())
app.use(router)
 
 // entry rooute 

const connectServer = async () => {
    try {
        const info = await dbConnect()
        if (info !== undefined) {
            app.listen(Port, () => {
                console.log(`mongoDb connected and server runnign on port ${Port}`)
            })
        }
        
    } catch (error) {
        console.log(error.message)
        process.exit(1)
    }
 
}
connectServer()