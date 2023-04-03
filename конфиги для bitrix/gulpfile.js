"use strict";

const gulp = require("gulp");

// Utilites
const del = require("del");
const rename = require("gulp-rename");
const plumber = require("gulp-plumber");
const run = require("run-sequence");
// const wait = require('gulp-wait');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const gulpInclude = require("gulp-include");
const buffer = require('vinyl-buffer');
// const newer = require('gulp-newer');
const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');

// Server
const server = require("browser-sync").create();
const reload = server.reload;

// Html
const posthtml = require("gulp-posthtml");
const include = require("posthtml-include");

// Styles
// const sass = require("gulp-sass");
const sass = require('gulp-sass')(require('sass'));


const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const minify = require("gulp-csso");
const csscomb = require('gulp-csscomb');


// Images
const webp = require("gulp-webp");
const imagemin = require("gulp-imagemin");
const svgstore = require("gulp-svgstore");
const spritesmith = require('gulp.spritesmith');

// Config
const config = require('./config.json');
const publicPath = config.build;

const { series, parallel } = require('gulp');

// Server

function serve(done) {
  server.init(config.server);
  (done);
}

function style() {
  return gulp
  .src(config.src.style)
  .pipe(plumber())
  .pipe(sourcemaps.init())
  .pipe(sass({
      sourceMap: true,
      errLogToConsole: true,
      includePaths: ["node_modules/"]
    }))
  .pipe(postcss([
    autoprefixer()
  ]))
  .pipe(csscomb())
  .pipe(sourcemaps.write())
  .pipe(gulp.dest(config.build.css))
  .pipe(minify())
  .pipe(rename("style.min.css"))
  .pipe(gulp.dest(config.build.css))
  .pipe(reload({ stream: true }));
}

function jsCopy() {
  return gulp.src(config.src.js.separate)
    .pipe(plumber())
    .pipe(gulpInclude({
        extensions: "js",
        hardFail: true,
        includePaths: [
          __dirname + "/node_modules",
        ]
    }))
    .pipe(gulp.dest(config.build.js))
    .pipe(reload({stream: true}));
}

function jsPlugins() {
  return gulp.src(config.src.js.plugins)
  .pipe(plumber())
  .pipe(sourcemaps.init())
  .pipe(gulpInclude({
      extensions: "js",
      hardFail: true,
      includePaths: [
        __dirname + "/node_modules",
      ]
  }))
  .pipe(babel({
    presets: ['@babel/preset-env'],
    compact: false
  }))
  .pipe(concat('plugins.js'))
  .pipe(gulp.dest(config.build.js))
  .pipe(uglify())
  .pipe(sourcemaps.write())
  .pipe(rename('plugins.min.js'))
  .pipe(gulp.dest(config.build.js))
  .pipe(reload({stream: true}));
}

function jsComponents() {
  return gulp.src(config.src.js.components)
  .pipe(plumber())
  .pipe(sourcemaps.init())
  .pipe(gulpInclude({
      extensions: "js",
      hardFail: true,
      includePaths: [
        __dirname + "/node_modules",
      ]
  }))
  .pipe(babel({
    presets: ['@babel/preset-env']
  }))
  .pipe(concat('main.js'))
  .pipe(gulp.dest(config.build.js))
  .pipe(sourcemaps.write())
  .pipe(uglify())
  .pipe(rename('main.min.js'))
  .pipe(gulp.dest(config.build.js))
  .pipe(reload({stream: true}));
}

function imagesBuild() {
  return gulp
  .src(config.src.img, { base: config.build.imgBase }) 
  .pipe(buffer())
  .pipe(imagemin([
    imagemin.gifsicle({interlaced: true}),
    imagemin.mozjpeg({quality: 75, progressive: true}),
    imagemin.optipng({optimizationLevel: 3}),
    imagemin.svgo({
        plugins: [
            {removeViewBox: true},
            {cleanupIDs: false}
        ]
    })
  ]))

  .pipe(gulp.dest(config.build.img))
}

function imagesClean() {
  return del(config.build.img);
}

function spriteSvg() {
  return gulp.src(config.src.sprite.svg)
  .pipe(buffer())
  .pipe(imagemin([
    imagemin.svgo({
      plugins: [
        {removeViewBox: false},
        {cleanupIDs: false}
      ]
    })
  ]))
  .pipe(svgstore({
    inlineSvg: true
  }))
  .pipe(rename("sprite.php"))
  .pipe(gulp.dest(config.build.sprites))
  .pipe(reload({stream: true}));
}

function fonts() {
  return gulp.src(config.src.fonts)
    .pipe(gulp.dest(config.build.fonts))
    .pipe(reload({stream: true}));
}

function fontsClean() {
  return del(config.build.fonts);
}

async function styleClean() {
  return del([config.clean.css, config.clean.cssMin]);
}

function watch (done) {
  gulp.watch(config.watch.style, gulp.series(
    styleClean,
    style,
    ));
  gulp.watch(config.watch.js.components, gulp.series(jsComponents));
  gulp.watch(config.watch.js.plugins, gulp.series(jsPlugins));
  gulp.watch(config.watch.img, gulp.series(
    imagesClean,
    imagesBuild,

    ));
  gulp.watch(config.watch.sprite.svg, gulp.series(spriteSvg));
  gulp.watch(config.watch.fonts, gulp.series(
    fontsClean,
    fonts
  ));
  (done)
}

exports.build = gulp.series(
  styleClean,
  spriteSvg,
  gulp.parallel(
    style,
    jsCopy,
    jsPlugins,
    jsComponents,
    imagesBuild,
    fonts
  ),
);

exports.dev = gulp.series(
  styleClean,
  spriteSvg,
  gulp.parallel(
    style,
    jsCopy,
    jsPlugins,
    jsComponents,
    imagesBuild,
    fonts
  ),
  gulp.parallel(
      watch,
      // serve,
  )
);


