(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.back = function() {
	this.initialize(img.back);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1123,623);


(lib.hand = function() {
	this.initialize(img.hand);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,303,172);


(lib.item1 = function() {
	this.initialize(img.item1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,63,152);


(lib.item10 = function() {
	this.initialize(img.item10);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,98,108);


(lib.item11 = function() {
	this.initialize(img.item11);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,152,73);


(lib.item12 = function() {
	this.initialize(img.item12);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,51,168);


(lib.item13 = function() {
	this.initialize(img.item13);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,52,97);


(lib.item14 = function() {
	this.initialize(img.item14);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,69,125);


(lib.item2 = function() {
	this.initialize(img.item2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,187,64);


(lib.item3 = function() {
	this.initialize(img.item3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,67,178);


(lib.item4 = function() {
	this.initialize(img.item4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,60,65);


(lib.item5 = function() {
	this.initialize(img.item5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,281,289);


(lib.item6 = function() {
	this.initialize(img.item6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,134,144);


(lib.item7 = function() {
	this.initialize(img.item7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,166,116);


(lib.item8 = function() {
	this.initialize(img.item8);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,87,78);


(lib.item9 = function() {
	this.initialize(img.item9);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,118,78);


(lib.suri = function() {
	this.initialize(img.suri);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,37,37);// helper functions:

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


(lib.Символ41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AqlENQgTgIgOgPQgMgPgHgVQgGgWAAgZIAAjsQAAgaAGgVIAHgRQAFgLAHgJQAOgPATgHQAUgIAaAAQAaAAAUAIQATAHAOAPQANAPAGAWQAHAVAAAaIAADsQAAASgDAQIgEANQgGAVgNAPQgOAPgTAIQgUAIgaAAQgaAAgUgIgAqgh7IgCACQgLARAAAcIAADxQAAAgANAQQAOASAbAAQAbAAAOgSQAJgMADgUIABgQIAAjxQAAgfgNgQQgOgTgbABQgbgBgOATgAQOERIAAnIIAKAAIBaAAQAaAAAUAIQATAHANAPQAMAOAGAVQAGAUAAAbIAAA3QAAARgDAPIgDAOQgHAVgNAOQgNAOgUAGQgUAIgbAAIgjAAIgKAAIAACWIAAAegARBAvIAtAAQAcgBAOgOQALgLACgVIABgNIAAg9QAAgggMgPQgNgQgbAAIgnAAIgKAAgAOzERIgRhcIhvAAIgFAAIgLA+IgGAeIgvAAIBXnIIAFAAIBFAAIBSGqIAFAegAM1CJIBmAAIgGgeIgrjdIgDgLgAGAERIAAnIIAKAAIApAAIAAGaIBXAAIAAgfIAAl7IAKAAIApAAIAAGaIBXAAIAAgfIAAl7IAKAAIApAAIAAGqIAAAegAC6ERIAAlpIAAgCIhrFNIgKAeIg1AAIAAnIIAKAAIAjAAIAAFTIAKgdIBok2IA5AAIAAGqIAAAegAjaERIAAnIIAKAAICyAAIAAAQIAAAeIh/AAIgKAAIAACbIBwAAIAAAQIAAAeIhmAAIgKAAIAACjICJAAIAAAQIAAAegAneERIAAnIIAKAAIC3AAIAAAQIAAAeIiEAAIgKAAIAACNIA1AAQAbABAUAGQAUAHAOANQANANAHAUQAHAUAAAbIAAAzQAAATgDAPIgDANQgHAVgNAOQgNAOgUAHQgTAHgbABgAmrDjIA4AAQAcgBANgPQAKgLACgWIABgNIAAg5QAAgggPgNQgNgNgdAAIgrAAIgKAAgAvNERIAAnIIAKAAIBaAAQAaAAAUAIQATAHANAPQAMAOAGAVQAGAUAAAbIAAA3QAAARgDAPIgDAOQgHAVgNAOQgNAOgUAGQgUAIgbAAIgjAAIgKAAIAACWIAAAegAuaAvIAtAAQAcgBAOgOQALgLACgVIABgNIAAg9QAAgggMgPQgNgQgbAAIgnAAIgKAAgAw0ERIAAmaIhmAAIgKAAIAAF8IAAAeIgzAAIAAnIIAKAAIDMAAIAAGqIAAAegABhjZQgMgEgJgIQgKgJgEgLQgGgNAAgOIARAAIAPAAQACASAKAIIABABQAJAGARAAQARAAAKgHQAKgIACgSIAfAAIAAAIQgBAJgEAKQgFALgJAJQgJAIgNAEQgNAEgQABQgRgBgNgEg");
	this.shape.setTransform(124,30.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("AQ3ETIAAiWIAKAAIAACWgAPXETIhSmqIhFAAIAFgeIBKAAIBXHIgAMZETIALg+IAFAAIgMA+gAK9ETIAAmqIgpAAIAAgeIAzAAIAAHIgADeETIAAmqIg5AAIAKgeIA5AAIAAHIgABFETIBrlNIAAACIhrFLgAgoETIAAgQIiJAAIAAijIAKAAIAACFICJAAIAAAugAukETIAAiWIAKAAIAACWgAwLETIAAmqIjMAAIAAgeIDWAAIAAHIgAyuETIAAl7IAKAAIAAF7gAqqD2QgNgRAAggIAAjwQAAgdALgQIgBAPIAADwQAAAgANARQAOARAbAAQAbAAAOgRIACgDQgDAUgJANQgOARgbAAQgbAAgOgRgAIzEDIAAmaIgpAAIAAgeIAzAAIAAGaIBNAAIAAAegAGpEDIAAmaIgpAAIAAgeIAzAAIAAGaIBNAAIAAAegAm1EDIAAixIAKAAIAACTIA4AAQAcAAANgPIACgDQgCAVgKAMQgNAPgcAAgAoYDDIAAjrQAAgbgHgVQgGgVgNgPQgOgPgTgIQgUgIgaAAQgaAAgUAIQgTAIgOAPQgHAIgFALIADgNQAHgVAMgPQAOgPATgIQAUgIAaAAQAaAAAUAIQATAIAOAPQANAPAGAVQAHAVAAAbIAADrQAAAagHAVIgGARQADgQAAgSgAkUDCIAAgyQAAgcgHgUQgHgUgNgNQgOgNgUgHQgUgGgbAAIg1AAIAAiNIAKAAIAABvIA1AAQAbAAAUAGQAUAHAOANQANANAHAUQAHAUAAAcIAAAyQAAAbgGAUIgHARQADgPAAgTgAAziXIgjAAIAAgeIAtAAIAAFUIgKAegAMrCpIAykGIADALIgrDdIBWAAIAGAegAQ3BPIAAi3IAKAAIAACZIAtAAQAcAAAOgOIADgEQgCAWgLAMQgOAOgcAAgAukBPIAAi3IAKAAIAACZIAtAAQAcAAAOgOIADgEQgCAWgLAMQgOAOgcAAgAhBBCIAAgQIhwAAIAAiaIAKAAIAAB8IBwAAIAAAugATOAPIAAg2QAAgbgGgUQgGgVgMgOQgNgPgTgHQgUgIgaAAIhaAAIAAgeIBkAAQAaAAAUAIQATAHANAPQAMAOAGAVQAGAUAAAbIAAA3QAAAagGAUQgDAJgEAHQADgPAAgSgAsNAPIAAg2QAAgbgGgUQgGgVgMgOQgNgPgTgHQgUgIgaAAIhaAAIAAgeIBkAAQAaAAAUAIQATAHANAPQAMAOAGAVQAGAUAAAbIAAA3QAAAagGAUQgDAJgEAHQADgPAAgSgAgoiGIAAgRIiyAAIAAgeIC8AAIAAAvgAkniGIAAgRIi3AAIAAgeIDBAAIAAAvgABhjXIgGgCIgBgBQgKgIgCgSIgPAAIgBgDQgGgMAAgPIAgAAQACASAKAIQAJAHASAAQARAAAKgHQAKgIACgSIAfAAQAAAPgFAMIgFALIAAgIIgfAAQgCASgKAIQgKAHgRAAQgLgBgJgDg");
	this.shape_1.setTransform(125,27.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ41, new cjs.Rectangle(0,0,249.1,58.4), null);


(lib.Символ40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Aj0EnIAAg8Ii0AAIAAA8IgvAAIAAhnIAcAAQALgMAFgRQADgNABgXIARlMICxAAIAAFkIAAApIAiAAIAABngAl3B/IgDAYIgDAPQgEAPgLALIB1AAIAAgpIAAk3IhSAAgA3KDoQgSgIgNgPQgMgOgGgVQgGgUAAgZIAAjoQAAgXAGgSQAGgUAMgPQANgOASgIQATgIAYAAQAaAAATAIQASAIANAOQAMAPAGAUQAGASABAXIAAAtIgwAAIAAguQAAgdgMgOQgNgRgaAAQgaAAgNARQgMAPAAAdIAADFIAAAlQAAAfAMAQQANARAaAAQAaAAANgRQAMgQAAgfIAAgkIAAgVIAwAAIAAA3QAAAZgHAUQgGAVgMAOQgNAPgSAIQgTAIgaAAQgYAAgTgIgAUuDrIAAgrQAcABAOgKQAOgKAHgZIAKgdIgHgWIhekuIAMAAIAkAAIBLEHIBCkHIAoAAIALAAIheFXQgHAbgHARQgJATgMAMQgOANgTAGQgQAEgWAAIgMgBgATHDrIhejAIgaAsIAACUIgyAAIAAm4IAyAAIAACtIAAAnIB1jUIAbAAIAWAAIhkC3IgLASIBhDHIATAogAO6DrIAAjHIhsAAIAADHIgxAAIAAm4IAxAAIAACeIAAAoIBsAAIAAgoIAAieIAyAAIAAG4gAI6DrIAAm4IC2AAIAAAtIiFAAIAABvIAAAnIBsAAIAAArIhsAAIAAB1IAAAoICFAAIAAAtgAHYDrIAAjDQgMAQgTAKQgSAIgUABQgWgBgQgHQgRgIgLgPQgKgOgGgTQgGgRAAgXIAAiwIAyAAIAACHIAAAmQgBAcAOAQQAQARAZABQAWAAAOgOQANgNAEgYIAAgoIAAiQIAwAAIAAG4gABIDrIAAm4IBjAAQAZAAATAGQASAGAMAMQALANAFASQAFAPABASIAAAKIAAAVQAAAjgLAWIgHAJIgKAJQgKAIgOADQAQAFALAIQAMAJAGALQAIAMADAQIADAiIAAAlQAAAYgGAUQgGATgNANQgMAOgSAGQgUAHgZAAgAB6CWIAAAoIA0AAQAbAAAMgOQANgPAAgeIAAglIAAgDIAAgBIAAgDQgBgQgDgLQgDgMgIgHQgHgJgMgCQgMgEgQAAIgqAAgAB6g5IAAAnIAlAAQAfAAANgMQAIgGADgMQAFgLAAgRIAAgaIAAgHQgCgZgKgMQgLgOgbAAIgvAAgAiaDrIAAm4IC1AAIAAAtIiDAAIAABvIAAAnIBrAAIAAArIhrAAIAAB1IAAAoICDAAIAAAtgAqMDrIAAleIhxFeIgzAAIAAm4IArAAIAAEgIAAAoIBulIIA3AAIAAG4gAwTDrIAAm4IC2AAIAAAtIiEAAIAABvIAAAnIBrAAIAAArIhrAAIAAB1IAAAoICEAAIAAAtgA0NDrIAAm4IC5AAIAAAtIiJAAIAABhIAAAoIA0AAQAaAAATAGQATAGANAMQAOANAFATQAHASAAAYIAAA1QAAAagFAUQgHAUgNANQgMAOgTAHQgTAHgaAAgAzdCWIAAAoIA2AAQAbAAAMgOQANgOABgfIAAgkIAAgVQgBgdgOgMQgMgMgcAAIg0AAgAKmjnIAAgOIAAgrIArAAIAAArIAAAOgAJXjnIAAgOIAAgrIAsAAIAAArIAAAOgArijtQgMgFgJgIQgJgHgFgMQgFgMAAgOIAOAAIARAAQABAJADAGQACAHAGADQAIAIARgBQARABAJgIQAFgDADgHQADgGABgJIARAAIANAAQAAAOgFAMQgEAMgJAHQgJAIgMAFQgNAEgQAAQgPAAgNgEg");
	this.shape.setTransform(153.8,33.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("ATnEJIhhjIIALgSIBpDagA3ED4QgMgQAAgfIAAglQAAAcAMAQQANARAaAAQAaAAANgRQAMgPAAgcIAAAkQAAAfgMAQQgNARgaAAQgaAAgNgRgAUuEGIAAgoQAcABAOgKQAOgKAHgZIADgKIAHAVIgKAdQgHAZgOAKQgMAJgXAAIgHAAgAjlEGIAAgoIAiAAIAAAogAmMEGQALgLAEgPIADgOIBjAAIAAAogAnXEGIAAgoIAcAAQALgMAFgQQADgOABgWIARlNICxAAIAAAoIixAAIgRFNQgBAWgDAOQgFAQgLAMgAJrEFIAAgoICFAAIAAAogAB6EFIAAgoIA0AAQAbAAAMgPQAMgOABgcIAAAlQAAAegNAPQgMAPgbAAgAhoEFIAAgoICDAAIAAAogAvhEFIAAgoICEAAIAAAogAzdEFIAAgoIA2AAQAbAAAMgPQANgNABgcIAAAkQgBAfgNAOQgMAPgbAAgAsFCZIBulIIA3AAIAAAoIg3AAIhuFIgAEPCDQgDgPgIgMQgGgMgMgJQgLgIgQgFQAOgEAKgIIAKgJQAHAHAEAIQAIAMADAPIADBHIAAADgAxJBoQgFgUgOgMQgNgNgTgGQgTgHgaAAIg0AAIAAgoIA0AAQAaAAATAHQATAGANANQAOAMAFAUQAIATgBAbIAAAjQAAgYgHgRgA1qCQIAAgoIAwAAIAAAogAVCiHIgkAAIgMgoIAwAAIBLEHIBCkHIAzAAIgLAoIgoAAIhCEHgAF6BSQgOgRABgcIAAglQAAAaANAQQAQASAZAAQAWAAAOgNQANgOAEgZIAAAoQgEAZgNAOQgOANgWAAQgZAAgQgSgARPAlIB1jUIAxAAIgWAoIgbAAIh1DUgANOA/IAAgoIBsAAIAAAogAJrA8IAAgoIBsAAIAAAogAhoA8IAAgoIBrAAIAAAogAvhA8IAAgoIBrAAIAAAogAB6A0IAAgoIAlAAQAfAAANgMQAIgGADgMQADgIACgNIAAAHIAAAaQAAAQgFALQgDAMgIAGQgNANgfAAgA4BhEQAAgaAGgTQAGgVAMgPQANgOASgIQATgIAYAAQAaAAATAIQASAIANAOQAMAPAGAVQAHATAAAaIAAAjQgBgXgGgRQgGgVgMgPQgNgOgSgIQgTgIgaAAQgYAAgTAIQgSAIgNAOQgMAPgGAVQgGARAAAXgAEFhQQgFgSgLgMQgMgMgSgHQgTgGgZAAIhjAAIAAgoIBjAAQAZAAATAGQASAHAMAMQALAMAFASQAGASAAAZIAAAVIAAAKQgBgTgFgPgAQdiHIAAgoIAyAAIAAAogAO6iHIAAgoIAyAAIAAAogAMdiHIAAgoIAxAAIAAAogAI6iHIAAgoIAdAAIAAAOIAsAAIAAgOIAjAAIAAAOIArAAIAAgOIAfAAIAAAogAHYiHIAAgoIAwAAIAAAogAE7iHIAAgoIAyAAIAAAogAiaiHIAAgoIC1AAIAAAogAswiHIAAgoIArAAIAAAogAwTiHIAAgoIC2AAIAAAogA0NiHIAAgoIC5AAIAAAogArijPIgFgCQgDgHgBgIIgRAAQgGgHgDgIQgFgLAAgOIAfAAQACARAKAIQAIAHARAAQARAAAJgHQALgIABgRIAeAAQAAAOgFALQgDAIgFAHIgRAAQgBAIgDAHIgFACQgNAEgQAAQgPAAgNgEgAKmjZIAAgoIArAAIAAAogAJXjZIAAgoIAsAAIAAAog");
	this.shape_1.setTransform(153.8,26.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ40, new cjs.Rectangle(0,0,307.6,63.1), null);


(lib.Символ38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.388)").s().p("AgHBmQhJgrgagKQgagLgSgRQgSgSgGAGQgGAGABgdQABgVAGgJQAJgIAEgFQAFgMAEgGQAIgMAegFQATgEBHgTIArgMQA0gQAeABQAPABAJADQALAGAIAPQAFAHAHAVIAJAYIAIAXQAGAWgBAwQgBAngGAVQgLAigaANQgQAHgcAAIgcABIAAAAIhHgpg");
	this.shape.setTransform(18,14.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ38, new cjs.Rectangle(0,0,36,28.7), null);


(lib.Символ35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.suri();
	this.instance.parent = this;
	this.instance.setTransform(68,12,0.757,0.757);

	this.instance_1 = new lib.suri();
	this.instance_1.parent = this;
	this.instance_1.setTransform(36,12,0.757,0.757);

	this.instance_2 = new lib.suri();
	this.instance_2.parent = this;
	this.instance_2.setTransform(6,12,0.757,0.757);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ35, new cjs.Rectangle(6,12,90,28), null);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#F99E00").ss(3,1,1).p("ABpAAQAAAsgfAeQgeAfgsAAQgrAAgfgfQgegeAAgsQAAgrAegfQAfgeArAAQAsAAAeAeQAfAfAAArg");
	this.shape.setTransform(10.5,10.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ28, new cjs.Rectangle(-1.4,-1.4,23.9,23.9), null);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.item2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ22, new cjs.Rectangle(0,0,187,64), null);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.item3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ21, new cjs.Rectangle(0,0,67,178), null);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.item4();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ20, new cjs.Rectangle(0,0,60,65), null);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.item6();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ18, new cjs.Rectangle(0,0,134,144), null);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.item7();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ17, new cjs.Rectangle(0,0,166,116), null);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.item8();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ16, new cjs.Rectangle(0,0,87,78), null);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.item9();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ15, new cjs.Rectangle(0,0,118,78), null);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.item10();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ14, new cjs.Rectangle(0,0,98,108), null);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.item1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ13, new cjs.Rectangle(0,0,63,152), null);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.item11();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ12, new cjs.Rectangle(0,0,152,73), null);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.item12();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ11, new cjs.Rectangle(0,0,51,168), null);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.item13();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ10, new cjs.Rectangle(0,0,52,97), null);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.item14();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ9, new cjs.Rectangle(0,0,69,125), null);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.back();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ5, new cjs.Rectangle(0,0,816.6,453), null);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("AubVAMAAAgp/Ic3AAMAAAAp/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ33, new cjs.Rectangle(-92.4,-134.4,184.8,268.8), null);


(lib.Анимация1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hand();
	this.instance.parent = this;
	this.instance.setTransform(-151.5,-86);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-151.5,-86,303,172);


(lib.Символ37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 41
	this.instance = new lib.Символ41();
	this.instance.parent = this;
	this.instance.setTransform(289.1,-53.4,1,1,0,0,0,124.5,29.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:106.6},7,cjs.Ease.get(1)).to({y:96.6},2).wait(40).to({y:106.6},2,cjs.Ease.get(-1)).to({y:-63.4},8,cjs.Ease.get(-1)).to({_off:true},1).wait(59));

	// Символ 40
	this.instance_1 = new lib.Символ40();
	this.instance_1.parent = this;
	this.instance_1.setTransform(289.1,-51,1,1,0,0,0,153.8,31.6);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(59).to({_off:false},0).to({y:109},7,cjs.Ease.get(1)).to({y:99},2).wait(40).to({y:109},2,cjs.Ease.get(-1)).to({y:-61},8,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(164.6,-82.6,249.1,58.4);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ28();
	this.instance.parent = this;
	this.instance.setTransform(10.5,10.5,1,1,0,0,0,10.5,10.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.71,scaleY:0.71,x:10.6,y:10.6},4).to({scaleX:1,scaleY:1,x:10.5,y:10.5},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.4,-1.4,23.9,23.9);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ38();
	this.instance.parent = this;
	this.instance.setTransform(65.5,93.6,1,1,0,0,0,18,14.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.item5();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ19, new cjs.Rectangle(0,0,281,289), null);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Анимация1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(151.5,86);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ7, new cjs.Rectangle(0,0,303,172), null);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ7();
	this.instance.parent = this;
	this.instance.setTransform(151.5,86,1,1,0,0,0,151.5,86);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-8.6,x:144.6,y:121.8},5,cjs.Ease.get(-1)).to({rotation:-15.7,x:138.9,y:150.4},4,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,rotation:-9.3,x:144,y:124.6},4,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:0,x:151.5,y:86},6,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,303,172);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ5();
	this.instance.parent = this;
	this.instance.setTransform(408.2,226.5,1,1,0,0,0,408.2,226.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:418.1},49,cjs.Ease.get(-1)).to({x:428.2},50,cjs.Ease.get(1)).to({x:418.2},50,cjs.Ease.get(-1)).to({x:408.2},50,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,816.6,453);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ6();
	this.instance.parent = this;
	this.instance.setTransform(151.5,86,1,1,0,0,0,151.5,86);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:90.8},9,cjs.Ease.get(-1)).to({y:96},10,cjs.Ease.get(1)).to({y:91},10,cjs.Ease.get(-1)).to({y:86},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,303,172);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// item1.png
	this.instance = new lib.Символ13();
	this.instance.parent = this;
	this.instance.setTransform(18.3,346.2,1,0.95,-14,0,0,31.5,76.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:31.7,regY:76.1,scaleY:1,rotation:14.2,x:-4.4,y:215},7,cjs.Ease.get(1)).to({regX:31.5,regY:76.2,scaleY:0.95,rotation:-14,x:18.3,y:346.2},5,cjs.Ease.get(-1)).wait(1));

	// item14.png
	this.instance_1 = new lib.Символ9();
	this.instance_1.parent = this;
	this.instance_1.setTransform(27.6,221.7,0.999,0.951,0,-8.4,-7.6,34.5,62.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:34.6,regY:62.5,scaleX:1,scaleY:1,rotation:-1.7,skewX:0,skewY:0,x:43.6,y:93.4},7,cjs.Ease.get(1)).to({regX:34.5,regY:62.6,scaleX:1,scaleY:0.95,rotation:0,skewX:-8.4,skewY:-7.6,x:27.6,y:221.7},5,cjs.Ease.get(-1)).wait(1));

	// item13.png
	this.instance_2 = new lib.Символ10();
	this.instance_2.parent = this;
	this.instance_2.setTransform(242.1,492.4,1,1,-50.2,0,0,25.9,48.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:26.1,rotation:5.7,x:161.2,y:421.9},7,cjs.Ease.get(1)).to({regX:25.9,rotation:-50.2,x:242.1,y:492.4},5,cjs.Ease.get(-1)).wait(1));

	// item12.png
	this.instance_3 = new lib.Символ11();
	this.instance_3.parent = this;
	this.instance_3.setTransform(175.7,409.8,0.996,0.954,0,-16.8,-15.2,25.6,84);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regY:84.1,scaleX:1,scaleY:1,rotation:5.7,skewX:0,skewY:0,x:154,y:298.1},7,cjs.Ease.get(1)).to({regY:84,scaleX:1,scaleY:0.95,rotation:0,skewX:-16.8,skewY:-15.2,x:175.7,y:409.8},5,cjs.Ease.get(-1)).wait(1));

	// item11.png
	this.instance_4 = new lib.Символ12();
	this.instance_4.parent = this;
	this.instance_4.setTransform(107,349,1,0.95,0,0,0,76,36.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regY:36.5,scaleY:1,rotation:-4.5,x:110.7,y:234.5},7,cjs.Ease.get(1)).to({regY:36.6,scaleY:0.95,rotation:0,x:107,y:349},5,cjs.Ease.get(-1)).wait(1));

	// item10.png
	this.instance_5 = new lib.Символ14();
	this.instance_5.parent = this;
	this.instance_5.setTransform(66.3,110.2,0.999,0.951,0,-2.4,-1.6,49.1,54.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regX:49,regY:54,scaleX:1,scaleY:1,skewX:-12.6,skewY:-9.9,x:75.5,y:-18.9},7,cjs.Ease.get(1)).to({regX:49.1,regY:54.1,scaleX:1,scaleY:0.95,skewX:-2.4,skewY:-1.6,x:66.3,y:110.2},5,cjs.Ease.get(-1)).wait(1));

	// item9.png
	this.instance_6 = new lib.Символ15();
	this.instance_6.parent = this;
	this.instance_6.setTransform(96.9,214.8,0.999,0.9,0,-8.4,-7.6,59.1,39.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({regX:59,scaleX:1,scaleY:1.24,rotation:-4.5,skewX:0,skewY:0,x:111.9,y:96},7,cjs.Ease.get(1)).to({regX:59.1,scaleX:1,scaleY:0.9,rotation:0,skewX:-8.4,skewY:-7.6,x:96.9,y:214.8},5,cjs.Ease.get(-1)).wait(1));

	// item8.png
	this.instance_7 = new lib.Символ16();
	this.instance_7.parent = this;
	this.instance_7.setTransform(201.7,251,0.999,0.951,0,9.2,8.3,43.5,39.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({regX:43.6,scaleX:1,scaleY:1,rotation:-4.5,skewX:0,skewY:0,x:224.2,y:126.9},7,cjs.Ease.get(1)).to({regX:43.5,scaleX:1,scaleY:0.95,rotation:0,skewX:9.2,skewY:8.3,x:201.7,y:251},5,cjs.Ease.get(-1)).wait(1));

	// item7.png
	this.instance_8 = new lib.Символ17();
	this.instance_8.parent = this;
	this.instance_8.setTransform(92.7,187.6,0.999,0.951,0,-8.4,-7.6,83,58.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({scaleX:1,scaleY:1,rotation:-4.5,skewX:0,skewY:0,x:109.4,y:63.6},7,cjs.Ease.get(1)).to({scaleX:1,scaleY:0.95,rotation:0,skewX:-8.4,skewY:-7.6,x:92.7,y:187.6},5,cjs.Ease.get(-1)).wait(1));

	// item6.png
	this.instance_9 = new lib.Символ18();
	this.instance_9.parent = this;
	this.instance_9.setTransform(82.3,303.5,0.999,0.986,0,-8.4,-7.6,67,72);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({scaleX:1,scaleY:1,rotation:-4.5,skewX:0,skewY:0,x:91.8,y:185.3},7,cjs.Ease.get(1)).to({scaleX:1,scaleY:0.99,rotation:0,skewX:-8.4,skewY:-7.6,x:82.3,y:303.5},5,cjs.Ease.get(-1)).wait(1));

	// item5.png
	this.instance_10 = new lib.Символ19();
	this.instance_10.parent = this;
	this.instance_10.setTransform(91.2,401.5,1.071,0.831,0,-1.6,-1.4,140.3,144.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({regX:140.6,regY:144.6,scaleX:1,scaleY:1.09,rotation:-4.5,skewX:0,skewY:0,x:129.3,y:310.4},7,cjs.Ease.get(1)).to({regX:140.3,regY:144.8,scaleX:1.07,scaleY:0.83,rotation:0,skewX:-1.6,skewY:-1.4,x:91.2,y:401.5},5,cjs.Ease.get(-1)).wait(1));

	// item4.png
	this.instance_11 = new lib.Символ20();
	this.instance_11.parent = this;
	this.instance_11.setTransform(342.6,387.9,0.95,1,0,-80.7,-80.3,29.9,32.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({regX:30.1,regY:32.5,scaleX:1,rotation:14,skewX:0,skewY:0,x:245,y:354.9},7,cjs.Ease.get(1)).to({regX:29.9,regY:32.6,scaleX:0.95,rotation:0,skewX:-80.7,skewY:-80.3,x:342.6,y:387.9},5,cjs.Ease.get(-1)).wait(1));

	// item3.png
	this.instance_12 = new lib.Символ21();
	this.instance_12.parent = this;
	this.instance_12.setTransform(257.2,336,0.977,0.974,0,-44.9,-42,33.5,89);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({scaleX:1,scaleY:1,rotation:3,skewX:0,skewY:0,x:245.2,y:240.1},7,cjs.Ease.get(1)).to({scaleX:0.98,scaleY:0.97,rotation:0,skewX:-44.9,skewY:-42,x:257.2,y:336},5,cjs.Ease.get(-1)).wait(1));

	// item2.png
	this.instance_13 = new lib.Символ22();
	this.instance_13.parent = this;
	this.instance_13.setTransform(169.3,325.4,0.995,0.955,0,-18.6,-16.9,93.5,32);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({scaleX:1,scaleY:1,rotation:-4.5,skewX:0,skewY:0,x:189.7,y:199.7},7,cjs.Ease.get(1)).to({scaleX:1,scaleY:0.96,rotation:0,skewX:-18.6,skewY:-16.9,x:169.3,y:325.4},5,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62.3,57.4,441.7,485.9);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ2();
	this.instance.parent = this;
	this.instance.setTransform(156,197.1,1,1,0,0,0,156,277.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:2040.5,y:229.3},121).wait(1).to({regX:156.1,regY:277.4,scaleX:1.4,scaleY:1.45,skewY:180,x:2040.4,y:317.6},0).to({x:-20.9},70).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62.3,-23,441.7,485.9);


