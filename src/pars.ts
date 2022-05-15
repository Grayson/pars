type ParseResult = string | null
type Parser = (input: string, match: string) => ParseResult
type PartiallyAppliedParser = (input: string) => ParseResult

function one(input: string, match: string): ParseResult {
	return input.startsWith(match)
		? match
		: null
}

function either(...parsers: PartiallyAppliedParser[])
	: PartiallyAppliedParser
{
	return (input) => {
		for (const parser of parsers) {
			const value = parser(input)
			if (!!value)
				return value
		}
		return null
	}
}

function partial(parser: Parser, match: string): PartiallyAppliedParser {
	return (input) => parser(input, match)
}

export { 
	either,
	partial,
	one,
}