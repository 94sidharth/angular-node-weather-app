
const request = require('request');

geocode = (address, callback) => {
    const mapBox = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + encodeURIComponent(address) + ".json?access_token=pk.eyJ1Ijoic2lkaGFydGgxOTk0IiwiYSI6ImNqdzdrNTBrNjB2YmQ0YXFrcHFmcnoyMTAifQ.wjyNj2jREAtytv4SNRvjzw&limit=1";

    request({ url: mapBox, json: true }, (error, response) => {
        if (error) {
            callback({
                error: "Something went wrong! Please try again after some time"
            })
        }
        else {
            let data = response.body;
            if (data.features.length) {
                const longitude = response.body.features[0].center[0];
                const latitude = response.body.features[0].center[1];
                callback(undefined, { longitude, latitude })
            }
            else {
                callback({
                    error: "Invalid Location. Please enter valid location and try again."
                })
            }
        }

    })
}

module.exports = geocode;