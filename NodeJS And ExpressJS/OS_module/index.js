const os = require("os");

console.log(os.arch());   // x32 bit  or  x64 bit
console.log(os.freemem());  // Free memory available in bytes(B)
console.log(`${os.freemem()/1024/1024/1024} GB`);  // Free memory available in Gega Bytes(GB)
console.log(`${os.totalmem()/1024/1024/1024} GB`); // Total Memory in GB
console.log(os.hostname());  // To see the host name
console.log(os.platform());  // To see in which plateform you are working with {aix', 'darwin', 'freebsd','linux', 'openbsd', 'sunos', and 'win32'}
console.log(os.release());   // release date of your OS.
console.log(os.tmpdir());   // Temprary directory location
console.log(os.cpus());   // Returns an array of objects containing information about each logical CPU core.
console.log(os.endianness());  //Returns a string identifying the endianness of the CPU for which the Node.js binary was compiled. it can be (BE) Big endian (LE) Little endian
console.log(os.homedir());   // Return the path of home dir.
console.log(os.loadavg());  //Returns an array containing the 1, 5, and 15 minute load averages.The load average is a measure of system activity calculated by the operating system and expressed as a fractional number.The load average is a Unix-specific concept. On Windows, the return value is always [0, 0, 0].
console.log(os.machine());   // return the machine type of OS
console.log(os.type());   // return the type of the OS {'Linux' on Linux, 'Darwin' on macOS, and 'Windows_NT' on Windows.}
console.log(os.networkInterfaces());  // returns the all information about the network interface.
console.log(os.version());  // Specifies the version of the OS.
console.log(os.userInfo());   // returns the user info.