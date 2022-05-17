import { ParseResult, PartiallyAppliedParser } from "../types";

function doMatch(input: string, parsers: PartiallyAppliedParser[]): ParseResult {
	let remainder = input
	const reducer = (acc: string | null, next: PartiallyAppliedParser) =>
	{
		const value = next(remainder)
		remainder = remainder.substring(value?.length ?? 0)
		return !!value ? (acc ?? '') + value : null
	}
	return parsers.reduce(reducer, null)
}

export function oneOrMore(...parsers: PartiallyAppliedParser[])
	: PartiallyAppliedParser
{
	return (input) => {
		let remainder = input
		let matched = null
		while (remainder.length > 0) {
			const result = doMatch(remainder, parsers)
			if (!result) {
				return matched
			}
			matched = (matched ?? '') + result
			remainder = remainder.substring(result.length)
		}

		return matched
	}
}