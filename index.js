var express = require('express');
var cloudflare = require('cloudflare-express');
var app = express();

const PORT = process.env.PORT || 3000;

app.set('trust proxy');
app.use(cloudflare.restore());

app.get('/', (req, res) => {
  res.json({
    ipAddress: req.cf_ip,
    motivation: 'You can do anything!'
  });
});

app.listen(PORT, () => console.log('ip-return listening on ' + PORT));