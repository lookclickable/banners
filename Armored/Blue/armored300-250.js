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
p.nominalBounds = new cjs.Rectangle(0,0,800,418);


(lib.block1 = function() {
	this.initialize(img.block1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,373,151);


(lib.blocks2 = function() {
	this.initialize(img.blocks2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,321,89);


(lib.bodybro = function() {
	this.initialize(img.bodybro);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,453,151);


(lib.button = function() {
	this.initialize(img.button);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,78);


(lib.dulendbro = function() {
	this.initialize(img.dulendbro);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,126,22);


(lib.dullobro = function() {
	this.initialize(img.dullobro);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,161,25);


(lib.fireloop1_0 = function() {
	this.initialize(img.fireloop1_0);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,256,256);


(lib.fireloop1_1 = function() {
	this.initialize(img.fireloop1_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,256,256);


(lib.fireloop1_2 = function() {
	this.initialize(img.fireloop1_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,256,256);


(lib.fireloop1_3 = function() {
	this.initialize(img.fireloop1_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,256,256);


(lib.fireloop1_4 = function() {
	this.initialize(img.fireloop1_4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,256,256);


(lib.fireloop1_5 = function() {
	this.initialize(img.fireloop1_5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,256,256);


(lib.headbro = function() {
	this.initialize(img.headbro);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,170,50);


(lib.heads = function() {
	this.initialize(img.heads);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,273,105);


(lib.locator = function() {
	this.initialize(img.locator);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,10,104);


(lib.logorealaction = function() {
	this.initialize(img.logorealaction);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,87);


(lib.pooop = function() {
	this.initialize(img.pooop);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,114,44);


(lib.stone = function() {
	this.initialize(img.stone);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,800,176);


(lib.wheelbro = function() {
	this.initialize(img.wheelbro);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,79,87);


(lib.wheels = function() {
	this.initialize(img.wheels);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,426,139);


(lib.winas = function() {
	this.initialize(img.winas);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,124,84);// helper functions:

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


(lib.Symbol40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#990000","rgba(102,0,0,0)"],[0.008,0.843],0,0,0,0,0,135).s().p("AutOPQmGl5AAoWQAAoUGGl6QGGl5InAAQIoAAGGF5QGGF6AAIUQAAIWmGF5QmGF5ooAAQonAAmGl5g");
	this.shape.setTransform(133.2,128.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol40, new cjs.Rectangle(0,0,266.4,257.6), null);


(lib.Symbol39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.blocks2();
	this.instance.parent = this;
	this.instance.setTransform(0,31);

	this.instance_1 = new lib.blocks2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(306,15,0.624,0.624);

	this.instance_2 = new lib.blocks2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(501,0,0.416,0.416);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol39, new cjs.Rectangle(0,0,634.5,120), null);


(lib.Symbol38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.wheelbro();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol38, new cjs.Rectangle(0,0,79,87), null);


(lib.Symbol37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.dullobro();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol37, new cjs.Rectangle(0,0,161,25), null);


(lib.Symbol36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.dulendbro();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol36, new cjs.Rectangle(0,0,126,22), null);


(lib.Symbol35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.headbro();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol35, new cjs.Rectangle(0,0,170,50), null);


(lib.Symbol34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bodybro();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol34, new cjs.Rectangle(0,0,453,151), null);


(lib.Symbol33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.pooop();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1.038,1.038);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol33, new cjs.Rectangle(0,0,118.3,45.7), null);


(lib.Symbol32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.heads();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol32, new cjs.Rectangle(0,0,273,105), null);


(lib.Symbol31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.wheels();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol31, new cjs.Rectangle(0,0,426,139), null);


(lib.Symbol30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.back();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol30, new cjs.Rectangle(0,0,800,418), null);


(lib.Symbol26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.button();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.474,0.474);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol26, new cjs.Rectangle(0,0,142.1,37), null);


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.locator();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol16, new cjs.Rectangle(0,0,10,104), null);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.winas();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol10, new cjs.Rectangle(0,0,124,84), null);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.block1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(0,0,373,151), null);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.logorealaction();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.66,0.66);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(0,0,197.9,57.4), null);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.fireloop1_0();
	this.instance.parent = this;

	this.instance_1 = new lib.fireloop1_1();
	this.instance_1.parent = this;

	this.instance_2 = new lib.fireloop1_2();
	this.instance_2.parent = this;

	this.instance_3 = new lib.fireloop1_3();
	this.instance_3.parent = this;

	this.instance_4 = new lib.fireloop1_4();
	this.instance_4.parent = this;

	this.instance_5 = new lib.fireloop1_5();
	this.instance_5.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_5}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,256,256);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","rgba(255,255,114,0)"],[0,1],0,0,0,0,0,40.6).s().p("AgQGLQikgHhvh5Qhuh4AHijQAHikB4hvQB5huCjAHQCkAHBuB4QBvB5gHCjQgHCkh5BuQhxBpiYAAIgSgBg");
	this.shape.setTransform(39.6,39.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,79.2,79.2), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.stone();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,800,176), null);


(lib.Symbol27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Symbol26();
	this.instance.parent = this;
	this.instance.setTransform(71,18.4,1,1,0,0,0,71,18.4);
	this.instance.alpha = 0.18;
	this.instance.compositeOperation = "lighter";
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	// Layer 1
	this.instance_1 = new lib.Symbol26();
	this.instance_1.parent = this;
	this.instance_1.setTransform(71,18.4,1,1,0,0,0,71,18.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,142.1,37);


(lib.Symbol23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol38();
	this.instance.parent = this;
	this.instance.setTransform(39.5,43.5,1,1,0,0,0,39.5,43.5);
	this.instance.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(-29, -8, 7, 0))];
	this.instance.cache(-2,-2,83,91);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol23, new cjs.Rectangle(0,0,83,91), null);


(lib.Symbol22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol34();
	this.instance.parent = this;
	this.instance.setTransform(226.5,75.5,1,1,0,0,0,226.5,75.5);
	this.instance.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(18, 2, 39, 0))];
	this.instance.cache(-2,-2,457,155);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol22, new cjs.Rectangle(0,0,457,155), null);


(lib.Symbol21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol35();
	this.instance.parent = this;
	this.instance.setTransform(85,25,1,1,0,0,0,85,25);
	this.instance.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(1, -8, 59, 0))];
	this.instance.cache(-2,-2,174,54);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol21, new cjs.Rectangle(0,0,174,54), null);


(lib.Symbol20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol37();
	this.instance.parent = this;
	this.instance.setTransform(80.5,12.5,1,1,0,0,0,80.5,12.5);
	this.instance.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(1, -8, 59, 0))];
	this.instance.cache(-2,-2,165,29);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol20, new cjs.Rectangle(0,0,165,29), null);


(lib.Symbol19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol36();
	this.instance.parent = this;
	this.instance.setTransform(63,11,1,1,0,0,0,63,11);
	this.instance.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(1, -8, 59, 0))];
	this.instance.cache(-2,-2,130,26);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol19, new cjs.Rectangle(0,0,130,26), null);


(lib.Symbol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol31();
	this.instance.parent = this;
	this.instance.setTransform(213,69.5,1,1,0,0,0,213,69.5);
	this.instance.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(1, -8, 59, 0))];
	this.instance.cache(-2,-2,430,143);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol15, new cjs.Rectangle(0,0,430,143), null);


(lib.Symbol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol32();
	this.instance.parent = this;
	this.instance.setTransform(135.5,54.5,1,1,0,0,0,136.5,52.5);
	this.instance.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(1, -8, 59, 0))];
	this.instance.cache(-2,-2,277,109);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol14, new cjs.Rectangle(-1,2,277,109), null);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol33();
	this.instance.parent = this;
	this.instance.setTransform(59.1,23.8,1,1,0,0,0,59.1,22.8);
	this.instance.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(1, -8, 59, 0))];
	this.instance.cache(-2,-2,122,50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol13, new cjs.Rectangle(0,1,122,49), null);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol5();
	this.instance.parent = this;
	this.instance.setTransform(354,80.6,1.6,1.484,0,-4.7,175.3,38,51.1);
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol12, new cjs.Rectangle(0,0,439.6,412.2), null);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol5();
	this.instance.parent = this;
	this.instance.setTransform(46.6,59.2,1.131,0.836,1.2,0,0,37.9,51.1);
	this.instance.compositeOperation = "lighter";

	this.instance_1 = new lib.Symbol5();
	this.instance_1.parent = this;
	this.instance_1.setTransform(34.4,44.3,0.868,0.868,0,0,0,38,51);
	this.instance_1.compositeOperation = "lighter";

	this.instance_2 = new lib.Symbol10();
	this.instance_2.parent = this;
	this.instance_2.setTransform(148.8,122.4,1,1,0,0,0,62,42);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol11, new cjs.Rectangle(0,0,294.1,235.9), null);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Symbol40();
	this.instance.parent = this;
	this.instance.setTransform(50.5,110.2,2.589,1.255,0,0,0,133.2,128.8);
	this.instance.compositeOperation = "lighter";

	this.instance_1 = new lib.Symbol40();
	this.instance_1.parent = this;
	this.instance_1.setTransform(122.7,250.6,1.703,1.255,0,0,0,133.2,128.8);
	this.instance_1.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Layer 1
	this.instance_2 = new lib.Symbol39();
	this.instance_2.parent = this;
	this.instance_2.setTransform(317.2,29,1,1,0,0,0,317.2,60);
	this.instance_2.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(11, -21, 59, 0))];
	this.instance_2.cache(-2,-2,639,124);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(-294.4,-51.4,932.5,463.6), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol30();
	this.instance.parent = this;
	this.instance.setTransform(400,209,1,1,0,0,0,400,209);
	this.instance.filters = [new cjs.ColorFilter(0.2, 0.2, 0.2, 1, 0, 27.2, 55.2, 0), new cjs.ColorMatrixFilter(new cjs.ColorMatrix(-15, 0, 0, 0))];
	this.instance.cache(-2,-2,804,422);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,804,422), null);


