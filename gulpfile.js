var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();


gulp.task('default', function() {

});

gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "./public"
    });

    gulp.watch("sass/*.scss", ['sass']);
    gulp.watch("./**/*.html").on('change', browserSync.reload);
});

gulp.task('sass', function() {
    return gulp.src("./sass/**/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("./public"))
        .pipe(browserSync.stream());
});
