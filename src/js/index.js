import Utils from './library/Utils';

const init = () => {

    Utils.log('init');

    const onLoaded = (image) => {
        console.log(image);
    };

    Utils.loadImageList(['./files/img/test.png'],onLoaded).then(() => console.log('complete'));

};

document.addEventListener('DOMContentLoaded',init,false);
