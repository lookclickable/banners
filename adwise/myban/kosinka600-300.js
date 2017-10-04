(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"kosinka600_300_atlas_", frames: [[667,641,37,70],[761,545,49,221],[0,484,177,180],[641,484,118,102],[308,484,127,160],[179,484,127,160],[539,484,100,136],[802,0,193,340],[437,484,100,148],[539,622,55,60],[0,0,800,482],[641,588,90,51],[596,641,69,38],[437,634,87,31],[802,342,194,201]]}
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



(lib.ba2 = function() {
	this.spriteSheet = ss["kosinka600_300_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.ba2_03 = function() {
	this.spriteSheet = ss["kosinka600_300_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.ba2_06 = function() {
	this.spriteSheet = ss["kosinka600_300_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.ba2_09 = function() {
	this.spriteSheet = ss["kosinka600_300_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.ba2_152 = function() {
	this.spriteSheet = ss["kosinka600_300_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.ba2_15 = function() {
	this.spriteSheet = ss["kosinka600_300_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.ba2_18 = function() {
	this.spriteSheet = ss["kosinka600_300_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.ba2_21 = function() {
	this.spriteSheet = ss["kosinka600_300_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.ba2_25 = function() {
	this.spriteSheet = ss["kosinka600_300_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.ba2_27 = function() {
	this.spriteSheet = ss["kosinka600_300_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.fofo = function() {
	this.spriteSheet = ss["kosinka600_300_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.Hands25 = function() {
	this.spriteSheet = ss["kosinka600_300_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.Hands26 = function() {
	this.spriteSheet = ss["kosinka600_300_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.Hands27 = function() {
	this.spriteSheet = ss["kosinka600_300_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.Hands28 = function() {
	this.spriteSheet = ss["kosinka600_300_atlas_"];
	this.gotoAndStop(14);
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


(lib.Символ45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AjlOGIAA8LIHLAAIAAcLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ45, new cjs.Rectangle(-23,-90.2,46.1,180.5), null);


(lib.Символ44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF3333").s().p("AgaQyIAAhOIASAAIAAAcIANAAQAGAAAFACQAFABADAEQAEAEACAEQABAFAAAFQAAAGgCAEQgCAFgDADIgIAFQgFABgGABgAgIQiIANAAQAEAAACgCQACgDAAgFQAAgDgCgDQgCgCgEgBIgNAAgAgINLIAAg9IgRAAIAAgPIA0AAIAAAPIgSAAIAAA9gAAEJmQgGAAgGgDQgFgBgDgDQgEgDgBgFQgCgEAAgFIAAgfQAAgEACgEQABgFADgCQAEgEAFgCQAGgCAGAAIAWAAIAAARIgWAAQgEgBgCADQgDADAAAEIAAAbQAAAEADACQACACAEABIAWAAIAAAQgAgIF/IgIgCQgDgBgDgDIgFgEIgDgGIgCgGQgBgFAAgLIABgQIACgHIAEgFIAEgFIAGgDIAIgCIAIgCIAJACIAIACIAGADQADACABADIAEAFIACAHIABAQQAAALgBAFIgCAGIgDAGIgFAEIgGAEIgIACIgJABIgIgBgAgIFDQgDADgCADIgCAIIAAAIQAAAMACAEQACAEADABQAEACAEAAQAGAAADgCQADgBACgEQACgEAAgMIAAgIIgCgIQgCgDgDgDQgDgCgGAAQgEAAgEACgAANCaIAAggIgYAAIAAAgIgSAAIAAhNIASAAIAAAdIAYAAIAAgdIASAAIAABNgAgIhMIAAg9IgRAAIAAgQIA0AAIAAAQIgSAAIAAA9gAACkyQgGAAgFgCQgFgBgEgDQgDgEgCgEQgBgEAAgEIAAggQAAgEABgFQACgEADgCQADgEAFgCQAGgBAGAAIAYAAIAAAQIgYAAQgDAAgDACQgCADAAAEIAAAFIAbAAIAAAQIgbAAIAAAGQAAADACADQADADADAAIAYAAIAAAPgAAZoXIAAgjIACgWIgUA5IgOAAIgUg5IACAWIAAAjIgRAAIAAhOIAaAAIARA0IARg0IAZAAIAABOgAARr+IgDgMIgaAAIgDAMIgTAAIARhCIACgFIAEgEIAFgCIAGAAIAHAAIAGACIAEAEIACAFIAQBCgAAKsaIgHghQAAAAAAgBQgBAAAAAAQAAgBgBAAQAAAAgBAAQAAAAAAAAQAAAAAAABQgBAAAAAAQAAABAAAAIgHAhIASAAgAgZvjIAAgRIAZAAQAFAAABgBQACgDAAgEQAAgDgCgCQgCgCgEAAIgTAAIAAgPIASAAQADAAACgCQACgCAAgDQAAgFgCgBQgCgBgEgBIgXAAIAAgQIAZAAQAFABAFABIAIAEQADADACAEQACAEgBAGQAAAFgCAEQgCADgEADIAEADIAEADIACAGIAAAFQAAAGgCAEQgBAEgEADQgDADgFABQgFABgGABg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ44, new cjs.Rectangle(-4.2,-107.3,8.6,214.7), null);


(lib.Символ43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgLAqIAXhTIAMAAIgYBTgAg4AkIgIgDIgFgDIgFgFQgCgDgCgKIgCgOIACgPIACgHIACgGIAFgEIAFgFIAIgCIAIAAIAJAAIAHACQADACACADIAFAEIADAGIACAHIABAPQAAAIgCAGIgEANIgFAFIgFADIgHADIgJABIgIgBgAg3gXQgDACgBADIgCAHIgBAJQABALACAEIAEAGQADABAEAAQAFAAADgBIADgGQACgEABgLIgBgJIgCgHQgBgDgCgCQgDgCgFAAQgEAAgDACgAAzAkIgIgCIgHgDQgEgDgCgFIgBgFIgBgGIARAAIABAFQACADAEAAIAFAAQADAAACgCQACgCABgEQAAgFgDgDQgCgCgGAAIgOAAIAAgMIASgPIgbAAIAAgQIAuAAIAAAQIgSAPIAAAAQAGAAADACQAFABACACQADADABAEQABAEAAAGIgBAJQgBAEgCADQgDADgEACQgIACgEABg");
	this.shape.setTransform(31.9,-0.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("AADAuIgBgPIgdAAIgBAPIgQAAIAAgbQAJgDABgTIACgXIAsAAIAAAsIAGAAIAAAcgAgSgBQgCAQgEADIAUAAIAAgeIgNAAgAjUAfQgEgBgDgDIgEgEIgCgGQgBgEAAgLIABgNIACgGIAEgFIAHgDIAMgBIALABIAHADIADAFIADAGIABANIgBAPIgDAGIgDAEQgDADgEABIgLABIgMgBgAjPgLIgDAFIAAAIIAAAKIADAFQABABAGAAQAEAAACgBQACgCABgDIAAgKIAAgIQgBgDgCgCQgBgCgFAAQgGAAgBACgAEYAfIAAgRIATAAIAAARgAD9AfIAAgZIABgKIAAAAIgDAHIgCADIgPAZIgRAAIAAg5IARAAIAAAZIgCAKIABAAIAFgKIAPgZIAQAAIAAA5gAC8AfIAAgZIABgKIgBAAIgFAKIgOAZIgRAAIAAg5IAQAAIAAAZIgCAKIABAAIAGgKIAOgZIARAAIAAA5gAB6AfIAAgWIgRAAIAAAWIgRAAIAAg5IARAAIAAAWIARAAIAAgWIAQAAIAAA5gAAtAfIgHgBIgGgDIgEgFIgBgHIAAgFIABgGIAEgEIAGgCIAHgBIANAAIAAgDQAAgBAAAAQAAgBAAAAQAAgBAAAAQgBgBAAAAQgCgCgDAAIgWAAIAAgOIAYAAIAIABIAHAEQACACACAEQACADgBAFIAAAmgAAsAIQAAAAgBABQAAAAAAABQAAAAAAABQAAAAAAABIAAADQAAAAAAABQAAAAAAAAQAAABAAAAQABABAAAAIADABIALAAIAAgLIgLAAIgDAAgAhSAfIgHgBIgGgDIgDgFIgBgHIAAgFIABgGIADgEIAGgCIAHgBIANAAIAAgDQAAgBAAAAQAAgBAAAAQAAgBAAAAQgBgBAAAAQgCgCgDAAIgWAAIAAgOIAYAAIAIABIAGAEQAEACABAEQABADAAAFIAAAmgAhTAIQAAAAgBABQAAAAAAABQAAAAAAABQgBAAAAABIAAADQAAAAABABQAAAAAAAAQAAABAAAAQABABAAAAIADABIALAAIAAgLIgLAAIgDAAgAiBAfIAAgqIgRAAIAAAqIgQAAIAAg5IAyAAIAAA5gAkCAfIAAg8IgWAAIAAA8IgSAAIAAhMIA7AAIAABMgAEYgIIAAgRIATAAIAAARgADxgeIgGgBIgFgDIgDgEIAAgFIAKAAIABADQAAABABAAQAAAAAAAAQABABAAAAQAAAAABAAIAEAAIAEgCIABgDIAKAAIgBAFIgDAEIgEADIgBAAIgFABg");
	this.shape_1.setTransform(-9.9,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ43, new cjs.Rectangle(-39.8,-4.6,79.8,9.3), null);


(lib.Символ42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#EF0000").ss(3,1,1).p("AAAIgIpzw/ITnAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ42, new cjs.Rectangle(-64.3,-55.8,128.6,111.7), null);


(lib.Символ37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ba2_15();
	this.instance.parent = this;
	this.instance.setTransform(-63.5,-80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ37, new cjs.Rectangle(-63.5,-80,127,160), null);


(lib.Символ35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Hands25();
	this.instance.parent = this;
	this.instance.setTransform(-45,-25.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ35, new cjs.Rectangle(-45,-25.5,90,51), null);


(lib.Символ34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666633").s().p("AhJAtQgcgcAUAIQATAJA2ASQA1ASAKhKQAJhMANAJQANAJAAAoQAAAngcAcQgcAcgnAAQgoAAgcgcg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ34, new cjs.Rectangle(-9,-7.3,18.1,14.6), null);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Hands26();
	this.instance.parent = this;
	this.instance.setTransform(-34.5,-19);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ30, new cjs.Rectangle(-34.5,-19,69,38), null);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Hands27();
	this.instance.parent = this;
	this.instance.setTransform(-43.5,-15.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ29, new cjs.Rectangle(-43.5,-15.5,87,31), null);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Hands28();
	this.instance.parent = this;
	this.instance.setTransform(-97,-100.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ28, new cjs.Rectangle(-97,-100.5,194,201), null);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AiHE4IAApvIEPAAIAAJvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ26, new cjs.Rectangle(-13.6,-31.2,27.2,62.4), null);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(2,1,1).p("AhX27ICvAAMAAAAt3IivAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ25, new cjs.Rectangle(-9.8,-147.8,19.6,295.6), null);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AHuCCIAAj+IA8AAIAABbIAuAAQATAAAQAGQAQAFAMALQAMALAFAPQAHAQAAASQgBATgGAPQgHAOgLALQgMAKgPAGQgQAFgTABgAIqBOIAuAAQAOAAAGgJQAHgHgBgOQAAgPgGgHQgGgJgOAAIguAAgAGBCCIAAhpIhQAAIAABpIg8AAIAAj+IA8AAIAABhIBQAAIAAhhIA9AAIAAD+gACLCCIAAh3QAAgVAEgTIgBAAQgJAYgIAMIhCB7Ig4AAIAAj+IA4AAIAAB2QAAARgDAYIABAAQAIgWAKgRIBAh4IA6AAIAAD+gAhcCCIgThBQgFgVgJgJQgJgIgOgBIgTAAIAABoIg9AAIAAj+IA9AAIAABlIATAAIA0hlIBEAAIhCByQAVAJARArIAgBYgAlBCCIgKgrIhZAAIgKArIg9AAIA2jaQACgLAGgHQAFgIAHgFQAIgFAKgCQAKgCANgBQANABAKACQALACAHAFQAIAFAFAIQAGAHACALIA2DagAlXAiIgYhrQgBgGgIAAQgGAAgCAGIgYBrIBBAAgAquCCIAAg1IBXAAQAOgBAGgGQAGgHAAgNQAAgLgHgHQgHgGgOgBIhAAAIAAgxIA5AAQANAAAHgGQAIgGAAgMQABgNgJgGQgGgFgPAAIhNAAIAAg0IBSAAQAUAAAPAEQAQAFALAJQAMAKAFANQAGAOAAATQgBAQgIAOQgIAMgLAIQAIACAFAFQAHAGAEAHQAFAIACAJQADAJAAALQAAARgGAOQgHAOgLAKQgLAJgQAEQgRAEgSABg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ22, new cjs.Rectangle(-68.7,-12.9,137.4,25.9), null);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AOKCAQgOgCgMgFQgLgFgJgGQgIgHgHgJQgGgJgFgKQgEgLgDgMQgDgPgCgkQAAgRAFgiQADgMAFgKQAEgLAGgIQAHgJAJgGQAJgIALgEQALgFAOgDQAOgCAQAAQARAAAOACQAOADALAFQALAEAJAIQAJAGAGAJQAGAIAFALQAFAKACAMQAFAiAAARQgBAkgEAPQgCAMgFALQgEAKgGAJQgHAJgIAHQgJAGgLAFQgMAFgNACQgPACgRABQgQgBgOgCgAOLhEQgKAFgGAMQgFAJgCAPIgBAcQABAnAHAOQAFAMALAFQALAHASAAQATAAALgHQALgFAFgMQAIgOAAgnIgBgcQgCgPgFgJQgFgMgLgFQgLgHgTAAQgSAAgLAHgALRCBIAAhpIhQAAIAABpIg8AAIAAj/IA8AAIAABiIBQAAIAAhiIA9AAIAAD/gAGsCBIAAjKIg5AAIAAg1ICvAAIAAA1Ig6AAIAADKgAEJCBQgWAAgSgHQgQgFgMgMQgLgKgFgOQgGgOAAgPIAAhnQAAgPAFgMQAGgOAKgLQAMgLAQgFQASgHAXAAIBPAAIAAA1IhPAAQgNAAgJAJQgIAIAAAPIAAARIBfAAIAAA0IhfAAIAAAUQAAALAJAIQAIAJANAAIBPAAIAAA1gABLCBIAAhzQAAgVAGg0IgBAAIhBC8IgxAAIhBi8IgBAAQAGA0AAAVIAABzIg3AAIAAj/IBWAAIA6CpIA5ipIBSAAIAAD/gAjzCBIgJgrIhaAAIgJArIg+AAIA2jbQADgKAFgIQAFgHAIgFQAIgFAKgCQAKgCANgBQANABAKACQAKACAIAFQAIAFAFAHQAFAIADAKIA2DbgAkIAhIgYhrQgBgGgIgBQgHABgBAGIgYBrIBBAAgApfCBIAAg1IBWAAQAPgBAGgGQAGgHAAgNQAAgLgHgHQgIgHgOAAIg/AAIAAgxIA5AAQANAAAHgGQAIgGAAgMQAAgNgIgFQgGgGgQAAIhMAAIAAg1IBSAAQAUABAPAEQAQAFALAJQALAKAGANQAGAOgBATQAAAQgJAOQgHAMgMAIQAIACAGAFQAHAGAEAHQAFAIACAIQADAKAAALQAAARgHAOQgGAOgMAKQgLAIgQAFQgQAEgTABgArOCBQgWAAgSgHQgQgFgMgMQgLgKgFgOQgGgOAAgPIAAhnQAAgPAFgMQAGgOAKgLQAMgLAQgFQASgHAXAAIBPAAIAAA1IhPAAQgNAAgJAJQgIAIAAAPIAAARIBfAAIAAA0IhfAAIAAAUQAAALAJAIQAIAJANAAIBPAAIAAA1gAuNCBIAAhpIhQAAIAABpIg8AAIAAj/IA8AAIAABiIBQAAIAAhiIA9AAIAAD/g");
	this.shape.setTransform(13,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ21, new cjs.Rectangle(-92,-13,210.1,26.1), null);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AlpB/QgOgCgMgFQgLgFgJgGQgIgHgHgJQgGgIgFgLQgEgKgDgMQgDgQgCgkQAAgRAFgiQADgMAFgKQAEgKAGgJQAHgJAJgGQAJgHALgFQALgFAOgCQAOgDAQAAQARAAAOADQAOACALAFQALAFAJAHQAJAGAGAJQAGAJAFAKQAFAKACAMQAFAiAAARQgBAkgEAQQgCAMgFAKQgEALgGAIQgHAJgIAHQgJAGgLAFQgMAFgNACQgPADgRAAQgQAAgOgDgAlohFQgKAGgGALQgFAKgCAPIgBAbQABAnAHAOQAFAMALAGQALAGASAAQATAAALgGQALgGAFgMQAIgOAAgnIgBgbQgCgPgFgKQgFgLgLgGQgLgHgTAAQgSAAgLAHgAtVB/QgOgCgLgFQgLgFgJgGQgJgHgGgJQgHgIgEgLQgFgKgCgMQgEgQgBgkQAAgRAFgiQADgMAEgKQAFgKAGgJQAHgJAIgGQAJgHALgFQAMgFANgCQAOgDARAAQARAAAOADQANACAMAFQALAFAIAHQAJAGAHAJQAGAJAFAKQAEAKADAMQAFAiAAARQgCAkgDAQQgDAMgEAKQgFALgGAIQgGAJgJAHQgJAGgLAFQgLAFgOACQgOADgRAAQgRAAgOgDgAtUhFQgKAGgGALQgEAKgCAPIgCAbQABAnAHAOQAGAMAKAGQAMAGASAAQASAAAMgGQAKgGAGgMQAHgOABgnIgBgbQgCgPgFgKQgGgLgKgGQgMgHgSAAQgSAAgMAHgAOpCAIAAg1IAoAAQAPAAAIgIQAFgGAEgOIgKAAQgMAAgJgDQgJgDgHgGQgHgGgGgIQgFgIgEgMIgrh/IBBAAIAeBuQACAGAEADQADACAJAAIAMAAIAch5IBBAAIgwCyQgGAUgGANQgHAPgKAJQgKAKgPAEQgOAFgWAAgAM2CAIgShBQgGgUgJgJQgJgJgNAAIgUAAIAABnIg9AAIAAj+IA9AAIAABlIATAAIA0hlIBEAAIhBByQAUAKARArIAgBXgAJCCAIAAhpIhQAAIAABpIg8AAIAAj+IA8AAIAABhIBQAAIAAhhIA9AAIAAD+gAFMCAIAAh3QAAgVAEgSIgBAAQgJAXgIAMIhCB7Ig5AAIAAj+IA5AAIAAB2QAAARgDAZIABAAQAIgXAKgRIBAh4IA6AAIAAD+gAivCAIAAj+IA9AAIAADJIBHAAIAAjJIA7AAIAADJIBHAAIAAjJIA8AAIAAD+gAqaCAIAAj+IBqAAQATAAAQAGQAQAHAMALQAMAMAHARQAFAPAAASQAAARgEAPQgEAOgKALQgGAIgIAGQgIAFgJAEQgSAHgUAAIguAAIAABRgApegFIAuAAQAOAAAGgIQAHgHAAgUQAAgJgCgFQgBgIgFgFQgIgHgLAAIguAAgAxaCAIAAj+ICWAAIAAA0IhaAAIAADKg");
	this.shape.setTransform(28.6,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ20, new cjs.Rectangle(-82.9,-12.9,223.1,26), null);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AtFbQQlarTAAv9QAAv8FarTQFbrTHqAAQHqAAFbLTQFcLTgBP8QABP9lcLTQlbLTnqAAQnqAAlbrTg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ18, new cjs.Rectangle(-118.4,-246.7,236.9,493.4), null);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.fofo();
	this.instance.parent = this;
	this.instance.setTransform(241,-400,1,1,90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ17, new cjs.Rectangle(-241,-400,482,800), null);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ba2_06();
	this.instance.parent = this;
	this.instance.setTransform(-88.5,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ11, new cjs.Rectangle(-88.5,-90,177,180), null);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ba2_27();
	this.instance.parent = this;
	this.instance.setTransform(-27.5,-30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ10, new cjs.Rectangle(-27.5,-30,55,60), null);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FE4817","#C33A2A"],[0,1],-23.3,-18,-0.6,19.6).s().p("AhSFsQAEgTAGhaQAEhKhWiIIAAmVQAYgHAZgDQBogKBUCSQBWCSgRCMQgRCNgyA+QgxA/g9AhQgnAUgNAAQgHAAACgHg");
	this.shape.setTransform(-0.9,-0.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 1
	this.instance = new lib.ba2();
	this.instance.parent = this;
	this.instance.setTransform(-18.5,-35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ9, new cjs.Rectangle(-18.5,-37.7,37,74.3), null);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ba2_25();
	this.instance.parent = this;
	this.instance.setTransform(-33.8,-79.3,1,1.001,0,6.2,3.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ8, new cjs.Rectangle(-49.8,-79.3,115.8,153.3), null);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#98221D").s().p("AgVBMQgQgPAAgTQAAgKAEgRIgDAFIgDgCIALgWIAGgTIAFgNIAAgIQgCgOAOgSIAEgFIAEgTQAHgSATAGQANAHgDBGQgDBFgHBQIgCABIgwgngAAGhaIAAAAIABgBIgBABg");
	this.shape.setTransform(-51.4,20.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 1
	this.instance = new lib.ba2_18();
	this.instance.parent = this;
	this.instance.setTransform(-50,-68);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ7, new cjs.Rectangle(-55.4,-68,105.4,136), null);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ba2_09();
	this.instance.parent = this;
	this.instance.setTransform(-59,-51);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ6, new cjs.Rectangle(-59,-51,118,102), null);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ba2_03();
	this.instance.parent = this;
	this.instance.setTransform(-24.5,-110.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ5, new cjs.Rectangle(-24.5,-110.5,49,221), null);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FE4817","#C33A2A"],[0,1],-14.4,-22.6,12.3,22.6).s().p("AA8GoQAHgTgFhsQgEhsiWjfQiXjggeArIA8hfQBPh8BxAFQBxAGBeCYQBeCYgGCpQgGCpg0BEQg1BFg2AsQgmAegJAAQgDAAABgGg");
	this.shape.setTransform(-16.2,105.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FE4817","#C33A2A"],[0,1],-20.6,-34.9,5.8,5.3).s().p("ABwCZIgJADQgSgWgJgXQgghRiqgLIDmjAQAdDHgHBbQgFA5gEAAQgDAAgCgVg");
	this.shape_1.setTransform(-12.2,61.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Слой 1
	this.instance = new lib.ba2_21();
	this.instance.parent = this;
	this.instance.setTransform(-96.5,-170);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ4, new cjs.Rectangle(-96.5,-170,193,340), null);


(lib.Символ41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 6
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#EF0000").ss(3,1,1).p("ACFAAQAAA3gnAnQgnAng3AAQg2AAgngnQgngnAAg3QAAg2AngnQAngnA2AAQA3AAAnAnQAnAnAAA2g");
	this.shape.setTransform(7.2,6.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(24));

	// Слой 3
	this.instance = new lib.Символ42();
	this.instance.parent = this;
	this.instance.setTransform(8.4,28.1,1.444,1.444);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({scaleX:1,scaleY:1,rotation:90,x:0,y:0.1,alpha:1},9).to({scaleX:0.46,scaleY:0.46,rotation:180,y:0,alpha:0},10).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ42();
	this.instance_1.parent = this;
	this.instance_1.setTransform(11.2,28.1,1.444,1.444);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({_off:false},0).to({scaleX:1,scaleY:1,rotation:90,x:0,y:0.1,alpha:1},9).to({scaleX:0.46,scaleY:0.46,rotation:180,y:0,alpha:0},10).wait(3));

	// Слой 1
	this.instance_2 = new lib.Символ42();
	this.instance_2.parent = this;
	this.instance_2.setTransform(8.4,28.1,1.444,1.444);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:1,scaleY:1,rotation:90,x:0,y:0.1,alpha:1},9).to({scaleX:0.46,scaleY:0.46,rotation:180,y:0,alpha:0},10).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-84.4,-52.6,185.7,161.3);


(lib.Символ40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ41();
	this.instance.parent = this;
	this.instance.setTransform(-4.4,-4.5,0.481,0.481);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ40, new cjs.Rectangle(-45.1,-29.8,89.4,77.6), null);


(lib.Символ38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ37();
	this.instance.parent = this;

	this.instance_1 = new lib.ba2_152();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-63.5,-80);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance},{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-63.5,-80,127,160);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ34();
	this.instance.parent = this;
	this.instance.setTransform(0.6,2.3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#66CC66").s().p("AgugJQAcgcAnAAQAdAAAXAPIgHAAQg5gihRBeQAGgbAUgUg");
	this.shape.setTransform(-1.1,-4.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#669933").s().p("AhDBEQgcgcAAgoQAAgnAcgcQAcgcAnAAQAoAAAcAcQAcAcAAAnQAAAogcAcQgcAcgoAAQgnAAgcgcgAg6g0QgUAUgGAbQBThfA3AiIAHAAQgWgPgdAAQgnAAgdAdg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ33, new cjs.Rectangle(-9.6,-9.6,19.2,19.2), null);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ35();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-4.8,x:-1.7,y:3.9},10,cjs.Ease.get(-1)).to({rotation:-10.9,x:-4,y:9},13,cjs.Ease.get(1)).to({rotation:-5.3,x:-2.1,y:4.5},11,cjs.Ease.get(-1)).to({rotation:0,x:0,y:0},11,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45,-25.5,90,51);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ26();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:0.59,y:12.8},19).to({scaleY:1,y:0},32).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.6,-31.2,27.2,62.4);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ44();
	this.instance.parent = this;
	this.instance.setTransform(0.4,-10.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ25();
	this.instance_1.parent = this;

	this.instance_2 = new lib.Символ24();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,115.6,0.647,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(1));

	// Слой 3
	this.instance_3 = new lib.Символ45();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0,-2.1,0.382,1.603);
	this.instance_3.alpha = 0.578;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ23, new cjs.Rectangle(-9.8,-147.8,19.6,295.6), null);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 22
	this.instance = new lib.Символ22();
	this.instance.parent = this;
	this.instance.setTransform(-252.7,-76);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-86.3,alpha:1},14,cjs.Ease.get(0.96)).wait(45).to({x:48.1,alpha:0},10,cjs.Ease.get(-1)).to({_off:true},1).wait(5));

	// Символ 21
	this.instance_1 = new lib.Символ21();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-215.3,-31.9);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({_off:false},0).to({x:-48.9,alpha:1},14,cjs.Ease.get(0.96)).wait(45).to({x:85.5,alpha:0},10,cjs.Ease.get(-1)).to({_off:true},1).wait(3));

	// Символ 20
	this.instance_2 = new lib.Символ20();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-208.8,12.2);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(5).to({_off:false},0).to({x:-42.4,alpha:1},14,cjs.Ease.get(0.96)).wait(45).to({x:92,alpha:0},10,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-321.4,-89,137.4,25.9);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ17();
	this.instance.parent = this;
	this.instance.setTransform(-631.6,0);

	this.instance_1 = new lib.Символ17();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-151.2,0);

	this.instance_2 = new lib.Символ17();
	this.instance_2.parent = this;
	this.instance_2.setTransform(329.2,0);

	this.instance_3 = new lib.Символ17();
	this.instance_3.parent = this;
	this.instance_3.setTransform(809.6,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ15, new cjs.Rectangle(-872.6,-400,1923.2,800), null);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ38();
	this.instance.parent = this;
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ12, new cjs.Rectangle(-63.5,-80,127,160), null);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ12();
	this.instance.parent = this;
	this.instance.setTransform(4.8,16);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.94,scaleY:0.96,skewY:-7.9,x:9.2,y:20.5},9).to({scaleX:1,scaleY:1,skewY:0,x:4.8,y:16},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-58.7,-64,127,160);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ11();
	this.instance.parent = this;
	this.instance.setTransform(2.5,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-3.2,x:-2.4,y:5.2},14).to({rotation:0,x:2.5,y:0},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-86,-90,177,180);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ba2_09.png
	this.instance = new lib.Символ6();
	this.instance.parent = this;
	this.instance.setTransform(-89.6,139.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-47.5,x:-46.8,y:175.3},19).to({rotation:0,x:-89.6,y:139.1},20).wait(1));

	// ba2_18.png
	this.instance_1 = new lib.Символ7();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-0.4,101.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:-19.8,x:9.1,y:94.8},19).to({rotation:0,x:-0.4,y:101.3},20).wait(1));

	// ba2_06.png
	this.instance_2 = new lib.Символ2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(52.2,-163.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(40));

	// ba2_15.png
	this.instance_3 = new lib.Символ3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-32.4,-28.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(40));

	// ba2_21.png
	this.instance_4 = new lib.Символ4();
	this.instance_4.parent = this;
	this.instance_4.setTransform(52.1,31.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(40));

	// ba2.png
	this.instance_5 = new lib.Символ9();
	this.instance_5.parent = this;
	this.instance_5.setTransform(62,101.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({rotation:15.2,x:49.1,y:99.4},19).to({rotation:0,x:62,y:101.7},20).wait(1));

	// ba2_03.png
	this.instance_6 = new lib.Символ5();
	this.instance_6.parent = this;
	this.instance_6.setTransform(136.1,84.2,1,1,-20.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({rotation:0,x:106.1,y:91.2},19).to({rotation:-20.2,x:136.1,y:84.2},20).wait(1));

	// ba2_25.png
	this.instance_7 = new lib.Символ8();
	this.instance_7.parent = this;
	this.instance_7.setTransform(9.6,144.8,1,1,17.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({rotation:0,x:-0.4,y:149.7},19).to({rotation:17.4,x:9.6,y:144.8},20).wait(1));

	// ba2_27.png
	this.instance_8 = new lib.Символ10();
	this.instance_8.parent = this;
	this.instance_8.setTransform(53.8,193.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({rotation:42.9,x:26,y:192.4},19).to({rotation:0,x:53.8,y:193.7},20).wait(1));

	// Слой 1
	this.instance_9 = new lib.Символ18();
	this.instance_9.parent = this;
	this.instance_9.setTransform(159.4,151.6,0.738,0.878,0,65.6,32.7,0.1,0);
	this.instance_9.alpha = 0.621;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-148.6,-253.5,578.8,541.8);


