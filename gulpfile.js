'use strict';

var gulp = require('gulp');
var connect = require('gulp-connect'); //run local server
var open = require('gulp-open'); //open URL in web browser
var source = require('vinyl-source-stream');// use conventional text streams with gulp
var concat = require('gulp-concat');//concat files
var lint = require('gulp-eslint'); //lint js
var sass = require('gulp-sass'); // sass
var ngAnnotate = require('gulp-ng-annotate'); // angular ng-annotate
var uglify = require('gulp-uglify'); //minification
var sourcemaps = require('gulp-sourcemaps');//Inline source maps
var browserify = require('browserify');

var config = {
	port:9005,
	devBaseUrl:'http://localhost',
	paths:{
		html:'./src/**/*.html',
		js:'./src/scripts/**/*.js',
		sass:'./src/sass/main.scss',
		dist: './dist',
		lib:'./src/lib/*.min.js',
		mainJs:'./src/scripts/main.js',
		views: './src/views/**/*.html',
		images: './src/images/*'
	}
}

//star local dev server
gulp.task('connect', function(){
	connect.server({
		root:['dist'],
		port:config.port,
		base: config.devBaseUrl,
		livereload:true
	});
});

gulp.task('open', ['connect'], function(){
	gulp.src('dist/index.html')
	.pipe(open({uri: config.devBaseUrl + ':' + config.port + '/'}));
});

gulp.task('html', function(){
	gulp.src(config.paths.html)
	.pipe(gulp.dest(config.paths.dist))
	.pipe(connect.reload());

	gulp.src(config.paths.views)
	.pipe(gulp.dest(config.paths.dist + '/views'))
});

gulp.task('js',function(){
	browserify(config.paths.mainJs)
	.bundle()
	.on('error', console.error.bind(console))
	.pipe(source('bundle.js'))
	.pipe(gulp.dest(config.paths.dist + '/scripts'))
	.pipe(connect.reload());
});

gulp.task('lib', function(){
	gulp.src(config.paths.lib)
	.pipe(gulp.dest(config.paths.dist + '/lib'))
	.pipe(connect.reload());
})

gulp.task('images', function(){
	return gulp.src(config.paths.images)
		.pipe(gulp.dest(config.paths.dist + '/images'));
});

gulp.task('sass', function () {
    return gulp.src(config.paths.sass)
    .pipe(concat('bundle.css'))
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(config.paths.dist + '/css'))
    .pipe(connect.reload());
});


gulp.task('lint', function(){
	return gulp.src(config.paths.js)
	.pipe(lint({config:'eslint.config.json'}))
	.pipe(lint.format());
});

gulp.task('watch', function(){
	gulp.watch(config.paths.html, ['html']);
	gulp.watch(config.paths.js, ['js','lint']);
	gulp.watch(config.paths.sass, ['sass']);
});


gulp.task('default', ['html','lib','js','sass','images','lint','open', 'watch']);







