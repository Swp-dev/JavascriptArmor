export function selfDefend(){
return `

;(function(){

function guard(){
try{
const src = guard.toString()
if(!src.includes("guard")){
console.warn("Tamper detected")
}
}catch(e){}
}

setInterval(guard,5000)

})();

`;
}
