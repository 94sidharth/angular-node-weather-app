const express = require('express');
const port = process.env.PORT || 3000;

const geocode = require('./utils/geocode.js');
const forcast = require('./utils/forcast.js');

const app = express();

// Create link to Angular build directory
var distDir = __dirname + "/dist/";
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
