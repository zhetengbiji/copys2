var gulp = require('gulp')
var rename = require('gulp-rename')
var sequence = require('gulp-sequence')
var path = require('path')

function copy(src, dst, cb) {
    var task = 'copy' + Date.now()
    gulp.task(task, () => {
        return gulp.src(src)
            .pipe(rename({
                basename: path.basename(dst, path.extname(dst))
            }))
            .pipe(gulp.dest(path.dirname(dst)))
    })
    sequence(task)(cb)
}

function copys2(srcs, dsts, cb) {
    if(srcs.length !== dsts.length) {
        throw new Error('路径数组不相等')
    }
    var i = 0;
    var MAX = srcs.length;
    function end() {
        i++;
        if(i === MAX && typeof cb === 'function') {
            cb()
        }
    }
    srcs.forEach((src, i) => {
        copy(src, dsts[i], end)
    }, this)
}

module.exports = copys2