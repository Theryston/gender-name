"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key2 of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key2) && key2 !== except)
        __defProp(to, key2, { get: () => from[key2], enumerable: !(desc = __getOwnPropDesc(from, key2)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// ../turbo-utils/dist/index.js
var require_dist = __commonJS({
  "../turbo-utils/dist/index.js"(exports, module2) {
    "use strict";
    var __create2 = Object.create;
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __getProtoOf2 = Object.getPrototypeOf;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __esm = (fn, res) => function __init() {
      return fn && (res = (0, fn[__getOwnPropNames2(fn)[0]])(fn = 0)), res;
    };
    var __commonJS2 = (cb, mod) => function __require() {
      return mod || (0, cb[__getOwnPropNames2(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
    };
    var __export2 = (target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps2 = (to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key2 of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key2) && key2 !== except)
            __defProp2(to, key2, { get: () => from[key2], enumerable: !(desc = __getOwnPropDesc2(from, key2)) || desc.enumerable });
      }
      return to;
    };
    var __toESM2 = (mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps2(isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target, mod));
    var __toCommonJS2 = (mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod);
    var init_cjs_shims = __esm({
      "../../node_modules/.pnpm/tsup@5.12.9_typescript@4.7.4/node_modules/tsup/assets/cjs_shims.js"() {
      }
    });
    var require_typeof = __commonJS2({
      "../../node_modules/.pnpm/@babel+runtime@7.18.9/node_modules/@babel/runtime/helpers/typeof.js"(exports2, module22) {
        init_cjs_shims();
        function _typeof2(obj) {
          "@babel/helpers - typeof";
          return module22.exports = _typeof2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
            return typeof obj2;
          } : function(obj2) {
            return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
          }, module22.exports.__esModule = true, module22.exports["default"] = module22.exports, _typeof2(obj);
        }
        module22.exports = _typeof2, module22.exports.__esModule = true, module22.exports["default"] = module22.exports;
      }
    });
    var require_regeneratorRuntime = __commonJS2({
      "../../node_modules/.pnpm/@babel+runtime@7.18.9/node_modules/@babel/runtime/helpers/regeneratorRuntime.js"(exports2, module22) {
        init_cjs_shims();
        var _typeof2 = require_typeof()["default"];
        function _regeneratorRuntime2() {
          "use strict";
          module22.exports = _regeneratorRuntime2 = function _regeneratorRuntime3() {
            return exports22;
          }, module22.exports.__esModule = true, module22.exports["default"] = module22.exports;
          var exports22 = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
          function define(obj, key2, value) {
            return Object.defineProperty(obj, key2, {
              value,
              enumerable: true,
              configurable: true,
              writable: true
            }), obj[key2];
          }
          try {
            define({}, "");
          } catch (err) {
            define = function define2(obj, key2, value) {
              return obj[key2] = value;
            };
          }
          function wrap(innerFn, outerFn, self, tryLocsList) {
            var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []);
            return generator._invoke = function(innerFn2, self2, context2) {
              var state = "suspendedStart";
              return function(method, arg) {
                if ("executing" === state)
                  throw new Error("Generator is already running");
                if ("completed" === state) {
                  if ("throw" === method)
                    throw arg;
                  return doneResult();
                }
                for (context2.method = method, context2.arg = arg; ; ) {
                  var delegate = context2.delegate;
                  if (delegate) {
                    var delegateResult = maybeInvokeDelegate(delegate, context2);
                    if (delegateResult) {
                      if (delegateResult === ContinueSentinel)
                        continue;
                      return delegateResult;
                    }
                  }
                  if ("next" === context2.method)
                    context2.sent = context2._sent = context2.arg;
                  else if ("throw" === context2.method) {
                    if ("suspendedStart" === state)
                      throw state = "completed", context2.arg;
                    context2.dispatchException(context2.arg);
                  } else
                    "return" === context2.method && context2.abrupt("return", context2.arg);
                  state = "executing";
                  var record = tryCatch(innerFn2, self2, context2);
                  if ("normal" === record.type) {
                    if (state = context2.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel)
                      continue;
                    return {
                      value: record.arg,
                      done: context2.done
                    };
                  }
                  "throw" === record.type && (state = "completed", context2.method = "throw", context2.arg = record.arg);
                }
              };
            }(innerFn, self, context), generator;
          }
          function tryCatch(fn, obj, arg) {
            try {
              return {
                type: "normal",
                arg: fn.call(obj, arg)
              };
            } catch (err) {
              return {
                type: "throw",
                arg: err
              };
            }
          }
          exports22.wrap = wrap;
          var ContinueSentinel = {};
          function Generator() {
          }
          function GeneratorFunction() {
          }
          function GeneratorFunctionPrototype() {
          }
          var IteratorPrototype = {};
          define(IteratorPrototype, iteratorSymbol, function() {
            return this;
          });
          var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([])));
          NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
          var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
          function defineIteratorMethods(prototype) {
            ["next", "throw", "return"].forEach(function(method) {
              define(prototype, method, function(arg) {
                return this._invoke(method, arg);
              });
            });
          }
          function AsyncIterator(generator, PromiseImpl) {
            function invoke(method, arg, resolve, reject) {
              var record = tryCatch(generator[method], generator, arg);
              if ("throw" !== record.type) {
                var result = record.arg, value = result.value;
                return value && "object" == _typeof2(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function(value2) {
                  invoke("next", value2, resolve, reject);
                }, function(err) {
                  invoke("throw", err, resolve, reject);
                }) : PromiseImpl.resolve(value).then(function(unwrapped) {
                  result.value = unwrapped, resolve(result);
                }, function(error) {
                  return invoke("throw", error, resolve, reject);
                });
              }
              reject(record.arg);
            }
            var previousPromise;
            this._invoke = function(method, arg) {
              function callInvokeWithMethodAndArg() {
                return new PromiseImpl(function(resolve, reject) {
                  invoke(method, arg, resolve, reject);
                });
              }
              return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
            };
          }
          function maybeInvokeDelegate(delegate, context) {
            var method = delegate.iterator[context.method];
            if (void 0 === method) {
              if (context.delegate = null, "throw" === context.method) {
                if (delegate.iterator["return"] && (context.method = "return", context.arg = void 0, maybeInvokeDelegate(delegate, context), "throw" === context.method))
                  return ContinueSentinel;
                context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method");
              }
              return ContinueSentinel;
            }
            var record = tryCatch(method, delegate.iterator, context.arg);
            if ("throw" === record.type)
              return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
            var info = record.arg;
            return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = void 0), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
          }
          function pushTryEntry(locs) {
            var entry = {
              tryLoc: locs[0]
            };
            1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
          }
          function resetTryEntry(entry) {
            var record = entry.completion || {};
            record.type = "normal", delete record.arg, entry.completion = record;
          }
          function Context(tryLocsList) {
            this.tryEntries = [{
              tryLoc: "root"
            }], tryLocsList.forEach(pushTryEntry, this), this.reset(true);
          }
          function values(iterable) {
            if (iterable) {
              var iteratorMethod = iterable[iteratorSymbol];
              if (iteratorMethod)
                return iteratorMethod.call(iterable);
              if ("function" == typeof iterable.next)
                return iterable;
              if (!isNaN(iterable.length)) {
                var i = -1, next = function next2() {
                  for (; ++i < iterable.length; ) {
                    if (hasOwn.call(iterable, i))
                      return next2.value = iterable[i], next2.done = false, next2;
                  }
                  return next2.value = void 0, next2.done = true, next2;
                };
                return next.next = next;
              }
            }
            return {
              next: doneResult
            };
          }
          function doneResult() {
            return {
              value: void 0,
              done: true
            };
          }
          return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports22.isGeneratorFunction = function(genFun) {
            var ctor = "function" == typeof genFun && genFun.constructor;
            return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
          }, exports22.mark = function(genFun) {
            return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
          }, exports22.awrap = function(arg) {
            return {
              __await: arg
            };
          }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function() {
            return this;
          }), exports22.AsyncIterator = AsyncIterator, exports22.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
            void 0 === PromiseImpl && (PromiseImpl = Promise);
            var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
            return exports22.isGeneratorFunction(outerFn) ? iter : iter.next().then(function(result) {
              return result.done ? result.value : iter.next();
            });
          }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function() {
            return this;
          }), define(Gp, "toString", function() {
            return "[object Generator]";
          }), exports22.keys = function(object) {
            var keys = [];
            for (var key2 in object) {
              keys.push(key2);
            }
            return keys.reverse(), function next() {
              for (; keys.length; ) {
                var key22 = keys.pop();
                if (key22 in object)
                  return next.value = key22, next.done = false, next;
              }
              return next.done = true, next;
            };
          }, exports22.values = values, Context.prototype = {
            constructor: Context,
            reset: function reset(skipTempReset) {
              if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = false, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(resetTryEntry), !skipTempReset)
                for (var name in this) {
                  "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = void 0);
                }
            },
            stop: function stop() {
              this.done = true;
              var rootRecord = this.tryEntries[0].completion;
              if ("throw" === rootRecord.type)
                throw rootRecord.arg;
              return this.rval;
            },
            dispatchException: function dispatchException(exception) {
              if (this.done)
                throw exception;
              var context = this;
              function handle(loc, caught) {
                return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = void 0), !!caught;
              }
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var entry = this.tryEntries[i], record = entry.completion;
                if ("root" === entry.tryLoc)
                  return handle("end");
                if (entry.tryLoc <= this.prev) {
                  var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc");
                  if (hasCatch && hasFinally) {
                    if (this.prev < entry.catchLoc)
                      return handle(entry.catchLoc, true);
                    if (this.prev < entry.finallyLoc)
                      return handle(entry.finallyLoc);
                  } else if (hasCatch) {
                    if (this.prev < entry.catchLoc)
                      return handle(entry.catchLoc, true);
                  } else {
                    if (!hasFinally)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < entry.finallyLoc)
                      return handle(entry.finallyLoc);
                  }
                }
              }
            },
            abrupt: function abrupt(type, arg) {
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var entry = this.tryEntries[i];
                if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
                  var finallyEntry = entry;
                  break;
                }
              }
              finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
              var record = finallyEntry ? finallyEntry.completion : {};
              return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
            },
            complete: function complete(record, afterLoc) {
              if ("throw" === record.type)
                throw record.arg;
              return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
            },
            finish: function finish(finallyLoc) {
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var entry = this.tryEntries[i];
                if (entry.finallyLoc === finallyLoc)
                  return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
              }
            },
            "catch": function _catch(tryLoc) {
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var entry = this.tryEntries[i];
                if (entry.tryLoc === tryLoc) {
                  var record = entry.completion;
                  if ("throw" === record.type) {
                    var thrown = record.arg;
                    resetTryEntry(entry);
                  }
                  return thrown;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function delegateYield(iterable, resultName, nextLoc) {
              return this.delegate = {
                iterator: values(iterable),
                resultName,
                nextLoc
              }, "next" === this.method && (this.arg = void 0), ContinueSentinel;
            }
          }, exports22;
        }
        module22.exports = _regeneratorRuntime2, module22.exports.__esModule = true, module22.exports["default"] = module22.exports;
      }
    });
    var require_regenerator = __commonJS2({
      "../../node_modules/.pnpm/@babel+runtime@7.18.9/node_modules/@babel/runtime/regenerator/index.js"(exports2, module22) {
        init_cjs_shims();
        var runtime = require_regeneratorRuntime()();
        module22.exports = runtime;
        try {
          regeneratorRuntime = runtime;
        } catch (accidentalStrictMode) {
          if (typeof globalThis === "object") {
            globalThis.regeneratorRuntime = runtime;
          } else {
            Function("r", "regeneratorRuntime = r")(runtime);
          }
        }
      }
    });
    var require_p_try = __commonJS2({
      "../../node_modules/.pnpm/p-try@2.2.0/node_modules/p-try/index.js"(exports2, module22) {
        "use strict";
        init_cjs_shims();
        var pTry = (fn, ...arguments_) => new Promise((resolve) => {
          resolve(fn(...arguments_));
        });
        module22.exports = pTry;
        module22.exports.default = pTry;
      }
    });
    var require_p_limit = __commonJS2({
      "../../node_modules/.pnpm/p-limit@2.3.0/node_modules/p-limit/index.js"(exports2, module22) {
        "use strict";
        init_cjs_shims();
        var pTry = require_p_try();
        var pLimit = (concurrency) => {
          if (!((Number.isInteger(concurrency) || concurrency === Infinity) && concurrency > 0)) {
            return Promise.reject(new TypeError("Expected `concurrency` to be a number from 1 and up"));
          }
          const queue = [];
          let activeCount = 0;
          const next = () => {
            activeCount--;
            if (queue.length > 0) {
              queue.shift()();
            }
          };
          const run = (fn, resolve, ...args) => {
            activeCount++;
            const result = pTry(fn, ...args);
            resolve(result);
            result.then(next, next);
          };
          const enqueue = (fn, resolve, ...args) => {
            if (activeCount < concurrency) {
              run(fn, resolve, ...args);
            } else {
              queue.push(run.bind(null, fn, resolve, ...args));
            }
          };
          const generator = (fn, ...args) => new Promise((resolve) => enqueue(fn, resolve, ...args));
          Object.defineProperties(generator, {
            activeCount: {
              get: () => activeCount
            },
            pendingCount: {
              get: () => queue.length
            },
            clearQueue: {
              value: () => {
                queue.length = 0;
              }
            }
          });
          return generator;
        };
        module22.exports = pLimit;
        module22.exports.default = pLimit;
      }
    });
    var require_p_locate = __commonJS2({
      "../../node_modules/.pnpm/p-locate@4.1.0/node_modules/p-locate/index.js"(exports2, module22) {
        "use strict";
        init_cjs_shims();
        var pLimit = require_p_limit();
        var EndError = class extends Error {
          constructor(value) {
            super();
            this.value = value;
          }
        };
        var testElement = async (element, tester) => tester(await element);
        var finder = async (element) => {
          const values = await Promise.all(element);
          if (values[1] === true) {
            throw new EndError(values[0]);
          }
          return false;
        };
        var pLocate = async (iterable, tester, options) => {
          options = {
            concurrency: Infinity,
            preserveOrder: true,
            ...options
          };
          const limit = pLimit(options.concurrency);
          const items = [...iterable].map((element) => [element, limit(testElement, element, tester)]);
          const checkLimit = pLimit(options.preserveOrder ? 1 : Infinity);
          try {
            await Promise.all(items.map((element) => checkLimit(finder, element)));
          } catch (error) {
            if (error instanceof EndError) {
              return error.value;
            }
            throw error;
          }
        };
        module22.exports = pLocate;
        module22.exports.default = pLocate;
      }
    });
    var require_locate_path = __commonJS2({
      "../../node_modules/.pnpm/locate-path@5.0.0/node_modules/locate-path/index.js"(exports2, module22) {
        "use strict";
        init_cjs_shims();
        var path3 = require("path");
        var fs3 = require("fs");
        var { promisify } = require("util");
        var pLocate = require_p_locate();
        var fsStat = promisify(fs3.stat);
        var fsLStat = promisify(fs3.lstat);
        var typeMappings = {
          directory: "isDirectory",
          file: "isFile"
        };
        function checkType({ type }) {
          if (type in typeMappings) {
            return;
          }
          throw new Error(`Invalid type specified: ${type}`);
        }
        var matchType = (type, stat) => type === void 0 || stat[typeMappings[type]]();
        module22.exports = async (paths, options) => {
          options = {
            cwd: process.cwd(),
            type: "file",
            allowSymlinks: true,
            ...options
          };
          checkType(options);
          const statFn = options.allowSymlinks ? fsStat : fsLStat;
          return pLocate(paths, async (path_) => {
            try {
              const stat = await statFn(path3.resolve(options.cwd, path_));
              return matchType(options.type, stat);
            } catch (_) {
              return false;
            }
          }, options);
        };
        module22.exports.sync = (paths, options) => {
          options = {
            cwd: process.cwd(),
            allowSymlinks: true,
            type: "file",
            ...options
          };
          checkType(options);
          const statFn = options.allowSymlinks ? fs3.statSync : fs3.lstatSync;
          for (const path_ of paths) {
            try {
              const stat = statFn(path3.resolve(options.cwd, path_));
              if (matchType(options.type, stat)) {
                return path_;
              }
            } catch (_) {
            }
          }
        };
      }
    });
    var require_path_exists = __commonJS2({
      "../../node_modules/.pnpm/path-exists@4.0.0/node_modules/path-exists/index.js"(exports2, module22) {
        "use strict";
        init_cjs_shims();
        var fs3 = require("fs");
        var { promisify } = require("util");
        var pAccess = promisify(fs3.access);
        module22.exports = async (path3) => {
          try {
            await pAccess(path3);
            return true;
          } catch (_) {
            return false;
          }
        };
        module22.exports.sync = (path3) => {
          try {
            fs3.accessSync(path3);
            return true;
          } catch (_) {
            return false;
          }
        };
      }
    });
    var require_find_up = __commonJS2({
      "../../node_modules/.pnpm/find-up@4.1.0/node_modules/find-up/index.js"(exports2, module22) {
        "use strict";
        init_cjs_shims();
        var path3 = require("path");
        var locatePath = require_locate_path();
        var pathExists = require_path_exists();
        var stop = Symbol("findUp.stop");
        module22.exports = async (name, options = {}) => {
          let directory = path3.resolve(options.cwd || "");
          const { root: root2 } = path3.parse(directory);
          const paths = [].concat(name);
          const runMatcher = async (locateOptions) => {
            if (typeof name !== "function") {
              return locatePath(paths, locateOptions);
            }
            const foundPath = await name(locateOptions.cwd);
            if (typeof foundPath === "string") {
              return locatePath([foundPath], locateOptions);
            }
            return foundPath;
          };
          while (true) {
            const foundPath = await runMatcher({ ...options, cwd: directory });
            if (foundPath === stop) {
              return;
            }
            if (foundPath) {
              return path3.resolve(directory, foundPath);
            }
            if (directory === root2) {
              return;
            }
            directory = path3.dirname(directory);
          }
        };
        module22.exports.sync = (name, options = {}) => {
          let directory = path3.resolve(options.cwd || "");
          const { root: root2 } = path3.parse(directory);
          const paths = [].concat(name);
          const runMatcher = (locateOptions) => {
            if (typeof name !== "function") {
              return locatePath.sync(paths, locateOptions);
            }
            const foundPath = name(locateOptions.cwd);
            if (typeof foundPath === "string") {
              return locatePath.sync([foundPath], locateOptions);
            }
            return foundPath;
          };
          while (true) {
            const foundPath = runMatcher({ ...options, cwd: directory });
            if (foundPath === stop) {
              return;
            }
            if (foundPath) {
              return path3.resolve(directory, foundPath);
            }
            if (directory === root2) {
              return;
            }
            directory = path3.dirname(directory);
          }
        };
        module22.exports.exists = pathExists;
        module22.exports.sync.exists = pathExists.sync;
        module22.exports.stop = stop;
      }
    });
    var require_universalify = __commonJS2({
      "../../node_modules/.pnpm/universalify@0.1.2/node_modules/universalify/index.js"(exports2) {
        "use strict";
        init_cjs_shims();
        exports2.fromCallback = function(fn) {
          return Object.defineProperty(function() {
            if (typeof arguments[arguments.length - 1] === "function")
              fn.apply(this, arguments);
            else {
              return new Promise((resolve, reject) => {
                arguments[arguments.length] = (err, res) => {
                  if (err)
                    return reject(err);
                  resolve(res);
                };
                arguments.length++;
                fn.apply(this, arguments);
              });
            }
          }, "name", { value: fn.name });
        };
        exports2.fromPromise = function(fn) {
          return Object.defineProperty(function() {
            const cb = arguments[arguments.length - 1];
            if (typeof cb !== "function")
              return fn.apply(this, arguments);
            else
              fn.apply(this, arguments).then((r) => cb(null, r), cb);
          }, "name", { value: fn.name });
        };
      }
    });
    var require_polyfills = __commonJS2({
      "../../node_modules/.pnpm/graceful-fs@4.2.10/node_modules/graceful-fs/polyfills.js"(exports2, module22) {
        init_cjs_shims();
        var constants = require("constants");
        var origCwd = process.cwd;
        var cwd = null;
        var platform = process.env.GRACEFUL_FS_PLATFORM || process.platform;
        process.cwd = function() {
          if (!cwd)
            cwd = origCwd.call(process);
          return cwd;
        };
        try {
          process.cwd();
        } catch (er) {
        }
        if (typeof process.chdir === "function") {
          chdir = process.chdir;
          process.chdir = function(d) {
            cwd = null;
            chdir.call(process, d);
          };
          if (Object.setPrototypeOf)
            Object.setPrototypeOf(process.chdir, chdir);
        }
        var chdir;
        module22.exports = patch;
        function patch(fs3) {
          if (constants.hasOwnProperty("O_SYMLINK") && process.version.match(/^v0\.6\.[0-2]|^v0\.5\./)) {
            patchLchmod(fs3);
          }
          if (!fs3.lutimes) {
            patchLutimes(fs3);
          }
          fs3.chown = chownFix(fs3.chown);
          fs3.fchown = chownFix(fs3.fchown);
          fs3.lchown = chownFix(fs3.lchown);
          fs3.chmod = chmodFix(fs3.chmod);
          fs3.fchmod = chmodFix(fs3.fchmod);
          fs3.lchmod = chmodFix(fs3.lchmod);
          fs3.chownSync = chownFixSync(fs3.chownSync);
          fs3.fchownSync = chownFixSync(fs3.fchownSync);
          fs3.lchownSync = chownFixSync(fs3.lchownSync);
          fs3.chmodSync = chmodFixSync(fs3.chmodSync);
          fs3.fchmodSync = chmodFixSync(fs3.fchmodSync);
          fs3.lchmodSync = chmodFixSync(fs3.lchmodSync);
          fs3.stat = statFix(fs3.stat);
          fs3.fstat = statFix(fs3.fstat);
          fs3.lstat = statFix(fs3.lstat);
          fs3.statSync = statFixSync(fs3.statSync);
          fs3.fstatSync = statFixSync(fs3.fstatSync);
          fs3.lstatSync = statFixSync(fs3.lstatSync);
          if (fs3.chmod && !fs3.lchmod) {
            fs3.lchmod = function(path3, mode, cb) {
              if (cb)
                process.nextTick(cb);
            };
            fs3.lchmodSync = function() {
            };
          }
          if (fs3.chown && !fs3.lchown) {
            fs3.lchown = function(path3, uid, gid, cb) {
              if (cb)
                process.nextTick(cb);
            };
            fs3.lchownSync = function() {
            };
          }
          if (platform === "win32") {
            fs3.rename = typeof fs3.rename !== "function" ? fs3.rename : function(fs$rename) {
              function rename(from, to, cb) {
                var start = Date.now();
                var backoff = 0;
                fs$rename(from, to, function CB(er) {
                  if (er && (er.code === "EACCES" || er.code === "EPERM") && Date.now() - start < 6e4) {
                    setTimeout(function() {
                      fs3.stat(to, function(stater, st) {
                        if (stater && stater.code === "ENOENT")
                          fs$rename(from, to, CB);
                        else
                          cb(er);
                      });
                    }, backoff);
                    if (backoff < 100)
                      backoff += 10;
                    return;
                  }
                  if (cb)
                    cb(er);
                });
              }
              if (Object.setPrototypeOf)
                Object.setPrototypeOf(rename, fs$rename);
              return rename;
            }(fs3.rename);
          }
          fs3.read = typeof fs3.read !== "function" ? fs3.read : function(fs$read) {
            function read2(fd, buffer2, offset, length, position, callback_) {
              var callback;
              if (callback_ && typeof callback_ === "function") {
                var eagCounter = 0;
                callback = function(er, _, __) {
                  if (er && er.code === "EAGAIN" && eagCounter < 10) {
                    eagCounter++;
                    return fs$read.call(fs3, fd, buffer2, offset, length, position, callback);
                  }
                  callback_.apply(this, arguments);
                };
              }
              return fs$read.call(fs3, fd, buffer2, offset, length, position, callback);
            }
            if (Object.setPrototypeOf)
              Object.setPrototypeOf(read2, fs$read);
            return read2;
          }(fs3.read);
          fs3.readSync = typeof fs3.readSync !== "function" ? fs3.readSync : function(fs$readSync) {
            return function(fd, buffer2, offset, length, position) {
              var eagCounter = 0;
              while (true) {
                try {
                  return fs$readSync.call(fs3, fd, buffer2, offset, length, position);
                } catch (er) {
                  if (er.code === "EAGAIN" && eagCounter < 10) {
                    eagCounter++;
                    continue;
                  }
                  throw er;
                }
              }
            };
          }(fs3.readSync);
          function patchLchmod(fs4) {
            fs4.lchmod = function(path3, mode, callback) {
              fs4.open(path3, constants.O_WRONLY | constants.O_SYMLINK, mode, function(err, fd) {
                if (err) {
                  if (callback)
                    callback(err);
                  return;
                }
                fs4.fchmod(fd, mode, function(err2) {
                  fs4.close(fd, function(err22) {
                    if (callback)
                      callback(err2 || err22);
                  });
                });
              });
            };
            fs4.lchmodSync = function(path3, mode) {
              var fd = fs4.openSync(path3, constants.O_WRONLY | constants.O_SYMLINK, mode);
              var threw = true;
              var ret;
              try {
                ret = fs4.fchmodSync(fd, mode);
                threw = false;
              } finally {
                if (threw) {
                  try {
                    fs4.closeSync(fd);
                  } catch (er) {
                  }
                } else {
                  fs4.closeSync(fd);
                }
              }
              return ret;
            };
          }
          function patchLutimes(fs4) {
            if (constants.hasOwnProperty("O_SYMLINK") && fs4.futimes) {
              fs4.lutimes = function(path3, at, mt, cb) {
                fs4.open(path3, constants.O_SYMLINK, function(er, fd) {
                  if (er) {
                    if (cb)
                      cb(er);
                    return;
                  }
                  fs4.futimes(fd, at, mt, function(er2) {
                    fs4.close(fd, function(er22) {
                      if (cb)
                        cb(er2 || er22);
                    });
                  });
                });
              };
              fs4.lutimesSync = function(path3, at, mt) {
                var fd = fs4.openSync(path3, constants.O_SYMLINK);
                var ret;
                var threw = true;
                try {
                  ret = fs4.futimesSync(fd, at, mt);
                  threw = false;
                } finally {
                  if (threw) {
                    try {
                      fs4.closeSync(fd);
                    } catch (er) {
                    }
                  } else {
                    fs4.closeSync(fd);
                  }
                }
                return ret;
              };
            } else if (fs4.futimes) {
              fs4.lutimes = function(_a, _b, _c, cb) {
                if (cb)
                  process.nextTick(cb);
              };
              fs4.lutimesSync = function() {
              };
            }
          }
          function chmodFix(orig) {
            if (!orig)
              return orig;
            return function(target, mode, cb) {
              return orig.call(fs3, target, mode, function(er) {
                if (chownErOk(er))
                  er = null;
                if (cb)
                  cb.apply(this, arguments);
              });
            };
          }
          function chmodFixSync(orig) {
            if (!orig)
              return orig;
            return function(target, mode) {
              try {
                return orig.call(fs3, target, mode);
              } catch (er) {
                if (!chownErOk(er))
                  throw er;
              }
            };
          }
          function chownFix(orig) {
            if (!orig)
              return orig;
            return function(target, uid, gid, cb) {
              return orig.call(fs3, target, uid, gid, function(er) {
                if (chownErOk(er))
                  er = null;
                if (cb)
                  cb.apply(this, arguments);
              });
            };
          }
          function chownFixSync(orig) {
            if (!orig)
              return orig;
            return function(target, uid, gid) {
              try {
                return orig.call(fs3, target, uid, gid);
              } catch (er) {
                if (!chownErOk(er))
                  throw er;
              }
            };
          }
          function statFix(orig) {
            if (!orig)
              return orig;
            return function(target, options, cb) {
              if (typeof options === "function") {
                cb = options;
                options = null;
              }
              function callback(er, stats) {
                if (stats) {
                  if (stats.uid < 0)
                    stats.uid += 4294967296;
                  if (stats.gid < 0)
                    stats.gid += 4294967296;
                }
                if (cb)
                  cb.apply(this, arguments);
              }
              return options ? orig.call(fs3, target, options, callback) : orig.call(fs3, target, callback);
            };
          }
          function statFixSync(orig) {
            if (!orig)
              return orig;
            return function(target, options) {
              var stats = options ? orig.call(fs3, target, options) : orig.call(fs3, target);
              if (stats) {
                if (stats.uid < 0)
                  stats.uid += 4294967296;
                if (stats.gid < 0)
                  stats.gid += 4294967296;
              }
              return stats;
            };
          }
          function chownErOk(er) {
            if (!er)
              return true;
            if (er.code === "ENOSYS")
              return true;
            var nonroot = !process.getuid || process.getuid() !== 0;
            if (nonroot) {
              if (er.code === "EINVAL" || er.code === "EPERM")
                return true;
            }
            return false;
          }
        }
      }
    });
    var require_legacy_streams = __commonJS2({
      "../../node_modules/.pnpm/graceful-fs@4.2.10/node_modules/graceful-fs/legacy-streams.js"(exports2, module22) {
        init_cjs_shims();
        var Stream = require("stream").Stream;
        module22.exports = legacy;
        function legacy(fs3) {
          return {
            ReadStream,
            WriteStream
          };
          function ReadStream(path3, options) {
            if (!(this instanceof ReadStream))
              return new ReadStream(path3, options);
            Stream.call(this);
            var self = this;
            this.path = path3;
            this.fd = null;
            this.readable = true;
            this.paused = false;
            this.flags = "r";
            this.mode = 438;
            this.bufferSize = 64 * 1024;
            options = options || {};
            var keys = Object.keys(options);
            for (var index = 0, length = keys.length; index < length; index++) {
              var key2 = keys[index];
              this[key2] = options[key2];
            }
            if (this.encoding)
              this.setEncoding(this.encoding);
            if (this.start !== void 0) {
              if ("number" !== typeof this.start) {
                throw TypeError("start must be a Number");
              }
              if (this.end === void 0) {
                this.end = Infinity;
              } else if ("number" !== typeof this.end) {
                throw TypeError("end must be a Number");
              }
              if (this.start > this.end) {
                throw new Error("start must be <= end");
              }
              this.pos = this.start;
            }
            if (this.fd !== null) {
              process.nextTick(function() {
                self._read();
              });
              return;
            }
            fs3.open(this.path, this.flags, this.mode, function(err, fd) {
              if (err) {
                self.emit("error", err);
                self.readable = false;
                return;
              }
              self.fd = fd;
              self.emit("open", fd);
              self._read();
            });
          }
          function WriteStream(path3, options) {
            if (!(this instanceof WriteStream))
              return new WriteStream(path3, options);
            Stream.call(this);
            this.path = path3;
            this.fd = null;
            this.writable = true;
            this.flags = "w";
            this.encoding = "binary";
            this.mode = 438;
            this.bytesWritten = 0;
            options = options || {};
            var keys = Object.keys(options);
            for (var index = 0, length = keys.length; index < length; index++) {
              var key2 = keys[index];
              this[key2] = options[key2];
            }
            if (this.start !== void 0) {
              if ("number" !== typeof this.start) {
                throw TypeError("start must be a Number");
              }
              if (this.start < 0) {
                throw new Error("start must be >= zero");
              }
              this.pos = this.start;
            }
            this.busy = false;
            this._queue = [];
            if (this.fd === null) {
              this._open = fs3.open;
              this._queue.push([this._open, this.path, this.flags, this.mode, void 0]);
              this.flush();
            }
          }
        }
      }
    });
    var require_clone = __commonJS2({
      "../../node_modules/.pnpm/graceful-fs@4.2.10/node_modules/graceful-fs/clone.js"(exports2, module22) {
        "use strict";
        init_cjs_shims();
        module22.exports = clone;
        var getPrototypeOf = Object.getPrototypeOf || function(obj) {
          return obj.__proto__;
        };
        function clone(obj) {
          if (obj === null || typeof obj !== "object")
            return obj;
          if (obj instanceof Object)
            var copy = { __proto__: getPrototypeOf(obj) };
          else
            var copy = /* @__PURE__ */ Object.create(null);
          Object.getOwnPropertyNames(obj).forEach(function(key2) {
            Object.defineProperty(copy, key2, Object.getOwnPropertyDescriptor(obj, key2));
          });
          return copy;
        }
      }
    });
    var require_graceful_fs = __commonJS2({
      "../../node_modules/.pnpm/graceful-fs@4.2.10/node_modules/graceful-fs/graceful-fs.js"(exports2, module22) {
        init_cjs_shims();
        var fs3 = require("fs");
        var polyfills = require_polyfills();
        var legacy = require_legacy_streams();
        var clone = require_clone();
        var util2 = require("util");
        var gracefulQueue;
        var previousSymbol;
        if (typeof Symbol === "function" && typeof Symbol.for === "function") {
          gracefulQueue = Symbol.for("graceful-fs.queue");
          previousSymbol = Symbol.for("graceful-fs.previous");
        } else {
          gracefulQueue = "___graceful-fs.queue";
          previousSymbol = "___graceful-fs.previous";
        }
        function noop() {
        }
        function publishQueue(context, queue2) {
          Object.defineProperty(context, gracefulQueue, {
            get: function() {
              return queue2;
            }
          });
        }
        var debug = noop;
        if (util2.debuglog)
          debug = util2.debuglog("gfs4");
        else if (/\bgfs4\b/i.test(process.env.NODE_DEBUG || ""))
          debug = function() {
            var m = util2.format.apply(util2, arguments);
            m = "GFS4: " + m.split(/\n/).join("\nGFS4: ");
            console.error(m);
          };
        if (!fs3[gracefulQueue]) {
          queue = global[gracefulQueue] || [];
          publishQueue(fs3, queue);
          fs3.close = function(fs$close) {
            function close(fd, cb) {
              return fs$close.call(fs3, fd, function(err) {
                if (!err) {
                  resetQueue();
                }
                if (typeof cb === "function")
                  cb.apply(this, arguments);
              });
            }
            Object.defineProperty(close, previousSymbol, {
              value: fs$close
            });
            return close;
          }(fs3.close);
          fs3.closeSync = function(fs$closeSync) {
            function closeSync(fd) {
              fs$closeSync.apply(fs3, arguments);
              resetQueue();
            }
            Object.defineProperty(closeSync, previousSymbol, {
              value: fs$closeSync
            });
            return closeSync;
          }(fs3.closeSync);
          if (/\bgfs4\b/i.test(process.env.NODE_DEBUG || "")) {
            process.on("exit", function() {
              debug(fs3[gracefulQueue]);
              require("assert").equal(fs3[gracefulQueue].length, 0);
            });
          }
        }
        var queue;
        if (!global[gracefulQueue]) {
          publishQueue(global, fs3[gracefulQueue]);
        }
        module22.exports = patch(clone(fs3));
        if (process.env.TEST_GRACEFUL_FS_GLOBAL_PATCH && !fs3.__patched) {
          module22.exports = patch(fs3);
          fs3.__patched = true;
        }
        function patch(fs4) {
          polyfills(fs4);
          fs4.gracefulify = patch;
          fs4.createReadStream = createReadStream;
          fs4.createWriteStream = createWriteStream;
          var fs$readFile = fs4.readFile;
          fs4.readFile = readFile;
          function readFile(path3, options, cb) {
            if (typeof options === "function")
              cb = options, options = null;
            return go$readFile(path3, options, cb);
            function go$readFile(path4, options2, cb2, startTime) {
              return fs$readFile(path4, options2, function(err) {
                if (err && (err.code === "EMFILE" || err.code === "ENFILE"))
                  enqueue([go$readFile, [path4, options2, cb2], err, startTime || Date.now(), Date.now()]);
                else {
                  if (typeof cb2 === "function")
                    cb2.apply(this, arguments);
                }
              });
            }
          }
          var fs$writeFile = fs4.writeFile;
          fs4.writeFile = writeFile;
          function writeFile(path3, data, options, cb) {
            if (typeof options === "function")
              cb = options, options = null;
            return go$writeFile(path3, data, options, cb);
            function go$writeFile(path4, data2, options2, cb2, startTime) {
              return fs$writeFile(path4, data2, options2, function(err) {
                if (err && (err.code === "EMFILE" || err.code === "ENFILE"))
                  enqueue([go$writeFile, [path4, data2, options2, cb2], err, startTime || Date.now(), Date.now()]);
                else {
                  if (typeof cb2 === "function")
                    cb2.apply(this, arguments);
                }
              });
            }
          }
          var fs$appendFile = fs4.appendFile;
          if (fs$appendFile)
            fs4.appendFile = appendFile;
          function appendFile(path3, data, options, cb) {
            if (typeof options === "function")
              cb = options, options = null;
            return go$appendFile(path3, data, options, cb);
            function go$appendFile(path4, data2, options2, cb2, startTime) {
              return fs$appendFile(path4, data2, options2, function(err) {
                if (err && (err.code === "EMFILE" || err.code === "ENFILE"))
                  enqueue([go$appendFile, [path4, data2, options2, cb2], err, startTime || Date.now(), Date.now()]);
                else {
                  if (typeof cb2 === "function")
                    cb2.apply(this, arguments);
                }
              });
            }
          }
          var fs$copyFile = fs4.copyFile;
          if (fs$copyFile)
            fs4.copyFile = copyFile;
          function copyFile(src, dest, flags, cb) {
            if (typeof flags === "function") {
              cb = flags;
              flags = 0;
            }
            return go$copyFile(src, dest, flags, cb);
            function go$copyFile(src2, dest2, flags2, cb2, startTime) {
              return fs$copyFile(src2, dest2, flags2, function(err) {
                if (err && (err.code === "EMFILE" || err.code === "ENFILE"))
                  enqueue([go$copyFile, [src2, dest2, flags2, cb2], err, startTime || Date.now(), Date.now()]);
                else {
                  if (typeof cb2 === "function")
                    cb2.apply(this, arguments);
                }
              });
            }
          }
          var fs$readdir = fs4.readdir;
          fs4.readdir = readdir;
          var noReaddirOptionVersions = /^v[0-5]\./;
          function readdir(path3, options, cb) {
            if (typeof options === "function")
              cb = options, options = null;
            var go$readdir = noReaddirOptionVersions.test(process.version) ? function go$readdir2(path4, options2, cb2, startTime) {
              return fs$readdir(path4, fs$readdirCallback(path4, options2, cb2, startTime));
            } : function go$readdir2(path4, options2, cb2, startTime) {
              return fs$readdir(path4, options2, fs$readdirCallback(path4, options2, cb2, startTime));
            };
            return go$readdir(path3, options, cb);
            function fs$readdirCallback(path4, options2, cb2, startTime) {
              return function(err, files) {
                if (err && (err.code === "EMFILE" || err.code === "ENFILE"))
                  enqueue([
                    go$readdir,
                    [path4, options2, cb2],
                    err,
                    startTime || Date.now(),
                    Date.now()
                  ]);
                else {
                  if (files && files.sort)
                    files.sort();
                  if (typeof cb2 === "function")
                    cb2.call(this, err, files);
                }
              };
            }
          }
          if (process.version.substr(0, 4) === "v0.8") {
            var legStreams = legacy(fs4);
            ReadStream = legStreams.ReadStream;
            WriteStream = legStreams.WriteStream;
          }
          var fs$ReadStream = fs4.ReadStream;
          if (fs$ReadStream) {
            ReadStream.prototype = Object.create(fs$ReadStream.prototype);
            ReadStream.prototype.open = ReadStream$open;
          }
          var fs$WriteStream = fs4.WriteStream;
          if (fs$WriteStream) {
            WriteStream.prototype = Object.create(fs$WriteStream.prototype);
            WriteStream.prototype.open = WriteStream$open;
          }
          Object.defineProperty(fs4, "ReadStream", {
            get: function() {
              return ReadStream;
            },
            set: function(val) {
              ReadStream = val;
            },
            enumerable: true,
            configurable: true
          });
          Object.defineProperty(fs4, "WriteStream", {
            get: function() {
              return WriteStream;
            },
            set: function(val) {
              WriteStream = val;
            },
            enumerable: true,
            configurable: true
          });
          var FileReadStream = ReadStream;
          Object.defineProperty(fs4, "FileReadStream", {
            get: function() {
              return FileReadStream;
            },
            set: function(val) {
              FileReadStream = val;
            },
            enumerable: true,
            configurable: true
          });
          var FileWriteStream = WriteStream;
          Object.defineProperty(fs4, "FileWriteStream", {
            get: function() {
              return FileWriteStream;
            },
            set: function(val) {
              FileWriteStream = val;
            },
            enumerable: true,
            configurable: true
          });
          function ReadStream(path3, options) {
            if (this instanceof ReadStream)
              return fs$ReadStream.apply(this, arguments), this;
            else
              return ReadStream.apply(Object.create(ReadStream.prototype), arguments);
          }
          function ReadStream$open() {
            var that = this;
            open(that.path, that.flags, that.mode, function(err, fd) {
              if (err) {
                if (that.autoClose)
                  that.destroy();
                that.emit("error", err);
              } else {
                that.fd = fd;
                that.emit("open", fd);
                that.read();
              }
            });
          }
          function WriteStream(path3, options) {
            if (this instanceof WriteStream)
              return fs$WriteStream.apply(this, arguments), this;
            else
              return WriteStream.apply(Object.create(WriteStream.prototype), arguments);
          }
          function WriteStream$open() {
            var that = this;
            open(that.path, that.flags, that.mode, function(err, fd) {
              if (err) {
                that.destroy();
                that.emit("error", err);
              } else {
                that.fd = fd;
                that.emit("open", fd);
              }
            });
          }
          function createReadStream(path3, options) {
            return new fs4.ReadStream(path3, options);
          }
          function createWriteStream(path3, options) {
            return new fs4.WriteStream(path3, options);
          }
          var fs$open = fs4.open;
          fs4.open = open;
          function open(path3, flags, mode, cb) {
            if (typeof mode === "function")
              cb = mode, mode = null;
            return go$open(path3, flags, mode, cb);
            function go$open(path4, flags2, mode2, cb2, startTime) {
              return fs$open(path4, flags2, mode2, function(err, fd) {
                if (err && (err.code === "EMFILE" || err.code === "ENFILE"))
                  enqueue([go$open, [path4, flags2, mode2, cb2], err, startTime || Date.now(), Date.now()]);
                else {
                  if (typeof cb2 === "function")
                    cb2.apply(this, arguments);
                }
              });
            }
          }
          return fs4;
        }
        function enqueue(elem) {
          debug("ENQUEUE", elem[0].name, elem[1]);
          fs3[gracefulQueue].push(elem);
          retry();
        }
        var retryTimer;
        function resetQueue() {
          var now = Date.now();
          for (var i = 0; i < fs3[gracefulQueue].length; ++i) {
            if (fs3[gracefulQueue][i].length > 2) {
              fs3[gracefulQueue][i][3] = now;
              fs3[gracefulQueue][i][4] = now;
            }
          }
          retry();
        }
        function retry() {
          clearTimeout(retryTimer);
          retryTimer = void 0;
          if (fs3[gracefulQueue].length === 0)
            return;
          var elem = fs3[gracefulQueue].shift();
          var fn = elem[0];
          var args = elem[1];
          var err = elem[2];
          var startTime = elem[3];
          var lastTime = elem[4];
          if (startTime === void 0) {
            debug("RETRY", fn.name, args);
            fn.apply(null, args);
          } else if (Date.now() - startTime >= 6e4) {
            debug("TIMEOUT", fn.name, args);
            var cb = args.pop();
            if (typeof cb === "function")
              cb.call(null, err);
          } else {
            var sinceAttempt = Date.now() - lastTime;
            var sinceStart = Math.max(lastTime - startTime, 1);
            var desiredDelay = Math.min(sinceStart * 1.2, 100);
            if (sinceAttempt >= desiredDelay) {
              debug("RETRY", fn.name, args);
              fn.apply(null, args.concat([startTime]));
            } else {
              fs3[gracefulQueue].push(elem);
            }
          }
          if (retryTimer === void 0) {
            retryTimer = setTimeout(retry, 0);
          }
        }
      }
    });
    var require_fs = __commonJS2({
      "../../node_modules/.pnpm/fs-extra@8.1.0/node_modules/fs-extra/lib/fs/index.js"(exports2) {
        "use strict";
        init_cjs_shims();
        var u = require_universalify().fromCallback;
        var fs3 = require_graceful_fs();
        var api = [
          "access",
          "appendFile",
          "chmod",
          "chown",
          "close",
          "copyFile",
          "fchmod",
          "fchown",
          "fdatasync",
          "fstat",
          "fsync",
          "ftruncate",
          "futimes",
          "lchown",
          "lchmod",
          "link",
          "lstat",
          "mkdir",
          "mkdtemp",
          "open",
          "readFile",
          "readdir",
          "readlink",
          "realpath",
          "rename",
          "rmdir",
          "stat",
          "symlink",
          "truncate",
          "unlink",
          "utimes",
          "writeFile"
        ].filter((key2) => {
          return typeof fs3[key2] === "function";
        });
        Object.keys(fs3).forEach((key2) => {
          if (key2 === "promises") {
            return;
          }
          exports2[key2] = fs3[key2];
        });
        api.forEach((method) => {
          exports2[method] = u(fs3[method]);
        });
        exports2.exists = function(filename, callback) {
          if (typeof callback === "function") {
            return fs3.exists(filename, callback);
          }
          return new Promise((resolve) => {
            return fs3.exists(filename, resolve);
          });
        };
        exports2.read = function(fd, buffer2, offset, length, position, callback) {
          if (typeof callback === "function") {
            return fs3.read(fd, buffer2, offset, length, position, callback);
          }
          return new Promise((resolve, reject) => {
            fs3.read(fd, buffer2, offset, length, position, (err, bytesRead, buffer22) => {
              if (err)
                return reject(err);
              resolve({ bytesRead, buffer: buffer22 });
            });
          });
        };
        exports2.write = function(fd, buffer2, ...args) {
          if (typeof args[args.length - 1] === "function") {
            return fs3.write(fd, buffer2, ...args);
          }
          return new Promise((resolve, reject) => {
            fs3.write(fd, buffer2, ...args, (err, bytesWritten, buffer22) => {
              if (err)
                return reject(err);
              resolve({ bytesWritten, buffer: buffer22 });
            });
          });
        };
        if (typeof fs3.realpath.native === "function") {
          exports2.realpath.native = u(fs3.realpath.native);
        }
      }
    });
    var require_win32 = __commonJS2({
      "../../node_modules/.pnpm/fs-extra@8.1.0/node_modules/fs-extra/lib/mkdirs/win32.js"(exports2, module22) {
        "use strict";
        init_cjs_shims();
        var path3 = require("path");
        function getRootPath(p) {
          p = path3.normalize(path3.resolve(p)).split(path3.sep);
          if (p.length > 0)
            return p[0];
          return null;
        }
        var INVALID_PATH_CHARS = /[<>:"|?*]/;
        function invalidWin32Path(p) {
          const rp = getRootPath(p);
          p = p.replace(rp, "");
          return INVALID_PATH_CHARS.test(p);
        }
        module22.exports = {
          getRootPath,
          invalidWin32Path
        };
      }
    });
    var require_mkdirs = __commonJS2({
      "../../node_modules/.pnpm/fs-extra@8.1.0/node_modules/fs-extra/lib/mkdirs/mkdirs.js"(exports2, module22) {
        "use strict";
        init_cjs_shims();
        var fs3 = require_graceful_fs();
        var path3 = require("path");
        var invalidWin32Path = require_win32().invalidWin32Path;
        var o777 = parseInt("0777", 8);
        function mkdirs(p, opts, callback, made) {
          if (typeof opts === "function") {
            callback = opts;
            opts = {};
          } else if (!opts || typeof opts !== "object") {
            opts = { mode: opts };
          }
          if (process.platform === "win32" && invalidWin32Path(p)) {
            const errInval = new Error(p + " contains invalid WIN32 path characters.");
            errInval.code = "EINVAL";
            return callback(errInval);
          }
          let mode = opts.mode;
          const xfs = opts.fs || fs3;
          if (mode === void 0) {
            mode = o777 & ~process.umask();
          }
          if (!made)
            made = null;
          callback = callback || function() {
          };
          p = path3.resolve(p);
          xfs.mkdir(p, mode, (er) => {
            if (!er) {
              made = made || p;
              return callback(null, made);
            }
            switch (er.code) {
              case "ENOENT":
                if (path3.dirname(p) === p)
                  return callback(er);
                mkdirs(path3.dirname(p), opts, (er2, made2) => {
                  if (er2)
                    callback(er2, made2);
                  else
                    mkdirs(p, opts, callback, made2);
                });
                break;
              default:
                xfs.stat(p, (er2, stat) => {
                  if (er2 || !stat.isDirectory())
                    callback(er, made);
                  else
                    callback(null, made);
                });
                break;
            }
          });
        }
        module22.exports = mkdirs;
      }
    });
    var require_mkdirs_sync = __commonJS2({
      "../../node_modules/.pnpm/fs-extra@8.1.0/node_modules/fs-extra/lib/mkdirs/mkdirs-sync.js"(exports2, module22) {
        "use strict";
        init_cjs_shims();
        var fs3 = require_graceful_fs();
        var path3 = require("path");
        var invalidWin32Path = require_win32().invalidWin32Path;
        var o777 = parseInt("0777", 8);
        function mkdirsSync(p, opts, made) {
          if (!opts || typeof opts !== "object") {
            opts = { mode: opts };
          }
          let mode = opts.mode;
          const xfs = opts.fs || fs3;
          if (process.platform === "win32" && invalidWin32Path(p)) {
            const errInval = new Error(p + " contains invalid WIN32 path characters.");
            errInval.code = "EINVAL";
            throw errInval;
          }
          if (mode === void 0) {
            mode = o777 & ~process.umask();
          }
          if (!made)
            made = null;
          p = path3.resolve(p);
          try {
            xfs.mkdirSync(p, mode);
            made = made || p;
          } catch (err0) {
            if (err0.code === "ENOENT") {
              if (path3.dirname(p) === p)
                throw err0;
              made = mkdirsSync(path3.dirname(p), opts, made);
              mkdirsSync(p, opts, made);
            } else {
              let stat;
              try {
                stat = xfs.statSync(p);
              } catch (err1) {
                throw err0;
              }
              if (!stat.isDirectory())
                throw err0;
            }
          }
          return made;
        }
        module22.exports = mkdirsSync;
      }
    });
    var require_mkdirs2 = __commonJS2({
      "../../node_modules/.pnpm/fs-extra@8.1.0/node_modules/fs-extra/lib/mkdirs/index.js"(exports2, module22) {
        "use strict";
        init_cjs_shims();
        var u = require_universalify().fromCallback;
        var mkdirs = u(require_mkdirs());
        var mkdirsSync = require_mkdirs_sync();
        module22.exports = {
          mkdirs,
          mkdirsSync,
          mkdirp: mkdirs,
          mkdirpSync: mkdirsSync,
          ensureDir: mkdirs,
          ensureDirSync: mkdirsSync
        };
      }
    });
    var require_utimes = __commonJS2({
      "../../node_modules/.pnpm/fs-extra@8.1.0/node_modules/fs-extra/lib/util/utimes.js"(exports2, module22) {
        "use strict";
        init_cjs_shims();
        var fs3 = require_graceful_fs();
        var os = require("os");
        var path3 = require("path");
        function hasMillisResSync() {
          let tmpfile = path3.join("millis-test-sync" + Date.now().toString() + Math.random().toString().slice(2));
          tmpfile = path3.join(os.tmpdir(), tmpfile);
          const d = new Date(1435410243862);
          fs3.writeFileSync(tmpfile, "https://github.com/jprichardson/node-fs-extra/pull/141");
          const fd = fs3.openSync(tmpfile, "r+");
          fs3.futimesSync(fd, d, d);
          fs3.closeSync(fd);
          return fs3.statSync(tmpfile).mtime > 1435410243e3;
        }
        function hasMillisRes(callback) {
          let tmpfile = path3.join("millis-test" + Date.now().toString() + Math.random().toString().slice(2));
          tmpfile = path3.join(os.tmpdir(), tmpfile);
          const d = new Date(1435410243862);
          fs3.writeFile(tmpfile, "https://github.com/jprichardson/node-fs-extra/pull/141", (err) => {
            if (err)
              return callback(err);
            fs3.open(tmpfile, "r+", (err2, fd) => {
              if (err2)
                return callback(err2);
              fs3.futimes(fd, d, d, (err3) => {
                if (err3)
                  return callback(err3);
                fs3.close(fd, (err4) => {
                  if (err4)
                    return callback(err4);
                  fs3.stat(tmpfile, (err5, stats) => {
                    if (err5)
                      return callback(err5);
                    callback(null, stats.mtime > 1435410243e3);
                  });
                });
              });
            });
          });
        }
        function timeRemoveMillis(timestamp) {
          if (typeof timestamp === "number") {
            return Math.floor(timestamp / 1e3) * 1e3;
          } else if (timestamp instanceof Date) {
            return new Date(Math.floor(timestamp.getTime() / 1e3) * 1e3);
          } else {
            throw new Error("fs-extra: timeRemoveMillis() unknown parameter type");
          }
        }
        function utimesMillis(path4, atime, mtime, callback) {
          fs3.open(path4, "r+", (err, fd) => {
            if (err)
              return callback(err);
            fs3.futimes(fd, atime, mtime, (futimesErr) => {
              fs3.close(fd, (closeErr) => {
                if (callback)
                  callback(futimesErr || closeErr);
              });
            });
          });
        }
        function utimesMillisSync(path4, atime, mtime) {
          const fd = fs3.openSync(path4, "r+");
          fs3.futimesSync(fd, atime, mtime);
          return fs3.closeSync(fd);
        }
        module22.exports = {
          hasMillisRes,
          hasMillisResSync,
          timeRemoveMillis,
          utimesMillis,
          utimesMillisSync
        };
      }
    });
    var require_stat = __commonJS2({
      "../../node_modules/.pnpm/fs-extra@8.1.0/node_modules/fs-extra/lib/util/stat.js"(exports2, module22) {
        "use strict";
        init_cjs_shims();
        var fs3 = require_graceful_fs();
        var path3 = require("path");
        var NODE_VERSION_MAJOR_WITH_BIGINT = 10;
        var NODE_VERSION_MINOR_WITH_BIGINT = 5;
        var NODE_VERSION_PATCH_WITH_BIGINT = 0;
        var nodeVersion = process.versions.node.split(".");
        var nodeVersionMajor = Number.parseInt(nodeVersion[0], 10);
        var nodeVersionMinor = Number.parseInt(nodeVersion[1], 10);
        var nodeVersionPatch = Number.parseInt(nodeVersion[2], 10);
        function nodeSupportsBigInt() {
          if (nodeVersionMajor > NODE_VERSION_MAJOR_WITH_BIGINT) {
            return true;
          } else if (nodeVersionMajor === NODE_VERSION_MAJOR_WITH_BIGINT) {
            if (nodeVersionMinor > NODE_VERSION_MINOR_WITH_BIGINT) {
              return true;
            } else if (nodeVersionMinor === NODE_VERSION_MINOR_WITH_BIGINT) {
              if (nodeVersionPatch >= NODE_VERSION_PATCH_WITH_BIGINT) {
                return true;
              }
            }
          }
          return false;
        }
        function getStats(src, dest, cb) {
          if (nodeSupportsBigInt()) {
            fs3.stat(src, { bigint: true }, (err, srcStat) => {
              if (err)
                return cb(err);
              fs3.stat(dest, { bigint: true }, (err2, destStat) => {
                if (err2) {
                  if (err2.code === "ENOENT")
                    return cb(null, { srcStat, destStat: null });
                  return cb(err2);
                }
                return cb(null, { srcStat, destStat });
              });
            });
          } else {
            fs3.stat(src, (err, srcStat) => {
              if (err)
                return cb(err);
              fs3.stat(dest, (err2, destStat) => {
                if (err2) {
                  if (err2.code === "ENOENT")
                    return cb(null, { srcStat, destStat: null });
                  return cb(err2);
                }
                return cb(null, { srcStat, destStat });
              });
            });
          }
        }
        function getStatsSync(src, dest) {
          let srcStat, destStat;
          if (nodeSupportsBigInt()) {
            srcStat = fs3.statSync(src, { bigint: true });
          } else {
            srcStat = fs3.statSync(src);
          }
          try {
            if (nodeSupportsBigInt()) {
              destStat = fs3.statSync(dest, { bigint: true });
            } else {
              destStat = fs3.statSync(dest);
            }
          } catch (err) {
            if (err.code === "ENOENT")
              return { srcStat, destStat: null };
            throw err;
          }
          return { srcStat, destStat };
        }
        function checkPaths(src, dest, funcName, cb) {
          getStats(src, dest, (err, stats) => {
            if (err)
              return cb(err);
            const { srcStat, destStat } = stats;
            if (destStat && destStat.ino && destStat.dev && destStat.ino === srcStat.ino && destStat.dev === srcStat.dev) {
              return cb(new Error("Source and destination must not be the same."));
            }
            if (srcStat.isDirectory() && isSrcSubdir(src, dest)) {
              return cb(new Error(errMsg(src, dest, funcName)));
            }
            return cb(null, { srcStat, destStat });
          });
        }
        function checkPathsSync(src, dest, funcName) {
          const { srcStat, destStat } = getStatsSync(src, dest);
          if (destStat && destStat.ino && destStat.dev && destStat.ino === srcStat.ino && destStat.dev === srcStat.dev) {
            throw new Error("Source and destination must not be the same.");
          }
          if (srcStat.isDirectory() && isSrcSubdir(src, dest)) {
            throw new Error(errMsg(src, dest, funcName));
          }
          return { srcStat, destStat };
        }
        function checkParentPaths(src, srcStat, dest, funcName, cb) {
          const srcParent = path3.resolve(path3.dirname(src));
          const destParent = path3.resolve(path3.dirname(dest));
          if (destParent === srcParent || destParent === path3.parse(destParent).root)
            return cb();
          if (nodeSupportsBigInt()) {
            fs3.stat(destParent, { bigint: true }, (err, destStat) => {
              if (err) {
                if (err.code === "ENOENT")
                  return cb();
                return cb(err);
              }
              if (destStat.ino && destStat.dev && destStat.ino === srcStat.ino && destStat.dev === srcStat.dev) {
                return cb(new Error(errMsg(src, dest, funcName)));
              }
              return checkParentPaths(src, srcStat, destParent, funcName, cb);
            });
          } else {
            fs3.stat(destParent, (err, destStat) => {
              if (err) {
                if (err.code === "ENOENT")
                  return cb();
                return cb(err);
              }
              if (destStat.ino && destStat.dev && destStat.ino === srcStat.ino && destStat.dev === srcStat.dev) {
                return cb(new Error(errMsg(src, dest, funcName)));
              }
              return checkParentPaths(src, srcStat, destParent, funcName, cb);
            });
          }
        }
        function checkParentPathsSync(src, srcStat, dest, funcName) {
          const srcParent = path3.resolve(path3.dirname(src));
          const destParent = path3.resolve(path3.dirname(dest));
          if (destParent === srcParent || destParent === path3.parse(destParent).root)
            return;
          let destStat;
          try {
            if (nodeSupportsBigInt()) {
              destStat = fs3.statSync(destParent, { bigint: true });
            } else {
              destStat = fs3.statSync(destParent);
            }
          } catch (err) {
            if (err.code === "ENOENT")
              return;
            throw err;
          }
          if (destStat.ino && destStat.dev && destStat.ino === srcStat.ino && destStat.dev === srcStat.dev) {
            throw new Error(errMsg(src, dest, funcName));
          }
          return checkParentPathsSync(src, srcStat, destParent, funcName);
        }
        function isSrcSubdir(src, dest) {
          const srcArr = path3.resolve(src).split(path3.sep).filter((i) => i);
          const destArr = path3.resolve(dest).split(path3.sep).filter((i) => i);
          return srcArr.reduce((acc, cur, i) => acc && destArr[i] === cur, true);
        }
        function errMsg(src, dest, funcName) {
          return `Cannot ${funcName} '${src}' to a subdirectory of itself, '${dest}'.`;
        }
        module22.exports = {
          checkPaths,
          checkPathsSync,
          checkParentPaths,
          checkParentPathsSync,
          isSrcSubdir
        };
      }
    });
    var require_buffer = __commonJS2({
      "../../node_modules/.pnpm/fs-extra@8.1.0/node_modules/fs-extra/lib/util/buffer.js"(exports2, module22) {
        "use strict";
        init_cjs_shims();
        module22.exports = function(size) {
          if (typeof Buffer.allocUnsafe === "function") {
            try {
              return Buffer.allocUnsafe(size);
            } catch (e) {
              return new Buffer(size);
            }
          }
          return new Buffer(size);
        };
      }
    });
    var require_copy_sync = __commonJS2({
      "../../node_modules/.pnpm/fs-extra@8.1.0/node_modules/fs-extra/lib/copy-sync/copy-sync.js"(exports2, module22) {
        "use strict";
        init_cjs_shims();
        var fs3 = require_graceful_fs();
        var path3 = require("path");
        var mkdirpSync = require_mkdirs2().mkdirsSync;
        var utimesSync = require_utimes().utimesMillisSync;
        var stat = require_stat();
        function copySync(src, dest, opts) {
          if (typeof opts === "function") {
            opts = { filter: opts };
          }
          opts = opts || {};
          opts.clobber = "clobber" in opts ? !!opts.clobber : true;
          opts.overwrite = "overwrite" in opts ? !!opts.overwrite : opts.clobber;
          if (opts.preserveTimestamps && process.arch === "ia32") {
            console.warn(`fs-extra: Using the preserveTimestamps option in 32-bit node is not recommended;

    see https://github.com/jprichardson/node-fs-extra/issues/269`);
          }
          const { srcStat, destStat } = stat.checkPathsSync(src, dest, "copy");
          stat.checkParentPathsSync(src, srcStat, dest, "copy");
          return handleFilterAndCopy(destStat, src, dest, opts);
        }
        function handleFilterAndCopy(destStat, src, dest, opts) {
          if (opts.filter && !opts.filter(src, dest))
            return;
          const destParent = path3.dirname(dest);
          if (!fs3.existsSync(destParent))
            mkdirpSync(destParent);
          return startCopy(destStat, src, dest, opts);
        }
        function startCopy(destStat, src, dest, opts) {
          if (opts.filter && !opts.filter(src, dest))
            return;
          return getStats(destStat, src, dest, opts);
        }
        function getStats(destStat, src, dest, opts) {
          const statSync = opts.dereference ? fs3.statSync : fs3.lstatSync;
          const srcStat = statSync(src);
          if (srcStat.isDirectory())
            return onDir(srcStat, destStat, src, dest, opts);
          else if (srcStat.isFile() || srcStat.isCharacterDevice() || srcStat.isBlockDevice())
            return onFile(srcStat, destStat, src, dest, opts);
          else if (srcStat.isSymbolicLink())
            return onLink(destStat, src, dest, opts);
        }
        function onFile(srcStat, destStat, src, dest, opts) {
          if (!destStat)
            return copyFile(srcStat, src, dest, opts);
          return mayCopyFile(srcStat, src, dest, opts);
        }
        function mayCopyFile(srcStat, src, dest, opts) {
          if (opts.overwrite) {
            fs3.unlinkSync(dest);
            return copyFile(srcStat, src, dest, opts);
          } else if (opts.errorOnExist) {
            throw new Error(`'${dest}' already exists`);
          }
        }
        function copyFile(srcStat, src, dest, opts) {
          if (typeof fs3.copyFileSync === "function") {
            fs3.copyFileSync(src, dest);
            fs3.chmodSync(dest, srcStat.mode);
            if (opts.preserveTimestamps) {
              return utimesSync(dest, srcStat.atime, srcStat.mtime);
            }
            return;
          }
          return copyFileFallback(srcStat, src, dest, opts);
        }
        function copyFileFallback(srcStat, src, dest, opts) {
          const BUF_LENGTH = 64 * 1024;
          const _buff = require_buffer()(BUF_LENGTH);
          const fdr = fs3.openSync(src, "r");
          const fdw = fs3.openSync(dest, "w", srcStat.mode);
          let pos2 = 0;
          while (pos2 < srcStat.size) {
            const bytesRead = fs3.readSync(fdr, _buff, 0, BUF_LENGTH, pos2);
            fs3.writeSync(fdw, _buff, 0, bytesRead);
            pos2 += bytesRead;
          }
          if (opts.preserveTimestamps)
            fs3.futimesSync(fdw, srcStat.atime, srcStat.mtime);
          fs3.closeSync(fdr);
          fs3.closeSync(fdw);
        }
        function onDir(srcStat, destStat, src, dest, opts) {
          if (!destStat)
            return mkDirAndCopy(srcStat, src, dest, opts);
          if (destStat && !destStat.isDirectory()) {
            throw new Error(`Cannot overwrite non-directory '${dest}' with directory '${src}'.`);
          }
          return copyDir(src, dest, opts);
        }
        function mkDirAndCopy(srcStat, src, dest, opts) {
          fs3.mkdirSync(dest);
          copyDir(src, dest, opts);
          return fs3.chmodSync(dest, srcStat.mode);
        }
        function copyDir(src, dest, opts) {
          fs3.readdirSync(src).forEach((item) => copyDirItem(item, src, dest, opts));
        }
        function copyDirItem(item, src, dest, opts) {
          const srcItem = path3.join(src, item);
          const destItem = path3.join(dest, item);
          const { destStat } = stat.checkPathsSync(srcItem, destItem, "copy");
          return startCopy(destStat, srcItem, destItem, opts);
        }
        function onLink(destStat, src, dest, opts) {
          let resolvedSrc = fs3.readlinkSync(src);
          if (opts.dereference) {
            resolvedSrc = path3.resolve(process.cwd(), resolvedSrc);
          }
          if (!destStat) {
            return fs3.symlinkSync(resolvedSrc, dest);
          } else {
            let resolvedDest;
            try {
              resolvedDest = fs3.readlinkSync(dest);
            } catch (err) {
              if (err.code === "EINVAL" || err.code === "UNKNOWN")
                return fs3.symlinkSync(resolvedSrc, dest);
              throw err;
            }
            if (opts.dereference) {
              resolvedDest = path3.resolve(process.cwd(), resolvedDest);
            }
            if (stat.isSrcSubdir(resolvedSrc, resolvedDest)) {
              throw new Error(`Cannot copy '${resolvedSrc}' to a subdirectory of itself, '${resolvedDest}'.`);
            }
            if (fs3.statSync(dest).isDirectory() && stat.isSrcSubdir(resolvedDest, resolvedSrc)) {
              throw new Error(`Cannot overwrite '${resolvedDest}' with '${resolvedSrc}'.`);
            }
            return copyLink(resolvedSrc, dest);
          }
        }
        function copyLink(resolvedSrc, dest) {
          fs3.unlinkSync(dest);
          return fs3.symlinkSync(resolvedSrc, dest);
        }
        module22.exports = copySync;
      }
    });
    var require_copy_sync2 = __commonJS2({
      "../../node_modules/.pnpm/fs-extra@8.1.0/node_modules/fs-extra/lib/copy-sync/index.js"(exports2, module22) {
        "use strict";
        init_cjs_shims();
        module22.exports = {
          copySync: require_copy_sync()
        };
      }
    });
    var require_path_exists2 = __commonJS2({
      "../../node_modules/.pnpm/fs-extra@8.1.0/node_modules/fs-extra/lib/path-exists/index.js"(exports2, module22) {
        "use strict";
        init_cjs_shims();
        var u = require_universalify().fromPromise;
        var fs3 = require_fs();
        function pathExists(path3) {
          return fs3.access(path3).then(() => true).catch(() => false);
        }
        module22.exports = {
          pathExists: u(pathExists),
          pathExistsSync: fs3.existsSync
        };
      }
    });
    var require_copy = __commonJS2({
      "../../node_modules/.pnpm/fs-extra@8.1.0/node_modules/fs-extra/lib/copy/copy.js"(exports2, module22) {
        "use strict";
        init_cjs_shims();
        var fs3 = require_graceful_fs();
        var path3 = require("path");
        var mkdirp = require_mkdirs2().mkdirs;
        var pathExists = require_path_exists2().pathExists;
        var utimes = require_utimes().utimesMillis;
        var stat = require_stat();
        function copy(src, dest, opts, cb) {
          if (typeof opts === "function" && !cb) {
            cb = opts;
            opts = {};
          } else if (typeof opts === "function") {
            opts = { filter: opts };
          }
          cb = cb || function() {
          };
          opts = opts || {};
          opts.clobber = "clobber" in opts ? !!opts.clobber : true;
          opts.overwrite = "overwrite" in opts ? !!opts.overwrite : opts.clobber;
          if (opts.preserveTimestamps && process.arch === "ia32") {
            console.warn(`fs-extra: Using the preserveTimestamps option in 32-bit node is not recommended;

    see https://github.com/jprichardson/node-fs-extra/issues/269`);
          }
          stat.checkPaths(src, dest, "copy", (err, stats) => {
            if (err)
              return cb(err);
            const { srcStat, destStat } = stats;
            stat.checkParentPaths(src, srcStat, dest, "copy", (err2) => {
              if (err2)
                return cb(err2);
              if (opts.filter)
                return handleFilter(checkParentDir, destStat, src, dest, opts, cb);
              return checkParentDir(destStat, src, dest, opts, cb);
            });
          });
        }
        function checkParentDir(destStat, src, dest, opts, cb) {
          const destParent = path3.dirname(dest);
          pathExists(destParent, (err, dirExists) => {
            if (err)
              return cb(err);
            if (dirExists)
              return startCopy(destStat, src, dest, opts, cb);
            mkdirp(destParent, (err2) => {
              if (err2)
                return cb(err2);
              return startCopy(destStat, src, dest, opts, cb);
            });
          });
        }
        function handleFilter(onInclude, destStat, src, dest, opts, cb) {
          Promise.resolve(opts.filter(src, dest)).then((include) => {
            if (include)
              return onInclude(destStat, src, dest, opts, cb);
            return cb();
          }, (error) => cb(error));
        }
        function startCopy(destStat, src, dest, opts, cb) {
          if (opts.filter)
            return handleFilter(getStats, destStat, src, dest, opts, cb);
          return getStats(destStat, src, dest, opts, cb);
        }
        function getStats(destStat, src, dest, opts, cb) {
          const stat2 = opts.dereference ? fs3.stat : fs3.lstat;
          stat2(src, (err, srcStat) => {
            if (err)
              return cb(err);
            if (srcStat.isDirectory())
              return onDir(srcStat, destStat, src, dest, opts, cb);
            else if (srcStat.isFile() || srcStat.isCharacterDevice() || srcStat.isBlockDevice())
              return onFile(srcStat, destStat, src, dest, opts, cb);
            else if (srcStat.isSymbolicLink())
              return onLink(destStat, src, dest, opts, cb);
          });
        }
        function onFile(srcStat, destStat, src, dest, opts, cb) {
          if (!destStat)
            return copyFile(srcStat, src, dest, opts, cb);
          return mayCopyFile(srcStat, src, dest, opts, cb);
        }
        function mayCopyFile(srcStat, src, dest, opts, cb) {
          if (opts.overwrite) {
            fs3.unlink(dest, (err) => {
              if (err)
                return cb(err);
              return copyFile(srcStat, src, dest, opts, cb);
            });
          } else if (opts.errorOnExist) {
            return cb(new Error(`'${dest}' already exists`));
          } else
            return cb();
        }
        function copyFile(srcStat, src, dest, opts, cb) {
          if (typeof fs3.copyFile === "function") {
            return fs3.copyFile(src, dest, (err) => {
              if (err)
                return cb(err);
              return setDestModeAndTimestamps(srcStat, dest, opts, cb);
            });
          }
          return copyFileFallback(srcStat, src, dest, opts, cb);
        }
        function copyFileFallback(srcStat, src, dest, opts, cb) {
          const rs = fs3.createReadStream(src);
          rs.on("error", (err) => cb(err)).once("open", () => {
            const ws = fs3.createWriteStream(dest, { mode: srcStat.mode });
            ws.on("error", (err) => cb(err)).on("open", () => rs.pipe(ws)).once("close", () => setDestModeAndTimestamps(srcStat, dest, opts, cb));
          });
        }
        function setDestModeAndTimestamps(srcStat, dest, opts, cb) {
          fs3.chmod(dest, srcStat.mode, (err) => {
            if (err)
              return cb(err);
            if (opts.preserveTimestamps) {
              return utimes(dest, srcStat.atime, srcStat.mtime, cb);
            }
            return cb();
          });
        }
        function onDir(srcStat, destStat, src, dest, opts, cb) {
          if (!destStat)
            return mkDirAndCopy(srcStat, src, dest, opts, cb);
          if (destStat && !destStat.isDirectory()) {
            return cb(new Error(`Cannot overwrite non-directory '${dest}' with directory '${src}'.`));
          }
          return copyDir(src, dest, opts, cb);
        }
        function mkDirAndCopy(srcStat, src, dest, opts, cb) {
          fs3.mkdir(dest, (err) => {
            if (err)
              return cb(err);
            copyDir(src, dest, opts, (err2) => {
              if (err2)
                return cb(err2);
              return fs3.chmod(dest, srcStat.mode, cb);
            });
          });
        }
        function copyDir(src, dest, opts, cb) {
          fs3.readdir(src, (err, items) => {
            if (err)
              return cb(err);
            return copyDirItems(items, src, dest, opts, cb);
          });
        }
        function copyDirItems(items, src, dest, opts, cb) {
          const item = items.pop();
          if (!item)
            return cb();
          return copyDirItem(items, item, src, dest, opts, cb);
        }
        function copyDirItem(items, item, src, dest, opts, cb) {
          const srcItem = path3.join(src, item);
          const destItem = path3.join(dest, item);
          stat.checkPaths(srcItem, destItem, "copy", (err, stats) => {
            if (err)
              return cb(err);
            const { destStat } = stats;
            startCopy(destStat, srcItem, destItem, opts, (err2) => {
              if (err2)
                return cb(err2);
              return copyDirItems(items, src, dest, opts, cb);
            });
          });
        }
        function onLink(destStat, src, dest, opts, cb) {
          fs3.readlink(src, (err, resolvedSrc) => {
            if (err)
              return cb(err);
            if (opts.dereference) {
              resolvedSrc = path3.resolve(process.cwd(), resolvedSrc);
            }
            if (!destStat) {
              return fs3.symlink(resolvedSrc, dest, cb);
            } else {
              fs3.readlink(dest, (err2, resolvedDest) => {
                if (err2) {
                  if (err2.code === "EINVAL" || err2.code === "UNKNOWN")
                    return fs3.symlink(resolvedSrc, dest, cb);
                  return cb(err2);
                }
                if (opts.dereference) {
                  resolvedDest = path3.resolve(process.cwd(), resolvedDest);
                }
                if (stat.isSrcSubdir(resolvedSrc, resolvedDest)) {
                  return cb(new Error(`Cannot copy '${resolvedSrc}' to a subdirectory of itself, '${resolvedDest}'.`));
                }
                if (destStat.isDirectory() && stat.isSrcSubdir(resolvedDest, resolvedSrc)) {
                  return cb(new Error(`Cannot overwrite '${resolvedDest}' with '${resolvedSrc}'.`));
                }
                return copyLink(resolvedSrc, dest, cb);
              });
            }
          });
        }
        function copyLink(resolvedSrc, dest, cb) {
          fs3.unlink(dest, (err) => {
            if (err)
              return cb(err);
            return fs3.symlink(resolvedSrc, dest, cb);
          });
        }
        module22.exports = copy;
      }
    });
    var require_copy2 = __commonJS2({
      "../../node_modules/.pnpm/fs-extra@8.1.0/node_modules/fs-extra/lib/copy/index.js"(exports2, module22) {
        "use strict";
        init_cjs_shims();
        var u = require_universalify().fromCallback;
        module22.exports = {
          copy: u(require_copy())
        };
      }
    });
    var require_rimraf = __commonJS2({
      "../../node_modules/.pnpm/fs-extra@8.1.0/node_modules/fs-extra/lib/remove/rimraf.js"(exports2, module22) {
        "use strict";
        init_cjs_shims();
        var fs3 = require_graceful_fs();
        var path3 = require("path");
        var assert = require("assert");
        var isWindows = process.platform === "win32";
        function defaults(options) {
          const methods = [
            "unlink",
            "chmod",
            "stat",
            "lstat",
            "rmdir",
            "readdir"
          ];
          methods.forEach((m) => {
            options[m] = options[m] || fs3[m];
            m = m + "Sync";
            options[m] = options[m] || fs3[m];
          });
          options.maxBusyTries = options.maxBusyTries || 3;
        }
        function rimraf(p, options, cb) {
          let busyTries = 0;
          if (typeof options === "function") {
            cb = options;
            options = {};
          }
          assert(p, "rimraf: missing path");
          assert.strictEqual(typeof p, "string", "rimraf: path should be a string");
          assert.strictEqual(typeof cb, "function", "rimraf: callback function required");
          assert(options, "rimraf: invalid options argument provided");
          assert.strictEqual(typeof options, "object", "rimraf: options should be object");
          defaults(options);
          rimraf_(p, options, function CB(er) {
            if (er) {
              if ((er.code === "EBUSY" || er.code === "ENOTEMPTY" || er.code === "EPERM") && busyTries < options.maxBusyTries) {
                busyTries++;
                const time = busyTries * 100;
                return setTimeout(() => rimraf_(p, options, CB), time);
              }
              if (er.code === "ENOENT")
                er = null;
            }
            cb(er);
          });
        }
        function rimraf_(p, options, cb) {
          assert(p);
          assert(options);
          assert(typeof cb === "function");
          options.lstat(p, (er, st) => {
            if (er && er.code === "ENOENT") {
              return cb(null);
            }
            if (er && er.code === "EPERM" && isWindows) {
              return fixWinEPERM(p, options, er, cb);
            }
            if (st && st.isDirectory()) {
              return rmdir(p, options, er, cb);
            }
            options.unlink(p, (er2) => {
              if (er2) {
                if (er2.code === "ENOENT") {
                  return cb(null);
                }
                if (er2.code === "EPERM") {
                  return isWindows ? fixWinEPERM(p, options, er2, cb) : rmdir(p, options, er2, cb);
                }
                if (er2.code === "EISDIR") {
                  return rmdir(p, options, er2, cb);
                }
              }
              return cb(er2);
            });
          });
        }
        function fixWinEPERM(p, options, er, cb) {
          assert(p);
          assert(options);
          assert(typeof cb === "function");
          if (er) {
            assert(er instanceof Error);
          }
          options.chmod(p, 438, (er2) => {
            if (er2) {
              cb(er2.code === "ENOENT" ? null : er);
            } else {
              options.stat(p, (er3, stats) => {
                if (er3) {
                  cb(er3.code === "ENOENT" ? null : er);
                } else if (stats.isDirectory()) {
                  rmdir(p, options, er, cb);
                } else {
                  options.unlink(p, cb);
                }
              });
            }
          });
        }
        function fixWinEPERMSync(p, options, er) {
          let stats;
          assert(p);
          assert(options);
          if (er) {
            assert(er instanceof Error);
          }
          try {
            options.chmodSync(p, 438);
          } catch (er2) {
            if (er2.code === "ENOENT") {
              return;
            } else {
              throw er;
            }
          }
          try {
            stats = options.statSync(p);
          } catch (er3) {
            if (er3.code === "ENOENT") {
              return;
            } else {
              throw er;
            }
          }
          if (stats.isDirectory()) {
            rmdirSync(p, options, er);
          } else {
            options.unlinkSync(p);
          }
        }
        function rmdir(p, options, originalEr, cb) {
          assert(p);
          assert(options);
          if (originalEr) {
            assert(originalEr instanceof Error);
          }
          assert(typeof cb === "function");
          options.rmdir(p, (er) => {
            if (er && (er.code === "ENOTEMPTY" || er.code === "EEXIST" || er.code === "EPERM")) {
              rmkids(p, options, cb);
            } else if (er && er.code === "ENOTDIR") {
              cb(originalEr);
            } else {
              cb(er);
            }
          });
        }
        function rmkids(p, options, cb) {
          assert(p);
          assert(options);
          assert(typeof cb === "function");
          options.readdir(p, (er, files) => {
            if (er)
              return cb(er);
            let n = files.length;
            let errState;
            if (n === 0)
              return options.rmdir(p, cb);
            files.forEach((f) => {
              rimraf(path3.join(p, f), options, (er2) => {
                if (errState) {
                  return;
                }
                if (er2)
                  return cb(errState = er2);
                if (--n === 0) {
                  options.rmdir(p, cb);
                }
              });
            });
          });
        }
        function rimrafSync(p, options) {
          let st;
          options = options || {};
          defaults(options);
          assert(p, "rimraf: missing path");
          assert.strictEqual(typeof p, "string", "rimraf: path should be a string");
          assert(options, "rimraf: missing options");
          assert.strictEqual(typeof options, "object", "rimraf: options should be object");
          try {
            st = options.lstatSync(p);
          } catch (er) {
            if (er.code === "ENOENT") {
              return;
            }
            if (er.code === "EPERM" && isWindows) {
              fixWinEPERMSync(p, options, er);
            }
          }
          try {
            if (st && st.isDirectory()) {
              rmdirSync(p, options, null);
            } else {
              options.unlinkSync(p);
            }
          } catch (er) {
            if (er.code === "ENOENT") {
              return;
            } else if (er.code === "EPERM") {
              return isWindows ? fixWinEPERMSync(p, options, er) : rmdirSync(p, options, er);
            } else if (er.code !== "EISDIR") {
              throw er;
            }
            rmdirSync(p, options, er);
          }
        }
        function rmdirSync(p, options, originalEr) {
          assert(p);
          assert(options);
          if (originalEr) {
            assert(originalEr instanceof Error);
          }
          try {
            options.rmdirSync(p);
          } catch (er) {
            if (er.code === "ENOTDIR") {
              throw originalEr;
            } else if (er.code === "ENOTEMPTY" || er.code === "EEXIST" || er.code === "EPERM") {
              rmkidsSync(p, options);
            } else if (er.code !== "ENOENT") {
              throw er;
            }
          }
        }
        function rmkidsSync(p, options) {
          assert(p);
          assert(options);
          options.readdirSync(p).forEach((f) => rimrafSync(path3.join(p, f), options));
          if (isWindows) {
            const startTime = Date.now();
            do {
              try {
                const ret = options.rmdirSync(p, options);
                return ret;
              } catch (er) {
              }
            } while (Date.now() - startTime < 500);
          } else {
            const ret = options.rmdirSync(p, options);
            return ret;
          }
        }
        module22.exports = rimraf;
        rimraf.sync = rimrafSync;
      }
    });
    var require_remove = __commonJS2({
      "../../node_modules/.pnpm/fs-extra@8.1.0/node_modules/fs-extra/lib/remove/index.js"(exports2, module22) {
        "use strict";
        init_cjs_shims();
        var u = require_universalify().fromCallback;
        var rimraf = require_rimraf();
        module22.exports = {
          remove: u(rimraf),
          removeSync: rimraf.sync
        };
      }
    });
    var require_empty = __commonJS2({
      "../../node_modules/.pnpm/fs-extra@8.1.0/node_modules/fs-extra/lib/empty/index.js"(exports2, module22) {
        "use strict";
        init_cjs_shims();
        var u = require_universalify().fromCallback;
        var fs3 = require_graceful_fs();
        var path3 = require("path");
        var mkdir = require_mkdirs2();
        var remove = require_remove();
        var emptyDir = u(function emptyDir2(dir, callback) {
          callback = callback || function() {
          };
          fs3.readdir(dir, (err, items) => {
            if (err)
              return mkdir.mkdirs(dir, callback);
            items = items.map((item) => path3.join(dir, item));
            deleteItem();
            function deleteItem() {
              const item = items.pop();
              if (!item)
                return callback();
              remove.remove(item, (err2) => {
                if (err2)
                  return callback(err2);
                deleteItem();
              });
            }
          });
        });
        function emptyDirSync(dir) {
          let items;
          try {
            items = fs3.readdirSync(dir);
          } catch (err) {
            return mkdir.mkdirsSync(dir);
          }
          items.forEach((item) => {
            item = path3.join(dir, item);
            remove.removeSync(item);
          });
        }
        module22.exports = {
          emptyDirSync,
          emptydirSync: emptyDirSync,
          emptyDir,
          emptydir: emptyDir
        };
      }
    });
    var require_file = __commonJS2({
      "../../node_modules/.pnpm/fs-extra@8.1.0/node_modules/fs-extra/lib/ensure/file.js"(exports2, module22) {
        "use strict";
        init_cjs_shims();
        var u = require_universalify().fromCallback;
        var path3 = require("path");
        var fs3 = require_graceful_fs();
        var mkdir = require_mkdirs2();
        var pathExists = require_path_exists2().pathExists;
        function createFile(file, callback) {
          function makeFile() {
            fs3.writeFile(file, "", (err) => {
              if (err)
                return callback(err);
              callback();
            });
          }
          fs3.stat(file, (err, stats) => {
            if (!err && stats.isFile())
              return callback();
            const dir = path3.dirname(file);
            pathExists(dir, (err2, dirExists) => {
              if (err2)
                return callback(err2);
              if (dirExists)
                return makeFile();
              mkdir.mkdirs(dir, (err3) => {
                if (err3)
                  return callback(err3);
                makeFile();
              });
            });
          });
        }
        function createFileSync(file) {
          let stats;
          try {
            stats = fs3.statSync(file);
          } catch (e) {
          }
          if (stats && stats.isFile())
            return;
          const dir = path3.dirname(file);
          if (!fs3.existsSync(dir)) {
            mkdir.mkdirsSync(dir);
          }
          fs3.writeFileSync(file, "");
        }
        module22.exports = {
          createFile: u(createFile),
          createFileSync
        };
      }
    });
    var require_link = __commonJS2({
      "../../node_modules/.pnpm/fs-extra@8.1.0/node_modules/fs-extra/lib/ensure/link.js"(exports2, module22) {
        "use strict";
        init_cjs_shims();
        var u = require_universalify().fromCallback;
        var path3 = require("path");
        var fs3 = require_graceful_fs();
        var mkdir = require_mkdirs2();
        var pathExists = require_path_exists2().pathExists;
        function createLink(srcpath, dstpath, callback) {
          function makeLink(srcpath2, dstpath2) {
            fs3.link(srcpath2, dstpath2, (err) => {
              if (err)
                return callback(err);
              callback(null);
            });
          }
          pathExists(dstpath, (err, destinationExists) => {
            if (err)
              return callback(err);
            if (destinationExists)
              return callback(null);
            fs3.lstat(srcpath, (err2) => {
              if (err2) {
                err2.message = err2.message.replace("lstat", "ensureLink");
                return callback(err2);
              }
              const dir = path3.dirname(dstpath);
              pathExists(dir, (err3, dirExists) => {
                if (err3)
                  return callback(err3);
                if (dirExists)
                  return makeLink(srcpath, dstpath);
                mkdir.mkdirs(dir, (err4) => {
                  if (err4)
                    return callback(err4);
                  makeLink(srcpath, dstpath);
                });
              });
            });
          });
        }
        function createLinkSync(srcpath, dstpath) {
          const destinationExists = fs3.existsSync(dstpath);
          if (destinationExists)
            return void 0;
          try {
            fs3.lstatSync(srcpath);
          } catch (err) {
            err.message = err.message.replace("lstat", "ensureLink");
            throw err;
          }
          const dir = path3.dirname(dstpath);
          const dirExists = fs3.existsSync(dir);
          if (dirExists)
            return fs3.linkSync(srcpath, dstpath);
          mkdir.mkdirsSync(dir);
          return fs3.linkSync(srcpath, dstpath);
        }
        module22.exports = {
          createLink: u(createLink),
          createLinkSync
        };
      }
    });
    var require_symlink_paths = __commonJS2({
      "../../node_modules/.pnpm/fs-extra@8.1.0/node_modules/fs-extra/lib/ensure/symlink-paths.js"(exports2, module22) {
        "use strict";
        init_cjs_shims();
        var path3 = require("path");
        var fs3 = require_graceful_fs();
        var pathExists = require_path_exists2().pathExists;
        function symlinkPaths(srcpath, dstpath, callback) {
          if (path3.isAbsolute(srcpath)) {
            return fs3.lstat(srcpath, (err) => {
              if (err) {
                err.message = err.message.replace("lstat", "ensureSymlink");
                return callback(err);
              }
              return callback(null, {
                "toCwd": srcpath,
                "toDst": srcpath
              });
            });
          } else {
            const dstdir = path3.dirname(dstpath);
            const relativeToDst = path3.join(dstdir, srcpath);
            return pathExists(relativeToDst, (err, exists) => {
              if (err)
                return callback(err);
              if (exists) {
                return callback(null, {
                  "toCwd": relativeToDst,
                  "toDst": srcpath
                });
              } else {
                return fs3.lstat(srcpath, (err2) => {
                  if (err2) {
                    err2.message = err2.message.replace("lstat", "ensureSymlink");
                    return callback(err2);
                  }
                  return callback(null, {
                    "toCwd": srcpath,
                    "toDst": path3.relative(dstdir, srcpath)
                  });
                });
              }
            });
          }
        }
        function symlinkPathsSync(srcpath, dstpath) {
          let exists;
          if (path3.isAbsolute(srcpath)) {
            exists = fs3.existsSync(srcpath);
            if (!exists)
              throw new Error("absolute srcpath does not exist");
            return {
              "toCwd": srcpath,
              "toDst": srcpath
            };
          } else {
            const dstdir = path3.dirname(dstpath);
            const relativeToDst = path3.join(dstdir, srcpath);
            exists = fs3.existsSync(relativeToDst);
            if (exists) {
              return {
                "toCwd": relativeToDst,
                "toDst": srcpath
              };
            } else {
              exists = fs3.existsSync(srcpath);
              if (!exists)
                throw new Error("relative srcpath does not exist");
              return {
                "toCwd": srcpath,
                "toDst": path3.relative(dstdir, srcpath)
              };
            }
          }
        }
        module22.exports = {
          symlinkPaths,
          symlinkPathsSync
        };
      }
    });
    var require_symlink_type = __commonJS2({
      "../../node_modules/.pnpm/fs-extra@8.1.0/node_modules/fs-extra/lib/ensure/symlink-type.js"(exports2, module22) {
        "use strict";
        init_cjs_shims();
        var fs3 = require_graceful_fs();
        function symlinkType(srcpath, type, callback) {
          callback = typeof type === "function" ? type : callback;
          type = typeof type === "function" ? false : type;
          if (type)
            return callback(null, type);
          fs3.lstat(srcpath, (err, stats) => {
            if (err)
              return callback(null, "file");
            type = stats && stats.isDirectory() ? "dir" : "file";
            callback(null, type);
          });
        }
        function symlinkTypeSync(srcpath, type) {
          let stats;
          if (type)
            return type;
          try {
            stats = fs3.lstatSync(srcpath);
          } catch (e) {
            return "file";
          }
          return stats && stats.isDirectory() ? "dir" : "file";
        }
        module22.exports = {
          symlinkType,
          symlinkTypeSync
        };
      }
    });
    var require_symlink = __commonJS2({
      "../../node_modules/.pnpm/fs-extra@8.1.0/node_modules/fs-extra/lib/ensure/symlink.js"(exports2, module22) {
        "use strict";
        init_cjs_shims();
        var u = require_universalify().fromCallback;
        var path3 = require("path");
        var fs3 = require_graceful_fs();
        var _mkdirs = require_mkdirs2();
        var mkdirs = _mkdirs.mkdirs;
        var mkdirsSync = _mkdirs.mkdirsSync;
        var _symlinkPaths = require_symlink_paths();
        var symlinkPaths = _symlinkPaths.symlinkPaths;
        var symlinkPathsSync = _symlinkPaths.symlinkPathsSync;
        var _symlinkType = require_symlink_type();
        var symlinkType = _symlinkType.symlinkType;
        var symlinkTypeSync = _symlinkType.symlinkTypeSync;
        var pathExists = require_path_exists2().pathExists;
        function createSymlink(srcpath, dstpath, type, callback) {
          callback = typeof type === "function" ? type : callback;
          type = typeof type === "function" ? false : type;
          pathExists(dstpath, (err, destinationExists) => {
            if (err)
              return callback(err);
            if (destinationExists)
              return callback(null);
            symlinkPaths(srcpath, dstpath, (err2, relative) => {
              if (err2)
                return callback(err2);
              srcpath = relative.toDst;
              symlinkType(relative.toCwd, type, (err3, type2) => {
                if (err3)
                  return callback(err3);
                const dir = path3.dirname(dstpath);
                pathExists(dir, (err4, dirExists) => {
                  if (err4)
                    return callback(err4);
                  if (dirExists)
                    return fs3.symlink(srcpath, dstpath, type2, callback);
                  mkdirs(dir, (err5) => {
                    if (err5)
                      return callback(err5);
                    fs3.symlink(srcpath, dstpath, type2, callback);
                  });
                });
              });
            });
          });
        }
        function createSymlinkSync(srcpath, dstpath, type) {
          const destinationExists = fs3.existsSync(dstpath);
          if (destinationExists)
            return void 0;
          const relative = symlinkPathsSync(srcpath, dstpath);
          srcpath = relative.toDst;
          type = symlinkTypeSync(relative.toCwd, type);
          const dir = path3.dirname(dstpath);
          const exists = fs3.existsSync(dir);
          if (exists)
            return fs3.symlinkSync(srcpath, dstpath, type);
          mkdirsSync(dir);
          return fs3.symlinkSync(srcpath, dstpath, type);
        }
        module22.exports = {
          createSymlink: u(createSymlink),
          createSymlinkSync
        };
      }
    });
    var require_ensure = __commonJS2({
      "../../node_modules/.pnpm/fs-extra@8.1.0/node_modules/fs-extra/lib/ensure/index.js"(exports2, module22) {
        "use strict";
        init_cjs_shims();
        var file = require_file();
        var link = require_link();
        var symlink = require_symlink();
        module22.exports = {
          createFile: file.createFile,
          createFileSync: file.createFileSync,
          ensureFile: file.createFile,
          ensureFileSync: file.createFileSync,
          createLink: link.createLink,
          createLinkSync: link.createLinkSync,
          ensureLink: link.createLink,
          ensureLinkSync: link.createLinkSync,
          createSymlink: symlink.createSymlink,
          createSymlinkSync: symlink.createSymlinkSync,
          ensureSymlink: symlink.createSymlink,
          ensureSymlinkSync: symlink.createSymlinkSync
        };
      }
    });
    var require_jsonfile = __commonJS2({
      "../../node_modules/.pnpm/jsonfile@4.0.0/node_modules/jsonfile/index.js"(exports2, module22) {
        init_cjs_shims();
        var _fs;
        try {
          _fs = require_graceful_fs();
        } catch (_) {
          _fs = require("fs");
        }
        function readFile(file, options, callback) {
          if (callback == null) {
            callback = options;
            options = {};
          }
          if (typeof options === "string") {
            options = { encoding: options };
          }
          options = options || {};
          var fs3 = options.fs || _fs;
          var shouldThrow = true;
          if ("throws" in options) {
            shouldThrow = options.throws;
          }
          fs3.readFile(file, options, function(err, data) {
            if (err)
              return callback(err);
            data = stripBom(data);
            var obj;
            try {
              obj = JSON.parse(data, options ? options.reviver : null);
            } catch (err2) {
              if (shouldThrow) {
                err2.message = file + ": " + err2.message;
                return callback(err2);
              } else {
                return callback(null, null);
              }
            }
            callback(null, obj);
          });
        }
        function readFileSync(file, options) {
          options = options || {};
          if (typeof options === "string") {
            options = { encoding: options };
          }
          var fs3 = options.fs || _fs;
          var shouldThrow = true;
          if ("throws" in options) {
            shouldThrow = options.throws;
          }
          try {
            var content = fs3.readFileSync(file, options);
            content = stripBom(content);
            return JSON.parse(content, options.reviver);
          } catch (err) {
            if (shouldThrow) {
              err.message = file + ": " + err.message;
              throw err;
            } else {
              return null;
            }
          }
        }
        function stringify3(obj, options) {
          var spaces;
          var EOL = "\n";
          if (typeof options === "object" && options !== null) {
            if (options.spaces) {
              spaces = options.spaces;
            }
            if (options.EOL) {
              EOL = options.EOL;
            }
          }
          var str = JSON.stringify(obj, options ? options.replacer : null, spaces);
          return str.replace(/\n/g, EOL) + EOL;
        }
        function writeFile(file, obj, options, callback) {
          if (callback == null) {
            callback = options;
            options = {};
          }
          options = options || {};
          var fs3 = options.fs || _fs;
          var str = "";
          try {
            str = stringify3(obj, options);
          } catch (err) {
            if (callback)
              callback(err, null);
            return;
          }
          fs3.writeFile(file, str, options, callback);
        }
        function writeFileSync(file, obj, options) {
          options = options || {};
          var fs3 = options.fs || _fs;
          var str = stringify3(obj, options);
          return fs3.writeFileSync(file, str, options);
        }
        function stripBom(content) {
          if (Buffer.isBuffer(content))
            content = content.toString("utf8");
          content = content.replace(/^\uFEFF/, "");
          return content;
        }
        var jsonfile = {
          readFile,
          readFileSync,
          writeFile,
          writeFileSync
        };
        module22.exports = jsonfile;
      }
    });
    var require_jsonfile2 = __commonJS2({
      "../../node_modules/.pnpm/fs-extra@8.1.0/node_modules/fs-extra/lib/json/jsonfile.js"(exports2, module22) {
        "use strict";
        init_cjs_shims();
        var u = require_universalify().fromCallback;
        var jsonFile = require_jsonfile();
        module22.exports = {
          readJson: u(jsonFile.readFile),
          readJsonSync: jsonFile.readFileSync,
          writeJson: u(jsonFile.writeFile),
          writeJsonSync: jsonFile.writeFileSync
        };
      }
    });
    var require_output_json = __commonJS2({
      "../../node_modules/.pnpm/fs-extra@8.1.0/node_modules/fs-extra/lib/json/output-json.js"(exports2, module22) {
        "use strict";
        init_cjs_shims();
        var path3 = require("path");
        var mkdir = require_mkdirs2();
        var pathExists = require_path_exists2().pathExists;
        var jsonFile = require_jsonfile2();
        function outputJson(file, data, options, callback) {
          if (typeof options === "function") {
            callback = options;
            options = {};
          }
          const dir = path3.dirname(file);
          pathExists(dir, (err, itDoes) => {
            if (err)
              return callback(err);
            if (itDoes)
              return jsonFile.writeJson(file, data, options, callback);
            mkdir.mkdirs(dir, (err2) => {
              if (err2)
                return callback(err2);
              jsonFile.writeJson(file, data, options, callback);
            });
          });
        }
        module22.exports = outputJson;
      }
    });
    var require_output_json_sync = __commonJS2({
      "../../node_modules/.pnpm/fs-extra@8.1.0/node_modules/fs-extra/lib/json/output-json-sync.js"(exports2, module22) {
        "use strict";
        init_cjs_shims();
        var fs3 = require_graceful_fs();
        var path3 = require("path");
        var mkdir = require_mkdirs2();
        var jsonFile = require_jsonfile2();
        function outputJsonSync(file, data, options) {
          const dir = path3.dirname(file);
          if (!fs3.existsSync(dir)) {
            mkdir.mkdirsSync(dir);
          }
          jsonFile.writeJsonSync(file, data, options);
        }
        module22.exports = outputJsonSync;
      }
    });
    var require_json = __commonJS2({
      "../../node_modules/.pnpm/fs-extra@8.1.0/node_modules/fs-extra/lib/json/index.js"(exports2, module22) {
        "use strict";
        init_cjs_shims();
        var u = require_universalify().fromCallback;
        var jsonFile = require_jsonfile2();
        jsonFile.outputJson = u(require_output_json());
        jsonFile.outputJsonSync = require_output_json_sync();
        jsonFile.outputJSON = jsonFile.outputJson;
        jsonFile.outputJSONSync = jsonFile.outputJsonSync;
        jsonFile.writeJSON = jsonFile.writeJson;
        jsonFile.writeJSONSync = jsonFile.writeJsonSync;
        jsonFile.readJSON = jsonFile.readJson;
        jsonFile.readJSONSync = jsonFile.readJsonSync;
        module22.exports = jsonFile;
      }
    });
    var require_move_sync = __commonJS2({
      "../../node_modules/.pnpm/fs-extra@8.1.0/node_modules/fs-extra/lib/move-sync/move-sync.js"(exports2, module22) {
        "use strict";
        init_cjs_shims();
        var fs3 = require_graceful_fs();
        var path3 = require("path");
        var copySync = require_copy_sync2().copySync;
        var removeSync = require_remove().removeSync;
        var mkdirpSync = require_mkdirs2().mkdirpSync;
        var stat = require_stat();
        function moveSync(src, dest, opts) {
          opts = opts || {};
          const overwrite = opts.overwrite || opts.clobber || false;
          const { srcStat } = stat.checkPathsSync(src, dest, "move");
          stat.checkParentPathsSync(src, srcStat, dest, "move");
          mkdirpSync(path3.dirname(dest));
          return doRename(src, dest, overwrite);
        }
        function doRename(src, dest, overwrite) {
          if (overwrite) {
            removeSync(dest);
            return rename(src, dest, overwrite);
          }
          if (fs3.existsSync(dest))
            throw new Error("dest already exists.");
          return rename(src, dest, overwrite);
        }
        function rename(src, dest, overwrite) {
          try {
            fs3.renameSync(src, dest);
          } catch (err) {
            if (err.code !== "EXDEV")
              throw err;
            return moveAcrossDevice(src, dest, overwrite);
          }
        }
        function moveAcrossDevice(src, dest, overwrite) {
          const opts = {
            overwrite,
            errorOnExist: true
          };
          copySync(src, dest, opts);
          return removeSync(src);
        }
        module22.exports = moveSync;
      }
    });
    var require_move_sync2 = __commonJS2({
      "../../node_modules/.pnpm/fs-extra@8.1.0/node_modules/fs-extra/lib/move-sync/index.js"(exports2, module22) {
        "use strict";
        init_cjs_shims();
        module22.exports = {
          moveSync: require_move_sync()
        };
      }
    });
    var require_move = __commonJS2({
      "../../node_modules/.pnpm/fs-extra@8.1.0/node_modules/fs-extra/lib/move/move.js"(exports2, module22) {
        "use strict";
        init_cjs_shims();
        var fs3 = require_graceful_fs();
        var path3 = require("path");
        var copy = require_copy2().copy;
        var remove = require_remove().remove;
        var mkdirp = require_mkdirs2().mkdirp;
        var pathExists = require_path_exists2().pathExists;
        var stat = require_stat();
        function move(src, dest, opts, cb) {
          if (typeof opts === "function") {
            cb = opts;
            opts = {};
          }
          const overwrite = opts.overwrite || opts.clobber || false;
          stat.checkPaths(src, dest, "move", (err, stats) => {
            if (err)
              return cb(err);
            const { srcStat } = stats;
            stat.checkParentPaths(src, srcStat, dest, "move", (err2) => {
              if (err2)
                return cb(err2);
              mkdirp(path3.dirname(dest), (err3) => {
                if (err3)
                  return cb(err3);
                return doRename(src, dest, overwrite, cb);
              });
            });
          });
        }
        function doRename(src, dest, overwrite, cb) {
          if (overwrite) {
            return remove(dest, (err) => {
              if (err)
                return cb(err);
              return rename(src, dest, overwrite, cb);
            });
          }
          pathExists(dest, (err, destExists) => {
            if (err)
              return cb(err);
            if (destExists)
              return cb(new Error("dest already exists."));
            return rename(src, dest, overwrite, cb);
          });
        }
        function rename(src, dest, overwrite, cb) {
          fs3.rename(src, dest, (err) => {
            if (!err)
              return cb();
            if (err.code !== "EXDEV")
              return cb(err);
            return moveAcrossDevice(src, dest, overwrite, cb);
          });
        }
        function moveAcrossDevice(src, dest, overwrite, cb) {
          const opts = {
            overwrite,
            errorOnExist: true
          };
          copy(src, dest, opts, (err) => {
            if (err)
              return cb(err);
            return remove(src, cb);
          });
        }
        module22.exports = move;
      }
    });
    var require_move2 = __commonJS2({
      "../../node_modules/.pnpm/fs-extra@8.1.0/node_modules/fs-extra/lib/move/index.js"(exports2, module22) {
        "use strict";
        init_cjs_shims();
        var u = require_universalify().fromCallback;
        module22.exports = {
          move: u(require_move())
        };
      }
    });
    var require_output = __commonJS2({
      "../../node_modules/.pnpm/fs-extra@8.1.0/node_modules/fs-extra/lib/output/index.js"(exports2, module22) {
        "use strict";
        init_cjs_shims();
        var u = require_universalify().fromCallback;
        var fs3 = require_graceful_fs();
        var path3 = require("path");
        var mkdir = require_mkdirs2();
        var pathExists = require_path_exists2().pathExists;
        function outputFile(file, data, encoding, callback) {
          if (typeof encoding === "function") {
            callback = encoding;
            encoding = "utf8";
          }
          const dir = path3.dirname(file);
          pathExists(dir, (err, itDoes) => {
            if (err)
              return callback(err);
            if (itDoes)
              return fs3.writeFile(file, data, encoding, callback);
            mkdir.mkdirs(dir, (err2) => {
              if (err2)
                return callback(err2);
              fs3.writeFile(file, data, encoding, callback);
            });
          });
        }
        function outputFileSync(file, ...args) {
          const dir = path3.dirname(file);
          if (fs3.existsSync(dir)) {
            return fs3.writeFileSync(file, ...args);
          }
          mkdir.mkdirsSync(dir);
          fs3.writeFileSync(file, ...args);
        }
        module22.exports = {
          outputFile: u(outputFile),
          outputFileSync
        };
      }
    });
    var require_lib = __commonJS2({
      "../../node_modules/.pnpm/fs-extra@8.1.0/node_modules/fs-extra/lib/index.js"(exports2, module22) {
        "use strict";
        init_cjs_shims();
        module22.exports = Object.assign({}, require_fs(), require_copy_sync2(), require_copy2(), require_empty(), require_ensure(), require_json(), require_mkdirs2(), require_move_sync2(), require_move2(), require_output(), require_path_exists2(), require_remove());
        var fs3 = require("fs");
        if (Object.getOwnPropertyDescriptor(fs3, "promises")) {
          Object.defineProperty(module22.exports, "promises", {
            get() {
              return fs3.promises;
            }
          });
        }
      }
    });
    var src_exports = {};
    __export2(src_exports, {
      getTurboRoot: () => getTurboRoot_default,
      searchUp: () => searchUp_default
    });
    module2.exports = __toCommonJS2(src_exports);
    init_cjs_shims();
    init_cjs_shims();
    init_cjs_shims();
    var import_regenerator = __toESM2(require_regenerator());
    init_cjs_shims();
    init_cjs_shims();
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    init_cjs_shims();
    init_cjs_shims();
    function _typeof(obj) {
      "@babel/helpers - typeof";
      return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
        return typeof obj2;
      } : function(obj2) {
        return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
      }, _typeof(obj);
    }
    init_cjs_shims();
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      } else if (call !== void 0) {
        throw new TypeError("Derived constructors may only return object or undefined");
      }
      return _assertThisInitialized(self);
    }
    init_cjs_shims();
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
    init_cjs_shims();
    init_cjs_shims();
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          writable: true,
          configurable: true
        }
      });
      Object.defineProperty(subClass, "prototype", {
        writable: false
      });
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    init_cjs_shims();
    init_cjs_shims();
    function _isNativeFunction(fn) {
      return Function.toString.call(fn).indexOf("[native code]") !== -1;
    }
    init_cjs_shims();
    init_cjs_shims();
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
      try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    function _construct(Parent, args, Class) {
      if (_isNativeReflectConstruct()) {
        _construct = Reflect.construct.bind();
      } else {
        _construct = function _construct2(Parent2, args2, Class2) {
          var a = [null];
          a.push.apply(a, args2);
          var Constructor = Function.bind.apply(Parent2, a);
          var instance = new Constructor();
          if (Class2)
            _setPrototypeOf(instance, Class2.prototype);
          return instance;
        };
      }
      return _construct.apply(null, arguments);
    }
    function _wrapNativeSuper(Class) {
      var _cache = typeof Map === "function" ? /* @__PURE__ */ new Map() : void 0;
      _wrapNativeSuper = function _wrapNativeSuper2(Class2) {
        if (Class2 === null || !_isNativeFunction(Class2))
          return Class2;
        if (typeof Class2 !== "function") {
          throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
          if (_cache.has(Class2))
            return _cache.get(Class2);
          _cache.set(Class2, Wrapper);
        }
        function Wrapper() {
          return _construct(Class2, arguments, _getPrototypeOf(this).constructor);
        }
        Wrapper.prototype = Object.create(Class2.prototype, {
          constructor: {
            value: Wrapper,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
        return _setPrototypeOf(Wrapper, Class2);
      };
      return _wrapNativeSuper(Class);
    }
    var import_find_up = __toESM2(require_find_up());
    var import_path = __toESM2(require("path"));
    var import_fs_extra = __toESM2(require_lib());
    var NoPkgJsonFound = /* @__PURE__ */ function(_Error) {
      _inherits(NoPkgJsonFound2, _Error);
      function NoPkgJsonFound2(directory) {
        var _this;
        _classCallCheck(this, NoPkgJsonFound2);
        _this = _possibleConstructorReturn(this, _getPrototypeOf(NoPkgJsonFound2).call(this, "No package.json could be found upwards from the directory ".concat(directory)));
        _this.directory = directory;
        return _this;
      }
      return NoPkgJsonFound2;
    }(_wrapNativeSuper(Error));
    function hasWorkspacesConfiguredViaPkgJsonSync(directory, firstPkgJsonDirRef) {
      try {
        var pkgJson = import_fs_extra.default.readJsonSync(import_path.default.join(directory, "package.json"));
        if (firstPkgJsonDirRef.current === void 0) {
          firstPkgJsonDirRef.current = directory;
        }
        if (pkgJson.workspaces || pkgJson.bolt) {
          return directory;
        }
      } catch (err) {
        if (err.code !== "ENOENT") {
          throw err;
        }
      }
    }
    function hasWorkspacesConfiguredViaLernaSync(directory) {
      try {
        var lernaJson = import_fs_extra.default.readJsonSync(import_path.default.join(directory, "lerna.json"));
        if (lernaJson.useWorkspaces !== true) {
          return directory;
        }
      } catch (err) {
        if (err.code !== "ENOENT") {
          throw err;
        }
      }
    }
    function hasWorkspacesConfiguredViaPnpmSync(directory) {
      var pnpmWorkspacesFileExists = import_fs_extra.default.existsSync(import_path.default.join(directory, "pnpm-workspace.yaml"));
      if (pnpmWorkspacesFileExists) {
        return directory;
      }
    }
    function findRootSync(cwd) {
      var firstPkgJsonDirRef = {
        current: void 0
      };
      var dir = (0, import_find_up.sync)(function(directory) {
        return [hasWorkspacesConfiguredViaLernaSync(directory), hasWorkspacesConfiguredViaPkgJsonSync(directory, firstPkgJsonDirRef), hasWorkspacesConfiguredViaPnpmSync(directory)].find(function(dir2) {
          return dir2;
        });
      }, {
        cwd,
        type: "directory"
      });
      if (firstPkgJsonDirRef.current === void 0) {
        throw new NoPkgJsonFound(cwd);
      }
      if (dir === void 0) {
        return firstPkgJsonDirRef.current;
      }
      return dir;
    }
    init_cjs_shims();
    var import_fs2 = __toESM2(require("fs"));
    var import_path2 = __toESM2(require("path"));
    function searchUp({
      target,
      cwd
    }) {
      const root2 = import_path2.default.parse(cwd).root;
      let found = false;
      while (!found && cwd !== root2) {
        if (import_fs2.default.existsSync(import_path2.default.join(cwd, target))) {
          found = true;
          break;
        }
        cwd = import_path2.default.dirname(cwd);
      }
      if (found) {
        return cwd;
      }
      return null;
    }
    var searchUp_default = searchUp;
    function getTurboRoot2(cwd) {
      let root2 = searchUp_default({ target: "turbo.json", cwd: cwd || process.cwd() });
      if (!root2) {
        try {
          root2 = findRootSync(cwd || process.cwd());
          if (!root2) {
            return null;
          }
        } catch (err) {
          return null;
        }
      }
      return root2;
    }
    var getTurboRoot_default = getTurboRoot2;
  }
});

