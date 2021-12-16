import livereload from "rollup-plugin-livereload";
import babel from '@rollup/plugin-babel';
import {nodeResolve} from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';
import image from "@rollup/plugin-image";
import postcss from 'rollup-plugin-postcss'
import json from "@rollup/plugin-json";
import serve from "rollup-plugin-serve";
import typescript from '@rollup/plugin-typescript';

export default {
    input: "./src/index.tsx",
    plugins: [
        nodeResolve({
            extensions: [".js", ".ts", ".tsx"],
            module: true,
            jsnext: true,
            main: true,
            browser: true,
        }),
        replace({
            'process.env.NODE_ENV': JSON.stringify('development')
        }),
        typescript(),
        babel({
            presets: ["@babel/preset-react", "@babel/preset-typescript"],
        }),
        commonjs({
            include: ['node_modules/**']
        }),
        json(),
        serve({
            open: true,
            verbose: true,
            contentBase: ["", "public"],
            host: "localhost",
            port: 3000,
            historyApiFallback: true
        }),
        livereload({watch: "dist"}),
        image(),
        postcss({
            extensions: [".css"],
        })
    ],
    output: {
        file: "dist/bundle.js",
        format: "iife",
        sourcemap: true
    }
};
