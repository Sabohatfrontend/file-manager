import { unlink } from 'node:fs';
import { resolve } from 'node:path';

const rm = async (file) => {
    const path = resolve(process.cwd(), file);
    await unlink(path, (err) => {
        if (err) console.log('Operation failed!');
    })
}

export default rm;