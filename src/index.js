import * as readline from 'node:readline';
import { stdin as input, stdout as output } from 'node:process';
import { handleCommand, getCurrentDir } from './modules/index.js';

const args = process.argv;

const userName = args
    .slice(2)
    .find((value) => value.indexOf('--username') === 0)
    .replace('--username=', '');

console.log(`Welcome to the File Manager, ${userName || 'stranger'}!`);
getCurrentDir();

const rl = readline.createInterface({ input, output });

rl.on('line', (line) => {
    if (line === '.exit') rl.close();
    else handleCommand(line);
})
    .on('history', (history) => { })
    .on('SIGINT', () => {
        rl.close();
    })
    .on('close', () => {
        console.log(`Thank you for using File Manager, ${userName || 'stranger'}, goodbye!`);
    })