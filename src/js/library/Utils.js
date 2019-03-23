export default class Utils {

    static log(text) {

        console.log(text);

    }

    static loadImageList(imageList,onLoaded) {

        let promiseList = [];
        for (let value of imageList) {
            promiseList.push(Utils.loadImage(value,onLoaded));
        }
        return Promise.all(promiseList);

    }

    static loadImage(src,onLoaded) {

        return new Promise((resolve,reject) => {

            const image = new Image();
            image.onload = () => {
                if (onLoaded) onLoaded(image);
                resolve(image);
            };
            image.onerror = () => {
                console.log(new Error(`not found - ${src}`));
                resolve();
            };
            image.src = src;

        });

    }

}
