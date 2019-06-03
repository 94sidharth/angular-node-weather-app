const request = require('request');

forcast = (longitude, latitude, callback) => {
    const url = "https://api.darksky.net/forecast/7d7c787b151732930b5c55a3c93250a8/" + latitude + "," + longitude + "?units=si";

    request({ url, json: true }, (error, response) => {
        if (error) {
            callback({
                error: "Something went wrong! Please try again later"
            })
        }
        else {
            if (response.body.error) {
                callback({ "error": response.body.error });
            }
            else {
                const data = response.body.daily.data
                callback(undefined, data[0])
            }
        }
    })
}

module.exports = forcast;