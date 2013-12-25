/*
 * Taken from https://github.com/pozadi/grunt-reusable-parts
 * License: MIT
 * Built at: 2013-12-25 22:53:01 +0400
 */

(function(exports) {
  exports.escPresses = function(el) {
    return $(el).asEventStream('keydown').filter(function(e) {
      return e.which === 27;
    });
  };
  return exports.winEscPresses = exports.escPresses(window);
})((window.baconUtils || (window.baconUtils = {})));
