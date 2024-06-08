exports.findNextQuestionById = (questionId, questions) => {
	if (Array.isArray(questions) && questions.length > 0) {
		return questions.find((v) => v.id == questionId)
	}

	throw new Error(`questionId ${questionId} not exists in our data`)
}
