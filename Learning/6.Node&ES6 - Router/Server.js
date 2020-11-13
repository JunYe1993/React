import http from 'http'
import url from 'url'

function onRequest(request, response) {
    // 會紀錄 request url
    // Example 
    //     curl http:://localhost:8888/            ==>  Request for / received
    //     curl http:://localhost:8888/students/1  ==>  Request for /students/1 received
    var path_name = url.parse(request.url).pathname;
    console.log("Request for " + path_name + " received");
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello World.\n");
    response.end();
}

http.createServer(onRequest).listen(8888);
console.log("Server has started...");