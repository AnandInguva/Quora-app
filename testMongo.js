const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const url = 'mongodb://localhost:27017';
const dbname = 'testing';

//client

const client = new MongoClient(url);

client.connect((err) => {
    assert.equal(null, err);
    console.log('Connection  is successful');

    const db = client.db(dbname);
    client.close();
});