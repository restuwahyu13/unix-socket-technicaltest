export class Answer {
	static removeVowels(str) {
		const vowels = ['a', 'e', 'i', 'o', 'u']
		const removeVowels = []

		for (let i = 0; i < str.length; i++) {
			const char = str[i].toLowerCase()
			if (!vowels.includes(char)) {
				removeVowels.push(char)
			}
		}

		return removeVowels.join('').replace(/\s/g, '')
	}

	static sumNumbers(arr) {
		return arr.map((v) => {
			return Math.abs(v.a) + Math.abs(v.b)
		})
	}
}
