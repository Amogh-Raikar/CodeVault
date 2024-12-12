// api/getCode.js
module.exports = async (req, res) => {
    if (req.method === 'GET') {
        try {
            const codes = JSON.parse(process.env.CODES || '[]');
            res.status(200).json(codes);
        } catch (error) {
            res.status(500).json({ message: 'Error fetching code snippets', error: error.message });
        }
    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
};
