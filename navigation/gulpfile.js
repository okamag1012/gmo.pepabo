var gulp = require("gulp");
var sass = require("gulp-sass");
var watch = require("gulp-watch");


gulp.task('sass', function() {
	console.log('------ sass task start --------');
	gulp.src('src/sass/*.scss')
	.pipe(sass({
		style : 'expanded',
	}))
	.pipe(gulp.dest('dist/css/'));
	console.log('------ sass task end --------');
});
gulp.task('watch', function () {
    gulp.watch('src/sass/*.scss', ['sass']);
});

gulp.task('default', ['watch','sass']);
