const mongoose = require("mongoose")

const connectToDB = () => {
    mongoose.connect(process.env.Mongo_KEY_URL).then(() => {
        console.log("Connected to MongoDB")
    });
}

module.exports=connectToDB;