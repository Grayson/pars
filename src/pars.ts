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

function sequence(...parser: PartiallyAppliedParser[]) : PartiallyAppliedParser
{
	return (input) => {
		const iterator = parser[Symbol.iterator]();
		let next = iterator.next()
		if (next.done) {
			return null
		}

		let matched = ''
		let remainder = input
		while(!next.done) {
			let result: ParseResult = next.value(remainder)
			if (!result) {
				return null
			}
			matched = matched + result
			remainder = remainder.substring(1)
			next = iterator.next()
		}
		return matched
	}
}

function partial(parser: Parser, match: string): PartiallyAppliedParser {
	return (input) => parser(input, match)
}

export { 
	either,
	partial,
	one,
	sequence,
}