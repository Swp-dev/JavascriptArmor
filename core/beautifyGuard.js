export function antiBeautify(){
return `

;(function(){

const start=Date.now()
debugger
const end=Date.now()

if(end-start>1000){
console.warn("Debug detected")
}

})();

`;
}
