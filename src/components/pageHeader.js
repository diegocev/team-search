
import styles from './pageHeader.module.css';

export default function PageHeader(props) {
    const { title } = props;
    //console.log(styles);
    return (
        <div>
            <h1 className={styles.header}>{title || 'Team Search'}</h1>
            <h2 className={styles.subtitle}>By Diego Javier Cevallos Erazo</h2>
        </div>
    );
}