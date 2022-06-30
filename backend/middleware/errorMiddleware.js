
const httpStatusCode = {
    SUCCESS : 200,
    BAD_REQUEST : 400,
    NOT_FOUND: 404,
    INTERNAL_SERVER_ERROR: 500
}

const errorHandler = (err,req,res,next) => {
    const statusCode = httpStatusCode.BAD_REQUEST
    res.status(statusCode)

    res.json({
        message:err.message,
        stack:process.env.NODE_ENV === 'production' ? null : err.stack
    })
}


module.exports = {
    errorHandler,
    httpStatusCode
}