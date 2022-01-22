import styles from './picture.module.css'

import { classNames } from '../../../utils/helpers'

export const Picture = ({
    src,
    alt,
    size = 'large',
    hasBorder = true,
}: PictureProps) => {
    const borderStyle = hasBorder ? styles.border : null

    return (
        <div className={classNames(borderStyle, styles[size])}>
            <img
                className={classNames(styles.picture, styles[size])}
                src={src || 'https://via.placeholder.com/24x24'}
                alt={alt || 'Empty profile picture'}
            />
        </div>
    )
}

export type PictureProps = {
    alt: string
    size: 'small' | 'medium' | 'large'
    src: string
    hasBorder?: boolean
}
