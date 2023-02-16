/*
 * @Author: Wanko
 * @Date: 2023-02-15 15:55:07
 * @LastEditors: Wanko
 * @LastEditTime: 2023-02-16 17:08:29
 * @Description: 
 */
import json from '@rollup/plugin-json'
import terser from '@rollup/plugin-terser'

export default {
  input: 'src/main.js',
  output: [
    {
      file: 'dist/index.js',
      sourcemap: true
    }
  ],
  plugins: [json(), terser()]
}
