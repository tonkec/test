/*
BASIC GULPFILE FOR COMPILING SASS, MINIFYING CSS
AND RELOADING PAGE WITH BROWSERSYNC

*/

var gulp        = require('gulp');
var Promise     = require('es6-promise').Promise;
var sass        = require('gulp-sass');
var rename      = require('gulp-rename');
var minifyCss   = require('gulp-minify-css');
var browserSync = require('browser-sync');
var reload      = browserSync.reload;

var src = {
    scss: 'sass/*.scss',
    css:  'css',
    html: '*.html'
};


gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "./"
    });

    gulp.watch(src.scss, ['sass']);
    gulp.watch(src.scss).on('change', reload);
    gulp.watch(src.html).on('change', reload);
});


// Compile sass into CSS
gulp.task('sass', function() {
    return gulp.src(src.scss)
        .pipe(sass({
            includePaths: ['scss'],
            onError: browserSync.notify
        }))
        .on('error', sass.logError)
        .pipe(minifyCss({compatibility: 'ie8'}))
        .pipe(rename("main.min.css"))
        .pipe(gulp.dest(src.css));
});

gulp.task('default', ['serve']);