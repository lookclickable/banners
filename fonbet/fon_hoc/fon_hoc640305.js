(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.arr = function() {
	this.initialize(img.arr);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,101,63);


(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,305);


(lib.btn = function() {
	this.initialize(img.btn);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,226,58);


(lib.btn_h = function() {
	this.initialize(img.btn_h);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,226,58);


(lib.coeff = function() {
	this.initialize(img.coeff);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,150,127);


(lib.khl = function() {
	this.initialize(img.khl);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,139,150);


(lib.kl = function() {
	this.initialize(img.kl);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,170,78);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,199,51);


(lib.money = function() {
	this.initialize(img.money);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,133,74);


(lib.nastr = function() {
	this.initialize(img.nastr);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,150,150);


(lib.pl1 = function() {
	this.initialize(img.pl1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,376,255);


(lib.pl3 = function() {
	this.initialize(img.pl3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,158,250);


(lib.pl4 = function() {
	this.initialize(img.pl4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,305,300);


(lib.polzun = function() {
	this.initialize(img.polzun);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,31,120);// helper functions:

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


(lib.Символ53 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AB+BCIAAgYIhYAAIAAhoIAIAAIAABhIBCAAIAAhhIAIAAIAABhIAOAAIgCAfgAifAuIAAgMIgFAAQgWAAgOgNQgMgMAAgSQAAgUAMgMQAOgNAWAAIAFAAIAAgLIAIAAIAAALIAFAAQAWAAANANQANAMAAAUQAAASgNAMQgNANgWAAIgFAAIAAAMgAiXAbIAFAAQATAAALgKQAKgLAAgPQAAgRgKgKQgLgLgTAAIgFAAgAjCgkQgKAKAAARQAAAPAKALQALAKATAAIAFAAIAAhKIgFAAQgTAAgLALgAkgAuIAAgMIgFAAQgWAAgOgNQgMgMAAgSQAAgUAMgMQAOgNAWAAIAFAAIAAgLIAIAAIAAALIAFAAQAWAAANANQANAMAAAUQAAASgNAMQgNANgWAAIgFAAIAAAMgAkYAbIAFAAQATAAALgKQAKgLAAgPQAAgRgKgKQgLgLgTAAIgFAAgAlDgkQgKAKAAARQAAAPAKALQALAKATAAIAFAAIAAhKIgFAAQgTAAgLALgAnFAaIAFgFQAQAQAUAAQASAAANgNQAMgMABgSIg4AAIAAgHIA4AAQgBgTgMgMQgNgNgSAAQgTAAgQAQIgFgFQAJgJAIgEQAKgFANAAQAWAAAQARQAPAPAAAXQAAAWgPAPQgPAQgXAAQgYAAgRgSgAoxAcQgPgQAAgVQAAgWAPgQQAPgRAXAAQAXAAAPARQAPAPAAAXQAAAVgPAQQgPAQgXAAQgXAAgPgQgAorgrQgNAOAAAUQAAASANAOQANAOATAAQATAAANgOQANgNAAgTQAAgUgNgOQgNgOgTAAQgTAAgNAOgAKfAqIAAhoIAIAAIAABogAJEAqIAAhoIAIAAIAAAqIAfAAQAQAAAKAHQAMAIAAAPQAAAPgKAIQgLAJgRAAgAJMAjIAeAAQAPAAAIgGQAIgHAAgMQAAgLgJgGQgIgFgPAAIgdAAgAIAAqIAAhhIglAAIAAgHIBRAAIAAAHIgkAAIAABhgAG8AqIAAgwIhDAAIAAAwIgIAAIAAhoIAIAAIAAAxIBDAAIAAgxIAIAAIAABogAEMAqIAAhoIBLAAIAAAHIhDAAIAAAqIA8AAIAAAHIg8AAIAAApIBEAAIAAAHgADmAqIAAhcIhEBcIgIAAIAAhoIAIAAIAABdIBEhdIAIAAIAABogAAAAqIAAhcIhDBcIgIAAIAAhoIAIAAIAABdIBDhdIAIAAIAABogApZAqIgrg0IgaAaIAAAaIgIAAIAAhoIAIAAIAABEIBDhEIAKAAIguAvIAwA5g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ53, new cjs.Rectangle(-67.9,-6.6,135.9,13.3), null);


(lib.Символ52 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgXAnQgQgQAAgXQAAgWAQgQQAQgQAXAAQAYAAAQAQQAQAQAAAWQAAAXgQAQQgQAQgYAAQgXAAgQgQgAgGgWQgJAJAAANQAAAOAJAJQAIAKAOAAQAOAAAJgKQAJgJAAgOQAAgNgJgJQgJgKgOAAQgOAAgIAKgAiGAnQgPgQAAgXQAAgWAPgQQAQgQAXAAQAOABALAEQAIAEAIAJIgOAPQgGgFgGgDQgGgDgJAAQgNAAgJAKQgIAJAAANQAAAOAIAJQAJAKANAAQAJAAAHgDQAFgDAHgGIAPAQQgJAIgJAEQgLAFgOABQgYAAgPgQgAE9A0IAAhnIBQAAIAAAUIg5AAIAAAVIAyAAIAAAUIgyAAIAAAWIA5AAIAAAUgAEOA0IAAhDIguBDIgWAAIAAhnIAXAAIAABDIAuhDIAVAAIAABngACgA0IgggsIgNANIAAAfIgXAAIAAhnIAXAAIAAAuIArguIAcAAIgrAsIAtA7gAjBA0IAAhnIAYAAIAABngAkgA0IAAhnIAXAAIAAAjIAWAAQASAAALAKQAKAHAAAQQAAARgLAJQgLAJgSAAgAkJAfIAVAAQARAAAAgOQAAgOgSAAIgUAAgAmMA0IAAhnIAxAAQASAAAJAJQAHAHAAALQAAAPgOAHQAUAHAAASQAAAPgLAIQgKAGgSAAgAl2AgIAcAAQAQABAAgMQAAgMgRAAIgbAAgAl2gJIAWAAQAQAAAAgMQAAgKgPAAIgXAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ52, new cjs.Rectangle(-39.7,-5.4,79.5,10.9), null);


(lib.Символ50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiBAnQgPgQAAgXQAAgWAPgQQAQgQAXAAQAOABALAEQAIAEAIAJIgOAPQgGgFgGgDQgGgDgJAAQgNAAgJAKQgIAJAAANQAAAOAIAJQAJAKANAAQAJAAAHgDQAGgDAGgGIAPAQQgJAIgJAEQgLAFgOABQgYAAgPgQgAE2A0IAAhnIBQAAIAAAUIg4AAIAAAVIAxAAIAAAUIgxAAIAAAWIA5AAIAAAUgAEHA0IAAhnIAXAAIAABngACnA0IAAhnIAXAAIAAAjIAWAAQASAAALAKQAKAHAAAQQAAARgLAJQgKAJgTAAgAC+AfIAVAAQARAAAAgOQAAgOgRAAIgVAAgABDA0IAAhnIArAAQATAAAKAKQALAKAAAQQAAARgMAKQgMAJgTAAIgRAAIAAAfgABaABIATAAQAIAAAFgEQAFgFAAgHQAAgHgGgFQgEgEgJAAIgSAAgAgEA0IAAhSIghAAIAAgVIBWAAIAAAVIggAAIAABSgAi7A0IAAhnIAXAAIAABngAkbA0IAAhnIAXAAIAAAjIAWAAQASAAALAKQAKAHAAAQQAAARgLAJQgKAJgTAAgAkEAfIAVAAQARAAAAgOQAAgOgRAAIgVAAgAmGA0IAAhnIBRAAIAAAUIg5AAIAAASIAcAAQARAAAKAJQAKAIAAAPQAAAQgLAJQgLAJgSgBgAluAfIAZAAQAQABAAgNQAAgNgQAAIgZAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ50, new cjs.Rectangle(-39,-5.4,78.1,10.9), null);


(lib.Символ46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.arr();
	this.instance.parent = this;
	this.instance.setTransform(-5.7,-3.6,0.113,0.113);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ46, new cjs.Rectangle(-5.7,-3.6,11.5,7.2), null);


(lib.Символ45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AA/BvQgOgPAAgXQAAgWAOgQQAPgQAYAAQAXAAAPAQQAOAQAAAWQAAAWgOAQQgPARgYAAQgWAAgQgRgABGAoQgNANAAAUQAAAUANAOQAMANAUAAQATAAANgNQAMgOAAgUQABgTgNgOQgNgOgUAAQgSAAgNAOgAjyBwQgPgQgBgXQABgWAPgQQAOgQAXAAQANAAAKAFQAIAEAKAIIgGAFQgQgPgTAAQgTAAgNAOQgNANAAAUQABAUANAOQAMANATAAQATAAARgQIAGAFQgTATgYAAQgWAAgOgQgAHeB+IAAheIhDBeIgIAAIAAhpIAIAAIAABdIBDhdIAJAAIAABpgAF0B+Igqg1IgaAaIAAAbIgIAAIAAhpIAIAAIAABFIBChFIALAAIguAuIAwA7gAEBB+IAAheIhEBeIgIAAIAAhpIAIAAIAABdIBEhdIAIAAIAABpgAgtB+IAAhpIAlAAQARAAALAIQAKAJAAAPQAAAQgMAJQgLAJgQAAIgcAAIAAAngAglBPIAcAAQAOAAAJgHQAJgHAAgMQAAgMgJgHQgIgGgOAAIgdAAgAhyB+IAAhiIgkAAIAAgHIBRAAIAAAHIglAAIAABigAkcB+IgNgeIg+AAIgOAeIgHAAIAwhqIAIAAIAxBqgAktBZIgbg8IgcA8IA3AAgAmbB+IAAgxIhCAAIAAAxIgIAAIAAhpIAIAAIAAAwIBCAAIAAgwIAIAAIAABpgADRAHQgDgDgCgEIgBgEIAGgCIADAGQAEAEAHAAQAIAAADgEIADgGIAGACIgBAEQgCAEgEADQgFAFgIAAQgHAAgHgFgAjQABIAAgVIhCAAIgCAVIgUAAIAAgqIAJAAQAGgOADgPQADgRAAgZIAAgNIBNAAIAABUIAMAAIgDAqgAj9hdQAAAdgJAXIAoAAIAAg/IgfAAgAifgiQgPgPgBgXQAAgXAQgQQAQgQAZAAQAXAAAQAQQAQAQAAAXQAAAWgQAQQgQAQgYAAQgYAAgQgQgAiOhgQgJAKAAAOQAAAOAJAJQAKAKAOAAQANAAAJgKQAJgJAAgOQAAgOgJgJQgJgKgOAAQgNAAgKAJgAmOgYIAJgRQAGADAGAAQAJAAAEgIIgphPIAaAAIAcA4IAag4IAYAAIgoBRQgHAOgIAGQgIAGgMAAQgLAAgLgGgAFBgUIAAhpIBPAAIAAAVIg5AAIAAAVIAyAAIAAAVIgyAAIAAAWIA5AAIAAAUgAEQgUIAAhpIAYAAIAABpgACxgUIAAhpIAXAAIAAAkIAXAAQASAAAKAJQAKAJAAAQQAAAQgLAKQgLAJgSAAgADIgpIAVAAQARAAAAgOQAAgOgSAAIgUAAgACBgUIAAgqIgrAAIAAAqIgXAAIAAhpIAXAAIAAAqIArAAIAAgqIAXAAIAABpgAgrgUIAAhpIBQAAIAAAVIg4AAIAAASIAbAAQARAAAKAJQAKAJAAAPQAAAQgLAJQgLAIgSAAgAgTgpIAYAAQAQAAAAgNQAAgMgQAAIgYAAg");
	this.shape.setTransform(-23.9,20.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ45, new cjs.Rectangle(-72.5,8,97.3,25.5), null);


(lib.Символ44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag2AzIACgHQAEADAGAAQAXAAAAhOIAAgUIBAAAIAABnIgIAAIAAhhIgwAAIAAAOQAAAzgKATQgHAOgOAAQgGAAgGgCgAF/A0IAAhnIAIAAIAABngAEjA0IAAhnIAIAAIAAApIAfAAQARABAKAGQALAIAAAPQAAAPgKAIQgKAJgRAAgAErAuIAfAAQAOAAAIgHQAIgGAAgNQAAgMgIgFQgIgFgPAAIgeAAgADfA0IAAhhIgkAAIAAgGIBRAAIAAAGIglAAIAABhgACkA0IgOgdIg+AAIgNAdIgIAAIAxhoIAHAAIAxBogACTAQIgcg7IgbA7IA3AAgAhOA0IAAhhIhBAAIAABhIgIAAIAAhnIBRAAIAABngAi+A0IAAhnIAIAAIAABngAkaA0IAAhnIAIAAIAAApIAfAAQARABAKAGQALAIAAAPQAAAPgKAIQgKAJgRAAgAkSAuIAfAAQAOAAAIgHQAIgGAAgNQAAgMgIgFQgIgFgPAAIgeAAgAmGA0IAAhnIAsAAQAPAAAJAGQAKAIAAAMQAAASgSAGQAYAFAAAUQAAANgLAHQgKAIgRAAgAl+AuIAmAAQAOgBAIgFQAIgHAAgKQAAgJgJgGQgIgFgPAAIgkAAgAl+gDIAjAAQAMAAAHgGQAIgFAAgLQAAgJgHgFQgHgGgMAAIgkAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ44, new cjs.Rectangle(-39,-5.3,78.2,10.7), null);


(lib.Символ38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.nastr();
	this.instance.parent = this;
	this.instance.setTransform(-28,-28,0.373,0.373);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ38, new cjs.Rectangle(-28,-28,56,56), null);


(lib.Символ36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(179,0,0,0)","#B30000"],[0,1],-216,0,216.1,0).s().p("EghwALfIAA29MBDhAAAIAAW9g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ36, new cjs.Rectangle(-216,-73.5,432.1,147.1), null);


(lib.Символ35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.pl4();
	this.instance.parent = this;
	this.instance.setTransform(-115,-150);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ35, new cjs.Rectangle(-115,-150,305,300), null);


(lib.Символ34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.pl1();
	this.instance.parent = this;
	this.instance.setTransform(-148,-114,0.894,0.894);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ34, new cjs.Rectangle(-148,-114,336,227.9), null);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.pl4();
	this.instance.parent = this;
	this.instance.setTransform(-152.5,-150);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-152.5,-150,305,300);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.pl3();
	this.instance.parent = this;
	this.instance.setTransform(-164,-125);

	this.instance_1 = new lib.kl();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-6,22);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-164,-125,328,250);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.btn();
	this.instance.parent = this;
	this.instance.setTransform(-101,-25.9,0.894,0.894);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ26, new cjs.Rectangle(-101,-25.9,202,51.9), null);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjQA0IACgTIAEABQAKAAAEgMQAFgNAAgnIAAgWIBLAAIAABoIgXAAIAAhTIgfAAIAAAIQAAAsgHARQgIAQgSAAQgHAAgGgCgAC4A0IgJgXIgsAAIgKAXIgYAAIAthpIAWAAIAtBpgACmAIIgOghIgNAhIAbAAgAAfA0IAAhoIBKAAIAAAVIgyAAIAABTgAgPA0IAAhEIguBEIgWAAIAAhoIAXAAIAABEIAuhEIAUAAIAABog");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ23, new cjs.Rectangle(-20.8,-5.4,41.7,10.8), null);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Al0A2QgQgPAAgYQAAgVAQgQQAQgQAZAAQAXAAAQAQQAQAQAAAVQAAAXgQAQQgQAQgYAAQgYAAgQgQgAljgHQgJAJAAANQAAAPAJAJQAKAKAOAAQANAAAJgKQAJgJAAgPQAAgNgJgIQgJgKgOAAQgNgBgKAKgAHXBEIAAgiIgSAAIgXAiIgbAAIAaglQgWgJAAgYQAAgPAKgKQAKgJATAAIAwAAIAABogAGuAAQAAAGAFAEQAFAEAHAAIAYAAIAAgdIgXAAQgSAAAAAPgAFzBEIgKgYIgsAAIgKAYIgXAAIAshpIAWAAIAtBpgAFhAYIgOghIgOAhIAcAAgAD1BEIAAgqIgrAAIAAAqIgYAAIAAhoIAYAAIAAAoIArAAIAAgoIAWAAIAABogACDBEIAAhEIguBEIgWAAIAAhoIAXAAIAABEIAuhEIAWAAIAABogAglBEIAAhoIBPAAIAAAVIg3AAIAAAUIAwAAIAAAUIgwAAIAAAXIA3AAIAAAUgAhOBEIghgtIgMANIAAAgIgXAAIAAhoIAXAAIAAAtIArgtIAcAAIgrArIAtA9gAi7BEIghgtIgMANIAAAgIgYAAIAAhoIAYAAIAAAtIAqgtIAcAAIgqArIAsA9gAmjBEIgYgkIgXAkIgbAAIAlg2IgjgyIAbAAIAVAiIAXgiIAaAAIgjAyIAlA2gABcgyQgHgGgBgLIANgCQADAKAJAAQAIAAAEgKIANACQgBALgIAGQgGAGgKAAQgLAAgGgGg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ22, new cjs.Rectangle(-49.4,-7,98.8,14), null);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Aq3AnQgPgQAAgXQAAgWAQgQQAQgQAYAAQAYAAAQAQQAPAQAAAWQAAAXgQAQQgQAQgYAAQgYAAgQgQgAqlgWQgJAJAAANQAAAOAJAJQAJAKAOAAQANAAAJgKQAJgJAAgOQAAgNgJgJQgJgKgOAAQgNAAgJAKgAELA0IACgTIADABQALAAAEgLQAFgOAAgnIAAgVIBLAAIAABnIgXAAIAAhTIgfAAIAAAJQAAArgIARQgHAQgTAAQgHAAgFgCgAMSA0IAAghIgSAAIgXAhIgbAAIAaglQgXgIAAgYQAAgQALgJQAKgJATAAIAwAAIAABngALpgPQAAAHAEAEQAFADAIAAIAYAAIAAgeIgXAAQgSABAAAPgAKtA0IgJgXIgsAAIgKAXIgYAAIAthoIAWAAIAtBogAKcAIIgOggIgOAgIAcAAgAIvA0IAAgpIgrAAIAAApIgXAAIAAhnIAXAAIAAApIArAAIAAgpIAXAAIAABngAGIA0IAAhnIAXAAIAAAjIAWAAQASAAALAKQAKAHAAAQQAAARgLAJQgLAJgSAAgAGfAfIAVAAQARAAAAgOQAAgOgSAAIgUAAgADtA0IgJgXIgsAAIgKAXIgYAAIAthoIAWAAIAtBogADcAIIgOggIgOAgIAcAAgABkA0IAAhSIggAAIAAgVIBXAAIAAAVIggAAIAABSgAAcA0IAAgpIgqAAIAAApIgXAAIAAhnIAXAAIAAApIAqAAIAAgpIAXAAIAABngAiKA0IAAhnIBQAAIAAAUIg5AAIAAAVIAyAAIAAAUIgyAAIAAAWIA5AAIAAAUgAi6A0IAAgpIgrAAIAAApIgXAAIAAhnIAXAAIAAApIArAAIAAgpIAXAAIAABngAkrA0IAAhDIguBDIgWAAIAAhnIAXAAIAABDIAuhDIAVAAIAABngAm4A0IAAhSIggAAIAAgVIBXAAIAAAVIggAAIAABSgAoAA0IAAgpIgrAAIAAApIgXAAIAAhnIAXAAIAAApIArAAIAAgpIAXAAIAABngArkA0IgggsIgNANIAAAfIgXAAIAAhnIAXAAIAAAuIArguIAcAAIgrAsIAtA7g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ21, new cjs.Rectangle(-80.8,-5.4,161.8,10.9), null);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.khl();
	this.instance.parent = this;
	this.instance.setTransform(-63,-53,0.648,0.648);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ20, new cjs.Rectangle(-63,-53,90.1,97.2), null);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(-99.5,-25.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ15, new cjs.Rectangle(-99.5,-25.5,199,51), null);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ap7BVQkIgkAAgxQAAgxEIgjQEHgjF0AAQF1AAEHAjQEIAjAAAxQAAAxkIAkQkHAjl1AAQl0AAkHgjg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ13, new cjs.Rectangle(-90,-12,180,24), null);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AnnA5QjKgYAAghQAAggDKgYQDKgXEdAAQEeAADKAXQDKAYAAAgQAAAhjKAYQjKAXkeAAQkdAAjKgXg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ11, new cjs.Rectangle(-69,-8,138,16), null);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ArCBKQklgfAAgrQAAgqElggQElgeGdAAQGeAAElAeQElAgAAAqQAAArklAfQklAfmeAAQmdAAklgfg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ10, new cjs.Rectangle(-100,-10.5,200,21), null);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,84,84,0)","#FFFFFF"],[0,1],0,214.1,0,-214.1).s().p("EgMVAguMAHphBbIIPAAMAIzBBbg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ3, new cjs.Rectangle(-79,-209.4,158,418.9), null);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.bg();
	this.instance.parent = this;
	this.instance.setTransform(-333,-158.7,1.041,1.041);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ2, new cjs.Rectangle(-333,-158.7,666,317.4), null);


(lib.Символ34_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance_1 = new lib.money();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-24.8,-13.8,0.373,0.373);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ34_1, new cjs.Rectangle(-24.8,-13.8,49.7,27.7), null);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.money();
	this.instance.parent = this;
	this.instance.setTransform(-24.8,-13.8,0.373,0.373);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ33, new cjs.Rectangle(-24.8,-13.8,49.7,27.7), null);


(lib.Символ26_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance_1 = new lib.polzun();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-5.3,-20.5,0.343,0.343);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ26_1, new cjs.Rectangle(-5.3,-20.5,10.6,41.1), null);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.polzun();
	this.instance.parent = this;
	this.instance.setTransform(-5.3,-20.5,0.343,0.343);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ25, new cjs.Rectangle(-5.3,-20.5,10.6,41.1), null);


(lib.Символ13_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.polzun();
	this.instance.parent = this;
	this.instance.setTransform(-5.3,-20.5,0.343,0.343);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ13_1, new cjs.Rectangle(-5.3,-20.5,10.6,41.1), null);


(lib.Символ51 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.Символ50();
	this.instance.parent = this;
	this.instance.setTransform(0,-7.3);

	this.instance_1 = new lib.Символ44();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,7.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ51, new cjs.Rectangle(-39,-12.8,78.2,25.7), null);


(lib.Символ43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.Символ53();
	this.instance.parent = this;
	this.instance.setTransform(-26.5,28.9);

	this.instance_1 = new lib.Символ52();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-26.3,13.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ43, new cjs.Rectangle(-94.4,7.6,135.9,27.9), null);


(lib.Символ42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_3
	this.instance = new lib.Символ51();
	this.instance.parent = this;
	this.instance.setTransform(-18.2,20.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ42, new cjs.Rectangle(-57.3,7.7,78.2,25.7), null);


(lib.Символ35копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 46
	this.instance = new lib.Символ46();
	this.instance.parent = this;
	this.instance.setTransform(81.7,-35.4);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.06,scaleY:1.06,x:82.1,y:-35.6,alpha:0.129},0).wait(1).to({scaleX:1.12,scaleY:1.12,x:82.4,y:-35.8,alpha:0.257},0).wait(1).to({scaleX:1.18,scaleY:1.18,x:82.8,y:-36.1,alpha:0.384},0).wait(1).to({scaleX:1.24,scaleY:1.24,x:83.1,y:-36.3,alpha:0.51},0).wait(1).to({scaleX:1.3,scaleY:1.3,x:83.5,y:-36.5,alpha:0.634},0).wait(1).to({scaleX:1.36,scaleY:1.36,x:83.8,y:-36.7,alpha:0.757},0).wait(1).to({scaleX:1.42,scaleY:1.42,x:84.2,y:-36.9,alpha:0.879},0).wait(1).to({scaleX:1.48,scaleY:1.48,x:84.5,y:-37.1,alpha:1},0).wait(1).to({scaleX:1.53,scaleY:1.53,x:84.8,y:-37.4},0).wait(1).to({scaleX:1.59,scaleY:1.59,x:85.2,y:-37.6},0).wait(1).to({scaleX:1.64,scaleY:1.64,x:85.5,y:-37.8},0).wait(1).to({scaleX:1.7,scaleY:1.7,x:85.8,y:-38},0).wait(1).to({scaleX:1.75,scaleY:1.75,x:86.1,y:-38.2},0).wait(1).to({scaleX:1.81,scaleY:1.81,x:86.5,y:-38.4},0).wait(1).to({scaleX:1.86,scaleY:1.86,x:86.8,y:-38.6},0).wait(1).to({scaleX:1.91,scaleY:1.91,x:87.1,y:-38.8},0).wait(1).to({scaleX:1.97,scaleY:1.97,x:87.4,y:-39},0).wait(1).to({scaleX:2.02,scaleY:2.02,x:87.7,y:-39.1},0).wait(1).to({scaleX:2.07,scaleY:2.07,x:88,y:-39.3},0).wait(1).to({scaleX:2.12,scaleY:2.12,x:88.3,y:-39.5},0).wait(1).to({scaleX:2.17,scaleY:2.17,x:88.6,y:-39.7},0).wait(1).to({scaleX:2.22,scaleY:2.22,x:88.9,y:-39.9},0).wait(1).to({scaleX:2.27,scaleY:2.27,x:89.2,y:-40.1},0).wait(1).to({scaleX:2.32,scaleY:2.32,x:89.4,y:-40.2},0).wait(1).to({scaleX:2.36,scaleY:2.36,x:89.7,y:-40.4},0).wait(1).to({scaleX:2.41,scaleY:2.41,x:90,y:-40.6},0).wait(1).to({scaleX:2.46,scaleY:2.46,x:90.3,y:-40.8},0).wait(1).to({scaleX:2.5,scaleY:2.5,x:90.6,y:-40.9},0).wait(1).to({scaleX:2.55,scaleY:2.55,x:90.8,y:-41.1},0).wait(1).to({scaleX:2.59,scaleY:2.59,x:91.1,y:-41.3},0).wait(1).to({scaleX:2.64,scaleY:2.64,x:91.3,y:-41.4},0).wait(1).to({scaleX:2.68,scaleY:2.68,x:91.6,y:-41.6},0).wait(1).to({scaleX:2.73,scaleY:2.73,x:91.9,y:-41.8},0).wait(1).to({scaleX:2.77,scaleY:2.77,x:92.1,y:-41.9},0).wait(1).to({scaleX:2.81,scaleY:2.81,x:92.4,y:-42.1},0).wait(1).to({scaleX:2.85,scaleY:2.85,x:92.6,y:-42.2},0).wait(1).to({scaleX:2.89,scaleY:2.89,x:92.8,y:-42.4},0).wait(1).to({scaleX:2.93,scaleY:2.93,x:93.1,y:-42.5},0).wait(1).to({scaleX:2.97,scaleY:2.97,x:93.3,y:-42.7},0).wait(1).to({scaleX:3.01,scaleY:3.01,x:93.5,y:-42.8},0).wait(1).to({scaleX:3.05,scaleY:3.05,x:93.8,y:-43},0).wait(1).to({scaleX:3.09,scaleY:3.09,x:94,y:-43.1},0).wait(1).to({scaleX:3.13,scaleY:3.13,x:94.2,y:-43.2},0).wait(1).to({scaleX:3.16,scaleY:3.16,x:94.4,y:-43.4},0).wait(1).to({scaleX:3.2,scaleY:3.2,x:94.7,y:-43.5},0).wait(1).to({scaleX:3.24,scaleY:3.24,x:94.9,y:-43.6},0).wait(1).to({scaleX:3.27,scaleY:3.27,x:95.1,y:-43.8},0).wait(1).to({scaleX:3.31,scaleY:3.31,x:95.3,y:-43.9},0).wait(1).to({scaleX:3.34,scaleY:3.34,x:95.5,y:-44},0).wait(1).to({scaleX:3.37,scaleY:3.37,x:95.7,y:-44.1},0).wait(1).to({scaleX:3.41,scaleY:3.41,x:95.9,y:-44.3},0).wait(1).to({scaleX:3.44,scaleY:3.44,x:96.1,y:-44.4},0).wait(1).to({scaleX:3.47,scaleY:3.47,x:96.2,y:-44.5},0).wait(1).to({scaleX:3.5,scaleY:3.5,x:96.4,y:-44.6},0).wait(1).to({scaleX:3.53,scaleY:3.53,x:96.6,y:-44.7},0).wait(1).to({scaleX:3.56,scaleY:3.56,x:96.8,y:-44.8},0).wait(1).to({scaleX:3.59,scaleY:3.59,x:97,y:-45},0).wait(1).to({scaleX:3.62,scaleY:3.62,x:97.1,y:-45.1},0).wait(1).to({scaleX:3.65,scaleY:3.65,x:97.3,y:-45.2},0).wait(1).to({scaleX:3.68,scaleY:3.68,x:97.5,y:-45.3},0).wait(1).to({scaleX:3.71,scaleY:3.71,x:97.6,y:-45.4},0).wait(1).to({scaleX:3.73,scaleY:3.73,x:97.8,y:-45.5},0).wait(1).to({scaleX:3.76,scaleY:3.76,x:97.9,y:-45.6},0).wait(1).to({scaleX:3.79,scaleY:3.79,x:98.1,y:-45.7},0).wait(1).to({scaleX:3.81,scaleY:3.81,x:98.2,y:-45.8},0).wait(1).to({scaleX:3.83,scaleY:3.83,x:98.4},0).wait(1).to({scaleX:3.86,scaleY:3.86,x:98.5,y:-45.9},0).wait(1).to({scaleX:3.88,scaleY:3.88,x:98.7,y:-46},0).wait(1).to({scaleX:3.91,scaleY:3.91,x:98.8,y:-46.1},0).wait(1).to({scaleX:3.93,scaleY:3.93,x:98.9,y:-46.2},0).wait(1).to({scaleX:3.95,scaleY:3.95,x:99.1,y:-46.3},0).wait(1).to({scaleX:3.97,scaleY:3.97,x:99.2},0).wait(1).to({scaleX:3.99,scaleY:3.99,x:99.3,y:-46.4},0).wait(1).to({scaleX:4.01,scaleY:4.01,x:99.4,y:-46.5},0).wait(1).to({scaleX:4.03,scaleY:4.03,x:99.5,y:-46.6},0).wait(1).to({scaleX:4.05,scaleY:4.05,x:99.7},0).wait(1).to({scaleX:4.07,scaleY:4.07,x:99.8,y:-46.7},0).wait(1).to({scaleX:4.09,scaleY:4.09,x:99.9,y:-46.8},0).wait(1).to({scaleX:4.1,scaleY:4.1,x:100},0).wait(1).to({scaleX:4.12,scaleY:4.12,x:100.1,y:-46.9},0).wait(1).to({scaleX:4.14,scaleY:4.14,x:100.2,y:-47},0).wait(1).to({scaleX:4.15,scaleY:4.15,x:100.3},0).wait(1).to({scaleX:4.17,scaleY:4.17,y:-47.1},0).wait(1).to({scaleX:4.18,scaleY:4.18,x:100.4},0).wait(1).to({scaleX:4.19,scaleY:4.19,x:100.5,y:-47.2},0).wait(1).to({scaleX:4.21,scaleY:4.21,x:100.6},0).wait(1).to({scaleX:4.22,scaleY:4.22,x:100.7,y:-47.3},0).wait(1).to({scaleX:4.23,scaleY:4.23},0).wait(1).to({scaleX:4.24,scaleY:4.24,x:100.8},0).wait(1).to({scaleX:4.26,scaleY:4.26,x:100.9,y:-47.4,alpha:0.902},0).wait(1).to({scaleX:4.26,scaleY:4.26,alpha:0.81},0).wait(1).to({scaleX:4.28,scaleY:4.28,x:101,y:-47.5,alpha:0.723},0).wait(1).to({scaleX:4.28,scaleY:4.28,alpha:0.64},0).wait(1).to({scaleX:4.29,scaleY:4.29,x:101.1,alpha:0.563},0).wait(1).to({scaleX:4.3,scaleY:4.3,alpha:0.49},0).wait(1).to({scaleX:4.31,scaleY:4.31,x:101.2,y:-47.6,alpha:0.423},0).wait(1).to({scaleX:4.32,scaleY:4.32,alpha:0.36},0).wait(1).to({scaleX:4.32,scaleY:4.32,x:101.3,alpha:0.303},0).wait(1).to({scaleX:4.33,scaleY:4.33,alpha:0.25},0).wait(1).to({scaleX:4.33,scaleY:4.33,y:-47.7,alpha:0.203},0).wait(1).to({scaleX:4.34,scaleY:4.34,alpha:0.16},0).wait(1).to({scaleX:4.34,scaleY:4.34,x:101.4,alpha:0.123},0).wait(1).to({scaleX:4.35,scaleY:4.35,alpha:0.09},0).wait(1).to({scaleX:4.35,scaleY:4.35,alpha:0.063},0).wait(1).to({scaleX:4.35,scaleY:4.35,alpha:0.04},0).wait(1).to({scaleX:4.35,scaleY:4.35,alpha:0.023},0).wait(1).to({scaleX:4.36,scaleY:4.36,alpha:0.01},0).wait(1).to({scaleX:4.36,scaleY:4.36,x:101.5,alpha:0.002},0).wait(1).to({regX:0.1,regY:-0.1,scaleX:4.36,scaleY:4.36,x:101.3,alpha:0},0).wait(1));

	// coeff.png
	this.instance_1 = new lib.coeff();
	this.instance_1.parent = this;
	this.instance_1.setTransform(68,-55,0.373,0.373);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(110));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(68,-55,56,47.4);


