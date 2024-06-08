const net = require('net')
const { argsParser } = require('./helpers/cliClient')
const { validQuestion } = require('./helpers//validQuestion')
const { questionsList } = require('./databases/questions')

const argsOutput = argsParser(process.argv)

const client = net.createConnection(argsOutput.socketPath, () => {
	client.write(JSON.stringify({ questionId: argsOutput.questionId, input: argsOutput.input }))
})

client.on('connect', () => console.info('Unix socket connected to server'))

client.on('data', (chunk) => {
	const parseChunk = JSON.parse(chunk.toString())

	validQuestion(parseChunk, questionsList)
	client.end()
})

client.on('end', () => console.info('Unix socket closed to server'))
