import { one, partial, taggingPartial } from "./pars"

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

	test('tagged with result', () => {
		const result = taggingPartial(one, 'f', 42)('foo')
		expect(result.result).toBe('f')
		expect(result.tag).toBe(42)
	})

	test('tagged without result', () => {
		const result = taggingPartial(one, 'b', 42)('foo')
		expect(result.result).toBeNull()
		expect(result.tag).toBe(42)
	})
})