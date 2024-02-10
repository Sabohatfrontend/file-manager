import { createReadStream, createWriteStream } from 'node:fs';
import { finished, pipeline } from 'node:stream/promises';
import path from 'node:path';
import rm from './rm.js'

const mv = async (filePath, newFilePath) => {
    try {
        const filePath1 = path.resolve(process.cwd(), filePath);
        const { base: baseName } = path.parse(filePath1);
        const readable = createReadStream(filePath1);
        const writeable = createWriteStream(path.resolve(process.cwd(), newFilePath, baseName));
        await pipeline(
            readable,
            writeable,
        )
        writeable.end();
        await rm(filePath1);
    }
    catch {
        console.log('Operation failed!');
    }
}

export default mv;