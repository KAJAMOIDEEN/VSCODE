const { MongoClient } = require('mongodb');

const uri = "mongodb://localhost:27017/";
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    const db = client.db('db_test');
    const collection = db.collection('db_collection');
    

    const options = {
      role:"admin",
      };
    // Find the first document in the collection
    const first = await collection.findOne({}, { projection: { _id: 0, name: 1,role:1,age:1} });
      console.log(first);
  }
  finally {
    // Close the database connection when finished or an error occurs
    await client.close();
  }
}
run().catch(console.error);