(lib.Символ34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ33();
	this.instance.parent = this;
	this.instance.setTransform(0.1,0,1.147,1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ27();
	this.instance.parent = this;
	this.instance.setTransform(44.2,44.6,1,1,0,0,0,10.5,10.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#F99E00").ss(3,1,1).p("AAAlZQCPAABlBlQBmBlAACPQAACPhmBlQhlBmiPAAIAABkAAAlZIAAArAAAm9IAABkAEgAAIA6AAIBfAAAlZAAIA7AAAm4AAIBfAAQAAiPBlhlQBlhlCPAAAAAFJIAAARQiPAAhlhmQhlhlAAiP");
	this.shape.setTransform(44.1,44.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ30, new cjs.Rectangle(-1.4,-1.4,91.2,92.2), null);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ30();
	this.instance.parent = this;
	this.instance.setTransform(44.1,44.6,1,1,0,0,0,44.1,44.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360},99).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.4,-1.4,91.2,92.2);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_14 = function() {
		this.stop();
	}
	this.frame_29 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(13).call(this.frame_14).wait(15).call(this.frame_29).wait(1));

	// Слой 1
	this.instance = new lib.Символ1();
	this.instance.parent = this;
	this.instance.setTransform(300.2,340.7,1.186,1.186,0,0,0,156.1,277.6);

	this.instance_1 = new lib.Символ2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(996.1,256.6,1.157,1.157,0,0,0,156,277.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},13).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},14).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).to({x:1598.3},13).to({scaleX:1.15,skewY:180,x:1604.1},1).to({x:871.7},14).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(41.2,-15.7,523.7,576);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ29();
	this.instance.parent = this;
	this.instance.setTransform(69.3,-96.9,0.686,0.686,0,0,0,44.1,44.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ31, new cjs.Rectangle(38,-128.5,62.6,63.3), null);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ31();
	this.instance.parent = this;
	this.instance.setTransform(20.1,24.1,1,1,0,0,0,37.1,-128.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ23, new cjs.Rectangle(21,24,62.6,63.3), null);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ23();
	this.instance.parent = this;
	this.instance.setTransform(57.6,224.6,1,1,0,0,0,52.5,52.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ32, new cjs.Rectangle(26.1,196.1,62.6,63.3), null);


