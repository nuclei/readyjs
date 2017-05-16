(function (exports) {
'use strict';

const ready = function (fn) {
    if (document.readyState !== 'loading') {
        fn();
    }
    else {
        document.addEventListener('DOMContentLoaded', fn);
    }
};

exports.ready = ready;

}((this.readyjs = this.readyjs || {})));
//# sourceMappingURL=readyjs.iffe.js.map
