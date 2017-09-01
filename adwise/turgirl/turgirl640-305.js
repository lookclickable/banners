(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.back = function() {
	this.initialize(img.back);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,445,333);


(lib.but = function() {
	this.initialize(img.but);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,256,93);


(lib.pla2 = function() {
	this.initialize(img.pla2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,251,88);


(lib.plaxa = function() {
	this.initialize(img.plaxa);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,240,305);


(lib.tek = function() {
	this.initialize(img.tek);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,224,59);// helper functions:

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


(lib.Symbol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.back();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol14, new cjs.Rectangle(0,0,445,333), null);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.but();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol13, new cjs.Rectangle(0,0,256,93), null);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.plaxa();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol10, new cjs.Rectangle(0,0,240,305), null);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,204,0)","#FFFF99","rgba(255,255,204,0)"],[0,0.459,1],-47.9,0,48,0).s().p("AnfLuIAA3bIO/AAIAAXbg");
	this.shape.setTransform(48,75);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(0,0,96,150), null);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Symbol13();
	this.instance.parent = this;
	this.instance.setTransform(128,46.5,1,1,0,0,0,128,46.5);
	this.instance.alpha = 0.078;
	this.instance.compositeOperation = "lighter";
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	// Layer 1
	this.instance_1 = new lib.but();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,256,93);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol11();
	this.instance.parent = this;
	this.instance.setTransform(128,46.5,1,1,0,0,0,128,46.5);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(0,0,256,93), null);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("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");
	mask.setTransform(110.5,25.7);

	// Layer 3
	this.instance = new lib.Symbol7();
	this.instance.parent = this;
	this.instance.setTransform(-67,19.1,1,1,30,0,0,48,75);
	this.instance.compositeOperation = "lighter";

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:319,y:29.1},39).wait(1));

	// Layer 1
	this.instance_1 = new lib.tek();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,224,59);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol14();
	this.instance.parent = this;
	this.instance.setTransform(222.5,166.5,1,1,0,0,0,222.5,166.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.1,scaleY:1.1,y:166.6},49,cjs.Ease.quadInOut).to({scaleX:1,scaleY:1,y:166.5},50,cjs.Ease.quadInOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,445,333);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol10();
	this.instance.parent = this;
	this.instance.setTransform(120,152.5,1,1,0,0,0,120,152.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:130},59,cjs.Ease.quadInOut).to({x:120},60,cjs.Ease.quadInOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,240,305);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol8();
	this.instance.parent = this;
	this.instance.setTransform(128,46.5,1,1,0,0,0,128,46.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:128.1,scaleX:0.92,scaleY:0.92,x:128.1},19,cjs.Ease.quadInOut).to({regX:128,scaleX:1,scaleY:1,x:128},20,cjs.Ease.quadInOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,256,93);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol5();
	this.instance.parent = this;
	this.instance.setTransform(126,43.5,1,1,0,0,0,112,29.5);

	this.instance_1 = new lib.pla2();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-132.1,-55.8,383.1,177.9), null);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(125.5,44,1,1,0,0,0,125.5,44);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:115.5},39,cjs.Ease.quadInOut).to({x:125.5},40,cjs.Ease.quadInOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-132.1,-55.8,383.1,177.9);


