var
  gulp = require('gulp'),
  babel = require('gulp-babel'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  rename = require('gulp-rename'),
  util = require('gulp-util'),
  csso = require('gulp-csso');

// ================
// JAVASCRIPT
// ================
// Concatenate all javascript files. Run through babel to compile javascripts.
gulp.task('concatJS', () => {
  return gulp.src(['public/app/app.module.js', 'public/app/app.routes.js', 'public/**/*.js', '!public/dist/*.js'])
    .pipe(babel({
      presets: ['env']
    }))
    .pipe(concat('app.js'))
    .pipe(gulp.dest('public/dist'));
});

// Minify concatenated javascript file.
gulp.task('minifyJS', ['concatJS'], () => {
  return gulp.src('public/dist/app.js')
    .pipe(uglify())
    .on("error", (err) => {
      util.log(util.colors.red("[Error]"), err.toString());
    })
    .pipe(rename('app.min.js'))
    .pipe(gulp.dest('public/dist'));
});

// ================
// CSS
// ================
// Concatenates styles.
gulp.task('concatCSS', () => {
  return gulp.src(['public/main.css', 'public/**/*.css', '!public/dist/*.css'])
    .pipe(concat('app.css'))
    .pipe(gulp.dest('public/dist'));
});

// Minfies styles.
gulp.task('minifyCSS', ['concatCSS'], () => {
  return gulp.src('public/dist/app.css')
    .pipe(csso())
    .on("error", (err) => {
      util.log(util.colors.red("[Error]"), err.toString());
    })
    .pipe(rename('app.min.css'))
    .pipe(gulp.dest('public/dist'));
});




// Watch for javascript, css changes.
gulp.task('watch', ['minifyJS'], () => {
  gulp.watch(['public/**/*.js'], ['minifyJS']);
  gulp.watch(['public/**/*.css'], ['minifyCSS']);
});

gulp.task('default', ['minifyJS', 'minifyCSS']);