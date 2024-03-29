import vue from 'rollup-plugin-vue'
import typescript from 'rollup-plugin-typescript2';
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import { terser } from 'rollup-plugin-terser'
import del from 'rollup-plugin-delete'
import scss from 'rollup-plugin-scss'

export default [
    {
        input: './src/plugins/ShopToolItemPlugin.ts',
        output: [
            {
                format: 'esm',
                file: 'dist/index.mjs',
                plugins: [terser()]
            },
            {
                format: 'cjs',
                file: 'dist/index.js',
                plugins: [terser()]
            }
        ],
        plugins: [
            vue(),
            typescript({
                check: false,
                tsconfigOverride: {
                    compilerOptions: {
                        sourceMap: true,
                        declaration: true,
                        declarationMap: true,
                    }
                }
            }),
            scss(),
            peerDepsExternal(),
            del({ targets: 'dist/*' })
        ]
    }
]