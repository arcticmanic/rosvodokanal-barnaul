const gulp = require('gulp'),
  concat = require('gulp-concat'),
  autoprefixer = require('gulp-autoprefixer'),
  cleanCSS = require('gulp-clean-css'),
  del = require('del'),
  browserSync = require('browser-sync').create(),
  sourcemaps = require('gulp-sourcemaps'),
  less = require('gulp-less'),
  plumber = require('gulp-plumber'),
  path = require('path'),
  data = require('gulp-data'),
  twig = require('gulp-twig'),
  fs = require('fs')

const styleFiles = ['./less/style.less'],
  paths = {
    build: './build/',
    data: './client/data/'
  }

function styles() {
  return gulp
    .src(styleFiles)
    .pipe(sourcemaps.init())
    .pipe(less())
    .pipe(concat('style.css'))
    .pipe(autoprefixer('> 30%'))
    .pipe(
      cleanCSS({
        level: 2
      })
    )
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.stream())
}

function twigF() {
  return (
    gulp
      .src(['./client/templates/*.twig'])
      // Stay live and reload on error
      .pipe(
        plumber({
          handleError: function(err) {
            console.log(err)
            this.emit('end')
          }
        })
      )
      // Load template pages json data
      .pipe(
        data(function(file) {
          return JSON.parse(
            fs.readFileSync(paths.data + path.basename(file.path) + '.json')
          )
        })
      )
      .pipe(
        twig().on('error', function(err) {
          process.stderr.write(err.message + '\n')
          this.emit('end')
        })
      )
      .pipe(gulp.dest(paths.build))
  )
}

function clean() {
  return del(['./css/styles.css', './css/styles.css.map'])
}

function watch() {
  browserSync.init({
    server: {
      baseDir: './',
      index: 'index.html'
    }
  })

  gulp.watch('./img').on('change', browserSync.reload)
  gulp.watch('./js/*.js').on('change', browserSync.reload)
  gulp.watch('./less/**/*.less', styles)
  gulp.watch('./*.html').on('change', browserSync.reload)
  gulp
    .watch(['client/templates/**/*.twig', 'client/data/*.twig.json'])
    .on('change', gulp.series(twigF, browserSync.reload))
}

gulp.task('watch', watch)

gulp.task('build', gulp.series(clean, gulp.parallel(styles, twigF)))

gulp.task('dev', gulp.series('build', 'watch'))
