type ParseResult = string | null
type Parser = (input: string, match: string) => ParseResult
type PartiallyAppliedParser = (input: string) => ParseResult

function one(input: string, match: string): ParseResult {
	return input.startsWith(match)
		? match
		: null
}

function either(left: PartiallyAppliedParser, right: PartiallyAppliedParser)
	: PartiallyAppliedParser
{
	return (input) => left(input) || right(input)
}

function partial(parser: Parser, match: string): PartiallyAppliedParser {
	return (input) => parser(input, match)
}

export { 
	either,
	partial,
	one,
}