(lib.Symbol28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol27();
	this.instance.parent = this;
	this.instance.setTransform(71,18.4,1,1,0,0,0,71,18.4);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol28, new cjs.Rectangle(0,0,142.1,37), null);


(lib.Symbol25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol28();
	this.instance.parent = this;
	this.instance.setTransform(71,18.4,1,1,0,0,0,71,18.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.06,scaleY:1.06},24,cjs.Ease.quadInOut).to({scaleX:1,scaleY:1},25,cjs.Ease.quadInOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,142.1,37);


(lib.Symbol24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_60 = function() {
		this.parent.btnMouseHandler();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(60).call(this.frame_60).wait(190));

	// Symbol 4
	this.instance = new lib.Symbol4();
	this.instance.parent = this;
	this.instance.setTransform(-12.3,-0.1,2.638,2.229,-13.5,0,0,39.2,39.2);
	this.instance.alpha = 0.371;
	this.instance.compositeOperation = "lighter";
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(60).to({_off:false},0).to({regX:39.1,regY:39.1,scaleX:3.46,scaleY:2.92,x:-12.6,y:-0.2,alpha:0},6).to({_off:true},1).wait(183));

	// Symbol 4
	this.instance_1 = new lib.Symbol4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-0.2,11.1,1.571,0.712,3.5,0,0,39.2,39.5);
	this.instance_1.compositeOperation = "lighter";
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(60).to({_off:false},0).to({regX:39.1,regY:39.3,scaleX:1.76,scaleY:0.8,x:-0.3,y:11,alpha:0},6).to({_off:true},1).wait(183));

	// Symbol 5
	this.instance_2 = new lib.Symbol5();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-49.4,7.9,0.226,0.374,-92.4,0,0,126.8,127.8);
	this.instance_2.compositeOperation = "lighter";
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(60).to({_off:false},0).to({regX:126.5,regY:127.9,scaleX:0.2,scaleY:0.33,x:-41.6,y:8.1,alpha:0},6).to({_off:true},1).wait(183));

	// Symbol 23
	this.instance_3 = new lib.Symbol23();
	this.instance_3.parent = this;
	this.instance_3.setTransform(1361,83,0.819,0.819,0,0,0,39.6,43.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:39.8,rotation:16.7,x:574.2,y:135.3},29,cjs.Ease.get(0.58)).to({regX:39.6,rotation:-11.5,x:519.2,y:139.7},10,cjs.Ease.get(1)).to({scaleX:0.82,scaleY:0.82,rotation:0,skewX:-10,skewY:-11.4,x:520.8},5,cjs.Ease.get(1)).wait(15).to({skewX:-3.8,skewY:-5.2,x:532.4,y:140},5).wait(140).to({regX:39.8,regY:43.9,scaleX:0.83,scaleY:0.83,skewX:-22.9,skewY:-31,x:489.8,y:140.5},10,cjs.Ease.get(-1)).to({regX:39.6,regY:43.6,scaleX:0.86,scaleY:0.85,skewX:-26.5,skewY:-27.9,x:-152.6,y:146.2},30,cjs.Ease.get(-0.6)).wait(6));

	// Symbol 23
	this.instance_4 = new lib.Symbol23();
	this.instance_4.parent = this;
	this.instance_4.setTransform(1286.3,86.4,0.874,0.874,0,0,0,39.5,43.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regX:39.6,regY:43.6,rotation:21.2,x:499.5,y:138.7},29,cjs.Ease.get(0.58)).to({regX:39.5,rotation:-12,x:444.5,y:143.2},10,cjs.Ease.get(1)).to({regX:39.6,scaleX:0.88,scaleY:0.87,rotation:0,skewX:-10.5,skewY:-11.9,x:446.1,y:143.1},5,cjs.Ease.get(1)).wait(15).to({regX:39.5,skewX:-5.5,skewY:-6.9,x:457.6,y:143.5},5).wait(140).to({scaleX:0.88,scaleY:0.88,skewX:-20.3,skewY:-28,x:414.6,y:143.8},10,cjs.Ease.get(-1)).to({scaleX:0.92,scaleY:0.91,skewX:-33.7,skewY:-35.1,x:-231,y:149.9},30,cjs.Ease.get(-0.6)).wait(6));

	// Symbol 23
	this.instance_5 = new lib.Symbol23();
	this.instance_5.parent = this;
	this.instance_5.setTransform(1204.9,90.6,0.937,0.937,0,0,0,39.6,43.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regY:43.6,rotation:15,x:418,y:143},29,cjs.Ease.get(0.58)).to({rotation:-12.7,x:363.1,y:147.4},10,cjs.Ease.get(1)).to({scaleX:0.94,scaleY:0.93,rotation:0,skewX:-11.2,skewY:-12.6,x:364.5},5,cjs.Ease.get(1)).wait(15).to({skewX:-7.5,skewY:-8.9,x:376.1,y:147.7},5).wait(140).to({regX:39.8,regY:43.8,scaleX:0.94,scaleY:0.94,skewX:-20.8,skewY:-28.2,x:333,y:148.1},10,cjs.Ease.get(-1)).to({regX:39.6,regY:43.7,scaleX:0.99,scaleY:0.98,skewX:-31.7,skewY:-33.1,x:-316.4,y:154.5},30,cjs.Ease.get(-0.6)).wait(6));

	// Symbol 23
	this.instance_6 = new lib.Symbol23();
	this.instance_6.parent = this;
	this.instance_6.setTransform(1118.3,93.4,1,1,0,0,0,39.5,43.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({rotation:15.2,x:331.3,y:145.6},29,cjs.Ease.get(0.58)).to({regX:39.6,regY:43.6,rotation:-9,x:276.6,y:150.1},10,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,rotation:0,skewX:-7.4,skewY:-8.9,x:278},5,cjs.Ease.get(1)).wait(15).to({skewX:-2.5,skewY:-3.9,x:289.4,y:150.4},5).to({skewY:-3.9},5).wait(135).to({regY:43.8,scaleX:1.01,scaleY:1,skewX:-18.2,skewY:-23,x:244.6,y:149.9},10,cjs.Ease.get(-1)).to({regY:43.6,scaleX:1.05,scaleY:1.04,skewX:-32.9,skewY:-34.4,x:-407.1,y:157.2},30,cjs.Ease.get(-0.6)).wait(6));

	// Symbol 21
	this.instance_7 = new lib.Symbol21();
	this.instance_7.parent = this;
	this.instance_7.setTransform(1194.6,-29.2,1,1,0,0,0,85,25);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({regY:25.1,rotation:-0.7,x:352.2,y:27.7},39,cjs.Ease.get(1)).to({regY:25,rotation:0,x:354,y:25},5,cjs.Ease.get(1)).wait(15).to({x:365.6,y:25.3},5).wait(140).to({scaleX:1.05,scaleY:1.05,x:-327.4,y:26.2},40,cjs.Ease.get(-1)).wait(6));

	// Symbol 22
	this.instance_8 = new lib.Symbol22();
	this.instance_8.parent = this;
	this.instance_8.setTransform(1178.1,44.8,1,1,0,0,0,226.5,75.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({rotation:-0.7,x:336.6,y:101.8},39,cjs.Ease.get(1)).to({rotation:0,x:337.5,y:99},5,cjs.Ease.get(1)).wait(15).to({x:349.1,y:99.3},5).wait(140).to({scaleX:1.05,scaleY:1.05,x:-344.7,y:103.7},40,cjs.Ease.get(-1)).wait(6));

	// Symbol 20
	this.instance_9 = new lib.Symbol20();
	this.instance_9.parent = this;
	this.instance_9.setTransform(1041.1,-32.2,1,1,0,0,0,80.5,12.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({rotation:-0.7,x:198.7,y:26.5},39,cjs.Ease.get(1)).to({rotation:0,x:200.5,y:22},5,cjs.Ease.get(1)).wait(15).to({x:221.8,y:22.6},5).to({x:214.2,y:22.4},5).wait(135).to({scaleX:1.05,scaleY:1.05,x:-486,y:23.1},40,cjs.Ease.get(-1)).wait(6));

	// Symbol 19
	this.instance_10 = new lib.Symbol19();
	this.instance_10.parent = this;
	this.instance_10.setTransform(903.6,-40.2,1,1,0,0,0,63,11);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({regY:11.1,rotation:-0.7,x:61.1,y:20.3},39,cjs.Ease.get(1)).to({regY:11,rotation:0,x:63,y:14},5,cjs.Ease.get(1)).wait(15).to({x:97.8,y:14.9},5).to({x:76.7,y:14.4},5).wait(135).to({scaleX:1.05,scaleY:1.05,x:-630.1,y:14.7},40,cjs.Ease.get(-1)).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(840.6,-54.2,568,195.1);


