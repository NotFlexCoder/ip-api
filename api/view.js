const fs = require('fs');
const path = require('path');

module.exports = async (req, res) => {
  const filePath = path.join('/tmp', 'ips.json');
  
  if (!fs.existsSync(filePath)) {
    res.status(404).json({ message: "No saved IP data found." });
    return;
  }

  const savedIps = JSON.parse(fs.readFileSync(filePath));

  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(savedIps, null, 2));
};
