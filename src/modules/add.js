import { writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const add = async (newFileName) => {
    try {
        const promise = writeFile(resolve(process.cwd(), newFileName), '', { flag: 'wx' });
        await promise;
    } catch {
        console.log('Operation failed!')
    }
};

export default add;