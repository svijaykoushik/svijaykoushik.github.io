var gulp = require('gulp');
var webServer = require('gulp-webserver');
var minify = require('gulp-minify');
var cleanCSS = require('gulp-clean-css');
var clean = require('del');
var rename = require('gulp-rename');
var crawler = require('simplecrawler');
var log = require('fancy-log');

gulp.task('webServer', function () {
    return gulp.src('.')
        .pipe(webServer({
            host: '0.0.0.0',
            port: 3000,
            livereload: true,
            https: true,
        }));
});

gulp.task('clean-css', function () {
    return clean(['css/namebanner.min.css']);
});

gulp.task('clean-js', function () {
    return clean(['js/app.min.js']);
});

gulp.task('pack-js', /*['clean-js'],*/ function () {
    return gulp.src(["build/js/app.js"])
        .pipe(minify({
            ext: {
                min: '.js'
            },
            noSource: true
        }))
        .pipe(gulp.dest('js/'))
});

gulp.task('pack-css', /*['clean-css'],*/ function () {
    return gulp.src(["build/css/namebanner.css"])
        .pipe(cleanCSS())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('css/'))
});

gulp.task('link-checker', function () {
    crawler("https://svijaykoushik.github.io")
        .on('fetch404', function (queueItem, response) {
            log.error("Resource not found at " + queueItem.url + " from " + queueItem.referer);
            log.info("Response code: " + response.statusCode);
        })
        .on('complete', function (queueItem) {
            log("NO broken links in " + queueItem.referer);
        })
});

gulp.task('defaultBuildTask', gulp.parallel('pack-js', 'pack-css'));