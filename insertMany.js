const { MongoClient } = require('mongodb');

const uri = "mongodb://localhost:27017/";
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    const db = client.db('db_test');
    const collection = db.collection('db_collection');
    

    const options = [
      {
       _id:10,
      name:"java",
      role:"admin",
      version:2.2,
      },
      {
        _id:110,
       name:"sql",
       role:"admin",
       version:8.0,
       },
    ];
    // Find the first document in the collection
    const first = await collection.insertMany(options);
      console.log(first);
  }
  finally {
    // Close the database connection when finished or an error occurs
    await client.close();
  }
}
run().catch(console.error);