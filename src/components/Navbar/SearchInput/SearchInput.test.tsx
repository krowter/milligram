import { fireEvent, render, screen, within } from '@testing-library/react'
import { SearchInput } from './SearchInput'

describe('<SearchInput /> unit tests', () => {
    it('should contain input=search with correct placeholder', () => {
        render(<SearchInput />)
        const form = screen.getByRole('search')

        expect(form).toBeInTheDocument()

        const input = within(form).getByRole('searchbox')
        expect(input).toHaveAttribute('placeholder', 'Search')
    })

    describe('clear button', () => {
        it('should display "clear" icon on input focus', () => {
            render(<SearchInput />)
            const form = screen.getByRole('search')

            expect(
                within(form).getByRole('button', {
                    name: 'Clear the search box',
                })
            ).toBeInTheDocument()
        })

        it('should clear input onclick', () => {
            render(<SearchInput />)
            const form = screen.getByRole('search')

            const input = within(form).getByRole('searchbox')
            const clearButton = within(form).getByRole('button', {
                name: 'Clear the search box',
            })

            fireEvent.change(input, { target: { value: 'test' } })

            fireEvent.click(clearButton)

            expect(input).toHaveValue('')
        })
    })
})
