import Header from '../Header';
import SideBar from './SideBar';
import styles from './DefaultLayouts.module.scss';

function DefaultLayouts({ children }) {
    return (
        <div className={styles.wrapper}>
            <Header />
            <div className={styles.container}>
                <SideBar />
                <div className={styles.content}>{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayouts;
