(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.arrow = function() {
	this.initialize(img.arrow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,27,80);


(lib.atack = function() {
	this.initialize(img.atack);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,270,116);


(lib.baba = function() {
	this.initialize(img.baba);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,144,269);


(lib.bal1 = function() {
	this.initialize(img.bal1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,523,344);


(lib.bal2 = function() {
	this.initialize(img.bal2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,271,153);


(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,982,552);


(lib.horse = function() {
	this.initialize(img.horse);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,37,44);


(lib.krepost = function() {
	this.initialize(img.krepost);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,128,17);


(lib.lizo = function() {
	this.initialize(img.lizo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,51,58);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,294,134);


(lib.mish = function() {
	this.initialize(img.mish);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,35,35);


(lib.ruka = function() {
	this.initialize(img.ruka);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,87,45);


(lib.txt = function() {
	this.initialize(img.txt);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,211,65);


(lib.unit = function() {
	this.initialize(img.unit);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,10,25);// helper functions:

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


(lib.Символ75 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.mish();
	this.instance.parent = this;
	this.instance.setTransform(-24,-24,1.394,1.394);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ75, new cjs.Rectangle(-24,-24,48.8,48.8), null);


(lib.Символ61 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(6.9,1,1).p("AAArKIAAFDAAAFwIAAFbALLAAIlXAAAmXAAIkzAA");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ61, new cjs.Rectangle(-74.9,-74.9,149.9,149.9), null);


(lib.Символ60 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(6.9,1,1).p("ABGAAQAAAdgUAVQgVAUgdAAQgcAAgVgUQgUgVAAgdQAAgcAUgVQAVgUAcAAQAdAAAVAUQAUAVAAAcg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ60, new cjs.Rectangle(-10.4,-10.4,20.9,20.9), null);


(lib.Символ55 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bal1();
	this.instance.parent = this;
	this.instance.setTransform(-105.5,-69.4,0.403,0.403);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ55, new cjs.Rectangle(-105.5,-69.4,211,138.8), null);


(lib.Символ53 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bal2();
	this.instance.parent = this;
	this.instance.setTransform(-54.6,-30.8,0.403,0.403);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ53, new cjs.Rectangle(-54.6,-30.8,109.4,61.8), null);


(lib.Символ44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgMJeQhahAALhwQAbkQARkPQiTAChCiHQgfhAAUhGQAfhrBEhWQAug5BNgCQAxgBAwgDQDXgPAMDJQANDogcDtQgXDHgDDHQgCBgg8BHQguA2g1AAQgpAAgsggg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ44, new cjs.Rectangle(-27.9,-63.8,55.9,127.6), null);


(lib.Символ41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AiRGUIAYluQi/hSBPjVQAihdA1hWQAfgyAmguQApgzBAAAQDvgggLDUQgCA1gGAzQgMBvAABxQADFQiSElQgRAggmACIgRAAQiyAAAMi4g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ41, new cjs.Rectangle(-25.7,-58.8,51.4,117.7), null);


(lib.Символ37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AkQGFQgdh9AFiAQAIjnA4jdIADgMQhCh7CDhpQAzgqBDgGICagQQCmAbgYCHQAjA+AFBdQAVFjggFdQgSDLjBAPQgXACgVAAQjzAAg1jog");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ37, new cjs.Rectangle(-29.8,-62.1,59.6,124.3), null);


(lib.Символ34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("ABfJyQgtg7gDhOQgDh4ACh4QhSgIhigNIgVgDQACC6h3B8QgZAbgmgFQiugXgsizQgdhyAihyQANgsgOgsQhbkTBkj6QANggAKgkQAzi8DfAlQA8ALAvAoQAHgCAGgGQAmgnA1gKIAYgCQDcgsB3CeIAoA1QBABVBrA2QAtAXAFAzQAMCKhMB/QgoBBAEBPQANENgiEHQgKBHhGAZQg7AUgyAAQhwAAhLhig");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ34, new cjs.Rectangle(-59.3,-72.3,118.7,144.8), null);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#996600").ss(1,1,1).p("AgWAgIAtg/");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ32, new cjs.Rectangle(-3.3,-4.2,6.6,8.4), null);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bg();
	this.instance.parent = this;
	this.instance.setTransform(-491,-276);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ30, new cjs.Rectangle(-491,-276,982,552), null);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FEE300").s().p("AiDBMQgEgIgGgFQgGgFgIgCQgIgCgLAAIg0AAQgLAAgIACQgIACgGAFQgGAFgEAIQgEAHgDALIgDgBIADgtQAIAAAFgDQAFgDADgEIAGgMIAGgNIAGgWIAIgsIgBgPQAAgHgDgDQgCgEgFgCIgMgCIAAgDIBvABIAOgBIAAADIgMACQgEACgCAEQgCADgBAHIgBAPIABBVQAAAFADAEQACADAFACIAOACIABAXIACAWIgDABQgDgLgEgHgAjZhNQgDADAAAGIgCATQgCAXgEAQIgLAlIgFAMIgBACQAAABAAAAQAAABABAAQAAABAAAAQABABAAAAQACACADAAIARABIA1gCIAAh/IgngBQgGABgEAEgAMUA3IAAgDIANgCQAFgCACgEQACgDABgHIAAhmQgBgHgCgDQgCgEgFgCIgNgCIAAgDIBCAAIAAADIgNACQgEACgDAEQgCADAAAHIgBAtIAcgFQAKAAAJAEQAJACAHAHQAHAFAFAIQAEAIAAAKQAAALgEAHQgFAHgHAGQgIAFgJACQgJACgIAAgANLgTIgMAEIAAA8IALAEIAKAAQAIAAAGgBQAHgCAFgFQAFgEADgGQACgHAAgJQAAgHgCgGQgCgGgFgFQgEgFgGgDQgGgDgGAAgAFVA3IAAgDIAMgCQAFgCACgEQADgDAAgHIAAhmQAAgHgDgDQgCgEgFgCIgNgCIAAgDIBCAAIAAADIgMACQgFACgCAEQgCADgBAHIgBAtIAdgFQAJAAAJAEQAJACAIAHQAHAFAEAIQAFAIAAAKQAAALgFAHQgFAHgHAGQgIAFgIACQgJACgIAAgAGMgTIgNAEIAAA8IALAEIAKAAQAIAAAHgBQAGgCAGgFQAFgEACgGQADgHAAgJQAAgHgDgGQgCgGgEgFQgEgFgGgDQgGgDgHAAgAo7A3IAAgDIAMgCQAEgCADgEQACgDAAgHIAAhmQAAgHgDgDQgCgEgEgCIgNgCIAAgDIAOABIAygCQAJAAAKACQAKACAJAFQAJAEAFAJQAGAHAAAMQAAAKgGAIQgGAJgKACIAAABQAPAEAJALQAEAEACAGQACAHAAAIQAAALgEAGQgEAHgIAEQgHAEgJACQgJABgKAAgAoRAqQAAACAEABIAHADIATABQAIAAAHgCQAHgCAFgFQAKgJAAgSQAAgJgGgIQgGgIgHgFIgWADIgNgBQgHgBgGgDgAoHhTIgKACIAAA4QAGADAGAAIAMACQAOAAAKgIQAJgIAAgOQAAgIgDgGQgDgGgFgEQgFgFgHgCQgHgCgHAAgAL1A2IjWABIAAgDIANgCQAFgCACgEQACgDABgHIAAhmQgBgHgCgDQgCgEgFgCIgMgCIAAgDIBBAAIAAADIgNACQgEACgDAEQgCADAAAHIgBByIAQABIAugBIgBhyQAAgHgDgDQgCgEgEgCIgNgCIAAgDIAxABIARgBIAAADIgNACQgFACgCAEQgCADgBAHIgBAOIAABkIAQABIAQABIAegCIAAhkIAAgOQgBgHgCgDQgDgEgEgCIgMgCIAAgDIAPABIAhAAIARgBIAAADIgNACQgEACgDAEQgCADgBAHIAAAOIAABJIAAAPQABAHACADQACAEAFACIAMACIAAADIgOgBgAH/A2IgxABIAAgDIAMgCQAFgCACgEQACgDABgHIAAgPIAAhJIAAgOQgBgHgCgDQgCgEgFgCIgMgCIAAgDIASABIAgAAIAOgBIAAADIgMACQgEACgCAEQgDADAAAHIgBAOIAABJIABAPQAAAHADADQACAEAFACIAMACIAAADIgQgBgAE9A2IgiAAIgRABIAAgDIAJgCIAIgCQADgCABgEQACgDAAgGIAAgHIgQhiIgBAAIgnBeIgLAgIgBAAQgKgigOgfIgcg/IgBAAIgKBhIABANQABAFADAEQADADAFACQAFACAIAAIAAADIg/AAIAAgDIAJgCIAIgDIAGgGQADgDABgEIAPhuQgFgEgGgDIgNgDIAAgDIBBAAIAAADIgIADQgDADAAAFIABAIIAhBSIAWguQAKgXAIgYIgFgGIgHgCIAAgDIAtABIAOgBIAAADQgJABgGAEQgGAEAAAKIAQBjIADAIIAEAGQACACAEABQAFACAHABIAAADIgRgBgAApA2IgvABIAAgDIALgCQAFgCACgEQACgDABgHIAAgPIAAhTIhQBlIACAGQACAEACABIAHADIAKABIAAADIhCAAIAAgDIANgCQAEgCACgEQADgDAAgHIAAhmQAAgHgDgDQgCgEgFgCIgMgCIAAgDIBBAAIAAADIgNACQgEACgCAEQgCADgBAHIAABeIBPhkQgCgGgFgDQgFgCgJgBIAAgDIAyABIAOgBIAAADIgMACQgFACgCAEQgCADAAAHIgBAOIAABJIABAPQAAAHACADQADAEAEACIANACIAAADIgRgBgAkxA2IhnAAIgNABIAAgDIANgCQAEgCACgEQACgDABgHIAAhmQgBgHgCgDQgCgEgFgCIgMgCIAAgDIB7AAIABAnIgDABQgCgKgFgIQgFgGgGgEQgHgDgHgCIgQgBIgfABIAAA3IARgBQAIAAAGgBQAGgBAEgDQAJgHACgQIADAAIAAA+IgDAAQgCgHgDgGQgCgGgFgDQgEgEgGgBIgegBIAABEIAFABIAUACQANgBAKgCQALgCAJgFQAIgFAIgIQAIgHAIgLIACADIgUAsgApUA2IgyABIAAgDQAJgBAHgDQAGgEAAgGIgBgEIgPgrIguAAIgPAoIgBACIgBADQAAAEADADIAFAFIANAEIAAADIg1AAIAAgDQAHgCAEgCQAFgDADgFIAFgJIAshrIABgCIgBgEIgCgEIAKgCIAJgFIAuB9QADAJAGAFQAFAFALABIAAADIgRgBgAqsgPIApAAIgTg4gAr3A2IgwABIAAgDIAMgCQAFgCACgEQACgDABgHIAAgPIAAgnIhRAAIAAA2QABAHACADQACAEAFACIANACIAAADIhCAAIAAgDIANgCQAEgCACgEQADgDAAgHIAAhmQAAgHgDgDQgCgEgFgCIgMgCIAAgDIBBAAIAAADIgNACQgEACgCAEQgCADgBAHIAAApIBRAAIAAgbIAAgOQgBgHgCgDQgCgEgFgCIgNgCIAAgDIAzABIAOgBIAAADIgMACQgFACgCAEQgCADAAAHIgBAOIAABJIABAPQAAAHACADQADAEAEACIANACIAAADIgRgBg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 1 - копия: 2 - копия
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#6C0000").s().p("AiDBMQgEgIgGgFQgGgFgIgCQgIgCgLAAIg0AAQgLAAgIACQgIACgGAFQgGAFgEAIQgEAHgDALIgDgCIADgsQAIAAAFgDQAFgDADgEIAGgMIAGgNIAGgWIAIgsIgBgQQAAgFgDgFQgCgDgFgCIgMgDIAAgCIBvABIAOgBIAAACIgMADQgEACgCADQgCAFgBAFIgBAQIABBVQAAAGADADQACADAFABIAOADIABAXIACAVIgDACQgDgLgEgHgAjZhOQgDAFAAAEIgCAUQgCAYgEAPIgLAlIgFALIgBADQAAABAAAAQAAABABAAQAAABAAAAQABABAAAAQACABADAAIARABIA1gBIAAh/IgngBQgGABgEADgAMUA3IAAgCIANgDQAFgCACgEQACgEABgGIAAhnQgBgFgCgFQgCgDgFgCIgNgDIAAgCIBCAAIAAACIgNADQgEACgDADQgCAFAAAFIgBAuIAcgFQAKAAAJADQAJAEAHAFQAHAGAFAJQAEAGAAALQAAALgEAHQgFAIgHAEQgIAFgJADQgJACgIAAgANLgTIgMAEIAAA8IALAEIAKABQAIAAAGgDQAHgBAFgFQAFgEADgGQACgHAAgJQAAgHgCgHQgCgFgFgFQgEgFgGgDQgGgDgGAAgAFVA3IAAgCIAMgDQAFgCACgEQADgEAAgGIAAhnQAAgFgDgFQgCgDgFgCIgNgDIAAgCIBCAAIAAACIgMADQgFACgCADQgCAFgBAFIgBAuIAdgFQAJAAAJADQAJAEAIAFQAHAGAEAJQAFAGAAALQAAALgFAHQgFAIgHAEQgIAFgIADQgJACgIAAgAGMgTIgNAEIAAA8IALAEIAKABQAIAAAHgDQAGgBAGgFQAFgEACgGQADgHAAgJQAAgHgDgHQgCgFgEgFQgEgFgGgDQgGgDgHAAgAo7A3IAAgCIAMgDQAEgCADgEQACgEAAgGIAAhnQAAgFgDgFQgCgDgEgCIgNgDIAAgCIAOABIAygCQAJAAAKACQAKACAJAFQAJAFAFAHQAGAJAAAMQAAAJgGAJQgGAHgKAEIAAAAQAPAFAJAKQAEAEACAHQACAGAAAIQAAAKgEAHQgEAHgIAEQgHAEgJABQgJACgKAAgAoRAqQAAACAEABIAHACIATADQAIAAAHgDQAHgCAFgEQAKgKAAgSQAAgKgGgGQgGgJgHgFIgWACIgNgBQgHAAgGgDgAoHhSIgKABIAAA3QAGADAGACIAMABQAOAAAKgIQAJgIAAgPQAAgHgDgGQgDgGgFgEQgFgEgHgDQgHgCgHAAgAL1A2IjWABIAAgCIANgDQAFgCACgEQACgEABgGIAAhnQgBgFgCgFQgCgDgFgCIgMgDIAAgCIBBAAIAAACIgNADQgEACgDADQgCAFAAAFIgBBzIAQABIAugBIgBhzQAAgFgDgFQgCgDgEgCIgNgDIAAgCIAxABIARgBIAAACIgNADQgFACgCADQgCAFgBAFIgBAPIAABkIAQABIAQAAIAegBIAAhkIAAgPQgBgFgCgFQgDgDgEgCIgMgDIAAgCIAPABIAhAAIARgBIAAACIgNADQgEACgDADQgCAFgBAFIAAAPIAABJIAAAPQABAGACAEQACAEAFACIAMADIAAACIgOgBgAH/A2IgxABIAAgCIAMgDQAFgCACgEQACgEABgGIAAgPIAAhJIAAgPQgBgFgCgFQgCgDgFgCIgMgDIAAgCIASABIAgAAIAOgBIAAACIgMADQgEACgCADQgDAFAAAFIgBAPIAABJIABAPQAAAGADAEQACAEAFACIAMADIAAACIgQgBgAE9A2IgiAAIgRABIAAgCIAJgCIAIgEQADgBABgEQACgDAAgGIAAgHIgQhiIgBAAIgnBeIgLAgIgBAAQgKgigOgeIgchAIgBAAIgKBiIABAMQABAFADAEQADADAFACQAFACAIABIAAACIg/AAIAAgCIAJgCIAIgEIAGgFQADgEABgEIAPhuQgFgEgGgCIgNgFIAAgCIBBAAIAAACIgIAFQgDACAAAGIABAHIAhBSIAWgtQAKgYAIgZIgFgEIgHgEIAAgCIAtABIAOgBIAAACQgJACgGAEQgGAEAAALIAQBiIADAIIAEAFQACADAEACQAFACAHABIAAACIgRgBgAApA2IgvABIAAgCIALgDQAFgCACgEQACgEABgGIAAgPIAAhTIhQBkIACAHQACADACACIAHADIAKACIAAACIhCAAIAAgCIANgDQAEgCACgEQADgEAAgGIAAhnQAAgFgDgFQgCgDgFgCIgMgDIAAgCIBBAAIAAACIgNADQgEACgCADQgCAFgBAFIAABfIBPhjQgCgHgFgCQgFgDgJgCIAAgCIAyABIAOgBIAAACIgMADQgFACgCADQgCAFAAAFIgBAPIAABJIABAPQAAAGACAEQADAEAEACIANADIAAACIgRgBgAkxA2IhnAAIgNABIAAgCIANgDQAEgCACgEQACgEABgGIAAhnQgBgFgCgFQgCgDgFgCIgMgDIAAgCIB7AAIABAnIgDABQgCgLgFgGQgFgHgGgEQgHgDgHgCIgQgBIgfABIAAA3IARgBQAIAAAGgBQAGgBAEgEQAJgFACgQIADAAIAAA+IgDAAQgCgIgDgHQgCgFgFgEQgEgCgGgBIgegBIAABCIAFABIAUADQANAAAKgDQALgCAJgFQAIgFAIgIQAIgHAIgLIACACIgUAtgApUA2IgyABIAAgCQAJgCAHgEQAGgDAAgHIgBgDIgPgrIguAAIgPAoIgBADIgBACQAAAEADADIAFAFIANAFIAAACIg1AAIAAgCQAHgCAEgEQAFgDADgEIAFgJIAshrIABgDIgBgDIgCgEIAKgDIAJgDIAuB9QADAIAGAFQAFAFALACIAAACIgRgBgAqsgPIApAAIgTg4gAr3A2IgwABIAAgCIAMgDQAFgCACgEQACgEABgGIAAgPIAAgmIhRAAIAAA1QABAGACAEQACAEAFACIANADIAAACIhCAAIAAgCIANgDQAEgCACgEQADgEAAgGIAAhnQAAgFgDgFQgCgDgFgCIgMgDIAAgCIBBAAIAAACIgNADQgEACgCADQgCAFgBAFIAAAqIBRAAIAAgbIAAgPQgBgFgCgFQgCgDgFgCIgNgDIAAgCIAzABIAOgBIAAACIgMADQgFACgCADQgCAFAAAFIgBAPIAABJIABAPQAAAGACAEQADAEAEACIANADIAAACIgRgBg");
	this.shape_1.setTransform(0,1.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Слой 1 - копия: 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#6C0000").s().p("AiDBMQgEgIgGgFQgGgEgIgDQgIgCgLAAIg0AAQgLAAgIACQgIADgGAEQgGAFgEAIQgEAHgDAKIgDAAIADgtQAIAAAFgDQAFgDADgEIAGgLIAGgOIAGgVIAIgtIgBgPQAAgHgDgDQgCgEgFgCIgMgCIAAgDIBvABIAOgBIAAADIgMACQgEACgCAEQgCADgBAHIgBAPIABBVQAAAFADAEQACADAFACIAOACIABAYIACAVIgDAAQgDgKgEgHgAjZhNQgDAEAAAFIgCATQgCAXgEAQIgLAlIgFAMIgBACQAAABAAAAQAAABABAAQAAABAAAAQABABAAAAQACABADABIARABIA1gCIAAh/IgngBQgGABgEAEgAMUA3IAAgDIANgCQAFgCACgDQACgFABgGIAAhmQgBgHgCgDQgCgEgFgCIgNgCIAAgDIBCAAIAAADIgNACQgEACgDAEQgCADAAAHIgBAtIAcgFQAKABAJADQAJACAHAHQAHAFAFAIQAEAIAAAKQAAAKgEAIQgFAHgHAGQgIAEgJADQgJACgIAAgANLgTIgMAEIAAA8IALADIAKABQAIAAAGgBQAHgCAFgFQAFgEADgHQACgGAAgJQAAgHgCgGQgCgGgFgFQgEgFgGgDQgGgDgGAAgAFVA3IAAgDIAMgCQAFgCACgDQADgFAAgGIAAhmQAAgHgDgDQgCgEgFgCIgNgCIAAgDIBCAAIAAADIgMACQgFACgCAEQgCADgBAHIgBAtIAdgFQAJABAJADQAJACAIAHQAHAFAEAIQAFAIAAAKQAAAKgFAIQgFAHgHAGQgIAEgIADQgJACgIAAgAGMgTIgNAEIAAA8IALADIAKABQAIAAAHgBQAGgCAGgFQAFgEACgHQADgGAAgJQAAgHgDgGQgCgGgEgFQgEgFgGgDQgGgDgHAAgAo7A3IAAgDIAMgCQAEgCADgDQACgFAAgGIAAhmQAAgHgDgDQgCgEgEgCIgNgCIAAgDIAOABIAygCQAJAAAKACQAKACAJAFQAJAEAFAJQAGAHAAAMQAAALgGAHQgGAJgKACIAAABQAPAEAJAKQAEAFACAGQACAHAAAIQAAALgEAGQgEAHgIAEQgHAEgJACQgJABgKAAgAoRAqQAAACAEABIAHADIATABQAIABAHgDQAHgCAFgFQAKgJAAgSQAAgJgGgIQgGgHgHgGIgWADIgNgBQgHgBgGgDgAoHhTIgKADIAAA3QAGACAGABIAMACQAOAAAKgIQAJgIAAgOQAAgIgDgGQgDgGgFgEQgFgFgHgCQgHgCgHAAgAL1A2IjWABIAAgDIANgCQAFgCACgDQACgFABgGIAAhmQgBgHgCgDQgCgEgFgCIgMgCIAAgDIBBAAIAAADIgNACQgEACgDAEQgCADAAAHIgBByIAQABIAugBIgBhyQAAgHgDgDQgCgEgEgCIgNgCIAAgDIAxABIARgBIAAADIgNACQgFACgCAEQgCADgBAHIgBAPIAABjIAQABIAQABIAegCIAAhjIAAgPQgBgHgCgDQgDgEgEgCIgMgCIAAgDIAPABIAhAAIARgBIAAADIgNACQgEACgDAEQgCADgBAHIAAAPIAABIIAAAPQABAGACAFQACADAFACIAMACIAAADIgOgBgAH/A2IgxABIAAgDIAMgCQAFgCACgDQACgFABgGIAAgPIAAhIIAAgPQgBgHgCgDQgCgEgFgCIgMgCIAAgDIASABIAgAAIAOgBIAAADIgMACQgEACgCAEQgDADAAAHIgBAPIAABIIABAPQAAAGADAFQACADAFACIAMACIAAADIgQgBgAE9A2IgiAAIgRABIAAgDIAJgCIAIgCQADgCABgEQACgDAAgGIAAgHIgQhiIgBAAIgnBdIgLAhIgBAAQgKgigOgfIgcg/IgBAAIgKBhIABANQABAFADAEQADADAFACQAFACAIAAIAAADIg/AAIAAgDIAJgCIAIgDIAGgGQADgDABgEIAPhvQgFgDgGgDIgNgDIAAgDIBBAAIAAADIgIADQgDADAAAFIABAHIAhBTIAWguQAKgXAIgYIgFgGIgHgCIAAgDIAtABIAOgBIAAADQgJABgGAEQgGAEAAAKIAQBjIADAHIAEAHQACACAEABQAFACAHABIAAADIgRgBgAApA2IgvABIAAgDIALgCQAFgCACgDQACgFABgGIAAgPIAAhTIhQBlIACAGQACAEACABIAHADIAKABIAAADIhCAAIAAgDIANgCQAEgCACgDQADgFAAgGIAAhmQAAgHgDgDQgCgEgFgCIgMgCIAAgDIBBAAIAAADIgNACQgEACgCAEQgCADgBAHIAABeIBPhkQgCgGgFgDQgFgDgJAAIAAgDIAyABIAOgBIAAADIgMACQgFACgCAEQgCADAAAHIgBAPIAABIIABAPQAAAGACAFQADADAEACIANACIAAADIgRgBgAkxA2IhnAAIgNABIAAgDIANgCQAEgCACgDQACgFABgGIAAhmQgBgHgCgDQgCgEgFgCIgMgCIAAgDIB7AAIABAnIgDABQgCgKgFgIQgFgGgGgEQgHgEgHgBIgQgBIgfABIAAA3IARgBQAIAAAGgBQAGgBAEgDQAJgGACgRIADAAIAAA+IgDAAQgCgHgDgGQgCgGgFgDQgEgEgGgBIgegBIAABEIAFABIAUABQANAAAKgCQALgCAJgFQAIgFAIgHQAIgIAIgKIACACIgUAsgApUA2IgyABIAAgDQAJgBAHgDQAGgEAAgGIgBgEIgPgqIguAAIgPAmIgBADIgBADQAAAEADADIAFAFIANAEIAAADIg1AAIAAgDQAHgCAEgCQAFgDADgFIAFgKIAshqIABgCIgBgEIgCgEIAKgCIAJgFIAuB9QADAJAGAFQAFAFALABIAAADIgRgBgAqsgPIApAAIgTg4gAr3A2IgwABIAAgDIAMgCQAFgCACgDQACgFABgGIAAgPIAAgnIhRAAIAAA2QABAGACAFQACADAFACIANACIAAADIhCAAIAAgDIANgCQAEgCACgDQADgFAAgGIAAhmQAAgHgDgDQgCgEgFgCIgMgCIAAgDIBBAAIAAADIgNACQgEACgCAEQgCADgBAHIAAAqIBRAAIAAgbIAAgPQgBgHgCgDQgCgEgFgCIgNgCIAAgDIAzABIAOgBIAAADIgMACQgFACgCAEQgCADAAAHIgBAPIAABIIABAPQAAAGACAFQADADAEACIANACIAAADIgRgBg");
	this.shape_2.setTransform(0,1);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// Слой 1 - копия: 2
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#6C0000").s().p("AiDBMQgEgIgGgFQgGgEgIgDQgIgCgLAAIg0AAQgLAAgIACQgIADgGAEQgGAFgEAIQgEAHgDAKIgDAAIADgtQAIAAAFgDQAFgDADgEIAGgLIAGgOIAGgVIAIgtIgBgPQAAgHgDgDQgCgEgFgCIgMgCIAAgDIBvABIAOgBIAAADIgMACQgEACgCAEQgCADgBAHIgBAPIABBVQAAAFADAEQACADAFACIAOACIABAYIACAVIgDAAQgDgKgEgHgAjZhNQgDAEAAAFIgCATQgCAXgEAQIgLAlIgFAMIgBACQAAABAAAAQAAABABAAQAAABAAAAQABABAAAAQACABADABIARABIA1gCIAAh/IgngBQgGABgEAEgAMUA3IAAgDIANgCQAFgCACgDQACgFABgGIAAhmQgBgHgCgDQgCgEgFgCIgNgCIAAgDIBCAAIAAADIgNACQgEACgDAEQgCADAAAHIgBAtIAcgFQAKABAJADQAJACAHAHQAHAFAFAIQAEAIAAAKQAAAKgEAIQgFAHgHAGQgIAEgJADQgJACgIAAgANLgTIgMAEIAAA8IALADIAKABQAIAAAGgBQAHgCAFgFQAFgEADgHQACgGAAgJQAAgHgCgGQgCgGgFgFQgEgFgGgDQgGgDgGAAgAFVA3IAAgDIAMgCQAFgCACgDQADgFAAgGIAAhmQAAgHgDgDQgCgEgFgCIgNgCIAAgDIBCAAIAAADIgMACQgFACgCAEQgCADgBAHIgBAtIAdgFQAJABAJADQAJACAIAHQAHAFAEAIQAFAIAAAKQAAAKgFAIQgFAHgHAGQgIAEgIADQgJACgIAAgAGMgTIgNAEIAAA8IALADIAKABQAIAAAHgBQAGgCAGgFQAFgEACgHQADgGAAgJQAAgHgDgGQgCgGgEgFQgEgFgGgDQgGgDgHAAgAo7A3IAAgDIAMgCQAEgCADgDQACgFAAgGIAAhmQAAgHgDgDQgCgEgEgCIgNgCIAAgDIAOABIAygCQAJAAAKACQAKACAJAFQAJAEAFAJQAGAHAAAMQAAALgGAHQgGAJgKACIAAABQAPAEAJAKQAEAFACAGQACAHAAAIQAAALgEAGQgEAHgIAEQgHAEgJACQgJABgKAAgAoRAqQAAACAEABIAHADIATABQAIABAHgDQAHgCAFgFQAKgJAAgSQAAgJgGgIQgGgHgHgGIgWADIgNgBQgHgBgGgDgAoHhTIgKADIAAA3QAGACAGABIAMACQAOAAAKgIQAJgIAAgOQAAgIgDgGQgDgGgFgEQgFgFgHgCQgHgCgHAAgAL1A2IjWABIAAgDIANgCQAFgCACgDQACgFABgGIAAhmQgBgHgCgDQgCgEgFgCIgMgCIAAgDIBBAAIAAADIgNACQgEACgDAEQgCADAAAHIgBByIAQABIAugBIgBhyQAAgHgDgDQgCgEgEgCIgNgCIAAgDIAxABIARgBIAAADIgNACQgFACgCAEQgCADgBAHIgBAPIAABjIAQABIAQABIAegCIAAhjIAAgPQgBgHgCgDQgDgEgEgCIgMgCIAAgDIAPABIAhAAIARgBIAAADIgNACQgEACgDAEQgCADgBAHIAAAPIAABIIAAAPQABAGACAFQACADAFACIAMACIAAADIgOgBgAH/A2IgxABIAAgDIAMgCQAFgCACgDQACgFABgGIAAgPIAAhIIAAgPQgBgHgCgDQgCgEgFgCIgMgCIAAgDIASABIAgAAIAOgBIAAADIgMACQgEACgCAEQgDADAAAHIgBAPIAABIIABAPQAAAGADAFQACADAFACIAMACIAAADIgQgBgAE9A2IgiAAIgRABIAAgDIAJgCIAIgCQADgCABgEQACgDAAgGIAAgHIgQhiIgBAAIgnBdIgLAhIgBAAQgKgigOgfIgcg/IgBAAIgKBhIABANQABAFADAEQADADAFACQAFACAIAAIAAADIg/AAIAAgDIAJgCIAIgDIAGgGQADgDABgEIAPhvQgFgDgGgDIgNgDIAAgDIBBAAIAAADIgIADQgDADAAAFIABAHIAhBTIAWguQAKgXAIgYIgFgGIgHgCIAAgDIAtABIAOgBIAAADQgJABgGAEQgGAEAAAKIAQBjIADAHIAEAHQACACAEABQAFACAHABIAAADIgRgBgAApA2IgvABIAAgDIALgCQAFgCACgDQACgFABgGIAAgPIAAhTIhQBlIACAGQACAEACABIAHADIAKABIAAADIhCAAIAAgDIANgCQAEgCACgDQADgFAAgGIAAhmQAAgHgDgDQgCgEgFgCIgMgCIAAgDIBBAAIAAADIgNACQgEACgCAEQgCADgBAHIAABeIBPhkQgCgGgFgDQgFgDgJAAIAAgDIAyABIAOgBIAAADIgMACQgFACgCAEQgCADAAAHIgBAPIAABIIABAPQAAAGACAFQADADAEACIANACIAAADIgRgBgAkxA2IhnAAIgNABIAAgDIANgCQAEgCACgDQACgFABgGIAAhmQgBgHgCgDQgCgEgFgCIgMgCIAAgDIB7AAIABAnIgDABQgCgKgFgIQgFgGgGgEQgHgEgHgBIgQgBIgfABIAAA3IARgBQAIAAAGgBQAGgBAEgDQAJgGACgRIADAAIAAA+IgDAAQgCgHgDgGQgCgGgFgDQgEgEgGgBIgegBIAABEIAFABIAUABQANAAAKgCQALgCAJgFQAIgFAIgHQAIgIAIgKIACACIgUAsgApUA2IgyABIAAgDQAJgBAHgDQAGgEAAgGIgBgEIgPgqIguAAIgPAmIgBADIgBADQAAAEADADIAFAFIANAEIAAADIg1AAIAAgDQAHgCAEgCQAFgDADgFIAFgKIAshqIABgCIgBgEIgCgEIAKgCIAJgFIAuB9QADAJAGAFQAFAFALABIAAADIgRgBgAqsgPIApAAIgTg4gAr3A2IgwABIAAgDIAMgCQAFgCACgDQACgFABgGIAAgPIAAgnIhRAAIAAA2QABAGACAFQACADAFACIANACIAAADIhCAAIAAgDIANgCQAEgCACgDQADgFAAgGIAAhmQAAgHgDgDQgCgEgFgCIgMgCIAAgDIBBAAIAAADIgNACQgEACgCAEQgCADgBAHIAAAqIBRAAIAAgbIAAgPQgBgHgCgDQgCgEgFgCIgNgCIAAgDIAzABIAOgBIAAADIgMACQgFACgCAEQgCADAAAHIgBAPIAABIIABAPQAAAGACAFQADADAEACIANACIAAADIgRgBg");
	this.shape_3.setTransform(0,1);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	// Слой 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#6C0000").s().p("AiDBLQgEgHgGgFQgGgFgIgCQgIgCgLAAIg0AAQgLAAgIACQgIACgGAFQgGAFgEAHQgEAIgDAKIgDgBIADgsQAIAAAFgDQAFgDADgEIAGgMIAGgNIAGgWIAIgsIgBgQQAAgFgDgFQgCgDgFgCIgMgDIAAgCIBvABIAOgBIAAACIgMADQgEACgCADQgCAFgBAFIgBAQIABBVQAAAGADADQACADAFABIAOADIABAYIACAUIgDABQgDgKgEgIgAjZhOQgDAFAAAEIgCAUQgCAYgEAQIgLAkIgFALIgBADQAAABAAAAQAAABABAAQAAABAAAAQABABAAAAQACACADgBIARABIA1gBIAAh/IgnAAQgGAAgEADgAMUA3IAAgCIANgDQAFgCACgEQACgEABgFIAAhoQgBgFgCgFQgCgDgFgCIgNgDIAAgCIBCAAIAAACIgNADQgEACgDADQgCAFAAAFIgBAuIAcgEQAKAAAJACQAJADAHAGQAHAGAFAJQAEAHAAAKQAAALgEAHQgFAIgHAEQgIAFgJADQgJACgIAAgANLgTIgMAEIAAA8IALADIAKACQAIgBAGgCQAHgCAFgEQAFgEADgHQACgGAAgJQAAgHgCgHQgCgFgFgFQgEgFgGgDQgGgDgGAAgAFVA3IAAgCIAMgDQAFgCACgEQADgEAAgFIAAhoQAAgFgDgFQgCgDgFgCIgNgDIAAgCIBCAAIAAACIgMADQgFACgCADQgCAFgBAFIgBAuIAdgEQAJAAAJACQAJADAIAGQAHAGAEAJQAFAHAAAKQAAALgFAHQgFAIgHAEQgIAFgIADQgJACgIAAgAGMgTIgNAEIAAA8IALADIAKACQAIgBAHgCQAGgCAGgEQAFgEACgHQADgGAAgJQAAgHgDgHQgCgFgEgFQgEgFgGgDQgGgDgHAAgAo7A3IAAgCIAMgDQAEgCADgEQACgEAAgFIAAhoQAAgFgDgFQgCgDgEgCIgNgDIAAgCIAOABIAygCQAJAAAKACQAKACAJAFQAJAFAFAHQAGAJAAAMQAAAJgGAJQgGAIgKADIAAAAQAPAFAJAJQAEAFACAHQACAGAAAIQAAAKgEAHQgEAHgIAEQgHAEgJABQgJACgKAAgAoRAqQAAACAEABIAHACIATADQAIAAAHgDQAHgCAFgEQAKgKAAgSQAAgKgGgGQgGgJgHgFIgWACIgNgBQgHAAgGgCgAoHhSIgKABIAAA3QAGADAGACIAMABQAOAAAKgIQAJgIAAgPQAAgHgDgGQgDgGgFgEQgFgEgHgDQgHgCgHAAgAL1A2IjWABIAAgCIANgDQAFgCACgEQACgEABgFIAAhoQgBgFgCgFQgCgDgFgCIgMgDIAAgCIBBAAIAAACIgNADQgEACgDADQgCAFAAAFIgBBzIAQABIAugBIgBhzQAAgFgDgFQgCgDgEgCIgNgDIAAgCIAxABIARgBIAAACIgNADQgFACgCADQgCAFgBAFIgBAPIAABkIAQABIAQAAIAegBIAAhkIAAgPQgBgFgCgFQgDgDgEgCIgMgDIAAgCIAPABIAhAAIARgBIAAACIgNADQgEACgDADQgCAFgBAFIAAAPIAABJIAAAQQABAFACAEQACAEAFACIAMADIAAACIgOgBgAH/A2IgxABIAAgCIAMgDQAFgCACgEQACgEABgFIAAgQIAAhJIAAgPQgBgFgCgFQgCgDgFgCIgMgDIAAgCIASABIAgAAIAOgBIAAACIgMADQgEACgCADQgDAFAAAFIgBAPIAABJIABAQQAAAFADAEQACAEAFACIAMADIAAACIgQgBgAE9A2IgiAAIgRABIAAgCIAJgCIAIgEQADgCABgDQACgDAAgGIAAgHIgQhiIgBAAIgnBdIgLAhIgBAAQgKgigOgeIgchAIgBAAIgKBiIABAMQABAFADAEQADAEAFABQAFACAIABIAAACIg/AAIAAgCIAJgCIAIgEIAGgFQADgEABgEIAPhvQgFgDgGgCIgNgFIAAgCIBBAAIAAACIgIAFQgDACAAAGIABAGIAhBTIAWgtQAKgYAIgZIgFgEIgHgEIAAgCIAtABIAOgBIAAACQgJACgGAEQgGAEAAALIAQBiIADAHIAEAGQACADAEACQAFACAHABIAAACIgRgBgAApA2IgvABIAAgCIALgDQAFgCACgEQACgEABgFIAAgQIAAhTIhQBkIACAIQACADACABIAHADIAKACIAAACIhCAAIAAgCIANgDQAEgCACgEQADgEAAgFIAAhoQAAgFgDgFQgCgDgFgCIgMgDIAAgCIBBAAIAAACIgNADQgEACgCADQgCAFgBAFIAABfIBPhjQgCgHgFgCQgFgDgJgCIAAgCIAyABIAOgBIAAACIgMADQgFACgCADQgCAFAAAFIgBAPIAABJIABAQQAAAFACAEQADAEAEACIANADIAAACIgRgBgAkxA2IhnAAIgNABIAAgCIANgDQAEgCACgEQACgEABgFIAAhoQgBgFgCgFQgCgDgFgCIgMgDIAAgCIB7AAIABAnIgDABQgCgLgFgGQgFgHgGgEQgHgEgHgBIgQgBIgfABIAAA3IARAAQAIgBAGgBQAGgCAEgDQAJgFACgQIADAAIAAA+IgDAAQgCgIgDgHQgCgFgFgEQgEgCgGgBIgegBIAABCIAFABIAUACQANAAAKgCQALgCAJgFQAIgFAIgIQAIgHAIgKIACABIgUAtgApUA2IgyABIAAgCQAJgCAHgEQAGgDAAgHIgBgDIgPgrIguAAIgPAnIgBAEIgBACQAAAEADADIAFAFIANAFIAAACIg1AAIAAgCQAHgCAEgEQAFgDADgEIAFgKIAshqIABgDIgBgDIgCgEIAKgDIAJgDIAuB9QADAIAGAFQAFAFALACIAAACIgRgBgAqsgPIApAAIgTg4gAr3A2IgwABIAAgCIAMgDQAFgCACgEQACgEABgFIAAgQIAAgmIhRAAIAAA2QABAFACAEQACAEAFACIANADIAAACIhCAAIAAgCIANgDQAEgCACgEQADgEAAgFIAAhoQAAgFgDgFQgCgDgFgCIgMgDIAAgCIBBAAIAAACIgNADQgEACgCADQgCAFgBAFIAAAqIBRAAIAAgbIAAgPQgBgFgCgFQgCgDgFgCIgNgDIAAgCIAzABIAOgBIAAACIgMADQgFACgCADQgCAFAAAFIgBAPIAABJIABAQQAAAFACAEQADAEAEACIANADIAAACIgRgBg");
	this.shape_4.setTransform(0,0.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ29, new cjs.Rectangle(-91,-9.3,182.1,20.2), null);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("Ah5IQIgGgNQgngbgTgvQgyh6AvhWQg0hWAThsQAcidhchwQgaghAJgqQA3kgE1gyQD1AMgYDlQgCAagPAWQBfCbiDCPQgKALACAVQAgErgsEiQgEAegeAOQhGAjg6AAQhpAAhAh0g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ27, new cjs.Rectangle(-30.5,-64.4,61.1,128.8), null);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#00FF00").ss(3,1,1).p("AHyAAIvjAA");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ20, new cjs.Rectangle(-51.3,-1.5,102.6,3), null);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.atack();
	this.instance.parent = this;
	this.instance.setTransform(-100,-51,0.867,0.867);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ19, new cjs.Rectangle(-100,-51,234,100.6), null);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,0,0,0)","#000000"],[0,1],-155.5,0,155.5,0).s().p("A4SHvIAAvdMAwlAAAIAAPdg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ18, new cjs.Rectangle(-155.5,-49.5,311.1,99.1), null);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.arrow();
	this.instance.parent = this;
	this.instance.setTransform(-13.5,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ16, new cjs.Rectangle(-13.5,-40,27,80), null);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AABEQQgeg7BDgLQBOAxhVAhQgGADgFAAQgMAAgHgPgAh4DdQgfg8BDgKQBPAwhVAiQgGACgFAAQgMAAgHgOgAjsCXQgfg7BEgLQBPAxhVAhQgGACgFAAQgMAAgIgOgABlCUQgfg7BDgLQBPAxhVAhQgGACgFAAQgMAAgHgOgAgeBhQgfg7BDgLQBOAxhUAhQgGACgFAAQgMAAgHgOgAlsBWQgfg8BEgLQBOAxhVAiQgGACgEAAQgNAAgHgOgADLAxQgfg6BEgLQBPAwhVAhQgGADgFAAQgMAAgIgPgAiMAVQgfg6BEgLQBOAwhUAhQgGADgFAAQgMAAgIgPgAA6gTQgfg7BEgLQBOAxhVAhQgGACgFAAQgMAAgHgOgAkOgXQgfg7BEgLQBOAxhVAhQgGADgFAAQgMAAgHgPgAEtgpQgfg8BDgKQBPAwhVAiQgGACgFAAQgMAAgHgOgAgnhcQgfg7BEgLQBNAxhTAhQgGADgFAAQgMAAgIgPgACnhsQgfg7BEgLQBOAxhVAhQgGADgFAAQgMAAgHgPgAi9iJQgfg7BEgLQBOAxhVAhQgGACgFAAQgMAAgHgOgAAxizQgfg8BEgKQBOAwhUAiQgGACgFAAQgMAAgIgOgAhFjXQgfg8BEgLQBNAxhUAiQgGACgEAAQgNAAgHgOg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ11, new cjs.Rectangle(-37.4,-28.6,74.9,57.4), null);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.unit();
	this.instance.parent = this;
	this.instance.setTransform(-52.5,11);

	this.instance_1 = new lib.unit();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-39.5,16);

	this.instance_2 = new lib.unit();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-27.5,23);

	this.instance_3 = new lib.unit();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-15.5,29);

	this.instance_4 = new lib.unit();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-42.5,-2);

	this.instance_5 = new lib.unit();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-29.5,3);

	this.instance_6 = new lib.unit();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-17.5,10);

	this.instance_7 = new lib.unit();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-5.5,16);

	this.instance_8 = new lib.unit();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-32.5,-13);

	this.instance_9 = new lib.unit();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-19.5,-8);

	this.instance_10 = new lib.unit();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-7.5,-1);

	this.instance_11 = new lib.unit();
	this.instance_11.parent = this;
	this.instance_11.setTransform(4.5,5);

	this.instance_12 = new lib.unit();
	this.instance_12.parent = this;
	this.instance_12.setTransform(-22.5,-22);

	this.instance_13 = new lib.unit();
	this.instance_13.parent = this;
	this.instance_13.setTransform(-9.5,-17);

	this.instance_14 = new lib.unit();
	this.instance_14.parent = this;
	this.instance_14.setTransform(2.5,-10);

	this.instance_15 = new lib.unit();
	this.instance_15.parent = this;
	this.instance_15.setTransform(14.5,-4);

	this.instance_16 = new lib.horse();
	this.instance_16.parent = this;
	this.instance_16.setTransform(15.5,-35);

	this.instance_17 = new lib.horse();
	this.instance_17.parent = this;
	this.instance_17.setTransform(-0.5,-45);

	this.instance_18 = new lib.horse();
	this.instance_18.parent = this;
	this.instance_18.setTransform(-17.5,-54);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ10, new cjs.Rectangle(-52.5,-54,105,108), null);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ruka();
	this.instance.parent = this;
	this.instance.setTransform(-43.5,-22.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ5, new cjs.Rectangle(-43.5,-22.5,87,45), null);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.baba();
	this.instance.parent = this;
	this.instance.setTransform(-72,-134.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ4, new cjs.Rectangle(-72,-134.5,144,269), null);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lizo();
	this.instance.parent = this;
	this.instance.setTransform(-25.5,-29);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ2, new cjs.Rectangle(-25.5,-29,51,58), null);


(lib.Символ76 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ75();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:0.84,y:-8},4).to({scaleY:1,y:0},4).to({scaleY:0.84,y:-8},4).to({scaleY:1,y:0},4).to({rotation:10},6).to({rotation:-26.2},4).to({rotation:23},5).to({rotation:-26.2},5).to({rotation:23},5).to({rotation:0},6).wait(28));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24,-24,48.8,48.8);


