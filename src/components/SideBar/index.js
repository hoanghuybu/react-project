import styles from './Sidebar.module.scss';
import MenuSidebar from './Menu';
import MenuItems from './Menu/MenuItems';
import config from '~/config';
import { HomeIcon, UserGroupIcon, LiveIcon } from '../Icons';

function SideBar() {
    return (
        <aside className={styles.wrapper}>
            <MenuSidebar>
                <MenuItems title="For You" to={config.route.home} icon={<HomeIcon></HomeIcon>}></MenuItems>
                <MenuItems
                    title="Following"
                    to={config.route.following}
                    icon={<UserGroupIcon></UserGroupIcon>}
                ></MenuItems>
                <MenuItems title="LIVE" to={config.route.live} icon={<LiveIcon></LiveIcon>}></MenuItems>
            </MenuSidebar>
        </aside>
    );
}

export default SideBar;
