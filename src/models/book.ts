import Mongoose  from "mongoose";

const bookSchema = new Mongoose.Schema({
    title: {
        type: String,
        required: true,

    },
    
    authors: [
        {
            type: Mongoose.SchemaType.ObjectId,
            ref: "author",

        },
    ],
    publishDate: {
        type: Date,
        required: true,

    }

})

export default Mongoose.model("book", bookSchema)