(lib.Символ33_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance_1 = new lib.Символ34();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:4.8},13,cjs.Ease.get(-1)).to({y:10},14,cjs.Ease.get(1)).to({y:5.2},13,cjs.Ease.get(-1)).to({y:0},14,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-148,-114,336,227.9);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.Символ35();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-4.8},19,cjs.Ease.get(-1)).wait(1).to({regX:37.5,x:37.5,y:-5.2},0).wait(1).to({y:-5.6},0).wait(1).to({y:-5.9},0).wait(1).to({y:-6.3},0).wait(1).to({y:-6.6},0).wait(1).to({y:-6.9},0).wait(1).to({y:-7.2},0).wait(1).to({y:-7.5},0).wait(1).to({y:-7.8},0).wait(1).to({y:-8.1},0).wait(1).to({y:-8.3},0).wait(1).to({y:-8.6},0).wait(1).to({y:-8.8},0).wait(1).to({y:-9},0).wait(1).to({y:-9.2},0).wait(1).to({y:-9.4},0).wait(1).to({y:-9.5},0).wait(1).to({y:-9.7},0).wait(1).to({y:-9.8},0).wait(1).to({regX:0,x:0,y:-10},0).to({y:-5},20,cjs.Ease.get(-1)).to({y:0},20,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-115,-150,305,300);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_3
	this.instance = new lib.btn_h();
	this.instance.parent = this;
	this.instance.setTransform(-109,-28,0.967,0.967);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1).to({scaleX:0.82,scaleY:0.82,x:-92,y:-24},0).wait(1));

	// Слой_1
	this.instance_1 = new lib.Символ26();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-101,-25.9,202,51.9);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.Символ28();
	this.instance.parent = this;
	new cjs.ButtonHelper(this.instance, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ27, new cjs.Rectangle(-109,-28,218.5,56.1), null);


