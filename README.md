# copys2
## install
```
npm i copys2 --save
```
## use
```js
var copys2 = require('copys2')
var srcs = [
    'test1.txt',
    'test2.txt',
]
var dsts = [
    'test3.txt',
    'test4.txt',
]
copys2(srcs, dsts)
    .then(() => {
        console.log('ok')
    })
```