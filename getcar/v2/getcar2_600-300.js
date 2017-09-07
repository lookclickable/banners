(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 600,
	height: 300,
	fps: 24,
	color: "#000000",
	manifest: [
		{src:"images/back.jpg?1504785155439", id:"back"},
		{src:"images/body.png?1504785155439", id:"body"},
		{src:"images/car.png?1504785155439", id:"car"},
		{src:"images/cursy.png?1504785155439", id:"cursy"},
		{src:"images/fing.png?1504785155439", id:"fing"},
		{src:"images/fing2.png?1504785155439", id:"fing2"},
		{src:"images/foot.png?1504785155439", id:"foot"},
		{src:"images/foot2.png?1504785155439", id:"foot2"},
		{src:"images/hand.png?1504785155439", id:"hand"},
		{src:"images/hand2.png?1504785155439", id:"hand2"},
		{src:"images/handcurs.png?1504785155439", id:"handcurs"},
		{src:"images/head.png?1504785155439", id:"head"},
		{src:"images/leg1.png?1504785155439", id:"leg1"},
		{src:"images/leg2.png?1504785155439", id:"leg2"},
		{src:"images/round.png?1504785155439", id:"round"},
		{src:"images/shold1.png?1504785155439", id:"shold1"},
		{src:"images/shold2.png?1504785155439", id:"shold2"},
		{src:"images/taz.png?1504785155439", id:"taz"}
	]
};



// symbols:



