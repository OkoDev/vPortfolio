const project = require("path").basename(__dirname);
const source = "assets";
// const source = require("path").resolve(__dirname,'./assets');
const fs = require('fs');


const {src, dest, parallel, series} = require('gulp'),
    gulp = require('gulp'),
    webpack = require('webpack'),
    webpackS = require('webpack-stream'),
    browsersync = require("browser-sync").create(),
    fileinclude = require("gulp-file-include"),
    prefixer = require('gulp-autoprefixer'),
    group_media = require('gulp-group-css-media-queries'),// сборщик медиа запросов
    clean_css = require('gulp-clean-css'),
    uglify = require('gulp-uglify-es').default,
    scss = require('gulp-sass'),
    rename = require('gulp-rename'),
    imagemin = require('gulp-imagemin'),
    webp = require('gulp-webp'),// todo написать проверку
    webpcss = require('gulp-webpcss'),
    webphtml = require('gulp-webp-html'),
    ttf2woff = require('gulp-ttf2woff'),
    ttf2woff2 = require('gulp-ttf2woff2'),
    fonter = require('gulp-fonter'),
    del = require('del');
    //reload = browsersync.reload;

let path = {
    build: {
        html: project + '/',
        css: project + '/css/',
        js: project + '/js/',
        img: project + '/img/',
        fonts: project + '/fonts/',
    },
    src: {
        html: [source + '/*.html', "!" + source + '/_*.html'],
        css: source + '/scss/app.scss',
        js: source + '/js/all.js',
        // js: source + '/**/*.js',
        img: source + '/img/**/*.{jpg,png,svg,gif,ico,webp}',
        fonts: source + '/fonts/*.ttf'
    },
    watch: {
        html: source + '/**/*.html',
        css: source + '/**/*.*css',
        js:  source + '/js/**/*.js',
        vue:  source + '/js/vue/**/*.vue',
        img: source + '/img/**/*.{jpg,png,svg,gif,ico,webp}',
    },
    clean: './' + project + '/',
}


const VueLoaderPlugin = require('vue-loader/lib/plugin');
const ProvidePlugin = require('webpack/lib/ProvidePlugin.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');

let webPackConfig = {
    mode: 'development',
    entry: require("path").resolve(__dirname,'./assets') + '/js/vue/main.js',
    output: {
        filename: '../main.js'
    },
    module: {
        rules: [
            // { loader: require.resolve('./debugger') },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader'
                }
            },
            // example configuring CSS Modules
            {
                test: /\.css$/,
                oneOf: [
                    // this applies to <style module>
                    {
                        resourceQuery: /module/,
                        use: [
                            'vue-style-loader',
                            {
                                loader: 'css-loader',
                                options: {
                                    modules: true,
                                    localIdentName: '[local]_[hash:base64:8]'
                                }
                            }
                        ]
                    },
                    // this applies to <style> or <style scoped>
                    {
                        use: [
                            'vue-style-loader',
                            'css-loader'
                        ]
                    }
                ]
            },
            // exmaple configration for <style lang="scss">
            {
                test: /\.scss$/,
                use: [
                    'vue-style-loader',
                    'sass-loader',
                    {
                        loader: 'sass-loader',
                        // global data for all components
                        // this can be read from a scss file
                        options: {
                            data: '$color: red;'
                        }
                    }
                ]
            }
        ]
    },
    resolveLoader: {
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './assets/index.html',
            filename: '../index.html'
        }),
        new VueLoaderPlugin(),
        new ProvidePlugin({
            $: 'jquery',
            jquery: 'jquery',
            jQuery: 'jquery',
            'window.jquery': 'jquery',
            'window.jQuery': 'jquery',
            'window.$': 'jquery',
        }),
    ]
};

pack = () => src(path.src.html)
    .pipe(webpackS(webPackConfig))
    .pipe(dest(path.build.js))
    .pipe(browsersync.stream())



browserSync = (p) => {
    browsersync.init({
        server: {
            baseDir: './' + project + '/'
        },
        // tunnel: 'oko-dev',  // Attempt to use the URL https://yousutename.loca.lt
        // proxy: "oko-web-dev.dev",
        port: 3000,
        notify: false
    })
}

html = (p) => src(path.src.html)
    .pipe(fileinclude())
    .pipe(webphtml())
    .pipe(dest(path.build.html))
    .pipe(browsersync.stream())


css = (p) => src(path.src.css)
    .pipe(
        scss({
            outputStyle: 'expanded',
            sourceMap: true,
            errLogToConsole: true
        })
    )
    .pipe(
        group_media()
    )
    .pipe(
        prefixer({
            overrideBrowserlist: ['last 5 versions'],
            cascade: true
        })
    )
    .pipe(
        webpcss({
            webpClass: '.webp',
            noWebpClass: '.no-webp'
        }))
    .pipe(dest(path.build.css))
    .pipe(clean_css())
    .pipe(
        rename({
            extname: '.min.css'
        })
    )
    .pipe(dest(path.build.css))
    .pipe(browsersync.stream())

js = (p) => src(path.src.js)
    .pipe(fileinclude())
    .pipe(dest(path.build.js))
    .pipe(
        uglify()
    )
    .pipe(
        rename({
            extname: '.min.js'
        })
    )
    .pipe(dest(path.build.js))
    // .pipe(webpackS(webPackConfig))
    // .pipe(dest(path.build.js))
    .pipe(browsersync.stream())


images = (p) => src(path.src.img)
    .pipe(
        webp({
            quality: 70
        })
    )
    .pipe(dest(path.build.img))
    .pipe(src(path.src.img))
    .pipe(
        imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            interlaced: true,
            optimizationLevel: 3 // 0 to 7
        })
    )
    .pipe(dest(path.build.img))
    .pipe(browsersync.stream())


fonts = (p) => {
    src(path.src.fonts)
        .pipe(ttf2woff())
        .pipe(dest(path.build.fonts))
    return src(path.src.fonts)
        .pipe(ttf2woff2())
        .pipe(dest(path.build.fonts))
}

gulp.task('otf2ttf', () => src([source + '/fonts/*.otf'])
    .pipe(fonter({
        formats: ['ttf']
    }))
    .pipe(dest(source + '/fonts/'))
)

fontsStyle = (p) => {

    let file_content = fs.readFileSync(source + '/scss/fonts.scss');
    if (file_content == '') {
        fs.writeFile(source + '/scss/fonts.scss', '', cb);
        return fs.readdir(path.build.fonts, function (err, items) {
            if (items) {
                let c_fontname = '';
                for (var i = 0; i < items.length; i++) {
                    let fontname = items[i].split('.');
                    fontname = fontname[0];
                    if (c_fontname != fontname) {
                        fs.appendFile(source + '/scss/fonts.scss', '@include font("' + fontname + '", "' + fontname + '", "400", "normal");', cb);
                    }
                     c_fontname = fontname;
                }
            }
        })
    }
}
function cb() { }

watchFiles = (p) => {
    gulp.watch([path.watch.html], html);
    gulp.watch([path.watch.css], css);
    gulp.watch([path.watch.js], js);
    gulp.watch([path.watch.vue], pack);
    gulp.watch([path.watch.img], images);
}

clean = (p) => del(path.clean);

let build = gulp.series(clean, gulp.parallel(html, css, images, fonts, js, pack), fontsStyle);
let watch = gulp.parallel(build, watchFiles, browserSync);

exports.html = html;
exports.css = css;
exports.js = js;
exports.pack = pack;
exports.images = images;
exports.fonts = fonts;
exports.fontsStyle = fontsStyle;
exports.build = build;
exports.watch = watch;
exports.default = watch;


