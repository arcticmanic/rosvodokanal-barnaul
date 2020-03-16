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
  babel = require('gulp-babel'),
  sass = require('gulp-sass'),
  merge = require('merge-stream')

sass.compiler = require('node-sass')

const paths = {
  build: './build/',
  data: './client/data/',
  commonJS: './js/common/',
  pluginsJS: './js/plugins/'
}

function baseStyles() {
  const info = {
    pathLess: './less/style.less',
    pathSass: './scss/mmenu-light.scss',
    name: 'style'
  }

  const lessStream = gulp.src(info.pathLess).pipe(less())

  const sassStream = gulp.src(info.pathSass).pipe(sass())

  const mergedStream = merge(lessStream, sassStream)
    .pipe(sourcemaps.init())
    .pipe(concat(`${info.name}.css`))
    .pipe(
      cleanCSS({
        level: 2
      })
    )
    .pipe(autoprefixer('> 0.01%'))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(`${paths.build}assets/css`))
    .pipe(browserSync.stream())

  return mergedStream
}

function resolvePageStyles(info) {
  return gulp
    .src(info.path)
    .pipe(sourcemaps.init())
    .pipe(less())
    .pipe(concat(`${info.name}.css`))
    .pipe(
      cleanCSS({
        level: 2
      })
    )
    .pipe(autoprefixer('> 0.01%'))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(`${paths.build}assets/css`))
    .pipe(browserSync.stream())
}

function styles(cb) {
  gulp.series(
    gulp.parallel(
      baseStyles,
      resolvePageStyles.bind(this, {
        path: './less/main-page/main-page.less',
        name: 'main-page'
      })
    )
  )()
  cb()
}

function concatPlugins() {
  const JSPluginsOrder = [
    `${paths.pluginsJS}jquery-3.4.1.min.js`,
    `${paths.pluginsJS}*.js`
  ]

  return gulp
    .src(JSPluginsOrder)
    .pipe(concat('plugins.js'))
    .pipe(gulp.dest(`${paths.build}assets/js`))
    .pipe(browserSync.stream())
}

function concatCommonJS() {
  const JSCommonOrder = [
    `${paths.commonJS}variables.js`,
    `${paths.commonJS}functions.js`,
    `${paths.commonJS}*.js`
  ]

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
    .pipe(browserSync.stream())
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

function clean() {
  const cleanFiles = [
    `${paths.build}assets/js/*.js`,
    `${paths.build}assets/css/*.css`,
    `${paths.build}/*.html`
  ]

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
  gulp.watch('./scss/**/*.scss', styles)
  gulp
    .watch(['client/templates/**/*.twig', 'client/data/*.twig.json'])
    .on('change', gulp.series(twigF, browserSync.reload))
}

gulp.task('watch', watch)

gulp.task(
  'build',
  gulp.series(
    clean,
    gulp.parallel(styles, concatPlugins, concatCommonJS, twigF)
  )
)

gulp.task('dev', gulp.series('build', 'watch'))