(lib.Символ25_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance_1 = new lib.Символ27();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1.03,scaleY:1.03},19,cjs.Ease.get(-1)).to({scaleX:1.06,scaleY:1.06},20,cjs.Ease.get(1)).to({scaleX:1.03,scaleY:1.03},20,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1},20,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-101,-25.9,202,51.9);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.Символ29();
	this.instance.parent = this;
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:6.5},24,cjs.Ease.get(-1)).to({y:13.2},25,cjs.Ease.get(1)).to({y:6.6},25,cjs.Ease.get(-1)).to({y:0},25,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-164,-125,328,250);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.Символ13();
	this.instance.parent = this;
	this.instance.alpha = 0.359;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ12, new cjs.Rectangle(-90,-12,180,24), null);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.Символ3();
	this.instance.parent = this;
	this.instance.setTransform(0.1,-132,0.709,0.709,30,0,0,0.1,-186.2);
	this.instance.alpha = 0.359;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:0,regY:0,rotation:27.1,x:-60.2,y:-14.6},0).wait(1).to({rotation:24.4,x:-54.4,y:-11.8},0).wait(1).to({rotation:21.6,x:-48.7,y:-9.4},0).wait(1).to({rotation:19,x:-42.9,y:-7.3},0).wait(1).to({rotation:16.4,x:-37.3,y:-5.5},0).wait(1).to({rotation:13.9,x:-31.7,y:-4},0).wait(1).to({rotation:11.4,x:-26.2,y:-2.8},0).wait(1).to({scaleX:0.71,scaleY:0.71,rotation:9,x:-20.7,y:-1.8},0).wait(1).to({rotation:6.7,x:-15.4,y:-1.1},0).wait(1).to({rotation:4.4,x:-10.3,y:-0.6},0).wait(1).to({rotation:2.3,x:-5.2,y:-0.3},0).wait(1).to({rotation:0.1,x:-0.3,y:-0.2},0).wait(1).to({rotation:-1.9,x:4.4,y:-0.3},0).wait(1).to({rotation:-3.9,x:9,y:-0.5},0).wait(1).to({rotation:-5.9,x:13.4,y:-0.9},0).wait(1).to({rotation:-7.7,x:17.7,y:-1.4},0).wait(1).to({rotation:-9.5,x:21.8,y:-2.1},0).wait(1).to({rotation:-11.3,x:25.7,y:-2.8},0).wait(1).to({rotation:-12.9,x:29.4,y:-3.6},0).wait(1).to({rotation:-14.5,x:33,y:-4.5},0).wait(1).to({rotation:-16.1,x:36.4,y:-5.4},0).wait(1).to({rotation:-17.6,x:39.7,y:-6.4},0).wait(1).to({rotation:-19,x:42.8,y:-7.4},0).wait(1).to({rotation:-20.3,x:45.7,y:-8.5},0).wait(1).to({rotation:-21.6,x:48.4,y:-9.5},0).wait(1).to({rotation:-22.8,x:51,y:-10.6},0).wait(1).to({rotation:-24,x:53.4,y:-11.7},0).wait(1).to({rotation:-25,x:55.7,y:-12.7},0).wait(1).to({rotation:-26,x:57.8,y:-13.7},0).wait(1).to({rotation:-27,x:59.7,y:-14.7},0).wait(1).to({rotation:-27.9,x:61.5,y:-15.6},0).wait(1).to({rotation:-28.7,x:63.2,y:-16.5},0).wait(1).to({rotation:-29.5,x:64.7,y:-17.4},0).wait(1).to({rotation:-30.1,x:66,y:-18.1},0).wait(1).to({rotation:-30.8,x:67.3,y:-18.9},0).wait(1).to({rotation:-31.3,x:68.4,y:-19.5},0).wait(1).to({rotation:-31.8,x:69.3,y:-20.1},0).wait(1).to({rotation:-32.2,x:70.2,y:-20.7},0).wait(1).to({regX:0.1,regY:-186.2,rotation:-32.6,x:-0.1,y:-132.1},0).wait(1).to({regX:0,regY:0,rotation:-32.9,x:71.5,y:-21.4},0).wait(1).to({rotation:-33.2,x:72.1,y:-21.6},0).wait(1).to({scaleX:0.71,scaleY:0.71,rotation:-33.4,x:72.4,y:-21.8},0).wait(1).to({rotation:-33.5,x:72.7,y:-21.9},0).wait(1).to({regX:0.1,regY:-186.2,x:0,y:-132.1},0).to({rotation:30,x:0.1,y:-132},45,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-188.7,-174.3,245.5,313.2);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.Символ3();
	this.instance.parent = this;
	this.instance.setTransform(-34,-98.9,0.709,0.709,-34.2,0,0,-14.1,-163.6);
	this.instance.alpha = 0.359;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:-163.5,scaleX:0.9,scaleY:0.9,rotation:2.5,x:-33.9,y:-99},29,cjs.Ease.get(-1)).to({regY:-163.6,scaleX:0.71,scaleY:0.71,rotation:40.8,x:-33.8},30,cjs.Ease.get(1)).to({regX:-14.2,scaleX:0.99,scaleY:0.99,rotation:3.3,x:-34.1,y:-99.2},30,cjs.Ease.get(-1)).to({regX:-14.1,scaleX:0.71,scaleY:0.71,rotation:-34.2,x:-34,y:-98.9},30,cjs.Ease.get(1)).wait(1));

	// Слой_2
	this.instance_1 = new lib.Символ12();
	this.instance_1.parent = this;
	this.instance_1.setTransform(265,259.6);
	this.instance_1.alpha = 0.359;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.77,x:-88.6,y:229.6},29,cjs.Ease.get(-1)).to({scaleX:1,x:-312,y:259.6},30,cjs.Ease.get(1)).to({scaleX:1.23,scaleY:1.23,x:-104.5,y:279.6},30,cjs.Ease.get(-1)).wait(1).to({scaleX:1.22,scaleY:1.22,x:-80.3,y:278.3},0).wait(1).to({scaleX:1.2,scaleY:1.2,x:-56.9,y:277},0).wait(1).to({scaleX:1.19,scaleY:1.19,x:-34.4,y:275.8},0).wait(1).to({scaleX:1.18,scaleY:1.18,x:-12.6,y:274.6},0).wait(1).to({scaleX:1.16,scaleY:1.16,x:8.3,y:273.5},0).wait(1).to({scaleX:1.15,scaleY:1.15,x:28.5,y:272.4},0).wait(1).to({scaleX:1.14,scaleY:1.14,x:47.7,y:271.4},0).wait(1).to({scaleX:1.13,scaleY:1.13,x:66.2,y:270.4},0).wait(1).to({scaleX:1.11,scaleY:1.11,x:83.9,y:269.4},0).wait(1).to({scaleX:1.1,scaleY:1.1,x:100.7,y:268.5},0).wait(1).to({scaleX:1.09,scaleY:1.09,x:116.7,y:267.6},0).wait(1).to({regY:0.1,scaleX:1.08,scaleY:1.08,x:131.9,y:266.9},0).wait(1).to({regY:0,scaleX:1.08,scaleY:1.08,x:146.3,y:266},0).wait(1).to({scaleX:1.07,scaleY:1.07,x:159.8,y:265.2},0).wait(1).to({scaleX:1.06,scaleY:1.06,x:172.6,y:264.5},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:184.5,y:263.9},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:195.6,y:263.3},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:205.8,y:262.7},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:215.3,y:262.2},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:223.9,y:261.7},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:231.7,y:261.3},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:238.7,y:260.9},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:244.8,y:260.6},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:250.2,y:260.3},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:254.7,y:260.1},0).wait(1).to({scaleX:1,scaleY:1,x:258.4,y:259.9},0).wait(1).to({scaleX:1,scaleY:1,x:261.3,y:259.7},0).wait(1).to({scaleX:1,scaleY:1,x:263.3,y:259.6},0).wait(1).to({scaleX:1,scaleY:1,x:264.5,y:259.5},0).wait(1).to({x:265,y:259.6},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-90.3,-162.9,445.3,434.5);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.Символ3();
	this.instance.parent = this;
	this.instance.setTransform(20,-88.9,0.709,0.709,-15,0,0,0.1,-186.1);
	this.instance.alpha = 0.359;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:0.2,rotation:6.3,x:20.2,y:-89},18,cjs.Ease.get(-1)).to({rotation:30,x:20.1},20,cjs.Ease.get(1)).to({regY:-186,rotation:7.5},19,cjs.Ease.get(-1)).to({regX:0.1,regY:-186.1,rotation:-15,x:20,y:-88.9},19,cjs.Ease.get(1)).wait(1));

	// Слой_2
	this.instance_1 = new lib.Символ11();
	this.instance_1.parent = this;
	this.instance_1.setTransform(111,216);
	this.instance_1.alpha = 0.18;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.86,scaleY:1.06,x:-10.7,y:179.5},18,cjs.Ease.get(-1)).to({regY:0.1,scaleX:1,scaleY:2.25,x:-167,y:202.2},20,cjs.Ease.get(1)).to({scaleY:1.63,x:-18,y:179.1},19,cjs.Ease.get(-1)).to({regY:0,scaleY:1,x:111,y:216},19,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38.4,-119.4,218.4,343.4);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.instance = new lib.Символ10();
	this.instance.parent = this;
	this.instance.setTransform(156,245.1);
	this.instance.alpha = 0.18;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.66,scaleY:0.66,x:-21.6,y:250.2},29,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,x:-236,y:256.4},35,cjs.Ease.get(1)).to({scaleX:0.75,scaleY:0.75,x:-34,y:244.8},32,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,x:156,y:245.1},33,cjs.Ease.get(1)).wait(1));

	// Слой_1
	this.instance_1 = new lib.Символ3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0.1,-106.9,0.709,0.709,-21,0,0,0.1,-150.8);
	this.instance_1.alpha = 0.359;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:0,scaleY:0.86,rotation:2,x:-4.4,y:-99},29,cjs.Ease.get(-1)).to({regX:-0.1,scaleY:1.05,rotation:29.8,x:-9.9,y:-89.6},35,cjs.Ease.get(1)).to({scaleY:0.88,rotation:4.8,x:-5,y:-98.1},32,cjs.Ease.get(-1)).to({regX:0.1,scaleY:0.71,rotation:-21,x:0.1,y:-106.9},33,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-67.2,-165.8,323.2,421.4);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.Символ3();
	this.instance.parent = this;
	this.instance.setTransform(0.2,-160.9,0.89,0.89,25.2,0,0,0.2,-180.7);
	this.instance.alpha = 0.359;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:0.1,regY:-180.8,rotation:1.8,x:0.1,y:-161},25,cjs.Ease.get(-1)).to({regX:0.2,regY:-180.7,rotation:-25.2},29,cjs.Ease.get(1)).to({regX:0.4,rotation:-0.3,x:0.3},27,cjs.Ease.get(-1)).to({regX:0.2,rotation:25.2,x:0.2,y:-160.9},28,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-211.7,-214.1,286.3,397.4);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 3
	this.instance = new lib.Символ5();
	this.instance.parent = this;
	this.instance.setTransform(45.5,14);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Символ 3
	this.instance_1 = new lib.Символ6();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-118.5,-35);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Символ 3
	this.instance_2 = new lib.Символ7();
	this.instance_2.parent = this;
	this.instance_2.setTransform(161.5,-9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Символ 3
	this.instance_3 = new lib.Символ8();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-10.5,-72);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Символ 3
	this.instance_4 = new lib.Символ9();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-225.5,4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ4, new cjs.Rectangle(-414.2,-234.9,758.7,455.5), null);


