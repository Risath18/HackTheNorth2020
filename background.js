const API_KEY = config.API_KEY;
const presId = '1Znkito_qgt3xTfFf-icqOB7pQd52Mtqk0ffzTwLVsG4';
const SLIDES_DISCOVERY_DOCS = ["https://slides.googleapis.com/$discovery/rest?version=v1",];
const DISCOVERY_DOCS = ["https://sheets.googleapis.com/$discovery/rest?version=v4"];

const SPREADSHEET_ID = '1OexDEbqVQ9dvL6kTmWILcMezVtpw4ee_QfqAWghEebU';
const SPREADSHEET_TAB_NAME = 'Sheet1';

function onGAPILoad() {
    gapi.client.init({
      // Don't pass client nor scope as these will init auth2, which we don't want
      apiKey: API_KEY,
      discoveryDocs: SLIDES_DISCOVERY_DOCS,
    }).then(function () {
      console.log('gapi initialized')
      chrome.identity.getAuthToken({interactive: true}, function(token) {
        gapi.auth.setToken({
          'access_token': token,
        });
  
        // gapi.client.sheets.spreadsheets.values.get({
        //   spreadsheetId: SPREADSHEET_ID,
        //   range: SPREADSHEET_TAB_NAME,
        // }).then(function(response) {
        //   console.log(`Got ${response.result.values.length} rows back`)
        // });

        gapi.client.slides.presentations.get({
            presentationId : presId,
        }).then(function(response){
            console.log('Got slides back' + response.result.slides.length)
        });

      })
    }, function(error) {
      console.log('error', error)
    });
  }
