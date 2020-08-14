/* eslint-disable */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var util = require('util');
var $ = require('jquery');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var util__default = /*#__PURE__*/_interopDefaultLegacy(util);
var $__default = /*#__PURE__*/_interopDefaultLegacy($);

var version = "1.0.0";

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, basedir, module) {
	return module = {
	  path: basedir,
	  exports: {},
	  require: function (path, base) {
      return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
    }
	}, fn(module, module.exports), module.exports;
}

function commonjsRequire () {
	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
}

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
var _freeGlobal = freeGlobal;

/** Detect free variable `self`. */


var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
/** Used as a reference to the global object. */

var root = _freeGlobal || freeSelf || Function('return this')();
var _root = root;

/** Built-in value references. */


var Symbol$1 = _root.Symbol;
var _Symbol = Symbol$1;

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }

  return result;
}

var _arrayMap = arrayMap;

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;
var isArray_1 = isArray;

/** Used for built-in method references. */


var objectProto = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */

var nativeObjectToString = objectProto.toString;
/** Built-in value references. */

var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;
/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */

function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);

  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }

  return result;
}

var _getRawTag = getRawTag;

/** Used for built-in method references. */
var objectProto$1 = Object.prototype;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */

var nativeObjectToString$1 = objectProto$1.toString;
/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */

function objectToString(value) {
  return nativeObjectToString$1.call(value);
}

var _objectToString = objectToString;

/** `Object#toString` result references. */


var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';
/** Built-in value references. */

var symToStringTag$1 = _Symbol ? _Symbol.toStringTag : undefined;
/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */

function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }

  return symToStringTag$1 && symToStringTag$1 in Object(value) ? _getRawTag(value) : _objectToString(value);
}

var _baseGetTag = baseGetTag;

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

var isObjectLike_1 = isObjectLike;

/** `Object#toString` result references. */


var symbolTag = '[object Symbol]';
/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */

function isSymbol(value) {
  return typeof value == 'symbol' || isObjectLike_1(value) && _baseGetTag(value) == symbolTag;
}

var isSymbol_1 = isSymbol;

/** Used as references for various `Number` constants. */


var INFINITY = 1 / 0;
/** Used to convert symbols to primitives and strings. */

var symbolProto = _Symbol ? _Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;
/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */

