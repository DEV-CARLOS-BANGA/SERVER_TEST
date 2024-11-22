require('dotenv').config()

const express = require('express');
const cors = require('cors');

const app = express()

app.use(cors());
app.use(express.json());

app.get('/', async (req, res) => {
    const ip = req.ip;
    const url = `https://ipinfo.io/${ip}/json`;
try{
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
}catch{
    res.json({
        message: 'Nem chegou!'
    })
}
    
})

app.listen(process.env.PORT || 3000, () => {
    console.log('SERVER RUNNING...');

})
