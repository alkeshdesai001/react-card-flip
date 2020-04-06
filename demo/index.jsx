import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import { Card } from '../src';
import { CardFront } from '../src';
import { CardBack } from '../src';

import styles from './styles.scss';

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('app')
  );
};

const demo = () => {
  return (
    <div>
      <Card style={{ height: '500px', width: '300px' }} cardHover>
        <CardFront gradient={['to right bottom', '#2998ff', '#5643fa']}>
          Front
        </CardFront>
        <CardBack gradient={['to right bottom', '#ffb900', '#ff7730']}>
          Back
        </CardBack>
      </Card>
    </div>
  );
};

render(demo);

if (module.hot) {
  module.hot.accept(() => {
    render(demo);
  });
}
