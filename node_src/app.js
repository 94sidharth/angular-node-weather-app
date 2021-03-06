const express = require('express');
const port = process.env.PORT || 3000;
const path = require('path');

const geocode = require('./utils/geocode.js');
const forcast = require('./utils/forcast.js');
const cors = require('cors');

const app = express();
app.use(cors());

// Create link to Angular build directory
var distDir = path.join(__dirname, "../dist/");
app.use(express.static(distDir));

app.get('/api/weather', (req, res) => {
    let address = req.query.address;
    geocode(address, (error, response) => {
        if (error) {
            res.send({
                error
            });
        }
        else {
            let longitude = response.longitude;
            let latitude = response.latitude;
            forcast(longitude, latitude, (error, response) => {
                if (error) {
                    res.send({
                        error
                    });
                }
                else {
                    res.send({
                        summary: response.summary,
                        data: response
                    });
                }
            })
        }
    })
})

app.listen(port, () => {
    console.log("Server is up and running")
})
