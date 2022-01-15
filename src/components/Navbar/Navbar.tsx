import styles from './navbar.module.css'

const PlaceholderIcon = () => <img src="https://via.placeholder.com/24x24" />

export const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <a href="/">Milligram</a>

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
