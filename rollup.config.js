import del from 'rollup-plugin-delete';

export default [
	{
		input: "src/index.js",
		output: { file: "dist/index.js", format: "es" },
    plugins: [
      del({ targets: 'dist/*' })
    ]
	},
];