const gulp = require('gulp');
const babel = require('gulp-babel');
const config = require('./babel.config');
 
gulp.task('default', () =>
    gulp.src('packages/bar/index.js')
        .pipe(babel(config))
        .pipe(gulp.dest('dist'))
);
