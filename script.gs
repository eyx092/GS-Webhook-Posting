function postMessageToDiscord(message) {

  message = "Your Message Here";

  var discordUrl = 'Webhook URL Here';
  var payload = JSON.stringify({content: message});

  var params = {
    headers: {
      'Content-Type': 'application/json'
    },
    method: "POST",
    payload: payload,
    muteHttpExceptions: true
  };

  var response = UrlFetchApp.fetch(discordUrl, params);

  Logger.log(response.getContentText());

}
