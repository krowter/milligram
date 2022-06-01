import { Picture } from 'components/Profile/Picture/Picture'
import { useHorizontalScroll } from './hooks'
import styles from './scrollbar.module.css'
import { Profile } from 'types'

const pixelToScroll = 3 * 60 // profile picture width

export const Scrollbar: React.FC<ScrollbarProps> = (props) => {
    const [containerRef, horizontalScroll, setScroll] = useHorizontalScroll()

    const scrollToRight = () =>
        setScroll((scrollLeft) => scrollLeft + pixelToScroll)
    const scrollToLeft = () =>
        setScroll((scrollLeft) => scrollLeft - pixelToScroll)

    return (
        <div className={styles.wrapper}>
            <div
                ref={containerRef}
                data-testid="scrollbar"
                className={styles.scrollbar}
            >
                {!horizontalScroll.isZero && (
                    <button onClick={scrollToLeft} aria-label="Previous">
                        &lsaquo;
                    </button>
                )}

                {(props.profiles ?? [])
                    .sort((profile) => (profile.hasNewStory ? -1 : 1)) // sort profile with stories first
                    .map((profile, index) => (
                        <Picture
                            alt={`Picture of ${profile.username}`}
                            hasBorder={profile.hasNewStory}
                            src={profile.pictureUrl}
                            key={index}
                            size="large"
                        />
                    ))}

                {!horizontalScroll.isMax && (
                    <button onClick={scrollToRight} aria-label="Next">
                        &rsaquo;
                    </button>
                )}
            </div>
        </div>
    )
}

type ScrollbarProps = {
    profiles: Profile[]
}
