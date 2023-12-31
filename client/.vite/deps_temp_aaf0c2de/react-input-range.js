import {
  require_prop_types
} from "./chunk-UT3L2EY2.js";
import {
  __commonJS,
  require_react
} from "./chunk-HS7GO4I2.js";

// node_modules/autobind-decorator/lib/index.js
var require_lib = __commonJS({
  "node_modules/autobind-decorator/lib/index.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = autobind;
    function autobind() {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      if (args.length === 1) {
        return boundClass.apply(void 0, args);
      } else {
        return boundMethod.apply(void 0, args);
      }
    }
    function boundClass(target) {
      var keys = void 0;
      if (typeof Reflect !== "undefined" && typeof Reflect.ownKeys === "function") {
        keys = Reflect.ownKeys(target.prototype);
      } else {
        keys = Object.getOwnPropertyNames(target.prototype);
        if (typeof Object.getOwnPropertySymbols === "function") {
          keys = keys.concat(Object.getOwnPropertySymbols(target.prototype));
        }
      }
      keys.forEach(function(key) {
        if (key === "constructor") {
          return;
        }
        var descriptor = Object.getOwnPropertyDescriptor(target.prototype, key);
        if (typeof descriptor.value === "function") {
          Object.defineProperty(target.prototype, key, boundMethod(target, key, descriptor));
        }
      });
      return target;
    }
    function boundMethod(target, key, descriptor) {
      var fn = descriptor.value;
      if (typeof fn !== "function") {
        throw new Error("@autobind decorator can only be applied to methods not: " + typeof fn);
      }
      var definingProperty = false;
      return {
        configurable: true,
        get: function get() {
          if (definingProperty || this === target.prototype || this.hasOwnProperty(key)) {
            return fn;
          }
          var boundFn = fn.bind(this);
          definingProperty = true;
          Object.defineProperty(this, key, {
            value: boundFn,
            configurable: true,
            writable: true
          });
          definingProperty = false;
          return boundFn;
        }
      };
    }
    module.exports = exports["default"];
  }
});

// node_modules/react-input-range/lib/js/utils/captialize.js
var require_captialize = __commonJS({
  "node_modules/react-input-range/lib/js/utils/captialize.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = captialize;
    function captialize(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
    module.exports = exports["default"];
  }
});

// node_modules/react-input-range/lib/js/utils/clamp.js
var require_clamp = __commonJS({
  "node_modules/react-input-range/lib/js/utils/clamp.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = clamp;
    function clamp(value, min, max) {
      return Math.min(Math.max(value, min), max);
    }
    module.exports = exports["default"];
  }
});

// node_modules/react-input-range/lib/js/utils/distance-to.js
var require_distance_to = __commonJS({
  "node_modules/react-input-range/lib/js/utils/distance-to.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = distanceTo;
    function distanceTo(pointA, pointB) {
      var xDiff = Math.pow(pointB.x - pointA.x, 2);
      var yDiff = Math.pow(pointB.y - pointA.y, 2);
      return Math.sqrt(xDiff + yDiff);
    }
    module.exports = exports["default"];
  }
});

// node_modules/react-input-range/lib/js/utils/is-defined.js
var require_is_defined = __commonJS({
  "node_modules/react-input-range/lib/js/utils/is-defined.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isDefined;
    function isDefined(value) {
      return value !== void 0 && value !== null;
    }
    module.exports = exports["default"];
  }
});

// node_modules/react-input-range/lib/js/utils/is-number.js
var require_is_number = __commonJS({
  "node_modules/react-input-range/lib/js/utils/is-number.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isNumber;
    function isNumber(value) {
      return typeof value === "number";
    }
    module.exports = exports["default"];
  }
});

// node_modules/react-input-range/lib/js/utils/is-object.js
var require_is_object = __commonJS({
  "node_modules/react-input-range/lib/js/utils/is-object.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
      return typeof obj;
    } : function(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    exports.default = isObject;
    function isObject(value) {
      return value !== null && (typeof value === "undefined" ? "undefined" : _typeof(value)) === "object";
    }
    module.exports = exports["default"];
  }
});

// node_modules/react-input-range/lib/js/utils/length.js
var require_length = __commonJS({
  "node_modules/react-input-range/lib/js/utils/length.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = length;
    function length(numA, numB) {
      return Math.abs(numA - numB);
    }
    module.exports = exports["default"];
  }
});

// node_modules/react-input-range/lib/js/utils/index.js
var require_utils = __commonJS({
  "node_modules/react-input-range/lib/js/utils/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _captialize = require_captialize();
    Object.defineProperty(exports, "captialize", {
      enumerable: true,
      get: function get() {
        return _interopRequireDefault(_captialize).default;
      }
    });
    var _clamp = require_clamp();
    Object.defineProperty(exports, "clamp", {
      enumerable: true,
      get: function get() {
        return _interopRequireDefault(_clamp).default;
      }
    });
    var _distanceTo = require_distance_to();
    Object.defineProperty(exports, "distanceTo", {
      enumerable: true,
      get: function get() {
        return _interopRequireDefault(_distanceTo).default;
      }
    });
    var _isDefined = require_is_defined();
    Object.defineProperty(exports, "isDefined", {
      enumerable: true,
      get: function get() {
        return _interopRequireDefault(_isDefined).default;
      }
    });
    var _isNumber = require_is_number();
    Object.defineProperty(exports, "isNumber", {
      enumerable: true,
      get: function get() {
        return _interopRequireDefault(_isNumber).default;
      }
    });
    var _isObject = require_is_object();
    Object.defineProperty(exports, "isObject", {
      enumerable: true,
      get: function get() {
        return _interopRequireDefault(_isObject).default;
      }
    });
    var _length = require_length();
    Object.defineProperty(exports, "length", {
      enumerable: true,
      get: function get() {
        return _interopRequireDefault(_length).default;
      }
    });
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
  }
});

