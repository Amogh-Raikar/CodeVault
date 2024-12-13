// File: api/getCode.js
import { codes } from './upload'; // Share the in-memory `codes` array

export default async function handler(req, res) {
    if (req.method === 'GET') {
        return res.status(200).json({ success: true, codes });
    }

    res.status(405).json({ success: false, message: 'Method not allowed' });
}
