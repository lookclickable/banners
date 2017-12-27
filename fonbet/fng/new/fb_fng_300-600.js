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
p.nominalBounds = new cjs.Rectangle(0,0,1348,587);


(lib.car = function() {
	this.initialize(img.car);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,483,200);


(lib.FB_logo = function() {
	this.initialize(img.FB_logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,261,64);


(lib.Layer8 = function() {
	this.initialize(img.Layer8);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,84,84);


(lib.logoFN = function() {
	this.initialize(img.logoFN);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,260,165);


(lib.Man = function() {
	this.initialize(img.Man);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,295,434);


(lib.shadows = function() {
	this.initialize(img.shadows);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,484,145);// helper functions:

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


(lib.Symbol35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0,1],0,0,0,0,0,86.6).s().p("AzZLHQoCknAAmgQAAmgICkmQIDknLWAAQLXAAICEnQIDEmgBGgQABGgoDEnQoCEmrXAAQrWAAoDkmg");
	this.shape.setTransform(175.6,100.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol35, new cjs.Rectangle(0,0,351.1,201.1), null);


(lib.Symbol30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#000000","rgba(0,0,0,0)"],[0,1],0,47.5,0,-47.5).s().p("EhroAIXIAAwtMDXRAAAIAAQtg");
	this.shape.setTransform(688.9,53.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol30, new cjs.Rectangle(0,0,1377.8,107), null);


(lib.Symbol28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.logoFN();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol28, new cjs.Rectangle(0,0,260,165), null);


(lib.Symbol27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgYBoQgIgBgIgEQgJgEgHgFQgIgFgEgHIAZgiQAGAHAKAFQALAGALAAQALAAAIgIQAHgHAAgMQAAgGgDgGQgCgFgFgEQgEgEgHgCQgHgDgKAAIgUACQgLACgEACIAOh0IBmAAIAAAtIhAAAIgCAaIAGAAQANAAAMAFQAMAEAJAJQAJAJAEAMQAGANAAAPQAAARgGAOQgGAOgKAJQgKAKgOAEQgOAFgQAAQgHAAgKgCg");
	this.shape.setTransform(90.2,21.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAtBoIgsiFIgqCFIgtAAIg+jQIA2AAIAjCEIAniEIAvAAIAoCEIAkiEIAuAAIg7DQg");
	this.shape_1.setTransform(62.1,21.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AA9BoIAAiDIg6BQIgGAAIg6hPIAACCIgvAAIAAjQIAwAAIA/BZIA9hZIAtAAIAADQg");
	this.shape_2.setTransform(33.5,21.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhFBoIAAjPQAjgBAcAAQASgBANAEQANAEAJAIQAIAGAFAKQAEAJAAAMQAAAPgHAMQgGALgLAIIAAAAQAGACAFAEQAFADAEAHQAFAFACAIQADAJAAAJQAAARgHAMQgFAMgLAIQgLAIgOADQgPAEgQAAQgqAAgSgBgAgVA7QAGACAKAAQANAAAHgGQAHgGAAgKQAAgJgHgGQgHgEgLAAIgSAAgAgVg7IAAAmIAQAAQAJABAFgFQAHgGAAgKQAAgJgHgFQgHgFgIAAg");
	this.shape_3.setTransform(11.2,21.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol27, new cjs.Rectangle(0,0,99.7,46.8), null);


(lib.Symbol26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AA+CAIAAimIh+CmIgWAAIAAjQIAZAAIAACmIB+imIAWAAIAADQgAgThdQgJgDgIgFQgHgFgEgGQgFgHgBgIIAYAAQADAJAIAFQAIAFAMAAQAMAAAIgFQAIgFADgJIAXAAQgBAIgEAHQgFAHgHAFQgIAFgJACQgKADgKAAQgLAAgKgDg");
	this.shape.setTransform(134.6,19);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABKBpIgbg/IhfAAIgaA/IgaAAIBajRIAVAAIBaDRgAAlASIglhZIglBZIBKAAg");
	this.shape_1.setTransform(112.2,21.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhBBpIAAjQIA3gBQAOAAAWAGQAOAFAKAJQAIAJAEAMQAEALAAANQAAANgFAMQgEAMgJAIQgKAJgOAFQgUAGgMAAIgggCIAABRgAgohPIAABPIAfACQAKAAAKgCQAJgDAGgFQAGgGAEgIQADgHAAgKQAAgKgDgHQgDgIgGgFQgFgFgJgDQgKgDgLAAg");
	this.shape_2.setTransform(93.6,21.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag5BoIAAjQIBzAAIAAAZIhaAAIAAC3g");
	this.shape_3.setTransform(77.8,21.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AA+BoIAAilIh+ClIgWAAIAAjQIAZAAIAACnIB+inIAWAAIAADQg");
	this.shape_4.setTransform(57,21.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AheBoIAAjQIAZAAIAABOIAcgCQAUAAAPAFQANAEAKAJQAJAIAFALQAFAMAAAPQAAAQgGANQgGANgKAJQgLAJgPAEQgPAFgTAAgAhFgCIAABSIAaABQAMAAAKgDQAKgDAHgFQAGgGADgIQAEgIAAgMQAAgJgEgIQgDgIgGgFQgGgFgKgCQgKgDgNAAgABFBoIAAjQIAaAAIAADQg");
	this.shape_5.setTransform(32.5,21.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhBBoIAAjPIA5gBQASgBANAEQANAFAIAHQAHAGAEAKQAEAJAAAMQAAAJgDAIQgDAHgFAHQgFAGgGAEQgHAEgHACIAAABQAKACAHADQAIAEAGAGQAGAGADAJQADAIAAALQAAAPgGAMQgFAMgLAHQgKAHgOAEQgNADgQAAgAgoBRIAhABQAKgBAJgCQAJgCAHgFQAGgFADgHQAEgHAAgJQAAgJgEgGQgDgGgGgFQgGgEgJgDQgJgBgKAAIgiAAgAgohPIAABDIAiAAQAHAAAIgDQAHgCAFgEQAGgFADgGQADgHAAgIQAAgIgDgGQgCgHgGgEQgFgEgIgCQgIgCgJAAg");
	this.shape_6.setTransform(11.2,21.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol26, new cjs.Rectangle(0,0,147.9,46.8), null);


(lib.Symbol22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().rr(-239.05,-414.1,478.1,828.2,13.8);
	this.shape.setTransform(239.1,414.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol22, new cjs.Rectangle(0,0,478.1,828.2), null);


(lib.Symbol18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAvCUIAAhfIgeAAIg3BfIhLAAIBFhtQgKgGgIgHQgIgIgGgKQgHgJgDgMQgEgNAAgPQAAgVAHgTQAIgTAPgPQAHgHAKgGQAKgGAMgEQAMgEANgDQAPgCARAAIBOACIAAElgAgGhKQgGAFgDAHQgDAIAAAJQAAAPAJAKQAIAIANADIAjAAIAAhJIgZgCQgRAAgLAKg");
	this.shape.setTransform(345.6,30.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AiCCSIABhEQALADAIgEQAJgEAIgPQAIgSAHgiQAEgWAHhIIAEg7IDCAAIAAElIhDAAIAAjmIhAAAIgGA3QgKBFgHAZQgGASgGAOQgGANgIAKQgHAKgJAHQgJAFgKADQgKADgLAAg");
	this.shape_1.setTransform(317,30.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhYCTIAAklICtAAIAAA/IhqAAIAAA0IBeAAIAAA+IheAAIAAA1IBuAAIAAA/g");
	this.shape_2.setTransform(291.6,30.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AggCTIAAjmIhZAAIAAg/IDzAAIAAA/IhYAAIAADmg");
	this.shape_3.setTransform(266.3,30.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AA9CTIAAi1IiBC1Ig7AAIAAklIBDAAIAAC1ICBi1IA7AAIAAElg");
	this.shape_4.setTransform(237.1,30.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("ABbCsIAAgyIi1AAIAAAyIg/AAIAAhxIAfAAQAFgHAHgNQAGgQAGgUQAIgXAEgbQAFggACghIACg7IC/AAIAADmIAoAAIAABxgAgQg7QgIA0gGAVQgKAigIALIBfAAIAAinIg6AAg");
	this.shape_5.setTransform(204.3,32.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhYCTIAAklICtAAIAAA/IhqAAIAAA0IBeAAIAAA+IheAAIAAA1IBvAAIAAA/g");
	this.shape_6.setTransform(177.1,30.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhhCSIAAklICwAAIAAA/IhtAAIAAAuQAMgCAVAAQAVAAASAHQARAFANANQANAMAGAQQAHAQAAAVQAAAXgHASQgIATgOAMQgPANgVAGQgWAHgaAAQgnAAgrgCgAgeAYIAAA7IAZACQATAAAJgJQAIgIAAgNQAAgPgIgIQgIgKgRAAg");
	this.shape_7.setTransform(152,30.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AggCVQgPgCgOgGQgOgFgNgHQgMgIgLgKQgKgJgJgNQgIgMgGgNQgFgPgDgQQgDgQAAgRQAAgPACgPQADgPAGgNQAFgOAIgMQAIgMALgLQAKgLAMgIQANgIAOgFQAOgGAQgDQAQgDARAAQAQAAAQADQAQACAOAGQAOAFANAHQAMAIAKAKQALAKAIAMQAIAMAGAOQAGAOADAQQADAQAAAQQAAAQgDAQQgDAPgGAOQgGAOgIAMQgIAMgLALQgKAJgMAJQgNAHgOAGQgOAFgQADQgQADgQAAQgQAAgQgDgAghhSQgPAGgMAMQgMAMgGAQQgGASAAASQAAASAGARQAHAQAMANQALALAQAHQAPAHARAAQAUAAARgHQAPgGALgNQALgMAFgQQAGgQAAgTQAAgSgHgSQgGgQgMgMQgMgMgPgGQgQgGgRAAQgRAAgQAGg");
	this.shape_8.setTransform(121.2,30.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AA0CTIAAjmIhmAAIAADmIhEAAIAAklIDtAAIAAElg");
	this.shape_9.setTransform(88.2,30.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("ABRCTIgZg9IhzAAIgZA9IhDAAIB6klIA7AAIB6ElgAAfAWIgghSIghBSIBBAAg");
	this.shape_10.setTransform(49,30.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AA1CTIAAh2IhqAAIAAB2IhDAAIAAklIBDAAIAABxIBqAAIAAhxIBEAAIAAElg");
	this.shape_11.setTransform(17.9,30.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,362.9,65.9);


(lib.Symbol17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhCCPQgNgEgGgFIAYg5QAKAHAKAAQAJAAAEgDQAGgDACgGIAFgIIh/jSIBMAAIBSCPIA7iPIBEAAIhiDfQgIARgIANQgKAOgJAIQgKAJgNAEQgNAFgOAAQgNAAgNgEg");
	this.shape.setTransform(154.9,30.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AApCTIhjiMIAACMIhDAAIAAklIBDAAIAACAIBfiAIBRAAIhuCHIB3Ceg");
	this.shape_1.setTransform(127.6,30.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhhCSIAAkjQAxgCAoAAQAZAAATAFQASAGANAJQALAKAGAOQAGAMAAAQQAAAXgJAQQgIAQgRALIAAAAQAJAEAHAFQAIAFAFAIQAGAJAEAKQADAMAAAOQAAAXgIARQgIARgQAMQgPAKgUAGQgUAFgYABQg6gBgagCgAgeBTQAJACAOABQASAAAKgJQAKgHAAgPQAAgOgKgHQgJgGgQAAIgaAAgAgehTIAAA1IAXAAQANAAAIgGQAJgHAAgPQAAgNgKgHQgKgHgMAAg");
	this.shape_2.setTransform(98.8,30.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ABRCTIgZg9IhzAAIgZA9IhDAAIB6klIA7AAIB6ElgAAfAWIgghSIghBSIBBAAg");
	this.shape_3.setTransform(70,30.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AggCTIAAjmIhZAAIAAg/IDzAAIAAA/IhYAAIAADmg");
	this.shape_4.setTransform(42.2,30.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgDCVQgPgCgOgGQgOgFgNgIQgMgHgKgKQgKgLgIgMQgIgMgGgOQgFgOgDgPQgDgQAAgRQAAgPADgPQACgPAFgNQAFgOAHgMQAHgNAKgJQAKgLAMgIQAMgJAOgFQAPgGAQgDQAQgDATAAQATAAAiAJQAXAIAOAOIgeAyQgPgJgLgEQgPgFgTAAQgRAAgOAFQgPAHgLAKQgMANgGAPQgHASAAAUQAAATAHARQAGAQAMAMQAMAMAQAHQAQAGATAAQARAAAQgFQARgFAOgMIAaAzQgHAIgKAFQgKAHgNAEQgkAKgUAAQgRAAgPgDg");
	this.shape_5.setTransform(16.3,30.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,171.7,65.9);


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABXC0IAAjqIiyDqIgfAAIAAkkIAkAAIAADqICyjqIAfAAIAAEkgAgbiDQgNgEgKgHQgLgHgFgJQgHgKgCgMIAiAAQAFAOAKAGQAMAIARgBQAQAAAMgGQAMgIADgNIAhAAQgBAMgHAKQgFAKgLAGQgLAIgNADQgOAEgOAAQgQAAgOgEg");
	this.shape.setTransform(134.5,26.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABnCUIgmhZIiEAAIgmBZIgkAAIB+knIAeAAIB/EngAA0AZIg0h8Ig1B8IBpAAg");
	this.shape_1.setTransform(103,30.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ah8CTIAAgkQAKABAIgEQALgHAJgRQAGgNAMgvQAGgbAIhUIAEg7ICvAAIAAElIgkAAIAAkEIhpAAIgFA4QgKBSgHAcQgFAVgGAQQgGAQgHALQgGAKgIAHQgHAGgIADQgKAEgMAAIgLAAg");
	this.shape_2.setTransform(71.3,30.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhUCTIAAklIClAAIAAAiIiBAAIAABeIB0AAIAAAhIh0AAIAABiICFAAIAAAig");
	this.shape_3.setTransform(46.5,30.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AByCuIAAg2IjjAAIAAA2IgiAAIAAhYIAfAAQARgbAKghQAIgbAFggQAHgmACgrIADg7ICsAAIAAEDIAoAAIAABYgAghhXQgDAjgGAhQgEAbgHAYQgJAdgOAZICUAAIAAjiIhmAAg");
	this.shape_4.setTransform(17.5,32.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,153.2,65.9);


(lib.Symbol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AglBQQgHgCgEgCIAOghQAGAFAFAAQAFgBADgBQADgBABgEIACgFIhGh2IAqAAIAuBRIAhhRIAmAAIg3B9IgJARQgGAIgFAFQgFAFgHACQgHADgIAAQgIAAgHgDg");
	this.shape.setTransform(232.7,32.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAXBTIg4hPIAABPIglAAIAAilIAlAAIAABIIA2hIIAtAAIg+BNIBDBYg");
	this.shape_1.setTransform(217.3,32.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag2BSIAAijIAygCQANAAALADQAKADAHAGQAHAGADAHQADAHAAAJQAAANgEAJQgFAJgKAGIAAABQAFABAEADQAFADADAEQADAFACAGQACAHAAAIQAAAMgFAKQgEAKgJAGQgIAGgMAEQgLADgNAAQghAAgOgCgAgRAvQAGABAHAAQAKAAAGgEQAFgFAAgIQAAgIgFgEQgFgDgJAAIgPAAgAgRguIAAAeIANAAQAHAAAEgEQAFgEAAgJQAAgHgFgEQgFgDgHAAg");
	this.shape_2.setTransform(201.1,32.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAtBTIgNgjIhBAAIgOAjIgmAAIBFilIAhAAIBFClgAARANIgRguIgTAuIAkAAg");
	this.shape_3.setTransform(184.8,32.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgSBTIAAiBIgyAAIAAgkICJAAIAAAkIgyAAIAACBg");
	this.shape_4.setTransform(169.2,32.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgBBUQgJgBgIgDQgIgDgHgFIgMgKQgGgFgFgHQgEgHgDgIQgDgIgCgJQgCgJABgJQgBgIACgIIAEgRIAHgOQAEgHAFgGQAGgGAHgEIAOgIIASgFQAIgCALAAQALAAATAFQANAFAIAHIgRAdQgJgFgFgCQgJgDgLAAQgJAAgIADQgJADgFAHQgHAGgDAJQgFAKAAALQAAALAFAJQADAJAHAHQAGAHAJADQAJAEALAAQAJAAAJgDQAKgDAIgGIAPAcQgFAFgFADIgNAGQgVAGgKAAQgKAAgIgCg");
	this.shape_5.setTransform(154.6,32.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag5BTIAAilIAmAAIAAA0IAPgBQAPAAAMAEQAMAEAHAHQAIAHAEAKQADAKAAANQAAANgEALQgEALgJAIQgOAJgIADQgSAEgMAAgAgTAFIAAAqIAMABQAFAAAEgCQAFgBADgCQADgDACgFQACgEABgGQgBgGgCgEQgCgEgDgDQgHgFgKAAg");
	this.shape_6.setTransform(135.1,32.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgSBTIAAiBIgyAAIAAgkICJAAIAAAkIgyAAIAACBg");
	this.shape_7.setTransform(120.1,32.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAtBTIgNgjIhBAAIgOAjIgmAAIBFilIAhAAIBFClgAARANIgRguIgTAuIAkAAg");
	this.shape_8.setTransform(104.4,32.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhJBSIABgmQAGACAEgCQAGgDAEgIQAFgLAEgSIAGg1IACghIBtAAIAACkIgmAAIAAiAIgkAAIgDAeQgGAngEANIgGATIgIANQgEAGgFADQgFADgGACQgFABgHAAg");
	this.shape_9.setTransform(86.3,32.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgxBTIAAilIBhAAIAAAkIg8AAIAAAdIA1AAIAAAiIg1AAIAAAfIA+AAIAAAjg");
	this.shape_10.setTransform(72.1,32.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAzBhIAAgcIhlAAIAAAcIgkAAIAAhAIASAAQADgDADgIQAEgJADgLQAEgNADgPQADgSABgTIABghIBrAAIAACBIAXAAIAABAgAgJghQgEAegDALQgGATgEAGIA0AAIAAhdIggAAg");
	this.shape_11.setTransform(55.7,33.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgBBUQgJgBgIgDQgIgDgHgFIgNgKQgFgFgEgHQgFgHgDgIQgEgIgBgJQgCgJAAgJQAAgIACgIIAEgRIAHgOQAEgHAGgGQAFgGAGgEIAQgIIARgFQAJgCAKAAQALAAATAFQANAFAIAHIgRAdQgIgFgHgCQgJgDgKAAQgJAAgIADQgIADgHAHQgGAGgEAJQgDAKAAALQAAALADAJQAEAJAGAHQAHAHAJADQAJAEALAAQAJAAAJgDQAKgDAIgGIAOAcQgDAFgGADIgNAGQgVAGgKAAQgKAAgIgCg");
	this.shape_12.setTransform(39.3,32.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// Layer 1
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#D62227").s().p("Ay8FUQiJAAAAiKIAAmUQAAiJCJAAMAl5AAAQCJAAAACJIAAGUQAACKiJAAg");
	this.shape_13.setTransform(135,34);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF0033").s().p("Ay8FUQiJAAAAiKIAAmUQAAiJCJAAMAl5AAAQCJAAAACJIAAGUQAACKiJAAg");
	this.shape_14.setTransform(135,34);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13}]}).to({state:[{t:this.shape_14}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,270.1,68);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer8();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol13, new cjs.Rectangle(0,0,84,84), null);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.car();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol11, new cjs.Rectangle(0,0,483,200), null);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.shadows();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol10, new cjs.Rectangle(0,0,484,145), null);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#000000","rgba(0,0,0,0)"],[0,1],0,-47.5,0,47.5).s().p("EhroAIXIAAwtMDXRAAAIAAQtg");
	this.shape.setTransform(688.9,53.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(0,0,1377.8,107), null);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("A/AIXIAAwtMA+BAAAIAAQtg");
	this.shape.setTransform(198.5,53.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(0,0,397,107), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.logoFN();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,260,165), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.FB_logo();
	this.instance.parent = this;
	this.instance.setTransform(28,28);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(28,28,261,64), null);


(lib.Symbol36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol35();
	this.instance.parent = this;
	this.instance.setTransform(78,60.5,0.443,0.601,0,0,0,175.8,100.7);

	this.instance_1 = new lib.Symbol35();
	this.instance_1.parent = this;
	this.instance_1.setTransform(102.5,53.5,0.279,0.377,0,0,0,175.7,100.5);

	this.instance_2 = new lib.Symbol35();
	this.instance_2.parent = this;
	this.instance_2.setTransform(174.6,66.5,0.549,0.601,0,0,0,175.8,100.7);

	this.instance_3 = new lib.Symbol35();
	this.instance_3.parent = this;
	this.instance_3.setTransform(204.8,59.5,0.345,0.377,0,0,0,175.6,100.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol36, new cjs.Rectangle(0,0,270.8,126.8), null);


(lib.Symbol34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol30();
	this.instance.parent = this;
	this.instance.setTransform(630.9,530.8,0.916,0.916,0,0,0,688.9,53.5);

	this.instance_1 = new lib.Symbol6();
	this.instance_1.parent = this;
	this.instance_1.setTransform(631.9,620.6,3.178,0.916,180,0,0,198.2,53.5);

	this.instance_2 = new lib.Symbol9();
	this.instance_2.parent = this;
	this.instance_2.setTransform(631.1,116.9,0.916,0.916,0,0,0,689,53.5);

	this.instance_3 = new lib.Symbol6();
	this.instance_3.parent = this;
	this.instance_3.setTransform(630,49,3.178,0.916,0,0,0,198.2,53.5);

	this.instance_4 = new lib.back();
	this.instance_4.parent = this;
	this.instance_4.setTransform(0,98,0.936,0.936);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol34, new cjs.Rectangle(0,0,1261.9,669.6), null);


(lib.Symbol32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol30();
	this.instance.parent = this;
	this.instance.setTransform(759.2,638.8,1.102,1.102,0,0,0,688.9,53.6);

	this.instance_1 = new lib.Symbol6();
	this.instance_1.parent = this;
	this.instance_1.setTransform(760.3,746.7,3.824,1.102,180,0,0,198.2,53.5);

	this.instance_2 = new lib.Symbol9();
	this.instance_2.parent = this;
	this.instance_2.setTransform(759.4,140.6,1.102,1.102,0,0,0,689,53.5);

	this.instance_3 = new lib.Symbol6();
	this.instance_3.parent = this;
	this.instance_3.setTransform(758.1,59,3.824,1.102,0,0,0,198.2,53.5);

	this.instance_4 = new lib.back();
	this.instance_4.parent = this;
	this.instance_4.setTransform(0.1,118,1.126,1.126);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol32, new cjs.Rectangle(0.1,0,1518.4,805.7), null);


(lib.Symbol31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol30();
	this.instance.parent = this;
	this.instance.setTransform(759.2,638.8,1.102,1.102,0,0,0,688.9,53.6);

	this.instance_1 = new lib.Symbol6();
	this.instance_1.parent = this;
	this.instance_1.setTransform(760.3,746.7,3.824,1.102,180,0,0,198.2,53.5);

	this.instance_2 = new lib.Symbol9();
	this.instance_2.parent = this;
	this.instance_2.setTransform(759.4,140.6,1.102,1.102,0,0,0,689,53.5);

	this.instance_3 = new lib.Symbol6();
	this.instance_3.parent = this;
	this.instance_3.setTransform(758.1,59,3.824,1.102,0,0,0,198.2,53.5);

	this.instance_4 = new lib.back();
	this.instance_4.parent = this;
	this.instance_4.setTransform(0.1,118,1.126,1.126);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol31, new cjs.Rectangle(0.1,0,1518.4,805.7), null);


(lib.Symbol25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol4();
	this.instance.parent = this;
	this.instance.setTransform(130,82.5,1,1,0,0,0,130,82.5);
	this.instance.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 0, 0, 0)];
	this.instance.cache(-2,-2,264,169);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(114).to({_off:true},1).wait(285));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,260,165);


(lib.Symbol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol15();
	this.instance.parent = this;
	this.instance.setTransform(135,38,1,1,0,0,0,135,34);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol14, new cjs.Rectangle(0,4,270.1,68), null);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol13();
	this.instance.parent = this;
	this.instance.setTransform(42.2,42.1,1,1,39.2,0,0,42,42);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:0,x:42,y:42},24).wait(116).to({rotation:39.2,x:42.2,y:42.1},0).to({rotation:0,x:42,y:42},19).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17,-17,118.2,118.2);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Symbol22();
	this.instance.parent = this;
	this.instance.setTransform(685.2,275.1,1,1,0,0,0,239.1,414.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},10).to({_off:true},1).wait(103).to({_off:false,alpha:1},0).to({alpha:0},10).wait(115).to({alpha:1},0).to({alpha:0},10).to({_off:true},1).wait(150));

	// Layer 1
	this.instance_1 = new lib.Symbol34();
	this.instance_1.parent = this;
	this.instance_1.setTransform(688.9,253.6,1,1,0,0,0,630.9,334.8);

	this.instance_2 = new lib.Symbol32();
	this.instance_2.parent = this;
	this.instance_2.setTransform(885.9,264.7,1,1,0,0,0,759.2,402.8);

	this.instance_3 = new lib.Symbol31();
	this.instance_3.parent = this;
	this.instance_3.setTransform(991.6,264.7,1,1,0,0,0,759.2,402.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_1}]},114).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},125).wait(160));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regY:334.7,scaleX:1.1,scaleY:1.1,x:686.5,y:269.6},114,cjs.Ease.quadInOut).to({_off:true,regX:759.2,regY:402.8,scaleX:1,scaleY:1,x:885.9,y:264.7},1,cjs.Ease.quadInOut).wait(285));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(58,-139,1261.9,828.2);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol2();
	this.instance.parent = this;
	this.instance.setTransform(160.5,70,1,1,0,0,0,160.5,70);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(28,28,261,64), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgbAiIAAhDIAYAAIAMABIAJADQAEACACADQACAEAAAEQAAAGgEAEQgEAFgGABIAHABIAFADQAEAEAAAHQAAAEgCAEQgCAEgEACQgEADgFABIgNABgAgPAYIAOABQAHAAAFgDQAEgDAAgFQAAgFgEgDQgEgDgIAAIgOAAgAgPgXIAAAUIAPAAQAFAAAEgDQAEgDAAgFQAAgFgFgCQgEgDgGAAg");
	this.shape.setTransform(135.6,305.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgLAhQgHgDgEgEQgFgFgDgHQgCgGAAgIQAAgGACgHQADgGAEgFQAFgFAGgDQAGgCAIAAQAGAAAGACQAFACAFAEQAEAEACAGQADAGAAAHIgBAHIgzAAQABAEACAEQACAEACADQADACAFACQAEABAEAAQAGAAAGgCQAFgCADgDIAFAJQgGAFgHACQgGACgHAAQgHAAgHgCgAAVgFQgBgEgBgDIgEgGQgDgDgDgBIgIgBIgHABIgHAEIgEAGIgDAHIApAAIAAAAg");
	this.shape_1.setTransform(127.9,305.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AATAiIAAgxIglAxIgMAAIAAhDIAMAAIAAAxIAlgxIANAAIAABDg");
	this.shape_2.setTransform(119.8,305.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAhAiIgYgiIAXghIAPAAIgZAhIAaAigAgGAiIAAhDIALAAIAABDgAgwAiIAagiIgZghIAPAAIAYAhIgZAig");
	this.shape_3.setTransform(110.5,305.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAbAqIAAgRIg2AAIAAARIgKAAIAAgcIAIAAQADgFADgJIAEgXIABgSIAtAAIAAA3IALAAIAAAcgAgHgTIgEAWQgDAHgDAEIAhAAIAAgsIgXAAg");
	this.shape_4.setTransform(101.3,306);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgNAiIgHgFQgDgCgBgEQgCgEAAgFQAAgFACgEQACgEAEgBQADgDAFgCIAKgBIAHAAIAJAEIgBgIIgCgIQgCgCgDgBQgDgCgFAAIgJABIgIAEIgDgKIAKgFQAGgBAFAAQAHAAAFACQAFABADAEQADAEACAFIABALIAAApIgLAAIAAgIQgEADgFADQgFADgHAAQgFAAgDgBgAgJAFQgEADAAAGQAAAEADADQADAEAGAAQAFAAAFgEQADgCAEgDIAAgJIgHgEIgJgBQgFAAgEADg");
	this.shape_5.setTransform(93.7,305.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgcA0IAAhnIA5AAIAAALIgtAAIAABcg");
	this.shape_6.setTransform(87.4,303.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgfAWQAAAAABAAQAAAAABAAQAAAAABAAQABAAAAgBIAFgFIAFgKQACgHAAgLIABgVIAuAAIAABCIgMAAIAAg2IgWAAIgBALQgBANgDAJQgCAJgEAFQgDAFgFACQgEABgFAAg");
	this.shape_7.setTransform(75.2,305.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AATAiIAAgxIglAxIgNAAIAAhDIANAAIAAAxIAlgxIAMAAIAABDg");
	this.shape_8.setTransform(67.4,305.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAYAiIAAgwIgYAeIAAAAIgXgeIAAAwIgMAAIAAhDIALAAIAYAhIAaghIAKAAIAABDg");
	this.shape_9.setTransform(58.5,305.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgNAiIgHgFQgDgCgBgEQgCgEAAgFQAAgFACgEQACgEAEgBQADgDAFgCIAKgBIAHAAIAJAEIgBgIIgCgIQgCgCgDgBQgDgCgFAAIgJABIgIAEIgDgKIAKgFQAGgBAFAAQAHAAAFACQAFABADAEQADAEACAFIABALIAAApIgLAAIAAgIQgEADgFADQgFADgHAAQgFAAgDgBgAgJAFQgEADAAAGQAAAEADADQADAEAGAAQAFAAAFgEQADgCAEgDIAAgJIgHgEIgJgBQgFAAgEADg");
	this.shape_10.setTransform(50.1,305.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAXA0Igug2IAtgxIAPAAIgtAxIAwA2gAgnA0IAAhnIANAAIAABng");
	this.shape_11.setTransform(42.6,303.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.instance = new lib.Man();
	this.instance.parent = this;

	this.instance_1 = new lib.Symbol9();
	this.instance_1.parent = this;
	this.instance_1.setTransform(171.6,349,0.307,2.393,180,0,0,688.9,53.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(-40.2,0,423.6,477), null);


(lib.Symbol29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol14();
	this.instance.parent = this;
	this.instance.setTransform(135,30,1,1,0,0,0,135,34);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:134.9,scaleX:1.07,scaleY:1.07,y:30.1},19,cjs.Ease.quadInOut).to({regX:135,scaleX:1,scaleY:1,y:30},20,cjs.Ease.quadInOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,270.1,68);


(lib.Symbol24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Symbol 11
	this.instance = new lib.Symbol11();
	this.instance.parent = this;
	this.instance.setTransform(1022.8,-132.4,0.803,0.803,0,0,0,241.5,100);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},239).wait(161));

	// Symbol 20
	this.instance_1 = new lib.Symbol26();
	this.instance_1.parent = this;
	this.instance_1.setTransform(529.9,557.2,1,1,0,0,0,74,23.4);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(264).to({_off:false},0).to({x:886},14,cjs.Ease.quadInOut).wait(111).to({x:1211.1,y:555.8},10,cjs.Ease.quadInOut).wait(1));

	// Symbol 19
	this.instance_2 = new lib.Symbol27();
	this.instance_2.parent = this;
	this.instance_2.setTransform(682.2,557.2,1,1,0,0,0,49.9,23.4);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(255).to({_off:false},0).to({x:1021.1},14,cjs.Ease.quadInOut).wait(115).to({x:1346.2,y:555.8},10,cjs.Ease.quadInOut).wait(6));

	// Symbol 12
	this.instance_3 = new lib.Symbol12();
	this.instance_3.parent = this;
	this.instance_3.setTransform(1314.9,452.5,0.593,0.803,0,0,0,42.1,42.1);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(239).to({_off:false},0).to({x:1000.8,y:482},26,cjs.Ease.quadInOut).wait(114).to({x:562.7,y:539},20,cjs.Ease.quadInOut).wait(1));

	// Symbol 12
	this.instance_4 = new lib.Symbol12();
	this.instance_4.parent = this;
	this.instance_4.setTransform(1481.8,447.9,0.275,0.603,0,0,0,42.4,42.1);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(239).to({_off:false},0).to({x:1167.7,y:477.3},26,cjs.Ease.quadInOut).wait(114).to({x:729.6,y:534.4},20,cjs.Ease.quadInOut).wait(1));

	// Layer 15
	this.instance_5 = new lib.Symbol36();
	this.instance_5.parent = this;
	this.instance_5.setTransform(869.2,449.5,1,1,0,0,0,135.3,63.4);
	this.instance_5.compositeOperation = "lighter";
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(308).to({_off:false},0).to({alpha:0},9).wait(4).to({alpha:1},0).to({alpha:0},9).to({_off:true},1).wait(69));

	// Symbol 11
	this.instance_6 = new lib.Symbol11();
	this.instance_6.parent = this;
	this.instance_6.setTransform(1316.9,412.3,0.803,0.803,0,0,0,241.5,100);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(239).to({_off:false},0).to({x:1002.8,y:441.8},26,cjs.Ease.quadInOut).wait(114).to({x:564.7,y:498.8},20,cjs.Ease.quadInOut).wait(1));

	// Symbol 10
	this.instance_7 = new lib.Symbol10();
	this.instance_7.parent = this;
	this.instance_7.setTransform(1321.4,512.3,0.803,0.803,0,0,0,242.1,72.5);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(239).to({_off:false},0).to({x:1007.3,y:541.8},26,cjs.Ease.quadInOut).wait(114).to({x:569.2,y:598.8},20,cjs.Ease.quadInOut).wait(1));

	// logoFN.png
	this.instance_8 = new lib.Symbol28();
	this.instance_8.parent = this;
	this.instance_8.setTransform(942,280.5,1,1,0,0,0,130,82.5);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(239).to({_off:false},0).to({alpha:1},34).wait(106).to({alpha:0},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(828.8,-212.7,388,160.7);


(lib.Symbol23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Symbol 18
	this.instance = new lib.Symbol18();
	this.instance.parent = this;
	this.instance.setTransform(564.2,392.5,0.711,0.711,0,0,0,181.5,33);
	this.instance.alpha = 0;
	this.instance._off = true;
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(121).to({_off:false},0).to({x:158.1,y:378.1,alpha:1},20,cjs.Ease.quadInOut).wait(77).to({x:-209.9,y:392.5},20,cjs.Ease.quadInOut).to({_off:true},1).wait(161));

	// Symbol 17
	this.instance_1 = new lib.Symbol17();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-157.3,344.4,0.749,0.749,0,0,0,85.9,33);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;
	new cjs.ButtonHelper(this.instance_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(119).to({_off:false},0).to({x:222.8,alpha:1},18,cjs.Ease.quadInOut).wait(81).to({x:602.8},20,cjs.Ease.quadInOut).to({_off:true},1).wait(161));

	// Symbol 16
	this.instance_2 = new lib.Symbol16();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-291.4,344.4,0.749,0.749,0,0,0,76.5,33);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;
	new cjs.ButtonHelper(this.instance_2, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(126).to({_off:false},0).to({x:88.7,alpha:1},19,cjs.Ease.quadInOut).wait(73).to({x:468.7},20,cjs.Ease.quadInOut).to({_off:true},1).wait(161));

	// Symbol 3
	this.instance_3 = new lib.Man();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-362,-496);

	this.instance_4 = new lib.Symbol3();
	this.instance_4.parent = this;
	this.instance_4.setTransform(145.5,219,1,1,0,0,0,147.5,217);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3}]}).to({state:[{t:this.instance_4}]},119).to({state:[{t:this.instance_4}]},22).to({state:[{t:this.instance_4}]},77).to({state:[{t:this.instance_4}]},20).to({state:[]},1).wait(161));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(119).to({_off:false},0).to({alpha:1},22).wait(77).to({alpha:0},20,cjs.Ease.quadInOut).to({_off:true},1).wait(161));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-362,-496,295,434);


// stage content:
(lib.fb_fng_300600 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		document.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		window.open(clickTAG, "_blank");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 2
	this.instance = new lib.Symbol29();
	this.instance.parent = this;
	this.instance.setTransform(151.1,546.2,1,1,0,0,0,135,34);

	this.instance_1 = new lib.Symbol25();
	this.instance_1.parent = this;
	this.instance_1.setTransform(154,196.6,1,1,0,0,0,130,82.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Layer 1
	this.instance_2 = new lib.Symbol24();
	this.instance_2.parent = this;
	this.instance_2.setTransform(6.7,210,1,1,0,0,0,796.6,295.1);

	this.instance_3 = new lib.Symbol23();
	this.instance_3.parent = this;
	this.instance_3.setTransform(344.6,322,1,1,0,0,0,348.6,217);

	this.instance_4 = new lib.Symbol7();
	this.instance_4.parent = this;
	this.instance_4.setTransform(154.5,58,1,1,0,0,0,160.5,70);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]}).wait(1));

	// Layer 3
	this.instance_5 = new lib.Symbol8();
	this.instance_5.parent = this;
	this.instance_5.setTransform(164.9,343,0.897,0.897,0,0,0,688.9,300);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-251.2,-91,1132.2,1083.3);
// library properties:
lib.properties = {
	id: '35C26090D2A84C68ADB13D26F7C2CECD',
	width: 300,
	height: 600,
	fps: 26,
	color: "#333333",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/back.jpg", id:"back"},
		{src:"images/car.png", id:"car"},
		{src:"images/FB_logo.png", id:"FB_logo"},
		{src:"images/Layer8.png", id:"Layer8"},
		{src:"images/logoFN.png", id:"logoFN"},
		{src:"images/Man.png", id:"Man"},
		{src:"images/shadows.png", id:"shadows"}
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
an.compositions['35C26090D2A84C68ADB13D26F7C2CECD'] = {
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