const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function compileSass() {
  return src('src/styles.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(dest('css'));
}

function watchFiles() {
  watch('src/styles/**/*.scss', compileSass);
}

exports.default = series(compileSass, watchFiles);
exports.build = compileSass;
