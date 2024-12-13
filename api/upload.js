// File: api/upload.js
const codes = []; // In-memory database (resets every time the server restarts)

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { language, name, content, uploaderName } = req.body;

        if (!name || !content) {
            return res.status(400).json({ success: false, message: 'Name and content are required!' });
        }

        const codeSnippet = {
            id: codes.length + 1,
            language,
            name,
            content,
            uploaderName,
        };

        codes.push(codeSnippet);
        return res.status(201).json({ success: true, code: codeSnippet });
    }

    res.status(405).json({ success: false, message: 'Method not allowed' });
}
