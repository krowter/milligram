import React from 'react'
import { Profile as ProfileType } from 'types'
import { Picture } from './Picture/Picture'
import { Username } from './Username/Username'

const ProfileComponent = {} as ProfileComponentType

type ProfileComponentType = {
    Story: (props: { profile: ProfileType }) => JSX.Element
}

ProfileComponent.Story = ({ profile }) => {
    return (
        <div>
            <Picture
                alt={profile.username}
                src={profile.pictureUrl}
                size="large"
            />
            <Username>{profile.username}</Username>
        </div>
    )
}

export { ProfileComponent as Profile }
