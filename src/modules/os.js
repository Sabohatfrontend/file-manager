import { EOL, cpus, homedir, userInfo, arch } from 'os';

const os = async (value) => {
    try {
        switch (value.toLowerCase()) {
            case '--eol': console.log(JSON.stringify(EOL)); break;
            case '--cpus': console.table(cpus()); break;
            case '--homedir': console.log(homedir()); break;
            case '--username': {
                const { username: user } = userInfo();
                console.log(user);
                break;
            }
            case '--architecture': console.log(arch()); break;
            default: console.log('Operation failed!!!');
        }
    }
    catch {
        console.log('Operation failed!!!');
    }
}

export default os;