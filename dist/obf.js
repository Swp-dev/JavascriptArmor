#!/usr/bin/env node


/*
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

__OWN__ = "_kingktn - Trương Nhật Bảo Nam"
__OBF__ = "JSarmor"
__USR__ = " - Requests Protect"
__VER__ = "2.0.0"
__DATE__ = "2026-03-22T08:52:18.416Z"

Discord: _kingktn | Ig: _kingktn | https://eboy.asia/p.n
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
*/



;(function(){
setInterval(function(){
try{
debugger;
}catch(e){}
},3000) 
})();



;(function(){

const start=Date.now()
debugger
const end=Date.now()

if(end-start>1000){
console.warn("Debug detected")
}

})();



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



var _池 = ["6lL2/V9QCbzFhE2M","aA==","zw==","pnHl/llRSKvIVB6myEaLk86M5njCUvllcQ==","pnvj8FBMBryAsB7y7NPJ3N2D92vDDrI=","rXvj4VFG","tn/75l0=","snvn/EtMHLTSjg==","pHvk8EpMGK/JmBk=","rnH59g==","s2r24UsFOA==","pnHl+EsFVK8=","t3/j8FBAGqiAyjc=","r27y/RhsG6jVkgSmmbg=","rH/59E1ED76Aysw=","snvn/Bh2AaHF10pg","wFXV","o3H550pMCq7UmAX1hJvD8YRZ","snv79llWDaiAyvc=","s2v14FtXAbnFhQSmmeY=","rnvj5FdXA/uc5w==","o2zy8kxADA==","rH/k5xhwGL/BgxI=","knHi/Vw=","g2f2/Q==","h2zy9lY=","6ln+53BQCvvhpz6m4dTZk8vo","s2r2501WUg==","rXvk4FlCDeE=","6l/H2hhXCa/F1xvvyc/f3Nya4G+IRPlxMA==","rHf6+kwfSO2Q1wXj1dPOj82RrGKCVe41eKJtTbzr+lmDOPLQcuQ=","tW3ys1kFL7LUvwLkhNLEl9yMo36CAPV7fb96DL/7uFmDNrvlDA==","6kzy41dWAa/PhQ6mysnf3N+N9mSJDg==","o3by8FMFB6zOkgWp1sPbk5mE7HiAQeg7","rnvj5FdXA/vFhQXp1pw=","6kvk8l9AUtE=","jnHz9hhEBrrMjg3jiszY3NaV7W+fD+5wbqIV"];
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
j=(j+s[k]+"utw4b9zwe8".charCodeAt(k%"utw4b9zwe8".length))%256;
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

var _junk5=Math.random()*277;
if(_junk5>99999){
console.log(_junk5)
}

var _f={a:1,b:2};Object.keys(_f)
Boolean(Math.random())

var _junk6=Math.random()*410;
if(_junk6>99999){
console.log(_junk6)
}


var _junk5=Math.random()*277;
if(_junk5>99999){
console.log(_junk5)
}

Math.floor(Math.random()*999)
var _e='abc'.split('').reverse().join('')
try{JSON.parse('x')}catch(e){}

var _junk19=Math.random()*111;
if(_junk19>99999){
console.log(_junk19)
}


var _junk16=Math.random()*824;
if(_junk16>99999){
console.log(_junk16)
}



var _假=Math.random()

function _伪(){
try{
return Function("return 1+1")()
}catch(e){}
}

if(_假>2){
console.log(_伪())
}