(lib.Символ1копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.Символ2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.02,scaleY:1.02},29,cjs.Ease.get(-1)).to({scaleX:1.04,scaleY:1.04},30,cjs.Ease.get(1)).to({scaleX:1.02,scaleY:1.02},30,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1},30,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-333,-158.7,666,317.4);


(lib.Символ36_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AlRCjIAAlFIKjAAIAACDIo9AAIAADCg");
	var mask_graphics_1 = new cjs.Graphics().p("AlTiXIKigWIAFCDIo9ATIAGDBIhlAEg");
	var mask_graphics_2 = new cjs.Graphics().p("AlUiPIKiglIAHCCIo8AgIAKDCIhlAFg");
	var mask_graphics_3 = new cjs.Graphics().p("AlUiKIKggvIAJCDIo7AnIANDCIhlAHg");
	var mask_graphics_4 = new cjs.Graphics().p("AlViJIKhgxIAKCCIo8AqIAODCIhlAHg");
	var mask_graphics_5 = new cjs.Graphics().p("AlTiUIKigcIAFCDIo8AYIAIDCIhmAEg");
	var mask_graphics_6 = new cjs.Graphics().p("AlSicIKigMIADCDIo9AKIAEDCIhmACg");
	var mask_graphics_7 = new cjs.Graphics().p("AlRigIKigEIABCDIo9ADIABDCIhmABg");
	var mask_graphics_8 = new cjs.Graphics().p("AlRCjIAAlFIKjAAIAACDIo9AAIAADCg");
	var mask_graphics_9 = new cjs.Graphics().p("AlRCjIAAlFIKjAAIAACDIo9AAIAADCg");
	var mask_graphics_10 = new cjs.Graphics().p("AlTiXIKigWIAFCDIo9ATIAGDBIhlAEg");
	var mask_graphics_11 = new cjs.Graphics().p("AlUiPIKiglIAHCCIo8AgIAKDCIhlAFg");
	var mask_graphics_12 = new cjs.Graphics().p("AlUiKIKggvIAJCDIo7AnIANDCIhlAHg");
	var mask_graphics_13 = new cjs.Graphics().p("AlViJIKhgxIAKCCIo8AqIAODCIhlAHg");
	var mask_graphics_14 = new cjs.Graphics().p("AlTiUIKigcIAFCDIo8AYIAIDCIhmAEg");
	var mask_graphics_15 = new cjs.Graphics().p("AlSicIKigMIADCDIo9AKIAEDCIhmACg");
	var mask_graphics_16 = new cjs.Graphics().p("AlRigIKigEIABCDIo9ADIABDCIhmABg");
	var mask_graphics_17 = new cjs.Graphics().p("AlRCjIAAlFIKjAAIAACDIo9AAIAADCg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:2.8,y:-6.4}).wait(1).to({graphics:mask_graphics_1,x:2.6,y:-7.2}).wait(1).to({graphics:mask_graphics_2,x:2.4,y:-7.7}).wait(1).to({graphics:mask_graphics_3,x:2.3,y:-8}).wait(1).to({graphics:mask_graphics_4,x:2.2,y:-8.2}).wait(1).to({graphics:mask_graphics_5,x:2.5,y:-7.4}).wait(1).to({graphics:mask_graphics_6,x:2.7,y:-6.8}).wait(1).to({graphics:mask_graphics_7,x:2.8,y:-6.5}).wait(1).to({graphics:mask_graphics_8,x:2.8,y:-6.4}).wait(1).to({graphics:mask_graphics_9,x:2.8,y:-6.4}).wait(1).to({graphics:mask_graphics_10,x:2.6,y:-7.2}).wait(1).to({graphics:mask_graphics_11,x:2.4,y:-7.7}).wait(1).to({graphics:mask_graphics_12,x:2.3,y:-8}).wait(1).to({graphics:mask_graphics_13,x:2.2,y:-8.2}).wait(1).to({graphics:mask_graphics_14,x:2.5,y:-7.4}).wait(1).to({graphics:mask_graphics_15,x:2.7,y:-6.8}).wait(1).to({graphics:mask_graphics_16,x:2.8,y:-6.5}).wait(1).to({graphics:mask_graphics_17,x:2.8,y:-6.4}).wait(17));

	// money.png
	this.instance = new lib.Символ33();
	this.instance.parent = this;
	this.instance.setTransform(-3.1,-6.1);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(34));

	// money.png
	this.instance_1 = new lib.Символ34_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-20.9,-9.5,1,1,0,0,0,-25.7,-14.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:-25.6,rotation:-4,x:-20.8},4,cjs.Ease.get(1)).to({regX:-25.7,rotation:0,x:-20.9},4,cjs.Ease.get(1)).wait(1).to({regX:-25.6,rotation:-4,x:-20.8},4,cjs.Ease.get(1)).to({regX:-25.7,rotation:0,x:-20.9},4,cjs.Ease.get(1)).wait(17));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28,-20,57.7,38.7);


