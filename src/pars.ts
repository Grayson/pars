function one(input: string, match: string): string | null {
	return input.startsWith(match)
		? match
		: null
}

export { one }