// lib/index.ts
var lib_exports = {};
__export(lib_exports, {
  configs: () => configs,
  rules: () => rules
});
module.exports = __toCommonJS(lib_exports);

// lib/constants.ts
var RULES = {
  noUndeclaredEnvVars: `no-undeclared-env-vars`
};

// lib/utils/findTurboConfig.ts
var import_fs = __toESM(require("fs"));
var import_turbo_utils = __toESM(require_dist());

// ../../node_modules/.pnpm/json5@2.2.1/node_modules/json5/dist/index.mjs
var Space_Separator = /[\u1680\u2000-\u200A\u202F\u205F\u3000]/;
var ID_Start = /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE83\uDE86-\uDE89\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]/;
var ID_Continue = /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u09FC\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9-\u0AFF\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D00-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF9\u1D00-\u1DF9\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDE00-\uDE3E\uDE47\uDE50-\uDE83\uDE86-\uDE99\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD47\uDD50-\uDD59]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4A\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/;
var unicode = {
  Space_Separator,
  ID_Start,
  ID_Continue
};
var util = {
  isSpaceSeparator(c2) {
    return typeof c2 === "string" && unicode.Space_Separator.test(c2);
  },
  isIdStartChar(c2) {
    return typeof c2 === "string" && (c2 >= "a" && c2 <= "z" || c2 >= "A" && c2 <= "Z" || c2 === "$" || c2 === "_" || unicode.ID_Start.test(c2));
  },
  isIdContinueChar(c2) {
    return typeof c2 === "string" && (c2 >= "a" && c2 <= "z" || c2 >= "A" && c2 <= "Z" || c2 >= "0" && c2 <= "9" || c2 === "$" || c2 === "_" || c2 === "\u200C" || c2 === "\u200D" || unicode.ID_Continue.test(c2));
  },
  isDigit(c2) {
    return typeof c2 === "string" && /[0-9]/.test(c2);
  },
  isHexDigit(c2) {
    return typeof c2 === "string" && /[0-9A-Fa-f]/.test(c2);
  }
};
var source;
var parseState;
var stack;
var pos;
var line;
var column;
var token;
var key;
var root;
var parse = function parse2(text, reviver) {
  source = String(text);
  parseState = "start";
  stack = [];
  pos = 0;
  line = 1;
  column = 0;
  token = void 0;
  key = void 0;
  root = void 0;
  do {
    token = lex();
    parseStates[parseState]();
  } while (token.type !== "eof");
  if (typeof reviver === "function") {
    return internalize({ "": root }, "", reviver);
  }
  return root;
};
function internalize(holder, name, reviver) {
  const value = holder[name];
  if (value != null && typeof value === "object") {
    for (const key2 in value) {
      const replacement = internalize(value, key2, reviver);
      if (replacement === void 0) {
        delete value[key2];
      } else {
        value[key2] = replacement;
      }
    }
  }
  return reviver.call(holder, name, value);
}
var lexState;
var buffer;
var doubleQuote;
var sign;
var c;
function lex() {
  lexState = "default";
  buffer = "";
  doubleQuote = false;
  sign = 1;
  for (; ; ) {
    c = peek();
    const token2 = lexStates[lexState]();
    if (token2) {
      return token2;
    }
  }
}
function peek() {
  if (source[pos]) {
    return String.fromCodePoint(source.codePointAt(pos));
  }
}
function read() {
  const c2 = peek();
  if (c2 === "\n") {
    line++;
    column = 0;
  } else if (c2) {
    column += c2.length;
  } else {
    column++;
  }
  if (c2) {
    pos += c2.length;
  }
  return c2;
}
var lexStates = {
  default() {
    switch (c) {
      case "	":
      case "\v":
      case "\f":
      case " ":
      case "\xA0":
      case "\uFEFF":
      case "\n":
      case "\r":
      case "\u2028":
      case "\u2029":
        read();
        return;
      case "/":
        read();
        lexState = "comment";
        return;
      case void 0:
        read();
        return newToken("eof");
    }
    if (util.isSpaceSeparator(c)) {
      read();
      return;
    }
    return lexStates[parseState]();
  },
  comment() {
    switch (c) {
      case "*":
        read();
        lexState = "multiLineComment";
        return;
      case "/":
        read();
        lexState = "singleLineComment";
        return;
    }
    throw invalidChar(read());
  },
  multiLineComment() {
    switch (c) {
      case "*":
        read();
        lexState = "multiLineCommentAsterisk";
        return;
      case void 0:
        throw invalidChar(read());
    }
    read();
  },
  multiLineCommentAsterisk() {
    switch (c) {
      case "*":
        read();
        return;
      case "/":
        read();
        lexState = "default";
        return;
      case void 0:
        throw invalidChar(read());
    }
    read();
    lexState = "multiLineComment";
  },
  singleLineComment() {
    switch (c) {
      case "\n":
      case "\r":
      case "\u2028":
      case "\u2029":
        read();
        lexState = "default";
        return;
      case void 0:
        read();
        return newToken("eof");
    }
    read();
  },
  value() {
    switch (c) {
      case "{":
      case "[":
        return newToken("punctuator", read());
      case "n":
        read();
        literal("ull");
        return newToken("null", null);
      case "t":
        read();
        literal("rue");
        return newToken("boolean", true);
      case "f":
        read();
        literal("alse");
        return newToken("boolean", false);
      case "-":
      case "+":
        if (read() === "-") {
          sign = -1;
        }
        lexState = "sign";
        return;
      case ".":
        buffer = read();
        lexState = "decimalPointLeading";
        return;
      case "0":
        buffer = read();
        lexState = "zero";
        return;
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        buffer = read();
        lexState = "decimalInteger";
        return;
      case "I":
        read();
        literal("nfinity");
        return newToken("numeric", Infinity);
      case "N":
        read();
        literal("aN");
        return newToken("numeric", NaN);
      case '"':
      case "'":
        doubleQuote = read() === '"';
        buffer = "";
        lexState = "string";
        return;
    }
    throw invalidChar(read());
  },
  identifierNameStartEscape() {
    if (c !== "u") {
      throw invalidChar(read());
    }
    read();
    const u = unicodeEscape();
    switch (u) {
      case "$":
      case "_":
        break;
      default:
        if (!util.isIdStartChar(u)) {
          throw invalidIdentifier();
        }
        break;
    }
    buffer += u;
    lexState = "identifierName";
  },
  identifierName() {
    switch (c) {
      case "$":
      case "_":
      case "\u200C":
      case "\u200D":
        buffer += read();
        return;
      case "\\":
        read();
        lexState = "identifierNameEscape";
        return;
    }
    if (util.isIdContinueChar(c)) {
      buffer += read();
      return;
    }
    return newToken("identifier", buffer);
  },
  identifierNameEscape() {
    if (c !== "u") {
      throw invalidChar(read());
    }
    read();
    const u = unicodeEscape();
    switch (u) {
      case "$":
      case "_":
      case "\u200C":
      case "\u200D":
        break;
      default:
        if (!util.isIdContinueChar(u)) {
          throw invalidIdentifier();
        }
        break;
    }
    buffer += u;
    lexState = "identifierName";
  },
  sign() {
    switch (c) {
      case ".":
        buffer = read();
        lexState = "decimalPointLeading";
        return;
      case "0":
        buffer = read();
        lexState = "zero";
        return;
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        buffer = read();
        lexState = "decimalInteger";
        return;
      case "I":
        read();
        literal("nfinity");
        return newToken("numeric", sign * Infinity);
      case "N":
        read();
        literal("aN");
        return newToken("numeric", NaN);
    }
    throw invalidChar(read());
  },
  zero() {
    switch (c) {
      case ".":
        buffer += read();
        lexState = "decimalPoint";
        return;
      case "e":
      case "E":
        buffer += read();
        lexState = "decimalExponent";
        return;
      case "x":
      case "X":
        buffer += read();
        lexState = "hexadecimal";
        return;
    }
    return newToken("numeric", sign * 0);
  },
  decimalInteger() {
    switch (c) {
      case ".":
        buffer += read();
        lexState = "decimalPoint";
        return;
      case "e":
      case "E":
        buffer += read();
        lexState = "decimalExponent";
        return;
    }
    if (util.isDigit(c)) {
      buffer += read();
      return;
    }
    return newToken("numeric", sign * Number(buffer));
  },
  decimalPointLeading() {
    if (util.isDigit(c)) {
      buffer += read();
      lexState = "decimalFraction";
      return;
    }
    throw invalidChar(read());
  },
  decimalPoint() {
    switch (c) {
      case "e":
      case "E":
        buffer += read();
        lexState = "decimalExponent";
        return;
    }
    if (util.isDigit(c)) {
      buffer += read();
      lexState = "decimalFraction";
      return;
    }
    return newToken("numeric", sign * Number(buffer));
  },
  decimalFraction() {
    switch (c) {
      case "e":
      case "E":
        buffer += read();
        lexState = "decimalExponent";
        return;
    }
    if (util.isDigit(c)) {
      buffer += read();
      return;
    }
    return newToken("numeric", sign * Number(buffer));
  },
  decimalExponent() {
    switch (c) {
      case "+":
      case "-":
        buffer += read();
        lexState = "decimalExponentSign";
        return;
    }
    if (util.isDigit(c)) {
      buffer += read();
      lexState = "decimalExponentInteger";
      return;
    }
    throw invalidChar(read());
  },
  decimalExponentSign() {
    if (util.isDigit(c)) {
      buffer += read();
      lexState = "decimalExponentInteger";
      return;
    }
    throw invalidChar(read());
  },
  decimalExponentInteger() {
    if (util.isDigit(c)) {
      buffer += read();
      return;
    }
    return newToken("numeric", sign * Number(buffer));
  },
  hexadecimal() {
    if (util.isHexDigit(c)) {
      buffer += read();
      lexState = "hexadecimalInteger";
      return;
    }
    throw invalidChar(read());
  },
  hexadecimalInteger() {
    if (util.isHexDigit(c)) {
      buffer += read();
      return;
    }
    return newToken("numeric", sign * Number(buffer));
  },
  string() {
    switch (c) {
      case "\\":
        read();
        buffer += escape();
        return;
      case '"':
        if (doubleQuote) {
          read();
          return newToken("string", buffer);
        }
        buffer += read();
        return;
      case "'":
        if (!doubleQuote) {
          read();
          return newToken("string", buffer);
        }
        buffer += read();
        return;
      case "\n":
      case "\r":
        throw invalidChar(read());
      case "\u2028":
      case "\u2029":
        separatorChar(c);
        break;
      case void 0:
        throw invalidChar(read());
    }
    buffer += read();
  },
  start() {
    switch (c) {
      case "{":
      case "[":
        return newToken("punctuator", read());
    }
    lexState = "value";
  },
  beforePropertyName() {
    switch (c) {
      case "$":
      case "_":
        buffer = read();
        lexState = "identifierName";
        return;
      case "\\":
        read();
        lexState = "identifierNameStartEscape";
        return;
      case "}":
        return newToken("punctuator", read());
      case '"':
      case "'":
        doubleQuote = read() === '"';
        lexState = "string";
        return;
    }
    if (util.isIdStartChar(c)) {
      buffer += read();
      lexState = "identifierName";
      return;
    }
    throw invalidChar(read());
  },
  afterPropertyName() {
    if (c === ":") {
      return newToken("punctuator", read());
    }
    throw invalidChar(read());
  },
  beforePropertyValue() {
    lexState = "value";
  },
  afterPropertyValue() {
    switch (c) {
      case ",":
      case "}":
        return newToken("punctuator", read());
    }
    throw invalidChar(read());
  },
  beforeArrayValue() {
    if (c === "]") {
      return newToken("punctuator", read());
    }
    lexState = "value";
  },
  afterArrayValue() {
    switch (c) {
      case ",":
      case "]":
        return newToken("punctuator", read());
    }
    throw invalidChar(read());
  },
  end() {
    throw invalidChar(read());
  }
};
function newToken(type, value) {
  return {
    type,
    value,
    line,
    column
  };
}
function literal(s) {
  for (const c2 of s) {
    const p = peek();
    if (p !== c2) {
      throw invalidChar(read());
    }
    read();
  }
}
function escape() {
  const c2 = peek();
  switch (c2) {
    case "b":
      read();
      return "\b";
    case "f":
      read();
      return "\f";
    case "n":
      read();
      return "\n";
    case "r":
      read();
      return "\r";
    case "t":
      read();
      return "	";
    case "v":
      read();
      return "\v";
    case "0":
      read();
      if (util.isDigit(peek())) {
        throw invalidChar(read());
      }
      return "\0";
    case "x":
      read();
      return hexEscape();
    case "u":
      read();
      return unicodeEscape();
    case "\n":
    case "\u2028":
    case "\u2029":
      read();
      return "";
    case "\r":
      read();
      if (peek() === "\n") {
        read();
      }
      return "";
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
      throw invalidChar(read());
    case void 0:
      throw invalidChar(read());
  }
  return read();
}
function hexEscape() {
  let buffer2 = "";
  let c2 = peek();
  if (!util.isHexDigit(c2)) {
    throw invalidChar(read());
  }
  buffer2 += read();
  c2 = peek();
  if (!util.isHexDigit(c2)) {
    throw invalidChar(read());
  }
  buffer2 += read();
  return String.fromCodePoint(parseInt(buffer2, 16));
}
function unicodeEscape() {
  let buffer2 = "";
  let count = 4;
  while (count-- > 0) {
    const c2 = peek();
    if (!util.isHexDigit(c2)) {
      throw invalidChar(read());
    }
    buffer2 += read();
  }
  return String.fromCodePoint(parseInt(buffer2, 16));
}
var parseStates = {
  start() {
    if (token.type === "eof") {
      throw invalidEOF();
    }
    push();
  },
  beforePropertyName() {
    switch (token.type) {
      case "identifier":
      case "string":
        key = token.value;
        parseState = "afterPropertyName";
        return;
      case "punctuator":
        pop();
        return;
      case "eof":
        throw invalidEOF();
    }
  },
  afterPropertyName() {
    if (token.type === "eof") {
      throw invalidEOF();
    }
    parseState = "beforePropertyValue";
  },
  beforePropertyValue() {
    if (token.type === "eof") {
      throw invalidEOF();
    }
    push();
  },
  beforeArrayValue() {
    if (token.type === "eof") {
      throw invalidEOF();
    }
    if (token.type === "punctuator" && token.value === "]") {
      pop();
      return;
    }
    push();
  },
  afterPropertyValue() {
    if (token.type === "eof") {
      throw invalidEOF();
    }
    switch (token.value) {
      case ",":
        parseState = "beforePropertyName";
        return;
      case "}":
        pop();
    }
  },
  afterArrayValue() {
    if (token.type === "eof") {
      throw invalidEOF();
    }
    switch (token.value) {
      case ",":
        parseState = "beforeArrayValue";
        return;
      case "]":
        pop();
    }
  },
  end() {
  }
};
function push() {
  let value;
  switch (token.type) {
    case "punctuator":
      switch (token.value) {
        case "{":
          value = {};
          break;
        case "[":
          value = [];
          break;
      }
      break;
    case "null":
    case "boolean":
    case "numeric":
    case "string":
      value = token.value;
      break;
  }
  if (root === void 0) {
    root = value;
  } else {
    const parent = stack[stack.length - 1];
    if (Array.isArray(parent)) {
      parent.push(value);
    } else {
      parent[key] = value;
    }
  }
  if (value !== null && typeof value === "object") {
    stack.push(value);
    if (Array.isArray(value)) {
      parseState = "beforeArrayValue";
    } else {
      parseState = "beforePropertyName";
    }
  } else {
    const current = stack[stack.length - 1];
    if (current == null) {
      parseState = "end";
    } else if (Array.isArray(current)) {
      parseState = "afterArrayValue";
    } else {
      parseState = "afterPropertyValue";
    }
  }
}
function pop() {
  stack.pop();
  const current = stack[stack.length - 1];
  if (current == null) {
    parseState = "end";
  } else if (Array.isArray(current)) {
    parseState = "afterArrayValue";
  } else {
    parseState = "afterPropertyValue";
  }
}
function invalidChar(c2) {
  if (c2 === void 0) {
    return syntaxError(`JSON5: invalid end of input at ${line}:${column}`);
  }
  return syntaxError(`JSON5: invalid character '${formatChar(c2)}' at ${line}:${column}`);
}
function invalidEOF() {
  return syntaxError(`JSON5: invalid end of input at ${line}:${column}`);
}
function invalidIdentifier() {
  column -= 5;
  return syntaxError(`JSON5: invalid identifier character at ${line}:${column}`);
}
function separatorChar(c2) {
  console.warn(`JSON5: '${formatChar(c2)}' in strings is not valid ECMAScript; consider escaping`);
}
function formatChar(c2) {
  const replacements = {
    "'": "\\'",
    '"': '\\"',
    "\\": "\\\\",
    "\b": "\\b",
    "\f": "\\f",
    "\n": "\\n",
    "\r": "\\r",
    "	": "\\t",
    "\v": "\\v",
    "\0": "\\0",
    "\u2028": "\\u2028",
    "\u2029": "\\u2029"
  };
  if (replacements[c2]) {
    return replacements[c2];
  }
  if (c2 < " ") {
    const hexString = c2.charCodeAt(0).toString(16);
    return "\\x" + ("00" + hexString).substring(hexString.length);
  }
  return c2;
}
function syntaxError(message) {
  const err = new SyntaxError(message);
  err.lineNumber = line;
  err.columnNumber = column;
  return err;
}
var stringify = function stringify2(value, replacer, space) {
  const stack2 = [];
  let indent = "";
  let propertyList;
  let replacerFunc;
  let gap = "";
  let quote;
  if (replacer != null && typeof replacer === "object" && !Array.isArray(replacer)) {
    space = replacer.space;
    quote = replacer.quote;
    replacer = replacer.replacer;
  }
  if (typeof replacer === "function") {
    replacerFunc = replacer;
  } else if (Array.isArray(replacer)) {
    propertyList = [];
    for (const v of replacer) {
      let item;
      if (typeof v === "string") {
        item = v;
      } else if (typeof v === "number" || v instanceof String || v instanceof Number) {
        item = String(v);
      }
      if (item !== void 0 && propertyList.indexOf(item) < 0) {
        propertyList.push(item);
      }
    }
  }
  if (space instanceof Number) {
    space = Number(space);
  } else if (space instanceof String) {
    space = String(space);
  }
  if (typeof space === "number") {
    if (space > 0) {
      space = Math.min(10, Math.floor(space));
      gap = "          ".substr(0, space);
    }
  } else if (typeof space === "string") {
    gap = space.substr(0, 10);
  }
  return serializeProperty("", { "": value });
  function serializeProperty(key2, holder) {
    let value2 = holder[key2];
    if (value2 != null) {
      if (typeof value2.toJSON5 === "function") {
        value2 = value2.toJSON5(key2);
      } else if (typeof value2.toJSON === "function") {
        value2 = value2.toJSON(key2);
      }
    }
    if (replacerFunc) {
      value2 = replacerFunc.call(holder, key2, value2);
    }
    if (value2 instanceof Number) {
      value2 = Number(value2);
    } else if (value2 instanceof String) {
      value2 = String(value2);
    } else if (value2 instanceof Boolean) {
      value2 = value2.valueOf();
    }
    switch (value2) {
      case null:
        return "null";
      case true:
        return "true";
      case false:
        return "false";
    }
    if (typeof value2 === "string") {
      return quoteString(value2, false);
    }
    if (typeof value2 === "number") {
      return String(value2);
    }
    if (typeof value2 === "object") {
      return Array.isArray(value2) ? serializeArray(value2) : serializeObject(value2);
    }
    return void 0;
  }
  function quoteString(value2) {
    const quotes = {
      "'": 0.1,
      '"': 0.2
    };
    const replacements = {
      "'": "\\'",
      '"': '\\"',
      "\\": "\\\\",
      "\b": "\\b",
      "\f": "\\f",
      "\n": "\\n",
      "\r": "\\r",
      "	": "\\t",
      "\v": "\\v",
      "\0": "\\0",
      "\u2028": "\\u2028",
      "\u2029": "\\u2029"
    };
    let product = "";
    for (let i = 0; i < value2.length; i++) {
      const c2 = value2[i];
      switch (c2) {
        case "'":
        case '"':
          quotes[c2]++;
          product += c2;
          continue;
        case "\0":
          if (util.isDigit(value2[i + 1])) {
            product += "\\x00";
            continue;
          }
      }
      if (replacements[c2]) {
        product += replacements[c2];
        continue;
      }
      if (c2 < " ") {
        let hexString = c2.charCodeAt(0).toString(16);
        product += "\\x" + ("00" + hexString).substring(hexString.length);
        continue;
      }
      product += c2;
    }
    const quoteChar = quote || Object.keys(quotes).reduce((a, b) => quotes[a] < quotes[b] ? a : b);
    product = product.replace(new RegExp(quoteChar, "g"), replacements[quoteChar]);
    return quoteChar + product + quoteChar;
  }
  function serializeObject(value2) {
    if (stack2.indexOf(value2) >= 0) {
      throw TypeError("Converting circular structure to JSON5");
    }
    stack2.push(value2);
    let stepback = indent;
    indent = indent + gap;
    let keys = propertyList || Object.keys(value2);
    let partial = [];
    for (const key2 of keys) {
      const propertyString = serializeProperty(key2, value2);
      if (propertyString !== void 0) {
        let member = serializeKey(key2) + ":";
        if (gap !== "") {
          member += " ";
        }
        member += propertyString;
        partial.push(member);
      }
    }
    let final;
    if (partial.length === 0) {
      final = "{}";
    } else {
      let properties;
      if (gap === "") {
        properties = partial.join(",");
        final = "{" + properties + "}";
      } else {
        let separator = ",\n" + indent;
        properties = partial.join(separator);
        final = "{\n" + indent + properties + ",\n" + stepback + "}";
      }
    }
    stack2.pop();
    indent = stepback;
    return final;
  }
  function serializeKey(key2) {
    if (key2.length === 0) {
      return quoteString(key2, true);
    }
    const firstChar = String.fromCodePoint(key2.codePointAt(0));
    if (!util.isIdStartChar(firstChar)) {
      return quoteString(key2, true);
    }
    for (let i = firstChar.length; i < key2.length; i++) {
      if (!util.isIdContinueChar(String.fromCodePoint(key2.codePointAt(i)))) {
        return quoteString(key2, true);
      }
    }
    return key2;
  }
  function serializeArray(value2) {
    if (stack2.indexOf(value2) >= 0) {
      throw TypeError("Converting circular structure to JSON5");
    }
    stack2.push(value2);
    let stepback = indent;
    indent = indent + gap;
    let partial = [];
    for (let i = 0; i < value2.length; i++) {
      const propertyString = serializeProperty(String(i), value2);
      partial.push(propertyString !== void 0 ? propertyString : "null");
    }
    let final;
    if (partial.length === 0) {
      final = "[]";
    } else {
      if (gap === "") {
        let properties = partial.join(",");
        final = "[" + properties + "]";
      } else {
        let separator = ",\n" + indent;
        let properties = partial.join(separator);
        final = "[\n" + indent + properties + ",\n" + stepback + "]";
      }
    }
    stack2.pop();
    indent = stepback;
    return final;
  }
};
var JSON5 = {
  parse,
  stringify
};
var lib = JSON5;
var dist_default = lib;

