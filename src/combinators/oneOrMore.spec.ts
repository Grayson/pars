import { one, partial } from "../pars"
import { oneOrMore } from "./oneOrMore"

describe('oneOrMore tests', () => {
	test('oneOrMore should match once', () => {
		const parser = oneOrMore(partial(one, 'f'))
		expect(parser('foo')).toBe('f')
	})

	test('oneOrMore should not match', () => {
		const parser = oneOrMore(partial(one, 'b'))
		expect(parser('foo')).toBeNull()
	})

	test('oneOrMore should match twice', () => {
		const parser = oneOrMore(partial(one, 'f'))
		expect(parser('ffo')).toBe('ff')
	})

	test('oneOrMore should match full string', () => {
		const parser = oneOrMore(partial(one, 'ff'))
		expect(parser('ff')).toBe('ff')
	})

	test('oneOrMore should be too long', () => {
		const parser = oneOrMore(partial(one, 'ff'))
		expect(parser('f')).toBeNull()
	})
})
