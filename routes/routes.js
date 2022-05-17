import dbSchema from "../db/dbSchema.js"
import express from "express"
import dotenv from "dotenv"

dotenv.config()
const Port = process.env.Port  || process.env.server_Port 

const router = express.Router()

router.post("/create_pizza", async (req, res) => {
  
    try {
        const createPiza = await  dbSchema.create(req.body)
        if (createPiza) {
            res.status(201).send(createPiza)
         }
      } catch (error) {
          console.log(error.message)
    }

})
router.get("/get_pizza", async(req,res) => {
    try {
        const createdPiza = await  dbSchema.find()
        if (createdPiza) {
            res.status(200).json(createdPiza)
         }
          
      } catch (error) {
          console.log(error.message)
      }
})
router.get('/', (req,res) => {
    res.send(`server running on port ${Port}`)
})

export default router

