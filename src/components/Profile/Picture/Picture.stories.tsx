import { Picture } from './Picture'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
    title: 'Profile/Picture',
    component: Picture,
    args: {
        hasBorder: true,
        src: 'https://i.picsum.photos/id/388/200/200.jpg?hmac=yc4V5jCOMR-l634JzXmANfvSGFGgYWHQN4aKA69RvZo',
    },
    argTypes: {
        hasBorder: {
            control: 'boolean',
        },
    },
} as ComponentMeta<typeof Picture>

const Template: ComponentStory<typeof Picture> = (args) => <Picture {...args} />

export const Large = Template.bind({})

Large.args = {
    size: 'large',
}

export const Medium = Template.bind({})

Medium.args = {
    size: 'medium',
}

export const Small = Template.bind({})

Small.args = {
    size: 'small',
}
