
// Global error handler middeleware
const errorHandler = (error, req, res, next) => {
    error.statusCode = error.statusCode || 500;
    error.status = error.status || 'error';

    // Error response if in development mode
    if(process.env.NODE_ENV === 'development') {
        return res.status(error.statusCode).json({
            message: error.message,
            status: error.status,
            stack: error.stack,
        })
    }

    // Error response if in production mode, do not reveal message and stack trace
    if(process.env.NODE_ENV === 'production') {
        return res.status(500).json({
            message: "Something went wrong, try again later",
            status: "Error"
        })
    }

    // Default return
    return res.status(error.statusCode).json({
        message: error.message,
        status: error.status
    })

}


module.exports = errorHandler;


                
