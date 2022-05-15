import { one, partial } from "../pars"
import { either } from "./either"

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