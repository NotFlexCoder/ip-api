const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');
const crypto = require('crypto');

module.exports = async (req, res) => {
  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  
  if (!ip) {
    res.statusCode = 400;
    res.end(JSON.stringify({ error: "Unable to detect IP address" }));
    return;
  }

  const response = await fetch(`http://ip-api.com/json/${ip}`);
  const data = await response.json();

  const uniqueId = crypto.randomBytes(16).toString('hex');
  const dataPath = path.join(__dirname, '../../data/saved.json');
  let existing = {};

  if (fs.existsSync(dataPath)) {
    existing = JSON.parse(fs.readFileSync(dataPath));
  }

  existing[uniqueId] = data;
  fs.writeFileSync(dataPath, JSON.stringify(existing, null, 2));

  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ 
    message: "IP information saved successfully.",
    share_url: `/api/view?ip=${uniqueId}`
  }));
};
