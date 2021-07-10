import styles from './Heading.module.css';

const Heading = ({heading, desc}) => (
    <div>
        <h1 data-testid={'heading'} className={styles.heading}>{heading}</h1>
        <p data-testid={'desc'} className={styles.desc}>{desc}</p>
    </div>
);

export default Heading;