// lib/utils/findTurboConfig.ts
function findTurboConfig({ cwd }) {
  const turboRoot = (0, import_turbo_utils.getTurboRoot)(cwd);
  if (turboRoot) {
    try {
      const raw = import_fs.default.readFileSync(`${turboRoot}/turbo.json`, "utf8");
      const turboJsonContent = dist_default.parse(raw);
      return turboJsonContent;
    } catch (e) {
      console.error(e);
      return null;
    }
  }
  return null;
}
var findTurboConfig_default = findTurboConfig;

// lib/utils/getEnvVarDependencies.ts
function findDependsOnEnvVars({
  dependencies
}) {
  if (dependencies) {
    return dependencies.filter((dep) => dep.startsWith("$")).map((envVar) => envVar.slice(1, envVar.length));
  }
  return [];
}
function getEnvVarDependencies({
  cwd,
  turboConfig
}) {
  const turboJsonContent = turboConfig || findTurboConfig_default({ cwd });
  if (!turboJsonContent) {
    return null;
  }
  const {
    globalDependencies,
    globalEnv = [],
    pipeline = {}
  } = turboJsonContent;
  const allEnvVars = [
    ...findDependsOnEnvVars({
      dependencies: globalDependencies
    }),
    ...globalEnv
  ];
  Object.values(pipeline).forEach(({ env, dependsOn }) => {
    if (dependsOn) {
      allEnvVars.push(...findDependsOnEnvVars({ dependencies: dependsOn }));
    }
    if (env) {
      allEnvVars.push(...env);
    }
  });
  return new Set(allEnvVars);
}
var getEnvVarDependencies_default = getEnvVarDependencies;