// node_modules/react-input-range/lib/js/input-range/value-transformer.js
var require_value_transformer = __commonJS({
  "node_modules/react-input-range/lib/js/input-range/value-transformer.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _extends = Object.assign || function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    exports.getPercentageFromPosition = getPercentageFromPosition;
    exports.getValueFromPosition = getValueFromPosition;
    exports.getValueFromProps = getValueFromProps;
    exports.getPercentageFromValue = getPercentageFromValue;
    exports.getPercentagesFromValues = getPercentagesFromValues;
    exports.getPositionFromValue = getPositionFromValue;
    exports.getPositionsFromValues = getPositionsFromValues;
    exports.getPositionFromEvent = getPositionFromEvent;
    exports.getStepValueFromValue = getStepValueFromValue;
    var _utils = require_utils();
    function getPercentageFromPosition(position, clientRect) {
      var length = clientRect.width;
      var sizePerc = position.x / length;
      return sizePerc || 0;
    }
    function getValueFromPosition(position, minValue, maxValue, clientRect) {
      var sizePerc = getPercentageFromPosition(position, clientRect);
      var valueDiff = maxValue - minValue;
      return minValue + valueDiff * sizePerc;
    }
    function getValueFromProps(props, isMultiValue) {
      if (isMultiValue) {
        return _extends({}, props.value);
      }
      return {
        min: props.minValue,
        max: props.value
      };
    }
    function getPercentageFromValue(value, minValue, maxValue) {
      var validValue = (0, _utils.clamp)(value, minValue, maxValue);
      var valueDiff = maxValue - minValue;
      var valuePerc = (validValue - minValue) / valueDiff;
      return valuePerc || 0;
    }
    function getPercentagesFromValues(values, minValue, maxValue) {
      return {
        min: getPercentageFromValue(values.min, minValue, maxValue),
        max: getPercentageFromValue(values.max, minValue, maxValue)
      };
    }
    function getPositionFromValue(value, minValue, maxValue, clientRect) {
      var length = clientRect.width;
      var valuePerc = getPercentageFromValue(value, minValue, maxValue);
      var positionValue = valuePerc * length;
      return {
        x: positionValue,
        y: 0
      };
    }
    function getPositionsFromValues(values, minValue, maxValue, clientRect) {
      return {
        min: getPositionFromValue(values.min, minValue, maxValue, clientRect),
        max: getPositionFromValue(values.max, minValue, maxValue, clientRect)
      };
    }
    function getPositionFromEvent(event, clientRect) {
      var length = clientRect.width;
      var _ref = event.touches ? event.touches[0] : event, clientX = _ref.clientX;
      return {
        x: (0, _utils.clamp)(clientX - clientRect.left, 0, length),
        y: 0
      };
    }
    function getStepValueFromValue(value, valuePerStep) {
      return Math.round(value / valuePerStep) * valuePerStep;
    }
  }
});

// node_modules/react-input-range/lib/js/input-range/default-class-names.js
var require_default_class_names = __commonJS({
  "node_modules/react-input-range/lib/js/input-range/default-class-names.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var DEFAULT_CLASS_NAMES = {
      activeTrack: "input-range__track input-range__track--active",
      disabledInputRange: "input-range input-range--disabled",
      inputRange: "input-range",
      labelContainer: "input-range__label-container",
      maxLabel: "input-range__label input-range__label--max",
      minLabel: "input-range__label input-range__label--min",
      slider: "input-range__slider",
      sliderContainer: "input-range__slider-container",
      track: "input-range__track input-range__track--background",
      valueLabel: "input-range__label input-range__label--value"
    };
    exports.default = DEFAULT_CLASS_NAMES;
    module.exports = exports["default"];
  }
});

// node_modules/react-input-range/lib/js/input-range/label.js
var require_label = __commonJS({
  "node_modules/react-input-range/lib/js/input-range/label.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = Label;
    var _react = require_react();
    var _react2 = _interopRequireDefault(_react);
    var _propTypes = require_prop_types();
    var _propTypes2 = _interopRequireDefault(_propTypes);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function Label(props) {
      var labelValue = props.formatLabel ? props.formatLabel(props.children, props.type) : props.children;
      return _react2.default.createElement(
        "span",
        { className: props.classNames[props.type + "Label"] },
        _react2.default.createElement(
          "span",
          { className: props.classNames.labelContainer },
          labelValue
        )
      );
    }
    Label.propTypes = {
      children: _propTypes2.default.node.isRequired,
      classNames: _propTypes2.default.objectOf(_propTypes2.default.string).isRequired,
      formatLabel: _propTypes2.default.func,
      type: _propTypes2.default.string.isRequired
    };
    module.exports = exports["default"];
  }
});

// node_modules/react-input-range/lib/js/input-range/range-prop-type.js
var require_range_prop_type = __commonJS({
  "node_modules/react-input-range/lib/js/input-range/range-prop-type.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = rangePropType;
    var _utils = require_utils();
    function rangePropType(props) {
      var maxValue = props.maxValue, minValue = props.minValue;
      if (!(0, _utils.isNumber)(minValue) || !(0, _utils.isNumber)(maxValue)) {
        return new Error('"minValue" and "maxValue" must be a number');
      }
      if (minValue >= maxValue) {
        return new Error('"minValue" must be smaller than "maxValue"');
      }
    }
    module.exports = exports["default"];
  }
});

// node_modules/react-input-range/lib/js/input-range/value-prop-type.js
var require_value_prop_type = __commonJS({
  "node_modules/react-input-range/lib/js/input-range/value-prop-type.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = valuePropType;
    var _utils = require_utils();
    function valuePropType(props, propName) {
      var maxValue = props.maxValue, minValue = props.minValue;
      var value = props[propName];
      if (!(0, _utils.isNumber)(value) && (!(0, _utils.isObject)(value) || !(0, _utils.isNumber)(value.min) || !(0, _utils.isNumber)(value.max))) {
        return new Error('"' + propName + '" must be a number or a range object');
      }
      if ((0, _utils.isNumber)(value) && (value < minValue || value > maxValue)) {
        return new Error('"' + propName + '" must be in between "minValue" and "maxValue"');
      }
      if ((0, _utils.isObject)(value) && (value.min < minValue || value.min > maxValue || value.max < minValue || value.max > maxValue)) {
        return new Error('"' + propName + '" must be in between "minValue" and "maxValue"');
      }
    }
    module.exports = exports["default"];
  }
});