// stage content:
(lib.turgirl640305 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol9();
	this.instance.parent = this;
	this.instance.setTransform(429.5,58,1,1,0,0,0,59.5,33);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#09090A").s().p("AgMBLQgFgEAAgHQAAgJAFgEQAFgFAHABQAIgBAFAFQAFAEAAAJQAAAHgFAEQgFAFgIAAQgHAAgFgFgAgOAkQAAgMAEgKQACgGAGgIIAJgLIAIgMQACgEAAgFQAAgFgCgEQgCgDgEgDQgEgCgFgBQgHABgHAEQgFAEgBAJIgbAAQAAgLADgJQAEgJAGgGQAHgGAJgDQAIgDAKAAQAKAAAIADQAKACAGAGQAHAGAEAJQAEAIgBAMQAAAIgEAKIgNAPQgIAJgEAGQgFANAAAIg");
	this.shape.setTransform(585,187.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#09090A").s().p("AAaA2IAAg8QABgFgCgFQgBgEgDgDQgGgGgJAAQgIAAgGAGQgEADgBAFQgCAEAAAGIAAA7IgfAAIAAhIQAAgJgBgCQgCgDgHAAIAAgTIAMgBQAHgBAGABQAGABAEAEQAEAEAAAGQACgEAEgDQADgEAFgCQAIgDALAAQAKAAAJADQAHAEAGAGQAFAHACAIQACAJAAAKIAAA8g");
	this.shape_1.setTransform(572.3,189.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#09090A").s().p("AgPBNIAAhnIAfAAIAABngAgLgtQgGgFAAgIQAAgJAGgFQAFgEAHAAQAHAAAEAFQAGAFAAAIQAAAIgGAFQgEAEgHAAIgBAAQgHAAgEgEg");
	this.shape_2.setTransform(562.9,187.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#09090A").s().p("AgQA2QgJgCgGgDQgIgFgEgGQgEgHgBgKIAfAAQAAAGAGAEQAFACAGAAQAHAAAFgCQAGgEAAgGQAAgGgFgCQgDgBgHgCQgWgDgKgDQgIgEgEgEQgEgHAAgJQAAgIADgIQADgGAHgFQAGgDAIgDQAIgCAKAAQAJAAAIACQAJADAGADQAHAFADAGQAEAHgBAIIgdAAQAAgFgFgDQgEgDgHAAQgGAAgFADQgFADAAAFQAAAGAFACIALACIAQACQAKACAHADQAIADAEAGQAEAGAAAKQgBAJgEAHQgDAGgHAFQgHAEgJACQgIACgJAAQgJAAgIgCg");
	this.shape_3.setTransform(554.3,189.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#09090A").s().p("AgOBNIAAhnIAdAAIAABngAgMgtQgFgFAAgIQAAgJAFgFQAGgEAGAAQAHAAAGAFQAFAFAAAIQAAAIgFAFQgGAEgHAAIAAAAQgHAAgFgEg");
	this.shape_4.setTransform(545.8,187.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#09090A").s().p("AA6A3IAAg9QAAgKgEgHQgFgFgIgBQgJABgFAGQgDADgBAEQgCAEAAAGIAAA8IgdAAIAAg8QAAgMgFgGQgFgFgIgBQgJABgGAGQgDADgCAFQgBAEAAAFIAAA8IgfAAIAAhJQAAgJgBgCQgCgDgHAAIAAgSIAMgDQAHgBAFABQAHABADAEQAEAEAAAIQACgFAEgDQAEgDAFgCQAIgEALAAQAHAAAFACQAFAAAEADQADACADAEIAFAJQACgFAEgEQAEgDAFgDQAKgFALAAQALAAAIAEQAHADAEAHQAEAGACAJQABAIAAAKIAAA9g");
	this.shape_5.setTransform(532.6,189.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#09090A").s().p("AgiA3IAAhKQAAgIgCgCQgCgEgHABIAAgTIAMgCIANABQAGACAEAEQAEAEABAGIAEgIIAGgFQAIgFAKAAQAHAAAGACQAGACAEADIgHAaQgEgDgFgCIgKgBQgGAAgEACQgFACgDADQgCADgCAFQgCAEAAAGIAAA5g");
	this.shape_6.setTransform(512.8,189.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#09090A").s().p("AgPA0QgLgEgIgHQgIgIgFgKIgDgMIgBgMQAAgJAFgPQAEgKAIgHQAIgGAKgEQAJgDAKAAIAOABQAGABAFADQAFACAEADQAEADADAFQAGAIACALQACAMgEAMIhHAAQABAGACAFQACAEAEADQAFAEAOACQAJABAFgBQAPgCAKgEIAEAWQgKAEgKADQgLACgLAAIgDABQgKAAgKgEgAgLgbQgIAFgBAJIAtAAQABgFgCgDQgCgEgDgCQgGgEgKAAQgIAAgGAEg");
	this.shape_7.setTransform(501.3,189.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#09090A").s().p("AgCBDQgFgCgEgDQgEgEgDgFQgDgFgBgGQgBgHAAgIIAAgoIgVgCIAAgWIAXAAIADghIAYAAIAAAhIAjAAIAAAYIgjAAIAAAoQAAAIADAEQADAFAFACQAFABAGAAIAOgEIACAYQgOAEgMAAQgQgBgEgDg");
	this.shape_8.setTransform(490.3,188.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#09090A").s().p("AgQA2QgJgCgGgDQgIgFgEgGQgEgHgBgKIAfAAQAAAGAGAEQAFACAGAAQAHAAAFgCQAGgEAAgGQAAgGgFgCQgDgBgHgCQgWgDgKgDQgIgEgEgEQgEgHAAgJQAAgIADgIQADgGAHgFQAGgDAIgDQAIgCAKAAQAJAAAIACQAJADAGADQAHAFADAGQAEAHgBAIIgdAAQAAgFgFgDQgEgDgHAAQgGAAgFADQgFADAAAFQAAAGAFACIALACIAQACQAKACAHADQAIADAEAGQAEAGAAAKQgBAJgEAHQgDAGgHAFQgHAEgJACQgIACgJAAQgJAAgIgCg");
	this.shape_9.setTransform(479.8,189.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#09090A").s().p("AgOBNIAAhnIAdAAIAABngAgMgtQgFgFAAgIQAAgJAFgFQAGgEAHAAQAHAAAFAFQAFAFAAAIQAAAIgFAFQgFAEgHAAIgBAAQgHAAgFgEg");
	this.shape_10.setTransform(471.3,187.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#09090A").s().p("AAUBRIgYgtQgEACgFgBIgHAAIAAAsIgeAAIAAihIAeAAIAABeIAIAAQAIgBAGgDQAGgDADgFQADgEACgHQABgHAAgJIAdAAQABAJgBAIQgCAIgCAFQgDAGgFAGQgFAGgIADIAeAzIAAAEg");
	this.shape_11.setTransform(576.5,163);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#09090A").s().p("AgPA0QgLgEgIgHQgIgIgFgKIgDgMIgBgMQAAgJAFgPQAEgKAIgHQAIgGAKgEQAJgDAKAAIAOABQAGABAFADQAFACAEADQAEADADAFQAGAIACALQACAMgEAMIhHAAQABAGACAFQACAEAEADQAFAEAOACQAJABAFgBQAPgCAKgEIAEAWQgKAEgKADQgLACgLAAIgDABQgKAAgKgEgAgLgbQgIAFgBAJIAtAAQABgFgCgDQgCgEgDgCQgGgEgKAAQgIAAgGAEg");
	this.shape_12.setTransform(563.9,165.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#09090A").s().p("AA6A2IAAg8QAAgKgEgHQgFgFgIAAQgJAAgFAGQgDADgBAEQgCAEAAAFIAAA8IgdAAIAAg8QAAgLgFgGQgFgFgIAAQgJAAgGAGQgDADgCAEQgBAFAAAFIAAA7IgfAAIAAhIQAAgIgBgDQgCgDgHAAIAAgTIAMgCQAHgBAFABQAHACADADQAEAEAAAIQACgEAEgEQAEgDAFgCQAIgEALAAQAHAAAFABQAFACAEACQADACADAEIAFAIQACgEAEgEQAEgEAFgCQAKgFALAAQALAAAIAEQAHADAEAHQAEAGACAJQABAHAAALIAAA8g");
	this.shape_13.setTransform(547.7,165.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#09090A").s().p("AAaA2IAAg8QABgFgCgFQgBgEgDgDQgGgGgJAAQgIAAgGAGQgEADgBAFQgCAEAAAGIAAA7IgfAAIAAhIQAAgJgBgCQgCgDgHAAIAAgTIAMgBQAHgBAGABQAGABAEAEQAEAEAAAGQACgEAEgDQADgEAFgCQAIgDALAAQAKAAAJADQAHAEAGAGQAFAHACAIQACAJAAAKIAAA8g");
	this.shape_14.setTransform(531,165.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#09090A").s().p("AgPA0QgLgEgIgHQgIgIgFgKIgDgMIgBgMQAAgJAFgPQAEgKAIgHQAIgGAKgEQAJgDAKAAIAOABQAGABAFADQAFACAEADQAEADADAFQAGAIACALQACAMgEAMIhHAAQABAGACAFQACAEAEADQAFAEAOACQAJABAFgBQAPgCAKgEIAEAWQgKAEgKADQgLACgLAAIgDABQgKAAgKgEgAgLgbQgIAFgBAJIAtAAQABgFgCgDQgCgEgDgCQgGgEgKAAQgIAAgGAEg");
	this.shape_15.setTransform(518.4,165.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#09090A").s().p("AgiA3IAAhKQAAgIgCgCQgCgEgHABIAAgTIAMgCIANABQAGACAEAEQAEAEABAGIAEgIIAGgFQAIgFAKAAQAHAAAGACQAGACAEADIgHAaQgEgDgFgCIgKgBQgGAAgEACQgFACgDADQgCADgCAFQgCAEAAAGIAAA5g");
	this.shape_16.setTransform(507.6,165.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#09090A").s().p("AgLBrIgRgEQgIgDgIgEIAEgYQAKAFAKADQAMAEAIgBIAJgCQAEgCADgDQADgEACgFQACgFAAgHIAAgJIgPAFIgNACQgHAAgGgCQgGgCgFgDQgGgEgEgFIgHgLQgDgGgBgHQgCgIAAgHIABgOIAEgMIAGgKIAHgHQAIgHALgDQALgDALAAQAMAAAMADQAKACAMAFIAABmQAAAKgDAJQgCAIgFAHQgEAGgGAEQgGAFgHACQgHACgJABIgEAAIgLgBgAgGgfQgEACgEAEQgDADgCAGQgCAGAAAIQgBAJAEAHQAEAHAGADQAHADAHgBQAIgBAIgEIAAgzQgIgCgKAAQgFAAgFABgAgKhIQgHgDgGgEQgGgFgDgHQgEgHAAgJIAZAAQAAAHAFAEQAFADAGAAQAGAAAFgDQAFgEAAgHIAZAAQAAAJgDAHQgEAHgGAFQgGAEgHADQgIACgIAAQgGAAgIgCg");
	this.shape_17.setTransform(495.6,166.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#09090A").s().p("AgUBLQgKgEgIgGQgIgIgEgKIgEgLIgBgNQAAgJAFgPQAEgKAIgHQAIgHAKgDQAKgEAKAAQALAAAKAEQAKADAIAHQAIAHAEAKQAFAPAAAJQgHAggKAKQgIAGgKAEQgKAEgLAAQgKAAgKgEgAgJgDQgEACgEACIgGAJQgCAGAAAHQAAAHACAFQADAGADADQAEAEAEACQAFACAEAAQAFAAAEgCQAFgCADgEQAEgDACgGQADgFAAgHQAAgHgDgGQgCgFgEgEQgDgCgFgCQgEgCgFAAQgEAAgFACgAARg1QgFgEAAgGQAAgHAFgEQAEgEAHAAQAHAAAEAEQAFAEAAAHQAAAGgFAEQgEAEgHAAQgHAAgEgEgAglg1QgEgEAAgGQAAgHAEgEQAFgEAHAAQAHAAAEAEQAFAEAAAHQAAAGgFAEQgEAEgHAAQgHAAgFgEg");
	this.shape_18.setTransform(483.1,163.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#09090A").s().p("AgOA1IAAhpIAdAAIAABpg");
	this.shape_19.setTransform(617.6,141.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#09090A").s().p("AA6A2IAAg8QAAgLgEgFQgFgHgIAAQgJABgFAGQgDADgBAEQgCAEAAAGIAAA7IgdAAIAAg7QAAgMgFgFQgFgHgIAAQgJABgGAGQgDADgCAFQgBAEAAAFIAAA7IgfAAIAAhIQAAgIgBgDQgCgDgHAAIAAgSIAMgDQAHgBAFABQAHACADADQAEAFAAAHQACgFAEgDQAEgDAFgCQAIgEALAAQAHAAAFABQAFACAEACQADACADAEIAFAIQACgFAEgDQAEgDAFgDQAKgFALAAQALAAAIAEQAHADAEAHQAEAGACAJQABAIAAAKIAAA8g");
	this.shape_20.setTransform(604.5,141.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#09090A").s().p("AgOA1IAAhpIAdAAIAABpg");
	this.shape_21.setTransform(591.8,141.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#09090A").s().p("AgLBrIgRgEQgIgDgIgEIAEgYQAKAFAKADQAMAEAIgBIAJgCQAEgCADgDQADgEACgFQACgFAAgHIAAgJIgPAFIgNACQgHAAgGgCQgGgCgFgDQgGgEgEgFIgHgLQgDgGgBgHQgCgIAAgHIABgOIAEgMIAGgKIAHgHQAIgHALgDQALgDALAAQAMAAAMADQAKACAMAFIAABmQAAAKgDAJQgCAIgFAHQgEAGgGAEQgGAFgHACQgHACgJABIgEAAIgLgBgAgGgfQgEACgEAEQgDADgCAGQgCAGAAAIQgBAJAEAHQAEAHAGADQAHADAHgBQAIgBAIgEIAAgzQgIgCgKAAQgFAAgFABgAgKhIQgHgDgGgEQgGgFgDgHQgEgHAAgJIAZAAQAAAHAFAEQAFADAGAAQAGAAAFgDQAFgEAAgHIAZAAQAAAJgDAHQgEAHgGAFQgGAEgHADQgIACgIAAQgGAAgIgCg");
	this.shape_22.setTransform(582.2,142.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#09090A").s().p("AgOA1IAAhpIAdAAIAABpg");
	this.shape_23.setTransform(573.1,141.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#09090A").s().p("AgdBOQgJgFgGgIQgHgHgCgKQgEgLAAgLQAAgHACgIQACgHADgFQADgGAEgEQAFgFAFgEQAFgDAGgCIANgDQAGAAAGABQAHACAHADIAAg7IAfAAIAAB9IAAAMQACAEAIgBIAAAUQgQADgHgCQgFgBgDgEQgEgEAAgHIAAgDQgCAFgDAEIgIAHQgIAFgKAAIgCAAQgKAAgJgEgAgMAAQgHADgDAHQgFAHABAJQAAAGABAFIAEAJQADAEAEACQAFADAGAAQAEAAAEgCQAEgCADgEQADgDABgEQACgFAAgFIAAgbQgIgEgIAAIgDgBQgGAAgFACg");
	this.shape_24.setTransform(563.5,139.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#09090A").s().p("AAaA2IAAg8QABgFgCgFQgBgEgDgDQgGgGgJAAQgIAAgGAGQgEADgBAFQgCAEAAAGIAAA7IgfAAIAAhIQAAgJgBgCQgCgDgHAAIAAgTIAMgBQAHgBAGABQAGABAEAEQAEAEAAAGQACgEAEgDQADgEAFgCQAIgDALAAQAKAAAJADQAHAEAGAGQAFAHACAIQACAJAAAKIAAA8g");
	this.shape_25.setTransform(549.9,141.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#09090A").s().p("AgdA1QgHgCgFgFQgGgEgDgGQgDgGAAgIQgBgJADgIQADgGAGgFQAGgFAHgCQAIgCAJAAQAIAAAGABQAIACAFAEIAAgIQAAgEgDgEQgCgCgEgCQgGgDgKAAIgQABQgJACgGAEIgEgXQAIgDALgCQAKgCALAAQAKAAAIABQAKADAHAEQAHAFADAHQAFAIAAALIAAAlQAAAJABACQACADAGAAIABARQgRADgGgCQgFgCgDgEQgDgEAAgHQgCAFgFADQgDAEgGACQgIAEgMAAQgHAAgHgCgAgTAIQgFAFABAHQAAAGAFADQAEACAFAAQAJAAAGgDIAGgGQACgDAAgEIAAgFQgEgDgGgCQgFgBgGAAQgHAAgFAEg");
	this.shape_26.setTransform(537.4,141.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#09090A").s().p("AgsA1IAAgEIAuhLIgrAAIAAgaIBWAAIAAADIgtBMIAtAAIAAAag");
	this.shape_27.setTransform(525.9,141.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#09090A").s().p("AgdA1QgHgCgFgFQgGgEgDgGQgDgGAAgIQgBgJADgIQADgGAGgFQAGgFAHgCQAIgCAJAAQAIAAAGABQAIACAFAEIAAgIQAAgEgDgEQgCgCgEgCQgGgDgKAAIgQABQgJACgGAEIgEgXQAIgDALgCQAKgCALAAQAKAAAIABQAKADAHAEQAHAFADAHQAFAIAAALIAAAlQAAAJABACQACADAGAAIABARQgRADgGgCQgFgCgDgEQgDgEAAgHQgCAFgFADQgDAEgGACQgIAEgMAAQgHAAgHgCgAgTAIQgFAFABAHQAAAGAFADQAEACAFAAQAJAAAGgDIAGgGQACgDAAgEIAAgFQgEgDgGgCQgFgBgGAAQgHAAgFAEg");
	this.shape_28.setTransform(514.7,141.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#09090A").s().p("AAUBQIgYgsQgEACgFAAIgHAAIAAAqIgeAAIAAigIAeAAIAABeIAIAAQAIAAAGgDQAGgDADgGQADgEACgIQABgGAAgIIAdAAQABAIgBAHQgCAIgCAGQgDAGgFAGQgFAFgIAEIAeAzIAAADg");
	this.shape_29.setTransform(502.9,139);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#09090A").s().p("AAEBRQgJAAgGgFQgHgFgEgIQgDgJAAgPIAAh3IAdAAIAAB3IABAKQABAEADACQAFADALgBIABAXQgJABgHAAIgGAAg");
	this.shape_30.setTransform(488.2,139);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#09090A").s().p("AgOA1IAAhpIAdAAIAABpg");
	this.shape_31.setTransform(481.2,141.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#09090A").s().p("AgQA2QgJgCgGgDQgIgEgEgHQgEgHgBgLIAfAAQAAAHAGADQAFAEAGgBQAHAAAFgDQAGgDAAgGQAAgGgFgCQgDgBgHgCQgWgCgKgFQgIgDgEgFQgEgGAAgJQAAgJADgGQADgHAHgEQAGgEAIgDQAIgCAKAAQAJAAAIACQAJADAGAEQAHAEADAGQAEAHgBAIIgdAAQAAgFgFgDQgEgDgHAAQgGAAgFADQgFADAAAFQAAAFAFADIALACIAQADQAKABAHADQAIADAEAFQAEAHAAAKQgBAJgEAHQgDAGgHAFQgHAEgJACQgIACgJAAQgJAAgIgCg");
	this.shape_32.setTransform(472.7,141.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#09090A").s().p("AgdA1QgHgCgFgFQgGgEgDgGQgDgGAAgIQgBgJADgIQADgGAGgFQAGgFAHgCQAIgCAJAAQAIAAAGABQAIACAFAEIAAgIQAAgEgDgEQgCgCgEgCQgGgDgKAAIgQABQgJACgGAEIgEgXQAIgDALgCQAKgCALAAQAKAAAIABQAKADAHAEQAHAFADAHQAFAIAAALIAAAlQAAAJABACQACADAGAAIABARQgRADgGgCQgFgCgDgEQgDgEAAgHQgCAFgFADQgDAEgGACQgIAEgMAAQgHAAgHgCgAgTAIQgFAFABAHQAAAGAFADQAEACAFAAQAJAAAGgDIAGgGQACgDAAgEIAAgFQgEgDgGgCQgFgBgGAAQgHAAgFAEg");
	this.shape_33.setTransform(461,141.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#09090A").s().p("AA3BOIhWhYIAABXIghAAIAAiZIAKAAIBWBWIAAhWIAhAAIAACag");
	this.shape_34.setTransform(446.7,139.3);

	this.instance_1 = new lib.Symbol2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(502,250.5,1,1,0,0,0,128,46.5);

	this.instance_2 = new lib.Symbol3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(514,152.5,1.058,1,0,0,0,120,152.5);

	this.instance_3 = new lib.Symbol4();
	this.instance_3.parent = this;
	this.instance_3.setTransform(222.5,152.5,1,1,0,0,0,222.5,166.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(320,121.7,641,349.9);
// library properties:
lib.properties = {
	id: 'FF8B42BA31B34FEE8A67B83926CA925D',
	width: 640,
	height: 305,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/back.jpg?1504251833874", id:"back"},
		{src:"images/but.png?1504251833874", id:"but"},
		{src:"images/pla2.png?1504251833874", id:"pla2"},
		{src:"images/plaxa.png?1504251833874", id:"plaxa"},
		{src:"images/tek.png?1504251833874", id:"tek"}
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
an.compositions['FF8B42BA31B34FEE8A67B83926CA925D'] = {
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