(lib.back = function() {
	this.initialize(img.back);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,800,532);


(lib.body = function() {
	this.initialize(img.body);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,93,127);


(lib.car = function() {
	this.initialize(img.car);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,355,219);


(lib.cursy = function() {
	this.initialize(img.cursy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,29,39);


(lib.fing = function() {
	this.initialize(img.fing);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,48,43);


(lib.fing2 = function() {
	this.initialize(img.fing2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,36,36);


(lib.foot = function() {
	this.initialize(img.foot);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,60,162);


(lib.foot2 = function() {
	this.initialize(img.foot2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,71,156);


(lib.hand = function() {
	this.initialize(img.hand);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,32,71);


(lib.hand2 = function() {
	this.initialize(img.hand2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,37,74);


(lib.handcurs = function() {
	this.initialize(img.handcurs);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,92,87);


(lib.head = function() {
	this.initialize(img.head);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,76,85);


(lib.leg1 = function() {
	this.initialize(img.leg1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,51,119);


(lib.leg2 = function() {
	this.initialize(img.leg2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,75,105);


(lib.round = function() {
	this.initialize(img.round);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,63,63);


(lib.shold1 = function() {
	this.initialize(img.shold1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,67,79);


(lib.shold2 = function() {
	this.initialize(img.shold2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,50,89);


(lib.taz = function() {
	this.initialize(img.taz);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,95,81);


(lib.Символ49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("Ag5BvQgNgEgMgJIAYgqQAHAGAGADQAGADAGAAQAHAAAEgDQAFgDACgGIhYirIA+AAIAmBSIAKAfIABAAIAJgeIAchTIA7AAIhECpQgMAcgLANQgIAKgJAFQgMAGgOAAQgOAAgNgFg");
	this.shape.setTransform(343.9,15.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AAgByIgvhdIgWAAIAABdIg4AAIAAjjIA4AAIAABYIAWAAIAuhYIA8AAIg+BtIAAABIBCB1g");
	this.shape_1.setTransform(324.1,15.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AiMByIAAjjIA4AAIAACzIA6AAIAAizIA1AAIAACzIA7AAIAAizIA3AAIAADjg");
	this.shape_2.setTransform(295.7,15.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("ABDByIAAjjIA4AAIAADjgAh6ByIAAjjIA3AAIAABHIAkAAQARAAANAFQAMAGAKALQAKALAGAMQAFAPAAARQAAARgFAOQgGAPgKALQgUAWggAAgAhDBCIAaAAQANAAAHgIQAIgJAAgOQAAgOgIgJQgDgEgGgCQgFgCgHAAIgZAAg");
	this.shape_3.setTransform(264.3,15.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AhiBAQAPgCAJgIQAFgFAEgIQAEgIADgMQADgMABgNIACgjIAAhLICXAAIAADiIg4AAIAAizIgrAAIAAAcQgBAygEATQgEAPgEAMQgFANgGAIQgGAKgIAGQgHAIgKAEQgJAEgLADQgLACgMAAg");
	this.shape_4.setTransform(237.2,15.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AAxByIgOgwIhFAAIgOAwIg6AAIBOjjIA5AAIBODjgAAWAVIgNgrIgJgnIAAAAIgIAnIgNArIArAAg");
	this.shape_5.setTransform(216.1,15.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("ABEByIgHhnQgBgLABgUIAAgGIgBAAIgMAlIgYBCIguAAIgYhCIgNglIgBAAQACAVgCAQIgHBnIg4AAIATjjIA8AAIAiBhIAKAjIAAAAIALgjIAihhIA9AAIASDjg");
	this.shape_6.setTransform(191.5,15.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0000").s().p("AAoByIAAhrIADglIgBAAQgKAZgJAMIg+BrIg4AAIAAjjIA4AAIAABrIgDAlIABAAQAKgZAJgMIA9hrIA5AAIAADjg");
	this.shape_7.setTransform(157.5,15.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF0000").s().p("AhTByIAAjjIBdAAQAhAAAVAWQAKALAFAOQAFAOAAASQAAARgFAOQgFANgKALQgVAWghAAIglAAIAABHgAgbgDIAbAAQAFAAAGgCQAFgCAEgFQAHgIAAgOQAAgPgHgIQgHgIgNAAIgbAAg");
	this.shape_8.setTransform(136.3,15.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF0000").s().p("AgaByIAAizIhGAAIAAgwIDBAAIAAAwIhGAAIAACzg");
	this.shape_9.setTransform(115.3,15.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF0000").s().p("AgXBzQgMgCgLgEQgKgEgKgHQgKgGgIgJQgJgIgGgKQgHgKgEgKQgEgLgCgMQgCgLAAgLQAAgMACgMQACgLAEgLQAEgKAHgJQAGgKAJgIQAIgJAKgGQAKgGAKgEQALgFAMgCQAMgCALAAQAzAAAiAiQAIAIAHAKQAGAJAFAKQAEALACALQACAMAAAMQAAALgCALQgCAMgEALQgFAKgGAKQgHAKgIAIQgJAJgJAGQgKAHgKAEQgLAEgMACQgMADgMAAQgLAAgMgDgAgXg9QgKAFgJAJQgJAKgFALQgEAMAAAOQAAANAEAMQAFAMAJAKQAJAKAKAFQALAEAMAAQAMAAALgEQAMgFAIgKQAJgKAFgMQAEgMAAgNQAAgOgEgMQgFgLgJgKQgJgJgLgFQgLgFgMAAQgLAAgMAFg");
	this.shape_10.setTransform(92.1,15.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF0000").s().p("ABEByIgHhnQgBgLABgUIAAgGIgBAAIgMAlIgYBCIguAAIgYhCIgNglIgBAAQACAVgCAQIgHBnIg4AAIATjjIA8AAIAiBhIAKAjIAAAAIALgjIAihhIA9AAIASDjg");
	this.shape_11.setTransform(65,15.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF0000").s().p("AgLBzQgMgCgKgEQgMgEgJgGQgKgGgIgJQghghABgzQAAgMACgLQACgMAEgKQAEgLAHgJQAFgKAJgIQAigiAyAAQAMAAAMACQAMACALAEQAMAEAJAGQAKAGAIAIIgaArQgMgLgPgGQgPgHgPAAQgQAAgKAFQgNAFgHAKQgRASAAAcQAAAMAFAMQAEAMAIAKQAIAKAMAFQALAFAPAAQARAAAPgHQAPgHAOgOIAcApQglAng3AAQgNAAgLgDg");
	this.shape_12.setTransform(40,15.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF0000").s().p("AgXBzQgMgCgLgEQgKgEgKgHQgKgGgIgJQgJgIgGgKQgHgKgEgKQgEgLgCgMQgCgLAAgLQAAgMACgMQACgLAEgLQAEgKAHgJQAGgKAJgIQAIgJAKgGQAKgGAKgEQALgFAMgCQAMgCALAAQAzAAAiAiQAIAIAHAKQAGAJAFAKQAEALACALQACAMAAAMQAAALgCALQgCAMgEALQgFAKgGAKQgHAKgIAIQgJAJgJAGQgKAHgKAEQgLAEgMACQgMADgMAAQgLAAgMgDgAgXg9QgKAFgJAJQgJAKgFALQgEAMAAAOQAAANAEAMQAFAMAJAKQAJAKAKAFQALAEAMAAQAMAAALgEQAMgFAIgKQAJgKAFgMQAEgMAAgNQAAgOgEgMQgFgLgJgKQgJgJgLgFQgLgFgMAAQgLAAgMAFg");
	this.shape_13.setTransform(15.1,15.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,356.2,36);


(lib.Символ48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.car();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,355,219);


(lib.Символ47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.back();
	this.instance.setTransform(0,0,0.85,0.85);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,679.7,452);


(lib.Символ44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjhDiQhdhegBiEQABiDBdheQBehdCDgBQCEABBeBdQBeBegBCDQABCEheBeQheBeiEgBQiDABheheg");
	this.shape.setTransform(32,32);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,64,64);


(lib.Символ43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AjfBwIDfjfIDgDfg");
	this.shape.setTransform(22.4,11.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,44.9,22.4);


(lib.Символ40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AFfEcQgTgDgdgXQg8gxgWgPQgvgho4gOIo9gNQgJgFhGAvQg7AngLgZQgKgagogXIg7gjQgUgMA9hBQA9g/CEg0IBTgcQAlgNAJgMQAUgZB/g+QA/gfA8gbQEaBeMzANQCjADFogBQCjgBAkAEIAAASQgJAQgNAfIgxBrQhICUgvgTQgvgSk7BWQk+BYgJAAIgBgBg");
	this.shape.setTransform(125.2,28.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2,0,246.3,57);


(lib.Символ39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.handcurs();
	this.instance.setTransform(22,105.9,1,0.977,0,165,-15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,110.9,105.9);


(lib.Символ38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.handcurs();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,92,87);


(lib.Символ37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.handcurs();
	this.instance.setTransform(96,0,1.043,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,96,87);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("A7QZ8MAAAgz3MA2hAAAMAAAAz3g");
	this.shape.setTransform(174.5,166);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgaByIAAizIhGAAIAAgwIDBAAIAAAwIhGAAIAACzg");
	this.shape.setTransform(271.3,15.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AgXBzQgMgCgLgEQgKgEgKgHQgKgGgIgJQgJgIgGgKQgHgKgEgKQgEgLgCgMQgCgLAAgLQAAgMACgMQACgLAEgLQAEgKAHgJQAGgKAJgIQAIgJAKgGQAKgGAKgEQALgFAMgCQAMgCALAAQAzAAAiAiQAIAIAHAKQAGAJAFAKQAEALACALQACAMAAAMQAAALgCALQgCAMgEALQgFAKgGAKQgHAKgIAIQgJAJgJAGQgKAHgKAEQgLAEgMACQgMADgMAAQgLAAgMgDgAgXg9QgKAFgJAJQgJAKgFALQgEAMAAAOQAAANAEAMQAFAMAJAKQAJAKAKAFQALAEAMAAQAMAAALgEQAMgFAIgKQAJgKAFgMQAEgMAAgNQAAgOgEgMQgFgLgJgKQgJgJgLgFQgLgFgMAAQgLAAgMAFg");
	this.shape_1.setTransform(248,15.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AAoByIAAizIhPAAIAACzIg4AAIAAjjIC/AAIAADjg");
	this.shape_2.setTransform(222.9,15.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AAxByIgOgwIhFAAIgOAwIg6AAIBOjjIA5AAIBODjgAAWAVIgNgrIgJgnIAAAAIgIAnIgNArIArAAg");
	this.shape_3.setTransform(200.2,15.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AAgByIgvhdIgWAAIAABdIg5AAIAAjjIA5AAIAABYIAWAAIAuhYIA8AAIg+BtIAAABIBBB1g");
	this.shape_4.setTransform(179.9,15.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AhTByIAAjjIA4AAIAABHIAlAAQAQAAAOAFQANAGALALQAKALAFAMQAFAPAAARQAAARgFAOQgFAPgKALQgVAWghAAgAgbBCIAbAAQANAAAHgIQAHgJAAgOQAAgOgHgJQgEgEgFgCQgGgCgFAAIgbAAg");
	this.shape_5.setTransform(150.9,15.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("AgaByIAAizIhGAAIAAgwIDBAAIAAAwIhFAAIAACzg");
	this.shape_6.setTransform(129.9,15.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0000").s().p("ABDByIAAjjIA4AAIAADjgAh6ByIAAjjIA3AAIAABHIAkAAQARAAANAFQAMAGAKALQAKALAGAMQAFAPAAARQAAARgFAOQgGAPgKALQgVAWgfAAgAhDBCIAaAAQANAAAHgIQAIgJAAgOQAAgOgIgJQgEgEgFgCQgFgCgHAAIgZAAg");
	this.shape_7.setTransform(104.9,15.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF0000").s().p("AhTByIAAjjIBdAAQAhAAAVAWQAKALAFAOQAFAOAAASQAAARgFAOQgFANgKALQgVAWghAAIglAAIAABHgAgbgDIAbAAQAFAAAGgCQAFgCAEgFQAHgIAAgOQAAgPgHgIQgHgIgNAAIgbAAg");
	this.shape_8.setTransform(81,15.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF0000").s().p("AAgByIgvhdIgWAAIAABdIg4AAIAAjjIA4AAIAABYIAWAAIAuhYIA8AAIg+BtIAAABIBCB1g");
	this.shape_9.setTransform(60.4,15.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF0000").s().p("AgbByIAAizIhFAAIAAgwIDBAAIAAAwIhGAAIAACzg");
	this.shape_10.setTransform(38.4,15.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF0000").s().p("AgXBzQgMgCgLgEQgKgEgKgHQgKgGgIgJQgJgIgGgKQgHgKgEgKQgEgLgCgMQgCgLAAgLQAAgMACgMQACgLAEgLQAEgKAHgJQAGgKAJgIQAIgJAKgGQAKgGAKgEQALgFAMgCQAMgCALAAQAzAAAiAiQAIAIAHAKQAGAJAFAKQAEALACALQACAMAAAMQAAALgCALQgCAMgEALQgFAKgGAKQgHAKgIAIQgJAJgJAGQgKAHgKAEQgLAEgMACQgMADgMAAQgLAAgMgDgAgXg9QgKAFgJAJQgJAKgFALQgEAMAAAOQAAANAEAMQAFAMAJAKQAJAKAKAFQALAEAMAAQAMAAALgEQAMgFAIgKQAJgKAFgMQAEgMAAgNQAAgOgEgMQgFgLgJgKQgJgJgLgFQgLgFgMAAQgLAAgMAFg");
	this.shape_11.setTransform(15.1,15.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,283.6,36);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("ABDByIAAjjIA5AAIAADjgAh7ByIAAjjIA4AAIAABHIAkAAQARAAAOAFQALAGAKALQALALAEAMQAGAPAAARQAAARgGAOQgEAPgLALQgVAWgfAAgAhDBCIAaAAQANAAAHgIQAIgJAAgOQAAgOgIgJQgDgEgGgCQgFgCgHAAIgZAAg");
	this.shape.setTransform(287.5,15.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AhTByIAAjjIBdAAQAhAAAVAWQAKALAFAOQAFAOAAASQAAARgFAOQgFANgKALQgVAWghAAIglAAIAABHgAgbgDIAbAAQAFAAAGgCQAFgCAEgFQAHgIAAgOQAAgPgHgIQgHgIgNAAIgbAAg");
	this.shape_1.setTransform(263.5,15.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AAxByIgOgwIhFAAIgOAwIg6AAIBOjjIA5AAIBODjgAAWAVIgNgrIgJgnIAAAAIgIAnIgNArIArAAg");
	this.shape_2.setTransform(242.1,15.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AgbB6IAAgeIgVgBQgKgCgKgDQgJgEgIgFQgIgFgIgHQgGgHgGgIQgFgHgEgJQgDgJgCgJIgCgSIACgUQACgJADgJIAJgQQAGgHAGgHQAdgbAtAAIAAgXIA2AAIAAAXQAuAAAdAbQAHAHAFAHQAFAHADAJQAEAJACAJIACAUIgCASQgCAJgEAJQgDAJgFAHQgFAIgHAHQgIAHgIAFQgIAFgJAEQgKADgKACIgWABIAAAegAAbAuQAKAAAIgEQAJgDAGgIQAGgIADgIQAEgJAAgIQAAgKgEgJQgDgJgGgGQgHgIgIgDQgIgEgKAAgAgtgvQgHADgHAIQgGAGgDAJQgEAJAAAKQAAAIAEAJQADAIAGAIQAHAIAHADQAJAEAJAAIAAhhQgJAAgJAEg");
	this.shape_3.setTransform(217.7,15);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AhTByIAAjjIA4AAIAABHIAlAAQAQAAAOAFQANAGALALQAKALAFAMQAFAPAAARQAAARgFAOQgFAPgKALQgVAWghAAgAgbBCIAbAAQANAAAHgIQAHgJAAgOQAAgOgHgJQgEgEgFgCQgGgCgFAAIgbAAg");
	this.shape_4.setTransform(186.7,15.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AgbByIAAizIhFAAIAAgwIDBAAIAAAwIhFAAIAACzg");
	this.shape_5.setTransform(165.7,15.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("AAoByIAAhrIADglIgBAAQgKAZgJAMIg+BrIg4AAIAAjjIA4AAIAABrIgDAlIABAAQAKgZAJgMIA9hrIA5AAIAADjg");
	this.shape_6.setTransform(143.5,15.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0000").s().p("AhTByIAAjjIBdAAQAhAAAVAWQAKALAFAOQAFAOAAASQAAARgFAOQgFANgKALQgVAWghAAIglAAIAABHgAgbgDIAbAAQAFAAAGgCQAFgCAEgFQAHgIAAgOQAAgPgHgIQgHgIgNAAIgbAAg");
	this.shape_7.setTransform(122.3,15.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF0000").s().p("AhIByIAAjjICNAAIAAAwIhWAAIAAAqIBEAAIAAAuIhEAAIAAArIBaAAIAAAwg");
	this.shape_8.setTransform(102.8,15.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF0000").s().p("AhUByIAAjjIBUAAQAQAAAOAEQAOAEAKAHQALAIAGALQAFAMAAAOQAAAPgHANQgIANgLAHIAAABQAIADAHADQAHAFAFAHQAEAHACAIQACAIAAAJQAAARgGANQgGANgMAIQgMAIgQAFQgQAEgRAAgAgcBCIAfAAQAMAAAGgHQAHgHAAgKQAAgLgGgGQgGgHgMAAIggAAgAgcgYIAcAAQAJAAAFgGQAFgGAAgJQAAgJgFgGQgGgFgIAAIgcAAg");
	this.shape_9.setTransform(83.3,15.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF0000").s().p("AgXBzQgMgCgLgEQgKgEgKgHQgKgGgIgJQgJgIgGgKQgHgKgEgKQgEgLgCgMQgCgLAAgLQAAgMACgMQACgLAEgLQAEgKAHgJQAGgKAJgIQAIgJAKgGQAKgGAKgEQALgFAMgCQAMgCALAAQAzAAAiAiQAIAIAHAKQAGAJAFAKQAEALACALQACAMAAAMQAAALgCALQgCAMgEALQgFAKgGAKQgHAKgIAIQgJAJgJAGQgKAHgKAEQgLAEgMACQgMADgMAAQgLAAgMgDgAgXg9QgKAFgJAJQgJAKgFALQgEAMAAAOQAAANAEAMQAFAMAJAKQAJAKAKAFQALAEAMAAQAMAAALgEQAMgFAIgKQAJgKAFgMQAEgMAAgNQAAgOgEgMQgFgLgJgKQgJgJgLgFQgLgFgMAAQgLAAgMAFg");
	this.shape_10.setTransform(59.2,15.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF0000").s().p("AhTByIAAjjIBdAAQAhAAAVAWQAKALAFAOQAFAOAAASQAAARgFAOQgFANgKALQgVAWghAAIglAAIAABHgAgbgDIAbAAQAFAAAGgCQAFgCAEgFQAHgIAAgOQAAgPgHgIQgHgIgNAAIgbAAg");
	this.shape_11.setTransform(37,15.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF0000").s().p("AAoByIAAizIhPAAIAACzIg4AAIAAjjIC/AAIAADjg");
	this.shape_12.setTransform(14.1,15.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,304.5,36);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.body();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,93,127);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.foot();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,60,162);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.foot2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,71,156);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.head();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,76,85);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.leg1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,51,119);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.leg2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,75,105);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.taz();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,95,81);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.fing();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,48,43);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hand();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,32,71);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shold1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,67,79);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.fing2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,36,36);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hand2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,37,74);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shold2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,50,89);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.cursy();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,29,39);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.round();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,63,63);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgvAAFOIAAqcMBeBAAAIAAKcg");
	this.shape.setTransform(301,33.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,602,67);


(lib.Символ46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ44();
	this.instance.setTransform(32,32,1,1,0,0,0,32,32);
	this.instance.alpha = 0.09;
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,64,64);


(lib.Символ45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 46
	this.instance = new lib.Символ46();
	this.instance.setTransform(79.5,32,1,1,0,0,0,32,32);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.219},19).to({alpha:1},20).wait(1));

	// Символ 46
	this.instance_1 = new lib.Символ46();
	this.instance_1.setTransform(26,32,1,1,0,0,0,32,32);
	this.instance_1.alpha = 0.219;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:1},19).to({alpha:0.219},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6,0,117.5,64);


(lib.Символ42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 43
	this.instance = new lib.Символ43();
	this.instance.setTransform(29.8,64.2,1,1,0,0,0,22.4,11.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:54.2},9).to({y:64.2},10).wait(1));

	// Символ 43
	this.instance_1 = new lib.Символ43();
	this.instance_1.setTransform(29.8,35.2,1,1,0,0,0,22.4,11.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:38.2},3).wait(1).to({y:28.2},9).to({y:34.2},6).wait(1));

	// Символ 43
	this.instance_2 = new lib.Символ43();
	this.instance_2.setTransform(29.8,4.2,1,1,0,0,0,22.4,11.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:11.2},7).wait(1).to({y:1.2},9).to({y:3.2},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(7.4,-7,44.9,82.4);


(lib.Символ41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ42();
	this.instance.setTransform(108.1,-33.2,0.733,0.733,0,0,0,22.4,11.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ40();
	this.instance_1.setTransform(121.2,28.5,1,1,0,0,0,123.2,28.5);
	this.instance_1.alpha = 0.309;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-46.5,246.3,103.6);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ49();
	this.instance.setTransform(178.1,18,1,1,0,0,0,178.1,18);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.82},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,356.2,36);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ16();
	this.instance.setTransform(14.5,19.5,1,1,0,0,0,14.5,19.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,29,39);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ15();
	this.instance.setTransform(-3.4,20.1,1,1,0,0,0,14.5,19.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({guide:{path:[-3.2,20,-2.7,26.9,2.3,31.9,7.9,37.5,15.6,37.5,23.4,37.5,28.9,31.9,34.5,26.3,34.5,18.6,34.5,18.4,34.5,18.2]}},14).to({guide:{path:[34.5,17.9,34.3,10.4,28.9,5.2,23.3,-0.4,15.6,-0.4,7.8,-0.4,2.2,5.2,-2.4,9.7,-3.2,16]}},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.9,0.6,29,39);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ14();
	this.instance.setTransform(31.5,31.5,1,1,0,0,0,31.5,31.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.06,scaleY:1.06},7,cjs.Ease.get(-1)).to({scaleX:1.13,scaleY:1.13},7,cjs.Ease.get(1)).to({scaleX:1.06,scaleY:1.06,x:31.6,y:31.6},10,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,x:31.5,y:31.5},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,63,63);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_14 = function() {
		this.stop();
	}
	this.frame_29 = function() {
		this.stop();
	}
	this.frame_44 = function() {
		this.stop();
	}
	this.frame_59 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14).wait(15).call(this.frame_29).wait(15).call(this.frame_44).wait(15).call(this.frame_59).wait(1));

	// fara
	this.instance = new lib.Символ31();
	this.instance.setTransform(152.2,28,1,1,0,0,0,152.2,18);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(30).to({_off:false},0).to({y:18,alpha:1},14).to({y:8,alpha:0},15).wait(1));

	// kapot
	this.instance_1 = new lib.Символ32();
	this.instance_1.setTransform(141.8,28,1,1,0,0,0,141.8,18);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:18,alpha:1},14).to({y:8,alpha:0},15).to({_off:true},1).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,10,283.6,36);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ9();
	this.instance.setTransform(300.9,33.5,1,1,0,0,0,300.9,33.5);
	this.instance.alpha = 0.672;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,602,67);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ47();
	this.instance.setTransform(339.9,226,1,1,0,0,0,339.9,226);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:349.8},39,cjs.Ease.get(-1)).to({x:359.9},40,cjs.Ease.get(1)).to({x:349.9},40,cjs.Ease.get(-1)).to({x:339.9},40,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,679.7,452);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ39();
	this.instance.setTransform(55.4,53,1,1,0,0,0,55.4,53);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,rotation:-9.8,x:62.8,y:21.7},10,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:-18.7,x:69.5,y:-6.6},9,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,rotation:-9.3,x:62.5,y:23.2},10,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:0,x:55.4,y:53},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,110.9,105.9);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 38
	this.instance = new lib.Символ38();
	this.instance.setTransform(46,43.5,1,1,0,0,0,46,43.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,rotation:-9.6,y:47.5},7,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:-19.5,y:51.5},7,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,rotation:-10.3,x:46.1,y:47.8},7,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:0,x:46,y:43.5},8,cjs.Ease.get(1)).wait(1));

	// Символ 37
	this.instance_1 = new lib.Символ37();
	this.instance_1.setTransform(178,43.5,1,1,0,0,0,48,43.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:48.1,scaleX:1,scaleY:1,rotation:14.8,x:173.1,y:48.6},7,cjs.Ease.get(-1)).to({regX:48,scaleX:1,scaleY:1,rotation:30,x:168,y:53.5},7,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,rotation:15.8,x:172.7,y:48.9},7,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:0,x:178,y:43.5},8,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,226,87);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ48();
	this.instance.setTransform(177.5,109.5,1,1,0,0,0,177.5,109.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,355,219);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// cursy.png
	this.instance = new lib.Символ13();
	this.instance.setTransform(31.5,32.5,0.838,0.838,0,0,0,14.5,19.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// round.png
	this.instance_1 = new lib.Символ12();
	this.instance_1.setTransform(31.5,31.5,1,1,0,0,0,31.5,31.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,63,63);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// fing2.png
	this.instance = new lib.Символ19();
	this.instance.setTransform(79.7,222.1,1,1,-6.2,0,0,17.9,18);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,rotation:0,skewX:-4.8,skewY:-6.5,x:73.8,y:221.1},14,cjs.Ease.get(-1)).to({regX:18.1,regY:18.1,scaleX:1,skewX:-3.5,skewY:-7,x:67.6,y:220.2},15,cjs.Ease.get(1)).to({regX:17.9,regY:18,scaleX:1,skewX:-4.8,skewY:-6.5,x:73.8,y:221.1},15,cjs.Ease.get(-1)).to({scaleX:1,rotation:-6.2,skewX:0,skewY:0,x:79.7,y:222.1},15,cjs.Ease.get(1)).wait(1));

	// hand2.png
	this.instance_1 = new lib.Символ18();
	this.instance_1.setTransform(48.4,185.1,1,0.952,0,-10.9,-6.2,18.6,37.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleY:0.98,skewX:-9.3,skewY:-7,x:44.2,y:183.3},14,cjs.Ease.get(-1)).to({regX:18.5,regY:37,scaleY:1,rotation:-7.9,skewX:0,skewY:0,x:39.6,y:181.2},15,cjs.Ease.get(1)).to({regX:18.6,regY:37.1,scaleY:0.98,rotation:0,skewX:-9.3,skewY:-7,x:44.2,y:183.3},15,cjs.Ease.get(-1)).to({scaleY:0.95,skewX:-10.9,skewY:-6.2,x:48.4,y:185.1},15,cjs.Ease.get(1)).wait(1));

	// shold2.png
	this.instance_2 = new lib.Символ17();
	this.instance_2.setTransform(46.6,113,1,0.99,0,-2,-6.2,25.1,44.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleY:1,skewX:0.5,skewY:-3.1,x:45.3,y:111.8},14,cjs.Ease.get(-1)).to({regX:25,regY:44.5,scaleY:1,skewX:3.5,skewY:0,x:43.9,y:110.5},15,cjs.Ease.get(1)).to({regX:25.1,regY:44.6,scaleY:1,skewX:0.5,skewY:-3.1,x:45.3,y:111.8},15,cjs.Ease.get(-1)).to({scaleY:0.99,skewX:-2,skewY:-6.2,x:46.6,y:113},15,cjs.Ease.get(1)).wait(1));

	// hand.png
	this.instance_3 = new lib.Символ21();
	this.instance_3.setTransform(193.7,185.1,1,1,0,0,0,16,35.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleY:1,skewX:1.3,x:189.7,y:188.6},14,cjs.Ease.get(-1)).to({skewX:3.1,x:185.4,y:192.3},15,cjs.Ease.get(1)).to({skewX:1.5,x:189.5,y:188.7},15,cjs.Ease.get(-1)).to({scaleY:1,skewX:0,x:193.7,y:185.1},15,cjs.Ease.get(1)).wait(1));

	// shold1.png
	this.instance_4 = new lib.Символ20();
	this.instance_4.setTransform(175,123.4,1,1,0,0,0,33.5,39.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({skewX:1,skewY:2,x:173.5,y:126.3},14,cjs.Ease.get(-1)).to({regX:33.6,regY:39.6,scaleY:1,skewX:2.5,skewY:4.5,x:171.8,y:129.5},15,cjs.Ease.get(1)).to({regY:39.5,scaleY:1,skewX:1.1,skewY:2.1,x:173.4,y:126.5},15,cjs.Ease.get(-1)).to({regX:33.5,skewX:0,skewY:0,x:175,y:123.4},15,cjs.Ease.get(1)).wait(1));

	// fing.png
	this.instance_5 = new lib.Символ22();
	this.instance_5.setTransform(165.7,216.1,1,1,0,0,0,24,21.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regY:21.4,scaleX:1,skewY:3,x:161.2,y:219.3},14,cjs.Ease.get(-1)).to({regY:21.5,scaleX:1.01,skewY:6.5,x:156.6,y:222.7},15,cjs.Ease.get(1)).to({regY:21.6,scaleX:1,skewY:3.3,x:161.2,y:219.5},15,cjs.Ease.get(-1)).to({regY:21.5,scaleX:1,skewY:0,x:165.7,y:216.1},15,cjs.Ease.get(1)).wait(1));

	// head.png
	this.instance_6 = new lib.Символ26();
	this.instance_6.setTransform(112,42.5,1,1,0,0,0,38,42.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({regX:38.1,rotation:1.5,x:112.7,y:43.5},14,cjs.Ease.get(-1)).to({regX:38,regY:42.6,rotation:3.2,x:113.2,y:44.7},15,cjs.Ease.get(1)).to({rotation:1.5,x:112.6,y:43.6},15,cjs.Ease.get(-1)).to({regY:42.5,rotation:0,x:112,y:42.5},15,cjs.Ease.get(1)).wait(1));

	// foot2.png
	this.instance_7 = new lib.Символ27();
	this.instance_7.setTransform(35.5,392,1,1,0,0,0,35.5,78);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({skewX:-1,x:33.9},14,cjs.Ease.get(-1)).to({scaleY:1,skewX:-2.4,x:32.2},15,cjs.Ease.get(1)).to({scaleY:1,skewX:-1.1,x:33.9},15,cjs.Ease.get(-1)).to({skewX:0,x:35.5},15,cjs.Ease.get(1)).wait(1));

	// foot.png
	this.instance_8 = new lib.Символ28();
	this.instance_8.setTransform(176.2,399.1,1,1,0,0,0,30,81);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({scaleY:1,skewX:-1.3,x:174.3},14,cjs.Ease.get(-1)).to({regX:29.9,skewX:-2.8,x:172.2},15,cjs.Ease.get(1)).to({regX:30,skewX:-1.3,x:174.2},15,cjs.Ease.get(-1)).to({scaleY:1,skewX:0,x:176.2},15,cjs.Ease.get(1)).wait(1));

	// body.png
	this.instance_9 = new lib.Символ29();
	this.instance_9.setTransform(104.6,119.5,1,1,0,0,0,46.5,63.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({scaleX:1,scaleY:0.99,skewX:1,skewY:1.8,x:103.3,y:119.6},14,cjs.Ease.get(-1)).to({regX:46.6,scaleX:1.01,scaleY:0.98,skewX:2.5,skewY:3.8,x:102,y:119.7},15,cjs.Ease.get(1)).to({scaleX:1,scaleY:0.99,skewX:1.1,skewY:1.8,x:103.3},15,cjs.Ease.get(-1)).to({regX:46.5,scaleX:1,scaleY:1,skewX:0,skewY:0,x:104.6,y:119.5},15,cjs.Ease.get(1)).wait(1));

	// taz.png
	this.instance_10 = new lib.Символ23();
	this.instance_10.setTransform(116.9,207.5,1,1,0,0,0,47.5,40.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({scaleX:1,skewX:4.3,skewY:3.1,x:112,y:207.1},14,cjs.Ease.get(-1)).to({regY:40.6,skewX:9.3,skewY:6.6,x:106.8,y:206.8},15,cjs.Ease.get(1)).to({skewX:4.5,skewY:3.3,x:111.9,y:207.1},15,cjs.Ease.get(-1)).to({regY:40.5,scaleX:1,skewX:0,skewY:0,x:116.9,y:207.5},15,cjs.Ease.get(1)).wait(1));

	// leg2.png
	this.instance_11 = new lib.Символ24();
	this.instance_11.setTransform(81.1,276.6,1,1,0,0,0,37.5,52.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({skewX:-1,x:77.1},14,cjs.Ease.get(-1)).to({scaleY:1,skewX:-2.4,x:72.9},15,cjs.Ease.get(1)).to({regX:37.6,scaleY:1,skewX:-1.1,x:77,y:276.5},15,cjs.Ease.get(-1)).to({regX:37.5,skewX:0,x:81.1,y:276.6},15,cjs.Ease.get(1)).wait(1));

	// leg1.png
	this.instance_12 = new lib.Символ25();
	this.instance_12.setTransform(150.8,268.4,1,1,0,0,0,25.5,59.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({regY:59.6,scaleY:1.01,skewX:-1.8,x:145.2,y:267.9},14,cjs.Ease.get(-1)).to({regY:59.5,scaleY:1.02,skewX:-3.8,x:139.3,y:267.3},15,cjs.Ease.get(1)).to({scaleY:1.01,skewX:-1.8,x:145,y:267.9},15,cjs.Ease.get(-1)).to({scaleY:1,skewX:0,x:150.8,y:268.4},15,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,209.7,480.1);


(lib.Символ36 = function(mode,startPosition,loop) {
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

	// Символ 6
	this.instance = new lib.Символ6();
	this.instance.setTransform(-0.9,3.1,1,1,0,0,0,55.4,53);

	this.instance_1 = new lib.Символ5();
	this.instance_1.setTransform(0.1,12.5,1,1,0,0,0,113,43.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56.3,-49.9,110.9,105.9);


(lib.Символ35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_14 = function() {
		this.stop();
	}
	this.frame_29 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14).wait(15).call(this.frame_29).wait(1));

	// osmotr
	this.instance = new lib.Символ30();
	this.instance.setTransform(178.1,18,1,1,0,0,0,178.1,18);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:28,alpha:0},14).to({y:18,alpha:1},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,356.2,36);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_19 = function() {
		this.stop();
	}
	this.frame_34 = function() {
		this.stop();
	}
	this.frame_54 = function() {
		this.stop();
	}
	this.frame_69 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(19).call(this.frame_19).wait(15).call(this.frame_34).wait(20).call(this.frame_54).wait(15).call(this.frame_69).wait(1));

	// Слой 4
	this.instance = new lib.Символ41();
	this.instance.setTransform(122,164.9,0.846,0.846,0,0,0,123.2,28.5);
	this.instance.alpha = 0;

	this.instance_1 = new lib.Символ45();
	this.instance_1.setTransform(354.2,113.9,0.851,0.851,0,0,0,32,32);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.92,scaleY:0.92,x:131,y:158.1,alpha:0.473},9,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,x:141,y:150.5,alpha:1},10,cjs.Ease.get(1)).to({scaleX:0.93,scaleY:0.93,x:132.2,y:157.2,alpha:0.535},7,cjs.Ease.get(-1)).to({scaleX:0.85,scaleY:0.85,x:122,y:164.9,alpha:0},8,cjs.Ease.get(1)).to({_off:true},1).wait(35));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(35).to({_off:false},0).to({scaleX:0.92,scaleY:0.92,x:326.3,y:120,alpha:1},9,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,x:295.2,y:126.9},10,cjs.Ease.get(1)).to({scaleX:0.93,scaleY:0.93,x:322.7,y:120.9},7,cjs.Ease.get(-1)).to({scaleX:0.85,scaleY:0.85,x:354.2,y:113.9,alpha:0},8,cjs.Ease.get(1)).wait(1));

	// Символ 1
	this.instance_2 = new lib.Символ1();
	this.instance_2.setTransform(372.1,217.9,0.909,0.909,0,0,0,106,239.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:440.8},9,cjs.Ease.get(-1)).to({x:517.1},10,cjs.Ease.get(1)).to({x:449.5},7,cjs.Ease.get(-1)).to({x:372.1},8,cjs.Ease.get(1)).wait(1).to({regY:239.5,scaleX:0.98,scaleY:0.98,x:348.3,y:233.6},9,cjs.Ease.get(-1)).to({scaleX:1.05,scaleY:1.05,x:321.9,y:251.3},10,cjs.Ease.get(1)).to({scaleX:0.98,scaleY:0.98,x:345.4,y:235.7},7,cjs.Ease.get(-1)).to({regY:239.6,scaleX:0.91,scaleY:0.91,x:372.1,y:217.9},8,cjs.Ease.get(1)).wait(1));

	// Символ 3
	this.instance_3 = new lib.Символ3();
	this.instance_3.setTransform(164.7,173.4,0.927,0.927,0,0,0,177.6,109.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleX:0.99,scaleY:0.99,x:175.4,y:166.9},9,cjs.Ease.get(-1)).to({scaleX:1.06,scaleY:1.06,x:187.4,y:159.4},10,cjs.Ease.get(1)).to({regY:109.6,scaleX:1,scaleY:1,x:176.8,y:166},7,cjs.Ease.get(-1)).to({regY:109.5,scaleX:0.93,scaleY:0.93,x:164.7,y:173.4},8,cjs.Ease.get(1)).wait(1).to({scaleX:0.88,scaleY:0.88,x:103.6,y:178.7},9,cjs.Ease.get(-1)).to({scaleX:0.83,scaleY:0.83,x:35.8,y:184.4},10,cjs.Ease.get(1)).to({scaleX:0.87,scaleY:0.87,x:96,y:179.3},7,cjs.Ease.get(-1)).to({scaleX:0.93,scaleY:0.93,x:164.7,y:173.4},8,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,466.4,436.5);


