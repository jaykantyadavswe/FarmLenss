import fs from 'fs';
import { promises as fsPromises } from 'fs';

export const readFileAsBase64 = async (path) => {
    const buffer = await fsPromises.readFile(path);
    return buffer.toString('base64');
}