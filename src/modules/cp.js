import { createReadStream, createWriteStream } from 'node:fs';
import { pipeline } from 'node:stream/promises';
import path from 'node:path';

const cp = async (filePath, newFilePath) => {
    try {
        const filePath1 = path.resolve(process.cwd(), filePath);
        const { dir: directory, name: fileName, ext: fileExtension } = path.parse(filePath1);
        const newFileName = `${fileName}_copy${fileExtension}`;
        const readable = createReadStream(filePath1);
        const writeable = createWriteStream(path.resolve(process.cwd(), newFilePath || directory, newFileName));
        await pipeline(
            readable,
            writeable,
        )
        writeable.end();
    }
    catch {
        console.log('Operation failed!');
    }
}

export default cp;