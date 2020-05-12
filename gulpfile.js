const path = require('path'),
  fs = require('fs'),
  del = require('del')

const merge = require('merge-stream'),
  browserSync = require('browser-sync'),
  pipeline = require('readable-stream').pipeline

const gulp = require('gulp'),
  watch = require('gulp-watch'),
  concat = require('gulp-concat'),
  sourcemaps = require('gulp-sourcemaps'),
  uglify = require('gulp-uglify'),
  minify = require('gulp-minify'),
  babel = require('gulp-babel')

const postcss = require('gulp-postcss'),
  autoprefixer = require('autoprefixer'),
  cssDeclarationSorter = require('css-declaration-sorter'),
  postcssPresetEnv = require('postcss-preset-env'),
  cssnano = require('cssnano')

const less = require('gulp-less'),
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
  srcTwig: path.join(__dirname, 'client', 'templates', 'pages'),
  srcPluginsJS: path.join(__dirname, 'js', 'plugins'),
  srcPolyfillsJS: path.join(__dirname, 'js', 'plugins', 'polyfills'),
  srcCommonJS: path.join(__dirname, 'js', 'common'),
  srcCoreJS: path.join(__dirname, 'js', 'common', 'core'),
  srcOnTopJS: path.join(__dirname, 'js', 'common', 'onTop'),
  srcLess: path.join(__dirname, 'less'),
  srcSass: path.join(__dirname, 'scss'),
  distAssets: path.join(__dirname, 'build', 'assets'),
  distJS: path.join(__dirname, 'build', 'assets', 'js'),
  distCSS: path.join(__dirname, 'build', 'assets', 'css'),
}

const postcssPlugins = [
  cssDeclarationSorter({ order: 'smacss' }),
  postcssPresetEnv(),
  cssnano({
    presets: [
      'default',
      {
        discardComments: {
          removeAll: true,
        },
      },
    ],
  }),
  autoprefixer({
    grid: 'autoplace',
  }),
]

const baseStyles = () => {
  const info = {
    name: 'style.css',
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
    .pipe(postcss(postcssPlugins))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(paths.distCSS))
    .pipe(browserSync.stream())

  return mergedStream
}

const concatPlugins = () => {
  const JSPluginsOrder = [
    path.join(paths.srcPluginsJS, '*.js'),
    path.join(paths.srcPolyfillsJS, '*.js'),
  ]

  return gulp
    .src(JSPluginsOrder)
    .pipe(minify({ ext: { src: '', min: '.js' }, noSource: true }))
    .pipe(concat('plugins.js'))
    .pipe(gulp.dest(paths.distJS))
    .pipe(browserSync.stream())
}

const concatCommonJS = () => {
  const JSCommonOrder = [
    path.join(paths.srcOnTopJS, 'variables.js'),
    path.join(paths.srcOnTopJS, 'functions.js'),
    path.join(paths.srcCoreJS, '*.js'),
    path.join(paths.srcCommonJS, '**', '*.js'),
  ]

  return pipeline(
    gulp.src(JSCommonOrder),
    sourcemaps.init(),
    concat('core.js'),
    babel({
      presets: [['@babel/env', { useBuiltIns: 'entry' }]],
    }),
    uglify({ toplevel: true, ie8: true }),
    sourcemaps.write('./'),
    gulp.dest(paths.distJS),
    browserSync.stream()
  )
}

const twigiFy = () => {
  return gulp
    .src(path.join(paths.srcTwig, '*', '*.twig'))
    .pipe(
      plumber({
        handleError: function (err) {
          console.log(err)
          this.emit('end')
        },
      })
    )
    .pipe(
      data(function (file) {
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
      twig().on('error', function (err) {
        process.stderr.write(err.message + '\n')
        this.emit('end')
        console.log(path.basename(file.path))
      })
    )
    .pipe(removeEmptyLines())
    .pipe(prettyHtml({ indent_size: 2, preserve_newlines: true }))
    .pipe(gulp.dest(paths.build))
}

const clean = () => {
  const cleanFiles = [
    path.join(paths.distJS, '*.js'),
    path.join(paths.distJS, '!jquery-3.4.1.min.js'),
    paths.distCSS,
    path.join(paths.build, '**', '*.html'),
  ]

  return del(cleanFiles)
}

const watchFiles = () => {
  browserSync.init({
    server: {
      baseDir: paths.build,
      index: path.join(paths.build, 'other-pages', 'index.html'),
    },
    ghostMode: false,
    open: false,
  })

  watch(
    ['./js/common/**/*.js'],
    gulp.series(concatCommonJS, browserSync.reload)
  )

  watch(
    ['./js/plugins/*.js', './js/polyfills/*.js'],
    gulp.series(concatPlugins, browserSync.reload)
  )

  watch(['./less/**/*.less', './scss/**/*.scss'], gulp.series(baseStyles))

  watch(
    ['client/templates/**/*.twig', 'client/data/**/*.twig.json'],
    gulp.series(twigiFy, browserSync.reload)
  )
}

const watchTask = watchFiles

const build = gulp.series(
  clean,
  gulp.parallel(baseStyles, concatPlugins, concatCommonJS, twigiFy)
)

const dev = gulp.series(build, watchTask)

exports.dev = dev
exports.build = build
