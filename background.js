const API_KEY = config.API_KEY;
const presId = "1Znkito_qgt3xTfFf-icqOB7pQd52Mtqk0ffzTwLVsG4";
const SLIDES_DISCOVERY_DOCS = [
  "https://slides.googleapis.com/$discovery/rest?version=v1",
];
const DISCOVERY_DOCS = [
  "https://sheets.googleapis.com/$discovery/rest?version=v4",
];

var scontent = new Array();

function onGAPILoad() {
  gapi.client
    .init({
      // Don't pass client nor scope as these will init auth2, which we don't want
      apiKey: API_KEY,
      discoveryDocs: SLIDES_DISCOVERY_DOCS,
    })
    .then(
      function () {
        console.log("gapi initialized");
        chrome.identity.getAuthToken({ interactive: true }, function (token) {
          gapi.auth.setToken({
            access_token: token,
          });

          gapi.client.slides.presentations
            .get({
              presentationId: presId,
            })
            .then(function (response) {
              console.log("Presentation Title: " + response.result.title);
              console.log(
                "Slides in Presentation: " + response.result.slides.length
              );
              console.log(
                "Random Slide Text: " +
                  response.result.slides[0].pageElements[1].shape.text
                    .textElements[1].textRun.content
              );
              response.result.slides.forEach((slides) => {
                slides.pageElements.forEach((pageElement) => {
                  if (
                    pageElement.shape != undefined &&
                    pageElement.shape.shapeType === "TEXT_BOX"
                  ) {
                    pageElement.shape.text.textElements.forEach((element) => {
                      if (
                        element.textRun != undefined &&
                        element.textRun.content != " " &&
                        element.textRun.content != ""
                      ) {
                        //console.log(element.textRun.content.toString());
                        scontent.push(element.textRun.content);
                      }
                    });
                  }
                });
              });
              console.log(scontent.length); //outputs number of text lines
            });
        });
      },
      function (error) {
        console.log("error", error);
      }
    );
}

var currPresId = null;

// when url changes checks if presentation is same, if not get's info
function getPresData(pId) {
  if(currPresId != pId) {
    currPresId = pId;
    gapi.client.slides.presentations.get({
      presentationId: pId,
    }).then(function (response) {
      console.log(response.result.title);
      console.log(response.result.slides.length);
      getSlides(pId);
    })
  }
  else {
    console.log("presentation already loaded");
  }
}

// gets the id of each slide and prints to console, only used for new presentations
function getSlides(pId) {
  gapi.client.slides.presentations.get({
    presentationId: pId,
  }).then(function (response) {
    response.result.slides.forEach((slide) => {
      console.log(slide.objectId);
    })
  })
}

chrome.tabs.onUpdated.addListener(
  function(tabId, changeInfo, tab) {
    // read changeInfo data and do something with it
    // like send the new url to contentscripts.js
    if (changeInfo.url) {
      chrome.tabs.sendMessage( tabId, {
        message: 'urlChange',
        url: changeInfo.url
      })
      var urlInfo = changeInfo.url.split("/");
      console.log(urlInfo[5]);
      getPresData(urlInfo[5]);
      //var slideInfo = urlInfo[6].split(".");
      //console.log(slideInfo[1]);
    }
  }
);