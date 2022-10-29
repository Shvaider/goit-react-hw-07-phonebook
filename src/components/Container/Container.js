import PropTypes from 'prop-types';
import styles from './Container.module.css';

function Container({ children }) {
    return <div className={styles.containerWrapper}>{ children }</div>;
}

Container.protoTypes = {
    children: PropTypes.node.isRequired,
}
export default Container;