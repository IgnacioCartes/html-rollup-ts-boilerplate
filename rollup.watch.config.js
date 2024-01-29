import typescript from '@rollup/plugin-typescript';
import serve from 'rollup-plugin-serve';
import copy from './plugins/rollup.plugin.copy.js';

export default {
  input: 'src/index.ts',
  output: {
    dir: 'build',
    format: 'iife',
    sourcemap: 'inline',
  },
  watch: {
    exclude: ['node_modules/**', 'build/**'],
  },
  plugins: [
    typescript(),
    serve({
      contentBase: ['build', 'www'],
      host: 'localhost',
      port: 10001,
    }),
    copy('./src/assets', './build/assets'),
  ],
};
