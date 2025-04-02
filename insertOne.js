const { MongoClient } = require('mongodb');

const uri = "mongodb://localhost:27017/";
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    const db = client.db('db_test');
    const collection = db.collection('db_collection');
    

    const options = {
      _id:999,
      name:"javascript",
      role:"admin",
      version:7.9
      };
    // Find the first document in the collection
    const first = await collection.insertOne(options);
      console.log(first);
  }
  finally {
    // Close the database connection when finished or an error occurs
    await client.close();
  }
}
run().catch(console.error);