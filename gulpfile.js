/* 
 * Run Gulp: gulp
 * Install npm dependencies: npm install 
 */
var gulp = require('gulp'),
	htmlhint = require("gulp-htmlhint"),
	csslint = require('gulp-csslint'),
	jshint = require('gulp-jshint');

/* Run via: gulp */
gulp.task('default', function() {
	gulp.src(['./**/*.html', '!./**/includes/*.html'])
 		.pipe(htmlhint())
  		.pipe(htmlhint.reporter());
});

/* Run via: gulp css */
gulp.task('css', function() {
  	gulp.src('./**/*.css')
    	.pipe(csslint())
    	.pipe(csslint.reporter());
});

/* Run via: gulp javascript */
gulp.task('javascript', function() {
  gulp.src('./**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
});