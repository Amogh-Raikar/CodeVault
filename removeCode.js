// /api/removeCode.js
let codes = [];

module.exports = async (req, res) => {
  if (req.method === 'POST') {
    const { id, password } = req.body;
    const index = codes.findIndex(code => code.id === id && code.removePassword === password);
    if (index !== -1) {
      codes.splice(index, 1);
      return res.json({ success: true });
    }
    return res.json({ success: false, message: 'Incorrect password or code not found' });
  }
  return res.status(405).json({ success: false, message: 'Method not allowed' });
};

