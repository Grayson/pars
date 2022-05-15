import { one, partial } from "../pars"
import { sequence } from "./sequence"

describe('sequence tests', () => {
	test('sequence should match', () => {
		let parser = sequence(
			partial(one, 'f'),
			partial(one, 'o'),
			partial(one, 'o')
		)
		expect(parser('foo')).toBe('foo')
	})

	test('sequence should not match', () => {
		let parser = sequence(
			partial(one, 'f'),
			partial(one, 'o'),
			partial(one, 'x')
		)
		expect(parser('foo')).toBeNull()
	})

	test('sequence should not match while empty', () => {
		let parser = sequence()
		expect(parser('foo')).toBeNull()
	})

	test('sequence should match multi-character strings', () => {
		let parser = sequence(
			partial(one, 'foo'),
			partial(one, 'bar'),
		)
		expect(parser('foobar')).toBe('foobar')
	})
})