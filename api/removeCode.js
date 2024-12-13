const codes = require('./upload').codes; // Reuse the codes array from upload.js

export default function handler(req, res) {
    if (req.method === 'POST') {
        const { id, password } = req.body;

        const index = codes.findIndex(
            (snippet) => snippet.id === id && snippet.password === password
        );

        if (index === -1) {
            return res
                .status(404)
                .json({ success: false, message: 'Code snippet not found or incorrect password.' });
        }

        codes.splice(index, 1); // Remove the snippet
        return res.status(200).json({ success: true, message: 'Code snippet removed successfully.' });
    }

    res.status(405).json({ success: false, message: 'Method not allowed.' });
}
