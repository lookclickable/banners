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



(lib.arrow = function() {
	this.initialize(img.arrow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,42,34);


(lib.back = function() {
	this.initialize(img.back);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,945,609);


(lib.Bitmap1 = function() {
	this.initialize(img.Bitmap1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,17,8);


(lib.bomb = function() {
	this.initialize(img.bomb);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,33,34);


(lib.Mush0 = function() {
	this.initialize(img.Mush0);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,33,50);


(lib.Mush1 = function() {
	this.initialize(img.Mush1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,32,35);


(lib.Mush2 = function() {
	this.initialize(img.Mush2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,12,24);


(lib.Mush3 = function() {
	this.initialize(img.Mush3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,11,13);


(lib.Mush4 = function() {
	this.initialize(img.Mush4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,20,21);


(lib.Mush5 = function() {
	this.initialize(img.Mush5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,29,28);


(lib.Mush6 = function() {
	this.initialize(img.Mush6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,16,23);


(lib.ork1 = function() {
	this.initialize(img.ork1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,36,26);


(lib.ork2 = function() {
	this.initialize(img.ork2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,16,24);


(lib.ork3 = function() {
	this.initialize(img.ork3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,21,26);


(lib.ork4 = function() {
	this.initialize(img.ork4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,46,47);


(lib.ork5 = function() {
	this.initialize(img.ork5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,20,22);


(lib.ork6 = function() {
	this.initialize(img.ork6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,22,78);


(lib.ork7 = function() {
	this.initialize(img.ork7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,50,40);


(lib.plaxa = function() {
	this.initialize(img.plaxa);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,393,100);


(lib.round1 = function() {
	this.initialize(img.round1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,59,34);


(lib.text1 = function() {
	this.initialize(img.text1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,245,29);// helper functions:

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


(lib.Symbol41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bomb();
	this.instance.parent = this;
	this.instance.setTransform(53,0,0.773,0.773);

	this.instance_1 = new lib.bomb();
	this.instance_1.parent = this;
	this.instance_1.setTransform(26,0,0.773,0.773);

	this.instance_2 = new lib.bomb();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,0,0.773,0.773);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol41, new cjs.Rectangle(0,0,78.5,26.3), null);


(lib.Symbol40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.round1();
	this.instance.parent = this;
	this.instance.setTransform(-2,-2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol40, new cjs.Rectangle(-2,-2,59,34), null);


(lib.Symbol35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(2,1,1).p("AASAAQAAAEgGADQgFADgHAAQgGAAgGgDQgFgDAAgEQAAgDAFgDQAGgDAGAAQAHAAAFADQAGADAAADg");
	this.shape.setTransform(1.8,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol35, new cjs.Rectangle(-1,-1,5.5,4), null);


(lib.Symbol28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol28, new cjs.Rectangle(0,0,17,8), null);


(lib.Symbol26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AByCuQgHgmgIgRQgNgfgXgMQgPgIgSABQgSABgOAKQgIAFgOAQQgOAPgJAFQgQAJgZAAIgMgLIgEgEIAQgOIgFABQgQAFAegPQAqgpi2A1Qi3A1DIhDQDHhDAKgNQALgNgEgKQgGgOgPgGQgOgGgSABIgfAEQgTACgNgDQARgHgQgJQgRgJgQgOQgQgPA6ABQA5AABBAjQBCAjgwhOQgwhOAug1IAaBUQASA3ARgFQARgGAEgvQAEgwAJgTQASgoAZAAQAHAtgJAtQgEAWgBAIQgBAQgXA5QgYA5ASgbQATgbAvgYQAvgXAUghQASAFAKARQgGALgNASQgNASgGAKQgIAQgCARQgBATAJALQAEAFAHAHIAMAMQAGAHAAAJQABAJgGAFQgEAEgKABQgNACg4gTQg3gTAHAWQAGAXAJAWQAIAWAEATQAEAUgMBgIAAACg");
	this.shape.setTransform(13.9,25.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol26, new cjs.Rectangle(-16.9,0,61.6,50.9), null);


(lib.Symbol22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Mush0();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol22, new cjs.Rectangle(0,0,33,50), null);


(lib.Symbol21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Mush1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol21, new cjs.Rectangle(0,0,32,35), null);


(lib.Symbol20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Mush2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol20, new cjs.Rectangle(0,0,12,24), null);


(lib.Symbol19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Mush3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol19, new cjs.Rectangle(0,0,11,13), null);


(lib.Symbol18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Mush4();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol18, new cjs.Rectangle(0,0,20,21), null);


(lib.Symbol17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Mush5();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol17, new cjs.Rectangle(0,0,29,28), null);


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Mush6();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol16, new cjs.Rectangle(0,0,16,23), null);


(lib.Symbol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ork6();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol15, new cjs.Rectangle(0,0,22,78), null);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ork1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol13, new cjs.Rectangle(0,0,36,26), null);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ork3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol12, new cjs.Rectangle(0,0,21,26), null);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ork2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol11, new cjs.Rectangle(0,0,16,24), null);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ork4();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol10, new cjs.Rectangle(0,0,46,47), null);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ork7();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(0,0,50,40), null);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ork5();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(0,0,20,22), null);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.arrow();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(0,0,42,34), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.text1();
	this.instance.parent = this;
	this.instance.setTransform(-7,11,0.896,0.896);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(-7,11,219.4,26), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.plaxa();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,393,100), null);


(lib.Symbol28copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol28copy2, new cjs.Rectangle(0,0,17,8), null);


(lib.Symbol28copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol28copy, new cjs.Rectangle(0,0,17,8), null);


(lib.Symbol28_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.Bitmap1();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol28_1, new cjs.Rectangle(0,0,17,8), null);


(lib.Symbol26copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AByCuQgHgmgIgRQgNgfgXgMQgPgIgSABQgSABgOAKQgIAFgOAQQgOAPgJAFQgQAJgZAAIgMgLIgEgEIAQgOIgFABQgQAFAegPQAqgpi2A1Qi3A1DIhDQDHhDAKgNQALgNgEgKQgGgOgPgGQgOgGgSABIgfAEQgTACgNgDQARgHgQgJQgRgJgQgOQgQgPA6ABQA5AABBAjQBCAjgwhOQgwhOAug1IAaBUQASA3ARgFQARgGAEgvQAEgwAJgTQASgoAZAAQAHAtgJAtQgEAWgBAIQgBAQgXA5QgYA5ASgbQATgbAvgYQAvgXAUghQASAFAKARQgGALgNASQgNASgGAKQgIAQgCARQgBATAJALQAEAFAHAHIAMAMQAGAHAAAJQABAJgGAFQgEAEgKABQgNACg4gTQg3gTAHAWQAGAXAJAWQAIAWAEATQAEAUgMBgIAAACg");
	this.shape.setTransform(13.9,25.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol26copy2, new cjs.Rectangle(-16.9,0,61.6,50.9), null);


(lib.Symbol26copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AByCuQgHgmgIgRQgNgfgXgMQgPgIgSABQgSABgOAKQgIAFgOAQQgOAPgJAFQgQAJgZAAIgMgLIgEgEIAQgOIgFABQgQAFAegPQAqgpi2A1Qi3A1DIhDQDHhDAKgNQALgNgEgKQgGgOgPgGQgOgGgSABIgfAEQgTACgNgDQARgHgQgJQgRgJgQgOQgQgPA6ABQA5AABBAjQBCAjgwhOQgwhOAug1IAaBUQASA3ARgFQARgGAEgvQAEgwAJgTQASgoAZAAQAHAtgJAtQgEAWgBAIQgBAQgXA5QgYA5ASgbQATgbAvgYQAvgXAUghQASAFAKARQgGALgNASQgNASgGAKQgIAQgCARQgBATAJALQAEAFAHAHIAMAMQAGAHAAAJQABAJgGAFQgEAEgKABQgNACg4gTQg3gTAHAWQAGAXAJAWQAIAWAEATQAEAUgMBgIAAACg");
	this.shape.setTransform(13.9,25.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol26copy, new cjs.Rectangle(-16.9,0,61.6,50.9), null);


(lib.Symbol26_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AByCuQgHgmgIgRQgNgfgXgMQgPgIgSABQgSABgOAKQgIAFgOAQQgOAPgJAFQgQAJgZAAIgMgLIgEgEIAQgOIgFABQgQAFAegPQAqgpi2A1Qi3A1DIhDQDHhDAKgNQALgNgEgKQgGgOgPgGQgOgGgSABIgfAEQgTACgNgDQARgHgQgJQgRgJgQgOQgQgPA6ABQA5AABBAjQBCAjgwhOQgwhOAug1IAaBUQASA3ARgFQARgGAEgvQAEgwAJgTQASgoAZAAQAHAtgJAtQgEAWgBAIQgBAQgXA5QgYA5ASgbQATgbAvgYQAvgXAUghQASAFAKARQgGALgNASQgNASgGAKQgIAQgCARQgBATAJALQAEAFAHAHIAMAMQAGAHAAAJQABAJgGAFQgEAEgKABQgNACg4gTQg3gTAHAWQAGAXAJAWQAIAWAEATQAEAUgMBgIAAACg");
	this.shape_1.setTransform(13.9,25.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol26_1, new cjs.Rectangle(-16.9,0,61.6,50.9), null);


(lib.Symbol22copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Mush0();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol22copy2, new cjs.Rectangle(0,0,33,50), null);


(lib.Symbol22copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Mush0();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol22copy, new cjs.Rectangle(0,0,33,50), null);


(lib.Symbol22_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.Mush0();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol22_1, new cjs.Rectangle(0,0,33,50), null);


(lib.Symbol21copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Mush1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol21copy2, new cjs.Rectangle(0,0,32,35), null);


(lib.Symbol21copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Mush1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol21copy, new cjs.Rectangle(0,0,32,35), null);


(lib.Symbol21_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.Mush1();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol21_1, new cjs.Rectangle(0,0,32,35), null);


(lib.Symbol20copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Mush2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol20copy2, new cjs.Rectangle(0,0,12,24), null);


(lib.Symbol20copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Mush2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol20copy, new cjs.Rectangle(0,0,12,24), null);


(lib.Symbol20_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.Mush2();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol20_1, new cjs.Rectangle(0,0,12,24), null);


(lib.Symbol19copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Mush3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol19copy2, new cjs.Rectangle(0,0,11,13), null);


(lib.Symbol19copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Mush3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol19copy, new cjs.Rectangle(0,0,11,13), null);


(lib.Symbol19_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.Mush3();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol19_1, new cjs.Rectangle(0,0,11,13), null);


(lib.Symbol18copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Mush4();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol18copy2, new cjs.Rectangle(0,0,20,21), null);


(lib.Symbol18copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Mush4();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol18copy, new cjs.Rectangle(0,0,20,21), null);


(lib.Symbol18_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.Mush4();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol18_1, new cjs.Rectangle(0,0,20,21), null);


(lib.Symbol17copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Mush5();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol17copy2, new cjs.Rectangle(0,0,29,28), null);


(lib.Symbol17copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Mush5();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol17copy, new cjs.Rectangle(0,0,29,28), null);


(lib.Symbol17_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.Mush5();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol17_1, new cjs.Rectangle(0,0,29,28), null);


(lib.Symbol16copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Mush6();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol16copy2, new cjs.Rectangle(0,0,16,23), null);


(lib.Symbol16copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Mush6();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol16copy, new cjs.Rectangle(0,0,16,23), null);


(lib.Symbol16_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.Mush6();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol16_1, new cjs.Rectangle(0,0,16,23), null);


(lib.Symbol15copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ork6();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol15copy2, new cjs.Rectangle(0,0,22,78), null);


(lib.Symbol15copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ork6();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol15copy, new cjs.Rectangle(0,0,22,78), null);


(lib.Symbol15_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.ork6();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol15_1, new cjs.Rectangle(0,0,22,78), null);


(lib.Symbol13copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ork1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol13copy2, new cjs.Rectangle(0,0,36,26), null);


(lib.Symbol13copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ork1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol13copy, new cjs.Rectangle(0,0,36,26), null);


(lib.Symbol13_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.ork1();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol13_1, new cjs.Rectangle(0,0,36,26), null);


(lib.Symbol12copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ork3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol12copy2, new cjs.Rectangle(0,0,21,26), null);


(lib.Symbol12copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ork3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol12copy, new cjs.Rectangle(0,0,21,26), null);


(lib.Symbol12_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.ork3();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol12_1, new cjs.Rectangle(0,0,21,26), null);


(lib.Symbol11copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ork2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol11copy2, new cjs.Rectangle(0,0,16,24), null);


(lib.Symbol11copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ork2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol11copy, new cjs.Rectangle(0,0,16,24), null);


(lib.Symbol11_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.ork2();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol11_1, new cjs.Rectangle(0,0,16,24), null);


(lib.Symbol10copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ork4();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol10copy2, new cjs.Rectangle(0,0,46,47), null);


(lib.Symbol10copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ork4();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol10copy, new cjs.Rectangle(0,0,46,47), null);


(lib.Symbol10_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.ork4();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol10_1, new cjs.Rectangle(0,0,46,47), null);


(lib.Symbol9copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ork7();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol9copy2, new cjs.Rectangle(0,0,50,40), null);


(lib.Symbol9copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ork7();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol9copy, new cjs.Rectangle(0,0,50,40), null);


(lib.Symbol9_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.ork7();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol9_1, new cjs.Rectangle(0,0,50,40), null);


(lib.Symbol8copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ork5();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol8copy2, new cjs.Rectangle(0,0,20,22), null);


(lib.Symbol8copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ork5();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol8copy, new cjs.Rectangle(0,0,20,22), null);


(lib.Symbol8_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.ork5();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol8_1, new cjs.Rectangle(0,0,20,22), null);


(lib.Symbol36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Symbol40();
	this.instance.parent = this;
	this.instance.setTransform(28.3,12.2,0.13,0.13,0,0,0,26.9,14.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(35));

	// Layer 1
	this.instance_1 = new lib.Symbol40();
	this.instance_1.parent = this;
	this.instance_1.setTransform(27.2,14.7,1,1,0,0,0,27.2,14.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:27.1,regY:14.6,scaleX:1.19,scaleY:1.19,x:27.1,y:14.6},17,cjs.Ease.quadInOut).to({regX:27.2,regY:14.7,scaleX:1,scaleY:1,x:27.2,y:14.7},17,cjs.Ease.quadInOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-2,59,34);


(lib.Symbol34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol6();
	this.instance.parent = this;
	this.instance.setTransform(24,17.5,0.757,0.871,0,110.5,129.6,21.1,16.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol34, new cjs.Rectangle(0,0,48,34.9), null);


(lib.Symbol33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol6();
	this.instance.parent = this;
	this.instance.setTransform(21,17,1,1,0,0,0,21,17);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol33, new cjs.Rectangle(0,0,42,34), null);


(lib.Symbol32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol6();
	this.instance.parent = this;
	this.instance.setTransform(22,22.5,0.74,1,0,-30,150,21,17);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol32, new cjs.Rectangle(0,0,44,45), null);


(lib.Symbol30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol3();
	this.instance.parent = this;
	this.instance.setTransform(98.8,10.8,1,1,0,0,0,101.7,22.5);
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,1)",3,3,2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol30, new cjs.Rectangle(-10.9,-1.7,228,35), null);


(lib.Symbol29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol30();
	this.instance.parent = this;
	this.instance.setTransform(98.9,11.8,1,1,0,0,0,98.9,11.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:99,regY:11.9,scaleX:0.94,scaleY:0.94,x:99.1,y:12},19,cjs.Ease.quadInOut).to({regX:98.9,regY:11.8,scaleX:1,scaleY:1,x:98.9,y:11.8},15,cjs.Ease.quadInOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.9,-1.7,228,35);


(lib.Symbol27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol28();
	this.instance.parent = this;
	this.instance.setTransform(8.5,4,1,1,0,0,0,8.5,4);
	this.instance.filters = [new cjs.BlurFilter(9, 5, 1)];
	this.instance.cache(-2,-2,21,12);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol27, new cjs.Rectangle(-5,-3,31,18), null);


(lib.Symbol25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol26();
	this.instance.parent = this;
	this.instance.setTransform(22.3,25.8,0.62,0.62,0,0,0,22.2,25.8);
	this.instance.filters = [new cjs.BlurFilter(2, 2, 1)];
	this.instance.cache(-19,-2,66,55);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol25, new cjs.Rectangle(-2.9,8.8,43,38), null);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol15();
	this.instance.parent = this;
	this.instance.setTransform(11,39,1,1,0,0,0,11,39);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-5.2,x:7.6,y:40.2},14,cjs.Ease.quadInOut).to({rotation:0,x:11,y:39},15,cjs.Ease.quadInOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,22,78);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Symbol29();
	this.instance.parent = this;
	this.instance.setTransform(198.3,50.4,1,1,0,0,0,98.9,11.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.instance_1 = new lib.Symbol2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(196.5,50,1,1,0,0,0,196.5,50);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,393,100), null);


(lib.Symbol27copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol28copy2();
	this.instance.parent = this;
	this.instance.setTransform(8.5,4,1,1,0,0,0,8.5,4);
	this.instance.filters = [new cjs.BlurFilter(9, 5, 1)];
	this.instance.cache(-2,-2,21,12);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol27copy2, new cjs.Rectangle(-5,-3,31,18), null);


(lib.Symbol27copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol28copy();
	this.instance.parent = this;
	this.instance.setTransform(8.5,4,1,1,0,0,0,8.5,4);
	this.instance.filters = [new cjs.BlurFilter(9, 5, 1)];
	this.instance.cache(-2,-2,21,12);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol27copy, new cjs.Rectangle(-5,-3,31,18), null);


(lib.Symbol27_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.Symbol28_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(8.5,4,1,1,0,0,0,8.5,4);
	this.instance_1.filters = [new cjs.BlurFilter(9, 5, 1)];
	this.instance_1.cache(-2,-2,21,12);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol27_1, new cjs.Rectangle(-5,-3,31,18), null);


(lib.Symbol25copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol26copy2();
	this.instance.parent = this;
	this.instance.setTransform(22.3,25.8,0.62,0.62,0,0,0,22.2,25.8);
	this.instance.filters = [new cjs.BlurFilter(2, 2, 1)];
	this.instance.cache(-19,-2,66,55);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol25copy2, new cjs.Rectangle(-2.9,8.8,43,38), null);


(lib.Symbol25copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol26copy();
	this.instance.parent = this;
	this.instance.setTransform(22.3,25.8,0.62,0.62,0,0,0,22.2,25.8);
	this.instance.filters = [new cjs.BlurFilter(2, 2, 1)];
	this.instance.cache(-19,-2,66,55);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol25copy, new cjs.Rectangle(-2.9,8.8,43,38), null);


(lib.Symbol25_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.Symbol26_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(22.3,25.8,0.62,0.62,0,0,0,22.2,25.8);
	this.instance_1.filters = [new cjs.BlurFilter(2, 2, 1)];
	this.instance_1.cache(-19,-2,66,55);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol25_1, new cjs.Rectangle(-2.9,8.8,43,38), null);


(lib.Symbol7copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol15copy2();
	this.instance.parent = this;
	this.instance.setTransform(11,39,1,1,0,0,0,11,39);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-5.2,x:7.6,y:40.2},14,cjs.Ease.quadInOut).to({rotation:0,x:11,y:39},15,cjs.Ease.quadInOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,22,78);


(lib.Symbol7copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol15copy();
	this.instance.parent = this;
	this.instance.setTransform(11,39,1,1,0,0,0,11,39);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-5.2,x:7.6,y:40.2},14,cjs.Ease.quadInOut).to({rotation:0,x:11,y:39},15,cjs.Ease.quadInOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,22,78);


(lib.Symbol7_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.Symbol15_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(11,39,1,1,0,0,0,11,39);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:-5.2,x:7.6,y:40.2},14,cjs.Ease.quadInOut).to({rotation:0,x:11,y:39},15,cjs.Ease.quadInOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,22,78);


(lib.Symbol37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Symbol 34
	this.instance = new lib.Symbol34();
	this.instance.parent = this;
	this.instance.setTransform(65.9,58.4,0.993,1.007,0,0.8,1.5,24.1,17.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:24,regY:17.6,scaleX:1,skewX:-14.2,skewY:-18.4,x:65.8,y:56.2},14,cjs.Ease.quadInOut).to({regX:24.1,regY:17.7,scaleX:0.99,skewX:0.8,skewY:1.5,x:65.9,y:58.4},10,cjs.Ease.quadInOut).wait(1));

	// Symbol 33
	this.instance_1 = new lib.Symbol33();
	this.instance_1.parent = this;
	this.instance_1.setTransform(85.5,14.7,1.009,1,0,30,37.5,21.2,16.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:21,regY:17,scaleX:1,skewX:0,skewY:0,x:75.2,y:17},14,cjs.Ease.quadInOut).to({regX:21.2,regY:16.8,scaleX:1.01,skewX:30,skewY:37.5,x:85.5,y:14.7},10,cjs.Ease.quadInOut).wait(1));

	// Symbol 32
	this.instance_2 = new lib.Symbol32();
	this.instance_2.parent = this;
	this.instance_2.setTransform(22.9,28.9,1.095,1.023,0,2.8,-24,22.2,22.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:22.1,scaleX:1.04,skewX:16.6,skewY:-2.8,x:26.7,y:28.7},14,cjs.Ease.quadInOut).to({regX:22.2,scaleX:1.1,skewX:2.8,skewY:-24,x:22.9,y:28.9},10,cjs.Ease.quadInOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.1,-12.9,109.5,88.6);


(lib.Symbol31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Symbol 34
	this.instance = new lib.Symbol37();
	this.instance.parent = this;
	this.instance.setTransform(25.1,28.9,1,1,0,0,0,50.5,38.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Symbol 36
	this.instance_1 = new lib.Symbol36();
	this.instance_1.parent = this;
	this.instance_1.setTransform(27.2,29.5,1,1,0,0,0,27.2,14.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol31, new cjs.Rectangle(-24.3,-22.9,109.5,88.6), null);


(lib.Symbol24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 14
	this.instance = new lib.Symbol27();
	this.instance.parent = this;
	this.instance.setTransform(232.7,-134.4,1,1,-30,0,0,8.3,3.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(58).to({_off:false},0).to({regX:8.4,regY:3.9,rotation:-45,x:225.1,y:-139.9,alpha:0},4).to({_off:true},1).wait(4).to({_off:false,regX:8.3,regY:3.8,rotation:-30,x:232.7,y:-134.4,alpha:1},0).to({regX:8.4,regY:3.9,rotation:-45,x:237.6,y:-139.9,alpha:0},4).to({_off:true},1).wait(16).to({_off:false,regX:8.3,regY:3.8,rotation:-30,x:235.5,y:-133.6,alpha:1},0).to({regX:8.4,regY:3.9,rotation:-45,x:236.6,y:-138.2,alpha:0},4).to({_off:true},1).wait(31).to({_off:false,regX:8.3,regY:3.8,rotation:-30,x:237.7,y:-139.4,alpha:1},0).to({regX:8.4,regY:3.9,rotation:-45,x:230.1,y:-144.9,alpha:0},4).to({_off:true},1).wait(6).to({_off:false,regX:8.3,regY:3.8,rotation:-30,x:250.2,y:-150.1,alpha:1},0).to({regX:8.4,regY:3.9,rotation:-45,x:260.1,y:-154.9,alpha:0},4).to({_off:true},1).wait(37).to({_off:false,regY:3.8,x:291.8,y:-191.7,alpha:1},0).to({regY:3.9,x:292.1,y:-196.4,alpha:0},4).to({_off:true},1).wait(4));

	// Symbol 17
	this.instance_1 = new lib.Symbol17();
	this.instance_1.parent = this;
	this.instance_1.setTransform(264.3,-175.2,0.698,0.698,7.2,0,0,14.6,14);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:260.3,y:-171.7},6).to({regX:14.7,scaleX:0.71,scaleY:0.69,rotation:0,skewX:31.8,skewY:37.1,x:255.5,y:-173.7},4).to({regX:14.6,scaleX:0.7,scaleY:0.7,rotation:7.2,skewX:0,skewY:0,x:264.3,y:-175.2},5).to({regX:14.7,scaleX:0.71,scaleY:0.69,rotation:0,skewX:31.8,skewY:37.1,x:255.5,y:-173.7},4).to({regY:13.9,scaleX:0.7,scaleY:0.7,rotation:-47,skewX:0,skewY:0,x:290.1,y:-157.9},5).to({alpha:0},4).wait(1).to({regX:14.6,rotation:7.2,x:168.5,y:-91.9},0).to({regX:14.7,rotation:-7.8,x:179.9,y:-97.2,alpha:1},7).to({regX:14.6,regY:14,rotation:7.2,x:199.6,y:-110.6},7).to({regX:14.7,regY:13.8,rotation:-7.8,x:211.1,y:-125.9},7).to({regX:14.6,regY:13.9,rotation:7.2,x:202,y:-117.9},7).to({regX:14.7,regY:14,rotation:-11.7,x:198.2,y:-117.5},4).to({regX:14.6,regY:13.9,rotation:7.2,x:202,y:-117.9},8).to({regX:14.7,regY:14,rotation:-11.7,x:198.2,y:-117.5},4).to({regX:14.6,regY:13.9,rotation:7.2,x:202,y:-117.9},8).wait(8).to({rotation:7.2},0).to({regX:14.7,regY:14,rotation:-11.7,x:198.2,y:-117.5},4).to({regX:14.6,regY:13.9,rotation:7.2,x:202,y:-117.9},8).to({regY:13.8,rotation:-7.8,x:205.4,y:-123.2},7).to({regY:13.9,rotation:7.2,x:213.2,y:-126.6},8).to({regX:14.7,regY:13.8,rotation:-12,x:196.5,y:-122.9},2).to({regX:14.6,regY:14,rotation:7.2,x:205.4,y:-125},6).to({regX:14.7,rotation:-11.7,x:205,y:-129},4).to({regX:14.6,rotation:7.2,x:224,y:-136.5},6).to({regX:14.7,rotation:-11.7,x:218.6,y:-134.6},5).to({regX:14.6,rotation:7.2,x:224,y:-136.5},8).to({regY:13.8,rotation:-7.8,x:229.4,y:-144.2},5).to({regY:13.9,rotation:7.2,x:242,y:-157.9},8).to({regY:13.8,rotation:-7.8,x:245.4,y:-163.2},7).to({regY:14,rotation:7.2,x:265.4,y:-175},8).to({regX:14.7,rotation:-11.7,x:261,y:-173},5).to({regX:14.6,rotation:7.2,x:264.3,y:-175.2},5).wait(1));

	// Symbol 20
	this.instance_2 = new lib.Symbol20();
	this.instance_2.parent = this;
	this.instance_2.setTransform(266.8,-161.5,0.698,0.698,7.2,0,0,6,12);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:262.8,y:-158},6).to({scaleX:0.71,scaleY:0.69,rotation:0,skewX:1.8,skewY:7.1,x:261.2,y:-163.5},4).to({scaleX:0.7,scaleY:0.7,rotation:7.2,skewX:0,skewY:0,x:266.8,y:-161.5},5).to({scaleX:0.71,scaleY:0.69,rotation:0,skewX:1.8,skewY:7.1,x:261.2,y:-163.5},4).to({regX:5.9,regY:11.9,scaleX:0.7,scaleY:0.7,rotation:105.8,skewX:0,skewY:0,x:278.7,y:-150.4},5).to({alpha:0},4).wait(1).to({regX:6,regY:12,rotation:7.2,x:170.9,y:-78.2},0).to({regY:11.9,scaleY:0.71,rotation:0,skewX:0.9,skewY:11.7,x:182.7,y:-83,alpha:1},7).to({regY:11.8,scaleY:0.7,rotation:7.2,skewX:0,skewY:0,x:202.1,y:-97},7).to({regX:6.1,scaleY:0.71,rotation:0,skewX:0.9,skewY:11.7,x:213.9,y:-111.7},7).to({regX:6,scaleY:0.7,rotation:7.2,skewX:0,skewY:0,x:204.5,y:-104.3},7).to({rotation:22.2,x:202.5,y:-105.3},4).to({rotation:7.2,x:204.5,y:-104.3},8).to({rotation:22.2,x:202.5,y:-105.3},4).to({rotation:7.2,x:204.5,y:-104.3},8).wait(8).to({rotation:7.2},0).to({rotation:22.2,x:202.5,y:-105.3},4).to({rotation:7.2,x:204.5,y:-104.3},8).to({regX:6.1,scaleY:0.71,rotation:0,skewX:0.9,skewY:11.7,x:208.2,y:-109},7).to({regX:6,regY:12,scaleY:0.7,rotation:7.2,skewX:0,skewY:0,x:215.6,y:-112.9},8).to({regY:11.8,scaleY:0.7,rotation:0,skewX:5.5,skewY:8.5,x:206.2,y:-110.7},2).to({regY:12,scaleY:0.7,rotation:7.2,skewX:0,skewY:0,x:207.9,y:-111.3},6).to({regY:11.8,rotation:22.2,x:209.2,y:-116.8},4).to({regY:12,rotation:7.2,x:226.5,y:-122.9},6).to({regY:11.8,rotation:22.2,x:222.9,y:-122.4},5).to({regY:12,rotation:7.2,x:226.5,y:-122.9},8).to({regX:6.1,regY:11.8,scaleY:0.71,rotation:0,skewX:0.9,skewY:11.7,x:232.2,y:-130},5).to({regX:6,scaleY:0.7,rotation:7.2,skewX:0,skewY:0,x:244.5,y:-144.3},8).to({regX:6.1,scaleY:0.71,rotation:0,skewX:0.9,skewY:11.7,x:248.2,y:-149},7).to({regX:6,regY:12,scaleY:0.7,rotation:7.2,skewX:0,skewY:0,x:267.9,y:-161.3},8).to({regY:11.8,rotation:22.2,x:265.2,y:-160.8},5).to({regY:12,rotation:7.2,x:266.8,y:-161.5},5).wait(1));

	// Symbol 19
	this.instance_3 = new lib.Symbol19();
	this.instance_3.parent = this;
	this.instance_3.setTransform(260.4,-158.1,0.698,0.698,7.2,0,0,5.5,6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:256.4,y:-154.6},6).to({scaleX:0.71,scaleY:0.69,rotation:0,skewX:1.8,skewY:7.1,x:258,y:-158.1},4).to({scaleX:0.7,scaleY:0.7,rotation:7.2,skewX:0,skewY:0,x:260.4},5).to({scaleX:0.71,scaleY:0.69,rotation:0,skewX:1.8,skewY:7.1,x:258},4).to({regY:6.4,scaleX:0.7,scaleY:0.7,rotation:7.2,skewX:0,skewY:0,x:275.1,y:-149},5).to({alpha:0},4).wait(1).to({regY:6.5,x:164.5,y:-74.8},0).to({regX:5.6,regY:6.4,scaleY:0.71,rotation:0,skewX:0.9,skewY:11.7,x:176.9,y:-79.9,alpha:1},7).to({regY:6.5,scaleY:0.7,rotation:7.2,skewX:0,skewY:0,x:195.8,y:-93.5},7).to({regX:5.5,regY:6.3,scaleY:0.71,rotation:0,skewX:0.9,skewY:11.7,x:208,y:-108.6},7).to({regY:6.4,scaleY:0.7,rotation:7.2,skewX:0,skewY:0,x:198,y:-100.8},7).to({x:196.1,y:-101.1},4).to({x:198,y:-100.8},8).to({x:196.1,y:-101.1},4).to({x:198,y:-100.8},8).wait(8).to({x:196.1,y:-101.1},4).to({x:198,y:-100.8},8).to({scaleY:0.71,rotation:0,skewX:0.9,skewY:11.7,x:202.4,y:-105.8},7).to({regX:5.6,regY:6.5,scaleY:0.7,rotation:7.2,skewX:0,skewY:0,x:209.3,y:-109.5},8).to({regX:5.5,regY:6.4,scaleY:0.7,rotation:0,skewX:5.5,skewY:8.5,x:200.1,y:-106.8},2).to({regY:6.5,scaleY:0.7,rotation:7.2,skewX:0,skewY:0,x:201.5,y:-107.9},6).to({x:202.8,y:-112.5},4).to({regY:6.4,x:220.1,y:-119.5},6).to({regX:5.6,regY:6.5,x:216.6,y:-118.1},5).to({regX:5.5,regY:6.4,x:220.1,y:-119.5},8).to({scaleY:0.71,rotation:0,skewX:0.9,skewY:11.7,x:226.4,y:-126.8},5).to({scaleY:0.7,rotation:7.2,skewX:0,skewY:0,x:238,y:-140.8},8).to({scaleY:0.71,rotation:0,skewX:0.9,skewY:11.7,x:242.4,y:-145.8},7).to({regY:6.5,scaleY:0.7,rotation:7.2,skewX:0,skewY:0,x:261.5,y:-157.9},8).to({x:258.8,y:-156.5},5).to({x:260.4,y:-158.1},5).wait(1));

	// Symbol 21
	this.instance_4 = new lib.Symbol21();
	this.instance_4.parent = this;
	this.instance_4.setTransform(280.9,-178.2,0.698,0.698,7.2,0,0,16.1,17.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regX:16,rotation:37.2,x:280.6,y:-166.9},6).to({regX:16.1,regY:17.5,scaleX:0.71,scaleY:0.69,rotation:0,skewX:-43.2,skewY:-37.9,x:265.7,y:-183.3},4).to({regY:17.4,scaleX:0.7,scaleY:0.7,rotation:7.2,skewX:0,skewY:0,x:280.9,y:-178.2},5).to({regY:17.5,scaleX:0.71,scaleY:0.69,rotation:0,skewX:-43.2,skewY:-37.9,x:265.7,y:-183.3},4).to({regY:17.3,scaleX:0.7,scaleY:0.7,rotation:67.2,skewX:0,skewY:0,x:292.7,y:-141.5},5).to({alpha:0},4).wait(1).to({regX:16,regY:17.4,rotation:7.2,x:185,y:-94.8},0).to({regX:16.1,scaleY:0.71,rotation:0,skewX:0.9,skewY:11.7,x:194.6,y:-99,alpha:1},7).to({scaleY:0.7,rotation:7.2,skewX:0,skewY:0,x:216.2,y:-113.5},7).to({scaleY:0.71,rotation:0,skewX:0.9,skewY:11.7,x:225.8,y:-127.7},7).to({scaleY:0.7,rotation:7.2,skewX:0,skewY:0,x:218.6,y:-120.8},7).to({regX:16.2,rotation:-16.5,x:213,y:-121.5},4).to({regX:16.1,rotation:7.2,x:218.6,y:-120.8},8).to({regX:16.2,rotation:-16.5,x:213,y:-121.5},4).to({regX:16.1,rotation:7.2,x:218.6,y:-120.8},8).wait(8).to({rotation:7.2},0).to({regX:16.2,rotation:-16.5,x:213,y:-121.5},4).to({regX:16.1,rotation:7.2,x:218.6,y:-120.8},8).to({scaleY:0.71,rotation:0,skewX:0.9,skewY:11.7,x:220.2,y:-125},7).to({scaleY:0.7,rotation:7.2,skewX:0,skewY:0,x:229.8,y:-129.5},8).to({regX:16.2,scaleY:0.7,rotation:0,skewX:-9.5,skewY:-6.5,x:214.8,y:-127.6},2).to({regX:16.1,scaleY:0.7,rotation:7.2,skewX:0,skewY:0,x:222,y:-128},6).to({regX:16.2,rotation:-16.5,x:219.7,y:-133},4).to({regX:16.1,rotation:7.2,x:240.6,y:-139.5},6).to({regX:16.2,rotation:-16.5,x:233.4,y:-138.6},5).to({regX:16.1,rotation:7.2,x:240.6,y:-139.5},8).to({scaleY:0.71,rotation:0,skewX:0.9,skewY:11.7,x:244.2,y:-146},5).to({scaleY:0.7,rotation:7.2,skewX:0,skewY:0,x:258.6,y:-160.8},8).to({scaleY:0.71,rotation:0,skewX:0.9,skewY:11.7,x:260.2,y:-165},7).to({scaleY:0.7,rotation:7.2,skewX:0,skewY:0,x:282,y:-178},8).to({regX:16.2,rotation:-16.5,x:275.7,y:-177},5).to({regX:16.1,rotation:7.2,x:280.9,y:-178.2},5).wait(1));

	// Symbol 22
	this.instance_5 = new lib.Symbol22();
	this.instance_5.parent = this;
	this.instance_5.setTransform(257.2,-160.4,0.698,0.698,7.2,0,0,16.6,24.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({x:253.2,y:-156.9},6).to({regX:16.7,scaleX:0.71,scaleY:0.69,rotation:0,skewX:-13.1,skewY:-7.9,x:254.7,y:-160.4},4).to({regX:16.6,scaleX:0.7,scaleY:0.7,rotation:7.2,skewX:0,skewY:0,x:257.2},5).to({regX:16.7,scaleX:0.71,scaleY:0.69,rotation:0,skewX:-13.1,skewY:-7.9,x:254.7},4).to({regX:16.4,scaleX:0.7,scaleY:0.7,rotation:82.2,skewX:0,skewY:0,x:275.6,y:-156.1},5).to({alpha:0},4).wait(1).to({regX:16.6,rotation:7.2,x:161.3,y:-77.1},0).to({scaleY:0.7,rotation:0,skewX:4.4,skewY:7.2,x:174.1,y:-81.5,alpha:1},7).to({scaleY:0.7,rotation:7.2,skewX:0,skewY:0,x:192.5,y:-95.7},7).to({regY:25,scaleY:0.7,rotation:0,skewX:4.4,skewY:7.2,x:205.2,y:-110.1},7).to({regY:24.9,scaleY:0.7,rotation:7.2,skewX:0,skewY:0,x:194.9,y:-103.1},7).to({rotation:3.3,x:193.6,y:-102.1},4).to({rotation:7.2,x:194.9,y:-103.1},8).to({rotation:3.3,x:193.6,y:-102.1},4).to({rotation:7.2,x:194.9,y:-103.1},8).wait(8).to({rotation:3.3,x:193.6,y:-102.1},4).to({rotation:7.2,x:194.9,y:-103.1},8).to({scaleY:0.7,rotation:0,skewX:4.4,skewY:7.2,x:199.6,y:-107.5},7).to({regX:16.5,scaleY:0.7,rotation:7.2,skewX:0,skewY:0,x:206,y:-111.7},8).to({regX:16.8,scaleY:0.7,rotation:0,skewX:-4.8,skewY:-4,x:196.1,y:-106.8},2).to({regX:16.6,scaleY:0.7,rotation:7.2,skewX:0,skewY:0,x:198.3,y:-110.2},6).to({rotation:3.3,x:200.3,y:-113.6},4).to({rotation:7.2,x:216.9,y:-121.7},6).to({rotation:3.3,x:214,y:-119.2},5).to({rotation:7.2,x:216.9,y:-121.7},8).to({scaleY:0.7,rotation:0,skewX:4.4,skewY:7.2,x:223.6,y:-128.5},5).to({scaleY:0.7,rotation:7.2,skewX:0,skewY:0,x:234.9,y:-143.1},8).to({scaleY:0.7,rotation:0,skewX:4.4,skewY:7.2,x:239.6,y:-147.5},7).to({scaleY:0.7,rotation:7.2,skewX:0,skewY:0,x:258.3,y:-160.2},8).to({rotation:3.3,x:256.3,y:-157.6},5).to({rotation:7.2,x:257.2,y:-160.4},5).wait(1));

	// Symbol 18
	this.instance_6 = new lib.Symbol18();
	this.instance_6.parent = this;
	this.instance_6.setTransform(258.4,-141.6,0.698,0.698,7.2,0,0,10.1,10.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({regY:10.3,rotation:-22.8,x:259.6,y:-140.3},6).to({regY:10.4,scaleX:0.71,scaleY:0.69,rotation:0,skewX:1.8,skewY:7.1,x:257.6,y:-141.6},4).to({scaleX:0.7,scaleY:0.7,rotation:7.2,skewX:0,skewY:0,x:258.4},5).to({scaleX:0.71,scaleY:0.69,rotation:0,skewX:1.8,skewY:7.1,x:257.6},4).to({regX:10,scaleX:0.7,scaleY:0.7,rotation:73.3,skewX:0,skewY:0,x:258.6,y:-150.8},5).to({alpha:0},4).wait(1).to({regX:10.1,rotation:7.2,x:162.5,y:-58.3},0).to({regY:10.3,rotation:-30.5,x:179.8,y:-68.1,alpha:1},7).to({regY:10.4,rotation:7.2,x:193.7,y:-76.9},7).to({regY:10.3,rotation:-30.5,x:210.9,y:-96.7},7).to({regX:10,regY:10.5,rotation:7.2,x:196,y:-84.2},7).to({rotation:7.2},4).wait(40).to({regX:10.1,regY:10.4,rotation:-30.5,x:205.4,y:-94},7).to({regX:10.2,regY:10.5,rotation:7.2,x:207.3,y:-92.9},8).to({regX:10.1,regY:10.4,rotation:-3.5,x:201.8,y:-91.7},2).to({rotation:7.2,x:199.5,y:-91.4},6).to({regX:10,regY:10.3,rotation:37.2,x:200.2,y:-98.9},4).to({regX:10.1,regY:10.4,rotation:7.2,x:218.1,y:-102.9},6).to({regX:10.2,rotation:-22.8,x:217.9,y:-102.5},5).to({regX:10.1,rotation:7.2,x:218.1,y:-102.9},8).to({rotation:-30.5,x:229.4,y:-115},5).to({regX:10,regY:10.5,rotation:7.2,x:236,y:-124.2},8).to({regX:10.1,regY:10.4,rotation:-30.5,x:245.4,y:-134},7).to({rotation:7.2,x:259.5,y:-141.4},8).to({regX:10,regY:10.3,rotation:37.2,x:256.2,y:-142.9},5).to({regX:10.1,regY:10.4,rotation:7.2,x:258.4,y:-141.6},5).wait(1));

	// Symbol 16
	this.instance_7 = new lib.Symbol16();
	this.instance_7.parent = this;
	this.instance_7.setTransform(259.1,-160.5,0.698,0.698,7.2,0,0,8.2,11.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({x:255.1,y:-157},6).to({regY:11.3,scaleX:0.71,scaleY:0.69,rotation:0,skewX:1.8,skewY:7.1,x:256.5,y:-160.6},4).to({regY:11.4,scaleX:0.7,scaleY:0.7,rotation:7.2,skewX:0,skewY:0,x:259.1,y:-160.5},5).to({regY:11.3,scaleX:0.71,scaleY:0.69,rotation:0,skewX:1.8,skewY:7.1,x:256.5,y:-160.6},4).to({regX:7.9,regY:11.4,scaleX:0.7,scaleY:0.7,rotation:133,skewX:0,skewY:0,x:261.4,y:-165.6},5).to({alpha:0},4).wait(1).to({regX:8.2,rotation:7.2,x:163.2,y:-77.2},0).to({rotation:7.2,x:176.8,y:-81.5,alpha:1},7).to({regX:8.1,regY:11.5,x:194.3,y:-95.8},7).to({regY:11.4,x:207.9,y:-110.2},7).to({regX:8.2,x:196.7,y:-103.2},7).wait(44).to({regX:8.1,regY:11.5,x:202.2,y:-107.5},7).to({regY:11.4,x:207.8,y:-111.8},8).to({regX:8.2,regY:11.3,x:201.5,y:-109.1},2).to({regX:8.1,regY:11.4,x:200.1,y:-110.3},6).to({regX:8.2,x:203.5,y:-114.7},4).to({x:218.7,y:-121.8},6).to({regY:11.5,x:217.1,y:-120.2},5).to({regY:11.4,x:218.7,y:-121.8},8).to({regX:8.1,regY:11.5,x:226.2,y:-128.5},5).to({regX:8.2,regY:11.4,x:236.7,y:-143.2},8).to({regX:8.1,regY:11.5,x:242.2,y:-147.5},7).to({regY:11.4,x:260.1,y:-160.3},8).to({regX:8.2,x:259.5,y:-158.7},5).to({x:259.1,y:-160.5},5).wait(1));

	// Symbol 18
	this.instance_8 = new lib.Symbol18();
	this.instance_8.parent = this;
	this.instance_8.setTransform(256.4,-150.6,0.698,0.698,-17.3,0,0,10.2,10.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({x:252.4,y:-147.1},6).to({regY:10.6,scaleX:0.68,scaleY:0.72,rotation:0,skewX:-22.1,skewY:-17.8,x:254.8,y:-150.6},4).to({regY:10.5,scaleX:0.7,scaleY:0.7,rotation:-17.3,skewX:0,skewY:0,x:256.4},5).to({regY:10.6,scaleX:0.68,scaleY:0.72,rotation:0,skewX:-22.1,skewY:-17.8,x:254.8},4).to({regX:10.1,regY:10.3,scaleX:0.7,scaleY:0.7,rotation:87.7,skewX:0,skewY:0,x:253.5,y:-169.2},5).to({alpha:0},4).wait(1).to({regX:10.2,regY:10.5,rotation:-17.3,x:160.5,y:-67.3},0).to({regX:10.1,rotation:12.7,x:170.4,y:-67.8,alpha:1},7).to({rotation:-17.3,x:191.7,y:-86},7).to({regY:10.4,rotation:12.7,x:201.6,y:-96.6},7).to({regY:10.5,rotation:-17.3,x:194,y:-93.3},7).wait(44).to({rotation:12.7,x:196,y:-93.8},7).to({regX:10.2,rotation:-17.3,x:205.2,y:-102},8).to({regX:10.1,regY:10.3,rotation:-8.6,x:197.7,y:-98.2},2).to({regX:10.2,regY:10.5,rotation:-17.3,x:197.5,y:-100.4},6).to({regX:10.1,x:200.8,y:-104.8},4).to({regX:10.2,x:216.1,y:-111.9},6).to({regX:10.1,x:214.4,y:-110.4},5).to({regX:10.2,x:216.1,y:-111.9},8).to({regX:10.1,rotation:12.7,x:220,y:-114.8},5).to({rotation:-17.3,x:234,y:-133.3},8).to({rotation:12.7,x:236,y:-133.8},7).to({regX:10.2,rotation:-17.3,x:257.5,y:-150.4},8).to({regX:10.1,x:256.8,y:-148.8},5).to({regX:10.2,x:256.4,y:-150.6},5).wait(1));

	// Layer 3
	this.instance_9 = new lib.Symbol25();
	this.instance_9.parent = this;
	this.instance_9.setTransform(302.9,-177.8,0.52,0.52,7.2,0,0,22.4,25.6);
	this.instance_9._off = true;
	this.instance_9.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 255, 0, 0)];
	this.instance_9.cache(-5,7,47,42);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(58).to({_off:false},0).to({regX:22.3,scaleX:1.41,scaleY:1.41,x:296.8,y:-175.6,alpha:0},3).to({_off:true},1).wait(116).to({_off:false,regX:22.4,scaleX:0.52,scaleY:0.52,x:331.9,y:-226.8,alpha:1},0).to({regX:22.3,scaleX:1.41,scaleY:1.41,x:333.8,y:-223.6,alpha:0},3).to({_off:true},1).wait(4));

	// Symbol 7
	this.instance_10 = new lib.Symbol7();
	this.instance_10.parent = this;
	this.instance_10.setTransform(345.2,-216.5,0.693,0.693,-3.7,0,0,11.2,39);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({rotation:5.6,x:336.2,y:-203.5},3).to({regX:11.3,rotation:-129.4,x:282.3,y:-179.1},3).to({regX:11.2,rotation:5.6,x:336.2,y:-203.5},4).to({regX:11.3,rotation:-129.4,x:282.3,y:-179.1},5).to({regX:11.2,rotation:5.6,x:336.2,y:-203.5},4).to({regX:11,regY:38.9,rotation:22.2,x:343,y:-208.1},5).to({regX:11.2,rotation:-3.7,x:336.1,y:-202},9).to({regX:11,rotation:22.2,x:332.6,y:-189.3},10).to({x:333,y:-189.1},1).to({regX:11.2,rotation:-3.7,x:324.1,y:-182},9).to({rotation:6.5,x:320.4,y:-177.7},5).to({regX:10.8,rotation:112.2,x:329.6,y:-137.2},5).to({alpha:0},6).wait(41).to({regX:11,rotation:22.2,x:377.5,y:-317.7},0).to({regX:11.2,regY:39,rotation:-3.7,x:371.8,y:-313.3,alpha:1},9).to({regX:11,regY:38.9,rotation:22.2,x:373,y:-298.1},10).to({regX:11.2,rotation:-3.7,x:366.1,y:-292},9).to({regX:11,rotation:22.2,x:362.6,y:-279.3},10).to({rotation:7.2,x:360.4,y:-266.5},9).to({regX:11.2,rotation:-3.7,x:354.9,y:-259.1},9).to({regX:11,regY:39,rotation:22.2,x:354.1,y:-240},11).to({regY:38.8,scaleX:0.69,scaleY:0.7,rotation:0,skewX:89.9,skewY:88.7,x:363.2,y:-220.4},3).to({regX:11.2,regY:39,scaleX:0.69,scaleY:0.69,rotation:-3.7,skewX:0,skewY:0,x:345.2,y:-216.5},5).wait(1));

	// Symbol 13
	this.instance_11 = new lib.Symbol13();
	this.instance_11.parent = this;
	this.instance_11.setTransform(322.5,-191.6,0.693,0.693,0.5,0,0,18.2,13.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({rotation:2.8,x:311.7,y:-180.5},3).to({regY:12.9,rotation:-52.8,x:303.1,y:-183.4},3).to({regY:13.1,rotation:2.8,x:311.7,y:-180.5},4).to({regY:12.9,rotation:-52.8,x:303.1,y:-183.4},5).to({regY:13.1,rotation:2.8,x:311.7,y:-180.5},4).to({regX:18.1,regY:13,rotation:7.2,x:315.6,y:-188.4},5).to({regX:18.2,rotation:0.5,x:313.4,y:-177.1},9).to({regX:18.1,regY:12.9,rotation:7.2,x:305.2,y:-169.6},10).to({regY:13,x:305.6,y:-169.4},1).to({regX:18.2,rotation:0.5,x:301.4,y:-157.1},9).to({rotation:3,x:295.8,y:-154.9},5).to({regX:18.1,regY:12.8,rotation:82.2,x:303,y:-163},5).to({alpha:0},6).wait(41).to({regX:18,regY:12.9,rotation:7.2,x:350.1,y:-298.1},0).to({regX:18.2,regY:13,rotation:0.5,x:349.1,y:-288.6,alpha:1},9).to({regX:18.1,rotation:7.2,x:345.6,y:-278.4},10).to({regX:18.2,rotation:0.5,x:343.4,y:-267.1},9).to({regX:18.1,regY:12.9,rotation:7.2,x:335.2,y:-259.6},10).to({regY:13,x:334.4,y:-245.5},9).to({regX:18.2,rotation:0.5,x:332.2,y:-234.3},9).to({regX:18.1,regY:12.9,rotation:7.2,x:326.7,y:-220.4},11).to({regX:18,regY:12.8,scaleX:0.69,rotation:0,skewX:27.3,skewY:25.6,x:327.7,y:-221.9},3).to({regX:18.2,regY:13.1,scaleX:0.69,rotation:0.5,skewX:0,skewY:0,x:322.5,y:-191.6},5).wait(1));

	// Symbol 12
	this.instance_12 = new lib.Symbol12();
	this.instance_12.parent = this;
	this.instance_12.setTransform(315.4,-189.5,0.693,0.693,-14.3,0,0,10.7,13);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({rotation:-6.3,x:303.6,y:-177.4},3).to({regX:10.6,rotation:-7.8,x:296.7,y:-170},3).to({regX:10.7,rotation:-6.3,x:303.6,y:-177.4},4).to({regX:10.6,rotation:-7.8,x:296.7,y:-170},5).to({regX:10.7,rotation:-6.3,x:303.6,y:-177.4},4).to({regX:10.5,rotation:7.2,x:305.5,y:-183.7},5).to({regX:10.7,regY:12.9,rotation:-14.3,x:306.3,y:-175},9).to({regX:10.6,regY:13,rotation:7.2,x:295.1,y:-164.9},10).to({regX:10.5,rotation:7.2,x:295.5,y:-164.7},1).to({regX:10.7,regY:12.9,rotation:-14.3,x:294.3,y:-155},9).to({rotation:-5.5,x:287.5,y:-151.8},5).to({regX:10.6,regY:13,rotation:82.2,x:300.7,y:-172.9},5).to({alpha:0},6).wait(41).to({regX:10.5,rotation:7.2,x:340,y:-293.3},0).to({regX:10.7,rotation:-14.3,x:342.1,y:-286.3,alpha:1},9).to({regX:10.5,rotation:7.2,x:335.5,y:-273.7},10).to({regX:10.7,regY:12.9,rotation:-14.3,x:336.3,y:-265},9).to({regX:10.6,regY:13,rotation:7.2,x:325.1,y:-254.9},10).to({regX:10.7,regY:12.8,rotation:-7.8,x:324.9,y:-240.7},9).to({regY:13,rotation:-14.3,x:325.1,y:-232},9).to({regX:10.5,regY:12.9,rotation:7.2,x:316.6,y:-215.7},11).to({regX:10.6,scaleX:0.7,scaleY:0.69,rotation:0,skewX:31.8,skewY:30.2,x:315.7,y:-219.7},3).to({regX:10.7,regY:13,scaleX:0.69,scaleY:0.69,rotation:-14.3,skewX:0,skewY:0,x:315.4,y:-189.5},5).wait(1));

	// Symbol 11
	this.instance_13 = new lib.Symbol11();
	this.instance_13.parent = this;
	this.instance_13.setTransform(326.1,-181.6,0.693,0.693,37.2,0,0,8,11.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({regX:8.1,scaleX:0.69,scaleY:0.69,rotation:-18.7,x:318.2,y:-175.1},3).to({regY:12,scaleX:0.69,scaleY:0.69,rotation:-52.8,x:312.3,y:-177.6},3).to({regY:11.8,scaleX:0.69,scaleY:0.69,rotation:-18.7,x:318.2,y:-175.1},4).to({regY:12,scaleX:0.69,scaleY:0.69,rotation:-52.8,x:312.3,y:-177.6},5).to({regY:11.8,scaleX:0.69,scaleY:0.69,rotation:-18.7,x:318.2,y:-175.1},4).to({regX:8,regY:12,scaleX:0.69,scaleY:0.69,rotation:7.2,x:322.5,y:-177},5).to({regX:8.1,regY:11.9,rotation:37.2,x:317.1,y:-167},9).to({rotation:7.2,x:312.1,y:-158.2},10).to({regX:8,regY:12,rotation:7.2,x:312.5,y:-158},1).to({regX:8.1,regY:11.9,rotation:37.2,x:305.1,y:-147},9).to({regY:11.8,scaleX:0.69,scaleY:0.69,rotation:25.1,x:300.8,y:-144.3},5).to({regX:8,regY:12,scaleX:0.69,scaleY:0.69,rotation:127.2,x:293.7,y:-161.9},5).to({rotation:127.2,alpha:0},6).wait(41).to({rotation:7.2,x:357,y:-286.6},0).to({regX:8.1,regY:11.9,rotation:37.2,x:352.8,y:-278.4,alpha:1},9).to({regX:8,regY:12,rotation:7.2,x:352.5,y:-267},10).to({regX:8.1,regY:11.9,rotation:37.2,x:347.1,y:-257},9).to({rotation:7.2,x:342.1,y:-248.2},10).to({regX:8.2,regY:12,rotation:-22.8,x:341.2,y:-237.1},9).to({regX:8.1,regY:11.9,rotation:37.2,x:335.8,y:-224.1},9).to({regX:8,regY:12,rotation:7.2,x:333.5,y:-209},11).to({regX:8.1,scaleX:0.69,scaleY:0.7,rotation:0,skewX:18.6,skewY:17.1,x:332.2,y:-206.2},3).to({regX:8,regY:11.8,scaleX:0.69,scaleY:0.69,rotation:37.2,skewX:0,skewY:0,x:326.1,y:-181.6},5).wait(1));

	// Symbol 10
	this.instance_14 = new lib.Symbol10();
	this.instance_14.parent = this;
	this.instance_14.setTransform(326.9,-209.2,0.693,0.693,3.8,0,0,23.2,23.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).to({regY:23.3,rotation:5,x:316.7,y:-198},3).to({regX:23.1,regY:23.4,rotation:-37.8,x:292.9,y:-199.5},3).to({regX:23.2,regY:23.3,rotation:5,x:316.7,y:-198},4).to({regX:23.1,regY:23.4,rotation:-37.8,x:292.9,y:-199.5},5).to({regX:23.2,regY:23.3,rotation:5,x:316.7,y:-198},4).to({regX:23.1,regY:23.4,rotation:7.2,x:321.6,y:-205.5},5).to({regX:23.2,rotation:3.8,x:317.8,y:-194.6},9).to({regX:22.9,rotation:7.2,x:311,y:-186.7},10).to({regX:23.1,x:311.6,y:-186.5},1).to({regX:23.2,rotation:3.8,x:305.8,y:-174.6},9).to({rotation:5,x:300.7,y:-172.3},5).to({regX:22.9,rotation:82.2,x:320.9,y:-161.7},5).to({alpha:0},6).wait(41).to({regX:23.1,rotation:7.2,x:356.1,y:-315.1},0).to({regX:23.2,rotation:3.8,x:353.6,y:-306.1,alpha:1},9).to({regX:23.1,rotation:7.2,x:351.6,y:-295.5},10).to({regX:23.2,rotation:3.8,x:347.8,y:-284.6},9).to({regX:22.9,rotation:7.2,x:341,y:-276.7},10).to({regX:23.1,x:340.4,y:-262.7},9).to({regX:23.2,rotation:3.8,x:336.6,y:-251.8},9).to({regX:23.1,rotation:7.2,x:332.7,y:-237.4},11).to({rotation:0,skewX:22.8,skewY:21.2,x:339.7,y:-237},3).to({regX:23.2,rotation:3.8,skewX:0,skewY:0,x:326.9,y:-209.2},5).wait(1));

	// Symbol 8
	this.instance_15 = new lib.Symbol8();
	this.instance_15.parent = this;
	this.instance_15.setTransform(341,-208.4,0.693,0.693,56.3,0,0,10,10.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).to({regX:10.1,scaleX:0.69,scaleY:0.69,rotation:60.4,x:330.8,y:-196},3).to({regX:9.9,regY:10.9,scaleX:0.69,scaleY:0.69,rotation:52.2,x:305.8,y:-196.2},3).to({regX:10.1,regY:10.8,scaleX:0.69,scaleY:0.69,rotation:60.4,x:330.8,y:-196},4).to({regX:9.9,regY:10.9,scaleX:0.69,scaleY:0.69,rotation:52.2,x:305.8,y:-196.2},5).to({regX:10.1,regY:10.8,scaleX:0.69,scaleY:0.69,rotation:60.4,x:330.8,y:-196},4).to({regX:10,scaleX:0.69,scaleY:0.69,rotation:67.2,x:335.4,y:-201.9},5).to({regY:10.9,rotation:56.3,x:331.9,y:-193.7},9).to({rotation:67.2,x:324.9,y:-183},10).to({regY:10.8,x:325.4,y:-182.9},1).to({regY:10.9,rotation:56.3,x:319.9,y:-173.7},9).to({regX:9.9,regY:10.8,scaleX:0.69,scaleY:0.69,rotation:60.7,x:314.8,y:-170.3},5).to({regX:10,regY:10.9,scaleX:0.69,scaleY:0.69,rotation:142.2,x:320.9,y:-147.4},5).to({alpha:0},6).wait(41).to({regY:10.8,rotation:67.2,x:369.9,y:-311.5},0).to({rotation:56.3,x:367.7,y:-305.2,alpha:1},9).to({rotation:67.2,x:365.4,y:-291.9},10).to({regY:10.9,rotation:56.3,x:361.9,y:-283.7},9).to({rotation:67.2,x:354.9,y:-273},10).to({regX:10.1,regY:11,x:354,y:-258.9},9).to({regX:10,regY:10.8,rotation:56.3,x:350.7,y:-250.9},9).to({rotation:67.2,x:346.4,y:-233.8},11).to({scaleX:0.68,scaleY:0.7,rotation:0,skewX:64.1,skewY:64.8,y:-231.6},3).to({scaleX:0.69,scaleY:0.69,rotation:56.3,skewX:0,skewY:0,x:341,y:-208.4},5).wait(1));

	// Symbol 9
	this.instance_16 = new lib.Symbol9();
	this.instance_16.parent = this;
	this.instance_16.setTransform(309.2,-208.7,0.698,0.693,0,-37.2,-30.5,25.3,19.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).to({regX:25.4,scaleX:0.7,scaleY:0.69,skewX:-28.8,skewY:-24.6,x:299.2,y:-199.4},3).to({regX:25.2,scaleX:0.69,scaleY:0.69,rotation:-59.3,skewX:0,skewY:0,x:277.5,y:-190.5},3).to({regX:25.4,scaleX:0.7,scaleY:0.69,rotation:0,skewX:-28.8,skewY:-24.6,x:299.2,y:-199.4},4).to({regX:25.2,scaleX:0.69,scaleY:0.69,rotation:-59.3,skewX:0,skewY:0,x:277.5,y:-190.5},5).to({regX:25.4,scaleX:0.7,scaleY:0.69,rotation:0,skewX:-28.8,skewY:-24.6,x:299.2,y:-199.4},4).to({regX:25.1,scaleX:0.69,scaleY:0.69,rotation:-14.3,skewX:0,skewY:0,x:304.4,y:-210.1},5).to({regX:25.3,scaleX:0.7,rotation:0,skewX:-37.2,skewY:-30.5,x:300.2,y:-194.1},9).to({regX:25.1,scaleX:0.69,rotation:-14.3,skewX:0,skewY:0,x:293.9,y:-191.3},10).to({x:294.4,y:-191.1},1).to({regX:25.3,scaleX:0.7,rotation:0,skewX:-37.2,skewY:-30.5,x:288.2,y:-174.1},9).to({regX:25.4,scaleX:0.7,scaleY:0.69,skewX:-28,skewY:-24,x:283.3,y:-173.8},5).to({regX:25.1,regY:19.8,scaleX:0.69,scaleY:0.69,rotation:30.7,skewX:0,skewY:0,x:321,y:-174.5},5).to({alpha:0},6).wait(41).to({rotation:-14.3,x:338.9,y:-319.7},0).to({regX:25.4,regY:19.9,scaleX:0.7,rotation:0,skewX:-37.2,skewY:-30.5,x:335.9,y:-305.6,alpha:1},9).to({regX:25.1,scaleX:0.69,rotation:-14.3,skewX:0,skewY:0,x:334.4,y:-300.1},10).to({regX:25.3,scaleX:0.7,rotation:0,skewX:-37.2,skewY:-30.5,x:330.2,y:-284.1},9).to({regX:25.1,scaleX:0.69,rotation:-14.3,skewX:0,skewY:0,x:323.9,y:-281.3},10).to({regX:25.2,rotation:0.7,x:323.3,y:-268},9).to({regX:25.4,scaleX:0.7,rotation:0,skewX:-37.2,skewY:-30.5,x:319,y:-251.3},9).to({regX:25.1,regY:19.8,scaleX:0.69,rotation:-14.3,skewX:0,skewY:0,x:315.4,y:-242.1},11).to({regX:25.2,regY:19.7,scaleX:0.7,scaleY:0.69,rotation:0,skewX:9.7,skewY:10.5,x:322.5,y:-247.4},3).to({regX:25.3,regY:19.9,scaleY:0.69,skewX:-37.2,skewY:-30.5,x:309.2,y:-208.7},5).wait(1));

	// Layer 2
	this.instance_17 = new lib.Symbol25();
	this.instance_17.parent = this;
	this.instance_17.setTransform(328.9,-229.1,0.52,0.52,7.2,0,0,22.4,25.7);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(67).to({_off:false},0).to({regX:22.3,scaleX:1.41,scaleY:1.41,x:328.8,y:-229,alpha:0},3).to({_off:true},1).wait(18).to({_off:false,regX:22.4,regY:25.6,scaleX:0.52,scaleY:0.52,x:311.9,y:-185.9,alpha:1},0).to({regX:22.3,regY:25.7,scaleX:1.41,scaleY:1.41,x:307.7,y:-181.3,alpha:0},3).to({_off:true},1).wait(32).to({_off:false,regX:22.4,regY:25.6,scaleX:0.52,scaleY:0.52,x:245.2,y:-137.4,alpha:1},0).to({regX:22.3,scaleX:1.41,scaleY:1.41,x:250.5,y:-147.6,alpha:0},3).to({_off:true},1).wait(7).to({_off:false,regX:22.4,scaleX:0.52,scaleY:0.52,x:262.9,y:-157.8,alpha:1},0).to({regX:22.3,scaleX:1.41,scaleY:1.41,x:286.8,y:-155.6,alpha:0},3).to({_off:true},1).wait(46));

	// Symbol 7
	this.instance_18 = new lib.Symbol7();
	this.instance_18.parent = this;
	this.instance_18.setTransform(377.5,-317.7,0.693,0.693,22.2,0,0,11,38.9);
	this.instance_18.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).to({regX:11.2,regY:39,rotation:-3.7,x:371.8,y:-313.3,alpha:1},9).to({regX:11,regY:38.9,rotation:22.2,x:373,y:-298.1},10).to({regX:11.2,rotation:-3.7,x:366.1,y:-292},9).to({regX:11,rotation:22.2,x:362.6,y:-279.3},10).to({rotation:7.2,x:360.4,y:-266.5},9).to({regX:11.2,rotation:-3.7,x:354.9,y:-259.1},9).to({regX:11,regY:39,rotation:22.2,x:354.1,y:-240},11).to({regY:38.8,scaleX:0.69,scaleY:0.7,rotation:0,skewX:89.9,skewY:88.7,x:363.2,y:-220.4},3).to({regX:11.2,regY:39,scaleX:0.69,scaleY:0.69,rotation:-3.7,skewX:0,skewY:0,x:345.2,y:-216.5},6).to({regX:11,regY:38.9,rotation:22.2,x:334.1,y:-197.3},10).to({regX:11.1,rotation:13.5,x:329,y:-198.2},3).to({regX:11.2,scaleX:0.68,scaleY:0.7,rotation:0,skewX:23.5,skewY:20.1,x:331.9,y:-193.1},3).to({regY:39,scaleX:0.69,scaleY:0.69,rotation:-3.7,skewX:0,skewY:0,x:318.7,y:-200},3).to({regX:10.9,rotation:22.2,x:317.1,y:-185.1},6).to({regY:38.8,rotation:37.2,x:310.8,y:-175},6).to({regX:10.8,regY:38.7,scaleX:0.69,scaleY:0.69,rotation:43.5,x:311.8,y:-173.3},2).to({regX:11.2,regY:38.9,scaleX:0.69,scaleY:0.69,rotation:-22.8,x:272,y:-181.6},5).to({scaleX:0.56,scaleY:0.63,rotation:0.8,x:265.6,y:-162.5},1).to({regX:9.8,regY:39.6,scaleX:0.51,scaleY:0.69,rotation:0,skewX:-26.6,skewY:170,x:254.4,y:-148.5},1).to({regX:10.8,regY:39.1,scaleX:1.01,scaleY:0.69,skewX:-77.6,skewY:102.4,x:234.7,y:-119.3},1).to({regX:11.1,regY:38.9,scaleX:0.69,rotation:37.2,skewX:0,skewY:0,x:277.7,y:-148.4},7).to({regY:38.8,rotation:47.1,x:291.6,y:-154.2},4).to({regY:39,rotation:22.2,x:283.9,y:-159.3},6).wait(2).to({rotation:7.2,x:300.7,y:-170.7},0).to({regX:10.6,regY:38.4,scaleX:0.49,scaleY:0.47,rotation:0,skewX:121.9,skewY:127,x:317.2,y:-133.5},5,cjs.Ease.get(0.99)).to({regX:10.7,regY:38.2,x:321.5,y:-134.9,alpha:0},10).to({_off:true},1).wait(34));

	// Symbol 13
	this.instance_19 = new lib.Symbol13();
	this.instance_19.parent = this;
	this.instance_19.setTransform(350.1,-298.1,0.693,0.693,7.2,0,0,18,12.9);
	this.instance_19.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).to({regX:18.2,regY:13,rotation:0.5,x:349.1,y:-288.6,alpha:1},9).to({regX:18.1,rotation:7.2,x:345.6,y:-278.4},10).to({regX:18.2,rotation:0.5,x:343.4,y:-267.1},9).to({regX:18.1,regY:12.9,rotation:7.2,x:335.2,y:-259.6},10).to({regY:13,x:334.4,y:-245.5},9).to({regX:18.2,rotation:0.5,x:332.2,y:-234.3},9).to({regX:18.1,regY:12.9,rotation:7.2,x:326.7,y:-220.4},11).to({regX:18,regY:12.8,scaleX:0.69,rotation:0,skewX:27.3,skewY:25.6,x:327.7,y:-221.9},3).to({regX:18.2,regY:13.1,scaleX:0.69,rotation:0.5,skewX:0,skewY:0,x:322.5,y:-191.6},6).to({regX:18.1,regY:12.9,rotation:7.2,x:306.7,y:-177.6},10).to({regX:17.9,regY:13,rotation:5.2,x:303.1,y:-176.8},3).to({regX:18.2,regY:12.9,scaleX:0.7,scaleY:0.69,rotation:0,skewX:6.7,skewY:3,x:302.5,y:-176.1},3).to({regY:13,scaleX:0.69,scaleY:0.69,rotation:0.5,skewX:0,skewY:0,x:296,y:-175.3},3).to({regX:18.1,regY:12.9,rotation:7.2,x:289.7,y:-165.5},6).to({x:278.5,y:-156.8},6).to({regX:18.2,x:279.1,y:-156.2},2).to({regX:18.1,regY:13,rotation:-22.8,x:254.9,y:-139},5).to({rotation:7.2,x:233.5,y:-116.1},3).to({regY:12.9,rotation:7.2,x:237,y:-123.3},7).to({regX:18,regY:12.8,rotation:25.2,x:246.4,y:-137.2},4).to({regX:18.1,regY:13,rotation:7.2,x:261.4,y:-137.7},6).wait(2).to({rotation:7.2,x:264.5,y:-142.4},0).to({regX:18.2,regY:12.3,scaleX:0.65,scaleY:0.69,rotation:0,skewX:90.5,skewY:105.5,x:288.8,y:-158.2},5,cjs.Ease.get(0.99)).to({regX:18.1,x:293.1,y:-159.7,alpha:0},10).to({_off:true},1).wait(34));

	// Symbol 12
	this.instance_20 = new lib.Symbol12();
	this.instance_20.parent = this;
	this.instance_20.setTransform(340,-293.3,0.693,0.693,7.2,0,0,10.5,13);
	this.instance_20.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).to({regX:10.7,rotation:-14.3,x:342.1,y:-286.3,alpha:1},9).to({regX:10.5,rotation:7.2,x:335.5,y:-273.7},10).to({regX:10.7,regY:12.9,rotation:-14.3,x:336.3,y:-265},9).to({regX:10.6,regY:13,rotation:7.2,x:325.1,y:-254.9},10).to({regX:10.7,regY:12.8,rotation:-7.8,x:324.9,y:-240.7},9).to({regY:13,rotation:-14.3,x:325.1,y:-232},9).to({regX:10.5,regY:12.9,rotation:7.2,x:316.6,y:-215.7},11).to({regX:10.6,scaleX:0.7,scaleY:0.69,rotation:0,skewX:31.8,skewY:30.2,x:315.7,y:-219.7},3).to({regX:10.7,regY:13,scaleX:0.69,scaleY:0.69,rotation:-14.3,skewX:0,skewY:0,x:315.4,y:-189.5},6).to({regX:10.5,rotation:7.2,x:296.6,y:-172.9},10).to({regX:10.7,regY:12.9,rotation:0.2,x:294.1},3).to({regY:12.8,scaleX:0.7,scaleY:0.68,rotation:0,skewX:26.6,skewY:23.2,x:287.7,y:-174.1},3).to({regY:13,scaleX:0.69,scaleY:0.69,rotation:-14.3,skewX:0,skewY:0,x:288.9,y:-173},3).to({regX:10.6,rotation:-22.8,x:281.3,y:-161.6},6).to({regY:12.8,rotation:37.2,x:267.7,y:-153.3},6).to({scaleX:0.69,scaleY:0.69,rotation:28.5,x:268.6},2).to({regY:12.9,scaleX:0.69,scaleY:0.69,rotation:-22.8,x:248.5,y:-130},5).to({rotation:7.2,x:223.5,y:-111.5},3).to({regX:10.7,regY:13,rotation:-37.8,x:230.7,y:-118.9},7).to({regY:12.6,rotation:68.7,x:234.8,y:-142.5},4).to({regX:10.6,regY:12.9,rotation:7.2,x:251.5,y:-133.2},6).wait(2).to({regX:10.5,regY:13,rotation:7.2,x:254.4,y:-137.7},0).to({regX:10.6,regY:12.4,scaleX:0.66,scaleY:0.83,rotation:0,skewX:68.8,skewY:69.9,x:282.2,y:-165.4},5,cjs.Ease.get(0.99)).to({regX:10.5,x:286.4,y:-166.9,alpha:0},10).to({_off:true},1).wait(34));

	// Symbol 11
	this.instance_21 = new lib.Symbol11();
	this.instance_21.parent = this;
	this.instance_21.setTransform(357,-286.6,0.693,0.693,7.2,0,0,8,12);
	this.instance_21.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).to({regX:8.1,regY:11.9,rotation:37.2,x:352.8,y:-278.4,alpha:1},9).to({regX:8,regY:12,rotation:7.2,x:352.5,y:-267},10).to({regX:8.1,regY:11.9,rotation:37.2,x:347.1,y:-257},9).to({rotation:7.2,x:342.1,y:-248.2},10).to({regX:8.2,regY:12,rotation:-22.8,x:341.2,y:-237.1},9).to({regX:8.1,regY:11.9,rotation:37.2,x:335.8,y:-224.1},9).to({regX:8,regY:12,rotation:7.2,x:333.5,y:-209},11).to({regX:8.1,scaleX:0.69,scaleY:0.7,rotation:0,skewX:18.6,skewY:17.1,x:332.2,y:-206.2},3).to({regX:8,regY:11.8,scaleX:0.69,scaleY:0.69,rotation:37.2,skewX:0,skewY:0,x:326.1,y:-181.6},6).to({regX:8.1,regY:11.9,rotation:7.2,x:313.6,y:-166.2},10).to({regY:12,rotation:17,x:308.9,y:-165.8},3).to({regX:8.2,regY:11.8,scaleX:0.68,scaleY:0.71,rotation:0,skewX:30.3,skewY:27.5,x:306.7,y:-165.7},3).to({regX:8.1,scaleX:0.69,scaleY:0.69,rotation:37.2,skewX:0,skewY:0,x:299.7,y:-165.1},3).to({regX:8.2,regY:12,rotation:-22.8,x:297.7,y:-156.9},6).to({regX:8.1,regY:11.8,rotation:7.2,x:285.4,y:-145.5},6).to({regX:8.2,regY:11.9,rotation:7.2,x:286.1,y:-145.8},2).to({regX:8,rotation:-22.8,x:266.5,y:-132.6},5).to({regX:8.1,rotation:7.2,x:240.4,y:-104.8},3).to({regY:11.8,rotation:22.2,x:241.4,y:-112.3},7).to({regX:8,regY:11.9,rotation:16.7,x:250.3,y:-124.5},4).to({regY:12,rotation:7.2,x:268.3,y:-126.4},6).wait(2).to({regX:8.1,regY:11.9,rotation:7.2,x:271.5,y:-131.1},0).to({regX:7.9,regY:11.8,scaleX:0.68,scaleY:1.11,rotation:0,skewX:111.6,skewY:117.1,x:277.9,y:-155.8},5,cjs.Ease.get(0.99)).to({x:282.1,y:-157.3,alpha:0},10).to({_off:true},1).wait(34));

	// Symbol 10
	this.instance_22 = new lib.Symbol10();
	this.instance_22.parent = this;
	this.instance_22.setTransform(356.1,-315.1,0.693,0.693,7.2,0,0,23.1,23.4);
	this.instance_22.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).to({regX:23.2,rotation:3.8,x:353.6,y:-306.1,alpha:1},9).to({regX:23.1,rotation:7.2,x:351.6,y:-295.5},10).to({regX:23.2,rotation:3.8,x:347.8,y:-284.6},9).to({regX:22.9,rotation:7.2,x:341,y:-276.7},10).to({regX:23.1,x:340.4,y:-262.7},9).to({regX:23.2,rotation:3.8,x:336.6,y:-251.8},9).to({regX:23.1,rotation:7.2,x:332.7,y:-237.4},11).to({rotation:0,skewX:22.8,skewY:21.2,x:339.7,y:-237},3).to({regX:23.2,rotation:3.8,skewX:0,skewY:0,x:326.9,y:-209.2},6).to({regX:23.1,rotation:7.2,x:312.7,y:-194.7},10).to({rotation:6.2,x:308.6,y:-194.1},3).to({regY:23.2,scaleX:0.68,scaleY:0.7,rotation:0,skewX:23.5,skewY:20.2,x:311.5,y:-192.7},3).to({regY:23.4,scaleX:0.69,scaleY:0.69,rotation:3.8,skewX:0,skewY:0,x:300.4,y:-192.8},3).to({rotation:7.2,x:295.7,y:-182.5},6).to({x:284.5,y:-173.9},6).to({x:283.8,y:-171.9},2).to({rotation:-22.8,x:251.5,y:-156.8},5).to({rotation:12.4,x:241.5,y:-131.8},3).to({rotation:7.2,x:242.9,y:-140.3},7).to({regY:23.3,rotation:28.4,x:257.8,y:-152.8},4).to({regY:23.4,rotation:7.2,x:267.5,y:-154.9},6).wait(2).to({rotation:7.2,x:270.6,y:-159.5},0).to({regX:22.9,regY:23.1,scaleX:0.59,scaleY:0.66,rotation:0,skewX:68.8,skewY:69.9,x:304.6,y:-157.4},5,cjs.Ease.get(0.99)).to({x:308.8,y:-158.9,alpha:0},10).to({_off:true},1).wait(34));

	// Symbol 8
	this.instance_23 = new lib.Symbol8();
	this.instance_23.parent = this;
	this.instance_23.setTransform(369.9,-311.5,0.693,0.693,67.2,0,0,10,10.8);
	this.instance_23.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).to({rotation:56.3,x:367.7,y:-305.2,alpha:1},9).to({rotation:67.2,x:365.4,y:-291.9},10).to({regY:10.9,rotation:56.3,x:361.9,y:-283.7},9).to({rotation:67.2,x:354.9,y:-273},10).to({regX:10.1,regY:11,x:354,y:-258.9},9).to({regX:10,regY:10.8,rotation:56.3,x:350.7,y:-250.9},9).to({rotation:67.2,x:346.4,y:-233.8},11).to({scaleX:0.68,scaleY:0.7,rotation:0,skewX:64.1,skewY:64.8,y:-231.6},3).to({scaleX:0.69,scaleY:0.69,rotation:56.3,skewX:0,skewY:0,x:341,y:-208.4},6).to({regY:10.9,rotation:67.2,x:326.5,y:-191},10).to({regX:9.9,regY:10.8,scaleX:0.69,scaleY:0.69,rotation:63.6,x:322.5,y:-191.3},3).to({regX:10.1,regY:10.6,scaleX:0.67,scaleY:0.71,rotation:0,skewX:61.2,skewY:62.4,x:322.7,y:-191.5},3).to({regX:10,regY:10.8,scaleX:0.69,scaleY:0.69,rotation:56.3,skewX:0,skewY:0,x:314.5,y:-191.9},3).to({rotation:67.2,x:309.5,y:-178.9},6).to({regY:10.9,x:298.3,y:-170.2},6).to({regY:10.8,scaleX:0.69,scaleY:0.69,rotation:50.1,x:299.9,y:-171.2},2).to({regX:10.2,regY:11,scaleX:0.69,scaleY:0.69,rotation:-22.8,x:267.3,y:-164.1},5).to({regX:10,regY:10.8,rotation:87.4,x:255.6,y:-124.2},3).to({regX:10.1,rotation:7.2,x:260.2,y:-138.8},7).to({rotation:16.7,x:270.6,y:-148.2},4).to({regX:10,rotation:67.2,x:282,y:-151.1},6).wait(2).to({regX:10.1,regY:11,rotation:7.2,x:287.9,y:-157.9},0).to({regX:10.3,regY:10.3,scaleX:0.58,scaleY:0.62,rotation:0,skewX:41.5,skewY:37,x:310.8,y:-146.8},5,cjs.Ease.get(0.99)).to({regX:10.4,regY:10.4,x:315,y:-148.2,alpha:0},10).to({_off:true},1).wait(34));

	// Symbol 9
	this.instance_24 = new lib.Symbol9();
	this.instance_24.parent = this;
	this.instance_24.setTransform(338.9,-319.7,0.693,0.693,-14.3,0,0,25.1,19.8);
	this.instance_24.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_24).to({regX:25.4,regY:19.9,scaleX:0.7,rotation:0,skewX:-37.2,skewY:-30.5,x:335.9,y:-305.6,alpha:1},9).to({regX:25.1,scaleX:0.69,rotation:-14.3,skewX:0,skewY:0,x:334.4,y:-300.1},10).to({regX:25.3,scaleX:0.7,rotation:0,skewX:-37.2,skewY:-30.5,x:330.2,y:-284.1},9).to({regX:25.1,scaleX:0.69,rotation:-14.3,skewX:0,skewY:0,x:323.9,y:-281.3},10).to({regX:25.2,rotation:0.7,x:323.3,y:-268},9).to({regX:25.4,scaleX:0.7,rotation:0,skewX:-37.2,skewY:-30.5,x:319,y:-251.3},9).to({regX:25.1,regY:19.8,scaleX:0.69,rotation:-14.3,skewX:0,skewY:0,x:315.4,y:-242.1},11).to({regX:25.2,regY:19.7,scaleX:0.7,scaleY:0.69,rotation:0,skewX:9.7,skewY:10.5,x:322.5,y:-247.4},3).to({regX:25.3,regY:19.9,scaleY:0.69,skewX:-37.2,skewY:-30.5,x:309.2,y:-208.7},6).to({regX:25.1,regY:19.8,scaleX:0.69,rotation:-14.3,skewX:0,skewY:0,x:295.5,y:-199.3},10).to({regX:25.2,scaleX:0.69,scaleY:0.69,rotation:0,skewX:-21.8,skewY:-19.6,x:291.3,y:-197},3).to({regX:25.3,scaleX:0.71,scaleY:0.68,skewX:-11.1,skewY:-9.8,x:295.1,y:-198.3},3).to({regX:25.4,regY:19.9,scaleX:0.7,scaleY:0.69,skewX:-37.2,skewY:-30.5,x:282.8,y:-192.2},3).to({regX:25.1,scaleX:0.69,rotation:-14.3,skewX:0,skewY:0,x:278.5,y:-187.1},6).to({regX:25.2,rotation:-29.3,x:266.8,y:-174},6).to({regX:25.1,regY:19.7,scaleX:0.69,scaleY:0.69,rotation:11.2,x:266.2,y:-178.7},2).to({regX:25.2,regY:19.9,scaleX:0.69,scaleY:0.69,rotation:-22.8,x:232.9,y:-158.4},5).to({regX:25.1,regY:19.8,rotation:27.4,x:232.1,y:-146.8},3).to({regY:19.9,rotation:-13.5,x:226.5,y:-143.7},7).to({regY:19.8,rotation:46.7,x:251.2,y:-169.4},4).to({regY:19.9,rotation:-22.8,x:252.1,y:-158.1},6).wait(2).to({regX:25.2,rotation:7.2,x:255.2,y:-170.2},0).to({regX:24.9,regY:19.4,scaleX:0.5,scaleY:0.64,rotation:0,skewX:51.5,skewY:60,x:311.4,y:-165.6},5,cjs.Ease.get(0.99)).to({regY:19.5,x:315.6,y:-167,alpha:0},10).to({_off:true},1).wait(34));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(243.5,-345.6,151.3,212.2);


