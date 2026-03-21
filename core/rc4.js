export function rc4(key, str){

if(!key) throw new Error("RC4 key empty")

let s=[],j=0,x,res=""

for(let i=0;i<256;i++) s[i]=i

for(let i=0;i<256;i++){
  j=(j+s[i]+key.charCodeAt(i%key.length))&255
  x=s[i]
  s[i]=s[j]
  s[j]=x
}

let i=0
j=0

for(let y=0;y<str.length;y++){
  i=(i+1)&255
  j=(j+s[i])&255

  x=s[i]
  s[i]=s[j]
  s[j]=x

  let k=s[(s[i]+s[j])&255]

  res += String.fromCharCode(str.charCodeAt(y) ^ k)
}

return res
}