(lib.Symbol18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Symbol 12
	this.instance = new lib.Symbol12();
	this.instance.parent = this;
	this.instance.setTransform(210.8,193.8,1,1,0,0,0,219.8,206.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Symbol 9
	this.instance_1 = new lib.Symbol9();
	this.instance_1.parent = this;
	this.instance_1.setTransform(146.6,240.9,0.721,0.721,0,0,0,186.5,75.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol18, new cjs.Rectangle(-9,-12.3,439.6,412.2), null);


(lib.Symbol17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_105 = function() {
		this.parent.btnMouseHandler();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(105).call(this.frame_105).wait(145));

	// Layer 8
	this.instance = new lib.Symbol4();
	this.instance.parent = this;
	this.instance.setTransform(-83.1,51.9,3.163,2.409,0,0,0,39.2,39.4);
	this.instance.alpha = 0.371;
	this.instance.compositeOperation = "lighter";
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(105).to({_off:false},0).to({regX:39.3,regY:39.5,scaleX:1.92,scaleY:1.47,x:-83,y:52,alpha:0},13).wait(31).to({scaleX:2.31,scaleY:1.76,x:-485.2,y:80.2},60,cjs.Ease.get(-1)).wait(41));

	// Layer 7
	this.instance_1 = new lib.Symbol4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-76.6,46.9,1.664,0.728,0,0,0,39.3,39.8);
	this.instance_1.compositeOperation = "lighter";
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(105).to({_off:false},0).to({regY:39.7,scaleX:1.37,scaleY:0.6,y:46.8,alpha:0},13).wait(31).to({regX:39.2,regY:39.8,scaleX:1.65,scaleY:0.72,x:-477.7,y:74},60,cjs.Ease.get(-1)).wait(41));

	// Layer 1
	this.instance_2 = new lib.Symbol5();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-112.5,35.3,0.226,0.374,-79,0,0,127,128);
	this.instance_2.compositeOperation = "lighter";
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(105).to({_off:false},0).to({regY:127.8,scaleX:0.17,scaleY:0.41,x:-125.2,y:31.1,alpha:0},13).wait(31).to({scaleX:0.21,scaleY:0.5,x:-535.9,y:55.1},60,cjs.Ease.get(-1)).wait(41));

	// Symbol 16
	this.instance_3 = new lib.Symbol16();
	this.instance_3.parent = this;
	this.instance_3.setTransform(279.3,35.2,0.52,0.52,0,0,0,5.1,52.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:5.2,regY:52.2,scaleX:0.59,scaleY:0.59,skewX:-0.7,skewY:-0.2,x:134.9,y:50.3},68,cjs.Ease.quadInOut).to({regX:5,regY:52.1,skewX:0,skewY:0,x:136.1,y:50.2},10,cjs.Ease.quadInOut).wait(25).to({regX:5.1,scaleY:0.59,skewX:1,x:139.1},5,cjs.Ease.quadInOut).to({regX:5,scaleY:0.59,skewX:0,x:136.1},10,cjs.Ease.quadInOut).wait(31).to({scaleX:0.7,scaleY:0.7,x:-222,y:78.1},60,cjs.Ease.get(-1)).wait(41));

	// Symbol 15
	this.instance_4 = new lib.Symbol15();
	this.instance_4.parent = this;
	this.instance_4.setTransform(192.5,87.5,0.52,0.52,0,0,0,213,69.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regX:212.8,regY:69.6,scaleX:0.59,scaleY:0.59,skewX:-0.7,skewY:-0.2,x:37.8,y:109.4},68,cjs.Ease.quadInOut).to({regX:213,regY:69.5,skewX:0,skewY:0,x:38.4,y:109},10,cjs.Ease.quadInOut).wait(25).to({scaleY:0.59,skewX:1,x:40.3},5,cjs.Ease.quadInOut).to({scaleY:0.59,skewX:0,x:38.4},10,cjs.Ease.quadInOut).wait(31).to({scaleX:0.7,scaleY:0.7,x:-339.4,y:148.7},60,cjs.Ease.get(-1)).wait(41));

	// Symbol 14
	this.instance_5 = new lib.Symbol14();
	this.instance_5.parent = this;
	this.instance_5.setTransform(192.8,35.5,0.52,0.52,0,0,0,136.5,52.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regX:136.4,scaleX:0.59,scaleY:0.59,skewX:-0.7,skewY:-0.2,x:37.4,y:50.9},68,cjs.Ease.quadInOut).to({regX:136.6,skewX:0,skewY:0,x:38.7,y:50.5},10,cjs.Ease.quadInOut).to({regX:136.4,scaleX:0.58,x:39.7},12,cjs.Ease.quadInOut).wait(13).to({scaleY:0.59,skewX:1,x:42.7},5,cjs.Ease.quadInOut).to({scaleY:0.59,skewX:0,x:39.7},10,cjs.Ease.quadInOut).wait(31).to({scaleX:0.7,scaleY:0.7,x:-337.8,y:78.4},60,cjs.Ease.get(-1)).wait(41));

	// Symbol 13
	this.instance_6 = new lib.Symbol13();
	this.instance_6.parent = this;
	this.instance_6.setTransform(104.7,32.1,0.52,0.52,0,0,0,57.1,22.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({regX:56.8,regY:22.2,scaleX:0.59,scaleY:0.59,skewX:-0.7,skewY:-0.2,x:-61.8,y:47.4},68,cjs.Ease.quadInOut).to({regX:57,regY:22.1,skewX:0,skewY:0,x:-60.6,y:46.7},10,cjs.Ease.quadInOut).to({regX:56.9,scaleX:0.55,scaleY:0.59,skewX:3.5,x:-55.9,y:46.8},12,cjs.Ease.quadInOut).wait(13).to({scaleX:0.56,skewX:3.8,x:-47.3,y:48.2},5,cjs.Ease.quadInOut).to({regX:57,scaleY:0.59,skewX:2.8,x:-57.1,y:46.7},10,cjs.Ease.quadInOut).wait(31).to({regX:56.9,scaleX:0.68,scaleY:0.7,x:-454.1,y:73.9},60,cjs.Ease.get(-1)).wait(41));

	// Symbol 16
	this.instance_7 = new lib.Symbol16();
	this.instance_7.parent = this;
	this.instance_7.setTransform(247.1,29.5,0.52,0.52,0,0,0,5.1,52.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({regX:5.2,scaleX:0.59,scaleY:0.59,skewX:-0.7,skewY:-0.2,x:98.6,y:44},68,cjs.Ease.quadInOut).to({regX:5,regY:52,skewX:0,skewY:0,x:99.8,y:43.8},10,cjs.Ease.quadInOut).wait(25).to({scaleY:0.59,skewX:1,x:102.9},5,cjs.Ease.quadInOut).to({scaleY:0.59,skewX:0,x:99.8},10,cjs.Ease.quadInOut).wait(31).to({regY:52.1,scaleX:0.7,scaleY:0.7,x:-265.6,y:70.4},60,cjs.Ease.get(-1)).wait(41));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(75,2.4,232.8,124.9);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Symbol40();
	this.instance.parent = this;
	this.instance.setTransform(215.5,312.9,1.703,1.255,0,0,0,133.2,128.8);
	this.instance.compositeOperation = "lighter";

	this.instance_1 = new lib.Symbol40();
	this.instance_1.parent = this;
	this.instance_1.setTransform(393.9,44.9,1.703,1.255,0,0,0,133.2,128.8);
	this.instance_1.compositeOperation = "lighter";

	this.instance_2 = new lib.Symbol40();
	this.instance_2.parent = this;
	this.instance_2.setTransform(297.1,289.7,1.703,1.255,0,0,0,133.2,128.8);
	this.instance_2.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Layer 1
	this.instance_3 = new lib.Symbol1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(219,192.6,0.685,0.812,0,0,0,399.9,88.2);
	this.instance_3.filters = [new cjs.ColorFilter(0.66, 0.66, 0.66, 1, 0, 17.34, 34.68, 0), new cjs.ColorMatrixFilter(new cjs.ColorMatrix(-47, 0, 0, 0))];
	this.instance_3.cache(-2,-2,804,180);

	this.instance_4 = new lib.Symbol2();
	this.instance_4.parent = this;
	this.instance_4.setTransform(188,95.8,0.47,0.459,0,0,0,399.9,208.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(-54.9,-116.7,675.6,591.2), null);


