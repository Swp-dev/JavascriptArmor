export function antiVM(){
return `

;(function(){

var s=(typeof navigator!="undefined"?navigator.userAgent:"node").toLowerCase()

if(
s.includes("vmware")||
s.includes("virtualbox")||
s.includes("qemu")
){
console.warn("VM detected"); 
}

})()

`
}
