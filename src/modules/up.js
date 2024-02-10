import { resolve } from 'node:path';
export default async function up() {
    await process.chdir(resolve(process.cwd(), '..'));
}