// import { cwd } from 'node:process';

export default function getCurrentDir() {
    console.log(`You are currently in ${process.cwd()}`);
}