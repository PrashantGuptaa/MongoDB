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

const deleteOne = async () => {
    try {
        const connection = await connectionWithAsyncAwait();
        const response = await connection.collection('grocery').deleteOne({  });
        console.log(response);        
    } catch (e) {
        console.error("Error while deleting one", e);
    }
}

const deleteMany = async () => {
    try {
        const connection = await connectionWithAsyncAwait();
        const response = await connection.collection('grocery').deleteMany({  });
        console.log(response);        
    } catch (e) {
        console.error("Error while deleting one", e);
    }
}

deleteMany()

