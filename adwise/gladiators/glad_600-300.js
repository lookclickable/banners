(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"glad_600_300_atlas_", frames: [[0,0,824,476],[826,0,157,280],[240,891,325,63],[567,892,325,63],[0,956,297,53],[893,622,116,136],[329,478,595,142],[894,841,38,91],[299,956,244,60],[894,934,35,84],[926,451,63,108],[240,821,33,66],[329,622,233,267],[0,821,238,89],[564,622,123,264],[826,282,168,167],[0,478,327,341],[780,622,111,154],[689,622,89,268],[780,778,173,61]]}
];


// symbols:



(lib.back = function() {
	this.spriteSheet = ss["glad_600_300_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.body = function() {
	this.spriteSheet = ss["glad_600_300_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.bt1 = function() {
	this.spriteSheet = ss["glad_600_300_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.bt2 = function() {
	this.spriteSheet = ss["glad_600_300_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.choos = function() {
	this.spriteSheet = ss["glad_600_300_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.cup = function() {
	this.spriteSheet = ss["glad_600_300_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.dust = function() {
	this.spriteSheet = ss["glad_600_300_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.fist = function() {
	this.spriteSheet = ss["glad_600_300_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.gift = function() {
	this.spriteSheet = ss["glad_600_300_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.hand1 = function() {
	this.spriteSheet = ss["glad_600_300_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.hand2 = function() {
	this.spriteSheet = ss["glad_600_300_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.head = function() {
	this.spriteSheet = ss["glad_600_300_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.hummer = function() {
	this.spriteSheet = ss["glad_600_300_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.logo = function() {
	this.spriteSheet = ss["glad_600_300_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.man4ik = function() {
	this.spriteSheet = ss["glad_600_300_atlas_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.plaxa = function() {
	this.spriteSheet = ss["glad_600_300_atlas_"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.shine = function() {
	this.spriteSheet = ss["glad_600_300_atlas_"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.skull = function() {
	this.spriteSheet = ss["glad_600_300_atlas_"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.sword = function() {
	this.spriteSheet = ss["glad_600_300_atlas_"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.wha = function() {
	this.spriteSheet = ss["glad_600_300_atlas_"];
	this.gotoAndStop(19);
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


(lib.Symbol53 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.choos();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.643,0.643);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,191,34.1);


(lib.Symbol52 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.gift();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.643,0.643);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,156.9,38.6);


(lib.Symbol51 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.wha();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.643,0.643);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,111.3,39.2);


(lib.Symbol44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("A4JIXIAAwtMAwSAAAIAAQtg");
	this.shape.setTransform(154.6,53.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol44, new cjs.Rectangle(0,0,309.1,107.1), null);


(lib.Symbol43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bt2();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.643,0.643);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol43, new cjs.Rectangle(0,0,209,40.5), null);


(lib.Symbol42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bt1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.643,0.643);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol42, new cjs.Rectangle(0,0,209,40.5), null);


(lib.Symbol40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.skull();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol40, new cjs.Rectangle(0,0,111,154), null);


(lib.Symbol35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.fist();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol35, new cjs.Rectangle(0,0,38,91), null);


(lib.Symbol34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.head();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol34, new cjs.Rectangle(0,0,33,66), null);


(lib.Symbol33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.man4ik();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol33, new cjs.Rectangle(0,0,123,264), null);


(lib.Symbol32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.sword();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol32, new cjs.Rectangle(0,0,89,268), null);


(lib.Symbol31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.body();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol31, new cjs.Rectangle(0,0,157,280), null);


(lib.Symbol30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.hand1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol30, new cjs.Rectangle(0,0,35,84), null);


(lib.Symbol29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.hand2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol29, new cjs.Rectangle(0,0,63,108), null);


(lib.Symbol28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.hummer();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol28, new cjs.Rectangle(0,0,233,267), null);


(lib.Symbol27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.back();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol27, new cjs.Rectangle(0,0,824,476), null);


(lib.Symbol25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.shine();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol25, new cjs.Rectangle(0,0,327,341), null);


(lib.Symbol23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.plaxa();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol23, new cjs.Rectangle(0,0,168,167), null);


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.plaxa();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol16, new cjs.Rectangle(0,0,168,167), null);


(lib.Symbol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cup();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol14, new cjs.Rectangle(0,0,116,136), null);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.shine();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol13, new cjs.Rectangle(0,0,327,341), null);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.dust();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol10, new cjs.Rectangle(0,0,595,142), null);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.logo();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(0,0,238,89), null);


(lib.Symbol41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// wha.png
	this.instance = new lib.Symbol51();
	this.instance.parent = this;
	this.instance.setTransform(96.6,19.6,1,1,0,0,0,55.6,19.6);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.25,scaleY:1.25,x:96.7},19,cjs.Ease.quadInOut).to({scaleX:1,scaleY:1,x:96.6},20,cjs.Ease.quadInOut).wait(41));

	// gift.png
	this.instance_1 = new lib.Symbol52();
	this.instance_1.parent = this;
	this.instance_1.setTransform(94.4,58.3,1,1,0,0,0,78.4,19.3);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(19).to({scaleX:1.23,scaleY:1.23,x:94.5},19,cjs.Ease.quadInOut).to({scaleX:1,scaleY:1,x:94.4},20,cjs.Ease.quadInOut).wait(22));

	// choos.png
	this.instance_2 = new lib.Symbol53();
	this.instance_2.parent = this;
	this.instance_2.setTransform(95.5,91.1,1,1,0,0,0,95.5,17.1);
	new cjs.ButtonHelper(this.instance_2, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(39).to({regX:95.4,scaleX:1.29,scaleY:1.29,x:95.4,y:91.2},19,cjs.Ease.quadInOut).to({regX:95.5,scaleX:1,scaleY:1,x:95.5,y:91.1},20,cjs.Ease.quadInOut).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,191,108.1);


(lib.Symbol39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol35();
	this.instance.parent = this;
	this.instance.setTransform(19,45.5,1,1,0,0,0,19,45.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol39, new cjs.Rectangle(0,0,38,91), null);


(lib.Symbol38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol34();
	this.instance.parent = this;
	this.instance.setTransform(16.5,33,1,1,0,0,0,16.5,33);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol38, new cjs.Rectangle(0,0,33,66), null);


(lib.Symbol37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol33();
	this.instance.parent = this;
	this.instance.setTransform(61.5,132,1,1,0,0,0,61.5,132);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol37, new cjs.Rectangle(0,0,123,264), null);


(lib.Symbol36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol32();
	this.instance.parent = this;
	this.instance.setTransform(44.5,134,1,1,0,0,0,44.5,134);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol36, new cjs.Rectangle(0,0,89,268), null);


(lib.Symbol26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol9();
	this.instance.parent = this;
	this.instance.setTransform(119,44.5,1,1,0,0,0,119,44.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:51.5},39,cjs.Ease.quadInOut).to({y:44.5},40,cjs.Ease.quadInOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,238,89);


(lib.Symbol22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol40();
	this.instance.parent = this;
	this.instance.setTransform(55.5,77,1,1,0,0,0,55.5,77);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:77.1,scaleX:0.86,scaleY:0.86,rotation:15,y:77.2},34,cjs.Ease.quadInOut).to({regY:77,scaleX:1,scaleY:1,rotation:0,y:77},35,cjs.Ease.quadInOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,111,154);


(lib.Symbol21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol25();
	this.instance.parent = this;
	this.instance.setTransform(163.5,170.5,1,1,0,0,0,163.5,170.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360},199).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,327,341);


(lib.Symbol20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol13();
	this.instance.parent = this;
	this.instance.setTransform(109.5,114.2,0.669,0.669,0,0,0,163.5,170.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360},224).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,218.9,228.3);


(lib.Symbol19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol20();
	this.instance.parent = this;
	this.instance.setTransform(109.5,114.1,1,1,0,0,0,109.5,114.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:109.4,regY:114,scaleX:1.26,scaleY:1.26},39,cjs.Ease.quadInOut).to({regX:109.5,regY:114.1,scaleX:1,scaleY:1},40,cjs.Ease.quadInOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,218.9,228.3);


(lib.Symbol18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol14();
	this.instance.parent = this;
	this.instance.setTransform(58,68,1,1,0,0,0,58,68);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol18, new cjs.Rectangle(0,0,116,136), null);


(lib.Symbol17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol18();
	this.instance.parent = this;
	this.instance.setTransform(58,68,1,1,0,0,0,58,68);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:57.9,scaleX:1.16,scaleY:1.16,rotation:-22.2,x:63.1,y:58},29,cjs.Ease.quadInOut).to({regX:58,scaleX:1,scaleY:1,rotation:0,x:58,y:68},30,cjs.Ease.quadInOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,116,136);


(lib.Symbol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol16();
	this.instance.parent = this;
	this.instance.setTransform(84,83.5,1,1,0,0,0,84,83.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol15, new cjs.Rectangle(0,0,168,167), null);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol10();
	this.instance.parent = this;
	this.instance.setTransform(-482.6,147.4,2.076,2.076,0,0,0,297.5,71);

	this.instance_1 = new lib.Symbol10();
	this.instance_1.parent = this;
	this.instance_1.setTransform(617.6,147.4,2.076,2.076,0,0,0,297.5,71);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol11, new cjs.Rectangle(-1100.2,0,2335.5,294.8), null);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol27();
	this.instance.parent = this;
	this.instance.setTransform(379.4,238,1.025,1,0,0,0,411.9,238);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:424.9},79,cjs.Ease.quadInOut).to({x:379.4},80,cjs.Ease.quadInOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42.8,0,844.8,476);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol17();
	this.instance.parent = this;
	this.instance.setTransform(-81,123,1,1,0,0,0,58,68);

	this.instance_1 = new lib.Symbol19();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-80.5,118.5,1,1,0,0,0,109.5,114.1);
	this.instance_1.compositeOperation = "lighter";

	this.instance_2 = new lib.Symbol15();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-86,112.5,1,1,0,0,0,84,83.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(-190,4.4,218.9,228.3), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hand2.png
	this.instance = new lib.Symbol29();
	this.instance.parent = this;
	this.instance.setTransform(98,101,1,1.003,0,4.8,0,31.5,54);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:31.7,regY:54.1,scaleY:0.9,skewX:16.4,skewY:12.4,x:96.2,y:99},31,cjs.Ease.quadInOut).to({regX:31.5,regY:54,scaleY:1,skewX:4.8,skewY:0,x:98,y:101},31,cjs.Ease.quadInOut).wait(1));

	// hummer.png
	this.instance_1 = new lib.Symbol28();
	this.instance_1.parent = this;
	this.instance_1.setTransform(130.5,216.5,1,1,0,0,0,116.5,133.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:116.7,regY:133.6,scaleX:1,scaleY:0.93,skewX:11.8,skewY:12.3,x:109.3,y:211.7},31,cjs.Ease.quadInOut).to({regX:116.5,regY:133.5,scaleX:1,scaleY:1,skewX:0,skewY:0,x:130.5,y:216.5},31,cjs.Ease.quadInOut).wait(1));

	// body.png
	this.instance_2 = new lib.Symbol31();
	this.instance_2.parent = this;
	this.instance_2.setTransform(138.5,140,1,1,0,0,0,78.5,140);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regY:140.1,scaleY:0.97,y:144.6},31,cjs.Ease.quadInOut).to({regY:140,scaleY:1,y:140},31,cjs.Ease.quadInOut).wait(1));

	// hand1.png
	this.instance_3 = new lib.Symbol30();
	this.instance_3.parent = this;
	this.instance_3.setTransform(190.5,64,1,1,0,0,0,17.5,42);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleX:1.01,scaleY:1.06,skewY:9.8,y:79.5},31,cjs.Ease.quadInOut).to({scaleX:1,scaleY:1,skewY:0,y:64},31,cjs.Ease.quadInOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(14,0,233,350);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// sword.png
	this.instance = new lib.Symbol36();
	this.instance.parent = this;
	this.instance.setTransform(108.5,179,1,1,0,0,0,44.5,134);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:134.1,scaleY:0.93,skewX:-1.8,x:112.5,y:170.1},39,cjs.Ease.quadInOut).to({regY:134,scaleY:1,skewX:0,x:108.5,y:179},40,cjs.Ease.quadInOut).wait(1));

	// man4ik.png
	this.instance_1 = new lib.Symbol37();
	this.instance_1.parent = this;
	this.instance_1.setTransform(94.5,198,1,1,0,0,0,61.5,132);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(80));

	// head.png
	this.instance_2 = new lib.Symbol38();
	this.instance_2.parent = this;
	this.instance_2.setTransform(71.5,47,1,1,0,0,0,16.5,33);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:16.6,skewX:0.9,x:72.2,y:49},39,cjs.Ease.quadInOut).to({regX:16.5,skewX:0,x:71.5,y:47},40,cjs.Ease.quadInOut).wait(1));

	// fist.png
	this.instance_3 = new lib.Symbol39();
	this.instance_3.parent = this;
	this.instance_3.setTransform(26,124.5,1,1,0,0,0,19,45.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regY:45.6,rotation:-9.5,x:33.8,y:127.2},39,cjs.Ease.quadInOut).to({regY:45.5,rotation:0,x:26,y:124.5},40,cjs.Ease.quadInOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(7,14,149,316);


(lib.Symbol48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol43();
	this.instance.parent = this;
	this.instance.setTransform(104.5,211,1,1,0,0,0,104.5,20.2);

	this.instance_1 = new lib.Symbol5();
	this.instance_1.parent = this;
	this.instance_1.setTransform(383.6,166.2,1,1,0,0,0,179.5,170.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol48, new cjs.Rectangle(0,0,233,231.3), null);


(lib.Symbol24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol21();
	this.instance.parent = this;
	this.instance.setTransform(144.5,150.7,0.884,0.884,0,0,0,163.5,170.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:163.6,regY:170.6,scaleX:0.69,scaleY:0.69,y:150.8},34,cjs.Ease.quadInOut).to({regX:163.5,regY:170.5,scaleX:0.88,scaleY:0.88,y:150.7},35,cjs.Ease.quadInOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,289,301.4);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol11();
	this.instance.parent = this;
	this.instance.setTransform(1777.9,147.4,1,1,0,0,0,617.6,147.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:2880.2},159).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(60,0,2335.5,294.8);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol7();
	this.instance.parent = this;
	this.instance.setTransform(412,238,1,1,0,0,0,412,238);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(-42.8,0,844.8,476), null);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol22();
	this.instance.parent = this;
	this.instance.setTransform(158,195.5,1,1,0,0,0,55.5,77);

	this.instance_1 = new lib.Symbol24();
	this.instance_1.parent = this;
	this.instance_1.setTransform(162.5,190.7,1,1,0,0,0,144.5,150.7);
	this.instance_1.compositeOperation = "lighter";

	this.instance_2 = new lib.Symbol23();
	this.instance_2.parent = this;
	this.instance_2.setTransform(158,192.5,1,1,0,0,0,84,83.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(18,40,289,301.4), null);


