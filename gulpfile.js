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

const paths = {
  build: './build/',
  data: './client/data/',
  srcCSS: './less/style.less',
  srcJS: './js/common.js',
  pluginsJS: './js/plugins/'
}

function styles() {
  return gulp
    .src(paths.srcCSS)
    .pipe(sourcemaps.init())
    .pipe(less())
    .pipe(concat('style.css'))
    .pipe(autoprefixer('> 1%'))
    .pipe(
      cleanCSS({
        level: 2
      })
    )
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(`${paths.build}assets/css`))
    .pipe(browserSync.stream())
}
const JSPluginsOrder = [
  `${paths.pluginsJS}jquery-3.4.1.min.js`,
  `${paths.pluginsJS}jquery-ui.min.js`,
  `${paths.pluginsJS}*.js`
]

function concatPlugins() {
  return gulp
    .src(JSPluginsOrder)
    .pipe(concat('plugins.js'))
    .pipe(gulp.dest(`${paths.build}assets/js`))
}

function moveMainJS() {
  return gulp.src(paths.srcJS).pipe(gulp.dest(`${paths.build}assets/js`))
}

function twigF() {
  return (
    gulp
      .src(['./client/templates/pages/*.twig'])
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

const cleanFiles = [
  `${paths.build}assets/js/*.js`,
  `${paths.build}assets/css/*.css`,
  `${paths.build}/*.html`
]

function clean() {
  return del(cleanFiles)
}

function watch() {
  browserSync.init({
    server: {
      baseDir: './',
      index: 'index.html'
    }
  })

  gulp
    .watch('./js/*.js')
    .on('change', gulp.series(moveMainJS, browserSync.reload))
  gulp
    .watch('./jsplugins/*.js')
    .on('change', gulp.series(concatPlugins, browserSync.reload))
  gulp.watch('./less/**/*.less', styles)
  gulp
    .watch(['client/templates/**/*.twig', 'client/data/*.twig.json'])
    .on('change', gulp.series(twigF, browserSync.reload))
}

gulp.task('watch', watch)

gulp.task(
  'build',
  gulp.series(clean, gulp.parallel(styles, twigF, concatPlugins, moveMainJS))
)

gulp.task('dev', gulp.series('build', 'watch'))
