import { Username } from './Username'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
    title: 'Profile/Username',
    component: Username,
} as ComponentMeta<typeof Username>

const Template: ComponentStory<typeof Username> = (args) => (
    <Username {...args} />
)

export const Default = Template.bind({})

Default.args = {
    children: 'username',
}

export const LongUsername = Template.bind({})

LongUsername.args = {
    children: 'anylongusername',
}
