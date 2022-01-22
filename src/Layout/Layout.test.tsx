import { screen, render } from '@testing-library/react'

import { Layout } from './Layout'

jest.mock('components/Navbar/Navbar', () => ({
    Navbar: () => <nav data-testid="navbar"></nav>,
}))

describe('<Layout />', () => {
    it('should have Navbar', () => {
        render(<Layout />)

        expect(screen.getByTestId('navbar'))
    })

    it('should render its children wrapper in a div', () => {
        render(
            <Layout>
                <div>any children</div>
                <div>any children</div>
                <div>any children</div>
            </Layout>
        )

        expect(screen.getAllByText('any children')).toHaveLength(3)
    })
})
