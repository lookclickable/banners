(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.arm = function() {
	this.initialize(img.arm);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,104,50);


(lib.back = function() {
	this.initialize(img.back);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,900,600);


(lib.back2 = function() {
	this.initialize(img.back2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,900,600);


(lib.bodydos = function() {
	this.initialize(img.bodydos);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,68,105);


(lib.finger = function() {
	this.initialize(img.finger);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,52,74);


(lib.head = function() {
	this.initialize(img.head);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,43,39);


(lib.hear = function() {
	this.initialize(img.hear);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,36,40);


(lib.hear2 = function() {
	this.initialize(img.hear2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,42,53);


(lib.Layer17 = function() {
	this.initialize(img.Layer17);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,85,66);


(lib.leg = function() {
	this.initialize(img.leg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,73,71);


(lib.legs = function() {
	this.initialize(img.legs);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,131,310);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,263,130);


(lib.ship = function() {
	this.initialize(img.ship);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,417,308);


(lib.shold = function() {
	this.initialize(img.shold);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,51,60);


(lib.shold2 = function() {
	this.initialize(img.shold2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,25,47);


(lib.skirt = function() {
	this.initialize(img.skirt);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,117,173);


(lib.skirt2 = function() {
	this.initialize(img.skirt2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,20,163);


(lib.sword = function() {
	this.initialize(img.sword);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,58,225);


(lib.turtle = function() {
	this.initialize(img.turtle);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,336,155);


(lib.wing1 = function() {
	this.initialize(img.wing1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,243,155);


(lib.wing2 = function() {
	this.initialize(img.wing2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,178,88);


(lib.wing3 = function() {
	this.initialize(img.wing3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,168,77);// helper functions:

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


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.skirt();
	this.instance.parent = this;
	this.instance.setTransform(-58.5,-86.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-58.5,-86.5,117,173);


(lib.Symbol44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#E43300","#D60000"],[0,1],-75.5,0,75.4,0).s().p("AqbDfQhWAAgBhXIAAkPQABhXBWAAIU3AAQBXAAAABXIAAEPQAABXhXAAg");
	this.shape.setTransform(75.5,22.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol44, new cjs.Rectangle(0,0,150.9,44.6), null);


(lib.Symbol43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.567,0.567);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol43, new cjs.Rectangle(0,0,149.1,73.7), null);


(lib.Symbol41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgbBLIAFgaIAZAAIgEAagAgSAfIAShpIAcAAIgXBpg");
	this.shape.setTransform(102.6,10.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAABLIgFhYQgBgNABgGIgBAAIgIATIgpBYIgfAAIgKiVIAcAAIAEBnIAAAPIABAAIAGgPIAvhnIAXAAIAFBnIAAAPIAAAAIAGgPIAshnIAdAAIhCCVg");
	this.shape_1.setTransform(90.8,10.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag6A6IgJgJQgDgGgCgFQgDgHgBgGIgBgNQAAgMADgKQADgLAGgKQAHgLAIgIQAIgIAKgGQAKgGALgDQALgDAKAAIAPABQAHABAGACQAGADAFADIAKAIQATASAAAcQAAAMgDAKQgDALgHAKQgGALgIAIQgIAJgLAGQgKAGgKADQgLADgKAAQgfAAgSgTgAAAgyIgLADQgOAIgGAGIgIAKIgGAKIgDALIgBAMQAAAJACAIQADAIAGAFQAGAGAHADQAHADAJAAQAWAAATgTIAIgKIAGgKIADgMIABgMQAAgRgLgMQgLgLgSAAg");
	this.shape_2.setTransform(70.7,10.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAUBLIgnhWIgHgTIgBgDIAAAAIgDAWIgRBWIgbAAIAdiVIAaAAIAnBWIAGATIACADIAAAAIADgWIARhWIAbAAIgdCVg");
	this.shape_3.setTransform(54.2,10.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgqBLIAMg/IgghWIAdAAIAPAsIAFAUIAAAAIANgUIAegsIAhAAIhDBXIgLA+g");
	this.shape_4.setTransform(36.2,10.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAoBLIgGgmIgzAAIgUAmIgdAAIBPiVIAfAAIAXCVgAAgAOIgGgmIgBgYIgBAAIgKAYIgUAmIAmAAg");
	this.shape_5.setTransform(20.2,10.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgvBLIAdiVIAaAAIgXB9IA/AAIgFAYg");
	this.shape_6.setTransform(8.8,10.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag+BLIAdiVIA1AAIAMABIALAEQAFACADAEQAEADADAFQACAEABAFQACAGAAAHQAAAIgDAIQgCAIgFAHQgEAGgGAGQgGAFgIADQgOAFgIAAIggAAIgKA0gAgUAAIAYAAQAJAAAGgDQAHgDAEgIQAFgIAAgJQAAgJgFgGQgGgEgKAAIgYAAg");
	this.shape_7.setTransform(-2.7,10.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.7,0,119.1,25);


(lib.Symbol39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#CC3300","#A40000"],[0,1],-84.8,0,84.8,0).s().p("AruD6QhhAAAAhhIAAkxQAAhhBhAAIXdAAQBhAAAABhIAAExQAABhhhAAg");
	this.shape.setTransform(84.8,25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol39, new cjs.Rectangle(0,0,169.6,50.1), null);


(lib.Symbol38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#990000").s().p("AruD6QhhAAAAhhIAAkxQAAhhBhAAIXdAAQBhAAAABhIAAExQAABhhhAAg");
	this.shape.setTransform(84.8,25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol38, new cjs.Rectangle(0,0,169.6,50.1), null);


(lib.Symbol35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.skirt2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol35, new cjs.Rectangle(0,0,20,163), null);


(lib.Symbol33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.hear2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol33, new cjs.Rectangle(0,0,42,53), null);


(lib.Symbol32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.finger();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol32, new cjs.Rectangle(0,0,52,74), null);


(lib.Symbol31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bodydos();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol31, new cjs.Rectangle(0,0,68,105), null);


(lib.Symbol30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.head();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol30, new cjs.Rectangle(0,0,43,39), null);


(lib.Symbol29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.hear();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol29, new cjs.Rectangle(0,0,36,40), null);


(lib.Symbol28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.legs();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol28, new cjs.Rectangle(0,0,131,310), null);


(lib.Symbol27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.shold();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol27, new cjs.Rectangle(0,0,51,60), null);


(lib.Symbol26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.shold2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol26, new cjs.Rectangle(0,0,25,47), null);


(lib.Symbol24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.arm();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol24, new cjs.Rectangle(0,0,104,50), null);


(lib.Symbol22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.leg();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol22, new cjs.Rectangle(0,0,73,71), null);


(lib.Symbol21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer17();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol21, new cjs.Rectangle(0,0,85,66), null);


(lib.Symbol20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.wing3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol20, new cjs.Rectangle(0,0,168,77), null);


(lib.Symbol19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.wing2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol19, new cjs.Rectangle(0,0,178,88), null);


(lib.Symbol18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.wing1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol18, new cjs.Rectangle(0,0,243,155), null);


(lib.Symbol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.turtle();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol14, new cjs.Rectangle(0,0,336,155), null);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ship();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol13, new cjs.Rectangle(0,0,417,308), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.back2();
	this.instance.parent = this;
	this.instance.setTransform(51,-28,0.828,0.593);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(51,-28,745,356), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.back();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,450,300), null);


(lib.Symbol40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol41();
	this.instance.parent = this;
	this.instance.setTransform(84.6,23,0.89,0.89,0,0,0,47.9,12.6);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.instance_1 = new lib.Symbol39();
	this.instance_1.parent = this;
	this.instance_1.setTransform(81.7,23,0.89,0.89,0,0,0,84.8,25);

	this.instance_2 = new lib.Symbol38();
	this.instance_2.parent = this;
	this.instance_2.setTransform(81.7,27.9,0.89,0.89,0,0,0,84.8,25.1);

	this.instance_3 = new lib.Symbol44();
	this.instance_3.parent = this;
	this.instance_3.setTransform(81.7,20.5,1,1,0,0,0,75.5,22.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#AE0000").s().p("AqbDfQhWAAAAhXIAAkPQAAhXBWAAIU3AAQBXAAAABXIAAEPQAABXhXAAg");
	this.shape.setTransform(81.7,27.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance,p:{y:23}}]}).to({state:[{t:this.shape},{t:this.instance_3},{t:this.instance,p:{y:20.6}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(6.2,0.7,150.9,49.3);


(lib.Symbol37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol40();
	this.instance.parent = this;
	this.instance.setTransform(84.8,27.8,1,1,0,0,0,84.8,27.8);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol37, new cjs.Rectangle(6.2,-1.7,150.9,51.8), null);


(lib.Symbol36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(58.5,86.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol36, new cjs.Rectangle(0,0,117,173), null);


(lib.Symbol34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Symbol 26
	this.instance = new lib.Symbol26();
	this.instance.parent = this;
	this.instance.setTransform(52.5,40.5,1,1,0,0,0,12.5,23.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:12.6,scaleY:1.01,skewX:-9.4,x:56.5},14,cjs.Ease.quadInOut).to({regX:12.5,scaleY:1,skewX:0,x:52.5},15,cjs.Ease.quadInOut).wait(1));

	// Symbol 32
	this.instance_1 = new lib.Symbol32();
	this.instance_1.parent = this;
	this.instance_1.setTransform(26.6,36.5,1,1,0,0,0,26,37);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:26.1,regY:36.9,scaleX:1,scaleY:1,skewX:16.4,skewY:10.1,x:40.6,y:34.1},14,cjs.Ease.quadInOut).to({regX:26,regY:37,scaleX:1,scaleY:1,skewX:0,skewY:0,x:26,y:37},15,cjs.Ease.quadInOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.6,-0.5,64.5,74);


(lib.Symbol25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol36();
	this.instance.parent = this;
	this.instance.setTransform(58.5,86.5,1,1,0,0,0,58.5,86.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol25, new cjs.Rectangle(0,0,117,173), null);


(lib.Symbol23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol35();
	this.instance.parent = this;
	this.instance.setTransform(10,81.5,1,1,0,0,0,10,81.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({skewX:-1.1,x:11.7},14,cjs.Ease.quadInOut).to({skewX:0,x:10},13,cjs.Ease.quadInOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,20,163);


(lib.Symbol17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol20();
	this.instance.parent = this;
	this.instance.setTransform(84,38.5,1,1,0,0,0,84,38.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.01,skewY:-7.3,y:49.4},29,cjs.Ease.quadInOut).to({scaleX:1,skewY:0,y:38.5},30,cjs.Ease.quadInOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,168,77);


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol19();
	this.instance.parent = this;
	this.instance.setTransform(89,44,1,1,0,0,0,89,44);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:44.1,scaleX:0.89,skewY:-9.1,x:99.7,y:56.7},29,cjs.Ease.quadInOut).to({regY:44,scaleX:1,skewY:0,x:89,y:44},30,cjs.Ease.quadInOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,178,88);


(lib.Symbol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol18();
	this.instance.parent = this;
	this.instance.setTransform(121.5,77.5,1,1,0,0,0,121.5,77.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.02,skewY:-10.9,y:100.9},29,cjs.Ease.quadInOut).to({scaleX:1,skewY:0,y:77.5},30,cjs.Ease.quadInOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,243,155);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol22();
	this.instance.parent = this;
	this.instance.setTransform(36.5,35.5,1,1,0,0,0,36.5,35.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:39.2,y:21.8},24,cjs.Ease.quadInOut).to({x:36.5,y:35.5},25,cjs.Ease.quadInOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,73,71);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol21();
	this.instance.parent = this;
	this.instance.setTransform(42.5,33,1,1,0,0,0,42.5,33);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.79,skewY:6.6,x:33.3,y:36.9},29,cjs.Ease.quadInOut).to({scaleX:1,skewY:0,x:42.5,y:33},30,cjs.Ease.quadInOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,85,66);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hear.png
	this.instance = new lib.Symbol29();
	this.instance.parent = this;
	this.instance.setTransform(103.3,24.6,1.003,1,0,0,4.4,18,19.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,skewX:1.3,skewY:3.7,x:109.7,y:24.4},29,cjs.Ease.quadInOut).to({scaleX:1,skewX:0,skewY:4.4,x:103.3,y:24.6},30,cjs.Ease.quadInOut).wait(1));

	// head.png
	this.instance_1 = new lib.Symbol30();
	this.instance_1.parent = this;
	this.instance_1.setTransform(79.5,29.2,1.001,1,0,0,2.5,21.5,19.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:21.6,regY:19.5,scaleX:1,skewX:1.3,skewY:0,x:86,y:28.1},29,cjs.Ease.quadInOut).to({regX:21.5,regY:19.6,scaleX:1,skewX:0,skewY:2.5,x:79.5,y:29.2},30,cjs.Ease.quadInOut).wait(1));

	// skirt2.png
	this.instance_2 = new lib.Symbol23();
	this.instance_2.parent = this;
	this.instance_2.setTransform(68,198.5,1,1,0,0,0,10,81.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:10.1,skewX:-0.2,x:72.8},29,cjs.Ease.quadInOut).to({regX:10,skewX:0,x:68},30,cjs.Ease.quadInOut).wait(1));

	// arm.png
	this.instance_3 = new lib.Symbol24();
	this.instance_3.parent = this;
	this.instance_3.setTransform(138.2,103.2,0.925,1,0,0,0,52.1,25);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:52,scaleX:1,skewX:1.3,x:146.7},29,cjs.Ease.quadInOut).to({regX:52.1,scaleX:0.93,skewX:0,x:138.2},30,cjs.Ease.quadInOut).wait(1));

	// skirt.png
	this.instance_4 = new lib.Symbol25();
	this.instance_4.parent = this;
	this.instance_4.setTransform(137.1,203.4,1,1,5.9,0,0,58.6,86.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regY:86.6,scaleY:1,rotation:0,skewX:5.4,skewY:1.3,x:142.7,y:199.2},29,cjs.Ease.quadInOut).to({regY:86.5,scaleY:1,rotation:5.9,skewX:0,skewY:0,x:137.1,y:203.4},30,cjs.Ease.quadInOut).wait(1));

	// shold.png
	this.instance_5 = new lib.Symbol27();
	this.instance_5.parent = this;
	this.instance_5.setTransform(132.3,59.3,1,1.001,0,3.1,0,25.5,30);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regX:25.6,scaleY:1,skewX:1.3,x:139.7},29,cjs.Ease.quadInOut).to({regX:25.5,scaleY:1,skewX:3.1,x:132.3},30,cjs.Ease.quadInOut).wait(1));

	// bodydos.png
	this.instance_6 = new lib.Symbol31();
	this.instance_6.parent = this;
	this.instance_6.setTransform(92,74.5,1,1,0,0,0,34,52.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({skewX:1.3,x:97.4},29,cjs.Ease.quadInOut).to({skewX:0,x:92},30,cjs.Ease.quadInOut).wait(1));

	// Layer 13
	this.instance_7 = new lib.Symbol34();
	this.instance_7.parent = this;
	this.instance_7.setTransform(33.6,81.5,1,1,0,0,0,32.5,37);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({skewX:1.3,x:38.8},29,cjs.Ease.quadInOut).to({skewX:0,x:33.6},30,cjs.Ease.quadInOut).wait(1));

	// hear2.png
	this.instance_8 = new lib.Symbol33();
	this.instance_8.parent = this;
	this.instance_8.setTransform(67.9,55.7,1,1,-5,0,0,21,26.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({regY:26.5,scaleY:1.01,rotation:0,skewX:-7.1,x:75.2,y:53.9},29,cjs.Ease.quadInOut).to({regY:26.6,scaleY:1,rotation:-5,skewX:0,x:67.9,y:55.7},30,cjs.Ease.quadInOut).wait(1));

	// legs.png
	this.instance_9 = new lib.Symbol28();
	this.instance_9.parent = this;
	this.instance_9.setTransform(131.1,159.3,1,1,0,0,0,65.5,155);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({skewX:1.3,x:134.6},29,cjs.Ease.quadInOut).to({skewX:0,x:131.1},30,cjs.Ease.quadInOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.7,3.3,202.4,311);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EApAAQOIgEgEIgFAAQgbgDgeACQgMACgHgDIgDgCMhQXAADIgJACIgIgCIgFgEIgEgEIgBgEIAAgDQgFgCgDgDQgEgGABgHQABgHAEgGQAHgIARgHQCghCDXgdQCFgSECgNIEkgOQCEgGBKgKQBDgKBrgZQCGgfApgIQBCgNBFgHIgBgEQgEgKABgPQAEhdAAgpQgBhLgMg6IgLg3QgGgjgBhVQgBhNgKgqIgQg4QgKgngIg8QgDgWAIgJQgBgEAAgEQACgNARgEQAIgBASAEQA1AMAaAJQArAPAcAXQAQANAYAbQAZAeAOAMIASAQQAJAKADAKQACAGAAANQgBANABAFQADAPANAUQAbArAeApIAAgCQgBgRgLgiQgQgxgBgaIABgYQAAgOgCgJQgEgQgVgbQgUgagDgPQgCgMADgZQAEgYgDgMQgCgJgIgOIgMgXQgHgVAIgyQAJgvgLgWQgDgIgKgNQgLgNgDgIQgFgKgCgPIgCgcIgUheQgLg4ALgkQAIgXAPAAIAFACIANgJICKhLQAXgNASgCQAYgCALAPIAGAMQADAIADAEQAFAFAJADIARAFQAjALAdAsQAQAZAdA3QAPAYBLBRQA6A/AOAzQAEAQgEAIQgDAHgRAJQgQAIgCAJQAaAKAUAUQAUAUAKAaQAIAUAGAGQAHAHARAIQAKAHAVAgQARAaATABQAJABARgIQASgJAIgBQAKAAALAGQAFACAPAJQBUA2B3ADQAaABA1gBQAvgBAfAGQAcAFA3ASIAzANQAfAIATAIQAkAQAlAgQAXAUAoArQARASAHAKQAMARAFAQQAEAPgBAmQgBAiAIARQACAFAKAPQAHAMACAIQACAIgCAIQAHgEAKgCQBUgQB+AFQArADAbAIQAlAMAQAbIAMAaQAIAQAIAIQASAQArgDQA8gDA4gLIAsgIQAagDATADQAaAFAfATQASALAiAYQAlAYArASQBNAeBrAHQAmACAggBQgBgDAAgFQABgGAEgIIAIgOIBLi5IAKgkIABgCQgHgJAGgUICcpbQA4jTAchaIAqiHQAXhTAMhZIAHgyQAGgcAKgUQAKgTATgTQAMgMAYgVQANgLAKgBIAIAAIAMAFQAYANAcAGIAqAGIAnALIAhAGIAIACIAAfoIgBABIgEADIgDABIgGABIgJgCg");
	mask.setTransform(324.6,200.5);

	// Layer 1
	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(294,150,1.307,1,0,0,0,225,150);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(60,96.5,528.1,203.5), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// wing3.png
	this.instance = new lib.Symbol17();
	this.instance.parent = this;
	this.instance.setTransform(52.3,267.9,1.078,1.078,0,0,0,84,38.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:38.6,rotation:5.2,x:62.9,y:255.7},39,cjs.Ease.quadInOut).to({regY:38.5,rotation:0,x:52.3,y:267.9},40,cjs.Ease.quadInOut).wait(1));

	// wing2.png
	this.instance_1 = new lib.Symbol16();
	this.instance_1.parent = this;
	this.instance_1.setTransform(84.6,138,1.078,1.078,0,0,0,89,44);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regY:44.1,rotation:5.2,x:106.9,y:129.3},39,cjs.Ease.quadInOut).to({regY:44,rotation:0,x:84.6,y:138},40,cjs.Ease.quadInOut).wait(1));

	// wing1.png
	this.instance_2 = new lib.Symbol15();
	this.instance_2.parent = this;
	this.instance_2.setTransform(92.7,83.6,1.078,1.078,0,0,0,121.5,77.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:5.2,x:119.9,y:75.9},39,cjs.Ease.quadInOut).to({rotation:0,x:92.7,y:83.6},40,cjs.Ease.quadInOut).wait(1));

	// turtle.png
	this.instance_3 = new lib.Symbol14();
	this.instance_3.parent = this;
	this.instance_3.setTransform(265.7,343.3,1.078,1.078,0,0,0,168,77.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regY:77.6,skewY:1.1,y:346.8},39,cjs.Ease.quadInOut).to({regY:77.5,skewY:0,y:343.3},40,cjs.Ease.quadInOut).wait(1));

	// leg.png
	this.instance_4 = new lib.Symbol12();
	this.instance_4.parent = this;
	this.instance_4.setTransform(407.5,384.3,1.078,1.078,0,0,0,36.5,35.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(80));

	// ship.png
	this.instance_5 = new lib.Symbol13();
	this.instance_5.parent = this;
	this.instance_5.setTransform(304.1,174.7,1.078,1.078,0,0,0,208.6,154);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({rotation:5.2,x:322.1,y:185.7},39,cjs.Ease.quadInOut).to({rotation:0,x:304.1,y:174.7},40,cjs.Ease.quadInOut).wait(1));

	// Layer 17.png
	this.instance_6 = new lib.Symbol11();
	this.instance_6.parent = this;
	this.instance_6.setTransform(464.3,354.7,1.078,1.078,0,0,0,42.5,33);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(80));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38.2,0,567,426.8);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol10();
	this.instance.parent = this;
	this.instance.setTransform(102.5,160.5,1,1,0,0,0,102.5,160.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:92},119,cjs.Ease.quadInOut).to({x:92.1},9,cjs.Ease.quadInOut).to({x:102.5},111).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.7,3.3,202.4,311);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Symbol 3
	this.instance = new lib.Symbol3();
	this.instance.parent = this;
	this.instance.setTransform(184.9,171.1,0.626,0.626,-10.7,0,0,263,198);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:249},249).to({regX:263.1,rotation:-10.6,x:223,y:171},102).to({regX:263,rotation:-10.7,x:184.9,y:171.1},148).wait(1));

	// Symbol 4
	this.instance_1 = new lib.Symbol4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(265.1,178,1,1,0,0,0,294,150);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(500));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.5,0,790.6,356);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.sword();
	this.instance.parent = this;
	this.instance.setTransform(113,94,0.679,0.679);

	this.instance_1 = new lib.Symbol5();
	this.instance_1.parent = this;
	this.instance_1.setTransform(117.7,222.3,0.742,0.56,0,-3,-10,293.9,150.2);

	this.instance_2 = new lib.Symbol5();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-17.2,171.6,0.783,0.723,0,0,180,294.1,150.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(-248.3,63,586.4,280.8), null);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol8();
	this.instance.parent = this;
	this.instance.setTransform(203.1,139.1,1,1,0,0,0,203.1,139.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:163.1},119,cjs.Ease.quadInOut).to({x:203.1},120,cjs.Ease.quadInOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-248.3,63,586.4,280.8);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol9();
	this.instance.parent = this;
	this.instance.setTransform(383.5,186,1,1,0,0,0,383.5,178);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:407.5},119,cjs.Ease.quadInOut).to({x:383.5},120,cjs.Ease.quadInOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.5,8,790.6,356);


