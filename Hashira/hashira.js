const fs = require('fs');

function baseToBigInt(value, base) {
    const digits = "0123456789abcdefghijklmnopqrstuvwxyz";
    const b = BigInt(base);
    let result = 0n;
    for (const ch of value.toLowerCase()) {
        const digit = BigInt(digits.indexOf(ch));
        if (digit < 0n || digit >= b) {
            throw new Error(`Invalid digit '${ch}' for base ${base}`);
        }
        result = result * b + digit;
    }
    return result;
}

// Read JSON file
const data = fs.readFileSync('input.json');
const obj = JSON.parse(data);

// Collect roots
let roots = [];
for (const key in obj) {
    if (key === "keys") continue;
    const entry = obj[key];
    const base = parseInt(entry.base);
    const value = entry.value;
    roots.push(baseToBigInt(value, base));
}

if (roots.length < 1) {
    console.error("No roots found in JSON.");
    process.exit(1);
}

const n = roots.length;
let product = 1n;
for (let r of roots) product *= r;

// Constant term
const c = ((-1n) ** BigInt(n)) * product;

console.log(`Polynomial degree = ${n}`);
console.log(`Roots = ${roots.map(r => r.toString()).join(", ")}`);
console.log(`Constant term (c) = ${c.toString()}`);
