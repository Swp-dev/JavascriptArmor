#!/usr/bin/env node

import fs from "fs";
import path from "path";
import chalk from "chalk";
import gradient from "gradient-string";
import cliProgress from "cli-progress";
import generate from "@babel/generator";

import { parseCode } from "../core/parser.js";
import { renameVariables } from "../core/renamer.js";
import { encodeStrings } from "../core/stringArray.js";
import { flattenControlFlow } from "../core/controlflow.js";
import { unicodeEscape } from "../core/unicode.js";
import { generateJunk } from "../core/junkcode.js";

import { injectDeadCode, generateDeadRuntime } from "../core/deadcode.js";

import { injectAntiDebug } from "../core/antidebug.js";
import { antiBeautify } from "../core/beautifyGuard.js";
import { selfDefend } from "../core/selfdefend.js";
import { unicodeIdentifiers } from "../core/unicodeIdentifier.js";
import { buildStringRuntime } from "../core/stringRuntime.js";
import { antiVM } from "../core/antivm.js";

import { watermark } from "../utils/watermark.js";

const neon = gradient(["#00ffff","#ff00ff","#00ff9f"]);

try{

const args = process.argv.slice(2);

const command = args[0];
const file = args[1];

let outputName = "obf.js";

const outIndex = args.indexOf("-o");

if(outIndex !== -1 && args[outIndex+1]){
outputName = args[outIndex+1];
}

let user = "";

const userIndex = args.indexOf("--user");

if(userIndex !== -1 && args[userIndex+1]){
user = args[userIndex+1];
}

if(!command || command === "help"){

console.log(neon(`
JSArmor - JavaScript Obfuscator

Usage:

jsarmor gen input.js
jsarmor gen input.js -o output.js

`));

process.exit(0);

}

if(command !== "gen"){

console.log(chalk.red("Unknown command"));
console.log("Use: jsarmor gen input.js");

process.exit(1);

}

if(!file){

console.log(chalk.red("Please provide input file"));
console.log("Usage: jsarmor gen input.js");

process.exit(1);

}

if(!fs.existsSync(file)){
console.log(chalk.red(`File not found: ${file}`));
process.exit(1);
}

let code = fs.readFileSync(file,"utf8");

let shebang = "";

if(code.startsWith("#!")){
const end = code.indexOf("\n");
shebang = code.slice(0,end);
code = code.slice(end);
}

console.log(
neon(`┌──────────────────────────────┐
│       JSArmor Version1.7     │
└──────────────────────────────┘`)
);
const bar = new cliProgress.SingleBar({
format:"progress [{bar}] {percentage}% | {value}/{total}",
barCompleteChar:"█",
barIncompleteChar:"░"
});

bar.start(7,0);

const ast = parseCode(code);
bar.increment();

renameVariables(ast);
bar.increment();

unicodeIdentifiers(ast);
bar.increment();

const pool = encodeStrings(ast);
bar.increment();

/* dead code transform */
injectDeadCode(ast);
bar.increment();

flattenControlFlow(ast);
bar.increment();

unicodeEscape(ast);
bar.increment();

bar.stop();

const output = generate.default(ast,{
jsescOption:{
minimal:true
}
}).code;

const runtimeJunk = generateDeadRuntime();

const final =
(shebang ? shebang + "\n" : "") +
watermark(user) +
injectAntiDebug() +
antiBeautify() +
antiVM() +
selfDefend() +
buildStringRuntime(pool) +
runtimeJunk +
generateJunk() +
output;

const distDir = path.join(process.cwd(),"dist");

if(!fs.existsSync(distDir)){
fs.mkdirSync(distDir,{recursive:true});
}

const outFile = path.join(distDir, outputName);

fs.writeFileSync(outFile,final);

console.log();
console.log(chalk.green("✔ Parsing AST"));
console.log(chalk.green("✔ Variables renamed"));
console.log(chalk.green("✔ Strings encoded"));
console.log(chalk.green("✔ Dead code injected"));
console.log(chalk.green("✔ Control flow flattened"));
console.log(chalk.green("✔ Unicode escape applied"));
console.log();
console.log(chalk.bold.green("✔ Obfuscation Complete"));
console.log(chalk.cyan(`Output: ${outFile}`));

const originalSize = code.length;
const newSize = final.length;

console.log(
chalk.yellow(
`Size: ${(originalSize/1024).toFixed(2)} KB → ${(newSize/1024).toFixed(2)} KB`
)
);

}catch(err){

console.log(chalk.red("Obfuscation failed"));
console.error(err);

}
