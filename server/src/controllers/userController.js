const asyncWrapper = require('../utils/asyncWrapper');

// Me/my profile controller
const me = asyncWrapper(async (req, res) => {
    return res.status(200).json({
        id: req.user._id,
        name: req.user.name,
        email: req.user.email,
        avatar: req.user.avatar,
        role: req.user.role,
    })
});


module.exports = {
    me,
}