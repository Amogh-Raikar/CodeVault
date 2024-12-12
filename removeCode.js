// api/removeCode.js
module.exports = async (req, res) => {
    if (req.method === 'POST') {
        try {
            const { id, removePassword } = req.body;
            let codes = JSON.parse(process.env.CODES || '[]');
            const codeIndex = codes.findIndex(code => code.id === id && code.removePassword === removePassword);

            if (codeIndex === -1) {
                return res.status(400).json({ message: 'Invalid password or code not found' });
            }

            codes.splice(codeIndex, 1);
            process.env.CODES = JSON.stringify(codes);
            res.status(200).json({ message: 'Code removed successfully' });
        } catch (error) {
            res.status(500).json({ message: 'Error removing code', error: error.message });
        }
    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
};