(lib.Символ59 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ60();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.43,scaleY:0.43},4,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1},5,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.4,-10.4,20.9,20.9);


(lib.Символ58 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 61
	this.instance = new lib.Символ61();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360},40).wait(1));

	// Символ 59
	this.instance_1 = new lib.Символ59();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-0.8,-1.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(41));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-74.9,-74.9,149.9,149.9);


(lib.Символ54 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ55();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:9},9,cjs.Ease.get(-0.97)).to({rotation:19.2},10,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,rotation:9.5},10,cjs.Ease.get(-0.97)).to({scaleX:1,scaleY:1,rotation:0},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-105.5,-69.4,211,138.8);


(lib.Символ52 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ54();
	this.instance.parent = this;
	this.instance.setTransform(9.5,10.4);

	this.instance_1 = new lib.Символ53();
	this.instance_1.parent = this;
	this.instance_1.setTransform(24.7,48.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ52, new cjs.Rectangle(-96,-59,211,138.8), null);


(lib.Символ45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ44();
	this.instance.parent = this;
	this.instance.filters = [new cjs.BlurFilter(23, 23, 1)];
	this.instance.cache(-30,-66,60,132);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ45, new cjs.Rectangle(-39.9,-75.8,82,154), null);


(lib.Символ42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ41();
	this.instance.parent = this;
	this.instance.filters = [new cjs.BlurFilter(31, 31, 1)];
	this.instance.cache(-28,-61,55,122);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ42, new cjs.Rectangle(-41.7,-74.8,86,152), null);


(lib.Символ39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ37();
	this.instance.parent = this;
	this.instance.filters = [new cjs.BlurFilter(44, 44, 1)];
	this.instance.cache(-32,-64,64,128);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ39, new cjs.Rectangle(-51.8,-84.1,106,172), null);


(lib.Символ35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ34();
	this.instance.parent = this;
	this.instance.filters = [new cjs.BlurFilter(32, 32, 1)];
	this.instance.cache(-61,-74,123,149);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ35, new cjs.Rectangle(-75.3,-88.3,154,180), null);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия: 2 - копия: 2
	this.instance = new lib.Символ32();
	this.instance.parent = this;
	this.instance.setTransform(-50.2,3.2);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(8).to({_off:false},0).to({x:74.4,y:-241.9},5).wait(1));

	// Слой 1 - копия: 2 - копия
	this.instance_1 = new lib.Символ32();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-34.2,35.2);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(6).to({_off:false},0).to({x:82.4,y:-285.9},5).to({_off:true},1).wait(2));

	// Слой 1 - копия: 2
	this.instance_2 = new lib.Символ32();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-50.2,23.2);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(4).to({_off:false},0).to({x:110.4,y:-261.9},5).to({_off:true},1).wait(4));

	// Слой 1 - копия
	this.instance_3 = new lib.Символ32();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-26.2,15.2);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(2).to({_off:false},0).to({x:134.4,y:-237.9},5).to({_off:true},1).wait(6));

	// Слой 1
	this.instance_4 = new lib.Символ32();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-2.2,3.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:162.4,y:-221.9},5).to({_off:true},1).wait(8));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5,-0.5,5.6,7.4);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ27();
	this.instance.parent = this;
	this.instance.filters = [new cjs.BlurFilter(28, 28, 1)];
	this.instance.cache(-32,-66,65,133);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ28, new cjs.Rectangle(-44.5,-78.4,92,160), null);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ20();
	this.instance.parent = this;
	this.instance.setTransform(221.5,51.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FDE123").ss(1,1,1).p("AvoAAIfRAA");
	this.shape.setTransform(176.5,46.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

	// Слой 1 - копия
	this.instance_1 = new lib.krepost();
	this.instance_1.parent = this;
	this.instance_1.setTransform(172,31,0.778,0.778);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ21, new cjs.Rectangle(75.5,31,202.2,21.9), null);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ16();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:0.92,y:10.5},6,cjs.Ease.get(-1)).to({scaleY:0.81,y:24.5},8,cjs.Ease.get(1)).to({scaleY:0.9,y:13.1},7,cjs.Ease.get(-1)).to({scaleY:1,y:0},8,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.5,-40,27,80);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.instance = new lib.Символ19();
	this.instance.parent = this;
	this.instance.setTransform(113.5,2.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.93,scaleY:0.93},5,cjs.Ease.get(-1)).to({scaleX:0.84,scaleY:0.84},6,cjs.Ease.get(1)).to({regX:0.1,regY:0.1,scaleX:0.91,scaleY:0.91,x:113.6,y:2.9},6,cjs.Ease.get(-1)).to({regX:0,regY:0,scaleX:1,scaleY:1,x:113.5,y:2.8},7,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(13.5,-48.2,234,100.6);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.Символ29();
	this.instance.parent = this;
	this.instance.setTransform(-6.4,75.4,0.783,0.783);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ76();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-96.8,72.4,0.614,0.614,0,0,0,-0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 1
	this.instance_2 = new lib.txt();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-105.5,-32.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ14, new cjs.Rectangle(-111.5,-32.5,217.1,120.1), null);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ11();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ12, new cjs.Rectangle(-37.4,-28.6,74.9,57.4), null);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ5();
	this.instance.parent = this;
	this.instance.setTransform(38.5,0,1,1,0,0,0,38.5,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:5,x:38.6,y:-4.8},14,cjs.Ease.get(-1)).to({regY:-0.1,rotation:10.5,x:38.5,y:-10.1},15,cjs.Ease.get(1)).to({rotation:5.1,x:38.6,y:-5},15,cjs.Ease.get(-1)).to({regY:0,rotation:0,x:38.5,y:0},15,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-43.5,-22.5,87,45);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ2();
	this.instance.parent = this;
	this.instance.setTransform(14.4,20.5,1,1,0,0,0,14.4,20.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:14.3,rotation:-1.5,y:21.2},19,cjs.Ease.get(-1)).to({regX:14.4,rotation:-3.2,x:14.5,y:22},20,cjs.Ease.get(1)).to({regX:14.3,regY:20.3,rotation:-1.5,x:14.4,y:21.4},20,cjs.Ease.get(-1)).to({regX:14.4,regY:20.2,rotation:0,y:20.5},20,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25.5,-28.7,51,58);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// lizo.png
	this.instance = new lib.Символ3();
	this.instance.parent = this;
	this.instance.setTransform(16,-111.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// baba.png
	this.instance_1 = new lib.Символ4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(25.5,6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// ruka.png
	this.instance_2 = new lib.Символ6();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-54,21);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ1, new cjs.Rectangle(-97.5,-140.2,195,280.7), null);


