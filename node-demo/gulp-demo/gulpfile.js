const {series, parallel, src, dest, watch} = require("gulp");
const uglify = require("gulp-uglify");
const minify = require("gulp-minify");
const babel = require("gulp-babel");
const ts = require("gulp-typescript");

let transpile = () => {
    return src("src/*.ts")
        .pipe(ts({noImplicitAny : true}))
        .pipe(dest("./js"))
}

let build = async () => {
    return src("src/*.js")
        // .pipe(uglify())
        .pipe(babel())
        .pipe(minify())
        .pipe(dest("./build"))
}

let css = async () => {
    console.log("CSS")
}

let defaultTask = async () => {
    watch("src/*.ts", transpile);   
}

exports.build = build;
exports.default = defaultTask;
exports.seriesTasks = series(transpile, build)
exports.parallelTasks = parallel(build, css)

