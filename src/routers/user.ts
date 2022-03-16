import Mongoose from "mongoose";

const userSchema = new Mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        minlength: 12,
        required: true,

    },
    email: {
        type: String,
        required: true,
        validate: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
    },
    firstName: {
        type: String,
        required: false,
    },
    lastName: {
        type: String,
        required: false,
    },
})

export default Mongoose.model("user", userSchema)