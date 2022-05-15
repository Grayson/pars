import { either, one, partial } from "./pars"

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
})