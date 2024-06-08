const dJSON = require('dirty-json')

exports.argsParser = (args) => {
	let newArgs = {}
	const validCliArgs = ['socketPath', 'questionId', 'output', 'input']

	if (Array.isArray(args) && args.length > 0) {
		args.forEach((v) => {
			if (v.startsWith('--')) {
				const separateArgs = v.split('=')
				const keyArgs = separateArgs[0].replace('--', '')

				if (!validCliArgs.includes(keyArgs)) {
					throw new SyntaxError('Invalid arguments')
				}

				newArgs[separateArgs[0].replace('--', '')] = separateArgs[1]
			}
		})
	}

	newArgs.input = dJSON.parse(newArgs.input) || {}

	if (Object.values(newArgs.input) <= 0) {
		throw new Error('Input not to be empty')
	} else if (!newArgs.socketPath.endsWith('.sock')) {
		throw new Error('Socket path must be following by .sock')
	}

	return newArgs
}
