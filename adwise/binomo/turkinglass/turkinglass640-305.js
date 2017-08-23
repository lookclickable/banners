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
p.nominalBounds = new cjs.Rectangle(0,0,15,12);


(lib.buttu = function() {
	this.initialize(img.buttu);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,241,66);


(lib.man = function() {
	this.initialize(img.man);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,639,305);


(lib.ten = function() {
	this.initialize(img.ten);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,244,67);// helper functions:

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


(lib.Symbol18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663300").s().p("AgPBeIAAiMIAfAAIAACMgAgNg8QgDgCgBgEQgCgEAAgFQAAgDACgEQABgDADgCQAGgGAHAAQAIAAAGAGQACACACADQACAEAAADQAAAFgCAEIgEAGQgGAEgIAAQgHAAgGgEg");
	this.shape.setTransform(192.1,44.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#663300").s().p("AAUBGIghgxIgMAAIAAAxIggAAIAAiLIAvAAQAKAAAOADQAJADAHAHQAGAFACAJQADAIAAAKQAAAJgDAHQgCAHgEAEIgIAIIgGAEIAoA3gAgZgnIAAAfIALAAQAKAAAFgDQADgCABgDQACgEAAgEQAAgHgEgEIgFgDQgEgBgFAAg");
	this.shape_1.setTransform(182.7,46.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#663300").s().p("AgPBeIAAiMIAfAAIAACMgAgNg8QgDgCgBgEQgCgEAAgFQAAgDACgEQABgDADgCQAGgGAHAAQAIAAAGAGQACACACADQACAEAAADQAAAFgCAEIgEAGQgGAEgIAAQgHAAgGgEg");
	this.shape_2.setTransform(171.5,44.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#663300").s().p("AgrBGIAAiLIAfAAIAABtIA5AAIAAAeg");
	this.shape_3.setTransform(163.2,46.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#663300").s().p("AgqBGIAAiLIBSAAIAAAeIgxAAIAAAZIAsAAIAAAcIgsAAIAAAaIA0AAIAAAeg");
	this.shape_4.setTransform(151.5,46.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#663300").s().p("AgFBHQgIgBgHgDIgNgGIgKgJIgJgKQgDgGgDgGQgCgHgBgIQgCgHAAgIQAAgGACgHQABgIACgGQADgHADgGIAIgKQAFgFAFgEQAGgEAHgDQAGgDAIgBQAHgBAHAAQALAAAQADQAKAEAJAHIgNAaQgFgFgIgDQgIgCgIAAQgJgBgGADQgIADgFAFQgGAFgDAIQgDAJAAAJQAAAKADAIQADAHAGAGQAFAGAIACQAGADAKAAQAGAAAHgCQAGgCADgCIAAgQIgeAAIAAgdIA8AAIAAA9QgFAFgGAEQgGADgIADIgOAEIgOACQgJAAgHgCg");
	this.shape_5.setTransform(138.1,46.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#663300").s().p("AAUBGIgvhCIAABCIggAAIAAiLIAgAAIAAA9IAtg9IAmAAIg1BAIA5BLg");
	this.shape_6.setTransform(121,46.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#663300").s().p("AgPBGIAAiLIAfAAIAACLg");
	this.shape_7.setTransform(109.6,46.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#663300").s().p("AgsBGIAAiLIAhAAIAABtIA4AAIAAAeg");
	this.shape_8.setTransform(101.3,46.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#663300").s().p("AAmBGIgMgeIg1AAIgMAeIghAAIA6iLIAdAAIA5CLgAAPALIgPgnIgQAnIAfAAg");
	this.shape_9.setTransform(87.8,46.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#663300").s().p("AgPBGIAAhtIgqAAIAAgeIBzAAIAAAeIgqAAIAABtg");
	this.shape_10.setTransform(74.6,46.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#663300").s().p("AgnBGIAAiLIBQAAIAAAeIgxAAIAAAdIAqAAIAAAeIgqAAIAAAyg");
	this.shape_11.setTransform(63.7,46.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#663300").s().p("AAnBGIgMgeIg2AAIgNAeIgfAAIA5iLIAcAAIA7CLgAAOALIgOgnIgPAnIAdAAg");
	this.shape_12.setTransform(50.6,46.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#663300").s().p("AAZBGIAAg5IgyAAIAAA5IgfAAIAAiLIAfAAIAAA2IAyAAIAAg2IAhAAIAACLg");
	this.shape_13.setTransform(35.8,46.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#663300").s().p("AAkBGIhChTIAABTIgeAAIAAiLIAaAAIBBBTIAAhTIAeAAIAACLg");
	this.shape_14.setTransform(207.8,15.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#663300").s().p("AgPBeIAAiMIAfAAIAACMgAgNg8QgDgCgBgEQgCgEAAgFQAAgDACgEQABgDADgCQAGgGAHAAQAIAAAGAGQACACACADQACAEAAADQAAAFgCAEIgEAGQgGAEgIAAQgHAAgGgEg");
	this.shape_15.setTransform(196.3,13.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#663300").s().p("AAjBGIhBhTIAABTIgeAAIAAiLIAZAAIBCBTIAAhTIAeAAIAACLg");
	this.shape_16.setTransform(184.8,15.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#663300").s().p("AgPBeIAAiMIAfAAIAACMgAgNg8QgDgCgBgEQgCgEAAgFQAAgDACgEQABgDADgCQAGgGAHAAQAIAAAGAGQACACACADQACAEAAADQAAAFgCAEIgEAGQgGAEgIAAQgHAAgGgEg");
	this.shape_17.setTransform(173.3,13.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#663300").s().p("AgOBHQgHgCgHgDQgGgCgFgFQgFgEgDgGIASgVQAGAHAJAEQAIAEAGgBQAHAAADgCQAEgEAAgFQAAgDgDgEIgGgFIgUgKIgKgGIgKgIQgEgFgCgGQgDgHAAgIQAAgIADgIQAEgHAFgFQAGgGAJgDQAIgDAJAAQAJgBAQAFIAJAFIAIAGIgSAYQgFgFgEgCQgFgDgHABQgFAAgEACQgEADAAAFQAAAEADAEQACADAEACIATAKIALAGQAGADADAEQAFAGACAFQADAHAAAIQAAAJgEAIQgEAHgGAGQgHAFgIADQgJAEgKAAQgHAAgHgCg");
	this.shape_18.setTransform(164.1,15.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#663300").s().p("AgPBeIAAiMIAfAAIAACMgAgNg8QgDgCgBgEQgCgEAAgFQAAgDACgEQABgDADgCQAGgGAHAAQAIAAAGAGQACACACADQACAEAAADQAAAFgCAEIgEAGQgGAEgIAAQgHAAgGgEg");
	this.shape_19.setTransform(155,13.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#663300").s().p("AgBBHQgHgBgHgDIgNgGIgKgJQgFgEgEgGQgEgGgCgGQgDgHgBgIQgBgHAAgIIAAgOIAEgNQACgHAEgGIAIgKQAFgFAFgEQAGgEAHgDQAHgDAIgBQAHgBAIAAQAKgBAQAFQALADAHAHIgPAYIgMgGQgHgDgKABQgHAAgHACQgGADgGAFQgGAGgDAIQgCAIAAAJQAAAJACAIQADAIAGAFQAGAGAHADQAHAEAKgBQAIAAAHgCQAIgDAIgFIALAYQgCAEgGADIgLAFQgRAFgJAAQgIAAgHgCg");
	this.shape_20.setTransform(145,15.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#663300").s().p("AAkBGIhChTIAABTIgeAAIAAiLIAaAAIBBBTIAAhTIAeAAIAACLg");
	this.shape_21.setTransform(130.4,15.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#663300").s().p("AgpBGIAAiLIBRAAIAAAeIgyAAIAAAZIAsAAIAAAcIgsAAIAAAaIA0AAIAAAeg");
	this.shape_22.setTransform(117,15.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#663300").s().p("AAUBGIghgxIgMAAIAAAxIggAAIAAiLIAvAAQAKAAAOADQAJADAHAHQAGAFACAJQADAIAAAKQAAAJgDAHQgCAHgEAEIgIAIIgGAEIAoA3gAgZgnIAAAfIALAAQAKAAAFgDQADgCABgDQACgEAAgEQAAgHgEgEIgFgDQgEgBgFAAg");
	this.shape_23.setTransform(105.1,15.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#663300").s().p("AgFBcQgIgBgHgDIgNgGIgKgJIgJgKQgDgGgDgHQgCgGgBgIQgCgHAAgIQAAgIACgHQABgGACgGQADgHADgGIAIgLQAFgFAFgDQAGgEAHgDQAGgDAIgBQAHgCAHAAQALAAAQAEQAKAEAJAHIgNAaQgFgFgIgDQgIgDgIAAQgJAAgGADQgIADgFAFQgGAFgDAHQgDAIAAALQAAAJADAIQADAIAGAGQAFAFAIADQAGADAKAAQAGAAAHgCQAGgCADgDIAAgPIgeAAIAAgeIA8AAIAAA+QgFAFgGAEQgGADgIADIgOAEIgOABQgJAAgHgBgAgCg4IgMgFIgKgIIgGgIIANgPQAFAFAFADQAHAEAKAAQAJAAAIgEQAHgDAEgFIALAPQgCAFgEAEIgKAHQgFADgGACQgGACgGAAQgHAAgFgCg");
	this.shape_24.setTransform(90.2,13.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#663300").s().p("AgOBbQgIgBgHgCQgHgDgFgEIgLgIIgJgKIgHgNIgEgOQgCgHAAgJIACgPQABgGADgGQADgHAEgFQADgGAFgFQAFgFAGgEQAGgEAGgDIAPgEQAHgBAIAAQAIAAAHABQAIABAHADQAGACAGAEIALAIIAJALQAEAGACAGQADAHACAGIACAQQgBAIgBAIQgCAHgDAGQgCAHgEAGIgJAKQgFAFgGAEQgGAEgGACIgPAEQgHACgIAAQgHAAgHgCgAgPgSQgIADgFAFQgGAGgDAHQgDAIAAAJQAAAJADAIQAEAIAFAFQAGAGAHADQAHAEAIAAQAKAAAIgEQAHgDAFgGQAFgFADgIQACgIAAgJQAAgJgDgIQgDgHgFgGQgGgFgIgDQgGgDgJAAQgIAAgHADgAAJhAQgDgCgCgDQgBgDAAgEQAAgHAGgFQAGgEAHAAQAIAAAGAEQAFAFAAAHQAAAIgFAEQgGAFgIAAQgHAAgGgFgAglhAIgDgFQgCgDAAgEQAAgHAFgFQAGgEAIAAQAIAAAFAEQAFAFABAHQgBAIgFAEQgFAFgIAAQgIAAgGgFg");
	this.shape_25.setTransform(74.8,13.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#663300").s().p("AAUBGIgvhCIAABCIggAAIAAiLIAgAAIAAA9IAtg9IAmAAIg1BAIA5BLg");
	this.shape_26.setTransform(56.6,15.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#663300").s().p("AAUBGIghgxIgMAAIAAAxIggAAIAAiLIAvAAQAKAAAOADQAJADAHAHQAGAFACAJQADAIAAAKQAAAJgDAHQgCAHgEAEIgIAIIgGAEIAoA3gAgZgnIAAAfIALAAQAKAAAFgDQADgCABgDQACgEAAgEQAAgHgEgEIgFgDQgEgBgFAAg");
	this.shape_27.setTransform(42.9,15.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#663300").s().p("AgWBZIgKgFIgJgHIgHgIQgEgFgCgGIgDgNIgBgOIAAhQIAgAAIAABJQAAAJACAGQABAIADAFQADAFAGADQAGADAHAAQAHAAAFgDQAFgCADgFQADgFABgHIABgPIAAhLIAgAAIAABRIgBAPQgBAHgDAGIgFAKIgHAJIgJAGIgKAEQgKAEgLAAQgQgCgIgCgAAIhAQgDgCgBgDQgBgDAAgEQAAgHAFgFQAGgEAIAAQAHAAAGAEQAFAFABAHQgBAIgFAEQgGAFgHAAQgIAAgGgFgAglhAIgEgFQgBgDAAgEQgBgHAGgFQAGgEAIAAQAIAAAEAEQAGAFAAAHQAAAIgGAEQgEAFgIAAQgIAAgGgFg");
	this.shape_28.setTransform(27.8,13.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#663300").s().p("AgPBGIAAhtIgqAAIAAgeIBzAAIAAAeIgqAAIAABtg");
	this.shape_29.setTransform(14.3,15.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol18, new cjs.Rectangle(0,0,224,65), null);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.buttu();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol12, new cjs.Rectangle(0,0,241,66), null);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.arrow();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol11, new cjs.Rectangle(0,0,15,12), null);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0,0.706,1],-9.1,0,9.1,0).s().p("AhaEFIAAoJIC1AAIAAIJg");
	this.shape.setTransform(9.1,26.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol10, new cjs.Rectangle(0,0,18.3,52.3), null);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ten();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(0,0,244,67), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A1eUoMAAAgpPMAq9AAAMAAAApPg");
	this.shape.setTransform(137.5,132);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,275,264), null);


(lib.Symbol19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("ANJERIAAg8QgjgHgagRQgNgIgKgKQgLgLgFgMIA5hDQASAWAbAMQAYALAZAAQATAAAIgJQAIgHAAgQQAAgMgIgKQgHgIgOgJIg+gfIgigUQgSgLgMgNQgNgQgHgTQgIgVAAgYQAAgTAHgTQAGgSANgQQANgPASgLQASgMAWgHIAAg3IBeAAIAAA1QAbAEAWAMQAWAKAPARIg2BJQgRgQgLgFQgQgIgWAAQgaAAgNAIQgLAIAAAQQAAAMAHALQAHAJAOAJIA/AeIAiASQARALAMANQAOAQAHASQAIAVAAAZQAAAWgHATQgHAUgNAQQgNAPgSALQgTAMgWAFIAAA8gAHsDUQgQgEgPgHQgOgIgMgMQgMgKgKgOQgMgUgQgyQgHgagDg/QAAghAJg6QAHgbAWgqQAJgOAMgLQAMgLAOgIQAPgHAQgFQARgDATAAQATAAARADQAQAFAPAHQAOAIAMALQAMALAJAOQAWAqAGAbQAKA6AAAhQgDA/gGAaQgQAygMAUQgKAOgLAKQgMAMgOAIQgOAHgRAEQgRAEgTAAQgTAAgRgEgAH4iAQgKAHgGAPQgGAQgEAaIgDA+QAAAjAEAbQAEAZAHAPQAHAQAKAHQAJAIAMAAQAOAAAJgIQAKgHAGgPQAGgQADgZIACg+IgDg/QgDgagGgQQgGgPgKgHQgJgGgOgBQgOAAgJAIgACYDUQgRgEgOgHQgPgIgMgMQgLgKgKgOQgNgUgQgyQgGgagEg/QAAghAKg6QAGgbAWgqQAKgOAMgLQAMgLAOgIQAOgHARgFQAQgDATAAQATAAARADQARAFAOAHQAPAIAMALQALALAKAOQAWAqAGAbQAJA6AAAhQgDA/gGAaQgPAygNAUQgJAOgMAKQgMAMgOAIQgOAHgRAEQgQAEgTAAQgTAAgRgEgACjiAQgJAHgHAPQgGAQgDAaIgDA+QAAAjAEAbQADAZAIAPQAGAQAKAHQAJAIANAAQANAAAKgIQAJgHAGgPQAGgQADgZIADg+IgDg/QgDgagGgQQgHgPgJgHQgKgGgOgBQgNAAgKAIgAi7DUQgRgEgOgHQgPgIgMgMQgLgKgKgOQgNgUgQgyQgGgagEg/QAAghAKg6QAGgbAWgqQAKgOAMgLQAMgLAOgIQAOgHARgFQAQgDATAAQATAAARADQARAFAOAHQAPAIAMALQALALAKAOQAWAqAGAbQAJA6AAAhQgDA/gGAaQgPAygNAUQgJAOgMAKQgMAMgOAIQgOAHgRAEQgQAEgTAAQgTAAgRgEgAiwiAQgJAHgHAPQgGAQgDAaIgDA+QAAAjAEAbQADAZAIAPQAGAQAKAHQAJAIANAAQANAAAKgIQAJgHAGgPQAGgQADgZIADg+IgDg/QgDgagGgQQgHgPgJgHQgKgGgOgBQgNAAgKAIgAqNDUQgRgEgOgHQgPgIgMgMQgLgKgKgOQgNgUgQgyQgGgagEg/QAAghAKg6QAGgbAWgqQAKgOAMgLQAMgLAOgIQAOgHARgFQAQgDATAAQATAAARADQARAFAOAHQAPAIAMALQALALAKAOQAWAqAGAbQAJA6AAAhQgDA/gGAaQgPAygNAUQgJAOgMAKQgMAMgOAIQgOAHgRAEQgQAEgTAAQgTAAgRgEgAqCiAQgJAHgHAPQgGAQgDAaIgDA+QAAAjAEAbQADAZAIAPQAGAQAKAHQAJAIANAAQANAAAKgIQAJgHAGgPQAGgQADgZIADg+IgDg/QgDgagGgQQgHgPgJgHQgKgGgOgBQgNAAgKAIgAurDTIAAkpIgtAeIgxhMIB4hVIBEAAIAAGsg");
	var mask_graphics_49 = new cjs.Graphics().p("ANJERIAAg8QgjgHgagRQgNgIgKgKQgLgLgFgMIA5hDQASAWAbAMQAYALAZAAQATAAAIgJQAIgHAAgQQAAgMgIgKQgHgIgOgJIg+gfIgigUQgSgLgMgNQgNgQgHgTQgIgVAAgYQAAgTAHgTQAGgSANgQQANgPASgLQASgMAWgHIAAg3IBeAAIAAA1QAbAEAWAMQAWAKAPARIg2BJQgRgQgLgFQgQgIgWAAQgaAAgNAIQgLAIAAAQQAAAMAHALQAHAJAOAJIA/AeIAiASQARALAMANQAOAQAHASQAIAVAAAZQAAAWgHATQgHAUgNAQQgNAPgSALQgTAMgWAFIAAA8gAHsDUQgQgEgPgHQgOgIgMgMQgMgKgKgOQgMgUgQgyQgHgagDg/QAAghAJg6QAHgbAWgqQAJgOAMgLQAMgLAOgIQAPgHAQgFQARgDATAAQATAAARADQAQAFAPAHQAOAIAMALQAMALAJAOQAWAqAGAbQAKA6AAAhQgDA/gGAaQgQAygMAUQgKAOgLAKQgMAMgOAIQgOAHgRAEQgRAEgTAAQgTAAgRgEgAH4iAQgKAHgGAPQgGAQgEAaIgDA+QAAAjAEAbQAEAZAHAPQAHAQAKAHQAJAIAMAAQAOAAAJgIQAKgHAGgPQAGgQADgZIACg+IgDg/QgDgagGgQQgGgPgKgHQgJgGgOgBQgOAAgJAIgACYDUQgRgEgOgHQgPgIgMgMQgLgKgKgOQgNgUgQgyQgGgagEg/QAAghAKg6QAGgbAWgqQAKgOAMgLQAMgLAOgIQAOgHARgFQAQgDATAAQATAAARADQARAFAOAHQAPAIAMALQALALAKAOQAWAqAGAbQAJA6AAAhQgDA/gGAaQgPAygNAUQgJAOgMAKQgMAMgOAIQgOAHgRAEQgQAEgTAAQgTAAgRgEgACjiAQgJAHgHAPQgGAQgDAaIgDA+QAAAjAEAbQADAZAIAPQAGAQAKAHQAJAIANAAQANAAAKgIQAJgHAGgPQAGgQADgZIADg+IgDg/QgDgagGgQQgHgPgJgHQgKgGgOgBQgNAAgKAIgAi7DUQgRgEgOgHQgPgIgMgMQgLgKgKgOQgNgUgQgyQgGgagEg/QAAghAKg6QAGgbAWgqQAKgOAMgLQAMgLAOgIQAOgHARgFQAQgDATAAQATAAARADQARAFAOAHQAPAIAMALQALALAKAOQAWAqAGAbQAJA6AAAhQgDA/gGAaQgPAygNAUQgJAOgMAKQgMAMgOAIQgOAHgRAEQgQAEgTAAQgTAAgRgEgAiwiAQgJAHgHAPQgGAQgDAaIgDA+QAAAjAEAbQADAZAIAPQAGAQAKAHQAJAIANAAQANAAAKgIQAJgHAGgPQAGgQADgZIADg+IgDg/QgDgagGgQQgHgPgJgHQgKgGgOgBQgNAAgKAIgAqNDUQgRgEgOgHQgPgIgMgMQgLgKgKgOQgNgUgQgyQgGgagEg/QAAghAKg6QAGgbAWgqQAKgOAMgLQAMgLAOgIQAOgHARgFQAQgDATAAQATAAARADQARAFAOAHQAPAIAMALQALALAKAOQAWAqAGAbQAJA6AAAhQgDA/gGAaQgPAygNAUQgJAOgMAKQgMAMgOAIQgOAHgRAEQgQAEgTAAQgTAAgRgEgAqCiAQgJAHgHAPQgGAQgDAaIgDA+QAAAjAEAbQADAZAIAPQAGAQAKAHQAJAIANAAQANAAAKgIQAJgHAGgPQAGgQADgZIADg+IgDg/QgDgagGgQQgHgPgJgHQgKgGgOgBQgNAAgKAIgAurDTIAAkpIgtAeIgxhMIB4hVIBEAAIAAGsg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:104,y:29.1}).wait(49).to({graphics:mask_graphics_49,x:104,y:29.1}).wait(1));

	// Layer 3
	this.instance = new lib.Symbol10();
	this.instance.parent = this;
	this.instance.setTransform(-56.2,15.8,4.42,2.828,41.5,0,0,8.8,25.9);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:281.2,y:50.8},49).wait(1));

	// Layer 1
	this.instance_1 = new lib.Symbol7();
	this.instance_1.parent = this;
	this.instance_1.setTransform(103.8,28.5,0.851,0.851,0,0,0,122,33.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(50));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,207.6,57);


(lib.Symbol17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol18();
	this.instance.parent = this;
	this.instance.setTransform(112,32.5,1,1,0,0,0,112,32.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.781},9,cjs.Ease.quadInOut).to({alpha:1},10,cjs.Ease.quadInOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,224,65);


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol19();
	this.instance.parent = this;
	this.instance.setTransform(103.8,28.5,1,1,0,0,0,103.8,28.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.06,scaleY:1.06,x:103.9,y:28.6},19,cjs.Ease.quadInOut).to({scaleX:1,scaleY:1,x:103.8,y:28.5},20,cjs.Ease.quadInOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-134.7,-64.8,342.4,164.1);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol11();
	this.instance.parent = this;
	this.instance.setTransform(7.5,6,1,1,0,0,0,7.5,6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:12.5},5,cjs.Ease.quadInOut).to({x:7.5},4,cjs.Ease.quadInOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,15,12);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AkhBkQgpgpAAg6QAAg5AngWQAngXA+gLQA9gMAvAbQAvAagHBCQgIBAgpApQgpApg6AAQg6AAgpgpgAB2BJQgngpgIhBQgHhCAygYQAxgYA3AKQA3AJAeAUQAeAUgCA6QgBA4gfAsQgfAsg3AAQg4AAgngpg");
	var mask_graphics_39 = new cjs.Graphics().p("AkhBkQgpgpAAg6QAAg5AngWQAngXA+gLQA9gMAvAbQAvAagHBCQgIBAgpApQgpApg6AAQg6AAgpgpgAB2BJQgngpgIhBQgHhCAygYQAxgYA3AKQA3AJAeAUQAeAUgCA6QgBA4gfAsQgfAsg3AAQg4AAgngpg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:33.1,y:14.1}).wait(39).to({graphics:mask_graphics_39,x:33.1,y:14.1}).wait(62));

	// Layer 2
	this.instance = new lib.Symbol10();
	this.instance.parent = this;
	this.instance.setTransform(-22.7,13.2,1.977,1.977,15,0,0,9,26.1);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:9.2,regY:25.9,scaleX:2.36,scaleY:1.54,x:92.4,y:18.7},39).wait(62));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,8.3,28.3);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(137.5,132,1,1,0,0,0,137.5,132);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.07,scaleY:1.07,x:137.6,y:133.1},49,cjs.Ease.quadInOut).to({scaleX:1,scaleY:1,x:137.5,y:132},50,cjs.Ease.quadInOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,275,264);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Symbol17();
	this.instance.parent = this;
	this.instance.setTransform(-170.9,-51.9,1,1,0,0,0,112,32.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.instance_1 = new lib.Symbol16();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-174.2,18.5,1,1,0,0,0,103.8,28.5);

	this.instance_2 = new lib.Symbol8();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-173.5,27.1,1,1,0,0,0,137.5,132);
	this.instance_2.alpha = 0.922;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(-412.7,-104.9,376.8,264), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Symbol9();
	this.instance.parent = this;
	this.instance.setTransform(125.9,92.8,1,1,0,0,0,33.1,14.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.instance_1 = new lib.man();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(1,0,639,305), null);


(lib.Symbol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAgA/Ig7hKIAABKIgbAAIAAh9IAXAAIA7BLIAAhLIAbAAIAAB9g");
	this.shape.setTransform(184.4,31);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AglA/IAAh9IBJAAIAAAbIgtAAIAAAWIAoAAIAAAaIgoAAIAAAXIAvAAIAAAbg");
	this.shape_1.setTransform(172.4,31);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AASA/IgegsIgKAAIAAAsIgeAAIAAh9IArAAQAJAAANADQAIADAGAFQAFAGACAHQADAHAAAJQAAAIgCAHQgCAGgEAEIgHAHIgGAEIAkAxgAgWgjIAAAcIAKAAQAJAAAEgDQACgCACgDQABgDABgDQgBgHgDgDQgCgCgCgBQgEgBgFAAg");
	this.shape_2.setTransform(161.7,31);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgEBTQgHgBgHgDQgGgCgFgDIgJgIIgIgJIgGgMIgDgMQgCgHABgHQgBgHACgGIADgMIAGgLQADgFAEgEIAJgIIALgGIAMgEIAOgBQAJAAAPADQAIADAJAHIgMAXQgEgEgHgDQgIgCgHAAQgIAAgFACQgHACgFAFQgFAFgDAGQgCAHgBAKQABAIACAIQACAGAFAFQAGAGAHACQAFADAIAAQAGAAAHgCIAIgEIAAgOIgbAAIAAgbIA2AAIAAA4QgFAEgGAEIgMAFIgMAEIgNABIgOgBgAgCgzQgFgBgFgDIgJgHIgGgHIALgOQAFAFAFACQAGAEAJAAQAIAAAIgEQAFgCAEgFIAKAOIgGAIIgIAGQgEADgGACIgLABQgGAAgFgCg");
	this.shape_3.setTransform(148.2,29.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgMBTQgIgCgGgCQgFgCgGgDQgFgDgFgFQgEgEgEgFQgDgGgDgGIgDgMQgCgHAAgIQAAgGACgHIADgLIAGgLIAIgKQAEgFAFgDQAFgDAHgCIANgFIANgBIAOABQAHABAGADQAGACAGADIAJAIIAIAJIAGALIAEAMIABAOIgBAOIgEAMIgGAMIgIAKIgJAHIgMAGIgNAEIgOABIgMgBgAgNgQQgHACgFAFQgFAGgCAGQgDAHAAAIQAAAJADAGQADAIAEAEQAGAGAGACQAHAEAGAAQAJAAAHgEQAGgCAFgGQAFgEACgIQACgGAAgJQAAgIgDgHQgCgGgFgGQgFgFgGgCQgHgCgIgBQgHABgGACgAAIg5IgDgFQgCgDAAgDQAAgGAFgEQAGgFAHAAQAGAAAFAFQAFAEAAAGQAAAHgFAEQgFAEgGAAQgIAAgFgEgAggg5QgDgCgBgDQgBgDgBgDQAAgGAGgEQAFgFAHAAQAHAAAEAFQAGAEAAAGQAAAHgGAEQgEAEgHAAQgHAAgFgEg");
	this.shape_4.setTransform(134.4,29.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgOA/IAAh9IAdAAIAAB9g");
	this.shape_5.setTransform(120.1,31);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AASA/IgegsIgKAAIAAAsIgdAAIAAh9IAqAAQAJAAANADQAIADAGAFQAFAGACAHQADAHAAAJQAAAIgCAHQgCAGgEAEIgHAHIgGAEIAkAxgAgWgjIAAAcIAKAAQAJAAAEgDQACgCACgDQACgDgBgDQABgHgEgDQgCgCgDgBQgDgBgFAAg");
	this.shape_6.setTransform(111.6,31);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAjA/IgLgbIgxAAIgKAbIgdAAIA0h9IAZAAIA0B9gAANAKIgNgjIgOAjIAbAAg");
	this.shape_7.setTransform(98.2,31);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgnA/IAAh9IAdAAIAABiIAyAAIAAAbg");
	this.shape_8.setTransform(87.5,31);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgNA/IAAg0IgthJIAhAAIAaAvIAbgvIAfAAIgtBJIAAA0g");
	this.shape_9.setTransform(76,31);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAjA/IgLgbIgxAAIgKAbIgdAAIA0h9IAZAAIA0B9gAANAKIgNgjIgOAjIAbAAg");
	this.shape_10.setTransform(63.6,31);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgNA/IAAhiIgmAAIAAgbIBnAAIAAAbIgmAAIAABig");
	this.shape_11.setTransform(51.7,31);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AglA/IAAh9IBJAAIAAAbIgsAAIAAAWIAnAAIAAAaIgnAAIAAAXIAuAAIAAAbg");
	this.shape_12.setTransform(41.4,31);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgzA/IgEAAIAAh9IADAAIAmAAIAQAAIAPAEIAMAGQAGADAEAFIAHAJIAFALIAEALIABANIgCAMIgEAMIgFALIgIAKIgKAIQgFADgIACIgOAEQgHABgJAAgAgZgjIAABHIAKAAQAKAAAGgCQAIgDAEgEQAGgFADgHQADgHgBgIQAAgIgCgIQgDgGgGgEQgFgFgHgDQgHgBgJAAIgKAAg");
	this.shape_13.setTransform(29.7,31);

	this.instance = new lib.Symbol13();
	this.instance.parent = this;
	this.instance.setTransform(215,31.5,1,1,0,0,0,7.5,6);

	this.instance_1 = new lib.Symbol12();
	this.instance_1.parent = this;
	this.instance_1.setTransform(120.5,33,1,1,0,0,0,120.5,33);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAhBBIg9hNIAABNIgcAAIAAiBIAXAAIA9BNIAAhNIAdAAIAACBg");
	this.shape_14.setTransform(186.8,30.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgmBBIAAiBIBMAAIAAAcIgvAAIAAAXIApAAIAAAbIgpAAIAAAXIAxAAIAAAcg");
	this.shape_15.setTransform(174.3,30.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AASBBIgfguIgLAAIAAAuIgdAAIAAiBIAsAAQAJAAANADQAJACAGAHQAFAFADAHQACAIAAAJQAAAJgCAHQgCAGgEAEIgHAHIgHAEIAmAzgAgYgkIAAAdIALAAQAKgBAEgDQADgCABgDQACgCAAgFQAAgGgEgEQgCgBgDgBIgJgBg");
	this.shape_16.setTransform(163.3,30.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgFBWQgHgBgGgDIgNgGIgKgIIgHgJIgGgMIgEgNIgBgPIABgNIAEgMIAFgLIAIgLIAKgIIALgGQAGgDAHgBQAHgBAHAAQAKAAAOADQAKAEAIAGIgMAZQgEgFgHgCQgIgDgHAAQgJAAgGACQgHADgFAFQgFAFgDAGQgDAIAAAJQAAAJADAIQADAHAFAFQAFAFAHADQAGADAJAAQAFAAAHgCQAGgCACgDIAAgOIgcAAIAAgcIA4AAIAAA7IgKAHQgGAEgGACIgOAEIgMABQgJAAgHgBgAgCg1QgGgBgFgDIgJgHIgGgIIAMgOQAFAFAEACQAHAEAKAAQAIAAAIgDQAFgDAFgFIAKAPIgGAHIgJAHQgFADgFACQgGABgFAAQgHAAgFgCg");
	this.shape_17.setTransform(149.3,29);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgNBVQgIgBgGgCQgGgCgGgEIgJgIIgJgJQgEgGgCgGQgDgGgBgHQgBgHAAgIQAAgHABgHQABgGACgGIAHgLIAIgKIAKgIIALgHQAHgCAHgBQAHgCAHAAIAOABIANAEIANAGIAKAHQAEAFAEAFIAGAMIAEAMQACAHgBAIQABAHgCAHIgEANIgGAMIgIAKQgFAEgFADQgGAEgHADIgNADQgHACgHAAQgHAAgGgCgAgOgRQgHADgFAFQgFAFgDAHQgDAHAAAJQAAAIADAIQADAHAFAFQAGAGAGACQAHADAHAAQAJAAAHgDQAHgDAFgFQAFgFACgIQACgHABgIQgBgJgDgHQgCgHgGgFQgFgFgGgDQgHgDgIAAQgHAAgHADgAAIg7IgDgFQgCgDAAgEQAAgHAFgEQAGgEAHAAQAHAAAFAEQAGAEAAAHQAAAHgGAFQgFAEgHAAQgHAAgGgEgAgig7IgEgFIgBgHQAAgHAFgEQAFgEAIAAQAHAAAFAEQAFAEAAAHQAAAHgFAFQgFAEgHAAQgIAAgFgEg");
	this.shape_18.setTransform(134.9,29);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgOBBIAAiBIAdAAIAACBg");
	this.shape_19.setTransform(120.1,30.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AASBBIgfguIgLAAIAAAuIgdAAIAAiBIAsAAQAJAAANADQAJACAGAHQAFAFADAHQACAIAAAJQAAAJgCAHQgCAGgEAEIgHAHIgHAEIAmAzgAgYgkIAAAdIALAAQAKgBAEgDQADgCABgDQACgCAAgFQAAgGgEgEQgCgBgDgBIgJgBg");
	this.shape_20.setTransform(111.3,30.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAkBBIgLgbIgzAAIgLAbIgeAAIA3iBIAZAAIA3CBgAAOAKIgOgkIgPAkIAdAAg");
	this.shape_21.setTransform(97.4,30.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgpBBIAAiBIAeAAIAABlIA1AAIAAAcg");
	this.shape_22.setTransform(86.4,30.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgOBBIAAg1IguhMIAiAAIAbAxIAcgxIAgAAIguBMIAAA1g");
	this.shape_23.setTransform(74.4,30.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAkBBIgLgbIgzAAIgLAbIgeAAIA3iBIAZAAIA3CBgAAOAKIgOgkIgPAkIAdAAg");
	this.shape_24.setTransform(61.5,30.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgOBBIAAhlIgnAAIAAgcIBrAAIAAAcIgnAAIAABlg");
	this.shape_25.setTransform(49.1,30.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgmBBIAAiBIBMAAIAAAcIgvAAIAAAXIApAAIAAAbIgpAAIAAAXIAxAAIAAAcg");
	this.shape_26.setTransform(38.4,30.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("Ag1BBIgDAAIAAiBIACAAIAngBQAKAAAHACIAPADIANAHIAKAIQAFAEADAGIAFAKIADAMIABANIgBAMIgDANIgGALQgEAGgFAEQgEAFgGAEQgGADgHADIgPADQgHACgKAAgAgbgkIAABJIALABQAKAAAHgCQAIgDAFgFQAGgFADgHQADgIAAgIQAAgJgEgHQgDgGgFgFQgGgFgIgCQgGgDgKAAIgLABg");
	this.shape_27.setTransform(26.3,30.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1,p:{scaleX:1,scaleY:1,x:120.5,y:33}},{t:this.instance,p:{scaleX:1,scaleY:1,x:215}},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.instance_1,p:{scaleX:1.037,scaleY:1.037,x:120.6,y:33.1}},{t:this.instance,p:{scaleX:1.037,scaleY:1.037,x:218.6}},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,241,66);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol15();
	this.instance.parent = this;
	this.instance.setTransform(120.5,33,1,1,0,0,0,120.5,33);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(-4.4,-1.2,250,68.5), null);


(lib.Symbol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol5();
	this.instance.parent = this;
	this.instance.setTransform(120.5,33,1,1,0,0,0,120.5,33);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol14, new cjs.Rectangle(0,0,241,66), null);


// stage content:
(lib.turkinglass640305 = function(mode,startPosition,loop) {
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

	// Symbol 14
	this.instance = new lib.Symbol14();
	this.instance.parent = this;
	this.instance.setTransform(482.5,235,1,1,0,0,0,120.5,33);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Symbol 6
	this.instance_1 = new lib.Symbol6();
	this.instance_1.parent = this;
	this.instance_1.setTransform(778,158.5,1,1,0,0,0,122,33.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Symbol 4
	this.instance_2 = new lib.Symbol4();
	this.instance_2.parent = this;
	this.instance_2.setTransform(319.5,152.5,1,1,0,0,0,319.5,152.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(321,152.5,639,305);
// library properties:
lib.properties = {
	id: '4313199C015B409E8F07E69744E35C4D',
	width: 640,
	height: 305,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/arrow.png", id:"arrow"},
		{src:"images/buttu.png", id:"buttu"},
		{src:"images/man.jpg", id:"man"},
		{src:"images/ten.png", id:"ten"}
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
an.compositions['4313199C015B409E8F07E69744E35C4D'] = {
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