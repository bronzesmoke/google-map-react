!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("react"),require("prop-types"),require("react-dom"),require("eventemitter3"),require("@googlemaps/js-api-loader"),require("@mapbox/point-geometry")):"function"==typeof define&&define.amd?define(["react","prop-types","react-dom","eventemitter3","@googlemaps/js-api-loader","@mapbox/point-geometry"],t):(e=e||self).googleMapReact=t(e.react,e.PropTypes,e.ReactDOM,e.eventemitter3,e.jsApiLoader,e.Point)}(this,function(e,t,o,n,r,i){var s="default"in e?e.default:e;function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e}).apply(this,arguments)}function p(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}t=t&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t,o=o&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o,n=n&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n,i=i&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i;var u={width:"100%",height:"100%",left:0,top:0,margin:0,padding:0,position:"absolute"},h=function(e){function t(){return e.apply(this,arguments)||this}p(t,e);var o=t.prototype;return o.shouldComponentUpdate=function(){return!1},o.render=function(){return s.createElement("div",{ref:this.props.registerChild,style:u})},t}(e.Component),c=function(e){function t(t){var o;return(o=e.call(this)||this).gmapInstance=t,o}p(t,e);var o=t.prototype;return o.getChildren=function(){return this.gmapInstance.props.children},o.getMousePosition=function(){return this.gmapInstance.mouse_},o.getUpdateCounter=function(){return this.gmapInstance.updateCounter_},o.dispose=function(){this.gmapInstance=null,this.removeAllListeners()},t}(n),d=function(e,t){for(var o=a({},e),n=0;n<t.length;n++){var r=t[n];r in o&&delete o[r]}return o},m=Object.prototype.hasOwnProperty;function g(e,t){return e===t?0!==e||0!==t||1/e==1/t:e!=e&&t!=t}function _(e,t){if(g(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;var o=Object.keys(e),n=Object.keys(t);if(o.length!==n.length)return!1;for(var r=0;r<o.length;r++)if(!m.call(t,o[r])||!g(e[o[r]],t[o[r]]))return!1;return!0}var f={width:"100%",height:"100%",left:0,top:0,margin:0,padding:0,position:"absolute"},v={width:0,height:0,left:0,top:0,backgroundColor:"transparent",position:"absolute"},M=function(e){function t(t){var n;return(n=e.call(this,t)||this)._getState=function(){return{children:n.props.dispatcher.getChildren(),updateCounter:n.props.dispatcher.getUpdateCounter()}},n._onChangeHandler=function(){if(n.dimensionsCache_){var e=(n.state.children||[]).length,t=n._getState();o.flushSync(function(){n.setState(t,function(){return(t.children||[]).length!==e&&n._onMouseChangeHandler()})})}},n._onChildClick=function(){n.props.onChildClick&&n.hoverChildProps_&&n.props.onChildClick(n.hoverKey_,n.hoverChildProps_)},n._onChildMouseDown=function(){n.props.onChildMouseDown&&n.hoverChildProps_&&n.props.onChildMouseDown(n.hoverKey_,n.hoverChildProps_)},n._onChildMouseEnter=function(e,t){n.dimensionsCache_&&(n.props.onChildMouseEnter&&n.props.onChildMouseEnter(e,t),n.hoverChildProps_=t,n.hoverKey_=e,n.setState({hoverKey:e}))},n._onChildMouseLeave=function(){if(n.dimensionsCache_){var e=n.hoverKey_;null!=e&&(n.props.onChildMouseLeave&&n.props.onChildMouseLeave(e,n.hoverChildProps_),n.hoverKey_=null,n.hoverChildProps_=null,n.setState({hoverKey:null}))}},n._onMouseAllow=function(e){e||n._onChildMouseLeave(),n.allowMouse_=e},n._onMouseChangeHandler=function(){n.allowMouse_&&n._onMouseChangeHandlerRaf()},n._onMouseChangeHandlerRaf=function(){if(n.dimensionsCache_){var e=n.props.dispatcher.getMousePosition();if(e){var t=[],o=n.props.getHoverDistance();if(s.Children.forEach(n.state.children,function(r,i){if(r&&(void 0!==r.props.latLng||void 0!==r.props.lat||void 0!==r.props.lng)){var s=null!=r.key?r.key:i,a=n.props.distanceToMouse(n.dimensionsCache_[s],e,r.props);a<o&&t.push({key:s,dist:a,props:r.props})}}),t.length){t.sort(function(e,t){return e.dist-t.dist});var r=t[0].key,i=t[0].props;n.hoverKey_!==r&&(n._onChildMouseLeave(),n._onChildMouseEnter(r,i))}else n._onChildMouseLeave()}else n._onChildMouseLeave()}},n._getDimensions=function(e){return n.dimensionsCache_[e]},n.dimensionsCache_={},n.hoverKey_=null,n.hoverChildProps_=null,n.allowMouse_=!0,n.state=a({},n._getState(),{hoverKey:null}),n}p(t,e);var n=t.prototype;return n.componentDidMount=function(){this.props.dispatcher.on("kON_CHANGE",this._onChangeHandler),this.props.dispatcher.on("kON_MOUSE_POSITION_CHANGE",this._onMouseChangeHandler),this.props.dispatcher.on("kON_CLICK",this._onChildClick),this.props.dispatcher.on("kON_MDOWN",this._onChildMouseDown)},n.shouldComponentUpdate=function(e,t){return!0===this.props.experimental?!_(this.props,e)||!_(d(this.state,["hoverKey"]),d(t,["hoverKey"])):!_(this.props,e)||!_(this.state,t)},n.componentWillUnmount=function(){this.props.dispatcher.removeListener("kON_CHANGE",this._onChangeHandler),this.props.dispatcher.removeListener("kON_MOUSE_POSITION_CHANGE",this._onMouseChangeHandler),this.props.dispatcher.removeListener("kON_CLICK",this._onChildClick),this.props.dispatcher.removeListener("kON_MDOWN",this._onChildMouseDown),this.dimensionsCache_=null},n.render=function(){var e=this,t=this.props.style||f;this.dimensionsCache_={};var o=s.Children.map(this.state.children,function(t,o){if(t){if(void 0===t.props.latLng&&void 0===t.props.lat&&void 0===t.props.lng)return s.cloneElement(t,{$geoService:e.props.geoService,$onMouseAllow:e._onMouseAllow,$prerender:e.props.prerender});var n=void 0!==t.props.latLng?t.props.latLng:{lat:t.props.lat,lng:t.props.lng},r=e.props.insideMapPanes?e.props.geoService.fromLatLngToDivPixel(n):e.props.geoService.fromLatLngToCenterPixel(n),i={left:r.x,top:r.y};if(void 0!==t.props.seLatLng||void 0!==t.props.seLat&&void 0!==t.props.seLng){var p=void 0!==t.props.seLatLng?t.props.seLatLng:{lat:t.props.seLat,lng:t.props.seLng},l=e.props.insideMapPanes?e.props.geoService.fromLatLngToDivPixel(p):e.props.geoService.fromLatLngToCenterPixel(p);i.width=l.x-r.x,i.height=l.y-r.y}var u=e.props.geoService.fromLatLngToContainerPixel(n),h=null!=t.key?t.key:o;return e.dimensionsCache_[h]=a({x:u.x,y:u.y},n),s.createElement("div",{key:h,style:a({},v,i),className:t.props.$markerHolderClassName},s.cloneElement(t,{$hover:h===e.state.hoverKey,$getDimensions:e._getDimensions,$dimensionKey:h,$geoService:e.props.geoService,$onMouseAllow:e._onMouseAllow,$prerender:e.props.prerender}))}});return s.createElement("div",{style:t},o)},t}(e.Component);M.propTypes={geoService:t.any,style:t.any,distanceToMouse:t.func,dispatcher:t.any,onChildClick:t.func,onChildMouseDown:t.func,onChildMouseLeave:t.func,onChildMouseEnter:t.func,getHoverDistance:t.func,insideMapPanes:t.bool,prerender:t.bool},M.defaultProps={insideMapPanes:!1,prerender:!1};var y={width:"50%",height:"50%",left:"50%",top:"50%",margin:0,padding:0,position:"absolute"};function C(e){return s.createElement("div",{style:y},s.createElement(M,a({},e,{prerender:!0})))}var w,L,b,D=new Promise(function(e){b=e}),O=function(e,t){if(!e)return D;if(L)return L;e.libraries||(e.libraries=[]);var o=[].concat(e.libraries);if(t&&(0!==o.length&&o.includes("visualization")||o.push("visualization"),console.warn("heatmapLibrary will be deprecated in the future. Please use { libraries: ['visualization'] } in bootstrapURLKeys property instead")),"production"!==process.env.NODE_ENV&&Object.keys(e).indexOf("callback")>-1){var n='"callback" key in bootstrapURLKeys is not allowed,\n                      use onGoogleApiLoaded property instead';throw console.error(n),new Error(n)}if("undefined"==typeof window)throw new Error("google map cannot be loaded outside browser env");var i=e.key,s=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t.indexOf(o=i[n])>=0||(r[o]=e[o]);return r}(e,["key"]);return w||(w=new r.Loader(a({apiKey:i||""},s,{libraries:o}))),L=w.load().then(function(){return b(window.google.maps),window.google.maps}),b(L),L};function z(e,t,o){var n=o-t;return e===o?e:((e-t)%n+n)%n+t}var k=function(){function e(e,t){if(isNaN(e)||isNaN(t))throw new Error("Invalid LatLng object: ("+e+", "+t+")");this.lat=+e,this.lng=+t}return e.prototype.wrap=function(){return new e(this.lat,z(this.lng,-180,180))},e}();k.convert=function(e){return e instanceof k?e:Array.isArray(e)?new k(e[0],e[1]):"lng"in e&&"lat"in e?new k(e.lat,e.lng):e};var x=function(){function e(e,t,o){this.tileSize=e||512,this._minZoom=t||0,this._maxZoom=o||52,this.latRange=[-85.05113,85.05113],this.width=0,this.height=0,this.zoom=0,this.center=new k(0,0),this.angle=0}var t,o=e.prototype;return o.zoomScale=function(e){return Math.pow(2,e)},o.scaleZoom=function(e){return Math.log(e)/Math.LN2},o.project=function(e,t){return new i(this.lngX(e.lng,t),this.latY(e.lat,t))},o.unproject=function(e,t){return new k(this.yLat(e.y,t),this.xLng(e.x,t))},o.lngX=function(e,t){return(180+e)*(t||this.worldSize)/360},o.latY=function(e,t){return(180-180/Math.PI*Math.log(Math.tan(Math.PI/4+e*Math.PI/360)))*(t||this.worldSize)/360},o.xLng=function(e,t){return 360*e/(t||this.worldSize)-180},o.yLat=function(e,t){return 360/Math.PI*Math.atan(Math.exp((180-360*e/(t||this.worldSize))*Math.PI/180))-90},o.locationPoint=function(e){var t=this.project(e);return this.centerPoint._sub(this.point._sub(t)._rotate(this.angle))},o.pointLocation=function(e){var t=this.centerPoint._sub(e)._rotate(-this.angle);return this.unproject(this.point.sub(t))},(t=[{key:"minZoom",get:function(){return this._minZoom},set:function(e){this._minZoom=e,this.zoom=Math.max(this.zoom,e)}},{key:"maxZoom",get:function(){return this._maxZoom},set:function(e){this._maxZoom=e,this.zoom=Math.min(this.zoom,e)}},{key:"worldSize",get:function(){return this.tileSize*this.scale}},{key:"centerPoint",get:function(){return new i(0,0)}},{key:"size",get:function(){return new i(this.width,this.height)}},{key:"bearing",get:function(){return-this.angle/Math.PI*180},set:function(e){this.angle=-z(e,-180,180)*Math.PI/180}},{key:"zoom",get:function(){return this._zoom},set:function(e){var t=Math.min(Math.max(e,this.minZoom),this.maxZoom);this._zoom=t,this.scale=this.zoomScale(t),this.tileZoom=Math.floor(t),this.zoomFraction=t-this.tileZoom}},{key:"x",get:function(){return this.lngX(this.center.lng)}},{key:"y",get:function(){return this.latY(this.center.lat)}},{key:"point",get:function(){return new i(this.x,this.y)}}])&&function(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}(e.prototype,t),e}(),S=function(){function e(e){this.hasSize_=!1,this.hasView_=!1,this.transform_=new x(e||512)}var t=e.prototype;return t.setView=function(e,t,o){this.transform_.center=k.convert(e),this.transform_.zoom=+t,this.transform_.bearing=+o,this.hasView_=!0},t.setViewSize=function(e,t){this.transform_.width=e,this.transform_.height=t,this.hasSize_=!0},t.setMapCanvasProjection=function(e,t){this.maps_=e,this.mapCanvasProjection_=t},t.canProject=function(){return this.hasSize_&&this.hasView_},t.hasSize=function(){return this.hasSize_},t.fromLatLngToCenterPixel=function(e){return this.transform_.locationPoint(k.convert(e))},t.fromLatLngToDivPixel=function(e){if(this.mapCanvasProjection_){var t=new this.maps_.LatLng(e.lat,e.lng);return this.mapCanvasProjection_.fromLatLngToDivPixel(t)}return this.fromLatLngToCenterPixel(e)},t.fromLatLngToContainerPixel=function(e){if(this.mapCanvasProjection_){var t=new this.maps_.LatLng(e.lat,e.lng);return this.mapCanvasProjection_.fromLatLngToContainerPixel(t)}var o=this.fromLatLngToCenterPixel(e);return o.x-=this.transform_.worldSize*Math.round(o.x/this.transform_.worldSize),o.x+=this.transform_.width/2,o.y+=this.transform_.height/2,o},t.fromContainerPixelToLatLng=function(e){if(this.mapCanvasProjection_){var t=this.mapCanvasProjection_.fromContainerPixelToLatLng(e);return{lat:t.lat(),lng:t.lng()}}var o=a({},e);o.x-=this.transform_.width/2,o.y-=this.transform_.height/2;var n=this.transform_.pointLocation(i.convert(o));return n.lng-=360*Math.round(n.lng/360),n},t.getWidth=function(){return this.transform_.width},t.getHeight=function(){return this.transform_.height},t.getZoom=function(){return this.transform_.zoom},t.getCenter=function(){return this.transform_.pointLocation({x:0,y:0})},t.getBounds=function(e,t){var o=e&&e[0]||0,n=e&&e[1]||0,r=e&&e[2]||0,s=e&&e[3]||0;if(this.getWidth()-n-s>0&&this.getHeight()-o-r>0){var a=this.transform_.pointLocation(i.convert({x:s-this.getWidth()/2,y:o-this.getHeight()/2})),p=this.transform_.pointLocation(i.convert({x:this.getWidth()/2-n,y:this.getHeight()/2-r})),l=[a.lat,a.lng,p.lat,p.lng,p.lat,a.lng,a.lat,p.lng];return t&&(l=l.map(function(e){return Math.round(e*t)/t})),l}return[0,0,0,0]},e}();function T(e){if(window.requestAnimationFrame)return window.requestAnimationFrame(e);var t=window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame;return t?t(e):window.setTimeout(e,1e3/60)}var P=Math.log2?Math.log2:function(e){return Math.log(e)/Math.LN2};function E(e,t){return Object.keys(e).reduce(function(o,n){return t(e[n])&&(o[n]=e[n]),o},{})}var A=function(e){if(null!==e&&"object"==typeof e){if(0===Object.keys(e).length)return!0}else if(null==e||""===e)return!0;return!1},I=Object.prototype.toString;function N(e){return"number"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Number]"===I.call(e)}var Z=null;function j(){if(Z)return Z;if("undefined"!=typeof navigator){var e=navigator.userAgent.indexOf("MSIE")>-1,t=navigator.userAgent.indexOf("Firefox")>-1,o=navigator.userAgent.toLowerCase().indexOf("op")>-1,n=navigator.userAgent.indexOf("Chrome")>-1,r=navigator.userAgent.indexOf("Safari")>-1;return n&&r&&(r=!1),n&&o&&(n=!1),Z={isExplorer:e,isFirefox:t,isOpera:o,isChrome:n,isSafari:r}}return Z={isChrome:!0,isExplorer:!1,isFirefox:!1,isOpera:!1,isSafari:!1}}var U=function(e){return Function.prototype.toString.call(e)};function H(e){if(!e||"object"!=typeof e)return!1;var t="function"==typeof e.constructor?Object.getPrototypeOf(e):Object.prototype;if(null===t)return!0;var o=t.constructor;return"function"==typeof o&&o instanceof o&&U(o)===U(Object)}function R(e,t,o,n){e.addEventListener(t,o,function(){var e=!1;try{var t=Object.defineProperty({},"passive",{get:function(){e=!0}});window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){e=!1}return e}()?{capture:n,passive:!0}:n)}var K,B=!("undefined"==typeof window||!window.document||!window.document.createElement);K=B?window:"undefined"!=typeof self?self:void 0;var G,W="undefined"!=typeof document&&document.attachEvent,V=!1;if(B&&!W){var F=function(){var e=K.requestAnimationFrame||K.mozRequestAnimationFrame||K.webkitRequestAnimationFrame||function(e){return K.setTimeout(e,20)};return function(t){return e(t)}}(),q=(G=K.cancelAnimationFrame||K.mozCancelAnimationFrame||K.webkitCancelAnimationFrame||K.clearTimeout,function(e){return G(e)}),$=function(e){var t=e.__resizeTriggers__,o=t.firstElementChild,n=t.lastElementChild,r=o.firstElementChild;n.scrollLeft=n.scrollWidth,n.scrollTop=n.scrollHeight,r.style.width=o.offsetWidth+1+"px",r.style.height=o.offsetHeight+1+"px",o.scrollLeft=o.scrollWidth,o.scrollTop=o.scrollHeight},Y=function(e){var t=this;$(this),this.__resizeRAF__&&q(this.__resizeRAF__),this.__resizeRAF__=F(function(){(function(e){return e.offsetWidth!=e.__resizeLast__.width||e.offsetHeight!=e.__resizeLast__.height})(t)&&(t.__resizeLast__.width=t.offsetWidth,t.__resizeLast__.height=t.offsetHeight,t.__resizeListeners__.forEach(function(o){o.call(t,e)}))})},X=!1,J="",Q="animationstart",ee="Webkit Moz O ms".split(" "),te="webkitAnimationStart animationstart oAnimationStart MSAnimationStart".split(" ");if(B){var oe=document.createElement("fakeelement");if(void 0!==oe.style.animationName&&(X=!0),!1===X)for(var ne=0;ne<ee.length;ne++)if(void 0!==oe.style[ee[ne]+"AnimationName"]){J="-"+ee[ne].toLowerCase()+"-",Q=te[ne],X=!0;break}}var re="resizeanim",ie="@"+J+"keyframes "+re+" { from { opacity: 0; } to { opacity: 0; } } ",se=J+"animation: 1ms "+re+"; "}var ae=void 0!==o.createPortal,pe=ae?o.createPortal:o.unstable_renderSubtreeIntoContainer,le=function(e){return H(e)?e:{lat:e[0],lng:e[1]}},ue=function(e,t){return"production"!==process.env.NODE_ENV&&e<t&&console.warn("GoogleMap: minZoom option is less than recommended minZoom option for your map sizes.\noverrided to value "+t),t<e?e:t},he=function(e){function t(t){var n;if((n=e.call(this,t)||this)._getMinZoom=function(){if(n.geoService_.getWidth()>0||n.geoService_.getHeight()>0){var e=Math.ceil(n.geoService_.getWidth()/256)+2,t=Math.ceil(n.geoService_.getHeight()/256)+2,o=Math.max(e,t);return Math.ceil(P(o))}return 3},n._computeMinZoom=function(e){return A(e)?n._getMinZoom():e},n._mapDomResizeCallback=function(){if(n.resetSizeOnIdle_=!0,n.maps_){var e=n.props.center||n.props.defaultCenter,t=n.map_.getCenter();n.maps_.event.trigger(n.map_,"resize"),n.map_.setCenter(n.props.resetBoundsOnResize?e:t)}},n._setLayers=function(e){e.forEach(function(e){n.layers_[e]=new n.maps_[e],n.layers_[e].setMap(n.map_)})},n._renderPortal=function(){return s.createElement(M,{experimental:n.props.experimental,onChildClick:n._onChildClick,onChildMouseDown:n._onChildMouseDown,onChildMouseEnter:n._onChildMouseEnter,onChildMouseLeave:n._onChildMouseLeave,geoService:n.geoService_,insideMapPanes:!0,distanceToMouse:n.props.distanceToMouse,getHoverDistance:n._getHoverDistance,dispatcher:n.markersDispatcher_})},n._initMap=function(){if(!n.initialized_){n.initialized_=!0;var e=le(n.props.center||n.props.defaultCenter);n.geoService_.setView(e,n.props.zoom||n.props.defaultZoom,0),n._onBoundsChanged();var t=a({},n.props.apiKey&&{key:n.props.apiKey},n.props.bootstrapURLKeys);n.props.googleMapLoader(t,n.props.heatmapLibrary).then(function(e){if(n.mounted_){var t,r,i=n.geoService_.getCenter(),s={zoom:n.props.zoom||n.props.defaultZoom,center:new e.LatLng(i.lat,i.lng)};n.props.heatmap.positions&&(Object.assign(l(n),{heatmap:(t=e,r=n.props.heatmap,new t.visualization.HeatmapLayer({data:r.positions.reduce(function(e,o){var n=o.weight,r=void 0===n?1:n;return e.push({location:new t.LatLng(o.lat,o.lng),weight:r}),e},[])}))}),function(e,t){var o=t.options,n=void 0===o?{}:o;Object.keys(n).map(function(t){return e.set(t,n[t])})}(n.heatmap,n.props.heatmap));var p=E(e,H),u="function"==typeof n.props.options?n.props.options(p):n.props.options,h=!A(n.props.draggable)&&{draggable:n.props.draggable},c=n._computeMinZoom(u.minZoom);n.minZoom_=c;var d=a({},{overviewMapControl:!1,streetViewControl:!1,rotateControl:!0,mapTypeControl:!1,styles:[{featureType:"poi",elementType:"labels",stylers:[{visibility:"off"}]}],minZoom:3},{minZoom:c},u,s);n.defaultDraggableOption_=A(d.draggable)?n.defaultDraggableOption_:d.draggable;var m=a({},d,h);m.minZoom=ue(m.minZoom,c);var g=new e.Map(o.findDOMNode(n.googleMapDom_),m);n.map_=g,n.maps_=e,n._setLayers(n.props.layerTypes);var _=e.version.match(/^3\.(\d+)\./),f=_&&Number(_[1]),v=l(n),M=Object.assign(new e.OverlayView,{onAdd:function(){var t="undefined"!=typeof screen?screen.width+"px":"2000px",o="undefined"!=typeof screen?screen.height+"px":"2000px",n=document.createElement("div");if(n.style.backgroundColor="transparent",n.style.position="absolute",n.style.left="0px",n.style.top="0px",n.style.width=t,n.style.height=o,v.props.overlayViewDivStyle){var r=v.props.overlayViewDivStyle;"object"==typeof r&&Object.keys(r).forEach(function(e){n.style[e]=r[e]})}this.getPanes().overlayMouseTarget.appendChild(n),v.geoService_.setMapCanvasProjection(e,M.getProjection()),ae?v.setState({overlay:n}):pe(v,v._renderPortal(),n,function(){return v.setState({overlay:n})})},onRemove:function(){var e=v.state.overlay;e&&!ae&&o.unmountComponentAtNode(e),v.setState({overlay:null})},draw:function(){if(v.updateCounter_++,v._onBoundsChanged(g,e,!v.props.debounced),v.googleApiLoadedCalled_||(v._onGoogleApiLoaded({map:g,maps:e,ref:v.googleMapDom_}),v.googleApiLoadedCalled_=!0),v.mouse_){var t=v.geoService_.fromContainerPixelToLatLng(v.mouse_);v.mouse_.lat=t.lat,v.mouse_.lng=t.lng}v._onChildMouseMove(),v.markersDispatcher_&&(v.markersDispatcher_.emit("kON_CHANGE"),v.fireMouseEventOnIdle_&&v.markersDispatcher_.emit("kON_MOUSE_POSITION_CHANGE"))}});n.overlay_=M,M.setMap(g),n.props.heatmap.positions&&n.heatmap.setMap(g),n.props.onTilesLoaded&&e.event.addListener(g,"tilesloaded",function(){v._onTilesLoaded()}),e.event.addListener(g,"zoom_changed",function(){v.geoService_.getZoom()!==g.getZoom()&&(v.zoomAnimationInProgress_||(v.zoomAnimationInProgress_=!0,v._onZoomAnimationStart(g.zoom)),f<32)&&((new Date).getTime()-n.zoomControlClickTime_<300?T(function(){return T(function(){v.updateCounter_++,v._onBoundsChanged(g,e)})}):(v.updateCounter_++,v._onBoundsChanged(g,e)))}),e.event.addListener(g,"idle",function(){if(n.resetSizeOnIdle_){n._setViewSize();var t=n._computeMinZoom(u.minZoom);t!==n.minZoom_&&(n.minZoom_=t,g.setOptions({minZoom:t})),n.resetSizeOnIdle_=!1}v.zoomAnimationInProgress_&&(v.zoomAnimationInProgress_=!1,v._onZoomAnimationEnd(g.zoom)),v.updateCounter_++,v._onBoundsChanged(g,e),v.dragTime_=0,v.markersDispatcher_&&v.markersDispatcher_.emit("kON_CHANGE")}),e.event.addListener(g,"mouseover",function(){v.mouseInMap_=!0}),e.event.addListener(g,"click",function(){v.mouseInMap_=!0}),e.event.addListener(g,"mouseout",function(){v.mouseInMap_=!1,v.mouse_=null,v.markersDispatcher_.emit("kON_MOUSE_POSITION_CHANGE")}),e.event.addListener(g,"drag",function(){v.dragTime_=(new Date).getTime(),v._onDrag(g)}),e.event.addListener(g,"dragend",function(){var t=e.event.addListener(g,"idle",function(){e.event.removeListener(t),v._onDragEnd(g)})}),e.event.addListener(g,"maptypeid_changed",function(){v._onMapTypeIdChange(g.getMapTypeId())})}}).catch(function(e){throw n._onGoogleApiLoaded({map:null,maps:null,ref:n.googleMapDom_}),console.error(e),e})}},n._onGoogleApiLoaded=function(){var e;n.props.onGoogleApiLoaded&&("production"!==process.env.NODE_ENV&&!0!==n.props.yesIWantToUseGoogleMapApiInternals&&console.warn("GoogleMap: Usage of internal api objects is dangerous and can cause a lot of issues.\nTo hide this warning add yesIWantToUseGoogleMapApiInternals={true} to <GoogleMap instance"),(e=n.props).onGoogleApiLoaded.apply(e,arguments))},n._getHoverDistance=function(){return n.props.hoverDistance},n._onDrag=function(){var e;return n.props.onDrag&&(e=n.props).onDrag.apply(e,arguments)},n._onDragEnd=function(){var e;return n.props.onDragEnd&&(e=n.props).onDragEnd.apply(e,arguments)},n._onMapTypeIdChange=function(){var e;return n.props.onMapTypeIdChange&&(e=n.props).onMapTypeIdChange.apply(e,arguments)},n._onZoomAnimationStart=function(){var e;return n.props.onZoomAnimationStart&&(e=n.props).onZoomAnimationStart.apply(e,arguments)},n._onZoomAnimationEnd=function(){var e;return n.props.onZoomAnimationEnd&&(e=n.props).onZoomAnimationEnd.apply(e,arguments)},n._onTilesLoaded=function(){return n.props.onTilesLoaded&&n.props.onTilesLoaded()},n._onChildClick=function(){var e;if(n.props.onChildClick)return(e=n.props).onChildClick.apply(e,arguments)},n._onChildMouseDown=function(e,t){n.childMouseDownArgs_=[e,t],n.props.onChildMouseDown&&n.props.onChildMouseDown(e,t,a({},n.mouse_))},n._onChildMouseUp=function(){var e;n.childMouseDownArgs_&&(n.props.onChildMouseUp&&(e=n.props).onChildMouseUp.apply(e,n.childMouseDownArgs_.concat([a({},n.mouse_)])),n.childMouseDownArgs_=null,n.childMouseUpTime_=(new Date).getTime())},n._onChildMouseMove=function(){var e;n.childMouseDownArgs_&&n.props.onChildMouseMove&&(e=n.props).onChildMouseMove.apply(e,n.childMouseDownArgs_.concat([a({},n.mouse_)]))},n._onChildMouseEnter=function(){var e;if(n.props.onChildMouseEnter)return(e=n.props).onChildMouseEnter.apply(e,arguments)},n._onChildMouseLeave=function(){var e;if(n.props.onChildMouseLeave)return(e=n.props).onChildMouseLeave.apply(e,arguments)},n._setViewSize=function(){if(n.mounted_){if(document.fullscreen||document.webkitIsFullScreen||document.mozFullScreen||document.msFullscreenElement)n.geoService_.setViewSize(window.innerWidth,window.innerHeight);else{var e=o.findDOMNode(n.googleMapDom_);n.geoService_.setViewSize(e.clientWidth,e.clientHeight)}n._onBoundsChanged()}},n._onWindowResize=function(){n.resetSizeOnIdle_=!0},n._onMapMouseMove=function(e){if(n.mouseInMap_){var t=(new Date).getTime();t-n.mouseMoveTime_>50&&(n.boundingRect_=e.currentTarget.getBoundingClientRect()),n.mouseMoveTime_=t;var o=e.clientX-n.boundingRect_.left,r=e.clientY-n.boundingRect_.top;n.mouse_||(n.mouse_={x:0,y:0,lat:0,lng:0}),n.mouse_.x=o,n.mouse_.y=r;var i=n.geoService_.fromContainerPixelToLatLng(n.mouse_);n.mouse_.lat=i.lat,n.mouse_.lng=i.lng,n._onChildMouseMove(),t-n.dragTime_<100?n.fireMouseEventOnIdle_=!0:(n.markersDispatcher_.emit("kON_MOUSE_POSITION_CHANGE"),n.fireMouseEventOnIdle_=!1)}},n._onClick=function(){var e;return n.props.onClick&&!n.childMouseDownArgs_&&(new Date).getTime()-n.childMouseUpTime_>300&&0===n.dragTime_&&(e=n.props).onClick.apply(e,arguments)},n._onMapClick=function(e){n.markersDispatcher_&&(n._onMapMouseMove(e),(new Date).getTime()-n.dragTime_>100&&(n.mouse_&&n._onClick(a({},n.mouse_,{event:e})),n.markersDispatcher_.emit("kON_CLICK",e)))},n._onMapMouseDownNative=function(e){n.mouseInMap_&&n._onMapMouseDown(e)},n._onMapMouseDown=function(e){n.markersDispatcher_&&(new Date).getTime()-n.dragTime_>100&&(n._onMapMouseMove(e),n.markersDispatcher_.emit("kON_MDOWN",e))},n._onMapMouseDownCapture=function(){j().isChrome&&(n.zoomControlClickTime_=(new Date).getTime())},n._onKeyDownCapture=function(){j().isChrome&&(n.zoomControlClickTime_=(new Date).getTime())},n._isCenterDefined=function(e){return e&&(H(e)&&N(e.lat)&&N(e.lng)||2===e.length&&N(e[0])&&N(e[1]))},n._onBoundsChanged=function(e,t,o){if(e){var r=e.getCenter();n.geoService_.setView([r.lat(),r.lng()],e.getZoom(),0)}if((n.props.onChange||n.props.onBoundsChange)&&n.geoService_.canProject()){var i=n.geoService_.getZoom(),s=n.geoService_.getBounds(),p=n.geoService_.getCenter();if(!function(e,t,o){if(e&&t){for(var n=0;n!==e.length;++n)if(Math.abs(e[n]-t[n])>1e-5)return!1;return!0}return!1}(s,n.prevBounds_)&&!1!==o){var l=n.geoService_.getBounds(n.props.margin);n.props.onBoundsChange&&n.props.onBoundsChange(n.centerIsObject_?a({},p):[p.lat,p.lng],i,s,l),n.props.onChange&&n.props.onChange({center:a({},p),zoom:i,bounds:{nw:{lat:s[0],lng:s[1]},se:{lat:s[2],lng:s[3]},sw:{lat:s[4],lng:s[5]},ne:{lat:s[6],lng:s[7]}},marginBounds:{nw:{lat:l[0],lng:l[1]},se:{lat:l[2],lng:l[3]},sw:{lat:l[4],lng:l[5]},ne:{lat:l[6],lng:l[7]}},size:n.geoService_.hasSize()?{width:n.geoService_.getWidth(),height:n.geoService_.getHeight()}:{width:0,height:0}}),n.prevBounds_=s}}},n._registerChild=function(e){n.googleMapDom_=e},n.mounted_=!1,n.initialized_=!1,n.googleApiLoadedCalled_=!1,n.map_=null,n.maps_=null,n.prevBounds_=null,n.heatmap=null,n.layers_={},n.mouse_=null,n.mouseMoveTime_=0,n.boundingRect_=null,n.mouseInMap_=!0,n.dragTime_=0,n.fireMouseEventOnIdle_=!1,n.updateCounter_=0,n.markersDispatcher_=new c(l(n)),n.geoService_=new S(256),n.centerIsObject_=H(n.props.center),n.minZoom_=3,n.defaultDraggableOption_=!0,n.zoomControlClickTime_=0,n.childMouseDownArgs_=null,n.childMouseUpTime_=0,n.googleMapDom_=null,"production"!==process.env.NODE_ENV&&(n.props.apiKey&&console.warn("GoogleMap: apiKey is deprecated, use bootstrapURLKeys={{key: YOUR_API_KEY}} instead."),n.props.onBoundsChange&&console.warn("GoogleMap: onBoundsChange is deprecated, use onChange({center, zoom, bounds, ...other}) instead."),A(n.props.center)&&A(n.props.defaultCenter)&&console.warn("GoogleMap: center or defaultCenter property must be defined"),A(n.props.zoom)&&A(n.props.defaultZoom)&&console.warn("GoogleMap: zoom or defaultZoom property must be defined")),n._isCenterDefined(n.props.center||n.props.defaultCenter)){var r=le(n.props.center||n.props.defaultCenter);n.geoService_.setView(r,n.props.zoom||n.props.defaultZoom,0)}return n.zoomAnimationInProgress_=!1,n.state={overlay:null},n}p(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=this;this.mounted_=!0,R(window,"resize",this._onWindowResize,!1),R(window,"keydown",this._onKeyDownCapture,!0);var t=o.findDOMNode(this.googleMapDom_);t&&R(t,"mousedown",this._onMapMouseDownNative,!0),R(window,"mouseup",this._onChildMouseUp,!1);var n=a({},this.props.apiKey&&{key:this.props.apiKey},this.props.bootstrapURLKeys);this.props.googleMapLoader(n,this.props.heatmapLibrary),setTimeout(function(){e._setViewSize(),e._isCenterDefined(e.props.center||e.props.defaultCenter)&&e._initMap()},0,this),this.props.resetBoundsOnResize&&function(e,t){if(void 0===e.parentNode){var o=document.createElement("div");e.parentNode=o}e=e.parentNode,W?e.attachEvent("onresize",t):(e.__resizeTriggers__||("static"==getComputedStyle(e).position&&(e.style.position="relative"),function(){if(!V){var e=(ie||"")+".resize-triggers { "+(se||"")+'visibility: hidden; opacity: 0; } .resize-triggers, .resize-triggers > div, .contract-trigger:before { content: " "; display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; } .resize-triggers > div { background: #eee; overflow: auto; } .contract-trigger:before { width: 200%; height: 200%; }',t=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css",o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e)),t.appendChild(o),V=!0}}(),e.__resizeLast__={},e.__resizeListeners__=[],(e.__resizeTriggers__=document.createElement("div")).className="resize-triggers",e.__resizeTriggers__.innerHTML='<div class="expand-trigger"><div></div></div><div class="contract-trigger"></div>',e.appendChild(e.__resizeTriggers__),$(e),R(e,"scroll",Y,!0),Q&&e.__resizeTriggers__.addEventListener(Q,function(t){t.animationName==re&&$(e)})),e.__resizeListeners__.push(t))}(t,this._mapDomResizeCallback)},n.shouldComponentUpdate=function(e,t){return!_(d(this.props,["draggable"]),d(e,["draggable"]))||!_(this.state,t)},n.componentDidUpdate=function(e){var t=this;if("production"!==process.env.NODE_ENV&&(_(e.defaultCenter,this.props.defaultCenter)||console.warn("GoogleMap: defaultCenter prop changed. You can't change default props."),_(e.defaultZoom,this.props.defaultZoom)||console.warn("GoogleMap: defaultZoom prop changed. You can't change default props.")),!this._isCenterDefined(e.center)&&this._isCenterDefined(this.props.center)&&setTimeout(function(){return t._initMap()},0),this.map_){var o=this.geoService_.getCenter();if(this._isCenterDefined(this.props.center)){var n=le(this.props.center),r=this._isCenterDefined(e.center)?le(e.center):null;(!r||Math.abs(n.lat-r.lat)+Math.abs(n.lng-r.lng)>1e-5)&&Math.abs(n.lat-o.lat)+Math.abs(n.lng-o.lng)>1e-5&&this.map_.panTo({lat:n.lat,lng:n.lng})}if(A(this.props.zoom)||Math.abs(this.props.zoom-e.zoom)>0&&this.map_.setZoom(this.props.zoom),!A(e.draggable)&&A(this.props.draggable)?this.map_.setOptions({draggable:this.defaultDraggableOption_}):_(e.draggable,this.props.draggable)||this.map_.setOptions({draggable:this.props.draggable}),!A(this.props.options)&&!_(e.options,this.props.options)){var i=E(this.maps_,H),s="function"==typeof this.props.options?this.props.options(i):this.props.options;if("minZoom"in(s=d(s,["zoom","center","draggable"]))){var a=this._computeMinZoom(s.minZoom);s.minZoom=ue(s.minZoom,a)}this.map_.setOptions(s)}_(this.props.layerTypes,e.layerTypes)||(Object.keys(this.layers_).forEach(function(e){t.layers_[e].setMap(null),delete t.layers_[e]}),this._setLayers(this.props.layerTypes)),this.heatmap&&!_(this.props.heatmap.positions,e.heatmap.positions)&&this.heatmap.setData(this.props.heatmap.positions.map(function(e){return{location:new t.maps_.LatLng(e.lat,e.lng),weight:e.weight}})),this.heatmap&&!_(this.props.heatmap.options,e.heatmap.options)&&Object.keys(this.props.heatmap.options).forEach(function(e){t.heatmap.set(e,t.props.heatmap.options[e])})}this.markersDispatcher_.emit("kON_CHANGE"),_(this.props.hoverDistance,e.hoverDistance)||this.markersDispatcher_.emit("kON_MOUSE_POSITION_CHANGE")},n.componentWillUnmount=function(){this.mounted_=!1;var e,t,n=o.findDOMNode(this.googleMapDom_);n&&n.removeEventListener("mousedown",this._onMapMouseDownNative,!0),window.removeEventListener("resize",this._onWindowResize),window.removeEventListener("keydown",this._onKeyDownCapture),window.removeEventListener("mouseup",this._onChildMouseUp,!1),this.props.resetBoundsOnResize&&(t=this._mapDomResizeCallback,e=(e=n).parentNode,W?e.detachEvent("onresize",t):(e.__resizeListeners__.splice(e.__resizeListeners__.indexOf(t),1),e.__resizeListeners__.length||(e.removeEventListener("scroll",Y),e.__resizeTriggers__=!e.removeChild(e.__resizeTriggers__)))),this.overlay_&&this.overlay_.setMap(null),this.maps_&&this.map_&&this.props.shouldUnregisterMapOnUnmount&&(this.map_.setOptions({scrollwheel:!1}),this.maps_.event.clearInstanceListeners(this.map_)),this.props.shouldUnregisterMapOnUnmount&&(this.map_=null,this.maps_=null),this.markersDispatcher_.dispose(),this.resetSizeOnIdle_=!1,this.props.shouldUnregisterMapOnUnmount&&(delete this.map_,delete this.markersDispatcher_)},n.render=function(){var e=this.state.overlay,t=e?null:s.createElement(C,{experimental:this.props.experimental,onChildClick:this._onChildClick,onChildMouseDown:this._onChildMouseDown,onChildMouseEnter:this._onChildMouseEnter,onChildMouseLeave:this._onChildMouseLeave,geoService:this.geoService_,insideMapPanes:!1,distanceToMouse:this.props.distanceToMouse,getHoverDistance:this._getHoverDistance,dispatcher:this.markersDispatcher_});return s.createElement("div",{style:this.props.style,onMouseMove:this._onMapMouseMove,onMouseDownCapture:this._onMapMouseDownCapture,onClick:this._onMapClick},s.createElement(h,{registerChild:this._registerChild}),ae&&e&&pe(this._renderPortal(),e),t)},t}(e.Component);function ce(e){var t=e.lng,o=Math.sin(e.lat*Math.PI/180),n=t/360+.5,r=.5-.25*Math.log((1+o)/(1-o))/Math.PI;return{x:n,y:r=r<0?0:r>1?1:r}}function de(e){var t=e.x,o=Math.PI-2*Math.PI*e.y;return{lat:180/Math.PI*Math.atan(.5*(Math.exp(o)-Math.exp(-o))),lng:360*t-180}}function me(e,t,o,n){var r=ce(e),i=ce(t),s=r.x<i.x?i.x-r.x:1-r.x+i.x,a=i.y-r.y;if(s<=0&&a<=0)return null;var p=P(o/256/Math.abs(s)),l=P(n/256/Math.abs(a)),u=Math.floor(1e-9+Math.min(p,l)),h={x:r.x<i.x?.5*(r.x+i.x):r.x+i.x-1>0?.5*(r.x+i.x-1):.5*(1+r.x+i.x),y:.5*(r.y+i.y)},c=Math.pow(2,u),d=o/c/256/2,m=n/c/256/2,g=de({x:h.x-d,y:h.y-m}),_=de({x:h.x+d,y:h.y+m});return{center:de(h),zoom:u,newBounds:{nw:g,se:_}}}function ge(e){var t=e.ne,o=e.sw;return{nw:{lat:t.lat,lng:o.lng},se:{lat:o.lat,lng:t.lng}}}function _e(e){var t=e.nw,o=e.se;return{ne:{lat:t.lat,lng:o.lng},sw:{lat:o.lat,lng:t.lng}}}return he.propTypes={apiKey:t.string,bootstrapURLKeys:t.any,defaultCenter:t.oneOfType([t.array,t.shape({lat:t.number,lng:t.number})]),center:t.oneOfType([t.array,t.shape({lat:t.number,lng:t.number})]),defaultZoom:t.number,zoom:t.number,onBoundsChange:t.func,onChange:t.func,onClick:t.func,onChildClick:t.func,onChildMouseDown:t.func,onChildMouseUp:t.func,onChildMouseMove:t.func,onChildMouseEnter:t.func,onChildMouseLeave:t.func,onZoomAnimationStart:t.func,onZoomAnimationEnd:t.func,onDrag:t.func,onDragEnd:t.func,onMapTypeIdChange:t.func,onTilesLoaded:t.func,options:t.any,distanceToMouse:t.func,hoverDistance:t.number,debounced:t.bool,margin:t.array,googleMapLoader:t.any,onGoogleApiLoaded:t.func,yesIWantToUseGoogleMapApiInternals:t.bool,draggable:t.bool,style:t.any,resetBoundsOnResize:t.bool,layerTypes:t.arrayOf(t.string),shouldUnregisterMapOnUnmount:t.bool},he.defaultProps={distanceToMouse:function(e,t){return Math.sqrt((e.x-t.x)*(e.x-t.x)+(e.y-t.y)*(e.y-t.y))},hoverDistance:30,debounced:!0,options:function(){return{overviewMapControl:!1,streetViewControl:!1,rotateControl:!0,mapTypeControl:!1,styles:[{featureType:"poi",elementType:"labels",stylers:[{visibility:"off"}]}],minZoom:3}},googleMapLoader:O,yesIWantToUseGoogleMapApiInternals:!1,style:{width:"100%",height:"100%",margin:0,padding:0,position:"relative"},layerTypes:[],heatmap:{},heatmapLibrary:!1,shouldUnregisterMapOnUnmount:!0},he.googleMapLoader=O,Object.assign(he,{convertNeSwToNwSe:ge,convertNwSeToNeSw:_e,fitBounds:function(e,t){var o,n=e.nw,r=e.se,i=e.ne,s=e.sw,p=t.width,l=t.height;if(n&&r)o=me(n,r,p,l);else{var u=ge({ne:i,sw:s});o=me(u.nw,u.se,p,l)}return a({},o,{newBounds:a({},o.newBounds,_e(o.newBounds))})},meters2ScreenPixels:function(e,t,o){var n=function(e,t){var o=function(e,t){var o,n=t.lat,r=t.lng,i=(o=n*Math.PI/180,{metersPerLatDegree:111132.92-559.82*Math.cos(2*o)+1.175*Math.cos(4*o)-.0023*Math.cos(6*o),metersPerLngDegree:111412.84*Math.cos(o)-93.5*Math.cos(3*o)+.118*Math.cos(5*o)}),s=.5*e/i.metersPerLatDegree,a=.5*e/i.metersPerLngDegree;return{nw:{lat:n-s,lng:r-a},se:{lat:n+s,lng:r+a}}}(e,{lat:t.lat,lng:t.lng}),n=o.se,r=ce(o.nw),i=ce(n);return{w:Math.abs(i.x-r.x),h:Math.abs(i.y-r.y)}}(e,{lat:t.lat,lng:t.lng}),r=n.w,i=n.h,s=Math.pow(2,o);return{w:r*s*256,h:i*s*256}},tile2LatLng:function(e,t){var o=e.x,n=Math.PI-2*Math.PI*e.y/Math.pow(2,t);return{lat:180/Math.PI*Math.atan(.5*(Math.exp(n)-Math.exp(-n))),lng:o/Math.pow(2,t)*360-180}},latLng2Tile:function(e,t){var o=ce({lat:e.lat,lng:e.lng}),n=Math.pow(2,t);return{x:Math.floor(o.x*n),y:Math.floor(o.y*n)}},getTilesIds:function(e,t){for(var o=e.from,n=e.to,r=Math.pow(2,t),i=[],s=o.x;s!==(n.x+1)%r;s=(s+1)%r)for(var a=o.y;a!==(n.y+1)%r;a=(a+1)%r)i.push([t,s,a]);return i}}),he});
//# sourceMappingURL=index.umd.js.map