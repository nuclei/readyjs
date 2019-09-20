// rollup.config.js
import typescript from 'rollup-plugin-typescript'
import nodeResolve from 'rollup-plugin-node-resolve'

const pkg = require('./package')

export default {
  input: pkg.config.src,
  output: [{
    format: 'es',
    file: pkg.main,
    sourcemap: true,
  }, {
    format: 'iife',
    name: pkg.config.moduleName,
    file: 'dist/readyjs.iffe.js',
    sourcemap: true,
    target: 'es5'
  }],
  plugins: [
    typescript({
      typescript: require('typescript'),
      outDir: 'dist',
      rootDir: 'src',
      module: 'es6',
      target: 'es6',
      declaration: false,
      removeComments: true,
      lib: [
        'dom',
        'es6'
      ] // use local version
    }),
    nodeResolve({
      mainFields: ['module', 'main', 'jsnext:main'],
      browser: true,
      extensions: [ '.js', '.json' ],
      preferBuiltins: false
    })
  ]
}
