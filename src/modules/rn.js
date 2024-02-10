import { rename } from 'node:fs';

const rn = (filename, newFilename) => {
    rename(filename, newFilename, (err) => {
        if (err) {
            console.log('Operation failed');
        }
    });
}

export default rn;