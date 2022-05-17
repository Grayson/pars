import {
	ParseResult,
	PartiallyAppliedParser,
} from '../types'

export function sequence(...parser: PartiallyAppliedParser[])
	: PartiallyAppliedParser
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
			remainder = remainder.substring(result.length)
			next = iterator.next()
		}
		return matched
	}
}
