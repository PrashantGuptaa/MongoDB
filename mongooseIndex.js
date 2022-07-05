const connectionWithMongoose = require("./mongoose/connection");
const { insertOneWithMongoose, insertManyWithMongoose } = require("./mongoose/createM");
const { deleteOneWithMongoose, deleteManyWithMongoose } = require("./mongoose/deleteM");
const { findAllWithMongooseWithLimitAndSkip, findAllWithMongooseWithSorting } = require("./mongoose/minorQueries");
const { findAllWithMongoose, findOneWithMongoose } = require("./mongoose/readM");
const { updateOneWithMongoose, updateManyWithMongoose } = require("./mongoose/updateM");

insertOneWithMongoose();

// insertManyWithMongoose();

// findAllWithMongoose()

// findOneWithMongoose()

// updateOneWithMongoose();

// updateManyWithMongoose()

// deleteOneWithMongoose();

// deleteManyWithMongoose();

// findAllWithMongooseWithLimitAndSkip();

// findAllWithMongooseWithSorting();