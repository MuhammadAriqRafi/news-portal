const express = require('express');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
const app = express();

if (process.env.NODE_ENV !== 'production') dotenv.config();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const users = [
    {
        id: 1,
        username: 'Rafi',
    },
];

let refreshTokens = [];

app.post('/refresh', (req, res) => {
    const { refreshToken } = req.body;

    if (refreshToken == null) return res.sendStatus(401);
    if (!refreshTokens.includes(refreshToken)) return res.sendStatus(403);

    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, payload) => {
        if (err) return res.sendStatus(403);

        delete payload.iat;
        const accessToken = generateAccessToken(payload);
        res.json({ accessToken });
    });
});

app.post('/login', (req, res) => {
    // Authenticate user here

    const { username } = req.body;
    const payload = users.find((user) => user.username === username);
    const accessToken = generateAccessToken(payload);
    const refreshToken = jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET);

    refreshTokens.push(refreshToken);
    res.json({ accessToken, refreshToken });
});

app.delete('/logout', (req, res) => {
    refreshTokens = refreshTokens.filter((token) => token !== req.body.refreshToken);
    res.sendStatus(204);
});

function generateAccessToken(payload) {
    return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15s' });
}

app.listen(process.env.AUTH_PORT || 3001);
