import React from 'react';
import classnames from 'classnames';

import styles from './styles.scss';

const CardBack = ({ children, style, gradient }) => {
  let gradientStyle = null;
  if (gradient.length === 3) {
    let orientation = gradient[0];
    let colorOne = gradient[1];
    let colorTwo = gradient[2];
    gradientStyle = {
      backgroundImage: `linear-gradient(${orientation.replace(
        '"',
        ''
      )}, ${colorOne.replace('"', '')}, ${colorTwo.replace('"', '')})`
    };
  }

  return (
    <div style={{ ...gradientStyle, ...style }} className={styles.back}>
      {children}
    </div>
  );
};

export default CardBack;
