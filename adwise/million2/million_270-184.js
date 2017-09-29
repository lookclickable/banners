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



(lib.back = function() {
	this.initialize(img.back);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,501,256);


(lib.bee = function() {
	this.initialize(img.bee);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,74,78);


(lib.but = function() {
	this.initialize(img.but);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,139,140);


(lib.capt = function() {
	this.initialize(img.capt);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,98,142);


(lib.frame = function() {
	this.initialize(img.frame);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,119,118);


(lib.sleelwheel = function() {
	this.initialize(img.sleelwheel);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,96,96);


(lib.wheel = function() {
	this.initialize(img.wheel);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,270,271);


(lib.wheelback = function() {
	this.initialize(img.wheelback);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,339,341);// helper functions:

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


(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.wheel();
	this.instance.parent = this;
	this.instance.setTransform(-121,-121.5,0.897,0.897);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121,-121.5,242.1,243);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.wheel();
	this.instance.parent = this;
	this.instance.setTransform(-121,-121.5,0.897,0.897);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121,-121.5,242.1,243);


(lib.Symbol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.but();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.842,0.842);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol14, new cjs.Rectangle(0,0,117,117.9), null);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.frame();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.842,0.842);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol11, new cjs.Rectangle(0,0,100.2,99.4), null);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bee();
	this.instance.parent = this;
	this.instance.setTransform(29.2,0,0.748,0.748,30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol10, new cjs.Rectangle(0,0,77.1,78.2), null);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.capt();
	this.instance.parent = this;
	this.instance.setTransform(0,23.1,0.707,0.707,-19.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(0,0,98.9,117.8), null);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.sleelwheel();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(0,0,96,96), null);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Symbol14();
	this.instance.parent = this;
	this.instance.setTransform(58.5,58.9,1,1,0,0,0,58.5,58.9);
	this.instance.alpha = 0.148;
	this.instance.compositeOperation = "lighter";
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	// Layer 1
	this.instance_1 = new lib.but();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,0.842,0.842);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,117,117.9);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol13();
	this.instance.parent = this;
	this.instance.setTransform(58.5,58.9,1,1,0,0,0,58.5,58.9);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol12, new cjs.Rectangle(0,0,117,117.9), null);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol10();
	this.instance.parent = this;
	this.instance.setTransform(38.5,39.1,1,1,0,0,0,38.5,39.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:32.5},4,cjs.Ease.get(-1)).to({y:24.1},5,cjs.Ease.get(1)).to({y:30.1},4,cjs.Ease.get(-1)).to({y:39.1},6,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,77.1,78.2);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol8();
	this.instance.parent = this;
	this.instance.setTransform(49.4,58.9,1,1,0,0,0,49.4,58.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:49.5,rotation:-7.3,x:50.5,y:58.7},19,cjs.Ease.get(-1)).to({regX:49.4,rotation:-15,x:51.5,y:58.4},20,cjs.Ease.get(1)).to({regX:49.5,rotation:-7.3,x:50.5,y:58.7},20,cjs.Ease.get(-1)).to({regX:49.4,rotation:0,x:49.4,y:58.9},20,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,98.9,117.8);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol6();
	this.instance.parent = this;
	this.instance.setTransform(48,48,1,1,0,0,0,48,48);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360},49).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,96,96);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol12();
	this.instance.parent = this;
	this.instance.setTransform(58.5,58.9,1,1,0,0,0,58.5,58.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,117,117.9), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol3();
	this.instance.parent = this;
	this.instance.setTransform(58.5,58.9,1,1,0,0,0,58.5,58.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.04,scaleY:1.04,x:58.6},11,cjs.Ease.get(-1)).to({scaleX:1.09,scaleY:1.09,x:58.5,y:59},14,cjs.Ease.get(1)).to({regX:58.4,scaleX:1.04,scaleY:1.04},12,cjs.Ease.get(-1)).to({regX:58.5,scaleX:1,scaleY:1,y:58.9},12,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,117,117.9);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.Symbol11();
	this.instance.parent = this;
	this.instance.setTransform(120.6,43.1,1,1,0,0,0,50.1,49.6);
	this.instance.alpha = 0.23;
	this.instance.compositeOperation = "lighter";
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(99).to({_off:false},0).to({_off:true},5).wait(5).to({_off:false,x:121.1,y:43.6},0).to({_off:true},5).wait(5).to({_off:false},0).to({_off:true},5).wait(4).to({_off:false},0).to({_off:true},5).wait(67));

	// Layer 2
	this.instance_1 = new lib.frame();
	this.instance_1.parent = this;
	this.instance_1.setTransform(70,-7,0.842,0.842);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(200));

	// Layer 1
	this.instance_2 = new lib.Tween1("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(121.1,121.5);

	this.instance_3 = new lib.Tween2("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(121.1,121.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_2}]},79).to({state:[{t:this.instance_2}]},21).to({state:[{t:this.instance_2}]},33).to({state:[{t:this.instance_3}]},65).to({state:[{t:this.instance_2}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:1,scaleY:1,rotation:549.5,x:121},79).to({regX:-0.1,regY:0.1,scaleX:1,scaleY:1,rotation:629.9,x:121.2},21,cjs.Ease.get(1)).wait(33).to({startPosition:0},0).to({_off:true,regX:0,regY:0,scaleX:1,scaleY:1,rotation:720,x:121.1},65,cjs.Ease.get(-1)).wait(1).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-7,242.1,250);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol2();
	this.instance.parent = this;
	this.instance.setTransform(131.5,142.4,1,1,0,0,0,58.5,58.9);

	this.instance_1 = new lib.Symbol1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(132,150.5,1,1,0,0,0,121,121.5);

	this.instance_2 = new lib.wheelback();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,0,0.783,0.783);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,265.5,272), null);


