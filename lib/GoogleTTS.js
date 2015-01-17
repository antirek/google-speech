/*
http://translate.google.com/translate_tts?ie=UTF-8&tl=fr&q=test&textlen=4&idx=0&total=1
*/

var request = require('request'),
    qs = require('querystring'),
    fs = require('fs'),
    path = require('path');

var GoogleTTS = function (options, callback) {

    var GOOGLE_TTS_URL = 'http://translate.google.com/translate_tts?';
    
    var params = {};

    var file_download_path = null;
    
    var init = function(){
        //required     
        params['q'] = options['text'];
        file_download_path = options['file'];
        //optional
        params['ie'] = options['ie'] || 'UTF-8';
        params['tl'] = options['tl'] || 'ru';        
    }();
    
    var full_url = GOOGLE_TTS_URL + qs.stringify(params);    

    var download = function (callback) {        
        var file = fs.createWriteStream(file_download_path);
        file.on('finish', function () {
            file.close(callback);
        });
        request(full_url).pipe(file);
    }(callback);
};

module.exports = GoogleTTS;