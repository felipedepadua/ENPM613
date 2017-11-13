Authors: Felipe, Prathima, Emily
Class: ENPM613

INSTRUCTIONS:

1) To try the webservice, do the following:
  1.1) Run the webservice:
      1.1.1) Go to Terminal and the folder where it is located
      1.1.2) run > node webservice.js
  1.2) Go to the browser [or use a restful tool such as Postman and SoapUI - set it to GET]
    1.2.1) type this url:
        PS: You can replace 'AAPL' by 'AMZN' or 'NFLX'
  1.3) [ALTERNATIVE] You can also leave it running and consume this data by your application

2) To try the the Server-Sent Event-based example, do the following: 
  2.1) Go to Terminal and the folder where it is located and run > node sse_example.js
  2.2) Go to browser and type the url: localhost:8080/index.html
      PS: You can add any HMTL,CSS,JS to improve layout

Link to diagrams:
- Sequence diagram for Webservice:
- Sequence diagram for SSE: 


Files Description:
- webservice.js : webservice available to be consumed
- sse_example   : Server-sent event code (To know more, check: https://www.w3schools.com/html/html5_serversentevents.asp) 
- index.html    : page to interact with users






