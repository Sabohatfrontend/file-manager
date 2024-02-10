
import { createBrotliCompress } from 'node:zlib';
import { createReadStream, createWriteStream } from 'node:fs';
import { parse, resolve } from 'node:path';
import { pipeline } from 'node:stream/promises';

const compress = async (filePath, destinationPath) => {
    try{
    const sourcePath = resolve(process.cwd(), filePath);
    const { dir: directory, name: fileName, ext: fileExtension } = parse(sourcePath);

    const brotliCompress = createBrotliCompress();
    const source = createReadStream(sourcePath);
    const destination = createWriteStream(resolve(process.cwd(), destinationPath || directory, `${fileName}${fileExtension}.br`));

    await pipeline(source, brotliCompress, destination);}
    catch{
        console.log('Operation failed!!!');
    }
};

export default compress;