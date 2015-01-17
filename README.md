# google-speech

node.js module for Google speech systems (ASR)

## Install
```javascript
npm install google-speech --save

```

## Automatic Speech Recognition ##

Get API key: https://console.developers.google.com/

more docs: https://github.com/gillesdemey/google-speech-v2


```javascript
var google_speech = require('google-speech');

google_speech.ASR({
    developer_key: 'XXXXXXXX',
    file: 'data/1.wav',
  }, function(err, httpResponse, xml){
    if(err){
        console.log(err);
      }else{
        console.log(httpResponse.statusCode, xml)
      }
    }
);

```


## Text-To-Speech ##

(use unofficial api, api key not required)


```javascript
var google_speech = require('google-speech');

google_speech.TTS({
  text: 'Привет, мир!',
  file: 'data/hello.mp3'
  }, function(){
    console.log('done');
  }
);

//or so

google_speech.TTS({
  text: 'Привет, мир!',
  file: 'data/hello.mp3',
  language: 'ru',
  encoding: 'UTF-8'
  }, function(){
    console.log('done');
  }
);

```