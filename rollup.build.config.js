import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';
import copy from './plugins/rollup.plugin.copy.js';

export default {
  input: 'src/index.ts',
  output: {
    file: 'build/build.min.js',
    format: 'iife',
  },
  plugins: [typescript(), copy('./src/assets', './build/assets'), terser()],
};
