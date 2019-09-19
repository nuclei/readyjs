# Readyjs
> A tiny, modern, on-document-ready that runs any given function(s) once the document is ready or immediately if the document is ready already.

## Installation
```
npm install readyjs --save
```

## Usage
You can either use the es6 module `dist/ready.js` or include the `iffe` from `dist/ready.iffe.js` straight into your build step or load it into your code.

## API

```javascript
// importing via es6 module syntax
import { readyjs } from '../node_modules/readyjs/dist/ready.js'
// used readyjs
readyjs(function(){
    // your code here
});

// when using the IIFE
readyjs.ready(function(){
    // your code here
});
```
