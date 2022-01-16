import { render, within } from '@testing-library/react'
import faker from '@faker-js/faker'
import { Scrollbar } from './Scrollbar'
import { Profile } from '../../types'
import { PictureProps } from '../Profile/Picture/Picture'

jest.mock('../Profile/Picture/Picture', () => ({
    Picture: (props: PictureProps) => (
        <img
            alt={props.alt}
            src={props.src}
            data-has-border={props.hasBorder}
            data-size={props.size}
        />
    ),
}))

const profiles: Profile[] = [...Array(10)].map(() => ({
    username: faker.internet.userName(),
    pictureUrl: 'http://placeimg.com/64/64/cats',
    hasNewStory: faker.datatype.boolean(),
}))

describe('<Scrollbar />', () => {
    it('should render correctly', () => {
        render(<Scrollbar profiles={profiles} />)
    })

    it('should render 10 <Picture />s with correct src attribute', () => {
        const { container } = render(<Scrollbar profiles={profiles} />)

        const pictures = within(container).getAllByRole(
            'img'
        ) as HTMLImageElement[]
        expect(pictures).toHaveLength(10)

        pictures.forEach((picture, index) => {
            const profile = profiles[index]
            expect(picture).toHaveAttribute('src', profile.pictureUrl)
            expect(picture).toHaveAttribute(
                'alt',
                `Picture of ${profile.username}`
            )
            expect(picture).toHaveAttribute(
                'data-has-border',
                profile.hasNewStory.toString()
            )
            expect(picture).toHaveAttribute('data-size', 'large')
        })
    })
})
