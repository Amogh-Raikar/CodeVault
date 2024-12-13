const fs = require("fs").promises;
const path = require("path");

const dataFile = path.join(__dirname, "data.json");

module.exports = async (req, res) => {
  if (req.method === "POST") {
    const { language, title, content, password } = req.body;

    if (!title || !content) {
      return res.status(400).json({ message: "Title and content are required." });
    }

    const codes = JSON.parse(await fs.readFile(dataFile, "utf-8") || "[]");
    const newCode = {
      id: Date.now().toString(),
      language,
      title,
      content,
      password,
    };

    codes.push(newCode);
    await fs.writeFile(dataFile, JSON.stringify(codes, null, 2));

    return res.status(201).json(newCode);
  }

  res.setHeader("Allow", ["POST"]);
  return res.status(405).end(`Method ${req.method} Not Allowed`);
};
