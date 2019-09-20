var readyjs = (function (exports) {
  'use strict';

  const ready = function (fn) {
      const completed = () => {
          document.removeEventListener('DOMContentLoaded', completed);
          window.removeEventListener('load', completed);
          fn();
      };
      if (document.readyState !== 'loading') {
          setTimeout(fn);
      }
      else {
          document.addEventListener('DOMContentLoaded', completed);
          window.addEventListener('load', completed);
      }
  };

  exports.ready = ready;

  return exports;

}({}));
//# sourceMappingURL=readyjs.iffe.js.map
