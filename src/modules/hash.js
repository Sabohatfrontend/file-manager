import { createReadStream } from 'node:fs';
const {
    createHash,
} = await import('node:crypto');
import path from 'node:path';

const hash = async (file) => {
    const hash = createHash('SHA256').setEncoding('hex');
    const input = createReadStream(path.resolve(process.cwd(), file));
    input.pipe(hash);
    input.on('end', () => {
        hash.end();
        console.log(hash.read());
    });
}

export default hash;