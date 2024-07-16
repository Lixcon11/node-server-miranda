"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticateToken = void 0;
const jwt = require('jsonwebtoken');
const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (token == null)
        return res.sendStatus(401);
    jwt.verify(token, process.env.TOKEN_SECRET, (err) => {
        console.log(err);
        if (err)
            return res.sendStatus(403);
        next();
    });
};
exports.authenticateToken = authenticateToken;
