import * as util from './helpers'

describe('classNames', () => {
    it('should return empty string if no param is provided', () => {
        expect(util.classNames()).toBe('')
    })

    it('should return string containing non-nullish array elements joined with spaces', () => {
        expect(util.classNames('hidden', 'medium')).toBe('hidden medium')
        expect(util.classNames('hidden', null, 'medium')).toBe('hidden medium')
    })
})
