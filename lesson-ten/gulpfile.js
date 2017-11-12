//引用gulp模块和gulp插件
var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    cssmin = require('gulp-minify-css'),
    htmlmin = require('gulp-htmlmin'),
    imagemin = require('gulp-imagemin'),
    runSequence = require('run-sequence'),   
    rev = require('gulp-rev'),    
    revCollector = require('gulp-rev-collector'),
    concat = require('gulp-concat');


//压缩CSS
 gulp.task('testCssmin',function(){//task给gulp定义一个名为testCssmin的任务
 	gulp.src('src/css/baidu.css')//原文件名路径
 		.pipe(cssmin())//调用插件执行压缩
 		.pipe(gulp.dest('dist/css'));//压缩后的文件放到这个文件夹下
 });
//压缩js
gulp.task('testJsmin',function(){
	gulp.src('src/js/*.js')
		.pipe(uglify())
		.pipe(gulp.dest('dist/js'));
})
//压缩\合并JS
//gulp.task('testConcat',function(){
//	gulp.src('src/js/*.js')
//		.pipe(uglify())
//		.pipe(concat('all.js'))
//		.pipe(gulp.dest('dist/js'));
//});
//压缩HTML
gulp.task('testHtmlmin',function(){
	var options = {
		collapseWhitespace: true,
		removeScriptTypeAttributes: true,
		removeStyleLinkTypeAttributes: true
	};
	gulp.src('src/index.html')
		.pipe(htmlmin(options))
		.pipe(gulp.dest('dist'));
});

//压缩图片
gulp.task('testImagemin',function(){
	gulp.src('src/img/*.*')
		.pipe(imagemin())
		.pipe(gulp.dest('dist/img'));
});
//监听
gulp.task('auto',function(){
	gulp.watch('src/css/baidu.css',['testCssmin']);
	gulp.watch('src/js/*.js',['testJsmin']);
	gulp.watch('src/img/*.*',['testImagemin']);
	gulp.watch('src/index.html',['testHtmlmin'])
})


//CSS生成文件hash编码并生成 rev-manifest.json文件名对照映射
gulp.task('revCss',function(){
	return gulp.src('src/css/baidu.css')
		.pipe(rev())
		.pipe(rev.manifest()) //生成rev-mainfest.json文件作为记录 
		.pipe(gulp.dest('rev/css'));
})
//js生成文件hash编码并生成 rev-manifest.json文件名对照映射 
gulp.task('revJs',function(){
	return gulp.src('src/js/*.js')
		.pipe(rev())
		.pipe(rev.manifest())
		.pipe(gulp.dest('rev/js'));
})
//Html替换css、js文件版本
gulp.task('revHtmlCss',function(){
	return gulp.src(['rev/css/*.json','src/index.html'])
		.pipe(revCollector())
		.pipe(gulp.dest('rev'));
})
gulp.task('revHtmlJs',function(){
	return gulp.src(['rev/js/*.json','src/index.html'])
		.pipe(revCollector())
		.pipe(gulp.dest('rev'));
})

//开发构建
gulp.task('dev',function(done){
	condition = false;
	//依次顺序执行
	runSequence(
		['revCss'],
		['revHtmlCss'],
		['revJs'],
		['revHtmlJs'],
		done);
})

gulp.task('default',['testCssmin','testJsmin','testImagemin','testHtmlmin','auto','dev']);
