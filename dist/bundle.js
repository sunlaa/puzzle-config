(() => {
  'use strict';
  var e = {
      194: (e, r) => {
        Object.defineProperty(r, '__esModule', { value: !0 }),
          (r.qwer = r.variable = void 0),
          (r.variable = 123),
          (r.qwer = '1234');
      },
    },
    r = {};
  function o(t) {
    var a = r[t];
    if (void 0 !== a) return a.exports;
    var i = (r[t] = { exports: {} });
    return e[t](i, i.exports, o), i.exports;
  }
  (() => {
    const e = o(194);
    console.log([e.qwer, e.variable]);
  })();
})();
