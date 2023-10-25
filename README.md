# JAVASCRIPT UTILITIES 
> Implemented in typescript
---

## Prerequisites

``` sh
# Clone Repository
git clone git@github.com:hadigun007/project-utils-javascript.git

# Enter Folder
cd project-utils-javascript

# Create Folder
mkdir result key

# Instal npm package
npm install
```

## Utilities

List:
1. [Save JSON Object to ```.json``` file](#1-save-json-object-to-json-file)
2. [Generate Public and Private key pair](#2-generate-public-and-private-key-pair)
2. [Basic Http Auth](#3-basic-http-auth)

---

### 1. Save JSON Object to ```.json``` file.
Used to save json data object to ```.json``` file, common used is like to save important data, run this commed below.
``` sh
ts-node stringToJson.ts
```

### 2. Generate Public and Private key pair.
Used to generate private and public key pair and save as ```.pem``` fille on folder```/key```.
``` sh
ts-node genarete_key.ts
```

### 3. Basic Http Auth
Used to implement basic auth for http, basicly encoding ```username:password``` and and put it on headers ```headers.authorization``` and decode the base64 to string on the server side.
``` sh
ts-node http_basic_auth.ts
```





