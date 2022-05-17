import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config()


const dbURL  =  process.env.db_Url
const dbConnect =  async() => {
    try {
        const res = await mongoose.connect(dbURL, {
            useNewUrlParser: true,
            useUnifiedTopology:true
        })
        return res
         
     } catch (error) {
         console.log(error.message)
     }
}
 
export default dbConnect