(lib.Символ8_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AjuCKIAAkTIHeAAIAAETg");
	mask.setTransform(14.8,-0.1);

	// polzun.png
	this.instance_2 = new lib.Символ13_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(29.3,0);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(11).to({y:-6},18,cjs.Ease.get(1)).to({y:6},35,cjs.Ease.get(1)).to({y:0},15,cjs.Ease.get(1)).wait(1));

	// polzun.png
	this.instance_3 = new lib.Символ25();
	this.instance_3.parent = this;
	this.instance_3.setTransform(15.3,0);

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(6).to({y:-6},18,cjs.Ease.get(1)).to({y:6},35,cjs.Ease.get(1)).to({y:0},15,cjs.Ease.get(1)).wait(6));

	// polzun.png
	this.instance_4 = new lib.Символ26_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(0.3,0);

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({y:-6},18,cjs.Ease.get(1)).to({y:6},35,cjs.Ease.get(1)).to({y:0},15,cjs.Ease.get(1)).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5,-13.8,39.6,27.5);


(lib.Символ39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.instance = new lib.Символ8_1();
	this.instance.parent = this;
	this.instance.setTransform(81.7,-33.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой_1
	this.instance_1 = new lib.Символ38();
	this.instance_1.parent = this;
	this.instance_1.setTransform(96.5,-25.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ39, new cjs.Rectangle(68.5,-54.1,56,56.6), null);


(lib.Символ37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.Символ36_1();
	this.instance.parent = this;
	this.instance.setTransform(82.5,-18.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ37, new cjs.Rectangle(51.5,-41.5,67.6,41.4), null);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 1 - копия
	this.instance = new lib.Символ1копия();
	this.instance.parent = this;
	this.instance.setTransform(34.4,74.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ14, new cjs.Rectangle(-298.6,-84.4,666,317.4), null);


(lib.Символ12_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_6
	this.instance_1 = new lib.Символ45();
	this.instance_1.parent = this;
	this.instance_1.setTransform(79.7,-1,1.413,1.413,0,0,0,0.1,-0.1);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(125).to({_off:false},0).to({x:19.5,alpha:1},10,cjs.Ease.get(1)).wait(59).to({regX:0,regY:0,x:-31.7,y:-0.9,alpha:0},10,cjs.Ease.get(1)).wait(1));

	// nastr.png
	this.instance_2 = new lib.Символ39();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-44.5,-2.2);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(125).to({_off:false},0).to({x:-111.5,alpha:1},10,cjs.Ease.get(1)).wait(59).to({x:-168.4,alpha:0},10,cjs.Ease.get(1)).wait(1));

	// Слой_4
	this.instance_3 = new lib.Символ43();
	this.instance_3.parent = this;
	this.instance_3.setTransform(80.4,-0.3,1.413,1.413,0,0,0,0.1,-0.1);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(58).to({_off:false},0).to({regX:0,regY:0,x:23.1,y:-0.1,alpha:1},10,cjs.Ease.get(1)).wait(57).to({x:-31,alpha:0},10,cjs.Ease.get(1)).to({_off:true},1).wait(69));

	// coeff.png
	this.instance_4 = new lib.Символ35копия();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-47.8,-1.2);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(58).to({_off:false},0).to({x:-111.5,alpha:1},10,cjs.Ease.get(1)).wait(57).to({x:-171.8,alpha:0},10,cjs.Ease.get(1)).to({_off:true},1).wait(69));

	// Слой_3
	this.instance_5 = new lib.Символ42();
	this.instance_5.parent = this;
	this.instance_5.setTransform(11.1,-0.9,1.413,1.413);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(58).to({x:-58,alpha:0},10,cjs.Ease.get(1)).wait(126).to({x:63.9},0).to({x:11.1,alpha:1},10,cjs.Ease.get(1)).wait(1));

	// money.png
	this.instance_6 = new lib.Символ37();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-111.5,-2.3,1.161,1.161,0,0,0,0,6.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(58).to({x:-188.5,alpha:0},10,cjs.Ease.get(1)).wait(126).to({x:-52.7},0).to({x:-111.5,alpha:1},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-69.8,-58.4,110.4,104.6);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_99 = function() {
		this.gotoAndPlay(96);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(99).call(this.frame_99).wait(1));

	// logo
	this.instance = new lib.Символ15();
	this.instance.parent = this;
	this.instance.setTransform(211.5,-241.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-149.1},6).to({y:-159.1},3).wait(3).to({x:233.5},3).to({x:9.5},7).wait(78));

	// Слой_1
	this.instance_1 = new lib.Символ20();
	this.instance_1.parent = this;
	this.instance_1.setTransform(212.6,-337,0.553,0.553,0,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(16).to({y:-257},0).to({y:-137},7).to({y:-157},3).wait(3).to({x:202.6},3).to({x:488.7},6).wait(62));

	// Символ 23
	this.instance_2 = new lib.Символ23();
	this.instance_2.parent = this;
	this.instance_2.setTransform(427.6,-143.2);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(42).to({y:-138.2},0).to({y:-143.2,alpha:1},10).wait(48));

	// Символ 22
	this.instance_3 = new lib.Символ22();
	this.instance_3.parent = this;
	this.instance_3.setTransform(398.1,-160.1);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(40).to({y:-155.1},0).to({y:-160.1,alpha:1},10).wait(50));

	// Символ 21
	this.instance_4 = new lib.Символ21();
	this.instance_4.parent = this;
	this.instance_4.setTransform(366.6,-173.9);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(38).to({y:-168.9},0).to({y:-173.9,alpha:1},10).wait(52));

	// Слой_12
	this.instance_5 = new lib.Символ25_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(663.1,57.9);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(44).to({_off:false},0).to({x:388},7).to({x:408},3).wait(46));

	// Символ 16
	this.instance_6 = new lib.Символ16();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-383,33.1,1.213,1.213,0,0,0,-0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(54).to({x:22.1},15,cjs.Ease.get(1)).wait(31));

	// pl1.png
	this.instance_7 = new lib.pl1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-710,-118.6,0.894,0.894);

	this.instance_8 = new lib.Символ33_1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-311,-5);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7}]}).to({state:[{t:this.instance_8}]},64).to({state:[{t:this.instance_8}]},15).wait(21));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(64).to({_off:false},0).to({x:36},15,cjs.Ease.get(1)).wait(21));

	// pl4.png
	this.instance_9 = new lib.Символ31();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-393.5,10.4);
	new cjs.ButtonHelper(this.instance_9, 0, 1, 1);

	this.instance_10 = new lib.Символ32();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-279.3,47.7);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9}]}).to({state:[{t:this.instance_10}]},72).to({state:[{t:this.instance_10}]},15).wait(13));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(72).to({_off:false},0).to({x:152.5,y:42.2},15,cjs.Ease.get(1)).wait(13));

	// Слой_14
	this.instance_11 = new lib.Символ12_1();
	this.instance_11.parent = this;
	this.instance_11.setTransform(504.8,-50.9,1.571,1.571);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(88).to({_off:false},0).to({scaleX:1.19,scaleY:1.19,x:424.9,y:-50.8,alpha:1},7,cjs.Ease.get(1)).wait(5));

	// Слой_13
	this.instance_12 = new lib.Символ36();
	this.instance_12.parent = this;
	this.instance_12.setTransform(740.2,-53.9);
	this.instance_12.alpha = 0.43;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(82).to({_off:false},0).to({x:343.1},13).wait(5));

	// Слой_11
	this.instance_13 = new lib.Символ4();
	this.instance_13.parent = this;
	this.instance_13.setTransform(237.5,-126.8);
	this.instance_13.alpha = 0.66;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(100));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-710,-366.3,1292,550.9);


