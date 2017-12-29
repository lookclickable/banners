(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"fb_akc2_300_600_atlas_", frames: [[0,0,800,800],[261,1238,102,101],[0,802,369,266],[371,802,261,64],[371,918,112,103],[371,868,307,48],[131,1070,128,256],[0,1070,129,256],[261,1070,166,166]]}
];


// symbols:



(lib.back = function() {
	this.spriteSheet = ss["fb_akc2_300_600_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Ball = function() {
	this.spriteSheet = ss["fb_akc2_300_600_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.elka = function() {
	this.spriteSheet = ss["fb_akc2_300_600_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.FB_logo = function() {
	this.spriteSheet = ss["fb_akc2_300_600_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hatty = function() {
	this.spriteSheet = ss["fb_akc2_300_600_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.light = function() {
	this.spriteSheet = ss["fb_akc2_300_600_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.phon1 = function() {
	this.spriteSheet = ss["fb_akc2_300_600_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.phon2 = function() {
	this.spriteSheet = ss["fb_akc2_300_600_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.rou = function() {
	this.spriteSheet = ss["fb_akc2_300_600_atlas_"];
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


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rou();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.067,0.067);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ14, new cjs.Rectangle(0,0,11.1,11.1), null);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rou();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ13, new cjs.Rectangle(0,0,166,166), null);


(lib.Symbol22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AA/CCIAAioIiACoIgXAAIAAjTIAaAAIAACpICAipIAWAAIAADTgAgTheQgKgDgHgFQgHgFgFgHQgEgHgCgIIAZAAQADAJAIAFQAIAFAMAAQAMAAAJgFQAIgFACgJIAZAAQgCAIgFAHQgEAHgHAFQgIAFgJADQgKADgLAAQgLAAgKgDg");
	this.shape.setTransform(242.8,21.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag8BqIAAjTIB2AAIAAAYIhdAAIAABFIBUAAIAAAXIhUAAIAABGIBgAAIAAAZg");
	this.shape_1.setTransform(222.7,24.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhZBqIAAgaQAHABAGgEQAIgEAGgNQAFgJAJgiQAEgTAFg9IAEgqIB9AAIAADTIgZAAIAAi7IhMAAIgEAoQgHA7gFAUQgEAQgEALQgEALgFAIQgFAIgFAEQgFAFgGACQgHADgJAAIgIAAg");
	this.shape_2.setTransform(201.2,24.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhBBpIAAjSIB3AAIAAAXIhdAAIAAA9QAPgBARAAQARAAAOAEQAOAEAJAJQAJAHAGALQAEAMAAAOQAAARgFAMQgGANgLAJQgKAIgPAEQgPAEgTAAgAgnADIAABOIAdACQAMAAAJgEQAKgCAGgFQAHgGADgIQAEgHAAgKQgBgJgDgIQgDgGgGgGQgGgFgKgDQgJgDgLAAg");
	this.shape_3.setTransform(182.8,24.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgrBoQgHgCgEgDIAJgWQAIAFAIAAQAJAAAHgGQAFgFAFgKIADgIIhfieIAdAAIBOCEIA6iEIAaAAIhJCiIgLAWQgGAJgGAGQgFAGgHADQgIADgJAAQgHAAgHgCg");
	this.shape_4.setTransform(162.9,24.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhCBqIAAjSIA4gBQAOAAAWAFQAPAGAKAJQAIAJAEAMQAEALAAANQAAAOgFAMQgEAMgKAIQgKAJgNAGQgVAFgMAAIgggBIAABRgAgohRIAABSIAfABQAKAAAKgCQAJgDAGgGQAHgFADgIQAEgIAAgKQAAgKgDgHQgDgHgGgGQgGgFgJgDQgKgDgLAAg");
	this.shape_5.setTransform(144.6,24.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgPBrQgIgCgHgFQgHgDgFgGQgGgGgEgGQgGgKgIgZQgDgNgBgfQAAgXAEgVQADgMAKgWQAFgHAFgFQAGgGAGgDQAHgEAIgDQAIgCAIAAQAJAAAIACQAIADAHAEQAGADAGAGQAFAFAFAHQAKAWADAMQAEAVAAAXQAAAYgEAUQgHAZgGAKQgEAGgGAGQgFAGgHADQgHAFgHACQgIABgJAAQgIAAgIgBgAgOhGQgHAFgEAJQgEAJgCAOQgCAOAAATQAAAUACAOQADAOAEAJQAEAKAHAEQAGAFAIAAQAJAAAGgFQAHgEADgKQAEgIACgPQACgOAAgUQAAgTgCgOQgCgPgEgIQgEgKgGgFQgHgEgJAAQgIAAgGAFg");
	this.shape_6.setTransform(119.6,24.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgPBrQgIgCgHgFQgHgDgFgGQgGgGgEgGQgGgKgIgZQgDgNgBgfQAAgXAEgVQADgMAKgWQAFgHAFgFQAGgGAGgDQAHgEAIgDQAIgCAIAAQAJAAAIACQAIADAHAEQAGADAGAGQAFAFAFAHQAKAWADAMQAEAVAAAXQAAAYgEAUQgHAZgGAKQgEAGgGAGQgFAGgHADQgHAFgHACQgIABgJAAQgIAAgIgBgAgOhGQgHAFgEAJQgEAJgCAOQgCAOAAATQAAAUACAOQADAOAEAJQAEAKAHAEQAGAFAIAAQAJAAAGgFQAHgEADgKQAEgIACgPQACgOAAgUQAAgTgCgOQgCgPgEgIQgEgKgGgFQgHgEgJAAQgIAAgGAFg");
	this.shape_7.setTransform(102.8,24.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgPBrQgIgCgHgFQgHgDgFgGQgGgGgEgGQgGgKgIgZQgDgNgBgfQAAgXAEgVQADgMAKgWQAFgHAFgFQAGgGAGgDQAHgEAIgDQAIgCAIAAQAJAAAIACQAIADAHAEQAGADAGAGQAFAFAFAHQAKAWADAMQAEAVAAAXQAAAYgEAUQgHAZgGAKQgEAGgGAGQgFAGgHADQgHAFgHACQgIABgJAAQgIAAgIgBgAgOhGQgHAFgEAJQgEAJgCAOQgCAOAAATQAAAUACAOQADAOAEAJQAEAKAHAEQAGAFAIAAQAJAAAGgFQAHgEADgKQAEgIACgPQACgOAAgUQAAgTgCgOQgCgPgEgIQgEgKgGgFQgHgEgJAAQgIAAgGAFg");
	this.shape_8.setTransform(86.1,24.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgQAQQgGgHAAgJQAAgJAGgGQAHgHAKAAQAJAAAHAHQAGAHAAAIQAAAJgGAHQgGAHgKAAQgKAAgHgHg");
	this.shape_9.setTransform(74.1,32.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAFBqIAAiiIgZAUIgTgdIA2goIAZAAIAADTg");
	this.shape_10.setTransform(63.3,24.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgVBrQgLgCgKgEQgKgEgIgGQgJgFgHgHQgHgIgGgIQgGgJgEgKQgEgKgCgLQgCgLAAgMQAAgLACgKQACgLAEgKQAEgKAFgJQAGgIAHgIQAIgHAIgGQAJgGAKgDQAKgFAKgCQALgCALAAQAMAAAKACQALACAKAEQAKAEAIAGQAJAFAHAHQAIAHAFAJQAGAIAEAKQAEALACAKQACAMAAALQAAALgCAMQgCAKgEALQgEAKgGAIQgFAJgIAHQgHAHgJAGQgIAGgKAEQgKAEgLACQgKACgMAAQgKAAgLgCgAgQhSIgPAEQgPAHgLALQgLAMgGAPQgGAVAAAMQACAXAEALQAGAPAMAMQALALAOAHIAQAEIAPACQAMAAAVgGQAPgHALgLQAKgMAGgPQAGgQAAgSQAAgMgGgVQgGgPgLgMQgMgLgOgHQgPgGgRAAg");
	this.shape_11.setTransform(39.6,24.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AA5BqIAAi7IhyAAIAAC7IgZAAIAAjTIClAAIAADTg");
	this.shape_12.setTransform(15.8,24.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol22, new cjs.Rectangle(0,0,259,52.8), null);


(lib.Symbol21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgqBFIAAiJIAlAAQALAAAJADQAIACAGAFQAFAEACAHQACAFAAAIQAAAGgBAFIgFAJIgIAHQgEADgFACIAAAAQAGABAGABQAFADADAEQAEAFACAFQACAGAAAGQAAALgDAHQgEAHgHAGQgGAFgKACQgJACgJAAgAgaA1IAWABQAGgBAGgBQAGgCAEgDQAEgDACgFQADgEAAgHQAAgFgCgEQgCgFgFgCQgEgDgFgBQgGgCgGAAIgXAAgAgag0IAAAsIAWAAQAFAAAFgBQAEgBAEgEQAEgCACgEQACgFAAgGQAAgFgCgEQgCgEgDgCQgEgEgFgBQgFgBgGgBg");
	this.shape.setTransform(250.6,15.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgNBFIgOgEQgGgCgGgEIgJgIIgJgLQgEgFgDgHIgDgNIgCgPQAAgGACgIIADgMIAGgMIAJgLQAFgFAFgEIAMgGIAOgEQAGgBAHgBQAIABAGABQAIABAGADIAMAGIAKAIIAIAKIAHANIADANIACAOQAAAHgCAIIgDANIgHAMIgIALIgKAIIgMAGIgOAEQgGABgIABQgHgBgGgBgAgKg1IgKADQgJAFgHAHQgIAHgDAKQgEAOAAAHQABAPADAGQAEAKAHAIQAHAHAJAFIAKADIAKABQAIAAAOgEQAJgFAHgHQAHgIAEgKQADgJAAgMQAAgHgDgOQgEgKgIgHQgHgHgJgFQgKgDgLAAg");
	this.shape_1.setTransform(236.3,15.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgPBFQgHgCgGgDIgKgHQgEgEgDgEIAJgMQAFAGAMAHQAJAFAJAAQAGAAAFgCQAGgCAEgDQAEgDADgFQACgFAAgHQAAgFgCgEQgCgDgDgEQgEgDgEgBQgFgBgHAAIgPAAIAAgPIAOAAQAEgBAEgBQAEgCAEgDIAFgHQACgEAAgGQAAgFgCgEQgCgFgDgCQgEgDgEgCIgJAAQgKAAgIADQgHAEgGAIIgKgMQADgEAFgEQAFgEAFgCIAMgEIAMgCQAIABAIACQAHACAFAFQAGAFACAGQADAIAAAIIgBAJIgEAIIgGAIQgEAEgEADIAAAAQAGABAFACQAEADADAEQADAEACAGIACALQAAAJgEAIQgEAHgGAGQgHAFgIACQgJAEgIAAQgIAAgHgCg");
	this.shape_2.setTransform(222.4,15.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AApBFIAAhtIhTBtIgOAAIAAiJIAQAAIAABtIBThtIAOAAIAACJg");
	this.shape_3.setTransform(209.3,15.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgqBFIAAiIIAkgBQAIAAAPAEQAJADAHAHQAFAFADAIQACAHAAAJQAAAIgDAIQgDAIgGAFQgGAGgJADQgOAEgHAAIgVgBIAAA1gAgaAAIAUABQAHAAAGgBQAGgCAEgDQAEgEACgFQADgFAAgGQAAgHgCgEQgCgFgEgEQgEgDgGgCQgGgCgHAAIgVAAg");
	this.shape_4.setTransform(196.2,15.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAlBFIAAh5IhJAAIAAB5IgRAAIAAiJIBrAAIAACJg");
	this.shape_5.setTransform(182.4,15.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AApBFIgpg6IgpA6IgTAAIAyhFIgwhEIATAAIAoA3IAmg3IAUAAIgxBEIAzBFg");
	this.shape_6.setTransform(164.1,15.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag9BEIAAiIIAQAAIAAAzIATgBQAMAAAKADQAIADAHAGQAGAFADAHQADAIAAAJQAAALgDAJQgEAIgHAGQgHAGgJADQgKADgNAAgAgtgBIAAA1IARABQAIAAAHgCQAGgCAFgDQADgEACgFQADgGAAgHQAAgHgDgFQgCgFgDgDQgEgEgHAAQgGgCgJAAgAAtBEIAAiIIARAAIAACIg");
	this.shape_7.setTransform(149.4,15.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAmBFIAAg+IhLAAIAAA+IgQAAIAAiJIAQAAIAAA8IBLAAIAAg8IAQAAIAACJg");
	this.shape_8.setTransform(133.7,15.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("ABEBFIg5hHIA3hCIATAAIg3BCIA6BHgAgIBFIAAiJIAQAAIAACJgAhXBFIA6hHIg3hCIATAAIA2BCIg4BHg");
	this.shape_9.setTransform(117.1,15.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgnBFIAAiJIBNAAIAAAQIg8AAIAAAsIA2AAIAAAPIg2AAIAAAuIA+AAIAAAQg");
	this.shape_10.setTransform(102.7,15.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAmBFIAAg+IhLAAIAAA+IgQAAIAAiJIAQAAIAAA8IBLAAIAAg8IAQAAIAACJg");
	this.shape_11.setTransform(89.2,15.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgmBFIAAiJIBMAAIAAAQIg8AAIAAAsIA2AAIAAAPIg2AAIAAAuIA9AAIAAAQg");
	this.shape_12.setTransform(76.6,15.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AA1BRIAAgZIhpAAIAAAZIgQAAIAAgpIAPAAQAIgNAEgPIAGgbQADgSABgUIACgbIBPAAIAAB4IATAAIAAApgAgPgoIgEAgQgCAMgDALQgEANgHAMIBFAAIAAhpIgvAAg");
	this.shape_13.setTransform(63.1,17);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgKBFIgKgEIgIgGIgGgIQgEgGgFgQQgCgIgBgVQAAgJADgTQABgIAHgOIAHgIIAIgGIAKgEIAKgBIALABIAKAEIAIAGIAHAIQAGAOACAIQADATAAAJQgBAVgCAIQgEAQgEAGIgHAIIgIAGIgJAEIgMABIgKgBgAgGgoQgDADgCAFQgCAFgBAIIgBATQAAALABAJQABAIACAGQADAEADACQADADACAAQAFAAADgDQACgCACgEQACgGABgIIABgUIgBgTQgBgIgCgGQgCgEgDgDQgDgCgEAAQgDAAgDACg");
	this.shape_14.setTransform(46.3,15.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgKBFIgKgEIgIgGIgGgIQgEgGgFgQQgCgIgBgVQAAgJADgTQABgIAHgOIAHgIIAIgGIAKgEIAKgBIALABIAKAEIAIAGIAHAIQAGAOACAIQADATAAAJQgBAVgCAIQgEAQgEAGIgHAIIgIAGIgJAEIgMABIgKgBgAgGgoQgDADgCAFQgCAFgBAIIgBATQAAALABAJQABAIACAGQADAEADACQADADACAAQAFAAADgDQACgCACgEQACgGABgIIABgUIgBgTQgBgIgCgGQgCgEgDgDQgDgCgEAAQgDAAgDACg");
	this.shape_15.setTransform(35.6,15.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAABFIAAheIgNAJIgPgZIAkgbIAVAAIAACJg");
	this.shape_16.setTransform(25.7,15.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AApBFIAAhtIhTBtIgOAAIAAiJIAQAAIAABtIBThtIAOAAIAACJg");
	this.shape_17.setTransform(10.4,15.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol21, new cjs.Rectangle(0,0,259,34.1), null);


(lib.Symbol19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABLCwIhLh2IhJB2IhfAAIB1iyIhvitIBeAAIBGBxIBFhxIBeAAIhwCtIB0Cyg");
	this.shape.setTransform(245.1,40.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgrBuQgXgIgPgQQgRgQgIgVQgJgXAAgaQAAgYAJgVQAIgWARgQQAQgRAWgIQAXgKAbAAQAVAAAUAIQAUAHAPAPQAQAOAIATQAJAUAAAXQAAAWgFAQIiUAAQAFAPAOAIQAOAHATABQAZAAAigRIAVA1QgSANgXAHQgXAGgYAAQgbAAgXgJgAApgYQgBgMgIgJQgLgKgRAAQgRAAgLAIQgKAHgFAQIBQAAIAAAAg");
	this.shape_1.setTransform(205.7,46.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAkBzIAAh4QAAgUgKgJQgKgKgQABQgLAAgIADQgIAEgIAIIAACPIhMAAIAAjhIBMAAIAAARQAKgJANgGQAPgGARAAQAUAAAQAFQARAFAMALQAMAMAHASQAIASgBAaIAACGg");
	this.shape_2.setTransform(179.2,46.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag0BuQgWgJgQgQQgRgQgJgWQgJgWAAgZQAAgYAJgWQAJgWARgQQAQgQAWgJQAYgJAcAAQAdAAAXAJQAXAJARAQQAQAQAJAWQAIAWABAYQgBAZgIAWQgJAWgQAQQgRAQgXAJQgXAJgdAAQgcAAgYgJgAgegjQgHAHgEAIQgDAKAAAKQAAAWANANQAMAOATAAQAUAAANgNQAFgGAEgKQADgJAAgLQAAgUgNgOQgNgOgTAAQgSAAgMANg");
	this.shape_3.setTransform(151.3,46.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAkCwIAAh7QAAgRgKgKQgKgKgQAAQgJAAgJADQgJAEgIAIIAACRIhMAAIAAlfIBMAAIAACNQAKgJAOgFQAOgFARAAQAUAAAQAFQARAGAMALQAMAMAHASQAIASAAAaIAACFg");
	this.shape_4.setTransform(123.9,40.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ah8CwIAAleIBsgBQAaAAAoAKQASAGAaATQAQAQAIAWQAHATAAAYQAAAYgJAVQgJAVgRAQQgRARgXAJQgZAJgdAAQgbAAgMgBIAAB3gAgrhjIAABQIAkADQATAAAMgJQAHgFAEgIQAFgJAAgMQAAgMgEgIQgDgHgHgFQgMgJgWAAg");
	this.shape_5.setTransform(95.5,40.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AglCtIAAjhIBLAAIAADhgAgehgQgGgFgDgJQgEgJAAgKQAAgUANgMQANgLATAAQARAAAMALQANAMAAAUQAAAVgNAMQgMAMgRAAQgTAAgNgMg");
	this.shape_6.setTransform(71.4,40.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgaCwQgOgDgLgGQgMgGgKgJQgJgJgIgMQgKgQgNgpQgFgWgDg0QABgaAHgvQAFgWARgjQAIgMAKgJQAKgJALgGQALgGANgDQAOgEAOAAQAPAAAOAEQANADAMAGQALAGAKAJQAJAJAIAMQARAjAFAWQAHAvAAAaQgCA0gFAWQgMApgKAQQgHAMgKAJQgKAJgKAGQgMAGgNADQgOAEgPAAQgOAAgNgEgAgRhnQgIAGgFANQgGANgCAVIgCAyQAAAeADAVQADAVAFANQAGANAIAGQAHAGAJAAQALAAAIgGQAHgGAFgMQAFgNACgVIACg0IgCgzQgDgVgFgNQgFgMgHgGQgIgFgLAAQgKAAgHAFg");
	this.shape_7.setTransform(40.6,40.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAACwIAAj0IgjAZIgng+IBfhGIA2AAIAAFfg");
	this.shape_8.setTransform(15,40.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol19, new cjs.Rectangle(0,0,269.1,87.4), null);


(lib.Symbol18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhaCVIAAkpICwAAIAABAIhrAAIAAA0IBfAAIAAA/IhfAAIAAA2IBvAAIAABAg");
	this.shape.setTransform(254.2,34.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AghCVIAAjpIhZAAIAAhAID1AAIAABAIhZAAIAADpg");
	this.shape_1.setTransform(228.5,34.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AA+C7IAAi5IiDC5Ig8AAIAAkpIBEAAIAAC5ICDi5IA8AAIAAEpgAgeh6QgRgFgLgKQgMgIgGgNQgGgMAAgQIBAAAQAAAMAGAFQAGAFANgBQANAAAGgDQAGgFAAgNIBAAAQAAAQgGAMQgHANgLAIQgMAKgQAFQgRAEgUAAQgUAAgRgEg");
	this.shape_2.setTransform(199,30.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ABSCVIgZg/Ih1AAIgZA/IhEAAIB7kpIA9AAIB7EpgAAfAXIgghUIghBUIBBAAg");
	this.shape_3.setTransform(167,34.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhpCVIAAkoIBbgBQAWAAAiAIQAQAFAVARQAOANAHATQAGAQAAAVQAAAUgIASQgHARgPANQgOAPgUAHQgVAIgYAAIgigBIAABlgAglhTIAABEIAfACQAQAAAKgIQAGgEAEgHQADgIAAgKQAAgJgDgHQgCgHgGgEQgKgHgTAAg");
	this.shape_4.setTransform(139.3,34);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhUCVIAAkpICpAAIAABAIhlAAIAADpg");
	this.shape_5.setTransform(115.6,34.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AA+CVIAAi4IiDC4Ig8AAIAAkpIBEAAIAAC4ICDi4IA8AAIAAEpg");
	this.shape_6.setTransform(86.5,34.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AiVCUIAAkoIBEAAIAABdIAbgCQAbAAAUAHQAUAHANAOQAOANAGARQAHASAAAXQAAAYgIAUQgIAUgQAOQgQAOgVAHQghAIgUAAgAhRAIIAABMIAUABQALAAAIgCQAIgDAFgFQAFgFADgIQADgHAAgLQAAgJgDgIQgDgHgGgFQgLgJgTAAgABSCUIAAkoIBEAAIAAEog");
	this.shape_7.setTransform(50.9,34.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhiCUIAAknQAygCAoAAQAZAAAUAFQASAGAMAKQAMAKAGAOQAGANAAAQQAAAXgJAQQgIAQgRALIAAABQAIADAIAFQAIAFAFAIQAGAJAEALQADAMAAAOQAAAXgIARQgIARgQAMQgPALgVAGQgUAFgYAAQg7AAgagCgAgeBUQAJADAOAAQASAAAKgJQAKgHAAgQQAAgNgJgHQgJgHgRAAIgaAAgAgehUIAAA2IAXAAQANAAAIgGQAJgIAAgPQAAgNgKgHQgJgHgNAAg");
	this.shape_8.setTransform(19.7,34.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol18, new cjs.Rectangle(0,0,271.6,73.9), null);


(lib.Symbol17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D62227").s().p("AAnB1IAAh0IhSB0IglAAIAAi6IAqAAIAAB0IBSh0IAlAAIAAC6gAgThNQgKgCgHgHQgIgFgDgIQgEgHAAgKIAoAAQAAAHAEADQADADAIAAQAJAAADgCQAEgDAAgIIAoAAQAAAJgEAJQgEAHgHAFQgIAHgKACQgKADgNAAQgMAAgLgDg");
	this.shape.setTransform(207.1,31.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D62227").s().p("Ag3BdIAAi5IBtAAIAAAoIhDAAIAAAhIA7AAIAAAnIg7AAIAAAhIBFAAIAAAog");
	this.shape_1.setTransform(189.3,34.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D62227").s().p("AhSBcIABgqQAHABAEgCQAHgDAEgKQAGgLAEgVQACgOAFgtIACgmIB7AAIAAC5IgrAAIAAiRIgoAAIgEAjQgGAsgEAPIgIAVQgEAIgFAGQgEAGgGAFQgFADgHACIgNACg");
	this.shape_2.setTransform(170.7,34.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D62227").s().p("Ag9BcIAAi5IBvAAIAAAoIhFAAIAAAdQAIgBANAAQANAAALAEQALAEAIAIQAIAHAFAKQAEAKAAANQAAAPgFALQgEAMgKAJQgJAIgNAEQgOAEgQAAIg0gCgAgTAQIAAAlIAQABQAMAAAFgGQAFgFAAgIQAAgJgEgGQgGgGgKAAg");
	this.shape_3.setTransform(154,34.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D62227").s().p("AgqBbQgIgDgEgDIAPgkQAHAEAGAAQAGAAADgBQADgCACgEIADgGIhRiEIAxAAIAzBbIAmhbIArAAIg/CNQgFALgFAIQgGAIgGAGQgGAGgIACQgIADgJAAQgIAAgJgCg");
	this.shape_4.setTransform(136.1,34.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D62227").s().p("AhBBdIAAi5IA5gBQANAAAWAGQAKADANALQAIAHAFAMQADAKAAANQAAANgEALQgFAKgJAJQgJAJgMAFQgOAFgOAAIgWgBIAAA/gAgXg0IAAArIAUABQAJAAAGgFQAFgDACgDQACgGAAgGQAAgGgCgEQgBgEgFgDQgFgEgMAAg");
	this.shape_5.setTransform(119.1,34.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D62227").s().p("AgVCJQgKgCgJgFQgJgFgHgHQgIgHgFgJQgIgMgKggQgFgRgCgpQAAgUAHglQADgRAOgbQAGgJAHgHQAIgHAIgFQAKgFAKgCQAKgDALAAQAMAAAKADQALACAIAFQAKAFAHAHQAHAHAHAJQANAbAEARQAFAlAAAUQgBApgEARQgKAggHAMQgGAJgIAHQgGAHgKAFQgIAFgLACQgKADgMAAQgLAAgLgDgAgNhQQgGAFgEAKQgEAKgCAQIgCAnQAAAXACARQACAQAFAKQAEAKAGAFQAHAEAGAAQAIAAAGgEQAGgEAEgKQAEgKABgRIACgoIgCgnQgBgRgFgKQgDgJgHgFQgFgEgJAAQgHAAgGAEg");
	this.shape_6.setTransform(94.2,29.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D62227").s().p("AgUCJQgKgCgKgFQgJgFgHgHQgHgHgHgJQgHgMgLggQgDgRgCgpQAAgUAFglQAFgRANgbQAGgJAIgHQAHgHAIgFQAJgFALgCQALgDAKAAQAMAAALADQAKACAJAFQAIAFAIAHQAIAHAFAJQAOAbAEARQAGAlAAAUQgCApgEARQgJAggJAMQgFAJgHAHQgIAHgIAFQgKAFgJACQgLADgMAAQgLAAgKgDgAgNhQQgGAFgEAKQgEAKgCAQIgCAnQAAAXADARQABAQAGAKQADAKAHAFQAFAEAHAAQAIAAAGgEQAGgEAEgKQAEgKABgRIACgoIgCgnQgCgRgDgKQgEgJgGgFQgGgEgJAAQgHAAgGAEg");
	this.shape_7.setTransform(73,29.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D62227").s().p("AAACJIAAi9IgbATIgegxIBJg2IAqAAIAAERg");
	this.shape_8.setTransform(53.1,29.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#D62227").s().p("AgUBdIAAiRIg4AAIAAgoICZAAIAAAoIg4AAIAACRg");
	this.shape_9.setTransform(33.5,34.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#D62227").s().p("AgUBfIgSgFIgRgIQgIgFgHgGQgHgHgFgHQgFgIgEgJQgDgJgCgKQgCgKAAgLQAAgJACgKQACgJADgJQAEgIAFgIQAFgIAGgGQAHgHAIgFQAHgFAJgEQAKgDAKgCQAKgCAKAAQAKAAAKABIATAFQAJAEAIAFQAIAEAHAHQAGAGAGAIQAFAHADAJQAEAJACAKQACAKAAAKQAAALgCAJQgCAKgEAJQgDAJgFAHIgMAOQgHAHgIAFQgIAFgJADQgJAEgKACQgKABgKAAQgKAAgKgBgAgUgzQgKAEgIAHQgHAIgEAKQgEALAAALQAAAMAEAKQAEALAIAHQAHAIAKAEQAKAEAKAAQANAAAKgEQAKgEAHgIQAHgHADgLQAEgKAAgMQAAgLgFgLQgDgKgIgIQgHgHgKgEQgKgEgLAAQgLAAgJAEg");
	this.shape_10.setTransform(14.6,34.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol17, new cjs.Rectangle(0,0,221.3,64.7), null);


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhTCzQgQgFgIgGIAehHQANAIANAAQAKAAAHgEQAGgDAEgHIAEgLIiekHIBfAAIBnC0IBKi0IBVAAIh7EYQgKAWgKAPQgMAQgMAMQgNAKgPAHQgQAFgTAAQgQAAgQgFg");
	this.shape.setTransform(198.1,42.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AA0C4Ih9ivIAACvIhUAAIAAlvIBUAAIAACgIB3igIBlAAIiKCqICVDFg");
	this.shape_1.setTransform(164,42.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ah6C3IAAlsQA+gEAyAAQAfAAAYAHQAXAHAPANQAPAMAHARQAHAQAAATQAAAdgKAUQgLAUgVANIAAACQALADAJAHQAKAGAHALQAHAKAEAOQAFAPAAARQAAAcgLAWQgKAVgTAOQgTAOgZAHQgaAHgdAAQhJAAghgDgAglBoQALADARABQAXAAAMgLQANgKAAgTQAAgQgMgJQgMgIgUAAIggAAgAglhoIAABDIAcAAQAQAAAKgIQALgJAAgTQAAgPgMgJQgMgJgPAAg");
	this.shape_2.setTransform(128,42.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ABlC4IgfhNIiRAAIgeBNIhUAAICZlvIBJAAICaFvgAAmAcIgnhnIgqBnIBRAAg");
	this.shape_3.setTransform(92.1,42.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgpC4IAAkgIhuAAIAAhPIEwAAIAABPIhvAAIAAEgg");
	this.shape_4.setTransform(57.3,42.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgDC7QgUgEgSgGQgRgHgQgKQgPgKgNgMQgMgMgKgQQgKgPgHgRQgHgSgEgTQgDgUAAgVQAAgTADgTQADgSAGgRQAGgRAJgQQAJgPANgNQAMgNAOgKQAQgKASgHQASgIAVgDQAUgEAXAAQAZAAApALQAdAKASARIgmA/QgSgLgOgFQgTgGgYAAQgVAAgSAHQgTAHgOAOQgOAPgIAUQgIAVAAAaQAAAYAIAVQAIAUAPAPQAPAPAUAIQAUAIAYAAQAVAAAUgGQAVgHASgOIAgBAQgIAJgNAIQgMAHgQAGQgtAMgZAAQgWAAgSgDg");
	this.shape_5.setTransform(24.9,42.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol16, new cjs.Rectangle(0,0,223.8,91.4), null);


(lib.Symbol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhTCKIAAkTICjAAIAAA7IhkAAIAAAxIBYAAIAAA6IhYAAIAAAyIBnAAIAAA7g");
	this.shape.setTransform(207.7,31.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgfCKIAAjYIhSAAIAAg7IDjAAIAAA7IhTAAIAADYg");
	this.shape_1.setTransform(183.9,31.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AA5CtIAAirIh5CrIg3AAIAAkSIA/AAIAACqIB5iqIA3AAIAAESgAgchyQgPgEgLgIQgLgJgFgLQgFgMgBgOIA8AAQgBALAGAEQAFAFAMAAQANAAAEgEQAHgEAAgMIA6AAQABAOgGAMQgGALgKAJQgMAIgPAEQgPAFgTAAQgSAAgQgFg");
	this.shape_2.setTransform(156.6,28);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ABLCKIgXg6IhrAAIgXA6IhAAAIBzkTIA3AAIBzETgAAdAVIgehNIgfBNIA9AAg");
	this.shape_3.setTransform(126.8,31.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ah5CJIABg/QAJACAIgEQAJgEAHgOQAIgRAGgfQADgVAHhEIAEg3IC2AAIAAETIg/AAIAAjYIg8AAIgGA0QgJBBgHAXQgFARgGANQgGANgHAJQgHAJgIAGQgIAFgKADQgJACgLABg");
	this.shape_4.setTransform(96.9,31.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhTCKIAAkTICiAAIAAA7IhjAAIAAAxIBYAAIAAA6IhYAAIAAAyIBoAAIAAA7g");
	this.shape_5.setTransform(73.2,31.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("ABVCiIAAgwIiqAAIAAAwIg6AAIAAhrIAdAAQAFgGAFgMQAHgPAFgTQAHgWAFgZQAEgeABgfIADg3ICzAAIAADXIAmAAIAABrgAgPg3QgIAxgFASQgJAhgHAKIBYAAIAAidIg3AAg");
	this.shape_6.setTransform(46.1,34);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgDCLQgOgCgNgFQgNgFgMgHQgLgIgKgJQgJgJgIgLQgHgMgFgNQgGgNgCgPQgDgOAAgQQAAgOACgOQADgOAEgNQAEgMAIgMQAGgLAJgKQAKgKALgIQALgIANgFQAOgFAQgDQAOgDARABQATgBAgAJQAVAIANAMIgcAvQgOgIgKgDQgOgFgTgBQgQABgNAFQgNAFgLALQgKAKgGAQQgGAQAAATQAAASAGAPQAGAPAKAMQAMALAPAGQAPAGASAAQAPAAAPgFQARgFANgKIAYAwQgHAGgJAGQgKAGgLAEQgiAJgTAAQgQAAgOgDg");
	this.shape_7.setTransform(18.8,31.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol15, new cjs.Rectangle(0,0,223.8,68.5), null);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.phon1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol12, new cjs.Rectangle(0,0,128,256), null);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.phon2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol11, new cjs.Rectangle(0,0,129,256), null);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Ball();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol10, new cjs.Rectangle(0,0,102,101), null);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.hatty();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(0,0,112,103), null);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D31E21").s().p("A1yFmIAArLMArlAAAIAALLg");
	this.shape.setTransform(139.5,35.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(0,0,279.1,71.6), null);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgrBJIAAiRIBVAAIAAAgIg0AAIAAAZIAuAAIAAAeIguAAIAAAbIA2AAIAAAfg");
	this.shape.setTransform(198.7,16.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAeBJIAAhaIg/BaIgdAAIAAiRIAhAAIAABaIBAhaIAdAAIAACRg");
	this.shape_1.setTransform(184.3,16.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgQBJIAAhxIgrAAIAAggIB3AAIAAAgIgrAAIAABxg");
	this.shape_2.setTransform(169.8,16.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgBBKQgIgBgHgDQgHgDgGgEQgGgDgFgFIgJgLQgEgGgCgHQgDgHgCgIIgBgQIABgOIAEgOIAGgNIAIgLIALgJIANgHQAHgDAIgCQAIgBAJAAQAKAAAQAEQAMAEAHAHIgPAZIgNgGQgIgDgJAAQgIAAgHADQgHADgGAFQgFAGgDAIQgEAJAAAJQAAAKAEAIQADAIAGAGQAFAGAIADQAIADAJAAQAIAAAIgCQAJgDAHgFIANAYQgEAEgFADIgLAGQgSAEgKAAQgIAAgHgBg");
	this.shape_3.setTransform(157,16.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAoBJIgMgfIg5AAIgMAfIghAAIA8iRIAdAAIA8CRgAAPALIgPgoIgQAoIAfAAg");
	this.shape_4.setTransform(142.5,16.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAWBJIAAg4QgGAEgHACQgIADgKAAQgIAAgHgDQgJgCgGgFQgHgGgDgJIgEgJIgBgMIAAg0IAiAAIAAAqQAAAIABAFQACAFADADQADAEALAAQAFAAAGgCQAFgBAGgEIAAg8IAgAAIAACRg");
	this.shape_5.setTransform(127.7,16.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AggBHQgGgCgEgDIAMgcQAFAEAFAAQAEAAADgCQADgBABgDIACgFIg/hnIAmAAIAoBHIAdhHIAiAAIgxBuQgEAJgEAGQgFAHgEAEQgFAEgGADQgGACgIAAQgGAAgGgCg");
	this.shape_6.setTransform(113.5,16.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgyBJIAAiRIAiAAIAAAtIANAAQAMAAALADQAKADAHAHQAHAHADAIQAEAIAAAMQAAALgEAKQgEAJgIAIQgMAHgIADQgPAEgLAAgAgQAEIAAAlIAJABQAGAAADgCQAEgBADgCQADgCACgEQABgEAAgFQAAgFgBgEIgFgGQgGgEgJAAg");
	this.shape_7.setTransform(96.2,16.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgQBJIAAhxIgrAAIAAggIB3AAIAAAgIgrAAIAABxg");
	this.shape_8.setTransform(83.1,16.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAXBJIAAgvIgOAAIgcAvIglAAIAig2IgIgHIgHgIQgEgEgBgGQgCgHAAgGQAAgLADgKQAFgJAGgHIAJgHIALgFIAMgDIAQgBIAnABIAACQgAgDgkQgDADgBADQgBAEAAAEQgBAHAFAGQAEAEAFABIASAAIAAgkIgMgBQgIAAgGAFg");
	this.shape_9.setTransform(69.4,16.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAbBJIAAg7Ig0AAIAAA7IgiAAIAAiRIAiAAIAAA4IA0AAIAAg4IAhAAIAACRg");
	this.shape_10.setTransform(55.7,16.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAeBJIAAhaIg/BaIgdAAIAAiRIAhAAIAABaIA/haIAeAAIAACRg");
	this.shape_11.setTransform(39.7,16.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgzBJIAAiQIAtgBQAKAAARAEQAHADALAIQAGAHAEAIQADAIAAAKQAAAKgEAJQgEAIgHAGQgHAIgJADQgLAEgLAAIgQAAIAAAxgAgRgoIAAAhIAPABQAHAAAFgDIAFgGQABgEAAgFQAAgFgBgDQgBgDgDgCQgFgEgJAAg");
	this.shape_12.setTransform(25.5,16.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAaBJIAAhxIgyAAIAABxIgiAAIAAiRIB1AAIAACRg");
	this.shape_13.setTransform(10.8,16.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(0.1,0,207.2,36.1), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0,1],0,0,0,0,0,10.3).s().p("AhHBHQgdgdgBgqQABgpAdgeQAegdApgBQAqABAdAdQAeAeABApQgBAqgeAdQgdAegqABQgpgBgegeg");
	this.shape.setTransform(10.2,10.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,20.3,20.3), null);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.gotoAndPlay((160 * Math.random()).toFixed());
	}
	this.frame_159 = function() {
		this.gotoAndPlay(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(159).call(this.frame_159).wait(1));

	// Слой 1
	this.instance = new lib.Символ14();
	this.instance.parent = this;
	this.instance.setTransform(5.5,5.5,1,1,0,0,0,5.5,5.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-108.5,y:1467.7},159).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,11.1,11.1);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.gotoAndPlay((30 * Math.random()).toFixed());
	}
	this.frame_29 = function() {
		this.gotoAndPlay(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(29).call(this.frame_29).wait(1));

	// Слой 1
	this.instance = new lib.Символ13();
	this.instance.parent = this;
	this.instance.setTransform(83,83,1,1,0,0,0,83,83);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:1192.5,y:5062.7},29).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,166,166);


(lib.Symbol23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol5();
	this.instance.parent = this;
	this.instance.setTransform(137.8,35.4,1,1,0,0,0,102.4,18.1);

	this.instance_1 = new lib.Symbol6();
	this.instance_1.parent = this;
	this.instance_1.setTransform(139.5,35.8,1,1,0,0,0,139.5,35.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC0000").s().p("AgrBJIAAiRIBVAAIAAAgIg0AAIAAAZIAuAAIAAAeIguAAIAAAbIA2AAIAAAfg");
	this.shape.setTransform(234.1,33.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC0000").s().p("AAeBJIAAhaIg/BaIgdAAIAAiRIAhAAIAABaIBAhaIAcAAIAACRg");
	this.shape_1.setTransform(219.7,33.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CC0000").s().p("AgQBJIAAhxIgrAAIAAggIB3AAIAAAgIgrAAIAABxg");
	this.shape_2.setTransform(205.2,33.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CC0000").s().p("AgBBKQgIgBgHgDQgHgDgGgEQgGgDgFgFIgJgLQgEgGgCgHQgDgHgCgIIgBgQIABgOIAEgOIAGgNIAIgLIALgJIANgHQAHgDAIgCQAIgBAJAAQAKAAAQAEQAMAEAHAHIgPAZIgNgGQgIgDgJAAQgIAAgHADQgHADgGAFQgFAGgDAIQgEAJAAAJQAAAKAEAIQADAIAGAGQAFAGAIADQAIADAJAAQAIAAAIgCQAJgDAHgFIANAYQgEAEgFADIgLAGQgSAEgKAAQgIAAgHgBg");
	this.shape_3.setTransform(192.4,33.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CC0000").s().p("AAoBJIgMgfIg5AAIgMAfIghAAIA8iRIAdAAIA8CRgAAPALIgPgoIgQAoIAfAAg");
	this.shape_4.setTransform(177.9,33.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CC0000").s().p("AAVBJIAAg4QgEAEgIACQgIADgKAAQgIAAgHgDQgJgCgGgFQgHgGgEgJIgCgJIgBgMIAAg0IAhAAIAAAqQAAAIACAFQABAFADADQADAEALAAQAFAAAGgCQAFgBAFgEIAAg8IAiAAIAACRg");
	this.shape_5.setTransform(163.1,33.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CC0000").s().p("AggBHQgGgCgEgDIAMgcQAFAEAFAAQAEAAADgCQADgBABgDIACgFIg/hnIAmAAIAoBHIAdhHIAiAAIgxBuQgEAJgEAGQgFAHgEAEQgFAEgGADQgGACgIAAQgGAAgGgCg");
	this.shape_6.setTransform(148.9,33.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#CC0000").s().p("AgyBIIAAiQIAiAAIAAAtIANAAQAMAAALADQAKAEAHAGQAHAHADAHQAEAKAAALQAAAMgEAJQgEAJgIAIQgMAHgIADQgPAEgLAAgAgQAEIAAAlIAJABQAGAAADgBQAEgBADgDQADgCACgEQABgEAAgFQAAgGgBgDIgFgGQgGgEgJAAg");
	this.shape_7.setTransform(131.6,33.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#CC0000").s().p("AgQBJIAAhxIgrAAIAAggIB3AAIAAAgIgrAAIAABxg");
	this.shape_8.setTransform(118.5,33.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#CC0000").s().p("AAXBJIAAgvIgOAAIgbAvIglAAIAhg2IgIgHIgHgIQgDgEgCgGQgCgGAAgIQAAgKADgKQAFgJAHgHIAIgHIALgFIAMgDIAQgBIAmABIAACQgAgCgkQgEACgBAEQgCADABAFQAAAHAEAFQAEAEAGACIARAAIAAgkIgMgBQgJAAgEAFg");
	this.shape_9.setTransform(104.8,33.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#CC0000").s().p("AAbBJIAAg7Ig0AAIAAA7IgiAAIAAiRIAiAAIAAA4IA0AAIAAg4IAhAAIAACRg");
	this.shape_10.setTransform(91.1,33.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#CC0000").s().p("AAeBJIAAhaIg/BaIgdAAIAAiRIAhAAIAABaIBAhaIAcAAIAACRg");
	this.shape_11.setTransform(75.1,33.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#CC0000").s().p("AgzBJIAAiQIAtgBQAKAAARAEQAHADALAIQAGAGAEAKQADAHAAALQAAAJgEAJQgEAIgHAHQgHAHgJAEQgLADgLAAIgQgBIAAAygAgRgoIAAAhIAPABQAHAAAFgEIAFgFQABgEAAgFQAAgEgBgEQgBgDgDgCQgFgDgJgBg");
	this.shape_12.setTransform(60.9,33.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#CC0000").s().p("AAaBJIAAhxIgyAAIAABxIgiAAIAAiRIB1AAIAACRg");
	this.shape_13.setTransform(46.2,33.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFCC00").s().p("A1yFmIAArLMArlAAAIAALLg");
	this.shape_14.setTransform(139.5,35.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,279.1,71.6);


(lib.Symbol20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Symbol 22
	this.instance = new lib.Symbol22();
	this.instance.parent = this;
	this.instance.setTransform(-170.1,27.6,1.02,1.02,0,0,0,129.5,26.4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(205).to({_off:false},0).to({x:136.3},19,cjs.Ease.quadInOut).wait(65).to({x:431.4},15,cjs.Ease.quadInOut).wait(6));

	// Symbol 21
	this.instance_1 = new lib.Symbol21();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-170.1,-4.9,1.02,1.02,0,0,0,129.5,17);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(199).to({_off:false},0).to({x:136.3},19,cjs.Ease.quadInOut).wait(65).to({x:431.4},15,cjs.Ease.quadInOut).wait(12));

	// Symbol 19
	this.instance_2 = new lib.Symbol19();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-170.6,48,1,1,0,0,0,134.5,43.6);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(104).to({_off:false},0).to({x:135.8},19,cjs.Ease.quadInOut).wait(65).to({x:430.9},15,cjs.Ease.quadInOut).wait(107));

	// Symbol 18
	this.instance_3 = new lib.Symbol18();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-170.6,1.9,1,1,0,0,0,135.8,37);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(99).to({_off:false},0).to({x:135.8},19,cjs.Ease.quadInOut).wait(65).to({x:431},15,cjs.Ease.quadInOut).wait(112));

	// Symbol 17
	this.instance_4 = new lib.Symbol17();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-169.2,196.7,1.2,1.2,0,0,0,110.7,32.4);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(4).to({_off:false},0).to({x:137.2},19,cjs.Ease.quadInOut).wait(65).to({x:432.3},15,cjs.Ease.quadInOut).wait(207));

	// Symbol 16
	this.instance_5 = new lib.Symbol16();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-170.9,142.9,1.2,1.2,0,0,0,111.9,45.8);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(2).to({_off:false},0).to({x:135.5},19,cjs.Ease.quadInOut).wait(65).to({x:430.7},15,cjs.Ease.quadInOut).wait(209));

	// Symbol 15
	this.instance_6 = new lib.Symbol15();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-167.8,83.5,1.2,1.2,0,0,0,112,34.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({x:138.6},19,cjs.Ease.quadInOut).wait(63).to({x:433.7},15,cjs.Ease.quadInOut).wait(213));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-302.2,42.5,268.5,82.2);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Symbol 9
	this.instance = new lib.Symbol9();
	this.instance.parent = this;
	this.instance.setTransform(473.5,-268.6,1,1,-95.8,0,0,56,51.6);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(149).to({_off:false},0).to({regX:56.1,regY:51.5,rotation:6.7,x:482.5,y:209.2,alpha:1},10,cjs.Ease.get(-1)).to({regX:56,rotation:0,x:478.7,y:212.9},20,cjs.Ease.get(1)).wait(99).to({regX:56.1,rotation:41.2,x:856.5,y:203},20,cjs.Ease.get(-1)).wait(12));

	// Symbol 10
	this.instance_1 = new lib.Symbol10();
	this.instance_1.parent = this;
	this.instance_1.setTransform(179.6,248.2,1,1,0,0,0,51,50.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(119).to({_off:false},0).to({rotation:360,x:501},21,cjs.Ease.quadInOut).wait(138).to({rotation:720,x:851},20,cjs.Ease.get(-1)).wait(12));

	// Symbol 11
	this.instance_2 = new lib.Symbol11();
	this.instance_2.parent = this;
	this.instance_2.setTransform(171.2,128,1,1,0,0,0,64.5,128);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(89).to({_off:false},0).to({x:593.9},20,cjs.Ease.quadInOut).wait(174).to({x:994.1},20,cjs.Ease.quadInOut).wait(7));

	// Symbol 12
	this.instance_3 = new lib.Symbol12();
	this.instance_3.parent = this;
	this.instance_3.setTransform(96.7,128,1,1,0,0,0,64,128);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(97).to({x:519.4},20,cjs.Ease.quadInOut).wait(172).to({x:919.6},20,cjs.Ease.quadInOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(32.7,0,128,256);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol23();
	this.instance.parent = this;
	this.instance.setTransform(139.5,35.8,1,1,0,0,0,139.5,35.8);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(0,0,279.1,71.6), null);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol8();
	this.instance.parent = this;
	this.instance.setTransform(139.5,35.8,1,1,0,0,0,139.5,35.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.96,scaleY:0.96,y:35.9},29,cjs.Ease.quadInOut).to({scaleX:1,scaleY:1,y:35.8},30,cjs.Ease.quadInOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,279.1,71.6);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Symbol4();
	this.instance.parent = this;
	this.instance.setTransform(299.5,26.9,1.217,1.217,0,0,0,10.2,10.2);
	this.instance.alpha = 0.25;
	this.instance.compositeOperation = "lighter";

	this.instance_1 = new lib.Symbol4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(203.9,8.7,1.217,1.217,0,0,0,10.2,10.2);
	this.instance_1.alpha = 0.25;
	this.instance_1.compositeOperation = "lighter";

	this.instance_2 = new lib.Symbol4();
	this.instance_2.parent = this;
	this.instance_2.setTransform(123.9,23.4,1.217,1.217,0,0,0,10.2,10.2);
	this.instance_2.alpha = 0.25;
	this.instance_2.compositeOperation = "lighter";

	this.instance_3 = new lib.Symbol4();
	this.instance_3.parent = this;
	this.instance_3.setTransform(41,23.4,1.217,1.217,0,0,0,10.2,10.2);
	this.instance_3.alpha = 0.25;
	this.instance_3.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3,p:{x:41,y:23.4}},{t:this.instance_2,p:{x:123.9,y:23.4}},{t:this.instance_1,p:{x:203.9,y:8.7}},{t:this.instance,p:{x:299.5,y:26.9}}]}).to({state:[{t:this.instance_3,p:{x:85.4,y:20.3}},{t:this.instance_2,p:{x:162,y:20.3}},{t:this.instance_1,p:{x:245.5,y:12.4}},{t:this.instance,p:{x:5.6,y:20.3}}]},4).wait(6));

	// Layer 1
	this.instance_4 = new lib.light();
	this.instance_4.parent = this;
	this.instance_4.setTransform(0,5.1,1,1,-0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-3.7,311.8,56.8);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// light.png
	this.instance = new lib.Symbol3();
	this.instance.parent = this;
	this.instance.setTransform(909,264.7,1,1,0,0,0,153.8,26.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// FB_logo.png
	this.instance_1 = new lib.FB_logo();
	this.instance_1.parent = this;
	this.instance_1.setTransform(781,176.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// elka.png
	this.instance_2 = new lib.elka();
	this.instance_2.parent = this;
	this.instance_2.setTransform(1080.5,377.6,0.889,0.889,-179.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// elka.png
	this.instance_3 = new lib.elka();
	this.instance_3.parent = this;
	this.instance_3.setTransform(719.3,0,1,1,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(714.9,0,373.4,377.6), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol7();
	this.instance.parent = this;
	this.instance.setTransform(139.8,21.4,1,1,0,0,0,139.5,35.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0.3,-14.4,279.1,71.6), null);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ12();
	this.instance.parent = this;
	this.instance.setTransform(298,12.9,0.156,0.156,0,0,0,83,83);

	this.instance_1 = new lib.Символ12();
	this.instance_1.parent = this;
	this.instance_1.setTransform(250,12.9,0.156,0.156,0,0,0,83,83);

	this.instance_2 = new lib.Символ12();
	this.instance_2.parent = this;
	this.instance_2.setTransform(203,12.9,0.156,0.156,0,0,0,83,83);

	this.instance_3 = new lib.Символ12();
	this.instance_3.parent = this;
	this.instance_3.setTransform(155,12.9,0.156,0.156,0,0,0,83,83);

	this.instance_4 = new lib.Символ12();
	this.instance_4.parent = this;
	this.instance_4.setTransform(108,12.9,0.156,0.156,0,0,0,83,83);

	this.instance_5 = new lib.Символ12();
	this.instance_5.parent = this;
	this.instance_5.setTransform(59.9,12.9,0.156,0.156,0,0,0,83,83);

	this.instance_6 = new lib.Символ12();
	this.instance_6.parent = this;
	this.instance_6.setTransform(12.9,12.9,0.156,0.156,0,0,0,83,83);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ18, new cjs.Rectangle(0,0,310.9,25.8), null);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ12();
	this.instance.parent = this;
	this.instance.setTransform(309.4,5.6,0.067,0.067,0,0,0,83.4,83.4);

	this.instance_1 = new lib.Символ12();
	this.instance_1.parent = this;
	this.instance_1.setTransform(289.2,5.6,0.067,0.067,0,0,0,82.7,83.4);

	this.instance_2 = new lib.Символ12();
	this.instance_2.parent = this;
	this.instance_2.setTransform(268.7,5.6,0.067,0.067,0,0,0,83.4,83.4);

	this.instance_3 = new lib.Символ12();
	this.instance_3.parent = this;
	this.instance_3.setTransform(248.6,5.6,0.067,0.067,0,0,0,83.4,83.4);

	this.instance_4 = new lib.Символ12();
	this.instance_4.parent = this;
	this.instance_4.setTransform(228.1,5.6,0.067,0.067,0,0,0,83.4,83.4);

	this.instance_5 = new lib.Символ12();
	this.instance_5.parent = this;
	this.instance_5.setTransform(207.9,5.6,0.067,0.067,0,0,0,82.7,83.4);

	this.instance_6 = new lib.Символ12();
	this.instance_6.parent = this;
	this.instance_6.setTransform(187.4,5.6,0.067,0.067,0,0,0,83.4,83.4);

	this.instance_7 = new lib.Символ12();
	this.instance_7.parent = this;
	this.instance_7.setTransform(167.3,5.6,0.067,0.067,0,0,0,83.4,83.4);

	this.instance_8 = new lib.Символ12();
	this.instance_8.parent = this;
	this.instance_8.setTransform(147.6,5.6,0.067,0.067,0,0,0,83.4,83.4);

	this.instance_9 = new lib.Символ12();
	this.instance_9.parent = this;
	this.instance_9.setTransform(127.5,5.6,0.067,0.067,0,0,0,83.4,83.4);

	this.instance_10 = new lib.Символ12();
	this.instance_10.parent = this;
	this.instance_10.setTransform(107,5.6,0.067,0.067,0,0,0,83.4,83.4);

	this.instance_11 = new lib.Символ12();
	this.instance_11.parent = this;
	this.instance_11.setTransform(86.9,5.6,0.067,0.067,0,0,0,83.4,83.4);

	this.instance_12 = new lib.Символ12();
	this.instance_12.parent = this;
	this.instance_12.setTransform(66.3,5.6,0.067,0.067,0,0,0,83.4,83.4);

	this.instance_13 = new lib.Символ12();
	this.instance_13.parent = this;
	this.instance_13.setTransform(46.2,5.6,0.067,0.067,0,0,0,83.4,83.4);

	this.instance_14 = new lib.Символ12();
	this.instance_14.parent = this;
	this.instance_14.setTransform(25.7,5.6,0.067,0.067,0,0,0,83.4,83.4);

	this.instance_15 = new lib.Символ12();
	this.instance_15.parent = this;
	this.instance_15.setTransform(5.5,5.6,0.067,0.067,0,0,0,82.7,83.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ17, new cjs.Rectangle(0,0,314.9,11.1), null);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ15();
	this.instance.parent = this;
	this.instance.setTransform(679.8,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_1 = new lib.Символ15();
	this.instance_1.parent = this;
	this.instance_1.setTransform(672.2,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_2 = new lib.Символ15();
	this.instance_2.parent = this;
	this.instance_2.setTransform(662.6,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_3 = new lib.Символ15();
	this.instance_3.parent = this;
	this.instance_3.setTransform(655,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_4 = new lib.Символ15();
	this.instance_4.parent = this;
	this.instance_4.setTransform(648.3,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_5 = new lib.Символ15();
	this.instance_5.parent = this;
	this.instance_5.setTransform(640.7,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_6 = new lib.Символ15();
	this.instance_6.parent = this;
	this.instance_6.setTransform(631.1,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_7 = new lib.Символ15();
	this.instance_7.parent = this;
	this.instance_7.setTransform(623.5,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_8 = new lib.Символ15();
	this.instance_8.parent = this;
	this.instance_8.setTransform(618.1,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_9 = new lib.Символ15();
	this.instance_9.parent = this;
	this.instance_9.setTransform(610.5,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_10 = new lib.Символ15();
	this.instance_10.parent = this;
	this.instance_10.setTransform(600.9,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_11 = new lib.Символ15();
	this.instance_11.parent = this;
	this.instance_11.setTransform(593.3,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_12 = new lib.Символ15();
	this.instance_12.parent = this;
	this.instance_12.setTransform(586.6,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_13 = new lib.Символ15();
	this.instance_13.parent = this;
	this.instance_13.setTransform(579,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_14 = new lib.Символ15();
	this.instance_14.parent = this;
	this.instance_14.setTransform(569.4,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_15 = new lib.Символ15();
	this.instance_15.parent = this;
	this.instance_15.setTransform(561.8,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_16 = new lib.Символ15();
	this.instance_16.parent = this;
	this.instance_16.setTransform(556.1,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_17 = new lib.Символ15();
	this.instance_17.parent = this;
	this.instance_17.setTransform(548.5,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_18 = new lib.Символ15();
	this.instance_18.parent = this;
	this.instance_18.setTransform(538.9,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_19 = new lib.Символ15();
	this.instance_19.parent = this;
	this.instance_19.setTransform(531.3,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_20 = new lib.Символ15();
	this.instance_20.parent = this;
	this.instance_20.setTransform(524.6,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_21 = new lib.Символ15();
	this.instance_21.parent = this;
	this.instance_21.setTransform(517,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_22 = new lib.Символ15();
	this.instance_22.parent = this;
	this.instance_22.setTransform(507.4,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_23 = new lib.Символ15();
	this.instance_23.parent = this;
	this.instance_23.setTransform(499.8,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_24 = new lib.Символ15();
	this.instance_24.parent = this;
	this.instance_24.setTransform(494.2,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_25 = new lib.Символ15();
	this.instance_25.parent = this;
	this.instance_25.setTransform(486.6,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_26 = new lib.Символ15();
	this.instance_26.parent = this;
	this.instance_26.setTransform(477,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_27 = new lib.Символ15();
	this.instance_27.parent = this;
	this.instance_27.setTransform(469.4,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_28 = new lib.Символ15();
	this.instance_28.parent = this;
	this.instance_28.setTransform(462.7,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_29 = new lib.Символ15();
	this.instance_29.parent = this;
	this.instance_29.setTransform(455.1,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_30 = new lib.Символ15();
	this.instance_30.parent = this;
	this.instance_30.setTransform(445.5,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_31 = new lib.Символ15();
	this.instance_31.parent = this;
	this.instance_31.setTransform(437.9,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_32 = new lib.Символ15();
	this.instance_32.parent = this;
	this.instance_32.setTransform(432.2,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_33 = new lib.Символ15();
	this.instance_33.parent = this;
	this.instance_33.setTransform(424.6,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_34 = new lib.Символ15();
	this.instance_34.parent = this;
	this.instance_34.setTransform(415,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_35 = new lib.Символ15();
	this.instance_35.parent = this;
	this.instance_35.setTransform(407.4,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_36 = new lib.Символ15();
	this.instance_36.parent = this;
	this.instance_36.setTransform(400.7,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_37 = new lib.Символ15();
	this.instance_37.parent = this;
	this.instance_37.setTransform(393.1,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_38 = new lib.Символ15();
	this.instance_38.parent = this;
	this.instance_38.setTransform(383.5,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_39 = new lib.Символ15();
	this.instance_39.parent = this;
	this.instance_39.setTransform(375.9,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_40 = new lib.Символ15();
	this.instance_40.parent = this;
	this.instance_40.setTransform(370.4,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_41 = new lib.Символ15();
	this.instance_41.parent = this;
	this.instance_41.setTransform(362.8,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_42 = new lib.Символ15();
	this.instance_42.parent = this;
	this.instance_42.setTransform(353.2,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_43 = new lib.Символ15();
	this.instance_43.parent = this;
	this.instance_43.setTransform(345.6,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_44 = new lib.Символ15();
	this.instance_44.parent = this;
	this.instance_44.setTransform(338.9,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_45 = new lib.Символ15();
	this.instance_45.parent = this;
	this.instance_45.setTransform(331.3,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_46 = new lib.Символ15();
	this.instance_46.parent = this;
	this.instance_46.setTransform(321.7,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_47 = new lib.Символ15();
	this.instance_47.parent = this;
	this.instance_47.setTransform(314.1,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_48 = new lib.Символ15();
	this.instance_48.parent = this;
	this.instance_48.setTransform(308.4,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_49 = new lib.Символ15();
	this.instance_49.parent = this;
	this.instance_49.setTransform(300.8,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_50 = new lib.Символ15();
	this.instance_50.parent = this;
	this.instance_50.setTransform(291.2,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_51 = new lib.Символ15();
	this.instance_51.parent = this;
	this.instance_51.setTransform(283.6,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_52 = new lib.Символ15();
	this.instance_52.parent = this;
	this.instance_52.setTransform(276.9,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_53 = new lib.Символ15();
	this.instance_53.parent = this;
	this.instance_53.setTransform(269.3,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_54 = new lib.Символ15();
	this.instance_54.parent = this;
	this.instance_54.setTransform(259.7,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_55 = new lib.Символ15();
	this.instance_55.parent = this;
	this.instance_55.setTransform(252.1,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_56 = new lib.Символ15();
	this.instance_56.parent = this;
	this.instance_56.setTransform(243.5,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_57 = new lib.Символ15();
	this.instance_57.parent = this;
	this.instance_57.setTransform(235.9,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_58 = new lib.Символ15();
	this.instance_58.parent = this;
	this.instance_58.setTransform(226.3,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_59 = new lib.Символ15();
	this.instance_59.parent = this;
	this.instance_59.setTransform(218.7,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_60 = new lib.Символ15();
	this.instance_60.parent = this;
	this.instance_60.setTransform(212,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_61 = new lib.Символ15();
	this.instance_61.parent = this;
	this.instance_61.setTransform(204.4,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_62 = new lib.Символ15();
	this.instance_62.parent = this;
	this.instance_62.setTransform(194.8,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_63 = new lib.Символ15();
	this.instance_63.parent = this;
	this.instance_63.setTransform(187.2,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_64 = new lib.Символ15();
	this.instance_64.parent = this;
	this.instance_64.setTransform(181.5,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_65 = new lib.Символ15();
	this.instance_65.parent = this;
	this.instance_65.setTransform(173.9,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_66 = new lib.Символ15();
	this.instance_66.parent = this;
	this.instance_66.setTransform(164.3,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_67 = new lib.Символ15();
	this.instance_67.parent = this;
	this.instance_67.setTransform(156.7,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_68 = new lib.Символ15();
	this.instance_68.parent = this;
	this.instance_68.setTransform(150,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_69 = new lib.Символ15();
	this.instance_69.parent = this;
	this.instance_69.setTransform(142.4,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_70 = new lib.Символ15();
	this.instance_70.parent = this;
	this.instance_70.setTransform(132.8,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_71 = new lib.Символ15();
	this.instance_71.parent = this;
	this.instance_71.setTransform(125.2,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_72 = new lib.Символ15();
	this.instance_72.parent = this;
	this.instance_72.setTransform(119.8,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_73 = new lib.Символ15();
	this.instance_73.parent = this;
	this.instance_73.setTransform(112.2,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_74 = new lib.Символ15();
	this.instance_74.parent = this;
	this.instance_74.setTransform(102.6,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_75 = new lib.Символ15();
	this.instance_75.parent = this;
	this.instance_75.setTransform(95,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_76 = new lib.Символ15();
	this.instance_76.parent = this;
	this.instance_76.setTransform(88.3,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_77 = new lib.Символ15();
	this.instance_77.parent = this;
	this.instance_77.setTransform(80.7,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_78 = new lib.Символ15();
	this.instance_78.parent = this;
	this.instance_78.setTransform(71.1,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_79 = new lib.Символ15();
	this.instance_79.parent = this;
	this.instance_79.setTransform(63.5,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_80 = new lib.Символ15();
	this.instance_80.parent = this;
	this.instance_80.setTransform(57.8,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_81 = new lib.Символ15();
	this.instance_81.parent = this;
	this.instance_81.setTransform(50.2,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_82 = new lib.Символ15();
	this.instance_82.parent = this;
	this.instance_82.setTransform(40.6,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_83 = new lib.Символ15();
	this.instance_83.parent = this;
	this.instance_83.setTransform(33,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_84 = new lib.Символ15();
	this.instance_84.parent = this;
	this.instance_84.setTransform(26.3,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_85 = new lib.Символ15();
	this.instance_85.parent = this;
	this.instance_85.setTransform(18.7,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_86 = new lib.Символ15();
	this.instance_86.parent = this;
	this.instance_86.setTransform(9.1,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_87 = new lib.Символ15();
	this.instance_87.parent = this;
	this.instance_87.setTransform(1.5,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_87},{t:this.instance_86},{t:this.instance_85},{t:this.instance_84},{t:this.instance_83},{t:this.instance_82},{t:this.instance_81},{t:this.instance_80},{t:this.instance_79},{t:this.instance_78},{t:this.instance_77},{t:this.instance_76},{t:this.instance_75},{t:this.instance_74},{t:this.instance_73},{t:this.instance_72},{t:this.instance_71},{t:this.instance_70},{t:this.instance_69},{t:this.instance_68},{t:this.instance_67},{t:this.instance_66},{t:this.instance_65},{t:this.instance_64},{t:this.instance_63},{t:this.instance_62},{t:this.instance_61},{t:this.instance_60},{t:this.instance_59},{t:this.instance_58},{t:this.instance_57},{t:this.instance_56},{t:this.instance_55},{t:this.instance_54},{t:this.instance_53},{t:this.instance_52},{t:this.instance_51},{t:this.instance_50},{t:this.instance_49},{t:this.instance_48},{t:this.instance_47},{t:this.instance_46},{t:this.instance_45},{t:this.instance_44},{t:this.instance_43},{t:this.instance_42},{t:this.instance_41},{t:this.instance_40},{t:this.instance_39},{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ16, new cjs.Rectangle(0,0,681.3,2.9), null);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ18();
	this.instance.parent = this;
	this.instance.setTransform(908.1,43,1,1,0,0,0,367.9,12.9);

	this.instance_1 = new lib.Символ17();
	this.instance_1.parent = this;
	this.instance_1.setTransform(857.1,13.4,1,1,0,0,0,316.9,5.5);

	this.instance_2 = new lib.Символ16();
	this.instance_2.parent = this;
	this.instance_2.setTransform(894.9,1.4,1,1,0,0,0,340.6,1.4);

	this.instance_3 = new lib.Символ15();
	this.instance_3.parent = this;
	this.instance_3.setTransform(1576.8,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_4 = new lib.Символ15();
	this.instance_4.parent = this;
	this.instance_4.setTransform(1569.2,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_5 = new lib.Символ15();
	this.instance_5.parent = this;
	this.instance_5.setTransform(1559.6,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ11, new cjs.Rectangle(540.2,0,1038,55.9), null);


// stage content:
(lib.fb_akc2_300600 = function(mode,startPosition,loop) {
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

	// tek
	this.instance = new lib.Symbol20();
	this.instance.parent = this;
	this.instance.setTransform(390.8,317.1,1,1,0,0,0,379,174.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// mob
	this.instance_1 = new lib.Symbol13();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-287.9,367.9,1,1,0,0,0,117.9,149.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// logo
	this.instance_2 = new lib.Symbol2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-215.9,129.5,1,1,0,0,0,544.1,288.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// butty
	this.instance_3 = new lib.Symbol1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(149.6,559.6,1,1,0,0,0,139.5,27.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Layer 7
	this.instance_4 = new lib.Символ11();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-563.1,7,1.232,1.232,0,0,0,83,83);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// back.jpg
	this.instance_5 = new lib.back();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-134,0,0.764,0.764);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-223.1,141,1651.7,770.2);
// library properties:
lib.properties = {
	id: 'F0FA7BE466A940B9839D77C745E04E61',
	width: 300,
	height: 600,
	fps: 26,
	color: "#333333",
	opacity: 1.00,
	manifest: [
		{src:"images/fb_akc2_300_600_atlas_.png?1514549519320", id:"fb_akc2_300_600_atlas_"}
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
an.compositions['F0FA7BE466A940B9839D77C745E04E61'] = {
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