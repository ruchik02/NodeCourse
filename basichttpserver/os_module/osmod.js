const os=require('os');
console.log(os.arch()); // it will tell about the version
console.log(os.hostname()); // return hostname
console.log(os.platform()); // return platform
console.log(os.tmpdir());  // temp dir
console.log(os.version()); // version of os
console.log(os.type()); // type of os
console.log(os.cpus()); // about cpu
console.log(os.homedir()); // tell about homedir

const freeMemory=os.freemem();
// console.log(freeMemory);
console.log(`${freeMemory/1024/1024/1024}`);

const totalMemory=os.totalmem();
// console.log(freeMemory);
console.log(`${totalMemory/1024/1024/1024}`);
