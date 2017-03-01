var BOOTSTRAPLESS = BOOTSTRAPLESS || {};
(function ($) {

  'use strict';

  BOOTSTRAPLESS.loadSample = {
    init: function () {
      this.sample();
    },
    sample: function () {
      console.log('Hello World');
    }
  }


  // this will initialize the functions
  $(function () {
    BOOTSTRAPLESS.loadSample.init();
  });
})(jQuery);