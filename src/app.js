var UI = require('ui');
var ajax = require('ajax');
var Vibe = require('ui/vibe');

// Create a Card with title and subtitle
var card = new UI.Card({
  title:'       Bitcoin',
  subtitle:'        in USD'
});

// Display the Card
card.show();

// Construct URL
var URL = 'https://www.bitstamp.net/api/v2/ticker/btcusd/';

// Make the request
ajax(
  {
    url: URL,
    type: 'json'
  },
  function(data) {
    // Success!
    console.log("Successfully fetched bitcoin data!");

    // Show to user
  
    var bitcoinInUS = "\n    $ " + data.last ;
    card.body(bitcoinInUS);
    var Vibe = require('ui/vibe');
  },
  function(error) {
    // Failure!
    console.log('Failed fetching bitcoin data: ' + error);
  }
);
