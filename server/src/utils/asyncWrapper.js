// async Wrapper to handle express errors
const asyncWrapper = (asynController) => {
    return (req, res, next) => {
        asynController(req, res, next).catch(next);
    }
}

module.exports = asyncWrapper;
