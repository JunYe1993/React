import http from 'http'
import url from 'url'

export function serverStart(route) {
    function onRequest(request, response) {
        var path_name = url.parse(request.url).pathname;
        console.log("Request for " + path_name + " received");
        
        // Routing function
        route(path_name, response);
    }
    http.createServer(onRequest).listen(8888);
    console.log("Server has started...");
}