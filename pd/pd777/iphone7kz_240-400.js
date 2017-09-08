(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 240,
	height: 400,
	fps: 25,
	color: "#333333",
	manifest: [
		{src:"images/acehearts.png?1504855408282", id:"acehearts"},
		{src:"images/acespade.png?1504855408282", id:"acespade"},
		{src:"images/aple.png?1504855408282", id:"aple"},
		{src:"images/logo.png?1504855408282", id:"logo"},
		{src:"images/mob.png?1504855408282", id:"mob"},
		{src:"images/seven.png?1504855408282", id:"seven"},
		{src:"images/sevenheart.png?1504855408282", id:"sevenheart"},
		{src:"images/sevenspade.png?1504855408282", id:"sevenspade"}
	]
};



// symbols:



(lib.acehearts = function() {
	this.initialize(img.acehearts);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,221,270);


(lib.acespade = function() {
	this.initialize(img.acespade);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,235,298);


(lib.aple = function() {
	this.initialize(img.aple);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,338,445);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,309,59);


(lib.mob = function() {
	this.initialize(img.mob);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,150,267);


(lib.seven = function() {
	this.initialize(img.seven);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,236,289);


(lib.sevenheart = function() {
	this.initialize(img.sevenheart);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,236,289);


(lib.sevenspade = function() {
	this.initialize(img.sevenspade);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,237,289);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("AuaU/MAAAgp9Ic1AAMAAAAp9g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-92.4,-134.4,184.8,268.8);


(lib.Symbol33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#A83029","#1A1C23"],[0.153,1],110,334.4,-21.2,-154.4).s().p("Egy7AWIMAAAgsPMBl2AAAMAAAAsPg");
	this.shape.setTransform(326,141.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,652,283.2);


(lib.Symbol31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgjBsQgXgIgPgQQgQgPgJgVQgIgWAAgaQAAgXAHgVQAIgWANgPQAQgRAUgJQAXgJAZAAQAVABATAHQASAHAOANQAOAOAIASQAIAUAAAWIgCATIi4AAQABAUAHARQAHAPAMAMQAMALAQAGQARAGASAAQAXAAAUgIQATgHALgNIAJAUQgPAQgXAIQgWAJgXgBQgZAAgVgIgABRgPQgBgRgFgOQgGgOgKgLQgKgJgOgGQgPgFgRAAQgRAAgOAGQgPAFgLAKQgLALgGAOQgGAOgCAQICgAAIAAAAg");
	this.shape.setTransform(272.6,184.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AiHBwIAAjfIAaAAIAADHIBhAAIAAjHIAYAAIAADHIBiAAIAAjHIAaAAIAADfg");
	this.shape_1.setTransform(241.8,184.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ABZBwIAAjfIAaAAIAADfgAhyBwIAAjfIAaAAIAABMIAnAAQAZgBASAHQAPAFAKAKQAKAKAEAMQAFAMAAAQQAAAQgFANQgFAOgKAKQgLALgPAGQgTAGgZAAgAhYBYIAiAAQASgBANgDQANgDAIgHQAFgGAEgJQADgJAAgNQAAgMgDgJQgEgJgGgHQgIgFgMgDQgNgDgSAAIgiAAg");
	this.shape_2.setTransform(208.7,184.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhpCkIAAlDIAaAAIAAAeQANgPAWgJQAXgKAWAAQAYAAAUAIQATAIAOAPQAOAQAHAUQAHAVAAAZQAAAagIAWQgIAUgPAQQgQARgVAJQgVAJgYAAQgWAAgSgFQgTgEgNgKIAABygAgwiAQgUAJgLAPIAACAQARALASAFQAQAEATAAQASAAARgHQAQgHAMgMQAMgNAGgPQAHgSAAgUQAAgUgGgRQgFgRgLgMQgLgMgQgGQgQgHgSAAQgWAAgWALg");
	this.shape_3.setTransform(180.1,188.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhCBwIAAjfICFAAIAAAYIhrAAIAADHg");
	this.shape_4.setTransform(158.5,184.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("ABZBwIAAjfIAaAAIAADfgAhyBwIAAjfIAaAAIAABMIAnAAQAZgBASAHQAPAFAKAKQAKAKAEAMQAFAMAAAQQAAAQgFANQgFAOgKAKQgLALgPAGQgTAGgZAAgAhYBYIAiAAQASgBANgDQANgDAIgHQAFgGAEgJQADgJAAgNQAAgMgDgJQgEgJgGgHQgIgFgMgDQgNgDgSAAIgiAAg");
	this.shape_5.setTransform(132.3,184.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgzBsQgbgJgLgMIANgVQAOANAVAHQATAGARAAQAOAAAMgDQANgDAJgGQAKgGAFgJQAFgJAAgKQAAgSgOgKQgOgKgYAAIgkAAIAAgTIAhAAQATAAAOgMQANgMAAgRQAAgKgEgHQgEgHgHgFQgPgKgZAAQgWAAgTAIQgPAFgOAMIgLgUQAOgOAXgIQAWgHAYgBQATAAAPAEQAQAFAKAIQAKAHAFALQAGALAAAOQAAARgKAOQgKAPgVAIIAAABQAMABAKACQAJAFAGAIQAMAOAAAVQAAAPgHANQgGAMgNAJQgMAIgSAFQgRAEgSAAQgYABgagJg");
	this.shape_6.setTransform(105,184.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AguBrQgWgIgQgQQgPgPgJgWQgIgVAAgZQAAgXAIgWQAJgVAPgQQAQgQAWgJQAVgJAZAAQAZAAAWAJQAWAJAQAQQAPAQAJAVQAIAWAAAXQAAAZgIAVQgJAWgPAPQgQAQgWAIQgWAKgZgBQgZABgVgKgAgjhUQgQAGgMANQgMAMgHARQgHASAAASQAAATAHASQAGARANAMQAMANAQAGQARAHASAAQATAAARgHQAQgGAMgNQANgMAGgRQAHgSAAgTQAAgSgHgRQgGgRgNgNQgMgNgQgGQgRgHgTAAQgRAAgSAHg");
	this.shape_7.setTransform(79.7,184.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhpCkIAAlDIAaAAIAAAeQANgPAWgJQAXgKAWAAQAYAAAUAIQATAIAOAPQAOAQAHAUQAHAVAAAZQAAAagIAWQgIAUgPAQQgQARgVAJQgVAJgYAAQgWAAgSgFQgTgEgNgKIAABygAgwiAQgUAJgLAPIAACAQARALASAFQAQAEATAAQASAAARgHQAQgHAMgMQAMgNAGgPQAHgSAAgUQAAgUgGgRQgFgRgLgMQgLgMgQgGQgQgHgSAAQgWAAgWALg");
	this.shape_8.setTransform(52.4,188.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhWBwIAAjfIBJgCQAVAAASAEQAQADANAHQALAHAGALQAGALAAAQQAAASgMAOQgMAQgWADIAAABQAPACAKADQAKAFAHAGQAGAHADAJQADAJAAALQAAAPgFANQgHALgMAIQgNAIgTAEQgTAFgXAAgAg7BYIAyABIAcgCQANgDAJgFQAJgFAFgIQAEgIAAgLQAAgJgEgIQgEgHgIgFQgIgFgNgCIgcgDIg1AAgAg7hXIAABMIA7AAQAWAAAPgLQANgKAAgTQAAgLgEgHQgFgHgJgEQgPgIgbAAg");
	this.shape_9.setTransform(14.7,184.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("ABKCqIAAi5IiTC5IgaAAIAAjfIAaAAIAAC6ICTi6IAaAAIAADfgAgZhuQgNgFgIgJQgJgJgGgLQgEgMAAgOIAXAAQAAAUAOAMQAMANATgBQATABANgNQAMgMAAgUIAYAAQAAAOgFAMQgFALgJAJQgJAJgMAFQgNAEgPAAQgOAAgOgEg");
	this.shape_10.setTransform(221.1,123.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhjCXIAIgVQAQAIALAAQARAAANgPQAOgPAOgiIAFgMIhvjfIAfAAIBNCfIAOAhIANgiIA8ieIAeAAIhbDfIgWAxQgKAUgJALQgKALgKAEQgKAFgMAAQgSAAgUgLg");
	this.shape_11.setTransform(195,134.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AhWBwIAAjfIBJgBQAWAAAQADQARAEAMAGQAMAHAGALQAGALAAAQQAAASgLAPQgNAPgVADIAAABQAOACAKADQAKAEAHAHQAGAHADAJQAEAJAAALQAAAPgHANQgGALgNAIQgMAIgTAEQgTAFgXAAgAg8BYIAzABIAcgCQANgDAJgFQAJgFAEgIQAFgIAAgKQAAgKgEgIQgEgHgIgFQgJgFgMgCIgcgDIg2AAgAg8hXIAABMIA8AAQAWAAAOgKQAOgLABgTQAAgKgGgIQgEgHgJgFQgPgHgbAAg");
	this.shape_12.setTransform(171.6,129.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgMBwIAAjFIhZAAIAAgaIDLAAIAAAaIhZAAIAADFg");
	this.shape_13.setTransform(148,129.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgeBsQgVgIgQgPQgQgQgJgVQgJgWAAgaQAAgXAJgWQAIgUAQgRQAPgPAUgKQAVgIAWgBQAcABAUAGQAYAHAPAOIgNAWQgOgNgTgGQgRgGgVAAQgPAAgRAHQgQAHgMANQgMAMgHAQQgHASAAASQAAAVAHARQAHARANAMQANAMARAHQAQAGATAAQAUAAATgJQATgIALgOIAOATQgOARgYAKQgWAKgagBQgXAAgXgIg");
	this.shape_14.setTransform(125.2,129.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgsBvQgMgFgJgIQgKgJgFgMQgFgNAAgPQAAgRAHgNQAGgNAMgHQALgJAQgFQAQgEARAAQAOAAAPADQASAFANAJIgCglQgBgRgGgKQgGgMgLgGQgNgGgUAAQgRAAgPAEQgNAEgQAJIgHgVQAQgKARgFQATgGARAAQAXAAARAGQAQAGAKAMQAJALAEARQAFAQAAAWIAACKIgaAAIAAgjQgNARgQAJQgcAMgSAAQgQAAgNgFgAgmALQgJAGgFAJQgFAJAAAMQAAALAEAIQADAIAHAGQAOALAWAAQARAAAZgLQANgIAMgQIAAgmQgNgJgOgEQgPgFgRAAQgWAAgRALg");
	this.shape_15.setTransform(100.5,129.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AA8BwIAAhfQgNAIgQAGQgTAFgSAAQgTAAgPgFQgOgFgKgKQgLgLgEgOQgGgPAAgWIAAhBIAcAAIAAA/QAAAPAEAMQAEALAHAJQAIAFAKAEQALAEANAAQASAAARgGQAPgFAKgFIAAhrIAaAAIAADfg");
	this.shape_16.setTransform(77.1,129.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AhjCXIAIgVQAQAIALAAQARAAANgPQAOgPAOgiIAFgMIhvjfIAfAAIBNCfIAOAhIANgiIA8ieIAeAAIhbDfIgWAxQgKAUgJALQgKALgKAEQgKAFgMAAQgSAAgUgLg");
	this.shape_17.setTransform(53.9,134.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("ABLBwIAAi5IiUC5IgbAAIAAjfIAbAAIAAC6ICUi6IAaAAIAADfg");
	this.shape_18.setTransform(16.1,129.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,87.6,287.9,132.4);


(lib.Symbol30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAoBwIAAhzIhOBzIhMAAIAAjfIBMAAIAAB0IBOh0IBLAAIAADfg");
	this.shape.setTransform(267.5,94.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AA4BwIAAhvIg3A/IgBAAIg3g/IAABvIhLAAIAAjfIBDAAIBCBMIA/hMIBBAAIAADfg");
	this.shape_1.setTransform(237.4,94.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag1BwQgNgFgJgJQgLgJgEgNQgGgOAAgQQAAgTAGgOQAHgNALgJQAKgJAQgEQAOgFARAAQASAAAYANQABgUgJgKQgIgJgNAAQgRAAgRAFIgYAJIgSg2QAPgJAVgHQAZgGAVgBQAZAAASAHQARAGAMAMQALANAFARQAFARAAAYIAACFIhBAAIAAgUQgIALgRAHQgNAFgTAAQgPABgNgFgAgPAZQgGAFAAAIQAAAHAGAFQAGAEAJAAQATAAAIgMIAAgNQgLgIgQAAQgJAAgGAEg");
	this.shape_2.setTransform(209.5,94);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAXBwIhDhpIAABpIhLAAIAAjfIBLAAIAABoIA7hoIBeAAIhJBrIBUB0g");
	this.shape_3.setTransform(186.4,94.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ah2ClIAAlDIBLAAIAAARQALgKAPgGQARgHASAAQAWAAAUAJQARAIAOAQQANAPAIAVQAGAVAAAZQABAZgJAXQgJAUgPAQQgRASgWAIQgXAKgZAAQgZAAgRgHIAABlgAgYhZQgJAFgKAKIAABFQAPAGAUAAQAKAAAKgCQAIgEAGgHQANgNAAgWQAAgVgMgNQgMgNgSAAQgLAAgKAFg");
	this.shape_4.setTransform(158.2,98.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgrBtQgWgHgPgQQgRgQgJgWQgIgWAAgaQAAgXAIgWQAJgVARgQQAPgRAWgJQAYgJAZAAQAWAAATAIQAUAHAPAOQAQAOAIAUQAJATAAAYQAAAVgFAPIiSAAQAEAPAPAIQAOAIARgBQAaAAAhgPIAUA0QgRANgXAHQgWAGgZAAQgZAAgYgJgAAogYQAAgMgJgJQgKgKgSABQgPgBgMAJQgKAHgFAPIBPAAIAAAAg");
	this.shape_5.setTransform(131,94.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AA4BwIAAhvIg2A/IgCAAIg3g/IAABvIhLAAIAAjfIBDAAIBCBMIA/hMIBBAAIAADfg");
	this.shape_6.setTransform(102,94.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgrBtQgVgHgRgQQgQgQgJgWQgIgWAAgaQAAgXAIgWQAJgVAQgQQARgRAVgJQAYgJAZAAQAVAAAVAIQATAHAPAOQAQAOAIAUQAJATAAAYQAAAVgEAPIiTAAQAEAPAPAIQAOAIARgBQAaAAAhgPIAVA0QgSANgXAHQgWAGgZAAQgaAAgXgJgAAogYQAAgMgJgJQgLgKgQABQgRgBgLAJQgJAHgGAPIBPAAIAAAAg");
	this.shape_7.setTransform(73.6,94.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgiBtQgWgHgRgQQgQgQgJgWQgIgWAAgaQAAgXAIgWQAJgVAQgQQAQgRAVgJQAXgJAYAAQAdAAAYAIQAYAIAPAQIgjA7QgLgLgMgGQgLgEgOAAQgTAAgMAMQgHAHgEAJQgEAJAAAKQAAAKAEAKQAEAJAIAGQAMANATAAQAQAAANgHQALgGALgMIAjA3QgHAKgKAHQgJAHgMAGQgiAKgUAAQgaAAgXgJg");
	this.shape_8.setTransform(48.5,94.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgiBtQgWgHgRgQQgQgQgJgWQgIgWAAgaQAAgXAIgWQAJgVAQgQQAQgRAVgJQAXgJAYAAQAdAAAYAIQAYAIAPAQIgjA7QgLgLgMgGQgLgEgOAAQgTAAgMAMQgHAHgEAJQgEAJAAAKQAAAKAEAKQAEAJAIAGQAMANATAAQAQAAANgHQALgGALgMIAjA3QgHAKgKAHQgJAHgMAGQgiAKgUAAQgaAAgXgJg");
	this.shape_9.setTransform(14.3,94.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,52.4,284,77.7);


(lib.Symbol29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF3838").s().p("AivCuIAAlcIBQAAIAABtIAfgCQAgAAAYAJQAWAIAQAQQAQAPAIAUQAIAVAAAbQAAAcgKAYQgJAXgTAQQgSARgZAJQgnAJgXAAgAhfAJIAABZIAYACQAMAAAJgDQAKgDAGgGQAGgGAEgJQADgJAAgMQAAgMgEgJQgDgIgHgFQgNgLgXAAgABgCuIAAlcIBQAAIAAFcg");
	this.shape.setTransform(330.6,90.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF3838").s().p("AgDCxQgSgDgRgGQgRgHgPgJQgOgJgMgMQgMgMgKgOQgJgOgHgSQgGgQgEgSQgDgTAAgUQAAgRADgSQADgSAFgQQAGgQAJgPQAJgPALgLQAMgNAOgJQAOgLARgGQASgIATgDQASgDAXgBQAXAAAoALQAbAKARAQIgkA8QgRgKgNgFQgTgHgWAAQgVABgPAGQgSAIgNAMQgOAOgHAUQgIAUAAAYQAAAXAIATQAHAUAOAOQAOAOATAHQASAJAYgBQATABATgHQAVgGARgNIAeA8QgIAJgMAHQgMAIgPAFQgrALgYAAQgUABgRgEg");
	this.shape_1.setTransform(292.6,90.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF3838").s().p("AhPCpQgPgEgHgGIAchEQAMAJAMgBQAKABAGgEQAHgDADgHIAFgLIiXj4IBbAAIBgCrIBHirIBRAAIh2EIQgJAVgKAPQgLAQgMAKQgKALgPAFQgPAGgSAAQgPgBgQgFg");
	this.shape_2.setTransform(258.2,90.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF3838").s().p("ABfCvIgdhKIiIAAIgdBKIhRAAICSlcIBFAAICSFcgAAkAaIglhhIgnBhIBMAAg");
	this.shape_3.setTransform(222.6,90.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF3838").s().p("ABKCvIhKh2IhJB2IheAAIB1ixIhwirIBfAAIBFBwIBDhwIBfAAIhxCrIB1Cxg");
	this.shape_4.setTransform(187.6,90.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF3838").s().p("AhAAjIAAhFICBAAIAABFg");
	this.shape_5.setTransform(161.7,94);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF3838").s().p("AiaCtIABhQQANADAJgFQAMgFAIgSQALgVAHgoQAFgaAIhWIAFhGIDmAAIAAFcIhQAAIAAkRIhLAAIgHBCQgMBRgJAeQgGAWgHAQQgIAQgJAMQgJALgKAIQgKAHgNADQgLADgOABg");
	this.shape_6.setTransform(132.5,90.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF3838").s().p("AiaCtIABhQQANADAJgFQAMgFAIgSQALgVAHgoQAFgaAIhWIAFhGIDmAAIAAFcIhQAAIAAkRIhLAAIgHBCQgMBRgJAeQgGAWgHAQQgIAQgJAMQgJALgKAIQgKAHgNADQgLADgOABg");
	this.shape_7.setTransform(95.8,90.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF3838").s().p("AhPCpQgPgEgHgGIAchEQAMAJAMgBQAKABAGgEQAHgDADgHIAFgLIiXj4IBbAAIBgCrIBHirIBRAAIh2EIQgJAVgKAPQgLAQgMAKQgKALgPAFQgPAGgSAAQgPgBgQgFg");
	this.shape_8.setTransform(61.7,90.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF3838").s().p("AgnCyIAAguQgtgEgTgGQgjgPgOgLQgKgKgIgKQgIgLgGgNQgFgMgDgPQgCgOAAgOQAAgRACgOQADgOAGgNQAFgMAJgLQAHgLALgIQANgMAkgPQASgGAtgFIAAglIBOAAIAAAlQAWABAoAKQAUAGAfAVQAKAIAIALQAIALAGAMQAFANADAOQADAOAAARQAAAOgDAOQgDAOgFANQgGANgHALQgJALgKAIIgXAQIgbALQgoAKgXAAIAAAugAAnA6QAUAAAOgFQANgDAIgJQAIgHAFgMQADgMABgNQgBgOgDgKQgEgLgIgJQgJgJgNgFQgOgGgUAAgAhHg+QgNAGgKAJQgHAIgEALQgFAMAAANQAAANAFAMQAEALAIAIQAJAIAOAEQANAFASAAIAAh9QgTABgNAEg");
	this.shape_9.setTransform(23.1,90.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAoCnIAAh2IhPB2IhKAAIAAjfIBKAAIAABzIBPhzIBKAAIAADfgAgkhXQgQgHgLgMQgKgLgFgQQgEgPgBgSIBBAAQAAAPAGAHQAGAHAIAAQAIAAAFgHQAFgHABgPIBAAAQABARgGAQQgFAPgKAMQgLAMgPAGQgRAHgUAAQgVAAgRgGg");
	this.shape_10.setTransform(184,36.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ag1BwQgNgFgKgJQgKgJgEgNQgGgOAAgRQAAgSAHgOQAFgNAMgJQAKgJAPgEQAPgFARAAQASAAAYAMQABgTgIgKQgJgJgNAAQgRAAgQAFIgZAJIgSg2QAPgKAVgFQAZgIAUAAQAaABASAGQARAGAMAMQALAMAFASQAFASAAAXIAACGIhBAAIAAgVQgIALgQAHQgOAFgTAAQgPABgNgFgAgPAZQgGAFAAAIQAAAIAGAEQAGAEAJAAQATAAAIgMIAAgOQgKgHgRAAQgJAAgGAEg");
	this.shape_11.setTransform(157.8,41.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Ah1ClIAAlDIBKAAIAAARQALgKAPgGQARgHASAAQAWAAAUAJQASAIANAPQANAQAHAVQAIAVgBAZQAAAagIAWQgIAUgRAQQgQARgWAJQgWAKgZAAQgaAAgRgHIAABlgAgYhZQgJAEgKALIAABEQAPAHAVAAQAKAAAIgCQAJgEAHgHQAMgOgBgVQAAgVgLgNQgMgNgTAAQgKAAgKAFg");
	this.shape_12.setTransform(133.1,46.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAnBwIAAh0IhOB0IhLAAIAAjfIBLAAIAABzIBOhzIBMAAIAADfg");
	this.shape_13.setTransform(104.2,41.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgYCyIgZgIQgXgJgQgUQgQgSgIgcQgJgaAAghQAAggAFgZQAEgcAKgYQAKgYAQgRQASgSAYgLQAQgHAkgJIAUgHQAKgFAIgJIAnA+QgLAMgNAHQgKAGgQAEQgjAIgRAJQgRAJgJAPQgKAPgDAVIABAAQAKgNATgJQASgKAUAAQAWAAATAIQASAHANAPQANAOAIATQAHAUAAAZQAAAYgJAVQgIAVgPAQQgRAQgVAJQgXAKgbAAgAgXAgQgMAHgGANQABAYAKAQQAFAJAIAEQAJAGAIAAQAUgBALgNQALgLAAgTQAAgSgKgLQgKgNgTgBQgOAAgMAIg");
	this.shape_14.setTransform(76.2,35.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgyBtQgYgJgQgQQgQgQgJgWQgIgWAAgYQAAgYAIgVQAJgWAQgQQAQgQAYgJQAXgJAbAAQAcAAAXAJQAYAJAQAQQAQAQAJAWQAJAVAAAYQAAAYgJAWQgJAWgQAQQgQAQgYAJQgXAJgcAAQgbAAgXgJgAgegiQgHAGgDAJQgEAKABAJQAAAUAMAPQANANASAAQATAAAMgNQAHgHADgIQAEgJAAgLQAAgUgOgOQgNgNgSAAQgSAAgMANg");
	this.shape_15.setTransform(48.8,41.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgDCxQgSgDgRgHQgRgFgPgKQgOgJgMgMQgMgMgKgPQgJgOgHgQQgGgRgEgSQgDgUAAgTQAAgSADgRQADgSAFgQQAGgQAJgPQAJgOALgNQAMgMAOgJQAOgLARgGQASgIATgDQASgEAXAAQAXAAAoALQAbAKARAQIgkA8QgRgLgNgEQgTgHgWABQgVAAgPAGQgSAIgNANQgOANgHAUQgIAVAAAXQAAAWAIAUQAHATAOAPQAOAOATAHQASAJAYgBQATAAATgFQAVgIARgMIAeA8QgIAJgMAHQgMAHgPAGQgrAMgYAAQgUAAgRgEg");
	this.shape_16.setTransform(18.9,35.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,355,132.4);


(lib.Symbol28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgsBlQgWgKgHgLIANgQQAJALATAHQASAHAOAAQAVAAAMgKQAIgFADgHQAFgHAAgKQgBgJgFgHQgEgHgJgFQgHgEgggLQgbgHgNgLQgJgHgFgKQgEgLAAgOQAAgNAEgKQAFgLAKgHQAIgIANgEQANgDAOAAQAUAAATAGQARAHAKAKIgLATQgJgKgPgFQgPgGgQAAQgSAAgMAKQgMAKAAAPQABAKAEAHQAFAHAJAFQAJAGAeAKQAcAIAMAJQAJAHAFAKQAEAKABANQgBAQgFAMQgHALgLAIQgKAHgOAEQgNADgOAAQgWAAgWgJg");
	this.shape.setTransform(269.8,68.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgtBnQgPgGgLgLQgKgMgGgRQgFgTAAgXIAAh6IAZAAIAAB0QAAATADAOQAEAPAIAJQAJAKAMAEQAMAFARAAQAUAAAVgMQASgKAMgPIAAibIAYAAIAADTIgYAAIAAghQgNAQgVAKQgeALgPAAQgUAAgPgFg");
	this.shape_1.setTransform(246.7,69);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgTCkQgIgFgGgGQgGgIgCgKQgDgMAAgOIAAkTIAYAAIAAEFQAAAZAHAMQAHAMAPAAQAQAAAOgLIAGAUQgIAGgLAEQgMAEgOAAQgKAAgJgDg");
	this.shape_2.setTransform(229,63.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhiCmIAAlKIBRgBQAVAAAiAJQAWAHAOAPQANAOAHATQAFAQAAAUQAAAUgHARQgHAUgOALQgPAPgWAIQggAIgTAAIg3gBIAACFgAhIiLIAACSIA2ADQAUAAASgFQARgFAMgKQALgKAGgOQAGgOAAgRQAAgRgFgNQgFgOgLgKQgLgKgQgGQgSgFgVAAg");
	this.shape_3.setTransform(208.1,62.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag4ClIB5kxIifAAIAAgZIC9AAIAAAPIh8E7g");
	this.shape_4.setTransform(170.4,62.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgiBnQgUgIgQgPQgPgPgHgUQgJgVAAgYQAAgWAIgUQAGgUAOgPQAOgQAUgIQAVgIAYAAQAUAAASAGQASAHANANQANANAHARQAHASAAAWIgBASIiuAAQAAATAHAPQAHAPALALQALALAQAGQAQAFARAAQAVAAATgHQASgHALgMIAIATQgNAPgXAIQgUAHgXAAQgWAAgWgHgABNgOQAAgQgGgOQgFgNgJgKQgKgJgNgFQgOgFgRAAQgPAAgPAFQgNAGgLAJQgKAKgGANQgGAOgBAPICXAAIAAAAg");
	this.shape_5.setTransform(135.7,68.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("ABGBsIAAhzQAAgTgEgPQgEgOgJgKQgJgJgNgFQgNgFgSAAQgTAAgUAKQgTAJgLAOIAACfIgZAAIAAjTIAZAAIAAAeQANgPAUgJQAWgKAUAAQAWAAAQAGQARAFALAMQALALAGASQAGASAAAZIAAB4g");
	this.shape_6.setTransform(110.3,68.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgsBmQgUgIgPgPQgPgPgIgUQgIgVAAgXQAAgWAIgVQAIgUAPgPQAPgPAUgIQAVgIAXAAQAYAAAVAIQAUAIAPAPQAPAPAJAUQAHAVABAWQgBAXgHAVQgJAUgPAPQgPAPgUAIQgVAIgYAAQgXAAgVgIgAgghQQgQAGgMAMQgMAMgFAQQgHAQAAASQAAASAHARQAFAQAMAMQAMAMAQAGQAQAGAQAAQASAAAQgGQAQgGALgMQAMgMAGgQQAHgQAAgTQAAgSgHgQQgGgQgMgMQgLgLgQgHQgQgGgSAAQgQAAgQAGg");
	this.shape_7.setTransform(83.6,68.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("ABGClIAAh1QAAgUgEgOQgEgOgJgHQgJgKgNgFQgNgEgSAAQgTgBgUALQgTAJgLALIAAChIgZAAIAAlKIAZAAIAACUQANgOAUgKQAWgJAUAAQAWAAAQAGQARAGALALQALALAGARQAGASAAAZIAAB5g");
	this.shape_8.setTransform(57.3,62.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhiCmIAAlKIBRgBQAVAAAiAJQAWAHAOAPQANAOAHATQAFAQAAAUQAAAUgHARQgHAUgOALQgPAPgWAIQggAIgTAAIg3gBIAACFgAhIiLIAACSIA2ADQAUAAASgFQARgFAMgKQALgKAGgOQAGgOAAgRQAAgRgFgNQgFgOgLgKQgLgKgQgGQgSgFgVAAg");
	this.shape_9.setTransform(31.5,62.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgLCbIAAjTIAXAAIAADTgAgKh+QgGgFAAgIQAAgPAQAAQAGAAAFADQAFAFAAAHQAAAIgFAFQgFAFgGgBQgFABgFgFg");
	this.shape_10.setTransform(10.1,63.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2,29.2,279.8,73.7);


(lib.Symbol27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABRD4IAAj2IisD2IhQAAIAAmKIBaAAIAAD0ICtj0IBQAAIAAGKgAgoijQgWgHgQgMQgPgLgHgRQgJgRABgUIBUAAQAAAQAIAGQAIAGARAAQARAAAIgFQAIgGAAgRIBUAAQABAUgJARQgHARgQAMQgQALgVAHQgWAGgbAAQgaAAgXgGg");
	this.shape.setTransform(257.1,52.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABsDFIghhTIiaAAIghBTIhbAAICkmJIBPAAICkGJgAApAeIgqhuIgtBuIBXAAg");
	this.shape_1.setTransform(214.3,57.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AiLDGIAAmKIB5gBQAcAAAuALQAUAHAdAWQASASAJAYQAIAXAAAaQAAAbgKAYQgKAWgTASQgUATgaAKQgcALggAAQgeAAgOgBIAACGgAgxhvIAABbIAqADQATAAAPgKQAHgGAFgJQAFgKAAgOQAAgNgEgJQgEgJgIgFQgNgKgYAAg");
	this.shape_2.setTransform(177.6,57.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhwDFIAAmJIDhAAIAABVIiGAAIAAE0g");
	this.shape_3.setTransform(146,57.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("ABSDFIAAjzIiuDzIhPAAIAAmJIBbAAIAAD0ICsj0IBQAAIAAGJg");
	this.shape_4.setTransform(107.4,57.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AjGDFIAAmKIBbAAIAAB8IAjgCQAkAAAbAJQAZAJASASQASASAJAWQAJAZAAAeQAAAggLAaQgLAagVATQgVATgcAKQgrAKgaAAgAhrAKIAABlIAaACQAOAAALgDQAKgDAIgHQAHgHADgKQAEgLAAgOQAAgMgEgKQgEgKgIgGQgOgMgaAAgABsDFIAAmKIBbAAIAAGKg");
	this.shape_5.setTransform(60.1,57.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AiCDEIAAmHQBCgDA1AAQAhAAAaAHQAZAIAQANQAQANAIATQAHARAAAVQAAAegLAWQgLAVgXAPIAAABQALAEAKAHQALAHAHAKQAIAMAFAOQAEAQAAATQAAAegLAYQgLAWgVAQQgTAPgcAHQgbAHgeAAQhQAAgigDgAgoBwQAMADASAAQAYAAAOgLQANgLAAgUQAAgSgNgJQgMgJgVAAIgjAAgAgohvIAABIIAeAAQARAAALgJQAMgKAAgUQAAgRgOgKQgMgJgQAAg");
	this.shape_6.setTransform(18.5,57.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,17.4,283.9,87.7);


(lib.Symbol23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.acehearts();
	this.instance.setTransform(0,0,0.744,0.744);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,164.4,200.9);


(lib.Symbol22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.acespade();
	this.instance.setTransform(0,0,0.744,0.744);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,174.8,221.7);


(lib.Symbol21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.aple();
	this.instance.setTransform(0,0,0.744,0.744);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,251.4,331);


(lib.Symbol20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.seven();
	this.instance.setTransform(0,0,0.744,0.744);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,175.6,215);


(lib.Symbol19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.sevenheart();
	this.instance.setTransform(0,0,0.744,0.744);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,175.6,215);


(lib.Symbol18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.sevenspade();
	this.instance.setTransform(0,0,0.744,0.744);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,176.3,215);


(lib.Symbol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgJApIgIgEQgJgDgDgFIAIgKQAEAEAGADQAHADAFAAQAGAAAEgDQADgDAAgFQAAgDgBgCIgFgEIgNgFQgKgDgFgCQgDgDgCgEQgCgFAAgEQAAgGACgEQACgFAEgDQADgDAFgBQAGgCAFAAQAIABAHADQAHACAFAEIgHALQgEgEgFgCQgGgCgFAAQgFAAgDADQgDADgBAEQAAADACADQACABADACIANAGQAKADAFACQADADACADQACAEAAAFQAAAHgCAEQgDAFgFADQgEADgFACIgLABIgJgBg");
	this.shape.setTransform(201.8,15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgRAnQgGgDgEgDQgDgFgDgGQgCgHAAgIIAAguIAPAAIAAAqIABALQABAEADADQACADAEABQAEACAFAAQAFABAHgEQAGgEAEgFIAAg2IAOAAIAABOIgOAAIAAgMQgFAGgHADQgKAFgFAAQgHAAgFgCg");
	this.shape_1.setTransform(192.9,15.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgHA9IgFgDQgDgEgBgEIgBgKIAAhmIAOAAIAABfQAAAJACADQABAFAFAAQAEgBAGgDIADALIgHAEQgGACgFAAQgEAAgDgCg");
	this.shape_2.setTransform(186.2,12.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgmA+IAAh7IAggBQAIABANADQAJADAFAGQAFAFADAIQACAGAAAHQAAAJgDAGQgDAIgFADQgGAFgIAEQgNADgFAAIgTAAIAAAvgAgXguIAAAuIASAAQAFABAGgBQAFgBAEgDQAEgEACgEQACgEAAgHQAAgFgCgFQgBgEgEgEQgDgCgGgCQgGgCgFAAg");
	this.shape_3.setTransform(178.2,12.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgXA+IArhtIg4AAIAAgOIBJAAIAAAJIgsByg");
	this.shape_4.setTransform(163.9,12.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgMAnQgJgDgFgFQgGgHgDgHQgDgIAAgJQAAgHADgIQACgHAGgGQAFgGAIgDQAIgEAHAAQAIAAAHADQAHADAFAFQAGAEACAIQADAGAAAJIgBAHIg8AAQAAAGADAFQACAEAEADQADADAGABQAEACAFAAQAHAAAGgCQAHgDAEgDIAEAMQgFAFgJACQgHACgJABQgIgBgHgCgAAYgGQAAgEgCgFQgCgEgDgCQgCgDgFgCQgEgBgFAAQgEAAgEABQgFACgDADIgFAHIgDAIIAvAAIAAAAg");
	this.shape_5.setTransform(151,15);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAWAoIAAgqIgBgLQgCgEgDgDQgCgDgFgBQgEgCgFAAQgFAAgGADQgGADgEAEIAAA4IgPAAIAAhOIAPAAIAAAJQAEgEAHgDQAHgDAGAAQAIAAAGABQAGADAEAEQAFAEACAGQACAIAAAJIAAAsg");
	this.shape_6.setTransform(141.4,14.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgQAmQgIgDgFgFQgGgGgEgIQgCgIAAgIQAAgIACgHQAEgIAGgFQAFgGAIgDQAIgDAIgBQAJABAIADQAIADAGAGQAFAFAEAIQACAHAAAIQAAAIgCAIQgEAIgFAGQgGAFgIADQgIAEgJAAQgIAAgIgEgAgKgZQgEACgFAEQgDAEgCAFQgDAGAAAEQAAAGADAFQACAGADADIAJAGQAGACAEAAQAFAAAGgCQAFgBAEgFQADgDACgGQADgFAAgGQAAgEgDgGQgCgFgDgEQgEgEgFgCQgGgCgFAAQgEAAgGACg");
	this.shape_7.setTransform(131.4,15);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAWA+IAAgsIgBgLQgBgEgEgDQgDgBgDgCQgFgBgFAAQgFAAgGADQgGABgEAEIAAA6IgPAAIAAh7IAPAAIAAA2QAFgFAGgDQAIgDAFAAQAIAAAGACQAGACAFAFQAEAEACAFQACAHABAJIAAAug");
	this.shape_8.setTransform(121.5,12.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgmA+IAAh7IAggBQAIABANADQAJADAFAGQAFAFADAIQACAGAAAHQAAAJgDAGQgDAIgFADQgGAFgIAEQgNADgFAAIgTAAIAAAvgAgXguIAAAuIASAAQAFABAGgBQAFgBAEgDQAEgEACgEQACgEAAgHQAAgFgCgFQgBgEgEgEQgDgCgGgCQgGgCgFAAg");
	this.shape_9.setTransform(111.6,12.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgFA7IAAhOIALAAIAABOgAgEgrQgEgCAAgFQAAgDAEgDQACgCACAAQADAAADACQACADAAADQAAAFgCACQgDADgDAAQgCAAgCgDg");
	this.shape_10.setTransform(103.4,13);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgqA+IAAh7IAdAAIAAAnIALgBQAKAAAJADQAJADAGAFQAFAGADAGQADAIAAAKQAAAJgDAJQgEAIgHAGQgKAHgGACQgNAEgIAAgAgNADIAAAgIAIABIAGgBQAEgCACgCQADgCABgDQACgDAAgFQAAgEgCgDQgBgEgDgCQgFgDgHAAg");
	this.shape_11.setTransform(91.9,12.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgMA+IAAhgIgmAAIAAgbIBlAAIAAAbIglAAIAABgg");
	this.shape_12.setTransform(80.5,12.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAiA+IgLgaIgvAAIgKAaIgdAAIAzh7IAYAAIA1B7gAAMAJIgMghIgOAhIAaAAg");
	this.shape_13.setTransform(68.7,12.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgrA+IAAh7IAmgBQAIABAPADQAGACAJAIQAGAFACAIQADAHAAAJQAAAHgDAJQgDAFgGAGQgHAGgHADQgKADgIAAIgOAAIAAAqgAgOgiIAAAcIANABQAEAAAFgDIAEgEQABgDAAgFIgBgHIgDgFQgEgDgHAAg");
	this.shape_14.setTransform(57,12.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgiA+IAAh7IBGAAIAAAbIgpAAIAABgg");
	this.shape_15.setTransform(47,12.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAaA+IAAhMIg2BMIgZAAIAAh7IAdAAIAABMIA1hMIAZAAIAAB7g");
	this.shape_16.setTransform(34.7,12.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("Ag+A+IAAh7IAdAAIAAAnIALgBQAMAAAIADQAHADAGAFQAFAGADAGQADAIAAAKQAAAJgEAJQgDAIgHAGQgGAGgIADQgOAEgIAAgAghADIAAAgIAIABIAIgBQAEgCACgCQACgCABgDIABgIIgBgHIgEgFQgEgEgIAAgAAiA+IAAh7IAdAAIAAB7g");
	this.shape_17.setTransform(19.7,12.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgoA+IAAh7IAmgBQAJAAAIADQAHACAGAEQAFAEACAGQACAGAAAGQAAAKgDAHQgEAHgGAEIAAABQADABADABQADACACADQADAEACAEQACAFAAAGQAAAKgFAHQgDAIgHAFQgGAEgIADQgJACgIAAIgkgBgAgLAjIAJABQAGAAAEgDQAFgEAAgGQAAgGgFgDQgDgCgGAAIgKAAgAgLgiIAAAWIAJAAQAEAAADgCQAEgDAAgHQAAgFgEgDQgEgDgEAAg");
	this.shape_18.setTransform(6.5,12.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,206.4,27.9);


(lib.Symbol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.logo();
	this.instance.setTransform(-3.4,0,0.498,0.498);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.4,0,153.8,29.4);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.mob();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,150,267);


(lib.Символ34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ33();
	this.instance.setTransform(0.1,0,1.147,1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Symbol24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Symbol 31
	this.instance = new lib.Symbol31();
	this.instance.setTransform(458,138.7,0.516,0.516,0,0,0,266.4,39);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(95).to({_off:false},0).to({y:129.5,alpha:1},19).wait(79).to({y:120.4,alpha:0},15).to({_off:true},1).wait(91));

	// Symbol 30
	this.instance_1 = new lib.Symbol30();
	this.instance_1.setTransform(393.8,113.4,0.516,0.516,0,0,0,142,39);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(92).to({_off:false},0).to({y:104.3,alpha:1},19).wait(79).to({y:95.1,alpha:0},15).to({_off:true},4).wait(91));

	// Symbol 29
	this.instance_2 = new lib.Symbol29();
	this.instance_2.setTransform(465.4,87.4,0.516,0.516,0,0,0,280.7,39);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(89).to({_off:false},0).to({y:78.2,alpha:1},19).wait(79).to({y:69.1,alpha:0},15).to({_off:true},7).wait(91));

	// Symbol 28
	this.instance_3 = new lib.Symbol28();
	this.instance_3.setTransform(414.7,108.1,0.664,0.664,0,0,0,147.4,38.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(77).to({y:98.9,alpha:0},15).to({_off:true},115).wait(3).to({_off:false,y:117.2},0).to({y:108.1,alpha:1},19).wait(71));

	// Symbol 27
	this.instance_4 = new lib.Symbol27();
	this.instance_4.setTransform(400.3,75.6,0.664,0.664,0,0,0,125.7,38.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(74).to({y:66.5,alpha:0},15).wait(118).to({y:84.8},0).to({y:75.6,alpha:1},19).wait(74));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(315.5,61.4,188.4,89.2);


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol15();
	this.instance.setTransform(127.6,35.8,1,1,0,0,0,103.2,13.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FF3838","#FF7A20"],[0.153,1],-120.9,0,120.8,0).s().p("Aw1FNQiCAAAAiCIAAmVQAAiCCCAAMAhrAAAQCCAAAACCIAAGVQAACCiCAAg");
	this.shape.setTransform(128.5,36.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#0EB757","#24EC6B"],[0.153,1],-120.9,0,120.8,0).s().p("Aw1FNQiCAAAAiCIAAmVQAAiCCCAAMAhrAAAQCCAAAACCIAAGVQAACCiCAAg");
	this.shape_1.setTransform(128.5,36.1,1,1,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).to({state:[{t:this.shape_1},{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(7.7,2.8,241.7,66.8);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// sevenspade.png
	this.instance = new lib.Symbol18();
	this.instance.setTransform(-71,336.2,1.188,1.188,0,-29.5,-30,88,190.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:88.1,skewX:4.5,skewY:4,x:-78.2,y:93.2},24,cjs.Ease.get(1)).to({skewX:0.5,skewY:0,x:-98.2,y:115.1},22).to({skewX:0,x:-62.9,y:86.3},16).to({x:-82.9,y:106.3},15).wait(49).to({regX:88,scaleX:1.29,scaleY:1.28,skewX:35.5,skewY:28.3,x:-83,y:106.4},20).wait(50).to({regX:88.1,scaleX:1.19,scaleY:1.19,skewX:0,skewY:0,x:-82.9,y:106.3,alpha:0},15).to({_off:true},10).wait(79));

	// sevenheart.png
	this.instance_1 = new lib.Symbol19();
	this.instance_1.setTransform(-98.1,119.3,1.188,1.188,0,0.5,0,87.7,192.2);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(48).to({_off:false},0).to({regX:87.8,skewX:0,x:-71.8,y:94.1},16).to({x:-87.8,y:110.1},15).wait(49).to({regX:87.5,scaleX:1.26,scaleY:1.26,skewX:24.2,skewY:21.3,x:-88.1},20).wait(46).to({regX:87.8,scaleX:1.19,scaleY:1.19,skewX:0,skewY:0,x:-87.8,alpha:0},15).to({_off:true},12).wait(79));

	// seven.png
	this.instance_2 = new lib.Symbol20();
	this.instance_2.setTransform(-97.5,120.4,1.188,1.188,0,0.5,0,87.7,192.2);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(50).to({_off:false},0).to({regX:87.8,skewX:0,x:-79.6,y:100},16).to({x:-91.6,y:112},15).wait(49).to({regX:87.7,regY:192.1,scaleX:1.23,scaleY:1.23,skewX:15,skewY:14.6},20).wait(42).to({regX:87.8,regY:192.2,scaleX:1.19,scaleY:1.19,skewX:0,skewY:0,alpha:0},15).to({_off:true},14).wait(79));

	// acespade.png
	this.instance_3 = new lib.Symbol22();
	this.instance_3.setTransform(-104.5,118.2,1.16,1.16,0,0.5,0,83.4,197.8);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(52).to({_off:false},0).to({skewX:0,x:-95.6,y:104.2},16).to({x:-103.6,y:112.2},15).wait(50).to({rotation:7.2,y:112.3},20).wait(37).to({rotation:0,y:112.2,alpha:0},15).to({_off:true},16).wait(79));

	// acehearts.png
	this.instance_4 = new lib.Symbol23();
	this.instance_4.setTransform(-99.2,123.4,1.16,1.16,0,0.5,0,82.2,200.8);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(54).to({_off:false},0).to({skewX:0,x:-98.3,y:113.8},16).to({x:-102.3,y:117.8},15).wait(103).to({alpha:0},15).to({_off:true},18).wait(79));

	// aple.png
	this.instance_5 = new lib.Symbol21();
	this.instance_5.setTransform(-103.1,280.7,1.188,1.188,-30,0,0,125.7,165.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({rotation:4,x:-74,y:29},24,cjs.Ease.get(1)).to({regX:125.6,regY:165.4,rotation:-0.2,x:-97.6,y:50.6},22).wait(151).to({rotation:-0.2},0).to({regY:165.3,rotation:-3.4,x:-108.3,y:59.3},27).to({regX:125.5,regY:165.2,scaleX:1.33,scaleY:1.33,rotation:3.5,x:-97.6,y:50.5},55).to({rotation:33.5,x:204.8,y:93.6},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-330.7,35.8,455.2,489.7);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Symbol 11
	this.instance = new lib.Symbol11();
	this.instance.setTransform(-90.5,3.2,0.477,0.477,-45,0,0,74.9,133.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-4.8},26).to({y:3.2},28).wait(1));

	// Symbol 11
	this.instance_1 = new lib.Symbol11();
	this.instance_1.setTransform(7,128.7,1,1,0,0,0,75,133.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:136.7},26).to({y:128.7},28).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-160.9,-67.3,242.9,329.5);


(lib.Symbol32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol16();
	this.instance.setTransform(128,34.5,1,1,0,0,0,128,34.5);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(7.7,2.7,241.7,66.8);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Symbol32();
	this.instance.setTransform(138,34.5,1,1,0,0,0,128,34.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:128.1,regY:34.4,scaleX:1.05,scaleY:1.05,x:138.1,y:34.4},19).to({regX:128,regY:34.5,scaleX:1,scaleY:1,x:138,y:34.5},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(17.7,2.8,241.7,66.8);


// stage content:



(lib.iphone7kz_240400 = function(mode,startPosition,loop) {
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

	// Layer 7
	this.instance = new lib.Symbol24();
	this.instance.setTransform(-113.3,76.1,0.798,0.798,0,0,0,147.2,63.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Symbol 14
	this.instance_1 = new lib.Symbol14();
	this.instance_1.setTransform(79.5,33.8,1.147,1.147,0,0,0,45.6,10.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Symbol 13
	this.instance_2 = new lib.Symbol13();
	this.instance_2.setTransform(112.8,359.7,0.809,0.809,0,0,0,128,34.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Symbol 12
	this.instance_3 = new lib.Symbol12();
	this.instance_3.setTransform(104.1,540.8,0.852,0.852,0,0,0,-115.2,249.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Symbol 10
	this.instance_4 = new lib.Symbol10();
	this.instance_4.setTransform(235.9,335.6,1,1,0,0,0,75,133.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// Layer 3
	this.buty = new lib.Символ34();
	this.buty.setTransform(124,320.4,1.368,3.397,0,0,0,0.1,0.2);
	new cjs.ButtonHelper(this.buty, 0, 1, 2, false, new lib.Символ34(), 3);

	this.timeline.addTween(cjs.Tween.get(this.buty).wait(1));

	// Layer 8
	this.instance_5 = new lib.Symbol33();
	this.instance_5.setTransform(122.2,400,0.389,2.825,0,0,0,325.9,141.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(40.5,63.2,387.8,936.9);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;