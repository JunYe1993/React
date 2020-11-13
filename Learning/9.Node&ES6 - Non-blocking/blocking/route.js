function start_requset_handle () {
    console.log("Start request.");
    
    // Sleep for 10 seconds
    function sleep(milliSeconds) {
        var startTime = new Date().getTime();
        while (new Date().getTime() < startTime + milliSeconds);
    }
    sleep(10000);
}

function upload_requset_handle () {
    console.log("Upload request.");
}

function requset_handler (url) {
    var handle = {};
    handle['/'] = start_requset_handle;
    handle['/start'] = start_requset_handle;
    handle['/upload'] = upload_requset_handle;

    if (typeof handle[url] === 'function') {
        handle[url]();
    } else {
        console.log("No request handler found for " + url);
    }
}

export function route(url) {
    requset_handler(url);
}