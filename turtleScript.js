import { readFile } from 'node:fs/promises'

let contents = String(await readFile('turtleFacts.txt'))
console.log('Här kommer lite fakta omm sköldpaddor:');
console.log(contents);
