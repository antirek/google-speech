var google_speech = require('../index');

google_speech.ASR({
        debug: true,
        developer_key: 'AIzaSyDIntc_n7Sm6Nd4pgf7Kp6nAPqqZCQOxM1',
        file: 'data/sample.wav'
    }, function (err, response, xml) {
        console.log(err, response, xml);
    });