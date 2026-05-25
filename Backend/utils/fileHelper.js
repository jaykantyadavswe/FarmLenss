import fs from 'fs';

export const readFileAsBase64 = (path) => {
    const buffer = fs.readFileSync(path);
    return buffer.toString('base64');
}

export const deleteFile = (path) => {
    if(fs.existsSync(path)){
        fs.unlinkSync(path);
    }
}