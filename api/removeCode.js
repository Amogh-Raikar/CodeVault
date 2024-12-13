const fs = require("fs").promises;
const path = require("path");

const dataFile = path.join(__dirname, "data.json");

module.exports = async (req, res) => {
  if (req.method === "POST") {
    const { id, password } = req.body;

    const codes = JSON.parse(await fs.readFile(dataFile, "utf-8") || "[]");
    const index = codes.findIndex((code) => code.id === id && code.password === password);

    if (index === -1) {
      return res.status(400).json({ message: "Invalid ID or password." });
    }

    codes.splice(index, 1);
    await fs.writeFile(dataFile, JSON.stringify(codes, null, 2));

    return res.status(200).json({ message: "Code removed successfully." });
  }

  res.setHeader("Allow", ["POST"]);
  return res.status(405).end(`Method ${req.method} Not Allowed`);
};