(lib.Символ33_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ32();
	this.instance.parent = this;
	this.instance.setTransform(30.2,111.8,1,1,0,0,0,30.2,111.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:179.4},14,cjs.Ease.get(-1)).to({x:401.2},15,cjs.Ease.get(1)).to({x:181.2},15,cjs.Ease.get(-1)).to({x:30.2},15,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(26.1,196.1,62.6,63.3);


// stage content:
(lib.babaloon600300 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var bodyStyle = document.body.style;
		bodyStyle.margin = 0;
		bodyStyle.padding = 0;
		
		
		
		this.but1.addEventListener("mouseover", fl_Clickover.bind(this));
		
		function fl_Clickover()
		{
		    this.girl.gotoAndPlay(2);
		
		}
		
		this.but1.addEventListener("mouseout", fl_Clickout.bind(this));
		
		function fl_Clickout()
		{   
			this.girl.gotoAndStop(0);
		
		}
		
		
		
		//---------------
		
		this.but2.addEventListener("mouseover", fl_Clickover2.bind(this));
		
		function fl_Clickover2()
		{
		    this.girl.gotoAndPlay(16);
		
		}
		
		this.but2.addEventListener("mouseout", fl_Clickout2.bind(this));
		
		function fl_Clickout2()
		{   
			this.girl.gotoAndStop(0);
		
		}
		
		
		//----------------
		
		this.pric.alpha=0;
		this.gun.alpha=0;
		
		this.cursor = "none";
		this.pric.mouseEnabled = false;
		this.addEventListener("tick", fl_CustomMouseCursor_2.bind(this));
		
		function fl_CustomMouseCursor_2() {
			this.pric.x = stage.mouseX/window.devicePixelRatio;
			this.pric.y = stage.mouseY/window.devicePixelRatio;
			this.gun.x = stage.mouseX/window.devicePixelRatio;
		}
		
		
		
		
		
		//---------------
		
		stage.canvas.addEventListener("mouseover", fl_Clickover3.bind(this));
		
		function fl_Clickover3()
		{
		
			this.pric.alpha=1;
			this.pric2.alpha=0;
			this.gun2.alpha=0;
			this.gun.alpha=1;
			this.tek.alpha=0;
			
		
		}
		
		stage.canvas.addEventListener("mouseout", fl_Clickout3.bind(this));
		
		function fl_Clickout3()
		{
		
			this.pric.alpha=0;
			this.gun2.alpha=1;
			this.gun.alpha=0;
			this.pric2.alpha=1;
			this.tek.alpha=1;
		
		}
		
		
		
		
		this.addEventListener("tick", fl_CustomMouseCursor.bind(this));
		
		function fl_CustomMouseCursor() {
		
		this.fon.x = - stage.mouseX / 10/window.devicePixelRatio;
		this.fon.y = - stage.mouseY / 10/window.devicePixelRatio;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 6
	this.but2 = new lib.Символ34();
	this.but2.parent = this;
	this.but2.setTransform(478.4,155.5,1.688,1.224);
	new cjs.ButtonHelper(this.but2, 0, 1, 2, false, new lib.Символ34(), 3);

	this.but1 = new lib.Символ34();
	this.but1.parent = this;
	this.but1.setTransform(120.8,155.5,1.688,1.224);
	new cjs.ButtonHelper(this.but1, 0, 1, 2, false, new lib.Символ34(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.but1},{t:this.but2}]}).wait(1));

	// Слой 5
	this.instance = new lib.Символ35();
	this.instance.parent = this;
	this.instance.setTransform(28.7,275.6,1,1,0,0,0,23.1,23.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 4
	this.pric = new lib.Символ23();
	this.pric.parent = this;
	this.pric.setTransform(255.4,619,1,1,0,0,0,52.5,52.5);

	this.pric2 = new lib.Символ33_1();
	this.pric2.parent = this;
	this.pric2.setTransform(68.3,33.2,1.304,1.304,0,0,0,30.3,111.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.pric2},{t:this.pric}]}).wait(1));

	// Слой 3
	this.gun = new lib.Символ3();
	this.gun.parent = this;
	this.gun.setTransform(521.5,259.3,0.645,0.645,0,0,0,151.6,86);

	this.gun2 = new lib.Символ3();
	this.gun2.parent = this;
	this.gun2.setTransform(237.4,259.3,0.645,0.645,0,0,0,151.6,86);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.gun2},{t:this.gun}]}).wait(1));

	// Слой 2
	this.girl = new lib.Символ8();
	this.girl.parent = this;
	this.girl.setTransform(-219.3,157.8,0.452,0.452,0,0,0,140.3,184.2);

	this.timeline.addTween(cjs.Tween.get(this.girl).wait(1));

	// Слой 8
	this.tek = new lib.Символ37();
	this.tek.parent = this;
	this.tek.setTransform(231.9,30.6,1,1,0,0,0,220.3,25);

	this.timeline.addTween(cjs.Tween.get(this.tek).wait(1));

	// Слой 1
	this.fon = new lib.Символ4();
	this.fon.parent = this;
	this.fon.setTransform(-69.8,-42,0.887,0.887,0,0,0,50.9,60.8);

	this.timeline.addTween(cjs.Tween.get(this.fon).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(35.9,54.1,921.3,749.7);
// library properties:
lib.properties = {
	width: 600,
	height: 300,
	fps: 24,
	color: "#333333",
	opacity: 1.00,
	manifest: [
		{src:"images/back.jpg?1483459025270", id:"back"},
		{src:"images/hand.png?1483459025270", id:"hand"},
		{src:"images/item1.png?1483459025270", id:"item1"},
		{src:"images/item10.png?1483459025270", id:"item10"},
		{src:"images/item11.png?1483459025270", id:"item11"},
		{src:"images/item12.png?1483459025270", id:"item12"},
		{src:"images/item13.png?1483459025270", id:"item13"},
		{src:"images/item14.png?1483459025270", id:"item14"},
		{src:"images/item2.png?1483459025270", id:"item2"},
		{src:"images/item3.png?1483459025270", id:"item3"},
		{src:"images/item4.png?1483459025270", id:"item4"},
		{src:"images/item5.png?1483459025270", id:"item5"},
		{src:"images/item6.png?1483459025270", id:"item6"},
		{src:"images/item7.png?1483459025270", id:"item7"},
		{src:"images/item8.png?1483459025270", id:"item8"},
		{src:"images/item9.png?1483459025270", id:"item9"},
		{src:"images/suri.png?1483459025270", id:"suri"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;