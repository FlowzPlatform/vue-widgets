var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var less = require('gulp-less');
var rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');

// Compile less
gulp.task('css', function () {
  gulp.src('../src/styles/index.less')
    .pipe(less())
    .pipe(autoprefixer({
      browsers: ['last 2 versions', 'ie > 8']
    }))
    .pipe(cleanCSS())
    .pipe(rename('vue-widgets.css'))
    .pipe(gulp.dest('../dist/styles'));
});

// Copy the font file
gulp.task('fonts', function () {
  gulp.src('../src/styles/common/font-awesome-4.7/fonts/*.*')
    .pipe(gulp.dest('../dist/styles/fonts'));
});

gulp.task('default', ['css', 'fonts']);
