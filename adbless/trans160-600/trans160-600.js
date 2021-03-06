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



(lib.Dunk = function() {
	this.initialize(img.Dunk);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,675,1000);


(lib.tembash = function() {
	this.initialize(img.tembash);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,666,1000);


(lib.valerian = function() {
	this.initialize(img.valerian);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,523,755);// helper functions:

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


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAXAiIAAguIgUAuIgFAAIgUguIAAAuIgPAAIAAhDIATAAIASArIATgrIATAAIAABDg");
	this.shape.setTransform(112.4,22.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgdAiIAAhDIAOAAIAAAZIAXAAQAFAAAFABQAEACADADQADACABAEQACAEAAAEQAAAFgCADIgEAHIgHAFQgFACgFAAgAgPAVIAWAAQADAAADgDQACgCABgEQgBgEgCgCQgDgCgDAAIgWAAg");
	this.shape_1.setTransform(104.1,22.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AghAXIAEgBIADgFIAEgSIAFggIAzAAIAABCIgPAAIAAg2IgXAAIgDAVIgDAPQgCAIgDADQgDAFgFABQgEACgGAAg");
	this.shape_2.setTransform(95.8,22.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAQAiIAAguIgfAuIgOAAIAAhDIAOAAIAAAtIAfgtIAOAAIAABDg");
	this.shape_3.setTransform(88.2,22.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgGA8IAAgjQgDAFgFADQgFACgGAAQgFAAgFgCQgEgCgEgFQgDgFgCgGQgCgHAAgIQAAgHACgHQACgGADgFQAEgFAEgCQAFgDAFAAQAGAAAFADQAEADAEAGIAAgkIANAAIAAAjQAEgFAEgDQAFgDAGAAQAFAAAFADQAEACAEAFQADAEACAHQACAHAAAHQAAAIgCAHQgCAGgDAFQgEAFgEACQgFACgFAAQgGAAgEgCQgFgDgEgGIAAAkgAANgTQgEADgCAEIAAAZQACAEAEADQAEACAEAAQADAAADgBIAFgFIADgHIABgJIgBgIIgDgHIgFgFQgDgCgDAAQgEAAgEADgAgagUIgFAFIgDAHIgBAIIABAJIADAHIAFAFQADABADAAQAEAAAEgCQAEgDACgEIAAgZQgCgEgEgDQgEgDgEAAQgDAAgDACg");
	this.shape_4.setTransform(78.4,22.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgeAiIAAhDIAPAAIAAAZIAXAAQAGAAAEABQAEACADADQACACACAEQACAEgBAEQABAFgCADIgEAHIgHAFQgEACgGAAgAgPAVIAVAAQAEAAADgDQACgCAAgEQAAgEgCgCQgDgCgEAAIgVAAg");
	this.shape_5.setTransform(65.5,22.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgGAiIAAg2IgUAAIAAgNIA1AAIAAANIgUAAIAAA2g");
	this.shape_6.setTransform(58.5,22.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgOAiQgEgBgDgDQgEgDgCgEQgCgFAAgEQAAgHACgDQACgEAEgCIAHgFIAJgBQAFAAAGADQAGABADAEIAAgJQABgDgCgCIgDgFIgFgCIgGAAQgFAAgFABQgFADgFAEIgGgKQAFgEAJgEQAGgEAIAAQAGAAAFACQAFABAEADQADADACAFQADAEAAAHIAAAsIgPAAIAAgHQgDAEgGACQgGACgFAAIgJgBgAgKAFQgEADAAAGQAAAFAEAEQAEACAGAAQAEABAEgCQAFgCACgEIAAgKQgCgDgFgCQgEgCgEAAQgGABgEADg");
	this.shape_7.setTransform(51.7,22.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAQAiIAAgbIgJADIgKABQgHAAgFgBIgIgEQgDgDgCgDQgBgEAAgFIAAgYIAPAAIAAASIABAHQABADACABIAFACIAGABQAGAAAJgCIAAgeIAOAAIAABDg");
	this.shape_8.setTransform(44.1,22.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgOAiQgEgBgDgDQgEgDgCgEQgCgFAAgEQAAgHACgDQACgEAEgCIAHgFIAJgBQAFAAAGADQAFABAEAEIAAgJQABgDgCgCIgDgFIgFgCIgGAAQgFAAgFABQgFADgFAEIgFgKQADgEAJgEQAIgEAHAAQAGAAAFACQAFABAEADQADADADAFQACAEAAAHIAAAsIgPAAIAAgHQgEAEgFACQgGACgFAAIgJgBgAgKAFQgEADAAAGQAAAFAEAEQAEACAGAAQAEABAEgCQAFgCACgEIAAgKQgCgDgFgCQgEgCgEAAQgGABgEADg");
	this.shape_9.setTransform(36.5,22.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AANAiIgUgcIgJAKIAAASIgPAAIAAhDIAPAAIAAAhIAdghIASAAIgcAfIAdAkg");
	this.shape_10.setTransform(29.7,22.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgDAwIgJgDIgJgEIgHgGIgGgHIgEgIIgDgKIgCgKIACgJIADgJIAEgJIAGgHIAHgFIAJgFIAJgCIAJgBQAHAAAFACQAGABAFADQAFADADAEIAGAIIgNAHIgFgFIgGgFIgGgDIgHgBQgGAAgGADQgGACgFAFQgEAFgCAGQgDAGAAAGQAAAHADAHQACAGAEAEQAFAFAGACQAGADAGAAIAHgBIAGgDIAGgEIAFgGIANAHIgGAIIgIAHQgFADgGACQgFABgHAAIgJAAg");
	this.shape_11.setTransform(21,21);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#7BC43D","#5C9928"],[0,1],0,-25.2,0,25.3).s().p("ApTDaQhGAAAAhHIAAkmQAAhEBCgCISwAAQBBACAABEIAAEmQAABHhGAAg");
	this.shape_12.setTransform(66.6,21.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#330000").s().p("AAXAjIAAgtIgSAtIgIAAIgTgtIAAAtIgTAAIAAhFIAZAAIAQAoIARgoIAZAAIAABFg");
	this.shape_13.setTransform(114.8,21.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#330000").s().p("AghAjIAAhFIATAAIAAAYIAXAAQAGAAAEACQAFABAEAEQADADABADQACAEAAAFIgCAJIgFAHQgDADgFACQgEACgGAAgAgOAUIAVAAQADAAACgCQACgDAAgDQAAgEgCgCQgCgCgDAAIgVAAg");
	this.shape_14.setTransform(106.1,21.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#330000").s().p("AgjAVQAEAAADgGQACgDACgNIAFgiIA3AAIAABFIgSAAIAAg1IgVAAIgDATQgBAKgCAGQgCAGgEAFQgDAFgFABQgFADgHAAg");
	this.shape_15.setTransform(97.3,21.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#330000").s().p("AAOAjIAAgrIgcArIgSAAIAAhFIASAAIAAApIAcgpIATAAIAABFg");
	this.shape_16.setTransform(89.2,21.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#330000").s().p("AgIA+IAAgkQgEAFgFADQgEADgGAAQgGAAgEgCQgFgDgEgFQgEgEgCgHQgCgHAAgJQAAgHACgHQACgHAEgFQAEgFAFgCQAEgDAGAAQAGAAAEADQAFADAEAFIAAgkIARAAIAAAkQADgFAFgDQAFgDAGAAQAGAAAEADQAGACADAFQAEAFACAGQACAIAAAHQAAAJgCAHQgCAGgEAFQgDAFgGADQgEACgGAAQgGAAgEgDQgFgCgEgGIAAAkgAAPgRQgEACgCAEIAAAYQACADAEACQAEADADAAQADAAACgCIAFgEQACgDABgEIABgIIgBgHIgDgHIgFgEQgCgBgDAAQgDAAgEACgAgbgSIgEAEIgDAHIgBAHIABAJIADAGIAEAEQADACADAAQADAAAFgDQADgCACgDIAAgYQgCgEgDgCQgFgCgDAAQgDAAgDABg");
	this.shape_17.setTransform(78.9,21.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#330000").s().p("AggAjIAAhFIASAAIAAAYIAXAAQAGAAAFACQAEABAEAEQADADABADQABAEAAAFIgBAJIgFAHQgDADgEACQgFACgGAAgAgOAUIAUAAQAEAAACgCQACgDAAgDQAAgEgCgCQgCgCgEAAIgUAAg");
	this.shape_18.setTransform(65.4,21.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#330000").s().p("AgJAjIAAg1IgTAAIAAgQIA5AAIAAAQIgUAAIAAA1g");
	this.shape_19.setTransform(58.1,21.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#330000").s().p("AgQAkQgEgCgEgDQgDgDgCgFQgCgEgBgGQABgFACgFQACgDADgDIAIgEIAJgBQAHAAAFACQAGADADADIAAgJQABgFgFgDQgEgEgGAAQgGAAgFACQgFADgFADIgGgMQADgDALgFQAHgDAIAAQAGAAAFACQAHABADADQAFADACAFQACAGAAAGIAAAtIgSAAIAAgHQgEAEgFACQgFADgHAAQgFAAgEgBgAgJAGQgEADAAAFQAAAFAEADQAEACAFAAQAEAAAEgCQAEgBACgDIAAgIQgCgEgEgBQgEgBgEgBQgFABgEACg");
	this.shape_20.setTransform(50.7,21.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#330000").s().p("AAPAjIAAgaQgEACgFABQgGACgFgBQgIABgFgCQgEgBgEgEQgDgDgBgEQgCgDAAgFIAAgaIATAAIAAATIABAGIACAEQAEADAGAAQAGAAAJgDIAAgdIASAAIAABFg");
	this.shape_21.setTransform(42.9,21.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#330000").s().p("AgQAkQgEgCgEgDQgDgDgCgFQgDgEAAgGQAAgFADgFQACgDADgDIAIgEIAJgBQAHAAAFACQAGADAEADIAAgJQAAgFgFgDQgEgEgGAAQgGAAgFACQgFADgEADIgHgMQADgDALgFQAIgDAHAAQAGAAAGACQAFABAFADQAEADACAFQADAGAAAGIAAAtIgSAAIAAgHQgEAEgGACQgFADgHAAQgEAAgFgBgAgJAGQgDADAAAFQAAAFADADQAEACAFAAQAEAAAEgCQAEgBADgDIAAgIQgDgEgEgBQgEgBgEgBQgFABgEACg");
	this.shape_22.setTransform(34.7,21.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#330000").s().p("AALAjIgRgbIgJAJIAAASIgSAAIAAhFIASAAIAAAfIAagfIAXAAIgcAfIAcAmg");
	this.shape_23.setTransform(27.6,21.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#330000").s().p("AgEAxIgKgDIgJgEIgHgGIgGgHIgFgJIgDgJIgBgLIABgKIADgJIAFgJIAGgHIAHgGIAJgFIAKgCIAKgBQAHAAAHACQAGACAFADQAFADADAFIAHAIIgSAJQgDgGgGgEIgHgDIgGgBQgGAAgGACQgFADgFAEQgDAEgDAGQgCAGAAAGQAAAHACAGQADAFADAFQAFAEAFACQAGADAGAAIAGgBIAHgDQAGgEADgGIASAIIgHAJQgDAEgFAEQgFADgGACQgHACgHAAIgKgBg");
	this.shape_24.setTransform(18.4,20.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.lf(["#FF9A00","#FF6600"],[0,1],0,-20.2,0,20.3).s().p("AppDiQhJAAAAhJIAAkxQAAhHBFgCITcAAQBEACAABHIAAExQAABJhIAAg");
	this.shape_25.setTransform(66.7,21.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,133.3,43.6);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AqZKzIAA1lIUzAAIAAVlg");
	mask.setTransform(590.1,69.1);

	// kinopoisk.ru-Valerian-and-the-City-of-a-Thousand-Planets-2958200.jpg
	this.instance = new lib.valerian();
	this.instance.parent = this;
	this.instance.setTransform(522,-27,0.259,0.24);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(523.5,0,133.3,138.3), null);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AqZK0IAA1nIUzAAIAAVng");
	mask.setTransform(424.1,190.8);

	// 641780.jpg
	this.instance = new lib.tembash();
	this.instance.parent = this;
	this.instance.setTransform(351,82,0.219,0.219);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(357.5,121.6,133.3,138.3), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AqZKzIAA1lIUzAAIAAVlg");
	mask.setTransform(329.1,117.2);

	// 931677.jpg
	this.instance = new lib.Dunk();
	this.instance.parent = this;
	this.instance.setTransform(261,-8,0.201,0.201);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(262.5,48.1,133.3,138.3), null);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol6();
	this.instance.parent = this;
	this.instance.setTransform(66.7,69.1,1,1,0,0,0,590.1,69.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(49).to({regX:590.8,scaleX:0.05,x:66.6},7,cjs.Ease.quadInOut).to({regX:590.1,scaleX:1,x:66.7},8,cjs.Ease.quadInOut).wait(86));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.4,-27,135.4,181);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol4();
	this.instance.parent = this;
	this.instance.setTransform(66.7,69.1,1,1,0,0,0,329.1,117.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(74).to({regX:328.7,scaleX:0.06,x:66.6},7,cjs.Ease.quadInOut).to({regX:329.1,scaleX:1,x:66.7},8,cjs.Ease.quadInOut).wait(61));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.4,-56.1,135.8,201.2);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol5();
	this.instance.parent = this;
	this.instance.setTransform(66.4,69.7,1,1,0,0,0,423.8,191.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(24).to({regX:423.9,scaleX:0.07},7,cjs.Ease.quadInOut).to({regX:423.8,scaleX:1},8,cjs.Ease.quadInOut).wait(111));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.4,-39.6,145.6,218.7);


// stage content:
(lib.trans160600 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol13();
	this.instance.parent = this;
	this.instance.setTransform(-17.1,271.8,1,1,0,0,0,-30.6,63.5);

	this.instance_1 = new lib.Symbol12();
	this.instance_1.parent = this;
	this.instance_1.setTransform(48.4,53.6,1,1,0,0,0,34.9,44.5);

	this.instance_2 = new lib.Symbol11();
	this.instance_2.parent = this;
	this.instance_2.setTransform(27.1,475.4,1,1,0,0,0,13.6,69.8);

	this.instance_3 = new lib.Symbol7();
	this.instance_3.parent = this;
	this.instance_3.setTransform(80.1,569.7,1,1,0,0,0,66.6,21.8);
	new cjs.ButtonHelper(this.instance_3, 0, 1, 1);

	this.instance_4 = new lib.Symbol7();
	this.instance_4.parent = this;
	this.instance_4.setTransform(80.1,372.4,1,1,0,0,0,66.6,21.8);
	new cjs.ButtonHelper(this.instance_4, 0, 1, 1);

	this.instance_5 = new lib.Symbol7();
	this.instance_5.parent = this;
	this.instance_5.setTransform(80.1,174,1,1,0,0,0,66.6,21.8);
	new cjs.ButtonHelper(this.instance_5, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(87,253,145.7,639.3);
// library properties:
lib.properties = {
	id: '2AC37C6F54FE4A7B99AD7C45C2DE4B78',
	width: 160,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 0.00,
	webfonts: {},
	manifest: [
		{src:"images/Dunk.jpg", id:"Dunk"},
		{src:"images/tembash.jpg", id:"tembash"},
		{src:"images/valerian.jpg", id:"valerian"}
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
an.compositions['2AC37C6F54FE4A7B99AD7C45C2DE4B78'] = {
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