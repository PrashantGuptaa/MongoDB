const mongoClient = require("mongodb").MongoClient;

const connectionString = "mongodb://127.0.0.1:27017";

const connectionWithAsyncAwait = async () => {
  try {
    const cluster = await mongoClient.connect(connectionString);
    const connection = cluster.db("reliance");
    console.log("Connected to Grocery Database.....");
    return connection;
  } catch (e) {
    console.error("Error while connecting to DB", e);
  }
};

const updateOne = async () => {
    try {
        const connection = await connectionWithAsyncAwait();
        const response = await connection.collection('grocery').updateOne({ rice: 20 }, {$set: { flour: 50 }});
        console.log(response);        
    } catch (e) {
        console.error("Error while updating one", e);
    }
}

const updateMany = async () => {
    try {
        const connection = await connectionWithAsyncAwait();
        const response = await connection.collection('grocery').updateMany({rice: 20 }, {$set: { flour: 45 }});
        console.log(response);        
    } catch (e) {
        console.error("Error while updating one", e);
    }
}

updateOne()