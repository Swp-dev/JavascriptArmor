import { rc4 } from "./rc4.js"

export function buildStringRuntime(pool){

const key=Math.random().toString(36).slice(2)

const encrypted=pool.map(s=>{

const enc=rc4(key,s)

return Buffer.from(enc).toString("base64")

})

return `

var _STRINGS=${JSON.stringify(encrypted)};

(function(){

function rc4(k,str){

var s=[],j=0,x,res="";

for(var i=0;i<256;i++)s[i]=i;

for(i=0;i<256;i++){

j=(j+s[i]+k.charCodeAt(i%k.length))%256;

x=s[i];s[i]=s[j];s[j]=x;

}

i=0;j=0;

for(var y=0;y<str.length;y++){

i=(i+1)%256;
j=(j+s[i])%256;

x=s[i];s[i]=s[j];s[j]=x;

var k2=s[(s[i]+s[j])%256];

res+=String.fromCharCode(str.charCodeAt(y)^k2);

}

return res;

}

for(var i=0;i<_STRINGS.length;i++){

var data=atob(_STRINGS[i])

_STRINGS[i]=rc4("${key}",data)

}

})();

`

}
