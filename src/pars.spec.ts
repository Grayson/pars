import { foo } from "./pars"

describe('coherence', () => {
	test('foo should return 1', () => {
		expect(foo()).toBe(1)
	})
})