(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@jflow/core')) :
  typeof define === 'function' && define.amd ? define(['exports', '@jflow/core'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["jflow-vue2-plugin"] = {}, global.jflow));
})(this, (function (exports, JFlowInstance$1) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  function _interopNamespace(e) {
    if (e && e.__esModule) return e;
    var n = Object.create(null);
    if (e) {
      Object.keys(e).forEach(function (k) {
        if (k !== 'default') {
          var d = Object.getOwnPropertyDescriptor(e, k);
          Object.defineProperty(n, k, d.get ? d : {
            enumerable: true,
            get: function () { return e[k]; }
          });
        }
      });
    }
    n["default"] = e;
    return Object.freeze(n);
  }

  var JFlowInstance__default = /*#__PURE__*/_interopDefaultLegacy(JFlowInstance$1);
  var JFlowInstance__namespace = /*#__PURE__*/_interopNamespace(JFlowInstance$1);

  function _iterableToArrayLimit(arr, i) {
    var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
    if (null != _i) {
      var _s,
        _e,
        _x,
        _r,
        _arr = [],
        _n = !0,
        _d = !1;
      try {
        if (_x = (_i = _i.call(arr)).next, 0 === i) {
          if (Object(_i) !== _i) return;
          _n = !1;
        } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0);
      } catch (err) {
        _d = !0, _e = err;
      } finally {
        try {
          if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return;
        } finally {
          if (_d) throw _e;
        }
      }
      return _arr;
    }
  }
  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      enumerableOnly && (symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      })), keys.push.apply(keys, symbols);
    }
    return keys;
  }
  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = null != arguments[i] ? arguments[i] : {};
      i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
    return target;
  }
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
      writable: false
    });
    return Constructor;
  }
  function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key);
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
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
    if (superClass) _setPrototypeOf(subClass, superClass);
  }
  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }
  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };
    return _setPrototypeOf(o, p);
  }
  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }
  function _construct(Parent, args, Class) {
    if (_isNativeReflectConstruct()) {
      _construct = Reflect.construct.bind();
    } else {
      _construct = function _construct(Parent, args, Class) {
        var a = [null];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) _setPrototypeOf(instance, Class.prototype);
        return instance;
      };
    }
    return _construct.apply(null, arguments);
  }
  function _isNativeFunction(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
  }
  function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    _wrapNativeSuper = function _wrapNativeSuper(Class) {
      if (Class === null || !_isNativeFunction(Class)) return Class;
      if (typeof Class !== "function") {
        throw new TypeError("Super expression must either be null or a function");
      }
      if (typeof _cache !== "undefined") {
        if (_cache.has(Class)) return _cache.get(Class);
        _cache.set(Class, Wrapper);
      }
      function Wrapper() {
        return _construct(Class, arguments, _getPrototypeOf(this).constructor);
      }
      Wrapper.prototype = Object.create(Class.prototype, {
        constructor: {
          value: Wrapper,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      return _setPrototypeOf(Wrapper, Class);
    };
    return _wrapNativeSuper(Class);
  }
  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
  }
  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    } else if (call !== void 0) {
      throw new TypeError("Derived constructors may only return object or undefined");
    }
    return _assertThisInitialized(self);
  }
  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
        result;
      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }
      return _possibleConstructorReturn(this, result);
    };
  }
  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }
  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }
  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }
  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }
  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
  }
  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }
  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
    return arr2;
  }
  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _toPrimitive(input, hint) {
    if (typeof input !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
      var res = prim.call(input, hint || "default");
      if (typeof res !== "object") return res;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
  }
  function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");
    return typeof key === "symbol" ? key : String(key);
  }

  var StackMixin = {
    provide: function provide() {
      return {
        addToStack: this.addToStack,
        // addToLinkStack: this.addToLinkStack,
        removeFromStack: this.removeFromStack
        // removeFromLinkStack: this.removeFromLinkStack,
      };
    },
    data: function data() {
      return {
        stack: [] // 主要是为了连线
      };
    },

    methods: {
      addToStack: function addToStack(instance, source) {
        this._jflowInstance.addToStack(instance);
        if (source) {
          instance._jflow.setRenderNodeBySource(source, instance);
        }
      },
      // addToLinkStack(link, sourceFrom, sourceTo) {
      //     this._jflowInstance.addToLinkStack(link);
      //     if(sourceFrom && sourceTo) {
      //         link._jflow.addLinkNodeBySource(sourceFrom, sourceTo, link);
      //     }
      // },
      removeFromStack: function removeFromStack(instance) {
        this._jflowInstance.removeFromStack(instance);
      },
      // removeFromLinkStack(link, sourceFrom, sourceTo) {
      //     this._jflowInstance.removeFromLinkStack(link);
      //     if(sourceFrom && sourceTo) {
      //         link._jflow.removeLinkNodeBySource(sourceFrom, sourceTo, link);
      //     }
      // },
      onStackChangeHandler: function onStackChangeHandler() {
        this._jflowInstance.recalculate();
        this._jflowInstance.reflow();
      }
    }
  };

  /**
   * typs#slot 中的属性 
   * @typedef {Object} j-jflow-Node
   * @property {string}       type   - 布局节点类型
   * @property {Object}       configs  - 源数据
   * @property {LayoutNode}   meta   - 布局节点
   */
  /**
   * JFlow {@link JFlow} 的 vue 封装 
   * @module j-jflow
   * @property {JFlow~JFlowConfigs} configs - 传给 JFlow 的配置
   * @property {Boolean} loading            - 初始渲染状态，支持 sync
   */
  var JFlowComponent = {
    mixins: [StackMixin],
    provide: function provide() {
      return {
        renderJFlow: this.renderJFlow,
        getJFlow: this.getInstance,
        addToLinkStack: this.addToLinkStack,
        removeFromLinkStack: this.removeFromLinkStack
      };
    },
    props: {
      configs: {
        type: Object,
        "default": function _default() {
          return {};
        }
      },
      loading: Boolean,
      genVueComponentKey: {
        type: Function
      }
    },
    data: function data() {
      return {
        // nodes: [],
        // links: [],
        renderNodes: [],
        renderLinks: []
      };
    },
    render: function render(createElement) {
      var _this = this;
      if (!this.renderNodes.length) {
        return createElement('div', this.$slots["default"]);
      } else {
        var vnodes = this.renderNodes.map(function (_ref) {
          var type = _ref.type,
            source = _ref.source,
            layoutNode = _ref.layoutNode;
          if (!_this.$scopedSlots[type]) {
            if (_this.$scopedSlots['jflowcommon']) {
              type = 'jflowcommon';
            } else {
              return null;
            }
          }
          if (layoutNode.__vnode__) {
            return layoutNode.__vnode__;
          }
          var _this$$scopedSlots$ty = _this.$scopedSlots[type]({
              source: source,
              layoutNode: layoutNode
            }),
            _this$$scopedSlots$ty2 = _slicedToArray(_this$$scopedSlots$ty, 1),
            vnode = _this$$scopedSlots$ty2[0];
          if (_this.genVueComponentKey) {
            vnode.key = _this.genVueComponentKey(source);
          }
          layoutNode.__vnode__ = vnode;
          return vnode;
        }).filter(function (n) {
          return !!n;
        });
        var vlinks = this.renderLinks.map(function (meta) {
          var type = meta.type || 'plainlink';
          if (!_this.$scopedSlots[type]) {
            return null;
          }
          if (meta.__vnode__) {
            return meta.__vnode__;
          }
          var _this$$scopedSlots$ty3 = _this.$scopedSlots[type]({
              configs: meta
            }),
            _this$$scopedSlots$ty4 = _slicedToArray(_this$$scopedSlots$ty3, 1),
            vnode = _this$$scopedSlots$ty4[0];
          if (_this.genVueComponentKey) {
            var k1 = _this.genVueComponentKey(meta.from.source);
            var k2 = _this.genVueComponentKey(meta.to.source);
            var k3 = meta.part;
            vnode.key = "".concat(k1, "-").concat(k2, "-").concat(k3);
          }
          meta.__vnode__ = vnode;
          return vnode;
        });
        return createElement('div', [].concat(_toConsumableArray(vnodes), _toConsumableArray(vlinks)));
      }
    },
    created: function created() {
      this._jflowInstance = new JFlowInstance__default["default"](this.configs);
      this.$emit('update:loading', true);
      this.genNodeLinkMeta();
      this.syncNodeLink();
    },
    mounted: function mounted() {
      this.mountJFlow();
    },
    beforeDestroy: function beforeDestroy() {
      var _this$_jflowInstance;
      (_this$_jflowInstance = this._jflowInstance) === null || _this$_jflowInstance === void 0 ? void 0 : _this$_jflowInstance.destroy();
    },
    methods: {
      mountJFlow: function mountJFlow() {
        var _this2 = this;
        this._jflowInstance.$mount(this.$el);
        Object.keys(this.$listeners).map(function (event) {
          var func = _this2.$listeners[event].bind(_this2);
          _this2._jflowInstance.addEventListener(event, func);
        });
        this.$emit('update:loading', false);
      },
      genNodeLinkMeta: function genNodeLinkMeta() {
        var _this3 = this;
        /** 
        * @member {j-jflow-Node[]} nodes
        */
        this.nodes = this._jflowInstance._layout.flowStack.map(function (meta) {
          meta.type;
            var layoutNode = meta.layoutNode,
            source = meta.source;
          var map = _this3._jflowInstance.source_Layout_Render_NodeMap;
          var obj;
          if (map.has(source)) {
            obj = map.get(source);
          } else {
            obj = map.set(source);
          }
          obj.layoutNode = layoutNode;
          return meta;
        });
        /** 
        * @member {Layout~LinkMeta[]} links
        */
        this.links = this._jflowInstance._layout.flowLinkStack.slice();
      },
      syncNodeLink: function syncNodeLink() {
        this.renderNodes = this.nodes.slice();
        this.renderLinks = this.links.slice();
      },
      /**
       * 绘制之前，vnode渲染之后
       * @name j-jflow~preCallback
       * @function
       */
      /**
       * 重排
       * @param {j-jflow~preCallback} preCallback - JFlow 绘制之前，vnode渲染之后
       */
      reflow: function reflow(preCallback, afterCallback) {
        var _this4 = this;
        this.genNodeLinkMeta();
        this.syncNodeLink();
        this.$nextTick(function () {
          if (preCallback) {
            preCallback();
          }
          _this4._jflowInstance.recalculate();
          _this4._jflowInstance.scheduleRender(function () {
            if (afterCallback) {
              afterCallback();
            }
          });
        });
      },
      /**
       * 获取单签 JFlow 实例
       * @return {Jflow} - JFlow对象
       */
      getInstance: function getInstance() {
        return this._jflowInstance;
      },
      /**
       * 手动触发绘制
       */
      renderJFlow: function renderJFlow() {
        var _this5 = this;
        if (this.__renderInSchedule__) {
          return;
        }
        this.__renderInSchedule__ = true;
        this.$nextTick(function () {
          _this5._jflowInstance._render();
          _this5.__renderInSchedule__ = false;
        });
      },
      addToLinkStack: function addToLinkStack(link, sourceFrom, sourceTo) {
        this._jflowInstance.addToLinkStack(link);
        if (sourceFrom && sourceTo) {
          link._jflow.addLinkNodeBySource(sourceFrom, sourceTo, link);
        }
      },
      removeFromLinkStack: function removeFromLinkStack(link, sourceFrom, sourceTo) {
        this._jflowInstance.removeFromLinkStack(link);
        if (sourceFrom && sourceTo) {
          link._jflow.removeLinkNodeBySource(sourceFrom, sourceTo, link);
        }
      }
    }
  };

  function getDefaultExportFromCjs (x) {
  	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
  }

  strict.custom = custom;

  var objectDiff = strict;

  function strict(){
  	return diff(null, [].slice.call(arguments, 0));
  }

  function custom( opts ){
  	return diff(opts, [].slice.call(arguments, 1));
  }

  function diff( opts, subjects ){
  	var length = subjects.length;
  	var ref = subjects[0];
  	var diff = {};
  	var equal = opts && opts.equal || isStrictEqual;
  	var c;
  	var keys;
  	var keysLength;
  	var key;
  	var u;

  	for (var i = 1;i < length;i++) {
  		c = subjects[i];
  		keys = Object.keys(c);
  		keysLength = keys.length;

  		for (u = 0;u < keysLength;u++) {
  			key = keys[u];

  			if (!equal(c[key], ref[key]))
  				diff[key] = c[key];
  		}
  	}

  	return diff;
  }

  function isStrictEqual( a, b ){
  	return a === b;
  }

  var diff$1 = /*@__PURE__*/getDefaultExportFromCjs(objectDiff);

  function JFlowInstance (nameNode) {
    var builder = typeof nameNode === 'string' ? JFlowInstance__namespace[nameNode] : nameNode;
    return {
      inject: ['addToStack', 'removeFromStack'],
      props: {
        configs: {
          type: Object,
          "default": function _default() {
            return {};
          }
        },
        visible: {
          type: Boolean,
          "default": true
        },
        source: {
          type: Object
        }
      },
      watch: {
        configs: function configs(val, oldVal) {
          // console.log(val, JSON.stringify(val) === JSON.stringify(oldVal), )
          var diffed = diff$1(val, oldVal);
          if (Object.keys(diffed).length === 0) {
            return;
          }
          //
          // const reflowKeys = Object.keys(diffed).filter(k => {
          //     const lk = k.toLowerCase();
          //     return !(lk.endsWith('color') || k.endsWith('style'));
          // });
          this._jflowInstance.setConfig(val);
          // console.log('recalculateUp')
          // this._jflowInstance.recalculateUp();
          // console.log(reflowKeys.length, val)
          // if(reflowKeys.length) {
          //     this._jflowInstance._belongs.recalculateUp();
          // }
          // this._jflowInstance._jflow._render();
        },
        '$listeners': function $listeners(val, oldVal) {
          var _this = this;
          var news = [];
          var deletes = [];
          var vnew = Object.keys(val).map(function (e) {
            return {
              event: e,
              handler: val[e]
            };
          });
          var vold = Object.keys(oldVal).map(function (e) {
            return {
              event: e,
              handler: oldVal[e]
            };
          });
          vnew.forEach(function (v) {
            var hnew = v.handler;
            if (!vold.find(function (q) {
              return q.handler === hnew;
            })) {
              news.push(v);
            }
          });
          vold.forEach(function (v) {
            var hold = v.handler;
            if (!vnew.find(function (q) {
              return q.handler === hold;
            })) {
              deletes.push(v);
            }
          });
          news.forEach(function (v) {
            _this._jflowInstance.addEventListener(v.event, v.handler);
          });
          deletes.forEach(function (v) {
            _this._jflowInstance.removeEventListener(v.event, v.handler);
          });
        },
        visible: function visible(val) {
          this._jflowInstance.visible = val;
          // this._jflowInstance._belongs.recalculateUp();
          // this._jflowInstance._jflow._render();
        },
        source: function source(val) {
          this._jflowInstance._jflow.setRenderNodeBySource(val, this._jflowInstance);
        }
      },
      render: function render(createElement) {
        return null;
      },
      created: function created() {
        this._jflowInstance = new builder(this.configs);
        this._jflowInstance.visible = this.visible;
        this.bindListeners();
        this.addToStack(this._jflowInstance, this.source);
      },
      // updated() {
      //     console.log('recalculateUp')
      // },
      destroyed: function destroyed() {
        this._jflowInstance.destroy();
        this.removeFromStack(this._jflowInstance);
      },
      methods: {
        bindListeners: function bindListeners() {
          var _this2 = this;
          Object.keys(this.$listeners).map(function (event) {
            var func = _this2.$listeners[event];
            _this2._jflowInstance.addEventListener(event, func);
          });
        }
      }
    };
  }

  /**
   * JFlow {@link BaseLink} 的 vue 封装 
   * @module jflow-link
   * @property {BaseLink~Configs} configs - 传给 BseLink 的配置, from, to属性会被替换为jflowid对应的 Instance
   * @property {String} from - source
   * @property {String} to - source
   */
  function JFlowLink (nameNode) {
    var builder = typeof nameNode === 'string' ? JFlowInstance__namespace[nameNode] : nameNode;
    return {
      inject: ['addToLinkStack', 'removeFromLinkStack', 'getJFlow'],
      props: {
        configs: {
          type: Object,
          "default": function _default() {
            return {};
          }
        },
        from: Object,
        to: Object
      },
      // watch: {
      //     from() {
      //         this.resetLink();
      //     },
      //     to() {
      //         this.resetLink();
      //     },
      //     configs(val, oldVal) {
      //         this.setConfig(val);
      //     },
      // },
      render: function render(createElement) {
        return null;
      },
      created: function created() {
        var jflow = this.getJFlow();
        var fromInstance = jflow.getRenderNodeBySource(this.from);
        var toInstance = jflow.getRenderNodeBySource(this.to);
        this.createInstance(fromInstance, toInstance);
      },
      mounted: function mounted() {
        var _this = this;
        this.unwatch = this.$watch(function () {
          return [_this.from, _this.to, _this.configs];
        }, function () {
          _this.refreshConfig();
        });
      },
      methods: {
        createInstance: function createInstance(fromInstance, toInstance) {
          if (fromInstance && toInstance) {
            this._jflowInstance = new builder(_objectSpread2(_objectSpread2({}, this.configs), {}, {
              from: fromInstance,
              to: toInstance
            }));
            this.bindListeners();
            this.addToLinkStack(this._jflowInstance, this.from, this.to);
          }
        },
        refreshConfig: function refreshConfig() {
          var jflow = this.getJFlow();
          var fromInstance = jflow.getRenderNodeBySource(this.from);
          var toInstance = jflow.getRenderNodeBySource(this.to);
          if (!this._jflowInstance) {
            this.createInstance(fromInstance, toInstance);
          } else {
            this._jflowInstance.setConfig(_objectSpread2(_objectSpread2({}, this.configs), {}, {
              from: fromInstance,
              to: toInstance
            }));
          }
        },
        // setConfig(val) {
        //     const conf = {};
        //     Object.keys(val).forEach(k => {
        //         if(k !=='from' && k !== 'to'){
        //             conf[k] = val[k];
        //         }
        //     })
        //     this._jflowInstance.setConfig(conf);
        // },
        // resetLink() {
        //     const jflow = this.getJFlow();
        //     const fromInstance = jflow.getRenderNodeBySource(this.from);
        //     const toInstance = jflow.getRenderNodeBySource(this.to);
        //     this._jflowInstance.from = fromInstance;
        //     this._jflowInstance.to = toInstance;
        // },
        bindListeners: function bindListeners() {
          var _this2 = this;
          Object.keys(this.$listeners).map(function (event) {
            var func = _this2.$listeners[event];
            _this2._jflowInstance.addEventListener(event, func);
          });
        }
      },
      destroyed: function destroyed() {
        this.unwatch();
        if (this._jflowInstance) {
          this.removeFromLinkStack(this._jflowInstance, this.from, this.to);
        }
      }
    };
  }

  function JFlowGroup (nameNode) {
    var builder = typeof nameNode === 'string' ? JFlowInstance__namespace[nameNode] : nameNode;
    return {
      mixins: [StackMixin],
      inject: {
        addToBelongStack: {
          from: 'addToStack'
        },
        removeFromBelongStack: {
          from: 'removeFromStack'
        },
        renderJFlow: {
          from: 'renderJFlow'
        }
      },
      render: function render(createElement) {
        return createElement('jflow-group', this.$slots["default"]);
      },
      props: {
        configs: {
          type: Object,
          "default": function _default() {
            return {};
          }
        },
        visible: {
          type: Boolean,
          "default": true
        },
        source: {
          type: Object
        }
      },
      watch: {
        configs: function configs(val, oldVal) {
          if (JSON.stringify(val) === JSON.stringify(oldVal)) {
            return;
          }
          this._jflowInstance.setConfig(val);
          // this._jflowInstance._jflow._render();
        },
        '$listeners': function $listeners(val, oldVal) {
          var _this = this;
          var news = [];
          var deletes = [];
          var vnew = Object.keys(val).map(function (e) {
            return {
              event: e,
              handler: val[e]
            };
          });
          var vold = Object.keys(oldVal).map(function (e) {
            return {
              event: e,
              handler: oldVal[e]
            };
          });
          vnew.forEach(function (v) {
            var hnew = v.handler;
            if (!vold.find(function (q) {
              return q.handler === hnew;
            })) {
              news.push(v);
            }
          });
          vold.forEach(function (v) {
            var hold = v.handler;
            if (!vnew.find(function (q) {
              return q.handler === hold;
            })) {
              deletes.push(v);
            }
          });
          news.forEach(function (v) {
            _this._jflowInstance.addEventListener(v.event, v.handler);
          });
          deletes.forEach(function (v) {
            _this._jflowInstance.removeEventListener(v.event, v.handler);
          });
        },
        visible: function visible(val) {
          this._jflowInstance.visible = val;
          // this._jflowInstance._belongs.recalculateUp();
          // this._jflowInstance._jflow._render();
        },
        source: function source(val) {
          this._jflowInstance._jflow.setRenderNodeBySource(val, this._jflowInstance);
        }
      },
      created: function created() {
        var _this2 = this;
        this._jflowInstance = new builder(this.configs);
        this._jflowInstance.visible = this.visible;
        Object.keys(this.$listeners).map(function (event) {
          var func = _this2.$listeners[event].bind(_this2);
          _this2._jflowInstance.addEventListener(event, func);
        });
        this.addToBelongStack(this._jflowInstance, this.source);
      },
      mounted: function mounted() {
        this._jflowInstance.recalculate();
      },
      updated: function updated() {
        this._jflowInstance.recalculateUp();
      },
      destroyed: function destroyed() {
        this._jflowInstance.destroy();
        this.removeFromBelongStack(this._jflowInstance);
      }
    };
  }

  var JFlowTextGroup = {
    mixins: [StackMixin],
    inject: {
      addToBelongStack: {
        from: 'addToStack'
      },
      removeFromBelongStack: {
        from: 'removeFromStack'
      },
      renderJFlow: {
        from: 'renderJFlow'
      }
    },
    data: function data() {
      return {
        nodes: []
      };
    },
    props: {
      configs: {
        type: Object,
        "default": function _default() {
          return {};
        }
      },
      visible: {
        type: Boolean,
        "default": true
      },
      source: {
        type: Object
      },
      genVueComponentKey: {
        type: Function
      }
    },
    watch: {
      configs: function configs(val, oldVal) {
        if (JSON.stringify(val) === JSON.stringify(oldVal)) {
          return;
        }
        this._jflowInstance.setConfig(val);
        // this._jflowInstance._jflow._render();
      },
      '$listeners': function $listeners(val, oldVal) {
        var _this = this;
        var news = [];
        var deletes = [];
        var vnew = Object.keys(val).map(function (e) {
          return {
            event: e,
            handler: val[e]
          };
        });
        var vold = Object.keys(oldVal).map(function (e) {
          return {
            event: e,
            handler: oldVal[e]
          };
        });
        vnew.forEach(function (v) {
          var hnew = v.handler;
          if (!vold.find(function (q) {
            return q.handler === hnew;
          })) {
            news.push(v);
          }
        });
        vold.forEach(function (v) {
          var hold = v.handler;
          if (!vnew.find(function (q) {
            return q.handler === hold;
          })) {
            deletes.push(v);
          }
        });
        news.forEach(function (v) {
          _this._jflowInstance.addEventListener(v.event, v.handler);
        });
        deletes.forEach(function (v) {
          _this._jflowInstance.removeEventListener(v.event, v.handler);
        });
      },
      visible: function visible(val) {
        this._jflowInstance.visible = val;
        // this._jflowInstance._belongs.recalculateUp();
        // this._jflowInstance._jflow._render();
      },
      source: function source(val) {
        this._jflowInstance._jflow.setRenderNodeBySource(val, this._jflowInstance);
      }
    },
    created: function created() {
      var _this2 = this;
      this._jflowInstance = new JFlowInstance$1.TextGroup(this.configs);
      this._jflowInstance.visible = this.visible;
      Object.keys(this.$listeners).map(function (event) {
        var func = _this2.$listeners[event].bind(_this2);
        _this2._jflowInstance.addEventListener(event, func);
      });
      this.addToBelongStack(this._jflowInstance, this.source);
      this.genTextElementMeta();
    },
    mounted: function mounted() {
      this._jflowInstance.recalculate();
    },
    updated: function updated() {
      this._jflowInstance.recalculateUp();
    },
    destroyed: function destroyed() {
      this._jflowInstance.destroy();
      this.removeFromBelongStack(this._jflowInstance);
    },
    render: function render(createElement) {
      var _this3 = this;
      if (!this.nodes.length) {
        return createElement('jflow-group', this.$slots["default"]);
      } else {
        var vnodes = this.nodes.map(function (textElement) {
          var type = textElement.type,
            source = textElement.source;
          if (!_this3.$scopedSlots[type]) {
            if (_this3.$scopedSlots['jflowcommon']) {
              type = 'jflowcommon';
            } else {
              return;
            }
          }
          if (textElement.__vnode__) {
            return textElement.__vnode__;
          }
          var _this3$$scopedSlots$t = _this3.$scopedSlots[type]({
              source: source,
              textElement: textElement
            }),
            _this3$$scopedSlots$t2 = _slicedToArray(_this3$$scopedSlots$t, 1),
            vnode = _this3$$scopedSlots$t2[0];
          if (_this3.genVueComponentKey) {
            vnode.key = _this3.genVueComponentKey(source);
          }
          textElement.__vnode__ = vnode;
          return vnode;
        });
        return createElement('div', vnodes);
      }
    },
    methods: {
      genTextElementMeta: function genTextElementMeta() {
        this.nodes = this._jflowInstance._flattenTxtElem.filter(function (elem) {
          return elem.type !== 'text';
        });
      },
      reflow: function reflow() {
        var _this4 = this;
        this._jflowInstance.refreshTextElements();
        this.genTextElementMeta();
        this.$nextTick(function () {
          _this4._jflowInstance.refresh();
        });
      }
    }
  };

  function JFlowLinkGroup (builder) {
    return {
      mixins: [StackMixin],
      inject: {
        addToBelongStack: {
          from: 'addToStack'
        },
        removeFromBelongStack: {
          from: 'removeFromStack'
        },
        renderJFlow: {
          from: 'renderJFlow'
        }
      },
      render: function render(createElement) {
        var _this = this;
        var vlinks = this.renderLinks.map(function (meta) {
          var type = meta.type || 'plainlink';
          if (!_this.$scopedSlots[type]) {
            return null;
          }
          if (meta.__vnode__) {
            return meta.__vnode__;
          }
          var _this$$scopedSlots$ty = _this.$scopedSlots[type]({
              configs: meta
            }),
            _this$$scopedSlots$ty2 = _slicedToArray(_this$$scopedSlots$ty, 1),
            vnode = _this$$scopedSlots$ty2[0];
          if (_this.genVueComponentKey) {
            var k1 = _this.genVueComponentKey(meta.from.source);
            var k2 = _this.genVueComponentKey(meta.to.source);
            var k3 = meta.part;
            vnode.key = "".concat(k1, "-").concat(k2, "-").concat(k3);
          }
          meta.__vnode__ = vnode;
          return vnode;
        });
        return createElement('jflow-group', [].concat(_toConsumableArray(this.$slots["default"]), _toConsumableArray(vlinks)));
      },
      props: {
        configs: {
          type: Object,
          "default": function _default() {
            return {};
          }
        },
        visible: {
          type: Boolean,
          "default": true
        },
        source: {
          type: Object
        }
      },
      data: function data() {
        return {
          renderLinks: []
        };
      },
      watch: {
        configs: function configs(val, oldVal) {
          if (JSON.stringify(val) === JSON.stringify(oldVal)) {
            return;
          }
          this._jflowInstance.setConfig(val);
          // this._jflowInstance._jflow._render();
        },
        '$listeners': function $listeners(val, oldVal) {
          var _this2 = this;
          var news = [];
          var deletes = [];
          var vnew = Object.keys(val).map(function (e) {
            return {
              event: e,
              handler: val[e]
            };
          });
          var vold = Object.keys(oldVal).map(function (e) {
            return {
              event: e,
              handler: oldVal[e]
            };
          });
          vnew.forEach(function (v) {
            var hnew = v.handler;
            if (!vold.find(function (q) {
              return q.handler === hnew;
            })) {
              news.push(v);
            }
          });
          vold.forEach(function (v) {
            var hold = v.handler;
            if (!vnew.find(function (q) {
              return q.handler === hold;
            })) {
              deletes.push(v);
            }
          });
          news.forEach(function (v) {
            _this2._jflowInstance.addEventListener(v.event, v.handler);
          });
          deletes.forEach(function (v) {
            _this2._jflowInstance.removeEventListener(v.event, v.handler);
          });
        },
        visible: function visible(val) {
          this._jflowInstance.visible = val;
          // this._jflowInstance._belongs.recalculateUp();
          // this._jflowInstance._jflow._render();
        },
        source: function source(val) {
          this._jflowInstance._jflow.setRenderNodeBySource(val, this._jflowInstance);
        }
      },
      created: function created() {
        var _this3 = this;
        this._jflowInstance = new builder(this.configs);
        this._jflowInstance.visible = this.visible;
        Object.keys(this.$listeners).map(function (event) {
          var func = _this3.$listeners[event].bind(_this3);
          _this3._jflowInstance.addEventListener(event, func);
        });
        this.addToBelongStack(this._jflowInstance, this.source);
        this.genLinks();
      },
      mounted: function mounted() {
        this._jflowInstance.recalculate();
      },
      updated: function updated() {
        this._jflowInstance.recalculateUp();
      },
      destroyed: function destroyed() {
        this._jflowInstance.destroy();
        this.removeFromBelongStack(this._jflowInstance);
      },
      methods: {
        genLinks: function genLinks() {
          this.renderLinks = this._jflowInstance._layout.flowLinkStack.slice();
        }
      }
    };
  }

  var JFLOW_NODES = [
  /**
   * JFlow {@link Point} 的 vue 封装 
   * @module j-point
   * @property {Point~PointConfigs} configs - 传给 Point 的配置
   * @property {Boolean} visible - 可见状态
   * @property {String} jflowId - 全局唯一ID，用于连线单元
   */
  'Point',
  /**
   * JFlow {@link Rectangle} 的 vue 封装 
   * @module j-rectangle
   * @property {Rectangle~RectangleConfigs|GroupTemplate~GroupConfigs} configs - 传给 Rectangle 的配置
   * @property {Boolean} visible - 可见状态
   * @property {String} jflowId - 全局唯一ID，用于连线单元
   */
  'Rectangle',
  /**
   * JFlow {@link Capsule} 的 vue 封装 
   * @module j-capsule
   * @property {(Capsule~CapsuleConfigs|GroupTemplate~GroupConfigs)} configs - 传给 Capsule 的配置
   * @property {Boolean} visible - 可见状态
   * @property {String} jflowId - 全局唯一ID，用于连线单元
   */
  'Capsule',
  /**
   * JFlow {@link Diamond} 的 vue 封装 
   * @module j-diamond
   * @property {(Diamond~DiamondConfigs|GroupTemplate~GroupConfigs)} configs - 传给 Diamond 的配置
   * @property {Boolean} visible - 可见状态
   * @property {String} jflowId - 全局唯一ID，用于连线单元
   */
  'Diamond',
  /**
   * JFlow {@link Rhombus} 的 vue 封装 
   * @module j-rhombus
   * @property {(Rhombus~RhombusConfigs|GroupTemplate~GroupConfigs)} configs - 传给 Diamond 的配置
   * @property {Boolean} visible - 可见状态
   * @property {String} jflowId - 全局唯一ID，用于连线单元
   */
  'Rhombus',
  /**
   * JFlow {@link Text} 的 vue 封装 
   * @module j-text
   * @property {Text~TextConfigs} configs - 传给 Text 的配置
   * @property {Boolean} visible - 可见状态
   * @property {String} jflowId - 全局唯一ID，用于连线单元
   */
  'Text',
  /**
   * JFlow {@link Icon} 的 vue 封装 
   * @module j-icon
   * @property {Icon~IconConfigs} configs - 传给 Icon 的配置
   * @property {Boolean} visible - 可见状态
   * @property {String} jflowId - 全局唯一ID，用于连线单元
   */
  'Icon', 'ShadowDom', 'TextEditor'];
  /**
   * @typedef {BezierLink~Configs} j-bezier-link~Configs
   * @property {String} from   - 起始单元 jflowId
   * @property {String} to     - 终止单元 jflowId
   */
  var JFLOW_LINKS = ['Link', 'PolyLink',
  /**
   * JFlow {@link BezierLink} 的 vue 封装 
   * @module j-bezier-link
   * @property {BezierLink~Configs} configs - 传给 BezierLink 的配置
   */
  'BezierLink'];
  var JFLOW_GROUPS = [
  /**
   * JFlow {@link CapsuleGroup} 的 vue 封装 
   * @module j-capsule-group
   * @property {(Capsule~CapsuleConfigs|GroupTemplate~GroupConfigs)} configs - 传给 CapsuleGroup 的配置
   * @property {Boolean} visible - 可见状态
   * @property {String} jflowId - 全局唯一ID，用于连线单元
   */
  'CapsuleGroup',
  /**
   * JFlow {@link CapsuleVerticalGroup} 的 vue 封装 
   * @module j-capsule-vertical-group
   * @property {(Capsule~CapsuleConfigs|GroupTemplate~GroupConfigs)} configs - 传给 CapsuleVerticalGroup 的配置
   * @property {Boolean} visible - 可见状态
   * @property {String} jflowId - 全局唯一ID，用于连线单元
   */
  'CapsuleVerticalGroup',
  /**
   * JFlow {@link DiamondGroup} 的 vue 封装 
   * @module j-diamond-group
   * @property {(Diamond~DiamondConfigs|GroupTemplate~GroupConfigs)} configs - 传给 DiamondGroup 的配置
   * @property {Boolean} visible - 可见状态
   * @property {String} jflowId - 全局唯一ID，用于连线单元
   */
  'DiamondGroup',
  /**
   * JFlow {@link DiamondVerticalGroup} 的 vue 封装 
   * @module j-diamond-vertical-group
   * @property {(Diamond~DiamondConfigs|GroupTemplate~GroupConfigs)} configs - 传给 DiamondVerticalGroup 的配置
   * @property {Boolean} visible - 可见状态
   * @property {String} jflowId - 全局唯一ID，用于连线单元
   */
  'DiamondVerticalGroup',
  /**
   * JFlow {@link RhombusGroup} 的 vue 封装 
   * @module j-rhombus-group
   * @property {(Rhombus~RhombusConfigs|GroupTemplate~GroupConfigs)} configs - 传给 RhombusGroup 的配置
   * @property {Boolean} visible - 可见状态
   * @property {String} jflowId - 全局唯一ID，用于连线单元
   */
  'RhombusGroup', 'PointGroup', 'ScrollGroup'];
  var components = [{
    name: 'Jflow',
    component: JFlowComponent
  }, {
    /**
     * JFlow {@link RectangleGroup} 的 vue 封装 
     * @module j-group
     * @property {RectangleGroup~RectangleGroupConfigs} configs - 传给 RectangleGroup 的配置
     */
    name: 'Group',
    component: JFlowGroup('Group')
  }].concat(_toConsumableArray(JFLOW_GROUPS.map(function (name) {
    return {
      name: name,
      component: JFlowGroup(name)
    };
  })), _toConsumableArray(JFLOW_NODES.map(function (name) {
    return {
      name: name,
      component: JFlowInstance(name)
    };
  })), _toConsumableArray(JFLOW_LINKS.map(function (name) {
    return {
      name: name,
      component: JFlowLink(name)
    };
  })), [{
    name: 'TextGroup',
    component: JFlowTextGroup
  }]);
  var componentPrefix = 'j';
  customElements.define('jflow-group', /*#__PURE__*/function (_HTMLElement) {
    _inherits(_class, _HTMLElement);
    var _super = _createSuper(_class);
    function _class() {
      var _this;
      _classCallCheck(this, _class);
      _this = _super.call(this);
      _this.attachShadow({
        mode: 'open'
      });
      return _this;
    }
    return _createClass(_class);
  }( /*#__PURE__*/_wrapNativeSuper(HTMLElement)));
  /**
   * @module JFlowVuePlugin 
   */
  var JFlowVuePlugin = {
    /**
     * 安装 JFlowVuePlugin
     * @function
     * @param {Vue} Vue - Vue
     * @param {Object} options - Vue plugin 配置
     * @param {string} options.prefix - 组件前缀，默认是 j
     * @param {Object} options.custom - 自定义组件，形式为 { key: {@link:Instance} }
     */
    install: function install(Vue) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var prefixToUse = componentPrefix;
      if (options && options.prefix) {
        prefixToUse = options.prefix;
      }
      components.forEach(function (k) {
        Vue.component("".concat(prefixToUse).concat(k.name), k.component);
      });
      if (options.customInstance) {
        Object.keys(options.customInstance).forEach(function (name) {
          Vue.component("".concat(prefixToUse).concat(name), JFlowInstance(options.customInstance[name]));
        });
      }
      if (options.customGroups) {
        Object.keys(options.customGroups).forEach(function (name) {
          // console.log(`${prefixToUse}${name}` )
          Vue.component("".concat(prefixToUse).concat(name), JFlowGroup(options.customGroups[name]));
        });
      }
      if (options.customLink) {
        Object.keys(options.customLink).forEach(function (name) {
          // console.log(`${prefixToUse}${name}` )
          Vue.component("".concat(prefixToUse).concat(name), JFlowLink(options.customLink[name]));
        });
      }
    }
  };

  exports.JFlowLinkGroup = JFlowLinkGroup;
  exports.JFlowVuePlugin = JFlowVuePlugin;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
