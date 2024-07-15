const mongoose = require('mongoose')

function connectwithdb() {
    mongoose.connect("mongodb://localhost:27017/hotel_system").then(() => {
        console.log("connected");
    }).catch((err) => {
        console.log("error");
    })

}
module.exports = connectwithdb;