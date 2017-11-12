var gulp = require('gulp'),
    htmlmin = require('gulp-htmlmin'),
    rev = require('gulp-rev'),
    gulpsass = require('gulp-sass');
    
//  编译sass\压缩css\
    gulp.task('sass',function(){
    	gulp.src('sass/scss/bus.scss')
    		.pipe(gulpsass({outputStyle: 'compressed'}))
    		.pipe(gulp.dest('sass/css'));
    });
    
    //压缩HTML
    gulp.task('html',function(){
		var option = {
			collapseWhitespace: true,
		}
    	gulp.src('index.html')
    		.pipe(htmlmin(option))
    		.pipe(gulp.dest('rev'));
    })
	
	//压缩css
	gulp.task('css',function(){
		gulp.src('sass/css/bus.css')
			.pipe(rev())
			.pipe(gulp.dest('rev/css'))
			.pipe(rev.manifest())
			.pipe(gulp.dest('rev/css'));
	})
	
	//监听
	gulp.task('watch',function(){
		gulp.watch('sass/scss/bus.scss',['sass']);
		gulp.watch('index.html',['html']);
	})
	//默认任务
	gulp.task('default',['sass','html','css','watch']);
