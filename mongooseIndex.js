const connectionWithMongoose = require("./mongoose/connection");
const { insertOneWithMongoose, insertManyWithMongoose } = require("./mongoose/createM");
const { findAllWithMongoose, findOneWithMongoose } = require("./mongoose/readM");

// insertOneWithMongoose();

// insertManyWithMongoose();

// findAllWithMongoose()

findOneWithMongoose()