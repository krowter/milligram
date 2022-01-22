import { useEffect, useRef, useState } from 'react'
import { Profile } from 'types'
import { Picture } from 'components/Profile/Picture/Picture'
import styles from './scrollbar.module.css'

export const Scrollbar: React.FC<ScrollbarProps> = (props) => {
    const [isScrollXZero, setIsScrollXZero] = useState(true)
    const scrollbarRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (scrollbarRef.current) {
            scrollbarRef.current.addEventListener('scroll', (e) => {
                if (!scrollbarRef.current) return
                setIsScrollXZero(scrollbarRef.current.scrollLeft === 0)
            })
        }
    }, [scrollbarRef])

    return (
        <div
            ref={scrollbarRef}
            data-testid="scrollbar"
            className={styles.scrollbar}
        >
            {!isScrollXZero && <button aria-label="Previous">&lt;</button>}
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
            <button aria-label="Next"> &gt;</button>
        </div>
    )
}

type ScrollbarProps = {
    profiles: Profile[]
}
