const fs = require("fs").promises;
const path = require("path");

const dataFile = path.join(__dirname, "data.json");

module.exports = async (req, res) => {
  const codes = JSON.parse(await fs.readFile(dataFile, "utf-8") || "[]");
  res.status(200).json(codes);
};
