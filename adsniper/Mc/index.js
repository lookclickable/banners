(function (lib, img, cjs, ss, an) {

Object.keys(img).forEach(function(key){
    (lib[key] = function() {
    this.initialize(img[key]);
    }).prototype = p = new createjs.Bitmap();
    p.nominalBounds = new createjs.Rectangle(0,0,img[key].width,img[key].height);
});

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


(lib.txtinn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.d();
	this.instance.parent = this;
	this.instance.setTransform(-133,-51);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.txtinn, new cjs.Rectangle(-133,-51,266,102), null);


(lib.title = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.t1();
	this.instance.parent = this;
	this.instance.setTransform(0,-3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.title, new cjs.Rectangle(0,-3,199,11), null);


(lib.subtitle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.t3();
	this.instance.parent = this;
	this.instance.setTransform(8,-14);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.subtitle, new cjs.Rectangle(8,-14,195,23), null);


(lib.name = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.t2();
	this.instance.parent = this;
	this.instance.setTransform(14,-17);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.name, new cjs.Rectangle(14,-17,200,44), null);


(lib.logo_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(-75,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo_1, new cjs.Rectangle(-75,-75,150,150), null);


(lib.dbg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00A3D7").s().p("A7vVuMAAAgrbMA3fAAAMgFoArbg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.dbg, new cjs.Rectangle(-177.5,-139,355.1,278), null);


(lib.bgscale = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.zoom();
	this.instance.parent = this;
	this.instance.setTransform(-268,-269.3,0.536,0.536);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bgscale, new cjs.Rectangle(-268,-269.3,536,538.7), null);


(lib.txtin = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_28 = function() {
		var _this = this;
		
		this.stop();
		
		setTimeout(function(){
			_this.play();
		}, 2500);
	}
	this.frame_29 = function() {
		var _this = this;
		this.stop();
		this.parent.desc.gotoAndPlay(1);
		setTimeout(function(){
			_this.parent.desc.gotoAndPlay(17);
			_this.play();
		}, 3000);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(28).call(this.frame_28).wait(1).call(this.frame_29).wait(23));

	// title
	this.instance = new lib.title();
	this.instance.parent = this;
	this.instance.setTransform(-162.7,-87.9,0.861,0.861,0,0,0,-105.1,16.7);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({y:-12.9},19,cjs.Ease.get(1)).wait(1).to({x:-177.7,alpha:0},10,cjs.Ease.get(-1)).to({_off:true},1).wait(12));

	// name
	this.instance_1 = new lib.name();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-405.2,-81,0.859,0.86,0,0,0,-372.9,2.2);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(5).to({_off:false},0).to({y:-6},19,cjs.Ease.get(1)).wait(11).to({x:-420.2,alpha:0},10,cjs.Ease.get(-1)).to({_off:true},1).wait(6));

	// subtitle
	this.instance_2 = new lib.subtitle();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-396,-33.5,0.859,0.86,0,0,0,-370.1,21.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:41.5},19,cjs.Ease.get(1)).wait(22).to({x:-411,alpha:0},10,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-71.3,-64.2,167.5,19.8);


(lib.desc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_17 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(17).call(this.frame_17).wait(19));

	// Layer 1
	this.instance = new lib.txtinn();
	this.instance.parent = this;
	this.instance.setTransform(-30,0);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).to({x:0,alpha:1},14,cjs.Ease.get(1)).to({x:-30,alpha:0},14,cjs.Ease.get(-1)).to({_off:true},2).wait(3));

	// Layer 2
	this.instance_1 = new lib.dbg();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-17.9,-4.8);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:12.1,alpha:1},14,cjs.Ease.get(1)).wait(7).to({x:-17.9,alpha:0},14,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-195.4,-143.8,355.1,278);


(lib.bgin = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bgscale();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.93,scaleY:0.93,x:-16.6},199).to({scaleX:1,scaleY:1,x:0},200).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-268,-269.3,536,538.7);


(lib.bg = function(mode,startPosition,loop) {
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

	// Layer 1
	this.instance = new lib.bgin();
	this.instance.parent = this;
	this.instance.setTransform(30,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.27,scaleY:1.27,x:143.9,y:-24.5},9,cjs.Ease.get(-1)).to({regX:0.1,regY:-0.1,scaleX:1.56,scaleY:1.56,x:270.5,y:-51.8},10,cjs.Ease.get(1)).to({scaleX:1.28,scaleY:1.28,x:150.3,y:-26},10,cjs.Ease.get(-1)).to({regX:0,regY:0,scaleX:1,scaleY:1,x:30,y:0},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-238,-269.3,536,538.7);


// stage content:
(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var _this = this, view = document.getElementById('view');
		
		view.addEventListener('mouseover', function(){
			_this.bg.gotoAndPlay(1);
		});
		
		view.addEventListener('mouseout', function(){
			_this.bg.gotoAndPlay(20);
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// logo
	this.instance = new lib.logo_1();
	this.instance.parent = this;
	this.instance.setTransform(56.5,218,0.427,0.427);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// txt
	this.instance_1 = new lib.txtin();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-80.1,48.4,1,1,0,0,0,-175.9,5.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// desc
	this.desc = new lib.desc();
	this.desc.parent = this;
	this.desc.setTransform(153.6,131.6);

	this.timeline.addTween(cjs.Tween.get(this.desc).wait(1));

	// bg
	this.bg = new lib.bg();
	this.bg.parent = this;
	this.bg.setTransform(144,57.4);

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(206,-87,536,538.7);
// library properties:
lib.properties = {
	width: 600,
	height: 250,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;