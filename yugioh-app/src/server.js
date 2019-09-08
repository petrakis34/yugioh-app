const express = require("express");
const bodyParser = require("body-parser");
var httpProxy = require('http-proxy');
var apiProxy = httpProxy.createProxyServer();
const app = express();
const router = express.Router();
const ygoPricesServer = 'http://yugiohprices.com';
const card =
{
  "status": "success",
  "data": {
    "name": "Monster Gate",
    "text": "Tribute 1 monster; excavate cards from the top of your Deck until you excavate a monster that can be Normal Summoned/Set. Special Summon it, also send the other excavated cards to the GY.",
    "card_type": "spell",
    "type": null,
    "family": null,
    "atk": null,
    "def": null,
    "level": null,
    "property": "Normal"
  }
}

let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}

app.use(bodyParser.urlencoded({
  extended: true
}));

app.listen(port, () => console.log("Server started on port 8000"));
app.use(express.static('dist'));

app.get('/apimock/card', function(req, res) {
  return res.status(200).json(card);
})

app.all("/api/*", function (req, res) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).json({});
  } else {
    return apiProxy.web(req, res, { target: ygoPricesServer, changeOrigin: true }, function (e) { console.log('ERROR!!', e) });
  }
});

app.use("/", router);
