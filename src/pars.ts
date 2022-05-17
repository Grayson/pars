import {
	Parser,
	ParseResult,
	PartiallyAppliedParser,
	TaggingPartiallyAppliedParser
} from "./types"

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

export function taggingPartial(parser: Parser, match: string, tag: any)
	: TaggingPartiallyAppliedParser
{
	return (input) => ({ tag, result: parser(input, match) })
}