// stage content:
(lib.armored300250 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var shakeDecay = 0.100000;
		var shake = 0;
		var x0 = this.stage.x;
		var y0 = this.stage.y;
		
		this.addEventListener("tick", shakeBtn.bind(this));
		
		
		this.btnMouseHandler = function () {
		shake = 2; 
		}
		
		function shakeBtn(){
		console.log(0);
		if (shake) {
		this.stage.x = x0 + getRandomNumber(0, shake * 5) - shake;
		this.stage.y = y0 + getRandomNumber(0, shake * 5) - shake;
		shake = shake - shakeDecay;
		if (shake < 0) {
		shake = 0;
		}
		}
		}
		function getRandomNumber (start, end, except) {
		var random = Math.round(start + (Math.random() * (end - start)));
		if (!isNaN(parseFloat(except)) && isFinite(except) && random == except) 
		random = sym.getComposition().getStage().getRandomNumber(start, end, except);
		return random;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// logo
	this.instance = new lib.Symbol6();
	this.instance.parent = this;
	this.instance.setTransform(69.2,26.2,0.547,0.547,0,0,0,100,28.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bt
	this.instance_1 = new lib.Symbol25();
	this.instance_1.parent = this;
	this.instance_1.setTransform(208.5,217.3,1.141,1.141,0,0,0,71,18.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// firerleft
	this.instance_2 = new lib.Symbol11();
	this.instance_2.parent = this;
	this.instance_2.setTransform(74,225.5,1,1,0,0,0,147,117.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// fireporebrik
	this.instance_3 = new lib.Symbol18();
	this.instance_3.parent = this;
	this.instance_3.setTransform(343.8,185.4,1,1,0,0,0,219.8,206.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// tank
	this.tank = new lib.Symbol17();
	this.tank.parent = this;
	this.tank.setTransform(266.7,142.6,1.232,1.232,-2.5,0,0,31.1,84.5);

	this.timeline.addTween(cjs.Tween.get(this.tank).wait(1));

	// fireright
	this.instance_4 = new lib.Symbol12();
	this.instance_4.parent = this;
	this.instance_4.setTransform(329.3,109.1,1,1,0,0,0,219.8,206.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// porebrik
	this.instance_5 = new lib.Symbol8();
	this.instance_5.parent = this;
	this.instance_5.setTransform(95.4,181.7,0.64,0.64,2.7,0,0,160.5,44.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// btr
	this.instance_6 = new lib.Symbol24();
	this.instance_6.parent = this;
	this.instance_6.setTransform(118.6,140,0.363,0.363,-1.5,0,0,282.1,97);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// back
	this.instance_7 = new lib.Symbol3();
	this.instance_7.parent = this;
	this.instance_7.setTransform(219.1,121.6,1,1,0,0,0,254.1,134.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52.3,-4.6,809.6,591.2);
// library properties:
lib.properties = {
	id: '7BAC49DF4F864B49B113B2818A16701B',
	width: 300,
	height: 250,
	fps: 28,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/back.jpg", id:"back"},
		{src:"images/block1.png", id:"block1"},
		{src:"images/blocks2.png", id:"blocks2"},
		{src:"images/bodybro.png", id:"bodybro"},
		{src:"images/button.png", id:"button"},
		{src:"images/dulendbro.png", id:"dulendbro"},
		{src:"images/dullobro.png", id:"dullobro"},
		{src:"images/fireloop1_0.png", id:"fireloop1_0"},
		{src:"images/fireloop1_1.png", id:"fireloop1_1"},
		{src:"images/fireloop1_2.png", id:"fireloop1_2"},
		{src:"images/fireloop1_3.png", id:"fireloop1_3"},
		{src:"images/fireloop1_4.png", id:"fireloop1_4"},
		{src:"images/fireloop1_5.png", id:"fireloop1_5"},
		{src:"images/headbro.png", id:"headbro"},
		{src:"images/heads.png", id:"heads"},
		{src:"images/locator.png", id:"locator"},
		{src:"images/logorealaction.png", id:"logorealaction"},
		{src:"images/pooop.png", id:"pooop"},
		{src:"images/stone.png", id:"stone"},
		{src:"images/wheelbro.png", id:"wheelbro"},
		{src:"images/wheels.png", id:"wheels"},
		{src:"images/winas.png", id:"winas"}
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
an.compositions['7BAC49DF4F864B49B113B2818A16701B'] = {
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