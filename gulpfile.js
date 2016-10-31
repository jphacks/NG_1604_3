'use strict'

/**
 * Module dependencies
 */
const gulp = require('gulp')
const plumber = require('gulp-plumber')
const sketch = require('gulp-sketch')

/**
 * Tasks
 */
gulp.task('pages', function() {
   gulp.src('./*.sketch')
       .pipe(plumber())
       .pipe(sketch({
         export: 'pages',
         formats: 'png'
       }))
       .pipe(gulp.dest('./pages'))
})

gulp.task('artboards', function() {
    gulp.src('./*.sketch')
        .pipe(plumber())
        .pipe(sketch({
          export: 'artboards',
          formats: 'png'
        }))
        .pipe(gulp.dest('./artboards'))
})

gulp.task('slices', function() {
    gulp.src('./*.sketch')
        .pipe(plumber())
        .pipe(sketch({
          export: 'slices',
          formats: 'png'
        }))
        .pipe(gulp.dest('./slices'))
})

gulp.task('export', ['pages', 'artboards', 'slices'])

gulp.task('watch', function() {
    gulp.watch(['./*.sketch'], ['export'])
})

gulp.task('default', ['export'])
