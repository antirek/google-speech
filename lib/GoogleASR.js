'use strict';

var request = require('request'),
    qs = require('querystring'),
    fs = require('fs'),
    path = require('path');

var GOOGLE_ASR_URL = 'https://www.google.com/speech-api/v2/recognize?';

var GoogleASR = function (options, callback) {
    
    var file = {}, 
        params = {}, 
        debug = options['debug'] || false;

    //reqired
    params['key'] = options['developer_key'];    
    file['filepath'] = options['file'];
    file['content-type'] = options['content-type'] || 'audio/l16; rate=16000;';
    params['lang'] = options['lang'] || 'ru-RU';

    //optional
    params['output'] = options['output'] || 'json';

    var full_url = GOOGLE_ASR_URL + qs.stringify(params);

    if (debug) {
        console.log({
            url: full_url, 
            path: file['filepath'],
            'content-type': file['content-type']
        });
    }

    fs.readFile(file['filepath'], function (err, data) {
        var r = request.post({
            url: full_url,
            headers: {
                'Content-Type': file['content-type'],
            },
            body: data
        }, callback);
    });
};

module.exports = GoogleASR;