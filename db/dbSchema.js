import mongoose from "mongoose"

const pizzaSchema = new mongoose.Schema({
    name: { type: String, required:true },
    // for an array of strings
    varients: [{
        type:String
    }],
    // for an array of objects
    prices:[{ small: {
        type:String, required:true
    },
    medium: {
        type:String, required:true
    },
    large: {
        type:String, required:true
    }}],
    category: { type: String, required:true },
    image: { type: String, required:true },
    description: {type:String, required:true}
}, {
    timestamps:true
})

const dbSchema = mongoose.model("pizza_app", pizzaSchema)

export default dbSchema