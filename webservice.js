var http = require('http');
var url = require('url');
var express = require('express');

var app = express();

// EX: var adr = 'http://localhost:8088/api/?ticker=AAPL';


var data = {
      stocks: [
          {
              ticker: "AAPL",
              price: 174.40,
              time: new Date()
          },
          {
              ticker: "AMZN",
              price: 1125.35,
              time: new Date()
          },
          {
              ticker: "NFLX",
              price: 192.05,
              time: new Date()
          }
      ]
};


setInterval(function() {
	// Randomly changing data
	data.stocks.forEach(function(element){
	  if(element.ticker == 'NFLX') { element.price *= 0.998;  } //price going down for NETFLIX
	  element.price *= 1.002;
	});
	//res.write(JSON.stringify(data));
}, 2000); // every 2 seconds



app.get('/api',function (req, res) {

	var addrs = url.parse(req.url, true);

	/*The query property returns an object with all the querystring parameters as properties:*/
	var addrsData = addrs.query;
	console.log(addrsData);


	if(addrsData.ticker == 'AAPL'){
		// SEARCH IN ARRAY OF OBJECTS: https://goo.gl/4ByB6B
		var temp = data.stocks.find(function (data) { 
					    return data.ticker === 'AAPL';
					});

	} else if(addrsData.ticker == 'AMZN'){
		var temp = data.stocks.find(function (data) { 
					    return data.ticker === 'AMZN';
					});

	} else { // NETFLIX
		var temp = data.stocks.find(function (data) { 
					    return data.ticker === 'NFLX';
					});
	}

	console.log(temp);

	res.send(JSON.stringify(data));

});


app.listen(8088); //the server object listens on port 8080