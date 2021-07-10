import styles from './LoadingSpinner.module.css';
import loading_icon from '../../assets/images/loadin_icon.gif';

const LoadingSpinner = ({isLoading}) => (
    isLoading &&
    <div className={styles.loadingSpinner}>
        <img
            src={loading_icon}
            alt={'Loading content'}
            className={styles.icon}
        />
    </div>
);

export default LoadingSpinner;
