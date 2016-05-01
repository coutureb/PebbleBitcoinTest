var UI = require('ui');
var ajax = require('ajax');

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
  
    var bitcoinInUS = "    $ " + data.last ;
    card.body(bitcoinInUS);
  },
  function(error) {
    // Failure!
    console.log('Failed fetching bitcoin data: ' + error);
  }
);
