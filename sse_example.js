var SSE = require('sse'),
  http = require('http');

var server = http.createServer(function(req, res) {
  res.writeHead(200, {
    'Content-Type': 'text/event-stream',
    'Access-Control-Allow-Origin': '*'
  });


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

//var jsonData = JSON.stringify(data);


  setInterval(function() {

    // Randomly changing data
    data.stocks.forEach(function(element){
      if(element.ticker == 'NFLX') { element.price *= 0.98;  } //price going down for NETFLIX
      element.price *= 1.01;
    });

    res.write(JSON.stringify(data));
  }, 3000);

  //res.end('okay');
});


server.listen(8080, '127.0.0.1', function() {
  var sse = new SSE(server);
  // sse.on('connection', function(client) {
  //   console.log(client);
  //   client.send('hi there!');
  // });
});