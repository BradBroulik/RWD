var gulp = require('gulp'),
	htmlhint = require("gulp-htmlhint");

gulp.task('default', function() {
  return gulp.src(['./**/*.html', '!./**/includes/*.html'])
  			.pipe(htmlhint())
  			.pipe(htmlhint.reporter());
});