// node_modules/react-input-range/lib/js/input-range/slider.js
var require_slider = __commonJS({
  "node_modules/react-input-range/lib/js/input-range/slider.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _createClass = function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        if (protoProps)
          defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    var _class;
    var _react = require_react();
    var _react2 = _interopRequireDefault(_react);
    var _propTypes = require_prop_types();
    var _propTypes2 = _interopRequireDefault(_propTypes);
    var _autobindDecorator = require_lib();
    var _autobindDecorator2 = _interopRequireDefault(_autobindDecorator);
    var _label = require_label();
    var _label2 = _interopRequireDefault(_label);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
      if (superClass)
        Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }
    function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
      var desc = {};
      Object["keys"](descriptor).forEach(function(key) {
        desc[key] = descriptor[key];
      });
      desc.enumerable = !!desc.enumerable;
      desc.configurable = !!desc.configurable;
      if ("value" in desc || desc.initializer) {
        desc.writable = true;
      }
      desc = decorators.slice().reverse().reduce(function(desc2, decorator) {
        return decorator(target, property, desc2) || desc2;
      }, desc);
      if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = void 0;
      }
      if (desc.initializer === void 0) {
        Object["defineProperty"](target, property, desc);
        desc = null;
      }
      return desc;
    }
    var Slider = (_class = function(_React$Component) {
      _inherits(Slider2, _React$Component);
      _createClass(Slider2, null, [{
        key: "propTypes",
        /**
         * Accepted propTypes of Slider
         * @override
         * @return {Object}
         * @property {Function} ariaLabelledby
         * @property {Function} ariaControls
         * @property {Function} className
         * @property {Function} formatLabel
         * @property {Function} maxValue
         * @property {Function} minValue
         * @property {Function} onSliderDrag
         * @property {Function} onSliderKeyDown
         * @property {Function} percentage
         * @property {Function} type
         * @property {Function} value
         */
        get: function get() {
          return {
            ariaLabelledby: _propTypes2.default.string,
            ariaControls: _propTypes2.default.string,
            classNames: _propTypes2.default.objectOf(_propTypes2.default.string).isRequired,
            formatLabel: _propTypes2.default.func,
            maxValue: _propTypes2.default.number,
            minValue: _propTypes2.default.number,
            onSliderDrag: _propTypes2.default.func.isRequired,
            onSliderKeyDown: _propTypes2.default.func.isRequired,
            percentage: _propTypes2.default.number.isRequired,
            type: _propTypes2.default.string.isRequired,
            value: _propTypes2.default.number.isRequired
          };
        }
        /**
         * @param {Object} props
         * @param {string} [props.ariaLabelledby]
         * @param {string} [props.ariaControls]
         * @param {InputRangeClassNames} props.classNames
         * @param {Function} [props.formatLabel]
         * @param {number} [props.maxValue]
         * @param {number} [props.minValue]
         * @param {Function} props.onSliderKeyDown
         * @param {Function} props.onSliderDrag
         * @param {number} props.percentage
         * @param {number} props.type
         * @param {number} props.value
         */
      }]);
      function Slider2(props) {
        _classCallCheck(this, Slider2);
        var _this = _possibleConstructorReturn(this, (Slider2.__proto__ || Object.getPrototypeOf(Slider2)).call(this, props));
        _this.node = null;
        return _this;
      }
      _createClass(Slider2, [{
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          this.removeDocumentMouseMoveListener();
          this.removeDocumentMouseUpListener();
          this.removeDocumentTouchEndListener();
          this.removeDocumentTouchMoveListener();
        }
        /**
         * @private
         * @return {Object}
         */
      }, {
        key: "getStyle",
        value: function getStyle() {
          var perc = (this.props.percentage || 0) * 100;
          var style = {
            position: "absolute",
            left: perc + "%"
          };
          return style;
        }
        /**
         * Listen to mousemove event
         * @private
         * @return {void}
         */
      }, {
        key: "addDocumentMouseMoveListener",
        value: function addDocumentMouseMoveListener() {
          this.removeDocumentMouseMoveListener();
          this.node.ownerDocument.addEventListener("mousemove", this.handleMouseMove);
        }
        /**
         * Listen to mouseup event
         * @private
         * @return {void}
         */
      }, {
        key: "addDocumentMouseUpListener",
        value: function addDocumentMouseUpListener() {
          this.removeDocumentMouseUpListener();
          this.node.ownerDocument.addEventListener("mouseup", this.handleMouseUp);
        }
        /**
         * Listen to touchmove event
         * @private
         * @return {void}
         */
      }, {
        key: "addDocumentTouchMoveListener",
        value: function addDocumentTouchMoveListener() {
          this.removeDocumentTouchMoveListener();
          this.node.ownerDocument.addEventListener("touchmove", this.handleTouchMove);
        }
        /**
         * Listen to touchend event
         * @private
         * @return {void}
         */
      }, {
        key: "addDocumentTouchEndListener",
        value: function addDocumentTouchEndListener() {
          this.removeDocumentTouchEndListener();
          this.node.ownerDocument.addEventListener("touchend", this.handleTouchEnd);
        }
        /**
         * @private
         * @return {void}
         */
      }, {
        key: "removeDocumentMouseMoveListener",
        value: function removeDocumentMouseMoveListener() {
          this.node.ownerDocument.removeEventListener("mousemove", this.handleMouseMove);
        }
        /**
         * @private
         * @return {void}
         */
      }, {
        key: "removeDocumentMouseUpListener",
        value: function removeDocumentMouseUpListener() {
          this.node.ownerDocument.removeEventListener("mouseup", this.handleMouseUp);
        }
        /**
         * @private
         * @return {void}
         */
      }, {
        key: "removeDocumentTouchMoveListener",
        value: function removeDocumentTouchMoveListener() {
          this.node.ownerDocument.removeEventListener("touchmove", this.handleTouchMove);
        }
        /**
         * @private
         * @return {void}
         */
      }, {
        key: "removeDocumentTouchEndListener",
        value: function removeDocumentTouchEndListener() {
          this.node.ownerDocument.removeEventListener("touchend", this.handleTouchEnd);
        }
        /**
         * @private
         * @return {void}
         */
      }, {
        key: "handleMouseDown",
        value: function handleMouseDown() {
          this.addDocumentMouseMoveListener();
          this.addDocumentMouseUpListener();
        }
        /**
         * @private
         * @return {void}
         */
      }, {
        key: "handleMouseUp",
        value: function handleMouseUp() {
          this.removeDocumentMouseMoveListener();
          this.removeDocumentMouseUpListener();
        }
        /**
         * @private
         * @param {SyntheticEvent} event
         * @return {void}
         */
      }, {
        key: "handleMouseMove",
        value: function handleMouseMove(event) {
          this.props.onSliderDrag(event, this.props.type);
        }
        /**
         * @private
         * @return {void}
         */
      }, {
        key: "handleTouchStart",
        value: function handleTouchStart() {
          this.addDocumentTouchEndListener();
          this.addDocumentTouchMoveListener();
        }
        /**
         * @private
         * @param {SyntheticEvent} event
         * @return {void}
         */
      }, {
        key: "handleTouchMove",
        value: function handleTouchMove(event) {
          this.props.onSliderDrag(event, this.props.type);
        }
        /**
         * @private
         * @return {void}
         */
      }, {
        key: "handleTouchEnd",
        value: function handleTouchEnd() {
          this.removeDocumentTouchMoveListener();
          this.removeDocumentTouchEndListener();
        }
        /**
         * @private
         * @param {SyntheticEvent} event
         * @return {void}
         */
      }, {
        key: "handleKeyDown",
        value: function handleKeyDown(event) {
          this.props.onSliderKeyDown(event, this.props.type);
        }
        /**
         * @override
         * @return {JSX.Element}
         */
      }, {
        key: "render",
        value: function render() {
          var _this2 = this;
          var style = this.getStyle();
          return _react2.default.createElement(
            "span",
            {
              className: this.props.classNames.sliderContainer,
              ref: function ref(node) {
                _this2.node = node;
              },
              style
            },
            _react2.default.createElement(
              _label2.default,
              {
                classNames: this.props.classNames,
                formatLabel: this.props.formatLabel,
                type: "value"
              },
              this.props.value
            ),
            _react2.default.createElement("div", {
              "aria-labelledby": this.props.ariaLabelledby,
              "aria-controls": this.props.ariaControls,
              "aria-valuemax": this.props.maxValue,
              "aria-valuemin": this.props.minValue,
              "aria-valuenow": this.props.value,
              className: this.props.classNames.slider,
              draggable: "false",
              onKeyDown: this.handleKeyDown,
              onMouseDown: this.handleMouseDown,
              onTouchStart: this.handleTouchStart,
              role: "slider",
              tabIndex: "0"
            })
          );
        }
      }]);
      return Slider2;
    }(_react2.default.Component), _applyDecoratedDescriptor(_class.prototype, "handleMouseDown", [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, "handleMouseDown"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "handleMouseUp", [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, "handleMouseUp"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "handleMouseMove", [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, "handleMouseMove"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "handleTouchStart", [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, "handleTouchStart"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "handleTouchMove", [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, "handleTouchMove"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "handleTouchEnd", [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, "handleTouchEnd"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "handleKeyDown", [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, "handleKeyDown"), _class.prototype), _class);
    exports.default = Slider;
    module.exports = exports["default"];
  }
});

// node_modules/react-input-range/lib/js/input-range/track.js
var require_track = __commonJS({
  "node_modules/react-input-range/lib/js/input-range/track.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _createClass = function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        if (protoProps)
          defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    var _class;
    var _react = require_react();
    var _react2 = _interopRequireDefault(_react);
    var _propTypes = require_prop_types();
    var _propTypes2 = _interopRequireDefault(_propTypes);
    var _autobindDecorator = require_lib();
    var _autobindDecorator2 = _interopRequireDefault(_autobindDecorator);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
      if (superClass)
        Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }
    function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
      var desc = {};
      Object["keys"](descriptor).forEach(function(key) {
        desc[key] = descriptor[key];
      });
      desc.enumerable = !!desc.enumerable;
      desc.configurable = !!desc.configurable;
      if ("value" in desc || desc.initializer) {
        desc.writable = true;
      }
      desc = decorators.slice().reverse().reduce(function(desc2, decorator) {
        return decorator(target, property, desc2) || desc2;
      }, desc);
      if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = void 0;
      }
      if (desc.initializer === void 0) {
        Object["defineProperty"](target, property, desc);
        desc = null;
      }
      return desc;
    }
    var Track = (_class = function(_React$Component) {
      _inherits(Track2, _React$Component);
      _createClass(Track2, null, [{
        key: "propTypes",
        /**
         * @override
         * @return {Object}
         * @property {Function} children
         * @property {Function} classNames
         * @property {Boolean} draggableTrack
         * @property {Function} onTrackDrag
         * @property {Function} onTrackMouseDown
         * @property {Function} percentages
         */
        get: function get() {
          return {
            children: _propTypes2.default.node.isRequired,
            classNames: _propTypes2.default.objectOf(_propTypes2.default.string).isRequired,
            draggableTrack: _propTypes2.default.bool,
            onTrackDrag: _propTypes2.default.func,
            onTrackMouseDown: _propTypes2.default.func.isRequired,
            percentages: _propTypes2.default.objectOf(_propTypes2.default.number).isRequired
          };
        }
        /**
         * @param {Object} props
         * @param {InputRangeClassNames} props.classNames
         * @param {Boolean} props.draggableTrack
         * @param {Function} props.onTrackDrag
         * @param {Function} props.onTrackMouseDown
         * @param {number} props.percentages
         */
      }]);
      function Track2(props) {
        _classCallCheck(this, Track2);
        var _this = _possibleConstructorReturn(this, (Track2.__proto__ || Object.getPrototypeOf(Track2)).call(this, props));
        _this.node = null;
        _this.trackDragEvent = null;
        return _this;
      }
      _createClass(Track2, [{
        key: "getClientRect",
        value: function getClientRect() {
          return this.node.getBoundingClientRect();
        }
        /**
         * @private
         * @return {Object} CSS styles
         */
      }, {
        key: "getActiveTrackStyle",
        value: function getActiveTrackStyle() {
          var width = (this.props.percentages.max - this.props.percentages.min) * 100 + "%";
          var left = this.props.percentages.min * 100 + "%";
          return { left, width };
        }
        /**
         * Listen to mousemove event
         * @private
         * @return {void}
         */
      }, {
        key: "addDocumentMouseMoveListener",
        value: function addDocumentMouseMoveListener() {
          this.removeDocumentMouseMoveListener();
          this.node.ownerDocument.addEventListener("mousemove", this.handleMouseMove);
        }
        /**
         * Listen to mouseup event
         * @private
         * @return {void}
         */
      }, {
        key: "addDocumentMouseUpListener",
        value: function addDocumentMouseUpListener() {
          this.removeDocumentMouseUpListener();
          this.node.ownerDocument.addEventListener("mouseup", this.handleMouseUp);
        }
        /**
         * @private
         * @return {void}
         */
      }, {
        key: "removeDocumentMouseMoveListener",
        value: function removeDocumentMouseMoveListener() {
          this.node.ownerDocument.removeEventListener("mousemove", this.handleMouseMove);
        }
        /**
         * @private
         * @return {void}
         */
      }, {
        key: "removeDocumentMouseUpListener",
        value: function removeDocumentMouseUpListener() {
          this.node.ownerDocument.removeEventListener("mouseup", this.handleMouseUp);
        }
        /**
         * @private
         * @param {SyntheticEvent} event
         * @return {void}
         */
      }, {
        key: "handleMouseMove",
        value: function handleMouseMove(event) {
          if (!this.props.draggableTrack) {
            return;
          }
          if (this.trackDragEvent !== null) {
            this.props.onTrackDrag(event, this.trackDragEvent);
          }
          this.trackDragEvent = event;
        }
        /**
         * @private
         * @return {void}
         */
      }, {
        key: "handleMouseUp",
        value: function handleMouseUp() {
          if (!this.props.draggableTrack) {
            return;
          }
          this.removeDocumentMouseMoveListener();
          this.removeDocumentMouseUpListener();
          this.trackDragEvent = null;
        }
        /**
         * @private
         * @param {SyntheticEvent} event - User event
         */
      }, {
        key: "handleMouseDown",
        value: function handleMouseDown(event) {
          var clientX = event.touches ? event.touches[0].clientX : event.clientX;
          var trackClientRect = this.getClientRect();
          var position = {
            x: clientX - trackClientRect.left,
            y: 0
          };
          this.props.onTrackMouseDown(event, position);
          if (this.props.draggableTrack) {
            this.addDocumentMouseMoveListener();
            this.addDocumentMouseUpListener();
          }
        }
        /**
         * @private
         * @param {SyntheticEvent} event - User event
         */
      }, {
        key: "handleTouchStart",
        value: function handleTouchStart(event) {
          event.preventDefault();
          this.handleMouseDown(event);
        }
        /**
         * @override
         * @return {JSX.Element}
         */
      }, {
        key: "render",
        value: function render() {
          var _this2 = this;
          var activeTrackStyle = this.getActiveTrackStyle();
          return _react2.default.createElement(
            "div",
            {
              className: this.props.classNames.track,
              onMouseDown: this.handleMouseDown,
              onTouchStart: this.handleTouchStart,
              ref: function ref(node) {
                _this2.node = node;
              }
            },
            _react2.default.createElement("div", {
              style: activeTrackStyle,
              className: this.props.classNames.activeTrack
            }),
            this.props.children
          );
        }
      }]);
      return Track2;
    }(_react2.default.Component), _applyDecoratedDescriptor(_class.prototype, "handleMouseMove", [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, "handleMouseMove"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "handleMouseUp", [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, "handleMouseUp"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "handleMouseDown", [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, "handleMouseDown"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "handleTouchStart", [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, "handleTouchStart"), _class.prototype), _class);
    exports.default = Track;
    module.exports = exports["default"];
  }
});

// node_modules/react-input-range/lib/js/input-range/key-codes.js
var require_key_codes = __commonJS({
  "node_modules/react-input-range/lib/js/input-range/key-codes.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var DOWN_ARROW = exports.DOWN_ARROW = 40;
    var LEFT_ARROW = exports.LEFT_ARROW = 37;
    var RIGHT_ARROW = exports.RIGHT_ARROW = 39;
    var UP_ARROW = exports.UP_ARROW = 38;
  }
});

