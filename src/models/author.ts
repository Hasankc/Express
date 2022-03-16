import Mongoose  from "mongoose";

const authorSchema = new Mongoose.Schema({
    first_name: {
        type: String,
        required: true,
        maxlength: 15,
    },
    last_name: {
        type: String,
        required: true,
        maxlength: 15,
    },
    dateOfBirth: {
        type: Mongoose.SchemaTypes.Date,
        required: false,
    },
})

export default Mongoose.model("author", authorSchema)
