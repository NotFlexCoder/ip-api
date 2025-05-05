const fs = require('fs');
const path = require('path');

module.exports = async (req, res) => {
  const dataPath = path.join(__dirname, '../data/saved_ips.json');
  
  if (!fs.existsSync(dataPath)) {
    res.status(404).json({ message: "No saved IP data found." });
    return;
  }

  const savedIps = JSON.parse(fs.readFileSync(dataPath));

  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(savedIps, null, 2));
};
