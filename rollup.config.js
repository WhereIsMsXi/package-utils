import del from 'rollup-plugin-delete';
import typescript from '@rollup/plugin-typescript';

import { dts } from 'rollup-plugin-dts';

export default [
	{
		input: "src/index.ts",
		output: { file: "dist/index.js", format: "es" },
    plugins: [
			typescript(),
      del({ targets: 'dist/*' })
    ]
	},
	{
		input: "src/index.ts",
		output: { file: "dist/index.d.ts", format: "es" },
		plugins: [ dts() ],
	}
];