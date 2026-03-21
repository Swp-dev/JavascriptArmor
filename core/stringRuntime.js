import { rc4 } from "./rc4.js"

export function buildStringRuntime(pool){

const key = Math.random().toString(36).slice(2)

const encrypted = pool.map(s=>{
  const enc = rc4(key, s)
  return Buffer.from(enc, "binary").toString("base64")
})

return `

var _池 = ${JSON.stringify(encrypted)};
var _缓存 = {};

function _解密(i){

if(_缓存[i]) return _缓存[i];

var b64 = _池[i];

var data = typeof atob === "function"
? atob(b64)
: Buffer.from(b64,"base64").toString("binary");

var s=[],j=0,x,res="";

for(var k=0;k<256;k++) s[k]=k;

for(k=0;k<256;k++){
j=(j+s[k]+"${key}".charCodeAt(k%"${key}".length))%256;
x=s[k];s[k]=s[j];s[j]=x;
}

k=0;j=0;

for(var y=0;y<data.length;y++){

k=(k+1)%256;
j=(j+s[k])%256;

x=s[k];s[k]=s[j];s[j]=x;

var t=s[(s[k]+s[j])%256];

res+=String.fromCharCode(data.charCodeAt(y)^t);

}

_缓存[i]=res;
return res;

}
`
}
