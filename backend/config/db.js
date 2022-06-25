const mongose = require('mongoose')


async function connectionDatabase() {
    try {
        const connection = mongose.çonnect(process.env.MONGO_URL)
    } catch (error) {
        console.log(`Error : ${error.message}`.underline.red)
        process.exit(1)
    }
}



export default connectionDatabase();
