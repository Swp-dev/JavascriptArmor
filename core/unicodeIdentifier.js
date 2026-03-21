import traverseModule from "@babel/traverse";

const traverse = traverseModule.default;

const reserved = new Set([
"require",
"module",
"exports",
"console",
"process",
"Buffer"
]);

const jp="あいうえおかきくけこ";
const kr="가나다라마바사";
const cn="的一是在不了有和";

const pool = jp + kr + cn;

function randChar(){
return pool[Math.floor(Math.random()*pool.length)];
}

function randomName(){

let name="_0x";

for(let i=0;i<4;i++){
name+=randChar();
}

return name;

}

export function unicodeIdentifiers(ast){

traverse(ast,{

Identifier(path){

    if(!path.isBindingIdentifier()) return;

    const name = path.node.name;

    if(name.length < 3) return;
    if(name.startsWith("_0x")) return;
    if(reserved.has(name)) return;

    const binding = path.scope.getBinding(name);

    if(!binding) return;
    if(binding.identifier !== path.node) return;

    if(binding.constantViolations.length > 0) return;

    const newName = randomName();

    try{
        path.scope.rename(name,newName);
    }catch{}

}

});

}
