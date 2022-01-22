import faker from '@faker-js/faker'
import { Scrollbar } from './Scrollbar'
import { Profile } from '../../../types'
import { ComponentMeta, ComponentStory } from '@storybook/react'

const profiles: Profile[] = [...Array(10)].map(() => ({
    username: faker.internet.userName(),
    pictureUrl: 'http://placeimg.com/64/64/cats',
    hasNewStory: faker.datatype.boolean(),
}))

export default {
    title: 'Scrosllbar',
    component: Scrollbar,
} as ComponentMeta<typeof Scrollbar>

const Template: ComponentStory<typeof Scrollbar> = (args) => (
    <Scrollbar {...args} />
)

export const Default = Template.bind({})

Default.args = { profiles: [...profiles, ...profiles] }
