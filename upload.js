// api/upload.js
module.exports = async (req, res) => {
    if (req.method === 'POST') {
        try {
            const { language, name, content, removePassword, uploaderName } = req.body;
            
            // Save the uploaded code (in this example, we're using an in-memory store)
            // You could save it in a database for persistence
            let codes = JSON.parse(process.env.CODES || '[]');
            const newCode = { id: Date.now().toString(), language, name, content, removePassword, uploaderName };
            codes.push(newCode);
            
            // Update the environment variable with the new list of codes
            process.env.CODES = JSON.stringify(codes);
            
            res.status(200).json({ message: 'Code uploaded successfully', codeData: newCode });
        } catch (error) {
            res.status(500).json({ message: 'Error uploading code', error: error.message });
        }
    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
};
