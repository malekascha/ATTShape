module.exports = function(inputFile) {
  var watson = require('watson-developer-cloud');
  var fs = require('fs');
  var request = require('request');

  var speech_to_text = watson.speech_to_text({
    username: '0097435b-fa60-433a-b65d-130613b3e41c',
    password: 'USXAALjnLnmF',
    version: 'v1',
  });

  var params = {
    content_type: 'audio/wav',
    continuous: true,
    interim_results: true
  };

  // Create the stream.
  var recognizeStream = speech_to_text.createRecognizeStream(params);

  // Pipe in the audio.
  fs.createReadStream(inputFile).pipe(recognizeStream);

  // Pipe out the transcription to a file.
  recognizeStream.pipe(fs.createWriteStream('transcription.txt'));

  // Get strings instead of buffers from 'data' events.
  recognizeStream.setEncoding('utf8');

  // Listen for events.
  recognizeStream.on('data', function(event) { onEvent('Data:', event); });
  recognizeStream.on('results', function(event) { onEvent('Results:', event); });
  recognizeStream.on('error', function(event) { onEvent('Error:', event); });
  recognizeStream.on('close-connection', function(event) { onEvent('Close:', event); });

  // Displays events on the console.
  function onEvent(name, event) {
    if(name === 'Data:') {
      data = JSON.stringify(event, null, 2);
      request.post({
          url: 'https://api.scriptrapps.io/m2x/searchkeywords?auth_token=STlERTNEN0QyRA==',
          body: data
      }, function(req, res, err) {
        if(err) {
          console.error(err);
        }
        console.log(res.body);
      });
    }
    console.log(name, JSON.stringify(event, null, 2));
  };

};
