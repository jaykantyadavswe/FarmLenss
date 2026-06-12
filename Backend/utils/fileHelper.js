import fs from 'fs';
import { promises as fsPromises } from 'fs';

export const readFileAsBase64 = async (path) => {
    const buffer = await fsPromises.readFile(path);
    return buffer.toString('base64');
}

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