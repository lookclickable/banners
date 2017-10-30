(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"fon_wtrafnoi600_300_atlas_", frames: [[0,0,1104,748],[1311,297,50,50],[1106,349,65,135],[1106,0,223,229],[1331,165,45,63],[1173,450,180,32],[1193,231,76,100],[1193,333,53,115],[1248,333,50,45],[1300,349,46,46],[1420,95,34,34],[1331,230,42,65],[1383,67,50,26],[1404,0,46,32],[1452,0,33,35],[1451,37,29,37],[1357,43,24,116],[1331,43,24,120],[1106,486,94,88],[1106,231,85,116],[1248,380,31,66],[1271,231,38,66],[1311,231,14,47],[1383,95,35,34],[1404,34,45,31],[1331,0,71,41],[1271,299,23,28],[1348,349,80,24]]}
];



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
	this.spriteSheet = ss["fon_wtrafnoi600_300_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.ball = function() {
	this.spriteSheet = ss["fon_wtrafnoi600_300_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.boda = function() {
	this.spriteSheet = ss["fon_wtrafnoi600_300_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.bodar = function() {
	this.spriteSheet = ss["fon_wtrafnoi600_300_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.bodyy1 = function() {
	this.spriteSheet = ss["fon_wtrafnoi600_300_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.flogo = function() {
	this.spriteSheet = ss["fon_wtrafnoi600_300_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.footr1 = function() {
	this.spriteSheet = ss["fon_wtrafnoi600_300_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.footr2 = function() {
	this.spriteSheet = ss["fon_wtrafnoi600_300_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.footy1 = function() {
	this.spriteSheet = ss["fon_wtrafnoi600_300_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.footy2 = function() {
	this.spriteSheet = ss["fon_wtrafnoi600_300_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.hand1 = function() {
	this.spriteSheet = ss["fon_wtrafnoi600_300_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.handr1 = function() {
	this.spriteSheet = ss["fon_wtrafnoi600_300_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.handr2 = function() {
	this.spriteSheet = ss["fon_wtrafnoi600_300_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.handy1 = function() {
	this.spriteSheet = ss["fon_wtrafnoi600_300_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.handy3 = function() {
	this.spriteSheet = ss["fon_wtrafnoi600_300_atlas_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.heady1 = function() {
	this.spriteSheet = ss["fon_wtrafnoi600_300_atlas_"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.leg1 = function() {
	this.spriteSheet = ss["fon_wtrafnoi600_300_atlas_"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.leg2 = function() {
	this.spriteSheet = ss["fon_wtrafnoi600_300_atlas_"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.legr1 = function() {
	this.spriteSheet = ss["fon_wtrafnoi600_300_atlas_"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.legr2 = function() {
	this.spriteSheet = ss["fon_wtrafnoi600_300_atlas_"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.legy1 = function() {
	this.spriteSheet = ss["fon_wtrafnoi600_300_atlas_"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.legy2 = function() {
	this.spriteSheet = ss["fon_wtrafnoi600_300_atlas_"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.shold = function() {
	this.spriteSheet = ss["fon_wtrafnoi600_300_atlas_"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.shold2 = function() {
	this.spriteSheet = ss["fon_wtrafnoi600_300_atlas_"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.sholdr1 = function() {
	this.spriteSheet = ss["fon_wtrafnoi600_300_atlas_"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.sholdr2 = function() {
	this.spriteSheet = ss["fon_wtrafnoi600_300_atlas_"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.sholdy1 = function() {
	this.spriteSheet = ss["fon_wtrafnoi600_300_atlas_"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.sholdy2 = function() {
	this.spriteSheet = ss["fon_wtrafnoi600_300_atlas_"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();
// helper functions:

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


(lib.Symbol85 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E0182B").s().p("AgSBwQgFgFgCgHIAHAAQAKAAAIgIQAGgIAAgLIgBgFQAIACAGAGQAHAIAAAJQAAALgHAIQgIAIgKAAQgMAAgHgIgAgUAkIAAgUIAUAAIAAiHIAUAAIAACbg");
	this.shape.setTransform(4.7,14);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFE00").s().p("AgEB4QgIgCgGgGQgHgIAAgLQAAgKAHgHQAIgIALAAQALAAAHAIQAFAGACAGIAAAFQAAALgHAIQgHAIgLAAIgFAAgAAAAkIgUAAIAAibIApAAIAAAUIAACHg");
	this.shape_1.setTransform(2.6,12);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol85, new cjs.Rectangle(0,0,7.3,26.1), null);


(lib.Symbol84 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E0182B").s().p("ABLB4IgIgUIAhAAIhdjbIAMAAIBlDvgAh3B4IAJgUIAOAAIAYg9IBmAAIAIAUIhZAAIgZA9gAg4AAIAkhVIAOAjIgVAyg");
	this.shape.setTransform(14,14);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFE00").s().p("ABXB4IgMAAIgRgpIgIgUIhmAAIgYA9IgOAAIgdAAIBljvIAkAAIAJAUIBdDbgAgkATIAdAAIApAAIgVgxIgNgjg");
	this.shape_1.setTransform(12,12);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol84, new cjs.Rectangle(0,0,25.9,26), null);


(lib.Symbol83 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFE00").s().p("AAAB4IgUAAIAAizIAAgUIg6AAIgUAAIAAgoIDFAAIAAAUIAAAUIhOAAIAADHg");
	this.shape.setTransform(9.9,12);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E0182B").s().p("AgUB4IAAgUIAVAAIAAjHIBOAAIAAgUIATAAIAAAoIhNAAIAADHgAhihPIAAgUIA6AAIAAAUg");
	this.shape_1.setTransform(11.9,14);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol83, new cjs.Rectangle(0,0,21.7,25.9), null);


(lib.Symbol82 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E0182B").s().p("AglBvQgMgCgMgEQgLgFgKgGQgKgGgIgIIgKgMIAIAGQAKAGALAFQAMAEAMACQANADANAAQANAAANgDQALgCALgFQALgEAKgHQAKgGAJgIQAIgIAHgKQAGgKAFgLQAEgMADgLQACgMAAgOQAAgOgCgMQgDgNgEgLQgFgMgGgJIgEgGIAJAIQAIAIAHAKQAGAJAFAMQAEALADANQACAMAAAOQAAANgCAMQgDAMgEAMQgFALgGAKQgHAKgIAIQgJAIgKAGQgKAHgLAEQgLAFgMACQgNADgMAAQgNAAgNgDgAhYAeQgLgLgGgPQgGgPAAgSQAAgSAGgQQAGgPALgLQALgLAOgHQAPgGARAAQARAAAOAGQAOAHALALIAIAKIgOgIQgOgGgQAAQgRAAgPAGQgOAHgLALQgLALgGAPQgGAQAAASQAAARAGAQQAEAJAFAIQgGgFgGgGg");
	this.shape.setTransform(15.6,15.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFE00").s().p("AgZB5QgMgCgMgFQgLgEgKgGIgIgGIgKgJQgIgIgHgKQgGgJgFgMQgFgLgCgNQgCgMAAgOQAAgMACgMQACgNAFgLQAEgLAHgKQAGgJAIgJQAIgIAKgHQAKgGALgFQAMgFAMgCQANgCANAAQANAAANACQAMACALAEQAMAFAJAGQAKAGAJAIQAGAGAFAHIAEAFQAGAKAFALQAEAMADAMQACANAAANQAAANgCANQgDAMgEALQgFALgGAKQgHAKgIAIQgJAIgKAHQgKAGgLAFQgLAEgMADQgNACgNAAQgMAAgNgCgAgfhNQgOAGgLALQgLAMgGAPQgGAQAAARQAAARAGAQQAGAPALAMQAGAGAGAEIAOAHQAOAHAQAAQASAAAQgHQAOgGALgMQAKgLAGgPQAFgQAAgRQAAgRgGgQQgEgJgFgHIgIgLQgLgLgPgGQgOgGgRAAQgQAAgPAGg");
	this.shape_1.setTransform(12.4,12.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol82, new cjs.Rectangle(0,0,26.9,26.7), null);


(lib.Symbol81 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E0182B").s().p("AhPBwIAAgUIAWAAIAAhWIAfABQAOAAAXgGQAQgFALgMQALgKAGgOQAFgOAAgQQAAgPgEgNQgDgHgEgGQAGADAFAFQALALAFAOQAEANAAAPQAAAQgFAOQgGAOgLAJQgLAMgQAGQgYAGgNAAIgfgBIAABWgAg5ghIAAhJIAegBQALAAAIACQAIADAFAEQAFAFADAHIABACIgDgBQgIgCgKAAIgeABIAAA2g");
	this.shape.setTransform(10,14.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFE00").s().p("Ag7B4IgUAAIAAjuIBEgBQAQAAAbAHQARAGALALQAFAFAEAGQAEAGADAHQAEANAAAQQAAAPgFAOQgGANgLALQgLALgQAGQgYAGgNAAIgfgBIAABXgAglhPIAABJIAUACIAKAAQAIAAAIgCQAIgCAGgFQAGgFADgHQAEgIAAgJQAAgIgCgGIgBgDQgDgHgFgEQgGgFgIgCQgIgDgKAAg");
	this.shape_1.setTransform(8,12);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol81, new cjs.Rectangle(0,0,18.1,26), null);


(lib.Symbol80 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFE00").s().p("AgZB5QgMgCgMgFQgLgEgKgGIgIgGIgKgJQgIgIgHgKQgGgJgFgMQgFgLgCgNQgCgLAAgMIAAgFIACgWQACgNAFgLQAEgLAHgKQAGgJAIgJQAIgIAKgHQAKgGALgFQAMgFAMgCQANgCANAAQANAAANACQAMACALAEQAMAFAJAGQAKAGAJAIQAGAGAFAHIAEAFQAGAKAFALQAEAMADAMQACANAAANQAAANgCANQgDAMgEALQgFALgGAKQgHAKgIAIQgJAIgKAHQgKAGgLAFQgLAEgMADQgNACgNAAQgMAAgNgCgAgfhNQgOAGgLALQgLAMgGAPQgGAQAAARQAAARAGAQQAGAPALAMQAGAGAGAEIAOAHQAOAHAQAAQASAAAQgHQAOgGALgMQAKgLAGgPQAFgQAAgRQAAgRgGgQQgEgJgFgHIgIgLQgLgLgPgGQgOgGgRAAQgQAAgPAGg");
	this.shape.setTransform(12.4,12.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E0182B").s().p("AglBvQgMgCgMgEQgLgFgKgGQgKgGgIgIIgKgMIAIAGQAKAGALAFQAMAEAMACQANADANAAQANAAANgDQALgCALgFQALgEAKgHQAKgGAJgIQAIgIAHgKQAGgKAFgLQAEgMADgLQACgMAAgOQAAgOgCgMQgDgNgEgLQgFgMgGgJIgEgGIAJAIQAIAIAHAKQAGAJAFAMQAEALADANQACAMAAAOQAAANgCAMQgDAMgEAMQgFALgGAKQgHAKgIAIQgJAIgKAGQgKAHgLAEQgLAFgMACQgNADgMAAQgNAAgNgDgAhYAeQgLgLgGgPQgGgPAAgSQAAgSAGgQQAGgPALgLQALgLAOgHQAPgGARAAQARAAAOAGQAOAHALALIAIAKIgOgIQgOgGgQAAQgRAAgPAGQgOAHgLALQgLALgGAPQgGAQAAASQAAARAGAQQAEAJAFAIQgGgFgGgGg");
	this.shape_1.setTransform(15.6,15.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol80, new cjs.Rectangle(0,0,26.9,26.7), null);


(lib.Symbol79 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFE00").s().p("Ag5B3IgUAAIAAjtIBFgCQAUAAAQAFQAOAEAKAIQAHAGAFAJIACAEQAEALAAAMQAAAKgDAJQgCAIgFAHQgEAHgGAFIgKAHIgEACIAAAAIAAABQAJACAHADIALAJIADACIAFAIIADAJQAEAJAAAMQAAASgHAOQgHANgMAJQgLAJgRAEQgQAFgSAAgAgjBQIAUABIAIAAQAKAAAIgCQAIgCAFgEQAGgFADgGQADgHAAgIIgBgIIgCgFQgDgGgFgEQgGgEgHgCQgIgBgJAAIgeAAgAgjhPIAAA8IAUAAIAJAAQAOAAAKgIQAFgEACgGQADgGAAgIIAAgHIgDgGQgCgFgFgEQgKgHgQAAg");
	this.shape.setTransform(7.8,12.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E0182B").s().p("AhNBxIAAgTIAvABQATAAAPgFQARgEALgIQAMgKAHgNQAHgOAAgSQAAgMgEgJIgDgIIABABQAIAFAGAGQAFAHADAJQAEAKAAALQAAASgHAOQgHANgMAJQgLAJgRAFQgQAEgSAAgAg3A2IAAg+IAeAAQAKAAAIABQAHADAFADQAFADADAGIACAGIgDgBQgIgCgJAAIgeAAIAAAsIgUgBgAAggZQgHgEgJgCIACgBIACgCIAKgHQAGgFAEgHQAFgHACgHQADgKAAgJQAAgNgEgLIgCgEIAIAFQAJAIAFALQAEALAAANQAAAKgDAJQgCAHgFAIQgEAGgGAFIgHAFIgLgJgAg3gtIAAg8IAbgBQARAAAKAHQAEAEACAFIADAHQgIgDgIAAIgbABIAAAog");
	this.shape_1.setTransform(9.8,14.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol79, new cjs.Rectangle(0,0,17.6,26.2), null);


(lib.Symbol78 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E0182B").s().p("AhNBxIAAgTIAvABQATAAAPgFQARgEALgIQAMgKAHgNQAHgOAAgSQAAgMgEgJIgDgIIABABQAIAFAGAGQAFAHADAJQAEAKAAALQAAASgHAOQgHANgMAJQgLAJgRAFQgQAEgSAAgAg3A2IAAg+IAeAAQAKAAAIABQAHADAFADQAFADADAGIACAGIgDgBQgIgCgJAAIgeAAIAAAsIgUgBgAAggZQgHgEgJgCIACgBIACgCIAKgHQAGgFAEgHQAFgHACgHQADgKAAgJQAAgNgEgLIgCgEIAIAFQAJAIAFALQAEALAAANQAAAKgDAJQgCAHgFAIQgEAGgGAFIgHAFIgLgJgAg3gtIAAg8IAbgBQARAAAKAHQAEAEACAFIADAHQgIgDgIAAIgbABIAAAog");
	this.shape.setTransform(9.8,14.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFE00").s().p("Ag5B3IgUAAIAAjtIBFgCQAUAAAQAFQAOAEAKAIQAHAGAFAJIACAEQAEALAAAMQAAAKgDAJQgCAIgFAHQgEAHgGAFIgKAHIgEACIAAAAIAAABQAJACAHADIALAJIADACIAFAIIADAJQAEAJAAAMQAAASgHAOQgHANgMAJQgLAJgRAEQgQAFgSAAgAgjBQIAUABIAIAAQAKAAAIgCQAIgCAFgEQAGgFADgGQADgHAAgIIgBgIIgCgFQgDgGgFgEQgGgEgHgCQgIgBgJAAIgeAAgAgjhPIAAA8IAUAAIAJAAQAOAAAKgIQAFgEACgGQADgGAAgIIAAgHIgDgGQgCgFgFgEQgKgHgQAAg");
	this.shape_1.setTransform(7.8,12.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol78, new cjs.Rectangle(0,0,17.6,26.2), null);


(lib.Symbol77 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E0182B").s().p("AA8B4IAAgUIAWAAIAAjbIAUAAIAADvgAhlB4IAAgUIARAAIB8ipIAAAvIhoCOgAhPh3IAUAAIAAB7IgUAbg");
	this.shape.setTransform(12.2,14);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFE00").s().p("ABQB4IgUAAIAAh6IAAgvIh8CpIgRAAIgUAAIAAjvIAqAAIAAAUIAACWIAUgbIBoiPIAlAAIAAAUIAADbg");
	this.shape_1.setTransform(10.2,12);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol77, new cjs.Rectangle(0,0,22.4,25.9), null);


(lib.Symbol76 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFE00").s().p("ABoCNIgUAAIAAgXIAAgUIimAAIAAArIgUAAIgUAAIAAhSIAaAAQANgWAIgZQAGgUAEgYQAEgdACgfIACgwICTAAIAAAUIAACzIAUAAIANAAIAAAUIAAA+gAgUg7QgCAWgDAVIgIAjIgJAaQgFAKgDAEIAeAAIBFAAIAAiLIAAgUIhBAAg");
	this.shape.setTransform(12.3,14.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E0182B").s().p("ABUCNIAAgUIATAAIAAg+IAUAAIAABSgAh6CNIAAgUIAUAAIAAgrICmAAIAAAUIiSAAIAAArgABGAnIAAizIAUAAIAACzgAhGAnQADgEAFgKIAJgZIAIgkQADgVACgWIAEgpIBBAAIAAAUIgtAAIgEApQgCAWgDAVIgIAjIgHAUg");
	this.shape_1.setTransform(14.3,16.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol76, new cjs.Rectangle(0,0,26.6,30.2), null);


(lib.Symbol75 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E0182B").s().p("ABSB4IgIgUIAhAAIhdjbIAMAAIBWDOIAAAhgAhwB4IAJgUIAOAAIAYg9IBmAAIAIAUIhZAAIgZA9gAgxAAIAkhVIANAjIgUAyg");
	this.shape.setTransform(13.3,14);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFE00").s().p("ABXB4IgMAAIgRgpIgIgUIhmAAIgYA9IgOAAIgdAAIBljvIAkAAIAJAUIBdDbgAgkATIAdAAIApAAIgVgxIgNgjg");
	this.shape_1.setTransform(12,12);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol75, new cjs.Rectangle(0,0,24.5,26), null);


(lib.Symbol74 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E0182B").s().p("AA1B4IAAgUIAWAAIAAjbIAUAAIAADvgAheB4IAAgUIAWAAIAAjHIBpAAIAAAUIhVAAIAADHg");
	this.shape.setTransform(11.5,14);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFE00").s().p("ABJB4IgUAAIAAizIAAgUIhpAAIAADHIgWAAIgUAAIAAjvIC9AAIAAAUIAADbg");
	this.shape_1.setTransform(9.5,12);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol74, new cjs.Rectangle(0,0,21.1,25.9), null);


(lib.Symbol73 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFE00").s().p("AgZB5QgMgCgMgFQgLgEgKgGIgIgGIgKgJQgIgIgHgKQgGgJgFgMQgFgLgCgNQgCgMAAgOQAAgMACgMQACgNAFgLQAEgLAHgKQAGgJAIgJQAIgIAKgHQAKgGALgFQAMgFAMgCQANgCANAAQANAAANACQAMACALAEQAMAFAJAGQAKAGAJAIQAGAGAFAHIAEAFQAGAKAFALQAEAMADAMQACANAAANQAAANgCANQgDAMgEALQgFALgGAKQgHAKgIAIQgJAIgKAHQgKAGgLAFQgLAEgMADQgNACgNAAQgMAAgNgCgAgfhNQgOAGgLALQgLAMgGAPQgGAQAAARQAAARAGAQQAGAPALAMQAGAGAGAEIAOAHQAOAHAQAAQASAAAQgHQAOgGALgMQAKgLAGgPQAFgQAAgRQAAgRgGgQQgEgJgFgHIgIgLQgLgLgPgGQgOgGgRAAQgQAAgPAGg");
	this.shape.setTransform(12.4,12.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E0182B").s().p("AglBvQgMgCgMgEQgLgFgKgGQgKgGgIgIIgKgMIAIAGQAKAGALAFQAMAEAMACQANADANAAQANAAANgDQALgCALgFQALgEAKgHQAKgGAJgIQAIgIAHgKQAGgKAFgLQAEgMADgLQACgMAAgOQAAgOgCgMQgDgNgEgLQgFgMgGgJIgEgGIAJAIQAIAIAHAKQAGAJAFAMQAEALADANQACAMAAAOQAAANgCAMQgDAMgEAMQgFALgGAKQgHAKgIAIQgJAIgKAGQgKAHgLAEQgLAFgMACQgNADgMAAQgNAAgNgDgAhYAeQgLgLgGgPQgGgPAAgSQAAgSAGgQQAGgPALgLQALgLAOgHQAPgGARAAQARAAAOAGQAOAHALALIAIAKIgOgIQgOgGgQAAQgRAAgPAGQgOAHgLALQgLALgGAPQgGAQAAASQAAARAGAQQAEAJAFAIQgGgFgGgGg");
	this.shape_1.setTransform(15.6,15.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol73, new cjs.Rectangle(0,0,26.9,26.7), null);


(lib.Symbol72 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E0182B").s().p("AA1B4IAAgUIAWAAIAAjbIAUAAIAADvgAheB4IAAgUIAWAAIAAjHIBpAAIAAAUIhVAAIAADHg");
	this.shape.setTransform(11.5,14);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFE00").s().p("ABJB4IgUAAIAAizIAAgUIhpAAIAADHIgWAAIgUAAIAAjvIC9AAIAAAUIAADbg");
	this.shape_1.setTransform(9.5,12);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol72, new cjs.Rectangle(0,0,21.1,25.9), null);


(lib.Symbol71 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().rr(-390.95,-161.3,781.9,322.6,6);
	this.shape.setTransform(390.9,161.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol71, new cjs.Rectangle(0,0,781.9,322.6), null);


(lib.Symbol69 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flogo();
	this.instance.parent = this;
	this.instance.setTransform(-39,-7,0.429,0.429);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E0182B").s().rr(-53.25,-14,106.5,28,6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol69, new cjs.Rectangle(-53.2,-14,106.5,28), null);


(lib.Symbol68 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#00CC00","#FFCC00","#FF0000"],[0,0.478,1],-122.5,3.5,122.5,3.5).s().p("AzIBpIAAjRMAmRAAAIAADRg");
	this.shape.setTransform(122.5,10.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol68, new cjs.Rectangle(0,0,245.1,21), null);


(lib.Symbol64 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#E0182B").ss(7,1,1).p("ABVm/QCHAYBmBmQBsBsAVCQAHDBGQgVCQhsBsQhmBmiHAYAAAoRIAADwAnBhFQAUiQBshsQBohoCKgXAkIAAIkJAAAhPHAQiKgWhohoQhshsgUiQABQAAIhMAAIAABQAAEAAIhIAAAAEhPIAABPAISAAIj/AAAAAEiIAADw");
	this.shape.setTransform(53,53);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol64, new cjs.Rectangle(-3.5,-3.5,113,113), null);


(lib.Symbol59 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.back();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.658,0.658);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol59, new cjs.Rectangle(0,0,726.2,492), null);


(lib.Symbol58 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.back();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.658,0.658);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol58, new cjs.Rectangle(0,0,726.2,492), null);


(lib.Symbol54 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Eg7xAVBMAAAgjTQWihJWzgQIAAHLIbBAAIAAnMIAAHMI7BAAIAAnLIAAlVIbBAAIAAFUQXdAQXwBKMAAAAjTg");
	mask.setTransform(358.7,350.6);

	// Layer 1
	this.instance = new lib.back();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.631,0.631);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol54, new cjs.Rectangle(0,216.1,696.1,255.6), null);


(lib.Symbol41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ball();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.661,0.651);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol41, new cjs.Rectangle(0,0,33.1,32.6), null);


(lib.Symbol38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bodyy1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol38, new cjs.Rectangle(0,0,45,63), null);


(lib.Symbol37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.footy2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol37, new cjs.Rectangle(0,0,46,46), null);


(lib.Symbol36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.footy1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol36, new cjs.Rectangle(0,0,50,45), null);


(lib.Symbol35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.handy1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol35, new cjs.Rectangle(0,0,46,32), null);


(lib.Symbol34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.handy3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol34, new cjs.Rectangle(0,0,33,35), null);


(lib.Symbol33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.heady1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol33, new cjs.Rectangle(0,0,29,37), null);


(lib.Symbol32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.legy1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol32, new cjs.Rectangle(0,0,31,66), null);


(lib.Symbol31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.legy2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol31, new cjs.Rectangle(0,0,38,66), null);


(lib.Symbol30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.sholdy1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol30, new cjs.Rectangle(0,0,23,28), null);


(lib.Symbol29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.sholdy2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol29, new cjs.Rectangle(0,0,80,24), null);


(lib.Symbol26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.boda();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol26, new cjs.Rectangle(0,0,65,135), null);


(lib.Symbol25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.leg1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol25, new cjs.Rectangle(0,0,24,116), null);


(lib.Symbol24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.leg2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol24, new cjs.Rectangle(0,0,24,120), null);


(lib.Symbol23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.shold();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol23, new cjs.Rectangle(0,0,14,47), null);


(lib.Symbol22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.shold2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol22, new cjs.Rectangle(0,0,35,34), null);


(lib.Symbol21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.hand1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol21, new cjs.Rectangle(0,0,34,34), null);


(lib.Symbol20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.shold();
	this.instance.parent = this;
	this.instance.setTransform(14,0,0.996,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol20, new cjs.Rectangle(0,0,14,47), null);


(lib.Symbol18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bodar();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol18, new cjs.Rectangle(0,0,223,229), null);


(lib.Symbol17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.footr1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol17, new cjs.Rectangle(0,0,76,100), null);


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.footr2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol16, new cjs.Rectangle(0,0,53,115), null);


(lib.Symbol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.handr1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol15, new cjs.Rectangle(0,0,42,65), null);


(lib.Symbol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.handr2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol14, new cjs.Rectangle(0,0,50,26), null);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.legr1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol13, new cjs.Rectangle(0,0,94,88), null);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.legr2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol12, new cjs.Rectangle(0,0,85,116), null);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.sholdr1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol11, new cjs.Rectangle(0,0,45,31), null);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.sholdr2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol10, new cjs.Rectangle(0,0,71,41), null);


(lib.Symbol70 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Symbol 85
	this.instance = new lib.Symbol85();
	this.instance.parent = this;
	this.instance.setTransform(355.4,122.9,1,1,0,0,0,3.6,13);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:359.9},4).wait(36).to({x:355.4},5).wait(30));

	// Symbol 84
	this.instance_1 = new lib.Symbol84();
	this.instance_1.parent = this;
	this.instance_1.setTransform(338,122.9,1,1,0,0,0,13,13);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({x:342.6},4).wait(36).to({x:338},5).wait(28));

	// Symbol 83
	this.instance_2 = new lib.Symbol83();
	this.instance_2.parent = this;
	this.instance_2.setTransform(315.6,122.9,1,1,0,0,0,10.8,13);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(4).to({x:320.1},4).wait(36).to({x:315.6},5).wait(26));

	// Symbol 82
	this.instance_3 = new lib.Symbol82();
	this.instance_3.parent = this;
	this.instance_3.setTransform(291.4,122.9,1,1,0,0,0,13.4,13.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(6).to({x:296},4).wait(36).to({x:291.4},5).wait(24));

	// Symbol 81
	this.instance_4 = new lib.Symbol81();
	this.instance_4.parent = this;
	this.instance_4.setTransform(268,122.9,1,1,0,0,0,9,13);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(8).to({x:272.5},4).wait(36).to({x:268},5).wait(22));

	// Symbol 80
	this.instance_5 = new lib.Symbol80();
	this.instance_5.parent = this;
	this.instance_5.setTransform(242.7,122.9,1,1,0,0,0,13.4,13.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(10).to({x:247.2},4).wait(36).to({x:242.7},5).wait(20));

	// Symbol 79
	this.instance_6 = new lib.Symbol79();
	this.instance_6.parent = this;
	this.instance_6.setTransform(218.8,122.9,1,1,0,0,0,8.8,13.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(12).to({x:223.4},4).wait(36).to({x:218.8},5).wait(18));

	// Symbol 78
	this.instance_7 = new lib.Symbol78();
	this.instance_7.parent = this;
	this.instance_7.setTransform(190.6,122.9,1,1,0,0,0,8.8,13.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(14).to({x:195.2},4).wait(36).to({x:190.6},5).wait(16));

	// Symbol 77
	this.instance_8 = new lib.Symbol77();
	this.instance_8.parent = this;
	this.instance_8.setTransform(158.8,122.9,1,1,0,0,0,11.2,13);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(16).to({x:163.4},4).wait(36).to({x:158.8},5).wait(14));

	// Symbol 76
	this.instance_9 = new lib.Symbol76();
	this.instance_9.parent = this;
	this.instance_9.setTransform(132.2,125,1,1,0,0,0,13.2,15.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(19).to({x:136.7},4).wait(36).to({x:132.2},5).wait(11));

	// Symbol 75
	this.instance_10 = new lib.Symbol75();
	this.instance_10.parent = this;
	this.instance_10.setTransform(106.7,122.9,1,1,0,0,0,12.2,13);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(22).to({x:111.2},4).wait(36).to({x:106.7},5).wait(8));

	// Symbol 74
	this.instance_11 = new lib.Symbol74();
	this.instance_11.parent = this;
	this.instance_11.setTransform(82.4,122.9,1,1,0,0,0,10.5,13);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(24).to({x:86.9},4).wait(36).to({x:82.4},5).wait(6));

	// Symbol 73
	this.instance_12 = new lib.Symbol73();
	this.instance_12.parent = this;
	this.instance_12.setTransform(55.6,122.9,1,1,0,0,0,13.4,13.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(26).to({x:60.1},4).wait(36).to({x:55.6},5).wait(4));

	// Symbol 72
	this.instance_13 = new lib.Symbol72();
	this.instance_13.parent = this;
	this.instance_13.setTransform(28.8,122.9,1,1,0,0,0,10.5,13);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(29).to({x:33.3},4).wait(36).to({x:28.8},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(18.3,109.6,340.8,30.5);


(lib.Symbol67 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AzIBpIAAjRMAmRAAAIAADRg");
	var mask_graphics_1 = new cjs.Graphics().p("AzFBpIAAjRMAmLAAAIAADRg");
	var mask_graphics_2 = new cjs.Graphics().p("Ay9BpIAAjRMAl7AAAIAADRg");
	var mask_graphics_3 = new cjs.Graphics().p("AywBpIAAjRMAlhAAAIAADRg");
	var mask_graphics_4 = new cjs.Graphics().p("AydBpIAAjRMAk7AAAIAADRg");
	var mask_graphics_5 = new cjs.Graphics().p("AyEBpIAAjRMAkKAAAIAADRg");
	var mask_graphics_6 = new cjs.Graphics().p("AxnBpIAAjRMAjPAAAIAADRg");
	var mask_graphics_7 = new cjs.Graphics().p("AxDBpIAAjRMAiHAAAIAADRg");
	var mask_graphics_8 = new cjs.Graphics().p("AwbBpIAAjRMAg3AAAIAADRg");
	var mask_graphics_9 = new cjs.Graphics().p("AvtBpIAAjRIfbAAIAADRg");
	var mask_graphics_10 = new cjs.Graphics().p("Au5BpIAAjRIdzAAIAADRg");
	var mask_graphics_11 = new cjs.Graphics().p("AuABpIAAjRIcBAAIAADRg");
	var mask_graphics_12 = new cjs.Graphics().p("AtCBpIAAjRIaFAAIAADRg");
	var mask_graphics_13 = new cjs.Graphics().p("Ar+BpIAAjRIX9AAIAADRg");
	var mask_graphics_14 = new cjs.Graphics().p("Aq1BpIAAjRIVrAAIAADRg");
	var mask_graphics_15 = new cjs.Graphics().p("ApoBpIAAjRITRAAIAADRg");
	var mask_graphics_16 = new cjs.Graphics().p("AofBpIAAjRIQ/AAIAADRg");
	var mask_graphics_17 = new cjs.Graphics().p("AnbBpIAAjRIO3AAIAADRg");
	var mask_graphics_18 = new cjs.Graphics().p("AmdBpIAAjRIM7AAIAADRg");
	var mask_graphics_19 = new cjs.Graphics().p("AlkBpIAAjRILIAAIAADRg");
	var mask_graphics_20 = new cjs.Graphics().p("AkwBpIAAjRIJhAAIAADRg");
	var mask_graphics_21 = new cjs.Graphics().p("AkCBpIAAjRIIFAAIAADRg");
	var mask_graphics_22 = new cjs.Graphics().p("AjZBpIAAjRIGzAAIAADRg");
	var mask_graphics_23 = new cjs.Graphics().p("Ai2BpIAAjRIFtAAIAADRg");
	var mask_graphics_24 = new cjs.Graphics().p("AiYBpIAAjRIExAAIAADRg");
	var mask_graphics_25 = new cjs.Graphics().p("AiABpIAAjRIEBAAIAADRg");
	var mask_graphics_26 = new cjs.Graphics().p("AhtBpIAAjRIDbAAIAADRg");
	var mask_graphics_27 = new cjs.Graphics().p("AhfBpIAAjRIC/AAIAADRg");
	var mask_graphics_28 = new cjs.Graphics().p("AhXBpIAAjRICvAAIAADRg");
	var mask_graphics_29 = new cjs.Graphics().p("AhVBpIAAjRICrAAIAADRg");
	var mask_graphics_30 = new cjs.Graphics().p("AhXBpIAAjRICvAAIAADRg");
	var mask_graphics_31 = new cjs.Graphics().p("AhfBpIAAjRIC+AAIAADRg");
	var mask_graphics_32 = new cjs.Graphics().p("AhrBpIAAjRIDXAAIAADRg");
	var mask_graphics_33 = new cjs.Graphics().p("Ah9BpIAAjRID7AAIAADRg");
	var mask_graphics_34 = new cjs.Graphics().p("AiUBpIAAjRIEpAAIAADRg");
	var mask_graphics_35 = new cjs.Graphics().p("AiwBpIAAjRIFhAAIAADRg");
	var mask_graphics_36 = new cjs.Graphics().p("AjRBpIAAjRIGjAAIAADRg");
	var mask_graphics_37 = new cjs.Graphics().p("Aj3BpIAAjRIHvAAIAADRg");
	var mask_graphics_38 = new cjs.Graphics().p("AkiBpIAAjRIJFAAIAADRg");
	var mask_graphics_39 = new cjs.Graphics().p("AlSBpIAAjRIKlAAIAADRg");
	var mask_graphics_40 = new cjs.Graphics().p("AmHBpIAAjRIMPAAIAADRg");
	var mask_graphics_41 = new cjs.Graphics().p("AnBBpIAAjRIODAAIAADRg");
	var mask_graphics_42 = new cjs.Graphics().p("AoBBpIAAjRIQDAAIAADRg");
	var mask_graphics_43 = new cjs.Graphics().p("ApFBpIAAjRISLAAIAADRg");
	var mask_graphics_44 = new cjs.Graphics().p("AqOBpIAAjRIUdAAIAADRg");
	var mask_graphics_45 = new cjs.Graphics().p("ArYBpIAAjRIWxAAIAADRg");
	var mask_graphics_46 = new cjs.Graphics().p("AscBpIAAjRIY5AAIAADRg");
	var mask_graphics_47 = new cjs.Graphics().p("AtbBpIAAjRIa4AAIAADRg");
	var mask_graphics_48 = new cjs.Graphics().p("AuWBpIAAjRIctAAIAADRg");
	var mask_graphics_49 = new cjs.Graphics().p("AvLBpIAAjRIeXAAIAADRg");
	var mask_graphics_50 = new cjs.Graphics().p("Av7BpIAAjRIf3AAIAADRg");
	var mask_graphics_51 = new cjs.Graphics().p("AwmBpIAAjRMAhNAAAIAADRg");
	var mask_graphics_52 = new cjs.Graphics().p("AxMBpIAAjRMAiZAAAIAADRg");
	var mask_graphics_53 = new cjs.Graphics().p("AxtBpIAAjRMAjbAAAIAADRg");
	var mask_graphics_54 = new cjs.Graphics().p("AyJBpIAAjRMAkTAAAIAADRg");
	var mask_graphics_55 = new cjs.Graphics().p("AygBpIAAjRMAlBAAAIAADRg");
	var mask_graphics_56 = new cjs.Graphics().p("AyxBpIAAjRMAlkAAAIAADRg");
	var mask_graphics_57 = new cjs.Graphics().p("Ay+BpIAAjRMAl9AAAIAADRg");
	var mask_graphics_58 = new cjs.Graphics().p("AzGBpIAAjRMAmNAAAIAADRg");
	var mask_graphics_59 = new cjs.Graphics().p("AzIBpIAAjRMAmRAAAIAADRg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:118.5,y:21.5}).wait(1).to({graphics:mask_graphics_1,x:118.3,y:21.5}).wait(1).to({graphics:mask_graphics_2,x:117.5,y:21.5}).wait(1).to({graphics:mask_graphics_3,x:116.1,y:21.5}).wait(1).to({graphics:mask_graphics_4,x:114.2,y:21.5}).wait(1).to({graphics:mask_graphics_5,x:111.8,y:21.5}).wait(1).to({graphics:mask_graphics_6,x:108.8,y:21.5}).wait(1).to({graphics:mask_graphics_7,x:105.3,y:21.5}).wait(1).to({graphics:mask_graphics_8,x:101.2,y:21.5}).wait(1).to({graphics:mask_graphics_9,x:96.6,y:21.5}).wait(1).to({graphics:mask_graphics_10,x:91.4,y:21.5}).wait(1).to({graphics:mask_graphics_11,x:85.7,y:21.5}).wait(1).to({graphics:mask_graphics_12,x:79.5,y:21.5}).wait(1).to({graphics:mask_graphics_13,x:72.7,y:21.5}).wait(1).to({graphics:mask_graphics_14,x:65.4,y:21.5}).wait(1).to({graphics:mask_graphics_15,x:57.7,y:21.5}).wait(1).to({graphics:mask_graphics_16,x:50.3,y:21.5}).wait(1).to({graphics:mask_graphics_17,x:43.6,y:21.5}).wait(1).to({graphics:mask_graphics_18,x:37.3,y:21.5}).wait(1).to({graphics:mask_graphics_19,x:31.6,y:21.5}).wait(1).to({graphics:mask_graphics_20,x:26.5,y:21.5}).wait(1).to({graphics:mask_graphics_21,x:21.9,y:21.5}).wait(1).to({graphics:mask_graphics_22,x:17.8,y:21.5}).wait(1).to({graphics:mask_graphics_23,x:14.3,y:21.5}).wait(1).to({graphics:mask_graphics_24,x:11.3,y:21.5}).wait(1).to({graphics:mask_graphics_25,x:8.9,y:21.5}).wait(1).to({graphics:mask_graphics_26,x:7,y:21.5}).wait(1).to({graphics:mask_graphics_27,x:5.6,y:21.5}).wait(1).to({graphics:mask_graphics_28,x:4.8,y:21.5}).wait(1).to({graphics:mask_graphics_29,x:4.5,y:21.5}).wait(1).to({graphics:mask_graphics_30,x:4.8,y:21.5}).wait(1).to({graphics:mask_graphics_31,x:5.5,y:21.5}).wait(1).to({graphics:mask_graphics_32,x:6.8,y:21.5}).wait(1).to({graphics:mask_graphics_33,x:8.6,y:21.5}).wait(1).to({graphics:mask_graphics_34,x:10.8,y:21.5}).wait(1).to({graphics:mask_graphics_35,x:13.6,y:21.5}).wait(1).to({graphics:mask_graphics_36,x:16.9,y:21.5}).wait(1).to({graphics:mask_graphics_37,x:20.7,y:21.5}).wait(1).to({graphics:mask_graphics_38,x:25,y:21.5}).wait(1).to({graphics:mask_graphics_39,x:29.8,y:21.5}).wait(1).to({graphics:mask_graphics_40,x:35.2,y:21.5}).wait(1).to({graphics:mask_graphics_41,x:41,y:21.5}).wait(1).to({graphics:mask_graphics_42,x:47.3,y:21.5}).wait(1).to({graphics:mask_graphics_43,x:54.2,y:21.5}).wait(1).to({graphics:mask_graphics_44,x:61.5,y:21.5}).wait(1).to({graphics:mask_graphics_45,x:68.9,y:21.5}).wait(1).to({graphics:mask_graphics_46,x:75.7,y:21.5}).wait(1).to({graphics:mask_graphics_47,x:82.1,y:21.5}).wait(1).to({graphics:mask_graphics_48,x:87.9,y:21.5}).wait(1).to({graphics:mask_graphics_49,x:93.2,y:21.5}).wait(1).to({graphics:mask_graphics_50,x:98,y:21.5}).wait(1).to({graphics:mask_graphics_51,x:102.3,y:21.5}).wait(1).to({graphics:mask_graphics_52,x:106.1,y:21.5}).wait(1).to({graphics:mask_graphics_53,x:109.4,y:21.5}).wait(1).to({graphics:mask_graphics_54,x:112.2,y:21.5}).wait(1).to({graphics:mask_graphics_55,x:114.5,y:21.5}).wait(1).to({graphics:mask_graphics_56,x:116.3,y:21.5}).wait(1).to({graphics:mask_graphics_57,x:117.5,y:21.5}).wait(1).to({graphics:mask_graphics_58,x:118.3,y:21.5}).wait(1).to({graphics:mask_graphics_59,x:118.5,y:21.5}).wait(1));

	// Layer 1
	this.instance = new lib.Symbol68();
	this.instance.parent = this;
	this.instance.setTransform(118.5,21.5,1,1,0,0,0,122.5,10.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(60));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AzkCDIAAkFMAnJAAAIAAEFg");
	this.shape.setTransform(118.8,21.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(60));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.5,8.4,250.6,26.2);


(lib.Symbol63 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol64();
	this.instance.parent = this;
	this.instance.setTransform(53,53,1,1,0,0,0,53,53);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360},39).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.5,-3.5,113,113);


(lib.Symbol61 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.instance = new lib.Symbol63();
	this.instance.parent = this;
	this.instance.setTransform(354.1,-140,0.678,0.678,0,0,0,53,53);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol61, new cjs.Rectangle(315.8,-178.3,76.6,76.6), null);


(lib.Symbol60 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AprDDIAAmFITXAAIAAGFg");
	mask.setTransform(212.3,243);

	// Symbol 59
	this.instance = new lib.Symbol59();
	this.instance.parent = this;
	this.instance.setTransform(363.1,246,1,1,0,0,0,363.1,246);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol60, new cjs.Rectangle(150.3,223.5,124.1,39.1), null);


(lib.Symbol57 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.instance = new lib.Symbol71();
	this.instance.parent = this;
	this.instance.setTransform(355.8,127.6,1,1,0,0,0,390.9,161.3);
	this.instance.alpha = 0.461;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.instance_1 = new lib.Symbol60();
	this.instance_1.parent = this;
	this.instance_1.setTransform(575.1,245.6,1,1,0,0,0,363.1,246);

	this.instance_2 = new lib.Symbol60();
	this.instance_2.parent = this;
	this.instance_2.setTransform(485.1,245.6,1,1,0,0,0,363.1,246);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(1));

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Eg5lAV+MAAAgr7MBzLAAAMAAAAr7Ug5SgCgg55ACgg");
	mask.setTransform(363.8,130.5);

	// Symbol 58
	this.instance_3 = new lib.Symbol58();
	this.instance_3.parent = this;
	this.instance_3.setTransform(363.1,246,1,1,0,0,0,363.1,246);

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol57, new cjs.Rectangle(-35.1,-33.7,973.3,525.3), null);


(lib.Symbol52 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol10();
	this.instance.parent = this;
	this.instance.setTransform(38.9,26.9,1,1,11,0,0,35.6,20.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol52, new cjs.Rectangle(0,0,77.5,53.8), null);


(lib.Symbol51 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol11();
	this.instance.parent = this;
	this.instance.setTransform(25.1,19.6,1,1,11,0,0,22.5,15.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol51, new cjs.Rectangle(0,0,50.1,39), null);


(lib.Symbol50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol12();
	this.instance.parent = this;
	this.instance.setTransform(60.6,58,1,1.048,0,17.3,0,42.5,58);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol50, new cjs.Rectangle(0,0,121.2,116), null);


(lib.Symbol49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol13();
	this.instance.parent = this;
	this.instance.setTransform(54.5,52.3,1,1,11,0,0,47,44.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol49, new cjs.Rectangle(0,0,109.1,104.3), null);


(lib.Symbol48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol14();
	this.instance.parent = this;
	this.instance.setTransform(27.1,17.6,1,1,11,0,0,25.1,13);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol48, new cjs.Rectangle(0,0,54.1,35), null);


(lib.Symbol47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol15();
	this.instance.parent = this;
	this.instance.setTransform(26.9,35.9,1,1,11,0,0,21.1,32.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol47, new cjs.Rectangle(0,0,53.7,71.8), null);


(lib.Symbol46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol16();
	this.instance.parent = this;
	this.instance.setTransform(37,61.5,1,1,11,0,0,26.5,57.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol46, new cjs.Rectangle(0,0,74,123), null);


(lib.Symbol45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol17();
	this.instance.parent = this;
	this.instance.setTransform(47,56.4,1,1,11,0,0,38.1,50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol45, new cjs.Rectangle(0,0,93.7,112.7), null);


(lib.Symbol44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol18();
	this.instance.parent = this;
	this.instance.setTransform(131.3,133.7,1,1,11,0,0,111.5,114.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol44, new cjs.Rectangle(0,0,262.5,267.3), null);


(lib.Symbol42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol41();
	this.instance.parent = this;
	this.instance.setTransform(16.5,16.2,1,1,0,0,0,16.5,16.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360},139).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,33.1,32.6);


(lib.Symbol28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Symbol 21
	this.instance = new lib.Symbol21();
	this.instance.parent = this;
	this.instance.setTransform(17,61,1,1,0,0,0,17,17);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:17.1,rotation:4.7,x:15.7,y:59.6},16).to({regY:17,rotation:0,x:17,y:61},15).wait(1));

	// Symbol 23
	this.instance_1 = new lib.Symbol23();
	this.instance_1.parent = this;
	this.instance_1.setTransform(29,23.5,1,1,0,0,0,7,23.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regY:23.4,rotation:0.3,x:28.9},16).to({regY:23.5,rotation:0,x:29},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,36,78);


(lib.Symbol27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Symbol 20
	this.instance = new lib.Symbol20();
	this.instance.parent = this;
	this.instance.setTransform(7,23.5,1,1,0,0,0,7,23.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:23.4,rotation:-2.7,x:8.2,y:23.7},19).to({regY:23.5,rotation:0,x:7,y:23.5},19).wait(1));

	// Symbol 22
	this.instance_1 = new lib.Symbol22();
	this.instance_1.parent = this;
	this.instance_1.setTransform(20.5,61,1,1,0,0,0,17.5,17);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:17.6,scaleY:1,skewX:4.1,x:21.9},19).to({regX:17.5,scaleY:1,skewX:0,x:20.5},19).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,38,78);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Symbol54();
	this.instance.parent = this;
	this.instance.setTransform(348.1,207.6,1,1,0,0,0,348.1,235.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:356.1},99,cjs.Ease.quadInOut).to({x:348.1},100,cjs.Ease.quadInOut).wait(1));

	// Layer 3
	this.instance_1 = new lib.Symbol57();
	this.instance_1.parent = this;
	this.instance_1.setTransform(348.4,208.2,0.959,0.959,0,0,0,363.1,246);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:330.4},99,cjs.Ease.quadInOut).to({x:348.4},100,cjs.Ease.quadInOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33.7,-60.2,933.9,517.1);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// shold.png
	this.instance = new lib.Symbol27();
	this.instance.parent = this;
	this.instance.setTransform(158.7,75,1,1,0,0,0,19,39);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:156.1},4,cjs.Ease.quadInOut).wait(8).to({x:158.7},4,cjs.Ease.quadInOut).wait(5).to({x:162.6},4,cjs.Ease.quadInOut).to({x:165.2},4,cjs.Ease.quadInOut).wait(27).to({x:162.6},4,cjs.Ease.quadInOut).to({x:158.7},4,cjs.Ease.quadInOut).wait(5));

	// hand1.png
	this.instance_1 = new lib.Symbol28();
	this.instance_1.parent = this;
	this.instance_1.setTransform(180.7,75,1,1,0,0,0,18,39);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:178.1},4,cjs.Ease.quadInOut).wait(8).to({x:180.7},4,cjs.Ease.quadInOut).wait(5).to({x:184.6},4,cjs.Ease.quadInOut).to({x:187.2},4,cjs.Ease.quadInOut).wait(27).to({x:184.6},4,cjs.Ease.quadInOut).to({x:180.7},4,cjs.Ease.quadInOut).wait(5));

	// leg2.png
	this.instance_2 = new lib.Symbol24();
	this.instance_2.parent = this;
	this.instance_2.setTransform(182.7,165,1,1.002,0,-3.5,0,12,60);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(4).to({scaleY:1,skewX:0,x:179.1},4,cjs.Ease.quadInOut).to({scaleY:1,skewX:-3.5,x:182.7},4).wait(4).to({scaleY:1,skewX:-2.3,x:184},4,cjs.Ease.quadInOut).wait(1).to({scaleY:1,skewX:-3.5,x:189.2},4,cjs.Ease.quadInOut).wait(35).to({scaleY:1,skewX:-2.3,x:184},4,cjs.Ease.quadInOut).wait(1).to({regY:60.1,scaleY:1,skewX:-3.3,x:182.9,y:165.2},3,cjs.Ease.quadInOut).wait(1));

	// leg1.png
	this.instance_3 = new lib.Symbol25();
	this.instance_3.parent = this;
	this.instance_3.setTransform(157.6,166,1,1,0,1.4,0,12,58);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({skewX:0,x:156.1},4,cjs.Ease.quadInOut).wait(8).to({skewX:1.4,x:157.6},4,cjs.Ease.quadInOut).to({regX:12.1,skewX:-0.2,x:159.7},4,cjs.Ease.quadInOut).wait(1).to({skewX:-0.2},0).to({regX:12,skewX:0,x:162.6},4,cjs.Ease.quadInOut).to({skewX:1.4,x:164.1},4,cjs.Ease.quadInOut).to({regX:12.1,skewX:-0.2,x:166.2},4,cjs.Ease.quadInOut).wait(19).to({skewX:-0.2},0).to({regX:12,skewX:1.4,x:164.1},4,cjs.Ease.quadInOut).to({skewX:0,x:162.6},4,cjs.Ease.quadInOut).to({regX:12.1,skewX:-0.2,x:159.7},4,cjs.Ease.quadInOut).wait(1).to({skewX:1,x:157.9,y:166.1},3,cjs.Ease.quadInOut).wait(1));

	// boda.png
	this.instance_4 = new lib.Symbol26();
	this.instance_4.parent = this;
	this.instance_4.setTransform(160.2,67.5,1,1,0,0,0,32.5,67.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:157.6},4,cjs.Ease.quadInOut).wait(8).to({x:160.2},4,cjs.Ease.quadInOut).wait(5).to({x:164.1},4,cjs.Ease.quadInOut).to({x:166.7},4,cjs.Ease.quadInOut).wait(27).to({x:164.1},4,cjs.Ease.quadInOut).to({x:160.2},4,cjs.Ease.quadInOut).wait(5));

	// shold.png
	this.instance_5 = new lib.Symbol27();
	this.instance_5.parent = this;
	this.instance_5.setTransform(94.3,75,1,1,0,0,0,19,39);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(8).to({x:96.9},4,cjs.Ease.quadInOut).wait(5).to({x:100.8},4,cjs.Ease.quadInOut).to({x:103.4},4,cjs.Ease.quadInOut).wait(27).to({x:100.8},4,cjs.Ease.quadInOut).to({x:96.9},4,cjs.Ease.quadInOut).wait(5).to({x:94.7},3,cjs.Ease.quadInOut).wait(1));

	// hand1.png
	this.instance_6 = new lib.Symbol28();
	this.instance_6.parent = this;
	this.instance_6.setTransform(116.3,75,1,1,0,0,0,18,39);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(8).to({x:118.9},4,cjs.Ease.quadInOut).wait(5).to({x:122.8},4,cjs.Ease.quadInOut).to({x:125.4},4,cjs.Ease.quadInOut).wait(27).to({x:122.8},4,cjs.Ease.quadInOut).to({x:118.9},4,cjs.Ease.quadInOut).wait(5).to({x:116.7},3,cjs.Ease.quadInOut).wait(1));

	// leg2.png
	this.instance_7 = new lib.Symbol24();
	this.instance_7.parent = this;
	this.instance_7.setTransform(120.9,165,1,1.002,0,-3.5,0,12,60);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({scaleY:1,skewX:0,x:117.3},4,cjs.Ease.quadInOut).to({scaleY:1,skewX:-3.5,x:120.9},4).wait(4).to({scaleY:1,skewX:-2.3,x:122.2},4,cjs.Ease.quadInOut).wait(1).to({scaleY:1,skewX:-3.5,x:127.4},4,cjs.Ease.quadInOut).wait(35).to({scaleY:1,skewX:-2.3,x:122.2},4,cjs.Ease.quadInOut).wait(1).to({scaleY:1,skewX:-3.5,x:120.9},4,cjs.Ease.quadInOut).to({regY:60.1,skewX:-3.3,y:165.1},3,cjs.Ease.quadInOut).wait(1));

	// leg1.png
	this.instance_8 = new lib.Symbol25();
	this.instance_8.parent = this;
	this.instance_8.setTransform(94.3,166,1,1,0,0,0,12,58);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(8).to({skewX:1.4,x:95.8},4,cjs.Ease.quadInOut).to({regX:12.1,skewX:-0.2,x:97.9},4,cjs.Ease.quadInOut).wait(1).to({skewX:-0.2},0).to({regX:12,skewX:0,x:100.8},4,cjs.Ease.quadInOut).to({skewX:1.4,x:102.3},4,cjs.Ease.quadInOut).to({regX:12.1,skewX:-0.2,x:104.4},4,cjs.Ease.quadInOut).wait(19).to({skewX:-0.2},0).to({regX:12,skewX:1.4,x:102.3},4,cjs.Ease.quadInOut).to({skewX:0,x:100.8},4,cjs.Ease.quadInOut).to({regX:12.1,skewX:-0.2,x:97.9},4,cjs.Ease.quadInOut).wait(1).to({regX:12,skewX:1.4,x:95.8},4,cjs.Ease.quadInOut).to({regX:12.1,skewX:0,x:94.6,y:166.1},3,cjs.Ease.quadInOut).wait(1));

	// boda.png
	this.instance_9 = new lib.Symbol26();
	this.instance_9.parent = this;
	this.instance_9.setTransform(95.8,67.5,1,1,0,0,0,32.5,67.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(8).to({x:98.4},4,cjs.Ease.quadInOut).wait(5).to({x:102.3},4,cjs.Ease.quadInOut).to({x:104.9},4,cjs.Ease.quadInOut).wait(27).to({x:102.3},4,cjs.Ease.quadInOut).to({x:98.4},4,cjs.Ease.quadInOut).wait(5).to({x:96.2},3,cjs.Ease.quadInOut).wait(1));

	// shold.png
	this.instance_10 = new lib.Symbol27();
	this.instance_10.parent = this;
	this.instance_10.setTransform(31,75,1,1,0,0,0,19,39);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(4).to({x:33.6},4,cjs.Ease.quadInOut).wait(5).to({x:37.5},4,cjs.Ease.quadInOut).to({x:40.1},4,cjs.Ease.quadInOut).wait(27).to({x:37.5},4,cjs.Ease.quadInOut).to({x:33.6},4,cjs.Ease.quadInOut).wait(5).to({x:31},4,cjs.Ease.quadInOut).wait(4));

	// hand1.png
	this.instance_11 = new lib.Symbol28();
	this.instance_11.parent = this;
	this.instance_11.setTransform(53,75,1,1,0,0,0,18,39);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(4).to({x:55.6},4,cjs.Ease.quadInOut).wait(5).to({x:59.5},4,cjs.Ease.quadInOut).to({x:62.1},4,cjs.Ease.quadInOut).wait(27).to({x:59.5},4,cjs.Ease.quadInOut).to({x:55.6},4,cjs.Ease.quadInOut).wait(5).to({x:53},4,cjs.Ease.quadInOut).wait(4));

	// leg2.png
	this.instance_12 = new lib.Symbol24();
	this.instance_12.parent = this;
	this.instance_12.setTransform(54,165,1,1,0,0,0,12,60);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({scaleY:1,skewX:-3.5,x:57.6},4,cjs.Ease.quadInOut).wait(4).to({scaleY:1,skewX:-2.3,x:58.9},4,cjs.Ease.quadInOut).wait(1).to({scaleY:1,skewX:-3.5,x:64.1},4,cjs.Ease.quadInOut).wait(35).to({scaleY:1,skewX:-2.3,x:58.9},4,cjs.Ease.quadInOut).wait(1).to({scaleY:1,skewX:-3.5,x:57.6},4,cjs.Ease.quadInOut).wait(4).to({regY:60.1,scaleY:1,skewX:-0.3,x:54.5,y:165.2},3,cjs.Ease.quadInOut).wait(1));

	// leg1.png
	this.instance_13 = new lib.Symbol25();
	this.instance_13.parent = this;
	this.instance_13.setTransform(31,166,1,1,0,0,0,12,58);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(4).to({skewX:1.4,x:32.5},4,cjs.Ease.quadInOut).to({regX:12.1,skewX:-0.2,x:34.6},4,cjs.Ease.quadInOut).wait(1).to({skewX:-0.2},0).to({regX:12,skewX:0,x:37.5},4,cjs.Ease.quadInOut).to({skewX:1.4,x:39},4,cjs.Ease.quadInOut).to({regX:12.1,skewX:-0.2,x:41.1},4,cjs.Ease.quadInOut).wait(19).to({skewX:-0.2},0).to({regX:12,skewX:1.4,x:39},4,cjs.Ease.quadInOut).to({skewX:0,x:37.5},4,cjs.Ease.quadInOut).to({regX:12.1,skewX:-0.2,x:34.6},4,cjs.Ease.quadInOut).wait(1).to({regX:12,skewX:1.4,x:32.5},4,cjs.Ease.quadInOut).to({skewX:0,x:31},4,cjs.Ease.quadInOut).wait(4));

	// boda.png
	this.instance_14 = new lib.Symbol26();
	this.instance_14.parent = this;
	this.instance_14.setTransform(32.5,67.5,1,1,0,0,0,32.5,67.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(4).to({x:35.1},4,cjs.Ease.quadInOut).wait(5).to({x:39},4,cjs.Ease.quadInOut).to({x:41.6},4,cjs.Ease.quadInOut).wait(27).to({x:39},4,cjs.Ease.quadInOut).to({x:35.1},4,cjs.Ease.quadInOut).wait(5).to({x:32.5},4,cjs.Ease.quadInOut).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,198.7,225);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// sholdy2.png
	this.instance = new lib.Symbol29();
	this.instance.parent = this;
	this.instance.setTransform(148.1,29.9,1,1,2.2,0,0,40,12);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:40.1,rotation:29.7,x:182.3,y:57.7},4,cjs.Ease.quadInOut).to({regY:12.1,scaleX:1,scaleY:0.97,rotation:0,skewX:19.6,skewY:18.3,x:186,y:55.9},4).to({regX:40,regY:12,scaleX:1,scaleY:1,rotation:2.2,skewX:0,skewY:0,x:148.1,y:29.9},6).to({rotation:0,x:130,y:38},4,cjs.Ease.quadInOut).to({regY:12.1,scaleY:0.98,rotation:-22.2,x:125.1,y:27.5},4).to({regY:12,scaleY:1,rotation:2.2,x:148.1,y:29.9},5).wait(1));

	// sholdy1.png
	this.instance_1 = new lib.Symbol30();
	this.instance_1.parent = this;
	this.instance_1.setTransform(73.1,41,1,1,2.2,0,0,11.5,14);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:18.9,x:110.9,y:39.6},4,cjs.Ease.quadInOut).to({regX:11.6,scaleX:1,scaleY:0.97,rotation:0,skewX:19.6,skewY:18.3,x:111,y:45.3},4).to({regY:14.1,scaleX:1,scaleY:1,rotation:-16.5,skewX:0,skewY:0,x:75.5,y:44.4},6).to({regX:11.5,regY:14,rotation:0,x:55.5,y:52},4,cjs.Ease.quadInOut).to({regX:11.6,scaleY:0.98,rotation:12,x:53.7,y:52.1},4).to({regX:11.5,scaleY:1,rotation:2.2,x:73.1,y:41},5).wait(1));

	// legy2.png
	this.instance_2 = new lib.Symbol31();
	this.instance_2.parent = this;
	this.instance_2.setTransform(155,140.6,1,0.901,2.2,0,0,19.1,33.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regY:33.2,scaleX:1.04,scaleY:0.95,rotation:0,skewX:18.9,skewY:2.8,x:159.6,y:156.6},4,cjs.Ease.quadInOut).to({scaleY:0.92,skewX:19.6,skewY:2.7,y:157.8},4).to({regY:33.1,scaleX:1,scaleY:0.9,rotation:2.2,skewX:0,skewY:0,x:155,y:140.6},6).to({regX:19,regY:33,scaleY:1,rotation:-10.5,x:152,y:139.1},4,cjs.Ease.quadInOut).to({regY:33.1,scaleX:1,scaleY:0.98,rotation:0,skewX:4.4,skewY:4.7,x:143.7,y:140.4},4).to({regX:19.1,scaleX:1,scaleY:0.9,rotation:2.2,skewX:0,skewY:0,x:155,y:139.3},5).wait(1));

	// legy1.png
	this.instance_3 = new lib.Symbol32();
	this.instance_3.parent = this;
	this.instance_3.setTransform(55.5,135.4,1,1,2.2,0,0,15.5,33);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:15.6,rotation:17.2,x:67.8,y:128},4,cjs.Ease.quadInOut).to({regX:15.5,scaleX:1,scaleY:0.97,rotation:0,skewX:38.1,skewY:36.7,x:59.4,y:123.9},4).to({scaleX:1,scaleY:1,rotation:2.2,skewX:0,skewY:0,x:55.5,y:135.4},6).to({rotation:0,x:41.5,y:152},4,cjs.Ease.quadInOut).to({scaleY:0.98,y:152.6},4).to({scaleY:1,rotation:2.2,x:55.5,y:135.4},5).wait(1));

	// heady1.png
	this.instance_4 = new lib.Symbol33();
	this.instance_4.parent = this;
	this.instance_4.setTransform(95.4,8.3,1,1,2.2,0,0,14.5,18.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regX:14.6,regY:18.5,rotation:18.9,x:141.7,y:14.8},4,cjs.Ease.quadInOut).to({regY:18.6,scaleX:1,scaleY:0.97,rotation:0,skewX:19.6,skewY:18.3,y:21.5},4).to({regX:14.5,regY:18.4,scaleX:1,scaleY:1,rotation:2.2,skewX:0,skewY:0,x:95.4,y:8.3},6).to({regY:18.5,rotation:0,x:76.5,y:18.5},4,cjs.Ease.quadInOut).to({scaleY:0.98,y:21.3},4).to({regY:18.4,scaleY:1,rotation:2.2,x:95.4,y:8.3},5).wait(1));

	// handy3.png
	this.instance_5 = new lib.Symbol34();
	this.instance_5.parent = this;
	this.instance_5.setTransform(156.4,12.6,1,1,2.2,0,0,16.6,17.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regY:17.6,rotation:15.9,x:195.2,y:41},4,cjs.Ease.quadInOut).to({scaleX:1,scaleY:0.97,rotation:0,skewX:19.6,skewY:18.3,x:198.8,y:42.3},4).to({regY:17.4,scaleX:1,scaleY:1,rotation:2.2,skewX:0,skewY:0,x:156.4,y:12.6},6).to({regX:16.5,regY:17.5,rotation:0,x:137.5,y:20.5},4,cjs.Ease.quadInOut).to({scaleY:0.98,rotation:-22.2,x:125.5,y:8.7},4).to({regX:16.6,regY:17.4,scaleY:1,rotation:2.2,x:156.4,y:12.6},5).wait(1));

	// handy1.png
	this.instance_6 = new lib.Symbol35();
	this.instance_6.parent = this;
	this.instance_6.setTransform(45.9,37.9,1,1,2.2,0,0,23.1,16);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({regY:16.1,rotation:18.9,x:85.6,y:28.9},4,cjs.Ease.quadInOut).to({scaleX:1,scaleY:0.97,rotation:0,skewX:19.6,skewY:18.3,y:35},4).to({scaleX:1,scaleY:1,rotation:-47.3,skewX:0,skewY:0,x:51.6,y:61.4},6).to({regX:23,regY:16,rotation:0,x:28,y:50},4,cjs.Ease.quadInOut).to({regX:23.1,regY:16.1,scaleY:0.98,rotation:12,x:27.2,y:44.6},4).to({regY:16,scaleY:1,rotation:2.2,x:45.9,y:37.9},5).wait(1));

	// footy2.png
	this.instance_7 = new lib.Symbol37();
	this.instance_7.parent = this;
	this.instance_7.setTransform(125.4,100.3,1,1,2.2,0,0,23,23);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({regX:23.1,rotation:18.9,x:144.2,y:110.9},4,cjs.Ease.quadInOut).to({regY:23.1,scaleX:1,scaleY:0.97,rotation:0,skewX:19.6,skewY:18.3,x:144.1,y:113.9},4).to({regX:23,regY:23,scaleX:1,scaleY:1,rotation:2.2,skewX:0,skewY:0,x:125.4,y:100.3},6).to({rotation:-10.5,x:113.8,y:103.4},4,cjs.Ease.quadInOut).to({scaleX:1,scaleY:0.98,rotation:0,skewX:-10.7,skewY:-10.3,y:104.8},4).to({scaleX:1,scaleY:1,rotation:2.2,skewX:0,skewY:0,x:125.4,y:99.1},5).wait(1));

	// footy1.png
	this.instance_8 = new lib.Symbol36();
	this.instance_8.parent = this;
	this.instance_8.setTransform(83.7,94.2,1,0.813,2.2,0,0,25.1,22.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({regX:25.2,scaleY:0.91,rotation:18.9,x:105.6,y:94},4,cjs.Ease.quadInOut).to({scaleX:1,scaleY:0.88,rotation:0,skewX:19.6,skewY:18.3,y:97.5},4).to({regX:25.1,scaleX:1,scaleY:0.81,rotation:2.2,skewX:0,skewY:0,x:83.7,y:94.2},6).to({regX:25,regY:22.5,scaleY:1,rotation:0,x:68,y:105.5},4,cjs.Ease.quadInOut).to({scaleY:0.98,y:106.9},4).to({regX:25.1,regY:22.6,scaleY:0.81,rotation:2.2,x:83.7,y:94.2},5).wait(1));

	// bodyy1.png
	this.instance_9 = new lib.Symbol38();
	this.instance_9.parent = this;
	this.instance_9.setTransform(100.8,52.6,1,1,2.2,0,0,22.6,31.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({rotation:18.9,x:134.1,y:58.7},4,cjs.Ease.quadInOut).to({scaleX:1,scaleY:0.97,rotation:0,skewX:19.6,skewY:18.3,y:63.7},4).to({scaleX:1,scaleY:1,rotation:2.2,skewX:0,skewY:0,x:100.8,y:52.6},6).to({regX:22.5,regY:31.5,rotation:0,x:83.5,y:62.5},4,cjs.Ease.quadInOut).to({regY:31.6,scaleY:0.98,y:64.6},4).to({regX:22.6,scaleY:1,rotation:2.2,x:100.8,y:52.6},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(22.1,-10.7,166.5,181.6);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// sholdr2.png
	this.instance = new lib.Symbol52();
	this.instance.parent = this;
	this.instance.setTransform(114.5,43.9,1,1,0,0,0,38.8,26.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:38.9,rotation:1.8,x:157.2,y:36.2},24,cjs.Ease.quadInOut).to({regX:38.8,rotation:0,x:114.5,y:43.9},25,cjs.Ease.quadInOut).wait(1));

	// legr2.png
	this.instance_1 = new lib.Symbol50();
	this.instance_1.parent = this;
	this.instance_1.setTransform(223.8,277.2,1,1,0,0,0,60.6,58);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1,scaleY:1,skewX:3.9,x:227.7},24,cjs.Ease.quadInOut).to({scaleX:1,scaleY:1,skewX:0,x:223.8},25,cjs.Ease.quadInOut).wait(1));

	// legr1.png
	this.instance_2 = new lib.Symbol49();
	this.instance_2.parent = this;
	this.instance_2.setTransform(66.5,188.8,1,1,0,0,0,54.5,52.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:54.6,regY:52.2,rotation:26.5,x:95.2,y:152.8},24,cjs.Ease.quadInOut).to({regX:54.5,regY:52.1,rotation:0,x:66.5,y:188.8},25,cjs.Ease.quadInOut).wait(1));

	// handr1.png
	this.instance_3 = new lib.Symbol47();
	this.instance_3.parent = this;
	this.instance_3.setTransform(57.8,70.6,1,1,0,0,0,26.8,35.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:26.9,regY:36.1,rotation:-17.2,x:109,y:67.8},24,cjs.Ease.quadInOut).to({regX:26.8,regY:35.9,rotation:0,x:57.8,y:70.6},25,cjs.Ease.quadInOut).wait(1));

	// footr2.png
	this.instance_4 = new lib.Symbol46();
	this.instance_4.parent = this;
	this.instance_4.setTransform(129.7,186.4,1,1,0,0,0,37,61.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regX:37.1,regY:61.6,scaleX:1.05,scaleY:1,skewX:13.6,skewY:17.7,x:143.3,y:173.6},24,cjs.Ease.quadInOut).to({regX:37,regY:61.5,scaleX:1,scaleY:1,skewX:0,skewY:0,x:129.7,y:186.4},25,cjs.Ease.quadInOut).wait(1));

	// footr1.png
	this.instance_5 = new lib.Symbol45();
	this.instance_5.parent = this;
	this.instance_5.setTransform(190.2,186.4,1,1,0,0,0,46.8,56.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regY:56.4,rotation:10,x:204.5,y:186.5},24,cjs.Ease.quadInOut).to({regY:56.3,rotation:0,x:190.2,y:186.4},25,cjs.Ease.quadInOut).wait(1));

	// bodar.png
	this.instance_6 = new lib.Symbol44();
	this.instance_6.parent = this;
	this.instance_6.setTransform(241,116.4,1,1,0,0,0,131.2,133.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({regY:133.6,rotation:10,x:266.6,y:126.3},24,cjs.Ease.quadInOut).to({regY:133.7,rotation:0,x:241,y:116.4},25,cjs.Ease.quadInOut).wait(1));

	// sholdr1.png
	this.instance_7 = new lib.Symbol51();
	this.instance_7.parent = this;
	this.instance_7.setTransform(202.2,70,1,1,0,0,0,25.1,19.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({rotation:23.9,x:232.9,y:77.6},24,cjs.Ease.quadInOut).to({rotation:0,x:202.2,y:70},25,cjs.Ease.quadInOut).wait(1));

	// handr2.png
	this.instance_8 = new lib.Symbol48();
	this.instance_8.parent = this;
	this.instance_8.setTransform(240.4,80,1,1,0,0,0,27,17.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({regX:27.1,regY:17.6,rotation:23.9,x:256.2,y:103.6},24,cjs.Ease.quadInOut).to({regX:27,regY:17.5,rotation:0,x:240.4,y:80},25,cjs.Ease.quadInOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(12,-17.3,360.3,352.5);


(lib.Symbol66 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.pric = new lib.Symbol63();
	this.pric.parent = this;
	this.pric.setTransform(-22.3,7.1,0.678,0.678,0,0,0,53,53);

	this.timeline.addTween(cjs.Tween.get(this.pric).to({x:50.5,y:19.5},19).to({x:-28.6,y:29.5},20).to({x:-20.4,y:-12.2},24).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60.6,-31.2,76.6,76.6);


(lib.Symbol65 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol61();
	this.instance.parent = this;
	this.instance.setTransform(-324.3,96.2,1,1,0,0,0,104.8,54.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-418.4,y:66.2},19,cjs.Ease.quadInOut).to({x:-507.4,y:75.2},20,cjs.Ease.quadInOut).to({x:-368.4,y:129.2},20,cjs.Ease.quadInOut).to({x:-324.3,y:96.2},15,cjs.Ease.quadInOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-113.3,-136.3,76.6,76.6);


(lib.Symbol56 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol7();
	this.instance.parent = this;
	this.instance.setTransform(23,69.9,0.621,0.621,0,0,0,37,112.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:33},99).to({x:23},100).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,123.4,139.7);


(lib.Symbol43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol42();
	this.instance.parent = this;
	this.instance.setTransform(16.5,16.2,1,1,0,0,0,16.5,16.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:1.25,y:-38.3},8,cjs.Ease.get(0.99)).to({scaleY:1,y:16.2},6,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,33.1,32.6);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol43();
	this.instance.parent = this;
	this.instance.setTransform(95.3,91.1,1,1,0,0,0,16.5,16.2);

	this.instance_1 = new lib.Symbol5();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-20,5.8,0.635,0.635,0,0,0,160.6,168);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-114.4,-111.9,229,223.9);


