import { open, writeFile } from 'node:fs/promises';
/* main.js */

// BIOS
// 512 bytes on disk
// store at 0xfc00

// magic string
//

// 1. initialize stack
// sp
// 16 bit register
// copy value to AX
// copy from AX to SP
// copy2ax()
// copy2sp()

// 2. print the message
// copy AX, BX and maybe CX
// execute interrupt
// copy2ax,bx,cx
// biosinterrupt

// halt the computer
// 1. disable interrupts
// 2. issue halt intr
// 3. infinite loop

// bbbbbbbb aaaaaaaa
// 01011100 01011100
// 11111111 00000000
//          01011100

// >>8 


let ctors;
let rev;
let combine;
let save2file;
let message;

message = 'Hello from JS!';

save2file = async (msg,filename) => {
    let fd;
    let buf;
    let ret;

    fd = await open(filename, 'w', 0o644);
    if (!fd)
        throw new Error('Unable to open file');

    buf = mkos(msg);
    ret = await writeFile(fd, buf, {encoding: 'ascii'});
    fd.close(fd);
    if (ret !== undefined) {
        throw new Error('Unable to write to file');
    }

    return true;
}

combine = (a,b) =>
    ((a&0xff) << 8)
    | (b&0xff);

rev = val => {
    let a, b;
    let mask;
    let i;

    mask = 0xff;
    a = (val & mask);
    mask = 0xff00;
    i = (val & mask);
    b = (i >>8);

    return String.fromCharCode(a)
        .concat(String.fromCharCode(b));

}

// 0xfbff
// eb fc
ctors = {
    copy2ax: val => "\xb8" + rev(val),
    copy2bx: val => "\xbb" + rev(val),
    copy2cx: val => "\xb9" + rev(val),
    copy2sp: () => "\x89\xc4",
    biosinterrupt: () => "\xcd\x10",
    interruptoff: () => "\xfa",
    halt: () => "\x90\xf4",
    jmp: () => "\xeb\xfc",
    padding: amt => "\x90".repeat(amt),
    magic: () => rev(0xaa55),
    print: str => str
        .concat('\r\n')
        .split('')
        .map(x => ctors.copy2ax(combine(0x0e, x.charCodeAt(0)))
            .concat(ctors.biosinterrupt()))
        .join('')
};

let mkos;
let part1;
let part2;
let exitval;
let file;

mkos = msg =>
    part1(msg)
    + part2((510-part1(msg).length));

part1 = msg =>
    ctors.copy2ax(0xfbff)
    + ctors.copy2sp()
    + ctors.copy2bx(0x0000)
    + ctors.print(msg)
    + ctors.halt()
    + ctors.jmp();

part2 = amt =>
    ctors.padding(amt)
    + ctors.magic();


file = process.argv[2];
if (!file) {
    console.error('Usage: ' + process.argv[1], '<filename>');
    process.exit(1);
}

exitval = await save2file(message,file);
if (exitval)
    console.log('ok');
else
    console.error('failed');