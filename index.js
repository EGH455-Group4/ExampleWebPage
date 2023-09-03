const express = require('express');
const config = require('config');

const app = express();
app.use(express.json())

const host = config.get("host");
const port = config.get("port");

let airQuality = undefined;
let targetDetection = undefined;

app.get('/', (req, res) => {
    res.sendFile('index.html', {root: __dirname});
});

app.get('/air-quality', (req, res) => {
    const jsonContent = JSON.stringify(airQuality);
    res.end(jsonContent);
});

app.post('/air-quality', (req, res) => {
    let data = req.body;
    airQuality = data;
    res.send('Data Received at air-quality: ' + JSON.stringify(data));
});

app.get('/target-detection', (req, res) => {
    const jsonContent = JSON.stringify(targetDetection);
    res.end(jsonContent);
});

app.post('/target-detection', (req, res) => {
    let data = req.body;
    targetDetection = data;
    res.send('Data Received at target-detection: ' + JSON.stringify(data));
});

app.listen(port, () => {
    console.log(`Now listening on: ${host}:${port}`);
});
