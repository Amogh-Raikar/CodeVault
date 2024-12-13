// /api/getCode.js
let codes = [];  // You can also use a database for persistent storage

module.exports = async (req, res) => {
  if (req.method === 'GET') {
    return res.json({ codes });
  }
  return res.status(405).json({ success: false, message: 'Method not allowed' });
};