// stage content:
(lib.fon_hoc640305 = function(mode,startPosition,loop) {
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

	// Слой_1
	this.instance = new lib.Символ18();
	this.instance.parent = this;
	this.instance.setTransform(109.1,203.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой_2
	this.instance_1 = new lib.Символ14();
	this.instance_1.parent = this;
	this.instance_1.setTransform(286.7,79.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-281,-10.2,1292,550.9);
// library properties:
lib.properties = {
	id: '6201CBFC0DCF496BB579B590BAE305CC',
	width: 640,
	height: 305,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/arr.png?1510844025139", id:"arr"},
		{src:"images/bg.jpg?1510844025139", id:"bg"},
		{src:"images/btn.png?1510844025139", id:"btn"},
		{src:"images/btn_h.png?1510844025139", id:"btn_h"},
		{src:"images/coeff.png?1510844025139", id:"coeff"},
		{src:"images/khl.png?1510844025139", id:"khl"},
		{src:"images/kl.png?1510844025139", id:"kl"},
		{src:"images/logo.png?1510844025139", id:"logo"},
		{src:"images/money.png?1510844025139", id:"money"},
		{src:"images/nastr.png?1510844025139", id:"nastr"},
		{src:"images/pl1.png?1510844025139", id:"pl1"},
		{src:"images/pl3.png?1510844025139", id:"pl3"},
		{src:"images/pl4.png?1510844025139", id:"pl4"},
		{src:"images/polzun.png?1510844025139", id:"polzun"}
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
an.compositions['6201CBFC0DCF496BB579B590BAE305CC'] = {
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