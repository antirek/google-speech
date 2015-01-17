var google_speech = require('../index');

google_speech.TTS({
  text: 'У нас новый номер, мистер Рис',
  file: 'data/hello.mp3',
  language: 'ru',
  encoding: 'UTF-8'
  }, function () {
    console.log('done');
  }
);