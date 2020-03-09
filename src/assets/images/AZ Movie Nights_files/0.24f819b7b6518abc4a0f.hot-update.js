webpackHotUpdate(0,{

/***/ "./src/components/Screens.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _Screens = __webpack_require__("./src/components/Screens.css");

var _Screens2 = _interopRequireDefault(_Screens);

var _screens = __webpack_require__("./src/assets/images/screens.jpg");

var _screens2 = _interopRequireDefault(_screens);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Screens() {

  return _react2.default.createElement(
    'div',
    { className: _Screens2.default.screensComponent },
    _react2.default.createElement(
      'div',
      { className: _Screens2.default.screensGridContainer },
      _react2.default.createElement(
        'div',
        { className: _Screens2.default.screensImageContainer },
        _react2.default.createElement('img', { className: _Screens2.default.screensImageStyling, src: _screens2.default }),
        _react2.default.createElement(
          'div',
          { className: _Screens2.default.reserveButtonContainer },
          _react2.default.createElement(
            'button',
            { id: _Screens2.default.reserveButton, type: 'button' },
            'Reserve Online'
          )
        )
      ),
      _react2.default.createElement(
        'div',
        { className: _Screens2.default.screensInfoContainer },
        _react2.default.createElement(
          'h1',
          { className: _Screens2.default.screensHeader },
          'Pick The Perfect Screen'
        ),
        _react2.default.createElement(
          'p',
          { className: _Screens2.default.screenDescription },
          'Entertain guests at your next outdoor party with a movie, video games, or a presentation that will surely impress. Our huge outdoor inflatable movie screens will be the "WOW" factor at any event! Choose your screen size and leave the rest to us.'
        ),
        _react2.default.createElement(
          'h3',
          { className: _Screens2.default.screenSizeTitle },
          'Smaller Screen:'
        ),
        _react2.default.createElement(
          'ul',
          { className: _Screens2.default.dimensionsList },
          _react2.default.createElement(
            'li',
            { className: _Screens2.default.dimensionsListElements },
            'Actual Dimensions: 12ft Width x 10ft Height'
          ),
          _react2.default.createElement(
            'li',
            { className: _Screens2.default.dimensionsListElements },
            'Viewable Area: 9ft x 5ft (124" Television Screen)'
          ),
          _react2.default.createElement(
            'li',
            { className: _Screens2.default.dimensionsListElements },
            ' ',
            _react2.default.createElement(
              'a',
              { id: 'dimensions', href: '#' },
              'Click for size scale'
            )
          )
        ),
        _react2.default.createElement(
          'h3',
          { className: _Screens2.default.screenSizeTitle },
          'Larger Screen:'
        ),
        _react2.default.createElement(
          'ul',
          { className: _Screens2.default.dimensionsList },
          _react2.default.createElement(
            'li',
            { className: _Screens2.default.dimensionsListElements },
            'Actuals Dimensions: 20ft Width x 9.8ft Height'
          ),
          _react2.default.createElement(
            'li',
            { className: _Screens2.default.dimensionsListElements },
            'Viewable Area: 16ft Width x 9ft Height'
          ),
          _react2.default.createElement(
            'li',
            { className: _Screens2.default.dimensionsListElements },
            ' ',
            _react2.default.createElement(
              'a',
              { id: 'dimensions', href: '#' },
              'Click for size scale'
            )
          )
        )
      )
    )
  );
}

var _default = Screens;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Screens, 'Screens', '/Users/trevormackin/Desktop/az-movie-nights/src/components/Screens.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/trevormackin/Desktop/az-movie-nights/src/components/Screens.jsx');
}();

;

/***/ })

})
//# sourceMappingURL=0.24f819b7b6518abc4a0f.hot-update.js.map