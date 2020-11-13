import { exec } from 'child_process';

function start_requset_handle (response) {
    console.log("Start request.");
    var content = "empty\n";
    exec("ls -alh", function (error, stdout, stderr) {
        content = stdout;
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write(content);
        response.end();
    });
    // 放在外面會讓 server 直接回 empty
    // response.writeHead(200, {"Content-Type": "text/plain"});
    // response.write(content);
    // response.end();
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
    handle['/start'] = start_requset_handle;
    handle['/upload'] = upload_requset_handle;

    if (typeof handle[url] === 'function') {
        handle[url](response);
    } else {
        console.log("No request handler found for " + url);
    }
}

export function route(url, response) {
    requset_handler(url, response);
}