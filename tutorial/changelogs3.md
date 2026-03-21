# JSarmor

[2.0.0] - 2026-03-21

### Major Changes

* Reworked string encryption system (RC4 + Base64 pipeline)
* Improved runtime string decoder for better stability
* Enhanced obfuscation reliability across Node.js environments

### Fixes

* Fixed corrupted string output after decryption
* Fixed encoding mismatch between RC4 and runtime
* Fixed invalid `boxen` borderColor caused by broken string decoding
* Fixed Buffer base64 decoding using incorrect encoding (`utf8` → `binary`)
* Fixed atob/Buffer inconsistency in Node vs Browser environments

### Improvements

* Added cache limit protection in string runtime to prevent memory leaks
* Improved anti-debug timing check (less false positives)
* Stabilized anti-VM detection (no longer crashes program)
* Cleaner control flow execution (while + switch optimization)

### Security

* Strengthened string obfuscation against static analysis
* Improved self-defend mechanism against tampering
* Added safer runtime checks (no infinite loop crash)

### Cleanup

* Removed redundant junk code duplicates
* Optimized deadcode injection patterns
* Reduced unnecessary console noise

