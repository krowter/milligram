import styles from './picture.module.css'

import { classNames } from '../../../utils/helpers'

export const Picture = ({ src, alt, size }: PictureProps) => {
    return (
        <img
            className={classNames(styles.picture, styles[size])}
            src={src || 'https://via.placeholder.com/24x24'}
            alt={alt || 'Empty profile picture'}
        />
    )
}

type PictureProps = {
    alt: string
    size: 'small' | 'medium' | 'large'
    src: string
}
