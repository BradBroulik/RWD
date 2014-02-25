var gulp = require('gulp'),
	htmlhint = require("gulp-htmlhint"),
	csslint = require('gulp-csslint'),
	jshint = require('gulp-jshint');


gulp.task('default', function() {
	gulp.src(['./**/*.html', '!./**/includes/*.html'])
 		.pipe(htmlhint())
  		.pipe(htmlhint.reporter());
});

gulp.task('css', function() {
  	gulp.src('./**/*.css')
    	.pipe(csslint())
    	.pipe(csslint.reporter());
});

gulp.task('javascript', function() {
  gulp.src('./**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
});