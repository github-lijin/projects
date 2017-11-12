var gulp = require('gulp'),
    cssmin = require('gulp-minify-css'),
    htmlmin = require('gulp-htmlmin'),
    imagemin = require('gulp-imagemin'),
    rev = require('gulp-rev'),
	gulpsass = require('gulp-sass');
	
	//编译sass
	gulp.task('sass',function(){
	   	gulp.src('myproject/sass/jkxy.scss')
			.pipe(gulpsass({outputStyle: 'expanded'}))
			.pipe(gulp.dest('myproject/css'));
	});
	
	//监听
	gulp.task('watch',function(){
		gulp.watch('myproject/sass/jkxy.scss',['sass']);
		gulp.watch('index.html',['html']);
		gulp.watch('img/*.*',['image'])
	})
	
	//压缩css并加版本号
	gulp.task('css',function(){
		gulp.src('myproject/css/jkxy.css')
			.pipe(cssmin())
			.pipe(rev())
			.pipe(rev.manifest())
			.pipe(gulp.dest('rev/css'));
	});
	
	//压缩html
	gulp.task('html',function(){
		var options = {
			collapseWhitespace: true,
			removeScriptTypeAttributes: true,
			removeStyleLinkTypeAttributes: true
		};
		gulp.src('index.html')
			.pipe(htmlmin(options))
			.pipe(rev.manifest())
			.pipe(gulp.dest('rev'));
	});
	
	//压缩图片
	gulp.task('image',function(){
		gulp.src('img/*.*')
			.pipe(imagemin())
			.pipe(rev.manifest())
			.pipe(gulp.dest('rev/img'));
	});
	
	
	
	gulp.task('default',['sass','watch','css','html','image']);
