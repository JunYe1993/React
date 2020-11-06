import http from 'http'
import url from 'url'

export function serverStart(route) {
    function onRequest(request, response) {
        var path_name = url.parse(request.url).pathname;
        console.log("Request for " + path_name + " received");
        
        // my Route function
        route(path_name);

        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write("Hello World.\n");
        response.end();
    }
    http.createServer(onRequest).listen(8888);
    console.log("Server has started...");
}