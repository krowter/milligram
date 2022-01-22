import {
    fireEvent,
    screen,
    render,
    within,
    waitFor,
} from '@testing-library/react'
import faker from '@faker-js/faker'
import { Scrollbar } from './Scrollbar'
import { Profile } from '../../../types'
import { PictureProps } from '../Picture/Picture'
import { act } from 'react-dom/test-utils'

jest.mock('../Picture/Picture', () => ({
    Picture: (props: PictureProps) => (
        <img
            alt={props.alt}
            src={props.src}
            data-has-border={props.hasBorder}
            data-size={props.size}
        />
    ),
}))

export const profiles: Profile[] = [...Array(10)].map(() => ({
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

    it('should render 10 <Picture />s sorted by the has-border attribute', () => {
        const { container } = render(<Scrollbar profiles={profiles} />)
        const profileWithStoryLength = profiles.filter(
            (profile) => profile.hasNewStory
        ).length

        const pictures = within(container).getAllByRole(
            'img'
        ) as HTMLImageElement[]
        expect(pictures).toHaveLength(10)

        pictures.forEach((picture, index) => {
            const isHasBorder = index < profileWithStoryLength

            expect(picture).toHaveAttribute(
                'data-has-border',
                isHasBorder.toString()
            )
        })
    })

    it('should only render chevron Next button when horizontal scroll is 0', () => {
        render(<Scrollbar profiles={profiles} />)

        const scrollbar = screen.getByTestId('scrollbar')

        scrollbar.scrollLeft = 0
        scrollbar.dispatchEvent(new window.Event('scroll'))

        expect(
            within(scrollbar).queryByLabelText('Previous')
        ).not.toBeInTheDocument()
        expect(within(scrollbar).getByLabelText('Next')).toBeInTheDocument()
    })

    it('should render both chevron Next and Previous buttons when horizontal scroll is not 0', async () => {
        render(<Scrollbar profiles={profiles} />)

        const scrollbar = screen.getByTestId('scrollbar')

        scrollbar.scrollLeft = 100 // any non zero positive value

        act(() => {
            scrollbar.dispatchEvent(new window.Event('scroll'))
        })

        expect(within(scrollbar).getByLabelText('Previous')).toBeInTheDocument()
        expect(within(scrollbar).getByLabelText('Next')).toBeInTheDocument()
    })
})
