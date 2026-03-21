import traverseModule from "@babel/traverse";
import * as t from "@babel/types";

const traverse = traverseModule.default;

const reserved = new Set([
"require",
"module",
"exports",
"__dirname",
"__filename",
"console",
"process",
"Buffer",
"setTimeout",
"setInterval"
]);

/* multilingual identifier */

const jp = "あいうえおかきくけこさしすせそたちつてと";
const kr = "가나다라마바사아자차카타파하";
const cn = "的一是在不了有和人这中大为上个国我以要他";
const latin = "abcdefghijklmnopqrstuvwxyz";

const pool = jp + kr + cn + latin;

function randomName(){
let name="_0x";
for(let i=0;i<6;i++){
name+=pool[Math.floor(Math.random()*pool.length)];
}
return name;
}

export function renameVariables(ast){

const renamed = new Map();

traverse(ast,{

Identifier(path){

// chỉ rename binding identifier
if(!path.isBindingIdentifier()) return;

const name = path.node.name;

// skip reserved
if(reserved.has(name)) return;

// skip already obfuscated
if(name.startsWith("_0x")) return;

// skip short names (tránh phá scope nhỏ)
if(name.length < 3) return;

const binding = path.scope.getBinding(name);
if(!binding) return;

// skip params
if(binding.kind === "param") return;

// skip global scope
if(!binding.scope.parent) return;

// skip mutated variables (tránh break logic)
if(binding.constantViolations && binding.constantViolations.length > 0){
    return;
}

// skip if already renamed
if(renamed.has(binding)){
    return;
}

const newName = randomName();

try{
path.scope.rename(name,newName);
renamed.set(binding,newName);
}catch{}

},

FunctionDeclaration(path){

if(!path.node.id) return;

const name = path.node.id.name;

if(reserved.has(name)) return;
if(name.startsWith("_0x")) return;

const binding = path.scope.getBinding(name);
if(!binding) return;

if(binding.constantViolations && binding.constantViolations.length > 0){
    return;
}

if(renamed.has(binding)) return;

const newName = randomName();

try{
path.scope.rename(name,newName);
renamed.set(binding,newName);
}catch{}

},

ClassDeclaration(path){

if(!path.node.id) return;

const name = path.node.id.name;

if(reserved.has(name)) return;
if(name.startsWith("_0x")) return;

const binding = path.scope.getBinding(name);
if(!binding) return;

if(binding.constantViolations && binding.constantViolations.length > 0){
    return;
}

if(renamed.has(binding)) return;

const newName = randomName();

try{
path.scope.rename(name,newName);
renamed.set(binding,newName);
}catch{}

}

});

}

}
});

}
