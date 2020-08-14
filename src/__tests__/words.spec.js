const words = require('../index')

describe('Words', () => {
    describe('Falsy words', () => {
        it('Word: `no`', () => {
            expect(words.no).toBe(false)
        })

        it('Word: `off`', () => {
            expect(words.off).toBe(false)
        })

        it('Word: `zero`', () => {
            expect(words.zero).toBe(false)
        })
    })

    describe('Truthy words', () => {
        it('Word: `on`', () => {
            expect(words.on).toBe(true)
        })

        it('Word: `one`', () => {
            expect(words.one).toBe(true)
        })

        it('Word: `yes`', () => {
            expect(words.yes).toBe(true)
        })
    })
})