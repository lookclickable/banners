(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 600,
	height: 300,
	fps: 24,
	color: "#333333",
	manifest: [
		{src:"images/back.jpg?1505130726885", id:"back"},
		{src:"images/ball.png?1505130726885", id:"ball"},
		{src:"images/basket.png?1505130726885", id:"basket"},
		{src:"images/bt.png?1505130726885", id:"bt"},
		{src:"images/logo.png?1505130726885", id:"logo"},
		{src:"images/phone.png?1505130726885", id:"phone"},
		{src:"images/shad.png?1505130726885", id:"shad"},
		{src:"images/st1.png?1505130726885", id:"st1"},
		{src:"images/st2.png?1505130726885", id:"st2"},
		{src:"images/st3.png?1505130726885", id:"st3"},
		{src:"images/tv.png?1505130726885", id:"tv"},
		{src:"images/tv1.jpg?1505130726885", id:"tv1"},
		{src:"images/tv2.jpg?1505130726885", id:"tv2"},
		{src:"images/tv3.jpg?1505130726885", id:"tv3"},
		{src:"images/tv4.jpg?1505130726885", id:"tv4"}
	]
};



// symbols:



(lib.back = function() {
	this.initialize(img.back);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,788,432);


(lib.ball = function() {
	this.initialize(img.ball);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,75,75);


(lib.basket = function() {
	this.initialize(img.basket);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,244,246);


(lib.bt = function() {
	this.initialize(img.bt);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,297,116);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,229,43);


(lib.phone = function() {
	this.initialize(img.phone);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,155,236);


(lib.shad = function() {
	this.initialize(img.shad);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,165,28);


(lib.st1 = function() {
	this.initialize(img.st1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,135,182);


(lib.st2 = function() {
	this.initialize(img.st2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,135,182);


(lib.st3 = function() {
	this.initialize(img.st3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,135,182);


(lib.tv = function() {
	this.initialize(img.tv);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,237,170);


(lib.tv1 = function() {
	this.initialize(img.tv1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,230,130);


(lib.tv2 = function() {
	this.initialize(img.tv2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,230,130);


(lib.tv3 = function() {
	this.initialize(img.tv3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,230,130);


(lib.tv4 = function() {
	this.initialize(img.tv4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,230,130);


(lib.Символ43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.back();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,788,432);


(lib.Символ42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bt();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,297,116);


(lib.Символ39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shad();
	this.instance.setTransform(0,0,1.437,1.437);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,237.1,40.3);


(lib.Символ37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.tv1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,230,130);


(lib.Символ36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.tv2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,230,130);


(lib.Символ35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.tv3();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,230,130);


(lib.Символ34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.tv4();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,230,130);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.st1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,135,182);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.st2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,135,182);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.st3();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,135,182);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shad();
	this.instance.setTransform(0,0,0.467,0.467);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,77.1,13.1);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ball();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,75,75);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AhnBnQgrgrAAg8QAAg8ArgrQArgrA8AAQA8AAArArQAsArAAA8QAAA8gsArQgrAsg8AAQg8AAgrgsg");
	this.shape.setTransform(14.8,14.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,29.5,29.5);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("As4ATIAAglIZxAAIAAAlg");
	this.shape.setTransform(82.6,1.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,165.1,3.9);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(2,1,1).p("AiIAAIERAA");
	this.shape.setTransform(13.8,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,29.6,2);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(2,1,1).p("ABTAAIilAA");
	this.shape.setTransform(8.3,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,18.7,2);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgeBtQgPgGgLgLQgIgIgFgJQgEgJgCgLQgDgOAAgpIAAgeQABgPACgKQACgLAEgIQAFgJAIgIQALgLAPgGQAPgGAPAAQAPAAANAEQANAFALAIQAKAJAHANQAHAMADAQIgZAAQgCgKgFgJQgFgIgHgGQgHgGgJgDQgJgEgKAAQgKAAgKAEQgKAFgIAHQgFAGgDAGQgDAGgCAJQgDAbAAAXQABAnACAMQACAIADAHQADAGAFAFQAIAIAKAEQAKAEAKAAQAKAAAKgDQAIgDAHgGQAHgGAFgJQAFgIADgLIAYAAQgDAQgHANQgHANgKAIQgLAJgNAFQgNAEgPAAQgPAAgPgGg");
	this.shape.setTransform(181.4,23.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AA5CNIAAi4IhyC4IgXAAIAAjiIAYAAIAAC4IByi4IAXAAIAADigAgQhmQgJgCgGgFQgGgFgEgHQgEgIAAgLIAVAAQAAAMAHAGQAHAGAKAAQAMAAAGgGQAHgGABgMIAUAAQgBALgDAIQgEAHgGAFQgGAFgIACQgIADgKAAQgJAAgHgDg");
	this.shape_1.setTransform(159.6,21.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhFBxIAAjhICLAAIAAAVIhzAAIAABQIBiAAIAAAVIhiAAIAABSIBzAAIAAAVg");
	this.shape_2.setTransform(139.3,23.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgKB2IAAgdQgggDgLgFQgKgDgHgFIgNgKQgGgGgEgHQgEgHgDgJQgDgLgDgaQABgPAFgZQADgIAEgHQAFgHAGgGQAFgGAHgEQAIgFAJgDQAMgEAfgDIAAgVIAWAAIAAAVQAQABAaAGQAKADAHAFQAHAEAGAGQAGAGAEAHQAEAHADAIQAFAZABAPQgCAagEALQgCAJgFAHQgEAHgGAGQgFAGgHAEQgIAFgJADQgaAHgRABIAAAdgAAMBEQATgBAOgFQAOgFAIgJQAIgJAEgOQADgMAAgPQAAgSgDgMQgDgOgJgJQgHgKgOgFQgOgFgUAAgAgshGQgOAFgJAKQgHAJgEAOQgDAMAAASQAAAPADAMQAEAOAIAJQAJAJANAFQAOAFAUABIAAiPQgVAAgNAFg");
	this.shape_3.setTransform(116.5,23.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhMBxIAAjhIBTAAQAPAAANAEQAOAFAJAJQAJAJAFAMQAFANAAAOQAAAPgFANQgFAMgJAIQgJAIgOAFQgNAFgPAAIg6AAIAABdgAgzAAIA4AAQALAAAJgDQAJgDAGgGQAHgGADgJQADgIAAgLQAAgKgDgJQgDgIgHgFQgGgHgJgCQgJgEgLAAIg4AAg");
	this.shape_4.setTransform(94.9,23.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhFBxIAAjhICLAAIAAAVIhzAAIAABQIBiAAIAAAVIhiAAIAABSIBzAAIAAAVg");
	this.shape_5.setTransform(75,23.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgLBxIAAjMIhCAAIAAgVICbAAIAAAVIhCAAIAADMg");
	this.shape_6.setTransform(55.9,23.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AA2BxIAAhnIhqAAIAABnIgZAAIAAjhIAZAAIAABlIBqAAIAAhlIAYAAIAADhg");
	this.shape_7.setTransform(36,23.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AA5BxIAAi3IhyC3IgXAAIAAjhIAYAAIAAC4IByi4IAXAAIAADhg");
	this.shape_8.setTransform(13.5,23.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,193.6,44.9);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#66FF66").s().p("AAgCPIAAh8IhHB8IgwAAIAAjiIA4AAIAAB7IBGh7IAxAAIAADigAgQhgQgKgCgIgGQgJgGgFgIQgEgLgBgNIAmAAQAAAJAFAEQAFAEAFAAQAIAAAEgEQAEgEABgJIAmAAQAAANgGALQgEAIgIAGQgIAGgKACQgJADgKAAQgIAAgIgDg");
	this.shape.setTransform(147.2,20.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#66FF66").s().p("ABCBxIAAjhIA4AAIAADhgAh5BxIAAjhIA4AAIAABRIAkAAQARAAAMAGQAOAEAKAKQAKAKAGAMQAFANAAAQQAAAQgFANQgGAOgKAKQgLAKgNAFQgMAGgRgBgAhBBAIAgAAQALAAAGgHQAHgHAAgKQAAgKgHgGQgGgHgLABIggAAg");
	this.shape_1.setTransform(121.5,23.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#66FF66").s().p("AAdBxIAAhaIg5AAIAABaIg4AAIAAjhIA4AAIAABYIA5AAIAAhYIA4AAIAADhg");
	this.shape_2.setTransform(96,23.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#66FF66").s().p("AhUBxIAAjhICaAAIAAAxIhiAAIAAAgIAkAAQASAAAOAGQAOAEAKAKQAKAKAFAMQAGANAAAQQAAAQgGANQgFAOgKAKQgJAKgPAFQgOAGgSgBgAgcA/IAiAAQAKAAAHgGQAGgHAAgKQAAgKgGgGQgHgHgKABIgiAAg");
	this.shape_3.setTransform(75.1,23.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#66FF66").s().p("AgiBtIgPgIIgNgLQgIgJgFgKQgFgJgCgMQgDgOAAgcIAAgPIABgdQABgMADgKQACgJAFgHQAEgIAHgHIANgLIAPgIQALgEAXgCQAMAAAXAGIAPAIIANALQAGAGAFAHQAEAIADAIQAFAZAAAQIAAAcQAAAdgDAOQgCAKgFAJQgFAKgIAJIgNALIgPAIQgWAGgNAAQgXgCgLgEgAgLg+QgGADgEAEQgEAGgCANQgCALAAARIAAANQAAAWACALQACALAEAGQAEAFAGACQAGADAFAAQAGAAAGgDQAGgCAEgFQAFgGACgLQABgLAAgWIAAgNQAAgRgBgLQgDgNgEgGQgEgEgGgDQgFgDgHAAQgFAAgGADg");
	this.shape_4.setTransform(54.1,23.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#66FF66").s().p("AA2CIIAAguIhrAAIAAAuIg2AAIAAhfIAWAAQAGgRAFgQQAEgQACgTQAFgbABhIIAAgJICQAAIAACwIAaAAIAABfgAgHhPQgCAxgFAUQgIAigGARIA2AAIAAh/IghAAg");
	this.shape_5.setTransform(32.4,26.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#66FF66").s().p("AhEBxIAAgxIAUAAQAMAAAGgIQAFgFACgKIhIiZIA7AAIAmBfIAkhfIA6AAIhQC6QgLATgHAIQgHAGgIADQgJAEgLgBg");
	this.shape_6.setTransform(11.6,23.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,160.6,44.9);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AA5BxIAAi3IhyC3IgXAAIAAjhIAZAAIAAC4IBxi4IAXAAIAADhg");
	this.shape.setTransform(201.7,23.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AA5BxIAAi3IhyC3IgXAAIAAjhIAYAAIAAC4IByi4IAXAAIAADhg");
	this.shape_1.setTransform(178.8,23.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ABDCNIAAg3IidAAIAAjiIAYAAIAADMIBqAAIAAjMIAYAAIAADMIAbAAIAABNg");
	this.shape_2.setTransform(156.9,26.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AA3BxIAAhdIg3AAIgxBdIgdAAIA1hhQgMgCgJgHQgJgFgGgGQgGgIgEgLQgDgKAAgNQAAgOAFgNQAFgMAJgJQAJgJANgFQANgEAQAAIBTAAIAADhgAgWhYQgJADgGAGQgGAGgEAIQgDAJAAAKQAAALADAIQAEAJAGAGQAGAGAJADQAJADALAAIA5AAIAAhbIg5AAQgLAAgJADg");
	this.shape_3.setTransform(133.2,23.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("ABBBxIAAjMIhMAAIAABPQgBApgDARQgHAdgGAKQgEAIgFAGQgFAFgHADQgLAGgRAAIgLAAIAAgVIAFAAQAMAAAIgFQAJgFAGgMQAHgMADgWQADgPABgpIAAhcIB8AAIAADhg");
	this.shape_4.setTransform(111.2,23.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgeBtQgPgGgLgLQgIgIgFgJQgEgJgCgLQgDgOAAgpIAAgeQABgPACgKQACgLAEgIQAFgJAIgIQALgLAPgGQAPgGAPAAQAPAAANAEQANAFALAIQAKAJAHANQAHAMADAQIgZAAQgCgKgFgJQgFgIgHgGQgHgGgJgDQgJgEgKAAQgKAAgKAEQgKAFgIAHQgFAGgDAGQgDAGgCAJQgDAbAAAXQABAnACAMQACAIADAHQADAGAFAFQAIAIAKAEQAKAEAKAAQAKAAAKgDQAIgDAHgGQAHgGAFgJQAFgIADgLIAYAAQgDAQgHANQgHANgKAIQgLAJgNAFQgNAEgPAAQgPAAgPgGg");
	this.shape_5.setTransform(91.8,23.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AA2BxIAAhnIhqAAIAABnIgZAAIAAjhIAZAAIAABlIBqAAIAAhlIAYAAIAADhg");
	this.shape_6.setTransform(70.3,23.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("ABEBxIgTgzIhhAAIgTAzIgZAAIBTjhIATAAIBTDhgAAqApIgqh2IgpB2IBTAAg");
	this.shape_7.setTransform(49.4,23.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhMBxIAAjhIBTAAQAPAAANAEQAOAFAJAJQAJAJAFAMQAFANAAAOQAAAPgFANQgFAMgJAIQgJAIgOAFQgNAFgPAAIg6AAIAABdgAgzAAIA3AAQAMAAAJgDQAJgDAGgGQAHgGACgJQAEgIAAgLQAAgKgEgJQgCgIgHgFQgGgHgJgCQgJgEgMAAIg3AAg");
	this.shape_8.setTransform(30.6,23.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgLBxIAAjMIhCAAIAAgVICbAAIAAAVIhCAAIAADMg");
	this.shape_9.setTransform(10.8,23.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,215.4,44.9);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#66FF66").s().p("AhMBxIAAjhICZAAIAAAxIhhAAIAAAnIBSAAIAAAvIhSAAIAAApIBhAAIAAAxg");
	this.shape.setTransform(206.6,23.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#66FF66").s().p("ABCBxIAAjhIA4AAIAADhgAh5BxIAAjhIA4AAIAABRIAkAAQAQAAANAGQAOAEAKAKQAKAKAFAMQAGANAAAQQAAAQgGANQgFAOgKAKQgLAKgNAFQgNAGgQgBgAhBBAIAgAAQALAAAGgHQAHgHAAgKQAAgKgHgGQgGgHgLABIggAAg");
	this.shape_1.setTransform(182,23.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#66FF66").s().p("AAdBxIAAhaIg5AAIAABaIg4AAIAAjhIA4AAIAABYIA5AAIAAhYIA4AAIAADhg");
	this.shape_2.setTransform(156.5,23.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#66FF66").s().p("AhUBxIAAjhIBdAAQAQAAAOAEQANAFAKAIQAJAJAFALQAFAMAAAOQAAAQgGALQgFALgOAJQAQAIAGAMQAHAMAAARQAAAPgFANQgFAMgKAIQgJAJgNAFQgNAFgRgBgAgcA/IAkAAQAKAAAFgFQAGgFAAgKQAAgJgGgFQgFgGgKAAIgkAAgAgcgZIAhAAQAKAAAFgFQAFgFAAgIQAAgJgFgFQgFgFgKAAIghAAg");
	this.shape_3.setTransform(135.6,23.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#66FF66").s().p("AAhBxIAAh6IhHB6IgyAAIAAjhIA5AAIAAB6IBHh6IAwAAIAADhg");
	this.shape_4.setTransform(113.6,23.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#66FF66").s().p("AgaBxIAAiwIg4AAIAAgxIClAAIAAAxIg4AAIAACwg");
	this.shape_5.setTransform(93.1,23.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#66FF66").s().p("AhSBxIAAjhIBYAAQARAAAOAFQAOAFAKAKQALALAGANQAFANAAAQQABAQgGANQgGALgLALQgKAKgOAFQgOAGgRgBIghAAIAABRgAgbgQIAfAAQAKAAAGgGQAIgHgBgKQABgKgIgHQgGgGgKAAIgfAAg");
	this.shape_6.setTransform(74.4,23.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#66FF66").s().p("AgiBtIgPgIIgNgLQgIgJgFgKQgFgJgCgMQgDgOAAgcIAAgPIABgdQABgMADgKQACgJAFgHQAEgIAHgHIANgLIAPgIQALgEAXgCQAMAAAXAGIAPAIIANALQAGAGAFAHQAEAIADAIQAFAZAAAQIAAAcQAAAdgDAOQgCAKgFAJQgFAKgIAJIgNALIgPAIQgWAGgNAAQgXgCgLgEgAgLg+QgGADgEAEQgEAGgCANQgCALAAARIAAANQAAAWACALQACALAEAGQAEAFAGACQAGADAFAAQAGAAAGgDQAGgCAEgFQAFgGACgLQABgLAAgWIAAgNQAAgRgBgLQgDgNgEgGQgEgEgGgDQgFgDgHAAQgFAAgGADg");
	this.shape_7.setTransform(53.4,23.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#66FF66").s().p("AAdBxIAAiwIg5AAIAACwIg4AAIAAjhICpAAIAADhg");
	this.shape_8.setTransform(32.3,23.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#66FF66").s().p("AgRByIgRgFQgPgHgMgMQgKgJgFgLQgEgKgDgMQgCgPAAghIAAgYIACgYQADgMAEgJQAFgLAKgJQAMgNAPgGIARgFIARgBQAQAAAOAEQAPAFALAJQAMAJAHAOQAIAOADATIg5AAQgDgLgGgGQgHgIgNAAQgFAAgHADQgFADgDAEQgEAGgDAJQgCANAAAbQAAAcACANQADAJAEAGQADAEAFACQAHADAFAAQANAAAHgHQAGgGADgLIA5AAQgDASgIAPQgHANgMAKQgLAJgPAFQgOAEgQAAg");
	this.shape_9.setTransform(12.2,23.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,218.2,44.9);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABQBxIAAjhIAZAAIAADhgAhoBxIAAjhIAZAAIAABdIA9AAQAPABAMAFQAMAEAKAJQAJAHAFAMQAFANAAAPQAAAOgFANQgFAMgJAJQgKAJgNAFQgLAEgPAAgAhPBcIA6AAQAMAAAJgEQAHgDAGgFQAGgGADgIQADgIAAgLQAAgLgDgIQgDgJgGgGQgGgGgHgDQgJgDgMAAIg6AAg");
	this.shape.setTransform(254,23.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgLBxIAAjMIhCAAIAAgVICbAAIAAAVIhCAAIAADMg");
	this.shape_1.setTransform(231.4,23.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AA2BxIAAhnIhqAAIAABnIgZAAIAAjhIAZAAIAABlIBqAAIAAhlIAYAAIAADhg");
	this.shape_2.setTransform(211.5,23.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhFBxIAAjhICLAAIAAAVIhzAAIAABQIBiAAIAAAVIhiAAIAABSIBzAAIAAAVg");
	this.shape_3.setTransform(191.6,23.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AA5BxIAAi3IhyC3IgXAAIAAjhIAZAAIAAC4IBxi4IAXAAIAADhg");
	this.shape_4.setTransform(169.8,23.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("ABDCNIAAg3IidAAIAAjiIAYAAIAADMIBqAAIAAjMIAYAAIAADMIAbAAIAABNg");
	this.shape_5.setTransform(147.8,26.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AA5BxIAAi3IhyC3IgXAAIAAjhIAYAAIAAC4IByi4IAXAAIAADhg");
	this.shape_6.setTransform(123.9,23.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgKB2IAAgdQgggDgMgFQgJgDgHgFIgNgKQgGgGgEgHQgEgHgDgJQgEgLgCgaQABgPAFgZQADgIAFgHQADgHAHgGQAGgGAGgEQAIgFAJgDQAMgEAfgDIAAgVIAWAAIAAAVQAQABAaAGQAKADAHAFQAIAEAFAGQAGAGAEAHQAEAHADAIQAFAZAAAPQgBAagEALQgDAJgDAHQgFAHgFAGQgGAGgIAEQgHAFgJADQgaAHgRABIAAAdgAAMBEQATgBAOgFQAOgFAIgJQAIgJAEgOQAEgMgBgPQABgSgEgMQgEgOgHgJQgJgKgNgFQgOgFgUAAgAgshGQgOAFgIAKQgIAJgEAOQgDAMAAASQAAAPADAMQAEAOAIAJQAJAJANAFQAOAFAUABIAAiPQgVAAgNAFg");
	this.shape_7.setTransform(100,23.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgLB2IAAgdQgegDgNgFQgIgDgIgFIgNgKQgGgGgEgHQgEgHgDgJQgEgLgBgaQgBgPAGgZQADgIAEgHQAFgHAFgGQAHgGAHgEQAHgFAJgDQAMgEAegDIAAgVIAXAAIAAAVQARABAaAGQAIADAIAFQAHAEAGAGQAGAGAEAHQAFAHACAIQAGAZgBAPQgBAagDALQgDAJgFAHQgEAHgFAGQgGAGgIAEQgHAFgJADQgaAHgRABIAAAdgAAMBEQAUgBAOgFQANgFAIgJQAIgJAEgOQAEgMAAgPQAAgSgEgMQgDgOgIgJQgJgKgNgFQgOgFgUAAgAgthGQgNAFgIAKQgIAJgEAOQgDAMAAASQAAAPAEAMQADAOAIAJQAJAJANAFQAOAFATABIAAiPQgTAAgPAFg");
	this.shape_8.setTransform(75.1,23.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgbBvQgNgFgLgJQgKgIgHgNQgHgNgDgQIAYAAQACALAFAJQAFAIAHAGQAIAGAIADQAKAEAJAAQALAAAKgEQAKgFAIgIQAJgJAEgPQADgNAAgfIhVAAIAAgTIBUAAQAAgegCgNQgEgOgJgKQgIgIgKgEQgKgEgLAAQgJAAgKADQgIADgIAHQgGAGgFAIQgFAJgCAKIgZAAQADgQAHgMQAHgNAKgJQAKgIAOgFQANgEAOAAQAQAAAPAGQAPAGALALQAIAIAFAJQAEAIACALIACAZIABAeQAAApgDAOQgCALgEAJQgFAJgIAIQgLALgPAGQgPAGgQAAQgOAAgNgEg");
	this.shape_9.setTransform(52.3,23.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgfBtQgOgGgMgLQgIgIgEgJQgEgJgDgLQgCgPAAgoIAAgQQAAgZADgPQACgLAEgIQAFgJAHgHQAMgLAOgGQAPgGAQAAQAQAAAPAGQAPAGALALQAIAHAEAKQAEAIADAKQADAPAAAbIAAAOQAAAogDAPQgCALgEAJQgFAJgIAIQgLALgPAGQgPAGgQAAQgQAAgPgGgAgUhYQgKAEgIAIQgGAFgDAIQgEAHgBAJQgCAMAAAeIAAAUQAAAXACAMQACAIADAHQAEAHAFAFQAIAIAKAEQAKAEAKAAQALAAAKgEQAKgEAIgIQAFgFAEgIQADgHABgJQADgMAAgZIAAgWQAAgZgDgMQgBgJgEgHQgDgHgFgFQgIgIgKgEQgLgFgKAAQgKAAgKAFg");
	this.shape_10.setTransform(31.9,23.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAwBxIhnh0IAAB0IgYAAIAAjhIAYAAIAABsIBghsIAfAAIhiBsIBqB1g");
	this.shape_11.setTransform(13.5,23.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,270,44.9);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#66FF66").s().p("AhMBxIAAjhICZAAIAAAxIhhAAIAAAnIBTAAIAAAvIhTAAIAAApIBhAAIAAAxg");
	this.shape.setTransform(145.2,23.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#66FF66").s().p("AAgBxIAAh6IhHB6IgwAAIAAjhIA3AAIAAB6IBHh6IAyAAIAADhg");
	this.shape_1.setTransform(123.9,23.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#66FF66").s().p("AAcBxIhBh1IAAB1Ig4AAIAAjhIA4AAIAABsIA8hsIBAAAIhEBqIBLB3g");
	this.shape_2.setTransform(103.6,23.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#66FF66").s().p("AgiBtIgPgIIgNgLQgIgJgFgKQgFgJgCgMQgDgOAAgcIAAgPIABgdQABgMADgKQACgJAFgHQAEgIAHgHIANgLIAPgIQALgEAXgCQAMAAAXAGIAPAIIANALQAGAGAFAHQAEAIADAIQAFAZAAAQIAAAcQAAAdgDAOQgCAKgFAJQgFAKgIAJIgNALIgPAIQgWAGgNAAQgXgCgLgEgAgLg+QgGADgEAEQgEAGgCANQgCALAAARIAAANQAAAWACALQACALAEAGQAEAFAGACQAGADAFAAQAGAAAGgDQAGgCAEgFQAFgGACgLQABgLAAgWIAAgNQAAgRgBgLQgDgNgEgGQgEgEgGgDQgFgDgHAAQgFAAgGADg");
	this.shape_3.setTransform(81.6,23.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#66FF66").s().p("AgRByIgRgFQgPgHgMgMQgKgJgEgLQgFgKgDgMQgCgPAAghIAAgYIACgYQADgMAFgJQAEgLAKgJQAMgNAPgGIARgFIARgBQAQAAAOAEQAPAFALAJQAMAJAHAOQAIAOADATIg5AAQgDgLgGgGQgHgIgNAAQgFAAgHADQgFADgDAEQgEAGgDAJQgCANAAAbQAAAcACANQADAJAEAGQADAEAFACQAHADAFAAQANAAAHgHQAGgGADgLIA5AAQgDASgIAPQgHANgMAKQgLAJgPAFQgOAEgQAAg");
	this.shape_4.setTransform(62.2,23.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#66FF66").s().p("ABCBxIAAjhIA4AAIAADhgAh5BxIAAjhIA4AAIAABRIAkAAQARAAAMAGQAOAEAKAKQAKAKAFAMQAGANAAAQQAAAQgGANQgFAOgKAKQgLAKgNAFQgMAGgRgBgAhBBAIAgAAQALAAAGgHQAHgHAAgKQAAgKgHgGQgGgHgLABIggAAg");
	this.shape_5.setTransform(37.4,23.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#66FF66").s().p("AhUBxIAAjhIBdAAQAQAAAOAEQANAFAKAIQAJAJAFALQAFAMAAAOQAAAQgGALQgFALgOAJQAQAIAGAMQAHAMAAARQAAAPgFANQgFAMgKAIQgJAJgNAFQgNAFgRgBgAgcA/IAkAAQAKAAAFgFQAGgFAAgKQAAgJgGgFQgFgGgKAAIgkAAgAgcgZIAhAAQAKAAAFgFQAFgFAAgIQAAgJgFgFQgFgFgKAAIghAAg");
	this.shape_6.setTransform(12.8,23.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,156.8,44.9);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhNBxIAAjhIBUAAQAPAAANAEQAMAEAJAIQAJAIAEALQAFAMAAANQAAALgEALQgEAKgJAIQgFAGgLAEQANAEAHAHQAIAIAEALQAFAKAAANQAAAOgFAMQgFALgIAJQgJAIgNAEQgMAFgQgBgAg0BcIA8AAQAKAAAJgDQAIgDAGgFQAGgGADgIQADgIAAgJQAAgJgDgJQgDgHgGgFQgGgGgIgDQgJgDgKAAIg8AAgAg0gMIA5AAQALABAIgDQAIgDAGgFQAGgFADgHQADgIAAgJQAAgJgDgIQgDgHgGgFQgGgFgIgDQgIgDgLAAIg5AAg");
	this.shape.setTransform(262.1,23.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgLBxIAAjMIhCAAIAAgVICbAAIAAAVIhCAAIAADMg");
	this.shape_1.setTransform(242.2,23.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgeBtQgPgGgLgLQgIgIgFgJQgEgJgCgLQgDgOAAgpIAAgeQABgPACgKQACgLAEgIQAFgJAIgIQALgLAPgGQAPgGAPAAQAPAAANAEQANAFALAIQAKAJAHANQAHAMADAQIgZAAQgCgKgFgJQgFgIgHgGQgHgGgJgDQgJgEgKAAQgKAAgKAEQgKAFgIAHQgFAGgDAGQgDAGgCAJQgDAbAAAXQABAnACAMQACAIADAHQADAGAFAFQAIAIAKAEQAKAEAKAAQAKAAAKgDQAIgDAHgGQAHgGAFgJQAFgIADgLIAYAAQgDAQgHANQgHANgKAIQgLAJgNAFQgNAEgPAAQgPAAgPgGg");
	this.shape_2.setTransform(223.5,23.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ABMCNIAAg3IiXAAIAAA3IgYAAIAAhNIAUAAQAIgMAFgOQAGgNADgRQAEgOACgSIABgnIAAhNIB6AAIAADMIAcAAIAABNgAgbgwQgBApgEASQgDAPgFANQgFANgHAMIBkAAIAAi2IhLAAg");
	this.shape_3.setTransform(201.8,26.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhFBxIAAjhICLAAIAAAVIhzAAIAABQIBiAAIAAAVIhiAAIAABSIBzAAIAAAVg");
	this.shape_4.setTransform(182.1,23.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhMBxIAAjhIBTAAQAQAAANAEQANAFAJAJQAJAJAFAMQAFANAAAOQAAAPgFANQgFAMgJAIQgJAIgNAFQgNAFgQAAIg6AAIAABdgAgzAAIA3AAQAMAAAJgDQAJgDAGgGQAGgGADgJQAEgIAAgLQAAgKgEgJQgDgIgGgFQgGgHgJgCQgJgEgMAAIg3AAg");
	this.shape_5.setTransform(162.6,23.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgeBtQgPgGgLgLQgIgIgFgJQgEgJgCgLQgDgOAAgpIAAgeQABgPACgKQACgLAEgIQAFgJAIgIQALgLAPgGQAPgGAPAAQAPAAANAEQANAFALAIQAKAJAHANQAHAMADAQIgZAAQgCgKgFgJQgFgIgHgGQgHgGgJgDQgJgEgKAAQgKAAgKAEQgKAFgIAHQgFAGgDAGQgDAGgCAJQgDAbAAAXQABAnACAMQACAIADAHQADAGAFAFQAIAIAKAEQAKAEAKAAQAKAAAKgDQAIgDAHgGQAHgGAFgJQAFgIADgLIAYAAQgDAQgHANQgHANgKAIQgLAJgNAFQgNAEgPAAQgPAAgPgGg");
	this.shape_6.setTransform(141.6,23.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("ABMCNIAAg3IiXAAIAAA3IgYAAIAAhNIAUAAQAIgMAFgOQAGgNADgRQAEgOACgSIABgnIAAhNIB6AAIAADMIAcAAIAABNgAgbgwQgBApgEASQgDAPgFANQgFANgHAMIBkAAIAAi2IhLAAg");
	this.shape_7.setTransform(104,26.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgfBtQgOgGgMgLQgIgIgEgJQgEgJgDgLQgCgPAAgoIAAgQQAAgZADgPQACgLAEgIQAFgJAHgHQAMgLAOgGQAPgGAQAAQAQAAAPAGQAPAGALALQAIAHAEAKQAEAIADAKQADAPAAAbIAAAOQAAAogDAPQgCALgEAJQgFAJgIAIQgLALgPAGQgPAGgQAAQgQAAgPgGgAgUhYQgKAEgIAIQgGAFgDAIQgEAHgBAJQgCAMAAAeIAAAUQAAAXACAMQACAIADAHQAEAHAFAFQAIAIAKAEQAKAEAKAAQALAAAKgEQAKgEAIgIQAFgFAEgIQADgHABgJQADgMAAgZIAAgWQAAgZgDgMQgBgJgEgHQgDgHgFgFQgIgIgKgEQgLgFgKAAQgKAAgKAFg");
	this.shape_8.setTransform(82.7,23.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhNBxIAAjhIBUAAQAPAAANAEQAMAEAJAIQAJAIAEALQAFAMAAANQAAALgEALQgEAKgJAIQgFAGgLAEQANAEAHAHQAIAIAEALQAFAKAAANQAAAOgFAMQgFALgIAJQgJAIgNAEQgMAFgQgBgAg0BcIA8AAQAKAAAJgDQAIgDAGgFQAGgGADgIQADgIAAgJQAAgJgDgJQgDgHgGgFQgGgGgIgDQgJgDgKAAIg8AAgAg0gMIA5AAQALABAIgDQAIgDAGgFQAGgFADgHQADgIAAgJQAAgJgDgIQgDgHgGgFQgGgFgIgDQgIgDgLAAIg5AAg");
	this.shape_9.setTransform(62.1,23.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("ABQBxIAAjhIAZAAIAADhgAhoBxIAAjhIAZAAIAABdIA9AAQAPABAMAFQAMAEAKAJQAJAHAFAMQAFANAAAPQAAAOgFANQgFAMgJAJQgKAJgNAFQgLAEgPAAgAhPBcIA6AAQAMAAAJgEQAHgDAGgFQAGgGADgIQADgIAAgLQAAgLgDgIQgDgJgGgGQgGgGgHgDQgJgDgMAAIg6AAg");
	this.shape_10.setTransform(37.2,23.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhNBxIAAjhIBUAAQAPAAANAEQAMAEAJAIQAJAIAEALQAFAMAAANQAAALgEALQgEAKgJAIQgFAGgLAEQANAEAHAHQAIAIAEALQAFAKAAANQAAAOgFAMQgFALgIAJQgJAIgNAEQgMAFgQgBgAg0BcIA8AAQAKAAAJgDQAIgDAGgFQAGgGADgIQADgIAAgJQAAgJgDgJQgDgHgGgFQgGgGgIgDQgJgDgKAAIg8AAgAg0gMIA5AAQALABAIgDQAIgDAGgFQAGgFADgHQADgIAAgJQAAgJgDgIQgDgHgGgFQgGgFgIgDQgIgDgLAAIg5AAg");
	this.shape_11.setTransform(13.1,23.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,274.5,44.9);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#66FF66").s().p("AAgCPIAAh8IhHB8IgwAAIAAjiIA4AAIAAB7IBHh7IAwAAIAADigAgRhgQgJgCgIgGQgJgGgFgIQgEgLgBgNIAmAAQABAJAEAEQAFAEAFAAQAHAAAFgEQAEgEABgJIAmAAQAAANgGALQgEAIgIAGQgIAGgKACQgJADgKAAQgIAAgJgDg");
	this.shape.setTransform(211.9,20.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#66FF66").s().p("ABCBxIAAjhIA4AAIAADhgAh5BxIAAjhIA4AAIAABRIAkAAQARAAAMAGQAOAEAKAKQAKAKAGAMQAFANAAAQQAAAQgFANQgGAOgKAKQgKAKgOAFQgMAGgRgBgAhBBAIAgAAQAKAAAHgHQAHgHAAgKQAAgKgHgGQgHgHgKABIggAAg");
	this.shape_1.setTransform(186.2,23.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#66FF66").s().p("AAdBxIAAhaIg5AAIAABaIg4AAIAAjhIA4AAIAABYIA5AAIAAhYIA4AAIAADhg");
	this.shape_2.setTransform(160.7,23.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#66FF66").s().p("AAdBxIAAhaIg5AAIAABaIg4AAIAAjhIA4AAIAABYIA5AAIAAhYIA4AAIAADhg");
	this.shape_3.setTransform(139,23.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#66FF66").s().p("AhMBxIAAjhICZAAIAAAxIhhAAIAAAnIBTAAIAAAvIhTAAIAAApIBhAAIAAAxg");
	this.shape_4.setTransform(118.7,23.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#66FF66").s().p("AhUBxIAAjhIBdAAQAQAAAOAEQANAFAKAIQAJAJAFALQAFAMAAAOQAAAQgGALQgFALgOAJQAQAIAGAMQAHAMAAARQAAAPgFANQgFAMgKAIQgJAJgNAFQgNAFgRgBgAgcA/IAkAAQAKAAAFgFQAGgFAAgKQAAgJgGgFQgFgGgKAAIgkAAgAgcgZIAhAAQAKAAAFgFQAFgFAAgIQAAgJgFgFQgFgFgKAAIghAAg");
	this.shape_5.setTransform(98.6,23.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#66FF66").s().p("AgiBtIgPgIIgNgLQgIgJgFgKQgFgJgCgMQgDgOAAgcIAAgPIABgdQABgMADgKQACgJAFgHQAEgIAHgHIANgLIAPgIQALgEAXgCQAMAAAXAGIAPAIIANALQAGAGAFAHQAEAIADAIQAFAZAAAQIAAAcQAAAdgDAOQgCAKgFAJQgFAKgIAJIgNALIgPAIQgWAGgNAAQgXgCgLgEgAgLg+QgGADgEAEQgEAGgCANQgCALAAARIAAANQAAAWACALQACALAEAGQAEAFAGACQAGADAFAAQAGAAAGgDQAGgCAEgFQAFgGACgLQABgLAAgWIAAgNQAAgRgBgLQgDgNgEgGQgEgEgGgDQgFgDgHAAQgFAAgGADg");
	this.shape_6.setTransform(77.6,23.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#66FF66").s().p("AAdBxIAAhaIg5AAIAABaIg4AAIAAjhIA4AAIAABYIA5AAIAAhYIA4AAIAADhg");
	this.shape_7.setTransform(56.5,23.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#66FF66").s().p("AhIBxIAAjhICRAAIAAAxIhZAAIAACwg");
	this.shape_8.setTransform(37.5,23.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#66FF66").s().p("AAyBxIAAhtIghA4IghAAIghg4IAABtIg4AAIAAjhIA3AAIAyBkIAzhkIA3AAIAADhg");
	this.shape_9.setTransform(14.9,23.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,225.3,44.9);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.logo();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,229,43);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.basket();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.shad();
	this.instance_1.setTransform(127.5,235.7,0.344,0.486);

	this.instance_2 = new lib.shad();
	this.instance_2.setTransform(42,236,0.344,0.486);

	this.instance_3 = new lib.shad();
	this.instance_3.setTransform(-18.5,225,1.638,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.5,0,270.3,253);


(lib.Символ41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ42();
	this.instance.setTransform(148.5,58,1.069,1.069,0,0,0,148.5,58);
	this.instance.alpha = 0.621;
	this.instance.compositeOperation = "lighter";
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	// Слой 1
	this.instance_1 = new lib.bt();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({scaleX:1.07,scaleY:1.07,x:-10.2,y:-4},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,297,116);


(lib.Символ40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ41();
	this.instance.setTransform(148.5,58,1,1,0,0,0,148.5,58);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.97,scaleY:0.97},19,cjs.Ease.get(-1)).to({scaleX:0.94,scaleY:0.94},20,cjs.Ease.get(1)).to({regY:58.1,scaleX:0.97,scaleY:0.97,y:58.1},20,cjs.Ease.get(-1)).to({regY:58,scaleX:1,scaleY:1,y:58},20,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.2,-4,317.5,124);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AxsJ5IAAzxMAjYAAAIAATxg");
	mask.setTransform(118.6,69.4);

	// tv4.jpg
	this.instance = new lib.Символ34();
	this.instance.setTransform(116.9,70.4,1,1,0,0,0,115,65);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.12,scaleY:1.12,alpha:0},9).wait(121));

	// tv3.jpg
	this.instance_1 = new lib.Символ35();
	this.instance_1.setTransform(116.9,70.4,1,1,0,0,0,115,65);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(33).to({scaleX:1.12,scaleY:1.12,alpha:0},9).wait(88));

	// tv2.jpg
	this.instance_2 = new lib.Символ36();
	this.instance_2.setTransform(116.9,70.4,1,1,0,0,0,115,65);

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(61).to({scaleX:1.12,scaleY:1.12,alpha:0},9).wait(60));

	// tv1.jpg
	this.instance_3 = new lib.Символ37();
	this.instance_3.setTransform(116.9,70.4,1,1,0,0,0,115,65);

	this.instance_3.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(91).to({scaleX:1.12,scaleY:1.12,alpha:0},9).wait(30));

	// Слой 8
	this.instance_4 = new lib.Символ34();
	this.instance_4.setTransform(116.9,70.4,1,1,0,0,0,115,65);
	this.instance_4._off = true;

	this.instance_4.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(91).to({_off:false},0).wait(39));

	// Слой 1
	this.instance_5 = new lib.tv();

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(130));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,237,170);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AqPrbIMlizIH6X9IsLEgg");
	mask.setTransform(352.9,164.3);

	// st3.png
	this.instance = new lib.Символ30();
	this.instance.setTransform(353,164.1,1,1,0,0,0,67.5,91);
	this.instance._off = true;

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(15).to({_off:false},0).to({scaleX:1.1,scaleY:1.1,x:256.1,y:194.9},14,cjs.Ease.get(-1)).wait(91).to({scaleX:1,scaleY:1,x:444,y:133.5},0).to({x:353,y:164.1},10,cjs.Ease.get(1)).wait(1));

	// st2.png
	this.instance_1 = new lib.Символ31();
	this.instance_1.setTransform(353,164.1,1,1,0,0,0,67.5,91);
	this.instance_1._off = true;

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(15).to({_off:false},0).wait(36).to({scaleX:1.1,scaleY:1.1,x:256.1,y:194.9},14,cjs.Ease.get(-1)).to({_off:true},1).wait(65));

	// st1.png
	this.instance_2 = new lib.Символ32();
	this.instance_2.setTransform(353,164.1,1,1,0,0,0,67.5,91);
	this.instance_2._off = true;

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(51).to({_off:false},0).wait(33).to({scaleX:1.1,scaleY:1.1,x:256.1,y:194.9},14,cjs.Ease.get(-1)).to({_off:true},1).wait(32));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ26();
	this.instance.setTransform(-96.6,189.3,1,1,0,0,0,177.7,243.3);

	this.instance_1 = new lib.phone();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-274.3,-54,429.4,290);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ20();
	this.instance.setTransform(165.8,14.8,1,1,0,0,0,14.8,14.8);

	this.instance_1 = new lib.Символ19();
	this.instance_1.setTransform(82.5,14.8,1,1,0,0,0,82.5,1.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,180.5,29.5);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 8
	this.instance = new lib.Символ8();
	this.instance.setTransform(-221.4,367.8,1,1,0,0,0,112.7,22.4);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:380.8,alpha:1},14,cjs.Ease.get(1)).wait(85).to({y:367.8,alpha:0},10,cjs.Ease.get(-1)).to({_off:true},1).wait(370));

	// Символ 9
	this.instance_1 = new lib.Символ9();
	this.instance_1.setTransform(-196.9,432.8,1,1,0,0,0,137.2,22.4);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10).to({_off:false},0).to({y:419.8,alpha:1},14,cjs.Ease.get(1)).wait(85).to({y:432.8,alpha:0},10,cjs.Ease.get(-1)).to({_off:true},1).wait(360));

	// Символ 10
	this.instance_2 = new lib.Символ10();
	this.instance_2.setTransform(-255.7,367.8,1,1,0,0,0,78.4,22.4);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(119).to({_off:false},0).to({y:380.8,alpha:1},14,cjs.Ease.get(1)).wait(85).to({y:367.8,alpha:0},10,cjs.Ease.get(-1)).to({_off:true},11).wait(241));

	// Символ 11
	this.instance_3 = new lib.Символ11();
	this.instance_3.setTransform(-199.2,430.2,1,1,0,0,0,134.9,22.4);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(129).to({_off:false},0).to({y:417.2,alpha:1},14,cjs.Ease.get(1)).wait(85).to({y:430.2,alpha:0},10,cjs.Ease.get(-1)).to({_off:true},1).wait(241));

	// Символ 12
	this.instance_4 = new lib.Символ12();
	this.instance_4.setTransform(-225.1,367.8,1,1,0,0,0,109,22.4);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(237).to({_off:false},0).to({y:380.8,alpha:1},14,cjs.Ease.get(1)).wait(85).to({y:367.8,alpha:0},10,cjs.Ease.get(-1)).to({_off:true},11).wait(123));

	// Символ 13
	this.instance_5 = new lib.Символ13();
	this.instance_5.setTransform(-226.4,430.2,1,1,0,0,0,107.7,22.4);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(247).to({_off:false},0).to({y:417.2,alpha:1},14,cjs.Ease.get(1)).wait(85).to({y:430.2,alpha:0},10,cjs.Ease.get(-1)).to({_off:true},1).wait(123));

	// Символ 14
	this.instance_6 = new lib.Символ14();
	this.instance_6.setTransform(-253.8,369.1,1,1,0,0,0,80.3,22.4);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(356).to({_off:false},0).to({y:382.1,alpha:1},14,cjs.Ease.get(1)).wait(85).to({y:369.1,alpha:0},10,cjs.Ease.get(-1)).wait(15));

	// Символ 15
	this.instance_7 = new lib.Символ15();
	this.instance_7.setTransform(-237.3,432.8,1,1,0,0,0,96.8,22.4);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(366).to({_off:false},0).to({y:419.8,alpha:1},14,cjs.Ease.get(1)).wait(85).to({y:432.8,alpha:0},10,cjs.Ease.get(-1)).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-334.1,345.4,225.3,44.9);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ40();
	this.instance.setTransform(148.5,58,1,1,0,0,0,148.5,58);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,297,116);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ33();
	this.instance.setTransform(118.5,68.5,1,1,0,0,0,118.5,85);

	this.instance_1 = new lib.shad();
	this.instance_1.setTransform(4.8,139.4,1.379,0.864);

	this.instance_2 = new lib.shad();
	this.instance_2.setTransform(-43.3,137,1.961,0.864);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-43.3,-16.5,323.6,180.2);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 25
	this.instance = new lib.Символ25();
	this.instance.setTransform(51.5,112,0.807,0.807,0,0,0,77.5,118);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:117.9,rotation:-8.3,y:88.7},16,cjs.Ease.get(-1)).to({regY:118,rotation:-15,y:70},13,cjs.Ease.get(1)).to({rotation:-7.3,y:91.5},18,cjs.Ease.get(-1)).to({rotation:0,y:112},17,cjs.Ease.get(1)).wait(1));

	// shad
	this.instance_1 = new lib.Символ39();
	this.instance_1.setTransform(67.1,233.1,0.807,0.807,0,0,0,118.5,20.2);
	this.instance_1.alpha = 0.57;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.65,scaleY:0.65,alpha:0.422},16,cjs.Ease.get(-1)).to({regX:118.4,regY:20.1,scaleX:0.52,scaleY:0.52,y:233,alpha:0.301},13,cjs.Ease.get(1)).to({regX:118.5,scaleX:0.67,scaleY:0.67,alpha:0.438},18,cjs.Ease.get(-1)).to({regY:20.2,scaleX:0.81,scaleY:0.81,y:233.1,alpha:0.57},17,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-232.4,-26.9,395.2,276.2);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ43();
	this.instance.setTransform(312.4,142.8,0.793,0.793,0,0,0,394.1,216);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:306},49,cjs.Ease.get(-0.99)).to({x:299.4},51,cjs.Ease.get(1)).to({x:305.8},49,cjs.Ease.get(-0.99)).to({x:312.4},50,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-28.4,624.6,342.4);


(lib.Анимация1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ18();
	this.instance.setTransform(0.1,128.7,1,1,0,0,0,13.8,0);

	this.instance_1 = new lib.Символ17();
	this.instance_1.setTransform(4.8,119,1,1,0,0,0,8.3,0);

	this.instance_2 = new lib.Символ17();
	this.instance_2.setTransform(4.8,110.4,1,1,0,0,0,8.3,0);

	this.instance_3 = new lib.Символ17();
	this.instance_3.setTransform(4.8,102,1,1,0,0,0,8.3,0);

	this.instance_4 = new lib.Символ18();
	this.instance_4.setTransform(0.1,84.4,1,1,0,0,0,13.8,0);

	this.instance_5 = new lib.Символ17();
	this.instance_5.setTransform(4.8,93.4,1,1,0,0,0,8.3,0);

	this.instance_6 = new lib.Символ17();
	this.instance_6.setTransform(4.8,74.7,1,1,0,0,0,8.3,0);

	this.instance_7 = new lib.Символ17();
	this.instance_7.setTransform(4.8,66.1,1,1,0,0,0,8.3,0);

	this.instance_8 = new lib.Символ17();
	this.instance_8.setTransform(4.8,57.7,1,1,0,0,0,8.3,0);

	this.instance_9 = new lib.Символ18();
	this.instance_9.setTransform(0.1,40.1,1,1,0,0,0,13.8,0);

	this.instance_10 = new lib.Символ17();
	this.instance_10.setTransform(4.8,49.1,1,1,0,0,0,8.3,0);

	this.instance_11 = new lib.Символ17();
	this.instance_11.setTransform(4.8,30.2,1,1,0,0,0,8.3,0);

	this.instance_12 = new lib.Символ17();
	this.instance_12.setTransform(4.8,21.6,1,1,0,0,0,8.3,0);

	this.instance_13 = new lib.Символ17();
	this.instance_13.setTransform(4.8,13.2,1,1,0,0,0,8.3,0);

	this.instance_14 = new lib.Символ18();
	this.instance_14.setTransform(0.1,-4.4,1,1,0,0,0,13.8,0);

	this.instance_15 = new lib.Символ17();
	this.instance_15.setTransform(4.8,4.6,1,1,0,0,0,8.3,0);

	this.instance_16 = new lib.Символ17();
	this.instance_16.setTransform(4.8,-14,1,1,0,0,0,8.3,0);

	this.instance_17 = new lib.Символ17();
	this.instance_17.setTransform(4.8,-22.6,1,1,0,0,0,8.3,0);

	this.instance_18 = new lib.Символ17();
	this.instance_18.setTransform(4.8,-30.9,1,1,0,0,0,8.3,0);

	this.instance_19 = new lib.Символ18();
	this.instance_19.setTransform(0.1,-48.5,1,1,0,0,0,13.8,0);

	this.instance_20 = new lib.Символ17();
	this.instance_20.setTransform(4.8,-39.5,1,1,0,0,0,8.3,0);

	this.instance_21 = new lib.Символ17();
	this.instance_21.setTransform(4.8,-57.7,1,1,0,0,0,8.3,0);

	this.instance_22 = new lib.Символ17();
	this.instance_22.setTransform(4.8,-66.3,1,1,0,0,0,8.3,0);

	this.instance_23 = new lib.Символ17();
	this.instance_23.setTransform(4.8,-74.6,1,1,0,0,0,8.3,0);

	this.instance_24 = new lib.Символ18();
	this.instance_24.setTransform(0.1,-92.2,1,1,0,0,0,13.8,0);

	this.instance_25 = new lib.Символ17();
	this.instance_25.setTransform(4.8,-83.2,1,1,0,0,0,8.3,0);

	this.instance_26 = new lib.Символ17();
	this.instance_26.setTransform(4.8,-101.5,1,1,0,0,0,8.3,0);

	this.instance_27 = new lib.Символ17();
	this.instance_27.setTransform(4.8,-110.1,1,1,0,0,0,8.3,0);

	this.instance_28 = new lib.Символ17();
	this.instance_28.setTransform(4.8,-118.4,1,1,0,0,0,8.3,0);

	this.instance_29 = new lib.Символ18();
	this.instance_29.setTransform(0.1,-136,1,1,0,0,0,13.8,0);

	this.instance_30 = new lib.Символ17();
	this.instance_30.setTransform(4.8,-127,1,1,0,0,0,8.3,0);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(2,1,1).p("AAAVQMAAAgqf");
	this.shape.setTransform(13.8,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.7,-137,29.6,274.1);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ22();
	this.instance.setTransform(15.5,-110,0.92,1.014,0,0,0,37.5,37.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:37.6,scaleY:0.79,x:14.9,y:79.3},8,cjs.Ease.get(-1)).to({regY:37.5,scaleY:1.01,x:15.5,y:-110},12,cjs.Ease.get(1)).wait(1));

	// Слой 4
	this.instance_1 = new lib.Символ21();
	this.instance_1.setTransform(71.8,-110.1,0.92,0.92,0,0,0,90.2,14.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:71.2,y:79.1},8,cjs.Ease.get(-1)).to({x:71.8,y:-110.1},12,cjs.Ease.get(1)).wait(1));

	// Слой 3
	this.instance_2 = new lib.Анимация1("synched",0);
	this.instance_2.setTransform(127.3,-16,0.92,0.92);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(8).to({startPosition:0},0).wait(12).to({startPosition:0},0).wait(1));

	// Слой 2
	this.instance_3 = new lib.Символ23();
	this.instance_3.setTransform(15.8,107.1,0.92,0.92,0,0,0,38.5,6.5);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleX:1.44,scaleY:1.44,alpha:1},8,cjs.Ease.get(-1)).to({scaleX:0.92,scaleY:0.92,alpha:0},12,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.6,-148,174.5,261.1);


(lib.Символ38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 24
	this.instance = new lib.Символ4();
	this.instance.setTransform(584.8,167.4,1,1.034,0,-14.7,0,122,123);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:1,skewX:0.5,x:914.7},19,cjs.Ease.get(1)).to({x:953.7},80).to({scaleY:1.02,skewX:-11.5,x:1678.1},20,cjs.Ease.get(-1)).wait(361));

	// Символ 5
	this.instance_1 = new lib.Символ5();
	this.instance_1.setTransform(893.3,199.6,1,1,0,0,0,37.5,37.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(119).to({_off:false},0).to({alpha:1},19,cjs.Ease.get(1)).wait(80).to({alpha:0},20,cjs.Ease.get(-1)).wait(242));

	// Символ 3
	this.instance_2 = new lib.Символ3();
	this.instance_2.setTransform(930.5,180.1,0.877,0.877,0,0,0,118.5,85);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(238).to({_off:false},0).to({alpha:1},19,cjs.Ease.get(1)).wait(80).to({alpha:0},20,cjs.Ease.get(-1)).wait(123));

	// Символ 2
	this.instance_3 = new lib.Символ2();
	this.instance_3.setTransform(942.3,148.1,0.877,0.877,0,0,0,77.5,118);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(357).to({_off:false},0).to({alpha:1},19,cjs.Ease.get(1)).wait(80).to({alpha:0},20,cjs.Ease.get(-1)).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(430.4,44.4,318.4,253);


// stage content:



(lib.betcity_preim_600300 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bt.png
	this.instance = new lib.Символ6();
	this.instance.setTransform(424.5,242,1,1,0,0,0,148.5,58);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// logo.png
	this.instance_1 = new lib.Символ7();
	this.instance_1.setTransform(407.5,43.5,1,1,0,0,0,114.5,21.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// ball.png
	this.instance_2 = new lib.Символ16();
	this.instance_2.setTransform(770.9,-64.5,1,1,0,0,0,137.2,204.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// tv.png
	this.instance_3 = new lib.Символ38();
	this.instance_3.setTransform(-280.5,169.1,1,1,0,0,0,505.3,171.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// back.jpg
	this.instance_4 = new lib.Символ1();
	this.instance_4.setTransform(390.1,238.1,1,1,0,0,0,394,216);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-55.4,143.7,976.1,342.4);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;