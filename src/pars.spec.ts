import { either, one, partial, sequence } from "./pars"

describe('coherence', () => {
	test('one should match input', () => {
		expect(one('foo', 'f')).toBe('f')
	})

	test('one should not match input', () => {
		expect(one('foo', 'o')).toBeNull()
	})

	test('partial should match', () => {
		expect(partial(one, 'f')('foo')).toBe('f')
	})

	test('partial should not match', () => {
		expect(partial(one, 'f')('foo')).toBe('f')
	})

	test('either should match', () => {
		let parser = either(
			partial(one, 'b'),
			partial(one, 'c'),
			partial(one, 'f')
		)
		expect(parser('foo')).toBe('f')
	})

	test('either should not match', () => {
		let parser = either(
			partial(one, 'b'),
			partial(one, 'c')
		)
		expect(parser('foo')).toBeNull()
	})

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