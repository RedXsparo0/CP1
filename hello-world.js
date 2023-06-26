console.log('hello-World') ;

var http = require("http");



http.createServer(function (request, response) {
   
    response.writeHead(200, {'Content-Type': 'text/plain'});
    
   
    response.end('<h1>Hello Node!!!!</h1>');
 }).listen(3000);
 

 console.log('Server running at http://localhost:3000');




var fs = require("fs");
var data = 'Hello Node' ; 
fs.writeFile("welcome.txt" , data , function(err){
    if (err) {
        console.log(err);
    }
    console.log("Succces . file has been created"); 
});

var fs = require("fs");

fs.readFile('hello.txt', function (err, data) {
   if (err) {
      console.log(err.stack);
      return;
   }
   console.log(data.toString());
});
