const fs = require('fs');
const path = require('path');

module.exports = async (req, res) => {
  const dataPath = path.join(__dirname, '../data/saved.json');
  if (!fs.existsSync(dataPath)) {
    res.end(JSON.stringify({ message: "No saved data found" }));
    return;
  }

  const allData = JSON.parse(fs.readFileSync(dataPath));
  const { ip } = req.query;

  if (ip) {
    const ipList = Array.isArray(ip) ? ip : [ip];
    const result = {};
    ipList.forEach(addr => {
      if (allData[addr]) result[addr] = allData[addr];
    });
    res.end(JSON.stringify(result));
  } else {
    res.end(JSON.stringify(allData));
  }
};