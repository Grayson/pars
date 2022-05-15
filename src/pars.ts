import { Parser, ParseResult, PartiallyAppliedParser } from "./types"

export function one(input: string, match: string): ParseResult {
	return input.startsWith(match)
		? match
		: null
}

export function partial(parser: Parser, match: string)
	: PartiallyAppliedParser
{
	return (input) => parser(input, match)
}
