const API_KEY = config.API_KEY;
const presId = '1Znkito_qgt3xTfFf-icqOB7pQd52Mtqk0ffzTwLVsG4';
const SLIDES_DISCOVERY_DOCS = ["https://slides.googleapis.com/$discovery/rest?version=v1",];
const DISCOVERY_DOCS = ["https://sheets.googleapis.com/$discovery/rest?version=v4"];

const SPREADSHEET_ID = '1OexDEbqVQ9dvL6kTmWILcMezVtpw4ee_QfqAWghEebU';
const SPREADSHEET_TAB_NAME = 'Sheet1';

var scontent = new Array();

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
  

        gapi.client.slides.presentations.get({
            presentationId : presId,
        }).then(function(response){

          console.log('Presentation Title: ' + response.result.title);
          console.log('Slides in Presentation: ' + response.result.slides.length);
          console.log('Random Slide Text: ' + response.result.slides[0].pageElements[1].shape.text.textElements[1].textRun.content);
          response.result.slides.forEach(slides => {
            slides.pageElements.forEach(pageElement => {
              if(pageElement.shape != undefined && pageElement.shape.shapeType === 'TEXT_BOX') {
                pageElement.shape.text.textElements.forEach(element =>{
                  if(element.textRun != undefined && element.textRun.content != " " && element.textRun.content != "") {
                    //console.log(element.textRun.content.toString());
                    scontent.push(element.textRun.content);
                  }
                });
              }
            });
          });
          console.log(scontent.length); //outputs number of text lines
        });

      })
    }, function(error) {
      console.log('error', error)
    });
  }