(lib.Символ36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 33
	this.instance = new lib.Символ33();
	this.instance.parent = this;
	this.instance.setTransform(-25.8,-4.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,rotation:18.5,x:-22.9,y:-4},8,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:32.5,x:-20.7,y:-3.8},6,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,rotation:17.3,x:-23.1,y:-3.9},7,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:0,x:-25.8,y:-4.1},8,cjs.Ease.get(1)).wait(1));

	// Символ 30
	this.instance_1 = new lib.Символ30();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-2.1,17.1,0.794,0.794);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.81,x:-2.5},8,cjs.Ease.get(-1)).to({scaleX:0.82,x:-2.8},6,cjs.Ease.get(1)).to({scaleX:0.81,x:-2.5},7,cjs.Ease.get(-1)).to({scaleX:0.79,x:-2.1},8,cjs.Ease.get(1)).wait(1));

	// Символ 29
	this.instance_2 = new lib.Символ29();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0.9,-19.9,0.794,0.794);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:0.76,skewY:-0.3,x:2.2,y:-19.7},8,cjs.Ease.get(-1)).to({scaleX:0.74,skewY:-0.7,x:3.1,y:-19.5},6,cjs.Ease.get(1)).to({scaleX:0.77,skewY:-0.3,x:2.1,y:-19.7},7,cjs.Ease.get(-1)).to({scaleX:0.79,skewY:0,x:0.9,y:-19.9},8,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.4,-32.2,70.8,64.5);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ36();
	this.instance.parent = this;
	this.instance.setTransform(-88.4,-52.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Символ 31
	this.instance_1 = new lib.Символ31();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-82.2,-89.3,0.794,0.794);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Символ 28
	this.instance_2 = new lib.Символ28();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0.3,1.6,0.794,0.794);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ32, new cjs.Rectangle(-123.8,-109.6,201.1,191), null);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ15();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:480},67).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-872.6,-400,1923.2,800);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ1();
	this.instance.parent = this;
	this.instance.setTransform(-17.9,6.8,0.736,0.736);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:22.8},9).to({y:16.4},4).to({y:6.8},6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-127.3,-179.8,426.1,398.8);


