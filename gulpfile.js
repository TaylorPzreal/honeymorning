const gulp = require('gulp');
const del = require('del');
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');
const gulpCopy = require('gulp-copy');
const rename = require('gulp-rename');
const sequence = require('gulp-sequence');

gulp.task('del-dist', async () => {
  return await del(['dist/*']);
});

gulp.task('build-scss', async () => {
  return await gulp
    .src('./src/primary-style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('copy-scss', async () => {
  const sourceFiles = ['./src/*'];
  const destination = 'dist/scss';

  return await gulp.src(sourceFiles).pipe(gulpCopy(destination, { prefix: 1 }));
});

gulp.task('minify-css', async () => {
  return await gulp
    .src('./src/primary-style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.init())
    .pipe(cleanCSS({ compatibility: 'ie11' }))
    .pipe(rename('primary-style.min.css'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('default', sequence('del-dist', ['copy-scss', 'build-scss'], 'minify-css'));