(lib.Символ62 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ58();
	this.instance.parent = this;

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(6.9,1,1).p("AIpAAQAADliiCiQiiCijlAAQjkAAiiiiQiiiiAAjlQAAjkCiiiQCiiiDkAAQDlAACiCiQCiCiAADkg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ62, new cjs.Rectangle(-74.9,-74.9,149.9,149.9), null);


(lib.Символ46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ45();
	this.instance.parent = this;
	this.instance.alpha = 0.699;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},6).to({alpha:0.699},6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.9,-75.8,82,154);


(lib.Символ43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ42();
	this.instance.parent = this;
	this.instance.alpha = 0.691;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},6).to({alpha:0.691},6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-41.7,-74.8,86,152);


(lib.Символ40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ39();
	this.instance.parent = this;
	this.instance.alpha = 0.691;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},6).to({alpha:0.691},6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51.8,-84.1,106,172);


(lib.Символ36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ35();
	this.instance.parent = this;
	this.instance.alpha = 0.699;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},6).to({alpha:0.699},6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75.3,-88.3,154,180);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ28();
	this.instance.parent = this;
	this.instance.alpha = 0.699;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},6).to({alpha:0.699},6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44.5,-78.4,92,160);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ12();
	this.instance.parent = this;
	this.instance.filters = [new cjs.BlurFilter(9, 9, 1)];
	this.instance.cache(-39,-31,79,61);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ13, new cjs.Rectangle(-42.4,-33.6,88,70), null);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// unit.png
	this.instance = new lib.Символ10();
	this.instance.parent = this;
	this.instance.setTransform(-34.5,6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ13();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-48.9,31.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ9, new cjs.Rectangle(-91.3,-48,109.4,117.2), null);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ1();
	this.instance.parent = this;
	this.instance.setTransform(0,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:4.6},9,cjs.Ease.get(-1)).to({y:9.9},10,cjs.Ease.get(1)).to({y:4.9},10,cjs.Ease.get(-1)).to({y:-0.1},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-97.5,-140.3,195,280.7);


