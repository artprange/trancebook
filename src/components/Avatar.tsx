import styles from './Avatar.module.css'
import PropTypes from 'prop-types'

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
}

export function Avatar(props) {
  return <img className={styles.avatar} src={props.src} />
}
