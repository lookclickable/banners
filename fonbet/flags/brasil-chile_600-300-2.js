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
p.nominalBounds = new cjs.Rectangle(0,0,800,347);


(lib.brasil = function() {
	this.initialize(img.brasil);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,313);


(lib.CArd_left = function() {
	this.initialize(img.CArd_left);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,362,410);


(lib.CArd_right = function() {
	this.initialize(img.CArd_right);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,488,388);


(lib.chile = function() {
	this.initialize(img.chile);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,281);


(lib.Logo1 = function() {
	this.initialize(img.Logo1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,93,157);


(lib.Logo2 = function() {
	this.initialize(img.Logo2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,151,150);


(lib.logored = function() {
	this.initialize(img.logored);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,268,82);


(lib.shad = function() {
	this.initialize(img.shad);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,221,78);// helper functions:

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


(lib.Symbol46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.chile();
	this.instance.parent = this;
	this.instance.setTransform(99.6,0,0.633,1.14,0,18.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol46, new cjs.Rectangle(0,0,416.1,304.6), null);


(lib.Symbol45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.brasil();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.695,1.044,0,-16.8,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol45, new cjs.Rectangle(0,0,442.1,313), null);


(lib.Symbol42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.Symbol42, null, null);


(lib.Symbol41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag2A+IgFgIIgEgKQgBgHABgQIAJgtQACgNAFgJQAGgKAJgHQAJgHALgDQAMgEANAAQAKAAAPAEIAJAFQAEADADAEQAHAIACAKQACALgCAMIgIAtQgCANgGAKQgFAKgJAGQgJAHgLADQgMAEgNAAQgcAAgOgQgAgGgkQgGAFgBAHIgJAxQgBAIAEAEQAEAEAJAAQAHAAAGgEQAFgEACgIIAIgxQACgHgEgFQgEgEgJAAQgIAAgFAEg");
	this.shape.setTransform(74.1,10.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgcBMQgKgDgHgEQgHgFgFgHQgEgHgCgJQgBgIAJgDIAWgIQAFgBACABQACABABAFQABAHAFADQAFAEAIAAQAHAAAFgDQAEgDACgHQABgGgDgDQgDgDgHAAIgMAAQgFAAgCgCQgBgCABgFIADgQQABgFACgCQACgCAFAAIAJAAQAHAAAEgDQAEgDABgGQABgGgDgDQgDgCgHAAQgJAAgEACQgEADgFAHQgCAFgDABQgCABgFgBIgTgHQgFgCAAgDQgBgCACgFQAFgJAHgHQAGgGAIgFQAIgEALgCQAJgDANAAQAMAAAJAEQAJADAGAGQAGAGACAIQACAIgCAKQgBAKgGAHQgFAHgJAGQAFACADADQADAEACAEQACAFAAAFQABAGgCAGQgCALgFAIQgFAJgIAGQgIAFgLADQgLADgNAAQgMAAgJgCg");
	this.shape_1.setTransform(60.1,10.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgMA4QgKAAgCgEQgDgDABgJIACgJQACgKADgEQAFgDAJAAIAHAAQAKAAACADQADAFgCAJIgBAJQgBAJgEADQgFAEgIAAgAgBgNQgKAAgDgDQgCgEACgKIABgIQABgJAFgEQADgEAJAAIAIAAQAJAAADAEQAEADgCAKIgCAIQgCAKgDAEQgFADgJAAg");
	this.shape_2.setTransform(50.5,12.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag6BMQgFAAgBgCQgCgCABgFIADgSQACgLAFgHQAEgIAIgFIAOgIIAQgHIAMgEIAEgCIAKgFIAHgHQACgEACgFQABgHgEgEQgDgDgGAAQgHAAgFADQgDADgFAIQgDAFgDABQgCABgFgCIgUgIQgFgCgBgCQAAgDACgEQAFgJAHgHQAHgHAIgFQAIgEAJgDQAJgCAKAAQANAAAKADQAJAEAHAHQAGAHACAJQADAJgCALQgCALgEAJQgFAHgGAGQgHAGgKAFIgXAKIgOAEIgGABQgGADAAADIAAABIA7AAQAFAAACACQABACAAAFIgEARQgBAFgCACQgCACgFAAg");
	this.shape_3.setTransform(41.1,10.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag2A+IgFgIIgEgKQgBgHABgQIAJgtQACgNAFgJQAGgKAJgHQAJgHALgDQAMgEANAAQAKAAAPAEIAJAFQAEADADAEQAHAIACAKQACALgCAMIgIAtQgCANgGAKQgFAKgJAGQgJAHgLADQgMAEgNAAQgcAAgOgQgAgGgkQgGAFgBAHIgJAxQgBAIAEAEQAEAEAJAAQAHAAAGgEQAFgEACgIIAIgxQACgHgEgFQgEgEgJAAQgIAAgFAEg");
	this.shape_4.setTransform(28.5,10.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgdA4QgKgBgGgDQgFgCgCgDQgCgEABgFIANhJQACgMAMgEQAIgDALgBQAJgCALAAQALAAAIADQAIACAGAFQAFAFACAGQACAGgBAIQgCAHgEAFQgFAFgHAEQAIACAEAGQAEAHgBAIQgCAJgEAHQgEAGgHAFQgHAEgKADQgKACgMAAQgOAAgKgCgAgNAcIABABIAKABQAFAAAEgDQAEgCABgFQAAgEgDgCQgDgDgGAAIgKAAgAgCgbIgBABIgDAOIAKAAQAFAAADgCQACgCABgEQABgEgCgCQgDgCgFAAQgFAAgDABg");
	this.shape_5.setTransform(7.6,12.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol41, new cjs.Rectangle(0,0,82.3,25), null);


(lib.Symbol40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AALA2QgEAAgCgBQgBgCABgFIAEgYIgJAAIgOAYQgDAFgEACQgDABgHAAIgUAAQgHAAgBgCQgBgDAEgFIAWgeQgHgFgCgIQgCgIABgKQACgJAEgHQAEgHAGgEQAGgFAHgDQAIgBAJAAIAzAAQAFgBABACQACACgBAFIgQBbQgBAFgCACQgCABgFAAgAgEgQQgBAEACADQABABADAAIANAAIADgQIgNAAQgHABgBAHg");
	this.shape.setTransform(104.7,12.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag0BPQgFAAgBgBQgCgCABgFIAXiCQABgFACgCQACgDAGgCQAKgEALgBQAKgCANAAQAMAAAIADQAJADAFAHQAFAGABAJQACAIgCALIgEAXQgCAKgFAJQgEAIgHAGQgHAGgKADQgKACgLAAIgNgBIgGAkQgBAFgCACQgCABgEAAgAAAgrIAAABIgHAsIAIABQAGAAAEgDQAEgCABgGIAEgaQABgFgCgDQgDgCgGAAIgKABg");
	this.shape_1.setTransform(93,14.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgiBNQgJgEgGgGQgGgGgCgJQgCgJACgLIAHgnQACgNAHgTIAHgMIAHgJIAKgHIALgEQAIgDAVgBIAHAAQAJAAAGgDQAFgCACABQADACAAAFIADAPQABAEgCADQgBACgFACQgEACgGABIgPABIgJAAIgKABQgFABgCACQgEACgCAEQgCADAAAFIgBACQAFgDAEgCIALgBQAKAAAIADQAIADAFAGQAFAGACAJQACAIgCALIgDASQgCALgFAIQgFAIgHAGQgHAFgKADQgKADgMAAQgNAAgJgDgAgPAQIgDATQgBAFACADQADADAHAAQAGAAADgDQAEgDABgFIADgTQABgGgDgDQgCgDgGAAQgNAAgCAMg");
	this.shape_2.setTransform(82.8,10.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AALA2QgEAAgCgBQgBgCABgFIAEgYIgJAAIgOAYQgDAFgEACQgDABgHAAIgUAAQgHAAgBgCQgBgDAEgFIAWgeQgHgFgCgIQgCgIABgKQACgJAEgHQAEgHAGgEQAGgFAHgDQAIgBAJAAIAzAAQAFgBABACQACACgBAFIgQBbQgBAFgCACQgCABgFAAgAgEgQQgBAEACADQABABADAAIANAAIADgQIgNAAQgHABgBAHg");
	this.shape_3.setTransform(70.1,12.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAoA4QgFAAgBgBQgCgCABgFIAKg5QABgFgCgDQgCgDgFAAIgJABIgCAKIgKA5QgBAFgCACQgCABgEAAIgWAAQgFAAgBgBQgCgCABgFIAKg5QABgGgCgCQgCgDgFAAIgIABIgBABIgMBCQAAAFgDACQgCABgEAAIgXAAQgFAAgBgBQgCgCABgFIAPhTQABgFACgDQACgCAGgCQAKgEAMgCQAKgCAMAAQAIAAAFABQAGACAFADIAQgFIARgBQALAAAIADQAIADAFAGQAFAGABAJQABAIgCALIgKA5QgBAFgCACQgCABgEAAg");
	this.shape_4.setTransform(55.9,12.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAQA2QgHAAgCgBQgDgCgBgFIgFgZQgCgGgGAAIgEAAIgGAfQgBAFgCACQgCABgEAAIgXAAQgFAAgBgBQgCgCABgFIAQhbQABgFACgCQACgCAFABIAXAAQAEgBACACQABACAAAFIgGAdIADAAIACAAIAWgeQADgEADgCQADgCAHABIATAAQAGgBABADQABADgEAFIgfApQAEACACAGIAMAmQABAGgCACQgCACgGAAg");
	this.shape_5.setTransform(42.1,12.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgfA3QgJgEgGgGQgFgGgCgJQgCgJACgLIAEgWQACgLAFgIQAFgJAHgFQAIgGAKgDQAKgDAMAAQAMAAAJAEQAKADAGAGQAFAGACAJQACAJgCALIgEAWQgCALgFAIQgEAJgIAFQgHAGgLADQgKADgMAAQgMAAgKgDgAgKgMIgEAZQgBAFACADQADADAGAAQAGAAAEgDQAEgDABgFIAEgZQABgFgCgDQgDgDgHAAQgMAAgCALg");
	this.shape_6.setTransform(30.6,12.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgOBLQgFgBgCgBQgCgDACgEIAPhXIgQAIQgFADgDgBQgDgBgBgEIgHgSQgCgFACgCQABgDAFgDIAsgXQAHgEAGAAIANAAQAFABACACQABACgBAEIgXCDQgBAEgCADQgCABgFABg");
	this.shape_7.setTransform(16.8,10.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgOBLQgFgBgCgBQgCgDACgEIAPhXIgQAIQgFADgDgBQgDgBgBgEIgHgSQgCgFACgCQABgDAFgDIAsgXQAHgEAGAAIANAAQAFABACACQABACgBAEIgXCDQgBAEgCADQgCABgFABg");
	this.shape_8.setTransform(7.5,10.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol40, new cjs.Rectangle(0,0,112.9,25), null);


(lib.Symbol39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgjA1QgIgDgFgHQgFgGgBgIQgCgJACgLIAKg4QABgFACgBQACgCAFAAIAXAAQAEAAACACQABABgBAFIgKA5QgBAFADADQACADAGAAIAIgBIACgCIAMhBQAAgFACgBQADgCAEAAIAXAAQAFAAABACQACABgBAFIgPBTQgBAFgCACQgDAEgFABQgLAEgLACQgKACgNAAQgMAAgIgDg");
	this.shape.setTransform(17.1,12.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag0AzIgIgTQgCgGAGgDQAGgDAFgHQAEgEADgHIAFgSIAHgfQABgFACgCQACgBAEAAIBIAAQAEAAACABQABACgBAFIgQBcQgBAEgCACQgCACgEAAIgXAAQgFAAgBgCQgCgCABgEIAMhCIgPAAIgCAMQgCANgEALIgIASQgEAGgGAFIgJAHIgLAFIgDAAQgEAAgCgFg");
	this.shape_1.setTransform(4.5,12.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgjA1QgIgDgFgHQgFgGgBgIQgCgJACgLIAKg4QABgFACgBQACgCAFAAIAXAAQAEAAACACQABABgBAFIgKA5QgBAFADADQACADAGAAIAIgBIACgCIAMhBQAAgFACgBQADgCAEAAIAXAAQAFAAABACQACABgBAFIgPBTQgBAFgCACQgDAEgFABQgLAEgLACQgKACgNAAQgMAAgIgDg");
	this.shape_2.setTransform(-6.4,12.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAHBLQgFgBgCgBQgBgDABgEIAHgpIgVABQgTgBgHgDQgFgBgEgDIgHgHIgFgJIgCgKQgBgHACgTIAGgfQAAgEADgCQACgCAFgBIAYAAQAFABABACQACACgBAEIgGAiIAAAJQAAADADADQACACAEABIALABQAIAAAHgCIAJgzQABgFACgBQACgCAFgBIAYAAQAFABACACQABACgBAEIgXCDQgBAEgCADQgCABgFABg");
	this.shape_3.setTransform(-18.3,10.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol39, new cjs.Rectangle(-28.6,0,53.1,25), null);


(lib.Symbol36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AACAiQgBAAgBAAQAAAAAAAAQAAAAAAgBQgBAAAAAAQAAAAAAgBQAAAAAAgBQgBAAABgBQAAAAAAgBIABgOIgJAAQgHAAgEgCQgFgCgCgDQgDgEgBgEQgBgFABgGIADgRQAAgBAAAAQABgBAAgBQAAAAAAAAQABgBAAAAIAEgBIAPAAIADABQAAAAABABQAAAAAAAAQAAABAAABQAAAAAAABIgDAQQgBADACACQAAAAAAABQABAAAAAAQABAAABAAQAAAAABAAIAEAAIABgBIAEgVQAAgBAAAAQAAgBAAgBQABAAAAAAQAAgBABAAIAEgBIAOAAQABAAABAAQAAAAABAAQAAAAAAABQABAAAAAAQAAAAAAABQAAAAAAAAQAAABAAABQAAAAAAABIgKA5QAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAIgEABg");
	this.shape.setTransform(126.7,7.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAZAjIgEgBQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAABgBIAGgjQABgDgCgCQAAgBgBAAQAAAAgBgBQAAAAgBAAQgBAAAAAAIgGABIgBAFIgGAkIgCAEIgEABIgNAAIgEgBIAAgEIAGgjQAAgEgBgBQgBgCgEAAIgEABIgBAAIgHApIgCAEIgEABIgOAAIgEgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIAKgzQAAgEACgCIAFgCIANgEIAOgBIAIAAQAEABACADIALgEIAKAAQAHAAAFABQAFACADAEQADAEABAFQABAGgBAGIgHAkQAAABAAAAQAAABgBAAQAAABAAAAQgBABAAAAIgEABg");
	this.shape_1.setTransform(117.4,7.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgVAiQgFgCgDgFQgDgDgBgGQgBgGABgGIADgOIADgMQADgFAFgDQAFgEAGgCQAGgBAIAAIAOABQAGABAEADIAEACQABACgBADIgJAxIgBAFIgFACIgNACIgOABQgHAAgGgCgAgDgMQgCACgBADIgDAPQAAABAAABQAAABAAAAQAAABAAAAQABABAAAAQABACAFAAIAFgBIAFgaIAAgBIgGgBQgDAAgCACg");
	this.shape_2.setTransform(109,7.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAPAiIgEgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIACgLIACgKIAGgMIgBAAIgHAMIgHAJIgDADIgDABIgGAAQgEAAgCgEIgDgJIgDgMIgBAAQABAKgBANIgCAKIgCAEIgEABIgLAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIAKg5QAAgBAAAAQAAgBABgBQAAAAAAAAQABgBAAAAIAEgBIALAAIAFAAIACAEIAIAbIATgbIADgEIAEAAIAMAAQABAAABAAQABAAAAAAQABAAAAABQABAAAAAAIAAAEIgKA5QAAABAAAAQgBABAAAAQAAABAAAAQgBABAAAAIgEABg");
	this.shape_3.setTransform(100.8,7.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAZAjIgEgBQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAABgBIAGgjQABgDgCgCQAAgBgBAAQAAAAgBgBQAAAAgBAAQgBAAAAAAIgGABIgBAFIgGAkIgCAEIgEABIgNAAIgEgBIAAgEIAGgjQAAgEgBgBQgBgCgEAAIgEABIgBAAIgHApIgCAEIgEABIgOAAIgEgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIAKgzQAAgEACgCIAFgCIANgEIAOgBIAIAAQAEABACADIALgEIAKAAQAHAAAFABQAFACADAEQADAEABAFQABAGgBAGIgHAkQAAABAAAAQAAABgBAAQAAABAAAAQgBABAAAAIgEABg");
	this.shape_4.setTransform(88.6,7.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgUAiQgGgCgDgFQgDgDgBgHQgBgFABgHIACgNQABgGAEgFQADgFAEgEQAFgEAGgCQAHgBAHAAQAHAAAGABQAFACAEADQAEADABAFQACAFgBAFIgDAIIgGAFIgJAEIgLABIgOAAIAAACQgBAFACACQABABAFAAQAGAAAEgEIADgDQABAAAAAAQABAAAAAAQABABABAAQAAAAABAAIAIAFQABAAABAAQAAABAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABgBABQgJAMgVAAQgJAAgGgCgAgDgQQgCACgBAEIAAABIAIABQAEABACgCQAAAAABgBQAAAAABAAQAAgBAAAAQAAgBAAAAQABgBAAgBQgBAAAAgBQAAAAAAgBQgBAAAAgBQgCgBgEAAQgDAAgDACg");
	this.shape_5.setTransform(80.2,7.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAHAiQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIACgPIgFAAIgJAPIgEAEIgGABIgNAAQgEAAgBgBQAAgDACgDIAOgSQgEgEgCgFQgBgEABgGQABgGACgEQADgFAEgDQADgCAFgBQAFgCAFAAIAgAAIAEABQAAAAAAABQABAAAAAAQAAABAAABQAAAAgBABIgKA5QAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAIgEABgAgDgJQAAABAAAAQAAAAAAABQABAAAAABQAAAAAAAAQABABAAAAQAAAAABABQAAAAAAAAQAAAAABAAIAIAAIABgLIgIAAQgEAAgBAGg");
	this.shape_6.setTransform(72.6,7.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AggAgIgFgMQgBgEAEgCQAEgCADgDQACgDACgFIADgLIAEgTIACgEIAEgBIAsAAIAEABQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABIgKA5QgBABAAAAQAAABAAABQAAAAgBAAQAAABAAAAIgEABIgPAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAAAAAQgBAAAAgBQAAAAAAAAQAAgBAAgBQAAAAAAgBIAIgoIgJAAIgCAHQgBAIgDAHIgEALQgDAEgEADIgGAEIgGADIgCAAQgBAAgBAAQAAAAgBgBQAAAAAAgBQgBAAAAgBg");
	this.shape_7.setTransform(65.3,7.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgSAjIgKgCQgDgCgBgCQgBgCAAgDIAIgtQACgIAHgCIALgEIANAAQAHAAAFABQAFACADADQADADACAEQABADgBAGQgBAEgCADIgIAGQAFAAADAEQACAEgBAGQAAAFgDAFQgDADgEAEIgLADQgGACgHAAIgPgBgAgIARIABAAIAGABIAFgBQADgCAAgCQAAgBAAgBQAAAAAAgBQAAAAAAgBQgBAAAAgBQgCgBgEAAIgGAAgAgBgRIgBABIgBAIIAFAAIAFgBIACgDQABgBAAAAQAAgBgBAAQAAgBAAAAQAAgBgBAAQAAAAAAgBQgBAAAAAAQgBAAgBAAQAAgBgBAAIgFABg");
	this.shape_8.setTransform(58.2,7.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgVAiQgFgCgDgFQgDgDgBgGQgBgGABgGIACgOIAFgMQADgFAEgDQAFgEAGgCQAGgBAHAAIAPABQAGABAFADIADACQABACgBADIgJAxIgCAFIgEACIgOACIgNABQgHAAgGgCgAgDgMQgDACAAADIgDAPQAAABAAABQAAABAAAAQAAABAAAAQABABAAAAQABACAEAAIAGgBIAFgaIgBgBIgEgBQgEAAgCACg");
	this.shape_9.setTransform(51.4,7.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAZAjIgEgBQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAABgBIAGgjQABgDgCgCQAAgBgBAAQAAAAgBgBQAAAAgBAAQgBAAAAAAIgGABIgBAFIgGAkIgCAEIgEABIgNAAIgEgBIAAgEIAGgjQAAgEgBgBQgBgCgEAAIgEABIgBAAIgHApIgCAEIgEABIgOAAIgEgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIAKgzQAAgEACgCIAFgCIANgEIAOgBIAIAAQAEABACADIALgEIAKAAQAHAAAFABQAFACADAEQADAEABAFQABAGgBAGIgHAkQAAABAAAAQAAABgBAAQAAABAAAAQgBABAAAAIgEABg");
	this.shape_10.setTransform(42.1,7.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgSAiQgGgCgDgEQgDgEgBgGQgBgFABgHIACgOQACgGACgFQADgGAFgDQAEgEAHgCQAGgBAHAAIAKABIAIAEQADACACADQACAEABAEQAAABAAAAQAAABAAABQAAAAAAABQgBAAAAABIgEACIgLAEIgFAAQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAgBQAAAAAAgBQAAAAgBgBQAAAAAAgBQgBAAAAAAIgFgCQgDAAgCACQgCACAAADIgDAQQgBAEACACQAAAAABAAQAAABABAAQAAAAABAAQAAABABAAQACgBACgBIAEgEQABgBAAAAQAAgBABAAQAAgBAAAAQABAAAAAAIAFAAIAMADQAAABABAAQABAAAAABQAAAAABABQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAABQgBAAAAABIgGAIIgIAGIgJADIgKABQgIAAgFgCg");
	this.shape_11.setTransform(33.8,7.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgUAwQgGgCgEgEQgDgEgBgFQgCgFACgHIACgNQABgGADgDQACgFAFgDQAEgEAGgBQAFgCAGAAIAIABIAHADQAAgGgCgDQgBgDgFgCQgCgCgFAAIgMgBQAAAAgBAAQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAIACgJQAAgBAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBIAFgBIASABQAHABAFACQAFADADAEQADAEABAFQACAFAAAHIgCAQIgFAXQgBAHgDAFQgDAFgEAEQgFADgGACQgHACgHAAQgIAAgFgCgAgIAKIgCAMQgBADACACQACACAEAAQADAAACgCQACgCABgDIACgMQABgEgCgCQgCgCgEAAQgHAAgBAIg");
	this.shape_12.setTransform(26.8,6.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgUAiQgGgCgDgFQgDgDgBgHQgBgFABgHIACgNQABgGAEgFQADgFAEgEQAFgEAGgCQAHgBAHAAQAHAAAGABQAFACAEADQAEADABAFQACAFgBAFIgDAIIgGAFIgJAEIgLABIgOAAIAAACQgBAFACACQABABAFAAQAGAAAEgEIADgDQABAAAAAAQABAAAAAAQABABABAAQAAAAABAAIAIAFQABAAABAAQAAABAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABgBABQgJAMgVAAQgJAAgGgCgAgDgQQgCACgBAEIAAABIAIABQAEABACgCQAAAAABgBQAAAAABAAQAAgBAAAAQAAgBAAAAQABgBAAgBQgBAAAAgBQAAAAAAgBQgBAAAAgBQgCgBgEAAQgDAAgDACg");
	this.shape_13.setTransform(19.6,7.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AggAyQgBAAgBgBQAAAAAAAAQgBAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAAAQgBgBAAAAQABgBAAgBIAOhQQABgEABgCIAFgCQAGgDAHAAIAOgBQAHAAAGACQAFACADADQADAEABAGQABAFgBAHIgDAOQgBAHgDAFQgCAFgFAEQgEADgGABQgGADgHAAIgIgBIgEAWQAAABAAABQAAAAgBABQAAAAAAAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQgBABgBAAgAABgbIgBABIgEAaIAFABQAEAAACgBQACgBABgEIADgQQABgDgCgCQgCgBgDgBIgGABg");
	this.shape_14.setTransform(11.8,9.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAIAjIgEgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBIAHgjQAAgDgBgCQgBgCgFAAIgEABIgBAAIgHApIgCAEIgFABIgOAAIgDgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIAJgzQABgEABgCIAGgCQAGgDAHgBIAOgBQAIAAAEABQAGACADAEQADAEABAFIAAAMIgHAkQAAABAAAAQgBABAAAAQAAABAAAAQgBABAAAAIgEABg");
	this.shape_15.setTransform(4.8,7.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol36, new cjs.Rectangle(0,0,131.2,15.6), null);


(lib.Symbol30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgaASQgFAAgCgCQgCgCABgFIADgRQABgFACgCQADgCAFAAIAvAAQAFAAACACQABACAAAFIgDARQgBAFgDACQgCACgFAAg");
	this.shape.setTransform(6.3,12.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol30, new cjs.Rectangle(0,0,12.6,25), null);


(lib.Symbol29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AALA2QgEAAgCgBQgBgCABgFIAEgYIgJAAIgOAYQgDAFgEACQgDABgHAAIgUAAQgHAAgBgCQgBgDAEgFIAWgeQgHgFgCgIQgCgIABgKQACgJAEgHQAEgHAGgEQAGgFAHgDQAIgBAJAAIAzAAQAFgBABACQACACgBAFIgQBbQgBAFgCACQgCABgFAAgAgEgQQgBAEACADQABABADAAIANAAIADgQIgNAAQgHABgBAHg");
	this.shape.setTransform(89.8,12.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgjA1QgIgDgFgHQgFgGgBgIQgCgJACgLIAKg4QABgFACgBQACgCAFAAIAXAAQAEAAACACQABABgBAFIgKA5QgBAFADADQACADAGAAIAIgBIACgCIAMhBQAAgFACgBQADgCAEAAIAXAAQAFAAABACQACABgBAFIgPBTQgBAFgCACQgDAEgFABQgLAEgLACQgKACgNAAQgMAAgIgDg");
	this.shape_1.setTransform(79.1,12.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag0AzIgIgTQgCgGAGgDQAGgDAFgHQAEgEADgHIAFgSIAHgfQABgFACgCQACgBAEAAIBIAAQAEAAACABQABACgBAFIgQBcQgBAEgCACQgCACgEAAIgXAAQgFAAgBgCQgCgCABgEIAMhCIgPAAIgCAMQgCANgEALIgIASQgEAGgGAFIgJAHIgLAFIgDAAQgEAAgCgFg");
	this.shape_2.setTransform(66.6,12.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgjA1QgIgDgFgHQgFgGgBgIQgCgJACgLIAKg4QABgFACgBQACgCAFAAIAXAAQAEAAACACQABABgBAFIgKA5QgBAFADADQACADAGAAIAIgBIACgCIAMhBQAAgFACgBQADgCAEAAIAXAAQAFAAABACQACABgBAFIgPBTQgBAFgCACQgDAEgFABQgLAEgLACQgKACgNAAQgMAAgIgDg");
	this.shape_3.setTransform(55.6,12.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgXA4QgIgCgGgEQgHgDgEgGQgEgFgBgHQgBgFACgCQACgDAFgCIAQgEQAFgCACABQACABABAEQABAFAEADQAEADAIAAQAGAAADgCQADgCABgEQABgBAAgBQAAAAgBgBQAAAAAAgBQAAAAgBgBQgCgCgEAAIgNAAQgEAAgBgBQgBgCAAgEIADgMQAAgDACgCQACgCAEAAIAMAAQAIAAACgGQAAgEgCgCQgDgBgFAAQgIAAgFACQgEACgDAFIgEAFQgCABgFgCIgOgEQgEgCgBgDQgBgDACgEQAEgHAFgFQAFgFAHgEQAGgDAJgCQAHgCAKAAQALAAAIADQAJACAFAEQAGAFACAGQACAHgBAHQgBAIgEAGQgFAFgGADIAAABQAGACADAHQACAGgBAKQgBAIgEAGQgEAGgGAEQgGAEgJADQgKACgMAAQgKAAgJgCg");
	this.shape_4.setTransform(43.7,12.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgiA2QgIgDgFgGQgFgHgCgJQgBgIACgMIAEgVQACgMAEgIQAFgIAHgGQAHgFAKgDQAKgDANAAQANAAAKACQAKACAHAEQAFACABACQABADgBAFIgPBQQAAAEgCADQgCACgFABIgWAEIgXABQgLAAgJgEgAgGgUQgDADgBAGIgFAZQgBAFADACQACADAGAAIAKgBIAIgrQAAAAAAgBQAAAAAAAAQAAAAgBAAQAAgBAAAAIgIgBQgGAAgEADg");
	this.shape_5.setTransform(33.1,12.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag0BPQgFAAgBgBQgCgCABgFIAXiCQABgFACgCQACgDAGgCQAKgEALgBQAKgCANAAQAMAAAIADQAJADAFAHQAFAGABAJQACAIgCALIgEAXQgCAKgFAJQgEAIgHAGQgHAGgKADQgKACgLAAIgNgBIgGAkQgBAFgCACQgCABgEAAgAAAgrIAAABIgHAsIAIABQAGAAAEgDQAEgCABgGIAEgaQABgFgCgDQgDgCgGAAIgKABg");
	this.shape_6.setTransform(20.7,14.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag7BLQgFAAgBgCQgCgCABgFIAXiDQACgFACgCQACgCAFAAIBcAAQAEAAACACQACACgBAFIgDARQgBAFgCACQgCACgGAAIg6AAIgEASIAbAAQALAAAIAEQAJADAGAHQAGAHACAJQACAJgCALQgCALgFAIQgEAJgIAGQgHAGgKADQgJADgLAAgAgUApIAUAAQAIAAAFgEQAEgDABgIQABgHgDgDQgDgDgIAAIgUAAg");
	this.shape_7.setTransform(9,10.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol29, new cjs.Rectangle(0,0,98,25), null);


(lib.Symbol24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D52929").s().rr(-119.95,-28.2,239.9,56.4,13.4);
	this.shape.setTransform(133,31.2,1.109,1.109);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol24, new cjs.Rectangle(0,0,266.1,62.5), null);


(lib.Symbol21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Logo2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol21, new cjs.Rectangle(0,0,151,150), null);


(lib.Symbol20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Logo1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol20, new cjs.Rectangle(0,0,93,157), null);


(lib.Symbol18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.back();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol18, new cjs.Rectangle(0,0,800,347), null);


(lib.Symbol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.CArd_right();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.535,0.535);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol15, new cjs.Rectangle(0,0,260.9,207.4), null);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.shad();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1.131,0.563);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol12, new cjs.Rectangle(0,0,249.9,43.9), null);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.CArd_left();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.535,0.535);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(0,0,193.5,219.2), null);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgjTAKKIAA0TMBGnAAAIAAUTg");
	this.shape.setTransform(226,65);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(0,0,452,130), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.logored();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,268,82), null);


(lib.Symbol44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol41();
	this.instance.parent = this;
	this.instance.setTransform(41.1,12.5,1,1,0,0,0,41.1,12.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol44, new cjs.Rectangle(0,0,82.3,25), null);


(lib.Symbol43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol40();
	this.instance.parent = this;
	this.instance.setTransform(56.5,12.5,1,1,0,0,0,56.5,12.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol43, new cjs.Rectangle(0,0,112.9,25), null);


(lib.Symbol34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_19 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(19).call(this.frame_19).wait(1));

	// Symbol 3
	this.instance = new lib.logored();
	this.instance.parent = this;
	this.instance.setTransform(9,-123,0.505,0.505);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},19).wait(1));

	// Symbol 36
	this.instance_1 = new lib.Symbol36();
	this.instance_1.parent = this;
	this.instance_1.setTransform(76.8,74.5,1,1,0,0,0,65.5,7.8);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(15).to({_off:false},0).to({y:56.3,alpha:1},4,cjs.Ease.get(1)).wait(1));

	// Symbol 3
	this.instance_2 = new lib.Symbol3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(76.9,117.9,0.505,0.505,0,0,0,134.1,41.1);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:133.9,scaleX:0.69,scaleY:0.69,x:76.8,y:119.9,alpha:1},9,cjs.Ease.backOut).to({regX:134,regY:41,scaleX:0.57,scaleY:0.57,y:23.5},10,cjs.Ease.quadInOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(9,-123,135.4,261.5);


(lib.Symbol25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag5BKQgEAAgBgCQAAgCACgFIAXgkIgcheQgDgIAJAAIAZAAQAIAAADABQADABABAFIAMAvIAbgvQADgFACgBIAKgBIAaAAQAFAAABABQAAADgDAEIhOCDQgDAGgDABQgCABgHAAg");
	this.shape.setTransform(220.5,29.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAVBKQgIAAgDgBQgEgCgCgGIgKglQgCgGgDgCQgDgCgFgBIgEAAIgIAwQgBAGgCABQgDACgFAAIgXAAQgFAAgCgCQgCgBABgGIAXiCQACgFACgCQACgBAFAAIAYAAQAFAAABABQACADgBAEIgIAvIADAAIABAAIAmgwQAEgFADgBIALgBIAYAAQAFgBABADQABACgDAFIgyA+QAEACACACIAFAJIASA1QACAFgCADQgCACgFAAg");
	this.shape_1.setTransform(205.7,29.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag7BLQgFAAgCgCQgCgCABgFIAXiDQACgFACgCQACgCAFAAIA8AAQALAAAIADQAJADAFAGQAFAFACAIQACAHgCAKQgCAKgFAHQgEAGgKAGIAAABQATAIgEAdQgCAKgFAHQgFAIgIAFQgHAFgKACQgKADgLAAgAgVApIAYAAQAGAAAEgDQAEgDABgHQABgGgCgDQgDgDgHAAIgXAAgAgKgRIATAAQAGAAAEgDQAEgCABgGQABgGgDgDQgDgDgGAAIgTAAg");
	this.shape_2.setTransform(190.8,29.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAqBKQgHAAgDgCQgDgBgBgGIgCgOIgsAAIgIAOQgCAGgEABQgDACgHAAIgYAAQgEAAgBgCQgBgCACgEIBHiEQADgEACgCQADgCAEABIAYAAQAFgBACACQACACABAEIAZCEQABAEgCACQgCACgFAAgAAWARIgDgXQgBgOABgLIABgFIgCAAQgFAUgFAKIgLAXIAZAAg");
	this.shape_3.setTransform(175.6,29.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgiBKQgFAAgCgCQgBgBABgGIAShmIgfAAQgFAAgCgCQgBgCAAgFIAEgTQABgFACgCQACgBAFAAIBnAAQAFAAACABQACADgBAEIgEATQgBAFgCACQgCACgFAAIgfAAIgSBmQgBAGgCABQgCACgFAAg");
	this.shape_4.setTransform(165.2,29.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AglBKQgGgCgEgDQgFgDgDgFIgGgJQgDgFgBgFQgBgGAAgGIABgNIAHgmQABgJAHgPIAHgJIAJgIQAGgFAQgGQAIgCATgCQALAAAJADQAJACAHAFQAGAFAEAHQAFAGABAKQABAFgBACQgCADgFABIgVAIQgGABgCgBQgCgBgBgFQgBgHgFgDQgEgEgJAAQgGAAgEACQgEABgEADQgDACgCAEQgCAEgBAGIgHAlIAAAKQAAAEADADQACADAEABQAEABAGAAQAIAAAGgDQAGgEAEgHQADgFACgBQADgBAEACIAWAIQAEACABACQABADgDAFQgFAJgGAGQgHAHgIAFQgJAEgKADQgKACgLAAQgTgCgIgCg");
	this.shape_5.setTransform(151.3,29.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag4BKQgFAAgCgCQgBgBABgGIAXiCQABgFACgCQADgBAEAAIAYAAQAFAAABABQACADgBAEIgGAkIAXAAQANAAAJAEQAKADAGAIQAGAHACAJQACAKgCANQgCAMgGAJQgFAJgIAHQgHAGgLAEQgKACgNAAgAgRAmIAUAAQAHAAAFgEQAFgFABgHQACgHgEgEQgDgEgHAAIgUAAg");
	this.shape_6.setTransform(131.9,29.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgiBKQgFAAgCgCQgBgBABgGIAShmIgfAAQgFAAgCgCQgBgCAAgFIAEgTQABgFACgCQACgBAFAAIBnAAQAFAAACABQACADgBAEIgEATQgBAFgCACQgCACgFAAIgfAAIgSBmQgBAGgCABQgCACgFAAg");
	this.shape_7.setTransform(119.8,29.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAqBKQgHAAgDgCQgDgBgBgGIgCgOIgsAAIgIAOQgCAGgEABQgDACgHAAIgYAAQgEAAgBgCQgBgCACgEIBHiEQADgEACgCQADgCAEABIAYAAQAFgBACACQACACABAEIAZCEQABAEgCACQgCACgFAAgAAWARIgDgXQgBgOABgLIABgFIgCAAQgFAUgFAKIgLAXIAZAAg");
	this.shape_8.setTransform(105.8,29.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhABMQgCgBgCgFIgIgUQgCgEACgDQABgDAFgCIALgIQAFgFAEgGQAEgGADgJIAGgXIAIgwQABgFADgBQACgCAFAAIBYAAQAFAAACACQACACgBAEIgXCDQgBAFgCACQgDACgFAAIgYAAQgFAAgBgCQgCgCABgFIAShnIgZAAIgDAUQgFAbgEALQgJATgGAHQgIALgIAHQgIAGgMAFIgFACIgCAAg");
	this.shape_9.setTransform(91.3,29.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ag4BKQgFAAgCgCQgCgBABgGIAXiCQACgFACgCQACgBAFAAIBXAAQAFAAACABQABADAAAEIgEATQgBAFgCACQgCACgFAAIg3AAIgDATIArAAQAFAAACACQABACgBAFIgDARQgBAFgCADQgCABgFAAIgsAAIgDAVIA4AAQAFAAACABQABADgBAEIgDATQgBAGgCABQgDACgFAAg");
	this.shape_10.setTransform(77.8,29.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AApBbQgFAAgCgCQgBgCAAgFIAFgYIhMAAIgFAYQAAAFgDACQgCACgFAAIgXAAQgFAAgCgCQgBgCABgFIAJg0QABgEACgDQACgBAFAAIAFAAIAJgJIAHgLQADgFADgJIAEgVIAJgwQABgEACgDQACgBAFAAIBbAAQAFAAACABQABADgBAEIgSBnIAKAAQAFAAACABQABADgBAEIgJA0QgBAFgCACQgCACgFAAgAAGghQgDASgEAOQgFANgGAKIAkAAIAOhLIgcAAg");
	this.shape_11.setTransform(61.4,30.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AglBKQgGgCgEgDQgFgDgDgFIgGgJQgDgFgBgFQgBgGAAgGIABgNIAHgmQABgJAHgPIAHgJIAJgIQAGgFAQgGQAIgCATgCQALAAAJADQAJACAHAFQAGAFAEAHQAFAGABAKQABAFgBACQgCADgFABIgVAIQgGABgCgBQgCgBgBgFQgBgHgFgDQgEgEgJAAQgGAAgEACQgEABgEADQgDACgCAEQgCAEgBAGIgHAlIAAAKQAAAEADADQACADAEABQAEABAGAAQAIAAAGgDQAGgEAEgHQADgFACgBQADgBAEACIAWAIQAEACABACQABADgDAFQgFAJgGAGQgHAHgIAFQgJAEgKADQgKACgLAAQgTgCgIgCg");
	this.shape_12.setTransform(47.7,29.3);

	this.instance = new lib.Symbol24();
	this.instance.parent = this;
	this.instance.setTransform(133.1,31.2,1,1,0,0,0,133.1,31.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#660000").s().p("AwoEaQiGAAAAiGIAAknQAAiGCGAAMAhRAAAQCGAAAACGIAAEnQAACGiGAAg");
	this.shape_13.setTransform(133,34.6,1.109,1.109);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("Ag5BKQgEAAgBgCQAAgCACgFIAXgkIgcheQgDgIAJAAIAZAAQAIAAADAAQADACABAFIAMAvIAbgvQADgFACgCIAKAAIAaAAQAFAAABABQAAACgDAFIhOCEQgDAFgDABQgCABgHAAg");
	this.shape_14.setTransform(220.5,26.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAVBKQgIAAgDgBQgEgCgCgGIgKglQgCgGgDgCQgDgCgFgBIgEAAIgIAwQgBAGgCABQgDACgFAAIgXAAQgFAAgCgCQgCgBABgGIAXiCQACgFACgCQACgBAFAAIAYAAQAFAAABABQACACgBAFIgIAvIADAAIABAAIAmgwQAEgFADgCIALAAIAYAAQAFgBABADQABADgDAEIgyA+QAEABACADIAFAJIASA1QACAFgCACQgCADgFAAg");
	this.shape_15.setTransform(205.7,26.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAqBKQgHAAgDgCQgDgBgBgGIgCgOIgsAAIgIAOQgCAGgEABQgDACgHAAIgYAAQgEAAgBgCQgBgCACgEIBHiEQADgEACgCQADgCAEABIAYAAQAFgBACACQACABABAFIAZCEQABAEgCACQgCACgFAAgAAWARIgDgXQgBgOABgLIABgFIgCAAQgFAVgFAJIgLAXIAZAAg");
	this.shape_16.setTransform(175.6,26.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgiBKQgFAAgCgCQgBgBABgGIAShmIgfAAQgFAAgCgCQgBgCAAgFIAEgTQABgFACgCQACgBAFAAIBnAAQAFAAACABQACACgBAFIgEATQgBAFgCACQgCACgFAAIgfAAIgSBmQgBAGgCABQgCACgFAAg");
	this.shape_17.setTransform(165.2,26.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("Ag4BKQgFAAgCgCQgBgBABgGIAXiCQABgFACgCQADgBAEAAIAYAAQAFAAABABQACACgBAFIgGAkIAXAAQANAAAJAEQAKADAGAIQAGAIACAIQACAKgCANQgCAMgGAJQgFAJgIAHQgHAGgLADQgKADgNAAgAgRAmIAUAAQAHAAAFgEQAFgEABgIQACgHgEgEQgDgEgHAAIgUAAg");
	this.shape_18.setTransform(131.9,26.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgiBKQgFAAgCgCQgBgBABgGIAShmIgfAAQgFAAgCgCQgBgCAAgFIAEgTQABgFACgCQACgBAFAAIBnAAQAFAAACABQACACgBAFIgEATQgBAFgCACQgCACgFAAIgfAAIgSBmQgBAGgCABQgCACgFAAg");
	this.shape_19.setTransform(119.8,26.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAqBKQgHAAgDgCQgDgBgBgGIgCgOIgsAAIgIAOQgCAGgEABQgDACgHAAIgYAAQgEAAgBgCQgBgCACgEIBHiEQADgEACgCQADgCAEABIAYAAQAFgBACACQACABABAFIAZCEQABAEgCACQgCACgFAAgAAWARIgDgXQgBgOABgLIABgFIgCAAQgFAVgFAJIgLAXIAZAAg");
	this.shape_20.setTransform(105.8,26.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("Ag4BKQgFAAgCgCQgCgBABgGIAXiCQACgFACgCQACgBAFAAIBXAAQAFAAACABQABACAAAFIgEATQgBAFgCACQgCACgFAAIg3AAIgDATIArAAQAFAAACACQABACgBAEIgDASQgBAFgCADQgCABgFAAIgsAAIgDAVIA4AAQAFAAACACQABACgBAEIgDATQgBAGgCABQgDACgFAAg");
	this.shape_21.setTransform(77.8,26.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AApBaQgFAAgCgBQgBgCAAgFIAFgYIhMAAIgFAYQAAAFgDACQgCABgFAAIgXAAQgFAAgCgBQgBgCABgFIAJg0QABgEACgCQACgCAFAAIAFAAIAJgJIAHgLQADgFADgJIAEgVIAJgwQABgFACgCQACgBAFAAIBbAAQAFAAACABQABACgBAFIgSBnIAKAAQAFAAACACQABACgBAEIgJA0QgBAFgCACQgCABgFAAgAAGghQgDASgEAOQgFANgGAKIAkAAIAOhLIgcAAg");
	this.shape_22.setTransform(61.4,27.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#F22929").s().p("AwoEaQiGAAAAiGIAAknQAAiGCGAAMAhRAAAQCGAAAACGIAAEnQAACGiGAAg");
	this.shape_23.setTransform(133,28,1.109,1.109);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.instance},{t:this.shape_12,p:{y:29.3}},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9,p:{y:29.5}},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5,p:{y:29.3}},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2,p:{y:29.3}},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_13},{t:this.shape_23},{t:this.shape_12,p:{y:26.2}},{t:this.shape_22},{t:this.shape_21},{t:this.shape_9,p:{y:26.4}},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_5,p:{y:26.2}},{t:this.shape_17},{t:this.shape_16},{t:this.shape_2,p:{y:26.2}},{t:this.shape_15},{t:this.shape_14}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,266.1,65.9);


(lib.Symbol22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol21();
	this.instance.parent = this;
	this.instance.setTransform(75.5,75,1,1,0,0,0,75.5,75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol22, new cjs.Rectangle(0,0,151,150), null);


(lib.Symbol19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol20();
	this.instance.parent = this;
	this.instance.setTransform(46.5,78.5,1,1,0,0,0,46.5,78.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol19, new cjs.Rectangle(0,0,93,157), null);


(lib.Symbol17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol15();
	this.instance.parent = this;
	this.instance.setTransform(130.4,103.7,1,1,0,0,0,130.4,103.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol17, new cjs.Rectangle(0,0,260.9,207.4), null);


(lib.Symbol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol9();
	this.instance.parent = this;
	this.instance.setTransform(96.8,109.5,1,1,0,0,0,96.8,109.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol14, new cjs.Rectangle(0,0,193.5,219.2), null);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol12();
	this.instance.parent = this;
	this.instance.setTransform(125,21.9,1,1,0,0,0,125,21.9);
	this.instance.alpha = 0.52;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol13, new cjs.Rectangle(0,0,249.9,43.9), null);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol14();
	this.instance.parent = this;
	this.instance.setTransform(96.8,109.5,1,1,0,0,0,96.8,109.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:103.2},14,cjs.Ease.get(-1)).to({y:96.5},15,cjs.Ease.get(1)).to({y:103},15,cjs.Ease.get(-1)).to({y:109.5},15,cjs.Ease.get(1)).wait(1));

	// Layer 2
	this.instance_1 = new lib.Symbol13();
	this.instance_1.parent = this;
	this.instance_1.setTransform(97,238.9,1,1,0,0,0,125,21.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:124.9,scaleX:0.91,scaleY:0.91},14,cjs.Ease.get(-1)).to({scaleX:0.82,scaleY:0.82,x:96.9,y:239},15,cjs.Ease.get(1)).to({regY:22,scaleX:0.91,scaleY:0.91,x:97,y:239.1},15,cjs.Ease.get(-1)).to({regX:125,regY:21.9,scaleX:1,scaleY:1,y:238.9},15,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28,0,249.9,260.9);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol18();
	this.instance.parent = this;
	this.instance.setTransform(439,173.5,1,1,0,0,0,400,173.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:361},99,cjs.Ease.quadInOut).to({x:439},100,cjs.Ease.quadInOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(39,0,800,347);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol19();
	this.instance.parent = this;
	this.instance.setTransform(46.5,78.5,1,1,0,0,0,46.5,78.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(49).to({regX:47.6,scaleX:0.02,x:46.6,alpha:0.52},5,cjs.Ease.quadInOut).to({regX:46.5,scaleX:1,x:46.5,alpha:1},5,cjs.Ease.quadInOut).wait(41));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,93,157);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol22();
	this.instance.parent = this;
	this.instance.setTransform(75.5,75,1,1,0,0,0,75.5,75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(54).to({scaleX:0.08,x:75.6,alpha:0.52},5,cjs.Ease.quadInOut).to({scaleX:1,x:75.5,alpha:1},5,cjs.Ease.quadInOut).wait(36));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,151,150);


(lib.Symbol31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol4();
	this.instance.parent = this;
	this.instance.setTransform(22.9,22.6,0.302,0.302,0,0,0,75.6,74.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol31, new cjs.Rectangle(0,0,45.7,45.4), null);


(lib.Symbol28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol5();
	this.instance.parent = this;
	this.instance.setTransform(19.3,32.5,0.413,0.413,0,0,0,46.6,78.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol28, new cjs.Rectangle(0,0,38.5,64.9), null);


(lib.Symbol27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_49 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(49).call(this.frame_49).wait(1));

	// Layer 1
	this.instance = new lib.Symbol8();
	this.instance.parent = this;
	this.instance.setTransform(-28.9,109.6,0.601,1,15,0,0,96.9,109.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(21).to({y:109.5},0).to({regX:96.8,scaleX:1,rotation:0,x:124.8},28,cjs.Ease.get(1)).wait(1));

	// Layer 4
	this.instance_1 = new lib.Symbol45();
	this.instance_1.parent = this;
	this.instance_1.setTransform(49.3,114.5,1,1,0,0,0,221.1,156.5);
	this.instance_1.alpha = 0;
	this.instance_1.compositeOperation = "lighter";
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(21).to({_off:false},0).to({alpha:0.199},28).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-140.6,-11.3,196.1,286.5);


(lib.Symbol26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol25();
	this.instance.parent = this;
	this.instance.setTransform(120,29.7,0.902,0.902,0,0,0,133.1,32.9);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-2.9,239.9,62.3);


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol17();
	this.instance.parent = this;
	this.instance.setTransform(130.4,90.7,1,1,0,0,0,130.4,103.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:97.2},17,cjs.Ease.get(-1)).to({y:103.7},17,cjs.Ease.get(1)).to({y:97},18,cjs.Ease.get(-1)).to({y:90.7},17,cjs.Ease.get(1)).wait(1));

	// Layer 2
	this.instance_1 = new lib.Symbol13();
	this.instance_1.parent = this;
	this.instance_1.setTransform(114.8,229.4,0.864,0.864,0,0,0,125,22);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.93,scaleY:0.93},17,cjs.Ease.get(-1)).to({regY:21.9,scaleX:1,scaleY:1,y:229.3},17,cjs.Ease.get(1)).to({regX:124.9,regY:22,scaleX:0.93,scaleY:0.93,y:229.4},18,cjs.Ease.get(-1)).to({regX:125,scaleX:0.86,scaleY:0.86},17,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-13,260.9,261.3);


(lib.Symbol38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol26();
	this.instance.parent = this;
	this.instance.setTransform(120,28.2,1,1,0,0,0,120,28.2);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol38, new cjs.Rectangle(0,-2.9,239.9,62.3), null);


(lib.Symbol37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_59 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(59).call(this.frame_59).wait(1));

	// Symbol 41
	this.instance = new lib.Symbol39();
	this.instance.parent = this;
	this.instance.setTransform(353.2,105.5,1,1,0,0,0,26.6,12.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(49).to({_off:false},0).to({x:327.2,alpha:1},10,cjs.Ease.get(1)).wait(1));

	// Symbol 40
	this.instance_1 = new lib.Symbol29();
	this.instance_1.parent = this;
	this.instance_1.setTransform(116,105.5,1,1,0,0,0,49,12.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(49).to({_off:false},0).to({x:151.4,alpha:1},10,cjs.Ease.get(1)).wait(1));

	// Symbol 30
	this.instance_2 = new lib.Symbol30();
	this.instance_2.parent = this;
	this.instance_2.setTransform(227,355.6,1,1,0,0,0,6.3,12.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(49).to({y:57.4,alpha:0},0).to({y:50.9,alpha:1},10,cjs.Ease.quadInOut).wait(1));

	// Symbol 28
	this.instance_3 = new lib.Symbol28();
	this.instance_3.parent = this;
	this.instance_3.setTransform(153,353,1,1,0,0,0,19.2,32.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(39).to({scaleX:0.07,x:153.1,y:48.3,alpha:0},0).to({scaleX:1,x:153,alpha:1},10,cjs.Ease.quadInOut).wait(11));

	// Symbol 31
	this.instance_4 = new lib.Symbol31();
	this.instance_4.parent = this;
	this.instance_4.setTransform(299.7,354.5,1,1,0,0,0,22.8,22.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(39).to({regX:23.7,scaleX:0.06,y:49.8,alpha:0},0).to({regX:22.8,scaleX:1,alpha:1},10,cjs.Ease.quadInOut).wait(11));

	// Symbol 7
	this.instance_5 = new lib.Symbol7();
	this.instance_5.parent = this;
	this.instance_5.setTransform(226,369.8,1,1,0,0,0,226,65);
	this.instance_5.alpha = 0.469;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(34).to({regY:65.7,scaleY:0.07,y:65.1,alpha:0},0).to({regY:65,scaleY:1,y:65,alpha:0.469},10,cjs.Ease.get(1)).wait(16));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,304.8,452,130);


(lib.Symbol35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_69 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(69).call(this.frame_69).wait(1));

	// Symbol 44
	this.instance = new lib.Symbol44();
	this.instance.parent = this;
	this.instance.setTransform(393.3,155.3,1,1,0,0,0,41.1,12.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(57).to({x:334.3,y:101.6},0).to({y:33.4},9,cjs.Ease.get(1)).wait(4));

	// Symbol 43
	this.instance_1 = new lib.Symbol43();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-75.1,155.3,1,1,0,0,0,56.5,12.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(60).to({x:-92.3,y:101.6},0).to({y:33.4},9,cjs.Ease.get(1)).wait(1));

	// Layer 1
	this.instance_2 = new lib.Symbol38();
	this.instance_2.parent = this;
	this.instance_2.setTransform(120,116,1,1,0,0,0,120,28.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(49).to({y:110.1},0).to({y:28.2},20,cjs.Ease.backOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-131.6,87.8,566.2,80);


(lib.Symbol33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_49 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(49).call(this.frame_49).wait(1));

	// Layer 1
	this.instance = new lib.Symbol16();
	this.instance.parent = this;
	this.instance.setTransform(306.4,102.1,0.538,1,-10.5,0,0,130.5,103.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(25).to({regX:130.4,regY:103.7,scaleX:1,rotation:0,x:130.4,y:116.7},24,cjs.Ease.get(1)).wait(1));

	// Layer 4
	this.instance_1 = new lib.Symbol46();
	this.instance_1.parent = this;
	this.instance_1.setTransform(175,127.3,1,1,0,0,0,208.1,152.3);
	this.instance_1.alpha = 0;
	this.instance_1.compositeOperation = "lighter";
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(25).to({_off:false},0).to({alpha:0.199},24,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(216.1,-25.5,175.6,281.7);


// stage content:
(lib.brasilchile_6003002 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.Symbol35();
	this.instance.parent = this;
	this.instance.setTransform(300.1,260.6,1,1,0,0,0,120,28.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Symbol 16
	this.instance_1 = new lib.Symbol33();
	this.instance_1.parent = this;
	this.instance_1.setTransform(530.4,155.7,1,1,0,0,0,130.4,130.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Symbol 8
	this.instance_2 = new lib.Symbol27();
	this.instance_2.parent = this;
	this.instance_2.setTransform(93,163.4,1,1,0,0,0,125,130.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// -
	this.instance_3 = new lib.Symbol37();
	this.instance_3.parent = this;
	this.instance_3.setTransform(302.6,162.8,1,1,0,0,0,226,65);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// представляет матч
	this.instance_4 = new lib.Symbol34();
	this.instance_4.parent = this;
	this.instance_4.setTransform(303.2,53.5,1,1,0,0,0,76.8,32.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// Layer 1
	this.instance_5 = new lib.Symbol42();
	this.instance_5.parent = this;
	this.instance_5.setTransform(300.9,282.3,1,1,0,0,0,283.1,12.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// Symbol 6
	this.instance_6 = new lib.Symbol6();
	this.instance_6.parent = this;
	this.instance_6.setTransform(258,160.5,1,1,0,0,0,400,173.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(127.4,47.9,964.3,634.7);
// library properties:
lib.properties = {
	id: 'DDABABDE08F245B59AB41D7DE5A03AF9',
	width: 600,
	height: 300,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/back.jpg", id:"back"},
		{src:"images/brasil.jpg", id:"brasil"},
		{src:"images/CArd_left.png", id:"CArd_left"},
		{src:"images/CArd_right.png", id:"CArd_right"},
		{src:"images/chile.jpg", id:"chile"},
		{src:"images/Logo1.png", id:"Logo1"},
		{src:"images/Logo2.png", id:"Logo2"},
		{src:"images/logored.png", id:"logored"},
		{src:"images/shad.png", id:"shad"}
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
an.compositions['DDABABDE08F245B59AB41D7DE5A03AF9'] = {
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