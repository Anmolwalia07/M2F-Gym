
export const authorization = (roles) => {
    return (req, res, next) => {
        if (!roles && !roles.includes(req.user.role)) {
            return res.status(401).send({ message: 'Unauthorized' });
        }
        next(); // Continue to the next middleware or route handler if authorized
    };
};
