import { Navbar } from 'components/Navbar/Navbar'

export const Layout: React.FC = (props) => {
    return (
        <>
            <Navbar />
            {props.children}
        </>
    )
}
