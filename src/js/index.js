'use strict';

import 'es6-promise/auto';
import Utils from './lib/Utils';
import Header from './controller/Header';

const init = () => {

  console.log('init');

  Header.init();

  Utils.wait(200).then(() => {
    console.log('wait');
  });

  // const onLoaded = (image) => {
  //   console.log(image);
  // };

  // Utils
  //   .loadImageAll(['./files/img/test.png'], onLoaded)
  //   .then(() => console.log('complete'));

};

document.addEventListener('DOMContentLoaded', init, false);