(lib.Symbol55 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(114.5,112);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol55, new cjs.Rectangle(0,0,228.9,224), null);


(lib.Symbol53 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol55();
	this.instance.parent = this;
	this.instance.setTransform(114.5,112,1,1,0,0,0,114.5,112);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:144.5},99,cjs.Ease.quadInOut).to({x:114.5},100,cjs.Ease.quadInOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,228.9,224);


// stage content:
(lib.fon_wtrafnoi600300 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//----------------
		
		this.pric.alpha=0;
		
		
		this.cursor = "none";
		this.pric.mouseEnabled = false;
		this.addEventListener("tick", fl_CustomMouseCursor_2.bind(this));
		
		function fl_CustomMouseCursor_2() {
			this.pric.x = stage.mouseX/window.devicePixelRatio;
			this.pric.y = stage.mouseY/window.devicePixelRatio;
		
		}
		
		
		
		
		
		//---------------
		
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

	// Layer 9
	this.instance = new lib.Symbol70();
	this.instance.parent = this;
	this.instance.setTransform(383.8,-19.9,1.102,1.102,0,0,0,183.4,75.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 8
	this.instance_1 = new lib.Symbol69();
	this.instance_1.parent = this;
	this.instance_1.setTransform(84.8,31.4,1.249,1.249,0,0,0,0.8,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// bitok
	this.instance_2 = new lib.Symbol53();
	this.instance_2.parent = this;
	this.instance_2.setTransform(127.4,183.7,1,1,0,0,0,114.5,112);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// witok
	this.instance_3 = new lib.Symbol56();
	this.instance_3.parent = this;
	this.instance_3.setTransform(356.7,155.3,1,1,0,0,0,61.7,69.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Layer 7
	this.instance_4 = new lib.Symbol67();
	this.instance_4.parent = this;
	this.instance_4.setTransform(448.2,267.2,1.084,1,0,0,0,122.5,14);

	this.pric = new lib.Symbol66();
	this.pric.parent = this;
	this.pric.setTransform(544.9,379.6,1,1,0,0,0,36,36);

	this.pric2 = new lib.Symbol65();
	this.pric2.parent = this;
	this.pric2.setTransform(424,321.9,1,1,0,0,0,-69.6,113.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.pric2},{t:this.pric},{t:this.instance_4}]}).wait(1));

	// Symbol 6
	this.instance_5 = new lib.Symbol6();
	this.instance_5.parent = this;
	this.instance_5.setTransform(256.1,135.8,0.446,0.446,0,0,0,85,93);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// Symbol 8
	this.instance_6 = new lib.Symbol8();
	this.instance_6.parent = this;
	this.instance_6.setTransform(300.1,125,1,1,0,0,0,348.1,235.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(218.3,-21,933.9,560);
// library properties:
lib.properties = {
	id: 'E80C88D86B274EE9A782490A05529262',
	width: 600,
	height: 300,
	fps: 25,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/fon_wtrafnoi600_300_atlas_.png", id:"fon_wtrafnoi600_300_atlas_"}
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
an.compositions['E80C88D86B274EE9A782490A05529262'] = {
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