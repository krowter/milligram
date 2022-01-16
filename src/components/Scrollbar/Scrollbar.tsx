import { Profile } from '../../types'
import { Picture } from '../Profile/Picture/Picture'

export const Scrollbar: React.FC<ScrollbarProps> = (props) => {
    return (
        <div>
            {props.profiles.map((profile, index) => (
                <Picture
                    alt={`Picture of ${profile.username}`}
                    hasBorder={profile.hasNewStory}
                    src={profile.pictureUrl}
                    key={index}
                    size="large"
                />
            ))}
        </div>
    )
}

type ScrollbarProps = {
    profiles: Profile[]
}
