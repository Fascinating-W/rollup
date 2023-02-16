/*
 * @Author: Wanko
 * @Date: 2023-02-15 15:55:07
 * @LastEditors: Wanko
 * @LastEditTime: 2023-02-15 17:56:37
 * @Description: 
 */
import json from '@rollup/plugin-json'
import terser from '@rollup/plugin-terser'

export default {
  input: 'src/main.js',
  output: [
    {
      file: 'dist/index.es.js'
    },
    {
      file: 'dist/index.cjs.js',
      format: 'cjs'
    },
    {
      file: 'dist/index.iife.js',
      format: 'iife',
      name: 'version'
    },
    {
      file: 'dist/index.umd.js',
      format: 'umd',
      name: 'version'
    }
  ],
  plugins: [json()]
}
