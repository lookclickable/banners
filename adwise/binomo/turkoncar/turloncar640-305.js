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



(lib.car = function() {
	this.initialize(img.car);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,624,555);// helper functions:

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


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#330000").s().p("AgeA5QgHgDgGgFQgFgGgDgIQgEgKAAgMIAAhIIAnAAIAABAQAAAIADAFQAFAGAIgBQAEAAAEgCQAFgDAEgFIAAhIIAnAAIAAB0IgnAAIAAgLQgFAGgIAEQgHAEgNAAQgHAAgHgDg");
	this.shape.setTransform(180.3,37.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#330000").s().p("AANBbIgjg4IAAA4IgoAAIAAi1IAoAAIAABzIAegyIAxAAIgmA0IArBAg");
	this.shape_1.setTransform(167.3,34.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#330000").s().p("AgaA5QgLgFgJgIQgJgIgEgLQgFgMAAgNQAAgMAFgMQAEgKAJgJQAJgIALgFQAMgFAOAAQAPAAANAFQALAFAJAIQAIAJAFAKQAEAMAAAMQAAANgEAMQgFALgIAIQgJAIgLAFQgNAEgPAAQgOAAgMgEgAgPgSQgEAEgBAFQgCAEAAAFQAAALAHAHQAGAHAJAAQALAAAGgHIAFgIQABgEAAgGQABgKgHgIQgGgGgLAAQgIAAgHAGg");
	this.shape_2.setTransform(152.3,37.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#330000").s().p("AgTA7IAAh0IAmAAIAAB0g");
	this.shape_3.setTransform(136.2,37.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#330000").s().p("AA0A8IAAhCQAAgHgEgFQgDgEgIAAQgGAAgFADQgFADgCAEIAABIIgmAAIAAhCQAAgIgDgEQgEgEgHAAQgFAAgFACQgFACgDAFIAABJIgnAAIAAh0IAnAAIAAALQAGgHAJgDQAJgEALAAQAMABAIAFQAJAEADAHQAHgHAIgFQAKgFANAAQAIABAGACQAHACAFAEQAFAGADAIQADAJAAALIAABMg");
	this.shape_4.setTransform(122.3,37.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#330000").s().p("AgbA6QgHgCgFgFQgFgFgDgGQgDgHAAgJQAAgKAEgHQADgHAGgEQAGgFAHgCQAIgDAJAAQAJAAAMAHQABgLgEgFQgFgEgHAAQgJAAgIACIgMAFIgKgcQAIgFALgDQANgEAKAAQAOAAAJADQAJAEAGAGQAGAGACAKQADAJAAAMIAABFIgiAAIAAgKQgEAFgJAEQgHADgKAAQgHAAgHgDgAgHANQgDADAAAEQAAAEADACQADACAEAAQAKAAAEgGIAAgHQgFgEgJAAQgEAAgDACg");
	this.shape_5.setTransform(105.5,37.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#330000").s().p("AgMA7Ig1h0IAuAAIAQAlQAEAMACAOQADgOAFgNIAOgkIApAAIgxB0g");
	this.shape_6.setTransform(93.4,37.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#330000").s().p("AgWA5QgLgEgJgJQgIgHgEgMQgFgLAAgOQAAgLAFgMQAEgLAIgJQAJgIALgFQAMgFANAAQAMAAAKAFQAKADAIAHQAIAIAFAKQAEALAAALQAAALgCAIIhNAAQADAIAIAEQAHAEAJAAQANAAARgIIALAcQgJAGgMAEQgMACgNAAQgNAAgMgEgAAVgMQAAgGgFgFQgFgFgJAAQgIAAgGAEQgFAEgDAIIApAAIAAAAg");
	this.shape_7.setTransform(80.6,37.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#330000").s().p("AhKBbIgFAAIAAi1IAEAAIA2gBQANAAALACQALACAKAEQAKADAIAFQAIAFAGAGQAGAHAFAHQAEAHADAIIAEARIACASQAAAIgCAJQgBAJgEAJQgDAIgFAHQgFAIgGAGQgHAHgIAFQgIAFgKADQgKAEgLACQgLACgMAAgAglgzIAABnIAPABQANAAAKgEQALgDAIgHQAHgHAEgKQAFgKAAgMQAAgNgFgKQgEgJgIgHQgIgGgLgDQgJgEgNAAIgPABg");
	this.shape_8.setTransform(64.8,34.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFE400").s().p("AtRFoQiVAAhqhpQhphqAAiVQAAiUBphqQBqhpCVAAIajAAQCVAABqBpQBpBqAACUQAACVhpBqQhqBpiVAAg");
	this.shape_9.setTransform(121,36);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF6600").s().p("AtRFoQiVAAhqhpQhphqAAiVQAAiUBphqQBqhpCVAAIajAAQCVAABqBpQBpBqAACUQAACVhpBqQhqBpiVAAg");
	this.shape_10.setTransform(121,36);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_10},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,242,72);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.car();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.634,0.634);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol12, new cjs.Rectangle(0,0,395.8,352), null);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#330000").s().p("AgNAOQgGgHAAgHQAAgHAGgGQAFgGAJAAQAIAAAFAGQAGAGAAAHQAAAHgGAHQgFAGgIAAQgJAAgFgGg");
	this.shape.setTransform(215.6,57);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#330000").s().p("AgcA5QgIgDgFgGQgGgGgDgJQgDgKAAgLIAAhHIAeAAIAABAQAAANAFAGQACAEAFACQAEACAGAAQAGAAAHgEQAHgEAFgGIAAhNIAeAAIAAB0IgeAAIAAgPQgGAIgIAFQgKAFgMAAQgJAAgHgDg");
	this.shape_1.setTransform(205.3,53.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#330000").s().p("AgaBYQgKgFgHgHQgIgIgEgLQgDgLAAgOQAAgNAEgLQAFgLAJgJQAIgIAMgEQAMgFANAAQAIAAAFACQAGABAFADIAAhEIAeAAIAAC1IgeAAIAAgMQgGAGgIAEQgJAEgJAAQgNAAgKgEgAgGABQgGACgEAEQgFAEgDAHQgCAGAAAHQAAAIACAHQACAFAEAFQAEAEAGACQAFACAFAAQAIAAAHgDQAHgDAFgFIAAgwIgLgFQgGgBgGAAQgGAAgGACg");
	this.shape_2.setTransform(190.9,49.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#330000").s().p("AgMBaQgGgCgDgEQgEgEgBgHQgCgHAAgIIAAiVIAdAAIAACIQAAAKACAFQADAEAFAAQAGAAAGgEIAGAXQgFAEgHACQgJADgJAAQgGAAgFgCg");
	this.shape_3.setTransform(180.9,49.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#330000").s().p("AgcA5QgIgDgFgGQgGgGgDgJQgDgKAAgLIAAhHIAeAAIAABAQAAANAFAGQACAEAFACQAEACAGAAQAGAAAHgEQAHgEAFgGIAAhNIAeAAIAAB0IgeAAIAAgPQgGAIgIAFQgKAFgMAAQgJAAgHgDg");
	this.shape_4.setTransform(169.2,53.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#330000").s().p("AgkBYQgNgDgIgGIAAirIAeAAIAABJQAGgFAHgDQAJgDAIAAQANABAKAEQAKAEAIAJQAHAHAEAKQADALAAANQAAAOgEAMQgFAMgJAIQgIAIgNAFQgMAFgOAAQgOAAgPgFgAgRABQgGADgEAFIAAAyQAJAFAMABQAGgBAGgCQAGgCAFgEQAEgEADgHQACgGAAgIQAAgIgCgHQgCgFgFgFQgEgEgFgCQgGgBgFgBQgIABgGACg");
	this.shape_5.setTransform(155.7,49.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#330000").s().p("AgOA6IAAh0IAdAAIAAB0g");
	this.shape_6.setTransform(139.1,53);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#330000").s().p("AgaBxQgLgCgIgFQgIgEgFgIQgEgHAAgKQAAgGACgHQADgFAFgFQAFgFAHgDQAHgDAIgCQgCgEAAgEQAAgFADgDQgGgDgGgEQgFgEgDgFQgEgFgCgFQgCgGAAgGQAAgJAEgIQADgIAHgGQAGgGAJgEQAKgDALgBQAIABAHACQAIACAGAEIAjgIIABAYIgTAEQADAIAAAIQAAAJgEAGQgDAIgHAGQgGAGgJADQgKAEgKAAIgCAAIAAAEQAAADABADIABAAQAMAAALACQALADAJAFQAIAEAFAHQAEAHAAAKQAAAKgEAHQgFAIgIAEQgJAFgLACQgLACgMAAQgNAAgLgCgAgaBDQgJAEAAAGQAAAHAJAEQAJAEAPAAQAPAAAIgEQAJgEAAgHQAAgGgIgEQgJgEgPAAQgPAAgJAEgAgSgcQgGAHAAAIQAAAIAGAFQAGAEAKAAQAJABAGgFQAGgFAAgIQAAgJgGgGQgGgFgJAAQgKAAgGAFgAgRhOQgGgCgGgFQgIgGgFgJIANgOQAOAOAOAAQAJAAAIgEQAHgFAFgFIAKAOQgHAKgIAGQgFAEgGACQgHACgHAAQgIAAgHgCg");
	this.shape_7.setTransform(129,52.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#330000").s().p("AgaA6QgGgCgFgFQgFgEgDgHQgDgHAAgIQAAgJAEgIQADgHAGgEQAGgEAHgDQAIgCAJAAQAHAAAHACQAHACAEAEIAAgNQgBgGgDgEQgCgEgEgCQgFgCgFAAQgJAAgJADIgNAFIgIgVQAJgFAKgDQAMgEAKAAQANAAAJAEQAJADAFAGQAGAGACAJQADAJAAAMIAABGIgaAAIAAgNQgFAHgJAEQgJAEgLAAQgIAAgHgDgAgMALQgGAEAAAHQAAAGAFAEQAFAEAHAAQAHAAAGgEQAFgCADgFIAAgMQgHgGgNAAQgHAAgFAEg");
	this.shape_8.setTransform(116.3,52.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#330000").s().p("AAaA7IAAg+QAAgHgCgFQgBgFgEgEQgDgDgFgCQgFgBgGgBQgHAAgGAEQgGACgGAFIAABPIgeAAIAAh0IAeAAIAAANQAGgHAIgDQAKgFAJAAQALABAIACQAJADAHAGQAGAGADAJQAEALAAANIAABDg");
	this.shape_9.setTransform(103.6,52.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#330000").s().p("AgoBSIgLgHIAJgWQAHAEAFAAQAGAAAEgEQAEgFAFgKIACgGIg2h0IAjAAIAcBAIAFARIAEgRIAVhAIAiAAIguB0IgMAaQgGALgDAFQgGAGgFADQgGABgHAAQgHABgGgDg");
	this.shape_10.setTransform(89.9,55.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#330000").s().p("AgaA6QgGgCgFgFQgFgEgDgHQgDgHAAgIQAAgJAEgIQADgHAGgEQAGgEAHgDQAIgCAJAAQAHAAAHACQAHACAEAEIAAgNQgBgGgDgEQgCgEgEgCQgFgCgFAAQgJAAgJADIgNAFIgIgVQAJgFAKgDQAMgEAKAAQANAAAJAEQAJADAFAGQAGAGACAJQADAJAAAMIAABGIgaAAIAAgNQgFAHgJAEQgJAEgLAAQgIAAgHgDgAgMALQgGAEAAAHQAAAGAFAEQAFAEAHAAQAHAAAGgEQAFgCADgFIAAgMQgHgGgNAAQgHAAgFAEg");
	this.shape_11.setTransform(77.1,52.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#330000").s().p("AATBbIgtg9IApg3IAlAAIgsA1IAyA/gAg5BbIAAi1IAeAAIAAC1g");
	this.shape_12.setTransform(65.4,49.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#330000").s().p("AglA7IAAh0IAfAAIAAAMQAEgGAFgDQAGgFALAAQALABAHAEIgLAcQgHgEgIgBQgHABgFADQgEADgCAGIAABNg");
	this.shape_13.setTransform(48.7,52.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#330000").s().p("AgOBYIAAh0IAdAAIAAB0gAgMg4QgFgFAAgJQAAgIAFgFQAGgEAHAAQAHAAAFAEQAFAFAAAIQAAAJgFAFQgFAFgHAAQgHAAgGgFg");
	this.shape_14.setTransform(39.7,50);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#330000").s().p("AgMBaQgGgCgDgEQgEgEgBgHQgCgHAAgIIAAiVIAdAAIAACIQAAAKACAFQADAEAFAAQAGAAAGgEIAGAXQgFAEgHACQgJADgJAAQgGAAgFgCg");
	this.shape_15.setTransform(32.9,49.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#330000").s().p("AgUA5QgMgFgIgHQgJgJgEgLQgFgMABgNQAAgLADgMQAFgLAIgJQAIgIAMgEQALgGANAAQALABALADQAKAFAHAHQAIAHAEAKQAFAKAAAMQAAAJgCAGIhUAAQABAGAEAGQACAFAFADQAEAEAHACQAEACAIAAQAJgBAJgDQAJgCAGgFIAIAVQgJAHgMADQgLAFgNAAQgMAAgMgFgAgJgiQgFACgEAEQgHAGgDAMIA4AAQABgLgHgHQgDgDgFgDQgGgBgGAAQgGAAgFABg");
	this.shape_16.setTransform(21.8,53);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#330000").s().p("AgaBVQgLgCgIgFQgIgFgFgHQgEgIAAgJQAAgHACgHQADgFAFgFQAFgEAHgEQAHgCAIgCQgCgEAAgEQAAgFADgCQgGgDgGgEQgFgFgDgFQgEgEgCgGQgCgHAAgGQAAgJAEgHQADgJAHgGQAGgGAJgDQAKgEALAAQAIAAAHADQAIABAGAEIAjgHIABAXIgTAFQADAHAAAIQAAAJgEAHQgDAIgHAHQgGAFgJAEQgKACgKAAIgCAAIAAAFQAAADABACIABAAQAMAAALADQALACAJAFQAIAFAFAHQAEAHAAAKQAAAJgEAIQgFAHgIAFQgJAFgLACQgLACgMAAQgNAAgLgCgAgaAmQgJAFAAAGQAAAGAJAFQAJADAPAAQAPAAAIgDQAJgFAAgGQAAgGgIgFQgJgEgPABQgPgBgJAEgAgSg4QgGAGAAAIQAAAJAGAFQAGAFAKAAQAJAAAGgFQAGgFAAgJQAAgIgGgGQgGgFgJgBQgKABgGAFg");
	this.shape_17.setTransform(8.5,55.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#330000").s().p("AgOA7IAAh0IAdAAIAAB0g");
	this.shape_18.setTransform(233.6,22.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#330000").s().p("AgMBaQgGgCgDgEQgEgEgBgHQgCgHAAgIIAAiVIAdAAIAACIQAAAKACAFQADAEAFAAQAGAAAGgEIAGAXQgFAEgHACQgJADgJAAQgGAAgFgCg");
	this.shape_19.setTransform(226.8,19.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#330000").s().p("AA7A8IAAhEQAAgLgFgGQgFgGgKABQgIAAgHADQgGAEgDAGIAAAJIAABEIgdAAIAAhGQAAgJgFgGQgFgGgJABQgIAAgHADQgGADgEAGIAABOIgeAAIAAh0IAeAAIAAAMQAHgGAJgEQAKgEALgBQANAAAIAGQAJAFADAIQAHgJAJgEQAKgFAOgBQAIABAGACQAHACAFAEQAFAGADAIQADAJAAALIAABMg");
	this.shape_20.setTransform(212,22.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#330000").s().p("AgaA6QgGgCgFgFQgFgEgDgHQgDgHAAgIQAAgJAEgIQADgHAGgEQAGgEAHgDQAIgCAJAAQAHAAAHACQAHACAEAEIAAgNQgBgGgDgEQgCgEgEgCQgFgCgFAAQgJAAgJADIgNAFIgIgVQAJgFAKgDQAMgEAKAAQANAAAJAEQAJADAFAGQAGAGACAJQADAJAAAMIAABGIgaAAIAAgNQgFAHgJAEQgJAEgLAAQgIAAgHgDgAgMALQgGAEAAAHQAAAGAFAEQAFAEAHAAQAHAAAGgEQAFgCADgFIAAgMQgHgGgNAAQgHAAgFAEg");
	this.shape_21.setTransform(195.2,22.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#330000").s().p("AgIA7Ig2h1IAkAAIAVAyQAFAMADAOQADgPAGgLIAUgyIAfAAIgyB1g");
	this.shape_22.setTransform(183.2,22.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#330000").s().p("AgUA5QgMgEgIgJQgJgHgEgMQgFgLABgOQAAgLADgMQAFgLAIgJQAIgIAMgEQALgFANgBQALAAALAFQAKADAHAIQAIAHAEAKQAFAKAAAMQgBAJgBAGIhUAAQABAHAEAFQACAFAFADQAEAEAHACQAFABAGAAQALABAIgEQAJgDAGgFIAIAWQgIAHgNAEQgLADgNAAQgMAAgMgEgAgJgiQgFACgEAEQgIAGgCAMIA4AAQABgLgHgHQgEgEgEgCQgGgCgGAAQgFAAgGACg");
	this.shape_23.setTransform(170.4,22.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#330000").s().p("AgaBYQgKgEgHgIQgIgIgEgLQgDgLAAgNQAAgOAEgLQAFgLAJgIQAIgJAMgFQAMgEANAAQAIAAAFABQAGACAFADIAAhEIAeAAIAAC1IgeAAIAAgMQgGAHgIADQgJAEgJAAQgNAAgKgEgAgGAAQgGACgEAFQgFAFgDAFQgCAHAAAIQAAAHACAGQACAHAEAEQAEAEAGACQAFACAFAAQAIAAAHgDQAHgDAFgFIAAgwIgLgFQgGgBgGAAQgGAAgGABg");
	this.shape_24.setTransform(156,19.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#330000").s().p("AgOBYIAAh0IAdAAIAAB0gAgLg4QgGgFAAgJQAAgIAGgFQAFgEAGAAQAIAAAEAEQAGAFAAAIQAAAJgGAFQgEAFgIAAQgGAAgFgFg");
	this.shape_25.setTransform(140,19.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#330000").s().p("AgRA5QgLgEgJgJQgIgHgEgMQgFgLAAgOQAAgLAFgMQAEgLAIgJQAIgIALgEQALgFANgBQAOAAAMAFQAMAEAIAHIgOAYQgGgGgHgCQgHgDgJgBQgGAAgFADQgFACgFAEQgFAFgCAGQgDAHAAAGQAAAHADAHQACAGAFAFQAFAEAGACQAFACAGABQAKAAAHgFQAIgDAGgHIAOAWIgJAJIgLAGQgMAFgPAAQgNAAgMgEg");
	this.shape_26.setTransform(130.2,22.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#330000").s().p("AAaA8IAAg/QAAgHgCgFQgBgFgEgEQgDgDgFgCQgFgBgGAAQgHAAgGADQgGACgGAGIAABPIgeAAIAAh0IAeAAIAAALQAGgGAIgDQAKgEAJgBQALAAAIADQAJADAHAGQAGAGADAJQAEALAAANIAABEg");
	this.shape_27.setTransform(116.8,22.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#330000").s().p("AgUA5QgMgEgJgJQgHgHgFgMQgFgLAAgOQABgLAEgMQAEgLAIgJQAIgIALgEQAMgFANgBQAMAAAKAFQAJADAIAIQAIAHAEAKQAEAKAAAMQAAAJgBAGIhUAAQABAHADAFQADAFAFADQAFAEAFACQAFABAIAAQAKABAJgEQAIgDAFgFIAJAWQgJAHgMAEQgLADgNAAQgNAAgLgEgAgJgiQgFACgEAEQgIAGgCAMIA4AAQABgLgHgHQgDgEgGgCQgFgCgGAAQgFAAgGACg");
	this.shape_28.setTransform(103,22.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#330000").s().p("AgkA8IAAh0IAdAAIAAALQAFgGAEgDQAIgEAJgBQANAAAFAFIgKAcQgHgFgIABQgIAAgEADQgDADgEAGIAABOg");
	this.shape_29.setTransform(92.4,22.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#330000").s().p("AgaBxQgLgCgIgEQgIgGgFgHQgEgHAAgKQAAgGACgHQADgFAFgFQAFgEAHgEQAHgDAIgCQgCgEAAgEQAAgFADgDQgGgCgGgFQgFgEgDgFQgEgFgCgFQgCgGAAgHQAAgIAEgIQADgIAHgGQAGgHAJgDQAKgEALAAQAIAAAHADQAIACAGAEIAjgIIABAYIgTAFQADAHAAAHQAAAKgEAGQgDAIgHAGQgGAGgJAEQgKACgKAAIgCAAIAAAFQAAADABADIABAAQAMAAALACQALADAJAEQAIAFAFAIQAEAHAAAJQAAAKgEAHQgFAHgIAGQgJAEgLACQgLADgMAAQgNAAgLgDgAgaBDQgJAEAAAGQAAAHAJAEQAJADAPAAQAPAAAIgDQAJgEAAgHQAAgGgIgEQgJgEgPAAQgPAAgJAEgAgSgbQgGAGAAAHQAAAJAGAFQAGAFAKgBQAJAAAGgEQAGgFAAgJQAAgIgGgFQgGgGgJAAQgKAAgGAGgAgRhPQgGgCgGgEQgIgGgFgIIANgPQAOAOAOAAQAJAAAIgFQAHgEAFgFIAKAPQgHAJgIAGQgFAEgGACQgHACgHAAQgIAAgHgDg");
	this.shape_30.setTransform(80.5,22.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#330000").s().p("AgaBTQgLgEgJgJQgIgIgEgLQgEgMgBgNQABgNAEgLQAEgKAIgJQAJgIALgEQANgFANAAQAOAAAMAFQAMAEAIAIQAJAJAFAKQADALAAANQAAANgDAMQgFALgJAIQgIAJgMAEQgMAFgOAAQgNAAgNgFgAgLgEQgGADgEADQgFAEgCAHQgCAGAAAHQAAAHACAHQACAGAFAEQADAFAHACQAFADAGAAQAHAAAGgDQAGgCAEgEQAFgFABgGQADgGAAgIQAAgHgDgGQgBgGgFgFQgEgDgGgDQgGgCgHAAQgGAAgFACgAARg5QgFgFgBgIQABgIAFgEQAEgFAHAAQAGAAAFAFQAFAEAAAIQAAAIgFAFQgFAEgGAAQgHAAgEgEgAgig5QgFgFAAgIQAAgIAFgEQAEgFAIAAQAGAAAFAFQAEAFAAAHQAAAIgEAFQgFAEgGAAQgIAAgEgEg");
	this.shape_31.setTransform(66.8,20);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#330000").s().p("AATBbIgtg9IApg3IAlAAIgsA0IAyBAgAg5BbIAAi1IAeAAIAAC1g");
	this.shape_32.setTransform(48,19.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#330000").s().p("AglA8IAAh0IAfAAIAAALQAEgGAFgDQAGgEALgBQALAAAHAFIgLAcQgIgFgHABQgHAAgFADQgDADgDAGIAABOg");
	this.shape_33.setTransform(36.8,22.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#330000").s().p("AgcBVQgIgDgFgGQgGgGgDgJQgDgKAAgMIAAhGIAeAAIAABAQAAANAFAGQACAEAFACQAEACAGAAQAGAAAHgEQAHgEAFgGIAAhNIAeAAIAAB0IgeAAIAAgPQgGAIgIAEQgKAGgMAAQgJAAgHgDgAAPg5QgFgFAAgIQAAgIAFgEQAFgFAHAAQAGAAAFAFQAEAEAAAIQAAAIgEAFQgFAEgGAAQgHAAgFgEgAgjg5QgFgFAAgIQAAgIAFgEQAEgFAHAAQAHAAAEAFQAFAFAAAHQAAAIgFAFQgEAEgHAAQgHAAgEgEg");
	this.shape_34.setTransform(24.3,20);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#330000").s().p("AgPBbIAAiXIg7AAIAAgeICVAAIAAAeIg7AAIAACXg");
	this.shape_35.setTransform(9.8,19.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(0,0,248,72.6), null);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#330000").s().p("ABvDBIjTkKIAAEKIhAAAIAAmBIA2AAIDUELIAAkLIA/AAIAAGBg");
	this.shape.setTransform(226.9,39.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#330000").s().p("Ag8DtIgcgNQgNgJgLgKQgLgKgIgOQgJgNgGgQQgGgQgDgTQgDgSAAgVIAAjeIBEAAIAADPQAAAcAGAWQAGAWALAQQAMAQASAJQATAIAXAAQAWAAARgHQAQgIALgPQAKgOAFgXQAGgVAAgcIAAjUIBDAAIAADhQAAAWgDAUQgEASgGAQQgGAQgIANQgJAMgKALQgLAKgMAHIgaANQgbAIggABQgtgEgUgHgAAgi6QgNgJAAgSQAAgPANgJQAMgJASAAQAQAAALAJQAMAJAAAPQAAASgMAJQgLAKgQAAQgSAAgMgKgAhfi6QgMgJAAgSQAAgPAMgJQAMgJASAAQAQAAALAJQAMAJAAAPQAAASgMAJQgLAKgQAAQgSAAgMgKg");
	this.shape_1.setTransform(184.4,34.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#330000").s().p("AgQDEQgVgEgSgHQgTgHgQgKQgQgLgNgNQgNgNgKgPQgKgQgGgSQgHgTgDgUQgEgVAAgWQAAgUAEgTQADgUAGgSQAHgSAKgQQAKgPAMgOQANgOAPgKQAPgLASgHQASgIATgEQAVgEAVAAQAbAAArAKQAdAJAZAUIgdA2QgOgOgYgHQgYgJgZAAQgcAAgXAJQgYAKgRARQgRASgKAZQgJAZAAAfQAAAfAJAZQAJAZASASQARARAYAKQAXAJAdAAQAWABAYgJQAXgHALgLIAAg9IhdAAIAAg+ICdAAIAACfQgNAMgRALQgRAKgUAHQgTAGgVAFQgUADgSAAQgXAAgVgDg");
	this.shape_2.setTransform(143.5,39.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#330000").s().p("ABGDCIhqiRIgvAAIAACRIhEAAIAAmCIB1gBQAbABAnAJQAaAIARARQAPAPAIAXQAIAUAAAaQAAAYgIAUQgGASgMAOQgKAMgOAJQgMAIgNAEIB5CfgAhTiAIAABzIAsAAQAPgBANgDQANgEAJgHQALgIAFgLQAHgLAAgPQAAgMgEgJQgEgLgHgHQgJgJgMgDQgPgFgUAAg");
	this.shape_3.setTransform(96.4,39.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#330000").s().p("AhyDBIAAmBIDfAAIAABAIiaAAIAABfICJAAIAAA/IiJAAIAABjICgAAIAABAg");
	this.shape_4.setTransform(60.9,39.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#330000").s().p("ABZDBIAAilIiwAAIAAClIhEAAIAAmBIBEAAIAACdICwAAIAAidIBDAAIAAGBg");
	this.shape_5.setTransform(23.2,39.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(0,0,251.3,85.9), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFE402").s().p("Ag0FCIAAhHQgogIgegTQgQgKgLgMQgMgNgHgPIBChOQAVAaAfAOQAcANAbAAQAWAAAKgLQAJgIAAgUQAAgNgJgMQgIgJgQgLIhIgkIgmgYQgUgNgOgRQgQgSgIgVQgJgZAAgdQAAgXAIgWQAIgVAOgTQAPgRAUgOQAVgOAagIIAAhBIBrAAIAAA+QAfAGAZANQAaANARATIg+BWQgUgSgNgHQgSgJgZAAQgdAAgPALQgNAIAAATQAAAPAJAMQAIAKAQALIBHAkIAnAVQAUANANAQQAQARAIAXQAKAYAAAdQAAAbgJAWQgHAYgPASQgPASgVAOQgVANgaAGIAABHg");
	this.shape.setTransform(224.4,51.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFE402").s().p("AgnD+QgTgEgRgKQgQgJgOgMQgNgNgMgSQgOgWgSg7QgIgggEhLQAAgmALhDQAHggAZgyQALgRAOgNQAOgNAQgJQARgJASgFQAUgEAVAAQAWAAATAEQATAFARAJQAQAJAOANQAOANAKARQAaAyAHAgQALBDAAAmQgEBLgHAgQgSA7gOAWQgLASgNANQgOAMgQAJQgQAKgUAEQgTAEgVAAQgWAAgTgEgAgZiUQgMAJgHASQgHATgEAeIgEBIQABArAEAfQAEAeAIATQAJASAKAIQALAJAOAAQAPAAALgJQAKgIAIgSQAHgSADgeIADhLIgDhKQgEgegHgSQgHgSgLgIQgLgIgQAAQgOAAgLAIg");
	this.shape_1.setTransform(182.9,50.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFE402").s().p("AgnD+QgTgEgRgKQgQgJgOgMQgOgNgLgSQgPgWgSg7QgHgggEhLQAAgmALhDQAHggAZgyQAMgRANgNQAOgNAQgJQARgJASgFQAUgEAVAAQAWAAATAEQATAFARAJQAQAJAOANQANANALARQAaAyAHAgQALBDAAAmQgEBLgHAgQgRA7gPAWQgLASgNANQgOAMgQAJQgQAKgUAEQgTAEgVAAQgWAAgTgEgAgZiUQgMAJgHASQgHATgEAeIgEBIQABArAEAfQAEAeAJATQAHASAMAIQAKAJAOAAQAPAAALgJQAKgIAIgSQAHgSADgeIADhLIgDhKQgEgegHgSQgHgSgLgIQgLgIgQAAQgPAAgKAIg");
	this.shape_2.setTransform(143.7,50.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFE402").s().p("AgnD+QgTgEgRgKQgQgJgOgMQgNgNgMgSQgPgWgRg7QgIgggEhLQAAgmALhDQAHggAZgyQAMgRANgNQAOgNAQgJQAQgJATgFQAUgEAVAAQAWAAATAEQATAFARAJQAQAJAOANQANANAMARQAZAyAHAgQALBDAAAmQgEBLgHAgQgSA7gOAWQgLASgNANQgOAMgQAJQgRAKgSAEQgUAEgWAAQgUAAgUgEgAgaiUQgLAJgHASQgHATgEAeIgEBIQAAArAFAfQAEAeAIATQAJASAKAIQALAJANAAQAQAAAKgJQAMgIAGgSQAIgSADgeIADhLIgEhKQgDgegHgSQgHgSgMgIQgKgIgQAAQgPAAgLAIg");
	this.shape_3.setTransform(104.5,50.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFE402").s().p("AgnD+QgTgEgRgKQgQgJgOgMQgOgNgLgSQgOgWgTg7QgHgggEhLQAAgmALhDQAHggAagyQALgRANgNQAOgNAQgJQARgJATgFQATgEAVAAQAWAAATAEQATAFARAJQARAJANANQANANAMARQAZAyAHAgQALBDAAAmQgDBLgIAgQgRA7gPAWQgLASgNANQgNAMgRAJQgQAKgUAEQgTAEgVAAQgVAAgUgEgAgaiUQgLAJgHASQgIATgDAeIgDBIQgBArAFAfQAEAeAJATQAHASAMAIQAKAJAOAAQAPAAAKgJQAMgIAGgSQAIgSADgeIADhLIgDhKQgEgegHgSQgHgSgMgIQgKgIgQAAQgOAAgMAIg");
	this.shape_4.setTransform(50.8,50.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFE402").s().p("AAAD9IAAlfIgyAjIg5hZICJhkIBOAAIAAH5g");
	this.shape_5.setTransform(13.9,50.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,248.5,111.3), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#44B759").s().p("AglVVMAAAgqpIBLAAMAAAAqpg");
	this.shape.setTransform(3.8,136.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,7.6,273), null);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol4();
	this.instance.parent = this;
	this.instance.setTransform(124.2,55.6,1,1,0,0,0,124.2,55.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.94,scaleY:0.94},14,cjs.Ease.quadInOut).to({scaleX:1,scaleY:1},15,cjs.Ease.quadInOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,248.5,111.3);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol11();
	this.instance.parent = this;
	this.instance.setTransform(124.3,109.3,1,1,0,0,0,124.2,55.6);

	this.instance_1 = new lib.Symbol6();
	this.instance_1.parent = this;
	this.instance_1.setTransform(129.5,174.3,1,1,0,0,0,124,36.3);

	this.instance_2 = new lib.Symbol5();
	this.instance_2.parent = this;
	this.instance_2.setTransform(125.7,42.9,1,1,0,0,0,125.7,42.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(0,0,253.5,210.6), null);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(569.3,152.9,38.256,1.12,0,0,0,5.7,136.5);

	this.instance_1 = new lib.Symbol1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(4.3,152.9,1,1.12,0,0,0,3.8,136.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#44B759").s().p("EgyEAX2IAAhNMBkJAAAIAABNgEgyDgWpIAAhLMBkIAAAIAABLg");
	this.shape.setTransform(320.5,153.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(0,0,642,305.8), null);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol12();
	this.instance.parent = this;
	this.instance.setTransform(202.8,176,1,1,0,0,0,197.8,176);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:182.8},59,cjs.Ease.quadInOut).to({x:202.8},60,cjs.Ease.quadInOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(5,0,395.8,352);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Symbol13();
	this.instance.parent = this;
	this.instance.setTransform(121,36,1,1,0,0,0,121,36);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,242,72), null);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol2();
	this.instance.parent = this;
	this.instance.setTransform(121,36,1,1,0,0,0,121,36);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.08,scaleY:1.08,x:121.1},19,cjs.Ease.quadInOut).to({scaleX:1,scaleY:1,x:121},20,cjs.Ease.quadInOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,242,72);


// stage content:
(lib.turloncar640305 = function(mode,startPosition,loop) {
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

	// Layer 4
	this.instance = new lib.Symbol10();
	this.instance.parent = this;
	this.instance.setTransform(497,256,1,1,0,0,0,121,36);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 3
	this.instance_1 = new lib.Symbol9();
	this.instance_1.parent = this;
	this.instance_1.setTransform(500.3,106.4,1,1,0,0,0,126.8,105.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Layer 2
	this.instance_2 = new lib.Symbol8();
	this.instance_2.parent = this;
	this.instance_2.setTransform(320.9,152.9,1,1,0,0,0,320.9,152.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Layer 1
	this.instance_3 = new lib.Symbol7();
	this.instance_3.parent = this;
	this.instance_3.setTransform(187.8,134,1,1,0,0,0,197.8,176);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(315,110.5,647,352);
// library properties:
lib.properties = {
	id: '43BE7D34BD23498B98B69EF179A8F0F6',
	width: 640,
	height: 305,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/car.jpg", id:"car"}
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
an.compositions['43BE7D34BD23498B98B69EF179A8F0F6'] = {
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