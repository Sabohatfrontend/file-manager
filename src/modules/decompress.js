
import { createBrotliDecompress } from 'node:zlib';
import { createReadStream, createWriteStream } from 'node:fs';
import { parse, resolve } from 'node:path';
import { pipeline } from 'node:stream/promises';

const decompress = async (filePath, destinationPath) => {
    try {
        const sourcePath = resolve(process.cwd(), filePath);
        const { dir: directory, name: fileName } = parse(sourcePath);
        const brotliDecompress = createBrotliDecompress();
        const source = createReadStream(sourcePath);
        const destination = createWriteStream(resolve(process.cwd(), destinationPath || directory, fileName));

        await pipeline(source, brotliDecompress, destination);
    }
    catch {
        console.log('Operation failed!!!');
    }
};

export default decompress;