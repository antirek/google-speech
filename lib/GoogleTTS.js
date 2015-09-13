/*
http://translate.google.com/translate_tts?ie=UTF-8&tl=fr&q=test&textlen=4&idx=0&total=1
*/

var request = require('request'),
    qs = require('querystring'),
    fs = require('fs'),
    path = require('path');

var GoogleTTS = function (options, callback) {

    var GOOGLE_TTS_URL = 'http://translate.google.com/translate_tts?',
        params = {},
        file_download_path = null;
    
    var init = function(){
        //required     
        params['q'] = options['text'];
        file_download_path = options['file'];
        //optional
        params['ie'] = options['encoding'] || 'UTF-8';
        params['tl'] = options['language'] || 'ru';
        params['client'] = 't';
    }();
    
    var full_url = GOOGLE_TTS_URL + qs.stringify(params);    

    var options = {
      url: full_url,
      headers: {
        'User-Agent': 'Mozilla/5.0 (X11; Linux x8664; rv:39.0) Gecko/20100101 Firefox/39.0'
      }
    };

    var download = function (callback) {        
        var file = fs.createWriteStream(file_download_path);
        file.on('finish', function () {
            file.close(callback);
        });
        request(options).pipe(file);
    }(callback);
};

module.exports = GoogleTTS;