// node_modules/react-input-range/lib/js/input-range/input-range.js
var require_input_range = __commonJS({
  "node_modules/react-input-range/lib/js/input-range/input-range.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _createClass = function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        if (protoProps)
          defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    var _class;
    var _react = require_react();
    var _react2 = _interopRequireDefault(_react);
    var _propTypes = require_prop_types();
    var _propTypes2 = _interopRequireDefault(_propTypes);
    var _autobindDecorator = require_lib();
    var _autobindDecorator2 = _interopRequireDefault(_autobindDecorator);
    var _valueTransformer = require_value_transformer();
    var valueTransformer = _interopRequireWildcard(_valueTransformer);
    var _defaultClassNames = require_default_class_names();
    var _defaultClassNames2 = _interopRequireDefault(_defaultClassNames);
    var _label = require_label();
    var _label2 = _interopRequireDefault(_label);
    var _rangePropType = require_range_prop_type();
    var _rangePropType2 = _interopRequireDefault(_rangePropType);
    var _valuePropType = require_value_prop_type();
    var _valuePropType2 = _interopRequireDefault(_valuePropType);
    var _slider = require_slider();
    var _slider2 = _interopRequireDefault(_slider);
    var _track = require_track();
    var _track2 = _interopRequireDefault(_track);
    var _utils = require_utils();
    var _keyCodes = require_key_codes();
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) {
        return obj;
      } else {
        var newObj = {};
        if (obj != null) {
          for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key))
              newObj[key] = obj[key];
          }
        }
        newObj.default = obj;
        return newObj;
      }
    }
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
      if (superClass)
        Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }
    function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
      var desc = {};
      Object["keys"](descriptor).forEach(function(key) {
        desc[key] = descriptor[key];
      });
      desc.enumerable = !!desc.enumerable;
      desc.configurable = !!desc.configurable;
      if ("value" in desc || desc.initializer) {
        desc.writable = true;
      }
      desc = decorators.slice().reverse().reduce(function(desc2, decorator) {
        return decorator(target, property, desc2) || desc2;
      }, desc);
      if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = void 0;
      }
      if (desc.initializer === void 0) {
        Object["defineProperty"](target, property, desc);
        desc = null;
      }
      return desc;
    }
    var InputRange = (_class = function(_React$Component) {
      _inherits(InputRange2, _React$Component);
      _createClass(InputRange2, null, [{
        key: "propTypes",
        /**
         * @ignore
         * @override
         * @return {Object}
         */
        get: function get() {
          return {
            allowSameValues: _propTypes2.default.bool,
            ariaLabelledby: _propTypes2.default.string,
            ariaControls: _propTypes2.default.string,
            classNames: _propTypes2.default.objectOf(_propTypes2.default.string),
            disabled: _propTypes2.default.bool,
            draggableTrack: _propTypes2.default.bool,
            formatLabel: _propTypes2.default.func,
            maxValue: _rangePropType2.default,
            minValue: _rangePropType2.default,
            name: _propTypes2.default.string,
            onChangeStart: _propTypes2.default.func,
            onChange: _propTypes2.default.func.isRequired,
            onChangeComplete: _propTypes2.default.func,
            step: _propTypes2.default.number,
            value: _valuePropType2.default
          };
        }
        /**
         * @ignore
         * @override
         * @return {Object}
         */
      }, {
        key: "defaultProps",
        get: function get() {
          return {
            allowSameValues: false,
            classNames: _defaultClassNames2.default,
            disabled: false,
            maxValue: 10,
            minValue: 0,
            step: 1
          };
        }
        /**
         * @param {Object} props
         * @param {boolean} [props.allowSameValues]
         * @param {string} [props.ariaLabelledby]
         * @param {string} [props.ariaControls]
         * @param {InputRangeClassNames} [props.classNames]
         * @param {boolean} [props.disabled = false]
         * @param {Function} [props.formatLabel]
         * @param {number|Range} [props.maxValue = 10]
         * @param {number|Range} [props.minValue = 0]
         * @param {string} [props.name]
         * @param {string} props.onChange
         * @param {Function} [props.onChangeComplete]
         * @param {Function} [props.onChangeStart]
         * @param {number} [props.step = 1]
         * @param {number|Range} props.value
         */
      }]);
      function InputRange2(props) {
        _classCallCheck(this, InputRange2);
        var _this = _possibleConstructorReturn(this, (InputRange2.__proto__ || Object.getPrototypeOf(InputRange2)).call(this, props));
        _this.startValue = null;
        _this.node = null;
        _this.trackNode = null;
        _this.isSliderDragging = false;
        _this.lastKeyMoved = null;
        return _this;
      }
      _createClass(InputRange2, [{
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          this.removeDocumentMouseUpListener();
          this.removeDocumentTouchEndListener();
        }
        /**
         * Return the CSS class name of the component
         * @private
         * @return {string}
         */
      }, {
        key: "getComponentClassName",
        value: function getComponentClassName() {
          if (!this.props.disabled) {
            return this.props.classNames.inputRange;
          }
          return this.props.classNames.disabledInputRange;
        }
        /**
         * Return the bounding rect of the track
         * @private
         * @return {ClientRect}
         */
      }, {
        key: "getTrackClientRect",
        value: function getTrackClientRect() {
          return this.trackNode.getClientRect();
        }
        /**
         * Return the slider key closest to a point
         * @private
         * @param {Point} position
         * @return {string}
         */
      }, {
        key: "getKeyByPosition",
        value: function getKeyByPosition(position) {
          var values = valueTransformer.getValueFromProps(this.props, this.isMultiValue());
          var positions = valueTransformer.getPositionsFromValues(values, this.props.minValue, this.props.maxValue, this.getTrackClientRect());
          if (this.isMultiValue()) {
            var distanceToMin = (0, _utils.distanceTo)(position, positions.min);
            var distanceToMax = (0, _utils.distanceTo)(position, positions.max);
            if (distanceToMin < distanceToMax) {
              return "min";
            }
          }
          return "max";
        }
        /**
         * Return all the slider keys
         * @private
         * @return {string[]}
         */
      }, {
        key: "getKeys",
        value: function getKeys() {
          if (this.isMultiValue()) {
            return ["min", "max"];
          }
          return ["max"];
        }
        /**
         * Return true if the difference between the new and the current value is
         * greater or equal to the step amount of the component
         * @private
         * @param {Range} values
         * @return {boolean}
         */
      }, {
        key: "hasStepDifference",
        value: function hasStepDifference(values) {
          var currentValues = valueTransformer.getValueFromProps(this.props, this.isMultiValue());
          return (0, _utils.length)(values.min, currentValues.min) >= this.props.step || (0, _utils.length)(values.max, currentValues.max) >= this.props.step;
        }
        /**
         * Return true if the component accepts a min and max value
         * @private
         * @return {boolean}
         */
      }, {
        key: "isMultiValue",
        value: function isMultiValue() {
          return (0, _utils.isObject)(this.props.value);
        }
        /**
         * Return true if the range is within the max and min value of the component
         * @private
         * @param {Range} values
         * @return {boolean}
         */
      }, {
        key: "isWithinRange",
        value: function isWithinRange(values) {
          if (this.isMultiValue()) {
            return values.min >= this.props.minValue && values.max <= this.props.maxValue && this.props.allowSameValues ? values.min <= values.max : values.min < values.max;
          }
          return values.max >= this.props.minValue && values.max <= this.props.maxValue;
        }
        /**
         * Return true if the new value should trigger a render
         * @private
         * @param {Range} values
         * @return {boolean}
         */
      }, {
        key: "shouldUpdate",
        value: function shouldUpdate(values) {
          return this.isWithinRange(values) && this.hasStepDifference(values);
        }
        /**
         * Update the position of a slider
         * @private
         * @param {string} key
         * @param {Point} position
         * @return {void}
         */
      }, {
        key: "updatePosition",
        value: function updatePosition(key, position) {
          var values = valueTransformer.getValueFromProps(this.props, this.isMultiValue());
          var positions = valueTransformer.getPositionsFromValues(values, this.props.minValue, this.props.maxValue, this.getTrackClientRect());
          positions[key] = position;
          this.lastKeyMoved = key;
          this.updatePositions(positions);
        }
        /**
         * Update the positions of multiple sliders
         * @private
         * @param {Object} positions
         * @param {Point} positions.min
         * @param {Point} positions.max
         * @return {void}
         */
      }, {
        key: "updatePositions",
        value: function updatePositions(positions) {
          var values = {
            min: valueTransformer.getValueFromPosition(positions.min, this.props.minValue, this.props.maxValue, this.getTrackClientRect()),
            max: valueTransformer.getValueFromPosition(positions.max, this.props.minValue, this.props.maxValue, this.getTrackClientRect())
          };
          var transformedValues = {
            min: valueTransformer.getStepValueFromValue(values.min, this.props.step),
            max: valueTransformer.getStepValueFromValue(values.max, this.props.step)
          };
          this.updateValues(transformedValues);
        }
        /**
         * Update the value of a slider
         * @private
         * @param {string} key
         * @param {number} value
         * @return {void}
         */
      }, {
        key: "updateValue",
        value: function updateValue(key, value) {
          var values = valueTransformer.getValueFromProps(this.props, this.isMultiValue());
          values[key] = value;
          this.updateValues(values);
        }
        /**
         * Update the values of multiple sliders
         * @private
         * @param {Range|number} values
         * @return {void}
         */
      }, {
        key: "updateValues",
        value: function updateValues(values) {
          if (!this.shouldUpdate(values)) {
            return;
          }
          this.props.onChange(this.isMultiValue() ? values : values.max);
        }
        /**
         * Increment the value of a slider by key name
         * @private
         * @param {string} key
         * @return {void}
         */
      }, {
        key: "incrementValue",
        value: function incrementValue(key) {
          var values = valueTransformer.getValueFromProps(this.props, this.isMultiValue());
          var value = values[key] + this.props.step;
          this.updateValue(key, value);
        }
        /**
         * Decrement the value of a slider by key name
         * @private
         * @param {string} key
         * @return {void}
         */
      }, {
        key: "decrementValue",
        value: function decrementValue(key) {
          var values = valueTransformer.getValueFromProps(this.props, this.isMultiValue());
          var value = values[key] - this.props.step;
          this.updateValue(key, value);
        }
        /**
         * Listen to mouseup event
         * @private
         * @return {void}
         */
      }, {
        key: "addDocumentMouseUpListener",
        value: function addDocumentMouseUpListener() {
          this.removeDocumentMouseUpListener();
          this.node.ownerDocument.addEventListener("mouseup", this.handleMouseUp);
        }
        /**
         * Listen to touchend event
         * @private
         * @return {void}
         */
      }, {
        key: "addDocumentTouchEndListener",
        value: function addDocumentTouchEndListener() {
          this.removeDocumentTouchEndListener();
          this.node.ownerDocument.addEventListener("touchend", this.handleTouchEnd);
        }
        /**
         * Stop listening to mouseup event
         * @private
         * @return {void}
         */
      }, {
        key: "removeDocumentMouseUpListener",
        value: function removeDocumentMouseUpListener() {
          this.node.ownerDocument.removeEventListener("mouseup", this.handleMouseUp);
        }
        /**
         * Stop listening to touchend event
         * @private
         * @return {void}
         */
      }, {
        key: "removeDocumentTouchEndListener",
        value: function removeDocumentTouchEndListener() {
          this.node.ownerDocument.removeEventListener("touchend", this.handleTouchEnd);
        }
        /**
         * Handle any "mousemove" event received by the slider
         * @private
         * @param {SyntheticEvent} event
         * @param {string} key
         * @return {void}
         */
      }, {
        key: "handleSliderDrag",
        value: function handleSliderDrag(event, key) {
          var _this2 = this;
          if (this.props.disabled) {
            return;
          }
          var position = valueTransformer.getPositionFromEvent(event, this.getTrackClientRect());
          this.isSliderDragging = true;
          requestAnimationFrame(function() {
            return _this2.updatePosition(key, position);
          });
        }
        /**
         * Handle any "mousemove" event received by the track
         * @private
         * @param {SyntheticEvent} event
         * @return {void}
         */
      }, {
        key: "handleTrackDrag",
        value: function handleTrackDrag(event, prevEvent) {
          if (this.props.disabled || !this.props.draggableTrack || this.isSliderDragging) {
            return;
          }
          var _props = this.props, maxValue = _props.maxValue, minValue = _props.minValue, _props$value = _props.value, max = _props$value.max, min = _props$value.min;
          var position = valueTransformer.getPositionFromEvent(event, this.getTrackClientRect());
          var value = valueTransformer.getValueFromPosition(position, minValue, maxValue, this.getTrackClientRect());
          var stepValue = valueTransformer.getStepValueFromValue(value, this.props.step);
          var prevPosition = valueTransformer.getPositionFromEvent(prevEvent, this.getTrackClientRect());
          var prevValue = valueTransformer.getValueFromPosition(prevPosition, minValue, maxValue, this.getTrackClientRect());
          var prevStepValue = valueTransformer.getStepValueFromValue(prevValue, this.props.step);
          var offset = prevStepValue - stepValue;
          var transformedValues = {
            min: min - offset,
            max: max - offset
          };
          this.updateValues(transformedValues);
        }
        /**
         * Handle any "keydown" event received by the slider
         * @private
         * @param {SyntheticEvent} event
         * @param {string} key
         * @return {void}
         */
      }, {
        key: "handleSliderKeyDown",
        value: function handleSliderKeyDown(event, key) {
          if (this.props.disabled) {
            return;
          }
          switch (event.keyCode) {
            case _keyCodes.LEFT_ARROW:
            case _keyCodes.DOWN_ARROW:
              event.preventDefault();
              this.decrementValue(key);
              break;
            case _keyCodes.RIGHT_ARROW:
            case _keyCodes.UP_ARROW:
              event.preventDefault();
              this.incrementValue(key);
              break;
            default:
              break;
          }
        }
        /**
         * Handle any "mousedown" event received by the track
         * @private
         * @param {SyntheticEvent} event
         * @param {Point} position
         * @return {void}
         */
      }, {
        key: "handleTrackMouseDown",
        value: function handleTrackMouseDown(event, position) {
          if (this.props.disabled) {
            return;
          }
          var _props2 = this.props, maxValue = _props2.maxValue, minValue = _props2.minValue, _props2$value = _props2.value, max = _props2$value.max, min = _props2$value.min;
          event.preventDefault();
          var value = valueTransformer.getValueFromPosition(position, minValue, maxValue, this.getTrackClientRect());
          var stepValue = valueTransformer.getStepValueFromValue(value, this.props.step);
          if (!this.props.draggableTrack || stepValue > max || stepValue < min) {
            this.updatePosition(this.getKeyByPosition(position), position);
          }
        }
        /**
         * Handle the start of any mouse/touch event
         * @private
         * @return {void}
         */
      }, {
        key: "handleInteractionStart",
        value: function handleInteractionStart() {
          if (this.props.onChangeStart) {
            this.props.onChangeStart(this.props.value);
          }
          if (this.props.onChangeComplete && !(0, _utils.isDefined)(this.startValue)) {
            this.startValue = this.props.value;
          }
        }
        /**
         * Handle the end of any mouse/touch event
         * @private
         * @return {void}
         */
      }, {
        key: "handleInteractionEnd",
        value: function handleInteractionEnd() {
          if (this.isSliderDragging) {
            this.isSliderDragging = false;
          }
          if (!this.props.onChangeComplete || !(0, _utils.isDefined)(this.startValue)) {
            return;
          }
          if (this.startValue !== this.props.value) {
            this.props.onChangeComplete(this.props.value);
          }
          this.startValue = null;
        }
        /**
         * Handle any "keydown" event received by the component
         * @private
         * @param {SyntheticEvent} event
         * @return {void}
         */
      }, {
        key: "handleKeyDown",
        value: function handleKeyDown(event) {
          this.handleInteractionStart(event);
        }
        /**
         * Handle any "keyup" event received by the component
         * @private
         * @param {SyntheticEvent} event
         * @return {void}
         */
      }, {
        key: "handleKeyUp",
        value: function handleKeyUp(event) {
          this.handleInteractionEnd(event);
        }
        /**
         * Handle any "mousedown" event received by the component
         * @private
         * @param {SyntheticEvent} event
         * @return {void}
         */
      }, {
        key: "handleMouseDown",
        value: function handleMouseDown(event) {
          this.handleInteractionStart(event);
          this.addDocumentMouseUpListener();
        }
        /**
         * Handle any "mouseup" event received by the component
         * @private
         * @param {SyntheticEvent} event
         */
      }, {
        key: "handleMouseUp",
        value: function handleMouseUp(event) {
          this.handleInteractionEnd(event);
          this.removeDocumentMouseUpListener();
        }
        /**
         * Handle any "touchstart" event received by the component
         * @private
         * @param {SyntheticEvent} event
         * @return {void}
         */
      }, {
        key: "handleTouchStart",
        value: function handleTouchStart(event) {
          this.handleInteractionStart(event);
          this.addDocumentTouchEndListener();
        }
        /**
         * Handle any "touchend" event received by the component
         * @private
         * @param {SyntheticEvent} event
         */
      }, {
        key: "handleTouchEnd",
        value: function handleTouchEnd(event) {
          this.handleInteractionEnd(event);
          this.removeDocumentTouchEndListener();
        }
        /**
         * Return JSX of sliders
         * @private
         * @return {JSX.Element}
         */
      }, {
        key: "renderSliders",
        value: function renderSliders() {
          var _this3 = this;
          var values = valueTransformer.getValueFromProps(this.props, this.isMultiValue());
          var percentages = valueTransformer.getPercentagesFromValues(values, this.props.minValue, this.props.maxValue);
          var keys = this.props.allowSameValues && this.lastKeyMoved === "min" ? this.getKeys().reverse() : this.getKeys();
          return keys.map(function(key) {
            var value = values[key];
            var percentage = percentages[key];
            var _props3 = _this3.props, maxValue = _props3.maxValue, minValue = _props3.minValue;
            if (key === "min") {
              maxValue = values.max;
            } else {
              minValue = values.min;
            }
            var slider = _react2.default.createElement(_slider2.default, {
              ariaLabelledby: _this3.props.ariaLabelledby,
              ariaControls: _this3.props.ariaControls,
              classNames: _this3.props.classNames,
              formatLabel: _this3.props.formatLabel,
              key,
              maxValue,
              minValue,
              onSliderDrag: _this3.handleSliderDrag,
              onSliderKeyDown: _this3.handleSliderKeyDown,
              percentage,
              type: key,
              value
            });
            return slider;
          });
        }
        /**
         * Return JSX of hidden inputs
         * @private
         * @return {JSX.Element}
         */
      }, {
        key: "renderHiddenInputs",
        value: function renderHiddenInputs() {
          var _this4 = this;
          if (!this.props.name) {
            return [];
          }
          var isMultiValue = this.isMultiValue();
          var values = valueTransformer.getValueFromProps(this.props, isMultiValue);
          return this.getKeys().map(function(key) {
            var value = values[key];
            var name = isMultiValue ? "" + _this4.props.name + (0, _utils.captialize)(key) : _this4.props.name;
            return _react2.default.createElement("input", { key, type: "hidden", name, value });
          });
        }
        /**
         * @ignore
         * @override
         * @return {JSX.Element}
         */
      }, {
        key: "render",
        value: function render() {
          var _this5 = this;
          var componentClassName = this.getComponentClassName();
          var values = valueTransformer.getValueFromProps(this.props, this.isMultiValue());
          var percentages = valueTransformer.getPercentagesFromValues(values, this.props.minValue, this.props.maxValue);
          return _react2.default.createElement(
            "div",
            {
              "aria-disabled": this.props.disabled,
              ref: function ref(node) {
                _this5.node = node;
              },
              className: componentClassName,
              onKeyDown: this.handleKeyDown,
              onKeyUp: this.handleKeyUp,
              onMouseDown: this.handleMouseDown,
              onTouchStart: this.handleTouchStart
            },
            _react2.default.createElement(
              _label2.default,
              {
                classNames: this.props.classNames,
                formatLabel: this.props.formatLabel,
                type: "min"
              },
              this.props.minValue
            ),
            _react2.default.createElement(
              _track2.default,
              {
                classNames: this.props.classNames,
                draggableTrack: this.props.draggableTrack,
                ref: function ref(trackNode) {
                  _this5.trackNode = trackNode;
                },
                percentages,
                onTrackDrag: this.handleTrackDrag,
                onTrackMouseDown: this.handleTrackMouseDown
              },
              this.renderSliders()
            ),
            _react2.default.createElement(
              _label2.default,
              {
                classNames: this.props.classNames,
                formatLabel: this.props.formatLabel,
                type: "max"
              },
              this.props.maxValue
            ),
            this.renderHiddenInputs()
          );
        }
      }]);
      return InputRange2;
    }(_react2.default.Component), _applyDecoratedDescriptor(_class.prototype, "handleSliderDrag", [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, "handleSliderDrag"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "handleTrackDrag", [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, "handleTrackDrag"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "handleSliderKeyDown", [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, "handleSliderKeyDown"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "handleTrackMouseDown", [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, "handleTrackMouseDown"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "handleInteractionStart", [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, "handleInteractionStart"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "handleInteractionEnd", [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, "handleInteractionEnd"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "handleKeyDown", [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, "handleKeyDown"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "handleKeyUp", [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, "handleKeyUp"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "handleMouseDown", [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, "handleMouseDown"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "handleMouseUp", [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, "handleMouseUp"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "handleTouchStart", [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, "handleTouchStart"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "handleTouchEnd", [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, "handleTouchEnd"), _class.prototype), _class);
    exports.default = InputRange;
    module.exports = exports["default"];
  }
});

// node_modules/react-input-range/lib/js/index.js
var require_js = __commonJS({
  "node_modules/react-input-range/lib/js/index.js"(exports, module) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _inputRange = require_input_range();
    var _inputRange2 = _interopRequireDefault(_inputRange);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    exports.default = _inputRange2.default;
    module.exports = exports["default"];
  }
});
export default require_js();
//# sourceMappingURL=react-input-range.js.map
