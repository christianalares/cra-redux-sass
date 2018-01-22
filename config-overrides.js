/* eslint-disable no-param-reassign */
const rewireEslint = require('react-app-rewire-eslint')

module.exports = (config, env) => {
	const rulesOneOf = config.module.rules[1].oneOf
	// Push to the array in the second last position
	// This is because the file loader has to be the last item in the array
	// Splice [length-1, remove 0 items, third argument is to add]
	rulesOneOf.splice(rulesOneOf.length - 1, 0, {
		test: /\.scss$/,
		loaders: [
			'style-loader?localIdentName=[local]-[hash:base64:10]',
			'css-loader?localIdentName=[local]-[hash:base64:10]',
			'sass-loader?localIdentName=[local]-[hash:base64:10]'
		]
	})
	// Add sass and scss to the file-loaders exclude array
	rulesOneOf[rulesOneOf.length - 1].exclude.push(/\.sass$/, /\.scss$/)

	config = rewireEslint(config, env)
	return config
}
