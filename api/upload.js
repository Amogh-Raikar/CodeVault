const codes = []; // In-memory database (resets when the server restarts)

export default function handler(req, res) {
    if (req.method === 'POST') {
        const { language, name, content, uploaderName, password } = req.body;

        if (!name || !content) {
            return res.status(400).json({ success: false, message: 'Name and content are required!' });
        }

        const codeSnippet = {
            id: Date.now().toString(), // Generate unique ID using timestamp
            language: language || 'Other',
            name,
            content,
            uploaderName: uploaderName || 'Anonymous',
            password: password || null, // Optional password for removing the snippet
        };

        codes.push(codeSnippet);
        return res.status(201).json({ success: true, code: codeSnippet });
    }

    res.status(405).json({ success: false, message: 'Method not allowed' });
}
