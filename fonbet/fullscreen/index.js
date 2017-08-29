(function (lib, img, cjs, ss, an) {

Object.keys(img).forEach(function(key){
    (lib[key] = function() {
    this.initialize(img[key]);
    }).prototype = p = new createjs.Bitmap();
    p.nominalBounds = new createjs.Rectangle(0,0,img[key].width,img[key].height);
});

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Tween4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.soccer();
	this.instance.parent = this;
	this.instance.setTransform(-167,-292.1,1,1,15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-290.7,-292.1,581.6,584.3);


(lib.Symbol19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.medal();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.78,0.78);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol19, new cjs.Rectangle(0,0,166.9,213.7), null);


(lib.Symbol18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.moneypngcopy();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.78,0.78);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol18, new cjs.Rectangle(0,0,186.4,226.1), null);


(lib.Symbol17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.text1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.78,0.78);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol17, new cjs.Rectangle(0,0,437.4,108.4), null);


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.money1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.78,0.78);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol16, new cjs.Rectangle(0,0,190.3,197.3), null);


(lib.Symbol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.text2();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.78,0.78);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol15, new cjs.Rectangle(0,0,279.1,107.6), null);


(lib.Symbol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.text3();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.78,0.78);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol14, new cjs.Rectangle(0,0,263.6,102.2), null);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.text4();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.78,0.78);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol13, new cjs.Rectangle(0,0,456.1,96.7), null);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.touch();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.78,0.78);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol12, new cjs.Rectangle(0,0,186.4,186.4), null);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.shaiba();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol10, new cjs.Rectangle(0,0,285,263), null);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.basket();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(0,0,377,368), null);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.buttonpngcopy();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.877,0.877);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(0,0,517.6,155.3), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.tennis();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,179,160), null);


(lib.Symbol3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.logo();
	this.instance_1.parent = this;
	this.instance_1.setTransform(272,120);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3_1, new cjs.Rectangle(272,120,272,83), null);


(lib.Symbol36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol10();
	this.instance.parent = this;
	this.instance.setTransform(107.5,220.5,1,1,0,0,0,142.5,131.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:194.5},59).to({y:220.5},70).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35,89,285,263);


(lib.Symbol35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Symbol7();
	this.instance.parent = this;
	this.instance.setTransform(20.5,37,1,1,0,0,0,188.5,184);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:24.7,x:20.6,y:57.1},112).to({rotation:0,x:20.5,y:37},92).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-168,-147,377,368);


(lib.Symbol33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol3();
	this.instance.parent = this;
	this.instance.setTransform(98.5,1,1,1,0,0,0,89.5,80);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:21},49).to({y:1},50).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(9,-79,179,160);


