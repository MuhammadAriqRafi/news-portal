const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

router.get('/', authenticateToken, (req, res) => {
    res.json({ message: 'Category list', payload: req.payload });
});

router.post('/', (req, res) => {
    const { name } = req.body;
    res.send(`Hi ${name}!`);
});

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (token == null) return res.sendStatus(401);

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, payload) => {
        if (err) return res.sendStatus(403);
        req.payload = payload;
        next();
    });
}

module.exports = router;