(lib.Символ39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ32();
	this.instance.parent = this;
	this.instance.setTransform(23.3,14.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ39, new cjs.Rectangle(-100.5,-95.4,201.1,191), null);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ39();
	this.instance.parent = this;
	this.instance.setTransform(30.2,50.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:42.5},9,cjs.Ease.get(-1)).to({y:33.6},10,cjs.Ease.get(1)).to({y:42},10,cjs.Ease.get(-1)).to({y:50.5},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70.4,-45,201.1,191);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ13();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-31.2},19,cjs.Ease.get(-1)).to({x:-64},20,cjs.Ease.get(1)).to({x:-32},20,cjs.Ease.get(-1)).to({x:0},20,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-127.3,-179.8,426.1,398.8);


(lib.woma = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_19 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(19).call(this.frame_19).wait(21));

	// Слой 1
	this.instance = new lib.Символ14();
	this.instance.parent = this;
	this.instance.setTransform(-85.7,-19.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.16,scaleY:1.16},9,cjs.Ease.get(-1)).to({scaleX:1.33,scaleY:1.33},10,cjs.Ease.get(0.98)).to({scaleX:1.17,scaleY:1.17},10,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-213,-199.4,426.1,398.8);


// stage content:
(lib.kosinka600300 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		document.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		window.open(clickTAG, "_blank");
		}
		
		var bodyStyle = document.body.style;
		bodyStyle.margin = 0;
		bodyStyle.padding = 0;
		
		stage.canvas.style.cursor = "none";
		this.prik.mouseEnabled = false;
		this.addEventListener("tick", fl_CustomMouseCursor.bind(this));
		
		this.cel.alpha=0;
		this.prik.alpha=0;
		
		function fl_CustomMouseCursor() {
			this.cel.x = stage.mouseX;
			this.cel.y = stage.mouseY;
			this.prik.x = stage.mouseX;
		}
		
		
		
		
		document.addEventListener("mouseover", fl_Clickover.bind(this));
		
		function fl_Clickover()
		{
		    this.hand.alpha=0;
			this.cel.alpha=1;
			this.prik.alpha=1;
			this.woma.gotoAndPlay(1);
		
		}
		
		document.addEventListener("mouseout", fl_Clickout.bind(this));
		
		function fl_Clickout()
		{
		    this.hand.alpha=1;
			this.cel.alpha=0;
			this.prik.alpha=0;
			this.woma.gotoAndPlay(21);
		
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 16
	this.cel = new lib.Символ40();
	this.cel.parent = this;
	this.cel.setTransform(1167.3,158.3);

	this.timeline.addTween(cjs.Tween.get(this.cel).wait(1));

	// Слой 14
	this.prik = new lib.Символ27();
	this.prik.parent = this;
	this.prik.setTransform(783.8,231.8,1,1,28.7);

	this.hand = new lib.Символ27();
	this.hand.parent = this;
	this.hand.setTransform(189.4,235.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.hand},{t:this.prik}]}).wait(1));

	// Слой 13
	this.instance = new lib.Символ23();
	this.instance.parent = this;
	this.instance.setTransform(585,152.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 12
	this.instance_1 = new lib.Символ19();
	this.instance_1.parent = this;
	this.instance_1.setTransform(184.9,121.9);
	this.instance_1.shadow = new cjs.Shadow("#000000",0,0,4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// ba2_09.png
	this.instance_2 = new lib.Символ43();
	this.instance_2.parent = this;
	this.instance_2.setTransform(75.4,292,1.674,1.674);

	this.woma = new lib.woma();
	this.woma.parent = this;
	this.woma.setTransform(520.7,172.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.woma},{t:this.instance_2}]}).wait(1));

	// Слой 11
	this.instance_3 = new lib.Символ16();
	this.instance_3.parent = this;
	this.instance_3.setTransform(103.5,173.3,0.578,0.578,5.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-119.9,47.1,1631.5,561.7);
// library properties:
lib.properties = {
	id: '7B89DDA6DA0A4655B927D58A8B55DAA3',
	width: 600,
	height: 300,
	fps: 26,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/kosinka600_300_atlas_.png", id:"kosinka600_300_atlas_"}
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
an.compositions['7B89DDA6DA0A4655B927D58A8B55DAA3'] = {
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