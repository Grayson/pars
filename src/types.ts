export type ParseResult = string | null
export type Parser = (input: string, match: string) => ParseResult
export type PartiallyAppliedParser = (input: string) => ParseResult

export interface TaggedParseResult {
	tag: any
	result: ParseResult
}

export type TaggingPartiallyAppliedParser = (input: string) => TaggedParseResult