function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }

  if (isArray_1(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return _arrayMap(value, baseToString) + '';
  }

  if (isSymbol_1(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }

  var result = value + '';
  return result == '0' && 1 / value == -INFINITY ? '-0' : result;
}

var _baseToString = baseToString;

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */


function toString(value) {
  return value == null ? '' : _baseToString(value);
}

var toString_1 = toString;

/**
 * The base implementation of `_.propertyOf` without support for deep paths.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyOf(object) {
  return function (key) {
    return object == null ? undefined : object[key];
  };
}

var _basePropertyOf = basePropertyOf;

/** Used to map HTML entities to characters. */


var htmlUnescapes = {
  '&amp;': '&',
  '&lt;': '<',
  '&gt;': '>',
  '&quot;': '"',
  '&#39;': "'"
};
/**
 * Used by `_.unescape` to convert HTML entities to characters.
 *
 * @private
 * @param {string} chr The matched character to unescape.
 * @returns {string} Returns the unescaped character.
 */

var unescapeHtmlChar = _basePropertyOf(htmlUnescapes);
var _unescapeHtmlChar = unescapeHtmlChar;

/** Used to match HTML entities and HTML characters. */


var reEscapedHtml = /&(?:amp|lt|gt|quot|#39);/g,
    reHasEscapedHtml = RegExp(reEscapedHtml.source);
/**
 * The inverse of `_.escape`; this method converts the HTML entities
 * `&amp;`, `&lt;`, `&gt;`, `&quot;`, and `&#39;` in `string` to
 * their corresponding characters.
 *
 * **Note:** No other HTML entities are unescaped. To unescape additional
 * HTML entities use a third-party library like [_he_](https://mths.be/he).
 *
 * @static
 * @memberOf _
 * @since 0.6.0
 * @category String
 * @param {string} [string=''] The string to unescape.
 * @returns {string} Returns the unescaped string.
 * @example
 *
 * _.unescape('fred, barney, &amp; pebbles');
 * // => 'fred, barney, & pebbles'
 */

function unescape(string) {
  string = toString_1(string);
  return string && reHasEscapedHtml.test(string) ? string.replace(reEscapedHtml, _unescapeHtmlChar) : string;
}

var _unescape = unescape;

var prism = createCommonjsModule(function (module) {
/* **********************************************
     Begin prism-core.js
********************************************** */
/// <reference lib="WebWorker"/>
var _self = typeof window !== 'undefined' ? window // if in browser
: typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope ? self // if in worker
: {} // if in node js
;
/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */


var Prism = function (_self) {
  // Private helper vars
  var lang = /\blang(?:uage)?-([\w-]+)\b/i;
  var uniqueId = 0;
  var _ = {
    /**
     * By default, Prism will attempt to highlight all code elements (by calling {@link Prism.highlightAll}) on the
     * current page after the page finished loading. This might be a problem if e.g. you wanted to asynchronously load
     * additional languages or plugins yourself.
     *
     * By setting this value to `true`, Prism will not automatically highlight all code elements on the page.
     *
     * You obviously have to change this value before the automatic highlighting started. To do this, you can add an
     * empty Prism object into the global scope before loading the Prism script like this:
     *
     * ```js
     * window.Prism = window.Prism || {};
     * Prism.manual = true;
     * // add a new <script> to load Prism's script
     * ```
     *
     * @default false
     * @type {boolean}
     * @memberof Prism
     * @public
     */
    manual: _self.Prism && _self.Prism.manual,
    disableWorkerMessageHandler: _self.Prism && _self.Prism.disableWorkerMessageHandler,

    /**
     * A namespace for utility methods.
     *
     * All function in this namespace that are not explicitly marked as _public_ are for __internal use only__ and may
     * change or disappear at any time.
     *
     * @namespace
     * @memberof Prism
     */
    util: {
      encode: function encode(tokens) {
        if (tokens instanceof Token) {
          return new Token(tokens.type, encode(tokens.content), tokens.alias);
        } else if (Array.isArray(tokens)) {
          return tokens.map(encode);
        } else {
          return tokens.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/\u00a0/g, ' ');
        }
      },

      /**
       * Returns the name of the type of the given value.
       *
       * @param {any} o
       * @returns {string}
       * @example
       * type(null)      === 'Null'
       * type(undefined) === 'Undefined'
       * type(123)       === 'Number'
       * type('foo')     === 'String'
       * type(true)      === 'Boolean'
       * type([1, 2])    === 'Array'
       * type({})        === 'Object'
       * type(String)    === 'Function'
       * type(/abc+/)    === 'RegExp'
       */
      type: function (o) {
        return Object.prototype.toString.call(o).slice(8, -1);
      },

      /**
       * Returns a unique number for the given object. Later calls will still return the same number.
       *
       * @param {Object} obj
       * @returns {number}
       */
      objId: function (obj) {
        if (!obj['__id']) {
          Object.defineProperty(obj, '__id', {
            value: ++uniqueId
          });
        }

        return obj['__id'];
      },

      /**
       * Creates a deep clone of the given object.
       *
       * The main intended use of this function is to clone language definitions.
       *
       * @param {T} o
       * @param {Record<number, any>} [visited]
       * @returns {T}
       * @template T
       */
      clone: function deepClone(o, visited) {
        visited = visited || {};
        var clone, id;

        switch (_.util.type(o)) {
          case 'Object':
            id = _.util.objId(o);

            if (visited[id]) {
              return visited[id];
            }

            clone =
            /** @type {Record<string, any>} */
            {};
            visited[id] = clone;

            for (var key in o) {
              if (o.hasOwnProperty(key)) {
                clone[key] = deepClone(o[key], visited);
              }
            }

            return (
              /** @type {any} */
              clone
            );

          case 'Array':
            id = _.util.objId(o);

            if (visited[id]) {
              return visited[id];
            }

            clone = [];
            visited[id] = clone;

            /** @type {Array} */

            /** @type {any} */
            o.forEach(function (v, i) {
              clone[i] = deepClone(v, visited);
            });
            return (
              /** @type {any} */
              clone
            );

          default:
            return o;
        }
      },

      /**
       * Returns the Prism language of the given element set by a `language-xxxx` or `lang-xxxx` class.
       *
       * If no language is set for the element or the element is `null` or `undefined`, `none` will be returned.
       *
       * @param {Element} element
       * @returns {string}
       */
      getLanguage: function (element) {
        while (element && !lang.test(element.className)) {
          element = element.parentElement;
        }

        if (element) {
          return (element.className.match(lang) || [, 'none'])[1].toLowerCase();
        }

        return 'none';
      },

      /**
       * Returns the script element that is currently executing.
       *
       * This does __not__ work for line script element.
       *
       * @returns {HTMLScriptElement | null}
       */
      currentScript: function () {
        if (typeof document === 'undefined') {
          return null;
        }

        if ('currentScript' in document && 1 < 2
        /* hack to trip TS' flow analysis */
        ) {
            return (
              /** @type {any} */
              document.currentScript
            );
          } // IE11 workaround
        // we'll get the src of the current script by parsing IE11's error stack trace
        // this will not work for inline scripts


        try {
          throw new Error();
        } catch (err) {
          // Get file src url from stack. Specifically works with the format of stack traces in IE.
          // A stack will look like this:
          //
          // Error
          //    at _.util.currentScript (http://localhost/components/prism-core.js:119:5)
          //    at Global code (http://localhost/components/prism-core.js:606:1)
          var src = (/at [^(\r\n]*\((.*):.+:.+\)$/i.exec(err.stack) || [])[1];

          if (src) {
            var scripts = document.getElementsByTagName('script');

            for (var i in scripts) {
              if (scripts[i].src == src) {
                return scripts[i];
              }
            }
          }

          return null;
        }
      },

      /**
       * Returns whether a given class is active for `element`.
       *
       * The class can be activated if `element` or one of its ancestors has the given class and it can be deactivated
       * if `element` or one of its ancestors has the negated version of the given class. The _negated version_ of the
       * given class is just the given class with a `no-` prefix.
       *
       * Whether the class is active is determined by the closest ancestor of `element` (where `element` itself is
       * closest ancestor) that has the given class or the negated version of it. If neither `element` nor any of its
       * ancestors have the given class or the negated version of it, then the default activation will be returned.
       *
       * In the paradoxical situation where the closest ancestor contains __both__ the given class and the negated
       * version of it, the class is considered active.
       *
       * @param {Element} element
       * @param {string} className
       * @param {boolean} [defaultActivation=false]
       * @returns {boolean}
       */
      isActive: function (element, className, defaultActivation) {
        var no = 'no-' + className;

        while (element) {
          var classList = element.classList;

          if (classList.contains(className)) {
            return true;
          }

          if (classList.contains(no)) {
            return false;
          }

          element = element.parentElement;
        }

        return !!defaultActivation;
      }
    },

    /**
     * This namespace contains all currently loaded languages and the some helper functions to create and modify languages.
     *
     * @namespace
     * @memberof Prism
     * @public
     */
    languages: {
      /**
       * Creates a deep copy of the language with the given id and appends the given tokens.
       *
       * If a token in `redef` also appears in the copied language, then the existing token in the copied language
       * will be overwritten at its original position.
       *
       * ## Best practices
       *
       * Since the position of overwriting tokens (token in `redef` that overwrite tokens in the copied language)
       * doesn't matter, they can technically be in any order. However, this can be confusing to others that trying to
       * understand the language definition because, normally, the order of tokens matters in Prism grammars.
       *
       * Therefore, it is encouraged to order overwriting tokens according to the positions of the overwritten tokens.
       * Furthermore, all non-overwriting tokens should be placed after the overwriting ones.
       *
       * @param {string} id The id of the language to extend. This has to be a key in `Prism.languages`.
       * @param {Grammar} redef The new tokens to append.
       * @returns {Grammar} The new language created.
       * @public
       * @example
       * Prism.languages['css-with-colors'] = Prism.languages.extend('css', {
       *     // Prism.languages.css already has a 'comment' token, so this token will overwrite CSS' 'comment' token
       *     // at its original position
       *     'comment': { ... },
       *     // CSS doesn't have a 'color' token, so this token will be appended
       *     'color': /\b(?:red|green|blue)\b/
       * });
       */
      extend: function (id, redef) {
        var lang = _.util.clone(_.languages[id]);

        for (var key in redef) {
          lang[key] = redef[key];
        }

        return lang;
      },

      /**
       * Inserts tokens _before_ another token in a language definition or any other grammar.
       *
       * ## Usage
       *
       * This helper method makes it easy to modify existing languages. For example, the CSS language definition
       * not only defines CSS highlighting for CSS documents, but also needs to define highlighting for CSS embedded
       * in HTML through `<style>` elements. To do this, it needs to modify `Prism.languages.markup` and add the
       * appropriate tokens. However, `Prism.languages.markup` is a regular JavaScript object literal, so if you do
       * this:
       *
       * ```js
       * Prism.languages.markup.style = {
       *     // token
       * };
       * ```
       *
       * then the `style` token will be added (and processed) at the end. `insertBefore` allows you to insert tokens
       * before existing tokens. For the CSS example above, you would use it like this:
       *
       * ```js
       * Prism.languages.insertBefore('markup', 'cdata', {
       *     'style': {
       *         // token
       *     }
       * });
       * ```
       *
       * ## Special cases
       *
       * If the grammars of `inside` and `insert` have tokens with the same name, the tokens in `inside`'s grammar
       * will be ignored.
       *
       * This behavior can be used to insert tokens after `before`:
       *
       * ```js
       * Prism.languages.insertBefore('markup', 'comment', {
       *     'comment': Prism.languages.markup.comment,
       *     // tokens after 'comment'
       * });
       * ```
       *
       * ## Limitations
       *
       * The main problem `insertBefore` has to solve is iteration order. Since ES2015, the iteration order for object
       * properties is guaranteed to be the insertion order (except for integer keys) but some browsers behave
       * differently when keys are deleted and re-inserted. So `insertBefore` can't be implemented by temporarily
       * deleting properties which is necessary to insert at arbitrary positions.
       *
       * To solve this problem, `insertBefore` doesn't actually insert the given tokens into the target object.
       * Instead, it will create a new object and replace all references to the target object with the new one. This
       * can be done without temporarily deleting properties, so the iteration order is well-defined.
       *
       * However, only references that can be reached from `Prism.languages` or `insert` will be replaced. I.e. if
       * you hold the target object in a variable, then the value of the variable will not change.
       *
       * ```js
       * var oldMarkup = Prism.languages.markup;
       * var newMarkup = Prism.languages.insertBefore('markup', 'comment', { ... });
       *
       * assert(oldMarkup !== Prism.languages.markup);
       * assert(newMarkup === Prism.languages.markup);
       * ```
       *
       * @param {string} inside The property of `root` (e.g. a language id in `Prism.languages`) that contains the
       * object to be modified.
       * @param {string} before The key to insert before.
       * @param {Grammar} insert An object containing the key-value pairs to be inserted.
       * @param {Object<string, any>} [root] The object containing `inside`, i.e. the object that contains the
       * object to be modified.
       *
       * Defaults to `Prism.languages`.
       * @returns {Grammar} The new grammar object.
       * @public
       */
      insertBefore: function (inside, before, insert, root) {
        root = root ||
        /** @type {any} */
        _.languages;
        var grammar = root[inside];
        /** @type {Grammar} */

        var ret = {};

        for (var token in grammar) {
          if (grammar.hasOwnProperty(token)) {
            if (token == before) {
              for (var newToken in insert) {
                if (insert.hasOwnProperty(newToken)) {
                  ret[newToken] = insert[newToken];
                }
              }
            } // Do not insert token which also occur in insert. See #1525


            if (!insert.hasOwnProperty(token)) {
              ret[token] = grammar[token];
            }
          }
        }

        var old = root[inside];
        root[inside] = ret; // Update references in other language definitions

        _.languages.DFS(_.languages, function (key, value) {
          if (value === old && key != inside) {
            this[key] = ret;
          }
        });

        return ret;
      },
      // Traverse a language definition with Depth First Search
      DFS: function DFS(o, callback, type, visited) {
        visited = visited || {};
        var objId = _.util.objId;

        for (var i in o) {
          if (o.hasOwnProperty(i)) {
            callback.call(o, i, o[i], type || i);

            var property = o[i],
                propertyType = _.util.type(property);

            if (propertyType === 'Object' && !visited[objId(property)]) {
              visited[objId(property)] = true;
              DFS(property, callback, null, visited);
            } else if (propertyType === 'Array' && !visited[objId(property)]) {
              visited[objId(property)] = true;
              DFS(property, callback, i, visited);
            }
          }
        }
      }
    },
    plugins: {},

    /**
     * This is the most high-level function in Prism’s API.
     * It fetches all the elements that have a `.language-xxxx` class and then calls {@link Prism.highlightElement} on
     * each one of them.
     *
     * This is equivalent to `Prism.highlightAllUnder(document, async, callback)`.
     *
     * @param {boolean} [async=false] Same as in {@link Prism.highlightAllUnder}.
     * @param {HighlightCallback} [callback] Same as in {@link Prism.highlightAllUnder}.
     * @memberof Prism
     * @public
     */
    highlightAll: function (async, callback) {
      _.highlightAllUnder(document, async, callback);
    },

    /**
     * Fetches all the descendants of `container` that have a `.language-xxxx` class and then calls
     * {@link Prism.highlightElement} on each one of them.
     *
     * The following hooks will be run:
     * 1. `before-highlightall`
     * 2. All hooks of {@link Prism.highlightElement} for each element.
     *
     * @param {ParentNode} container The root element, whose descendants that have a `.language-xxxx` class will be highlighted.
     * @param {boolean} [async=false] Whether each element is to be highlighted asynchronously using Web Workers.
     * @param {HighlightCallback} [callback] An optional callback to be invoked on each element after its highlighting is done.
     * @memberof Prism
     * @public
     */
    highlightAllUnder: function (container, async, callback) {
      var env = {
        callback: callback,
        container: container,
        selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
      };

      _.hooks.run('before-highlightall', env);

      env.elements = Array.prototype.slice.apply(env.container.querySelectorAll(env.selector));

      _.hooks.run('before-all-elements-highlight', env);

      for (var i = 0, element; element = env.elements[i++];) {
        _.highlightElement(element, async === true, env.callback);
      }
    },

    /**
     * Highlights the code inside a single element.
     *
     * The following hooks will be run:
     * 1. `before-sanity-check`
     * 2. `before-highlight`
     * 3. All hooks of {@link Prism.highlight}. These hooks will only be run by the current worker if `async` is `true`.
     * 4. `before-insert`
     * 5. `after-highlight`
     * 6. `complete`
     *
     * @param {Element} element The element containing the code.
     * It must have a class of `language-xxxx` to be processed, where `xxxx` is a valid language identifier.
     * @param {boolean} [async=false] Whether the element is to be highlighted asynchronously using Web Workers
     * to improve performance and avoid blocking the UI when highlighting very large chunks of code. This option is
     * [disabled by default](https://prismjs.com/faq.html#why-is-asynchronous-highlighting-disabled-by-default).
     *
     * Note: All language definitions required to highlight the code must be included in the main `prism.js` file for
     * asynchronous highlighting to work. You can build your own bundle on the
     * [Download page](https://prismjs.com/download.html).
     * @param {HighlightCallback} [callback] An optional callback to be invoked after the highlighting is done.
     * Mostly useful when `async` is `true`, since in that case, the highlighting is done asynchronously.
     * @memberof Prism
     * @public
     */
    highlightElement: function (element, async, callback) {
      // Find language
      var language = _.util.getLanguage(element);

      var grammar = _.languages[language]; // Set language on the element, if not present

      element.className = element.className.replace(lang, '').replace(/\s+/g, ' ') + ' language-' + language; // Set language on the parent, for styling

      var parent = element.parentElement;

      if (parent && parent.nodeName.toLowerCase() === 'pre') {
        parent.className = parent.className.replace(lang, '').replace(/\s+/g, ' ') + ' language-' + language;
      }

      var code = element.textContent;
      var env = {
        element: element,
        language: language,
        grammar: grammar,
        code: code
      };

      function insertHighlightedCode(highlightedCode) {
        env.highlightedCode = highlightedCode;

        _.hooks.run('before-insert', env);

        env.element.innerHTML = env.highlightedCode;

        _.hooks.run('after-highlight', env);

        _.hooks.run('complete', env);

        callback && callback.call(env.element);
      }

      _.hooks.run('before-sanity-check', env);

      if (!env.code) {
        _.hooks.run('complete', env);

        callback && callback.call(env.element);
        return;
      }

      _.hooks.run('before-highlight', env);

      if (!env.grammar) {
        insertHighlightedCode(_.util.encode(env.code));
        return;
      }

      if (async && _self.Worker) {
        var worker = new Worker(_.filename);

        worker.onmessage = function (evt) {
          insertHighlightedCode(evt.data);
        };

        worker.postMessage(JSON.stringify({
          language: env.language,
          code: env.code,
          immediateClose: true
        }));
      } else {
        insertHighlightedCode(_.highlight(env.code, env.grammar, env.language));
      }
    },

    /**
     * Low-level function, only use if you know what you’re doing. It accepts a string of text as input
     * and the language definitions to use, and returns a string with the HTML produced.
     *
     * The following hooks will be run:
     * 1. `before-tokenize`
     * 2. `after-tokenize`
     * 3. `wrap`: On each {@link Token}.
     *
     * @param {string} text A string with the code to be highlighted.
     * @param {Grammar} grammar An object containing the tokens to use.
     *
     * Usually a language definition like `Prism.languages.markup`.
     * @param {string} language The name of the language definition passed to `grammar`.
     * @returns {string} The highlighted HTML.
     * @memberof Prism
     * @public
     * @example
     * Prism.highlight('var foo = true;', Prism.languages.javascript, 'javascript');
     */
    highlight: function (text, grammar, language) {
      var env = {
        code: text,
        grammar: grammar,
        language: language
      };

      _.hooks.run('before-tokenize', env);

      env.tokens = _.tokenize(env.code, env.grammar);

      _.hooks.run('after-tokenize', env);

      return Token.stringify(_.util.encode(env.tokens), env.language);
    },

    /**
     * This is the heart of Prism, and the most low-level function you can use. It accepts a string of text as input
     * and the language definitions to use, and returns an array with the tokenized code.
     *
     * When the language definition includes nested tokens, the function is called recursively on each of these tokens.
     *
     * This method could be useful in other contexts as well, as a very crude parser.
     *
     * @param {string} text A string with the code to be highlighted.
     * @param {Grammar} grammar An object containing the tokens to use.
     *
     * Usually a language definition like `Prism.languages.markup`.
     * @returns {TokenStream} An array of strings and tokens, a token stream.
     * @memberof Prism
     * @public
     * @example
     * let code = `var foo = 0;`;
     * let tokens = Prism.tokenize(code, Prism.languages.javascript);
     * tokens.forEach(token => {
     *     if (token instanceof Prism.Token && token.type === 'number') {
     *         console.log(`Found numeric literal: ${token.content}`);
     *     }
     * });
     */
    tokenize: function (text, grammar) {
      var rest = grammar.rest;

      if (rest) {
        for (var token in rest) {
          grammar[token] = rest[token];
        }

        delete grammar.rest;
      }

      var tokenList = new LinkedList();
      addAfter(tokenList, tokenList.head, text);
      matchGrammar(text, tokenList, grammar, tokenList.head, 0);
      return toArray(tokenList);
    },

    /**
     * @namespace
     * @memberof Prism
     * @public
     */
    hooks: {
      all: {},

      /**
       * Adds the given callback to the list of callbacks for the given hook.
       *
       * The callback will be invoked when the hook it is registered for is run.
       * Hooks are usually directly run by a highlight function but you can also run hooks yourself.
       *
       * One callback function can be registered to multiple hooks and the same hook multiple times.
       *
       * @param {string} name The name of the hook.
       * @param {HookCallback} callback The callback function which is given environment variables.
       * @public
       */
      add: function (name, callback) {
        var hooks = _.hooks.all;
        hooks[name] = hooks[name] || [];
        hooks[name].push(callback);
      },

      /**
       * Runs a hook invoking all registered callbacks with the given environment variables.
       *
       * Callbacks will be invoked synchronously and in the order in which they were registered.
       *
       * @param {string} name The name of the hook.
       * @param {Object<string, any>} env The environment variables of the hook passed to all callbacks registered.
       * @public
       */
      run: function (name, env) {
        var callbacks = _.hooks.all[name];

        if (!callbacks || !callbacks.length) {
          return;
        }

        for (var i = 0, callback; callback = callbacks[i++];) {
          callback(env);
        }
      }
    },
    Token: Token
  };
  _self.Prism = _; // Typescript note:
  // The following can be used to import the Token type in JSDoc:
  //
  //   @typedef {InstanceType<import("./prism-core")["Token"]>} Token

  /**
   * Creates a new token.
   *
   * @param {string} type See {@link Token#type type}
   * @param {string | TokenStream} content See {@link Token#content content}
   * @param {string|string[]} [alias] The alias(es) of the token.
   * @param {string} [matchedStr=""] A copy of the full string this token was created from.
   * @class
   * @global
   * @public
   */

  function Token(type, content, alias, matchedStr) {
    /**
     * The type of the token.
     *
     * This is usually the key of a pattern in a {@link Grammar}.
     *
     * @type {string}
     * @see GrammarToken
     * @public
     */
    this.type = type;
    /**
     * The strings or tokens contained by this token.
     *
     * This will be a token stream if the pattern matched also defined an `inside` grammar.
     *
     * @type {string | TokenStream}
     * @public
     */

    this.content = content;
    /**
     * The alias(es) of the token.
     *
     * @type {string|string[]}
     * @see GrammarToken
     * @public
     */

    this.alias = alias; // Copy of the full string this token was created from

    this.length = (matchedStr || '').length | 0;
  }
  /**
   * A token stream is an array of strings and {@link Token Token} objects.
   *
   * Token streams have to fulfill a few properties that are assumed by most functions (mostly internal ones) that process
   * them.
   *
   * 1. No adjacent strings.
   * 2. No empty strings.
   *
   *    The only exception here is the token stream that only contains the empty string and nothing else.
   *
   * @typedef {Array<string | Token>} TokenStream
   * @global
   * @public
   */

  /**
   * Converts the given token or token stream to an HTML representation.
   *
   * The following hooks will be run:
   * 1. `wrap`: On each {@link Token}.
   *
   * @param {string | Token | TokenStream} o The token or token stream to be converted.
   * @param {string} language The name of current language.
   * @returns {string} The HTML representation of the token or token stream.
   * @memberof Token
   * @static
   */


  Token.stringify = function stringify(o, language) {
    if (typeof o == 'string') {
      return o;
    }

    if (Array.isArray(o)) {
      var s = '';
      o.forEach(function (e) {
        s += stringify(e, language);
      });
      return s;
    }

    var env = {
      type: o.type,
      content: stringify(o.content, language),
      tag: 'span',
      classes: ['token', o.type],
      attributes: {},
      language: language
    };
    var aliases = o.alias;

    if (aliases) {
      if (Array.isArray(aliases)) {
        Array.prototype.push.apply(env.classes, aliases);
      } else {
        env.classes.push(aliases);
      }
    }

    _.hooks.run('wrap', env);

    var attributes = '';

    for (var name in env.attributes) {
      attributes += ' ' + name + '="' + (env.attributes[name] || '').replace(/"/g, '&quot;') + '"';
    }

    return '<' + env.tag + ' class="' + env.classes.join(' ') + '"' + attributes + '>' + env.content + '</' + env.tag + '>';
  };
  /**
   * @param {string} text
   * @param {LinkedList<string | Token>} tokenList
   * @param {any} grammar
   * @param {LinkedListNode<string | Token>} startNode
   * @param {number} startPos
   * @param {RematchOptions} [rematch]
   * @returns {void}
   * @private
   *
   * @typedef RematchOptions
   * @property {string} cause
   * @property {number} reach
   */


  function matchGrammar(text, tokenList, grammar, startNode, startPos, rematch) {
    for (var token in grammar) {
      if (!grammar.hasOwnProperty(token) || !grammar[token]) {
        continue;
      }

      var patterns = grammar[token];
      patterns = Array.isArray(patterns) ? patterns : [patterns];

      for (var j = 0; j < patterns.length; ++j) {
        if (rematch && rematch.cause == token + ',' + j) {
          return;
        }

        var patternObj = patterns[j],
            inside = patternObj.inside,
            lookbehind = !!patternObj.lookbehind,
            greedy = !!patternObj.greedy,
            lookbehindLength = 0,
            alias = patternObj.alias;

        if (greedy && !patternObj.pattern.global) {
          // Without the global flag, lastIndex won't work
          var flags = patternObj.pattern.toString().match(/[imsuy]*$/)[0];
          patternObj.pattern = RegExp(patternObj.pattern.source, flags + 'g');
        }
        /** @type {RegExp} */


        var pattern = patternObj.pattern || patternObj;

        for ( // iterate the token list and keep track of the current token/string position
        var currentNode = startNode.next, pos = startPos; currentNode !== tokenList.tail; pos += currentNode.value.length, currentNode = currentNode.next) {
          if (rematch && pos >= rematch.reach) {
            break;
          }

          var str = currentNode.value;

          if (tokenList.length > text.length) {
            // Something went terribly wrong, ABORT, ABORT!
            return;
          }

          if (str instanceof Token) {
            continue;
          }

          var removeCount = 1; // this is the to parameter of removeBetween

          if (greedy && currentNode != tokenList.tail.prev) {
            pattern.lastIndex = pos;
            var match = pattern.exec(text);

            if (!match) {
              break;
            }

            var from = match.index + (lookbehind && match[1] ? match[1].length : 0);
            var to = match.index + match[0].length;
            var p = pos; // find the node that contains the match

            p += currentNode.value.length;

            while (from >= p) {
              currentNode = currentNode.next;
              p += currentNode.value.length;
            } // adjust pos (and p)


            p -= currentNode.value.length;
            pos = p; // the current node is a Token, then the match starts inside another Token, which is invalid

            if (currentNode.value instanceof Token) {
              continue;
            } // find the last node which is affected by this match


            for (var k = currentNode; k !== tokenList.tail && (p < to || typeof k.value === 'string'); k = k.next) {
              removeCount++;
              p += k.value.length;
            }

            removeCount--; // replace with the new match

            str = text.slice(pos, p);
            match.index -= pos;
          } else {
            pattern.lastIndex = 0;
            var match = pattern.exec(str);
          }

          if (!match) {
            continue;
          }

          if (lookbehind) {
            lookbehindLength = match[1] ? match[1].length : 0;
          }

          var from = match.index + lookbehindLength,
              matchStr = match[0].slice(lookbehindLength),
              to = from + matchStr.length,
              before = str.slice(0, from),
              after = str.slice(to);
          var reach = pos + str.length;

          if (rematch && reach > rematch.reach) {
            rematch.reach = reach;
          }

          var removeFrom = currentNode.prev;

          if (before) {
            removeFrom = addAfter(tokenList, removeFrom, before);
            pos += before.length;
          }

          removeRange(tokenList, removeFrom, removeCount);
          var wrapped = new Token(token, inside ? _.tokenize(matchStr, inside) : matchStr, alias, matchStr);
          currentNode = addAfter(tokenList, removeFrom, wrapped);

          if (after) {
            addAfter(tokenList, currentNode, after);
          }

          if (removeCount > 1) {
            // at least one Token object was removed, so we have to do some rematching
            // this can only happen if the current pattern is greedy
            matchGrammar(text, tokenList, grammar, currentNode.prev, pos, {
              cause: token + ',' + j,
              reach: reach
            });
          }
        }
      }
    }
  }
  /**
   * @typedef LinkedListNode
   * @property {T} value
   * @property {LinkedListNode<T> | null} prev The previous node.
   * @property {LinkedListNode<T> | null} next The next node.
   * @template T
   * @private
   */

  /**
   * @template T
   * @private
   */


  function LinkedList() {
    /** @type {LinkedListNode<T>} */
    var head = {
      value: null,
      prev: null,
      next: null
    };
    /** @type {LinkedListNode<T>} */

    var tail = {
      value: null,
      prev: head,
      next: null
    };
    head.next = tail;
    /** @type {LinkedListNode<T>} */

    this.head = head;
    /** @type {LinkedListNode<T>} */

    this.tail = tail;
    this.length = 0;
  }
  /**
   * Adds a new node with the given value to the list.
   * @param {LinkedList<T>} list
   * @param {LinkedListNode<T>} node
   * @param {T} value
   * @returns {LinkedListNode<T>} The added node.
   * @template T
   */


  function addAfter(list, node, value) {
    // assumes that node != list.tail && values.length >= 0
    var next = node.next;
    var newNode = {
      value: value,
      prev: node,
      next: next
    };
    node.next = newNode;
    next.prev = newNode;
    list.length++;
    return newNode;
  }
  /**
   * Removes `count` nodes after the given node. The given node will not be removed.
   * @param {LinkedList<T>} list
   * @param {LinkedListNode<T>} node
   * @param {number} count
   * @template T
   */


  function removeRange(list, node, count) {
    var next = node.next;

    for (var i = 0; i < count && next !== list.tail; i++) {
      next = next.next;
    }

    node.next = next;
    next.prev = node;
    list.length -= i;
  }
  /**
   * @param {LinkedList<T>} list
   * @returns {T[]}
   * @template T
   */


  function toArray(list) {
    var array = [];
    var node = list.head.next;

    while (node !== list.tail) {
      array.push(node.value);
      node = node.next;
    }

    return array;
  }

  if (!_self.document) {
    if (!_self.addEventListener) {
      // in Node.js
      return _;
    }

    if (!_.disableWorkerMessageHandler) {
      // In worker
      _self.addEventListener('message', function (evt) {
        var message = JSON.parse(evt.data),
            lang = message.language,
            code = message.code,
            immediateClose = message.immediateClose;

        _self.postMessage(_.highlight(code, _.languages[lang], lang));

        if (immediateClose) {
          _self.close();
        }
      }, false);
    }

    return _;
  } // Get current script and highlight


  var script = _.util.currentScript();

  if (script) {
    _.filename = script.src;

    if (script.hasAttribute('data-manual')) {
      _.manual = true;
    }
  }

  function highlightAutomaticallyCallback() {
    if (!_.manual) {
      _.highlightAll();
    }
  }

  if (!_.manual) {
    // If the document state is "loading", then we'll use DOMContentLoaded.
    // If the document state is "interactive" and the prism.js script is deferred, then we'll also use the
    // DOMContentLoaded event because there might be some plugins or languages which have also been deferred and they
    // might take longer one animation frame to execute which can create a race condition where only some plugins have
    // been loaded when Prism.highlightAll() is executed, depending on how fast resources are loaded.
    // See https://github.com/PrismJS/prism/issues/2102
    var readyState = document.readyState;

    if (readyState === 'loading' || readyState === 'interactive' && script && script.defer) {
      document.addEventListener('DOMContentLoaded', highlightAutomaticallyCallback);
    } else {
      if (window.requestAnimationFrame) {
        window.requestAnimationFrame(highlightAutomaticallyCallback);
      } else {
        window.setTimeout(highlightAutomaticallyCallback, 16);
      }
    }
  }

  return _;
}(_self);

if ( module.exports) {
  module.exports = Prism;
} // hack for components to work correctly in node.js


if (typeof commonjsGlobal !== 'undefined') {
  commonjsGlobal.Prism = Prism;
} // some additional documentation/types

/**
 * The expansion of a simple `RegExp` literal to support additional properties.
 *
 * @typedef GrammarToken
 * @property {RegExp} pattern The regular expression of the token.
 * @property {boolean} [lookbehind=false] If `true`, then the first capturing group of `pattern` will (effectively)
 * behave as a lookbehind group meaning that the captured text will not be part of the matched text of the new token.
 * @property {boolean} [greedy=false] Whether the token is greedy.
 * @property {string|string[]} [alias] An optional alias or list of aliases.
 * @property {Grammar} [inside] The nested grammar of this token.
 *
 * The `inside` grammar will be used to tokenize the text value of each token of this kind.
 *
 * This can be used to make nested and even recursive language definitions.
 *
 * Note: This can cause infinite recursion. Be careful when you embed different languages or even the same language into
 * each another.
 * @global
 * @public
*/

/**
 * @typedef Grammar
 * @type {Object<string, RegExp | GrammarToken | Array<RegExp | GrammarToken>>}
 * @property {Grammar} [rest] An optional grammar object that will be appended to this grammar.
 * @global
 * @public
 */

/**
 * A function which will invoked after an element was successfully highlighted.
 *
 * @callback HighlightCallback
 * @param {Element} element The element successfully highlighted.
 * @returns {void}
 * @global
 * @public
*/

/**
 * @callback HookCallback
 * @param {Object<string, any>} env The environment variables of the hook.
 * @returns {void}
 * @global
 * @public
 */

/* **********************************************
     Begin prism-markup.js
********************************************** */


Prism.languages.markup = {
  'comment': /<!--[\s\S]*?-->/,
  'prolog': /<\?[\s\S]+?\?>/,
  'doctype': {
    // https://www.w3.org/TR/xml/#NT-doctypedecl
    pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
    greedy: true,
    inside: {
      'internal-subset': {
        pattern: /(\[)[\s\S]+(?=\]>$)/,
        lookbehind: true,
        greedy: true,
        inside: null // see below

      },
      'string': {
        pattern: /"[^"]*"|'[^']*'/,
        greedy: true
      },
      'punctuation': /^<!|>$|[[\]]/,
      'doctype-tag': /^DOCTYPE/,
      'name': /[^\s<>'"]+/
    }
  },
  'cdata': /<!\[CDATA\[[\s\S]*?]]>/i,
  'tag': {
    pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
    greedy: true,
    inside: {
      'tag': {
        pattern: /^<\/?[^\s>\/]+/,
        inside: {
          'punctuation': /^<\/?/,
          'namespace': /^[^\s>\/:]+:/
        }
      },
      'attr-value': {
        pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
        inside: {
          'punctuation': [{
            pattern: /^=/,
            alias: 'attr-equals'
          }, /"|'/]
        }
      },
      'punctuation': /\/?>/,
      'attr-name': {
        pattern: /[^\s>\/]+/,
        inside: {
          'namespace': /^[^\s>\/:]+:/
        }
      }
    }
  },
  'entity': [{
    pattern: /&[\da-z]{1,8};/i,
    alias: 'named-entity'
  }, /&#x?[\da-f]{1,8};/i]
};
Prism.languages.markup['tag'].inside['attr-value'].inside['entity'] = Prism.languages.markup['entity'];
Prism.languages.markup['doctype'].inside['internal-subset'].inside = Prism.languages.markup; // Plugin to make entity title show the real entity, idea by Roman Komarov

Prism.hooks.add('wrap', function (env) {
  if (env.type === 'entity') {
    env.attributes['title'] = env.content.replace(/&amp;/, '&');
  }
});
Object.defineProperty(Prism.languages.markup.tag, 'addInlined', {
  /**
   * Adds an inlined language to markup.
   *
   * An example of an inlined language is CSS with `<style>` tags.
   *
   * @param {string} tagName The name of the tag that contains the inlined language. This name will be treated as
   * case insensitive.
   * @param {string} lang The language key.
   * @example
   * addInlined('style', 'css');
   */
  value: function addInlined(tagName, lang) {
    var includedCdataInside = {};
    includedCdataInside['language-' + lang] = {
      pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
      lookbehind: true,
      inside: Prism.languages[lang]
    };
    includedCdataInside['cdata'] = /^<!\[CDATA\[|\]\]>$/i;
    var inside = {
      'included-cdata': {
        pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
        inside: includedCdataInside
      }
    };
    inside['language-' + lang] = {
      pattern: /[\s\S]+/,
      inside: Prism.languages[lang]
    };
    var def = {};
    def[tagName] = {
      pattern: RegExp(/(<__[\s\S]*?>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, function () {
        return tagName;
      }), 'i'),
      lookbehind: true,
      greedy: true,
      inside: inside
    };
    Prism.languages.insertBefore('markup', 'cdata', def);
  }
});
Prism.languages.html = Prism.languages.markup;
Prism.languages.mathml = Prism.languages.markup;
Prism.languages.svg = Prism.languages.markup;
Prism.languages.xml = Prism.languages.extend('markup', {});
Prism.languages.ssml = Prism.languages.xml;
Prism.languages.atom = Prism.languages.xml;
Prism.languages.rss = Prism.languages.xml;
/* **********************************************
     Begin prism-css.js
********************************************** */

(function (Prism) {
  var string = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;
  Prism.languages.css = {
    'comment': /\/\*[\s\S]*?\*\//,
    'atrule': {
      pattern: /@[\w-]+[\s\S]*?(?:;|(?=\s*\{))/,
      inside: {
        'rule': /^@[\w-]+/,
        'selector-function-argument': {
          pattern: /(\bselector\s*\((?!\s*\))\s*)(?:[^()]|\((?:[^()]|\([^()]*\))*\))+?(?=\s*\))/,
          lookbehind: true,
          alias: 'selector'
        },
        'keyword': {
          pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
          lookbehind: true
        } // See rest below

      }
    },
    'url': {
      // https://drafts.csswg.org/css-values-3/#urls
      pattern: RegExp('\\burl\\((?:' + string.source + '|' + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ')\\)', 'i'),
      greedy: true,
      inside: {
        'function': /^url/i,
        'punctuation': /^\(|\)$/,
        'string': {
          pattern: RegExp('^' + string.source + '$'),
          alias: 'url'
        }
      }
    },
    'selector': RegExp('[^{}\\s](?:[^{};"\']|' + string.source + ')*?(?=\\s*\\{)'),
    'string': {
      pattern: string,
      greedy: true
    },
    'property': /[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,
    'important': /!important\b/i,
    'function': /[-a-z0-9]+(?=\()/i,
    'punctuation': /[(){};:,]/
  };
  Prism.languages.css['atrule'].inside.rest = Prism.languages.css;
  var markup = Prism.languages.markup;

  if (markup) {
    markup.tag.addInlined('style', 'css');
    Prism.languages.insertBefore('inside', 'attr-value', {
      'style-attr': {
        pattern: /\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,
        inside: {
          'attr-name': {
            pattern: /^\s*style/i,
            inside: markup.tag.inside
          },
          'punctuation': /^\s*=\s*['"]|['"]\s*$/,
          'attr-value': {
            pattern: /.+/i,
            inside: Prism.languages.css
          }
        },
        alias: 'language-css'
      }
    }, markup.tag);
  }
})(Prism);
/* **********************************************
     Begin prism-clike.js
********************************************** */


Prism.languages.clike = {
  'comment': [{
    pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
    lookbehind: true
  }, {
    pattern: /(^|[^\\:])\/\/.*/,
    lookbehind: true,
    greedy: true
  }],
  'string': {
    pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
    greedy: true
  },
  'class-name': {
    pattern: /(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i,
    lookbehind: true,
    inside: {
      'punctuation': /[.\\]/
    }
  },
  'keyword': /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
  'boolean': /\b(?:true|false)\b/,
  'function': /\w+(?=\()/,
  'number': /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,
  'operator': /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
  'punctuation': /[{}[\];(),.:]/
};
/* **********************************************
     Begin prism-javascript.js
********************************************** */

Prism.languages.javascript = Prism.languages.extend('clike', {
  'class-name': [Prism.languages.clike['class-name'], {
    pattern: /(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,
    lookbehind: true
  }],
  'keyword': [{
    pattern: /((?:^|})\s*)(?:catch|finally)\b/,
    lookbehind: true
  }, {
    pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|(?:get|set)(?=\s*[\[$\w\xA0-\uFFFF])|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
    lookbehind: true
  }],
  'number': /\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,
  // Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)
  'function': /#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
  'operator': /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
});
Prism.languages.javascript['class-name'][0].pattern = /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/;
Prism.languages.insertBefore('javascript', 'keyword', {
  'regex': {
    pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,
    lookbehind: true,
    greedy: true
  },
  // This must be declared before keyword because we use "function" inside the look-forward
  'function-variable': {
    pattern: /#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,
    alias: 'function'
  },
  'parameter': [{
    pattern: /(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,
    lookbehind: true,
    inside: Prism.languages.javascript
  }, {
    pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,
    inside: Prism.languages.javascript
  }, {
    pattern: /(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,
    lookbehind: true,
    inside: Prism.languages.javascript
  }, {
    pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,
    lookbehind: true,
    inside: Prism.languages.javascript
  }],
  'constant': /\b[A-Z](?:[A-Z_]|\dx?)*\b/
});
Prism.languages.insertBefore('javascript', 'string', {
  'template-string': {
    pattern: /`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/,
    greedy: true,
    inside: {
      'template-punctuation': {
        pattern: /^`|`$/,
        alias: 'string'
      },
      'interpolation': {
        pattern: /((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,
        lookbehind: true,
        inside: {
          'interpolation-punctuation': {
            pattern: /^\${|}$/,
            alias: 'punctuation'
          },
          rest: Prism.languages.javascript
        }
      },
      'string': /[\s\S]+/
    }
  }
});

if (Prism.languages.markup) {
  Prism.languages.markup.tag.addInlined('script', 'javascript');
}

Prism.languages.js = Prism.languages.javascript;
/* **********************************************
     Begin prism-file-highlight.js
********************************************** */

(function () {
  if (typeof self === 'undefined' || !self.Prism || !self.document) {
    return;
  }

  var Prism = window.Prism;
  var LOADING_MESSAGE = 'Loading…';

  var FAILURE_MESSAGE = function (status, message) {
    return '✖ Error ' + status + ' while fetching file: ' + message;
  };

  var FAILURE_EMPTY_MESSAGE = '✖ Error: File does not exist or is empty';
  var EXTENSIONS = {
    'js': 'javascript',
    'py': 'python',
    'rb': 'ruby',
    'ps1': 'powershell',
    'psm1': 'powershell',
    'sh': 'bash',
    'bat': 'batch',
    'h': 'c',
    'tex': 'latex'
  };
  var STATUS_ATTR = 'data-src-status';
  var STATUS_LOADING = 'loading';
  var STATUS_LOADED = 'loaded';
  var STATUS_FAILED = 'failed';
  var SELECTOR = 'pre[data-src]:not([' + STATUS_ATTR + '="' + STATUS_LOADED + '"])' + ':not([' + STATUS_ATTR + '="' + STATUS_LOADING + '"])';
  var lang = /\blang(?:uage)?-([\w-]+)\b/i;
  /**
   * Sets the Prism `language-xxxx` or `lang-xxxx` class to the given language.
   *
   * @param {HTMLElement} element
   * @param {string} language
   * @returns {void}
   */

  function setLanguageClass(element, language) {
    var className = element.className;
    className = className.replace(lang, ' ') + ' language-' + language;
    element.className = className.replace(/\s+/g, ' ').trim();
  }

  Prism.hooks.add('before-highlightall', function (env) {
    env.selector += ', ' + SELECTOR;
  });
  Prism.hooks.add('before-sanity-check', function (env) {
    var pre =
    /** @type {HTMLPreElement} */
    env.element;

    if (pre.matches(SELECTOR)) {
      env.code = ''; // fast-path the whole thing and go to complete

      pre.setAttribute(STATUS_ATTR, STATUS_LOADING); // mark as loading
      // add code element with loading message

      var code = pre.appendChild(document.createElement('CODE'));
      code.textContent = LOADING_MESSAGE;
      var src = pre.getAttribute('data-src');
      var language = env.language;

      if (language === 'none') {
        // the language might be 'none' because there is no language set;
        // in this case, we want to use the extension as the language
        var extension = (/\.(\w+)$/.exec(src) || [, 'none'])[1];
        language = EXTENSIONS[extension] || extension;
      } // set language classes


      setLanguageClass(code, language);
      setLanguageClass(pre, language); // preload the language

      var autoloader = Prism.plugins.autoloader;

      if (autoloader) {
        autoloader.loadLanguages(language);
      } // load file


      var xhr = new XMLHttpRequest();
      xhr.open('GET', src, true);

      xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
          if (xhr.status < 400 && xhr.responseText) {
            // mark as loaded
            pre.setAttribute(STATUS_ATTR, STATUS_LOADED); // highlight code

            code.textContent = xhr.responseText;
            Prism.highlightElement(code);
          } else {
            // mark as failed
            pre.setAttribute(STATUS_ATTR, STATUS_FAILED);

            if (xhr.status >= 400) {
              code.textContent = FAILURE_MESSAGE(xhr.status, xhr.statusText);
            } else {
              code.textContent = FAILURE_EMPTY_MESSAGE;
            }
          }
        }
      };

      xhr.send(null);
    }
  });
  Prism.plugins.fileHighlight = {
    /**
     * Executes the File Highlight plugin for all matching `pre` elements under the given container.
     *
     * Note: Elements which are already loaded or currently loading will not be touched by this method.
     *
     * @param {ParentNode} [container=document]
     */
    highlight: function highlight(container) {
      var elements = (container || document).querySelectorAll(SELECTOR);

      for (var i = 0, element; element = elements[i++];) {
        Prism.highlightElement(element);
      }
    }
  };
  var logged = false;
  /** @deprecated Use `Prism.plugins.fileHighlight.highlight` instead. */

  Prism.fileHighlight = function () {
    if (!logged) {
      console.warn('Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead.');
      logged = true;
    }

    Prism.plugins.fileHighlight.highlight.apply(this, arguments);
  };
})();
});

/** Used to map characters to HTML entities. */


var htmlEscapes = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;'
};
/**
 * Used by `_.escape` to convert characters to HTML entities.
 *
 * @private
 * @param {string} chr The matched character to escape.
 * @returns {string} Returns the escaped character.
 */

var escapeHtmlChar = _basePropertyOf(htmlEscapes);
var _escapeHtmlChar = escapeHtmlChar;

/** Used to match HTML entities and HTML characters. */


var reUnescapedHtml = /[&<>"']/g,
    reHasUnescapedHtml = RegExp(reUnescapedHtml.source);
/**
 * Converts the characters "&", "<", ">", '"', and "'" in `string` to their
 * corresponding HTML entities.
 *
 * **Note:** No other characters are escaped. To escape additional
 * characters use a third-party library like [_he_](https://mths.be/he).
 *
 * Though the ">" character is escaped for symmetry, characters like
 * ">" and "/" don't need escaping in HTML and have no special meaning
 * unless they're part of a tag or unquoted attribute value. See
 * [Mathias Bynens's article](https://mathiasbynens.be/notes/ambiguous-ampersands)
 * (under "semi-related fun fact") for more details.
 *
 * When working with HTML you should always
 * [quote attribute values](http://wonko.com/post/html-escaping) to reduce
 * XSS vectors.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category String
 * @param {string} [string=''] The string to escape.
 * @returns {string} Returns the escaped string.
 * @example
 *
 * _.escape('fred, barney, & pebbles');
 * // => 'fred, barney, &amp; pebbles'
 */

function escape$1(string) {
  string = toString_1(string);
  return string && reHasUnescapedHtml.test(string) ? string.replace(reUnescapedHtml, _escapeHtmlChar) : string;
}

var _escape = escape$1;

var pdfobject = createCommonjsModule(function (module) {
/*global ActiveXObject, window, console, define, module, jQuery */
//jshint unused:false, strict: false

/*
    PDFObject v2.1.1
    https://github.com/pipwerks/PDFObject
    Copyright (c) 2008-2018 Philip Hutchison
    MIT-style license: http://pipwerks.mit-license.org/
    UMD module pattern from https://github.com/umdjs/umd/blob/master/templates/returnExports.js
*/
(function (root, factory) {
  if ( module.exports) {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory();
  } else {
    // Browser globals (root is window)
    root.PDFObject = factory();
  }
})(commonjsGlobal, function () {
  //PDFObject is designed for client-side (browsers), not server-side (node)
  //Will choke on undefined navigator and window vars when run on server
  //Return boolean false and exit function when running server-side

  if (typeof window === "undefined" || typeof navigator === "undefined") {
    return false;
  }

  var pdfobjectversion = "2.1.1",
      ua = window.navigator.userAgent,
      //declare booleans
  supportsPDFs,
      isIE,
      supportsPdfMimeType = typeof navigator.mimeTypes['application/pdf'] !== "undefined",
      supportsPdfActiveX,
      isModernBrowser = function () {
    return typeof window.Promise !== "undefined";
  }(),
      isFirefox = function () {
    return ua.indexOf("irefox") !== -1;
  }(),
      isFirefoxWithPDFJS = function () {
    //Firefox started shipping PDF.js in Firefox 19.
    //If this is Firefox 19 or greater, assume PDF.js is available
    if (!isFirefox) {
      return false;
    } //parse userAgent string to get release version ("rv")
    //ex: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.12; rv:57.0) Gecko/20100101 Firefox/57.0


    return parseInt(ua.split("rv:")[1].split(".")[0], 10) > 18;
  }(),
      isIOS = function () {
    return /iphone|ipad|ipod/i.test(ua.toLowerCase());
  }(),
      //declare functions
  createAXO,
      buildFragmentString,
      log,
      embedError,
      embed,
      getTargetElement,
      generatePDFJSiframe,
      generateEmbedElement;
  /* ----------------------------------------------------
     Supporting functions
     ---------------------------------------------------- */


  createAXO = function (type) {
    var ax;

    try {
      ax = new ActiveXObject(type);
    } catch (e) {
      ax = null; //ensure ax remains null
    }

    return ax;
  }; //IE11 still uses ActiveX for Adobe Reader, but IE 11 doesn't expose
  //window.ActiveXObject the same way previous versions of IE did
  //window.ActiveXObject will evaluate to false in IE 11, but "ActiveXObject" in window evaluates to true
  //so check the first one for older IE, and the second for IE11
  //FWIW, MS Edge (replacing IE11) does not support ActiveX at all, both will evaluate false
  //Constructed as a method (not a prop) to avoid unneccesarry overhead -- will only be evaluated if needed


  isIE = function () {
    return !!(window.ActiveXObject || "ActiveXObject" in window);
  }; //If either ActiveX support for "AcroPDF.PDF" or "PDF.PdfCtrl" are found, return true
  //Constructed as a method (not a prop) to avoid unneccesarry overhead -- will only be evaluated if needed


  supportsPdfActiveX = function () {
    return !!(createAXO("AcroPDF.PDF") || createAXO("PDF.PdfCtrl"));
  }; //Determines whether PDF support is available


  supportsPDFs = //as of iOS 12, inline PDF rendering is still not supported in Safari or native webview
  //3rd-party browsers (eg Chrome, Firefox) use Apple's webview for rendering, and thus the same result as Safari
  //Therefore if iOS, we shall assume that PDF support is not available
  !isIOS && ( //Modern versions of Firefox come bundled with PDFJS
  isFirefoxWithPDFJS || //Browsers that still support the original MIME type check
  supportsPdfMimeType || //Pity the poor souls still using IE
  isIE() && supportsPdfActiveX()); //Create a fragment identifier for using PDF Open parameters when embedding PDF

  buildFragmentString = function (pdfParams) {
    var string = "",
        prop;

    if (pdfParams) {
      for (prop in pdfParams) {
        if (pdfParams.hasOwnProperty(prop)) {
          string += encodeURIComponent(prop) + "=" + encodeURIComponent(pdfParams[prop]) + "&";
        }
      } //The string will be empty if no PDF Params found


      if (string) {
        string = "#" + string; //Remove last ampersand

        string = string.slice(0, string.length - 1);
      }
    }

    return string;
  };

  log = function (msg) {
    if (typeof console !== "undefined" && console.log) {
      console.log("[PDFObject] " + msg);
    }
  };

  embedError = function (msg) {
    log(msg);
    return false;
  };

  getTargetElement = function (targetSelector) {
    //Default to body for full-browser PDF
    var targetNode = document.body; //If a targetSelector is specified, check to see whether
    //it's passing a selector, jQuery object, or an HTML element

    if (typeof targetSelector === "string") {
      //Is CSS selector
      targetNode = document.querySelector(targetSelector);
    } else if (typeof jQuery !== "undefined" && targetSelector instanceof jQuery && targetSelector.length) {
      //Is jQuery element. Extract HTML node
      targetNode = targetSelector.get(0);
    } else if (typeof targetSelector.nodeType !== "undefined" && targetSelector.nodeType === 1) {
      //Is HTML element
      targetNode = targetSelector;
    }

    return targetNode;
  };

  generatePDFJSiframe = function (targetNode, url, pdfOpenFragment, PDFJS_URL, id) {
    var fullURL = PDFJS_URL + "?file=" + encodeURIComponent(url) + pdfOpenFragment;
    var scrollfix = isIOS ? "-webkit-overflow-scrolling: touch; overflow-y: scroll; " : "overflow: hidden; ";
    var iframe = "<div style='" + scrollfix + "position: absolute; top: 0; right: 0; bottom: 0; left: 0;'><iframe  " + id + " src='" + fullURL + "' style='border: none; width: 100%; height: 100%;' frameborder='0'></iframe></div>";
    targetNode.className += " pdfobject-container";
    targetNode.style.position = "relative";
    targetNode.style.overflow = "auto";
    targetNode.innerHTML = iframe;
    return targetNode.getElementsByTagName("iframe")[0];
  };

  generateEmbedElement = function (targetNode, targetSelector, url, pdfOpenFragment, width, height, id) {
    var style = "";

    if (targetSelector && targetSelector !== document.body) {
      style = "width: " + width + "; height: " + height + ";";
    } else {
      style = "position: absolute; top: 0; right: 0; bottom: 0; left: 0; width: 100%; height: 100%;";
    }

    targetNode.className += " pdfobject-container";
    targetNode.innerHTML = "<embed " + id + " class='pdfobject' src='" + url + pdfOpenFragment + "' type='application/pdf' style='overflow: auto; " + style + "'/>";
    return targetNode.getElementsByTagName("embed")[0];
  };

  embed = function (url, targetSelector, options) {
    //Ensure URL is available. If not, exit now.
    if (typeof url !== "string") {
      return embedError("URL is not valid");
    } //If targetSelector is not defined, convert to boolean


    targetSelector = typeof targetSelector !== "undefined" ? targetSelector : false; //Ensure options object is not undefined -- enables easier error checking below

    options = typeof options !== "undefined" ? options : {}; //Get passed options, or set reasonable defaults

    var id = options.id && typeof options.id === "string" ? "id='" + options.id + "'" : "",
        page = options.page ? options.page : false,
        pdfOpenParams = options.pdfOpenParams ? options.pdfOpenParams : {},
        fallbackLink = typeof options.fallbackLink !== "undefined" ? options.fallbackLink : true,
        width = options.width ? options.width : "100%",
        height = options.height ? options.height : "100%",
        assumptionMode = typeof options.assumptionMode === "boolean" ? options.assumptionMode : true,
        forcePDFJS = typeof options.forcePDFJS === "boolean" ? options.forcePDFJS : false,
        PDFJS_URL = options.PDFJS_URL ? options.PDFJS_URL : false,
        targetNode = getTargetElement(targetSelector),
        fallbackHTML = "",
        pdfOpenFragment = "",
        fallbackHTML_default = "<p>This browser does not support inline PDFs. Please download the PDF to view it: <a href='[url]'>Download PDF</a></p>"; //If target element is specified but is not valid, exit without doing anything

    if (!targetNode) {
      return embedError("Target element cannot be determined");
    } //page option overrides pdfOpenParams, if found


    if (page) {
      pdfOpenParams.page = page;
    } //Stringify optional Adobe params for opening document (as fragment identifier)


    pdfOpenFragment = buildFragmentString(pdfOpenParams); //Do the dance
    //If the forcePDFJS option is invoked, skip everything else and embed as directed

    if (forcePDFJS && PDFJS_URL) {
      return generatePDFJSiframe(targetNode, url, pdfOpenFragment, PDFJS_URL, id); //If traditional support is provided, or if this is a modern browser and not iOS (see comment for supportsPDFs declaration)
    } else if (supportsPDFs || assumptionMode && isModernBrowser && !isIOS) {
      return generateEmbedElement(targetNode, targetSelector, url, pdfOpenFragment, width, height, id); //If everything else has failed and a PDFJS fallback is provided, try to use it
    } else if (PDFJS_URL) {
      return generatePDFJSiframe(targetNode, url, pdfOpenFragment, PDFJS_URL, id);
    } else {
      //Display the fallback link if available
      if (fallbackLink) {
        fallbackHTML = typeof fallbackLink === "string" ? fallbackLink : fallbackHTML_default;
        targetNode.innerHTML = fallbackHTML.replace(/\[url\]/g, url);
      }

      return embedError("This browser does not support embedded PDFs");
    }
  };

  return {
    embed: function (a, b, c) {
      return embed(a, b, c);
    },
    pdfobjectversion: function () {
      return pdfobjectversion;
    }(),
    supportsPDFs: function () {
      return supportsPDFs;
    }()
  };
});
});

var assertString_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = assertString;

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function assertString(input) {
  var isString = typeof input === 'string' || input instanceof String;

  if (!isString) {
    var invalidType;

    if (input === null) {
      invalidType = 'null';
    } else {
      invalidType = _typeof(input);

      if (invalidType === 'object' && input.constructor && input.constructor.hasOwnProperty('name')) {
        invalidType = input.constructor.name;
      } else {
        invalidType = "a ".concat(invalidType);
      }
    }

    throw new TypeError("Expected string but received ".concat(invalidType, "."));
  }
}

module.exports = exports.default;
module.exports.default = exports.default;
});

var merge_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = merge;

function merge() {
  var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var defaults = arguments.length > 1 ? arguments[1] : undefined;

  for (var key in defaults) {
    if (typeof obj[key] === 'undefined') {
      obj[key] = defaults[key];
    }
  }

  return obj;
}

module.exports = exports.default;
module.exports.default = exports.default;
});

var isFQDN_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isFQDN;

var _assertString = _interopRequireDefault(assertString_1);

var _merge = _interopRequireDefault(merge_1);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var default_fqdn_options = {
  require_tld: true,
  allow_underscores: false,
  allow_trailing_dot: false
};

function isFQDN(str, options) {
  (0, _assertString.default)(str);
  options = (0, _merge.default)(options, default_fqdn_options);
  /* Remove the optional trailing dot before checking validity */

  if (options.allow_trailing_dot && str[str.length - 1] === '.') {
    str = str.substring(0, str.length - 1);
  }

  var parts = str.split('.');

  for (var i = 0; i < parts.length; i++) {
    if (parts[i].length > 63) {
      return false;
    }
  }

  if (options.require_tld) {
    var tld = parts.pop();

    if (!parts.length || !/^([a-z\u00a1-\uffff]{2,}|xn[a-z0-9-]{2,})$/i.test(tld)) {
      return false;
    } // disallow spaces && special characers


    if (/[\s\u2002-\u200B\u202F\u205F\u3000\uFEFF\uDB40\uDC20\u00A9\uFFFD]/.test(tld)) {
      return false;
    }
  }

  for (var part, _i = 0; _i < parts.length; _i++) {
    part = parts[_i];

    if (options.allow_underscores) {
      part = part.replace(/_/g, '');
    }

    if (!/^[a-z\u00a1-\uffff0-9-]+$/i.test(part)) {
      return false;
    } // disallow full-width chars


    if (/[\uff01-\uff5e]/.test(part)) {
      return false;
    }

    if (part[0] === '-' || part[part.length - 1] === '-') {
      return false;
    }
  }

  return true;
}

module.exports = exports.default;
module.exports.default = exports.default;
});

var isIP_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isIP;

var _assertString = _interopRequireDefault(assertString_1);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/**
11.3.  Examples

   The following addresses

             fe80::1234 (on the 1st link of the node)
             ff02::5678 (on the 5th link of the node)
             ff08::9abc (on the 10th organization of the node)

   would be represented as follows:

             fe80::1234%1
             ff02::5678%5
             ff08::9abc%10

   (Here we assume a natural translation from a zone index to the
   <zone_id> part, where the Nth zone of any scope is translated into
   "N".)

   If we use interface names as <zone_id>, those addresses could also be
   represented as follows:

            fe80::1234%ne0
            ff02::5678%pvc1.3
            ff08::9abc%interface10

   where the interface "ne0" belongs to the 1st link, "pvc1.3" belongs
   to the 5th link, and "interface10" belongs to the 10th organization.
 * * */


var ipv4Maybe = /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/;
var ipv6Block = /^[0-9A-F]{1,4}$/i;

function isIP(str) {
  var version = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  (0, _assertString.default)(str);
  version = String(version);

  if (!version) {
    return isIP(str, 4) || isIP(str, 6);
  } else if (version === '4') {
    if (!ipv4Maybe.test(str)) {
      return false;
    }

    var parts = str.split('.').sort(function (a, b) {
      return a - b;
    });
    return parts[3] <= 255;
  } else if (version === '6') {
    var addressAndZone = [str]; // ipv6 addresses could have scoped architecture
    // according to https://tools.ietf.org/html/rfc4007#section-11

    if (str.includes('%')) {
      addressAndZone = str.split('%');

      if (addressAndZone.length !== 2) {
        // it must be just two parts
        return false;
      }

      if (!addressAndZone[0].includes(':')) {
        // the first part must be the address
        return false;
      }

      if (addressAndZone[1] === '') {
        // the second part must not be empty
        return false;
      }
    }

    var blocks = addressAndZone[0].split(':');
    var foundOmissionBlock = false; // marker to indicate ::
    // At least some OS accept the last 32 bits of an IPv6 address
    // (i.e. 2 of the blocks) in IPv4 notation, and RFC 3493 says
    // that '::ffff:a.b.c.d' is valid for IPv4-mapped IPv6 addresses,
    // and '::a.b.c.d' is deprecated, but also valid.

    var foundIPv4TransitionBlock = isIP(blocks[blocks.length - 1], 4);
    var expectedNumberOfBlocks = foundIPv4TransitionBlock ? 7 : 8;

    if (blocks.length > expectedNumberOfBlocks) {
      return false;
    } // initial or final ::


    if (str === '::') {
      return true;
    } else if (str.substr(0, 2) === '::') {
      blocks.shift();
      blocks.shift();
      foundOmissionBlock = true;
    } else if (str.substr(str.length - 2) === '::') {
      blocks.pop();
      blocks.pop();
      foundOmissionBlock = true;
    }

    for (var i = 0; i < blocks.length; ++i) {
      // test for a :: which can not be at the string start/end
      // since those cases have been handled above
      if (blocks[i] === '' && i > 0 && i < blocks.length - 1) {
        if (foundOmissionBlock) {
          return false; // multiple :: in address
        }

        foundOmissionBlock = true;
      } else if (foundIPv4TransitionBlock && i === blocks.length - 1) ; else if (!ipv6Block.test(blocks[i])) {
        return false;
      }
    }

    if (foundOmissionBlock) {
      return blocks.length >= 1;
    }

    return blocks.length === expectedNumberOfBlocks;
  }

  return false;
}

module.exports = exports.default;
module.exports.default = exports.default;
});

var isURL_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isURL;

var _assertString = _interopRequireDefault(assertString_1);

var _isFQDN = _interopRequireDefault(isFQDN_1);

var _isIP = _interopRequireDefault(isIP_1);

var _merge = _interopRequireDefault(merge_1);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/*
options for isURL method

require_protocol - if set as true isURL will return false if protocol is not present in the URL
require_valid_protocol - isURL will check if the URL's protocol is present in the protocols option
protocols - valid protocols can be modified with this option
require_host - if set as false isURL will not check if host is present in the URL
allow_protocol_relative_urls - if set as true protocol relative URLs will be allowed

*/


var default_url_options = {
  protocols: ['http', 'https', 'ftp'],
  require_tld: true,
  require_protocol: false,
  require_host: true,
  require_valid_protocol: true,
  allow_underscores: false,
  allow_trailing_dot: false,
  allow_protocol_relative_urls: false
};
var wrapped_ipv6 = /^\[([^\]]+)\](?::([0-9]+))?$/;

function isRegExp(obj) {
  return Object.prototype.toString.call(obj) === '[object RegExp]';
}

function checkHost(host, matches) {
  for (var i = 0; i < matches.length; i++) {
    var match = matches[i];

    if (host === match || isRegExp(match) && match.test(host)) {
      return true;
    }
  }

  return false;
}

function isURL(url, options) {
  (0, _assertString.default)(url);

  if (!url || url.length >= 2083 || /[\s<>]/.test(url)) {
    return false;
  }

  if (url.indexOf('mailto:') === 0) {
    return false;
  }

  options = (0, _merge.default)(options, default_url_options);
  var protocol, auth, host, hostname, port, port_str, split, ipv6;
  split = url.split('#');
  url = split.shift();
  split = url.split('?');
  url = split.shift();
  split = url.split('://');

  if (split.length > 1) {
    protocol = split.shift().toLowerCase();

    if (options.require_valid_protocol && options.protocols.indexOf(protocol) === -1) {
      return false;
    }
  } else if (options.require_protocol) {
    return false;
  } else if (url.substr(0, 2) === '//') {
    if (!options.allow_protocol_relative_urls) {
      return false;
    }

    split[0] = url.substr(2);
  }

  url = split.join('://');

  if (url === '') {
    return false;
  }

  split = url.split('/');
  url = split.shift();

  if (url === '' && !options.require_host) {
    return true;
  }

  split = url.split('@');

  if (split.length > 1) {
    if (options.disallow_auth) {
      return false;
    }

    auth = split.shift();

    if (auth.indexOf(':') >= 0 && auth.split(':').length > 2) {
      return false;
    }
  }

  hostname = split.join('@');
  port_str = null;
  ipv6 = null;
  var ipv6_match = hostname.match(wrapped_ipv6);

  if (ipv6_match) {
    host = '';
    ipv6 = ipv6_match[1];
    port_str = ipv6_match[2] || null;
  } else {
    split = hostname.split(':');
    host = split.shift();

    if (split.length) {
      port_str = split.join(':');
    }
  }

  if (port_str !== null) {
    port = parseInt(port_str, 10);

    if (!/^[0-9]+$/.test(port_str) || port <= 0 || port > 65535) {
      return false;
    }
  }

  if (!(0, _isIP.default)(host) && !(0, _isFQDN.default)(host, options) && (!ipv6 || !(0, _isIP.default)(ipv6, 6))) {
    return false;
  }

  host = host || ipv6;

  if (options.host_whitelist && !checkHost(host, options.host_whitelist)) {
    return false;
  }

  if (options.host_blacklist && checkHost(host, options.host_blacklist)) {
    return false;
  }

  return true;
}

module.exports = exports.default;
module.exports.default = exports.default;
});

var isURL = /*@__PURE__*/getDefaultExportFromCjs(isURL_1);

/*!
 * markdown-it-regexp
 * Copyright (c) 2014 Alex Kocharin
 * MIT Licensed
 */

/**
 * Module dependencies.
 */

/**
 * Escape special characters in the given string of html.
 *
 * Borrowed from escape-html component, MIT-licensed
 */


var _escape$1 = function (html) {
  return String(html).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#39;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
};

var utils = {
	escape: _escape$1
};

/*!
 * markdown-it-regexp
 * Copyright (c) 2014 Alex Kocharin
 * MIT Licensed
 */

/**
 * Module dependencies.
 */



/**
 * Counter for multi usage.
 */


var counter = 0;
/**
 * Expose `Plugin`
 */

var lib = Plugin;
/**
 * Constructor function
 */

function Plugin(regexp, replacer) {
  // return value should be a callable function
  // with strictly defined options passed by markdown-it
  var self = function (md, options) {
    self.options = options;
    self.init(md);
  }; // initialize plugin object


  self.__proto__ = Plugin.prototype; // clone regexp with all the flags

  var flags = (regexp.global ? 'g' : '') + (regexp.multiline ? 'm' : '') + (regexp.ignoreCase ? 'i' : '');
  self.regexp = RegExp('^' + regexp.source, flags); // copy init options

  self.replacer = replacer; // this plugin can be inserted multiple times,
  // so we're generating unique name for it

  self.id = 'regexp-' + counter;
  counter++;
  return self;
}

util__default['default'].inherits(Plugin, Function); // function that registers plugin with markdown-it

Plugin.prototype.init = function (md) {
  md.inline.ruler.push(this.id, this.parse.bind(this));
  md.renderer.rules[this.id] = this.render.bind(this);
};

Plugin.prototype.parse = function (state, silent) {
  // slowwww... maybe use an advanced regexp engine for this
  var match = this.regexp.exec(state.src.slice(state.pos));
  if (!match) return false; // valid match found, now we need to advance cursor

  state.pos += match[0].length; // don't insert any tokens in silent mode

  if (silent) return true;
  var token = state.push(this.id, '', 0);
  token.meta = {
    match: match
  };
  return true;
};

Plugin.prototype.render = function (tokens, id, options, env) {
  return this.replacer(tokens[id].meta.match, utils);
};

var markdownItRegexp = lib;

// import hljs from 'highlight.js'
// let viz = new Viz()

var hljs = require('highlight.js');

function highlightRender(code, lang) {
  if (!lang || /no(-?)highlight|plain|text/.test(lang)) {
    return;
  }

  function parseFenceCodeParams(lang) {
    var attrMatch = lang.match(/{(.*)}/);
    var params = {};

    if (attrMatch && attrMatch.length >= 2) {
      var attrs = attrMatch[1];
      var paraMatch = attrs.match(/([#.](\S+?)\s)|((\S+?)\s*=\s*("(.+?)"|'(.+?)'|\[[^\]]*\]|\{[}]*\}|(\S+)))/g);
      paraMatch && paraMatch.forEach(function (param) {
        param = param.trim();

        if (param[0] === '#') {
          params['id'] = param.slice(1);
        } else if (param[0] === '.') {
          if (params['class']) params['class'] = [];
          params['class'] = params['class'].concat(param.slice(1));
        } else {
          var offset = param.indexOf('=');
          var id = param.substring(0, offset).trim().toLowerCase();
          var val = param.substring(offset + 1).trim();
          var valStart = val[0];
          var valEnd = val[val.length - 1];

          if (['"', "'"].indexOf(valStart) !== -1 && ['"', "'"].indexOf(valEnd) !== -1 && valStart === valEnd) {
            val = val.substring(1, val.length - 1);
          }

          if (id === 'class') {
            if (params['class']) params['class'] = [];
            params['class'] = params['class'].concat(val);
          } else {
            params[id] = val;
          }
        }
      });
    }

    return params;
  }

  function serializeParamToAttribute(params) {
    if (Object.getOwnPropertyNames(params).length === 0) {
      return '';
    } else {
      return " data-params=\"".concat(escape(JSON.stringify(params)), "\"");
    }
  }

  var fenceCodeAlias = {
    sequence: 'sequence-diagram',
    flow: 'flow-chart',
    graphviz: 'graphviz',
    mermaid: 'mermaid',
    abc: 'abc',
    vega: 'vega',
    geo: 'geo'
  };
  var params = parseFenceCodeParams(lang);
  var attr = serializeParamToAttribute(params);
  lang = lang.split(/\s+/g)[0];
  code = _escape(code);
  var langAlias = fenceCodeAlias[lang];

  if (langAlias) {
    return "<div class=\"".concat(langAlias, " raw\"").concat(attr, ">").concat(code, "</div>");
  }

  var result = {
    value: code
  };
  var showlinenumbers = /=$|=\d+$|=\+$/.test(lang);

  if (showlinenumbers) {
    var startnumber = 1;
    var matches = lang.match(/=(\d+)$/);

    if (matches) {
      startnumber = parseInt(matches[1]);
    }

    var lines = result.value.split('\n');
    var linenumbers = [];

    for (var i = 0; i < lines.length - 1; i++) {
      linenumbers[i] = "<span data-linenumber='".concat(startnumber + i, "'></span>");
    }

    var continuelinenumber = /=\+$/.test(lang);
    var linegutter = "<div class='gutter linenumber".concat(continuelinenumber ? ' continue' : '', "'>").concat(linenumbers.join('\n'), "</div>");
    result.value = "<div class='wrapper'>".concat(linegutter, "<div class='code'>").concat(result.value, "</div></div>");
  }

  return result.value;
}

var md = require('markdown-it')({
  html: true,
  // Enable HTML tags in source
  xhtmlOut: true,
  // Use '/' to close single tags (<br />).
  breaks: true,
  // Convert '\n' in paragraphs into <br>
  langPrefix: '',
  // CSS language prefix for fenced blocks. Can be
  linkify: false,
  // 自动识别url
  typographer: true,
  quotes: '“”‘’',
  highlight: highlightRender
}); // pdf


var pdfPlugin = new markdownItRegexp( // regexp to match
/{%pdf\s*([\d\D]*?)\s*%}/, // match, utils
function (match) {
  var pdfurl = match[1];
  if (!isURL(pdfurl)) return match[0];
  var div = $__default['default']('<div class="pdf raw"></div>');
  div.attr('data-pdfurl', pdfurl);
  return div[0].outerHTML;
});
md.use(pdfPlugin); // regex for extra tags

var spaceregex = /\s*/;
var notinhtmltagregex = /(?![^<]*>|[^<>]*<\/)/;
var coloregex = /\[color=([#|(|)|\s|,|\w]*?)\]/;
coloregex = new RegExp(coloregex.source + notinhtmltagregex.source, 'g');
var nameregex = /\[name=(.*?)\]/;
var timeregex = /\[time=([:|,|+|-|(|)|\s|\w]*?)\]/;
var nameandtimeregex = new RegExp(nameregex.source + spaceregex.source + timeregex.source + notinhtmltagregex.source, 'g');
nameregex = new RegExp(nameregex.source + notinhtmltagregex.source, 'g');
timeregex = new RegExp(timeregex.source + notinhtmltagregex.source, 'g');

function replaceExtraTags(html) {
  html = html.replace(coloregex, '<span class="color" data-color="$1"></span>');
  html = html.replace(nameandtimeregex, '<small><i class="fa fa-user"></i> $1 <i class="fa fa-clock-o"></i> $2</small>');
  html = html.replace(nameregex, '<small><i class="fa fa-user"></i> $1</small>');
  html = html.replace(timeregex, '<small><i class="fa fa-clock-o"></i> $1</small>');
  return html;
}

function finishView(view) {
  // blockquote
  var blockquote = view.find('blockquote.raw').removeClass('raw');
  var blockquoteP = blockquote.find('p');
  blockquoteP.each(function (key, value) {
    var html = $__default['default'](value).html();
    html = replaceExtraTags(html);
    $__default['default'](value).html(html);
  }); // color tag in blockquote will change its left border color

  var blockquoteColor = blockquote.find('.color');
  blockquoteColor.each(function (key, value) {
    $__default['default'](value).closest('blockquote').css('border-left-color', $__default['default'](value).attr('data-color'));
  }); // TODO:
  // sequence diagram
  // const sequences = view.find('div.sequence-diagram.raw').removeClass('raw')
  // sequences.each((key, value) => {
  //   try {
  //     var $value = $(value)
  //     const $ele = $(value).parent().parent()
  //     const sequence = $value
  //     sequence.sequenceDiagram({
  //       theme: 'simple'
  //     })
  //     $ele.addClass('sequence-diagram')
  //     $value.children().unwrap().unwrap()
  //     const svg = $ele.find('> svg')
  //     svg[0].setAttribute('viewBox', `0 0 ${svg.attr('width')} ${svg.attr('height')}`)
  //     svg[0].setAttribute('preserveAspectRatio', 'xMidYMid meet')
  //   } catch (err) {
  //     $value.unwrap()
  //     $value.parent().append(`<div class="alert alert-warning">${escapeHTML(err)}</div>`)
  //     console.warn(err)
  //   }
  // })
  // flowchart
  // const flow = view.find('div.flow-chart.raw').removeClass('raw')
  // flow.each((key, value) => {
  //   try {
  //     var $value = $(value)
  //     const $ele = $(value).parent().parent()
  //     const chart = flowchart.parse($value.text())
  //     $value.html('')
  //     chart.drawSVG(value, {
  //       'line-width': 2,
  //       fill: 'none',
  //       'font-size': '16px',
  //       'font-family': "'Andale Mono', monospace"
  //     })
  //     $ele.addClass('flow-chart')
  //     $value.children().unwrap().unwrap()
  //   } catch (err) {
  //     $value.unwrap()
  //     $value.parent().append(`<div class="alert alert-warning">${escapeHTML(err)}</div>`)
  //     console.warn(err)
  //   }
  // })
  // TODO:
  // graphviz
  // var graphvizs = view.find('div.graphviz.raw').removeClass('raw')
  // graphvizs.each(function (key, value) {
  //   try {
  //     var $value = $(value)
  //     var $ele = $(value).parent().parent()
  //     $value.unwrap()
  //     viz.renderString($value.text())
  //       .then(graphviz => {
  //         if (!graphviz) throw Error('viz.js output empty graph')
  //         $value.html(graphviz)
  //         $ele.addClass('graphviz')
  //         $value.children().unwrap()
  //       })
  //       .catch(err => {
  //         viz = new Viz()
  //         $value.parent().append(`<div class="alert alert-warning">${escapeHTML(err)}</div>`)
  //         console.warn(err)
  //       })
  //   } catch (err) {
  //     viz = new Viz()
  //     $value.parent().append(`<div class="alert alert-warning">${escapeHTML(err)}</div>`)
  //     console.warn(err)
  //   }
  // })
  // pdf

  view.find('div.pdf.raw').removeClass('raw').each(function (key, value) {
    var url = $__default['default'](value).attr('data-pdfurl'); // 修改
    // const inner = $('<div></div>')

    var pdfDiv = document.createElement('div'); // 修改 end

    $__default['default'](this).append(pdfDiv);
    pdfobject.embed(url, pdfDiv, {
      height: '400px'
    });
  }); // syntax highlighting

  view.find('code.raw').removeClass('raw').each(function (key, value) {
    var langDiv = $__default['default'](value);

    if (langDiv.length > 0) {
      var reallang = langDiv[0].className.replace(/hljs|wrap/g, '').trim();
      var codeDiv = langDiv.find('.code');
      var code = '';
      if (codeDiv.length > 0) code = codeDiv.html();else code = langDiv.html();
      var result;

      if (!reallang) {
        result = {
          value: code
        };
      } else if (reallang === 'haskell' || reallang === 'go' || reallang === 'typescript' || reallang === 'jsx' || reallang === 'gherkin') {
        code = _unescape(code);
        result = {
          value: prism.highlight(code, prism.languages[reallang])
        };
      } else if (reallang === 'tiddlywiki' || reallang === 'mediawiki') {
        code = _unescape(code);
        result = {
          value: prism.highlight(code, prism.languages.wiki)
        };
      } else if (reallang === 'cmake') {
        code = _unescape(code);
        result = {
          value: prism.highlight(code, prism.languages.makefile)
        };
      } else {
        code = _unescape(code);
        var languages = hljs.listLanguages();

        if (!languages.includes(reallang)) {
          result = hljs.highlightAuto(code);
        } else {
          result = hljs.highlight(reallang, code);
        }
      }

      if (codeDiv.length > 0) codeDiv.html(result.value);else langDiv.html(result.value);
    }
  }); // mathjax

  var mathjaxdivs = view.find('span.mathjax.raw').removeClass('raw').toArray();

  try {
    if (mathjaxdivs.length > 1) {
      window.MathJax.Hub.Queue(['Typeset', window.MathJax.Hub, mathjaxdivs]);
      window.MathJax.Hub.Queue(window.viewAjaxCallback);
    } else if (mathjaxdivs.length > 0) {
      window.MathJax.Hub.Queue(['Typeset', window.MathJax.Hub, mathjaxdivs[0]]);
      window.MathJax.Hub.Queue(window.viewAjaxCallback);
    }
  } catch (err) {
    console.warn(err);
  }
}

// Process block-level custom containers

var markdownItContainer = function container_plugin(md, name, options) {
  // Second param may be useful if you decide
  // to increase minimal allowed marker length
  function validateDefault(params
  /*, markup*/
  ) {
    return params.trim().split(' ', 2)[0] === name;
  }

  function renderDefault(tokens, idx, _options, env, slf) {
    // add a class to the opening tag
    if (tokens[idx].nesting === 1) {
      tokens[idx].attrJoin('class', name);
    }

    return slf.renderToken(tokens, idx, _options, env, slf);
  }

  options = options || {};
  var min_markers = 3,
      marker_str = options.marker || ':',
      marker_char = marker_str.charCodeAt(0),
      marker_len = marker_str.length,
      validate = options.validate || validateDefault,
      render = options.render || renderDefault;

  function container(state, startLine, endLine, silent) {
    var pos,
        nextLine,
        marker_count,
        markup,
        params,
        token,
        old_parent,
        old_line_max,
        auto_closed = false,
        start = state.bMarks[startLine] + state.tShift[startLine],
        max = state.eMarks[startLine]; // Check out the first character quickly,
    // this should filter out most of non-containers
    //

    if (marker_char !== state.src.charCodeAt(start)) {
      return false;
    } // Check out the rest of the marker string
    //


    for (pos = start + 1; pos <= max; pos++) {
      if (marker_str[(pos - start) % marker_len] !== state.src[pos]) {
        break;
      }
    }

    marker_count = Math.floor((pos - start) / marker_len);

    if (marker_count < min_markers) {
      return false;
    }

    pos -= (pos - start) % marker_len;
    markup = state.src.slice(start, pos);
    params = state.src.slice(pos, max);

    if (!validate(params, markup)) {
      return false;
    } // Since start is found, we can report success here in validation mode
    //


    if (silent) {
      return true;
    } // Search for the end of the block
    //


    nextLine = startLine;

    for (;;) {
      nextLine++;

      if (nextLine >= endLine) {
        // unclosed block should be autoclosed by end of document.
        // also block seems to be autoclosed by end of parent
        break;
      }

      start = state.bMarks[nextLine] + state.tShift[nextLine];
      max = state.eMarks[nextLine];

      if (start < max && state.sCount[nextLine] < state.blkIndent) {
        // non-empty line with negative indent should stop the list:
        // - ```
        //  test
        break;
      }

      if (marker_char !== state.src.charCodeAt(start)) {
        continue;
      }

      if (state.sCount[nextLine] - state.blkIndent >= 4) {
        // closing fence should be indented less than 4 spaces
        continue;
      }

      for (pos = start + 1; pos <= max; pos++) {
        if (marker_str[(pos - start) % marker_len] !== state.src[pos]) {
          break;
        }
      } // closing code fence must be at least as long as the opening one


      if (Math.floor((pos - start) / marker_len) < marker_count) {
        continue;
      } // make sure tail has spaces only


      pos -= (pos - start) % marker_len;
      pos = state.skipSpaces(pos);

      if (pos < max) {
        continue;
      } // found!


      auto_closed = true;
      break;
    }

    old_parent = state.parentType;
    old_line_max = state.lineMax;
    state.parentType = 'container'; // this will prevent lazy continuations from ever going past our end marker

    state.lineMax = nextLine;
    token = state.push('container_' + name + '_open', 'div', 1);
    token.markup = markup;
    token.block = true;
    token.info = params;
    token.map = [startLine, nextLine];
    state.md.block.tokenize(state, startLine + 1, nextLine);
    token = state.push('container_' + name + '_close', 'div', -1);
    token.markup = state.src.slice(start, pos);
    token.block = true;
    state.parentType = old_parent;
    state.lineMax = old_line_max;
    state.line = nextLine + (auto_closed ? 1 : 0);
    return true;
  }

  md.block.ruler.before('fence', 'container_' + name, container, {
    alt: ['paragraph', 'reference', 'blockquote', 'list']
  });
  md.renderer.rules['container_' + name + '_open'] = render;
  md.renderer.rules['container_' + name + '_close'] = render;
};

// https://github.com/hackmdio/codimd/blob/f0fbd09fa0a37672ced98576612d6eb472a51e31/public/js/lib/syncscroll.js

function injectLineNumber(md) {
  function addPart(tokens, idx) {
    if (tokens[idx].map && tokens[idx].level === 0) {
      var startline = tokens[idx].map[0] + 1;
      var endline = tokens[idx].map[1];
      tokens[idx].attrJoin('class', 'part');
      tokens[idx].attrJoin('data-startline', startline);
      tokens[idx].attrJoin('data-endline', endline);
    }
  }

  md.renderer.rules.blockquote_open = function (tokens, idx, options, env, self) {
    tokens[idx].attrJoin('class', 'raw');
    addPart(tokens, idx);
    return self.renderToken.apply(self, arguments);
  };

  md.renderer.rules.table_open = function (tokens, idx, options, env, self) {
    addPart(tokens, idx);
    return self.renderToken.apply(self, arguments);
  };

  md.renderer.rules.bullet_list_open = function (tokens, idx, options, env, self) {
    addPart(tokens, idx);
    return self.renderToken.apply(self, arguments);
  };

  md.renderer.rules.list_item_open = function (tokens, idx, options, env, self) {
    tokens[idx].attrJoin('class', 'raw');

    if (tokens[idx].map) {
      var startline = tokens[idx].map[0] + 1;
      var endline = tokens[idx].map[1];
      tokens[idx].attrJoin('data-startline', startline);
      tokens[idx].attrJoin('data-endline', endline);
    }

    return self.renderToken.apply(self, arguments);
  };

  md.renderer.rules.ordered_list_open = function (tokens, idx, options, env, self) {
    addPart(tokens, idx);
    return self.renderToken.apply(self, arguments);
  };

  md.renderer.rules.link_open = function (tokens, idx, options, env, self) {
    addPart(tokens, idx);
    return self.renderToken.apply(self, arguments);
  };

  md.renderer.rules.paragraph_open = function (tokens, idx, options, env, self) {
    addPart(tokens, idx);
    return self.renderToken.apply(self, arguments);
  };

  md.renderer.rules.heading_open = function (tokens, idx, options, env, self) {
    tokens[idx].attrJoin('class', 'raw');
    addPart(tokens, idx);
    return self.renderToken.apply(self, arguments);
  };

  md.renderer.rules.fence = function (tokens, idx, options, env, self) {
    var token = tokens[idx];
    var info = token.info ? md.utils.unescapeAll(token.info).trim() : '';
    var langName = '';
    var highlighted;

    if (info) {
      langName = info.split(/\s+/g)[0];
      if (/!$/.test(info)) token.attrJoin('class', 'wrap');
      token.attrJoin('class', options.langPrefix + langName.replace(/=$|=\d+$|=\+$|!$|=!/, ''));
      token.attrJoin('class', 'hljs');
      token.attrJoin('class', 'raw');
    }

    if (options.highlight) {
      highlighted = options.highlight(token.content, info) || md.utils.escapeHtml(token.content);
    } else {
      highlighted = md.utils.escapeHtml(token.content);
    }

    if (highlighted.indexOf('<pre') === 0) {
      return "".concat(highlighted, "\n");
    }

    if (tokens[idx].map && tokens[idx].level === 0) {
      var startline = tokens[idx].map[0] + 1;
      var endline = tokens[idx].map[1];
      return "<pre class=\"part\" data-startline=\"".concat(startline, "\" data-endline=\"").concat(endline, "\"><code").concat(self.renderAttrs(token), ">").concat(highlighted, "</code></pre>\n");
    }

    return "<pre><code".concat(self.renderAttrs(token), ">").concat(highlighted, "</code></pre>\n");
  };

  md.renderer.rules.code_block = function (tokens, idx, options, env, self) {
    if (tokens[idx].map && tokens[idx].level === 0) {
      var startline = tokens[idx].map[0] + 1;
      var endline = tokens[idx].map[1];
      return "<pre class=\"part\" data-startline=\"".concat(startline, "\" data-endline=\"").concat(endline, "\"><code>").concat(md.utils.escapeHtml(tokens[idx].content), "</code></pre>\n");
    }

    return "<pre><code>".concat(md.utils.escapeHtml(tokens[idx].content), "</code></pre>\n");
  };

  function renderContainer(tokens, idx, options, env, self) {
    tokens[idx].attrJoin('role', 'alert');
    tokens[idx].attrJoin('class', 'alert');
    tokens[idx].attrJoin('class', "alert-".concat(tokens[idx].info.trim()));
    addPart(tokens, idx);
    return self.renderToken.apply(self, arguments);
  }

  md.use(markdownItContainer, 'success', {
    render: renderContainer
  });
  md.use(markdownItContainer, 'info', {
    render: renderContainer
  });
  md.use(markdownItContainer, 'warning', {
    render: renderContainer
  });
  md.use(markdownItContainer, 'danger', {
    render: renderContainer
  });
  md.use(markdownItContainer, 'spoiler', {
    validate: function validate(params) {
      return params.trim().match(/^spoiler(\s+.*)?$/);
    },
    render: function render(tokens, idx) {
      var m = tokens[idx].info.trim().match(/^spoiler(\s+.*)?$/);

      if (tokens[idx].nesting === 1) {
        // opening tag
        var startline = tokens[idx].map[0] + 1;
        var endline = tokens[idx].map[1];
        var partClass = "class=\"part raw\" data-startline=\"".concat(startline, "\" data-endline=\"").concat(endline, "\"");
        var summary = m[1] && m[1].trim();

        if (summary) {
          return "<details ".concat(partClass, "><summary>").concat(md.renderInline(summary), "</summary>\n");
        } else {
          return "<details ".concat(partClass, ">\n");
        }
      } else {
        // closing tag
        return '</details>\n';
      }
    }
  });
}

// import hljsLangs from '../core/hljs/lang.hljs.js'
var markdown = md; // let mihe = require('markdown-it-highlightjs-external');
// let missLangs = {};
// let needLangs = [];
// let hljs_opts = {
//     hljs: 'auto',
//     highlighted: true,
//     langCheck: function(lang) {
//         if (lang && hljsLangs[lang] && !missLangs[lang]) {
//             missLangs[lang] = 1;
//             needLangs.push(hljsLangs[lang])
//         }
//     }
// };
// 表情

var emoji = require('markdown-it-emoji'); // 下标


var sub = require('markdown-it-sub'); // 上标


var sup = require('markdown-it-sup'); // container


var container = require('markdown-it-container'); // <dl/>


var deflist = require('markdown-it-deflist'); // <abbr/>


var abbr = require('markdown-it-abbr'); // footnote


var footnote = require('markdown-it-footnote'); // insert 带有下划线 样式 ++ ++


var insert = require('markdown-it-ins'); // mark


var mark = require('markdown-it-mark'); // taskLists


var taskLists = require('markdown-it-task-lists'); // 注释原因: 因为和markdown-it-anchor的功能冲突了(他们的实现方法不一样)
// let toc = require('markdown-it-toc')
// anchor
// error: plugin.apply is not a function
// fix: https://github.com/tylingsoft/markdown-it-mermaid/issues/4


var anchor = require('markdown-it-anchor')["default"]; // toc 替换原来的


var tableOfContents = require('markdown-it-table-of-contents'); // math katex
// let katex = require('markdown-it-katex-external');


var miip = require('markdown-it-images-preview'); // add target="_blank" to all link


var defaultRender = markdown.renderer.rules.link_open || function (tokens, idx, options, env, self) {
  return self.renderToken(tokens, idx, options);
};

markdown.renderer.rules.link_open = function (tokens, idx, options, env, self) {
  var hIndex = tokens[idx].attrIndex('href');
  if (tokens[idx].attrs[hIndex][1].startsWith('#')) return defaultRender(tokens, idx, options, env, self); // If you are sure other plugins can't add `target` - drop check below

  var aIndex = tokens[idx].attrIndex('target');

  if (aIndex < 0) {
    tokens[idx].attrPush(['target', '_blank']); // add new attribute
  } else {
    tokens[idx].attrs[aIndex][1] = '_blank'; // replace value of existing attr
  } // rel 参考了 hackmd 的 a link 处理方式


  var relIndex = tokens[idx].attrIndex('rel');

  if (relIndex < 0) {
    tokens[idx].attrPush(['rel', 'noopener']); // add new attribute
  } else {
    tokens[idx].attrs[relIndex][1] = 'noopener'; // replace value of existing attr
  } // pass token to default renderer.


  return defaultRender(tokens, idx, options, env, self);
}; // use(mihe, hljs_opts)


markdown.use(emoji).use(sup).use(sub).use(container) // 下面三个和原来库保持一致
.use(deflist).use(abbr).use(footnote).use(insert).use(mark).use(miip).use(require('markdown-it-mathjax')({
  beforeMath: '<span class="mathjax raw">',
  afterMath: '</span>',
  beforeInlineMath: '<span class="mathjax raw">\\(',
  afterInlineMath: '\\)</span>',
  beforeDisplayMath: '<span class="mathjax raw">\\[',
  afterDisplayMath: '\\]</span>'
})).use(taskLists).use(anchor).use(tableOfContents, {
  includeLevel: [1, 2, 3],
  // hackmd 也只支持到了h3
  markerPattern: /^\[toc\]|^\[\[toc\]\]/im // 如果想 支持 [[toc]] [toc] 的话不能添加 $

});
injectLineNumber(markdown);

console.log('version ' + version);

exports.finishView = finishView;
exports.markdown = markdown;
