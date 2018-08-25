import babel from 'rollup-plugin-babel';
import babelrc from 'babelrc-rollup';

export default {
  entry: 'src/index.js',
  plugins: [babel(babelrc())],
  sourceMap: true,
  moduleName: 'backTop',
  targets: [
    { dest: 'dist/index.js', format: 'umd' },
    { dest: 'dist/index.es.js', format: 'es' },
  ],
};
