var gulp = require('gulp'),
    browserify = require('gulp-browserify'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    prefix = require('gulp-autoprefixer');

gulp.task('js', function(){
  gulp.src('src/js/app.js')
  .pipe(browserify({transform: 'reactify'}))
  .pipe(concat('app.js'))
  .pipe(uglify())
  .pipe(gulp.dest('./dist/js/'));
});

gulp.task('sass', function(){
	gulp.src('src/sass/style.scss')
	.pipe(sass())
	.pipe(prefix({
		browsers: ['last 2 versions'],
		cascade: false
		}))
	.pipe(gulp.dest('./dist/css'));
});

gulp.task('copy', function(){
  gulp.src('src/index.html')
  .pipe(gulp.dest('./dist/'));

  gulp.src('./src/assets/images/*.*')
  .pipe(gulp.dest('./dist/assets/images/'));
});

gulp.task('default', ['js','copy']);

gulp.task('watch', function(){
  gulp.watch('./src/js/**/*.*', ['default']);
  gulp.watch('./src/sass/**/*.scss', ['sass']);
});
