import typescript from '@rollup/plugin-typescript';
import copy from './rollup.plugin.copy.js';
import terser from '@rollup/plugin-terser';

export default {
  input: 'src/index.ts',
  output: {
    file: 'build/build.min.js',
    format: 'iife',
  },
  plugins: [typescript(), copy('./src/assets', './build/assets'), terser()],
};
