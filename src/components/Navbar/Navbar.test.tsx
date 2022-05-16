import { render, screen, within } from '@testing-library/react'
import { Navbar } from './Navbar'

describe('<Navbar /> unit tests', () => {
    describe('Logo', () => {
        beforeEach(() => {
            render(<Navbar />)
        })
        it('should render correctly', () => {
            expect(screen.getByTestId('logo')).toBeInTheDocument()
        })

        it('should have correct href attribute', () => {
            expect(screen.getByTestId('logo')).toHaveAttribute('href', '/')
        })
    })

    describe('Navigation', () => {
        it('should render correctly', () => {
            render(<Navbar />)
            expect(screen.getByRole('navigation')).toBeInTheDocument()
        })

        it('should contain six correct navigation items', () => {
            const expectedItemLinks = [
                '/',
                '/direct/inbox',
                '/create/select',
                '/explore',
            ]

            render(<Navbar />)

            const wrapper = screen.getByRole('navigation')
            const items = within(wrapper).getAllByRole('listitem')

            expect(items).toHaveLength(6)
            // screen.debug()
            items.slice(0, 4).forEach((item, index) => {
                expect(within(item).getByRole('link')).toHaveAttribute(
                    'href',
                    expectedItemLinks[index]
                )
            })

            items.slice(4, 6).forEach((item) => {
                expect(within(item).getByRole('button'))
            })
        })
    })
})
