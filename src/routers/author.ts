import Mongoose  from "mongoose";

const authorSchema = new Mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    dateOfBirth: {
        type: Mongoose.SchemaTypes.Date,
        required: false,
    },
})

export default Mongoose.model("author", authorSchema)
