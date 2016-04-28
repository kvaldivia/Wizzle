(function () {
  angular
  .module('wizzle.utils', [])
  .service('inheritPrototype', [inheritPrototype])
  .service('shallowInherit', [shallowInherit])
  .service('deepCopy', [deepCopy]);

  function inheritPrototype (parentConstructor) {
    var childConstructor = function () {};
    var F = function () {};
    F.prototype = parentConstructor.prototype;
    childConstructor.prototype = new F();
    childConstructor.prototype.constructor = childConstructor;
    childConstructor.uber = parentConstructor.prototype;
  } 

  function shallowInherit (parentObj) {
    var childObj = {};
    for (var property in parentObj) {
      childObj[property] = parentObj[property];
    }
    childObj.uber = parentObject;
    return childObj;
  } 

  function deepCopy (parentObj) {
    var childObj = {};
    for (var property in parentObj) {
      if (parentObj.hasOwnProperty(property)) {
        if (typeof parentObj[i] === 'object') {
          childObj[i] = Array.isArray(parentObj[property]) ? [] : {};
          childObj[i] = deepCopy(parentObj[property]);
        }
        else {
          childObj[i] = parentObj[i];
        }
      }
    }
    return childObj;
  }
})();
