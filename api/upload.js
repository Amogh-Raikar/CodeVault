// /api/upload.js
let codes = [];

module.exports = async (req, res) => {
  if (req.method === 'POST') {
    const { language, name, content, removePassword, uploaderName } = req.body;
    const newCode = {
      id: Date.now().toString(),
      language,
      name,
      content,
      removePassword: removePassword || null,
      uploaderName: uploaderName || null
    };
    codes.push(newCode);
    return res.json({ success: true, code: newCode });
  }
  return res.status(405).json({ success: false, message: 'Method not allowed' });
};
