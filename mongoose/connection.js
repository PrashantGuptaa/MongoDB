const mongoose = require("mongoose");
const connectionString = require("../secret");

const connectionWithMongoose = async () => {
  try {
    const connection = await mongoose.connect(connectionString);
    console.log("Connected to Reliance Database.....");
    return connection;
  } catch (e) {
    console.error("Error while connecting to DB", e);
  }
};

module.exports = connectionWithMongoose;