const _0xかえあ和 = require("axios");
const _0x有あうあ = require("chalk").default;
const _0xいく라사 = require("ora").default;
const _0x바了和け = require("boxen").default;
const _0x是え사お = require("cli-table3");
const _0x바바こ나 = require("gradient-string");
function _0x他すlrzh(_0x나一라け) {
  let _s = 0;
  let _0xbいmたl国, result;
  while (_s < 4) {
    switch (_s) {
      case 0:
        _0xbいmたl国 = Object.values(_0x나一라け).reduce((a, b) => a + b, 0);
        _s++;
        break;
      case 1:
        result = _解密(0);
        _s++;
        break;
      case 2:
        for (const _0x不的자s的し in _0x나一라け) {
          const _0xつ中き以要h = (_0x나一라け[_0x不的자s的し] / _0xbいmたl国 * 100).toFixed(1);
          const _0xdてあ아和す = Math.round(_0xつ中き以要h / 5);
          const _0xg我t카차b = _解密(16 ^ 17).repeat(_0xdてあ아和す);
          result += `${_0x有あうあ.cyan(_0x不的자s的し.padEnd(10))} ${_0xg我t카차b} ${_0xつ中き以要h}%\n`;
        }
        _s++;
        break;
      case 3:
        return result;
        _s++;
        break;
    }
  }
}
async function _0x마nさ사这x(_0x有えき了) {
  if (5 > 1000) {
    console.log("dead_9631");
  }
  if (!_0x有えき了 || !_0x有えき了.includes(_解密(5 - 3))) {
    if (22 > 1000) {
      console.log("dead_2205");
    }
    console.log(_0x有あうあ.red(_解密(46 ^ 45)));
    process.exit(1);
  }
  const _0x라아あくせz = _0xいく라사(_解密(38 ^ 34)).start();
  try {
    if (84 > 1000) {
      console.log("dead_3527");
    }
    const _0xか大き国jう = await _0xかえあ和.get(`https://api.github.com/repos/${_0x有えき了}`);
    const _0x是えと不さか = _0xか大き国jう.data;
    let contributors = 0;
    let releases = 0;
    let languages = {};
    try {
      if (95 > 1000) {
        if (28 > 1000) {
          if (30 > 1000) {
            console.log("dead_5251");
          }
          console.log("dead_2211");
        }
        console.log("dead_5152");
      }
      const c = await _0xかえあ和.get(`https://api.github.com/repos/${_0x有えき了}/contributors`);
      contributors = c.data.length;
    } catch {}
    try {
      const r = await _0xかえあ和.get(`https://api.github.com/repos/${_0x有えき了}/releases`);
      releases = r.data.length;
    } catch {
      if (20 > 1000) {
        if (42 > 1000) {
          if (27 > 1000) {
            console.log("dead_5272");
          }
          console.log("dead_2284");
        }
        console.log("dead_9017");
      }
    }
    try {
      const l = await _0xかえあ和.get(`https://api.github.com/repos/${_0x有えき了}/languages`);
      languages = l.data;
    } catch {}
    _0x라아あくせz.stop();
    const _0xux마e个k = new _0x是え사お({
      head: [_0x有あうあ.cyan(_解密(15 ^ 10)), _0x有あうあ.cyan(_解密(19 - 13))],
      colWidths: [22, 40]
    });
    _0xux마e个k.push([_解密(30 ^ 25), _0x有あうあ.yellow(_0x是えと不さか.full_name)], [_解密(8), _0x是えと不さか.description || _解密(9)], [_解密(17 - 7), _0x是えと不さか.stargazers_count], [_解密(11), _0x是えと不さか.forks_count], [_解密(34 ^ 46), _0x是えと不さか.watchers_count], [_解密(22 - 9), _0x是えと不さか.open_issues_count], [_解密(27 - 13), _0x是えと不さか.language], [_解密(15), _0x是えと不さか.size + _解密(16)], [_解密(18 ^ 3), contributors], [_解密(33 - 15), releases], [_解密(26 ^ 9), _0x是えと不さか.subscribers_count], [_解密(20), _0x是えと不さか.network_count], [_解密(55 ^ 34), new Date(_0x是えと不さか.created_at).toDateString()], [_解密(31 - 9), new Date(_0x是えと不さか.updated_at).toDateString()]);
    const _0x바う大a바l = _0x바바こ나.pastel.multiline(`
      GitHub Repository Analyzer
        `);
    console.log(_0x바う大a바l);
    console.log(_0x바了和け(_0xux마e个k.toString(), {
      padding: 1,
      margin: 1,
      borderStyle: _解密(38 - 15),
      borderColor: _解密(24)
    }));
    if (Object.keys(languages).length > 0) {
      if (19 > 1000) {
        if (42 > 1000) {
          if (66 > 1000) {
            console.log("dead_6981");
          }
          console.log("dead_7576");
        }
        console.log("dead_2946");
      }
      const _0xち他h사자以 = _0x他すlrzh(languages);
      console.log(_0x바了和け(_0xち他h사자以, {
        padding: 1,
        borderStyle: _解密(23),
        borderColor: _解密(25)
      }));
    }
  } catch (_0xkb他m사다) {
    _0x라아あくせz.stop();
    console.log(_0x有あうあ.red(_解密(42 - 16)));
    if (_0xkb他m사다.response) {
      console.log(_0x有あうあ.yellow(_解密(45 - 18)), _0xkb他m사다.response.status);
      if (_0xkb他m사다.response.data && _0xkb他m사다.response.data.message) {
        console.log(_0x有あうあ.red(_解密(28)), _0xkb他m사다.response.data.message);
      }
      if (_0xkb他m사다.response.status === 403) {
        if (4 > 1000) {
          if (16 > 1000) {
            console.log("dead_4852");
          }
          console.log("dead_1114");
        }
        console.log(_0x有あうあ.red(_解密(29)));
        console.log(_0x有あうあ.gray(_解密(30)));
        console.log(_0x有あうあ.gray(_解密(31)));
      }
      if (_0xkb他m사다.response.status === 404) {
        if (10 > 1000) {
          console.log("dead_3650");
        }
        console.log(_0x有あうあ.red(_解密(12 ^ 44)));
        console.log(_0x有あうあ.gray(_解密(33)));
      }
    } else {
      if (71 > 1000) {
        console.log("dead_8651");
      }
      console.log(_0x有あうあ.red(_解密(52 ^ 22)), _0xkb他m사다.message);
    }
  }
}
const _0xう了うえ = process.argv[2];
if (!_0xう了うえ) {
  if (72 > 1000) {
    console.log("dead_6273");
  }
  console.log(_0x有あうあ.yellow(_解密(43 ^ 8)));
  console.log(_解密(36));
  process.exit(0);
}
_0x마nさ사这x(_0xう了うえ);
