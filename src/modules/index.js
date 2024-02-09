import getCurrentDir from './getCurrentDir.js';
import up from './up.js';
import cd from './cd.js';
import ls from './ls.js';
import cat from './cat.js';

const handleCommand = (fullCommand) => {
    const [command, ...commandArgs] = fullCommand.toLowerCase().trim().split(' ');
    switch (command) {
        case 'up': up(); break;
        case 'cd': cd(commandArgs[0]); break;
        case 'ls': ls(); break;
        case 'cat': cat(commandArgs[0]); break;
        case 'add': console.log('add'); break;
        case 'rn': console.log('rn'); break;
        case 'cp': console.log('cp'); break;
        case 'mv': console.log('mv'); break;
        case 'rm': console.log('rm'); break;
        case 'os': console.log('os'); break;
        case 'hash': console.log('hash'); break;
        case 'compress': console.log('compress'); break;
        case 'decompress': console.log('decompress'); break;
        default: break;
    }
    getCurrentDir();
}

export { handleCommand, getCurrentDir };