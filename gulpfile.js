//requires
var gulp    =   require("gulp"),
    concat  =   require("gulp-concat"),
    connect =   require("gulp-connect"),
    rename  =   require("gulp-rename"),
    sass    =   require("gulp-sass"),
    uglify  =   require("gulp-uglify"),
    watch   =   require("gulp-watch"),
    minify_html  =   require("gulp-minify-html");

//vectors
var html_array  =   [
        "dev/*.html",
        "dev/**/*.html"
    ],
    sass_array  =   [
        "dev/scss/estilo.scss"
    ],
    css_array   =   [],
    js_array    =   [
        "node_modules/jquery/dist/jquery.js",
        "node_modules/angular/angular.js",
        "node_modules/angular-route/angular-route.js",
        "dev/js/app.js",
        "dev/js/CtrlData.js"
    ];

gulp.task("connect", function(){
    connect.server({
        root: "prod/",
        livereload: true
    });
});

gulp.task("html", function(){
    gulp.src(html_array)
       .pipe(minify_html())
       .pipe(gulp.dest("prod/"))
       .pipe(connect.reload());
});

gulp.task("sass", function(){
   gulp.src(sass_array)
       .pipe(sass())
       .pipe(concat("all.min.css"))
       .pipe(minify_html())
       .pipe(gulp.dest("prod/css/"))
       .pipe(connect.reload());
});

gulp.task("js", function(){
   gulp.src(js_array)
       .pipe(concat("all.min.js"))
       .pipe(uglify())
       .pipe(gulp.dest("prod/js/"))
       .pipe(connect.reload());
});

gulp.task("watch", function(){
    gulp.watch(html_array, ["html"]);
    gulp.watch(sass_array, ["sass"]);
    gulp.watch(js_array, ["js"]);
});

gulp.task("default", ["connect", "html", "sass", "js", "watch"]);