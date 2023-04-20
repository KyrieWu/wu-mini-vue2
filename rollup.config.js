import babel from 'rollup-plugin-babel'
// 默认可以导出一个对象 最为打包的配置文件
export default {
    input: './src/index.js', // 入口
    output: {
        file: './dist/vue.js', // 出口
        name: 'Vue',
        format: 'umd', // esm es6模块  commonjs模块 umd模块
        sourcemap: true,// 希望可以调试源代码
    },
    plugins: [
        babel({
            exclude: 'node_modules/**' // 排除node_modules 所有文件
        })
    ]
}