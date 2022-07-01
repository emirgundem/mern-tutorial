const mongoose = require('mongoose')


const connectDatabase = async () => {
    try {
        const connectiondb = await mongoose.connect(process.env.MONGO_URI)
        console.log(`MongoDB Connected: ${connectiondb.connection.host}`.cyan.underline)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

module.exports = connectDatabase;