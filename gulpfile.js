var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();


gulp.task('watch',['browserSync','sass'],function() {
    gulp.watch('app/styles/*.scss',['sass']);
    gulp.watch('app/*.html',browserSync.reload);
});

gulp.task('browserSync',function() {
    browserSync.init({
        server: {
            baseDir: 'app'
        }
    })
});

gulp.task('sass',function() {
    return gulp.src('app/styles/styles.scss').pipe(sass()).pipe(gulp.dest('app/styles/css')).pipe(browserSync.reload({stream:true}))
});

gulp.task('default',function() {
    console.log('hello');
});
