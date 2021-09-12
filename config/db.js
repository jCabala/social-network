const mongoose = require('mongoose');
const confing = require('config');
const db = confing.get('mongoURI');

const connectDB = async () => {
    try{
        await mongoose.connect(db, {
             useNewUrlParser: true 
        });

        console.log('MongoDB Connected...')
    } catch(err){
        console.error(err.message);
        //Exit process with failure
        process.exit(1);
    }
}

module.exports = connectDB;