import styles from './navbar.module.css'
import { ReactComponent as Logo } from '../../assets/logo.svg'

const PlaceholderIcon = () => <img src="https://via.placeholder.com/24x24" />

export const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <a data-testid="logo" href="/">
                <Logo width={190} height={60} color="black" />
            </a>

            <form role="search">
                <input type="search" placeholder="Search" />
            </form>

            <nav className={styles.navitems}>
                <li>
                    <a href="/">
                        <PlaceholderIcon />
                    </a>
                </li>
                <li>
                    <a href="/direct/inbox">
                        <PlaceholderIcon />
                    </a>
                </li>
                <li>
                    <a href="/create/select">
                        <PlaceholderIcon />
                    </a>
                </li>
                <li>
                    <a href="/explore">
                        <PlaceholderIcon />
                    </a>
                </li>
                <li>
                    <button>
                        <PlaceholderIcon />
                    </button>
                </li>
                <li>
                    <button>
                        <PlaceholderIcon />
                    </button>
                </li>
            </nav>
        </div>
    )
}
