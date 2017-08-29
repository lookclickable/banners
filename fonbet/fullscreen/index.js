(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.backjpgcopy = function() {
	this.initialize(img.backjpgcopy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.basket = function() {
	this.initialize(img.basket);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,377,368);


(lib.buttonpngcopy = function() {
	this.initialize(img.buttonpngcopy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,590,177);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,272,83);


(lib.medal = function() {
	this.initialize(img.medal);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,214,274);


(lib.moneypngcopy = function() {
	this.initialize(img.moneypngcopy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,239,290);


(lib.money1 = function() {
	this.initialize(img.money1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,244,253);


(lib.shaiba = function() {
	this.initialize(img.shaiba);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,285,263);


(lib.soccer = function() {
	this.initialize(img.soccer);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,474,478);


(lib.tennis = function() {
	this.initialize(img.tennis);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,179,160);


(lib.text1 = function() {
	this.initialize(img.text1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,561,139);


(lib.text2 = function() {
	this.initialize(img.text2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,358,138);


(lib.text3 = function() {
	this.initialize(img.text3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,338,131);


(lib.text4 = function() {
	this.initialize(img.text4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,585,124);


(lib.touch = function() {
	this.initialize(img.touch);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,239,239);


(lib.year = function() {
	this.initialize(img.year);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,835,31);// helper functions:

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


(lib.Symbol30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.year();
	this.instance.parent = this;
	this.instance.setTransform(-246,161,0.483,0.483);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol30, new cjs.Rectangle(-246,161,403.6,15), null);


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


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.backjpgcopy();
	this.instance.parent = this;
	this.instance.setTransform(-53,-30,1.056,1.056);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(-53,-30,2026.9,1140.2), null);


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

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:194.5},59,cjs.Ease.quadInOut).to({y:220.5},70,cjs.Ease.quadInOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35,89,285,263);


(lib.Symbol35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Symbol7();
	this.instance.parent = this;
	this.instance.setTransform(20.5,37,1,1,0,0,0,188.5,184);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:24.7,x:20.6,y:57.1},112,cjs.Ease.quadInOut).to({rotation:0,x:20.5,y:37},92,cjs.Ease.quadInOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-168,-147,377,368);


(lib.Symbol33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol3();
	this.instance.parent = this;
	this.instance.setTransform(98.5,1,1,1,0,0,0,89.5,80);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:21},49,cjs.Ease.quadInOut).to({y:1},50,cjs.Ease.quadInOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(9,-79,179,160);


(lib.Symbol29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.logo = new lib.Symbol3_1();
	this.logo.parent = this;
	this.logo.setTransform(134.4,39.3,1.033,1.033,0,0,0,90,28);

	this.timeline.addTween(cjs.Tween.get(this.logo).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol29, new cjs.Rectangle(322.5,134.3,281.1,85.8), null);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text3.png
	this.instance = new lib.Symbol14();
	this.instance.parent = this;
	this.instance.setTransform(227.8,315.1,1,1,0,0,0,131.8,51.1);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:295.1,alpha:1},19,cjs.Ease.quadInOut).wait(60).to({y:315.1,alpha:0},15,cjs.Ease.quadInOut).to({_off:true},1).wait(261));

	// medal.png
	this.instance_1 = new lib.Symbol19();
	this.instance_1.parent = this;
	this.instance_1.setTransform(228.1,106.8,0.084,1,0,0,0,83.2,106.8);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).to({regX:83.4,scaleX:1,x:227.4,alpha:1},19,cjs.Ease.quadInOut).wait(60).to({regX:83.2,scaleX:0.08,x:228.1,alpha:0},15,cjs.Ease.quadInOut).to({_off:true},1).wait(258));

	// text4.png
	this.instance_2 = new lib.Symbol13();
	this.instance_2.parent = this;
	this.instance_2.setTransform(228.1,312.4,1,1,0,0,0,228.1,48.4);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(84).to({_off:false},0).to({y:292.4,alpha:1},19,cjs.Ease.quadInOut).wait(60).to({y:312.4,alpha:0},15,cjs.Ease.quadInOut).to({_off:true},4).wait(174));

	// money1.png
	this.instance_3 = new lib.Symbol16();
	this.instance_3.parent = this;
	this.instance_3.setTransform(228.2,98.6,0.084,1,0,0,0,95.8,98.6);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(87).to({_off:false},0).to({regX:95.1,scaleX:1,x:228.1,alpha:1},19,cjs.Ease.quadInOut).wait(60).to({regX:95.8,scaleX:0.08,x:228.2,alpha:0},15,cjs.Ease.quadInOut).to({_off:true},1).wait(174));

	// text2.png
	this.instance_4 = new lib.Symbol15();
	this.instance_4.parent = this;
	this.instance_4.setTransform(227.6,317.8,1,1,0,0,0,139.6,53.8);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(170).to({_off:false},0).to({y:297.8,alpha:1},19,cjs.Ease.quadInOut).wait(60).to({y:317.8,alpha:0},15,cjs.Ease.quadInOut).to({_off:true},5).wait(87));

	// touch.png
	this.instance_5 = new lib.Symbol12();
	this.instance_5.parent = this;
	this.instance_5.setTransform(228.2,104.2,0.084,1,0,0,0,93.4,93.2);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(174).to({_off:false},0).to({regX:93.2,scaleX:1,alpha:1},19,cjs.Ease.quadInOut).wait(60).to({regX:93.4,scaleX:0.08,alpha:0},15,cjs.Ease.quadInOut).to({_off:true},1).wait(87));

	// text1.png
	this.instance_6 = new lib.Symbol17();
	this.instance_6.parent = this;
	this.instance_6.setTransform(226.7,318.1,1,1,0,0,0,218.7,54.1);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(257).to({_off:false},0).to({y:298.1,alpha:1},19,cjs.Ease.quadInOut).wait(60).to({y:318.1,alpha:0},15,cjs.Ease.quadInOut).wait(5));

	// money.png copy
	this.instance_7 = new lib.Symbol18();
	this.instance_7.parent = this;
	this.instance_7.setTransform(228.2,113,0.084,1,0,0,0,93.4,113);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(261).to({_off:false},0).to({regX:93.2,scaleX:1,alpha:1},19,cjs.Ease.quadInOut).wait(60).to({regX:93.4,scaleX:0.08,alpha:0},15,cjs.Ease.quadInOut).wait(1));

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

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.94,scaleY:0.94},19,cjs.Ease.quadInOut).to({scaleX:1,scaleY:1},20,cjs.Ease.quadInOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,517.6,155.3);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol6();
	this.instance.parent = this;
	this.instance.setTransform(508,385,1,1,0,0,0,960,540);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.09,scaleY:1.09,x:508.1},49,cjs.Ease.quadInOut).to({scaleX:1,scaleY:1,x:508},50,cjs.Ease.quadInOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-505,-185,2026.9,1140.2);


(lib.Symbol34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol8();
	this.instance.parent = this;
	this.instance.setTransform(374,153,1,1,-12.2,0,0,290.8,292.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:292.2,rotation:0,y:113.1},89,cjs.Ease.quadInOut).to({regY:292.1,rotation:-12.2,y:153},90,cjs.Ease.quadInOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(28.1,-193.9,691.8,694);


(lib.Symbol32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.Symbol11();
	this.instance.parent = this;
	this.instance.setTransform(-240.9,-214.8,1,1,0,0,0,228.1,176.2);

	this.instance_1 = new lib.Symbol4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-242.2,64.6,1,1,0,0,0,258.8,77.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol32, new cjs.Rectangle(-501,-127,517.6,269.3), null);


// stage content:
(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		window._setCanvasSize = function() {
			
		    var s = getWindowSize();
			
				defaultScale = 1,
			
				minWidth = 600,
				minHeight = 600,
			
				scaleW = s.iw / minWidth,
				scaleH = s.ih / minHeight,
				scaleWH = scaleW * scaleH;
		    
		    /* Position */
			
			_this.logo.x = s.iw * 0.5;
			_this.logo.y = s.ih * 0.1;
			
			_this.txt.x = s.iw * 0.5;
			_this.txt.y = s.ih * 0.2;
		
			_this.tank.x = s.iw * 0.2;
			_this.tank.y = s.ih * 0.5;	
			
			_this.vans.x = s.iw * 0.9;
			_this.vans.y = s.ih * 0.3;
			
			_this.button.x = s.iw * 0.5;
			_this.button.y = s.ih * 0.6;
			
			_this.back.x = s.iw * 0.5;
			_this.back.y = s.ih * 0.5;
			
			_this.leftpr.x = s.iw * 0.1;
			_this.leftpr.y = s.ih * 0.7;
			
			_this.rightpr.x = s.iw * 0.8;
			_this.rightpr.y = s.ih * 0.8;
			
			function setScale(scale) {
				//_this.girl.scaleX = _this.girl.scaleY = ((s.iw < s.ih) ? scale * 0.8 : scale * 0.7);
				//_this.logo.scaleX = _this.logo.scaleY = ((s.iw < s.ih) ? scale * 1.1 : scale);
				//_this.pr.scaleX = _this.pr.scaleY = ((s.iw < s.ih) ? scale * 0.6 : scale);
				
				_this.logo.scaleX = _this.logo.scaleY = scale;
				_this.txt.scaleX = _this.txt.scaleY = scale;
				_this.tank.scaleX = _this.tank.scaleY = scale;
				_this.vans.scaleX = _this.vans.scaleY = scale;
				_this.button.scaleX = _this.button.scaleY = scale;
				_this.back.scaleX = _this.back.scaleY = scale;
				_this.leftpr.scaleX = _this.leftpr.scaleY = scale;
				_this.rightpr.scaleX = _this.rightpr.scaleY = scale;
				
				
			}
			
			setScale(defaultScale);
		
		    /* Rescale */
		
		    if(s.iw < minWidth) {
		        setScale(scaleW);
		    }
		
		    if(s.ih < minHeight) {
		        setScale(scaleH);
		    }
		
		    if(s.iw < minWidth && s.ih < minHeight) {
		        setScale(scaleWH);
		    }
			
			if(s.iw < s.ih) {
				
				/*_this.girl.x = s.iw * 0.4;
				_this.girl.y = s.ih * 0.75;
				
				_this.logo.x = s.iw * 0.5;
				_this.logo.y = s.ih * 0.1;
				
				_this.txt.x = s.iw * 0.5;
				_this.txt.y = s.ih * 0.25;
				
				_this.pr.x = s.iw * 0.5;
				_this.pr.y = s.ih * 0.35;
				
				_this.button.x = s.iw * 0.5;
				_this.button.y = s.ih * 0.9;
				
				_this.back.x = s.iw * 0.8;
				_this.back.y = s.ih * 0.5;*/	
				
			}
				
		}
				
		window.onresize=function(){_setCanvasSize();}
		window.onresize();
		document.addEventListener("DOMContentLoaded", function(){ _setCanvasSize()});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Symbol 18
	this.button = new lib.Symbol32();
	this.button.parent = this;
	this.button.setTransform(510,470,1,1,0,0,0,-242,-128.5);

	this.timeline.addTween(cjs.Tween.get(this.button).wait(1));

	// Symbol 26
	this.txt = new lib.Symbol30();
	this.txt.parent = this;
	this.txt.setTransform(510,140,0.919,0.919,0,0,0,-47.1,169.1);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1));

	// Layer 3
	this.logo = new lib.Symbol29();
	this.logo.parent = this;
	this.logo.setTransform(510,62.6,1.308,1.308,0,0,0,460.8,175.8);

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

	// Layer 2
	this.back = new lib.Symbol2();
	this.back.parent = this;
	this.back.setTransform(512,385,1,1,0,0,0,512,384);

	this.timeline.addTween(cjs.Tween.get(this.back).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(7,200,2026.9,1140.2);
// library properties:
lib.properties = {
	id: 'FD400AA1CA164858827D9B8B1676C338',
	width: 1024,
	height: 768,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/backjpgcopy.jpg", id:"backjpgcopy"},
		{src:"images/basket.png", id:"basket"},
		{src:"images/buttonpngcopy.png", id:"buttonpngcopy"},
		{src:"images/logo.png", id:"logo"},
		{src:"images/medal.png", id:"medal"},
		{src:"images/moneypngcopy.png", id:"moneypngcopy"},
		{src:"images/money1.png", id:"money1"},
		{src:"images/shaiba.png", id:"shaiba"},
		{src:"images/soccer.png", id:"soccer"},
		{src:"images/tennis.png", id:"tennis"},
		{src:"images/text1.png", id:"text1"},
		{src:"images/text2.png", id:"text2"},
		{src:"images/text3.png", id:"text3"},
		{src:"images/text4.png", id:"text4"},
		{src:"images/touch.png", id:"touch"},
		{src:"images/year.png", id:"year"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['FD400AA1CA164858827D9B8B1676C338'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;