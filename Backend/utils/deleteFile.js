import fs from 'fs';
import { promises as fsPromises } from 'fs';

export const deleteFile = async (path) => {
    try {
        const exists = await fsPromises.access(path).then(() => true).catch(() => false);
        if (exists) {
            await fsPromises.unlink(path);
        }
    } catch (err) {
        console.warn(`Failed to delete file ${path}:`, err.message);
    }
}