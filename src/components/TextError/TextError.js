import styles from './TextError.module.css';

const TextError = props => (
    props.children &&
    <div className={styles.textError}>
        <p data-testid={'error'}>{props.children}</p>
    </div>
);

export default TextError;
