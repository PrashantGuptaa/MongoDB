const mongoClient = require("mongodb").MongoClient;

const connectionString = "mongodb://127.0.0.1:27017";

const connectionWithPromise = () => {
  mongoClient.connect(connectionString, (err, db) => {
    if (err) {
      console.error("Error while connecting", err);
      return;
    }
    console.log("Connected to Mongo Database...........................");

    const database = db.db("grocery");
  });
};

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

const simpleFindAll = async () => {
    try {
        const connection = await connectionWithAsyncAwait();
        const response = await connection.collection('grocery').find().toArray();
        console.log(response);        
    } catch (e) {
        console.error("Error while finding all", e);
    }
}

const simpleFindOne = async () => {
    try {
        const connection = await connectionWithAsyncAwait();
        const response = await connection.collection('grocery').findOne( { bread: 1 });
        console.log(response);        
    } catch (e) {
        console.error("Error while finding all", e);
    }   
}

const findOneWithAnd = async () => {
    try {
        const connection = await connectionWithAsyncAwait();
        const response = await connection.collection('grocery').findOne( { flour: 10, rice: 20 });
        console.log(response);        
    } catch (e) {
        console.error("Error while finding all", e);
    }   
}

simpleFindAll()

