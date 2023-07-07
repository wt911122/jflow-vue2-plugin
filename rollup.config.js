import babel from 'rollup-plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from "rollup-plugin-terser"; // 压缩插件

export default [
    {
        input: 'index.js', // 入口文件
        output: {
            file: 'dist/jflow-vue2-plugin.es.min.js',
            format: 'esm',
            sourcemap: true
        },
        plugins: [
            resolve(),
            commonjs(),
            terser(), 
        ], 
        external: ['vue', '@joskii/jflow-core']
    },
    {
        input: 'index.js', // 入口文件
        output: {
            exports: 'named',
            file: 'dist/jflow-vue2-plugin.min.js', // 输出文件
            format: 'umd', // 输出格式
            name: 'jflow-vue2-plugin', // 全局变量名称，用于在浏览器环境中使用.
            sourcemap: true
        },
        plugins: [
            resolve(),
            commonjs(),
            babel({
                exclude: 'node_modules/**' 
            }),
            terser(), 
        ], 
        external: ['vue', '@joskii/jflow-core']
    },
    
];