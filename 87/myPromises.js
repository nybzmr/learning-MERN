// Promises
import fs from 'fs/promises'

let a = await fs.readFile("nyb.txt")
console.log(a.toString())