(lib.Symbol24copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 14
	this.instance = new lib.Symbol27copy2();
	this.instance.parent = this;
	this.instance.setTransform(232.7,-134.4,1,1,-30,0,0,8.3,3.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({regX:8.4,regY:3.9,rotation:-45,x:225.1,y:-139.9,alpha:0},4).to({_off:true},1).wait(4).to({_off:false,regX:8.3,regY:3.8,rotation:-30,x:232.7,y:-134.4,alpha:1},0).to({regX:8.4,regY:3.9,rotation:-45,x:237.6,y:-139.9,alpha:0},4).to({_off:true},1).wait(16).to({_off:false,regX:8.3,regY:3.8,rotation:-30,x:235.5,y:-133.6,alpha:1},0).to({regX:8.4,regY:3.9,rotation:-45,x:236.6,y:-138.2,alpha:0},4).to({_off:true},1).wait(31).to({_off:false,regX:8.3,regY:3.8,rotation:-30,x:237.7,y:-139.4,alpha:1},0).to({regX:8.4,regY:3.9,rotation:-45,x:230.1,y:-144.9,alpha:0},4).to({_off:true},1).wait(6).to({_off:false,regX:8.3,regY:3.8,rotation:-30,x:250.2,y:-150.1,alpha:1},0).to({regX:8.4,regY:3.9,rotation:-45,x:260.1,y:-154.9,alpha:0},4).to({_off:true},1).wait(37).to({_off:false,regY:3.8,x:291.8,y:-191.7,alpha:1},0).to({regY:3.9,x:292.1,y:-196.4,alpha:0},4).to({_off:true},1).wait(61));

	// Symbol 17
	this.instance_1 = new lib.Symbol17copy2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(202,-117.9,0.698,0.698,7.2,0,0,14.6,13.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:14.7,regY:14,rotation:-11.7,x:198.2,y:-117.5},4).to({regX:14.6,regY:13.9,rotation:7.2,x:202,y:-117.9},8).to({regX:14.7,regY:14,rotation:-11.7,x:198.2,y:-117.5},4).to({regX:14.6,regY:13.9,rotation:7.2,x:202,y:-117.9},8).wait(1).to({rotation:7.2},0).wait(7).to({regX:14.7,regY:14,rotation:-11.7,x:198.2,y:-117.5},4).to({regX:14.6,regY:13.9,rotation:7.2,x:202,y:-117.9},8).to({regY:13.8,rotation:-7.8,x:205.4,y:-123.2},7).to({regY:13.9,rotation:7.2,x:213.2,y:-126.6},8).to({regX:14.7,regY:13.8,rotation:-12,x:196.5,y:-122.9},2).to({regX:14.6,regY:14,rotation:7.2,x:205.4,y:-125},6).to({regX:14.7,rotation:-11.7,x:205,y:-129},4).to({regX:14.6,rotation:7.2,x:224,y:-136.5},6).to({regX:14.7,rotation:-11.7,x:218.6,y:-134.6},5).to({regY:13.9,rotation:-7,x:220,y:-135.1},2).to({rotation:-4.5,x:220.6,y:-135.5},1).to({regX:14.6,regY:14,rotation:7.2,x:224,y:-136.5},5).to({regY:13.8,rotation:-7.8,x:229.4,y:-144.2},5).to({regY:13.9,rotation:7.2,x:242,y:-157.9},8).to({regY:13.8,rotation:-7.8,x:245.4,y:-163.2},7).to({regY:14,rotation:7.2,x:265.4,y:-175},8).to({regX:14.7,rotation:-11.7,x:261,y:-173},5).to({regX:14.6,rotation:7.2,x:264.3,y:-175.2},5).to({rotation:7.2},1).to({x:260.3,y:-171.7},6).to({regX:14.7,scaleX:0.71,scaleY:0.69,rotation:0,skewX:31.8,skewY:37.1,x:255.5,y:-173.7},4).to({regX:14.6,scaleX:0.7,scaleY:0.7,rotation:7.2,skewX:0,skewY:0,x:264.3,y:-175.2},5).to({regX:14.7,scaleX:0.71,scaleY:0.69,rotation:0,skewX:31.8,skewY:37.1,x:255.5,y:-173.7},4).to({regY:13.9,scaleX:0.7,scaleY:0.7,rotation:-47,skewX:0,skewY:0,x:290.1,y:-157.9},5).to({alpha:0},4).wait(1).to({regX:14.6,rotation:7.2,x:168.5,y:-91.9},0).to({regX:14.7,rotation:-7.8,x:179.9,y:-97.2,alpha:1},7).to({regX:14.6,regY:14,rotation:7.2,x:199.6,y:-110.6},7).to({regX:14.7,regY:13.8,rotation:-7.8,x:211.1,y:-125.9},7).to({rotation:5,x:203.3,y:-119.1},6).wait(1));

	// Symbol 20
	this.instance_2 = new lib.Symbol20copy2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(204.5,-104.3,0.698,0.698,7.2,0,0,6,11.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:22.2,x:202.5,y:-105.3},4).to({rotation:7.2,x:204.5,y:-104.3},8).to({rotation:22.2,x:202.5,y:-105.3},4).to({rotation:7.2,x:204.5,y:-104.3},8).wait(1).to({rotation:7.2},0).wait(7).to({rotation:22.2,x:202.5,y:-105.3},4).to({rotation:7.2,x:204.5,y:-104.3},8).to({regX:6.1,scaleY:0.71,rotation:0,skewX:0.9,skewY:11.7,x:208.2,y:-109},7).to({regX:6,regY:12,scaleY:0.7,rotation:7.2,skewX:0,skewY:0,x:215.6,y:-112.9},8).to({regY:11.8,scaleY:0.7,rotation:0,skewX:5.5,skewY:8.5,x:206.2,y:-110.7},2).to({regY:12,scaleY:0.7,rotation:7.2,skewX:0,skewY:0,x:207.9,y:-111.3},6).to({regY:11.8,rotation:22.2,x:209.2,y:-116.8},4).to({regY:12,rotation:7.2,x:226.5,y:-122.9},6).to({regY:11.8,rotation:22.2,x:222.9,y:-122.4},5).to({rotation:18.3,x:223.7,y:-122.6},2).to({scaleX:0.7,scaleY:0.7,rotation:16.3,x:224.2,y:-122.5},1).to({regY:12,scaleX:0.7,scaleY:0.7,rotation:7.2,x:226.5,y:-122.9},5).to({regX:6.1,regY:11.8,scaleY:0.71,rotation:0,skewX:0.9,skewY:11.7,x:232.2,y:-130},5).to({regX:6,scaleY:0.7,rotation:7.2,skewX:0,skewY:0,x:244.5,y:-144.3},8).to({regX:6.1,scaleY:0.71,rotation:0,skewX:0.9,skewY:11.7,x:248.2,y:-149},7).to({regX:6,regY:12,scaleY:0.7,rotation:7.2,skewX:0,skewY:0,x:267.9,y:-161.3},8).to({regY:11.8,rotation:22.2,x:265.2,y:-160.8},5).to({regY:12,rotation:7.2,x:266.8,y:-161.5},5).to({rotation:7.2},1).to({x:262.8,y:-158},6).to({scaleX:0.71,scaleY:0.69,rotation:0,skewX:1.8,skewY:7.1,x:261.2,y:-163.5},4).to({scaleX:0.7,scaleY:0.7,rotation:7.2,skewX:0,skewY:0,x:266.8,y:-161.5},5).to({scaleX:0.71,scaleY:0.69,rotation:0,skewX:1.8,skewY:7.1,x:261.2,y:-163.5},4).to({regX:5.9,regY:11.9,scaleX:0.7,scaleY:0.7,rotation:105.8,skewX:0,skewY:0,x:278.7,y:-150.4},5).to({alpha:0},4).wait(1).to({regX:6,regY:12,rotation:7.2,x:170.9,y:-78.2},0).to({regY:11.9,scaleY:0.71,rotation:0,skewX:0.9,skewY:11.7,x:182.7,y:-83,alpha:1},7).to({regY:11.8,scaleY:0.7,rotation:7.2,skewX:0,skewY:0,x:202.1,y:-97},7).to({regX:6.1,scaleY:0.71,rotation:0,skewX:0.9,skewY:11.7,x:213.9,y:-111.7},7).to({regX:6.2,scaleY:0.7,skewX:6.3,skewY:7.8,x:206,y:-105.4},6).wait(1));

	// Symbol 19
	this.instance_3 = new lib.Symbol19copy2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(198,-100.8,0.698,0.698,7.2,0,0,5.5,6.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:196.1,y:-101.1},4).to({x:198,y:-100.8},8).to({x:196.1,y:-101.1},4).to({x:198,y:-100.8},8).wait(8).to({x:196.1,y:-101.1},4).to({x:198,y:-100.8},8).to({scaleY:0.71,rotation:0,skewX:0.9,skewY:11.7,x:202.4,y:-105.8},7).to({regX:5.6,regY:6.5,scaleY:0.7,rotation:7.2,skewX:0,skewY:0,x:209.3,y:-109.5},8).to({regX:5.5,regY:6.4,scaleY:0.7,rotation:0,skewX:5.5,skewY:8.5,x:200.1,y:-106.8},2).to({regY:6.5,scaleY:0.7,rotation:7.2,skewX:0,skewY:0,x:201.5,y:-107.9},6).to({x:202.8,y:-112.5},4).to({regY:6.4,x:220.1,y:-119.5},6).to({regX:5.6,regY:6.5,x:216.6,y:-118.1},5).to({regX:5.5,rotation:7.1,x:217.4,y:-118.6},2).to({regY:6.4,rotation:7,x:217.9,y:-118.8},1).to({rotation:7.2,x:220.1,y:-119.5},5).to({scaleY:0.71,rotation:0,skewX:0.9,skewY:11.7,x:226.4,y:-126.8},5).to({scaleY:0.7,rotation:7.2,skewX:0,skewY:0,x:238,y:-140.8},8).to({scaleY:0.71,rotation:0,skewX:0.9,skewY:11.7,x:242.4,y:-145.8},7).to({regY:6.5,scaleY:0.7,rotation:7.2,skewX:0,skewY:0,x:261.5,y:-157.9},8).to({x:258.8,y:-156.5},5).to({x:260.4,y:-158.1},5).wait(1).to({x:256.4,y:-154.6},6).to({scaleX:0.71,scaleY:0.69,rotation:0,skewX:1.8,skewY:7.1,x:258,y:-158.1},4).to({scaleX:0.7,scaleY:0.7,rotation:7.2,skewX:0,skewY:0,x:260.4},5).to({scaleX:0.71,scaleY:0.69,rotation:0,skewX:1.8,skewY:7.1,x:258},4).to({regY:6.4,scaleX:0.7,scaleY:0.7,rotation:7.2,skewX:0,skewY:0,x:275.1,y:-149},5).to({alpha:0},4).wait(1).to({regY:6.5,x:164.5,y:-74.8},0).to({regX:5.6,regY:6.4,scaleY:0.71,rotation:0,skewX:0.9,skewY:11.7,x:176.9,y:-79.9,alpha:1},7).to({regY:6.5,scaleY:0.7,rotation:7.2,skewX:0,skewY:0,x:195.8,y:-93.5},7).to({regX:5.5,regY:6.3,scaleY:0.71,rotation:0,skewX:0.9,skewY:11.7,x:208,y:-108.6},7).to({scaleY:0.7,skewX:6.3,skewY:7.8,x:199.5,y:-102},6).wait(1));

	// Symbol 21
	this.instance_4 = new lib.Symbol21copy2();
	this.instance_4.parent = this;
	this.instance_4.setTransform(218.6,-120.8,0.698,0.698,7.2,0,0,16.1,17.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regX:16.2,rotation:-16.5,x:213,y:-121.5},4).to({regX:16.1,rotation:7.2,x:218.6,y:-120.8},8).to({regX:16.2,rotation:-16.5,x:213,y:-121.5},4).to({regX:16.1,rotation:7.2,x:218.6,y:-120.8},8).wait(1).to({rotation:7.2},0).wait(7).to({regX:16.2,rotation:-16.5,x:213,y:-121.5},4).to({regX:16.1,rotation:7.2,x:218.6,y:-120.8},8).to({scaleY:0.71,rotation:0,skewX:0.9,skewY:11.7,x:220.2,y:-125},7).to({scaleY:0.7,rotation:7.2,skewX:0,skewY:0,x:229.8,y:-129.5},8).to({regX:16.2,scaleY:0.7,rotation:0,skewX:-9.5,skewY:-6.5,x:214.8,y:-127.6},2).to({regX:16.1,scaleY:0.7,rotation:7.2,skewX:0,skewY:0,x:222,y:-128},6).to({regX:16.2,rotation:-16.5,x:219.7,y:-133},4).to({regX:16.1,rotation:7.2,x:240.6,y:-139.5},6).to({regX:16.2,rotation:-16.5,x:233.4,y:-138.6},5).to({regY:17.3,rotation:-10.5,x:235.2,y:-138.9},2).to({regY:17.2,rotation:-7.5,x:236.1,y:-139.1},1).to({regX:16.1,regY:17.4,rotation:7.2,x:240.6,y:-139.5},5).to({scaleY:0.71,rotation:0,skewX:0.9,skewY:11.7,x:244.2,y:-146},5).to({scaleY:0.7,rotation:7.2,skewX:0,skewY:0,x:258.6,y:-160.8},8).to({scaleY:0.71,rotation:0,skewX:0.9,skewY:11.7,x:260.2,y:-165},7).to({scaleY:0.7,rotation:7.2,skewX:0,skewY:0,x:282,y:-178},8).to({regX:16.2,rotation:-16.5,x:275.7,y:-177},5).to({regX:16.1,rotation:7.2,x:280.9,y:-178.2},5).to({rotation:7.2},1).to({regX:16,rotation:37.2,x:280.6,y:-166.9},6).to({regX:16.1,regY:17.5,scaleX:0.71,scaleY:0.69,rotation:0,skewX:-43.2,skewY:-37.9,x:265.7,y:-183.3},4).to({regY:17.4,scaleX:0.7,scaleY:0.7,rotation:7.2,skewX:0,skewY:0,x:280.9,y:-178.2},5).to({regY:17.5,scaleX:0.71,scaleY:0.69,rotation:0,skewX:-43.2,skewY:-37.9,x:265.7,y:-183.3},4).to({regY:17.3,scaleX:0.7,scaleY:0.7,rotation:67.2,skewX:0,skewY:0,x:292.7,y:-141.5},5).to({alpha:0},4).wait(1).to({regX:16,regY:17.4,rotation:7.2,x:185,y:-94.8},0).to({regX:16.1,scaleY:0.71,rotation:0,skewX:0.9,skewY:11.7,x:194.6,y:-99,alpha:1},7).to({scaleY:0.7,rotation:7.2,skewX:0,skewY:0,x:216.2,y:-113.5},7).to({scaleY:0.71,rotation:0,skewX:0.9,skewY:11.7,x:225.8,y:-127.7},7).to({scaleY:0.7,skewX:6.3,skewY:7.8,x:219.7,y:-121.9},6).wait(1));

	// Symbol 22
	this.instance_5 = new lib.Symbol22copy2();
	this.instance_5.parent = this;
	this.instance_5.setTransform(194.9,-103.1,0.698,0.698,7.2,0,0,16.6,24.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({rotation:3.3,x:193.6,y:-102.1},4).to({rotation:7.2,x:194.9,y:-103.1},8).to({rotation:3.3,x:193.6,y:-102.1},4).to({rotation:7.2,x:194.9,y:-103.1},8).wait(8).to({rotation:3.3,x:193.6,y:-102.1},4).to({rotation:7.2,x:194.9,y:-103.1},8).to({scaleY:0.7,rotation:0,skewX:4.4,skewY:7.2,x:199.6,y:-107.5},7).to({regX:16.5,scaleY:0.7,rotation:7.2,skewX:0,skewY:0,x:206,y:-111.7},8).to({regX:16.8,scaleY:0.7,rotation:0,skewX:-4.8,skewY:-4,x:196.1,y:-106.8},2).to({regX:16.6,scaleY:0.7,rotation:7.2,skewX:0,skewY:0,x:198.3,y:-110.2},6).to({rotation:3.3,x:200.3,y:-113.6},4).to({rotation:7.2,x:216.9,y:-121.7},6).to({rotation:3.3,x:214,y:-119.2},5).to({regX:16.7,rotation:4.1,x:214.8,y:-119.8},2).to({rotation:4.5,x:215.2,y:-120.1},1).to({regX:16.6,rotation:7.2,x:216.9,y:-121.7},5).to({scaleY:0.7,rotation:0,skewX:4.4,skewY:7.2,x:223.6,y:-128.5},5).to({scaleY:0.7,rotation:7.2,skewX:0,skewY:0,x:234.9,y:-143.1},8).to({scaleY:0.7,rotation:0,skewX:4.4,skewY:7.2,x:239.6,y:-147.5},7).to({scaleY:0.7,rotation:7.2,skewX:0,skewY:0,x:258.3,y:-160.2},8).to({rotation:3.3,x:256.3,y:-157.6},5).to({rotation:7.2,x:257.2,y:-160.4},5).wait(1).to({x:253.2,y:-156.9},6).to({regX:16.7,scaleX:0.71,scaleY:0.69,rotation:0,skewX:-13.1,skewY:-7.9,x:254.7,y:-160.4},4).to({regX:16.6,scaleX:0.7,scaleY:0.7,rotation:7.2,skewX:0,skewY:0,x:257.2},5).to({regX:16.7,scaleX:0.71,scaleY:0.69,rotation:0,skewX:-13.1,skewY:-7.9,x:254.7},4).to({regX:16.4,scaleX:0.7,scaleY:0.7,rotation:82.2,skewX:0,skewY:0,x:275.6,y:-156.1},5).to({alpha:0},4).wait(1).to({regX:16.6,rotation:7.2,x:161.3,y:-77.1},0).to({scaleY:0.7,rotation:0,skewX:4.4,skewY:7.2,x:174.1,y:-81.5,alpha:1},7).to({scaleY:0.7,rotation:7.2,skewX:0,skewY:0,x:192.5,y:-95.7},7).to({regY:25,scaleY:0.7,rotation:0,skewX:4.4,skewY:7.2,x:205.2,y:-110.1},7).to({scaleY:0.7,skewX:6.8,skewY:7.1,x:196.4,y:-104.1},6).wait(1));

	// Symbol 18
	this.instance_6 = new lib.Symbol18copy2();
	this.instance_6.parent = this;
	this.instance_6.setTransform(196,-84.2,0.698,0.698,7.2,0,0,10,10.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(44).to({regX:10.1,regY:10.4,rotation:-30.5,x:205.4,y:-94},7).to({regX:10.2,regY:10.5,rotation:7.2,x:207.3,y:-92.9},8).to({regX:10.1,regY:10.4,rotation:-3.5,x:201.8,y:-91.7},2).to({rotation:7.2,x:199.5,y:-91.4},6).to({regX:10,regY:10.3,rotation:37.2,x:200.2,y:-98.9},4).to({regX:10.1,regY:10.4,rotation:7.2,x:218.1,y:-102.9},6).to({regX:10.2,rotation:-22.8,x:217.9,y:-102.5},5).to({regY:10.3,rotation:-15.3,x:218,y:-102.7},2).to({regY:10.2,scaleX:0.7,scaleY:0.7,rotation:-11.5,y:-102.9},1).to({regX:10.1,regY:10.4,scaleX:0.7,scaleY:0.7,rotation:7.2,x:218.1},5).to({rotation:-30.5,x:229.4,y:-115},5).to({regX:10,regY:10.5,rotation:7.2,x:236,y:-124.2},8).to({regX:10.1,regY:10.4,rotation:-30.5,x:245.4,y:-134},7).to({rotation:7.2,x:259.5,y:-141.4},8).to({regX:10,regY:10.3,rotation:37.2,x:256.2,y:-142.9},5).to({regX:10.1,regY:10.4,rotation:7.2,x:258.4,y:-141.6},5).to({rotation:7.2},1).to({regY:10.3,rotation:-22.8,x:259.6,y:-140.3},6).to({regY:10.4,scaleX:0.71,scaleY:0.69,rotation:0,skewX:1.8,skewY:7.1,x:257.6,y:-141.6},4).to({scaleX:0.7,scaleY:0.7,rotation:7.2,skewX:0,skewY:0,x:258.4},5).to({scaleX:0.71,scaleY:0.69,rotation:0,skewX:1.8,skewY:7.1,x:257.6},4).to({regX:10,scaleX:0.7,scaleY:0.7,rotation:73.3,skewX:0,skewY:0,x:258.6,y:-150.8},5).to({alpha:0},4).wait(1).to({regX:10.1,rotation:7.2,x:162.5,y:-58.3},0).to({regY:10.3,rotation:-30.5,x:179.8,y:-68.1,alpha:1},7).to({regY:10.4,rotation:7.2,x:193.7,y:-76.9},7).to({regY:10.3,rotation:-30.5,x:210.9,y:-96.7},7).to({regX:10.2,rotation:1.8,x:198.3,y:-86},6).wait(1));

	// Symbol 16
	this.instance_7 = new lib.Symbol16copy2();
	this.instance_7.parent = this;
	this.instance_7.setTransform(196.7,-103.2,0.698,0.698,7.2,0,0,8.2,11.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(44).to({regX:8.1,regY:11.5,x:202.2,y:-107.5},7).to({regY:11.4,x:207.8,y:-111.8},8).to({regX:8.2,regY:11.3,x:201.5,y:-109.1},2).to({regX:8.1,regY:11.4,x:200.1,y:-110.3},6).to({regX:8.2,x:203.5,y:-114.7},4).to({x:218.7,y:-121.8},6).to({regY:11.5,x:217.1,y:-120.2},5).to({regY:11.4,rotation:7.1,x:217.5,y:-120.7},2).to({regY:11.3,rotation:7,x:217.8,y:-120.9},1).to({regY:11.4,rotation:7.2,x:218.7,y:-121.8},5).to({regX:8.1,regY:11.5,x:226.2,y:-128.5},5).to({regX:8.2,regY:11.4,x:236.7,y:-143.2},8).to({regX:8.1,regY:11.5,x:242.2,y:-147.5},7).to({regY:11.4,x:260.1,y:-160.3},8).to({regX:8.2,x:259.5,y:-158.7},5).to({x:259.1,y:-160.5},5).wait(1).to({x:255.1,y:-157},6).to({regY:11.3,scaleX:0.71,scaleY:0.69,rotation:0,skewX:1.8,skewY:7.1,x:256.5,y:-160.6},4).to({regY:11.4,scaleX:0.7,scaleY:0.7,rotation:7.2,skewX:0,skewY:0,x:259.1,y:-160.5},5).to({regY:11.3,scaleX:0.71,scaleY:0.69,rotation:0,skewX:1.8,skewY:7.1,x:256.5,y:-160.6},4).to({regX:7.9,regY:11.4,scaleX:0.7,scaleY:0.7,rotation:133,skewX:0,skewY:0,x:261.4,y:-165.6},5).to({alpha:0},4).wait(1).to({regX:8.2,rotation:7.2,x:163.2,y:-77.2},0).to({rotation:7.2,x:176.8,y:-81.5,alpha:1},7).to({regX:8.1,regY:11.5,x:194.3,y:-95.8},7).to({regY:11.4,x:207.9,y:-110.2},7).to({regY:11.3,rotation:7.1,x:198.3,y:-104.2},6).wait(1));

	// Symbol 18
	this.instance_8 = new lib.Symbol18copy2();
	this.instance_8.parent = this;
	this.instance_8.setTransform(194,-93.3,0.698,0.698,-17.3,0,0,10.1,10.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(44).to({rotation:12.7,x:196,y:-93.8},7).to({regX:10.2,rotation:-17.3,x:205.2,y:-102},8).to({regX:10.1,regY:10.3,rotation:-8.6,x:197.7,y:-98.2},2).to({regX:10.2,regY:10.5,rotation:-17.3,x:197.5,y:-100.4},6).to({regX:10.1,x:200.8,y:-104.8},4).to({regX:10.2,x:216.1,y:-111.9},6).to({regX:10.1,x:214.4,y:-110.4},5).to({regX:10.2,x:214.9,y:-110.8},2).to({scaleX:0.7,scaleY:0.7,x:215.1,y:-111},1).to({scaleX:0.7,scaleY:0.7,x:216.1,y:-111.9},5).to({regX:10.1,rotation:12.7,x:220,y:-114.8},5).to({rotation:-17.3,x:234,y:-133.3},8).to({rotation:12.7,x:236,y:-133.8},7).to({regX:10.2,rotation:-17.3,x:257.5,y:-150.4},8).to({regX:10.1,x:256.8,y:-148.8},5).to({regX:10.2,x:256.4,y:-150.6},5).wait(1).to({x:252.4,y:-147.1},6).to({regY:10.6,scaleX:0.68,scaleY:0.72,rotation:0,skewX:-22.1,skewY:-17.8,x:254.8,y:-150.6},4).to({regY:10.5,scaleX:0.7,scaleY:0.7,rotation:-17.3,skewX:0,skewY:0,x:256.4},5).to({regY:10.6,scaleX:0.68,scaleY:0.72,rotation:0,skewX:-22.1,skewY:-17.8,x:254.8},4).to({regX:10.1,regY:10.3,scaleX:0.7,scaleY:0.7,rotation:87.7,skewX:0,skewY:0,x:253.5,y:-169.2},5).to({alpha:0},4).wait(1).to({regX:10.2,regY:10.5,rotation:-17.3,x:160.5,y:-67.3},0).to({regX:10.1,rotation:12.7,x:170.4,y:-67.8,alpha:1},7).to({rotation:-17.3,x:191.7,y:-86},7).to({regY:10.4,rotation:12.7,x:201.6,y:-96.6},7).to({regX:10.2,regY:10.3,rotation:-13,x:195.2,y:-93.9},6).wait(1));

	// Layer 3
	this.instance_9 = new lib.Symbol25copy2();
	this.instance_9.parent = this;
	this.instance_9.setTransform(302.9,-177.8,0.52,0.52,7.2,0,0,22.4,25.6);
	this.instance_9._off = true;
	this.instance_9.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 255, 0, 0)];
	this.instance_9.cache(-5,7,47,42);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({_off:false},0).to({regX:22.3,scaleX:1.41,scaleY:1.41,x:296.8,y:-175.6,alpha:0},3).to({_off:true},1).wait(116).to({_off:false,regX:22.4,scaleX:0.52,scaleY:0.52,x:331.9,y:-226.8,alpha:1},0).to({regX:22.3,scaleX:1.41,scaleY:1.41,x:333.8,y:-223.6,alpha:0},3).to({_off:true},1).wait(61));

	// Symbol 7
	this.instance_10 = new lib.Symbol7copy2();
	this.instance_10.parent = this;
	this.instance_10.setTransform(321.2,-178.6,0.693,0.693,4.3,0,0,11.2,38.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({rotation:6.5,x:320.4,y:-177.7},1).to({regX:10.8,rotation:112.2,x:329.6,y:-137.2},5).to({alpha:0},6).wait(41).to({regX:11,rotation:22.2,x:377.5,y:-317.7},0).to({regX:11.2,regY:39,rotation:-3.7,x:371.8,y:-313.3,alpha:1},9).to({regX:11,regY:38.9,rotation:22.2,x:373,y:-298.1},10).to({regX:11.2,rotation:-3.7,x:366.1,y:-292},9).to({rotation:4,x:365.1,y:-288.2},3).to({rotation:6.5,x:364.7,y:-287},1).to({regX:11,rotation:22.2,x:362.6,y:-279.3},6).to({rotation:7.2,x:360.4,y:-266.5},9).to({regX:11.2,rotation:-3.7,x:354.9,y:-259.1},10).to({regX:11,regY:39,rotation:22.2,x:354.1,y:-240},10).to({regY:38.8,scaleX:0.69,scaleY:0.7,rotation:0,skewX:89.9,skewY:88.7,x:363.2,y:-220.4},3).to({regX:11.2,regY:39,scaleX:0.69,scaleY:0.69,rotation:-3.7,skewX:0,skewY:0,x:345.2,y:-216.5},5).wait(1).to({rotation:5.6,x:336.2,y:-203.5},3).to({regX:11.3,rotation:-129.4,x:282.3,y:-179.1},3).to({regX:11.2,rotation:5.6,x:336.2,y:-203.5},4).to({regX:11.3,rotation:-129.4,x:282.3,y:-179.1},5).to({regX:11.2,rotation:5.6,x:336.2,y:-203.5},4).to({regX:11,regY:38.9,rotation:22.2,x:343,y:-208.1},5).to({regX:11.2,rotation:-3.7,x:336.1,y:-202},9).to({regX:11,rotation:22.2,x:332.6,y:-189.3},10).to({x:333,y:-189.1},1).to({regX:11.2,rotation:-3.7,x:324.1,y:-182},9).to({rotation:2.3,x:321.8,y:-179.5},3).wait(1));

	// Symbol 13
	this.instance_11 = new lib.Symbol13copy2();
	this.instance_11.parent = this;
	this.instance_11.setTransform(297,-155.4,0.693,0.693,2.5,0,0,18.2,13);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({rotation:3,x:295.8,y:-154.9},1).to({regX:18.1,regY:12.8,rotation:82.2,x:303,y:-163},5).to({alpha:0},6).wait(41).to({regX:18,regY:12.9,rotation:7.2,x:350.1,y:-298.1},0).to({regX:18.2,regY:13,rotation:0.5,x:349.1,y:-288.6,alpha:1},9).to({regX:18.1,rotation:7.2,x:345.6,y:-278.4},10).to({regX:18.2,rotation:0.5,x:343.4,y:-267.1},9).to({regY:12.9,rotation:2.5,x:341,y:-265},3).to({rotation:3,x:340.3,y:-264.3},1).to({regX:18.1,rotation:7.2,x:335.2,y:-259.6},6).to({regY:13,x:334.4,y:-245.5},9).to({regX:18.2,rotation:0.5,x:332.2,y:-234.3},10).to({regX:18.1,regY:12.9,rotation:7.2,x:326.7,y:-220.4},10).to({regX:18,regY:12.8,scaleX:0.69,rotation:0,skewX:27.3,skewY:25.6,x:327.7,y:-221.9},3).to({regX:18.2,regY:13.1,scaleX:0.69,rotation:0.5,skewX:0,skewY:0,x:322.5,y:-191.6},5).wait(1).to({rotation:2.8,x:311.7,y:-180.5},3).to({regY:12.9,rotation:-52.8,x:303.1,y:-183.4},3).to({regY:13.1,rotation:2.8,x:311.7,y:-180.5},4).to({regY:12.9,rotation:-52.8,x:303.1,y:-183.4},5).to({regY:13.1,rotation:2.8,x:311.7,y:-180.5},4).to({regX:18.1,regY:13,rotation:7.2,x:315.6,y:-188.4},5).to({regX:18.2,rotation:0.5,x:313.4,y:-177.1},9).to({regX:18.1,regY:12.9,rotation:7.2,x:305.2,y:-169.6},10).to({regY:13,x:305.6,y:-169.4},1).to({regX:18.2,rotation:0.5,x:301.4,y:-157.1},9).to({rotation:2,x:298.1,y:-155.8},3).wait(1));

	// Symbol 12
	this.instance_12 = new lib.Symbol12copy2();
	this.instance_12.parent = this;
	this.instance_12.setTransform(288.9,-152.5,0.693,0.693,-7.3,0,0,10.8,12.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({regX:10.7,regY:12.9,rotation:-5.5,x:287.5,y:-151.8},1).to({regX:10.6,regY:13,rotation:82.2,x:300.7,y:-172.9},5).to({alpha:0},6).wait(41).to({regX:10.5,rotation:7.2,x:340,y:-293.3},0).to({regX:10.7,rotation:-14.3,x:342.1,y:-286.3,alpha:1},9).to({regX:10.5,rotation:7.2,x:335.5,y:-273.7},10).to({regX:10.7,regY:12.9,rotation:-14.3,x:336.3,y:-265},9).to({regY:12.8,rotation:-7.8,x:333,y:-262},3).to({regX:10.8,regY:12.7,rotation:-5.5,x:332,y:-261.1},1).to({regX:10.6,regY:13,rotation:7.2,x:325.1,y:-254.9},6).to({regX:10.7,regY:12.8,rotation:-7.8,x:324.9,y:-240.7},9).to({regY:13,rotation:-14.3,x:325.1,y:-232},10).to({regX:10.5,regY:12.9,rotation:7.2,x:316.6,y:-215.7},10).to({regX:10.6,scaleX:0.7,scaleY:0.69,rotation:0,skewX:31.8,skewY:30.2,x:315.7,y:-219.7},3).to({regX:10.7,regY:13,scaleX:0.69,scaleY:0.69,rotation:-14.3,skewX:0,skewY:0,x:315.4,y:-189.5},5).wait(1).to({rotation:-6.3,x:303.6,y:-177.4},3).to({regX:10.6,rotation:-7.8,x:296.7,y:-170},3).to({regX:10.7,rotation:-6.3,x:303.6,y:-177.4},4).to({regX:10.6,rotation:-7.8,x:296.7,y:-170},5).to({regX:10.7,rotation:-6.3,x:303.6,y:-177.4},4).to({regX:10.5,rotation:7.2,x:305.5,y:-183.7},5).to({regX:10.7,regY:12.9,rotation:-14.3,x:306.3,y:-175},9).to({regX:10.6,regY:13,rotation:7.2,x:295.1,y:-164.9},10).to({regX:10.5,rotation:7.2,x:295.5,y:-164.7},1).to({regX:10.7,regY:12.9,rotation:-14.3,x:294.3,y:-155},9).to({rotation:-9,x:290.2,y:-153},3).wait(1));

	// Symbol 11
	this.instance_13 = new lib.Symbol11copy2();
	this.instance_13.parent = this;
	this.instance_13.setTransform(301.7,-144.9,0.691,0.691,27.3,0,0,8.1,11.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({scaleX:0.69,scaleY:0.69,rotation:25.1,x:300.8,y:-144.3},1).to({regX:8,regY:12,scaleX:0.69,scaleY:0.69,rotation:127.2,x:293.7,y:-161.9},5).to({rotation:127.2,alpha:0},6).wait(41).to({rotation:7.2,x:357,y:-286.6},0).to({regX:8.1,regY:11.9,rotation:37.2,x:352.8,y:-278.4,alpha:1},9).to({regX:8,regY:12,rotation:7.2,x:352.5,y:-267},10).to({regX:8.1,regY:11.9,rotation:37.2,x:347.1,y:-257},9).to({regY:11.8,scaleX:0.69,scaleY:0.69,rotation:28.1,x:345.7,y:-254.4},3).to({scaleX:0.69,scaleY:0.69,rotation:25.1,x:345.2,y:-253.5},1).to({regY:11.9,scaleX:0.69,scaleY:0.69,rotation:7.2,x:342.1,y:-248.2},6).to({regX:8.2,regY:12,rotation:-22.8,x:341.2,y:-237.1},9).to({regX:8.1,regY:11.9,rotation:37.2,x:335.8,y:-224.1},10).to({regX:8,regY:12,rotation:7.2,x:333.5,y:-209},10).to({regX:8.1,scaleX:0.69,scaleY:0.7,rotation:0,skewX:18.6,skewY:17.1,x:332.2,y:-206.2},3).to({regX:8,regY:11.8,scaleX:0.69,scaleY:0.69,rotation:37.2,skewX:0,skewY:0,x:326.1,y:-181.6},5).wait(1).to({regX:8.1,scaleX:0.69,scaleY:0.69,rotation:-18.7,x:318.2,y:-175.1},3).to({regY:12,scaleX:0.69,scaleY:0.69,rotation:-52.8,x:312.3,y:-177.6},3).to({regY:11.8,scaleX:0.69,scaleY:0.69,rotation:-18.7,x:318.2,y:-175.1},4).to({regY:12,scaleX:0.69,scaleY:0.69,rotation:-52.8,x:312.3,y:-177.6},5).to({regY:11.8,scaleX:0.69,scaleY:0.69,rotation:-18.7,x:318.2,y:-175.1},4).to({regX:8,regY:12,scaleX:0.69,scaleY:0.69,rotation:7.2,x:322.5,y:-177},5).to({regX:8.1,regY:11.9,rotation:37.2,x:317.1,y:-167},9).to({rotation:7.2,x:312.1,y:-158.2},10).to({regX:8,regY:12,rotation:7.2,x:312.5,y:-158},1).to({regX:8.1,regY:11.9,rotation:37.2,x:305.1,y:-147},9).to({scaleX:0.69,scaleY:0.69,rotation:29.8,x:302.5,y:-145.4},3).wait(1));

	// Symbol 10
	this.instance_14 = new lib.Symbol10copy2();
	this.instance_14.parent = this;
	this.instance_14.setTransform(301.8,-172.8,0.693,0.693,4.8,0,0,23.2,23.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).to({rotation:5,x:300.7,y:-172.3},1).to({regX:22.9,rotation:82.2,x:320.9,y:-161.7},5).to({alpha:0},6).wait(41).to({regX:23.1,rotation:7.2,x:356.1,y:-315.1},0).to({regX:23.2,rotation:3.8,x:353.6,y:-306.1,alpha:1},9).to({regX:23.1,rotation:7.2,x:351.6,y:-295.5},10).to({regX:23.2,rotation:3.8,x:347.8,y:-284.6},9).to({rotation:4.8,x:345.8,y:-282.2},3).to({rotation:5,x:345.2,y:-281.5},1).to({regX:22.9,rotation:7.2,x:341,y:-276.7},6).to({regX:23.1,x:340.4,y:-262.7},9).to({regX:23.2,rotation:3.8,x:336.6,y:-251.8},10).to({regX:23.1,rotation:7.2,x:332.7,y:-237.4},10).to({rotation:0,skewX:22.8,skewY:21.2,x:339.7,y:-237},3).to({regX:23.2,rotation:3.8,skewX:0,skewY:0,x:326.9,y:-209.2},5).wait(1).to({regY:23.3,rotation:5,x:316.7,y:-198},3).to({regX:23.1,regY:23.4,rotation:-37.8,x:292.9,y:-199.5},3).to({regX:23.2,regY:23.3,rotation:5,x:316.7,y:-198},4).to({regX:23.1,regY:23.4,rotation:-37.8,x:292.9,y:-199.5},5).to({regX:23.2,regY:23.3,rotation:5,x:316.7,y:-198},4).to({regX:23.1,regY:23.4,rotation:7.2,x:321.6,y:-205.5},5).to({regX:23.2,rotation:3.8,x:317.8,y:-194.6},9).to({regX:22.9,rotation:7.2,x:311,y:-186.7},10).to({regX:23.1,x:311.6,y:-186.5},1).to({regX:23.2,rotation:3.8,x:305.8,y:-174.6},9).to({rotation:4.5,x:302.8,y:-173.3},3).wait(1));

	// Symbol 8
	this.instance_15 = new lib.Symbol8copy2();
	this.instance_15.parent = this;
	this.instance_15.setTransform(315.8,-171.1,0.691,0.691,59.9,0,0,9.8,10.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).to({regX:9.9,scaleX:0.69,scaleY:0.69,rotation:60.7,x:314.8,y:-170.3},1).to({regX:10,regY:10.9,scaleX:0.69,scaleY:0.69,rotation:142.2,x:320.9,y:-147.4},5).to({alpha:0},6).wait(41).to({regY:10.8,rotation:67.2,x:369.9,y:-311.5},0).to({rotation:56.3,x:367.7,y:-305.2,alpha:1},9).to({rotation:67.2,x:365.4,y:-291.9},10).to({regY:10.9,rotation:56.3,x:361.9,y:-283.7},9).to({regY:10.8,scaleX:0.69,scaleY:0.69,rotation:59.7,x:359.8,y:-280.5},3).to({regX:9.9,scaleX:0.69,scaleY:0.69,rotation:60.7,x:359.1,y:-279.6},1).to({regX:10,regY:10.9,scaleX:0.69,scaleY:0.69,rotation:67.2,x:354.9,y:-273},6).to({regX:10.1,regY:11,x:354,y:-258.9},9).to({regX:10,regY:10.8,rotation:56.3,x:350.7,y:-250.9},10).to({rotation:67.2,x:346.4,y:-233.8},10).to({scaleX:0.68,scaleY:0.7,rotation:0,skewX:64.1,skewY:64.8,y:-231.6},3).to({scaleX:0.69,scaleY:0.69,rotation:56.3,skewX:0,skewY:0,x:341,y:-208.4},5).wait(1).to({regX:10.1,scaleX:0.69,scaleY:0.69,rotation:60.4,x:330.8,y:-196},3).to({regX:9.9,regY:10.9,scaleX:0.69,scaleY:0.69,rotation:52.2,x:305.8,y:-196.2},3).to({regX:10.1,regY:10.8,scaleX:0.69,scaleY:0.69,rotation:60.4,x:330.8,y:-196},4).to({regX:9.9,regY:10.9,scaleX:0.69,scaleY:0.69,rotation:52.2,x:305.8,y:-196.2},5).to({regX:10.1,regY:10.8,scaleX:0.69,scaleY:0.69,rotation:60.4,x:330.8,y:-196},4).to({regX:10,scaleX:0.69,scaleY:0.69,rotation:67.2,x:335.4,y:-201.9},5).to({regY:10.9,rotation:56.3,x:331.9,y:-193.7},9).to({rotation:67.2,x:324.9,y:-183},10).to({regY:10.8,x:325.4,y:-182.9},1).to({regY:10.9,rotation:56.3,x:319.9,y:-173.7},9).to({regX:9.9,regY:10.8,scaleX:0.69,scaleY:0.69,rotation:58.9,x:316.8,y:-171.7},3).wait(1));

	// Symbol 9
	this.instance_16 = new lib.Symbol9copy2();
	this.instance_16.parent = this;
	this.instance_16.setTransform(284.3,-173.8,0.694,0.691,0,-29.8,-25.3,25.4,19.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).to({scaleX:0.7,scaleY:0.69,skewX:-28,skewY:-24,x:283.3},1).to({regX:25.1,regY:19.8,scaleX:0.69,scaleY:0.69,rotation:30.7,skewX:0,skewY:0,x:321,y:-174.5},5).to({alpha:0},6).wait(41).to({rotation:-14.3,x:338.9,y:-319.7},0).to({regX:25.4,regY:19.9,scaleX:0.7,rotation:0,skewX:-37.2,skewY:-30.5,x:335.9,y:-305.6,alpha:1},9).to({regX:25.1,scaleX:0.69,rotation:-14.3,skewX:0,skewY:0,x:334.4,y:-300.1},10).to({regX:25.3,scaleX:0.7,rotation:0,skewX:-37.2,skewY:-30.5,x:330.2,y:-284.1},9).to({regX:25.4,regY:19.8,scaleX:0.7,scaleY:0.69,skewX:-30.3,skewY:-25.6,x:328.4,y:-283.3},3).to({scaleX:0.69,scaleY:0.69,skewX:-28,skewY:-23.8,x:327.7,y:-283.1},1).to({regX:25.1,regY:19.9,scaleX:0.69,scaleY:0.69,rotation:-14.3,skewX:0,skewY:0,x:323.9,y:-281.3},6).to({regX:25.2,rotation:0.7,x:323.3,y:-268},9).to({regX:25.4,scaleX:0.7,rotation:0,skewX:-37.2,skewY:-30.5,x:319,y:-251.3},10).to({regX:25.1,regY:19.8,scaleX:0.69,rotation:-14.3,skewX:0,skewY:0,x:315.4,y:-242.1},10).to({regX:25.2,regY:19.7,scaleX:0.7,scaleY:0.69,rotation:0,skewX:9.7,skewY:10.5,x:322.5,y:-247.4},3).to({regX:25.3,regY:19.9,scaleY:0.69,skewX:-37.2,skewY:-30.5,x:309.2,y:-208.7},5).wait(1).to({regX:25.4,scaleX:0.7,scaleY:0.69,skewX:-28.8,skewY:-24.6,x:299.2,y:-199.4},3).to({regX:25.2,scaleX:0.69,scaleY:0.69,rotation:-59.3,skewX:0,skewY:0,x:277.5,y:-190.5},3).to({regX:25.4,scaleX:0.7,scaleY:0.69,rotation:0,skewX:-28.8,skewY:-24.6,x:299.2,y:-199.4},4).to({regX:25.2,scaleX:0.69,scaleY:0.69,rotation:-59.3,skewX:0,skewY:0,x:277.5,y:-190.5},5).to({regX:25.4,scaleX:0.7,scaleY:0.69,rotation:0,skewX:-28.8,skewY:-24.6,x:299.2,y:-199.4},4).to({regX:25.1,scaleX:0.69,scaleY:0.69,rotation:-14.3,skewX:0,skewY:0,x:304.4,y:-210.1},5).to({regX:25.3,scaleX:0.7,rotation:0,skewX:-37.2,skewY:-30.5,x:300.2,y:-194.1},9).to({regX:25.1,scaleX:0.69,rotation:-14.3,skewX:0,skewY:0,x:293.9,y:-191.3},10).to({x:294.4,y:-191.1},1).to({regX:25.3,scaleX:0.7,rotation:0,skewX:-37.2,skewY:-30.5,x:288.2,y:-174.1},9).to({regX:25.4,scaleX:0.7,scaleY:0.69,skewX:-31.6,skewY:-26.6,x:285.3,y:-174},3).wait(1));

	// Layer 2
	this.instance_17 = new lib.Symbol25copy2();
	this.instance_17.parent = this;
	this.instance_17.setTransform(328.9,-229.1,0.52,0.52,7.2,0,0,22.4,25.7);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(10).to({_off:false},0).to({regX:22.3,scaleX:1.41,scaleY:1.41,x:328.8,y:-229,alpha:0},3).to({_off:true},1).wait(18).to({_off:false,regX:22.4,regY:25.6,scaleX:0.52,scaleY:0.52,x:311.9,y:-185.9,alpha:1},0).to({regX:22.3,regY:25.7,scaleX:1.41,scaleY:1.41,x:307.7,y:-181.3,alpha:0},3).to({_off:true},1).wait(32).to({_off:false,regX:22.4,regY:25.6,scaleX:0.52,scaleY:0.52,x:245.2,y:-137.4,alpha:1},0).to({regX:22.3,scaleX:1.41,scaleY:1.41,x:250.5,y:-147.6,alpha:0},3).to({_off:true},1).wait(7).to({_off:false,regX:22.4,scaleX:0.52,scaleY:0.52,x:262.9,y:-157.8,alpha:1},0).to({regX:22.3,scaleX:1.41,scaleY:1.41,x:286.8,y:-155.6,alpha:0},3).to({_off:true},1).wait(103));

	// Symbol 7
	this.instance_18 = new lib.Symbol7copy2();
	this.instance_18.parent = this;
	this.instance_18.setTransform(354.8,-257.4,0.693,0.693,-1.3,0,0,11.2,38.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).to({regX:11,regY:39,rotation:22.2,x:354.1,y:-240},10).to({regY:38.8,scaleX:0.69,scaleY:0.7,rotation:0,skewX:89.9,skewY:88.7,x:363.2,y:-220.4},3).to({regX:11.2,regY:39,scaleX:0.69,scaleY:0.69,rotation:-3.7,skewX:0,skewY:0,x:345.2,y:-216.5},6).to({regY:38.9,scaleX:0.69,scaleY:0.69,rotation:9.1,x:339.8,y:-207},5).to({regY:39,scaleX:0.69,scaleY:0.69,rotation:11.8,x:338.6,y:-204.9},1).to({regX:11,regY:38.9,rotation:22.2,x:334.1,y:-197.3},4).to({regX:11.1,rotation:13.5,x:329,y:-198.2},3).to({regX:11.2,scaleX:0.68,scaleY:0.7,rotation:0,skewX:23.5,skewY:20.1,x:331.9,y:-193.1},3).to({regY:39,scaleX:0.69,scaleY:0.69,rotation:-3.7,skewX:0,skewY:0,x:318.7,y:-200},3).to({regX:10.9,rotation:22.2,x:317.1,y:-185.2},6).to({regY:38.8,rotation:37.2,x:310.8,y:-175},6).to({regX:10.8,regY:38.7,scaleX:0.69,scaleY:0.69,rotation:43.5,x:311.8,y:-173.3},2).to({regX:11.2,regY:38.9,scaleX:0.69,scaleY:0.69,rotation:-22.8,x:272,y:-181.6},5).to({scaleX:0.56,scaleY:0.63,rotation:0.8,x:265.6,y:-162.5},1).to({regX:9.8,regY:39.6,scaleX:0.51,scaleY:0.69,rotation:0,skewX:-26.6,skewY:170,x:254.4,y:-148.5},1).to({regX:10.8,regY:39.1,scaleX:1.01,scaleY:0.69,skewX:-77.6,skewY:102.4,x:234.7,y:-119.3},1).to({regX:11.1,regY:38.9,scaleX:0.69,rotation:37.2,skewX:0,skewY:0,x:277.7,y:-148.4},7).to({regY:38.8,rotation:47.1,x:291.6,y:-154.2},4).to({regY:39,rotation:22.2,x:283.9,y:-159.3},6).wait(2).to({rotation:7.2,x:300.7,y:-170.7},0).to({regX:10.6,regY:38.4,scaleX:0.49,scaleY:0.47,rotation:0,skewX:121.9,skewY:127,x:317.2,y:-133.5},5,cjs.Ease.get(0.99)).to({scaleX:0.49,scaleY:0.47,skewX:121.8,skewY:126.9,x:317.7,y:-133.6,alpha:0.898},1).to({regX:10.7,regY:38.2,scaleX:0.49,scaleY:0.47,skewX:121.9,skewY:127,x:321.5,y:-134.9,alpha:0},9).to({_off:true},1).wait(34).to({_off:false,regX:11,regY:38.9,scaleX:0.69,scaleY:0.69,rotation:22.2,skewX:0,skewY:0,x:377.5,y:-317.7},0).to({regX:11.2,regY:39,rotation:-3.7,x:371.8,y:-313.3,alpha:1},9).to({regX:11,regY:38.9,rotation:22.2,x:373,y:-298.1},10).to({regX:11.2,rotation:-3.7,x:366.1,y:-292},9).to({regX:11,rotation:22.2,x:362.6,y:-279.3},10).to({rotation:7.2,x:360.4,y:-266.5},9).to({regX:11.2,rotation:-3.7,x:354.9,y:-259.1},9).wait(1));

	// Symbol 13
	this.instance_19 = new lib.Symbol13copy2();
	this.instance_19.parent = this;
	this.instance_19.setTransform(331.7,-233,0.693,0.693,1,0,0,18.2,13);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).to({regX:18.1,regY:12.9,rotation:7.2,x:326.7,y:-220.4},10).to({regX:18,regY:12.8,scaleX:0.69,rotation:0,skewX:27.3,skewY:25.6,x:327.7,y:-221.9},3).to({regX:18.2,regY:13.1,scaleX:0.69,rotation:0.5,skewX:0,skewY:0,x:322.5,y:-191.6},6).to({regY:13,rotation:3.8,x:314.6,y:-184.7},5).to({regX:18.1,rotation:4.5,x:313,y:-183.2},1).to({regY:12.9,rotation:7.2,x:306.7,y:-177.6},4).to({regX:17.9,regY:13,rotation:5.2,x:303.1,y:-176.8},3).to({regX:18.2,regY:12.9,scaleX:0.7,scaleY:0.69,rotation:0,skewX:6.7,skewY:3,x:302.5,y:-176.1},3).to({regY:13,scaleX:0.69,scaleY:0.69,rotation:0.5,skewX:0,skewY:0,x:296,y:-175.3},3).to({regX:18.1,regY:12.9,rotation:7.2,x:289.7,y:-165.5},6).to({x:278.5,y:-156.8},6).to({regX:18.2,x:279.1,y:-156.2},2).to({regX:18.1,regY:13,rotation:-22.8,x:254.9,y:-139},5).to({rotation:7.2,x:233.5,y:-116.1},3).to({regY:12.9,rotation:7.2,x:237,y:-123.3},7).to({regX:18,regY:12.8,rotation:25.2,x:246.4,y:-137.2},4).to({regX:18.1,regY:13,rotation:7.2,x:261.4,y:-137.7},6).wait(2).to({rotation:7.2,x:264.5,y:-142.4},0).to({regX:18.2,regY:12.3,scaleX:0.65,scaleY:0.69,rotation:0,skewX:90.5,skewY:105.5,x:288.8,y:-158.2},5,cjs.Ease.get(0.99)).to({regY:12.2,skewY:105.3,x:289.4,y:-158.4,alpha:0.898},1).to({regX:18.1,regY:12.3,skewY:105.5,x:293.1,y:-159.7,alpha:0},9).to({_off:true},1).wait(34).to({_off:false,regX:18,regY:12.9,scaleX:0.69,scaleY:0.69,rotation:7.2,skewX:0,skewY:0,x:350.1,y:-298.1},0).to({regX:18.2,regY:13,rotation:0.5,x:349.1,y:-288.6,alpha:1},9).to({regX:18.1,rotation:7.2,x:345.6,y:-278.4},10).to({regX:18.2,rotation:0.5,x:343.4,y:-267.1},9).to({regX:18.1,regY:12.9,rotation:7.2,x:335.2,y:-259.6},10).to({regY:13,x:334.4,y:-245.5},9).to({regX:18.2,rotation:0.5,x:332.2,y:-234.3},9).wait(1));

	// Symbol 12
	this.instance_20 = new lib.Symbol12copy2();
	this.instance_20.parent = this;
	this.instance_20.setTransform(324.4,-230.6,0.693,0.693,-12.3,0,0,10.8,12.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).to({regX:10.5,rotation:7.2,x:316.6,y:-215.7},10).to({regX:10.6,scaleX:0.7,scaleY:0.69,rotation:0,skewX:31.8,skewY:30.2,x:315.7,y:-219.7},3).to({regX:10.7,regY:13,scaleX:0.69,scaleY:0.69,rotation:-14.3,skewX:0,skewY:0,x:315.4,y:-189.5},6).to({regX:10.8,rotation:-3.3,x:306,y:-181.3},5).to({rotation:-1.3,x:304.2,y:-179.6},1).to({regX:10.5,rotation:7.2,x:296.6,y:-172.9},4).to({regX:10.7,regY:12.9,rotation:0.2,x:294.1},3).to({regY:12.8,scaleX:0.7,scaleY:0.68,rotation:0,skewX:26.6,skewY:23.2,x:287.7,y:-174.1},3).to({regY:13,scaleX:0.69,scaleY:0.69,rotation:-14.3,skewX:0,skewY:0,x:288.9,y:-173},3).to({regX:10.6,rotation:-22.8,x:281.3,y:-161.6},6).to({regY:12.8,rotation:37.2,x:267.7,y:-153.3},6).to({scaleX:0.69,scaleY:0.69,rotation:28.5,x:268.6},2).to({regY:12.9,scaleX:0.69,scaleY:0.69,rotation:-22.8,x:248.5,y:-130},5).to({rotation:7.2,x:223.5,y:-111.5},3).to({regX:10.7,regY:13,rotation:-37.8,x:230.7,y:-118.9},7).to({regY:12.6,rotation:68.7,x:234.8,y:-142.5},4).to({regX:10.6,regY:12.9,rotation:7.2,x:251.5,y:-133.2},6).wait(2).to({regX:10.5,regY:13,rotation:7.2,x:254.4,y:-137.7},0).to({regX:10.6,regY:12.4,scaleX:0.66,scaleY:0.83,rotation:0,skewX:68.8,skewY:69.9,x:282.2,y:-165.4},5,cjs.Ease.get(0.99)).to({scaleX:0.66,skewX:68.9,x:282.6,y:-165.6,alpha:0.898},1).to({regX:10.5,scaleX:0.66,skewX:68.8,x:286.4,y:-166.9,alpha:0},9).to({_off:true},1).wait(34).to({_off:false,regY:13,scaleX:0.69,scaleY:0.69,rotation:7.2,skewX:0,skewY:0,x:340,y:-293.3},0).to({regX:10.7,rotation:-14.3,x:342.1,y:-286.3,alpha:1},9).to({regX:10.5,rotation:7.2,x:335.5,y:-273.7},10).to({regX:10.7,regY:12.9,rotation:-14.3,x:336.3,y:-265},9).to({regX:10.6,regY:13,rotation:7.2,x:325.1,y:-254.9},10).to({regX:10.7,regY:12.8,rotation:-7.8,x:324.9,y:-240.7},9).to({regY:13,rotation:-14.3,x:325.1,y:-232},9).wait(1));

	// Symbol 11
	this.instance_21 = new lib.Symbol11copy2();
	this.instance_21.parent = this;
	this.instance_21.setTransform(335.7,-222.7,0.692,0.692,34.4,0,0,8.1,11.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_21).to({regX:8,regY:12,scaleX:0.69,scaleY:0.69,rotation:7.2,x:333.5,y:-209},10).to({regX:8.1,scaleX:0.69,scaleY:0.7,rotation:0,skewX:18.6,skewY:17.1,x:332.2,y:-206.2},3).to({regX:8,regY:11.8,scaleX:0.69,scaleY:0.69,rotation:37.2,skewX:0,skewY:0,x:326.1,y:-181.6},6).to({regX:8.1,scaleX:0.69,scaleY:0.69,rotation:22.1,x:320,y:-173.9},5).to({regX:8,rotation:19.1,x:318.7,y:-172.5},1).to({regX:8.1,regY:11.9,scaleX:0.69,scaleY:0.69,rotation:7.2,x:313.6,y:-166.2},4).to({regY:12,rotation:17,x:308.9,y:-165.8},3).to({regX:8.2,regY:11.8,scaleX:0.68,scaleY:0.71,rotation:0,skewX:30.3,skewY:27.5,x:306.7,y:-165.7},3).to({regX:8.1,scaleX:0.69,scaleY:0.69,rotation:37.2,skewX:0,skewY:0,x:299.7,y:-165.1},3).to({regX:8.2,regY:12,rotation:-22.8,x:297.7,y:-156.9},6).to({regX:8.1,regY:11.8,rotation:7.2,x:285.4,y:-145.5},6).to({regX:8.2,regY:11.9,rotation:7.2,x:286.1,y:-145.8},2).to({regX:8,rotation:-22.8,x:266.5,y:-132.6},5).to({regX:8.1,rotation:7.2,x:240.4,y:-104.8},3).to({regY:11.8,rotation:22.2,x:241.4,y:-112.3},7).to({regX:8,regY:11.9,rotation:16.7,x:250.3,y:-124.5},4).to({regY:12,rotation:7.2,x:268.3,y:-126.4},6).wait(2).to({regX:8.1,regY:11.9,rotation:7.2,x:271.5,y:-131.1},0).to({regX:7.9,regY:11.8,scaleX:0.68,scaleY:1.11,rotation:0,skewX:111.6,skewY:117.1,x:277.9,y:-155.8},5,cjs.Ease.get(0.99)).to({scaleX:0.68,scaleY:1.11,skewX:111.5,x:278.4,y:-155.9,alpha:0.898},1).to({scaleX:0.68,scaleY:1.11,skewX:111.6,x:282.1,y:-157.3,alpha:0},9).to({_off:true},1).wait(34).to({_off:false,regX:8,regY:12,scaleX:0.69,scaleY:0.69,rotation:7.2,skewX:0,skewY:0,x:357,y:-286.6},0).to({regX:8.1,regY:11.9,rotation:37.2,x:352.8,y:-278.4,alpha:1},9).to({regX:8,regY:12,rotation:7.2,x:352.5,y:-267},10).to({regX:8.1,regY:11.9,rotation:37.2,x:347.1,y:-257},9).to({rotation:7.2,x:342.1,y:-248.2},10).to({regX:8.2,regY:12,rotation:-22.8,x:341.2,y:-237.1},9).to({regX:8.1,regY:11.9,rotation:37.2,x:335.8,y:-224.1},9).wait(1));

	// Symbol 10
	this.instance_22 = new lib.Symbol10copy2();
	this.instance_22.parent = this;
	this.instance_22.setTransform(336.2,-250.7,0.693,0.693,4,0,0,23.1,23.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_22).to({regY:23.4,rotation:7.2,x:332.7,y:-237.4},10).to({rotation:0,skewX:22.8,skewY:21.2,x:339.7,y:-237},3).to({regX:23.2,rotation:3.8,skewX:0,skewY:0,x:326.9,y:-209.2},6).to({regY:23.3,rotation:5.3,x:319.8,y:-202.1},5).to({regY:23.2,rotation:5.8,x:318.4,y:-200.6},1).to({regX:23.1,regY:23.4,rotation:7.2,x:312.7,y:-194.7},4).to({rotation:6.2,x:308.6,y:-194.1},3).to({regY:23.2,scaleX:0.68,scaleY:0.7,rotation:0,skewX:23.5,skewY:20.2,x:311.5,y:-192.7},3).to({regY:23.4,scaleX:0.69,scaleY:0.69,rotation:3.8,skewX:0,skewY:0,x:300.4,y:-192.8},3).to({rotation:7.2,x:295.7,y:-182.5},6).to({x:284.5,y:-173.9},6).to({x:283.8,y:-171.9},2).to({rotation:-22.8,x:251.5,y:-156.8},5).to({rotation:12.4,x:241.5,y:-131.8},3).to({rotation:7.2,x:242.9,y:-140.3},7).to({regY:23.3,rotation:28.4,x:257.8,y:-152.8},4).to({regY:23.4,rotation:7.2,x:267.5,y:-154.9},6).wait(2).to({rotation:7.2,x:270.6,y:-159.5},0).to({regX:22.9,regY:23.1,scaleX:0.59,scaleY:0.66,rotation:0,skewX:68.8,skewY:69.9,x:304.6,y:-157.4},5,cjs.Ease.get(0.99)).to({regX:22.8,regY:23,scaleX:0.59,scaleY:0.66,skewX:68.9,x:305.1,y:-157.6,alpha:0.898},1).to({regX:22.9,regY:23.1,scaleX:0.59,scaleY:0.66,skewX:68.8,x:308.8,y:-158.9,alpha:0},9).to({_off:true},1).wait(34).to({_off:false,regX:23.1,regY:23.4,scaleX:0.69,scaleY:0.69,rotation:7.2,skewX:0,skewY:0,x:356.1,y:-315.1},0).to({regX:23.2,rotation:3.8,x:353.6,y:-306.1,alpha:1},9).to({regX:23.1,rotation:7.2,x:351.6,y:-295.5},10).to({regX:23.2,rotation:3.8,x:347.8,y:-284.6},9).to({regX:22.9,rotation:7.2,x:341,y:-276.7},10).to({regX:23.1,x:340.4,y:-262.7},9).to({regX:23.2,rotation:3.8,x:336.6,y:-251.8},9).wait(1));

	// Symbol 8
	this.instance_23 = new lib.Symbol8copy2();
	this.instance_23.parent = this;
	this.instance_23.setTransform(350.4,-249.3,0.692,0.692,57.4,0,0,10,10.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_23).to({scaleX:0.69,scaleY:0.69,rotation:67.2,x:346.4,y:-233.8},10).to({scaleX:0.68,scaleY:0.7,rotation:0,skewX:64.1,skewY:64.8,y:-231.6},3).to({scaleX:0.69,scaleY:0.69,rotation:56.3,skewX:0,skewY:0,x:341,y:-208.4},6).to({regX:10.1,scaleX:0.69,scaleY:0.69,rotation:61.9,x:333.9,y:-199.7},5).to({scaleX:0.69,scaleY:0.69,rotation:62.9,x:332.4,y:-197.9},1).to({regX:10,regY:10.9,scaleX:0.69,scaleY:0.69,rotation:67.2,x:326.5,y:-191},4).to({regX:9.9,regY:10.8,scaleX:0.69,scaleY:0.69,rotation:63.6,x:322.5,y:-191.3},3).to({regX:10.1,regY:10.6,scaleX:0.67,scaleY:0.71,rotation:0,skewX:61.2,skewY:62.4,x:322.7,y:-191.5},3).to({regX:10,regY:10.8,scaleX:0.69,scaleY:0.69,rotation:56.3,skewX:0,skewY:0,x:314.5,y:-191.9},3).to({rotation:67.2,x:309.5,y:-178.9},6).to({regY:10.9,x:298.3,y:-170.2},6).to({regY:10.8,scaleX:0.69,scaleY:0.69,rotation:50.1,x:299.9,y:-171.2},2).to({regX:10.2,regY:11,scaleX:0.69,scaleY:0.69,rotation:-22.8,x:267.3,y:-164.1},5).to({regX:10,regY:10.8,rotation:87.4,x:255.6,y:-124.2},3).to({regX:10.1,rotation:7.2,x:260.2,y:-138.8},7).to({rotation:16.7,x:270.6,y:-148.2},4).to({regX:10,rotation:67.2,x:282,y:-151.1},6).wait(2).to({regX:10.1,regY:11,rotation:7.2,x:287.9,y:-157.9},0).to({regX:10.3,regY:10.3,scaleX:0.58,scaleY:0.62,rotation:0,skewX:41.5,skewY:37,x:310.8,y:-146.8},5,cjs.Ease.get(0.99)).to({regX:10.4,scaleX:0.58,scaleY:0.62,skewX:41.4,skewY:36.9,x:311.2,y:-146.9,alpha:0.898},1).to({regY:10.4,scaleX:0.58,scaleY:0.62,skewX:41.5,skewY:37,x:315,y:-148.2,alpha:0},9).to({_off:true},1).wait(34).to({_off:false,regX:10,regY:10.8,scaleX:0.69,scaleY:0.69,rotation:67.2,skewX:0,skewY:0,x:369.9,y:-311.5},0).to({rotation:56.3,x:367.7,y:-305.2,alpha:1},9).to({rotation:67.2,x:365.4,y:-291.9},10).to({regY:10.9,rotation:56.3,x:361.9,y:-283.7},9).to({rotation:67.2,x:354.9,y:-273},10).to({regX:10.1,regY:11,x:354,y:-258.9},9).to({regX:10,regY:10.8,rotation:56.3,x:350.7,y:-250.9},9).wait(1));

	// Symbol 9
	this.instance_24 = new lib.Symbol9copy2();
	this.instance_24.parent = this;
	this.instance_24.setTransform(318.7,-250.6,0.696,0.692,0,-35.1,-29.1,25.4,19.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_24).to({regX:25.1,scaleX:0.69,scaleY:0.69,rotation:-14.3,skewX:0,skewY:0,x:315.4,y:-242.1},10).to({regX:25.2,regY:19.7,scaleX:0.7,scaleY:0.69,rotation:0,skewX:9.7,skewY:10.5,x:322.5,y:-247.4},3).to({regX:25.3,regY:19.9,scaleY:0.69,skewX:-37.2,skewY:-30.5,x:309.2,y:-208.7},6).to({regX:25.4,scaleX:0.69,scaleY:0.69,skewX:-25.6,skewY:-22.3,x:302.4,y:-204.1},5).to({regY:20,skewX:-23.3,skewY:-20.8,x:301.1,y:-203.1},1).to({regX:25.1,regY:19.8,scaleX:0.69,scaleY:0.69,rotation:-14.3,skewX:0,skewY:0,x:295.5,y:-199.3},4).to({regX:25.2,scaleX:0.69,scaleY:0.69,rotation:0,skewX:-21.8,skewY:-19.6,x:291.3,y:-197},3).to({regX:25.3,scaleX:0.71,scaleY:0.68,skewX:-11.1,skewY:-9.8,x:295.1,y:-198.3},3).to({regX:25.4,regY:19.9,scaleX:0.7,scaleY:0.69,skewX:-37.2,skewY:-30.5,x:282.8,y:-192.2},3).to({regX:25.1,scaleX:0.69,rotation:-14.3,skewX:0,skewY:0,x:278.5,y:-187.1},6).to({regX:25.2,rotation:-29.3,x:266.8,y:-174},6).to({regX:25.1,regY:19.7,scaleX:0.69,scaleY:0.69,rotation:11.2,x:266.2,y:-178.7},2).to({regX:25.2,regY:19.9,scaleX:0.69,scaleY:0.69,rotation:-22.8,x:232.9,y:-158.4},5).to({regX:25.1,regY:19.8,rotation:27.4,x:232.1,y:-146.8},3).to({regY:19.9,rotation:-13.5,x:226.5,y:-143.7},7).to({regY:19.8,rotation:46.7,x:251.2,y:-169.4},4).to({regY:19.9,rotation:-22.8,x:252.1,y:-158.1},6).wait(2).to({regX:25.2,rotation:7.2,x:255.2,y:-170.2},0).to({regX:24.9,regY:19.4,scaleX:0.5,scaleY:0.64,rotation:0,skewX:51.5,skewY:60,x:311.4,y:-165.6},5,cjs.Ease.get(0.99)).to({scaleX:0.49,scaleY:0.64,skewX:51.6,skewY:60.1,x:311.8,y:-165.7,alpha:0.898},1).to({regY:19.5,scaleX:0.5,scaleY:0.64,skewX:51.5,skewY:60,x:315.6,y:-167,alpha:0},9).to({_off:true},1).wait(34).to({_off:false,regX:25.1,regY:19.8,scaleX:0.69,scaleY:0.69,rotation:-14.3,skewX:0,skewY:0,x:338.9,y:-319.7},0).to({regX:25.4,regY:19.9,scaleX:0.7,rotation:0,skewX:-37.2,skewY:-30.5,x:335.9,y:-305.6,alpha:1},9).to({regX:25.1,scaleX:0.69,rotation:-14.3,skewX:0,skewY:0,x:334.4,y:-300.1},10).to({regX:25.3,scaleX:0.7,rotation:0,skewX:-37.2,skewY:-30.5,x:330.2,y:-284.1},9).to({regX:25.1,scaleX:0.69,rotation:-14.3,skewX:0,skewY:0,x:323.9,y:-281.3},10).to({regX:25.2,rotation:0.7,x:323.3,y:-268},9).to({regX:25.4,scaleX:0.7,rotation:0,skewX:-37.2,skewY:-30.5,x:319,y:-251.3},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(181.2,-284.6,181.7,208.6);


(lib.Symbol24copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 14
	this.instance = new lib.Symbol27copy();
	this.instance.parent = this;
	this.instance.setTransform(291.8,-191.7,1,1,-45,0,0,8.4,3.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(35).to({_off:false},0).to({regY:3.9,x:292.1,y:-196.4,alpha:0},4).to({_off:true},1).wait(62).to({_off:false,regX:8.3,regY:3.8,rotation:-30,x:232.7,y:-134.4,alpha:1},0).to({regX:8.4,regY:3.9,rotation:-45,x:225.1,y:-139.9,alpha:0},4).to({_off:true},1).wait(4).to({_off:false,regX:8.3,regY:3.8,rotation:-30,x:232.7,y:-134.4,alpha:1},0).to({regX:8.4,regY:3.9,rotation:-45,x:237.6,y:-139.9,alpha:0},4).to({_off:true},1).wait(16).to({_off:false,regX:8.3,regY:3.8,rotation:-30,x:235.5,y:-133.6,alpha:1},0).to({regX:8.4,regY:3.9,rotation:-45,x:236.6,y:-138.2,alpha:0},4).to({_off:true},1).wait(31).to({_off:false,regX:8.3,regY:3.8,rotation:-30,x:237.7,y:-139.4,alpha:1},0).to({regX:8.4,regY:3.9,rotation:-45,x:230.1,y:-144.9,alpha:0},4).to({_off:true},1).wait(6).to({_off:false,regX:8.3,regY:3.8,rotation:-30,x:250.2,y:-150.1,alpha:1},0).to({regX:8.4,regY:3.9,rotation:-45,x:260.1,y:-154.9,alpha:0},4).to({_off:true},1).wait(2));

	// Symbol 17
	this.instance_1 = new lib.Symbol17copy();
	this.instance_1.parent = this;
	this.instance_1.setTransform(220.6,-135.5,0.698,0.698,-4.5,0,0,14.7,13.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:14.6,regY:14,rotation:7.2,x:224,y:-136.5},5).to({regY:13.8,rotation:-7.8,x:229.4,y:-144.2},5).to({regY:13.9,rotation:7.2,x:242,y:-157.9},8).to({regY:13.8,rotation:-7.8,x:245.4,y:-163.2},7).to({regY:14,rotation:7.2,x:265.4,y:-175},8).to({regX:14.7,rotation:-11.7,x:261,y:-173},5).to({regX:14.6,rotation:7.2,x:264.3,y:-175.2},5).to({rotation:7.2},1).to({x:260.3,y:-171.7},6).to({regX:14.7,scaleX:0.71,scaleY:0.69,rotation:0,skewX:31.8,skewY:37.1,x:255.5,y:-173.7},4).to({regX:14.6,scaleX:0.7,scaleY:0.7,rotation:7.2,skewX:0,skewY:0,x:264.3,y:-175.2},5).to({regX:14.7,scaleX:0.71,scaleY:0.69,rotation:0,skewX:31.8,skewY:37.1,x:255.5,y:-173.7},4).to({regY:13.9,scaleX:0.7,scaleY:0.7,rotation:-47,skewX:0,skewY:0,x:290.1,y:-157.9},5).to({alpha:0},4).wait(1).to({regX:14.6,rotation:7.2,x:168.5,y:-91.9},0).to({regX:14.7,rotation:-7.8,x:179.9,y:-97.2,alpha:1},7).to({regX:14.6,regY:14,rotation:7.2,x:199.6,y:-110.6},7).to({regX:14.7,regY:13.8,rotation:-7.8,x:211.1,y:-125.9},7).to({regX:14.6,regY:13.9,rotation:7.2,x:202,y:-117.9},7).to({regX:14.7,regY:14,rotation:-11.7,x:198.2,y:-117.5},4).to({regX:14.6,regY:13.9,rotation:7.2,x:202,y:-117.9},8).to({regX:14.7,regY:14,rotation:-11.7,x:198.2,y:-117.5},4).to({regX:14.6,regY:13.9,rotation:7.2,x:202,y:-117.9},8).wait(1).to({rotation:7.2},0).wait(7).to({regX:14.7,regY:14,rotation:-11.7,x:198.2,y:-117.5},4).to({regX:14.6,regY:13.9,rotation:7.2,x:202,y:-117.9},8).to({regY:13.8,rotation:-7.8,x:205.4,y:-123.2},7).to({regY:13.9,rotation:7.2,x:213.2,y:-126.6},8).to({regX:14.7,regY:13.8,rotation:-12,x:196.5,y:-122.9},2).to({regX:14.6,regY:14,rotation:7.2,x:205.4,y:-125},6).to({regX:14.7,rotation:-11.7,x:205,y:-129},4).to({regX:14.6,rotation:7.2,x:224,y:-136.5},6).to({regX:14.7,rotation:-11.7,x:218.6,y:-134.6},5).to({regY:13.9,rotation:-7,x:220,y:-135.1},2).wait(1));

	// Symbol 20
	this.instance_2 = new lib.Symbol20copy();
	this.instance_2.parent = this;
	this.instance_2.setTransform(224.2,-122.5,0.697,0.697,16.3,0,0,6,11.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regY:12,scaleX:0.7,scaleY:0.7,rotation:7.2,x:226.5,y:-122.9},5).to({regX:6.1,regY:11.8,scaleY:0.71,rotation:0,skewX:0.9,skewY:11.7,x:232.2,y:-130},5).to({regX:6,scaleY:0.7,rotation:7.2,skewX:0,skewY:0,x:244.5,y:-144.3},8).to({regX:6.1,scaleY:0.71,rotation:0,skewX:0.9,skewY:11.7,x:248.2,y:-149},7).to({regX:6,regY:12,scaleY:0.7,rotation:7.2,skewX:0,skewY:0,x:267.9,y:-161.3},8).to({regY:11.8,rotation:22.2,x:265.2,y:-160.8},5).to({regY:12,rotation:7.2,x:266.8,y:-161.5},5).to({rotation:7.2},1).to({x:262.8,y:-158},6).to({scaleX:0.71,scaleY:0.69,rotation:0,skewX:1.8,skewY:7.1,x:261.2,y:-163.5},4).to({scaleX:0.7,scaleY:0.7,rotation:7.2,skewX:0,skewY:0,x:266.8,y:-161.5},5).to({scaleX:0.71,scaleY:0.69,rotation:0,skewX:1.8,skewY:7.1,x:261.2,y:-163.5},4).to({regX:5.9,regY:11.9,scaleX:0.7,scaleY:0.7,rotation:105.8,skewX:0,skewY:0,x:278.7,y:-150.4},5).to({alpha:0},4).wait(1).to({regX:6,regY:12,rotation:7.2,x:170.9,y:-78.2},0).to({regY:11.9,scaleY:0.71,rotation:0,skewX:0.9,skewY:11.7,x:182.7,y:-83,alpha:1},7).to({regY:11.8,scaleY:0.7,rotation:7.2,skewX:0,skewY:0,x:202.1,y:-97},7).to({regX:6.1,scaleY:0.71,rotation:0,skewX:0.9,skewY:11.7,x:213.9,y:-111.7},7).to({regX:6,scaleY:0.7,rotation:7.2,skewX:0,skewY:0,x:204.5,y:-104.3},7).to({rotation:22.2,x:202.5,y:-105.3},4).to({rotation:7.2,x:204.5,y:-104.3},8).to({rotation:22.2,x:202.5,y:-105.3},4).to({rotation:7.2,x:204.5,y:-104.3},8).wait(1).to({rotation:7.2},0).wait(7).to({rotation:22.2,x:202.5,y:-105.3},4).to({rotation:7.2,x:204.5,y:-104.3},8).to({regX:6.1,scaleY:0.71,rotation:0,skewX:0.9,skewY:11.7,x:208.2,y:-109},7).to({regX:6,regY:12,scaleY:0.7,rotation:7.2,skewX:0,skewY:0,x:215.6,y:-112.9},8).to({regY:11.8,scaleY:0.7,rotation:0,skewX:5.5,skewY:8.5,x:206.2,y:-110.7},2).to({regY:12,scaleY:0.7,rotation:7.2,skewX:0,skewY:0,x:207.9,y:-111.3},6).to({regY:11.8,rotation:22.2,x:209.2,y:-116.8},4).to({regY:12,rotation:7.2,x:226.5,y:-122.9},6).to({regY:11.8,rotation:22.2,x:222.9,y:-122.4},5).to({rotation:18.3,x:223.7,y:-122.6},2).wait(1));

	// Symbol 19
	this.instance_3 = new lib.Symbol19copy();
	this.instance_3.parent = this;
	this.instance_3.setTransform(217.9,-118.8,0.698,0.698,7,0,0,5.5,6.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:7.2,x:220.1,y:-119.5},5).to({scaleY:0.71,rotation:0,skewX:0.9,skewY:11.7,x:226.4,y:-126.8},5).to({scaleY:0.7,rotation:7.2,skewX:0,skewY:0,x:238,y:-140.8},8).to({scaleY:0.71,rotation:0,skewX:0.9,skewY:11.7,x:242.4,y:-145.8},7).to({regY:6.5,scaleY:0.7,rotation:7.2,skewX:0,skewY:0,x:261.5,y:-157.9},8).to({x:258.8,y:-156.5},5).to({x:260.4,y:-158.1},5).wait(1).to({x:256.4,y:-154.6},6).to({scaleX:0.71,scaleY:0.69,rotation:0,skewX:1.8,skewY:7.1,x:258,y:-158.1},4).to({scaleX:0.7,scaleY:0.7,rotation:7.2,skewX:0,skewY:0,x:260.4},5).to({scaleX:0.71,scaleY:0.69,rotation:0,skewX:1.8,skewY:7.1,x:258},4).to({regY:6.4,scaleX:0.7,scaleY:0.7,rotation:7.2,skewX:0,skewY:0,x:275.1,y:-149},5).to({alpha:0},4).wait(1).to({regY:6.5,x:164.5,y:-74.8},0).to({regX:5.6,regY:6.4,scaleY:0.71,rotation:0,skewX:0.9,skewY:11.7,x:176.9,y:-79.9,alpha:1},7).to({regY:6.5,scaleY:0.7,rotation:7.2,skewX:0,skewY:0,x:195.8,y:-93.5},7).to({regX:5.5,regY:6.3,scaleY:0.71,rotation:0,skewX:0.9,skewY:11.7,x:208,y:-108.6},7).to({regY:6.4,scaleY:0.7,rotation:7.2,skewX:0,skewY:0,x:198,y:-100.8},7).to({x:196.1,y:-101.1},4).to({x:198,y:-100.8},8).to({x:196.1,y:-101.1},4).to({x:198,y:-100.8},8).wait(8).to({x:196.1,y:-101.1},4).to({x:198,y:-100.8},8).to({scaleY:0.71,rotation:0,skewX:0.9,skewY:11.7,x:202.4,y:-105.8},7).to({regX:5.6,regY:6.5,scaleY:0.7,rotation:7.2,skewX:0,skewY:0,x:209.3,y:-109.5},8).to({regX:5.5,regY:6.4,scaleY:0.7,rotation:0,skewX:5.5,skewY:8.5,x:200.1,y:-106.8},2).to({regY:6.5,scaleY:0.7,rotation:7.2,skewX:0,skewY:0,x:201.5,y:-107.9},6).to({x:202.8,y:-112.5},4).to({regY:6.4,x:220.1,y:-119.5},6).to({regX:5.6,regY:6.5,x:216.6,y:-118.1},5).to({regX:5.5,rotation:7.1,x:217.4,y:-118.6},2).wait(1));

	// Symbol 21
	this.instance_4 = new lib.Symbol21copy();
	this.instance_4.parent = this;
	this.instance_4.setTransform(236.1,-139.1,0.698,0.698,-7.5,0,0,16.2,17.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regX:16.1,regY:17.4,rotation:7.2,x:240.6,y:-139.5},5).to({scaleY:0.71,rotation:0,skewX:0.9,skewY:11.7,x:244.2,y:-146},5).to({scaleY:0.7,rotation:7.2,skewX:0,skewY:0,x:258.6,y:-160.8},8).to({scaleY:0.71,rotation:0,skewX:0.9,skewY:11.7,x:260.2,y:-165},7).to({scaleY:0.7,rotation:7.2,skewX:0,skewY:0,x:282,y:-178},8).to({regX:16.2,rotation:-16.5,x:275.7,y:-177},5).to({regX:16.1,rotation:7.2,x:280.9,y:-178.2},5).to({rotation:7.2},1).to({regX:16,rotation:37.2,x:280.6,y:-166.9},6).to({regX:16.1,regY:17.5,scaleX:0.71,scaleY:0.69,rotation:0,skewX:-43.2,skewY:-37.9,x:265.7,y:-183.3},4).to({regY:17.4,scaleX:0.7,scaleY:0.7,rotation:7.2,skewX:0,skewY:0,x:280.9,y:-178.2},5).to({regY:17.5,scaleX:0.71,scaleY:0.69,rotation:0,skewX:-43.2,skewY:-37.9,x:265.7,y:-183.3},4).to({regY:17.3,scaleX:0.7,scaleY:0.7,rotation:67.2,skewX:0,skewY:0,x:292.7,y:-141.5},5).to({alpha:0},4).wait(1).to({regX:16,regY:17.4,rotation:7.2,x:185,y:-94.8},0).to({regX:16.1,scaleY:0.71,rotation:0,skewX:0.9,skewY:11.7,x:194.6,y:-99,alpha:1},7).to({scaleY:0.7,rotation:7.2,skewX:0,skewY:0,x:216.2,y:-113.5},7).to({scaleY:0.71,rotation:0,skewX:0.9,skewY:11.7,x:225.8,y:-127.7},7).to({scaleY:0.7,rotation:7.2,skewX:0,skewY:0,x:218.6,y:-120.8},7).to({regX:16.2,rotation:-16.5,x:213,y:-121.5},4).to({regX:16.1,rotation:7.2,x:218.6,y:-120.8},8).to({regX:16.2,rotation:-16.5,x:213,y:-121.5},4).to({regX:16.1,rotation:7.2,x:218.6,y:-120.8},8).wait(1).to({rotation:7.2},0).wait(7).to({regX:16.2,rotation:-16.5,x:213,y:-121.5},4).to({regX:16.1,rotation:7.2,x:218.6,y:-120.8},8).to({scaleY:0.71,rotation:0,skewX:0.9,skewY:11.7,x:220.2,y:-125},7).to({scaleY:0.7,rotation:7.2,skewX:0,skewY:0,x:229.8,y:-129.5},8).to({regX:16.2,scaleY:0.7,rotation:0,skewX:-9.5,skewY:-6.5,x:214.8,y:-127.6},2).to({regX:16.1,scaleY:0.7,rotation:7.2,skewX:0,skewY:0,x:222,y:-128},6).to({regX:16.2,rotation:-16.5,x:219.7,y:-133},4).to({regX:16.1,rotation:7.2,x:240.6,y:-139.5},6).to({regX:16.2,rotation:-16.5,x:233.4,y:-138.6},5).to({regY:17.3,rotation:-10.5,x:235.2,y:-138.9},2).wait(1));

	// Symbol 22
	this.instance_5 = new lib.Symbol22copy();
	this.instance_5.parent = this;
	this.instance_5.setTransform(215.2,-120.1,0.698,0.698,4.5,0,0,16.7,24.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regX:16.6,rotation:7.2,x:216.9,y:-121.7},5).to({scaleY:0.7,rotation:0,skewX:4.4,skewY:7.2,x:223.6,y:-128.5},5).to({scaleY:0.7,rotation:7.2,skewX:0,skewY:0,x:234.9,y:-143.1},8).to({scaleY:0.7,rotation:0,skewX:4.4,skewY:7.2,x:239.6,y:-147.5},7).to({scaleY:0.7,rotation:7.2,skewX:0,skewY:0,x:258.3,y:-160.2},8).to({rotation:3.3,x:256.3,y:-157.6},5).to({rotation:7.2,x:257.2,y:-160.4},5).wait(1).to({x:253.2,y:-156.9},6).to({regX:16.7,scaleX:0.71,scaleY:0.69,rotation:0,skewX:-13.1,skewY:-7.9,x:254.7,y:-160.4},4).to({regX:16.6,scaleX:0.7,scaleY:0.7,rotation:7.2,skewX:0,skewY:0,x:257.2},5).to({regX:16.7,scaleX:0.71,scaleY:0.69,rotation:0,skewX:-13.1,skewY:-7.9,x:254.7},4).to({regX:16.4,scaleX:0.7,scaleY:0.7,rotation:82.2,skewX:0,skewY:0,x:275.6,y:-156.1},5).to({alpha:0},4).wait(1).to({regX:16.6,rotation:7.2,x:161.3,y:-77.1},0).to({scaleY:0.7,rotation:0,skewX:4.4,skewY:7.2,x:174.1,y:-81.5,alpha:1},7).to({scaleY:0.7,rotation:7.2,skewX:0,skewY:0,x:192.5,y:-95.7},7).to({regY:25,scaleY:0.7,rotation:0,skewX:4.4,skewY:7.2,x:205.2,y:-110.1},7).to({regY:24.9,scaleY:0.7,rotation:7.2,skewX:0,skewY:0,x:194.9,y:-103.1},7).to({rotation:3.3,x:193.6,y:-102.1},4).to({rotation:7.2,x:194.9,y:-103.1},8).to({rotation:3.3,x:193.6,y:-102.1},4).to({rotation:7.2,x:194.9,y:-103.1},8).wait(8).to({rotation:3.3,x:193.6,y:-102.1},4).to({rotation:7.2,x:194.9,y:-103.1},8).to({scaleY:0.7,rotation:0,skewX:4.4,skewY:7.2,x:199.6,y:-107.5},7).to({regX:16.5,scaleY:0.7,rotation:7.2,skewX:0,skewY:0,x:206,y:-111.7},8).to({regX:16.8,scaleY:0.7,rotation:0,skewX:-4.8,skewY:-4,x:196.1,y:-106.8},2).to({regX:16.6,scaleY:0.7,rotation:7.2,skewX:0,skewY:0,x:198.3,y:-110.2},6).to({rotation:3.3,x:200.3,y:-113.6},4).to({rotation:7.2,x:216.9,y:-121.7},6).to({rotation:3.3,x:214,y:-119.2},5).to({regX:16.7,rotation:4.1,x:214.8,y:-119.8},2).wait(1));

	// Symbol 18
	this.instance_6 = new lib.Symbol18copy();
	this.instance_6.parent = this;
	this.instance_6.setTransform(218,-102.9,0.697,0.697,-11.5,0,0,10.2,10.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({regX:10.1,regY:10.4,scaleX:0.7,scaleY:0.7,rotation:7.2,x:218.1},5).to({rotation:-30.5,x:229.4,y:-115},5).to({regX:10,regY:10.5,rotation:7.2,x:236,y:-124.2},8).to({regX:10.1,regY:10.4,rotation:-30.5,x:245.4,y:-134},7).to({rotation:7.2,x:259.5,y:-141.4},8).to({regX:10,regY:10.3,rotation:37.2,x:256.2,y:-142.9},5).to({regX:10.1,regY:10.4,rotation:7.2,x:258.4,y:-141.6},5).to({rotation:7.2},1).to({regY:10.3,rotation:-22.8,x:259.6,y:-140.3},6).to({regY:10.4,scaleX:0.71,scaleY:0.69,rotation:0,skewX:1.8,skewY:7.1,x:257.6,y:-141.6},4).to({scaleX:0.7,scaleY:0.7,rotation:7.2,skewX:0,skewY:0,x:258.4},5).to({scaleX:0.71,scaleY:0.69,rotation:0,skewX:1.8,skewY:7.1,x:257.6},4).to({regX:10,scaleX:0.7,scaleY:0.7,rotation:73.3,skewX:0,skewY:0,x:258.6,y:-150.8},5).to({alpha:0},4).wait(1).to({regX:10.1,rotation:7.2,x:162.5,y:-58.3},0).to({regY:10.3,rotation:-30.5,x:179.8,y:-68.1,alpha:1},7).to({regY:10.4,rotation:7.2,x:193.7,y:-76.9},7).to({regY:10.3,rotation:-30.5,x:210.9,y:-96.7},7).to({regX:10,regY:10.5,rotation:7.2,x:196,y:-84.2},7).to({rotation:7.2},4).wait(40).to({regX:10.1,regY:10.4,rotation:-30.5,x:205.4,y:-94},7).to({regX:10.2,regY:10.5,rotation:7.2,x:207.3,y:-92.9},8).to({regX:10.1,regY:10.4,rotation:-3.5,x:201.8,y:-91.7},2).to({rotation:7.2,x:199.5,y:-91.4},6).to({regX:10,regY:10.3,rotation:37.2,x:200.2,y:-98.9},4).to({regX:10.1,regY:10.4,rotation:7.2,x:218.1,y:-102.9},6).to({regX:10.2,rotation:-22.8,x:217.9,y:-102.5},5).to({regY:10.3,rotation:-15.3,x:218,y:-102.7},2).wait(1));

	// Symbol 16
	this.instance_7 = new lib.Symbol16copy();
	this.instance_7.parent = this;
	this.instance_7.setTransform(217.8,-120.9,0.698,0.698,7,0,0,8.2,11.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({regY:11.4,rotation:7.2,x:218.7,y:-121.8},5).to({regX:8.1,regY:11.5,x:226.2,y:-128.5},5).to({regX:8.2,regY:11.4,x:236.7,y:-143.2},8).to({regX:8.1,regY:11.5,x:242.2,y:-147.5},7).to({regY:11.4,x:260.1,y:-160.3},8).to({regX:8.2,x:259.5,y:-158.7},5).to({x:259.1,y:-160.5},5).wait(1).to({x:255.1,y:-157},6).to({regY:11.3,scaleX:0.71,scaleY:0.69,rotation:0,skewX:1.8,skewY:7.1,x:256.5,y:-160.6},4).to({regY:11.4,scaleX:0.7,scaleY:0.7,rotation:7.2,skewX:0,skewY:0,x:259.1,y:-160.5},5).to({regY:11.3,scaleX:0.71,scaleY:0.69,rotation:0,skewX:1.8,skewY:7.1,x:256.5,y:-160.6},4).to({regX:7.9,regY:11.4,scaleX:0.7,scaleY:0.7,rotation:133,skewX:0,skewY:0,x:261.4,y:-165.6},5).to({alpha:0},4).wait(1).to({regX:8.2,rotation:7.2,x:163.2,y:-77.2},0).to({rotation:7.2,x:176.8,y:-81.5,alpha:1},7).to({regX:8.1,regY:11.5,x:194.3,y:-95.8},7).to({regY:11.4,x:207.9,y:-110.2},7).to({regX:8.2,x:196.7,y:-103.2},7).wait(44).to({regX:8.1,regY:11.5,x:202.2,y:-107.5},7).to({regY:11.4,x:207.8,y:-111.8},8).to({regX:8.2,regY:11.3,x:201.5,y:-109.1},2).to({regX:8.1,regY:11.4,x:200.1,y:-110.3},6).to({regX:8.2,x:203.5,y:-114.7},4).to({x:218.7,y:-121.8},6).to({regY:11.5,x:217.1,y:-120.2},5).to({regY:11.4,rotation:7.1,x:217.5,y:-120.7},2).wait(1));

	// Symbol 18
	this.instance_8 = new lib.Symbol18copy();
	this.instance_8.parent = this;
	this.instance_8.setTransform(215.1,-111,0.697,0.697,-17.3,0,0,10.2,10.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({scaleX:0.7,scaleY:0.7,x:216.1,y:-111.9},5).to({regX:10.1,rotation:12.7,x:220,y:-114.8},5).to({rotation:-17.3,x:234,y:-133.3},8).to({rotation:12.7,x:236,y:-133.8},7).to({regX:10.2,rotation:-17.3,x:257.5,y:-150.4},8).to({regX:10.1,x:256.8,y:-148.8},5).to({regX:10.2,x:256.4,y:-150.6},5).wait(1).to({x:252.4,y:-147.1},6).to({regY:10.6,scaleX:0.68,scaleY:0.72,rotation:0,skewX:-22.1,skewY:-17.8,x:254.8,y:-150.6},4).to({regY:10.5,scaleX:0.7,scaleY:0.7,rotation:-17.3,skewX:0,skewY:0,x:256.4},5).to({regY:10.6,scaleX:0.68,scaleY:0.72,rotation:0,skewX:-22.1,skewY:-17.8,x:254.8},4).to({regX:10.1,regY:10.3,scaleX:0.7,scaleY:0.7,rotation:87.7,skewX:0,skewY:0,x:253.5,y:-169.2},5).to({alpha:0},4).wait(1).to({regX:10.2,regY:10.5,rotation:-17.3,x:160.5,y:-67.3},0).to({regX:10.1,rotation:12.7,x:170.4,y:-67.8,alpha:1},7).to({rotation:-17.3,x:191.7,y:-86},7).to({regY:10.4,rotation:12.7,x:201.6,y:-96.6},7).to({regY:10.5,rotation:-17.3,x:194,y:-93.3},7).wait(44).to({rotation:12.7,x:196,y:-93.8},7).to({regX:10.2,rotation:-17.3,x:205.2,y:-102},8).to({regX:10.1,regY:10.3,rotation:-8.6,x:197.7,y:-98.2},2).to({regX:10.2,regY:10.5,rotation:-17.3,x:197.5,y:-100.4},6).to({regX:10.1,x:200.8,y:-104.8},4).to({regX:10.2,x:216.1,y:-111.9},6).to({regX:10.1,x:214.4,y:-110.4},5).to({regX:10.2,x:214.9,y:-110.8},2).wait(1));

	// Layer 3
	this.instance_9 = new lib.Symbol25copy();
	this.instance_9.parent = this;
	this.instance_9.setTransform(331.9,-226.8,0.52,0.52,7.2,0,0,22.4,25.6);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(36).to({_off:false},0).to({regX:22.3,scaleX:1.41,scaleY:1.41,x:333.8,y:-223.6,alpha:0},3).to({_off:true},1).wait(62).to({_off:false,regX:22.4,scaleX:0.52,scaleY:0.52,x:302.9,y:-177.8,alpha:1},0).to({regX:22.3,scaleX:1.41,scaleY:1.41,x:296.8,y:-175.6,alpha:0},3).to({_off:true},1).wait(80));

	// Symbol 7
	this.instance_10 = new lib.Symbol7copy();
	this.instance_10.parent = this;
	this.instance_10.setTransform(364.7,-287,0.693,0.693,6.5,0,0,11.2,38.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({regX:11,rotation:22.2,x:362.6,y:-279.3},6).to({rotation:7.2,x:360.4,y:-266.5},9).to({regX:11.2,rotation:-3.7,x:354.9,y:-259.1},10).to({regX:11,regY:39,rotation:22.2,x:354.1,y:-240},10).to({regY:38.8,scaleX:0.69,scaleY:0.7,rotation:0,skewX:89.9,skewY:88.7,x:363.2,y:-220.4},3).to({regX:11.2,regY:39,scaleX:0.69,scaleY:0.69,rotation:-3.7,skewX:0,skewY:0,x:345.2,y:-216.5},5).wait(1).to({rotation:5.6,x:336.2,y:-203.5},3).to({regX:11.3,rotation:-129.4,x:282.3,y:-179.1},3).to({regX:11.2,rotation:5.6,x:336.2,y:-203.5},4).to({regX:11.3,rotation:-129.4,x:282.3,y:-179.1},5).to({regX:11.2,rotation:5.6,x:336.2,y:-203.5},4).to({regX:11,regY:38.9,rotation:22.2,x:343,y:-208.1},5).to({regX:11.2,rotation:-3.7,x:336.1,y:-202},9).to({regX:11,rotation:22.2,x:332.6,y:-189.3},10).to({x:333,y:-189.1},1).to({regX:11.2,rotation:-3.7,x:324.1,y:-182},9).to({rotation:6.5,x:320.4,y:-177.7},5).to({regX:10.8,rotation:112.2,x:329.6,y:-137.2},5).to({alpha:0},6).wait(41).to({regX:11,rotation:22.2,x:377.5,y:-317.7},0).to({regX:11.2,regY:39,rotation:-3.7,x:371.8,y:-313.3,alpha:1},9).to({regX:11,regY:38.9,rotation:22.2,x:373,y:-298.1},10).to({regX:11.2,rotation:-3.7,x:366.1,y:-292},9).to({rotation:4,x:365.1,y:-288.2},3).wait(1));

	// Symbol 13
	this.instance_11 = new lib.Symbol13copy();
	this.instance_11.parent = this;
	this.instance_11.setTransform(340.3,-264.3,0.693,0.693,3,0,0,18.2,12.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({regX:18.1,rotation:7.2,x:335.2,y:-259.6},6).to({regY:13,x:334.4,y:-245.5},9).to({regX:18.2,rotation:0.5,x:332.2,y:-234.3},10).to({regX:18.1,regY:12.9,rotation:7.2,x:326.7,y:-220.4},10).to({regX:18,regY:12.8,scaleX:0.69,rotation:0,skewX:27.3,skewY:25.6,x:327.7,y:-221.9},3).to({regX:18.2,regY:13.1,scaleX:0.69,rotation:0.5,skewX:0,skewY:0,x:322.5,y:-191.6},5).wait(1).to({rotation:2.8,x:311.7,y:-180.5},3).to({regY:12.9,rotation:-52.8,x:303.1,y:-183.4},3).to({regY:13.1,rotation:2.8,x:311.7,y:-180.5},4).to({regY:12.9,rotation:-52.8,x:303.1,y:-183.4},5).to({regY:13.1,rotation:2.8,x:311.7,y:-180.5},4).to({regX:18.1,regY:13,rotation:7.2,x:315.6,y:-188.4},5).to({regX:18.2,rotation:0.5,x:313.4,y:-177.1},9).to({regX:18.1,regY:12.9,rotation:7.2,x:305.2,y:-169.6},10).to({regY:13,x:305.6,y:-169.4},1).to({regX:18.2,rotation:0.5,x:301.4,y:-157.1},9).to({rotation:3,x:295.8,y:-154.9},5).to({regX:18.1,regY:12.8,rotation:82.2,x:303,y:-163},5).to({alpha:0},6).wait(41).to({regX:18,regY:12.9,rotation:7.2,x:350.1,y:-298.1},0).to({regX:18.2,regY:13,rotation:0.5,x:349.1,y:-288.6,alpha:1},9).to({regX:18.1,rotation:7.2,x:345.6,y:-278.4},10).to({regX:18.2,rotation:0.5,x:343.4,y:-267.1},9).to({regY:12.9,rotation:2.5,x:341,y:-265},3).wait(1));

	// Symbol 12
	this.instance_12 = new lib.Symbol12copy();
	this.instance_12.parent = this;
	this.instance_12.setTransform(332,-261.1,0.693,0.693,-5.5,0,0,10.8,12.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({regX:10.6,regY:13,rotation:7.2,x:325.1,y:-254.9},6).to({regX:10.7,regY:12.8,rotation:-7.8,x:324.9,y:-240.7},9).to({regY:13,rotation:-14.3,x:325.1,y:-232},10).to({regX:10.5,regY:12.9,rotation:7.2,x:316.6,y:-215.7},10).to({regX:10.6,scaleX:0.7,scaleY:0.69,rotation:0,skewX:31.8,skewY:30.2,x:315.7,y:-219.7},3).to({regX:10.7,regY:13,scaleX:0.69,scaleY:0.69,rotation:-14.3,skewX:0,skewY:0,x:315.4,y:-189.5},5).wait(1).to({rotation:-6.3,x:303.6,y:-177.4},3).to({regX:10.6,rotation:-7.8,x:296.7,y:-170},3).to({regX:10.7,rotation:-6.3,x:303.6,y:-177.4},4).to({regX:10.6,rotation:-7.8,x:296.7,y:-170},5).to({regX:10.7,rotation:-6.3,x:303.6,y:-177.4},4).to({regX:10.5,rotation:7.2,x:305.5,y:-183.7},5).to({regX:10.7,regY:12.9,rotation:-14.3,x:306.3,y:-175},9).to({regX:10.6,regY:13,rotation:7.2,x:295.1,y:-164.9},10).to({regX:10.5,rotation:7.2,x:295.5,y:-164.7},1).to({regX:10.7,regY:12.9,rotation:-14.3,x:294.3,y:-155},9).to({rotation:-5.5,x:287.5,y:-151.8},5).to({regX:10.6,regY:13,rotation:82.2,x:300.7,y:-172.9},5).to({alpha:0},6).wait(41).to({regX:10.5,rotation:7.2,x:340,y:-293.3},0).to({regX:10.7,rotation:-14.3,x:342.1,y:-286.3,alpha:1},9).to({regX:10.5,rotation:7.2,x:335.5,y:-273.7},10).to({regX:10.7,regY:12.9,rotation:-14.3,x:336.3,y:-265},9).to({regY:12.8,rotation:-7.8,x:333,y:-262},3).wait(1));

	// Symbol 11
	this.instance_13 = new lib.Symbol11copy();
	this.instance_13.parent = this;
	this.instance_13.setTransform(345.2,-253.5,0.691,0.691,25.1,0,0,8.1,11.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({regY:11.9,scaleX:0.69,scaleY:0.69,rotation:7.2,x:342.1,y:-248.2},6).to({regX:8.2,regY:12,rotation:-22.8,x:341.2,y:-237.1},9).to({regX:8.1,regY:11.9,rotation:37.2,x:335.8,y:-224.1},10).to({regX:8,regY:12,rotation:7.2,x:333.5,y:-209},10).to({regX:8.1,scaleX:0.69,scaleY:0.7,rotation:0,skewX:18.6,skewY:17.1,x:332.2,y:-206.2},3).to({regX:8,regY:11.8,scaleX:0.69,scaleY:0.69,rotation:37.2,skewX:0,skewY:0,x:326.1,y:-181.6},5).wait(1).to({regX:8.1,scaleX:0.69,scaleY:0.69,rotation:-18.7,x:318.2,y:-175.1},3).to({regY:12,scaleX:0.69,scaleY:0.69,rotation:-52.8,x:312.3,y:-177.6},3).to({regY:11.8,scaleX:0.69,scaleY:0.69,rotation:-18.7,x:318.2,y:-175.1},4).to({regY:12,scaleX:0.69,scaleY:0.69,rotation:-52.8,x:312.3,y:-177.6},5).to({regY:11.8,scaleX:0.69,scaleY:0.69,rotation:-18.7,x:318.2,y:-175.1},4).to({regX:8,regY:12,scaleX:0.69,scaleY:0.69,rotation:7.2,x:322.5,y:-177},5).to({regX:8.1,regY:11.9,rotation:37.2,x:317.1,y:-167},9).to({rotation:7.2,x:312.1,y:-158.2},10).to({regX:8,regY:12,rotation:7.2,x:312.5,y:-158},1).to({regX:8.1,regY:11.9,rotation:37.2,x:305.1,y:-147},9).to({regY:11.8,scaleX:0.69,scaleY:0.69,rotation:25.1,x:300.8,y:-144.3},5).to({regX:8,regY:12,scaleX:0.69,scaleY:0.69,rotation:127.2,x:293.7,y:-161.9},5).to({rotation:127.2,alpha:0},6).wait(41).to({rotation:7.2,x:357,y:-286.6},0).to({regX:8.1,regY:11.9,rotation:37.2,x:352.8,y:-278.4,alpha:1},9).to({regX:8,regY:12,rotation:7.2,x:352.5,y:-267},10).to({regX:8.1,regY:11.9,rotation:37.2,x:347.1,y:-257},9).to({regY:11.8,scaleX:0.69,scaleY:0.69,rotation:28.1,x:345.7,y:-254.4},3).wait(1));

	// Symbol 10
	this.instance_14 = new lib.Symbol10copy();
	this.instance_14.parent = this;
	this.instance_14.setTransform(345.2,-281.5,0.693,0.693,5,0,0,23.2,23.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).to({regX:22.9,rotation:7.2,x:341,y:-276.7},6).to({regX:23.1,x:340.4,y:-262.7},9).to({regX:23.2,rotation:3.8,x:336.6,y:-251.8},10).to({regX:23.1,rotation:7.2,x:332.7,y:-237.4},10).to({rotation:0,skewX:22.8,skewY:21.2,x:339.7,y:-237},3).to({regX:23.2,rotation:3.8,skewX:0,skewY:0,x:326.9,y:-209.2},5).wait(1).to({regY:23.3,rotation:5,x:316.7,y:-198},3).to({regX:23.1,regY:23.4,rotation:-37.8,x:292.9,y:-199.5},3).to({regX:23.2,regY:23.3,rotation:5,x:316.7,y:-198},4).to({regX:23.1,regY:23.4,rotation:-37.8,x:292.9,y:-199.5},5).to({regX:23.2,regY:23.3,rotation:5,x:316.7,y:-198},4).to({regX:23.1,regY:23.4,rotation:7.2,x:321.6,y:-205.5},5).to({regX:23.2,rotation:3.8,x:317.8,y:-194.6},9).to({regX:22.9,rotation:7.2,x:311,y:-186.7},10).to({regX:23.1,x:311.6,y:-186.5},1).to({regX:23.2,rotation:3.8,x:305.8,y:-174.6},9).to({rotation:5,x:300.7,y:-172.3},5).to({regX:22.9,rotation:82.2,x:320.9,y:-161.7},5).to({alpha:0},6).wait(41).to({regX:23.1,rotation:7.2,x:356.1,y:-315.1},0).to({regX:23.2,rotation:3.8,x:353.6,y:-306.1,alpha:1},9).to({regX:23.1,rotation:7.2,x:351.6,y:-295.5},10).to({regX:23.2,rotation:3.8,x:347.8,y:-284.6},9).to({rotation:4.8,x:345.8,y:-282.2},3).wait(1));

	// Symbol 8
	this.instance_15 = new lib.Symbol8copy();
	this.instance_15.parent = this;
	this.instance_15.setTransform(359.1,-279.6,0.691,0.691,60.7,0,0,9.9,10.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).to({regX:10,regY:10.9,scaleX:0.69,scaleY:0.69,rotation:67.2,x:354.9,y:-273},6).to({regX:10.1,regY:11,x:354,y:-258.9},9).to({regX:10,regY:10.8,rotation:56.3,x:350.7,y:-250.9},10).to({rotation:67.2,x:346.4,y:-233.8},10).to({scaleX:0.68,scaleY:0.7,rotation:0,skewX:64.1,skewY:64.8,y:-231.6},3).to({scaleX:0.69,scaleY:0.69,rotation:56.3,skewX:0,skewY:0,x:341,y:-208.4},5).wait(1).to({regX:10.1,scaleX:0.69,scaleY:0.69,rotation:60.4,x:330.8,y:-196},3).to({regX:9.9,regY:10.9,scaleX:0.69,scaleY:0.69,rotation:52.2,x:305.8,y:-196.2},3).to({regX:10.1,regY:10.8,scaleX:0.69,scaleY:0.69,rotation:60.4,x:330.8,y:-196},4).to({regX:9.9,regY:10.9,scaleX:0.69,scaleY:0.69,rotation:52.2,x:305.8,y:-196.2},5).to({regX:10.1,regY:10.8,scaleX:0.69,scaleY:0.69,rotation:60.4,x:330.8,y:-196},4).to({regX:10,scaleX:0.69,scaleY:0.69,rotation:67.2,x:335.4,y:-201.9},5).to({regY:10.9,rotation:56.3,x:331.9,y:-193.7},9).to({rotation:67.2,x:324.9,y:-183},10).to({regY:10.8,x:325.4,y:-182.9},1).to({regY:10.9,rotation:56.3,x:319.9,y:-173.7},9).to({regX:9.9,regY:10.8,scaleX:0.69,scaleY:0.69,rotation:60.7,x:314.8,y:-170.3},5).to({regX:10,regY:10.9,scaleX:0.69,scaleY:0.69,rotation:142.2,x:320.9,y:-147.4},5).to({alpha:0},6).wait(41).to({regY:10.8,rotation:67.2,x:369.9,y:-311.5},0).to({rotation:56.3,x:367.7,y:-305.2,alpha:1},9).to({rotation:67.2,x:365.4,y:-291.9},10).to({regY:10.9,rotation:56.3,x:361.9,y:-283.7},9).to({regY:10.8,scaleX:0.69,scaleY:0.69,rotation:59.7,x:359.8,y:-280.5},3).wait(1));

	// Symbol 9
	this.instance_16 = new lib.Symbol9copy();
	this.instance_16.parent = this;
	this.instance_16.setTransform(327.7,-283.1,0.694,0.691,0,-28,-23.8,25.4,19.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).to({regX:25.1,regY:19.9,scaleX:0.69,scaleY:0.69,rotation:-14.3,skewX:0,skewY:0,x:323.9,y:-281.3},6).to({regX:25.2,rotation:0.7,x:323.3,y:-268},9).to({regX:25.4,scaleX:0.7,rotation:0,skewX:-37.2,skewY:-30.5,x:319,y:-251.3},10).to({regX:25.1,regY:19.8,scaleX:0.69,rotation:-14.3,skewX:0,skewY:0,x:315.4,y:-242.1},10).to({regX:25.2,regY:19.7,scaleX:0.7,scaleY:0.69,rotation:0,skewX:9.7,skewY:10.5,x:322.5,y:-247.4},3).to({regX:25.3,regY:19.9,scaleY:0.69,skewX:-37.2,skewY:-30.5,x:309.2,y:-208.7},5).wait(1).to({regX:25.4,scaleX:0.7,scaleY:0.69,skewX:-28.8,skewY:-24.6,x:299.2,y:-199.4},3).to({regX:25.2,scaleX:0.69,scaleY:0.69,rotation:-59.3,skewX:0,skewY:0,x:277.5,y:-190.5},3).to({regX:25.4,scaleX:0.7,scaleY:0.69,rotation:0,skewX:-28.8,skewY:-24.6,x:299.2,y:-199.4},4).to({regX:25.2,scaleX:0.69,scaleY:0.69,rotation:-59.3,skewX:0,skewY:0,x:277.5,y:-190.5},5).to({regX:25.4,scaleX:0.7,scaleY:0.69,rotation:0,skewX:-28.8,skewY:-24.6,x:299.2,y:-199.4},4).to({regX:25.1,scaleX:0.69,scaleY:0.69,rotation:-14.3,skewX:0,skewY:0,x:304.4,y:-210.1},5).to({regX:25.3,scaleX:0.7,rotation:0,skewX:-37.2,skewY:-30.5,x:300.2,y:-194.1},9).to({regX:25.1,scaleX:0.69,rotation:-14.3,skewX:0,skewY:0,x:293.9,y:-191.3},10).to({x:294.4,y:-191.1},1).to({regX:25.3,scaleX:0.7,rotation:0,skewX:-37.2,skewY:-30.5,x:288.2,y:-174.1},9).to({regX:25.4,scaleX:0.7,scaleY:0.69,skewX:-28,skewY:-24,x:283.3,y:-173.8},5).to({regX:25.1,regY:19.8,scaleX:0.69,scaleY:0.69,rotation:30.7,skewX:0,skewY:0,x:321,y:-174.5},5).to({alpha:0},6).wait(41).to({rotation:-14.3,x:338.9,y:-319.7},0).to({regX:25.4,regY:19.9,scaleX:0.7,rotation:0,skewX:-37.2,skewY:-30.5,x:335.9,y:-305.6,alpha:1},9).to({regX:25.1,scaleX:0.69,rotation:-14.3,skewX:0,skewY:0,x:334.4,y:-300.1},10).to({regX:25.3,scaleX:0.7,rotation:0,skewX:-37.2,skewY:-30.5,x:330.2,y:-284.1},9).to({regX:25.4,regY:19.8,scaleX:0.7,scaleY:0.69,skewX:-30.3,skewY:-25.6,x:328.4,y:-283.3},3).wait(1));

	// Layer 2
	this.instance_17 = new lib.Symbol25copy();
	this.instance_17.parent = this;
	this.instance_17.setTransform(328.9,-229.1,0.52,0.52,7.2,0,0,22.4,25.7);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(111).to({_off:false},0).to({regX:22.3,scaleX:1.41,scaleY:1.41,x:328.8,y:-229,alpha:0},3).to({_off:true},1).wait(18).to({_off:false,regX:22.4,regY:25.6,scaleX:0.52,scaleY:0.52,x:311.9,y:-185.9,alpha:1},0).to({regX:22.3,regY:25.7,scaleX:1.41,scaleY:1.41,x:307.7,y:-181.3,alpha:0},3).to({_off:true},1).wait(32).to({_off:false,regX:22.4,regY:25.6,scaleX:0.52,scaleY:0.52,x:245.2,y:-137.4,alpha:1},0).to({regX:22.3,scaleX:1.41,scaleY:1.41,x:250.5,y:-147.6,alpha:0},3).to({_off:true},1).wait(7).to({_off:false,regX:22.4,scaleX:0.52,scaleY:0.52,x:262.9,y:-157.8,alpha:1},0).to({regX:22.3,scaleX:1.41,scaleY:1.41,x:286.8,y:-155.6,alpha:0},3).to({_off:true},1).wait(2));

	// Symbol 7
	this.instance_18 = new lib.Symbol7copy();
	this.instance_18.parent = this;
	this.instance_18.setTransform(317.7,-133.6,0.492,0.467,0,121.8,126.9,10.6,38.4);
	this.instance_18.alpha = 0.898;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).to({regX:10.7,regY:38.2,scaleX:0.49,scaleY:0.47,skewX:121.9,skewY:127,x:321.5,y:-134.9,alpha:0},9).to({_off:true},1).wait(34).to({_off:false,regX:11,regY:38.9,scaleX:0.69,scaleY:0.69,rotation:22.2,skewX:0,skewY:0,x:377.5,y:-317.7},0).to({regX:11.2,regY:39,rotation:-3.7,x:371.8,y:-313.3,alpha:1},9).to({regX:11,regY:38.9,rotation:22.2,x:373,y:-298.1},10).to({regX:11.2,rotation:-3.7,x:366.1,y:-292},9).to({regX:11,rotation:22.2,x:362.6,y:-279.3},10).to({rotation:7.2,x:360.4,y:-266.5},9).to({regX:11.2,rotation:-3.7,x:354.9,y:-259.1},9).to({regX:11,regY:39,rotation:22.2,x:354.1,y:-240},11).to({regY:38.8,scaleX:0.69,scaleY:0.7,rotation:0,skewX:89.9,skewY:88.7,x:363.2,y:-220.4},3).to({regX:11.2,regY:39,scaleX:0.69,scaleY:0.69,rotation:-3.7,skewX:0,skewY:0,x:345.2,y:-216.5},6).to({regY:38.9,scaleX:0.69,scaleY:0.69,rotation:9.1,x:339.8,y:-207},5).to({regY:39,scaleX:0.69,scaleY:0.69,rotation:11.8,x:338.6,y:-204.9},1).to({regX:11,regY:38.9,rotation:22.2,x:334.1,y:-197.3},4).to({regX:11.1,rotation:13.5,x:329,y:-198.2},3).to({regX:11.2,scaleX:0.68,scaleY:0.7,rotation:0,skewX:23.5,skewY:20.1,x:331.9,y:-193.1},3).to({regY:39,scaleX:0.69,scaleY:0.69,rotation:-3.7,skewX:0,skewY:0,x:318.7,y:-200},3).to({regX:10.9,rotation:22.2,x:317.1,y:-185.2},6).to({regY:38.8,rotation:37.2,x:310.8,y:-175},6).to({regX:10.8,regY:38.7,scaleX:0.69,scaleY:0.69,rotation:43.5,x:311.8,y:-173.3},2).to({regX:11.2,regY:38.9,scaleX:0.69,scaleY:0.69,rotation:-22.8,x:272,y:-181.6},5).to({scaleX:0.56,scaleY:0.63,rotation:0.8,x:265.6,y:-162.5},1).to({regX:9.8,regY:39.6,scaleX:0.51,scaleY:0.69,rotation:0,skewX:-26.6,skewY:170,x:254.4,y:-148.5},1).to({regX:10.8,regY:39.1,scaleX:1.01,scaleY:0.69,skewX:-77.6,skewY:102.4,x:234.7,y:-119.3},1).to({regX:11.1,regY:38.9,scaleX:0.69,rotation:37.2,skewX:0,skewY:0,x:277.7,y:-148.4},7).to({regY:38.8,rotation:47.1,x:291.6,y:-154.2},4).to({regY:39,rotation:22.2,x:283.9,y:-159.3},6).wait(2).to({rotation:7.2,x:300.7,y:-170.7},0).to({regX:10.6,regY:38.4,scaleX:0.49,scaleY:0.47,rotation:0,skewX:121.9,skewY:127,x:317.2,y:-133.5},5,cjs.Ease.get(0.99)).wait(1));

	// Symbol 13
	this.instance_19 = new lib.Symbol13copy();
	this.instance_19.parent = this;
	this.instance_19.setTransform(289.4,-158.4,0.645,0.69,0,90.5,105.3,18.2,12.2);
	this.instance_19.alpha = 0.898;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).to({regX:18.1,regY:12.3,skewY:105.5,x:293.1,y:-159.7,alpha:0},9).to({_off:true},1).wait(34).to({_off:false,regX:18,regY:12.9,scaleX:0.69,scaleY:0.69,rotation:7.2,skewX:0,skewY:0,x:350.1,y:-298.1},0).to({regX:18.2,regY:13,rotation:0.5,x:349.1,y:-288.6,alpha:1},9).to({regX:18.1,rotation:7.2,x:345.6,y:-278.4},10).to({regX:18.2,rotation:0.5,x:343.4,y:-267.1},9).to({regX:18.1,regY:12.9,rotation:7.2,x:335.2,y:-259.6},10).to({regY:13,x:334.4,y:-245.5},9).to({regX:18.2,rotation:0.5,x:332.2,y:-234.3},9).to({regX:18.1,regY:12.9,rotation:7.2,x:326.7,y:-220.4},11).to({regX:18,regY:12.8,scaleX:0.69,rotation:0,skewX:27.3,skewY:25.6,x:327.7,y:-221.9},3).to({regX:18.2,regY:13.1,scaleX:0.69,rotation:0.5,skewX:0,skewY:0,x:322.5,y:-191.6},6).to({regY:13,rotation:3.8,x:314.6,y:-184.7},5).to({regX:18.1,rotation:4.5,x:313,y:-183.2},1).to({regY:12.9,rotation:7.2,x:306.7,y:-177.6},4).to({regX:17.9,regY:13,rotation:5.2,x:303.1,y:-176.8},3).to({regX:18.2,regY:12.9,scaleX:0.7,scaleY:0.69,rotation:0,skewX:6.7,skewY:3,x:302.5,y:-176.1},3).to({regY:13,scaleX:0.69,scaleY:0.69,rotation:0.5,skewX:0,skewY:0,x:296,y:-175.3},3).to({regX:18.1,regY:12.9,rotation:7.2,x:289.7,y:-165.5},6).to({x:278.5,y:-156.8},6).to({regX:18.2,x:279.1,y:-156.2},2).to({regX:18.1,regY:13,rotation:-22.8,x:254.9,y:-139},5).to({rotation:7.2,x:233.5,y:-116.1},3).to({regY:12.9,rotation:7.2,x:237,y:-123.3},7).to({regX:18,regY:12.8,rotation:25.2,x:246.4,y:-137.2},4).to({regX:18.1,regY:13,rotation:7.2,x:261.4,y:-137.7},6).wait(2).to({rotation:7.2,x:264.5,y:-142.4},0).to({regX:18.2,regY:12.3,scaleX:0.65,scaleY:0.69,rotation:0,skewX:90.5,skewY:105.5,x:288.8,y:-158.2},5,cjs.Ease.get(0.99)).wait(1));

	// Symbol 12
	this.instance_20 = new lib.Symbol12copy();
	this.instance_20.parent = this;
	this.instance_20.setTransform(282.6,-165.6,0.658,0.825,0,68.9,69.9,10.6,12.4);
	this.instance_20.alpha = 0.898;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).to({regX:10.5,scaleX:0.66,skewX:68.8,x:286.4,y:-166.9,alpha:0},9).to({_off:true},1).wait(34).to({_off:false,regY:13,scaleX:0.69,scaleY:0.69,rotation:7.2,skewX:0,skewY:0,x:340,y:-293.3},0).to({regX:10.7,rotation:-14.3,x:342.1,y:-286.3,alpha:1},9).to({regX:10.5,rotation:7.2,x:335.5,y:-273.7},10).to({regX:10.7,regY:12.9,rotation:-14.3,x:336.3,y:-265},9).to({regX:10.6,regY:13,rotation:7.2,x:325.1,y:-254.9},10).to({regX:10.7,regY:12.8,rotation:-7.8,x:324.9,y:-240.7},9).to({regY:13,rotation:-14.3,x:325.1,y:-232},9).to({regX:10.5,regY:12.9,rotation:7.2,x:316.6,y:-215.7},11).to({regX:10.6,scaleX:0.7,scaleY:0.69,rotation:0,skewX:31.8,skewY:30.2,x:315.7,y:-219.7},3).to({regX:10.7,regY:13,scaleX:0.69,scaleY:0.69,rotation:-14.3,skewX:0,skewY:0,x:315.4,y:-189.5},6).to({regX:10.8,rotation:-3.3,x:306,y:-181.3},5).to({rotation:-1.3,x:304.2,y:-179.6},1).to({regX:10.5,rotation:7.2,x:296.6,y:-172.9},4).to({regX:10.7,regY:12.9,rotation:0.2,x:294.1},3).to({regY:12.8,scaleX:0.7,scaleY:0.68,rotation:0,skewX:26.6,skewY:23.2,x:287.7,y:-174.1},3).to({regY:13,scaleX:0.69,scaleY:0.69,rotation:-14.3,skewX:0,skewY:0,x:288.9,y:-173},3).to({regX:10.6,rotation:-22.8,x:281.3,y:-161.6},6).to({regY:12.8,rotation:37.2,x:267.7,y:-153.3},6).to({scaleX:0.69,scaleY:0.69,rotation:28.5,x:268.6},2).to({regY:12.9,scaleX:0.69,scaleY:0.69,rotation:-22.8,x:248.5,y:-130},5).to({rotation:7.2,x:223.5,y:-111.5},3).to({regX:10.7,regY:13,rotation:-37.8,x:230.7,y:-118.9},7).to({regY:12.6,rotation:68.7,x:234.8,y:-142.5},4).to({regX:10.6,regY:12.9,rotation:7.2,x:251.5,y:-133.2},6).wait(2).to({regX:10.5,regY:13,rotation:7.2,x:254.4,y:-137.7},0).to({regX:10.6,regY:12.4,scaleX:0.66,scaleY:0.83,rotation:0,skewX:68.8,skewY:69.9,x:282.2,y:-165.4},5,cjs.Ease.get(0.99)).wait(1));

	// Symbol 11
	this.instance_21 = new lib.Symbol11copy();
	this.instance_21.parent = this;
	this.instance_21.setTransform(278.4,-155.9,0.682,1.112,0,111.5,117.1,7.9,11.8);
	this.instance_21.alpha = 0.898;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).to({scaleX:0.68,scaleY:1.11,skewX:111.6,x:282.1,y:-157.3,alpha:0},9).to({_off:true},1).wait(34).to({_off:false,regX:8,regY:12,scaleX:0.69,scaleY:0.69,rotation:7.2,skewX:0,skewY:0,x:357,y:-286.6},0).to({regX:8.1,regY:11.9,rotation:37.2,x:352.8,y:-278.4,alpha:1},9).to({regX:8,regY:12,rotation:7.2,x:352.5,y:-267},10).to({regX:8.1,regY:11.9,rotation:37.2,x:347.1,y:-257},9).to({rotation:7.2,x:342.1,y:-248.2},10).to({regX:8.2,regY:12,rotation:-22.8,x:341.2,y:-237.1},9).to({regX:8.1,regY:11.9,rotation:37.2,x:335.8,y:-224.1},9).to({regX:8,regY:12,rotation:7.2,x:333.5,y:-209},11).to({regX:8.1,scaleX:0.69,scaleY:0.7,rotation:0,skewX:18.6,skewY:17.1,x:332.2,y:-206.2},3).to({regX:8,regY:11.8,scaleX:0.69,scaleY:0.69,rotation:37.2,skewX:0,skewY:0,x:326.1,y:-181.6},6).to({regX:8.1,scaleX:0.69,scaleY:0.69,rotation:22.1,x:320,y:-173.9},5).to({regX:8,rotation:19.1,x:318.7,y:-172.5},1).to({regX:8.1,regY:11.9,scaleX:0.69,scaleY:0.69,rotation:7.2,x:313.6,y:-166.2},4).to({regY:12,rotation:17,x:308.9,y:-165.8},3).to({regX:8.2,regY:11.8,scaleX:0.68,scaleY:0.71,rotation:0,skewX:30.3,skewY:27.5,x:306.7,y:-165.7},3).to({regX:8.1,scaleX:0.69,scaleY:0.69,rotation:37.2,skewX:0,skewY:0,x:299.7,y:-165.1},3).to({regX:8.2,regY:12,rotation:-22.8,x:297.7,y:-156.9},6).to({regX:8.1,regY:11.8,rotation:7.2,x:285.4,y:-145.5},6).to({regX:8.2,regY:11.9,rotation:7.2,x:286.1,y:-145.8},2).to({regX:8,rotation:-22.8,x:266.5,y:-132.6},5).to({regX:8.1,rotation:7.2,x:240.4,y:-104.8},3).to({regY:11.8,rotation:22.2,x:241.4,y:-112.3},7).to({regX:8,regY:11.9,rotation:16.7,x:250.3,y:-124.5},4).to({regY:12,rotation:7.2,x:268.3,y:-126.4},6).wait(2).to({regX:8.1,regY:11.9,rotation:7.2,x:271.5,y:-131.1},0).to({regX:7.9,regY:11.8,scaleX:0.68,scaleY:1.11,rotation:0,skewX:111.6,skewY:117.1,x:277.9,y:-155.8},5,cjs.Ease.get(0.99)).wait(1));

	// Symbol 10
	this.instance_22 = new lib.Symbol10copy();
	this.instance_22.parent = this;
	this.instance_22.setTransform(305.1,-157.6,0.592,0.655,0,68.9,69.9,22.8,23);
	this.instance_22.alpha = 0.898;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).to({regX:22.9,regY:23.1,scaleX:0.59,scaleY:0.66,skewX:68.8,x:308.8,y:-158.9,alpha:0},9).to({_off:true},1).wait(34).to({_off:false,regX:23.1,regY:23.4,scaleX:0.69,scaleY:0.69,rotation:7.2,skewX:0,skewY:0,x:356.1,y:-315.1},0).to({regX:23.2,rotation:3.8,x:353.6,y:-306.1,alpha:1},9).to({regX:23.1,rotation:7.2,x:351.6,y:-295.5},10).to({regX:23.2,rotation:3.8,x:347.8,y:-284.6},9).to({regX:22.9,rotation:7.2,x:341,y:-276.7},10).to({regX:23.1,x:340.4,y:-262.7},9).to({regX:23.2,rotation:3.8,x:336.6,y:-251.8},9).to({regX:23.1,rotation:7.2,x:332.7,y:-237.4},11).to({rotation:0,skewX:22.8,skewY:21.2,x:339.7,y:-237},3).to({regX:23.2,rotation:3.8,skewX:0,skewY:0,x:326.9,y:-209.2},6).to({regY:23.3,rotation:5.3,x:319.8,y:-202.1},5).to({regY:23.2,rotation:5.8,x:318.4,y:-200.6},1).to({regX:23.1,regY:23.4,rotation:7.2,x:312.7,y:-194.7},4).to({rotation:6.2,x:308.6,y:-194.1},3).to({regY:23.2,scaleX:0.68,scaleY:0.7,rotation:0,skewX:23.5,skewY:20.2,x:311.5,y:-192.7},3).to({regY:23.4,scaleX:0.69,scaleY:0.69,rotation:3.8,skewX:0,skewY:0,x:300.4,y:-192.8},3).to({rotation:7.2,x:295.7,y:-182.5},6).to({x:284.5,y:-173.9},6).to({x:283.8,y:-171.9},2).to({rotation:-22.8,x:251.5,y:-156.8},5).to({rotation:12.4,x:241.5,y:-131.8},3).to({rotation:7.2,x:242.9,y:-140.3},7).to({regY:23.3,rotation:28.4,x:257.8,y:-152.8},4).to({regY:23.4,rotation:7.2,x:267.5,y:-154.9},6).wait(2).to({rotation:7.2,x:270.6,y:-159.5},0).to({regX:22.9,regY:23.1,scaleX:0.59,scaleY:0.66,rotation:0,skewX:68.8,skewY:69.9,x:304.6,y:-157.4},5,cjs.Ease.get(0.99)).wait(1));

	// Symbol 8
	this.instance_23 = new lib.Symbol8copy();
	this.instance_23.parent = this;
	this.instance_23.setTransform(311.2,-146.9,0.578,0.617,0,41.4,36.9,10.4,10.3);
	this.instance_23.alpha = 0.898;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).to({regY:10.4,scaleX:0.58,scaleY:0.62,skewX:41.5,skewY:37,x:315,y:-148.2,alpha:0},9).to({_off:true},1).wait(34).to({_off:false,regX:10,regY:10.8,scaleX:0.69,scaleY:0.69,rotation:67.2,skewX:0,skewY:0,x:369.9,y:-311.5},0).to({rotation:56.3,x:367.7,y:-305.2,alpha:1},9).to({rotation:67.2,x:365.4,y:-291.9},10).to({regY:10.9,rotation:56.3,x:361.9,y:-283.7},9).to({rotation:67.2,x:354.9,y:-273},10).to({regX:10.1,regY:11,x:354,y:-258.9},9).to({regX:10,regY:10.8,rotation:56.3,x:350.7,y:-250.9},9).to({rotation:67.2,x:346.4,y:-233.8},11).to({scaleX:0.68,scaleY:0.7,rotation:0,skewX:64.1,skewY:64.8,y:-231.6},3).to({scaleX:0.69,scaleY:0.69,rotation:56.3,skewX:0,skewY:0,x:341,y:-208.4},6).to({regX:10.1,scaleX:0.69,scaleY:0.69,rotation:61.9,x:333.9,y:-199.7},5).to({scaleX:0.69,scaleY:0.69,rotation:62.9,x:332.4,y:-197.9},1).to({regX:10,regY:10.9,scaleX:0.69,scaleY:0.69,rotation:67.2,x:326.5,y:-191},4).to({regX:9.9,regY:10.8,scaleX:0.69,scaleY:0.69,rotation:63.6,x:322.5,y:-191.3},3).to({regX:10.1,regY:10.6,scaleX:0.67,scaleY:0.71,rotation:0,skewX:61.2,skewY:62.4,x:322.7,y:-191.5},3).to({regX:10,regY:10.8,scaleX:0.69,scaleY:0.69,rotation:56.3,skewX:0,skewY:0,x:314.5,y:-191.9},3).to({rotation:67.2,x:309.5,y:-178.9},6).to({regY:10.9,x:298.3,y:-170.2},6).to({regY:10.8,scaleX:0.69,scaleY:0.69,rotation:50.1,x:299.9,y:-171.2},2).to({regX:10.2,regY:11,scaleX:0.69,scaleY:0.69,rotation:-22.8,x:267.3,y:-164.1},5).to({regX:10,regY:10.8,rotation:87.4,x:255.6,y:-124.2},3).to({regX:10.1,rotation:7.2,x:260.2,y:-138.8},7).to({rotation:16.7,x:270.6,y:-148.2},4).to({regX:10,rotation:67.2,x:282,y:-151.1},6).wait(2).to({regX:10.1,regY:11,rotation:7.2,x:287.9,y:-157.9},0).to({regX:10.3,regY:10.3,scaleX:0.58,scaleY:0.62,rotation:0,skewX:41.5,skewY:37,x:310.8,y:-146.8},5,cjs.Ease.get(0.99)).wait(1));

	// Symbol 9
	this.instance_24 = new lib.Symbol9copy();
	this.instance_24.parent = this;
	this.instance_24.setTransform(311.8,-165.7,0.494,0.638,0,51.6,60.1,24.9,19.4);
	this.instance_24.alpha = 0.898;

	this.timeline.addTween(cjs.Tween.get(this.instance_24).to({regY:19.5,scaleX:0.5,scaleY:0.64,skewX:51.5,skewY:60,x:315.6,y:-167,alpha:0},9).to({_off:true},1).wait(34).to({_off:false,regX:25.1,regY:19.8,scaleX:0.69,scaleY:0.69,rotation:-14.3,skewX:0,skewY:0,x:338.9,y:-319.7},0).to({regX:25.4,regY:19.9,scaleX:0.7,rotation:0,skewX:-37.2,skewY:-30.5,x:335.9,y:-305.6,alpha:1},9).to({regX:25.1,scaleX:0.69,rotation:-14.3,skewX:0,skewY:0,x:334.4,y:-300.1},10).to({regX:25.3,scaleX:0.7,rotation:0,skewX:-37.2,skewY:-30.5,x:330.2,y:-284.1},9).to({regX:25.1,scaleX:0.69,rotation:-14.3,skewX:0,skewY:0,x:323.9,y:-281.3},10).to({regX:25.2,rotation:0.7,x:323.3,y:-268},9).to({regX:25.4,scaleX:0.7,rotation:0,skewX:-37.2,skewY:-30.5,x:319,y:-251.3},9).to({regX:25.1,regY:19.8,scaleX:0.69,rotation:-14.3,skewX:0,skewY:0,x:315.4,y:-242.1},11).to({regX:25.2,regY:19.7,scaleX:0.7,scaleY:0.69,rotation:0,skewX:9.7,skewY:10.5,x:322.5,y:-247.4},3).to({regX:25.3,regY:19.9,scaleY:0.69,skewX:-37.2,skewY:-30.5,x:309.2,y:-208.7},6).to({regX:25.4,scaleX:0.69,scaleY:0.69,skewX:-25.6,skewY:-22.3,x:302.4,y:-204.1},5).to({regY:20,skewX:-23.3,skewY:-20.8,x:301.1,y:-203.1},1).to({regX:25.1,regY:19.8,scaleX:0.69,scaleY:0.69,rotation:-14.3,skewX:0,skewY:0,x:295.5,y:-199.3},4).to({regX:25.2,scaleX:0.69,scaleY:0.69,rotation:0,skewX:-21.8,skewY:-19.6,x:291.3,y:-197},3).to({regX:25.3,scaleX:0.71,scaleY:0.68,skewX:-11.1,skewY:-9.8,x:295.1,y:-198.3},3).to({regX:25.4,regY:19.9,scaleX:0.7,scaleY:0.69,skewX:-37.2,skewY:-30.5,x:282.8,y:-192.2},3).to({regX:25.1,scaleX:0.69,rotation:-14.3,skewX:0,skewY:0,x:278.5,y:-187.1},6).to({regX:25.2,rotation:-29.3,x:266.8,y:-174},6).to({regX:25.1,regY:19.7,scaleX:0.69,scaleY:0.69,rotation:11.2,x:266.2,y:-178.7},2).to({regX:25.2,regY:19.9,scaleX:0.69,scaleY:0.69,rotation:-22.8,x:232.9,y:-158.4},5).to({regX:25.1,regY:19.8,rotation:27.4,x:232.1,y:-146.8},3).to({regY:19.9,rotation:-13.5,x:226.5,y:-143.7},7).to({regY:19.8,rotation:46.7,x:251.2,y:-169.4},4).to({regY:19.9,rotation:-22.8,x:252.1,y:-158.1},6).wait(2).to({regX:25.2,rotation:7.2,x:255.2,y:-170.2},0).to({regX:24.9,regY:19.4,scaleX:0.5,scaleY:0.64,rotation:0,skewX:51.5,skewY:60,x:311.4,y:-165.6},5,cjs.Ease.get(0.99)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(202.2,-314.6,173,220.6);


(lib.Symbol24_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 14
	this.instance_25 = new lib.Symbol27_1();
	this.instance_25.parent = this;
	this.instance_25.setTransform(235.5,-133.6,1,1,-30,0,0,8.3,3.8);
	this.instance_25._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(6).to({_off:false},0).to({regX:8.4,regY:3.9,rotation:-45,x:236.6,y:-138.2,alpha:0},4).to({_off:true},1).wait(31).to({_off:false,regX:8.3,regY:3.8,rotation:-30,x:237.7,y:-139.4,alpha:1},0).to({regX:8.4,regY:3.9,rotation:-45,x:230.1,y:-144.9,alpha:0},4).to({_off:true},1).wait(6).to({_off:false,regX:8.3,regY:3.8,rotation:-30,x:250.2,y:-150.1,alpha:1},0).to({regX:8.4,regY:3.9,rotation:-45,x:260.1,y:-154.9,alpha:0},4).to({_off:true},1).wait(37).to({_off:false,regY:3.8,x:291.8,y:-191.7,alpha:1},0).to({regY:3.9,x:292.1,y:-196.4,alpha:0},4).to({_off:true},1).wait(62).to({_off:false,regX:8.3,regY:3.8,rotation:-30,x:232.7,y:-134.4,alpha:1},0).to({regX:8.4,regY:3.9,rotation:-45,x:225.1,y:-139.9,alpha:0},4).to({_off:true},1).wait(4).to({_off:false,regX:8.3,regY:3.8,rotation:-30,x:232.7,y:-134.4,alpha:1},0).to({regX:8.4,regY:3.9,rotation:-45,x:237.6,y:-139.9,alpha:0},4).to({_off:true},1).wait(10));

	// Symbol 17
	this.instance_26 = new lib.Symbol17_1();
	this.instance_26.parent = this;
	this.instance_26.setTransform(202,-117.9,0.698,0.698,7.2,0,0,14.6,13.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(7).to({regX:14.7,regY:14,rotation:-11.7,x:198.2,y:-117.5},4).to({regX:14.6,regY:13.9,rotation:7.2,x:202,y:-117.9},8).to({regY:13.8,rotation:-7.8,x:205.4,y:-123.2},7).to({regY:13.9,rotation:7.2,x:213.2,y:-126.6},8).to({regX:14.7,regY:13.8,rotation:-12,x:196.5,y:-122.9},2).to({regX:14.6,regY:14,rotation:7.2,x:205.4,y:-125},6).to({regX:14.7,rotation:-11.7,x:205,y:-129},4).to({regX:14.6,rotation:7.2,x:224,y:-136.5},6).to({regX:14.7,rotation:-11.7,x:218.6,y:-134.6},5).to({regX:14.6,rotation:7.2,x:224,y:-136.5},8).to({regY:13.8,rotation:-7.8,x:229.4,y:-144.2},5).to({regY:13.9,rotation:7.2,x:242,y:-157.9},8).to({regY:13.8,rotation:-7.8,x:245.4,y:-163.2},7).to({regY:14,rotation:7.2,x:265.4,y:-175},8).to({regX:14.7,rotation:-11.7,x:261,y:-173},5).to({regX:14.6,rotation:7.2,x:264.3,y:-175.2},5).to({rotation:7.2},1).to({x:260.3,y:-171.7},6).to({regX:14.7,scaleX:0.71,scaleY:0.69,rotation:0,skewX:31.8,skewY:37.1,x:255.5,y:-173.7},4).to({regX:14.6,scaleX:0.7,scaleY:0.7,rotation:7.2,skewX:0,skewY:0,x:264.3,y:-175.2},5).to({regX:14.7,scaleX:0.71,scaleY:0.69,rotation:0,skewX:31.8,skewY:37.1,x:255.5,y:-173.7},4).to({regY:13.9,scaleX:0.7,scaleY:0.7,rotation:-47,skewX:0,skewY:0,x:290.1,y:-157.9},5).to({alpha:0},4).wait(1).to({regX:14.6,rotation:7.2,x:168.5,y:-91.9},0).to({regX:14.7,rotation:-7.8,x:179.9,y:-97.2,alpha:1},7).to({regX:14.6,regY:14,rotation:7.2,x:199.6,y:-110.6},7).to({regX:14.7,regY:13.8,rotation:-7.8,x:211.1,y:-125.9},7).to({regX:14.6,regY:13.9,rotation:7.2,x:202,y:-117.9},7).to({regX:14.7,regY:14,rotation:-11.7,x:198.2,y:-117.5},4).to({regX:14.6,regY:13.9,rotation:7.2,x:202,y:-117.9},8).to({regX:14.7,regY:14,rotation:-11.7,x:198.2,y:-117.5},4).to({regX:14.6,regY:13.9,rotation:7.2,x:202,y:-117.9},8).wait(1));

	// Symbol 20
	this.instance_27 = new lib.Symbol20_1();
	this.instance_27.parent = this;
	this.instance_27.setTransform(204.5,-104.3,0.698,0.698,7.2,0,0,6,11.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(7).to({rotation:22.2,x:202.5,y:-105.3},4).to({rotation:7.2,x:204.5,y:-104.3},8).to({regX:6.1,scaleY:0.71,rotation:0,skewX:0.9,skewY:11.7,x:208.2,y:-109},7).to({regX:6,regY:12,scaleY:0.7,rotation:7.2,skewX:0,skewY:0,x:215.6,y:-112.9},8).to({regY:11.8,scaleY:0.7,rotation:0,skewX:5.5,skewY:8.5,x:206.2,y:-110.7},2).to({regY:12,scaleY:0.7,rotation:7.2,skewX:0,skewY:0,x:207.9,y:-111.3},6).to({regY:11.8,rotation:22.2,x:209.2,y:-116.8},4).to({regY:12,rotation:7.2,x:226.5,y:-122.9},6).to({regY:11.8,rotation:22.2,x:222.9,y:-122.4},5).to({regY:12,rotation:7.2,x:226.5,y:-122.9},8).to({regX:6.1,regY:11.8,scaleY:0.71,rotation:0,skewX:0.9,skewY:11.7,x:232.2,y:-130},5).to({regX:6,scaleY:0.7,rotation:7.2,skewX:0,skewY:0,x:244.5,y:-144.3},8).to({regX:6.1,scaleY:0.71,rotation:0,skewX:0.9,skewY:11.7,x:248.2,y:-149},7).to({regX:6,regY:12,scaleY:0.7,rotation:7.2,skewX:0,skewY:0,x:267.9,y:-161.3},8).to({regY:11.8,rotation:22.2,x:265.2,y:-160.8},5).to({regY:12,rotation:7.2,x:266.8,y:-161.5},5).to({rotation:7.2},1).to({x:262.8,y:-158},6).to({scaleX:0.71,scaleY:0.69,rotation:0,skewX:1.8,skewY:7.1,x:261.2,y:-163.5},4).to({scaleX:0.7,scaleY:0.7,rotation:7.2,skewX:0,skewY:0,x:266.8,y:-161.5},5).to({scaleX:0.71,scaleY:0.69,rotation:0,skewX:1.8,skewY:7.1,x:261.2,y:-163.5},4).to({regX:5.9,regY:11.9,scaleX:0.7,scaleY:0.7,rotation:105.8,skewX:0,skewY:0,x:278.7,y:-150.4},5).to({alpha:0},4).wait(1).to({regX:6,regY:12,rotation:7.2,x:170.9,y:-78.2},0).to({regY:11.9,scaleY:0.71,rotation:0,skewX:0.9,skewY:11.7,x:182.7,y:-83,alpha:1},7).to({regY:11.8,scaleY:0.7,rotation:7.2,skewX:0,skewY:0,x:202.1,y:-97},7).to({regX:6.1,scaleY:0.71,rotation:0,skewX:0.9,skewY:11.7,x:213.9,y:-111.7},7).to({regX:6,scaleY:0.7,rotation:7.2,skewX:0,skewY:0,x:204.5,y:-104.3},7).to({rotation:22.2,x:202.5,y:-105.3},4).to({rotation:7.2,x:204.5,y:-104.3},8).to({rotation:22.2,x:202.5,y:-105.3},4).to({rotation:7.2,x:204.5,y:-104.3},8).wait(1));

	// Symbol 19
	this.instance_28 = new lib.Symbol19_1();
	this.instance_28.parent = this;
	this.instance_28.setTransform(198,-100.8,0.698,0.698,7.2,0,0,5.5,6.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(7).to({x:196.1,y:-101.1},4).to({x:198,y:-100.8},8).to({scaleY:0.71,rotation:0,skewX:0.9,skewY:11.7,x:202.4,y:-105.8},7).to({regX:5.6,regY:6.5,scaleY:0.7,rotation:7.2,skewX:0,skewY:0,x:209.3,y:-109.5},8).to({regX:5.5,regY:6.4,scaleY:0.7,rotation:0,skewX:5.5,skewY:8.5,x:200.1,y:-106.8},2).to({regY:6.5,scaleY:0.7,rotation:7.2,skewX:0,skewY:0,x:201.5,y:-107.9},6).to({x:202.8,y:-112.5},4).to({regY:6.4,x:220.1,y:-119.5},6).to({regX:5.6,regY:6.5,x:216.6,y:-118.1},5).to({regX:5.5,regY:6.4,x:220.1,y:-119.5},8).to({scaleY:0.71,rotation:0,skewX:0.9,skewY:11.7,x:226.4,y:-126.8},5).to({scaleY:0.7,rotation:7.2,skewX:0,skewY:0,x:238,y:-140.8},8).to({scaleY:0.71,rotation:0,skewX:0.9,skewY:11.7,x:242.4,y:-145.8},7).to({regY:6.5,scaleY:0.7,rotation:7.2,skewX:0,skewY:0,x:261.5,y:-157.9},8).to({x:258.8,y:-156.5},5).to({x:260.4,y:-158.1},5).wait(1).to({x:256.4,y:-154.6},6).to({scaleX:0.71,scaleY:0.69,rotation:0,skewX:1.8,skewY:7.1,x:258,y:-158.1},4).to({scaleX:0.7,scaleY:0.7,rotation:7.2,skewX:0,skewY:0,x:260.4},5).to({scaleX:0.71,scaleY:0.69,rotation:0,skewX:1.8,skewY:7.1,x:258},4).to({regY:6.4,scaleX:0.7,scaleY:0.7,rotation:7.2,skewX:0,skewY:0,x:275.1,y:-149},5).to({alpha:0},4).wait(1).to({regY:6.5,x:164.5,y:-74.8},0).to({regX:5.6,regY:6.4,scaleY:0.71,rotation:0,skewX:0.9,skewY:11.7,x:176.9,y:-79.9,alpha:1},7).to({regY:6.5,scaleY:0.7,rotation:7.2,skewX:0,skewY:0,x:195.8,y:-93.5},7).to({regX:5.5,regY:6.3,scaleY:0.71,rotation:0,skewX:0.9,skewY:11.7,x:208,y:-108.6},7).to({regY:6.4,scaleY:0.7,rotation:7.2,skewX:0,skewY:0,x:198,y:-100.8},7).to({x:196.1,y:-101.1},4).to({x:198,y:-100.8},8).to({x:196.1,y:-101.1},4).to({x:198,y:-100.8},8).wait(1));

	// Symbol 21
	this.instance_29 = new lib.Symbol21_1();
	this.instance_29.parent = this;
	this.instance_29.setTransform(218.6,-120.8,0.698,0.698,7.2,0,0,16.1,17.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(7).to({regX:16.2,rotation:-16.5,x:213,y:-121.5},4).to({regX:16.1,rotation:7.2,x:218.6,y:-120.8},8).to({scaleY:0.71,rotation:0,skewX:0.9,skewY:11.7,x:220.2,y:-125},7).to({scaleY:0.7,rotation:7.2,skewX:0,skewY:0,x:229.8,y:-129.5},8).to({regX:16.2,scaleY:0.7,rotation:0,skewX:-9.5,skewY:-6.5,x:214.8,y:-127.6},2).to({regX:16.1,scaleY:0.7,rotation:7.2,skewX:0,skewY:0,x:222,y:-128},6).to({regX:16.2,rotation:-16.5,x:219.7,y:-133},4).to({regX:16.1,rotation:7.2,x:240.6,y:-139.5},6).to({regX:16.2,rotation:-16.5,x:233.4,y:-138.6},5).to({regX:16.1,rotation:7.2,x:240.6,y:-139.5},8).to({scaleY:0.71,rotation:0,skewX:0.9,skewY:11.7,x:244.2,y:-146},5).to({scaleY:0.7,rotation:7.2,skewX:0,skewY:0,x:258.6,y:-160.8},8).to({scaleY:0.71,rotation:0,skewX:0.9,skewY:11.7,x:260.2,y:-165},7).to({scaleY:0.7,rotation:7.2,skewX:0,skewY:0,x:282,y:-178},8).to({regX:16.2,rotation:-16.5,x:275.7,y:-177},5).to({regX:16.1,rotation:7.2,x:280.9,y:-178.2},5).to({rotation:7.2},1).to({regX:16,rotation:37.2,x:280.6,y:-166.9},6).to({regX:16.1,regY:17.5,scaleX:0.71,scaleY:0.69,rotation:0,skewX:-43.2,skewY:-37.9,x:265.7,y:-183.3},4).to({regY:17.4,scaleX:0.7,scaleY:0.7,rotation:7.2,skewX:0,skewY:0,x:280.9,y:-178.2},5).to({regY:17.5,scaleX:0.71,scaleY:0.69,rotation:0,skewX:-43.2,skewY:-37.9,x:265.7,y:-183.3},4).to({regY:17.3,scaleX:0.7,scaleY:0.7,rotation:67.2,skewX:0,skewY:0,x:292.7,y:-141.5},5).to({alpha:0},4).wait(1).to({regX:16,regY:17.4,rotation:7.2,x:185,y:-94.8},0).to({regX:16.1,scaleY:0.71,rotation:0,skewX:0.9,skewY:11.7,x:194.6,y:-99,alpha:1},7).to({scaleY:0.7,rotation:7.2,skewX:0,skewY:0,x:216.2,y:-113.5},7).to({scaleY:0.71,rotation:0,skewX:0.9,skewY:11.7,x:225.8,y:-127.7},7).to({scaleY:0.7,rotation:7.2,skewX:0,skewY:0,x:218.6,y:-120.8},7).to({regX:16.2,rotation:-16.5,x:213,y:-121.5},4).to({regX:16.1,rotation:7.2,x:218.6,y:-120.8},8).to({regX:16.2,rotation:-16.5,x:213,y:-121.5},4).to({regX:16.1,rotation:7.2,x:218.6,y:-120.8},8).wait(1));

	// Symbol 22
	this.instance_30 = new lib.Symbol22_1();
	this.instance_30.parent = this;
	this.instance_30.setTransform(194.9,-103.1,0.698,0.698,7.2,0,0,16.6,24.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(7).to({rotation:3.3,x:193.6,y:-102.1},4).to({rotation:7.2,x:194.9,y:-103.1},8).to({scaleY:0.7,rotation:0,skewX:4.4,skewY:7.2,x:199.6,y:-107.5},7).to({regX:16.5,scaleY:0.7,rotation:7.2,skewX:0,skewY:0,x:206,y:-111.7},8).to({regX:16.8,scaleY:0.7,rotation:0,skewX:-4.8,skewY:-4,x:196.1,y:-106.8},2).to({regX:16.6,scaleY:0.7,rotation:7.2,skewX:0,skewY:0,x:198.3,y:-110.2},6).to({rotation:3.3,x:200.3,y:-113.6},4).to({rotation:7.2,x:216.9,y:-121.7},6).to({rotation:3.3,x:214,y:-119.2},5).to({rotation:7.2,x:216.9,y:-121.7},8).to({scaleY:0.7,rotation:0,skewX:4.4,skewY:7.2,x:223.6,y:-128.5},5).to({scaleY:0.7,rotation:7.2,skewX:0,skewY:0,x:234.9,y:-143.1},8).to({scaleY:0.7,rotation:0,skewX:4.4,skewY:7.2,x:239.6,y:-147.5},7).to({scaleY:0.7,rotation:7.2,skewX:0,skewY:0,x:258.3,y:-160.2},8).to({rotation:3.3,x:256.3,y:-157.6},5).to({rotation:7.2,x:257.2,y:-160.4},5).wait(1).to({x:253.2,y:-156.9},6).to({regX:16.7,scaleX:0.71,scaleY:0.69,rotation:0,skewX:-13.1,skewY:-7.9,x:254.7,y:-160.4},4).to({regX:16.6,scaleX:0.7,scaleY:0.7,rotation:7.2,skewX:0,skewY:0,x:257.2},5).to({regX:16.7,scaleX:0.71,scaleY:0.69,rotation:0,skewX:-13.1,skewY:-7.9,x:254.7},4).to({regX:16.4,scaleX:0.7,scaleY:0.7,rotation:82.2,skewX:0,skewY:0,x:275.6,y:-156.1},5).to({alpha:0},4).wait(1).to({regX:16.6,rotation:7.2,x:161.3,y:-77.1},0).to({scaleY:0.7,rotation:0,skewX:4.4,skewY:7.2,x:174.1,y:-81.5,alpha:1},7).to({scaleY:0.7,rotation:7.2,skewX:0,skewY:0,x:192.5,y:-95.7},7).to({regY:25,scaleY:0.7,rotation:0,skewX:4.4,skewY:7.2,x:205.2,y:-110.1},7).to({regY:24.9,scaleY:0.7,rotation:7.2,skewX:0,skewY:0,x:194.9,y:-103.1},7).to({rotation:3.3,x:193.6,y:-102.1},4).to({rotation:7.2,x:194.9,y:-103.1},8).to({rotation:3.3,x:193.6,y:-102.1},4).to({rotation:7.2,x:194.9,y:-103.1},8).wait(1));

	// Symbol 18
	this.instance_31 = new lib.Symbol18_1();
	this.instance_31.parent = this;
	this.instance_31.setTransform(196,-84.2,0.698,0.698,7.2,0,0,10,10.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_31).wait(19).to({regX:10.1,regY:10.4,rotation:-30.5,x:205.4,y:-94},7).to({regX:10.2,regY:10.5,rotation:7.2,x:207.3,y:-92.9},8).to({regX:10.1,regY:10.4,rotation:-3.5,x:201.8,y:-91.7},2).to({rotation:7.2,x:199.5,y:-91.4},6).to({regX:10,regY:10.3,rotation:37.2,x:200.2,y:-98.9},4).to({regX:10.1,regY:10.4,rotation:7.2,x:218.1,y:-102.9},6).to({regX:10.2,rotation:-22.8,x:217.9,y:-102.5},5).to({regX:10.1,rotation:7.2,x:218.1,y:-102.9},8).to({rotation:-30.5,x:229.4,y:-115},5).to({regX:10,regY:10.5,rotation:7.2,x:236,y:-124.2},8).to({regX:10.1,regY:10.4,rotation:-30.5,x:245.4,y:-134},7).to({rotation:7.2,x:259.5,y:-141.4},8).to({regX:10,regY:10.3,rotation:37.2,x:256.2,y:-142.9},5).to({regX:10.1,regY:10.4,rotation:7.2,x:258.4,y:-141.6},5).to({rotation:7.2},1).to({regY:10.3,rotation:-22.8,x:259.6,y:-140.3},6).to({regY:10.4,scaleX:0.71,scaleY:0.69,rotation:0,skewX:1.8,skewY:7.1,x:257.6,y:-141.6},4).to({scaleX:0.7,scaleY:0.7,rotation:7.2,skewX:0,skewY:0,x:258.4},5).to({scaleX:0.71,scaleY:0.69,rotation:0,skewX:1.8,skewY:7.1,x:257.6},4).to({regX:10,scaleX:0.7,scaleY:0.7,rotation:73.3,skewX:0,skewY:0,x:258.6,y:-150.8},5).to({alpha:0},4).wait(1).to({regX:10.1,rotation:7.2,x:162.5,y:-58.3},0).to({regY:10.3,rotation:-30.5,x:179.8,y:-68.1,alpha:1},7).to({regY:10.4,rotation:7.2,x:193.7,y:-76.9},7).to({regY:10.3,rotation:-30.5,x:210.9,y:-96.7},7).to({regX:10,regY:10.5,rotation:7.2,x:196,y:-84.2},7).to({rotation:7.2},4).wait(21));

	// Symbol 16
	this.instance_32 = new lib.Symbol16_1();
	this.instance_32.parent = this;
	this.instance_32.setTransform(196.7,-103.2,0.698,0.698,7.2,0,0,8.2,11.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_32).wait(19).to({regX:8.1,regY:11.5,x:202.2,y:-107.5},7).to({regY:11.4,x:207.8,y:-111.8},8).to({regX:8.2,regY:11.3,x:201.5,y:-109.1},2).to({regX:8.1,regY:11.4,x:200.1,y:-110.3},6).to({regX:8.2,x:203.5,y:-114.7},4).to({x:218.7,y:-121.8},6).to({regY:11.5,x:217.1,y:-120.2},5).to({regY:11.4,x:218.7,y:-121.8},8).to({regX:8.1,regY:11.5,x:226.2,y:-128.5},5).to({regX:8.2,regY:11.4,x:236.7,y:-143.2},8).to({regX:8.1,regY:11.5,x:242.2,y:-147.5},7).to({regY:11.4,x:260.1,y:-160.3},8).to({regX:8.2,x:259.5,y:-158.7},5).to({x:259.1,y:-160.5},5).wait(1).to({x:255.1,y:-157},6).to({regY:11.3,scaleX:0.71,scaleY:0.69,rotation:0,skewX:1.8,skewY:7.1,x:256.5,y:-160.6},4).to({regY:11.4,scaleX:0.7,scaleY:0.7,rotation:7.2,skewX:0,skewY:0,x:259.1,y:-160.5},5).to({regY:11.3,scaleX:0.71,scaleY:0.69,rotation:0,skewX:1.8,skewY:7.1,x:256.5,y:-160.6},4).to({regX:7.9,regY:11.4,scaleX:0.7,scaleY:0.7,rotation:133,skewX:0,skewY:0,x:261.4,y:-165.6},5).to({alpha:0},4).wait(1).to({regX:8.2,rotation:7.2,x:163.2,y:-77.2},0).to({rotation:7.2,x:176.8,y:-81.5,alpha:1},7).to({regX:8.1,regY:11.5,x:194.3,y:-95.8},7).to({regY:11.4,x:207.9,y:-110.2},7).to({regX:8.2,x:196.7,y:-103.2},7).wait(25));

	// Symbol 18
	this.instance_33 = new lib.Symbol18_1();
	this.instance_33.parent = this;
	this.instance_33.setTransform(194,-93.3,0.698,0.698,-17.3,0,0,10.1,10.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_33).wait(19).to({rotation:12.7,x:196,y:-93.8},7).to({regX:10.2,rotation:-17.3,x:205.2,y:-102},8).to({regX:10.1,regY:10.3,rotation:-8.6,x:197.7,y:-98.2},2).to({regX:10.2,regY:10.5,rotation:-17.3,x:197.5,y:-100.4},6).to({regX:10.1,x:200.8,y:-104.8},4).to({regX:10.2,x:216.1,y:-111.9},6).to({regX:10.1,x:214.4,y:-110.4},5).to({regX:10.2,x:216.1,y:-111.9},8).to({regX:10.1,rotation:12.7,x:220,y:-114.8},5).to({rotation:-17.3,x:234,y:-133.3},8).to({rotation:12.7,x:236,y:-133.8},7).to({regX:10.2,rotation:-17.3,x:257.5,y:-150.4},8).to({regX:10.1,x:256.8,y:-148.8},5).to({regX:10.2,x:256.4,y:-150.6},5).wait(1).to({x:252.4,y:-147.1},6).to({regY:10.6,scaleX:0.68,scaleY:0.72,rotation:0,skewX:-22.1,skewY:-17.8,x:254.8,y:-150.6},4).to({regY:10.5,scaleX:0.7,scaleY:0.7,rotation:-17.3,skewX:0,skewY:0,x:256.4},5).to({regY:10.6,scaleX:0.68,scaleY:0.72,rotation:0,skewX:-22.1,skewY:-17.8,x:254.8},4).to({regX:10.1,regY:10.3,scaleX:0.7,scaleY:0.7,rotation:87.7,skewX:0,skewY:0,x:253.5,y:-169.2},5).to({alpha:0},4).wait(1).to({regX:10.2,regY:10.5,rotation:-17.3,x:160.5,y:-67.3},0).to({regX:10.1,rotation:12.7,x:170.4,y:-67.8,alpha:1},7).to({rotation:-17.3,x:191.7,y:-86},7).to({regY:10.4,rotation:12.7,x:201.6,y:-96.6},7).to({regY:10.5,rotation:-17.3,x:194,y:-93.3},7).wait(25));

	// Layer 3
	this.instance_34 = new lib.Symbol25_1();
	this.instance_34.parent = this;
	this.instance_34.setTransform(331.9,-226.8,0.52,0.52,7.2,0,0,22.4,25.6);
	this.instance_34._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_34).wait(96).to({_off:false},0).to({regX:22.3,scaleX:1.41,scaleY:1.41,x:333.8,y:-223.6,alpha:0},3).to({_off:true},1).wait(62).to({_off:false,regX:22.4,scaleX:0.52,scaleY:0.52,x:302.9,y:-177.8,alpha:1},0).to({regX:22.3,scaleX:1.41,scaleY:1.41,x:296.8,y:-175.6,alpha:0},3).to({_off:true},1).wait(20));

	// Symbol 7
	this.instance_35 = new lib.Symbol7_1();
	this.instance_35.parent = this;
	this.instance_35.setTransform(329.6,-137.2,0.693,0.693,112.2,0,0,10.8,38.9);
	this.instance_35.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_35).wait(28).to({regX:11,rotation:22.2,x:377.5,y:-317.7},0).to({regX:11.2,regY:39,rotation:-3.7,x:371.8,y:-313.3,alpha:1},9).to({regX:11,regY:38.9,rotation:22.2,x:373,y:-298.1},10).to({regX:11.2,rotation:-3.7,x:366.1,y:-292},9).to({regX:11,rotation:22.2,x:362.6,y:-279.3},10).to({rotation:7.2,x:360.4,y:-266.5},9).to({regX:11.2,rotation:-3.7,x:354.9,y:-259.1},9).to({regX:11,regY:39,rotation:22.2,x:354.1,y:-240},11).to({regY:38.8,scaleX:0.69,scaleY:0.7,rotation:0,skewX:89.9,skewY:88.7,x:363.2,y:-220.4},3).to({regX:11.2,regY:39,scaleX:0.69,scaleY:0.69,rotation:-3.7,skewX:0,skewY:0,x:345.2,y:-216.5},5).wait(1).to({rotation:5.6,x:336.2,y:-203.5},3).to({regX:11.3,rotation:-129.4,x:282.3,y:-179.1},3).to({regX:11.2,rotation:5.6,x:336.2,y:-203.5},4).to({regX:11.3,rotation:-129.4,x:282.3,y:-179.1},5).to({regX:11.2,rotation:5.6,x:336.2,y:-203.5},4).to({regX:11,regY:38.9,rotation:22.2,x:343,y:-208.1},5).to({regX:11.2,rotation:-3.7,x:336.1,y:-202},9).to({regX:11,rotation:22.2,x:332.6,y:-189.3},10).to({x:333,y:-189.1},1).to({regX:11.2,rotation:-3.7,x:324.1,y:-182},9).to({rotation:6.5,x:320.4,y:-177.7},5).to({regX:10.8,rotation:112.2,x:329.6,y:-137.2},5).to({alpha:0},6).wait(13));

	// Symbol 13
	this.instance_36 = new lib.Symbol13_1();
	this.instance_36.parent = this;
	this.instance_36.setTransform(303,-163,0.693,0.693,82.2,0,0,18.1,12.8);
	this.instance_36.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_36).wait(28).to({regX:18,regY:12.9,rotation:7.2,x:350.1,y:-298.1},0).to({regX:18.2,regY:13,rotation:0.5,x:349.1,y:-288.6,alpha:1},9).to({regX:18.1,rotation:7.2,x:345.6,y:-278.4},10).to({regX:18.2,rotation:0.5,x:343.4,y:-267.1},9).to({regX:18.1,regY:12.9,rotation:7.2,x:335.2,y:-259.6},10).to({regY:13,x:334.4,y:-245.5},9).to({regX:18.2,rotation:0.5,x:332.2,y:-234.3},9).to({regX:18.1,regY:12.9,rotation:7.2,x:326.7,y:-220.4},11).to({regX:18,regY:12.8,scaleX:0.69,rotation:0,skewX:27.3,skewY:25.6,x:327.7,y:-221.9},3).to({regX:18.2,regY:13.1,scaleX:0.69,rotation:0.5,skewX:0,skewY:0,x:322.5,y:-191.6},5).wait(1).to({rotation:2.8,x:311.7,y:-180.5},3).to({regY:12.9,rotation:-52.8,x:303.1,y:-183.4},3).to({regY:13.1,rotation:2.8,x:311.7,y:-180.5},4).to({regY:12.9,rotation:-52.8,x:303.1,y:-183.4},5).to({regY:13.1,rotation:2.8,x:311.7,y:-180.5},4).to({regX:18.1,regY:13,rotation:7.2,x:315.6,y:-188.4},5).to({regX:18.2,rotation:0.5,x:313.4,y:-177.1},9).to({regX:18.1,regY:12.9,rotation:7.2,x:305.2,y:-169.6},10).to({regY:13,x:305.6,y:-169.4},1).to({regX:18.2,rotation:0.5,x:301.4,y:-157.1},9).to({rotation:3,x:295.8,y:-154.9},5).to({regX:18.1,regY:12.8,rotation:82.2,x:303,y:-163},5).to({alpha:0},6).wait(13));

	// Symbol 12
	this.instance_37 = new lib.Symbol12_1();
	this.instance_37.parent = this;
	this.instance_37.setTransform(300.7,-172.9,0.693,0.693,82.2,0,0,10.6,13);
	this.instance_37.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_37).wait(28).to({regX:10.5,rotation:7.2,x:340,y:-293.3},0).to({regX:10.7,rotation:-14.3,x:342.1,y:-286.3,alpha:1},9).to({regX:10.5,rotation:7.2,x:335.5,y:-273.7},10).to({regX:10.7,regY:12.9,rotation:-14.3,x:336.3,y:-265},9).to({regX:10.6,regY:13,rotation:7.2,x:325.1,y:-254.9},10).to({regX:10.7,regY:12.8,rotation:-7.8,x:324.9,y:-240.7},9).to({regY:13,rotation:-14.3,x:325.1,y:-232},9).to({regX:10.5,regY:12.9,rotation:7.2,x:316.6,y:-215.7},11).to({regX:10.6,scaleX:0.7,scaleY:0.69,rotation:0,skewX:31.8,skewY:30.2,x:315.7,y:-219.7},3).to({regX:10.7,regY:13,scaleX:0.69,scaleY:0.69,rotation:-14.3,skewX:0,skewY:0,x:315.4,y:-189.5},5).wait(1).to({rotation:-6.3,x:303.6,y:-177.4},3).to({regX:10.6,rotation:-7.8,x:296.7,y:-170},3).to({regX:10.7,rotation:-6.3,x:303.6,y:-177.4},4).to({regX:10.6,rotation:-7.8,x:296.7,y:-170},5).to({regX:10.7,rotation:-6.3,x:303.6,y:-177.4},4).to({regX:10.5,rotation:7.2,x:305.5,y:-183.7},5).to({regX:10.7,regY:12.9,rotation:-14.3,x:306.3,y:-175},9).to({regX:10.6,regY:13,rotation:7.2,x:295.1,y:-164.9},10).to({regX:10.5,rotation:7.2,x:295.5,y:-164.7},1).to({regX:10.7,regY:12.9,rotation:-14.3,x:294.3,y:-155},9).to({rotation:-5.5,x:287.5,y:-151.8},5).to({regX:10.6,regY:13,rotation:82.2,x:300.7,y:-172.9},5).to({alpha:0},6).wait(13));

	// Symbol 11
	this.instance_38 = new lib.Symbol11_1();
	this.instance_38.parent = this;
	this.instance_38.setTransform(293.7,-161.9,0.693,0.693,127.2,0,0,8,12);
	this.instance_38.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_38).wait(28).to({rotation:7.2,x:357,y:-286.6},0).to({regX:8.1,regY:11.9,rotation:37.2,x:352.8,y:-278.4,alpha:1},9).to({regX:8,regY:12,rotation:7.2,x:352.5,y:-267},10).to({regX:8.1,regY:11.9,rotation:37.2,x:347.1,y:-257},9).to({rotation:7.2,x:342.1,y:-248.2},10).to({regX:8.2,regY:12,rotation:-22.8,x:341.2,y:-237.1},9).to({regX:8.1,regY:11.9,rotation:37.2,x:335.8,y:-224.1},9).to({regX:8,regY:12,rotation:7.2,x:333.5,y:-209},11).to({regX:8.1,scaleX:0.69,scaleY:0.7,rotation:0,skewX:18.6,skewY:17.1,x:332.2,y:-206.2},3).to({regX:8,regY:11.8,scaleX:0.69,scaleY:0.69,rotation:37.2,skewX:0,skewY:0,x:326.1,y:-181.6},5).wait(1).to({regX:8.1,scaleX:0.69,scaleY:0.69,rotation:-18.7,x:318.2,y:-175.1},3).to({regY:12,scaleX:0.69,scaleY:0.69,rotation:-52.8,x:312.3,y:-177.6},3).to({regY:11.8,scaleX:0.69,scaleY:0.69,rotation:-18.7,x:318.2,y:-175.1},4).to({regY:12,scaleX:0.69,scaleY:0.69,rotation:-52.8,x:312.3,y:-177.6},5).to({regY:11.8,scaleX:0.69,scaleY:0.69,rotation:-18.7,x:318.2,y:-175.1},4).to({regX:8,regY:12,scaleX:0.69,scaleY:0.69,rotation:7.2,x:322.5,y:-177},5).to({regX:8.1,regY:11.9,rotation:37.2,x:317.1,y:-167},9).to({rotation:7.2,x:312.1,y:-158.2},10).to({regX:8,regY:12,rotation:7.2,x:312.5,y:-158},1).to({regX:8.1,regY:11.9,rotation:37.2,x:305.1,y:-147},9).to({regY:11.8,scaleX:0.69,scaleY:0.69,rotation:25.1,x:300.8,y:-144.3},5).to({regX:8,regY:12,scaleX:0.69,scaleY:0.69,rotation:127.2,x:293.7,y:-161.9},5).to({rotation:127.2,alpha:0},6).wait(13));

	// Symbol 10
	this.instance_39 = new lib.Symbol10_1();
	this.instance_39.parent = this;
	this.instance_39.setTransform(320.9,-161.7,0.693,0.693,82.2,0,0,22.9,23.4);
	this.instance_39.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_39).wait(28).to({regX:23.1,rotation:7.2,x:356.1,y:-315.1},0).to({regX:23.2,rotation:3.8,x:353.6,y:-306.1,alpha:1},9).to({regX:23.1,rotation:7.2,x:351.6,y:-295.5},10).to({regX:23.2,rotation:3.8,x:347.8,y:-284.6},9).to({regX:22.9,rotation:7.2,x:341,y:-276.7},10).to({regX:23.1,x:340.4,y:-262.7},9).to({regX:23.2,rotation:3.8,x:336.6,y:-251.8},9).to({regX:23.1,rotation:7.2,x:332.7,y:-237.4},11).to({rotation:0,skewX:22.8,skewY:21.2,x:339.7,y:-237},3).to({regX:23.2,rotation:3.8,skewX:0,skewY:0,x:326.9,y:-209.2},5).wait(1).to({regY:23.3,rotation:5,x:316.7,y:-198},3).to({regX:23.1,regY:23.4,rotation:-37.8,x:292.9,y:-199.5},3).to({regX:23.2,regY:23.3,rotation:5,x:316.7,y:-198},4).to({regX:23.1,regY:23.4,rotation:-37.8,x:292.9,y:-199.5},5).to({regX:23.2,regY:23.3,rotation:5,x:316.7,y:-198},4).to({regX:23.1,regY:23.4,rotation:7.2,x:321.6,y:-205.5},5).to({regX:23.2,rotation:3.8,x:317.8,y:-194.6},9).to({regX:22.9,rotation:7.2,x:311,y:-186.7},10).to({regX:23.1,x:311.6,y:-186.5},1).to({regX:23.2,rotation:3.8,x:305.8,y:-174.6},9).to({rotation:5,x:300.7,y:-172.3},5).to({regX:22.9,rotation:82.2,x:320.9,y:-161.7},5).to({alpha:0},6).wait(13));

	// Symbol 8
	this.instance_40 = new lib.Symbol8_1();
	this.instance_40.parent = this;
	this.instance_40.setTransform(320.9,-147.4,0.693,0.693,142.2,0,0,10,10.9);
	this.instance_40.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_40).wait(28).to({regY:10.8,rotation:67.2,x:369.9,y:-311.5},0).to({rotation:56.3,x:367.7,y:-305.2,alpha:1},9).to({rotation:67.2,x:365.4,y:-291.9},10).to({regY:10.9,rotation:56.3,x:361.9,y:-283.7},9).to({rotation:67.2,x:354.9,y:-273},10).to({regX:10.1,regY:11,x:354,y:-258.9},9).to({regX:10,regY:10.8,rotation:56.3,x:350.7,y:-250.9},9).to({rotation:67.2,x:346.4,y:-233.8},11).to({scaleX:0.68,scaleY:0.7,rotation:0,skewX:64.1,skewY:64.8,y:-231.6},3).to({scaleX:0.69,scaleY:0.69,rotation:56.3,skewX:0,skewY:0,x:341,y:-208.4},5).wait(1).to({regX:10.1,scaleX:0.69,scaleY:0.69,rotation:60.4,x:330.8,y:-196},3).to({regX:9.9,regY:10.9,scaleX:0.69,scaleY:0.69,rotation:52.2,x:305.8,y:-196.2},3).to({regX:10.1,regY:10.8,scaleX:0.69,scaleY:0.69,rotation:60.4,x:330.8,y:-196},4).to({regX:9.9,regY:10.9,scaleX:0.69,scaleY:0.69,rotation:52.2,x:305.8,y:-196.2},5).to({regX:10.1,regY:10.8,scaleX:0.69,scaleY:0.69,rotation:60.4,x:330.8,y:-196},4).to({regX:10,scaleX:0.69,scaleY:0.69,rotation:67.2,x:335.4,y:-201.9},5).to({regY:10.9,rotation:56.3,x:331.9,y:-193.7},9).to({rotation:67.2,x:324.9,y:-183},10).to({regY:10.8,x:325.4,y:-182.9},1).to({regY:10.9,rotation:56.3,x:319.9,y:-173.7},9).to({regX:9.9,regY:10.8,scaleX:0.69,scaleY:0.69,rotation:60.7,x:314.8,y:-170.3},5).to({regX:10,regY:10.9,scaleX:0.69,scaleY:0.69,rotation:142.2,x:320.9,y:-147.4},5).to({alpha:0},6).wait(13));

	// Symbol 9
	this.instance_41 = new lib.Symbol9_1();
	this.instance_41.parent = this;
	this.instance_41.setTransform(321,-174.5,0.693,0.693,30.7,0,0,25.1,19.8);
	this.instance_41.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_41).wait(28).to({rotation:-14.3,x:338.9,y:-319.7},0).to({regX:25.4,regY:19.9,scaleX:0.7,rotation:0,skewX:-37.2,skewY:-30.5,x:335.9,y:-305.6,alpha:1},9).to({regX:25.1,scaleX:0.69,rotation:-14.3,skewX:0,skewY:0,x:334.4,y:-300.1},10).to({regX:25.3,scaleX:0.7,rotation:0,skewX:-37.2,skewY:-30.5,x:330.2,y:-284.1},9).to({regX:25.1,scaleX:0.69,rotation:-14.3,skewX:0,skewY:0,x:323.9,y:-281.3},10).to({regX:25.2,rotation:0.7,x:323.3,y:-268},9).to({regX:25.4,scaleX:0.7,rotation:0,skewX:-37.2,skewY:-30.5,x:319,y:-251.3},9).to({regX:25.1,regY:19.8,scaleX:0.69,rotation:-14.3,skewX:0,skewY:0,x:315.4,y:-242.1},11).to({regX:25.2,regY:19.7,scaleX:0.7,scaleY:0.69,rotation:0,skewX:9.7,skewY:10.5,x:322.5,y:-247.4},3).to({regX:25.3,regY:19.9,scaleY:0.69,skewX:-37.2,skewY:-30.5,x:309.2,y:-208.7},5).wait(1).to({regX:25.4,scaleX:0.7,scaleY:0.69,skewX:-28.8,skewY:-24.6,x:299.2,y:-199.4},3).to({regX:25.2,scaleX:0.69,scaleY:0.69,rotation:-59.3,skewX:0,skewY:0,x:277.5,y:-190.5},3).to({regX:25.4,scaleX:0.7,scaleY:0.69,rotation:0,skewX:-28.8,skewY:-24.6,x:299.2,y:-199.4},4).to({regX:25.2,scaleX:0.69,scaleY:0.69,rotation:-59.3,skewX:0,skewY:0,x:277.5,y:-190.5},5).to({regX:25.4,scaleX:0.7,scaleY:0.69,rotation:0,skewX:-28.8,skewY:-24.6,x:299.2,y:-199.4},4).to({regX:25.1,scaleX:0.69,scaleY:0.69,rotation:-14.3,skewX:0,skewY:0,x:304.4,y:-210.1},5).to({regX:25.3,scaleX:0.7,rotation:0,skewX:-37.2,skewY:-30.5,x:300.2,y:-194.1},9).to({regX:25.1,scaleX:0.69,rotation:-14.3,skewX:0,skewY:0,x:293.9,y:-191.3},10).to({x:294.4,y:-191.1},1).to({regX:25.3,scaleX:0.7,rotation:0,skewX:-37.2,skewY:-30.5,x:288.2,y:-174.1},9).to({regX:25.4,scaleX:0.7,scaleY:0.69,skewX:-28,skewY:-24,x:283.3,y:-173.8},5).to({regX:25.1,regY:19.8,scaleX:0.69,scaleY:0.69,rotation:30.7,skewX:0,skewY:0,x:321,y:-174.5},5).to({alpha:0},6).wait(13));

	// Layer 2
	this.instance_42 = new lib.Symbol25_1();
	this.instance_42.parent = this;
	this.instance_42.setTransform(311.9,-185.9,0.52,0.52,7.2,0,0,22.4,25.6);
	this.instance_42._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_42).wait(7).to({_off:false},0).to({regX:22.3,regY:25.7,scaleX:1.41,scaleY:1.41,x:307.7,y:-181.3,alpha:0},3).to({_off:true},1).wait(32).to({_off:false,regX:22.4,regY:25.6,scaleX:0.52,scaleY:0.52,x:245.2,y:-137.4,alpha:1},0).to({regX:22.3,scaleX:1.41,scaleY:1.41,x:250.5,y:-147.6,alpha:0},3).to({_off:true},1).wait(7).to({_off:false,regX:22.4,scaleX:0.52,scaleY:0.52,x:262.9,y:-157.8,alpha:1},0).to({regX:22.3,scaleX:1.41,scaleY:1.41,x:286.8,y:-155.6,alpha:0},3).to({_off:true},1).wait(113).to({_off:false,regX:22.4,regY:25.7,scaleX:0.52,scaleY:0.52,x:328.9,y:-229.1,alpha:1},0).to({regX:22.3,scaleX:1.41,scaleY:1.41,x:328.8,y:-229,alpha:0},3).to({_off:true},1).wait(11));

	// Symbol 7
	this.instance_43 = new lib.Symbol7_1();
	this.instance_43.parent = this;
	this.instance_43.setTransform(338.6,-204.9,0.693,0.693,11.8,0,0,11.2,39);

	this.timeline.addTween(cjs.Tween.get(this.instance_43).to({regX:11,regY:38.9,rotation:22.2,x:334.1,y:-197.3},4).to({regX:11.1,rotation:13.5,x:329,y:-198.2},3).to({regX:11.2,scaleX:0.68,scaleY:0.7,rotation:0,skewX:23.5,skewY:20.1,x:331.9,y:-193.1},3).to({regY:39,scaleX:0.69,scaleY:0.69,rotation:-3.7,skewX:0,skewY:0,x:318.7,y:-200},3).to({regX:10.9,rotation:22.2,x:317.1,y:-185.2},6).to({regY:38.8,rotation:37.2,x:310.8,y:-175},6).to({regX:10.8,regY:38.7,scaleX:0.69,scaleY:0.69,rotation:43.5,x:311.8,y:-173.3},2).to({regX:11.2,regY:38.9,scaleX:0.69,scaleY:0.69,rotation:-22.8,x:272,y:-181.6},5).to({scaleX:0.56,scaleY:0.63,rotation:0.8,x:265.6,y:-162.5},1).to({regX:9.8,regY:39.6,scaleX:0.51,scaleY:0.69,rotation:0,skewX:-26.6,skewY:170,x:254.4,y:-148.5},1).to({regX:10.8,regY:39.1,scaleX:1.01,scaleY:0.69,skewX:-77.6,skewY:102.4,x:234.7,y:-119.3},1).to({regX:11.1,regY:38.9,scaleX:0.69,rotation:37.2,skewX:0,skewY:0,x:277.7,y:-148.4},7).to({regY:38.8,rotation:47.1,x:291.6,y:-154.2},4).to({regY:39,rotation:22.2,x:283.9,y:-159.3},6).wait(2).to({rotation:7.2,x:300.7,y:-170.7},0).to({regX:10.6,regY:38.4,scaleX:0.49,scaleY:0.47,rotation:0,skewX:121.9,skewY:127,x:317.2,y:-133.5},5,cjs.Ease.get(0.99)).to({regX:10.7,regY:38.2,x:321.5,y:-134.9,alpha:0},10).to({_off:true},1).wait(34).to({_off:false,regX:11,regY:38.9,scaleX:0.69,scaleY:0.69,rotation:22.2,skewX:0,skewY:0,x:377.5,y:-317.7},0).to({regX:11.2,regY:39,rotation:-3.7,x:371.8,y:-313.3,alpha:1},9).to({regX:11,regY:38.9,rotation:22.2,x:373,y:-298.1},10).to({regX:11.2,rotation:-3.7,x:366.1,y:-292},9).to({regX:11,rotation:22.2,x:362.6,y:-279.3},10).to({rotation:7.2,x:360.4,y:-266.5},9).to({regX:11.2,rotation:-3.7,x:354.9,y:-259.1},9).to({regX:11,regY:39,rotation:22.2,x:354.1,y:-240},11).to({regY:38.8,scaleX:0.69,scaleY:0.7,rotation:0,skewX:89.9,skewY:88.7,x:363.2,y:-220.4},3).to({regX:11.2,regY:39,scaleX:0.69,scaleY:0.69,rotation:-3.7,skewX:0,skewY:0,x:345.2,y:-216.5},6).to({regY:38.9,scaleX:0.69,scaleY:0.69,rotation:9.1,x:339.8,y:-207},5).wait(1));

	// Symbol 13
	this.instance_44 = new lib.Symbol13_1();
	this.instance_44.parent = this;
	this.instance_44.setTransform(313,-183.2,0.693,0.693,4.5,0,0,18.1,13);

	this.timeline.addTween(cjs.Tween.get(this.instance_44).to({regY:12.9,rotation:7.2,x:306.7,y:-177.6},4).to({regX:17.9,regY:13,rotation:5.2,x:303.1,y:-176.8},3).to({regX:18.2,regY:12.9,scaleX:0.7,scaleY:0.69,rotation:0,skewX:6.7,skewY:3,x:302.5,y:-176.1},3).to({regY:13,scaleX:0.69,scaleY:0.69,rotation:0.5,skewX:0,skewY:0,x:296,y:-175.3},3).to({regX:18.1,regY:12.9,rotation:7.2,x:289.7,y:-165.5},6).to({x:278.5,y:-156.8},6).to({regX:18.2,x:279.1,y:-156.2},2).to({regX:18.1,regY:13,rotation:-22.8,x:254.9,y:-139},5).to({rotation:7.2,x:233.5,y:-116.1},3).to({regY:12.9,rotation:7.2,x:237,y:-123.3},7).to({regX:18,regY:12.8,rotation:25.2,x:246.4,y:-137.2},4).to({regX:18.1,regY:13,rotation:7.2,x:261.4,y:-137.7},6).wait(2).to({rotation:7.2,x:264.5,y:-142.4},0).to({regX:18.2,regY:12.3,scaleX:0.65,scaleY:0.69,rotation:0,skewX:90.5,skewY:105.5,x:288.8,y:-158.2},5,cjs.Ease.get(0.99)).to({regX:18.1,x:293.1,y:-159.7,alpha:0},10).to({_off:true},1).wait(34).to({_off:false,regX:18,regY:12.9,scaleX:0.69,scaleY:0.69,rotation:7.2,skewX:0,skewY:0,x:350.1,y:-298.1},0).to({regX:18.2,regY:13,rotation:0.5,x:349.1,y:-288.6,alpha:1},9).to({regX:18.1,rotation:7.2,x:345.6,y:-278.4},10).to({regX:18.2,rotation:0.5,x:343.4,y:-267.1},9).to({regX:18.1,regY:12.9,rotation:7.2,x:335.2,y:-259.6},10).to({regY:13,x:334.4,y:-245.5},9).to({regX:18.2,rotation:0.5,x:332.2,y:-234.3},9).to({regX:18.1,regY:12.9,rotation:7.2,x:326.7,y:-220.4},11).to({regX:18,regY:12.8,scaleX:0.69,rotation:0,skewX:27.3,skewY:25.6,x:327.7,y:-221.9},3).to({regX:18.2,regY:13.1,scaleX:0.69,rotation:0.5,skewX:0,skewY:0,x:322.5,y:-191.6},6).to({regY:13,rotation:3.8,x:314.6,y:-184.7},5).wait(1));

	// Symbol 12
	this.instance_45 = new lib.Symbol12_1();
	this.instance_45.parent = this;
	this.instance_45.setTransform(304.2,-179.6,0.693,0.693,-1.3,0,0,10.8,13);

	this.timeline.addTween(cjs.Tween.get(this.instance_45).to({regX:10.5,rotation:7.2,x:296.6,y:-172.9},4).to({regX:10.7,regY:12.9,rotation:0.2,x:294.1},3).to({regY:12.8,scaleX:0.7,scaleY:0.68,rotation:0,skewX:26.6,skewY:23.2,x:287.7,y:-174.1},3).to({regY:13,scaleX:0.69,scaleY:0.69,rotation:-14.3,skewX:0,skewY:0,x:288.9,y:-173},3).to({regX:10.6,rotation:-22.8,x:281.3,y:-161.6},6).to({regY:12.8,rotation:37.2,x:267.7,y:-153.3},6).to({scaleX:0.69,scaleY:0.69,rotation:28.5,x:268.6},2).to({regY:12.9,scaleX:0.69,scaleY:0.69,rotation:-22.8,x:248.5,y:-130},5).to({rotation:7.2,x:223.5,y:-111.5},3).to({regX:10.7,regY:13,rotation:-37.8,x:230.7,y:-118.9},7).to({regY:12.6,rotation:68.7,x:234.8,y:-142.5},4).to({regX:10.6,regY:12.9,rotation:7.2,x:251.5,y:-133.2},6).wait(2).to({regX:10.5,regY:13,rotation:7.2,x:254.4,y:-137.7},0).to({regX:10.6,regY:12.4,scaleX:0.66,scaleY:0.83,rotation:0,skewX:68.8,skewY:69.9,x:282.2,y:-165.4},5,cjs.Ease.get(0.99)).to({regX:10.5,x:286.4,y:-166.9,alpha:0},10).to({_off:true},1).wait(34).to({_off:false,regY:13,scaleX:0.69,scaleY:0.69,rotation:7.2,skewX:0,skewY:0,x:340,y:-293.3},0).to({regX:10.7,rotation:-14.3,x:342.1,y:-286.3,alpha:1},9).to({regX:10.5,rotation:7.2,x:335.5,y:-273.7},10).to({regX:10.7,regY:12.9,rotation:-14.3,x:336.3,y:-265},9).to({regX:10.6,regY:13,rotation:7.2,x:325.1,y:-254.9},10).to({regX:10.7,regY:12.8,rotation:-7.8,x:324.9,y:-240.7},9).to({regY:13,rotation:-14.3,x:325.1,y:-232},9).to({regX:10.5,regY:12.9,rotation:7.2,x:316.6,y:-215.7},11).to({regX:10.6,scaleX:0.7,scaleY:0.69,rotation:0,skewX:31.8,skewY:30.2,x:315.7,y:-219.7},3).to({regX:10.7,regY:13,scaleX:0.69,scaleY:0.69,rotation:-14.3,skewX:0,skewY:0,x:315.4,y:-189.5},6).to({regX:10.8,rotation:-3.3,x:306,y:-181.3},5).wait(1));

	// Symbol 11
	this.instance_46 = new lib.Symbol11_1();
	this.instance_46.parent = this;
	this.instance_46.setTransform(318.7,-172.5,0.692,0.692,19.1,0,0,8,11.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_46).to({regX:8.1,regY:11.9,scaleX:0.69,scaleY:0.69,rotation:7.2,x:313.6,y:-166.2},4).to({regY:12,rotation:17,x:308.9,y:-165.8},3).to({regX:8.2,regY:11.8,scaleX:0.68,scaleY:0.71,rotation:0,skewX:30.3,skewY:27.5,x:306.7,y:-165.7},3).to({regX:8.1,scaleX:0.69,scaleY:0.69,rotation:37.2,skewX:0,skewY:0,x:299.7,y:-165.1},3).to({regX:8.2,regY:12,rotation:-22.8,x:297.7,y:-156.9},6).to({regX:8.1,regY:11.8,rotation:7.2,x:285.4,y:-145.5},6).to({regX:8.2,regY:11.9,rotation:7.2,x:286.1,y:-145.8},2).to({regX:8,rotation:-22.8,x:266.5,y:-132.6},5).to({regX:8.1,rotation:7.2,x:240.4,y:-104.8},3).to({regY:11.8,rotation:22.2,x:241.4,y:-112.3},7).to({regX:8,regY:11.9,rotation:16.7,x:250.3,y:-124.5},4).to({regY:12,rotation:7.2,x:268.3,y:-126.4},6).wait(2).to({regX:8.1,regY:11.9,rotation:7.2,x:271.5,y:-131.1},0).to({regX:7.9,regY:11.8,scaleX:0.68,scaleY:1.11,rotation:0,skewX:111.6,skewY:117.1,x:277.9,y:-155.8},5,cjs.Ease.get(0.99)).to({x:282.1,y:-157.3,alpha:0},10).to({_off:true},1).wait(34).to({_off:false,regX:8,regY:12,scaleX:0.69,scaleY:0.69,rotation:7.2,skewX:0,skewY:0,x:357,y:-286.6},0).to({regX:8.1,regY:11.9,rotation:37.2,x:352.8,y:-278.4,alpha:1},9).to({regX:8,regY:12,rotation:7.2,x:352.5,y:-267},10).to({regX:8.1,regY:11.9,rotation:37.2,x:347.1,y:-257},9).to({rotation:7.2,x:342.1,y:-248.2},10).to({regX:8.2,regY:12,rotation:-22.8,x:341.2,y:-237.1},9).to({regX:8.1,regY:11.9,rotation:37.2,x:335.8,y:-224.1},9).to({regX:8,regY:12,rotation:7.2,x:333.5,y:-209},11).to({regX:8.1,scaleX:0.69,scaleY:0.7,rotation:0,skewX:18.6,skewY:17.1,x:332.2,y:-206.2},3).to({regX:8,regY:11.8,scaleX:0.69,scaleY:0.69,rotation:37.2,skewX:0,skewY:0,x:326.1,y:-181.6},6).to({regX:8.1,scaleX:0.69,scaleY:0.69,rotation:22.1,x:320,y:-173.9},5).wait(1));

	// Symbol 10
	this.instance_47 = new lib.Symbol10_1();
	this.instance_47.parent = this;
	this.instance_47.setTransform(318.4,-200.6,0.693,0.693,5.8,0,0,23.2,23.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_47).to({regX:23.1,regY:23.4,rotation:7.2,x:312.7,y:-194.7},4).to({rotation:6.2,x:308.6,y:-194.1},3).to({regY:23.2,scaleX:0.68,scaleY:0.7,rotation:0,skewX:23.5,skewY:20.2,x:311.5,y:-192.7},3).to({regY:23.4,scaleX:0.69,scaleY:0.69,rotation:3.8,skewX:0,skewY:0,x:300.4,y:-192.8},3).to({rotation:7.2,x:295.7,y:-182.5},6).to({x:284.5,y:-173.9},6).to({x:283.8,y:-171.9},2).to({rotation:-22.8,x:251.5,y:-156.8},5).to({rotation:12.4,x:241.5,y:-131.8},3).to({rotation:7.2,x:242.9,y:-140.3},7).to({regY:23.3,rotation:28.4,x:257.8,y:-152.8},4).to({regY:23.4,rotation:7.2,x:267.5,y:-154.9},6).wait(2).to({rotation:7.2,x:270.6,y:-159.5},0).to({regX:22.9,regY:23.1,scaleX:0.59,scaleY:0.66,rotation:0,skewX:68.8,skewY:69.9,x:304.6,y:-157.4},5,cjs.Ease.get(0.99)).to({x:308.8,y:-158.9,alpha:0},10).to({_off:true},1).wait(34).to({_off:false,regX:23.1,regY:23.4,scaleX:0.69,scaleY:0.69,rotation:7.2,skewX:0,skewY:0,x:356.1,y:-315.1},0).to({regX:23.2,rotation:3.8,x:353.6,y:-306.1,alpha:1},9).to({regX:23.1,rotation:7.2,x:351.6,y:-295.5},10).to({regX:23.2,rotation:3.8,x:347.8,y:-284.6},9).to({regX:22.9,rotation:7.2,x:341,y:-276.7},10).to({regX:23.1,x:340.4,y:-262.7},9).to({regX:23.2,rotation:3.8,x:336.6,y:-251.8},9).to({regX:23.1,rotation:7.2,x:332.7,y:-237.4},11).to({rotation:0,skewX:22.8,skewY:21.2,x:339.7,y:-237},3).to({regX:23.2,rotation:3.8,skewX:0,skewY:0,x:326.9,y:-209.2},6).to({regY:23.3,rotation:5.3,x:319.8,y:-202.1},5).wait(1));

	// Symbol 8
	this.instance_48 = new lib.Symbol8_1();
	this.instance_48.parent = this;
	this.instance_48.setTransform(332.4,-197.9,0.692,0.692,62.9,0,0,10.1,10.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_48).to({regX:10,regY:10.9,scaleX:0.69,scaleY:0.69,rotation:67.2,x:326.5,y:-191},4).to({regX:9.9,regY:10.8,scaleX:0.69,scaleY:0.69,rotation:63.6,x:322.5,y:-191.3},3).to({regX:10.1,regY:10.6,scaleX:0.67,scaleY:0.71,rotation:0,skewX:61.2,skewY:62.4,x:322.7,y:-191.5},3).to({regX:10,regY:10.8,scaleX:0.69,scaleY:0.69,rotation:56.3,skewX:0,skewY:0,x:314.5,y:-191.9},3).to({rotation:67.2,x:309.5,y:-178.9},6).to({regY:10.9,x:298.3,y:-170.2},6).to({regY:10.8,scaleX:0.69,scaleY:0.69,rotation:50.1,x:299.9,y:-171.2},2).to({regX:10.2,regY:11,scaleX:0.69,scaleY:0.69,rotation:-22.8,x:267.3,y:-164.1},5).to({regX:10,regY:10.8,rotation:87.4,x:255.6,y:-124.2},3).to({regX:10.1,rotation:7.2,x:260.2,y:-138.8},7).to({rotation:16.7,x:270.6,y:-148.2},4).to({regX:10,rotation:67.2,x:282,y:-151.1},6).wait(2).to({regX:10.1,regY:11,rotation:7.2,x:287.9,y:-157.9},0).to({regX:10.3,regY:10.3,scaleX:0.58,scaleY:0.62,rotation:0,skewX:41.5,skewY:37,x:310.8,y:-146.8},5,cjs.Ease.get(0.99)).to({regX:10.4,regY:10.4,x:315,y:-148.2,alpha:0},10).to({_off:true},1).wait(34).to({_off:false,regX:10,regY:10.8,scaleX:0.69,scaleY:0.69,rotation:67.2,skewX:0,skewY:0,x:369.9,y:-311.5},0).to({rotation:56.3,x:367.7,y:-305.2,alpha:1},9).to({rotation:67.2,x:365.4,y:-291.9},10).to({regY:10.9,rotation:56.3,x:361.9,y:-283.7},9).to({rotation:67.2,x:354.9,y:-273},10).to({regX:10.1,regY:11,x:354,y:-258.9},9).to({regX:10,regY:10.8,rotation:56.3,x:350.7,y:-250.9},9).to({rotation:67.2,x:346.4,y:-233.8},11).to({scaleX:0.68,scaleY:0.7,rotation:0,skewX:64.1,skewY:64.8,y:-231.6},3).to({scaleX:0.69,scaleY:0.69,rotation:56.3,skewX:0,skewY:0,x:341,y:-208.4},6).to({regX:10.1,scaleX:0.69,scaleY:0.69,rotation:61.9,x:333.9,y:-199.7},5).wait(1));

	// Symbol 9
	this.instance_49 = new lib.Symbol9_1();
	this.instance_49.parent = this;
	this.instance_49.setTransform(301.1,-203.1,0.694,0.692,0,-23.3,-20.8,25.4,20);

	this.timeline.addTween(cjs.Tween.get(this.instance_49).to({regX:25.1,regY:19.8,scaleX:0.69,scaleY:0.69,rotation:-14.3,skewX:0,skewY:0,x:295.5,y:-199.3},4).to({regX:25.2,scaleX:0.69,scaleY:0.69,rotation:0,skewX:-21.8,skewY:-19.6,x:291.3,y:-197},3).to({regX:25.3,scaleX:0.71,scaleY:0.68,skewX:-11.1,skewY:-9.8,x:295.1,y:-198.3},3).to({regX:25.4,regY:19.9,scaleX:0.7,scaleY:0.69,skewX:-37.2,skewY:-30.5,x:282.8,y:-192.2},3).to({regX:25.1,scaleX:0.69,rotation:-14.3,skewX:0,skewY:0,x:278.5,y:-187.1},6).to({regX:25.2,rotation:-29.3,x:266.8,y:-174},6).to({regX:25.1,regY:19.7,scaleX:0.69,scaleY:0.69,rotation:11.2,x:266.2,y:-178.7},2).to({regX:25.2,regY:19.9,scaleX:0.69,scaleY:0.69,rotation:-22.8,x:232.9,y:-158.4},5).to({regX:25.1,regY:19.8,rotation:27.4,x:232.1,y:-146.8},3).to({regY:19.9,rotation:-13.5,x:226.5,y:-143.7},7).to({regY:19.8,rotation:46.7,x:251.2,y:-169.4},4).to({regY:19.9,rotation:-22.8,x:252.1,y:-158.1},6).wait(2).to({regX:25.2,rotation:7.2,x:255.2,y:-170.2},0).to({regX:24.9,regY:19.4,scaleX:0.5,scaleY:0.64,rotation:0,skewX:51.5,skewY:60,x:311.4,y:-165.6},5,cjs.Ease.get(0.99)).to({regY:19.5,x:315.6,y:-167,alpha:0},10).to({_off:true},1).wait(34).to({_off:false,regX:25.1,regY:19.8,scaleX:0.69,scaleY:0.69,rotation:-14.3,skewX:0,skewY:0,x:338.9,y:-319.7},0).to({regX:25.4,regY:19.9,scaleX:0.7,rotation:0,skewX:-37.2,skewY:-30.5,x:335.9,y:-305.6,alpha:1},9).to({regX:25.1,scaleX:0.69,rotation:-14.3,skewX:0,skewY:0,x:334.4,y:-300.1},10).to({regX:25.3,scaleX:0.7,rotation:0,skewX:-37.2,skewY:-30.5,x:330.2,y:-284.1},9).to({regX:25.1,scaleX:0.69,rotation:-14.3,skewX:0,skewY:0,x:323.9,y:-281.3},10).to({regX:25.2,rotation:0.7,x:323.3,y:-268},9).to({regX:25.4,scaleX:0.7,rotation:0,skewX:-37.2,skewY:-30.5,x:319,y:-251.3},9).to({regX:25.1,regY:19.8,scaleX:0.69,rotation:-14.3,skewX:0,skewY:0,x:315.4,y:-242.1},11).to({regX:25.2,regY:19.7,scaleX:0.7,scaleY:0.69,rotation:0,skewX:9.7,skewY:10.5,x:322.5,y:-247.4},3).to({regX:25.3,regY:19.9,scaleY:0.69,skewX:-37.2,skewY:-30.5,x:309.2,y:-208.7},6).to({regX:25.4,scaleX:0.69,scaleY:0.69,skewX:-25.6,skewY:-22.3,x:302.4,y:-204.1},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(181.2,-233,176.2,157);


(lib.Symbol39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol35();
	this.instance.parent = this;
	this.instance.setTransform(53,52.3,1,1,0,0,0,1.8,1);

	this.instance_1 = new lib.Symbol37();
	this.instance_1.parent = this;
	this.instance_1.setTransform(50.9,51.8,1,1,0,0,0,50.5,38.9);

	this.instance_2 = new lib.Symbol36();
	this.instance_2.parent = this;
	this.instance_2.setTransform(53,52.4,1,1,0,0,0,27.2,14.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol39, new cjs.Rectangle(1.5,0,109.5,88.6), null);


(lib.Symbol38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol31();
	this.instance.parent = this;
	this.instance.setTransform(-153.2,-32.1,1,1,0,0,0,21,17);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-284.3,y:-170.1},39,cjs.Ease.quadInOut).to({x:-170.2,y:-207.2},40,cjs.Ease.quadInOut).to({x:-202.2,y:-71.2},40,cjs.Ease.quadInOut).to({x:-153.2,y:-32.1},30,cjs.Ease.quadInOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-198.5,-72,109.4,88.7);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 6
	this.instance = new lib.Symbol24copy2();
	this.instance.parent = this;
	this.instance.setTransform(-12.8,-81.4,0.802,0.802,-5.4,0,0,31.4,42);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 2
	this.instance_1 = new lib.Symbol24copy();
	this.instance_1.parent = this;
	this.instance_1.setTransform(370.2,-147.5,1,1,0,0,0,288.7,-204.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Mush5.png
	this.instance_2 = new lib.Symbol24_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(77.3,38,1,1,0,0,0,31.5,42);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Symbol 24
	this.instance_3 = new lib.Symbol24();
	this.instance_3.parent = this;
	this.instance_3.setTransform(5,40.5,1,1,0,0,0,31.5,42);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(97,-367.2,359.7,330), null);


// stage content:
(lib.mushketers240400 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.pric.alpha=0;
		
		
		this.cursor = "none";
		this.pric.mouseEnabled = false;
		this.addEventListener("tick", fl_CustomMouseCursor_2.bind(this));
		
		function fl_CustomMouseCursor_2() {
			this.pric.x = stage.mouseX/window.devicePixelRatio;
			this.pric.y = stage.mouseY/window.devicePixelRatio;
		
		}
		
		
		
		stage.canvas.addEventListener("mouseover", fl_Clickover3.bind(this));
		
		function fl_Clickover3()
		{
		
			this.pric.alpha=1;
			this.pric2.alpha=0;
			
		
		}
		
		stage.canvas.addEventListener("mouseout", fl_Clickout3.bind(this));
		
		function fl_Clickout3()
		{
		
			this.pric.alpha=0;
			this.pric2.alpha=1;
		
		}
		
		
		
		document.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		window.open(clickTAG, "_blank");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Symbol 1
	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(120.5,23,1,1,0,0,0,196.5,50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 7
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgbBBIAohsIgzAAIAAgVIBNAAIAAAPIgoByg");
	this.shape.setTransform(225.4,378.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgbBGIAliLIASAAIglCLg");
	this.shape_1.setTransform(217.8,378.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCC00").s().p("AgaA1QgKgOgBgaIAAgXQAAgbAKgOQAKgPARAAQASAAAKAPQAKAOAAAaIAAAWQAAAbgKAOQgKAPgSAAQgRAAgJgOgAgMgRIAAAgQAAAPAEAIQADAIAFAAQAGAAAEgHQADgIAAgOIAAgfQAAgPgDgIQgEgIgGAAQgLAAgBAcg");
	this.shape_2.setTransform(210.3,378.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgJAuQgFgDAAgHQAAgGAFgEQAEgDAFAAQAHAAAEADQADAEAAAGQAAAHgDADQgFAEgGAAQgFAAgEgEgAgJgZQgFgEAAgGQAAgGAFgEQAEgEAFAAQAHAAAEAEQADAEAAAGQAAAGgDAEQgFADgGAAQgFAAgEgDg");
	this.shape_3.setTransform(199.1,379.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AghA0QgMgOgBgaIAAgVQAAgbANgPQAMgPAVAAQAWAAAMAPQANAPAAAaIAAAWQAAAagMAOQgNAPgWAAQgUAAgNgPgAgOgjQgFAIAAARIAAAWQAAARAFAIQAFAIAJAAQALAAAFgIQAFgIAAgRIAAgVQAAgSgFgIQgFgJgLAAQgJAAgFAJg");
	this.shape_4.setTransform(191,378.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgNBBIAAhrIgfAAIAAgWIBZAAIAAAWIggAAIAABrg");
	this.shape_5.setTransform(180.6,378.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AATBBIAAhVIglBVIgaAAIAAiBIAaAAIAABVIAlhVIAaAAIAACBg");
	this.shape_6.setTransform(170,378.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgpBBIAAiBIBHAAIAAAWIgtAAIAAAZIAPAAQATAAAMALQALAKAAATQAAASgLAMQgMALgSABgAgPArIAPAAQAHAAAFgGQAEgFAAgJQAAgJgEgFQgFgFgHgBIgPAAg");
	this.shape_7.setTransform(159.9,378.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgVBCIgGgBIgBgVIAHAAQAEAAADgCQACgDACgHIABgFIglhcIAcAAIATA6IARg6IAcAAIgjBnQgGAQgGAGQgHAFgKABg");
	this.shape_8.setTransform(149.7,378.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 6
	this.instance_1 = new lib.Symbol41();
	this.instance_1.parent = this;
	this.instance_1.setTransform(52.2,377.1,1,1,0,0,0,39.2,13.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Layer 1
	this.pric = new lib.Symbol39();
	this.pric.parent = this;
	this.pric.setTransform(410.2,396.1,1,1,0,0,0,55.5,44.6);

	this.timeline.addTween(cjs.Tween.get(this.pric).wait(1));

	// Symbol 6
	this.pric2 = new lib.Symbol38();
	this.pric2.parent = this;
	this.pric2.setTransform(383.7,394.7,1,1,0,0,0,55.5,44.6);

	this.timeline.addTween(cjs.Tween.get(this.pric2).wait(1));

	// Symbol 5
	this.instance_2 = new lib.Symbol5();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-145.4,472.9,1,1,0,0,0,16.5,25);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// back.jpg
	this.instance_3 = new lib.back();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-230,48,0.581,0.581);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-110,173,695.6,467.1);
// library properties:
lib.properties = {
	id: '12BB233E70C44950961797EB363644C3',
	width: 240,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/arrow.png", id:"arrow"},
		{src:"images/back.jpg", id:"back"},
		{src:"images/Bitmap1.png", id:"Bitmap1"},
		{src:"images/bomb.png", id:"bomb"},
		{src:"images/Mush0.png", id:"Mush0"},
		{src:"images/Mush1.png", id:"Mush1"},
		{src:"images/Mush2.png", id:"Mush2"},
		{src:"images/Mush3.png", id:"Mush3"},
		{src:"images/Mush4.png", id:"Mush4"},
		{src:"images/Mush5.png", id:"Mush5"},
		{src:"images/Mush6.png", id:"Mush6"},
		{src:"images/ork1.png", id:"ork1"},
		{src:"images/ork2.png", id:"ork2"},
		{src:"images/ork3.png", id:"ork3"},
		{src:"images/ork4.png", id:"ork4"},
		{src:"images/ork5.png", id:"ork5"},
		{src:"images/ork6.png", id:"ork6"},
		{src:"images/ork7.png", id:"ork7"},
		{src:"images/plaxa.png", id:"plaxa"},
		{src:"images/round1.png", id:"round1"},
		{src:"images/text1.png", id:"text1"}
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
an.compositions['12BB233E70C44950961797EB363644C3'] = {
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