const assert = require('assert')
const { findNextQuestionById } = require('./nextQuestion')

exports.validQuestion = (input, questions) => {
	const validQuestion = new ValidQuestion(input, questions)

	switch (input.questionId) {
		case 1:
			validQuestion.answerNumberOne()
			break
		case 2:
			validQuestion.answerNumberTwo()
			break
		default:
			throw new Error(`questionId ${input.questionId} not exists in our data`)
	}
}

class ValidQuestion {
	input = undefined
	questions = undefined

	constructor(input, questions) {
		this.input = input
		this.questions = questions
	}

	answerNumberOne() {
		const findQuestionById = findNextQuestionById(this.input.questionId + 1, this.questions)

		if (typeof this.input.output == 'string') {
			assert.equal(this.input.output, 'rstwhysptr')
			console.info(`\n\Question No ${findQuestionById.id}: `, findQuestionById, '\n\n')
		} else {
			this._answerError(this.input.questionId)
		}
	}

	answerNumberTwo() {
		const findQuestionById = findNextQuestionById(this.input.questionId, this.questions)

		if (Array.isArray(this.input.output) && this.input.output.length > 0) {
			const isMatch = this.input.output.every((v, i) => v == findQuestionById.output[i])
			assert.equal(isMatch, true)
			this._screenCompleted()
		} else {
			this._answerError(this.input.questionId)
		}
	}

	_answerError(questionId) {
		throw new Error(`Invalid answer for question no ${questionId}`)
	}

	_screenCompleted() {
		console.info('\n')
		console.info('===========================================================')
		console.info('===================== TECHNICAL TEST ======================')
		console.info('===========================================================')
		console.info('\n')
		console.info('Congratulations your technical test has completed,')
		console.info('And then screenshots this output and follow up to recruiter.')
		console.info('\n')
		console.info('Regards,')
		console.info('IT Team Coding Street Art')
		console.info('\n')
		console.info('===========================================================')
		console.info('===========================================================')
		console.info('\n')
	}
}
