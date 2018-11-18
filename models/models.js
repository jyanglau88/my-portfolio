const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const myPortfolioSchema = new Schema({
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

const MyPortfolio = mongoose.model("MyPortfolio", myPortfolioSchema);

module.exports = MyPortfolio;