const mongoClient = require("mongodb").MongoClient;

const connectionString = "mongodb://127.0.0.1:27017";

mongoClient.connect(connectionString, (err, db) => {
  if (err) {
    console.error("Error while connecting", err);
    return;
  }
  console.log("Connected to Mongo Database...........................");

  const database = db.db("reliance");
  const insertObj = {
    rice: 20,
    flour: 10,
  };

  const insertManyArr = [{rice: 20, flour: 30}, { oranges: 4, grapes: 20}, { milk: "5L" }]
//   database.collection("grocery").insertOne(insertObj, (err, success) => {
//     if (err) {
//       console.error("Error while inserting record", err);
//       return;
//     }
//     console.log("Successfully created record", success);
//   });

  database.collection("grocery").insertMany(insertManyArr, (err, success) => {
    if (err) {
      console.error("Error while inserting multiple record", err);
      return;
    }
    console.log("Successfully created multiple record", success);
  });


});
