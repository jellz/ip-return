const express = require('express');
const cloudflare = require('cloudflare-express');
const cors = require('cors');
const app = express();

const PORT = process.env.PORT || 3000;

app.set('trust proxy', true);
app.use(cors());
app.use(cloudflare.restore());

app.get('/', (req, res) => {
  res.json({
    ip_address: req.cf_ip,
    motivation: 'You can do anything!'
  });
});

app.listen(PORT, () => console.log('ip-return listening on ' + PORT));
