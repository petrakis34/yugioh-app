const express = require("express");
const httpProxy = require('http-proxy');
const apiProxy = httpProxy.createProxyServer();
const app = express();
const router = express.Router();
const ygoPricesServer = 'http://yugiohprices.com';

let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}

app.listen(port, () => console.log("Server started on port 8000"));
app.use(express.static('dist'));

app.all("/api/*", function (req, res) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).json({});
  } else {
    delete req.headers.referer;
    return apiProxy.web(req, res, { target: ygoPricesServer, changeOrigin: true }, function (e) { console.log('ERROR!!', e) });
  }
});

app.use("/", router);
