import { render, screen, within } from '@testing-library/react'
import { Username, UsernameProps } from './Username'

jest.mock('./Username', () => ({
    Username: ({ children, clipped }: UsernameProps) => (
        <span
            data-testid="profile-username"
            data-is-clipped={clipped ? true : null}
        >
            {children}
        </span>
    ),
}))

const dummyChildren = 'username'

describe('<Username />', () => {
    it('should render empty string if children is nullish', () => {
        const { container } = render(
            <Username clipped={false}>{null}</Username>
        )

        screen.debug(container)
        expect(
            within(container).getByTestId('profile-username')
        ).toHaveTextContent('')
    })

    it('should render children props as text', () => {
        const { container } = render(
            <Username clipped={false}>{dummyChildren}</Username>
        )

        screen.debug(container)
        expect(
            within(container).getByTestId('profile-username')
        ).toHaveTextContent(dummyChildren)
    })

    it('should have "clipped" className if "clipped" props is true', () => {
        const { container } = render(
            <Username clipped={true}>{dummyChildren}</Username>
        )

        expect(
            within(container).getByTestId('profile-username')
        ).toHaveAttribute('data-is-clipped', 'true')
    })

    it('should not have "clipped" className if "clipped" props is false', () => {
        const { container } = render(
            <Username clipped={false}>{dummyChildren}</Username>
        )

        expect(
            within(container).getByTestId('profile-username')
        ).not.toHaveAttribute('data-is-clipped')
    })
})
