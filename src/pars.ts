type ParseResult = string | null
type Parser = (input: string, match: string) => ParseResult

function one(input: string, match: string): ParseResult {
	return input.startsWith(match)
		? match
		: null
}

function partial(parser: Parser, match: string): (input: string) => ParseResult {
	return (input) => parser(input, match)
}

export { 
	partial,
	one,
}