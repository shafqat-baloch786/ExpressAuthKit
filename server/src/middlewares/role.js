
// Authorize role
const authorizeRole = (...roles) => {
    return async (req, res, next) => {
        try {
            // Check if there is no user attached with request
            if (!req.user) {
                return res.status(401).json({
                    success: false,
                    message: "User not authenticated!"
                });
            }

            // If there are no roles added from router
            if (!roles.includes(req.user.role)) {
                return res.status(403).json({
                    success: false,
                    message: "Access denied!"
                });
            }

            next();
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: "Error in authorize role check!"
            });
        }
    };
};

module.exports = authorizeRole;
