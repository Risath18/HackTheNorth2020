const API_KEY = config.API_KEY;
const DISCOVERY_DOCS = ["https://slides.googleapis.com/$discovery/rest?version=v1"];
function onGAPILoad() {
  gapi.client.init({
    // Don't pass client nor scope as these will init auth2, which we don't want
    apiKey: API_KEY,
    discoveryDocs: DISCOVERY_DOCS,
  }).then(function () {
    console.log('gapi initialized')
  }, function(error) {
    console.log('error', error)
  });
}