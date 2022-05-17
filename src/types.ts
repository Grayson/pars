type ParseResult = string | null
type Parser = (input: string, match: string) => ParseResult
type PartiallyAppliedParser = (input: string) => ParseResult

export {
	ParseResult,
	Parser,
	PartiallyAppliedParser,
}