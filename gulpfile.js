const gulp = require('gulp');
const webpack = require('gulp-webpack');
const merge = require('merge-stream');
const del = require('del');

gulp.task('build', () => {
    return merge(
        merge(webpack({
            devtool: 'source-map',
            entry: './src/client/index.js',
            output: { filename: 'index.bundle.js' },
        }), gulp.src([
            './src/client/**/*',
            '!./src/client/**/*.js',
        ]))
        .pipe(gulp.dest('./dist/client')),

        gulp.src('./src/server/**/*')
        .pipe(gulp.dest('./dist/server'))
    );
});

gulp.task('clean', () => {
    return del('./dist');
})
