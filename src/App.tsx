import { Layout } from 'components/Layout/Layout'
import styles from './app.module.css'

// only for development
import faker from '@faker-js/faker'
import { Scrollbar } from 'components/Profile/Scrollbar/Scrollbar'
import { Profile } from 'types'

const profiles: Profile[] = [...Array(20)].map(() => ({
    username: faker.internet.userName(),
    pictureUrl: 'http://placeimg.com/64/64/cats',
    hasNewStory: faker.datatype.boolean(),
}))

const App = () => {
    return (
        <Layout>
            <div className={styles.scrollbarWrapper}>
                <Scrollbar profiles={profiles} />
            </div>
        </Layout>
    )
}

export default App
