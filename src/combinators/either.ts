import { PartiallyAppliedParser } from "../types"

export function either(...parsers: PartiallyAppliedParser[])
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
