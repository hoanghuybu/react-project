import Button from '~/components/Button';
import styles from './Menu.module.scss';

function MenuItems({ data, onClick }) {
    return (
        <Button className={styles.menuItem} leftIcon={data.icon} to={data.to} onClick={onClick}>
            {data.title}
        </Button>
    );
}

export default MenuItems;