(lib.Символ63 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ62();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:28.4},9,cjs.Ease.get(-1)).to({y:60},10,cjs.Ease.get(1)).to({y:30},10,cjs.Ease.get(-1)).to({y:0},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-74.9,-74.9,149.9,149.9);


(lib.Символ56 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ63();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:41.9,y:-8.4},19,cjs.Ease.get(-1)).to({x:84.6,y:-16.8},20,cjs.Ease.get(1)).to({x:42.3,y:-8.4},20,cjs.Ease.get(-1)).to({x:0,y:0},20,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-74.9,-74.9,149.9,149.9);


(lib.Символ51 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ33();
	this.instance.parent = this;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ36();
	this.instance.parent = this;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ40();
	this.instance.parent = this;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ43();
	this.instance.parent = this;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ46();
	this.instance.parent = this;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Слой 1
	this.instance = new lib.Символ56();
	this.instance.parent = this;
	this.instance.setTransform(0.1,-1.8,0.715,0.755,0,0.4,19,0.1,-0.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.instance = new lib.Символ31();
	this.instance.parent = this;
	this.instance.setTransform(-155.5,233.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ31();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-131.9,210.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Символ 9
	this.instance_2 = new lib.Символ9();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-124.5,205.9,1,1,-6.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// bg.jpg
	this.instance_3 = new lib.Символ30();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ25, new cjs.Rectangle(-491,-276.1,982,561.5), null);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ7();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ8, new cjs.Rectangle(-97.5,-140.3,195,280.7), null);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_8 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(8).call(this.frame_8).wait(8));

	// Слой 2
	this.instance = new lib.Символ52();
	this.instance.parent = this;
	this.instance.setTransform(-232.5,347.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-202.5,y:197.4},7,cjs.Ease.get(1)).to({x:-232.5,y:347.4},8,cjs.Ease.get(-1)).wait(1));

	// Слой 14
	this.instance_1 = new lib.Символ21();
	this.instance_1.parent = this;
	this.instance_1.setTransform(107.9,-47.5);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:57.9,y:-40.7,alpha:1},7,cjs.Ease.get(1)).to({x:107.9,y:-47.5,alpha:0},8).wait(1));

	// logo.png
	this.instance_2 = new lib.logo();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-311,-49.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(16));

	// Символ 8
	this.instance_3 = new lib.Символ8();
	this.instance_3.parent = this;
	this.instance_3.setTransform(252.5,134.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:341.5,y:135.8,alpha:0},7,cjs.Ease.get(1)).wait(1).to({x:252.5,y:134.5,alpha:1},7,cjs.Ease.get(1)).wait(1));

	// Символ 17
	this.instance_4 = new lib.Символ17();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-167.5,98.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({y:58.9,alpha:0},7,cjs.Ease.get(1)).wait(1).to({y:98.9,alpha:1},7,cjs.Ease.get(1)).wait(1));

	// Символ 14
	this.instance_5 = new lib.Символ14();
	this.instance_5.parent = this;
	this.instance_5.setTransform(79.5,93.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({x:49.5,alpha:0},7,cjs.Ease.get(1)).wait(1).to({x:79.5,alpha:1},7,cjs.Ease.get(1)).wait(1));

	// Символ 18
	this.instance_6 = new lib.Символ18();
	this.instance_6.parent = this;
	this.instance_6.setTransform(113.1,92.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({x:213.1,alpha:0},7).wait(1).to({x:113.1,alpha:1},7,cjs.Ease.get(1)).wait(1));

	// Символ 15
	this.instance_7 = new lib.Символ15();
	this.instance_7.parent = this;
	this.instance_7.setTransform(79.5,347.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({y:203.9},7,cjs.Ease.get(1)).wait(1).to({y:347.9},7,cjs.Ease.get(1)).wait(1));

	// Символ 25
	this.instance_8 = new lib.Символ25();
	this.instance_8.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({regY:0.1,scaleX:0.66,scaleY:0.66,x:34,y:96.1},7).wait(1).to({regY:0,scaleX:1,scaleY:1,x:0,y:0},7,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-491,-276.1,982,703.3);


