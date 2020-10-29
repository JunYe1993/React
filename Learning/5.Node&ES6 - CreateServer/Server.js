import http from 'http'
// nodejs 為 Event Trigger
// 通常 apache http server 會開一個新的 thread 去執行相對的 PHP 腳本
// 但 nodejs 為單一 thread, 所以得利用 callback function 來去控制流程
function onRequest(request, response) {
    console.log("Request received.");
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello World.\n");
    response.end();
}

// CMD 執行 node Server.js 就能開啟 Server
// 此時用瀏覽器輸入 http://localhost:8888 (或者用 curl) 就可看到 Hello World.
// 因為是 Event Trigger, 每一個新的連線至 http://localhost:8888 Server 都會顯示一個 Request received.
http.createServer(onRequest).listen(8888);

console.log("Server has started...");