(lib.Symbol29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.year();
	this.instance.parent = this;
	this.instance.setTransform(292,239,0.495,0.495);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.logo = new lib.Symbol3_1();
	this.logo.parent = this;
	this.logo.setTransform(134.4,39.3,1.033,1.033,0,0,0,90,28);

	this.timeline.addTween(cjs.Tween.get(this.logo).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol29, new cjs.Rectangle(292,134.3,346.2,130.4), null);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text3.png
	this.instance = new lib.Symbol14();
	this.instance.parent = this;
	this.instance.setTransform(227.8,315.1,1,1,0,0,0,131.8,51.1);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:295.1,alpha:1},19).wait(60).to({y:315.1,alpha:0},15).to({_off:true},1).wait(261));

	// medal.png
	this.instance_1 = new lib.Symbol19();
	this.instance_1.parent = this;
	this.instance_1.setTransform(228.1,106.8,0.084,1,0,0,0,83.2,106.8);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).to({regX:83.4,scaleX:1,x:227.4,alpha:1},19).wait(60).to({regX:83.2,scaleX:0.08,x:228.1,alpha:0},15).to({_off:true},1).wait(258));

	// text4.png
	this.instance_2 = new lib.Symbol13();
	this.instance_2.parent = this;
	this.instance_2.setTransform(228.1,312.4,1,1,0,0,0,228.1,48.4);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(84).to({_off:false},0).to({y:292.4,alpha:1},19).wait(60).to({y:312.4,alpha:0},15).to({_off:true},4).wait(174));

	// money1.png
	this.instance_3 = new lib.Symbol16();
	this.instance_3.parent = this;
	this.instance_3.setTransform(228.2,98.6,0.084,1,0,0,0,95.8,98.6);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(87).to({_off:false},0).to({regX:95.1,scaleX:1,x:228.1,alpha:1},19).wait(60).to({regX:95.8,scaleX:0.08,x:228.2,alpha:0},15).to({_off:true},1).wait(174));

	// text2.png
	this.instance_4 = new lib.Symbol15();
	this.instance_4.parent = this;
	this.instance_4.setTransform(227.6,317.8,1,1,0,0,0,139.6,53.8);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(170).to({_off:false},0).to({y:297.8,alpha:1},19).wait(60).to({y:317.8,alpha:0},15).to({_off:true},5).wait(87));

	// touch.png
	this.instance_5 = new lib.Symbol12();
	this.instance_5.parent = this;
	this.instance_5.setTransform(228.2,104.2,0.084,1,0,0,0,93.4,93.2);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(174).to({_off:false},0).to({regX:93.2,scaleX:1,alpha:1},19).wait(60).to({regX:93.4,scaleX:0.08,alpha:0},15).to({_off:true},1).wait(87));

	// text1.png
	this.instance_6 = new lib.Symbol17();
	this.instance_6.parent = this;
	this.instance_6.setTransform(226.7,318.1,1,1,0,0,0,218.7,54.1);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(257).to({_off:false},0).to({y:298.1,alpha:1},19).wait(60).to({y:318.1,alpha:0},15).wait(5));

	// money.png copy
	this.instance_7 = new lib.Symbol18();
	this.instance_7.parent = this;
	this.instance_7.setTransform(228.2,113,0.084,1,0,0,0,93.4,113);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(261).to({_off:false},0).to({regX:93.2,scaleX:1,alpha:1},19).wait(60).to({regX:93.4,scaleX:0.08,alpha:0},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(96,264,263.6,102.1);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween4("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(290.8,292.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(0,0,581.6,584.4), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol5();
	this.instance.parent = this;
	this.instance.setTransform(258.8,77.6,1,1,0,0,0,258.8,77.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.94,scaleY:0.94},19).to({scaleX:1,scaleY:1},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,517.6,155.3);


(lib.Symbol34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol8();
	this.instance.parent = this;
	this.instance.setTransform(374,153,1,1,-12.2,0,0,290.8,292.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:292.2,rotation:0,y:113.1},89).to({regY:292.1,rotation:-12.2,y:153},90).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(28.1,-193.9,691.8,694);


(lib.Symbol32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.Symbol4();
	this.instance.parent = this;
	this.instance.setTransform(-242.2,64.6,1,1,0,0,0,258.8,77.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 4
	this.instance_1 = new lib.Gaming();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-432,162);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol32, new cjs.Rectangle(-501,-13,517.6,199), null);


// stage content:
(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		window._setCanvasSize = function() {
			
		    var s = getWindowSize(), w = s.iw, h = s.ih,
				_port = w < h, _land = w > h,
				_mob = w < h && w < 420 && h < 750 || w > h && h < 420 && w < 750;
		    
		    var min_w = 600;
			var min_h = 600;
			
			var EL = {
		
				/* --- Main --- */
				
				logo : {
					x : _port ? w * 0.5 : w * 0.73,
					y : _port ? h * 0.15 : h * 0.3,
					s : _land && !_mob ? 0.9 : 1
				},
				txt : {
					x : _port ? w * 0.5 : w * 0.25,
					y : h * 0.5,
					s : _land && !_mob ? 0.9 : 1
				},
				button : {
					x : _port ? w * 0.5 : w * 0.73,
					y : _port ? h * 0.85 : h * 0.75,
					s : _land && !_mob ? 0.9 : 1
				},
				
				/* --- Main --- */		
				
				tank : {
					x : w * 0.2,
					y : h * 0.5,
					s : 1
				},
				vans : {
					x : w * 0.9,
					y : h * 0.3,
					s : 1
				},
				leftpr : {
					x : w * 0.1,
					y : h * 0.7,
					s : 1
				},
				rightpr : {
					x : w * 0.8,
					y : h * 0.8,
					s : 1
				}
			};
			
			var new_scale = (w / min_w < 1 ? w / min_w : 1) * (h / min_h < 1 ? h / min_h : 1);
			Object.keys(EL).forEach(key => {
				_this[key].x = EL[key].x; _this[key].y = EL[key].y;
				_this[key].scaleX = _this[key].scaleY = EL[key].s  * new_scale;
				"c" in EL[key] && ((parent, value) => {
					Object.keys(value).forEach(key => {
						parent[key] = value[key];
					});
				})(_this[key], EL[key].c);
			});
		}
				
		window.onresize=function(){_setCanvasSize();}
		window.onresize();
		document.addEventListener("DOMContentLoaded", function(){ _setCanvasSize()});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.txt = new lib.Symbol11();
	this.txt.parent = this;
	this.txt.setTransform(510.4,311.3,1,1,0,0,0,228.1,176.2);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1));

	// Symbol 18
	this.button = new lib.Symbol32();
	this.button.parent = this;
	this.button.setTransform(510,690,1,1,0,0,0,-242,91.5);

	this.timeline.addTween(cjs.Tween.get(this.button).wait(1));

	// Layer 3
	this.logo = new lib.Symbol29();
	this.logo.parent = this;
	this.logo.setTransform(510,88.5,1.308,1.308,0,0,0,460.8,195.6);

	this.timeline.addTween(cjs.Tween.get(this.logo).wait(1));

	// Layer 7
	this.rightpr = new lib.Symbol36();
	this.rightpr.parent = this;
	this.rightpr.setTransform(801,664.5,1,1,0,0,0,-35,220.5);

	this.timeline.addTween(cjs.Tween.get(this.rightpr).wait(1));

	// Layer 6
	this.leftpr = new lib.Symbol35();
	this.leftpr.parent = this;
	this.leftpr.setTransform(224,486,1,1,0,0,0,209,37);

	this.timeline.addTween(cjs.Tween.get(this.leftpr).wait(1));

	// Layer 4
	this.tank = new lib.Symbol33();
	this.tank.parent = this;
	this.tank.setTransform(192,385,1,1,0,0,0,238,307);

	this.timeline.addTween(cjs.Tween.get(this.tank).wait(1));

	// Layer 5
	this.vans = new lib.Symbol34();
	this.vans.parent = this;
	this.vans.setTransform(850,252,1,1,0,0,0,137,153);

	this.timeline.addTween(cjs.Tween.get(this.vans).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(359,289.1,1585.9,891);
// library properties:
lib.properties = {
	width: 1024,
	height: 768,
	fps: 30,
	color: "#FFFFFF",
	opacity: 0.00,
	webfonts: {},
	manifest: [],
	preloads: []
};
})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;