import { readdir } from 'node:fs/promises';

const ls = async () => {
    const files = await readdir(process.cwd(), { withFileTypes: true });

    const folderInfo = files
        .map((file) => {
            return {
                fname: file.name,
                type: file.isFile() ? 'file' : 'directory',
            };
        })
        .sort((a, b) => a.type.localeCompare(b.type) || a.fname.localeCompare(b.fname));

    console.table(folderInfo);
};

export default ls;