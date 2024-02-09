import { resolve, parse } from 'node:path';
import up from './up.js';
export default async function cd(path) {
    let i = 0;
    const rootPath = parse(process.cwd()).root;
    const rootPathLc = rootPath.replace('\\', '').toLowerCase();
    if (path.toLowerCase() === rootPathLc) {
        while (rootPath !== process.cwd().toLowerCase()) {
            up();
        }
    }
    else await process.chdir(resolve(process.cwd(), path));
}