// stage content:
(lib.tr_640305 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		document.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		window.open(clickTAG, "_blank");
		}
		
		
		stage.canvas.style.cursor = "none";
		this.curs.mouseEnabled = false;
		this.addEventListener("tick", fl_CustomMouseCursor.bind(this));
		
		function fl_CustomMouseCursor() {
			this.curs.x = stage.mouseX/window.devicePixelRatio;
			this.curs.y = stage.mouseY/window.devicePixelRatio;
		}
		
		this.cursor = "none";
		
		var _this = this;
		
		stage.canvas.onmouseover = fl_MouseOverHandler_5;
		
		  function fl_MouseOverHandler_5()
		{
		    _this.main.gotoAndPlay(1);
			_this.curs.gotoAndStop(1);
		}
		
		stage.canvas.onmouseout = fl_MouseOutHandler_2;
		
		  function fl_MouseOutHandler_2()
		{
		    _this.main.gotoAndPlay(9);
			_this.curs.gotoAndStop(0);
		}
		
		
		
		var frequency = 30;
		stage.enableMouseOver(frequency);
		this.castle_btn.addEventListener("mouseover", fl_MouseOverHandler_22);
		
		function fl_MouseOverHandler_22()
		{
			_this.curs.gotoAndStop(2);
		}
		
		
		var frequency = 30;
		stage.enableMouseOver(frequency);
		this.castle_btn.addEventListener("mouseout", fl_MouseOutHandler_33);
		
		function fl_MouseOutHandler_33()
		{
			_this.curs.gotoAndStop(1);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Символ 46
	this.instance = new lib.Символ47();
	this.instance.parent = this;
	this.instance.setTransform(518,39.8);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Символ47(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Символ 43
	this.instance_1 = new lib.Символ48();
	this.instance_1.parent = this;
	this.instance_1.setTransform(482,95.4);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2, false, new lib.Символ48(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Символ 40
	this.instance_2 = new lib.Символ49();
	this.instance_2.parent = this;
	this.instance_2.setTransform(430.9,165.8);
	new cjs.ButtonHelper(this.instance_2, 0, 1, 2, false, new lib.Символ49(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Символ 36
	this.instance_3 = new lib.Символ50();
	this.instance_3.parent = this;
	this.instance_3.setTransform(309.7,120.7);
	new cjs.ButtonHelper(this.instance_3, 0, 1, 2, false, new lib.Символ50(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Символ 33
	this.instance_4 = new lib.Символ51();
	this.instance_4.parent = this;
	this.instance_4.setTransform(200.7,82.5);
	new cjs.ButtonHelper(this.instance_4, 0, 1, 2, false, new lib.Символ51(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// Слой 14
	this.curs = new lib.Символ38();
	this.curs.parent = this;
	this.curs.setTransform(309.2,469.2);

	this.timeline.addTween(cjs.Tween.get(this.curs).wait(1));

	// lizo.png
	this.main = new lib.Символ24();
	this.main.parent = this;
	this.main.setTransform(288,32.2);

	this.timeline.addTween(cjs.Tween.get(this.main).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(117,-91.5,982,703.4);
// library properties:
lib.properties = {
	width: 640,
	height: 305,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/arrow.png?1503500957221", id:"arrow"},
		{src:"images/atack.png?1503500957221", id:"atack"},
		{src:"images/baba.png?1503500957221", id:"baba"},
		{src:"images/bal1.png?1503500957221", id:"bal1"},
		{src:"images/bal2.png?1503500957221", id:"bal2"},
		{src:"images/bg.jpg?1503500957221", id:"bg"},
		{src:"images/horse.png?1503500957221", id:"horse"},
		{src:"images/krepost.png?1503500957221", id:"krepost"},
		{src:"images/lizo.png?1503500957221", id:"lizo"},
		{src:"images/logo.png?1503500957221", id:"logo"},
		{src:"images/mish.png?1503500957221", id:"mish"},
		{src:"images/ruka.png?1503500957221", id:"ruka"},
		{src:"images/txt.png?1503500957221", id:"txt"},
		{src:"images/unit.png?1503500957221", id:"unit"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;