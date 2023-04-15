import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from '../Image';
import styles from './AccountItems.module.scss';

function AccountItems() {
    return (
        <div className={styles.wrapper}>
            <Image
                className={styles.avatar}
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/b47bf9a7076dade7aa42e8657ef3d3f9~c5_100x100.jpeg?x-expires=1681200000&x-signature=Qmk7icxDOrVONo0RFdhOfeDzwq4%3D"
                alt="Hoang Huy"
            ></Image>
            <div className={styles.info}>
                <h4 className={styles.name}>
                    <span> Do Hoang Huy </span>
                    <FontAwesomeIcon className={styles.check} icon={faCheckCircle}></FontAwesomeIcon>
                </h4>
                <span className={styles.userName}>huydh</span>
            </div>
        </div>
    );
}

export default AccountItems;
