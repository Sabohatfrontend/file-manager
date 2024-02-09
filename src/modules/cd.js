import { resolve, parse } from 'node:path';
import up from './up.js';
export default async function cd(path) {
    await process.chdir(resolve(process.cwd(), path));
}