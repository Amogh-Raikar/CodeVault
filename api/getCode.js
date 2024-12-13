const codes = require('./upload').codes; // Reuse the same `codes` array

export default function handler(req, res) {
    if (req.method === 'GET') {
        return res.status(200).json({ success: true, codes });
    }

    res.status(405).json({ success: false, message: 'Method not allowed' });
}
