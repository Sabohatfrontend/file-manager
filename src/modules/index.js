import getCurrentDir from './getCurrentDir.js';
import up from './up.js';
import cd from './cd.js';
import ls from './ls.js';
import cat from './cat.js';
import rn from './rn.js';
import cp from './cp.js';
import add from './add.js';
import rm from './rm.js';
import mv from './mv.js';
import os from './os.js';
import hash from './hash.js';

import * as readline from 'node:readline';
import compress from './compress.js';
import decompress from './decompress.js';

const handleCommand = (fullCommand) => {
    const [command, ...commandArgs] = fullCommand.toLowerCase().trim().split(' ');
    switch (command) {
        case 'up': up(); break;
        case 'cd': cd(commandArgs[0]); break;
        case 'ls': ls(); break;
        case 'cat': cat(commandArgs[0]); break;
        case 'add': add(commandArgs[0]); break;
        case 'rn': rn(commandArgs[0], commandArgs[1]); break;
        case 'cp': cp(commandArgs[0], commandArgs[1]); break;
        case 'mv': mv(commandArgs[0], commandArgs[1]); break;
        case 'rm': rm(commandArgs[0]); break;
        case 'os': os(commandArgs[0]); break;
        case 'hash': hash(commandArgs[0]); break;
        case 'compress': compress(commandArgs[0], commandArgs[1]); break;
        case 'decompress': decompress(commandArgs[0], commandArgs[1]); break;
        default: console.log('Invalid input');
    }
    getCurrentDir();
}

export { handleCommand, getCurrentDir };