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
  merge = require('merge-stream'),
  removeEmptyLines = require('gulp-remove-empty-lines'),
  prettyHtml = require('gulp-pretty-html'),
  postcss = require('gulp-postcss'),
  postcssPresetEnv = require('postcss-preset-env'),
  minify = require('gulp-minify')

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
    pathSass: './scss/style.scss',
    name: 'style'
  }

  const lessStream = gulp
    .src(info.pathLess)
    .pipe(less())
    .pipe(sourcemaps.init())

  const sassStream = gulp
    .src(info.pathSass)
    .pipe(sass())
    .pipe(sourcemaps.init())

  const mergedStream = merge(lessStream, sassStream)
    .pipe(concat(`${info.name}.css`))
    .pipe(
      cleanCSS({
        level: 2,
        compatibility: 'ie7'
      })
    )
    .pipe(postcss([postcssPresetEnv()]))
    .pipe(autoprefixer())
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
        level: 2,
        compatibility: 'ie7'
      })
    )
    .pipe(postcss([postcssPresetEnv()]))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(`${paths.build}assets/css`))
    .pipe(browserSync.stream())
}

function styles(cb) {
  gulp.parallel(
    baseStyles,
    resolvePageStyles.bind(this, {
      path: './less/main-page-tpl/main-page-tpl.less',
      name: 'main-page-tpl'
    }),
    resolvePageStyles.bind(this, {
      path: './less/services-tpl/services-tpl.less',
      name: 'services-tpl'
    }),
    resolvePageStyles.bind(this, {
      path: './less/purchase-tpl/purchase-tpl.less',
      name: 'purchase-tpl'
    }),
    resolvePageStyles.bind(this, {
      path: './less/pressroom-tpl/pressroom-tpl.less',
      name: 'pressroom-tpl'
    }),
    resolvePageStyles.bind(this, {
      path: './less/about-tpl/about-tpl.less',
      name: 'about-tpl'
    }),
    resolvePageStyles.bind(this, {
      path: './less/career-tpl/career-tpl.less',
      name: 'career-tpl'
    })
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
    .pipe(minify())
    .pipe(concat('plugins.js'))
    .pipe(gulp.dest(`${paths.build}assets/js`))
    .pipe(browserSync.stream())
}

function resolvePageJS(info) {
  return gulp
    .src(info.src)
    .pipe(sourcemaps.init())
    .pipe(concat(`${info.name}.js`))
    .pipe(
      babel({
        presets: ['@babel/env']
      })
    )
    .pipe(sourcemaps.write('./'))
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

function javascript(cb) {
  gulp.parallel(
    concatCommonJS,
    resolvePageJS.bind(this, {
      src: `${paths.commonJS}main-page-tpl/*.js`,
      name: `main-page-tpl`
    }),
    resolvePageJS.bind(this, {
      src: `${paths.commonJS}services-tpl/*.js`,
      name: `services-tpl`
    }),
    resolvePageJS.bind(this, {
      src: `${paths.commonJS}purchase-tpl/*.js`,
      name: `purchase-tpl`
    }),
    resolvePageJS.bind(this, {
      src: `${paths.commonJS}pressroom-tpl/*.js`,
      name: `pressroom-tpl`
    }),
    resolvePageJS.bind(this, {
      src: `${paths.commonJS}about-tpl/*.js`,
      name: `about-tpl`
    }),
    resolvePageJS.bind(this, {
      src: `${paths.commonJS}career-tpl/*.js`,
      name: `career-tpl`
    })
  )()
  cb()
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
      .pipe(removeEmptyLines())
      .pipe(prettyHtml({ indent_size: 2, preserve_newlines: true }))
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
    },
    ghostMode: false,
    open: false
  })

  gulp
    .watch('./js/common/**/*.js')
    .on('change', gulp.series(javascript, browserSync.reload))
  gulp
    .watch('./js/plugins/*.js')
    .on('add', gulp.series(concatPlugins, browserSync.reload))
  gulp.watch('./less/**/*.less', styles)
  gulp.watch('./scss/**/*.scss', styles)
  gulp
    .watch(['client/templates/**/*.twig', 'client/data/*.twig.json'])
    .on('change', gulp.series(twigF, browserSync.reload))
}

gulp.task('watch', watch)

gulp.task(
  'build',
  gulp.series(clean, gulp.parallel(styles, concatPlugins, javascript, twigF))
)

gulp.task('dev', gulp.series('build', 'watch'))
