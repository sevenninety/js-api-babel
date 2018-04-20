define(["esri/Map", "esri/views/MapView"], function (_Map, _MapView) {
    "use strict";

    var _Map2 = _interopRequireDefault(_Map);

    var _MapView2 = _interopRequireDefault(_MapView);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var map = new _Map2.default({
        basemap: "streets-vector"
    });

    var view = new _MapView2.default({
        container: "viewDiv",
        map: map
    });
});
//# sourceMappingURL=main.js.map