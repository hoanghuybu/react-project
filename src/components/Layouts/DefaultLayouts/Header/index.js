import styles from './Header.module.scss';
import images from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';

function Header() {
    return (
        <header className={styles.wrapper}>
            <div className={styles.inner}>
                <div className={styles.logo}>
                    <img src={images.logo} alt="TikTok"></img>
                </div>
                <div className={styles.search}>
                    <input placeholder="Search Account And Video" spellCheck={false}></input>
                    {/* <button className={styles.clear}>
                        <FontAwesomeIcon icon={faCircleXmark}></FontAwesomeIcon>
                    </button> */}
                    <FontAwesomeIcon className={styles.loading} icon={faSpinner}></FontAwesomeIcon>
                    <button className={styles.searchIcon}>
                        <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
                    </button>
                </div>
                <div className={styles.actions}></div>
            </div>
        </header>
    );
}

export default Header;
