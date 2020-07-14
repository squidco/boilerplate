var mongoose = require("mongoose")
var Schema = mongoose.Schema

var bookSchema = new Schema({
    title: {
        type: String,
        trim: true,
        required: "Must have a title"
    },
    author: {
        type: String,
        trim: true,
        required: "Must have a author"
    },
    synopsis: {
        type: String,
        trim: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

var Book = mongoose.model("Book", bookSchema)

module.exports = Book