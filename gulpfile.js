const gulp = require('gulp');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const del = require('del');
const browserSync = require('browser-sync').create();
const sourcemaps = require('gulp-sourcemaps');
const less = require('gulp-less');
const smartGrid = require('smart-grid');

const styleFiles = ['./less/style.less'];

const smartGridOptions = {
  outputStyle: 'less',
  maxWidth: '1710px'
};

function styles() {
  return gulp
    .src(styleFiles)
    .pipe(sourcemaps.init())
    .pipe(less())
    .pipe(concat('style.css'))
    .pipe(autoprefixer('> 0.1%'))
    .pipe(
      cleanCSS({
        level: 2
      })
    )
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.stream());
}

function grid(done) {
  smartGrid('./less/base', smartGridOptions);
  done();
}

function clean() {
  return del(['./css/styles.css', './css/styles.css.map']);
}

function watch() {
  browserSync.init({
    server: {
      baseDir: './',
      index: 'index.html'
    }
  });

  gulp.watch('./img').on('change', browserSync.reload);
  gulp.watch('./js/*.js').on('change', browserSync.reload);
  gulp.watch('./less/**/*.less', styles);
  gulp.watch('./*.html').on('change', browserSync.reload);
}

gulp.task('grid', grid);

gulp.task('watch', watch);

gulp.task('build', gulp.series(clean, gulp.parallel(styles)));

gulp.task('dev', gulp.series('build', 'watch'));