// lib/rules/no-undeclared-env-vars.ts
var meta = {
  type: "problem",
  docs: {
    description: "Do not allow the use of `process.env` without including the env key in turbo.json",
    category: "Configuration Issues",
    recommended: true,
    url: `https://github.com/vercel/turbo/tree/main/packages/eslint-plugin-turbo/docs/rules/${RULES.noUndeclaredEnvVars}.md`
  },
  schema: [
    {
      type: "object",
      default: {},
      additionalProperties: false,
      properties: {
        turboConfig: {
          require: false,
          type: "object"
        },
        allowList: {
          default: [],
          type: "array",
          items: {
            type: "string"
          }
        }
      }
    }
  ]
};
function normalizeCwd(cwd) {
  if (cwd) {
    return cwd;
  }
  if (typeof process === "object") {
    return process.cwd();
  }
  return void 0;
}
function create(context) {
  var _a, _b;
  const { options } = context;
  const allowList = ((_a = options == null ? void 0 : options[0]) == null ? void 0 : _a.allowList) || [];
  const regexAllowList = [];
  allowList.forEach((allowed) => {
    try {
      regexAllowList.push(new RegExp(allowed));
    } catch (err) {
      console.error(`Unable to convert "${allowed}" to regex`);
    }
  });
  const cwd = normalizeCwd(context.getCwd ? context.getCwd() : void 0);
  const turboConfig = (_b = options == null ? void 0 : options[0]) == null ? void 0 : _b.turboConfig;
  const turboVars = getEnvVarDependencies_default({
    cwd,
    turboConfig
  });
  if (!turboVars) {
    return {};
  }
  const checkKey = (node, envKey) => {
    if (envKey && !turboVars.has(envKey) && !regexAllowList.some((regex) => regex.test(envKey))) {
      context.report({
        node,
        message: "${{ envKey }} is not listed as a dependency in turbo.json",
        data: { envKey }
      });
    }
  };
  const isComputed = (node) => {
    if ("computed" in node.parent) {
      return node.parent.computed;
    }
    return false;
  };
  return {
    MemberExpression(node) {
      var _a2, _b2;
      if ("name" in node.object && "name" in node.property && !isComputed(node)) {
        const objectName = node.object.name;
        const propertyName = node.property.name;
        if (objectName === "process" && propertyName === "env") {
          if ("id" in node.parent && ((_a2 = node.parent.id) == null ? void 0 : _a2.type) === "ObjectPattern") {
            const values = node.parent.id.properties.values();
            Array.from(values).forEach((item) => {
              if ("key" in item && "name" in item.key) {
                checkKey(node.parent, item.key.name);
              }
            });
          } else if ("property" in node.parent && "name" in node.parent.property) {
            checkKey(node.parent, (_b2 = node.parent.property) == null ? void 0 : _b2.name);
          }
        }
      }
    }
  };
}
var rule = { create, meta };
var no_undeclared_env_vars_default = rule;

// lib/configs/recommended.ts
var envVars = getEnvVarDependencies_default({
  cwd: process.cwd()
});
var settings = {
  turbo: {
    envVars: envVars ? [...envVars].sort() : []
  }
};
var config = {
  settings,
  plugins: ["turbo"],
  rules: {
    [`turbo/${RULES.noUndeclaredEnvVars}`]: "error"
  }
};
var recommended_default = config;

// lib/index.ts
var rules = {
  [RULES.noUndeclaredEnvVars]: no_undeclared_env_vars_default
};
var configs = {
  recommended: recommended_default
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  configs,
  rules
});
/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
