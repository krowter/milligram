import { Profile } from './Profile'
import { ComponentMeta, ComponentStory } from '@storybook/react'

const Template: ComponentStory<typeof Profile.Story> = (args) => (
    <Profile.Story {...args} />
)

export const ProfileStory = Template.bind({})
