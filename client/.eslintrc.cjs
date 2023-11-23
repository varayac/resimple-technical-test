module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'standard',
		'plugin:react/recommended',
		'plugin:react/jsx-runtime',
		'plugin:react-hooks/recommended',
		'eslint-config-prettier',
	],
	overrides: [
		{
			env: {
				node: true,
			},
			files: ['.eslintrc.{js,cjs}'],
			parserOptions: {
				sourceType: 'script',
			},
		},
	],
	ignorePatterns: ['dist', 'package-lock.json', '.eslintrc.cjs'],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['react'],
	rules: {},
};
