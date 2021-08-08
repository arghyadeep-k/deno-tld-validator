# TLD Validator

[![CI](https://github.com/arghyadeep-k/deno-tld-validator/actions/workflows/deno-ci.yml/badge.svg?branch=main)](https://github.com/arghyadeep-k/deno-tld-validator/actions/workflows/deno-ci.yml)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=arghyadeep-k_deno-tld-validator&metric=alert_status)](https://sonarcloud.io/dashboard?id=arghyadeep-k_deno-tld-validator)
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=arghyadeep-k_deno-tld-validator&metric=bugs)](https://sonarcloud.io/dashboard?id=arghyadeep-k_deno-tld-validator)
[![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=arghyadeep-k_deno-tld-validator&metric=reliability_rating)](https://sonarcloud.io/dashboard?id=arghyadeep-k_deno-tld-validator)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=arghyadeep-k_deno-tld-validator&metric=security_rating)](https://sonarcloud.io/dashboard?id=arghyadeep-k_deno-tld-validator)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=arghyadeep-k_deno-tld-validator&metric=sqale_rating)](https://sonarcloud.io/dashboard?id=arghyadeep-k_deno-tld-validator)
[![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=arghyadeep-k_deno-tld-validator&metric=vulnerabilities)](https://sonarcloud.io/dashboard?id=arghyadeep-k_deno-tld-validator)
[![Lines of Code](https://sonarcloud.io/api/project_badges/measure?project=arghyadeep-k_deno-tld-validator&metric=ncloc)](https://sonarcloud.io/dashboard?id=arghyadeep-k_deno-tld-validator)
[![Ko-Fi](https://img.shields.io/badge/buy%20me%20a%20coffee-donate-yellow.svg)](https://ko-fi.com/arghyadeep)

Deno 🦕 module to check if a Top Level Domain or TLD is valid.

## Installation

```typescript
import { validateTLD } from "https://deno.land/x/tld-validator/mod.ts";
```

## Parameter
- `tld: string` - Input tld, the validity of which is to be checked.

## Output
Returns `true` if the tld is valid else `false`.

## Usage

```typescript
import {validateTLD} from "https://deno.land/x/tld-validator/mod.ts";

const inputTLD = "photo";
const isValidTLD = validateTLD(inputTLD);

if(isValidTLD){
    console.log(`${inputTLD} is a valid TLD`);
}

else{
    console.log(`${inputTLD}` is an invalid TLD`);
}
```

## Reference

- https://data.iana.org/TLD/tlds-alpha-by-domain.txt

## License

This package is published under the MIT license. For more information, see the
accompanying LICENSE file.

<br>

---

<br>

### PS:

If you find this package useful, please consider giving a
[star](https://github.com/arghyadeep-k/deno-tld-validator) to this project on
Github.

And, if you are willing to [buy me a coffee](https://ko-fi.com/arghyadeep), that
would be awesome. :)

<a href='https://ko-fi.com/arghyadeep' target='_blank'><img height='36' style='border:0px;height:36px;' src='https://cdn.ko-fi.com/cdn/kofi1.png?v=2' border='0' alt='Buy Me a Coffee at ko-fi.com' /></a>


