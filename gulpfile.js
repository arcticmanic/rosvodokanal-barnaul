const path = require('path'),
  fs = require('fs')

const del = require('del'),
  merge = require('merge-stream'),
  postcssPresetEnv = require('postcss-preset-env'),
  browserSync = require('browser-sync')

const gulp = require('gulp'),
  watch = require('gulp-watch'),
  concat = require('gulp-concat'),
  sourcemaps = require('gulp-sourcemaps'),
  minify = require('gulp-minify'),
  babel = require('gulp-babel')

const autoprefixer = require('gulp-autoprefixer'),
  cleanCSS = require('gulp-clean-css'),
  postcss = require('gulp-postcss'),
  less = require('gulp-less'),
  sass = require('gulp-sass')

const twig = require('gulp-twig'),
  data = require('gulp-data'),
  plumber = require('gulp-plumber')

const removeEmptyLines = require('gulp-remove-empty-lines'),
  prettyHtml = require('gulp-pretty-html')

sass.compiler = require('node-sass')

const paths = {
  build: path.join(__dirname, 'build'),
  srcData: path.join(__dirname, 'client', 'data'),
  srcOnTopJS: path.join(__dirname, 'js', 'onTop'),
  srcCommonJS: path.join(__dirname, 'js', 'common'),
  srcPluginsJS: path.join(__dirname, 'js', 'plugins'),
  srcPolyfillsJS: path.join(__dirname, 'js', 'polyfills'),
  srcLess: path.join(__dirname, 'less'),
  srcSass: path.join(__dirname, 'scss'),
  srcTwig: path.join(__dirname, 'client', 'templates', 'pages'),
  distAssets: path.join(__dirname, 'build', 'assets'),
  distJS: path.join(__dirname, 'build', 'assets', 'js'),
  distCSS: path.join(__dirname, 'build', 'assets', 'css')
}

function baseStyles() {
  const info = {
    name: 'style.css'
  }

  const lessStream = gulp
    .src(path.join(paths.srcLess, 'style.less'))
    .pipe(sourcemaps.init())
    .pipe(less())

  const sassStream = gulp
    .src(path.join(paths.srcSass, 'style.scss'))
    .pipe(sourcemaps.init())
    .pipe(sass())

  const mergedStream = merge(lessStream, sassStream)
    .pipe(concat(info.name))
    .pipe(
      cleanCSS({
        level: 2,
        compatibility: 'ie7'
      })
    )
    .pipe(postcss([postcssPresetEnv()]))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(paths.distCSS))
    .pipe(browserSync.stream())

  return mergedStream
}

function resolvePageStyles(info) {
  return gulp
    .src(info.src)
    .pipe(sourcemaps.init())
    .pipe(less())
    .pipe(concat(info.name))
    .pipe(
      cleanCSS({
        level: 2,
        compatibility: 'ie7'
      })
    )
    .pipe(postcss([postcssPresetEnv()]))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(paths.distCSS))
    .pipe(browserSync.stream())
}

function styles(cb) {
  gulp.parallel(
    baseStyles,
    resolvePageStyles.bind(this, {
      src: path.join(paths.srcLess, 'main-page-tpl', 'main-page-tpl.less'),
      name: 'main-page-tpl.css'
    }),
    resolvePageStyles.bind(this, {
      src: path.join(paths.srcLess, 'services-tpl', 'services-tpl.less'),
      name: 'services-tpl.css'
    }),
    resolvePageStyles.bind(this, {
      src: path.join(paths.srcLess, 'purchase-tpl', 'purchase-tpl.less'),
      name: 'purchase-tpl.css'
    }),
    resolvePageStyles.bind(this, {
      src: path.join(paths.srcLess, 'pressroom-tpl', 'pressroom-tpl.less'),
      name: 'pressroom-tpl.css'
    }),
    resolvePageStyles.bind(this, {
      src: path.join(paths.srcLess, 'about-tpl', 'about-tpl.less'),
      name: 'about-tpl.css'
    }),
    resolvePageStyles.bind(this, {
      src: path.join(paths.srcLess, 'career-tpl', 'career-tpl.less'),
      name: 'career-tpl.css'
    }),
    resolvePageStyles.bind(this, {
      src: path.join(paths.srcLess, 'users-tpl', 'users-tpl.less'),
      name: 'users-tpl.css'
    })
  )()
  cb()
}

function concatPlugins() {
  const JSPluginsOrder = [
    path.join(paths.srcPluginsJS, 'jquery-3.4.1.min.js'),
    path.join(paths.srcPluginsJS, '*.js'),
    path.join(paths.srcPolyfillsJS, '*.js')
  ]

  return gulp
    .src(JSPluginsOrder)
    .pipe(minify({ ext: { src: '', min: '.js' }, noSource: true }))
    .pipe(concat('plugins.js'))
    .pipe(gulp.dest(paths.distJS))
    .pipe(browserSync.stream())
}

