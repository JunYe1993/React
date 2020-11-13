import 'fs'
import { readFile } from 'fs';

function start_requset_handle (response) {
    console.log("Start request.");
    // 這路徑是依照 node __dir__/index.js 當下路徑為 root
    readFile("Learning/10.React - CDN-based/hello.html", function(err, data){
        if (err) throw err;
        response.write(data);
        response.end();
    });
}

function upload_requset_handle (response) {
    console.log("Upload request.");
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Uploading...\n");
    response.end();
}

function requset_handler (url, response) {
    var handle = {};
    handle['/'] = start_requset_handle;
    handle['/home'] = start_requset_handle;
    handle['/upload'] = upload_requset_handle;

    if (typeof handle[url] === 'function') {
        handle[url](response);
    } else {
        console.log("No request handler found for " + url);
        response.end();
    }
}

export function route(url, response) {
    requset_handler(url, response);
}