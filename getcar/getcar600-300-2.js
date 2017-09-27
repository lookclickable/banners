(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 600,
	height: 300,
	fps: 24,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



(lib.back = function() {
	this.spriteSheet = ss["getcar600_300_2_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap5 = function() {
	this.spriteSheet = ss["getcar600_300_2_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.mitsubishi7 = function() {
	this.spriteSheet = ss["getcar600_300_2_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Символ36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CC00").s().p("Aiug0QAaAKBCAhQAqASASAKQAJAFAAgDQABgDAygpQAzgrAjghQAjggAQgCIhjCTQg5BUgVAkQgDgMipiug");
	this.shape.setTransform(15.3,13.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.2,0,35.2,27);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#09090A").s().p("AAWBEIAAg7IgrAAIAAA7IgaAAIAAiHIAaAAIAAA7IArAAIAAg7IAbAAIAACHg");
	this.shape.setTransform(412.2,20.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#09090A").s().p("AAXBgIAAhdIgBAAIgsBdIgaAAIAAiGIAaAAIAABaIABAAIAshaIAZAAIAACGgAgZhGQgJgJAAgPIAAgBIATAAQAAAJAFAEQADAGAHAAQAHAAAEgGQAFgEAAgJIATAAIABABQAAAPgKAJQgJAJgRAAQgPAAgKgJg");
	this.shape_1.setTransform(399.5,17.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#09090A").s().p("AgoA8QgKgLABgTQAAgTANgLQANgKAXAAIAVAAIAAgOQAAgMgGgHQgGgHgJAAQgIAAgFAGQgGAGAAAJIgYABIAAgBQgCgQAOgMQANgMATAAQAVAAAMAMQANALAAAXIAAA9IABAPIACAPIgaAAIgCgLIgBgKQgFAKgKAHQgGAGgMAAQgSAAgKgKgAgRAMQgHAHAAALQAAAJAFAGQAEAGAJAAQAIAAAIgHQAJgGACgKIAAgYIgVAAQgLAAgGAIg");
	this.shape_2.setTransform(387.1,20.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#09090A").s().p("AAcBEIAAhzIghAAIAAAnQAAAngJASQgKATgYAAIgFAAIAAgVIADAAQAMAAAEgMQAEgMAAgfIAAg7IBUAAIAACHg");
	this.shape_3.setTransform(374.3,20.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#09090A").s().p("AAWBEIAAg7IgrAAIAAA7IgbAAIAAiHIAbAAIAAA7IArAAIAAg7IAbAAIAACHg");
	this.shape_4.setTransform(362.2,20.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#09090A").s().p("AgmAzQgPgTAAgfIAAgBQAAgeAPgUQAPgTAXAAQAYAAAPATQAOAUAAAeIAAABQAAAfgOATQgPATgYAAQgXAAgPgTgAgUgkQgHAOAAAWIAAABQAAAWAHAOQAIAOAMAAQAOAAAHgOQAHgOAAgWIAAgBQAAgWgHgOQgIgOgNAAQgMAAgIAOg");
	this.shape_5.setTransform(349.5,20.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#09090A").s().p("AgoA8QgKgLAAgTQAAgTAOgLQAOgKAWAAIAVAAIAAgOQAAgMgGgHQgFgHgKAAQgIAAgGAGQgFAGAAAJIgYABIAAgBQgBgQAMgMQAOgMATAAQAVAAAMAMQANALgBAXIAAA9IABAPIADAPIgZAAIgDgLIgBgKQgGAKgIAHQgIAGgLAAQgSAAgKgKgAgRAMQgHAHAAALQAAAJAFAGQAEAGAJAAQAIAAAIgHQAIgGADgKIAAgYIgVAAQgKAAgHAIg");
	this.shape_6.setTransform(331.5,20.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#09090A").s().p("AAxBEIgdg7IgIAAIAAA7IgYAAIAAg7IgHAAIgeA7IggAAIAqhIIgog/IAgAAIAdA5IAGAAIAAg5IAYAAIAAA5IAHAAIAcg5IAgAAIgnA/IAqBIg");
	this.shape_7.setTransform(316.9,20.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#09090A").s().p("AgyBfIAAi7IAWAAIACARQAGgKAIgEQAIgFAJAAQAVAAANATQAMAUAAAhIAAADQAAAcgMASQgNASgVAAQgIAAgIgEQgIgEgFgHIAABBgAgPhGQgGAFgDAIIAABDQADAIAGAEQAGAEAJAAQALAAAHgNQAHgNAAgTIAAgDQAAgXgHgPQgHgOgLAAQgJAAgGAEg");
	this.shape_8.setTransform(302.2,23.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#09090A").s().p("AAXBEIAAhbIgBAAIgsBbIgaAAIAAiHIAaAAIAABbIABAAIAshbIAZAAIAACHg");
	this.shape_9.setTransform(289.3,20.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#09090A").s().p("AgmBQQgOgUAAgeIAAgEIAAgBIAAgCIAAgdQAAgnANgSQAOgSAZgBQAOgBAIgDQAHgEABgIIATAAIAAABQABATgLAIQgMAIgYABQgQAAgJAKQgKAJABATIABAAQAFgIAKgFQAJgFAJAAQAYAAANAUQAOATAAAcIAAAEQAAAegPAUQgPATgYAAQgXAAgPgTgAgUgHQgHAMAAAVIAAAEQAAAWAHAOQAIANAMAAQAOAAAHgNQAHgOAAgWIAAgEQAAgVgHgMQgHgOgOAAQgNAAgHAOg");
	this.shape_10.setTransform(276.8,17.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#09090A").s().p("AAZBEIAAg0IgXAAIgZA0IgbAAIAdg4QgLgFgHgIQgGgKAAgNQAAgTANgMQANgMAUAAIAyAAIAACHgAgOgoQgFAGAAAKQAAAKAFAGQAFAHAJAAIAZAAIAAguIgYAAQgJAAgGAHg");
	this.shape_11.setTransform(258.1,20.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#09090A").s().p("AgoA8QgJgLgBgTQAAgTAOgLQAOgKAWAAIAVAAIAAgOQAAgMgGgHQgFgHgKAAQgIAAgGAGQgFAGAAAJIgYABIAAgBQgCgQANgMQAOgMATAAQAUAAANAMQAMALAAAXIAAA9IABAPIAEAPIgaAAIgDgLIgBgKQgGAKgIAHQgIAGgLAAQgSAAgKgKgAgRAMQgHAHAAALQAAAJAFAGQAEAGAIAAQAJAAAIgHQAIgGADgKIAAgYIgVAAQgKAAgHAIg");
	this.shape_12.setTransform(246.1,20.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#09090A").s().p("AAWBEIAAg7IgsAAIAAA7IgaAAIAAiHIAaAAIAAA7IAsAAIAAg7IAaAAIAACHg");
	this.shape_13.setTransform(233.7,20.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#09090A").s().p("AgwBEIAAiHIAaAAIAAAzIAXAAQAWAAANAMQANAKAAASQAAAUgNAMQgNAMgWAAgAgWAwIAXAAQALAAAGgGQAFgHABgKQgBgKgFgHQgGgHgLAAIgXAAg");
	this.shape_14.setTransform(221.6,20.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#09090A").s().p("AAdBEIAAhzIghAAIAAAnQAAAngKASQgKATgYAAIgFAAIAAgVIAEAAQALAAAEgMQAEgMAAgfIAAg7IBUAAIAACHg");
	this.shape_15.setTransform(208.3,20.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#09090A").s().p("AAXBEIAAhbIgBAAIgsBbIgZAAIAAiHIAZAAIAABbIABAAIAshbIAZAAIAACHg");
	this.shape_16.setTransform(196.2,20.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#09090A").s().p("AgmBQQgPgUAAgeIAAgEIAAgBIAAgCIAAgdQAAgnAOgSQAOgSAZgBQAPgBAHgDQAIgEgBgIIAVAAIAAABQAAATgMAIQgLAIgZABQgPAAgKAKQgJAJABATIABAAQAGgIAIgFQAKgFAIAAQAYAAAOAUQANATAAAcIAAAEQAAAegOAUQgOATgZAAQgYAAgOgTgAgTgHQgIAMAAAVIAAAEQAAAWAIAOQAGANANAAQANAAAIgNQAHgOAAgWIAAgEQAAgVgHgMQgIgOgNAAQgNAAgGAOg");
	this.shape_17.setTransform(183.7,17.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#09090A").s().p("AgmAzQgOgTAAgfIAAgBQAAgeAOgUQAPgTAXAAQAYAAAPATQAPAUAAAeIAAABQAAAfgPATQgPATgYAAQgXAAgPgTgAgUgkQgGAOgBAWIAAABQABAWAGAOQAIAOAMAAQAOAAAHgOQAHgOAAgWIAAgBQAAgWgHgOQgIgOgNAAQgMAAgIAOg");
	this.shape_18.setTransform(171.1,20.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#09090A").s().p("AApBEIAAhYIgBAAIggBYIgPAAIghhZIgBAAIAABZIgZAAIAAiHIAgAAIAiBnIAAAAIAjhnIAgAAIAACHg");
	this.shape_19.setTransform(156.3,20.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#09090A").s().p("AgmAzQgOgTAAgfIAAgBQAAgeAOgUQAOgTAYAAQAZAAAOATQAPAUAAAeIAAABQAAAfgPATQgOATgZAAQgYAAgOgTgAgUgkQgGAOAAAWIAAABQAAAWAGAOQAIAOAMAAQAOAAAHgOQAHgOAAgWIAAgBQAAgWgIgOQgGgOgOAAQgMAAgIAOg");
	this.shape_20.setTransform(141.6,20.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#09090A").s().p("AgMBEIAAhzIgmAAIAAgUIBlAAIAAAUIgnAAIAABzg");
	this.shape_21.setTransform(129.4,20.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#09090A").s().p("AgxBEIAAiHIAvAAQAVAAANAKQANAJAAATQAAAJgGAIQgFAIgLAEQANAAAHAJQAHAJAAALQAAATgMAKQgMAKgXAAgAgYAxIAbAAQALAAAFgGQAFgFAAgKQAAgKgFgFQgFgFgLAAIgbAAgAgYgIIAYAAQAIgBAGgEQAFgFAAgKQAAgKgGgEQgGgFgJAAIgWAAg");
	this.shape_22.setTransform(117.6,20.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#09090A").s().p("AgnA8QgLgLABgTQAAgTANgLQANgKAXAAIAVAAIAAgOQAAgMgGgHQgGgHgJAAQgIAAgFAGQgGAGAAAJIgZABIAAgBQgBgQAOgMQANgMATAAQAVAAAMAMQANALAAAXIAAA9IABAPIACAPIgaAAIgCgLIgBgKQgFAKgKAHQgGAGgMAAQgSAAgJgKgAgRAMQgHAHAAALQAAAJAFAGQAEAGAJAAQAIAAAIgHQAJgGACgKIAAgYIgVAAQgKAAgHAIg");
	this.shape_23.setTransform(104.8,20.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#09090A").s().p("AAZBEIAAg0IgXAAIgZA0IgbAAIAdg4QgLgFgHgIQgGgKAAgNQAAgTANgMQANgMAUAAIAyAAIAACHgAgOgoQgFAGAAAKQAAAKAFAGQAFAHAJAAIAZAAIAAguIgYAAQgJAAgGAHg");
	this.shape_24.setTransform(86.4,20.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#09090A").s().p("AgoA8QgKgLAAgTQAAgTAOgLQANgKAXAAIAVAAIAAgOQAAgMgGgHQgGgHgJAAQgIAAgFAGQgGAGAAAJIgYABIAAgBQgBgQAMgMQAOgMATAAQAVAAAMAMQANALAAAXIAAA9IAAAPIADAPIgaAAIgCgLIgBgKQgGAKgJAHQgGAGgMAAQgSAAgKgKgAgRAMQgHAHAAALQAAAJAFAGQAEAGAJAAQAIAAAIgHQAIgGADgKIAAgYIgVAAQgKAAgHAIg");
	this.shape_25.setTransform(74.4,20.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#09090A").s().p("AgxBEIAAiHIAvAAQAVAAANAKQANAJAAATQAAAJgGAIQgFAIgLAEQANAAAHAJQAHAJAAALQAAATgMAKQgMAKgXAAgAgYAxIAbAAQALAAAFgGQAFgFAAgKQAAgKgFgFQgFgFgLAAIgbAAgAgYgIIAYAAQAIgBAGgEQAFgFAAgKQAAgKgGgEQgGgFgJAAIgWAAg");
	this.shape_26.setTransform(62.3,20.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#09090A").s().p("AgyBfIAAi7IAWAAIACARQAGgKAIgEQAIgFAJAAQAVAAANATQAMAUAAAhIAAADQAAAcgMASQgNASgVAAQgIAAgIgEQgIgEgFgHIAABBgAgPhGQgGAFgDAIIAABDQADAIAGAEQAGAEAJAAQALAAAHgNQAHgNAAgTIAAgDQAAgXgHgPQgHgOgLAAQgJAAgGAEg");
	this.shape_27.setTransform(49.6,23.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#09090A").s().p("AgiA0QgPgTAAgeIAAgEQAAgeAPgTQAPgTAUAAQAYAAAMAQQAMARAAAcIAAAMIhIAAQAAAVAIANQAHANAOAAQAKAAAJgDQAHgEAHgGIAIAQQgGAHgMAFQgLAEgOAAQgXAAgPgSgAgOgnQgHAKgBARIAuAAIAAgDQAAgPgFgKQgGgKgMAAQgJAAgGALg");
	this.shape_28.setTransform(37.3,20.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#09090A").s().p("AAjBbIAAiiIhGAAIAACiIgZAAIAAi2IB5AAIAAC2g");
	this.shape_29.setTransform(23.4,18.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(11.9,0,410.2,37.2);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgwBBQgTgWABgmIAAgJQgBgmATgWQARgWAfAAQAgAAASAWQARAWABAmIAAAJQAAAngSAVQgSAWggAAQgfAAgRgWgAgQgmQgHALABAXIAAAJQAAAtAWAAQAWAAACglIAAgRQAAgXgHgLQgGgLgLAAQgKAAgGALg");
	this.shape.setTransform(254.1,51.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgUBUIAAiCIgrAAIAAglIB/AAIAAAlIgrAAIAACCg");
	this.shape_1.setTransform(239,51.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag/BUIAAinIA9AAQAbAAAQANQAQAMAAAWQAAAMgHAJQgHAKgNAFQAQABAJAKQAJAKAAAPQAAAwg8AAgAgUAwIAZAAQAIAAAEgFQADgEAAgIQAAgJgEgEQgDgEgHAAIgaAAgAgUgOIASAAQAHAAAEgEQADgEAAgHQAAgRgNAAIgTAAg");
	this.shape_2.setTransform(224.3,51.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgxBJQgOgOAAgWQAAgbARgMQARgPAdAAIAOAAIAAgOQAAgLgEgFQgEgEgGAAQgQAAAAATIgsAAQAAgXASgPQARgQAZAAQAbAAAQAPQAPAOAAAbIAABNQAAAWAGAMIAAADIgsAAIgEgNQgMAQgSAAQgVAAgOgOgAgMAPQgHAHAAAMQAAASAPAAQAFAAAFgDQAFgDADgEIAAgjIgLAAQgJAAgGAIg");
	this.shape_3.setTransform(208.5,51.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhABUIAAinIAsAAIAAAxIAVAAQAdAAASARQAQAQABAZQgBAbgQARQgRAQgeAAgAgUAwIAWAAQAIAAAFgHQAGgGAAgKQAAgYgVAAIgUAAg");
	this.shape_4.setTransform(186.4,51.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgVBUIAAiCIgrAAIAAglICBAAIAAAlIgsAAIAACCg");
	this.shape_5.setTransform(170.7,51.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgxBJQgOgOAAgWQAAgbARgMQARgPAdAAIAOAAIAAgOQAAgLgEgFQgEgEgGAAQgQAAAAATIgsAAQAAgXASgPQARgQAZAAQAbAAAQAPQAPAOAAAbIAABNQAAAWAGAMIAAADIgsAAIgEgNQgMAQgSAAQgVAAgOgOgAgMAPQgHAHAAAMQAAASAPAAQAFAAAFgDQAFgDADgEIAAgjIgLAAQgJAAgGAIg");
	this.shape_6.setTransform(156.1,51.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhAB1IAAjnIApAAIABAQQANgTAUABQAagBAOAUQAOAUAAAoIAAANQAAAmgOAVQgNAVgbAAQgSAAgNgQIAABNgAgUhEIAABMQAGALAOAAQALAAAFgLQAGgIgBgYIAAgLQAAgYgFgLQgGgKgKAAQgOAAgGAMg");
	this.shape_7.setTransform(140.9,54.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgwBjQgSgYAAgpIAAgHQAAg2AQghQAQggAggJQANgEAEgFQAFgEAAgIIAjAAQAAAagLAMQgLAMgdAGQgOAFgJAKQgJAMgDAUQASgTAVAAQAbAAAQAWQAQATAAAkIAAADQAAAkgSAWQgSAXgfgBQgeABgSgYgAgWAlIAAAFQAAAXAGAKQAGAKAKAAQAWAAABgoIAAgHQAAgogXAAQgVAAgBAng");
	this.shape_8.setTransform(124.9,48);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AA0BUIAAinIAsAAIAACngAhfBUIAAinIAsAAIAAAxIAWAAQAdAAAQARQARAQAAAZQAAAbgRARQgQAQgdAAgAgzAwIAXAAQAJAAAFgHQAFgGAAgKQAAgYgVAAIgVAAg");
	this.shape_9.setTransform(105.1,51.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhIBxIAAjhIBHAAQAhAAATAQQASAQAAAeQAAASgIAMQgHAMgNAGQAPADAIANQAJANgBATQAAAhgSARQgSARgjAAgAgaBLIAbAAQANAAAHgIQAFgHAAgOQAAgfgVgBIgfAAgAgagRIAYAAQAZAAAAgcQAAgPgGgHQgHgHgLAAIgZAAg");
	this.shape_10.setTransform(84.8,48.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#00CC00").s().p("A3qIHQitABAAiuIAAqzQAAitCtAAMAvVAAAQCtAAAACtIAAKzQAACuitgBg");
	this.shape_11.setTransform(168.9,52);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Ag2BJQgUgZgBgqIAAgLQABgqAUgZQAUgYAiAAQAjAAAUAYQAUAZAAArIAAAKQAAAqgTAZQgUAYgkAAQgiAAgUgYgAgSgrQgHANAAAZIAAALQAAAyAZAAQAZAAACgqIAAgTQAAgZgIgNQgHgMgMAAQgLAAgHAMg");
	this.shape_12.setTransform(264,51.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgXBeIAAiSIgwAAIAAgoICPAAIAAAoIgwAAIAACSg");
	this.shape_13.setTransform(247.1,51.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AhHBeIAAi6IBEAAQAfAAASANQASAOAAAZQAAANgIAKQgIALgOAGQASABAKALQAKALAAARQAAA2hEAAgAgWA1IAcAAQAJAAAEgEQAEgGAAgJQAAgKgEgEQgFgEgHAAIgdAAgAgWgQIAUAAQAIAAAEgEQAEgFAAgIQAAgSgPgBIgVAAg");
	this.shape_14.setTransform(230.7,51.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("Ag3BRQgPgPAAgZQgBgeAUgOQASgQAiAAIAPAAIAAgQQAAgMgFgFQgEgGgHABQgSAAAAAVIgxAAQAAgaATgRQAUgRAcAAQAfAAARAQQAQAQAAAeIAABXQABAYAHANIAAAEIgyAAIgEgPQgOASgUAAQgXAAgQgQgAgOAQQgHAIAAANQAAAWAQAAQAGAAAGgEQAGgDADgFIAAgnIgNAAQgKAAgHAIg");
	this.shape_15.setTransform(213.1,51.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AhHBeIAAi6IAxAAIAAA3IAXAAQAhgBATATQATASAAAcQAAAegTATQgTASghAAgAgWA1IAYAAQAKAAAGgHQAFgGAAgNQAAgagXAAIgWAAg");
	this.shape_16.setTransform(188.4,51.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgYBeIAAiSIgvAAIAAgoICPAAIAAAoIgwAAIAACSg");
	this.shape_17.setTransform(170.9,51.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("Ag3BRQgPgPAAgZQgBgeAUgOQASgQAiAAIAPAAIAAgQQAAgMgFgFQgEgGgHABQgSAAAAAVIgxAAQAAgaATgRQAUgRAcAAQAfAAARAQQAQAQAAAeIAABXQABAYAHANIAAAEIgyAAIgEgPQgOASgUAAQgXAAgQgQgAgOAQQgHAIAAANQAAAWAQAAQAGAAAGgEQAGgDADgFIAAgnIgNAAQgKAAgHAIg");
	this.shape_18.setTransform(154.6,51.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AhICDIAAkCIAuAAIACASQAOgVAWAAQAeAAAQAWQAPAWAAAtIAAAOQAAArgPAXQgPAYgeAAQgWAAgNgTIAABXgAgWhMIAABWQAGAMAQAAQANAAAFgMQAGgLAAgaIAAgMQAAgbgGgMQgGgLgNAAQgPAAgGANg");
	this.shape_19.setTransform(137.7,54.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("Ag2BvQgUgbAAguIAAgIQAAg9ASgkQASglAjgIQAPgGAFgFQAFgEAAgJIAnAAQAAAcgMAOQgNANggAIQgQAEgJANQgLAMgDAXQAUgWAYAAQAeAAASAZQASAWAAAoIAAADQAAApgVAZQgUAYgigBQgiAAgUgZgAgZApIAAAGQAAAaAHAMQAGALAMAAQAZAAAAgtIAAgIQABgsgaAAQgYAAgBAqg");
	this.shape_20.setTransform(119.9,47.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AA6BeIAAi6IAyAAIAAC6gAhqBeIAAi6IAwAAIAAA3IAaAAQAggBASATQATASAAAcQAAAegTATQgSASggAAgAg6A1IAbAAQAKAAAGgHQAFgGAAgNQAAgagXAAIgZAAg");
	this.shape_21.setTransform(97.7,51.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AhQB+IAAj7IBOAAQAmAAAUASQAVARAAAiQAAAUgJANQgIAOgPAHQARADAJAOQAKAPAAAVQAAAlgVATQgUATgmAAgAgdBTIAfAAQANAAAIgIQAHgJAAgPQAAgigZgBIgiAAgAgdgTIAbAAQAcAAAAgfQAAgSgHgHQgHgHgOAAIgbAAg");
	this.shape_22.setTransform(75.1,48.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#00CC33").s().p("A3qIHQitABAAiuIAAqzQAAitCtAAMAvVAAAQCtAAAACtIAAKzQAACuitgBg");
	this.shape_23.setTransform(168.9,52,1.116,1.116);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,337.7,104);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Bitmap5();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,29);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CC00").s().p("AAXA1IgHgbIgfAAIgHAbIgQAAIAghpIANAAIAgBpgAAMAOIgMgpIAAAAIgLApIAXAAg");
	this.shape.setTransform(135.6,9.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00CC00").s().p("AAVA1IAAgvIgpAAIAAAvIgPAAIAAhpIAPAAIAAAwIApAAIAAgwIAOAAIAABpg");
	this.shape_1.setTransform(126.9,9.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00CC00").s().p("AgbA1IAAhpIA3AAIAAALIgpAAIAAAjIAjAAIAAAJIgjAAIAAAnIApAAIAAALg");
	this.shape_2.setTransform(118.8,9.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00CC00").s().p("AgtBCIAAglIAGAAQAIgBAEgNQAEgNABgaIACgqIA2AAIAABfIAMAAIAAAlIgQAAIAAgaIg8AAIAAAagAgHgYQgBATgDAMQgDANgFAJIAmAAIAAhTIgZAAg");
	this.shape_3.setTransform(110.1,11);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00CC00").s().p("AAVBFIAAhNIgBAAIgoBNIgPAAIAAhqIAPAAIAABNIABAAIAohNIAOAAIAABqgAgOg1QgFgFAAgJIAAgBIALAAQAAAGADACQACADADABQAEgBADgDQACgDAAgFIAMAAIAAABQAAAJgGAFQgGAGgJAAQgIAAgGgGg");
	this.shape_4.setTransform(100.7,8.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#00CC00").s().p("AgaAsQgKgLAAgTIAAgbQAAgTAKgLQAKgLAQAAQARAAAKALQAKALAAATIAAAbQAAATgKALQgKALgRAAQgQAAgKgLgAgPgjQgGAIAAAOIAAAbQAAAPAGAHQAGAHAJAAQAKAAAGgHQAGgHAAgPIAAgbQAAgOgGgIQgGgHgKAAQgKAAgFAHg");
	this.shape_5.setTransform(91.5,9.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#00CC00").s().p("AggA1IAAhpIAgAAQAQAAAIAJQAJAJAAAOQAAAPgJAHQgIAJgQAAIgSAAIAAAqgAgSAAIASAAQAJAAAFgFQAEgGAAgJQAAgJgEgGQgFgGgJAAIgSAAg");
	this.shape_6.setTransform(83.1,9.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#00CC00").s().p("AAVA1IAAheIgpAAIAABeIgPAAIAAhpIBHAAIAABpg");
	this.shape_7.setTransform(74.1,9.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#00CC00").s().p("AAXA1IgHgbIgfAAIgHAbIgQAAIAghpIANAAIAgBpgAAMAOIgMgpIAAAAIgLApIAXAAg");
	this.shape_8.setTransform(62,9.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#00CC00").s().p("AARA1IgegwIgHAAIAAAwIgOAAIAAhpIAOAAIAAAvIAGAAIAcgvIASAAIghAyIAlA3g");
	this.shape_9.setTransform(54.2,9.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#00CC00").s().p("AggA1IAAhpIAgAAQAQAAAIAJQAJAJAAAOQAAAPgJAHQgIAJgQAAIgSAAIAAAqgAgSAAIASAAQAJAAAFgFQAEgGAAgJQAAgJgEgGQgFgGgJAAIgSAAg");
	this.shape_10.setTransform(45.6,9.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#00CC00").s().p("AgbA1IAAhpIA3AAIAAALIgpAAIAAAjIAjAAIAAAJIgjAAIAAAnIApAAIAAALg");
	this.shape_11.setTransform(37.8,9.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#00CC00").s().p("AggA1IAAhpIAdAAQAOAAAIAHQAJAHAAAPQAAAHgEAGQgEAGgGADQAJABAFAGQAFAHAAAKQAAAPgIAIQgJAHgPAAgAgSAqIATAAQAIAAAFgFQAEgFAAgJQAAgJgEgFQgEgGgIAAIgBAAIgTAAgAgSgGIASAAQAFAAAEgEQAEgFAAgIQAAgJgFgEQgEgFgHAAIgPAAg");
	this.shape_12.setTransform(30,9.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#00CC00").s().p("AgaAsQgKgLAAgTIAAgbQAAgTAKgLQAKgLAQAAQARAAAKALQAKALAAATIAAAbQAAATgKALQgKALgRAAQgQAAgKgLgAgPgjQgGAIAAAOIAAAbQAAAPAGAHQAGAHAJAAQAKAAAGgHQAGgHAAgPIAAgbQAAgOgGgIQgGgHgKAAQgKAAgFAHg");
	this.shape_13.setTransform(21.1,9.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#00CC00").s().p("AggA1IAAhpIAgAAQAQAAAIAJQAJAJAAAOQAAAPgJAHQgIAJgQAAIgSAAIAAAqgAgSAAIASAAQAJAAAFgFQAEgGAAgJQAAgJgEgGQgFgGgJAAIgSAAg");
	this.shape_14.setTransform(12.7,9.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#00CC00").s().p("AAVA1IAAheIgpAAIAABeIgPAAIAAhpIBHAAIAABpg");
	this.shape_15.setTransform(3.6,9.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,0,142.8,19.7);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CC00").s().p("AgqBuIgLgDIAFgeIADABIADAAQAJAAAFgFQAFgFACgIIAEgMIgwieIAsAAIAUBfIAAAAIABAAIAWhfIAsAAIg2C1QgGARgIALQgLAMgUAAg");
	this.shape.setTransform(157.4,14.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00CC00").s().p("AALBPIgWg8IgNAAIAAA8IgpAAIAAidIApAAIAAA9IAKAAIAYg9IA0AAIgqBIIAAAAIABAAIAtBVg");
	this.shape_1.setTransform(143.9,10.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00CC00").s().p("AATBPIAAgzIgIABIgHABQgdAAgRgPQgRgPAAgdIAAgxIApAAIAAAxQAAARAGAGQAFAGALAAIAIgBIAHgBIAAhMIApAAIAACdg");
	this.shape_2.setTransform(128.2,10.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00CC00").s().p("AguA8QgSgXAAgkIAAgBQAAgkASgWQARgXAdAAQAeAAARAXQASAWAAAkIAAABQAAAkgRAXQgSAWgeAAQgdAAgRgWgAgRgjQgFANAAAWIAAABQAAAXAFANQAGANALAAQAMAAAGgNQAFgNAAgXIAAgBQAAgWgFgNQgGgNgMAAQgLAAgGANg");
	this.shape_3.setTransform(113.5,10.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00CC00").s().p("Ag9BvIAAjaIAlAAIACARQAGgKAIgFQAIgFAJAAQAZAAAOAXQAOAXAAAlIAAADQAAAigOAVQgOAWgZAAQgJAAgHgEQgIgEgFgIIAABKgAgMhJQgFADgDAGIAABJQADAGAFADQAFADAHAAQAKAAAGgNQAFgKAAgWIAAgDQAAgWgGgOQgFgOgKAAQgHAAgFAEg");
	this.shape_4.setTransform(99,13.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#00CC00").s().p("AgqA8QgQgXAAgjIAAgDQAAgjAQgWQARgXAdAAQAZAAAQARQAPAQgBAcIAAABIglAAQAAgNgFgIQgEgIgJAAQgLAAgFANQgFANAAAVIAAADQAAAWAFANQAFANALAAQAJAAAEgHQAFgGAAgNIAlAAIAAABQABAZgQAQQgQAQgYAAQgdAAgRgWg");
	this.shape_5.setTransform(84.7,10.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#00CC00").s().p("AgqA8QgQgXAAgjIAAgDQAAgjAQgWQARgXAdAAQAZAAAQARQAPAQgBAcIAAABIglAAQAAgNgFgIQgEgIgJAAQgLAAgFANQgFANAAAVIAAADQAAAWAFANQAFANALAAQAJAAAEgHQAFgGAAgNIAlAAIAAABQABAZgQAQQgQAQgYAAQgdAAgRgWg");
	this.shape_6.setTransform(71.2,10.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#00CC00").s().p("AgzBFQgLgNAAgWQAAgXAQgLQAPgMAeAAIAQAAIAAgOQAAgLgFgHQgEgGgGAAQgIAAgEAFQgEAFAAAKIgogBIAAAAQgBgVAQgOQAQgPAZAAQAZAAAQAPQAPAOAAAbIAAA/IACAVIAFAUIgpAAIgEgMIgCgMQgGAMgIAHQgHAIgMAAQgWAAgMgNgAgQAQQgFAHAAAKQAAAIAEAFQAEAFAHAAQAGAAAGgFQAHgFACgHIAAgZIgQAAQgKAAgFAHg");
	this.shape_7.setTransform(57.5,10.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#00CC00").s().p("Ag9BvIAAjaIAlAAIACARQAGgKAIgFQAIgFAJAAQAZAAAOAXQAOAXAAAlIAAADQAAAigOAVQgOAWgZAAQgJAAgHgEQgIgEgFgIIAABKgAgMhJQgFADgDAGIAABJQADAGAFADQAFADAHAAQAKAAAGgNQAFgKAAgWIAAgDQAAgWgGgOQgFgOgKAAQgHAAgFAEg");
	this.shape_8.setTransform(43.4,13.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#00CC00").s().p("Ag9BPIAAidIA7AAQAZAAAPALQAQALAAAWQAAALgHAJQgGAJgNAFQAQABAJAKQAIAJABAOQgBAWgOALQgOAMgcAAgAgTAvIAYAAQAIAAAEgEQADgFAAgIQAAgJgDgEQgEgFgIAAIgYAAgAgTgNIASAAQAGAAAEgDQAEgEAAgIQAAgJgEgFQgFgEgGAAIgRAAg");
	this.shape_9.setTransform(22.2,10.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#00CC00").s().p("AATBPIAAhXIgBAAIgkBXIgpAAIAAidIApAAIAABXIAAAAIAlhXIApAAIAACdg");
	this.shape_10.setTransform(0.4,10.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9,-11,175.3,39.2);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CC00").s().p("AgqA8QgRgWAAgiIAAgEQAAgkAQgWQARgXAcAAQAcAAAPAUQAPATAAAhIAAAUIhOAAQABASAHAKQAHALAMAAQANAAAIgDQAIgDAKgGIALAaQgJAHgOAGQgPAFgQAAQgeAAgRgWgAgLgnQgFAJgCAQIAmAAIAAgEQAAgOgEgIQgEgIgKAAQgIAAgFAJg");
	this.shape.setTransform(499,20.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00CC00").s().p("AATBPIAAg+IglAAIAAA+IgpAAIAAidIApAAIAABBIAlAAIAAhBIApAAIAACdg");
	this.shape_1.setTransform(484.7,20.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00CC00").s().p("AgqA8QgRgWAAgiIAAgEQAAgkAQgWQARgXAcAAQAcAAAPAUQAPATAAAhIAAAUIhOAAQABASAHAKQAHALAMAAQANAAAIgDQAIgDAKgGIALAaQgJAHgOAGQgPAFgQAAQgeAAgRgWgAgLgnQgFAJgCAQIAmAAIAAgEQAAgOgEgIQgEgIgKAAQgIAAgFAJg");
	this.shape_2.setTransform(470.5,20.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00CC00").s().p("AAeBpIAAg0IhkAAIAAidIAqAAIAAB8IAkAAIAAh8IAqAAIAAB8IAVAAIAABVg");
	this.shape_3.setTransform(456,23.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00CC00").s().p("AATBxIAAhZIgBAAIgkBZIgqAAIAAicIAqAAIAABXIAAAAIAlhXIApAAIAACcgAghhRQgMgLAAgTIABgBIAeAAQAAAIAEAFQAEAFAGAAQAHAAAFgFQADgFAAgIIAeAAIABABQAAASgMAMQgNAMgVAAQgUAAgNgMg");
	this.shape_4.setTransform(433.6,17.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#00CC00").s().p("AguA8QgSgXAAgkIAAgBQAAgkASgWQARgXAdAAQAeAAARAXQASAWAAAkIAAABQAAAkgRAXQgSAWgeAAQgdAAgRgWgAgRgjQgFANAAAWIAAABQAAAXAFANQAGANALAAQAMAAAGgNQAFgNAAgXIAAgBQAAgWgFgNQgGgNgMAAQgLAAgGANg");
	this.shape_5.setTransform(418.8,20.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#00CC00").s().p("AATBPIAAg+IglAAIAAA+IgpAAIAAidIApAAIAABBIAlAAIAAhBIApAAIAACdg");
	this.shape_6.setTransform(404,20.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#00CC00").s().p("Ag9BPIAAidIApAAIAAAzIAVAAQAcAAARAPQAQANAAAYQAAAYgQAPQgRAPgcAAgAgUAvIAVAAQAKAAAFgGQAFgGAAgKQAAgJgFgGQgFgGgKAAIgVAAg");
	this.shape_7.setTransform(389.8,20.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#00CC00").s().p("AAYBPIAAh8IgZAAIAAAjQAAAtgNAWQgNAWgfAAIgGAAIgBghIAEAAQAMAAADgLQAEgMAAghIAAhEIBsAAIAACdg");
	this.shape_8.setTransform(374.1,20.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#00CC00").s().p("AgyBFQgMgNAAgWQAAgXAQgLQAOgMAfAAIAQAAIAAgOQAAgLgEgHQgFgGgHAAQgHAAgEAFQgEAFAAAKIgogBIAAAAQgBgVARgOQAQgPAYAAQAZAAAQAPQAQAOAAAbIAAA/IABAVIAFAUIgpAAIgEgMIgDgMQgEAMgJAHQgHAIgMAAQgWAAgLgNgAgQAQQgFAHAAAKQAAAIAEAFQAEAFAGAAQAHAAAGgFQAGgFADgHIAAgZIgQAAQgLAAgEAHg");
	this.shape_9.setTransform(360.3,20.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#00CC00").s().p("AgqA8QgRgWAAgiIAAgEQAAgkAQgWQARgXAcAAQAcAAAPAUQAPATAAAhIAAAUIhOAAQABASAHAKQAHALAMAAQANAAAIgDQAIgDAKgGIALAaQgJAHgOAGQgPAFgQAAQgeAAgRgWgAgLgnQgFAJgCAQIAmAAIAAgEQAAgOgEgIQgEgIgKAAQgIAAgFAJg");
	this.shape_10.setTransform(346.5,20.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#00CC00").s().p("Ag9BvIAAjaIAlAAIACARQAGgKAIgFQAIgFAJAAQAZAAAOAXQAOAXAAAlIAAADQAAAigOAVQgOAWgZAAQgJAAgHgEQgIgEgFgIIAABKgAgMhJQgFADgDAGIAABJQADAGAFADQAFADAHAAQAKAAAGgNQAFgKAAgWIAAgDQAAgWgGgOQgFgOgKAAQgHAAgFAEg");
	this.shape_11.setTransform(332.5,23.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#00CC00").s().p("AguA8QgSgXAAgkIAAgBQAAgkASgWQARgXAdAAQAeAAARAXQASAWAAAkIAAABQAAAkgRAXQgSAWgeAAQgdAAgRgWgAgRgjQgFANAAAWIAAABQAAAXAFANQAGANALAAQAMAAAGgNQAFgNAAgXIAAgBQAAgWgFgNQgGgNgMAAQgLAAgGANg");
	this.shape_12.setTransform(310.8,20.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#00CC00").s().p("AATBPIAAh8IglAAIAAB8IgqAAIAAidIB5AAIAACdg");
	this.shape_13.setTransform(296.1,20.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AguA8QgSgXAAgkIAAgBQAAgkASgWQARgXAdAAQAeAAARAXQASAWAAAkIAAABQAAAkgRAXQgSAWgeAAQgdAAgRgWgAgRgjQgFANAAAWIAAABQAAAXAFANQAGANALAAQAMAAAGgNQAFgNAAgXIAAgBQAAgWgFgNQgGgNgMAAQgLAAgGANg");
	this.shape_14.setTransform(274.7,20.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgTBPIAAh9IgrAAIAAggIB9AAIAAAgIgsAAIAAB9g");
	this.shape_15.setTransform(260.6,20.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("Ag8BPIAAidIA6AAQAaAAAPALQAPALAAAWQAAALgGAJQgIAJgMAFQAQABAJAKQAJAJgBAOQAAAWgOALQgPAMgcAAgAgTAvIAXAAQAJAAADgEQAFgFAAgIQgBgJgDgEQgDgFgKAAIgXAAgAgTgNIASAAQAGAAAEgDQAEgEAAgIQAAgJgEgFQgFgEgGAAIgRAAg");
	this.shape_16.setTransform(246.7,20.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgyBFQgMgNAAgWQAAgXAPgLQAPgMAfAAIAQAAIAAgOQAAgLgEgHQgFgGgHAAQgHAAgEAFQgEAFAAAKIgogBIAAAAQgBgVAQgOQAQgPAZAAQAZAAAQAPQAPAOAAAbIAAA/IACAVIAFAUIgpAAIgEgMIgDgMQgEAMgJAHQgGAIgNAAQgWAAgLgNgAgQAQQgFAHAAAKQAAAIAEAFQAEAFAHAAQAGAAAGgFQAGgFADgHIAAgZIgQAAQgKAAgFAHg");
	this.shape_17.setTransform(231.9,20.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgqBuIgLgDIAFgeIADABIADAAQAJAAAFgFQAFgFACgIIAEgMIgwieIAsAAIAUBfIAAAAIABAAIAWhfIAsAAIg2C1QgGARgIALQgLAMgUAAg");
	this.shape_18.setTransform(211.5,24.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgzBzIA/jmIAoAAIg/Dmg");
	this.shape_19.setTransform(199.3,19.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AguBdQgSgWAAglIAAgmQABgxAPgWQAOgVAhgBQAOAAAIgEQAHgEAAgJIAgAAIABABQAAAbgOALQgPAKgfABQgQABgJAIQgJAJABAPIAAAAQAHgHAKgEQAJgGAJAAQAdAAARAXQAQAWAAAiIAAADQAAAlgRAWQgRAWgfAAQgdAAgRgWgAgRgCQgFALAAAWIAAADQAAAXAFANQAGANALAAQANAAAFgNQAGgNAAgXIAAgDQAAgWgGgLQgFgNgNAAQgLAAgGANg");
	this.shape_20.setTransform(186.9,17.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgqA8QgRgWAAgiIAAgEQAAgkAQgWQARgXAcAAQAcAAAPAUQAPATAAAhIAAAUIhOAAQABASAHAKQAHALAMAAQANAAAIgDQAIgDAKgGIALAaQgJAHgOAGQgPAFgQAAQgeAAgRgWgAgLgnQgFAJgCAQIAmAAIAAgEQAAgOgEgIQgEgIgKAAQgIAAgFAJg");
	this.shape_21.setTransform(166.2,20.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AA5BPIAAidIApAAIAACdgAhhBPIAAidIApAAIAAAzIAXAAQAcAAAPAPQAQANAAAYQAAAYgQAPQgPAPgcAAgAg4AvIAXAAQAKAAAFgGQAFgGAAgKQAAgJgFgGQgFgGgKAAIgXAAg");
	this.shape_22.setTransform(149,20.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AATBPIAAg+IglAAIAAA+IgpAAIAAidIApAAIAABBIAlAAIAAhBIApAAIAACdg");
	this.shape_23.setTransform(129.9,20.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AATBPIAAg+IglAAIAAA+IgpAAIAAidIApAAIAABBIAlAAIAAhBIApAAIAACdg");
	this.shape_24.setTransform(115.1,20.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgqA8QgRgWAAgiIAAgEQAAgkAQgWQARgXAcAAQAcAAAPAUQAPATAAAhIAAAUIhOAAQABASAHAKQAHALAMAAQANAAAIgDQAIgDAKgGIALAaQgJAHgOAGQgPAFgQAAQgeAAgRgWgAgLgnQgFAJgCAQIAmAAIAAgEQAAgOgEgIQgEgIgKAAQgIAAgFAJg");
	this.shape_25.setTransform(101,20.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("Ag9BvIAAjaIAlAAIACARQAGgKAIgFQAIgFAJAAQAZAAAOAXQAOAXAAAlIAAADQAAAigOAVQgOAWgZAAQgJAAgHgEQgIgEgFgIIAABKgAgMhJQgFADgDAGIAABJQADAGAFADQAFADAHAAQAKAAAGgNQAFgKAAgWIAAgDQAAgWgGgOQgFgOgKAAQgHAAgFAEg");
	this.shape_26.setTransform(87,23.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgqA8QgRgWAAgiIAAgEQAAgkAQgWQARgXAcAAQAcAAAPAUQAPATAAAhIAAAUIhOAAQABASAHAKQAHALAMAAQANAAAIgDQAIgDAKgGIALAaQgJAHgOAGQgPAFgQAAQgeAAgRgWgAgLgnQgFAJgCAQIAmAAIAAgEQAAgOgEgIQgEgIgKAAQgIAAgFAJg");
	this.shape_27.setTransform(72.5,20.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("Ag8BPIAAidIA6AAQAaAAAOALQAQALAAAWQAAALgGAJQgIAJgMAFQARABAIAKQAJAJAAAOQAAAWgPALQgPAMgcAAgAgTAvIAXAAQAJAAAEgEQADgFABgIQgBgJgDgEQgDgFgKAAIgXAAgAgTgNIASAAQAHAAADgDQAEgEAAgIQAAgJgEgFQgFgEgGAAIgRAAg");
	this.shape_28.setTransform(58.7,20.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AguA8QgSgXAAgkIAAgBQAAgkASgWQARgXAdAAQAeAAARAXQASAWAAAkIAAABQAAAkgRAXQgSAWgeAAQgdAAgRgWgAgRgjQgFANAAAWIAAABQAAAXAFANQAGANALAAQAMAAAGgNQAFgNAAgXIAAgBQAAgWgFgNQgGgNgMAAQgLAAgGANg");
	this.shape_29.setTransform(43.5,20.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("Ag9BvIAAjaIAlAAIACARQAGgKAIgFQAIgFAJAAQAZAAAOAXQAOAXAAAlIAAADQAAAigOAVQgOAWgZAAQgJAAgHgEQgIgEgFgIIAABKgAgMhJQgFADgDAGIAABJQADAGAFADQAFADAHAAQAKAAAGgNQAFgKAAgWIAAgDQAAgWgGgOQgFgOgKAAQgHAAgFAEg");
	this.shape_30.setTransform(29,23.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AAiBqIAAizIhDAAIAACzIgpAAIAAjTICVAAIAADTg");
	this.shape_31.setTransform(12.2,18.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1,-1,507,39.2);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AAoBuIgNgwIg1AAIgNAwIgsAAIA+jbIArAAIA+DbgAASAcIgShDIAAAAIgRBDIAjAAg");
	this.shape.setTransform(132.3,19.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AAXBuIgthdIgMAAIAABdIgqAAIAAjbIAqAAIAABbIAJAAIAshbIA1AAIg/BlIBFB2g");
	this.shape_1.setTransform(115.9,19.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AhHBuIAAjbIBHAAQAiAAATAUQATATAAAgQAAAfgTASQgTATgiAAIgdAAIAABQgAgdgBIAdAAQAPAAAHgLQAIgKAAgQQAAgQgIgLQgHgKgPAAIgdAAg");
	this.shape_2.setTransform(98.1,19.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("Ag8BuIAAjbIB5AAIAAAiIhPAAIAAA4IBCAAIAAAfIhCAAIAABAIBPAAIAAAig");
	this.shape_3.setTransform(82,19.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AhHBuIAAjbIA/AAQAhAAATAPQATAPAAAeQAAAQgHAMQgHAMgOAGQATADAJANQAJAOAAATQAAAfgSARQgTAQgiAAgAgcBMIAdAAQAOAAAHgHQAHgIAAgPQAAgQgGgJQgHgIgOgBIgBAAIgdAAgAgcgPIAWAAQAMgBAHgHQAIgIAAgOQAAgPgIgIQgIgHgNAAIgUAAg");
	this.shape_4.setTransform(65.8,19.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("Ag5BbQgWgWAAgnIAAg7QAAgnAWgWQAWgWAjAAQAkAAAWAWQAWAWAAAnIAAA7QAAAngWAWQgWAWgkAAQgjAAgWgWgAgbhCQgJAMAAAZIAAA7QAAAZAJAMQAKAMARAAQASAAAJgMQAKgMAAgZIAAg7QAAgZgKgMQgJgMgSAAQgSAAgJAMg");
	this.shape_5.setTransform(47.6,19.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("AhHBuIAAjbIBHAAQAiAAATAUQATATAAAgQAAAfgTASQgTATgiAAIgdAAIAABQgAgdgBIAdAAQAPAAAHgLQAIgKAAgQQAAgQgIgLQgHgKgPAAIgdAAg");
	this.shape_6.setTransform(30,19.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0000").s().p("AAjBuIAAi5IhFAAIAAC5IgrAAIAAjbICaAAIAADbg");
	this.shape_7.setTransform(11.5,19.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,143.1,40.3);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#A70117").ss(1,1,1).p("AAAt5IAAbz");
	this.shape.setTransform(0,89.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,2,180.2);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.mitsubishi7();
	this.instance.setTransform(0,0,0.872,0.872);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,436,164);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AoQR4MAAAgjvIQhAAMAAAAjvg");
	mask.setTransform(376,114.5);

	// mitsubishi7.png
	this.instance = new lib.mitsubishi7();
	this.instance.setTransform(0,44,0.872,0.872);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(323.1,44,105.9,164);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AoQR4MAAAgjvIQhAAMAAAAjvg");
	mask.setTransform(270,114.5);

	// mitsubishi7.png
	this.instance = new lib.mitsubishi7();
	this.instance.setTransform(0,44,0.872,0.872);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(217,44,106,164);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AoQR4MAAAgjvIQhAAMAAAAjvg");
	mask.setTransform(58,114.5);

	// mitsubishi7.png
	this.instance = new lib.mitsubishi7();
	this.instance.setTransform(0,44,0.872,0.872);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(5.1,44,105.9,164);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AoQR4MAAAgjvIQiAAMAAAAjvg");
	mask.setTransform(164,114.5);

	// mitsubishi7.png
	this.instance = new lib.mitsubishi7();
	this.instance.setTransform(0,44,0.872,0.872);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(111,44,106,164);


(lib.Symbol24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.back();
	this.instance.setTransform(-238,476,0.476,0.476);

	this.instance_1 = new lib.back();
	this.instance_1.setTransform(476,476,0.476,0.476);

	this.instance_2 = new lib.back();
	this.instance_2.setTransform(238,476,0.476,0.476);

	this.instance_3 = new lib.back();
	this.instance_3.setTransform(0,476,0.476,0.476);

	this.instance_4 = new lib.back();
	this.instance_4.setTransform(-238,238,0.476,0.476);

	this.instance_5 = new lib.back();
	this.instance_5.setTransform(-238,0,0.476,0.476);

	this.instance_6 = new lib.back();
	this.instance_6.setTransform(476,238,0.476,0.476);

	this.instance_7 = new lib.back();
	this.instance_7.setTransform(476,0,0.476,0.476);

	this.instance_8 = new lib.back();
	this.instance_8.setTransform(238,238,0.476,0.476);

	this.instance_9 = new lib.back();
	this.instance_9.setTransform(0,238,0.476,0.476);

	this.instance_10 = new lib.back();
	this.instance_10.setTransform(238,0,0.476,0.476);

	this.instance_11 = new lib.back();
	this.instance_11.setTransform(0,0,0.476,0.476);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-238,0,952,714);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ20();
	this.instance.setTransform(168.8,34.7,1,1,0,0,0,168.8,52);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.5,-23.3,376.9,116.1);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ10();
	this.instance.setTransform(32.5,9.9,0.488,0.488,0,0,0,66.5,20.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,69.8,19.7);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ12();
	this.instance.setTransform(32.5,9.9,1,1,0,0,0,32.5,9.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.328},4).to({alpha:1},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,69.8,19.7);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ7();
	this.instance.setTransform(218,82,1,1,0,0,0,218,82);
	this.instance.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(0, 0, -100, 0))];
	this.instance.cache(-2,-2,440,168);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,440,167);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 13 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_88 = new cjs.Graphics().p("Ah5AAIAAhcIDJAAIAqC5g");
	var mask_graphics_89 = new cjs.Graphics().p("AgBAOIiMiJICIAfICTDYg");
	var mask_graphics_90 = new cjs.Graphics().p("AhchdIhEg9IEVC4IAsB9g");
	var mask_graphics_91 = new cjs.Graphics().p("AjQheIAAhcIGhDoIg6CNg");
	var mask_graphics_92 = new cjs.Graphics().p("AevEGIAAhcIGjDqIg6CMg");
	var mask_graphics_93 = new cjs.Graphics().p("AeOEGIAAhcIHlCVIh9Dhg");
	var mask_graphics_94 = new cjs.Graphics().p("AfvE9IiMiLIIsAAIjEF2g");
	var mask_graphics_95 = new cjs.Graphics().p("AlXggIAAhcIKvh7IlJHvg");
	var mask_graphics_133 = new cjs.Graphics().p("AlXggIAAhcIKvh7IlJHvg");
	var mask_graphics_139 = new cjs.Graphics().p("AlXggIAAhcIKvh7IlJHvg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(88).to({graphics:mask_graphics_88,x:432.4,y:69.4}).wait(1).to({graphics:mask_graphics_89,x:439.4,y:76.3}).wait(1).to({graphics:mask_graphics_90,x:446.4,y:83.3}).wait(1).to({graphics:mask_graphics_91,x:456.3,y:90.3}).wait(1).to({graphics:mask_graphics_92,x:238.6,y:54.5}).wait(1).to({graphics:mask_graphics_93,x:242,y:54.5}).wait(1).to({graphics:mask_graphics_94,x:244.8,y:55.3}).wait(1).to({graphics:mask_graphics_95,x:469.9,y:84.1}).wait(38).to({graphics:mask_graphics_133,x:469.9,y:84.1}).wait(6).to({graphics:mask_graphics_139,x:469.9,y:84.1}).wait(211));

	// Слой 14
	this.instance = new lib.Символ36();
	this.instance.setTransform(470.1,85.1,1.552,1.552,0,0,0,16.4,13.5);
	this.instance._off = true;

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(88).to({_off:false},0).wait(45).to({alpha:0},6).to({_off:true},1).wait(210));

	// Слой 11
	this.instance_1 = new lib.Символ9();
	this.instance_1.setTransform(10,75,1,1,0,0,0,0,89);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(34).to({_off:false},0).to({x:431},54).to({_off:true},1).wait(261));

	// Слой 10 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("EgjhAMqIAA5SMBHDAAAIAAZSg");
	var mask_1_graphics_34 = new cjs.Graphics().p("EgjhAMqIAA5SMBHDAAAIAAZSg");
	var mask_1_graphics_35 = new cjs.Graphics().p("EgjiAMqIAA5SMBHFAAAIAAZSg");
	var mask_1_graphics_36 = new cjs.Graphics().p("EgjiAMqIAA5SMBHFAAAIAAZSg");
	var mask_1_graphics_37 = new cjs.Graphics().p("EgjiAMqIAA5SMBHFAAAIAAZSg");
	var mask_1_graphics_38 = new cjs.Graphics().p("EgjiAMqIAA5SMBHFAAAIAAZSg");
	var mask_1_graphics_39 = new cjs.Graphics().p("EgjhAMqIAA5SMBHDAAAIAAZSg");
	var mask_1_graphics_40 = new cjs.Graphics().p("EgjhAMqIAA5SMBHDAAAIAAZSg");
	var mask_1_graphics_41 = new cjs.Graphics().p("EgjhAMqIAA5SMBHDAAAIAAZSg");
	var mask_1_graphics_42 = new cjs.Graphics().p("EgjhAMqIAA5SMBHDAAAIAAZSg");
	var mask_1_graphics_43 = new cjs.Graphics().p("EgjiAMqIAA5SMBHFAAAIAAZSg");
	var mask_1_graphics_44 = new cjs.Graphics().p("EgjiAMqIAA5SMBHFAAAIAAZSg");
	var mask_1_graphics_45 = new cjs.Graphics().p("EgjiAMqIAA5SMBHFAAAIAAZSg");
	var mask_1_graphics_46 = new cjs.Graphics().p("EgjhAMqIAA5SMBHDAAAIAAZSg");
	var mask_1_graphics_47 = new cjs.Graphics().p("EgjhAMqIAA5SMBHDAAAIAAZSg");
	var mask_1_graphics_48 = new cjs.Graphics().p("EgjhAMqIAA5SMBHDAAAIAAZSg");
	var mask_1_graphics_49 = new cjs.Graphics().p("EgjhAMqIAA5SMBHDAAAIAAZSg");
	var mask_1_graphics_50 = new cjs.Graphics().p("EgjiAMqIAA5SMBHFAAAIAAZSg");
	var mask_1_graphics_51 = new cjs.Graphics().p("EgjiAMqIAA5SMBHEAAAIAAZSg");
	var mask_1_graphics_52 = new cjs.Graphics().p("EgjiAMqIAA5SMBHFAAAIAAZSg");
	var mask_1_graphics_53 = new cjs.Graphics().p("EgjhAMqIAA5SMBHDAAAIAAZSg");
	var mask_1_graphics_54 = new cjs.Graphics().p("EgjhAMqIAA5SMBHDAAAIAAZSg");
	var mask_1_graphics_55 = new cjs.Graphics().p("EgjhAMqIAA5SMBHDAAAIAAZSg");
	var mask_1_graphics_56 = new cjs.Graphics().p("EgjhAMqIAA5SMBHDAAAIAAZSg");
	var mask_1_graphics_57 = new cjs.Graphics().p("EgjiAMqIAA5SMBHFAAAIAAZSg");
	var mask_1_graphics_58 = new cjs.Graphics().p("EgjiAMqIAA5SMBHEAAAIAAZSg");
	var mask_1_graphics_59 = new cjs.Graphics().p("EgjiAMqIAA5SMBHFAAAIAAZSg");
	var mask_1_graphics_60 = new cjs.Graphics().p("EgjiAMqIAA5SMBHFAAAIAAZSg");
	var mask_1_graphics_61 = new cjs.Graphics().p("EgjhAMqIAA5SMBHDAAAIAAZSg");
	var mask_1_graphics_62 = new cjs.Graphics().p("EgjhAMqIAA5SMBHDAAAIAAZSg");
	var mask_1_graphics_63 = new cjs.Graphics().p("EgjhAMqIAA5SMBHDAAAIAAZSg");
	var mask_1_graphics_64 = new cjs.Graphics().p("EgjiAMqIAA5SMBHFAAAIAAZSg");
	var mask_1_graphics_65 = new cjs.Graphics().p("EgjiAMqIAA5SMBHEAAAIAAZSg");
	var mask_1_graphics_66 = new cjs.Graphics().p("EgjiAMqIAA5SMBHFAAAIAAZSg");
	var mask_1_graphics_67 = new cjs.Graphics().p("EgjiAMqIAA5SMBHFAAAIAAZSg");
	var mask_1_graphics_68 = new cjs.Graphics().p("EgjhAMqIAA5SMBHDAAAIAAZSg");
	var mask_1_graphics_69 = new cjs.Graphics().p("EgjiAMqIAA5SMBHFAAAIAAZSg");
	var mask_1_graphics_70 = new cjs.Graphics().p("EgjhAMqIAA5SMBHDAAAIAAZSg");
	var mask_1_graphics_71 = new cjs.Graphics().p("EgjiAMqIAA5SMBHFAAAIAAZSg");
	var mask_1_graphics_72 = new cjs.Graphics().p("EgjiAMqIAA5SMBHFAAAIAAZSg");
	var mask_1_graphics_73 = new cjs.Graphics().p("EgjiAMqIAA5SMBHFAAAIAAZSg");
	var mask_1_graphics_74 = new cjs.Graphics().p("EgjiAMqIAA5SMBHFAAAIAAZSg");
	var mask_1_graphics_75 = new cjs.Graphics().p("EgjhAMqIAA5SMBHDAAAIAAZSg");
	var mask_1_graphics_76 = new cjs.Graphics().p("EgjhAMqIAA5SMBHEAAAIAAZSg");
	var mask_1_graphics_77 = new cjs.Graphics().p("EgjhAMqIAA5SMBHDAAAIAAZSg");
	var mask_1_graphics_78 = new cjs.Graphics().p("EgjhAMqIAA5SMBHDAAAIAAZSg");
	var mask_1_graphics_79 = new cjs.Graphics().p("EgjiAMqIAA5SMBHFAAAIAAZSg");
	var mask_1_graphics_80 = new cjs.Graphics().p("EgjiAMqIAA5SMBHFAAAIAAZSg");
	var mask_1_graphics_81 = new cjs.Graphics().p("EgjiAMqIAA5SMBHFAAAIAAZSg");
	var mask_1_graphics_82 = new cjs.Graphics().p("EgjhAMqIAA5SMBHDAAAIAAZSg");
	var mask_1_graphics_83 = new cjs.Graphics().p("EgjiAMqIAA5SMBHFAAAIAAZSg");
	var mask_1_graphics_84 = new cjs.Graphics().p("EgjhAMqIAA5SMBHDAAAIAAZSg");
	var mask_1_graphics_85 = new cjs.Graphics().p("EgjhAMqIAA5SMBHDAAAIAAZSg");
	var mask_1_graphics_86 = new cjs.Graphics().p("EgjiAMqIAA5SMBHEAAAIAAZSg");
	var mask_1_graphics_87 = new cjs.Graphics().p("EgjhAMqIAA5SMBHDAAAIAAZSg");
	var mask_1_graphics_88 = new cjs.Graphics().p("EgjiAMqIAA5SMBHFAAAIAAZSg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:237.5,y:79}).wait(34).to({graphics:mask_1_graphics_34,x:237.5,y:79}).wait(1).to({graphics:mask_1_graphics_35,x:245.3,y:79}).wait(1).to({graphics:mask_1_graphics_36,x:253,y:79}).wait(1).to({graphics:mask_1_graphics_37,x:260.8,y:79}).wait(1).to({graphics:mask_1_graphics_38,x:268.6,y:79}).wait(1).to({graphics:mask_1_graphics_39,x:276.4,y:79}).wait(1).to({graphics:mask_1_graphics_40,x:284.1,y:79}).wait(1).to({graphics:mask_1_graphics_41,x:291.9,y:79}).wait(1).to({graphics:mask_1_graphics_42,x:299.7,y:79}).wait(1).to({graphics:mask_1_graphics_43,x:307.5,y:79}).wait(1).to({graphics:mask_1_graphics_44,x:315.3,y:79}).wait(1).to({graphics:mask_1_graphics_45,x:323,y:79}).wait(1).to({graphics:mask_1_graphics_46,x:330.8,y:79}).wait(1).to({graphics:mask_1_graphics_47,x:338.6,y:79}).wait(1).to({graphics:mask_1_graphics_48,x:346.4,y:79}).wait(1).to({graphics:mask_1_graphics_49,x:354.1,y:79}).wait(1).to({graphics:mask_1_graphics_50,x:361.9,y:79}).wait(1).to({graphics:mask_1_graphics_51,x:369.7,y:79}).wait(1).to({graphics:mask_1_graphics_52,x:377.5,y:79}).wait(1).to({graphics:mask_1_graphics_53,x:385.3,y:79}).wait(1).to({graphics:mask_1_graphics_54,x:393,y:79}).wait(1).to({graphics:mask_1_graphics_55,x:400.8,y:79}).wait(1).to({graphics:mask_1_graphics_56,x:408.6,y:79}).wait(1).to({graphics:mask_1_graphics_57,x:416.4,y:79}).wait(1).to({graphics:mask_1_graphics_58,x:424.1,y:79}).wait(1).to({graphics:mask_1_graphics_59,x:431.9,y:79}).wait(1).to({graphics:mask_1_graphics_60,x:439.7,y:79}).wait(1).to({graphics:mask_1_graphics_61,x:447.5,y:79}).wait(1).to({graphics:mask_1_graphics_62,x:455.3,y:79}).wait(1).to({graphics:mask_1_graphics_63,x:463,y:79}).wait(1).to({graphics:mask_1_graphics_64,x:470.8,y:79}).wait(1).to({graphics:mask_1_graphics_65,x:478.6,y:79}).wait(1).to({graphics:mask_1_graphics_66,x:486.4,y:79}).wait(1).to({graphics:mask_1_graphics_67,x:494.1,y:79}).wait(1).to({graphics:mask_1_graphics_68,x:501.9,y:79}).wait(1).to({graphics:mask_1_graphics_69,x:509.7,y:79}).wait(1).to({graphics:mask_1_graphics_70,x:517.5,y:79}).wait(1).to({graphics:mask_1_graphics_71,x:525.3,y:79}).wait(1).to({graphics:mask_1_graphics_72,x:533,y:79}).wait(1).to({graphics:mask_1_graphics_73,x:540.8,y:79}).wait(1).to({graphics:mask_1_graphics_74,x:548.6,y:79}).wait(1).to({graphics:mask_1_graphics_75,x:556.4,y:79}).wait(1).to({graphics:mask_1_graphics_76,x:564.1,y:79}).wait(1).to({graphics:mask_1_graphics_77,x:571.9,y:79}).wait(1).to({graphics:mask_1_graphics_78,x:579.7,y:79}).wait(1).to({graphics:mask_1_graphics_79,x:587.5,y:79}).wait(1).to({graphics:mask_1_graphics_80,x:595.3,y:79}).wait(1).to({graphics:mask_1_graphics_81,x:603,y:79}).wait(1).to({graphics:mask_1_graphics_82,x:610.8,y:79}).wait(1).to({graphics:mask_1_graphics_83,x:618.6,y:79}).wait(1).to({graphics:mask_1_graphics_84,x:626.4,y:79}).wait(1).to({graphics:mask_1_graphics_85,x:634.1,y:79}).wait(1).to({graphics:mask_1_graphics_86,x:641.9,y:79}).wait(1).to({graphics:mask_1_graphics_87,x:649.7,y:79}).wait(1).to({graphics:mask_1_graphics_88,x:657.5,y:79}).wait(1).to({graphics:null,x:0,y:0}).wait(261));

	// Слой 9
	this.instance_2 = new lib.Символ8();
	this.instance_2.setTransform(218,82,1,1,0,0,0,218,82);

	this.instance_2.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(88).to({_off:true},1).wait(261));

	// Слой 2
	this.instance_3 = new lib.Символ4();
	this.instance_3.setTransform(221,70.5,1,1,0,0,0,218,114.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(144).to({x:218},0).to({x:198.1},13,cjs.Ease.get(-1)).to({x:184},12,cjs.Ease.get(1)).wait(50).to({x:104.1,alpha:0},15,cjs.Ease.get(-1)).to({_off:true},1).wait(115));

	// Слой 4
	this.instance_4 = new lib.Символ3();
	this.instance_4.setTransform(220,70.5,1,1,0,0,0,218,114.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(144).to({x:218},0).to({x:216.3},13,cjs.Ease.get(-1)).to({x:219},12,cjs.Ease.get(1)).wait(50).to({x:155,alpha:0},15,cjs.Ease.get(-1)).to({_off:true},1).wait(115));

	// Слой 5
	this.instance_5 = new lib.Символ5();
	this.instance_5.setTransform(219,70.5,1,1,0,0,0,218,114.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(144).to({x:218},0).to({x:233.5},13,cjs.Ease.get(-1)).to({x:252},12,cjs.Ease.get(1)).wait(50).to({x:298,alpha:0},15,cjs.Ease.get(-1)).to({_off:true},1).wait(115));

	// Слой 7
	this.instance_6 = new lib.Символ6();
	this.instance_6.setTransform(218,70.5,1,1,0,0,0,218,114.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(144).to({x:251.7},13,cjs.Ease.get(-1)).to({x:287},12,cjs.Ease.get(1)).wait(50).to({x:352,alpha:0},15,cjs.Ease.get(-1)).to({_off:true},1).wait(115));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-44,440,229);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ2();
	this.instance.setTransform(924,305,1,1,0,0,0,218,82);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:373},34,cjs.Ease.get(1)).to({_off:true},201).wait(115));

	// Слой 3
	this.instance_1 = new lib.Символ11();
	this.instance_1.setTransform(380.6,395.4,1,1,0,0,0,32.5,9.9);

	this.instance_2 = new lib.Символ15();
	this.instance_2.setTransform(390.3,393.2,1,1,0,0,0,66.2,10);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1}]},34).to({state:[{t:this.instance_2}]},54).to({state:[{t:this.instance_2}]},46).to({state:[{t:this.instance_2}]},10).to({state:[]},1).wait(205));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(88).to({_off:false},0).wait(46).to({alpha:0},10).to({_off:true},1).wait(205));

	// Слой 4
	this.instance_3 = new lib.Символ14();
	this.instance_3.setTransform(396.9,484.9,1,1,0,0,0,84.7,20.4);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(149).to({_off:false},0).to({y:434.9},15,cjs.Ease.get(1)).wait(60).to({y:424.9,alpha:0},10).to({_off:true},1).wait(115));

	// Слой 1
	this.instance_4 = new lib.Символ13();
	this.instance_4.setTransform(395.4,447.9,1,1,0,0,0,251.3,20.4);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(17).to({_off:false},0).to({y:437.9,alpha:1},17,cjs.Ease.get(1)).wait(100).to({y:427.9,alpha:0},15).to({_off:true},1).wait(200));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(706,179,465,229);


(lib.Symbol23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol24();
	this.instance.setTransform(-109,-63,1,1,0,0,0,119,119);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:127,y:-299.1},299).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-466,-182,952,714);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Symbol23();
	this.instance.setTransform(767.9,395.2,1.312,1.312,0,0,0,119,119);
	this.instance.alpha = 0.199;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EhhmBJNMAAAiSZMDDNAAAMAAACSZg");
	this.shape.setTransform(624.7,468.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1249.5,937.1);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ18();
	this.instance.setTransform(168.8,69.4,1,1,0,0,0,168.8,52);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.97,scaleY:0.97,x:168.9},9,cjs.Ease.get(-1)).to({regY:52.1,scaleX:0.93,scaleY:0.93,y:69.5},10,cjs.Ease.get(1)).to({regX:168.9,scaleX:0.96,scaleY:0.96},10,cjs.Ease.get(-1)).to({regX:168.8,regY:52,scaleX:1,scaleY:1,x:168.8,y:69.4},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,337.7,104);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ17();
	this.instance.setTransform(150,14.5,1,1,0,0,0,150,14.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(239).to({scaleX:1.21,scaleY:1.21,x:275.9,y:59.8},8,cjs.Ease.get(-1)).to({regY:14.6,scaleX:1.42,scaleY:1.42,x:401.8,y:105.2},8,cjs.Ease.get(1)).wait(79).to({scaleX:1.2,scaleY:1.2,x:267.5,y:56.8},8,cjs.Ease.get(-1)).to({regY:14.5,scaleX:1,scaleY:1,x:150,y:14.5},7,cjs.Ease.get(1)).wait(1));

	// Слой 3
	this.instance_1 = new lib.Символ22();
	this.instance_1.setTransform(404.3,155.4,1,1,0,0,0,217,17.9);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(255).to({_off:false},0).wait(79).to({y:132.8,alpha:0},15).wait(1));

	// Слой 2
	this.instance_2 = new lib.Символ21();
	this.instance_2.setTransform(408.7,265.8,1.218,1.218,0,0,0,168.9,52.1);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(255).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},14,cjs.Ease.get(1)).wait(65).to({y:288.4,alpha:0},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,29);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_15 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(15).call(this.frame_15).wait(17));

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AoaGrQjgixABj6QgBj5DgixQDfiyE7AAQE8AADfCyQDfCxAAD5QAAD6jfCxQjfCyk8AAQk7AAjfiyg");
	this.shape.setTransform(1200.8,-378);

	this.instance = new lib.Символ17();
	this.instance.setTransform(401.8,105.2,1.417,1.417,0,0,0,150,14.6);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},14).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},15).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({alpha:1},14).wait(1).to({alpha:0},15,cjs.Ease.get(-1)).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ22();
	this.instance_1.setTransform(404.3,155.4,1,1,0,0,0,217,17.9);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).to({alpha:1},14).wait(1).to({y:132.8,alpha:0},15).wait(1));

	// Слой 3
	this.instance_2 = new lib.Символ21();
	this.instance_2.setTransform(408.7,265.8,1.218,1.218,0,0,0,168.9,52.1);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},14,cjs.Ease.get(1)).wait(1).to({y:288.4,alpha:0},15).wait(1));

	// Слой 5
	this.instance_3 = new lib.Символ25();
	this.instance_3.setTransform(333.5,443.2,1,1,0,0,0,624.7,468.6);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({_off:false},0).to({alpha:1},14).to({alpha:0},16).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1124.5,-438.5,152.6,121.1);


// stage content:



(lib.getcar6003002 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		stage.canvas.addEventListener("mouseover", fl_Clickover3.bind(this));
		
		function fl_Clickover3()
		{
		
			this.logo.alpha=0;
			this.car.alpha=0;
			this.over.gotoAndPlay(1);
		
		}
		
		stage.canvas.addEventListener("mouseout", fl_Clickout3.bind(this));
		
		function fl_Clickout3()
		{
		
			this.logo.alpha=1;
			this.car.alpha=1;
			this.over.gotoAndPlay(17);
		
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Symbol 5
	this.over = new lib.Символ23();
	this.over.setTransform(98.6,54.9,0.76,0.76,0,0,0,133,60);

	this.timeline.addTween(cjs.Tween.get(this.over).wait(1));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(2,1,1).p("EgtcgV8MBa5AAAMAAAAr5Mha5AAAg");
	this.shape.setTransform(301,150.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 3
	this.logo = new lib.Символ16();
	this.logo.setTransform(129.6,35.6,0.663,0.663,0,0,0,150.2,14.6);

	this.timeline.addTween(cjs.Tween.get(this.logo).wait(1));

	// Symbol 18
	this.car = new lib.Символ1();
	this.car.setTransform(-31.9,-156.4,1,1,0,0,0,58,19.5);

	this.timeline.addTween(cjs.Tween.get(this.car).wait(1));

	// Layer 1
	this.instance = new lib.Symbol23();
	this.instance.setTransform(360,289,1,1,0,0,0,119,119);
	this.instance.alpha = 0.199;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(74.9,-174,1306.1,1026);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;