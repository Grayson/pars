import { one } from "./pars"

describe('coherence', () => {
	test('one should match input', () => {
		expect(one('foo', 'f')).toBe('f')
	})

	test('one should not match input', () => {
		expect(one('foo', 'o')).toBeNull()
	})
})