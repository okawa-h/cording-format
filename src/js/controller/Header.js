'use strict';

export default class Header {

  static init() {

    this.$el = document.getElementById('header');
    this.echo();

  }

  static echo() {

    console.log(this.$el);
    console.log(this.$el.clientWidth);

  }

}
