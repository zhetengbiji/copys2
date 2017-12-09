var path = require('path')
var copys2 = require('../index')
var srcs = [
    path.join(__dirname, 'src', 'test1.txt'),
    path.join(__dirname, 'src', 'test2.txt'),
]
var dsts = [
    path.join(__dirname, 'dst', 'test3.txt'),
    path.join(__dirname, 'dst', 'test4.txt'),
]
copys2(srcs, dsts)
    .then(() => {
        console.log('ok')
    })