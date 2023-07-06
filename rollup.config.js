import babel from 'rollup-plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
    input: 'index.js', // 入口文件
    output: {
        exports: 'named',
        file: 'dist/bundle.js', // 输出文件
        format: 'umd', // 输出格式
        name: 'jflow-vue2-plugin', // 全局变量名称，用于在浏览器环境中使用.
        globals: {
            vue: 'vue',
            '@joskii/jflow': 'jflow'
        }
    },
    plugins: [
        resolve(),
        commonjs(),
        babel({
            exclude: 'node_modules/**' // 只对源代码进行转译
        }),
    ],
    external: ['vue', '@joskii/jflow'] // 将 vue 和 @joskii/jflow 设置为外部依赖
};