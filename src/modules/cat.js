import { resolve } from 'node:path';
import { existsSync } from 'node:fs';
import { finished } from 'node:stream/promises';
import { createReadStream } from 'node:fs';

const cat = async (path) => {
    const filePath = resolve(process.cwd(), path);
    if (!existsSync(filePath)) {
        console.log('Invalid input');
    }
    else {
        const rs = createReadStream(filePath);
        rs.pipe(process.stdout);
        try {
            await finished(rs);
        }
        catch {
            console.log('Operation failed');
        }
        rs.resume();
    }
}

export default cat;