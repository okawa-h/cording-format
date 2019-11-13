'use strict';

export default class Utils {

  static loadImageAll(imageList) {

    const promiseList = [];
    for (let src of imageList) {
        promiseList.push(Utils.loadImage(src));
    }

    return Promise.all(promiseList);

  }

  static loadImage(src) {

    return new Promise((resolve, reject) => {

      const image = new Image();
      image.onload = resolve;
      image.onerror = reject;
      image.src = src;

    });

  }

  static wait(duration) {

    return new Promise(resolve => setTimeout(resolve,duration));

  }

  static zeroPadding(num, length) {

    return (Array(length).join('0') + num).slice(-length);

  }

}
