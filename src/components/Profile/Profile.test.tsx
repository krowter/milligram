import { render, within } from '@testing-library/react'
import { Profile } from './Profile'
import { Profile as ProfileType } from 'types'

const dummyProfile: ProfileType = {
    username: 'anyUsername',
    pictureUrl: 'https://via.placeholder.com/100x100',
    hasNewStory: false,
}

describe('<Profile.Story />', () => {
    it('should render img and clipped username correctly', () => {
        const { container } = render(<Profile.Story profile={dummyProfile} />)

        expect(within(container).getByRole('img')).toHaveAttribute(
            'src',
            dummyProfile.pictureUrl
        )
        expect(
            within(container).getByText(dummyProfile.username)
        ).toBeInTheDocument()
    })
})
