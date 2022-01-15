import { storiesOf } from '@storybook/react'

import { Picture } from './Picture'

export const EmptyPictureProps = {
    src: '',
    alt: '',
} as const

storiesOf('Profile/Picture', module)
    .add('Large', () => <Picture {...EmptyPictureProps} size="large" />)
    .add('Medium', () => <Picture {...EmptyPictureProps} size="medium" />)
    .add('Small', () => <Picture {...EmptyPictureProps} size="small" />)