// stage content:



(lib.getcar2_600300 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.pric.alpha=0;
		
		
		this.cursor = "none";
		this.pric.mouseEnabled = false;
		this.addEventListener("tick", fl_CustomMouseCursor_2.bind(this));
		
		function fl_CustomMouseCursor_2() {
			this.pric.x = stage.mouseX/window.devicePixelRatio;
			this.pric.y = stage.mouseY/window.devicePixelRatio;
		
		}
		
		
		
		this.carbt.addEventListener("mouseover", fl_Clickover3.bind(this));
		function fl_Clickover3()
		{
			this.pric.gotoAndStop(2);
			this.tek.gotoAndPlay(2);
			this.car.gotoAndPlay(2);
		}
		
		this.carbt.addEventListener("mouseout", fl_Clickout3.bind(this));
		function fl_Clickout3()
		{
			this.pric.gotoAndStop(2);
			this.tek.gotoAndPlay(16);
			this.car.gotoAndPlay(21);
		}
		
		
		
		this.girlbt.addEventListener("mouseover", fl_Clickover2.bind(this));
		function fl_Clickover2()
		{
			this.pric.gotoAndStop(1);
			this.tek.gotoAndPlay(31);
			this.car.gotoAndPlay(36);
		}
		
		this.girlbt.addEventListener("mouseout", fl_Clickout2.bind(this));
		function fl_Clickout2()
		{
			this.pric.gotoAndStop(1);
			this.tek.gotoAndPlay(46);
			this.car.gotoAndPlay(56);
		}
		
		stage.canvas.addEventListener("mouseover", fl_Clickover1.bind(this));
		function fl_Clickover1()
		{
			this.osmotr.gotoAndPlay(1);
			this.pric.alpha=1;
		    this.finger.alpha=0;
			
		}
		
		stage.canvas.addEventListener("mouseout", fl_Clickout1.bind(this));
		function fl_Clickout1()
		{
			this.osmotr.gotoAndPlay(16);
			this.pric.alpha=0;
			this.finger.alpha=1;
			
		}
		
		
		
		
		document.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		window.open(clickTAG, "_blank");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// girlbt
	this.girlbt = new lib.Символ33();
	this.girlbt.setTransform(475.5,153,1,1,0,0,0,174.5,166);
	new cjs.ButtonHelper(this.girlbt, 0, 1, 2, false, new lib.Символ33(), 3);

	this.timeline.addTween(cjs.Tween.get(this.girlbt).wait(1));

	// carbt
	this.carbt = new lib.Символ33();
	this.carbt.setTransform(126.5,153,1,1,0,0,0,174.5,166);
	new cjs.ButtonHelper(this.carbt, 0, 1, 2, false, new lib.Символ33(), 3);

	this.timeline.addTween(cjs.Tween.get(this.carbt).wait(1));

	// osmotr
	this.osmotr = new lib.Символ35();
	this.osmotr.setTransform(50.9,38.9,1,1,0,0,0,23.8,23.8);

	this.timeline.addTween(cjs.Tween.get(this.osmotr).wait(1));

	// tek
	this.tek = new lib.Символ11();
	this.tek.setTransform(205.2,33.1,1,1,0,0,0,178.1,18);

	this.timeline.addTween(cjs.Tween.get(this.tek).wait(1));

	// Символ 6
	this.pric = new lib.Символ36();
	this.pric.setTransform(3.5,446.1,1,1,0,0,0,-1,3.1);

	this.timeline.addTween(cjs.Tween.get(this.pric).wait(1));

	// Символ 1
	this.car = new lib.Символ10();
	this.car.setTransform(298.1,232.9,1,1,0,0,0,234.2,217.8);

	this.timeline.addTween(cjs.Tween.get(this.car).wait(1));

	// Символ 2
	this.finger = new lib.Символ2();
	this.finger.setTransform(555.5,259.5,1,1,0,0,0,31.5,31.5);

	this.timeline.addTween(cjs.Tween.get(this.finger).wait(1));

	// Слой 8
	this.instance = new lib.Символ8();
	this.instance.setTransform(298.9,31.5,1,1,0,0,0,300.9,33.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// back.jpg
	this.instance_1 = new lib.Символ7();
	this.instance_1.setTransform(291.4,123,1,1,0,0,0,339.9,226);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(248.1,47,701.9,602.1);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;