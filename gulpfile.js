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
  fs = require('fs'),
  babel = require('gulp-babel')

const paths = {
  build: './build/',
  data: './client/data/',
  srcCSS: './less/style.less',
  commonJS: './js/common/',
  pluginsJS: './js/plugins/'
}

function styles() {
  return gulp
    .src(paths.srcCSS)
    .pipe(sourcemaps.init())
    .pipe(less())
    .pipe(concat('style.css'))
    .pipe(autoprefixer('> 0.01%'))
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

const JSCommonOrder = [
  `${paths.commonJS}variables.js`,
  `${paths.commonJS}functions.js`,
  `${paths.commonJS}*.js`
]

function concatCommonJS() {
  return gulp
    .src(JSCommonOrder)
    .pipe(sourcemaps.init())
    .pipe(concat('common.js'))
    .pipe(
      babel({
        presets: ['@babel/env']
      })
    )
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(`${paths.build}assets/js`))
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
    .watch('./js/common/*.js')
    .on('change', gulp.series(concatCommonJS, browserSync.reload))
  gulp
    .watch('./js/plugins/*.js')
    .on('change', gulp.series(concatPlugins, browserSync.reload))
  gulp.watch('./less/**/*.less', styles)
  gulp
    .watch(['client/templates/**/*.twig', 'client/data/*.twig.json'])
    .on('change', gulp.series(twigF, browserSync.reload))
}

gulp.task('watch', watch)

gulp.task(
  'build',
  gulp.series(
    clean,
    gulp.parallel(styles, twigF, concatPlugins, concatCommonJS)
  )
)

gulp.task('dev', gulp.series('build', 'watch'))
