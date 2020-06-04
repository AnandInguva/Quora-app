const dotenv = require('dotenv');

const app = require('./app');
const mongoose = require('mongoose');
const { getMaxListeners } = require('./models/users');
// import models

User = require('./models/users');
Question = require('./models/questions');

dotenv.config({ path: './config.env' });
// console.log(process.env.DATABASE);
const DB = process.env.DATABASE.replace(
    '<PASSWORD>',
    process.env.DATABASE_PASSWORD
);

// the objects in the user are used for the deprication warnings

mongoose
    .connect(DB, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
    })
    .then((con) => {
        console.log('DB connection successful');
    });

//save will return a promise that we would need to consume
// testUser
//     .save()
//     .then((doc) => {
//         console.log(doc);
//     })
//     .catch((err) => console.log('Error : ', err)); //saves to the User collection

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is up and running on port ${PORT}`);
});