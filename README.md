<p align="center">
<img src="docs/jsarmorbanner.jpg" width="400">
</p>

<h1 align="center">JSArmor</h1>

<p align="center">
Advanced JavaScript Obfuscator for protecting source code.
</p>

<p align="center">

![npm](https://img.shields.io/npm/v/jsarmor?logo=npm)
![downloads](https://img.shields.io/npm/dm/jsarmor?logo=npm)
![stars](https://img.shields.io/github/stars/Swp-dev/JavascriptArmor?logo=github)
![license](https://img.shields.io/badge/license-JSArmor%20License-blue)

</p>

---

## Overview

**JSArmor** is a lightweight JavaScript obfuscator designed to protect source code from reverse engineering.

It transforms readable JavaScript into a more complex and difficult-to-analyze form while preserving runtime behavior.

The goal of JSArmor is to provide **simple CLI usage with strong code protection techniques.**
> The idea for this project was taken from  [Pyarmor](https://github.com/dashingsoft/pyarmor)

---

## Features

* String encryption
* Variable and function renaming
* Control flow obfuscation
* Dead code injection
* Unicode encoding
* Anti-debugging protection
* Self-defending runtime

These techniques increase the difficulty of reverse engineering and static analysis.

---

## Installation

Install globally using npm.

```bash
npm install jsarmor
```

---

## Quick Start

Obfuscate a JavaScript file:

```bash
jsarmor gen <main file> --user <your name>
Ex: jsarmor gen index.js --user Swp
```

Output will be generated in:

```
dist/obf.js
```

Run the protected file normally with Node.js.

```bash
node dist/obf.js
```

---

## Demo

### Before Obfuscation

```javascript
function greet(name) {
  const message = "Hello " + name
  console.log(message)
}

greet("world")
```

---

### After Obfuscation

```javascript
(function(_0x2a41c2,_0x3e8f7a){
const _0x5f3b=['log','Hello','world']
(function(_0x11b2c3,_0x58e0f1){
while(!![]){
try{
const _0x12c8d9=parseInt(_0x11b2c3())+parseInt(_0x11b2c3())
if(_0x12c8d9===_0x58e0f1)break
else _0x5f3b.push(_0x5f3b.shift())
}catch(_0x1c7b45){
_0x5f3b.push(_0x5f3b.shift())
}}
})(function(){return _0x5f3b.shift()},0x1234)

console[_0x5f3b[0]](_0x5f3b[1]+' '+_0x5f3b[2])
})()
```

---

## Project Structure Version 1.7

```
jsarmor
 ├ cli/
 │  └ index.js
 ├ core/
 │  ├ antidebug.js
 │  ├ antivm.js
 │  ├ beautifyGuard.js
 │  ├ controlflow.js
 │  ├ deadcode.js
 │  ├ junkcode.js
 │  ├ parser.js
 │  ├ rc4.js
 │  ├ renamer.js
 │  ├ runtime.js
 │  ├ selfdefend.js
 │  ├ stringArray.js
 │  ├ stringRuntime.js
 │  ├ unicode.js
 │   └ unicodeIdentifier.js 
 └ utils/
    ├ random.js
    └ waternark.js
```

---

## Roadmap

### Version 2 (unlock at ⭐ 15 stars)

Planned features:

* Multiple obfuscation levels (low / medium / high)
* Stronger string encryption
* CLI output customization
* Improved dead code generation

---

### Version 3 (unlock at ⭐ 100 stars)

Planned advanced protection:

* JavaScript VM-based obfuscation
* Advanced anti-debugging techniques
* Anti-tamper protection
* Runtime integrity checks
* Code virtualization
* Web Dashboard

---

## Contributing

Contributions are welcome.

You can help by:

* Reporting bugs
* Suggesting new obfuscation techniques
* Improving performance
* Opening pull requests

---

## Support

If you encounter issues or have questions:

Open an issue on GitHub in [here](https://github.com/Swp-dev/JavascriptArmor/issues).

# 🌐 Contact me

<p align="center">

<a href="https://discord.com/users/1234144932176855040">
<img src="https://img.shields.io/badge/Discord-5865F2?style=for-the-badge&logo=discord&logoColor=white"/>
</a>

<a href="https://tiktok.com/@niemtinthatxaxi">
<img src="https://img.shields.io/badge/TikTok-black?style=for-the-badge&logo=tiktok&logoColor=white"/>
</a>

<a href="https://github.com/Swp-dev">
<img src="https://img.shields.io/badge/GitHub-000?style=for-the-badge&logo=github"/>
</a>

<a href="https://nhavua.vercel.app">
<img src="https://img.shields.io/badge/Website-00C7B7?style=for-the-badge&logo=google-chrome&logoColor=white"/>
</a>

</p>

---

## License

[JSARMOR LICENSE](https://github.com/Swp-dev/JavascriptArmor?tab=License-1-ov-file)
---

<p align="center">
Built for developers who want to protect JavaScript code.
</p>
