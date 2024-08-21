import del from 'rollup-plugin-delete';
import typescript from '@rollup/plugin-typescript';
import { terser } from "rollup-plugin-terser";

import { dts } from 'rollup-plugin-dts';

export default [
	{
		input: "src/index.ts",
		output: { file: "dist/index.js", format: "es" },
    plugins: [
			typescript(),
			terser({
				compress: { drop_console: false },
				format: { comments: false }
			}),
      del({ targets: 'dist/*' })
    ]
	},
	{
		input: "src/index.ts",
		output: { file: "dist/index.d.ts", format: "es" },
		plugins: [ dts() ],
	}
];