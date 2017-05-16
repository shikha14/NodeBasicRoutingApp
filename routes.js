var url = require('url');
var fs = require('fs');

function renderHTML(path,response) {
  fs.readFile(path,null,function(error,data){
    if(error){
      response.writeHead(404);
      response.write("File not found");
    }else{
      response.write(data);
    }
  });

}

function jsonResponse(jsonData,response){
  if(jsonData){
    response.writeHead(200,{'Content-Type':'application/json'});
    response.write(JSON.stringify(jsonData));
  }else{
    response.writeHead(404);
    response.write("Data not found");
  }
  
}

module.exports = {
  handleRequest: function (request,response) {
    response.writeHead(200,{'Content-Type':'text/html'});
    var path = url.parse(request.url).pathname;
    switch (path) {
      case '/':
          renderHTML('./views/index.html',response);
        break;
      case '/login':
        renderHTML('./views/login.html',response);
        break;

        case '/getInfo':
          var infos ={
            key1: "value1",
            key2: "value2",
            key3: "value3",
            key4: "value4"

          };
          jsonResponse(infos,response);
          break;
      default:
        response.writeHead(404);
        response.write("Route not found");
        response.end();
    }

  }

};