function resolvePageJS(info) {
  return gulp
    .src(info.src)
    .pipe(sourcemaps.init())
    .pipe(concat(info.name))
    .pipe(
      babel({
        presets: ['@babel/env']
      })
    )
    .pipe(minify({ ext: { src: '', min: '.js' }, noSource: true }))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(paths.distJS))
    .pipe(browserSync.stream())
}

function concatCommonJS() {
  const JSCommonOrder = [
    path.join(paths.srcOnTopJS, 'variables.js'),
    path.join(paths.srcOnTopJS, 'functions.js'),
    path.join(paths.srcCommonJS, 'core','*.js')
  ]

  return gulp
    .src(JSCommonOrder)
    .pipe(sourcemaps.init())
    .pipe(concat('common.js'))
    .pipe(
      babel({
        presets: [['@babel/env', { useBuiltIns: 'entry' }]]
      })
    )
    .pipe(minify({ ext: { src: '', min: '.js' }, noSource: true }))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(paths.distJS))
    .pipe(browserSync.stream())
}

function javascript(cb) {
  gulp.parallel(
    concatCommonJS,
    resolvePageJS.bind(this, {
      src: path.join(paths.srcCommonJS, 'main-page-tpl', '*.js'),
      name: 'main-page-tpl.js'
    }),
    resolvePageJS.bind(this, {
      src: path.join(paths.srcCommonJS, 'services-tpl', '*.js'),
      name: 'services-tpl.js'
    }),
    resolvePageJS.bind(this, {
      src: path.join(paths.srcCommonJS, 'purchase-tpl', '*.js'),
      name: 'purchase-tpl.js'
    }),
    resolvePageJS.bind(this, {
      src: path.join(paths.srcCommonJS, 'pressroom-tpl', '*.js'),
      name: 'pressroom-tpl.js'
    }),
    resolvePageJS.bind(this, {
      src: path.join(paths.srcCommonJS, 'about-tpl', '*.js'),
      name: 'about-tpl.js'
    }),
    resolvePageJS.bind(this, {
      src: path.join(paths.srcCommonJS, 'career-tpl', '*.js'),
      name: 'career-tpl.js'
    }),
    resolvePageJS.bind(this, {
      src: path.join(paths.srcCommonJS, 'users-tpl', '*.js'),
      name: 'users-tpl.js'
    })
  )()
  cb()
}

function twigiFy() {
  return gulp
    .src(path.join(paths.srcTwig, '*', '*.twig'))
    .pipe(
      plumber({
        handleError: function(err) {
          console.log(err)
          this.emit('end')
        }
      })
    )
    .pipe(
      data(function(file) {
        const firstIndexOfDivider = path.basename(file.path).indexOf('_')
        let prefix = ''
        if (firstIndexOfDivider !== -1) {
          prefix = path.basename(file.path).slice(0, firstIndexOfDivider)
        } else if (firstIndexOfDivider === -1) {
          prefix = 'other-pages'
        }

        return JSON.parse(
          fs.readFileSync(
            path.join(paths.srcData, prefix, `${path.basename(file.path)}.json`)
          )
        )
      })
    )
    .pipe(
      twig().on('error', function(err) {
        process.stderr.write(err.message + '\n')
        this.emit('end')
        console.log(path.basename(file.path))
      })
    )
    .pipe(removeEmptyLines())
    .pipe(prettyHtml({ indent_size: 2, preserve_newlines: true }))
    .pipe(gulp.dest(paths.build))
}

function clean() {
  const cleanFiles = [
    paths.distJS,
    paths.distCSS,
    path.join(paths.build, '*.html')
  ]

  return del(cleanFiles)
}

function watchFiles() {
  browserSync.init({
    server: {
      baseDir: './build',
      index: 'index.html'
    },
    ghostMode: false,
    open: false
  })

  watch(
    ['./js/common/**/*.js', './js/onTop/*.js'],
    gulp.series(javascript, browserSync.reload)
  )

  watch(
    ['./js/plugins/*.js', './js/polyfills/*.js'],
    gulp.series(concatPlugins, browserSync.reload)
  )

  watch(
    ['./less/**/*.less', './scss/**/*.scss'],
    gulp.series(styles, browserSync.reload)
  )

  watch(
    ['client/templates/**/*.twig', 'client/data/*.twig.json'],
    gulp.series(twigiFy, browserSync.reload)
  )
}

const watchTask = watchFiles

const build = gulp.series(
  clean,
  gulp.parallel(styles, concatPlugins, javascript, twigiFy)
)

const dev = gulp.series(build, watchTask)

exports.dev = dev
exports.build = build
