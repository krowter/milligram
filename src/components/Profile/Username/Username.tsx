import { classNames } from 'utils/helpers'
import styles from './username.module.css'

export const Username = ({ children, clipped = false }: UsernameProps) => {
    return (
        <span className={classNames(styles.username, clipped && 'clipped')}>
            {children}
        </span>
    )
}

export type UsernameProps = {
    children: string | null | undefined
    clipped?: boolean
}
