const playService = require('../services/play')

module.exports = () => (req, res, next) => {
    //todo import and decorate services
    req.storage = {
       ...playService
    };

    next();
}