var google_speech = require('../index');

google_speech.TTS({
  text: 'Привет, мир!',
  file: 'data/hello.mp3'
  }, function () {
    console.log('done');
  }
);