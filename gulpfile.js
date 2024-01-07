const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const rename = require('gulp-rename');
const cleanCSS = require('gulp-clean-css');

// Debug: Компіляція Sass у форматований CSS з картами прив'язок
gulp.task('debug', function () {
  return gulp.src('src/styles.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('dist/debug'));
});

// Production: Компіляція та мініфікація Sass у CSS з суфіксом .min
gulp.task('production', function () {
  return gulp.src('src/styles.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(cleanCSS())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('dist/production'));
});

// Спостереження за змінами у файлах Sass для обох конфігурацій
gulp.task('watch', function () {
  gulp.watch('src/**/*.scss', gulp.parallel('debug', 'production'));
});

// Задача за замовчуванням: запуск усіх задач (Debug та Production)
gulp.task('default', gulp.parallel('debug', 'production', 'watch'));
