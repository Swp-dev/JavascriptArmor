import traverseModule from "@babel/traverse";

const traverse = traverseModule.default;

function toUnicode(str){

  return str
    .split("")
    .map(c => "\\u" + c.charCodeAt(0).toString(16).padStart(4,"0"))
    .join("");

}

export function unicodeEscape(ast){

  traverse(ast,{
    StringLiteral(path){

      const val = path.node.value;
      if(val.includes("_解密")) return;

    }
  });

}
