export default {
  entry: 'src/index.js',
  plugins: [

  ],
  sourceMap: true,
  moduleName: 'backTop',
  targets: [
    { dest: 'dist/index.js', format: 'umd' },
    { dest: 'dist/index.es.js', format: 'es' },
  ],
};