// stage content:
(lib.million_270184 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Symbol 9
	this.instance = new lib.Symbol9();
	this.instance.parent = this;
	this.instance.setTransform(246.5,49.9,1,1,0,0,0,38.5,39.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Symbol 4
	this.instance_1 = new lib.Symbol4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(141.8,157,1,1,0,0,0,132.8,136);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// 600 TL TUTARINDA %100 HOŞGELDİN BONUSU
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgKAjIgJgGQgEgDgCgEIgCgFIAAgGIAAguIAPAAIAAAuIABAFIADADIAEADIAEABIAFgBIAEgDIADgDIABgFIAAguIAPAAIAAAuIAAAGIgCAFQgCAEgEADIgJAGQgFABgGAAQgFAAgFgBg");
	this.shape.setTransform(261.7,9.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgJAkQgFgCgEgDQgFgCgCgFIgCgEIgBgGIAPAAIABAFIAEACQACACAGABQAGAAADgCIAEgCIABgFQAAgDgCgCIgDgDQgEgBgGgBIgJgBQgFgBgDgCQgEgCgCgEIgCgDIgBgGIABgFIACgEQACgEAEgEQADgCAFgBQAFgCAFAAQAFAAAEACQAFAAAEADQAEACACAFIACAEIAAAGIgOAAIgBgEIgDgDQgEgBgEgBQgEABgEACIgDADIgBADIABAEIADADQADABAGABIALABIAIADQAEACACAEIACAEIABAGIgBAGIgCAEQgCAEgEADIgJAEIgLABQgEAAgFgBg");
	this.shape_1.setTransform(254.1,9.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgKAjIgJgGQgEgDgCgEIgCgFIAAgGIAAguIAPAAIAAAuIABAFIADADIAEADIAEABIAFgBIAEgDIADgDIABgFIAAguIAPAAIAAAuIAAAGIgCAFQgCAEgEADIgJAGQgFABgGAAQgFAAgFgBg");
	this.shape_2.setTransform(246.5,9.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAaAkIgogoIAAAoIgPAAIAAhGIAFAAIAmAnIAAgnIAQAAIAABGg");
	this.shape_3.setTransform(238.4,9.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgGAkIgHgCIgGgDIgFgDIgFgGIgDgGIgCgHIgBgJIABgHIACgHQABgEADgDIAEgFIAGgEIAGgDIAGgCIAGAAIAHAAIAHACIAGADIAFAEIAFAFIADAHIACAHIABAHIAAAIIgCAHIgEAGIgEAGIgFAEIgGADIgHACIgIABIgGgBgAgHgUQgEACgCACQgDADgCAFQgCAEAAAEQAAAGACAEIAEAIIAHADQAEACADAAIAIgCIAHgDQADgDABgFQACgEAAgGQAAgFgCgEQgBgEgDgDQgDgCgEgCIgIgCIgHACg");
	this.shape_4.setTransform(229.7,9.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgbAjIAAhFIAeAAQAEAAAEABQAEABADADQAEADABAEQACAEgBAFQAAADgBAEQgCAEgEACIAFABIADAEIACAEIAAAFQAAAFgBAEQgBAEgDACQgDADgFACQgDABgGAAgAgMAWIAQAAQAEAAACgCQACgCABgEIgBgEIgDgDQgCgBgDAAIgQAAgAgMgFIANAAQAEAAACgCQACgCAAgEQABgEgDgCQgCgCgEAAIgNAAg");
	this.shape_5.setTransform(221.8,9.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAZAkIgngoIAAAoIgPAAIAAhGIAFAAIAnAnIAAgnIAPAAIAABGg");
	this.shape_6.setTransform(210.4,9.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgQAvIAAgMIAKAAIAAguIgJAAIAAgMIAgAAIAAAMIgJAAIAAAuIAKAAIAAAMgAgGggQgCgCAAgEQAAgDACgCQADgDADAAQAEAAACADQADACAAADQAAAEgDACQgCACgEAAQgDAAgDgCg");
	this.shape_7.setTransform(203.6,8.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgdAjIAAhFIAaAAIAHAAIAHADIAGADIAFAEIADAGIADAGIACAGIAAAGIAAAGIgCAHIgCAGIgEAFIgFAFIgGADIgHACIgHABgAgOAWIALAAQADAAAEgCQAEgCACgDIAEgHIABgIIgBgHIgEgHQgCgDgEgCQgEgCgDAAIgLAAg");
	this.shape_8.setTransform(197.2,9.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgWAkIAAhGIAQAAIAAA4IAcAAIAAAOg");
	this.shape_9.setTransform(190.1,9.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgVAkIAAhGIAqAAIAAANIgbAAIAAAPIAZAAIAAALIgZAAIAAAQIAcAAIAAAPg");
	this.shape_10.setTransform(183.6,9.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgFAkIgGgCIgHgDIgFgEIgFgFIgDgHIgCgHIgBgIIABgHIACgIIAEgGIAEgFIAFgEIAHgDIAGgCIAGAAIAKABQAGABAEADQAEADADAEQAEAHABAEIgPAAIgDgFIgEgDIgEgBIgGgBQgEAAgEACQgEACgCADQgDADgBAEQgCAEAAAEQAAAFACAEIAEAHQADADAEACQADABAEAAIAHAAIAGgCQACgCACgDQACgCABgEIgTAAIAAgMIAhAAIAAAJIgCAKQgCAFgEAEQgDAEgEACIgJAEIgKABIgGAAg");
	this.shape_11.setTransform(175.9,9.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgEAwIgGgCIABgIQACACAEAAQADAAABgDQAAAAAAgBQAAAAAAgBQAAAAgBAAQAAgBAAAAIgFgBIACgJQgFAAgEgBIgIgFQgEgDgBgDQgDgFAAgFIAPAAIABAEIAEADQACACAGABQAFAAAEgDIAEgCIABgEQAAgDgCgBIgDgDQgEgBgGgBIgJgBQgFgBgDgDQgEgCgCgEIgCgEIgBgFIABgFIACgEQACgFAEgCQADgDAFgCIAKgBIAJABQAFACAEACQAEADACAEIACAFIAAAFIgOAAQAAAAAAgBQAAAAAAgBQAAAAgBgBQAAAAAAgBIgDgDQgDgCgFAAQgEAAgEACIgCADQgBAAAAABQAAAAAAABQgBABAAAAQAAABAAAAIABAEIADACQADACAGAAIALACIAIADQAEADACAEIACAEIABAFQAAAEgCAEQgCAEgDACIgHAFIgIACIgCAGIAFABIACADQACADgBAFQgBADgDACIgHACIgCAAIgEgBg");
	this.shape_12.setTransform(167.9,10.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgGAkIgHgCIgGgDIgFgDIgFgGIgDgGIgCgHIgBgJIABgHIACgHQABgEADgDIAEgFIAGgEIAGgDIAGgCIAGAAIAHAAIAHACIAGADIAFAEIAFAFIADAHIACAHIABAHIAAAIIgCAHIgEAGIgEAGIgFAEIgGADIgHACIgIABIgGgBgAgHgUQgEACgCACQgDADgCAFQgCAEAAAEQAAAGACAEIAEAIIAHADQAEACADAAIAIgCIAHgDQADgDABgFQACgEAAgGQAAgFgCgEQgBgEgDgDQgDgCgEgCIgIgCIgHACg");
	this.shape_13.setTransform(159.9,9.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAOAkIAAgfIgbAAIAAAfIgPAAIAAhGIAPAAIAAAbIAbAAIAAgbIAPAAIAABGg");
	this.shape_14.setTransform(151.4,9.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgJAjQgFgCgEgDQgEgDgCgEQgCgFAAgGIAAgXQAAgGACgFQACgEAEgDQAEgDAFgCQAFgCAEAAQAFAAAFACQAFACADADQAEADADAEQABAFAAAGIAAAXQAAAGgBAFQgDAEgEADQgDADgFACQgFACgFAAQgEAAgFgCgAgHgUIgCADIgCAEIAAAGIAAAPIAAAGIACAEIACADQADACAEAAQAFAAADgCIACgDIACgEIAAgGIAAgPIAAgGIgCgEIgCgDQgDgCgFAAQgEAAgDACg");
	this.shape_15.setTransform(140.5,9.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgJAjQgFgCgEgDQgDgDgCgEQgCgFgBgGIAAgXQABgGACgFQACgEADgDQAEgDAFgCQAEgCAFAAQAFAAAFACQAFACADADQAFADABAEQACAFAAAGIAAAXQAAAGgCAFQgBAEgFADQgDADgFACQgFACgFAAQgFAAgEgCgAgHgUIgDADIgBAEIAAAGIAAAPIAAAGIABAEIADADQADACAEAAQAFAAADgCIADgDIABgEIAAgGIAAgPIAAgGIgBgEIgDgDQgDgCgFAAQgEAAgDACg");
	this.shape_16.setTransform(133.1,9.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgSAkIAAgMIAMAAIAAgvIgLAAIAAgLIAYAAIAAA6IAMAAIAAAMg");
	this.shape_17.setTransform(126.9,9.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AATAkIgHgDIgDgGQgCgEAAgEQAAgEACgEIADgGIAHgDQADgBADAAQADAAADABIAHADIADAGQACAEAAAEQAAAEgCAEIgDAGIgHADQgDABgDAAQgDAAgDgBgAAUANQgCACAAAEQAAAEACACQACACADAAQABAAAAAAQABAAAAAAQABAAAAgBQABAAAAgBQADgCAAgEQAAgEgDgCQAAgBgBAAQAAgBgBAAQAAAAgBAAQAAAAgBAAQgDAAgCACgAgXAjIAihFIANAAIghBFgAgfgBIgFgDIgFgGIgBgIQAAgEABgEIAFgGIAFgDQADgBAEAAIAHABIAFADQAEADABADQACAEgBAEQABAEgCAEQgBADgEADIgFADIgHABIgHgBgAgdgYQgCACAAAEQAAAEACACQABABABAAQAAAAABABQAAAAABAAQAAAAABAAQADAAACgCQACgCAAgEQAAgEgCgCQgCgCgDAAQgBAAAAAAQgBAAAAAAQgBAAAAABQgBAAgBABg");
	this.shape_18.setTransform(119,9.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FDD700").s().p("AAUAkIgGgMIgcAAIgGAMIgPAAIAAgCIAghFIAGAAIAhBFIAAACgAAKALIgKgWIgJAWIATAAg");
	this.shape_19.setTransform(107.2,9.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FDD700").s().p("AgdAjIAAhFIAaAAIAHAAIAHADIAGADIAFAEIADAGIADAGIACAGIAAAGIAAAGIgCAHIgCAGIgEAFIgFAFIgGADIgHACIgHABgAgOAWIALAAQADAAAEgCQAEgCACgDIAEgHIABgIIgBgHIgEgHQgCgDgEgCQgEgCgDAAIgLAAg");
	this.shape_20.setTransform(99.6,9.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FDD700").s().p("AAZAkIgngoIAAAoIgPAAIAAhGIAFAAIAnAnIAAgnIAPAAIAABGg");
	this.shape_21.setTransform(91.2,9.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FDD700").s().p("AgQAkIAAgNIAKAAIAAguIgJAAIAAgLIAgAAIAAALIgJAAIAAAuIAKAAIAAANg");
	this.shape_22.setTransform(84.4,9.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FDD700").s().p("AANAkIgOgYIgMAAIAAAYIgPAAIAAhGIAdAAIALACQAEACADADIAFAIQACAEAAAFIgBAGQgBADgCACIgEAFQgCADgDABIAQAXIAAADgAgOAAIAPAAIAEgBIADgCIACgDIABgFIgBgDIgCgEIgDgDIgEAAIgPAAg");
	this.shape_23.setTransform(78.2,9.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FDD700").s().p("AAUAkIgFgMIgdAAIgFAMIgQAAIAAgCIAhhFIAFAAIAhBFIAAACgAAJALIgJgWIgJAWIASAAg");
	this.shape_24.setTransform(70.2,9.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FDD700").s().p("AgGAkIAAg5IgTAAIAAgNIAzAAIAAANIgTAAIAAA5g");
	this.shape_25.setTransform(63.6,9.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FDD700").s().p("AgKAjIgJgGQgEgDgCgEIgCgFIAAgGIAAguIAPAAIAAAuIABAFIADADIAEADIAEABIAFgBIAEgDIADgDIABgFIAAguIAPAAIAAAuIAAAGIgCAFQgCAEgEADIgJAGQgFABgGAAQgFAAgFgBg");
	this.shape_26.setTransform(56.4,9.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FDD700").s().p("AgHAkIAAg5IgSAAIAAgNIAzAAIAAANIgTAAIAAA5g");
	this.shape_27.setTransform(49.3,9.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FDD700").s().p("AgVAkIAAhGIAPAAIAAA4IAdAAIAAAOg");
	this.shape_28.setTransform(40.7,9.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FDD700").s().p("AgHAkIAAg5IgSAAIAAgNIAzAAIAAANIgSAAIAAA5g");
	this.shape_29.setTransform(34.1,9.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FDD700").s().p("AgJAjQgFgCgDgDQgEgDgDgEQgCgFABgGIAAgXQgBgGACgFQADgEAEgDQADgDAFgCQAFgCAEAAQAFAAAFACQAFACAEADQAEADACAEQACAFAAAGIAAAXQAAAGgCAFQgCAEgEADQgEADgFACQgFACgFAAQgEAAgFgCgAgHgUIgCADIgCAEIAAAGIAAAPIAAAGIACAEIACADQADACAEAAQAFAAADgCIACgDIACgEIAAgGIAAgPIAAgGIgCgEIgCgDQgDgCgFAAQgEAAgDACg");
	this.shape_30.setTransform(24.3,9.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FDD700").s().p("AgJAjQgFgCgEgDQgDgDgCgEQgDgFAAgGIAAgXQAAgGADgFQACgEADgDQAEgDAFgCQAEgCAFAAQAGAAAEACQAFACADADQAFADACAEQABAFAAAGIAAAXQAAAGgBAFQgCAEgFADQgDADgFACQgEACgGAAQgFAAgEgCgAgHgUIgDADIgBAEIAAAGIAAAPIAAAGIABAEIADADQADACAEAAQAFAAADgCIACgDIACgEIAAgGIAAgPIAAgGIgCgEIgCgDQgDgCgFAAQgEAAgDACg");
	this.shape_31.setTransform(16.9,9.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FDD700").s().p("AgKAjQgFgCgDgCQgEgEgCgEIgBgFIgBgGIACgHIADgHIAUghIAQAAIgPAbIACgBQAGgBAEACQAFABADADQADADACAEQACAEAAAFIgBAGIgBAFQgCAEgEAEQgEACgFACQgEABgGAAQgFAAgFgBgAgEACIgEACIgCAEIgBAEIABAFIACAEIAEACIAEABIAFgBIADgCQABgBAAAAQABAAAAgBQAAAAAAgBQABAAAAgBIABgFIgBgEQAAgBgBAAQAAgBAAAAQAAgBgBAAQAAAAgBgBIgDgCIgFgBIgEABg");
	this.shape_32.setTransform(9.8,9.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Symbol 5
	this.instance_2 = new lib.Symbol5();
	this.instance_2.parent = this;
	this.instance_2.setTransform(266.5,132,1,1,0,0,0,48,48);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Symbol 5
	this.instance_3 = new lib.Symbol5();
	this.instance_3.parent = this;
	this.instance_3.setTransform(27,166,1,1,0,0,0,48,48);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Symbol 7
	this.instance_4 = new lib.Symbol7();
	this.instance_4.parent = this;
	this.instance_4.setTransform(21,69.9,1,1,0,0,0,49.4,58.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// back.png
	this.instance_5 = new lib.back();
	this.instance_5.parent = this;
	this.instance_5.setTransform(0,0,0.539,0.719);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(106.6,92,343,293);
// library properties:
lib.properties = {
	id: 'FDAA72116B2F48AE96C494BADB8CCFD8',
	width: 270,
	height: 184,
	fps: 25,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/back.jpg", id:"back"},
		{src:"images/bee.png", id:"bee"},
		{src:"images/but.png", id:"but"},
		{src:"images/capt.png", id:"capt"},
		{src:"images/frame.png", id:"frame"},
		{src:"images/sleelwheel.png", id:"sleelwheel"},
		{src:"images/wheel.png", id:"wheel"},
		{src:"images/wheelback.png", id:"wheelback"}
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
an.compositions['FDAA72116B2F48AE96C494BADB8CCFD8'] = {
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