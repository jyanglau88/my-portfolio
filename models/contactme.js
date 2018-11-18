const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const contactMeSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    //TODO: UPDATE TO RECORD DATE SUBMITTED
    date: {
        type: Date
    }
});

const ContactMe = mongoose.model("ContactMe", contactMeSchema);

module.exports = ContactMe;