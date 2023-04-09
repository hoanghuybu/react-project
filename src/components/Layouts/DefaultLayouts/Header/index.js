import styles from './Header.module.scss';

function Header() {
    return (
        <header className={styles.wrapper}>
            <div className={styles.inner}>{/*Logo*/}</div>
        </header>
    );
}

export default Header;
