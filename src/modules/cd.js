import { resolve, parse } from 'node:path';
import up from './up.js';
export default async function cd(path) {
    try {
        await process.chdir(resolve(process.cwd(), path));
    }
    catch {
        console.log('Operation failed');
    }
}