(lib.Symbol50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol48();
	this.instance.parent = this;
	this.instance.setTransform(191.8,115.6,1,1,0,0,0,191.8,115.6);

	this.instance_1 = new lib.Symbol48();
	this.instance_1.parent = this;
	this.instance_1.setTransform(191.8,115.6,1,1,0,0,0,191.8,115.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{alpha:1,compositeOperation:undefined}}]}).to({state:[{t:this.instance_1},{t:this.instance,p:{alpha:0.23,compositeOperation:"lighter"}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,233,231.3);


(lib.Symbol47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol42();
	this.instance.parent = this;
	this.instance.setTransform(171.4,256,1,1,0,0,0,104.5,20.2);

	this.instance_1 = new lib.Symbol6();
	this.instance_1.parent = this;
	this.instance_1.setTransform(145.6,130.5,1,1,0,0,0,163.5,170.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol47, new cjs.Rectangle(0,0,289,301.4), null);


(lib.Symbol49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol47();
	this.instance.parent = this;
	this.instance.setTransform(144.5,150.7,1,1,0,0,0,144.5,150.7);

	this.instance_1 = new lib.Symbol47();
	this.instance_1.parent = this;
	this.instance_1.setTransform(144.5,150.7,1,1,0,0,0,144.5,150.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{alpha:1,compositeOperation:undefined}}]}).to({state:[{t:this.instance_1},{t:this.instance,p:{alpha:0.23,compositeOperation:"lighter"}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,289,301.4);


// stage content:
(lib.glad_600300 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		stage.canvas.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		window.open(clickTAG, "_blank");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// bt2
	this.instance = new lib.Symbol50();
	this.instance.parent = this;
	this.instance.setTransform(551.8,156.6,1,1,0,0,0,191.8,115.6);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bt1
	this.instance_1 = new lib.Symbol49();
	this.instance_1.parent = this;
	this.instance_1.setTransform(120.6,146.7,1,1,0,0,0,144.5,150.7);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// tekx
	this.instance_2 = new lib.Symbol41();
	this.instance_2.parent = this;
	this.instance_2.setTransform(300,151.6,0.88,0.88,0,0,0,95.5,54.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// logo
	this.instance_3 = new lib.Symbol26();
	this.instance_3.parent = this;
	this.instance_3.setTransform(300,44.5,1,1,0,0,0,119,44.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// dust
	this.instance_4 = new lib.Symbol12();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-241.5,252.2,0.749,0.749,0,0,0,1167.8,147.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// manright
	this.instance_5 = new lib.Symbol3();
	this.instance_5.parent = this;
	this.instance_5.setTransform(521.3,140.4,1,1,0,0,0,78,167);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// manleft
	this.instance_6 = new lib.Symbol4();
	this.instance_6.parent = this;
	this.instance_6.setTransform(73.5,159.4,1,1,0,0,0,116.5,164);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// plaxa
	this.instance_7 = new lib.Symbol44();
	this.instance_7.parent = this;
	this.instance_7.setTransform(314.7,153.6,1,1,0,0,0,154.6,53.5);
	this.instance_7.alpha = 0.672;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// back
	this.instance_8 = new lib.Symbol8();
	this.instance_8.parent = this;
	this.instance_8.setTransform(301.6,185.5,0.771,0.771,0,0,0,411.9,285.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-771.2,115.1,1749.2,397.5);
// library properties:
lib.properties = {
	id: 'AD174A5A2BD1405498FF424E1D480B6E',
	width: 600,
	height: 300,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/glad_600_300_atlas_.png?1507715517301", id:"glad_600_300_atlas_"}
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
an.compositions['AD174A5A2BD1405498FF424E1D480B6E'] = {
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