export function injectAntiDebug(){
return `

;(function(){
setInterval(function(){
try{
debugger;
}catch(e){}
},3000) 
})();

`;
}
