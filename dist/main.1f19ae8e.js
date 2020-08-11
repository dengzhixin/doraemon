// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"style.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var string = "\n.head {\n    width: 200px;\n    height: 200px;\n    background-color: #3ca2c7;\n    border-radius: 50%;\n    border: 2px solid #000;\n    position: relative;\n    z-index: 10;\n}\n\n.head .face {\n    width: 160px;\n    height: 160px;\n    background-color: #fff;\n    border-radius: 50%;\n\n}\n\n.head .face .eye {\n    width: 48px;\n    height: 48px;\n    border: 1px solid #000000;\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n    margin-top: -55px;\n    border-radius: 50%;\n    background-color: #fff;\n}\n\n.head .face .eye.left {\n    margin-left: -24px;\n\n}\n\n.head .face .eye.right {\n    margin-left: 24px;\n}\n\n.head .face .eye .black {\n    width: 15px;\n    height: 23px;\n    background-color: #000;\n    position: absolute;\n    border-radius: 100%;\n    bottom: 10px;\n}\n\n.head .face .eye.left .black {\n    right: 4px;\n}\n\n.head .face .eye.right .black {\n    left: 4px;\n\n}\n\n.head .face .eye .black::before {\n    content: '';\n    display: block;\n    position: relative;\n    width: 4px;\n    height: 6px;\n    border-radius: 50%;\n    background-color: #fff;\n    top: 8px;\n    left: 4px;\n}\n\n.head .nose {\n    width: 30px;\n    height: 30px;\n    background-color: #af1b38;\n    position: absolute;\n    transform: translate(-50%, -50%);\n    margin-top: -20px;\n    border: 1px solid #000000;\n    border-radius: 50%;\n}\n\n.head .nose::before {\n    content: '';\n    display: block;\n    width: 10px;\n    height: 10px;\n    background-color: #fff;\n    position: relative;\n    left: 6px;\n    top: 4px;\n    border-radius: 50%;\n}\n\n.head .beards {\n    width: 100px;\n    height: 100px;\n    display: flex;\n    position: relative;\n    top: 78px;\n    z-index: 1;\n}\n.head .beards .beard {\n    width: 60px;\n    height: 2px;\n    background-color: #000;\n    position: absolute;\n    /*z-index: 1;*/\n}\n.head .beards::after {\n    content: '';\n    display: block;\n    position: relative;\n    width: 2px;\n    height: 12px;\n    left: -49px;\n    bottom: -47px;\n    background-color: #000;\n}\n\n.head .beards .left {\n    position: relative;\n    width: 60px;\n    height: 100%;\n    left: -30px;\n}\n\n.head .beards .right {\n    position: relative;\n    width: 60px;\n    height: 100%;\n    left: 30px;\n}\n\n\n\n.head .beards .left .beard:nth-child(1) {\n    top: 16px;\n    transform: rotate(18deg);\n}\n\n.head .beards .left .beard:nth-child(2) {\n    top: 34px;\n    left: -4px;\n    transform: rotate(-5deg);\n}\n\n\n.head .beards .left .beard:nth-child(3) {\n    top: 46px;\n    left: -1px;\n    transform: rotate(-14deg);\n}\n\n.head .beards .right .beard:nth-child(1) {\n    top: 17px;\n    transform: rotate(-13deg);\n    left: -10px;\n}\n\n.head .beards .right .beard:nth-child(2) {\n    top: 34px;\n    left: -8px;\n    transform: rotate(3deg)\n}\n\n.head .beards .right .beard:nth-child(3) {\n    top: 48px;\n    left: -10px;\n    transform: rotate(15deg);\n}\n\n.head .mouth {\n    width: 130px;\n    height: 60px;\n    background-color: #af1a38;\n    border-bottom-left-radius: 130px;\n    border-bottom-right-radius: 130px;\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n    margin-top: 36px;\n    overflow: hidden;\n}\n\n.head .mouth .heart {\n    width: 80px;\n    height: 80px;\n    position: absolute;\n    left: 50%;\n    bottom: -60px;\n    transform: translate(-50%, -50%);\n    display: inline-block;\n}\n\n\n.head .mouth .heart .left {\n    background: #c82838;\n    width: 40px;\n    height: 40px;\n    position: absolute;\n    transform: rotate(45deg) translateX(31px) translateY(-14px);\n    bottom: 40px;\n    left: -40px;\n    border-radius: 50% 0 0 50%;\n}\n\n.head .mouth .heart .right {\n    background: #c82838;\n    width: 40px;\n    height: 40px;\n    border-radius: 50%;\n    position: absolute;\n    transform: rotate(45deg) translateX(-14px) translateY(31px);\n    bottom: 40px;\n    right: -40px;\n    border-radius: 50% 50% 0 0;\n}\n\n.head .mouth .heart .bottom {\n    background: #c82838;\n    width: 40px;\n    height: 40px;\n    position: absolute;\n    bottom: 0px;\n    left: 50%;\n    transform: translateX(-50%) rotate(45deg);\n}\n\n.body {\n    width: 130px;\n    height: 90px;\n    position: absolute;\n    left: 50%;\n    transform: translateX(-50%);\n    overflow: hidden;\n    margin-top: -10px;\n}\n\n.body {\n    z-index: 8;\n}\n\n.body .bg {\n    width: 100%;\n    height: 400px;\n    position: absolute;\n    bottom: 0px;\n    background-color: #42a3c5;\n    border-bottom-left-radius: 170px;\n    border-bottom-right-radius: 170px;\n    border: 1px solid #000000;\n    z-index: -3;\n\n\n}\n\n.body .whiteBox {\n    width: 100px;\n    height: 63px;\n    background-color: #fff;\n    margin-top: -2px;\n    border-radius: 40px 40px 1000px 1000px;\n}\n\n.body .whiteBox .pocket {\n    width: 60px;\n    height: 30px;\n    border: 2px solid #000;\n    position: relative;\n    top: 15px;\n    left: 50%;\n    transform: translateX(-50%);\n    border-bottom-left-radius: 30px;\n    border-bottom-right-radius: 30px;\n\n}\n\n.weibo {\n    width: 100px;\n    height: 40px;\n    background-color: #9f1a31;\n    position: absolute;\n    left: 50%;\n    bottom: 50%;\n    z-index: 9;\n    transform: translate(-50%, -50%);\n    margin-bottom: -130px;\n    border-bottom-left-radius: 50px;\n    border-bottom-right-radius: 50px;\n}\n\n.weibo .dd {\n    width: 30px;\n    height: 30px;\n    background-color: #ef9638;\n    position: relative;\n    top: 30px;\n    left: 50%;\n    transform: translateX(-50%);\n    border-radius: 50%;\n    border: 2px solid #000;\n}\n\n.weibo .dd::before {\n    content: '';\n    display: block;\n    width: 6px;\n    height: 6px;\n    position: relative;\n    left: 50%;\n    top: 12px;\n    transform: translateX(-50%);\n    background-color: #000;\n    border-radius: 50%;\n}\n\n.weibo .dd::after {\n    content: '';\n    display: block;\n    width: 12px;\n    height: 2px;\n    position: relative;\n    left: 50%;\n    top: 14px;\n    transform: translateX(-50%);\n    background-color: #000;\n    border-radius: 2px;\n}\n\n.hand {\n    width: 100px;\n    height: 100px;\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n    margin-top: 80px;\n    z-index: 8;\n}\n\n.hand.left {\n    margin-left: -80px;\n\n}\n\n\n\n\n@keyframes sayHi {\n    from {\n        opacity: 0;\n    }\n    to {\n        opacity: 1;\n    }\n}\n\n.hand.right {\n    margin-left: 125px;\n}\n\n.hand .circle {\n    width: 50px;\n    height: 50px;\n    background-color: #ffffff;\n    border-radius: 50%;\n    border: 2px solid #000000;\n\n}\n\n.hand .circle:before {\n    content: '';\n    display: block;\n    width: 70px;\n    height: 80px;\n    border: 1px solid red;\n    background-color: #3ca2c7;\n    position: relative;\n    z-index: -1;\n    border: 2px solid #000000;\n    top: 3px;\n\n}\n\n.hand.left .circle:before {\n    transform: rotate(-45deg);\n    border-bottom-left-radius: 97px;\n    border-bottom-right-radius: 30px;\n    left: 42px;\n}\n\n.hand.right .circle:before {\n    transform: rotate(45deg);\n    border-bottom-right-radius: 70px;\n    border-bottom-left-radius: 16px;\n    right: 70px;\n}\n\n.foot {\n    width: 50px;\n    height: 100px;\n    border: 2px solid #000000;\n    position: absolute;\n    left: 50%;\n    transform: translateX(-50%);\n    border-radius: 40px / 60px;\n    background-color: #fff;\n}\n\n.foot.left {\n    margin-left: -20px;\n}\n\n.foot.right {\n    margin-left: 20px;\n\n}\n@media (max-width:500px) {\n    .hand.right .sayHi{\n        top: -320px;\n        left: -60px;\n    }\n}\n\n.head .fly {\n    width: 100px;\n    height: 40px;\n    position: relative;\n    top: -40px;\n    left: 50%;\n    transform: translateX(-50%);\n}\n\n.head .fly .leaf {\n    width: 60px;\n    height: 5px;\n    background-color: rgba(162, 171, 176, 0.6);\n    position: absolute;\n    top: 28px;\n    left: 20px;\n    z-index: 1;\n    transform: translateX(-50%);\n    animation: fly 200ms linear infinite;\n}\n\n.head .fly .bracket {\n    position: absolute;\n    left: 50%;\n    background-color: #fbc046;\n    transform: translateX(-50%);\n    border: 2px solid #000000;\n}\n\n.head .fly .bracket.up {\n    width: 20px;\n    height: 12px;\n    border-top-left-radius: 24px;\n    border-top-right-radius: 24px;\n    top: 16px;\n}\n\n.head .fly .bracket.down {\n    bottom: 0;\n    width: 8px;\n    height: 12px;\n\n}\n\n@keyframes flyIn {\n    from {\n        transform: translateY(100px)\n    }\n    to {\n        transform: translateY(-50px)\n    }\n}\n.box{\n    animation : flyIn 400ms \n}\n@keyframes fly {\n    0% {\n        transform: rotate3d(0, 1, 0, 0deg);\n    }\n    100% {\n        transform: rotate3d(0, 1, 0, 360deg);\n    }\n\n}\n\n";
var _default = string;
exports.default = _default;
},{}],"main.js":[function(require,module,exports) {
"use strict";

var _style = _interopRequireDefault(require("./style.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var player = {
  id: undefined,
  n: 0,
  speed: 10,
  events: {
    '#btnPause': 'pause',
    '#btnPlay': 'play',
    '#btnSlow': 'slow',
    '#btnNormal': 'normal',
    '#btnFast': 'fast',
    '#btnReload': 'reload'
  },
  ui: {
    style: undefined,
    code: document.querySelector('#code'),
    range: document.querySelector('#range')
  },
  init: function init() {
    player.initStyleUI();
    player.play();
    player.bindEvents();
  },
  initStyleUI: function initStyleUI() {
    var dom = document.createElement('style');
    dom.id = 'style';
    player.ui.style = dom;
    document.head.appendChild(dom);
    player.ui.range.max = _style.default.length;
  },
  bindEvents: function bindEvents() {
    for (var key in player.events) {
      document.querySelector(key).onclick = player[player.events[key]];
    }

    document.querySelector('#range').addEventListener('input', player.change);
  },
  run: function run() {
    if (player.n > _style.default.length) {
      player.pause();
      return;
    }

    player.n += 1;
    player.ui.style.innerHTML = _style.default.substring(0, player.n);
    player.ui.code.innerText = _style.default.substring(0, player.n);
    player.ui.code.scrollTop = player.ui.code.scrollHeight;
    player.ui.range.value = player.n;
  },
  play: function play() {
    player.pause();
    player.id = setInterval(player.run, player.speed);
  },
  pause: function pause() {
    clearInterval(player.id);
  },
  slow: function slow() {
    player.speed = 100;
    player.play();
  },
  normal: function normal() {
    player.speed = 50;
    player.play();
  },
  fast: function fast() {
    player.speed = 10;
    player.play();
  },
  reload: function reload() {
    // player.ui.style.innerHTML = ''
    // player.ui.code.innerText =''
    // player.ui.code.scrollTop =0
    player.n = 0;
    player.play();
  },
  change: function change() {
    console.log(player.ui.range.value);
    player.n = parseInt(player.ui.range.value);
    player.play();
  }
};
player.init();
},{"./style.js":"style.js"}],"../../../../.config/yarn/global/node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "51487" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../.config/yarn/global/node_modules/parcel/src/builtins/hmr-runtime.js","main.js"], null)
//# sourceMappingURL=/main.1f19ae8e.js.map