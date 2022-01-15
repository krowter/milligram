import { render } from '@testing-library/react'
import { Picture } from './Picture'

export const EmptyPictureProps = {
    src: '',
    alt: '',
} as const

describe('<Picture />', () => {
    it('should render correctly', () => {
        render(<Picture {...EmptyPictureProps} size="small" />)
    })

    it("should contain placeholder attribute if no 'src' and 'alt' prop are emoty", () => {
        const wrapper = render(<Picture {...EmptyPictureProps} size="small" />)

        const picture = wrapper.getByRole('img')

        expect(picture).toHaveAttribute(
            'src',
            'https://via.placeholder.com/24x24'
        )
        expect(picture).toHaveAttribute('alt', 'Empty profile picture')
    })

    it("should contain img with correct attribute if 'src' and 'alt' prop are provided", () => {
        const anyPicture = 'https://any.valid.picture.com/'
        const anyAlt = 'Profile picture of someone'

        const wrapper = render(
            <Picture src={anyPicture} alt={anyAlt} size="small" />
        )

        const picture = wrapper.getByRole('img')

        expect(picture).toHaveAttribute('src', anyPicture)
        expect(picture).toHaveAttribute('alt', anyAlt)
    })

    // TODO find out how to test size prop
    // it("should pass 'size' prop as className to img", () => {
    //     const size = 'medium'

    //     const wrapper = render(<Picture src="" alt="" size={size} />)
    //     const picture = wrapper.getByRole('img')

    //     expect(picture.className).toContain(size)
    // })
})