// stage content:
(lib._336280 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.Symbol43();
	this.instance.parent = this;
	this.instance.setTransform(79.5,40.9,1,1,0,0,0,74.5,36.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 2
	this.instance_1 = new lib.Symbol37();
	this.instance_1.parent = this;
	this.instance_1.setTransform(101.3,237.7,1,1,0,0,0,84.8,25);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Layer 1
	this.instance_2 = new lib.Symbol2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(262.3,150.4,0.852,0.852,0,5.5,7.6,102.5,160.9);
	this.instance_2.alpha = 0.66;
	this.instance_2.compositeOperation = "lighter";

	this.instance_3 = new lib.Symbol2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(262.3,150.4,0.852,0.852,0,5.5,7.6,102.5,160.9);

	this.instance_4 = new lib.Symbol7();
	this.instance_4.parent = this;
	this.instance_4.setTransform(243.1,144.1,1,1,0,0,0,203.1,139.1);

	this.instance_5 = new lib.Symbol6();
	this.instance_5.parent = this;
	this.instance_5.setTransform(219.6,107.4,0.917,0.933,0,0,0,383.5,177.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40.3,89.1,779.5,399.7);
// library properties:
lib.properties = {
	id: '33FE43996F96446BB44ADB6702E65E21',
	width: 336,
	height: 280,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/arm.png?1507201793872", id:"arm"},
		{src:"images/back.jpg?1507201793872", id:"back"},
		{src:"images/back2.jpg?1507201793872", id:"back2"},
		{src:"images/bodydos.png?1507201793872", id:"bodydos"},
		{src:"images/finger.png?1507201793872", id:"finger"},
		{src:"images/head.png?1507201793872", id:"head"},
		{src:"images/hear.png?1507201793872", id:"hear"},
		{src:"images/hear2.png?1507201793872", id:"hear2"},
		{src:"images/Layer17.png?1507201793872", id:"Layer17"},
		{src:"images/leg.png?1507201793872", id:"leg"},
		{src:"images/legs.png?1507201793872", id:"legs"},
		{src:"images/logo.png?1507201793872", id:"logo"},
		{src:"images/ship.png?1507201793872", id:"ship"},
		{src:"images/shold.png?1507201793872", id:"shold"},
		{src:"images/shold2.png?1507201793872", id:"shold2"},
		{src:"images/skirt.png?1507201793872", id:"skirt"},
		{src:"images/skirt2.png?1507201793872", id:"skirt2"},
		{src:"images/sword.png?1507201793872", id:"sword"},
		{src:"images/turtle.png?1507201793872", id:"turtle"},
		{src:"images/wing1.png?1507201793872", id:"wing1"},
		{src:"images/wing2.png?1507201793872", id:"wing2"},
		{src:"images/wing3.png?1507201793872", id:"wing3"}
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
an.compositions['33FE43996F96446BB44ADB6702E65E21'] = {
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