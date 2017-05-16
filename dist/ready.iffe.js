(function (exports) {
'use strict';

var ready = function (fn) {
    if (document.readyState !== 'loading') {
        fn();
    }
    else {
        document.addEventListener('DOMContentLoaded', fn);
    }
};

exports.ready = ready;

}((this.readyjs = this.readyjs || {})));
//# sourceMappingURL=ready.iffe.js.map
