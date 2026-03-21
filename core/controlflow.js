import traverseModule from "@babel/traverse";
import * as t from "@babel/types";

const traverse = traverseModule.default;

export function flattenControlFlow(ast){

traverse(ast,{

Function(path){

  // skip async / generator
  if(path.node.async || path.node.generator){
    return;
  }

  const body = path.node.body.body;

  if(!Array.isArray(body)) return;

  if(body.length < 4) return;

  const hoisted = [];

  body.forEach(stmt=>{

    if(t.isVariableDeclaration(stmt)){

      stmt.declarations.forEach(dec=>{
        hoisted.push(
          t.variableDeclarator(
            dec.id,
            null
          )
        );
      });

    }

  });

  const cases = [];

  body.forEach((stmt,i)=>{

    const statements = [];

    if(t.isVariableDeclaration(stmt)){

      stmt.declarations.forEach(dec=>{

        if(dec.init){

          statements.push(
            t.expressionStatement(
              t.assignmentExpression(
                "=",
                dec.id,
                dec.init
              )
            )
          );

        }

      });

    }else{

      statements.push(stmt);

    }

    // next state
    statements.push(
      t.expressionStatement(
        t.updateExpression(
          "++",
          t.identifier("_s")
        )
      )
    );

    statements.push(t.breakStatement());

    cases.push(
      t.switchCase(
        t.numericLiteral(i),
        statements
      )
    );

  });

  const whileLoop = t.whileStatement(
  t.binaryExpression("<", t.identifier("_s"), t.numericLiteral(body.length)),
  t.blockStatement([
    t.switchStatement(
      t.identifier("_s"),
      cases
    )
  ])
  );

  const newBody = [];

  // state variable
  newBody.push(
    t.variableDeclaration(
      "let",
      [
        t.variableDeclarator(
          t.identifier("_s"),
          t.numericLiteral(0)
        )
      ]
    )
  );

  // hoisted vars
  if(hoisted.length){

    newBody.push(
      t.variableDeclaration(
        "let",
        hoisted
      )
    );

  }

  newBody.push(whileLoop);

  path.node.body.body = newBody;

}
});

}
