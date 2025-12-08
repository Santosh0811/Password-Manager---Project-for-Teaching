const mongoose = require('mongoose');

const mongoDbConnect = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/passwordManager");
        console.log("MongoDb is connect Successfully");
    } catch (error) {
        console.log("Failed to connect MongoDb");
    }
}

module.exports = mongoDbConnect;