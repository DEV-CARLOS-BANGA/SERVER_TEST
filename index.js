require('dotenv').config()

const express = require('express');
const cors = require('cors');

const app = express()

app.use(cors());
app.use(express.json());

app.get('/verication-zone', async (req, res) => {
    const ip = req.ip;
    const url = `https://ipinfo.io/${ip}/json`;

    await fetch(url)
        .then(res => res.json())
        .then((data) => {
            return res.json(data)
        })
        .catch(() => {
            return res.json({
                message: 'Error to serach IP'
            })
        })
})

app.listen(process.env.PORT || 3000, () => {
    console.log('SERVER RUNNING...');

})