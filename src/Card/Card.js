import React from 'react';
import classnames from 'classnames';

import styles from './styles.scss';

const Card = ({ children, className, style }) => (
  <div
    style={{ ...style }}
    className={classnames(styles.cardContainer, className)}
  >
    <div className={styles.card}>{children}</div>
  </div>
);

export default Card;
