const net = require('net')
const fs = require('fs')
const { Answer } = require('./answer')
const socketPath = '/var/run/technicaltest.sock'

const server = net.createServer((socket) => {
	socket.on('data', (chunk) => {
		chunk = JSON.parse(chunk.toString())
		const questionId = +chunk.questionId

		if (questionId == 1) {
			socket.write(JSON.stringify({ questionId: questionId, output: Answer.removeVowels(chunk.input) }))
		} else if (questionId == 2) {
			socket.write(JSON.stringify({ questionId: questionId, output: Answer.sumNumbers(chunk.input) }))
		}

		process.nextTick(() => {
			fs.unlinkSync(socketPath)
			process.exit(0)
		})
	})
})

server.listen(socketPath, () => {
	console.log('Unix socket listening on domain ' + socketPath)
})
