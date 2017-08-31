(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"getcar600_300_atlas_", frames: [[0,0,500,500],[0,502,300,29],[763,0,259,289],[502,291,259,289],[763,291,259,289],[502,0,259,289],[337,502,31,40],[370,502,35,35],[302,502,33,40]]}
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
	this.spriteSheet = ss["getcar600_300_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap5 = function() {
	this.spriteSheet = ss["getcar600_300_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.car1 = function() {
	this.spriteSheet = ss["getcar600_300_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.car2 = function() {
	this.spriteSheet = ss["getcar600_300_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.car3 = function() {
	this.spriteSheet = ss["getcar600_300_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.car4 = function() {
	this.spriteSheet = ss["getcar600_300_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Layer0 = function() {
	this.spriteSheet = ss["getcar600_300_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Layer1 = function() {
	this.spriteSheet = ss["getcar600_300_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Layer3 = function() {
	this.spriteSheet = ss["getcar600_300_atlas_"];
	this.gotoAndStop(8);
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


(lib.Symbol24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.back();
	this.instance.parent = this;
	this.instance.setTransform(-238,476,0.476,0.476);

	this.instance_1 = new lib.back();
	this.instance_1.parent = this;
	this.instance_1.setTransform(476,476,0.476,0.476);

	this.instance_2 = new lib.back();
	this.instance_2.parent = this;
	this.instance_2.setTransform(238,476,0.476,0.476);

	this.instance_3 = new lib.back();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0,476,0.476,0.476);

	this.instance_4 = new lib.back();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-238,238,0.476,0.476);

	this.instance_5 = new lib.back();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-238,0,0.476,0.476);

	this.instance_6 = new lib.back();
	this.instance_6.parent = this;
	this.instance_6.setTransform(476,238,0.476,0.476);

	this.instance_7 = new lib.back();
	this.instance_7.parent = this;
	this.instance_7.setTransform(476,0,0.476,0.476);

	this.instance_8 = new lib.back();
	this.instance_8.parent = this;
	this.instance_8.setTransform(238,238,0.476,0.476);

	this.instance_9 = new lib.back();
	this.instance_9.parent = this;
	this.instance_9.setTransform(0,238,0.476,0.476);

	this.instance_10 = new lib.back();
	this.instance_10.parent = this;
	this.instance_10.setTransform(238,0,0.476,0.476);

	this.instance_11 = new lib.back();
	this.instance_11.parent = this;
	this.instance_11.setTransform(0,0,0.476,0.476);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol24, new cjs.Rectangle(-238,0,952,714), null);


(lib.Symbol22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AgaAhQgHgHAAgKQAAgLAJgFQAIgGAQAAIAKAAIAAgFQAAgGgCgDQgDgDgFAAQgEAAgDADQgDACAAAEIgTAAIAAgBQgBgIAJgIQAJgGAMAAQAOAAAIAGQAJAHgBANIAAAdIABAKIADAJIgUAAIgCgGIgBgFQgEAGgFADQgEAEgGgBQgMAAgGgFgAgJAIQgDADgBAFQAAADADACQACACAEABQAFAAAEgDQAEgDABgDIAAgLIgKAAQgGABgDADg");
	this.shape.setTransform(149.8,48.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AAMAlIAAgcIgXAAIAAAcIgUAAIAAhJIAUAAIAAAeIAXAAIAAgeIAUAAIAABJg");
	this.shape_1.setTransform(142.1,48.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AgYAcQgKgKAAgRIAAgBQAAgQAKgKQAIgLAQAAQARAAAIAKQAKALAAAQIAAABQAAARgKAKQgIAKgRAAQgQAAgIgKgAgLgQQgDAHAAAJIAAABQAAAKADAGQAEAGAHAAQAIAAAEgGQADgGAAgKIAAgBQAAgJgDgHQgEgGgIAAQgHAAgEAGg");
	this.shape_2.setTransform(134.2,48.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AgYAlIAAhJIAxAAIAAAQIgdAAIAAA5g");
	this.shape_3.setTransform(127.7,48.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AgXAzIgFgBIACgOIACAAIACAAQAFAAACgCQADgCACgEIACgGIgahJIAVAAIANArIAAAEIAAAAIAOgvIAVAAIgeBUQgDAIgEAGQgGAFgKAAg");
	this.shape_4.setTransform(120.9,49.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AANAlIAAgsIgBAAIgXAsIgUAAIAAhJIAUAAIAAAsIAYgsIATAAIAABJg");
	this.shape_5.setTransform(109.9,48.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("AgaAhQgHgHABgKQAAgLAIgFQAIgGAQAAIALAAIAAgFQAAgGgDgDQgDgDgFAAQgEAAgDADQgDACAAAEIgTAAIAAgBQgBgIAJgIQAIgGAOAAQANAAAIAGQAIAHAAANIAAAdIABAKIACAJIgTAAIgCgGIgBgFQgEAGgEADQgEAEgHgBQgMAAgGgFgAgJAIQgEADAAAFQABADACACQACACAEABQAEAAAFgDQAEgDACgDIAAgLIgLAAQgGABgDADg");
	this.shape_6.setTransform(98.8,48.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("AgYAlIAAhJIAxAAIAAAQIgdAAIAAA5g");
	this.shape_7.setTransform(92.5,48.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("AgYAcQgKgKAAgRIAAgBQAAgQAKgKQAJgLAPAAQAQAAAKAKQAJALAAAQIAAABQAAARgJAKQgKAKgQAAQgPAAgJgKgAgLgQQgDAHAAAJIAAABQAAAKADAGQAEAGAHAAQAIAAAEgGQADgGAAgKIAAgBQAAgJgDgHQgEgGgIAAQgHAAgEAGg");
	this.shape_8.setTransform(85.3,48.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#333333").s().p("AAQAlIAAg5IgRAAIAAAPQAAAVgHALQgHAKgQAAIgDAAIAAgQIACAAQAHAAACgFQACgGAAgPIAAgfIA4AAIAABJg");
	this.shape_9.setTransform(77.1,48.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#333333").s().p("AgaAhQgHgHAAgKQAAgLAJgFQAIgGAQAAIAKAAIAAgFQAAgGgCgDQgDgDgFAAQgEAAgDADQgDACAAAEIgTAAIAAgBQgBgIAJgIQAJgGANAAQANAAAIAGQAJAHgBANIAAAdIABAKIADAJIgUAAIgCgGIgBgFQgEAGgFADQgEAEgGgBQgMAAgGgFgAgJAIQgDADgBAFQAAADADACQACACAEABQAFAAAEgDQAEgDABgDIAAgLIgKAAQgGABgDADg");
	this.shape_10.setTransform(69.7,48.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#333333").s().p("AgXAhQgJgHAAgKIABgBIASAAQABAEADACQAEADAFAAQAGAAAEgDQADgDAAgDQAAgFgDgCQgEgCgGAAIgLAAIAAgMIALAAQAFAAADgCQAEgCAAgFQgBgDgCgCQgDgDgGAAQgEAAgEADQgDACgBADIgSAAIAAAAQgBgKAJgGQAJgHANABQAOAAAIAFQAKAGgBAKQABAFgDAEQgEAEgGADQAHABAEAFQADAEAAAGQAAAKgKAHQgJAFgOAAQgNAAgKgFg");
	this.shape_11.setTransform(62.1,48.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#333333").s().p("AgLATIAEgVIAAgQIATAAIAAAQIgLAVg");
	this.shape_12.setTransform(52.8,52);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#333333").s().p("AgbAhQgFgHgBgKQAAgLAJgFQAIgGAQAAIAKAAIAAgFQAAgGgDgDQgCgDgFAAQgEAAgDADQgDACAAAEIgTAAIAAgBQAAgIAIgIQAJgGAMAAQAOAAAIAGQAJAHAAANIAAAdIAAAKIADAJIgUAAIgCgGIgBgFQgDAGgGADQgDAEgIgBQgLAAgHgFgAgKAIQgCADAAAFQAAADACACQACACAFABQAEAAAEgDQAEgDABgDIAAgLIgKAAQgGABgEADg");
	this.shape_13.setTransform(47.4,48.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#333333").s().p("AgKAlIAAg5IgWAAIAAgQIBBAAIAAAQIgXAAIAAA5g");
	this.shape_14.setTransform(40.1,48.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#333333").s().p("AgWAcQgJgKAAgRIAAgBQAAgQAJgKQAJgLAPAAQAOAAAIAIQAIAHAAANIAAABIgSAAQAAgGgDgEQgDgEgGAAQgHAAgDAGQgDAHAAAJIAAABQAAAKADAGQADAGAHAAQAGAAADgDQADgDAAgGIASAAIAAABQAAALgIAIQgJAHgNAAQgPAAgJgKg");
	this.shape_15.setTransform(32.8,48.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#333333").s().p("AgWAcQgJgKAAgQIAAgCQAAgQAJgLQAJgKAPAAQAPAAAIAJQAHAJAAAPIAAAKIgrAAIAAAAQABAIAEAFQAEAEAHAAIAMgBIAJgEIAGAMQgFADgHADQgIADgJgBQgQABgJgLgAgHgSQgDAFgBAGIABAAIAXAAIAAgBQAAgGgDgEQgCgEgGAAQgFAAgEAEg");
	this.shape_16.setTransform(25.5,48.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#333333").s().p("AghA0IAAhmIASAAIACAJQADgFAEgCQAGgDAFAAQANAAAIALQAIALAAARIAAACQAAAPgIAKQgIAKgNAAQgFAAgFgCQgEgCgDgEIAAAjgAgIgiQgCACgCAEIAAAfQACADACACQAEABAEAAQAGAAAEgFQAEgFAAgJIAAgCQAAgKgEgHQgEgGgGAAQgEAAgEABg");
	this.shape_17.setTransform(18.1,49.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#333333").s().p("AgaAhQgHgHAAgKQAAgLAJgFQAIgGAQAAIALAAIAAgFQgBgGgCgDQgDgDgFAAQgEAAgDADQgDACAAAEIgTAAIAAgBQgBgIAJgIQAJgGANAAQANAAAIAGQAIAHAAANIAAAdIABAKIADAJIgUAAIgCgGIgBgFQgEAGgFADQgEAEgGgBQgMAAgGgFgAgJAIQgEADAAAFQAAADADACQACACAEABQAFAAAEgDQAEgDACgDIAAgLIgLAAQgGABgDADg");
	this.shape_18.setTransform(10.2,48.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#333333").s().p("AgJAlIAAg6IgYAAIAAgPIBDAAIAAAPIgZAAIAAA6g");
	this.shape_19.setTransform(149.1,29.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#333333").s().p("AgWAdQgJgLAAgQIAAgCQAAgQAJgLQAJgLAPAAQAPAAAIAKQAHAJAAAQIAAAIIgrAAIAAABQABAHAEAGQAEAEAHAAIAMgBIAJgFIAGANQgFAEgHACQgIACgJABQgQgBgJgJgAgHgSQgDAFgBAGIABABIAXAAIAAgCQAAgGgDgEQgCgEgGAAQgFAAgEAEg");
	this.shape_20.setTransform(141.8,29.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#333333").s().p("AAYAlIAAgrIAAAAIgRArIgNAAIgRgqIAAAAIAAAqIgUAAIAAhJIAZAAIASAyIAAAAIATgyIAZAAIAABJg");
	this.shape_21.setTransform(132.8,29.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#333333").s().p("AAWAxIAAgYIgrAAIAAAYIgUAAIAAgoIAFAAIACAAQAFAAADgGQABgGABgPIACgeIA2AAIAAA5IAKAAIAAAogAgDgSIgDAQQAAAGgDAFIAVAAIAAgpIgPAAg");
	this.shape_22.setTransform(122.9,30.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#333333").s().p("AgWAdQgJgLAAgQIAAgCQAAgQAJgLQAJgLAPAAQAPAAAIAKQAHAJAAAQIAAAIIgrAAIAAABQABAHAEAGQAEAEAHAAIAMgBIAJgFIAGANQgFAEgHACQgIACgJABQgQgBgJgJgAgHgSQgDAFgBAGIABABIAXAAIAAgCQAAgGgDgEQgCgEgGAAQgFAAgEAEg");
	this.shape_23.setTransform(114.6,29.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#333333").s().p("AggA0IAAhlIASAAIABAJQADgFAFgDQAFgDAEAAQAOAAAIALQAHAKAAASIAAABQAAAQgHAKQgIAKgOAAQgEAAgEgCQgFgDgDgEIAAAkgAgHghQgEACgBADIAAAfQABAEAEABQADACAEAAQAHAAADgGQADgEAAgLIAAgBQAAgLgDgGQgDgHgHAAQgEABgDACg");
	this.shape_24.setTransform(107.1,31.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#333333").s().p("AAMAlIAAg6IgXAAIAAA6IgUAAIAAhJIA/AAIAABJg");
	this.shape_25.setTransform(99.1,29.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#333333").s().p("AgbAgQgFgFgBgLQAAgKAJgGQAIgFAQAAIAKAAIAAgHQAAgFgCgDQgDgDgFAAQgEAAgDACQgDADAAAEIgTAAIAAAAQAAgJAIgIQAJgHAMAAQAOAAAIAHQAJAHAAAMIAAAeIAAAKIADAJIgUAAIgCgGIgBgFQgDAFgGAEQgDADgIABQgLAAgHgHgAgKAHQgCAEAAAEQAAAEACADQACABAFAAQAEABAEgDQAEgDABgDIAAgLIgKAAQgGAAgEADg");
	this.shape_26.setTransform(87.9,29.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#333333").s().p("AAMAlIAAgdIgXAAIAAAdIgUAAIAAhJIAUAAIAAAeIAXAAIAAgeIAUAAIAABJg");
	this.shape_27.setTransform(80.2,29.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#333333").s().p("AgLATIAFgVIAAgQIASAAIAAAQIgLAVg");
	this.shape_28.setTransform(70.9,33.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FF2A2C").s().p("AgXA0IgFgBIACgQIACABIACAAQAFAAACgCQADgCACgFIACgFIgahJIAVAAIANArIAAAEIAAAAIAOgvIAVAAIgeBUQgDAIgEAFQgGAGgKAAg");
	this.shape_29.setTransform(65.6,31.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FF2A2C").s().p("AAIAlIgOgbIgIAAIAAAbIgUAAIAAhJIAUAAIAAAcIAFAAIAQgcIAaAAIgZAiIAbAng");
	this.shape_30.setTransform(58.5,29.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FF2A2C").s().p("AggA0IAAhlIASAAIABAJQADgFAFgDQAEgDAGAAQANAAAIALQAHAKAAASIAAABQAAAQgHAKQgIAKgNAAQgFAAgEgCQgFgDgDgEIAAAkgAgIghQgDACgBADIAAAfQABAEADABQAEACAEAAQAHAAADgGQADgEABgLIAAgBQgBgLgDgGQgDgHgHAAQgEABgEACg");
	this.shape_31.setTransform(50.3,31.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FF2A2C").s().p("AgWAdQgJgLAAgQIAAgCQAAgQAJgLQAJgLAPAAQAPAAAIAKQAHAJAAAQIAAAIIgrAAIAAABQABAHAEAGQAEAEAHAAIAMgBIAJgFIAGANQgFAEgHACQgIACgJABQgQgBgJgJgAgHgSQgDAFgBAGIABABIAXAAIAAgCQAAgGgDgEQgCgEgGAAQgFAAgEAEg");
	this.shape_32.setTransform(42.6,29.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FF2A2C").s().p("AggAlIAAhJIAfAAQAOAAAIAFQAJAGgBAKQABAFgEAEQgDAEgHACQAIABAFAEQAEAFAAAGQAAALgHAEQgJAGgOAAgAgMAWIAPAAQAFAAACgCQADgCAAgEQAAgEgCgCQgDgCgFAAIgPAAgAgMgGIAMAAQAEAAADgBQADgDgBgDQAAgEgCgCQgDgBgFgBIgLAAg");
	this.shape_33.setTransform(35.2,29.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FF2A2C").s().p("AgZAcQgJgLAAgQIAAgBQAAgQAJgLQAJgKAQgBQAQAAAKALQAJALAAAQIAAABQAAAQgJALQgKALgQAAQgQAAgJgLgAgKgPQgEAGAAAJIAAABQAAAKAEAGQADAGAHAAQAHAAAEgGQAEgGAAgKIAAgBQAAgJgEgGQgEgHgHAAQgHAAgDAHg");
	this.shape_34.setTransform(27.1,29.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FF2A2C").s().p("AghA0IAAhlIASAAIACAJQADgFAEgDQAGgDAEAAQAOAAAIALQAIAKAAASIAAABQAAAQgIAKQgIAKgOAAQgEAAgFgCQgEgDgEgEIAAAkgAgIghQgCACgDADIAAAfQADAEACABQAEACAEAAQAGAAAEgGQADgEAAgLIAAgBQAAgLgDgGQgEgHgGAAQgEABgEACg");
	this.shape_35.setTransform(19.3,31.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FF2A2C").s().p("AAMAlIAAg6IgXAAIAAA6IgUAAIAAhJIA/AAIAABJg");
	this.shape_36.setTransform(11.3,29.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FF2A2C").s().p("AgIAeQgJgJgCgOIgKAAIAAAeIgUAAIAAhJIAUAAIAAAcIAKAAQADgNAIgIQAIgIAPAAQAQAAAKAKQAJALAAAQIAAABQAAAQgJALQgKAKgQAAQgPABgIgJgAAEgQQgEAHAAAJIAAABQAAAKAEAGQADAGAIAAQAIAAADgGQAEgGAAgKIAAgBQAAgJgEgHQgDgGgIAAQgIAAgDAGg");
	this.shape_37.setTransform(150.7,11.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FF2A2C").s().p("AgXAzIgFgBIACgOIACAAIACAAQAFAAACgCQADgCACgEIACgGIgahJIAVAAIANArIAAAEIAAAAIAOgvIAVAAIgeBUQgDAIgEAGQgGAFgKAAg");
	this.shape_38.setTransform(141.2,12.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FF2A2C").s().p("AAMAlIAAgdIgXAAIAAAdIgUAAIAAhJIAUAAIAAAeIAXAAIAAgeIAUAAIAABJg");
	this.shape_39.setTransform(133.7,11.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FF2A2C").s().p("AAQAlIAAg5IgRAAIAAAPQAAAVgHAKQgHALgQAAIgDAAIAAgQIACAAQAHAAACgFQACgGAAgPIAAgfIA4AAIAABJg");
	this.shape_40.setTransform(125.5,11.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FF2A2C").s().p("AgYAcQgKgLAAgQIAAgBQAAgQAKgKQAIgMAQABQARAAAIAKQAKALAAAQIAAABQAAAQgKALQgIAKgRAAQgQAAgIgKgAgLgQQgDAHAAAJIAAABQAAAKADAGQAEAGAHAAQAHAAAFgGQADgGAAgKIAAgBQAAgJgDgHQgFgGgHAAQgHAAgEAGg");
	this.shape_41.setTransform(117.9,11.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FF2A2C").s().p("AAMAlIAAg5IgXAAIAAA5IgUAAIAAhJIA/AAIAABJg");
	this.shape_42.setTransform(110,11.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#333333").s().p("AgKAlIAAg5IgWAAIAAgQIBBAAIAAAQIgXAAIAAA5g");
	this.shape_43.setTransform(99,11.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#333333").s().p("AANAlIAAgsIgBAAIgXAsIgUAAIAAhJIAUAAIAAAsIAYgsIATAAIAABJg");
	this.shape_44.setTransform(91.4,11.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#333333").s().p("AAWAxIAAgYIgrAAIAAAYIgUAAIAAgoIAEAAIADAAQAFAAACgGQADgGABgPIABgeIA1AAIAAA5IALAAIAAAogAgEgSIgBAQQgBAGgDAFIAVAAIAAgpIgPAAg");
	this.shape_45.setTransform(82.8,12.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#333333").s().p("AgYAcQgKgLAAgQIAAgBQAAgQAKgKQAIgMAQABQARAAAIAKQAKALAAAQIAAABQAAAQgKALQgIAKgRAAQgQAAgIgKgAgLgQQgDAHAAAJIAAABQAAAKADAGQAEAGAHAAQAHAAAFgGQADgGAAgKIAAgBQAAgJgDgHQgFgGgHAAQgHAAgEAGg");
	this.shape_46.setTransform(74.2,11.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#333333").s().p("AAMAlIgMgZIgLAZIgXAAIAYglIgXgkIAXAAIAKAYIAAAAIALgYIAXAAIgXAkIAYAlg");
	this.shape_47.setTransform(66.7,11.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#333333").s().p("AgZAcQgJgLAAgQIAAgBQAAgQAJgKQAJgMAQABQAQAAAJAKQAKALAAAQIAAABQAAAQgKALQgJAKgQAAQgQAAgJgKgAgKgQQgEAHAAAJIAAABQAAAKAEAGQADAGAHAAQAHAAAEgGQAEgGAAgKIAAgBQAAgJgEgHQgEgGgHAAQgHAAgDAGg");
	this.shape_48.setTransform(59.1,11.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#333333").s().p("AghA0IAAhmIASAAIACAJQADgFAEgCQAGgDAFAAQANAAAIALQAIALAAARIAAACQAAAPgIAKQgIAKgNAAQgFAAgFgCQgEgDgDgDIAAAjgAgIgiQgCACgCAEIAAAfQACADACACQAEACAEgBQAGAAAEgFQAEgEAAgKIAAgCQAAgKgEgHQgEgGgGgBQgEAAgEACg");
	this.shape_49.setTransform(51.4,12.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#333333").s().p("AAMAlIAAg5IgXAAIAAA5IgUAAIAAhJIA/AAIAABJg");
	this.shape_50.setTransform(43.3,11.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#333333").s().p("AgYAcQgKgLAAgQIAAgBQAAgQAKgKQAIgMAQABQARAAAIAKQAKALAAAQIAAABQAAAQgKALQgIAKgRAAQgQAAgIgKgAgLgQQgDAHAAAJIAAABQAAAKADAGQAEAGAHAAQAHAAAFgGQADgGAAgKIAAgBQAAgJgDgHQgFgGgHAAQgHAAgEAGg");
	this.shape_51.setTransform(32,11.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#333333").s().p("AgKAlIAAg5IgWAAIAAgQIBBAAIAAAQIgXAAIAAA5g");
	this.shape_52.setTransform(24.4,11.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#333333").s().p("AggAlIAAhJIAfAAQAOAAAIAFQAIAFAAAKQAAAGgDAEQgDAEgHACQAIABAFAFQAEAEAAAGQAAAKgHAGQgJAFgOAAgAgMAWIAPAAQAFAAADgCQACgCAAgEQAAgDgCgDQgDgCgFAAIgPAAgAgMgGIAMAAQAEAAADgCQACgCABgDQAAgEgDgCQgDgBgFAAIgLAAg");
	this.shape_53.setTransform(17,11.3);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#333333").s().p("AAXAyIgHgWIgfAAIgHAWIgVAAIAihjIATAAIAiBjgAALANIgLgiIgKAiIAVAAg");
	this.shape_54.setTransform(8.4,10);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol22, new cjs.Rectangle(0,0,160,57.2), null);


(lib.Symbol21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AAYAlIAAgrIgBAAIgRArIgMAAIgRgrIAAABIAAAqIgUAAIAAhJIAYAAIATAyIAAAAIATgyIAZAAIAABJg");
	this.shape.setTransform(128.7,48.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AgaAhQgHgHAAgKQAAgLAJgFQAIgGAQAAIAKAAIAAgFQAAgGgCgDQgDgDgFAAQgEAAgDADQgDACAAAEIgTAAIAAgBQgBgIAJgIQAJgGAMAAQAOAAAIAGQAJAHgBANIAAAdIABAKIADAJIgUAAIgCgGIgBgFQgEAGgFADQgEAEgGgBQgMAAgGgFgAgJAIQgDADgBAFQAAADADACQACACAEABQAFAAAEgDQAEgDABgDIAAgLIgKAAQgGABgDADg");
	this.shape_1.setTransform(119.7,48.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AgKAlIAAg5IgWAAIAAgQIBCAAIAAAQIgZAAIAAA5g");
	this.shape_2.setTransform(112.3,48.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AAJAlIgPgcIgIAAIAAAcIgUAAIAAhJIAUAAIAAAcIAGAAIAQgcIAZAAIgYAjIAaAmg");
	this.shape_3.setTransform(105.1,48.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AAMAlIAAgcIgXAAIAAAcIgUAAIAAhJIAUAAIAAAeIAXAAIAAgeIAUAAIAABJg");
	this.shape_4.setTransform(96.7,48.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AgXAzIgFgBIACgOIACAAIACAAQAFAAACgCQADgCACgEIACgGIgahJIAVAAIANArIAAAEIAAAAIAOgvIAVAAIgeBUQgDAIgEAGQgGAFgKAAg");
	this.shape_5.setTransform(89.2,49.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("AAMAlIAAg5IgXAAIAAA5IgUAAIAAhJIA/AAIAABJg");
	this.shape_6.setTransform(81.7,48.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("AgYApQgJgKAAgRIAAgbQAAgRAJgKQAKgKAOAAQAPAAAJAKQAKAKAAARIAAAbQAAARgKAKQgJAKgPAAQgOAAgKgKgAgJgeQgEAGAAAJIAAAfQAAAJAEAGQADAFAGAAQAHAAADgFQAEgGAAgJIAAgfQAAgJgEgGQgEgFgGAAQgGAAgDAFg");
	this.shape_7.setTransform(70.3,46.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("AgXArQgJgHAAgNIAAAAIATgBQAAAGAEADQAEAEAFAAQAHAAADgEQAEgFAAgJQAAgJgEgFQgEgDgGgBQgFABgDABQgDACgCADIgRgBIAFg3IA3AAIAAARIgmAAIgDAWQADgCAEAAQAEgCAEAAQAOgBAIAKQAHAHAAAQQAAAOgIAKQgIAJgRAAQgNAAgKgHg");
	this.shape_8.setTransform(62.3,46.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#333333").s().p("AgfAzIAAgOIAfgjIAIgMQADgGAAgEQAAgGgDgFQgDgDgFAAQgHAAgDAFQgEAEAAAIIgTAAIAAgBQgBgNAKgJQAJgKAPAAQAOABAJAHQAIAIAAAOQAAAIgEAHQgFAHgMANIgPAUIAoAAIAAAQg");
	this.shape_9.setTransform(54.3,46.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#333333").s().p("AgYAcQgKgKAAgRIAAgBQAAgQAKgKQAIgLAQAAQARAAAIAKQAKALAAAQIAAABQAAARgKAKQgIAKgRAAQgQAAgIgKgAgLgQQgDAHAAAJIAAABQAAAKADAGQAEAGAHAAQAIAAAEgGQADgGAAgKIAAgBQAAgJgDgHQgEgGgIAAQgHAAgEAGg");
	this.shape_10.setTransform(42.9,48.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#333333").s().p("AAMAlIAAg5IgXAAIAAA5IgUAAIAAhJIA/AAIAABJg");
	this.shape_11.setTransform(35,48.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF2A2C").s().p("AAMAlIAAgsIAAAAIgXAsIgUAAIAAhJIAUAAIAAAsIAXgsIAUAAIAABJg");
	this.shape_12.setTransform(155.2,29.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF2A2C").s().p("AAQAlIAAg6IgRAAIAAARQAAAVgHAJQgHALgQAAIgDAAIAAgPIACgBQAHAAACgGQACgFAAgOIAAggIA4AAIAABJg");
	this.shape_13.setTransform(147,29.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF2A2C").s().p("AAMAlIAAgsIAAAAIgXAsIgUAAIAAhJIAUAAIAAAsIAXgsIAUAAIAABJg");
	this.shape_14.setTransform(139.5,29.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF2A2C").s().p("AgZArQgJgKAAgRIAAgBIAAgBIAAAAIAAgQQAAgWAJgKQAIgKARgBQAJAAAEgCQAEgCAAgEIAQAAIAAAAQAAANgIAFQgHAGgRAAQgJAAgFAEQgFAFAAAHIAAAAQAEgEAFgCQAGgDAFAAQAPAAAJALQAJAKAAAQIAAABQAAARgJAKQgKALgQAAQgPAAgKgLgAgKAAQgEAFAAAKIAAABQAAAKAEAHQADAFAHABQAIgBAEgFQADgHAAgKIAAgBQAAgKgEgFQgDgHgIAAQgHAAgDAHg");
	this.shape_15.setTransform(131.6,28.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FF2A2C").s().p("AgYAcQgKgLAAgQIAAgBQAAgQAKgLQAIgKAQgBQARAAAIALQAKALAAAQIAAABQAAAQgKALQgIALgRAAQgQAAgIgLgAgLgPQgDAGAAAJIAAABQAAAKADAGQAEAGAHAAQAHAAAFgGQADgGAAgKIAAgBQAAgJgDgGQgFgHgHAAQgHAAgEAHg");
	this.shape_16.setTransform(123.8,29.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FF2A2C").s().p("AAYAlIAAgrIgBAAIgRArIgMAAIgRgqIAAAAIAAAqIgUAAIAAhJIAZAAIASAyIAAAAIATgyIAZAAIAABJg");
	this.shape_17.setTransform(114.5,29.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FF2A2C").s().p("AgZAcQgJgLAAgQIAAgBQAAgQAJgLQAKgKAPgBQARAAAJALQAJALAAAQIAAABQAAAQgJALQgJALgRAAQgPAAgKgLgAgKgPQgEAGAAAJIAAABQAAAKAEAGQADAGAHAAQAIAAADgGQAEgGAAgKIAAgBQAAgJgEgGQgDgHgIAAQgHAAgDAHg");
	this.shape_18.setTransform(105.3,29.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FF2A2C").s().p("AgJAlIAAg6IgYAAIAAgPIBDAAIAAAPIgZAAIAAA6g");
	this.shape_19.setTransform(97.7,29.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FF2A2C").s().p("AggAlIAAhJIAfAAQAOAAAIAFQAJAGAAAKQAAAFgEAEQgEAEgGACQAIABAFAEQAEAFAAAGQAAALgIAEQgHAGgPAAgAgMAWIAPAAQAFAAACgCQADgCAAgEQAAgEgCgCQgCgCgGAAIgPAAgAgMgGIALAAQAFAAADgBQACgDAAgDQAAgEgCgCQgDgBgFgBIgLAAg");
	this.shape_20.setTransform(90.3,29.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FF2A2C").s().p("AgbAgQgFgFAAgLQAAgKAIgGQAIgFAQAAIALAAIAAgHQAAgFgEgDQgCgDgFAAQgFAAgCACQgDADAAAEIgTAAIAAAAQAAgJAIgIQAIgHAOAAQANAAAIAHQAJAHAAAMIAAAeIAAAKIACAJIgTAAIgCgGIgBgFQgEAFgEAEQgFADgHABQgLAAgHgHgAgKAHQgCAEAAAEQAAAEACADQACABAFAAQADABAFgDQAEgDACgDIAAgLIgLAAQgGAAgEADg");
	this.shape_21.setTransform(82.4,29.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FF2A2C").s().p("AgKAlIAAg6IgWAAIAAgPIBBAAIAAAPIgXAAIAAA6g");
	this.shape_22.setTransform(71.6,29.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FF2A2C").s().p("AgWAdQgJgLAAgQIAAgCQAAgQAJgLQAJgLAPAAQAPAAAIAKQAHAJAAAQIAAAIIgrAAIAAABQABAHAEAGQAEAEAHAAIAMgBIAJgFIAGANQgFAEgHACQgIACgJABQgQgBgJgJgAgHgSQgDAFgBAGIABABIAXAAIAAgCQAAgGgDgEQgCgEgGAAQgFAAgEAEg");
	this.shape_23.setTransform(64.2,29.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FF2A2C").s().p("AANAlIAAgaIgMAAIgNAaIgUAAIAQgdQgHgDgDgFQgEgEAAgIQAAgKAJgHQAIgHAOAAIAgAAIAABJgAgHgSQgDADAAAEQAAAEADADQADADAEgBIANAAIAAgTIgMAAQgFAAgDADg");
	this.shape_24.setTransform(56.3,29.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FF2A2C").s().p("AggA0IAAhlIASAAIABAJQADgFAFgDQAEgDAGAAQANAAAIALQAHAKABASIAAABQgBAQgHAKQgIAKgNAAQgFAAgEgCQgFgDgDgEIAAAkgAgIghQgCACgCADIAAAfQACAEACABQAEACAEAAQAHAAADgGQADgEABgLIAAgBQgBgLgDgGQgDgHgHAAQgEABgEACg");
	this.shape_25.setTransform(48.9,31.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FF2A2C").s().p("AgWAdQgJgLAAgQIAAgCQAAgQAJgLQAJgLAPAAQAPAAAIAKQAHAJAAAQIAAAIIgrAAIAAABQABAHAEAGQAEAEAHAAIAMgBIAJgFIAGANQgFAEgHACQgIACgJABQgQgBgJgJgAgHgSQgDAFgBAGIABABIAXAAIAAgCQAAgGgDgEQgCgEgGAAQgFAAgEAEg");
	this.shape_26.setTransform(41.1,29.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FF2A2C").s().p("AggAlIAAhJIAfAAQAOAAAIAFQAIAGAAAKQABAFgEAEQgDAEgHACQAIABAFAEQAEAFAAAGQAAALgHAEQgJAGgOAAgAgMAWIAPAAQAFAAACgCQADgCAAgEQAAgEgCgCQgDgCgFAAIgPAAgAgMgGIAMAAQAEAAADgBQACgDAAgDQAAgEgCgCQgDgBgFgBIgLAAg");
	this.shape_27.setTransform(33.7,29.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FF2A2C").s().p("AgZAcQgJgLAAgQIAAgBQAAgQAJgLQAKgKAPgBQARAAAJALQAJALAAAQIAAABQAAAQgJALQgJALgRAAQgPAAgKgLgAgKgPQgEAGAAAJIAAABQAAAKAEAGQADAGAHAAQAIAAADgGQAEgGAAgKIAAgBQAAgJgEgGQgDgHgIAAQgHAAgDAHg");
	this.shape_28.setTransform(25.6,29.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FF2A2C").s().p("AghA0IAAhlIASAAIACAJQADgFAEgDQAFgDAFAAQAOAAAIALQAIAKAAASIAAABQAAAQgIAKQgIAKgOAAQgEAAgFgCQgEgDgEgEIAAAkgAgHghQgEACgCADIAAAfQACAEAEABQADACAEAAQAGAAAEgGQAEgEgBgLIAAgBQABgLgEgGQgEgHgGAAQgEABgDACg");
	this.shape_29.setTransform(17.9,31.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FF2A2C").s().p("AAMAlIAAg6IgXAAIAAA6IgUAAIAAhJIA/AAIAABJg");
	this.shape_30.setTransform(9.8,29.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#333333").s().p("AAaASIAAgSIAAAAIgHASIgFAAIgIgTIAAAAIAAATIgIAAIAAgkIAKAAIAIAYIAAAAIAIgYIALAAIAAAkgAgaASIAAgcIgIAAIAAgIIAbAAIAAAIIgJAAIAAAcg");
	this.shape_31.setTransform(108.1,6.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#333333").s().p("AASAyQgDgCgBgFIgBgKIAAgHQAAgIgEgEQgEgEgGAAIgQAAIAAAoIgUAAIAAhjIAiAAQAQAAAKAIQAKAIAAAOQAAAHgEAGQgFAFgHADQAIACAEAHQAEAGAAAJIAAAHIABAJQABAEADACIAAACgAgRgEIAOAAQAHAAAFgEQAEgEAAgGQAAgHgEgEQgFgEgHAAIgOAAg");
	this.shape_32.setTransform(99.8,10);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#333333").s().p("AAXAyIgHgWIgfAAIgHAWIgVAAIAihjIATAAIAiBjgAALANIgLgiIgKAiIAVAAg");
	this.shape_33.setTransform(90.6,10);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#333333").s().p("AgbAoQgLgMAAgSIAAgTQAAgSALgMQAKgLARAAQASAAAKAJQALAJgBAQIAAAAIgTAAQAAgJgFgFQgEgFgKAAQgIAAgFAHQgFAIAAALIAAATQAAALAFAIQAGAHAIAAQAJAAAEgFQAFgEAAgKIATAAIAAAAQAAAQgKAJQgJAJgSAAQgRAAgLgLg");
	this.shape_34.setTransform(81.8,10);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#333333").s().p("AgJAyIAAhTIgcAAIAAgQIBLAAIAAAQIgcAAIAABTg");
	this.shape_35.setTransform(73.3,10);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#333333").s().p("AgfAyIAAhjIA/AAIAAAQIgrAAIAAAZIAkAAIAAAOIgkAAIAAAcIArAAIAAAQg");
	this.shape_36.setTransform(65.6,10);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#333333").s().p("AgbAoQgLgMAAgSIAAgTQAAgSALgMQALgLAQAAQATAAAJAIQAKAJAAAPIgBAAIgSAAQAAgIgFgEQgEgFgJAAQgIAAgGAHQgGAHAAALIAAAUQAAAMAGAHQAGAHAJAAQAHAAAEgCQAEgBACgCIAAgTIgTAAIAAgNIAnAAIAAAlQgEAGgKAFQgJAEgOAAQgSAAgLgLg");
	this.shape_37.setTransform(56.8,10);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol21, new cjs.Rectangle(0,0,165,57.2), null);


(lib.Symbol20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF2A2C").s().p("AggAlIAAhJIAfAAQAOAAAIAFQAJAFAAAKQAAAGgEAEQgDAEgHACQAIAAAFAGQAEAEAAAGQAAALgIAEQgHAGgPAAgAgMAWIAPAAQAFAAADgCQACgCAAgEQAAgDgCgDQgCgCgGAAIgPAAgAgMgGIALAAQAFAAADgBQACgDAAgDQAAgEgDgCQgCgBgFAAIgLAAg");
	this.shape.setTransform(118.3,48.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF2A2C").s().p("AgYAcQgKgKAAgRIAAgBQAAgQAKgKQAIgLAQAAQARAAAIAKQAKALAAAQIAAABQAAARgKAKQgIAKgRAAQgQAAgIgKgAgLgQQgDAHAAAJIAAABQAAAKADAGQAEAGAHAAQAHAAAFgGQADgGAAgKIAAgBQAAgJgDgHQgFgGgHAAQgHAAgEAGg");
	this.shape_1.setTransform(110.2,48.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF2A2C").s().p("AAIAlIgPgcIgHAAIAAAcIgUAAIAAhJIAUAAIAAAcIAFAAIARgcIAZAAIgZAjIAbAmg");
	this.shape_2.setTransform(102.7,48.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF2A2C").s().p("AANAlIAAgsIgBAAIgXAsIgUAAIAAhJIAUAAIAAAsIAYgsIATAAIAABJg");
	this.shape_3.setTransform(94.3,48.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF2A2C").s().p("AAMAlIAAgcIgXAAIAAAcIgUAAIAAhJIAUAAIAAAeIAXAAIAAgeIAUAAIAABJg");
	this.shape_4.setTransform(86.4,48.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF2A2C").s().p("AAWAxIAAgYIgrAAIAAAYIgUAAIAAgoIAEAAIADAAQAFAAACgGQADgGABgPIABgeIA2AAIAAA5IAKAAIAAAogAgDgSIgCAQQgBAGgDAFIAVAAIAAgpIgPAAg");
	this.shape_5.setTransform(77.9,49.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF2A2C").s().p("AgWAcQgJgKAAgQIAAgCQAAgQAJgLQAJgKAPAAQAPAAAIAJQAHAJAAAPIAAAKIgrAAIAAAAQABAIAEAFQAEAEAHAAIAMgBIAJgEIAGAMQgFADgHADQgIADgJgBQgQABgJgLgAgHgSQgDAFgBAGIABAAIAXAAIAAgBQAAgGgDgEQgCgEgGAAQgFAAgEAEg");
	this.shape_6.setTransform(69.5,48.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF2A2C").s().p("AghA0IAAhmIASAAIACAJQADgFAEgCQAGgDAEAAQAOAAAIALQAIALAAARIAAACQAAAPgIAKQgIAKgOAAQgEAAgFgCQgEgCgEgEIAAAjgAgHgiQgDACgDAEIAAAfQADADADACQADABAEAAQAGAAAEgFQADgFAAgJIAAgCQAAgKgDgHQgEgGgGAAQgEAAgDABg");
	this.shape_7.setTransform(62.1,49.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF2A2C").s().p("AgWAcQgJgKAAgRIAAgBQAAgQAJgKQAJgLAPAAQAOAAAIAIQAIAHAAANIAAABIgSAAQAAgGgDgEQgDgEgGAAQgHAAgDAGQgDAHAAAJIAAABQAAAKADAGQADAGAHAAQAGAAADgDQADgDAAgGIASAAIAAABQAAALgIAIQgJAHgNAAQgPAAgJgKg");
	this.shape_8.setTransform(54.4,48.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF2A2C").s().p("AgYAcQgKgKAAgRIAAgBQAAgQAKgKQAIgLAQAAQARAAAIAKQAKALAAAQIAAABQAAARgKAKQgIAKgRAAQgQAAgIgKgAgLgQQgDAHAAAJIAAABQAAAKADAGQAEAGAHAAQAHAAAFgGQADgGAAgKIAAgBQAAgJgDgHQgFgGgHAAQgHAAgEAGg");
	this.shape_9.setTransform(46.8,48.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF2A2C").s().p("AAMAlIAAg5IgXAAIAAA5IgUAAIAAhJIA/AAIAABJg");
	this.shape_10.setTransform(38.9,48.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF2A2C").s().p("AgXAgQgJgFAAgMIAAAAIATAAQAAAEAEADQADACAGAAQAGAAAEgCQADgDAAgEQAAgFgDgCQgDgCgHgBIgLAAIAAgLIALAAQAGAAADgDQACgCAAgDQABgEgDgCQgDgDgGAAQgEAAgEACQgEACAAAFIgTAAIAAgBQAAgKAJgGQAIgGAOgBQAOAAAIAHQAJAFAAALQAAAEgCAFQgEAEgGACQAHABADAEQAEAFAAAGQAAALgKAFQgJAHgOAAQgOAAgJgHg");
	this.shape_11.setTransform(147.5,29.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF2A2C").s().p("AgWAdQgJgLAAgQIAAgCQAAgQAJgLQAJgLAPAAQAPAAAIAKQAHAJAAAQIAAAIIgrAAIAAABQABAHAEAGQAEAEAHAAIAMgBIAJgFIAGANQgFAEgHACQgIACgJABQgQgBgJgJgAgHgSQgDAFgBAGIABABIAXAAIAAgCQAAgGgDgEQgCgEgGAAQgFAAgEAEg");
	this.shape_12.setTransform(139.9,29.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF2A2C").s().p("AgZArQgJgKAAgRIAAgBIAAgBIAAAAIAAgQQAAgWAJgKQAIgKARgBQAJAAAEgCQAEgCAAgEIAQAAIAAAAQAAANgIAFQgHAGgRAAQgJAAgFAEQgFAFAAAHIAAAAQAEgEAFgCQAGgDAFAAQAPAAAJALQAJAKAAAQIAAABQAAARgJAKQgKALgQAAQgPAAgKgLgAgKAAQgEAFAAAKIAAABQAAAKAEAHQADAFAHABQAIgBAEgFQADgHAAgKIAAgBQAAgKgEgFQgDgHgIAAQgHAAgDAHg");
	this.shape_13.setTransform(132.4,28.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#333333").s().p("AgLATIAFgVIAAgQIASAAIAAAQIgLAVg");
	this.shape_14.setTransform(123.1,33.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#333333").s().p("AgWAdQgJgLAAgQIAAgCQAAgQAJgLQAJgLAPAAQAPAAAIAKQAHAJAAAQIAAAIIgrAAIAAABQABAHAEAGQAEAEAHAAIAMgBIAJgFIAGANQgFAEgHACQgIACgJABQgQgBgJgJgAgHgSQgDAFgBAGIABABIAXAAIAAgCQAAgGgDgEQgCgEgGAAQgFAAgEAEg");
	this.shape_15.setTransform(117.8,29.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#333333").s().p("AAMAlIAAgdIgXAAIAAAdIgUAAIAAhJIAUAAIAAAeIAXAAIAAgeIAUAAIAABJg");
	this.shape_16.setTransform(110.2,29.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#333333").s().p("AgWAdQgJgLAAgQIAAgCQAAgQAJgLQAJgLAPAAQAPAAAIAKQAHAJAAAQIAAAIIgrAAIAAABQABAHAEAGQAEAEAHAAIAMgBIAJgFIAGANQgFAEgHACQgIACgJABQgQgBgJgJgAgHgSQgDAFgBAGIABABIAXAAIAAgCQAAgGgDgEQgCgEgGAAQgFAAgEAEg");
	this.shape_17.setTransform(102.6,29.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#333333").s().p("AASAxIAAgYIg2AAIAAhJIAUAAIAAA5IAXAAIAAg5IAUAAIAAA5IAKAAIAAAog");
	this.shape_18.setTransform(94.9,30.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#333333").s().p("AAMA1IAAgtIAAAAIgXAtIgUAAIAAhJIAUAAIAAAsIAXgsIAUAAIAABJgAgQgmQgGgFAAgJIAPAAQAAAEABACQADACADAAQAFAAABgCQADgCAAgEIAOAAIAAAAQAAAJgFAFQgHAGgLAAQgKAAgGgGg");
	this.shape_19.setTransform(83,28.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#333333").s().p("AgZAcQgJgLAAgQIAAgBQAAgQAJgLQAKgKAPgBQARAAAJALQAJALAAAQIAAABQAAAQgJALQgJALgRAAQgPAAgKgLgAgKgPQgEAGAAAJIAAABQAAAKAEAGQADAGAHAAQAIAAADgGQAEgGAAgKIAAgBQAAgJgEgGQgDgHgIAAQgHAAgDAHg");
	this.shape_20.setTransform(75.1,29.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#333333").s().p("AAMAlIAAgdIgXAAIAAAdIgUAAIAAhJIAUAAIAAAeIAXAAIAAgeIAUAAIAABJg");
	this.shape_21.setTransform(67.2,29.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#333333").s().p("AggAlIAAhJIAUAAIAAAYIANAAQAPAAAIAHQAJAFAAAMQAAALgJAHQgIAHgPAAgAgMAWIANAAQAGAAADgDQADgCAAgFQAAgEgDgDQgDgDgGABIgNAAg");
	this.shape_22.setTransform(59.6,29.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#333333").s().p("AAQAlIAAg6IgRAAIAAARQAAAVgHAJQgHALgQAAIgDAAIAAgPIACgBQAHAAACgGQACgFAAgOIAAggIA4AAIAABJg");
	this.shape_23.setTransform(51.2,29.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#333333").s().p("AgaAgQgHgFAAgLQABgKAIgGQAIgFAQAAIALAAIAAgHQAAgFgDgDQgDgDgFAAQgEAAgDACQgDADAAAEIgTAAIAAAAQgBgJAJgIQAIgHAOAAQANAAAIAHQAIAHAAAMIAAAeIABAKIACAJIgTAAIgCgGIgBgFQgEAFgFAEQgDADgHABQgMAAgGgHgAgJAHQgEAEAAAEQABAEACADQACABAEAAQAEABAFgDQAEgDACgDIAAgLIgLAAQgGAAgDADg");
	this.shape_24.setTransform(43.9,29.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#333333").s().p("AgWAdQgJgLAAgQIAAgCQAAgQAJgLQAJgLAPAAQAPAAAIAKQAHAJAAAQIAAAIIgrAAIAAABQABAHAEAGQAEAEAHAAIAMgBIAJgFIAGANQgFAEgHACQgIACgJABQgQgBgJgJgAgHgSQgDAFgBAGIABABIAXAAIAAgCQAAgGgDgEQgCgEgGAAQgFAAgEAEg");
	this.shape_25.setTransform(36.5,29.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#333333").s().p("AghA0IAAhlIASAAIACAJQADgFAFgDQAEgDAFAAQAOAAAIALQAIAKgBASIAAABQABAQgIAKQgIAKgOAAQgEAAgFgCQgEgDgEgEIAAAkgAgHghQgDACgDADIAAAfQADAEADABQADACAEAAQAGAAAEgGQAEgEgBgLIAAgBQABgLgEgGQgEgHgGAAQgEABgDACg");
	this.shape_26.setTransform(29,31.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#333333").s().p("AgZAcQgJgLAAgQIAAgBQAAgQAJgLQAKgKAPgBQARAAAJALQAJALAAAQIAAABQAAAQgJALQgJALgRAAQgPAAgKgLgAgKgPQgEAGAAAJIAAABQAAAKAEAGQADAGAHAAQAIAAADgGQAEgGAAgKIAAgBQAAgJgEgGQgDgHgIAAQgHAAgDAHg");
	this.shape_27.setTransform(17.5,29.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#333333").s().p("AAMAlIAAg6IgXAAIAAA6IgUAAIAAhJIA/AAIAABJg");
	this.shape_28.setTransform(9.6,29.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#333333").s().p("AgZAcQgJgLAAgQIAAgBQAAgQAJgKQAKgMAPABQAQAAAJAKQAKALAAAQIAAABQAAAQgKALQgJAKgQAAQgPAAgKgKgAgKgQQgEAHAAAJIAAABQAAAKAEAGQADAGAHAAQAHAAAFgGQADgGAAgKIAAgBQAAgJgDgHQgFgGgHAAQgHAAgDAGg");
	this.shape_29.setTransform(149.2,11.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#333333").s().p("AgKAlIAAg5IgWAAIAAgQIBBAAIAAAQIgYAAIAAA5g");
	this.shape_30.setTransform(141.7,11.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#333333").s().p("AggAlIAAhJIAfAAQAOAAAIAFQAJAFAAAKQgBAGgDAEQgEAEgGACQAJABAEAFQAEAEAAAGQAAAKgIAGQgHAFgPAAgAgMAWIAPAAQAFAAADgCQACgCAAgEQAAgDgCgDQgCgCgGAAIgPAAgAgMgGIALAAQAFAAADgCQADgCAAgDQAAgEgEgCQgCgBgFAAIgLAAg");
	this.shape_31.setTransform(134.2,11.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#333333").s().p("AgaAhQgHgHAAgKQAAgKAJgGQAIgFAQgBIAKAAIAAgFQAAgGgCgDQgDgDgFAAQgEAAgDADQgDACAAAEIgTAAIAAgBQgBgIAJgHQAJgIANABQANgBAIAIQAIAGAAANIAAAdIABAKIADAJIgUAAIgCgFIgBgGQgEAGgFADQgEAEgGgBQgMAAgGgFgAgJAIQgEADAAAFQAAADADACQACADAEAAQAFAAAEgDQAEgDABgDIAAgKIgKAAQgGAAgDADg");
	this.shape_32.setTransform(126.3,11.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#333333").s().p("AgWAcQgJgKAAgQIAAgCQAAgQAJgLQAJgKAPAAQAPAAAIAJQAHAJAAAQIAAAJIgrAAIAAAAQABAIAEAEQAEAFAHAAIAMgBIAJgEIAGAMQgFADgHADQgIACgJAAQgQAAgJgKgAgHgSQgDAFgBAGIABAAIAXAAIAAgBQAAgGgDgEQgCgEgGAAQgFAAgEAEg");
	this.shape_33.setTransform(115.5,11.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#333333").s().p("AgJAlIAAg5IgYAAIAAgQIBCAAIAAAQIgXAAIAAA5g");
	this.shape_34.setTransform(108.2,11.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#333333").s().p("AgWAcQgJgKAAgQIAAgCQAAgQAJgLQAJgKAPAAQAPAAAIAJQAHAJAAAQIAAAJIgrAAIAAAAQABAIAEAEQAEAFAHAAIAMgBIAJgEIAGAMQgFADgHADQgIACgJAAQgQAAgJgKgAgHgSQgDAFgBAGIABAAIAXAAIAAgBQAAgGgDgEQgCgEgGAAQgFAAgEAEg");
	this.shape_35.setTransform(100.9,11.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#333333").s().p("AgaAhQgHgHAAgKQAAgKAJgGQAIgFAQgBIALAAIAAgFQAAgGgDgDQgDgDgFAAQgEAAgDADQgDACAAAEIgTAAIAAgBQgBgIAJgHQAJgIANABQANgBAIAIQAIAGAAANIAAAdIABAKIADAJIgUAAIgCgFIgBgGQgEAGgFADQgEAEgGgBQgMAAgGgFgAgJAIQgEADAAAFQAAADADACQACADAEAAQAFAAAEgDQAEgDACgDIAAgKIgLAAQgGAAgDADg");
	this.shape_36.setTransform(93.5,11.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#333333").s().p("AgKAlIAAg5IgXAAIAAgQIBDAAIAAAQIgZAAIAAA5g");
	this.shape_37.setTransform(86.1,11.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#333333").s().p("AgWAcQgJgKAAgQIAAgCQAAgQAJgLQAJgKAPAAQAPAAAIAJQAHAJAAAQIAAAJIgrAAIAAAAQABAIAEAEQAEAFAHAAIAMgBIAJgEIAGAMQgFADgHADQgIACgJAAQgQAAgJgKgAgHgSQgDAFgBAGIABAAIAXAAIAAgBQAAgGgDgEQgCgEgGAAQgFAAgEAEg");
	this.shape_38.setTransform(78.8,11.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#333333").s().p("AghA0IAAhmIASAAIACAJQADgFAFgCQAEgDAFAAQAOAAAIALQAIALgBARIAAACQABAPgIAKQgIAKgOAAQgEAAgFgCQgEgDgEgDIAAAjgAgHgiQgDACgDAEIAAAfQADADADACQADACAEgBQAGAAAEgFQAEgEgBgKIAAgCQABgKgEgHQgEgGgGgBQgEAAgDACg");
	this.shape_39.setTransform(71.3,12.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#333333").s().p("AgZAsQgJgLAAgQIAAgCIAAgBIAAgBIAAgOQAAgXAJgKQAIgKARgBQAJAAAEgCQAEgBAAgFIAQAAIAAABQAAANgIAFQgHAFgRAAQgJABgFADQgFAFAAAGIAAABQAEgEAFgCQAGgDAFAAQAPAAAJAKQAJALAAAQIAAACQAAAQgJALQgKAKgQAAQgPAAgKgKgAgKAAQgEAFAAAKIAAACQAAAJAEAGQADAHAHgBQAIABAEgHQADgGAAgJIAAgCQAAgKgEgFQgDgGgIgBQgHABgDAGg");
	this.shape_40.setTransform(63.3,9.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#333333").s().p("AgYAcQgKgLAAgQIAAgBQAAgQAKgKQAIgMAQABQARAAAIAKQAKALAAAQIAAABQAAAQgKALQgIAKgRAAQgQAAgIgKgAgLgQQgDAHAAAJIAAABQAAAKADAGQAEAGAHAAQAIAAAEgGQADgGAAgKIAAgBQAAgJgDgHQgEgGgIAAQgHAAgEAGg");
	this.shape_41.setTransform(55.5,11.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#333333").s().p("AAMAlIAAgsIAAAAIgXAsIgUAAIAAhJIAUAAIAAAsIAXgsIAUAAIAABJg");
	this.shape_42.setTransform(47.6,11.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#333333").s().p("AggA0IAAhmIASAAIABAJQADgFAEgCQAFgDAFAAQAOAAAIALQAIALgBARIAAACQABAPgIAKQgIAKgOAAQgEAAgFgCQgEgDgEgDIAAAjgAgHgiQgDACgDAEIAAAfQADADADACQADACAEgBQAGAAAEgFQAEgEgBgKIAAgCQABgKgEgHQgEgGgGgBQgEAAgDACg");
	this.shape_43.setTransform(39.8,12.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#333333").s().p("AAMAlIAAg5IgXAAIAAA5IgUAAIAAhJIA/AAIAABJg");
	this.shape_44.setTransform(31.8,11.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#333333").s().p("AAbAlIAAhJIATAAIAABJgAgtAlIAAhJIAUAAIAAAYIAOAAQAOAAAIAHQAIAFAAAMQAAALgIAHQgIAHgOAAgAgZAWIAOAAQAFAAAEgDQACgDAAgEQAAgEgCgDQgEgDgFAAIgOAAg");
	this.shape_45.setTransform(18.4,11.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#333333").s().p("AgkAyIAAhjIAgAAQARAAAJAHQALAHAAANQAAAHgEAGQgEAFgHADQAKABAFAGQAEAGAAAJQAAAOgJAHQgKAIgRAAgAgRAiIASAAQAIAAAEgDQAEgDABgHQAAgHgFgEQgEgEgIAAIgSAAgAgRgHIAOAAQAHAAAFgDQADgEAAgGQAAgHgDgDQgFgDgIAAIgNAAg");
	this.shape_46.setTransform(8.5,10);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol20, new cjs.Rectangle(0,0,157,57.2), null);


(lib.Symbol19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#09090A").s().p("AAUAlIAAgiIgnAAIAAAiIgIAAIAAhJIAIAAIAAAhIAnAAIAAghIAIAAIAABJg");
	this.shape.setTransform(244.8,11.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#09090A").s().p("AAUA0IAAg8IgBAAIgmA8IgIAAIAAhJIAIAAIAAA7IABAAIAmg7IAIAAIAABJgAgOgmQgFgFABgHIAAgBIAGAAQAAAGADADQADADAGAAQAGAAAEgDQACgDAAgGIAHAAIAAABQAAAIgFAEQgFAFgJAAQgIAAgGgFg");
	this.shape_1.setTransform(237,9.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#09090A").s().p("AgXAhQgGgGAAgKQAAgKAJgGQAJgFANAAIASAAIAAgKQAAgHgFgFQgFgFgJABQgIAAgFAEQgFAEAAAGIgIAAIAAgBQAAgHAHgHQAIgGALAAQAMAAAIAGQAHAGAAALIAAAkIAAAHIACAIIgJAAIgBgHIAAgFQgEAGgHAEQgHADgIAAQgLAAgGgFgAgOAGQgGAFAAAGQAAAHAEADQAEAEAHAAQAJAAAHgFQAGgEADgHIAAgOIgSAAQgJAAgHAFg");
	this.shape_2.setTransform(229.2,11.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#09090A").s().p("AAYAlIAAhCIgeAAIAAAaQAAAUgFAKQgFAKgMAAIgDAAIAAgIIACAAQAIABADgIQAEgIAAgRIAAghIAuAAIAABJg");
	this.shape_3.setTransform(221.4,11.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#09090A").s().p("AAUAlIAAgiIgnAAIAAAiIgIAAIAAhJIAIAAIAAAhIAnAAIAAghIAIAAIAABJg");
	this.shape_4.setTransform(214.1,11.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#09090A").s().p("AgXAcQgJgLAAgQIAAgBQAAgRAJgKQAJgKAOAAQAPAAAJAKQAJAKAAARIAAABQAAAQgJALQgJAKgPAAQgOAAgJgKgAgRgVQgGAJAAAMIAAABQAAANAGAJQAHAJAKAAQAMAAAGgJQAHgJAAgNIAAgBQAAgMgHgJQgGgJgMAAQgKAAgHAJg");
	this.shape_5.setTransform(206.3,11.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#09090A").s().p("AgXAhQgGgGAAgKQAAgKAJgGQAJgFANAAIASAAIAAgKQAAgHgFgFQgFgFgJABQgIAAgFAEQgFAEAAAGIgIAAIAAgBQAAgHAHgHQAIgGALAAQAMAAAIAGQAHAGAAALIAAAkIAAAHIACAIIgJAAIgBgHIAAgFQgEAGgHAEQgHADgIAAQgLAAgGgFgAgOAGQgGAFAAAGQAAAHAEADQAEAEAHAAQAJAAAHgFQAGgEADgHIAAgOIgSAAQgJAAgHAFg");
	this.shape_6.setTransform(195.1,11.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#09090A").s().p("AAmAlIgcgiIgGAAIAAAiIgHAAIAAgiIgHAAIgbAiIgKAAIAAgBIAfgkIgdgkIAKAAIAZAhIAHAAIAAghIAHAAIAAAhIAGAAIAZghIAKAAIgcAkIAgAkIgBABg");
	this.shape_7.setTransform(186.5,11.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#09090A").s().p("AgdA0IAAhmIAGAAIACAMQAEgGAFgDQAGgEAHAAQAOAAAHALQAIALAAARIAAACQAAAPgIAKQgHAKgOAAQgGAAgGgDQgGgDgEgFIAAAmgAgNgoQgFAEgDAHIAAAiQADAGAFAEQAGADAHAAQAKAAAGgIQAFgIAAgMIAAgCQAAgOgFgJQgGgJgKAAQgIABgFADg");
	this.shape_8.setTransform(177.7,12.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#09090A").s().p("AAUAlIAAg8IAAAAIgnA8IgIAAIAAhJIAIAAIAAA8IAAAAIAng8IAIAAIAABJg");
	this.shape_9.setTransform(169.8,11.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#09090A").s().p("AgXArQgJgKAAgRIAAgVQAAgTAKgKQAJgJARgBQAKAAAFgCQAFgCAAgFIAHAAQAAAJgGAEQgHADgNAAQgOABgIAHQgIAHABAOIABAAQADgGAHgEQAHgEAHAAQAPAAAIAKQAJALAAAPIAAACQAAARgJAKQgJALgPAAQgOAAgJgLgAgRgGQgGAIAAAMIAAACQAAANAGAJQAHAJAKAAQAMAAAGgJQAHgJAAgNIAAgCQAAgMgHgIQgGgJgMAAQgKAAgHAJg");
	this.shape_10.setTransform(162.1,9.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#09090A").s().p("AAVAlIAAgeIgWAAIgSAeIgJAAIASgfQgHgCgEgEQgFgGAAgIQAAgKAHgFQAHgHAMAAIAdAAIAABJgAgNgZQgEAFAAAGQAAAHAEAEQAEADAIAAIAWAAIAAgdIgVAAQgIAAgFAEg");
	this.shape_11.setTransform(150.7,11.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#09090A").s().p("AgXAhQgGgGAAgKQAAgKAJgGQAJgFANAAIASAAIAAgKQAAgHgFgFQgFgFgJABQgIAAgFAEQgFAEAAAGIgIAAIAAgBQAAgHAHgHQAIgGALAAQAMAAAIAGQAHAGAAALIAAAkIAAAHIACAIIgJAAIgBgHIAAgFQgEAGgHAEQgHADgIAAQgLAAgGgFgAgOAGQgGAFAAAGQAAAHAEADQAEAEAHAAQAJAAAHgFQAGgEADgHIAAgOIgSAAQgJAAgHAFg");
	this.shape_12.setTransform(143.2,11.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#09090A").s().p("AAUAlIAAgiIgnAAIAAAiIgIAAIAAhJIAIAAIAAAhIAnAAIAAghIAIAAIAABJg");
	this.shape_13.setTransform(135.7,11.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#09090A").s().p("AgbAlIAAhJIAIAAIAAAdIAUAAQANABAHAGQAHAFAAAKQAAAJgHAHQgHAGgNAAgAgTAeIAUAAQAKAAAEgEQAFgEAAgHQAAgHgFgEQgFgEgJAAIgUAAg");
	this.shape_14.setTransform(128.3,11.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#09090A").s().p("AAYAlIAAhCIgeAAIAAAaQAAAUgFAKQgFAKgMAAIgDAAIAAgIIACAAQAIABADgIQAEgIAAgRIAAghIAuAAIAABJg");
	this.shape_15.setTransform(120.1,11.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#09090A").s().p("AAUAlIAAg8IAAAAIgnA8IgIAAIAAhJIAIAAIAAA8IABAAIAmg8IAIAAIAABJg");
	this.shape_16.setTransform(112.8,11.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#09090A").s().p("AgXArQgJgKAAgRIAAgVQAAgTAKgKQAJgJARgBQAKAAAFgCQAFgCAAgFIAHAAQAAAJgGAEQgHADgNAAQgOABgIAHQgIAHABAOIABAAQADgGAHgEQAHgEAHAAQAPAAAIAKQAJALAAAPIAAACQAAARgJAKQgJALgPAAQgOAAgJgLgAgRgGQgGAIAAAMIAAACQAAANAGAJQAHAJAKAAQAMAAAGgJQAHgJAAgNIAAgCQAAgMgHgIQgGgJgMAAQgKAAgHAJg");
	this.shape_17.setTransform(105.1,9.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#09090A").s().p("AgXAcQgJgLAAgQIAAgBQAAgRAJgKQAJgKAOAAQAPAAAJAKQAJAKAAARIAAABQAAAQgJALQgJAKgPAAQgOAAgJgKgAgRgVQgGAJAAAMIAAABQAAANAGAJQAHAJAKAAQAMAAAGgJQAHgJAAgNIAAgBQAAgMgHgJQgGgJgMAAQgKAAgHAJg");
	this.shape_18.setTransform(97.3,11.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#09090A").s().p("AAgAlIAAg6IgBgBIgcA7IgFAAIgcg8IgBAAIAAA8IgIAAIAAhJIALAAIAcA+IAeg+IAKAAIAABJg");
	this.shape_19.setTransform(88.3,11.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#09090A").s().p("AgXAcQgJgLAAgQIAAgBQAAgRAJgKQAJgKAOAAQAPAAAJAKQAJAKAAARIAAABQAAAQgJALQgJAKgPAAQgOAAgJgKgAgRgVQgGAJAAAMIAAABQAAANAGAJQAHAJAKAAQAMAAAGgJQAHgJAAgNIAAgBQAAgMgHgJQgGgJgMAAQgKAAgHAJg");
	this.shape_20.setTransform(79.3,11.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#09090A").s().p("AgEAlIAAhCIgZAAIAAgHIA7AAIAAAHIgbAAIAABCg");
	this.shape_21.setTransform(72,11.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#09090A").s().p("AgdAlIAAhJIAcAAQAMAAAIAFQAIAFAAAKQAAAFgEAFQgDAEgGACQAHABAEAFQAFAEAAAHQAAAKgIAFQgHAFgNAAgAgUAeIAWAAQAJAAAGgEQAFgDAAgGQAAgHgGgDQgFgEgJAAIgWAAgAgUgDIATAAQAJAAAFgDQAGgDAAgHQAAgHgGgDQgFgDgJAAIgTAAg");
	this.shape_22.setTransform(64.7,11.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#09090A").s().p("AgXAhQgGgGAAgKQAAgKAJgGQAJgFANAAIASAAIAAgKQAAgHgFgFQgFgFgJABQgIAAgFAEQgFAEAAAGIgIAAIAAgBQAAgHAHgHQAIgGALAAQAMAAAIAGQAHAGAAALIAAAkIAAAHIACAIIgJAAIgBgHIAAgFQgEAGgHAEQgHADgIAAQgLAAgGgFgAgOAGQgGAFAAAGQAAAHAEADQAEAEAHAAQAJAAAHgFQAGgEADgHIAAgOIgSAAQgJAAgHAFg");
	this.shape_23.setTransform(56.8,11.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#09090A").s().p("AAVAlIAAgeIgWAAIgSAeIgJAAIASgfQgHgCgEgEQgFgGAAgIQAAgKAHgFQAHgHAMAAIAdAAIAABJgAgNgZQgEAFAAAGQAAAHAEAEQAEADAIAAIAWAAIAAgdIgVAAQgIAAgFAEg");
	this.shape_24.setTransform(45.7,11.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#09090A").s().p("AgXAhQgGgGAAgKQAAgKAJgGQAJgFANAAIASAAIAAgKQAAgHgFgFQgFgFgJABQgIAAgFAEQgFAEAAAGIgIAAIAAgBQAAgHAHgHQAIgGALAAQAMAAAIAGQAHAGAAALIAAAkIAAAHIACAIIgJAAIgBgHIAAgFQgEAGgHAEQgHADgIAAQgLAAgGgFgAgOAGQgGAFAAAGQAAAHAEADQAEAEAHAAQAJAAAHgFQAGgEADgHIAAgOIgSAAQgJAAgHAFg");
	this.shape_25.setTransform(38.2,11.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#09090A").s().p("AgdAlIAAhJIAcAAQAMAAAIAFQAIAFAAAKQAAAFgEAFQgDAEgGACQAHABAEAFQAFAEAAAHQAAAKgIAFQgHAFgNAAgAgUAeIAWAAQAJAAAGgEQAFgDAAgGQAAgHgGgDQgFgEgJAAIgWAAgAgUgDIATAAQAJAAAFgDQAGgDAAgHQAAgHgGgDQgFgDgJAAIgTAAg");
	this.shape_26.setTransform(30.9,11.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#09090A").s().p("AgdA0IAAhmIAGAAIACAMQAEgGAFgDQAGgEAHAAQAOAAAHALQAIALAAARIAAACQAAAPgIAKQgHAKgOAAQgGAAgGgDQgGgDgEgFIAAAmgAgNgoQgFAEgDAHIAAAiQADAGAFAEQAGADAHAAQAKAAAGgIQAFgIAAgMIAAgCQAAgOgFgJQgGgJgKAAQgIABgFADg");
	this.shape_27.setTransform(23.1,12.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#09090A").s().p("AgUAcQgJgKAAgQIAAgCQAAgQAJgLQAJgKANAAQANgBAHAKQAIAIAAAOIAAAGIgzAAIAAACQAAANAHAIQAGAJALAAQAGgBAGgCQAFgCAEgDIAEAFQgEAEgGADQgHACgIAAQgOAAgJgKgAgNgYQgGAHgBAKIAAABIApAAIAAgCQAAgKgEgGQgGgHgJABQgJAAgGAGg");
	this.shape_28.setTransform(15.5,11.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#09090A").s().p("AAdAyIAAhcIg4AAIAABcIgIAAIAAhjIBIAAIAABjg");
	this.shape_29.setTransform(7,10);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol19, new cjs.Rectangle(0,0,250.7,20.4), null);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap5();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.773,0.773);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol13, new cjs.Rectangle(0,0,232,22.5), null);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgTAYQgIgIAAgOIAAgCQAAgOAIgJQAIgJAMAAQANAAAHAIQAHAIAAANIAAAIIglAAIAAAAQAAAHAEAEQADAEAGAAIAKgBIAIgEIAFALQgEADgHACQgGACgIAAQgNAAgIgJgAgGgPQgDADAAAGIAAABIAUAAIAAgCQAAgFgCgDQgDgEgFAAQgEAAgDAEg");
	this.shape.setTransform(87.7,15.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgTAYQgIgIAAgOIAAgCQAAgOAIgJQAIgJAMAAQANAAAHAIQAHAIAAANIAAAIIglAAIAAAAQAAAHAEAEQADAEAGAAIAKgBIAIgEIAFALQgEADgHACQgGACgIAAQgNAAgIgJgAgGgPQgDADAAAGIAAABIAUAAIAAgCQAAgFgCgDQgDgEgFAAQgEAAgDAEg");
	this.shape_1.setTransform(81.5,15.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAKAgIAAgZIgUAAIAAAZIgRAAIAAg/IARAAIAAAaIAUAAIAAgaIARAAIAAA/g");
	this.shape_2.setTransform(75,15.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgVAlQgIgJAAgOIAAgBIAAgBIAAAAIAAgNQAAgUAHgIQAHgJAPAAQAHgBAEgBQAEgCAAgDIANAAQAAAMgGAEQgHAEgOAAQgIAAgEAEQgFAEABAGIAAAAQADgEAFgCQAEgCAEAAQAOAAAHAJQAIAKAAANIAAABQAAAOgIAJQgIAJgOAAQgNAAgIgJgAgJAAQgDAEAAAJIAAABQAAAIADAGQADAFAGAAQAHAAADgFQADgGAAgIIAAgBQAAgJgDgEQgDgGgHABQgGgBgDAGg");
	this.shape_3.setTransform(68.2,14.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgVAYQgIgJAAgOIAAgBQAAgOAIgJQAHgJAOAAQAOAAAIAJQAIAJAAAOIAAABQAAAOgIAJQgIAJgOAAQgNAAgIgJgAgJgNQgDAFAAAIIAAABQAAAIADAGQADAFAGAAQAHAAADgFQACgGAAgIIAAgBQAAgIgCgFQgDgGgHAAQgGAAgDAGg");
	this.shape_4.setTransform(61.5,15.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgcAsIAAhXIAQAAIABAIQADgEAEgDQADgCAFAAQALAAAHAJQAHAKAAAPIAAABQAAANgHAIQgHAJgLAAQgEAAgEgCIgHgFIAAAegAgGgcQgDABgCADIAAAaQACAEADABQACABAEAAQAGAAADgFQACgDAAgJIAAgBQAAgJgDgGQgDgFgFAAQgEAAgCACg");
	this.shape_5.setTransform(54.9,16.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AATAqIAAgVIglAAIAAAVIgRAAIAAgiIAEAAIACAAQAFAAABgFQACgFABgNIABgaIAuAAIAAAxIAJAAIAAAigAgDgPIgBAOIgDAJIARAAIAAgjIgMAAg");
	this.shape_6.setTransform(47.4,16.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgVAYQgIgJAAgOIAAgBQAAgOAIgJQAHgJAOAAQAOAAAIAJQAIAJAAAOIAAABQAAAOgIAJQgIAJgOAAQgNAAgIgJgAgJgNQgDAFAAAIIAAABQAAAIADAGQADAFAGAAQAGAAAEgFQADgGAAgIIAAgBQAAgIgDgFQgEgGgGAAQgGAAgDAGg");
	this.shape_7.setTransform(40.1,15.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AARArIAAhHIgiAAIAABHIgRAAIAAhVIBFAAIAABVg");
	this.shape_8.setTransform(32.5,14.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF2A2C").s().p("ApSCSIAAkjISlAAIAAEjg");
	this.shape_9.setTransform(59.5,14.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol12, new cjs.Rectangle(0,0,119,29.2), null);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.car4();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.47,0.47);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol10, new cjs.Rectangle(0,0,121.8,135.9), null);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.car1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.47,0.47);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(0,0,121.8,135.9), null);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.car3();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.47,0.47);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(0,0,121.8,135.9), null);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.car2();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.47,0.47);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(0,0,121.8,135.9), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,35,35), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,33,40), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer0();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,31,40), null);


(lib.Symbol23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol24();
	this.instance.parent = this;
	this.instance.setTransform(-109,-63,1,1,0,0,0,119,119);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:127,y:-299.1},299).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-466,-182,952,714);


(lib.Symbol18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Symbol 19
	this.instance = new lib.Symbol19();
	this.instance.parent = this;
	this.instance.setTransform(125.4,120.2,1,1,0,0,0,125.4,10.2);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10).to({_off:false},0).to({alpha:1},19).wait(25).to({y:40.2},20,cjs.Ease.quadInOut).wait(315).to({alpha:0},10).wait(1));

	// Symbol 13
	this.instance_1 = new lib.Symbol13();
	this.instance_1.parent = this;
	this.instance_1.setTransform(125.4,93.2,1,1,0,0,0,116,11.2);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:1},19).wait(26).to({y:13.2},20,cjs.Ease.quadInOut).wait(324).to({alpha:0},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(9.4,82,232,22.5);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol12();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1,1,0,0,0,59.5,14.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol11, new cjs.Rectangle(-59.5,-14.6,119,29.2), null);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(2,1,1).p("Ai4iuIFxAAIAAFdIlxAAg");
	this.shape.setTransform(-212.4,277.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#09090A").s().p("Ai4CvIAAldIFxAAIAAFdg");
	this.shape_1.setTransform(-212.4,277.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[]},1).wait(399));

	// Symbol 4
	this.instance = new lib.Symbol4();
	this.instance.parent = this;
	this.instance.setTransform(78.6,17.5,0.257,1,0,0,0,17.5,17.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(189).to({_off:false},0).to({scaleX:1,x:78.5,alpha:1},19,cjs.Ease.quadInOut).wait(135).to({scaleX:0.26,x:78.6,alpha:0},20,cjs.Ease.quadInOut).wait(37));

	// Symbol 20
	this.instance_1 = new lib.Symbol20();
	this.instance_1.parent = this;
	this.instance_1.setTransform(78.5,99.8,1,1,0,0,0,78.5,28.6);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(193).to({_off:false},0).to({y:89.8,alpha:1},19,cjs.Ease.quadInOut).wait(135).to({y:99.8,alpha:0},20,cjs.Ease.quadInOut).wait(33));

	// Symbol 3
	this.instance_2 = new lib.Symbol3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(269,20,0.242,1,0,0,0,16.5,20);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(203).to({_off:false},0).to({scaleX:1,alpha:1},19,cjs.Ease.quadInOut).wait(135).to({scaleX:0.24,alpha:0},20,cjs.Ease.quadInOut).wait(23));

	// Symbol 21
	this.instance_3 = new lib.Symbol21();
	this.instance_3.parent = this;
	this.instance_3.setTransform(269,99.8,1,1,0,0,0,82.5,28.6);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(209).to({_off:false},0).to({y:89.8,alpha:1},19,cjs.Ease.quadInOut).wait(135).to({y:99.8,alpha:0},20,cjs.Ease.quadInOut).wait(17));

	// Symbol 2
	this.instance_4 = new lib.Symbol2();
	this.instance_4.parent = this;
	this.instance_4.setTransform(454.5,20,0.258,1,0,0,0,15.5,20);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(217).to({_off:false},0).to({scaleX:1,alpha:1},19,cjs.Ease.quadInOut).wait(135).to({scaleX:0.26,alpha:0},20,cjs.Ease.quadInOut).wait(9));

	// Symbol 22
	this.instance_5 = new lib.Symbol22();
	this.instance_5.parent = this;
	this.instance_5.setTransform(454,99.8,1,1,0,0,0,80,28.6);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(225).to({_off:false},0).to({y:89.8,alpha:1},19,cjs.Ease.quadInOut).wait(135).to({y:99.8,alpha:0},20,cjs.Ease.quadInOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-231.9,259,39,37);


(lib.Symbol17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol11();
	this.instance.parent = this;
	this.instance.setTransform(119,171.5,1,1,0,0,0,59.5,14.6);

	this.instance_1 = new lib.Symbol10();
	this.instance_1.parent = this;
	this.instance_1.setTransform(60.9,67.9,1,1,0,0,0,60.9,67.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol17, new cjs.Rectangle(0,0,121.8,171.5), null);


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol11();
	this.instance.parent = this;
	this.instance.setTransform(119,171.5,1,1,0,0,0,59.5,14.6);

	this.instance_1 = new lib.Symbol9();
	this.instance_1.parent = this;
	this.instance_1.setTransform(60.9,67.9,1,1,0,0,0,60.9,67.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol16, new cjs.Rectangle(0,0,121.8,171.5), null);


(lib.Symbol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol11();
	this.instance.parent = this;
	this.instance.setTransform(121.8,171.5,1,1,0,0,0,59.5,14.6);

	this.instance_1 = new lib.Symbol8();
	this.instance_1.parent = this;
	this.instance_1.setTransform(60.9,67.9,1,1,0,0,0,60.9,67.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol15, new cjs.Rectangle(0,0,121.8,171.5), null);


(lib.Symbol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol11();
	this.instance.parent = this;
	this.instance.setTransform(121.8,171.5,1,1,0,0,0,59.5,14.6);

	this.instance_1 = new lib.Symbol7();
	this.instance_1.parent = this;
	this.instance_1.setTransform(60.9,67.9,1,1,0,0,0,60.9,67.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol14, new cjs.Rectangle(0,0,121.8,171.5), null);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Symbol 17
	this.instance = new lib.Symbol17();
	this.instance.parent = this;
	this.instance.setTransform(492.9,306.7,1,1,0,0,0,60.9,85.7);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(102).to({_off:false},0).to({y:89.7},19,cjs.Ease.backInOut).wait(52).to({y:321.7},15,cjs.Ease.backInOut).wait(212));

	// Symbol 16
	this.instance_1 = new lib.Symbol16();
	this.instance_1.parent = this;
	this.instance_1.setTransform(344.9,306.7,1,1,0,0,0,60.9,85.7);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(91).to({_off:false},0).to({y:89.7},19,cjs.Ease.backInOut).wait(58).to({y:321.7},15,cjs.Ease.backInOut).wait(217));

	// Symbol 15
	this.instance_2 = new lib.Symbol15();
	this.instance_2.parent = this;
	this.instance_2.setTransform(199.9,306.7,1,1,0,0,0,60.9,85.7);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(83).to({_off:false},0).to({y:89.7},19,cjs.Ease.backInOut).wait(61).to({y:321.7},15,cjs.Ease.backInOut).wait(222));

	// Symbol 14
	this.instance_3 = new lib.Symbol14();
	this.instance_3.parent = this;
	this.instance_3.setTransform(60.9,306.7,1,1,0,0,0,60.9,85.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(74).to({y:89.7},19,cjs.Ease.backInOut).wait(65).to({y:321.7},15,cjs.Ease.backInOut).wait(227));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,221,121.8,171.5);


// stage content:
(lib.getcar600300 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(2,1,1).p("EgtdgV8MBa7AAAMAAAAr5Mha7AAAg");
	this.shape.setTransform(301,150.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 3
	this.instance = new lib.Symbol6();
	this.instance.parent = this;
	this.instance.setTransform(302.9,167.9,1,1,0,0,0,276.9,67.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Symbol 18
	this.instance_1 = new lib.Symbol18();
	this.instance_1.parent = this;
	this.instance_1.setTransform(300.1,55.2,1,1,0,0,0,125.4,24.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Symbol 5
	this.instance_2 = new lib.Symbol5();
	this.instance_2.parent = this;
	this.instance_2.setTransform(298,172.2,1,1,0,0,0,267,59.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Layer 1
	this.instance_3 = new lib.Symbol23();
	this.instance_3.parent = this;
	this.instance_3.setTransform(276,289,1,1,0,0,0,119,119);
	this.instance_3.alpha = 0.199;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.1,138,952,714);
// library properties:
lib.properties = {
	id: '5F8474A94A514708984F42A62FF0CF18',
	width: 600,
	height: 300,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/getcar600_300_atlas_.png", id:"getcar600_300_atlas_"}
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
an.compositions['5F8474A94A514708984F42A62FF0CF18'] = {
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