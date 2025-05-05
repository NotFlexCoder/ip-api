const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');

module.exports = async (req, res) => {
  const ip = req.query.ip;
  if (!ip) {
    res.statusCode = 400;
    res.end(JSON.stringify({ error: "IP address is required" }));
    return;
  }

  const response = await fetch(`http://ip-api.com/json/${ip}`);
  const data = await response.json();
  const dataPath = path.join(__dirname, '../../data/saved.json');
  let existing = {};

  if (fs.existsSync(dataPath)) {
    existing = JSON.parse(fs.readFileSync(dataPath));
  }

  existing[ip] = data;
  fs.writeFileSync(dataPath, JSON.stringify(existing, null, 2));

  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ message: "IP information saved", view_url: `/api/view?ip=${ip}` }));
};