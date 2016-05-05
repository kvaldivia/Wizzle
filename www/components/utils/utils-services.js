/* global angular */
(function() {
  angular
  .module('wizzle.utils', [])
  .service('utilities', [utilities]);

  function utilities() {
    this.inheritPrototype = function(constructor, prototypeObject) {
      constructor.prototype = Object.create(prototypeObject);
      constructor.prototype.constructor = constructor;
    };

    this.extend = function(Child, Parent) {
      var F = function() {};
      F.prototype = Parent.prototype;
      Child.prototype = new F();
      Child.prototype.constructor = Child;
      Child.uber = Parent.prototype;
    };

    this.deepCopy = function deepCopy(src) {
      var child = {};
      for (var i in src) {
        if (src.hasOwnProperty(i)) {
          if (typeof src[i] === 'object') {
            child[i] = Array.isArray(src[i]) ? [] : {};
            child[i] = deepCopy(src[i]);
          } else {
            child[i] = src[i];
          }
        }
      }
      return child;
    };
  }
})();
