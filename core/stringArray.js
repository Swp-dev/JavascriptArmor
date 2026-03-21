import traverseModule from "@babel/traverse";
import * as t from "@babel/types";

const traverse = traverseModule.default;

export function encodeStrings(ast){

const pool = [];
const map = new Map();

function rand(a,b){
return Math.floor(Math.random()*(b-a))+a;
}

function buildIndexExpression(index){

const mode = rand(0,3);

if(mode===0){

const key = rand(1,50);

return t.binaryExpression(
"^",
t.numericLiteral(index ^ key),
t.numericLiteral(key)
);

}

if(mode===1){

const key = rand(1,20);

return t.binaryExpression(
"-",
t.numericLiteral(index + key),
t.numericLiteral(key)
);

}

return t.numericLiteral(index);

}

function getIndex(value){

if(map.has(value)){
return map.get(value);
}

const index = pool.length;

pool.push(value);

map.set(value,index);

return index;

}

traverse(ast,{

StringLiteral(path){

const value = path.node.value;

if(!value) return;

/* skip directives */

if(path.parent.type === "Directive") return;

if(value === "use strict") return;

/* skip require */

if(
path.parent.type === "CallExpression" &&
path.parent.callee &&
path.parent.callee.name === "require"
){
return;
}

/* skip import */

if(path.parent.type === "ImportDeclaration") return;

/* skip object key */

if(
path.parent.type === "ObjectProperty" &&
path.parent.key === path.node
){
return;
}

/* skip member property */

if(
path.parent.type === "MemberExpression" &&
path.parent.property === path.node
){
return;
}

/* skip template */

if(path.parent.type === "TemplateLiteral") return;

/* skip inside decrypt runtime */

if(path.findParent(p => 
p.isCallExpression() &&
p.node.callee &&
p.node.callee.name === "_解密"
)){
return;
}

const index = getIndex(value);

const expr = buildIndexExpression(index);

path.replaceWith(
t.callExpression(
t.identifier("_解密"),
[expr]
)
);

}

});

return pool;

}
