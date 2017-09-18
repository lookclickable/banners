(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 728,
	height: 90,
	fps: 24,
	color: "#FFFFFF",
	webfonts: {},
	manifest: [
		{src:"images/back.jpg", id:"back"},
		{src:"images/bubles.png", id:"bubles"},
		{src:"images/epic.png", id:"epic"},
		{src:"images/janfrank.png", id:"janfrank"},
		{src:"images/logoheart.png", id:"logoheart"},
		{src:"images/pfizerlogo.png", id:"pfizerlogo"},
		{src:"images/preston.png", id:"preston"},
		{src:"images/ray.png", id:"ray"}
	]
};



lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.back = function() {
	this.initialize(img.back);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,501);


(lib.bubles = function() {
	this.initialize(img.bubles);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,627,414);


(lib.epic = function() {
	this.initialize(img.epic);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,119,74);


(lib.janfrank = function() {
	this.initialize(img.janfrank);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,76,76);


(lib.logoheart = function() {
	this.initialize(img.logoheart);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,94,92);


(lib.pfizerlogo = function() {
	this.initialize(img.pfizerlogo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,79,46);


(lib.preston = function() {
	this.initialize(img.preston);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,79,79);


(lib.ray = function() {
	this.initialize(img.ray);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,76,76);


(lib.Символ42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00726F").s().p("AgTAiIAYgzIgfAAIAAgQIA0AAIAAANIgaA2g");
	this.shape.setTransform(157.5,6.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00726F").s().p("AgTAiIAAgQIAMAAIAAggIgMAFIAAgRIARgHIALAAIAAAzIALAAIAAAQg");
	this.shape_1.setTransform(152.3,6.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00726F").s().p("AgHAiIgGgCIgFgDIgFgEIgDgGIgCgGIgCgNIACgMIACgGIADgGIAFgEIAFgDIAGgCIAHgBIAHABIAHACIAFADIAFAEIADAGIACAGIACAMQAAAJgCAEIgCAGIgDAGIgFAEIgFADIgHACIgHABIgHgBgAgFgRIgDAEIgDAGIAAAHIAAAIIADAGIADAEIAFABIAFgBIAEgEQACgCAAgEIABgIIgBgHQAAgEgCgCIgEgEIgFgBIgFABg");
	this.shape_2.setTransform(146.3,6.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00726F").s().p("AgZAiIAAgIIACgKQACgFAEgDQAEgEAKgEIAGgFIADgDIABgDQAAgDgDgCQgCgBgCAAQgFAAgGACQgIADgEADIAAgRIAMgFQAEgCAHAAIAJABQAFABADADQAEACACAEIACAKIgBAIIgFAEIgFAFIgHAEQgLAIAAACIAeAAIAAAPg");
	this.shape_3.setTransform(139.7,6.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00726F").s().p("AgGAHIgCgDIgBgEIABgDIACgDQADgCADAAQAEAAADACIACADIABADIgBAEIgCADQgDACgEAAQgDAAgDgCg");
	this.shape_4.setTransform(135.3,9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#00726F").s().p("AgMAiIgKgDIAAgQIAIADIAJACIAFgBIAEgCIAEgDIACgHIgIACIgGABQgFAAgEgBQgEgBgEgDQgDgDgCgCQgCgEAAgGIABgGIABgEQACgFAEgDQAEgDAFgCIAKgBIAGAAIAHACIAFAEIAFADIADAGIACAGIACANIgBAIIgCAIIgDAGIgEAFIgFAEIgGACIgKACIgKgBgAgGgRIgDACIAAAEIABAEIACACQADADADAAIAFgBIAFgDIgBgGIgDgFIgDgCIgDAAQgEAAgCACg");
	this.shape_5.setTransform(130.6,6.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#00726F").s().p("AgHAiIgGgCIgFgDIgFgEIgDgGIgCgGIgCgNIACgMIACgGIADgGIAFgEIAFgDIAGgCIAHgBIAHABIAHACIAFADIAFAEIADAGIACAGIACAMQgBAJgBAEIgCAGIgDAGIgFAEIgFADIgHACIgHABIgHgBgAgFgRIgEAEIgCAGIAAAHIAAAIIACAGIAEAEIAFABIAFgBIAEgEQACgCAAgEIACgIIgCgHQAAgEgCgCIgEgEIgFgBIgFABg");
	this.shape_6.setTransform(123.9,6.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#00726F").s().p("AgGAHIgCgDIgBgEIABgDIACgDQADgCADAAQAEAAADACIACADIABADIgBAEIgCADQgDACgEAAQgDAAgDgCg");
	this.shape_7.setTransform(119,9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#00726F").s().p("AgEAiIgHgBIgFgEIgFgDIgDgGIgDgGIgBgOIAAgIIADgHIADgGIAEgFIAFgDIAGgDQAEgBAGgBIAKABQAFABAFADIAAAPIgIgDIgJgCIgGABIgDABIgEAFIgDAGIAIgCIAHgBIAJABQAFACACACQAEADACACQACAEAAAGIgBAFIgBAGQgDAEgDADQgEADgFACQgEABgGAAIgGgBgAgEAFIgGACIACAHIADAEIADACIADAAQADAAADgCIADgCIABgEIgBgEIgDgCQgDgCgEAAIgEABg");
	this.shape_8.setTransform(114.4,6.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#00726F").s().p("AgGAiIgHgCIgGgDIgDgEIgEgGIgDgGIgBgNIABgMIADgGIAEgGIADgEIAGgDIAHgCIAGgBIAHABIAHACIAFADIAEAEIAEAGIACAGIACAMQgBAJgBAEIgCAGIgEAGIgEAEIgFADIgHACIgHABIgGgBgAgEgRIgFAEIgCAGIgBAHIABAIIACAGIAFAEIAEABIAFgBIAEgEQACgCABgEIABgIIgBgHQgBgEgCgCIgEgEIgFgBIgEABg");
	this.shape_9.setTransform(107.5,6.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#00726F").s().p("AgLAOIAHgbIAQAAIgLAbg");
	this.shape_10.setTransform(100.3,9.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#00726F").s().p("AAEAiIAAgLIghAAIAAgQIAggoIASAAIAAAoIAJAAIAAAQIgJAAIAAALgAgLAHIAPAAIAAgRg");
	this.shape_11.setTransform(95.7,6.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#00726F").s().p("AgTAiIAYgzIgfAAIAAgQIA0AAIAAANIgaA2g");
	this.shape_12.setTransform(90,6.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#00726F").s().p("AgHAiIgGgCIgGgDIgDgEIgEgGIgDgGIgBgNIABgMIADgGIAEgGIADgEIAGgDIAGgCIAHgBIAHABIAHACIAFADIAEAEIAEAGIACAGIACAMQgBAJgBAEIgCAGIgEAGIgEAEIgFADIgHACIgHABIgHgBgAgEgRIgFAEIgCAGIAAAHIAAAIIACAGIAFAEIAEABIAFgBIAEgEQACgCABgEIABgIIgBgHQgBgEgCgCIgEgEIgFgBIgEABg");
	this.shape_13.setTransform(83.6,6.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#00726F").s().p("AgHAiIgGgCIgFgDIgFgEIgDgGIgCgGIgCgNIACgMIACgGIADgGIAFgEIAFgDIAGgCIAHgBIAHABIAHACIAFADIAFAEIADAGIACAGIACAMQAAAJgCAEIgCAGIgDAGIgFAEIgFADIgHACIgHABIgHgBgAgFgRIgDAEIgDAGIAAAHIAAAIIADAGIADAEIAFABIAFgBIAEgEQACgCAAgEIABgIIgBgHQAAgEgCgCIgEgEIgFgBIgFABg");
	this.shape_14.setTransform(76.5,6.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#00726F").s().p("AgRAGIAAgMIAjAAIAAAMg");
	this.shape_15.setTransform(70.6,7.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#00726F").s().p("AgNAjIgNgGIAAgRQAEADAJADQAFACAIAAIAGgBQAAAAABgBQAAAAABAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAgBAAAAIgEgDIgLgEIgHgDIgFgCQgDgDgCgEQgBgDAAgFQAAgEACgFQACgEAEgCQADgCAFgCIAKgBQAFAAAGABQAGACAFADIAAAQIgKgEIgMgCQgDAAgCACQgBAAAAAAQAAAAgBABQAAAAAAABQAAAAAAAAIABAEIAFACIAKAEIAHAEIAGABIAEAHQABADAAAFIAAAFIgCAFQgCAEgEADQgEACgFABIgKABIgNgBg");
	this.shape_16.setTransform(65.1,6.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#00726F").s().p("AgKAiIgKgFIgEgEIgEgFIgBgGIgBgHIAAgpIATAAIAAAoIABAGQAAABAAAAQAAABAAAAQABABAAAAQABAAAAABIAEACIAEABIAFgBIAEgCIADgEIABgGIAAgoIASAAIAAApIgBAHIgCAGIgDAFIgEAEIgFADIgFACQgFABgGAAQgEAAgGgBg");
	this.shape_17.setTransform(58.3,6.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#00726F").s().p("AALAjIgPgYIgIAAIAAAYIgSAAIAAhFIAdAAIAIABQAGACAEADIAEACIACAEIACAGIABAGIgBAIIgDAEIgFAEIgEADIATAagAgMgBIAMAAQACAAADgDQACgCAAgDQAAgFgCgCQgDgBgCAAIgMAAg");
	this.shape_18.setTransform(51.3,6.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#00726F").s().p("AgRAGIAAgMIAjAAIAAAMg");
	this.shape_19.setTransform(45,7.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#00726F").s().p("AALAjIgPgYIgIAAIAAAYIgSAAIAAhFIAdAAIAIABQAGACAEADIAEACIACAEIACAGIABAGIgBAIIgDAEIgEAEIgFADIASAagAgMgBIAMAAQACAAACgDQADgCAAgDQAAgFgDgCQgCgBgCAAIgMAAg");
	this.shape_20.setTransform(39.7,6.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#00726F").s().p("AgHAjIgIgCIgHgEIgEgEIgFgGIgCgFIgCgHIgBgHIABgGIACgHIACgFIAFgGIAEgEIAHgEIAIgCIAHgBIAJABIAHACIAGAEIAGAEIAEAGIADAFIACAHIAAAGIAAAHIgCAHIgDAFIgEAGIgGAEIgGAEIgHACIgJABIgHgBgAgGgRQgEACgCACQgCADgBADIgCAHIACAIQABADACADQACACAEABQADACADAAQAEAAAEgCIAFgDIAEgGIABgIIgBgHIgEgGIgFgEQgEgBgEAAQgDAAgDABg");
	this.shape_21.setTransform(31.8,6.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#00726F").s().p("AANAjIgZgnIAAAKIAAAdIgSAAIAAhFIASAAIAZAnIgBgKIAAgdIATAAIAABFg");
	this.shape_22.setTransform(23.9,6.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#00726F").s().p("AgRAGIAAgMIAkAAIAAAMg");
	this.shape_23.setTransform(17.7,7.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#00726F").s().p("AgcAjIAAhFIAcAAIAKABQAGACAEADIADADIADAEIACAFIABAHIgBAGIgCADIgDAEIgDAEQgEACgGABIgKABIgJAAIAAAXgAgJgBIAJAAQAEAAACgCIADgDIABgDIgBgFIgDgCQgCgCgEABIgJAAg");
	this.shape_24.setTransform(12.2,6.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#00726F").s().p("AgcAjIAAhFIAcAAIAKABQAGACAEADIADADIADAEIACAFIABAHIgBAGIgCADIgDAEIgDAEQgEACgGABIgKABIgJAAIAAAXgAgJgBIAJAAQAEAAACgCIADgDIABgDIgBgFIgDgCQgCgCgEABIgJAAg");
	this.shape_25.setTransform(5.6,6.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,169.9,14);


(lib.Символ41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00726F").s().p("AgJAxIgKgCIgIgFIgGgGIgFgIIgDgJIgDgTQAAgGADgMIADgJIAFgHIAGgHIAIgEIAKgEIAJgBIALABIAJAEIAIAEIAGAHIAFAHIADAJQADAMAAAGQgBAOgCAFIgDAJIgFAIIgGAGIgIAFIgJACIgLABIgJgBgAgHgYQgDABgCADQgDAEgBAFQgBAGAAAFQAAAGABAGQABAFADADQACAEADACQAEABADABQAEgBAEgBQAEgCACgEQACgDABgFIABgMIgBgLQgBgFgCgEQgCgDgEgBQgEgCgEAAQgDAAgEACg");
	this.shape.setTransform(347.8,8.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00726F").s().p("AgJAxIgKgCIgIgFIgGgGIgFgIIgDgJIgDgTQAAgGADgMIADgJIAFgHIAGgHIAIgEIAKgEIAJgBIALABIAJAEIAIAEIAGAHIAFAHIADAJQADAMAAAGQgBAOgCAFIgDAJIgFAIIgGAGIgIAFIgJACIgLABIgJgBgAgHgYQgDABgCADQgDAEgBAFQgBAGAAAFQAAAGABAGQABAFADADQACAEADACQAEABADABQAEgBAEgBQAEgCACgEQACgDABgFIABgMIgBgLQgBgFgCgEQgCgDgEgBQgEgCgEAAQgDAAgEACg");
	this.shape_1.setTransform(337.7,8.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00726F").s().p("AgTAxQgIgCgJgDIAAgZQAGAEALADQAGACAJAAQAFgBAFgCQADgBABgCQAAAAABgBQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgFgEgCQgDgBgFAAIgRAAIAAgVIAOAAQAEAAADgCQADgBABgEQgBgEgDgCQgEgCgGAAQgGAAgHACQgIADgHAEIAAgZQAHgDAIgDQAIgCAJAAQAGABAGABQAIACAFADQAFAEACAFQADAFAAAHIgBAHIgDAGQgCACgDACIgGADQAEACAEAAIAGAFIADAHQACAFAAAEIgBAIIgCAHQgEAEgGAEQgGADgHACQgHABgGAAQgJAAgIgBg");
	this.shape_2.setTransform(323.1,8.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00726F").s().p("AgVAwIgPgFIAAgZQAGAFAIACQAHACAIAAQAHgBAFgCIAEgEQACgBAAgDIgBgFIgEgDIgGgCIgJgCQgOACgKADIADg6IA+AAIAAAXIglAAIgBAOIAIgBQAHAAAHACQAGACAFADQAFAEACAEQADAGAAAJIgBAIIgDAGIgEAGIgGAFQgFAEgIACQgIABgGAAQgJAAgIgBg");
	this.shape_3.setTransform(314.5,8.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00726F").s().p("AgcAwIAkhJIgtAAIAAgXIBLAAIAAASIgmBOg");
	this.shape_4.setTransform(300.8,8.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#00726F").s().p("AgSAwQgIgCgFgFQgFgEgDgFQgCgFAAgGIABgIIADgGQAEgGAHgBQgGgFgCgEQgDgFAAgIQAAgFACgFQACgFAFgEQAFgDAHgDQAFgBALgCQAGABALACQAHADAFADQAEAEADAFQACAFAAAFQAAAIgDAFQgDAEgGAFIAGACIAFAFQADADABADIABAIQAAAGgCAFQgDAFgFAEQgFAFgIACQgMACgHAAQgNAAgFgCgAgOALIAAAHQAAAGAEADIAFACIAHABQAFABAEgDQAEgCAAgFQAAgEgDgCIgKgFIgNgFIgDAGgAgJgbQgDACAAADQAAAFAEADIAJAFIAHACQADgDABgEQABgDAAgDQAAgEgEgCQgEgEgFAAQgFAAgEADg");
	this.shape_5.setTransform(291.9,8.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#00726F").s().p("AgkAxIAAgLQAAgGADgKQACgGAFgFQAHgFAPgHIAJgHIAEgEQAAAAAAgBQABgBAAAAQAAgBAAAAQAAgBAAAAQAAgFgDgCQgEgCgEAAQgHAAgJACQgLAFgFAFIAAgZQAFgEAMgEIAQgDQAHAAAHACQAHACAFAEQAFADADAGQADAJAAAFQAAAGgDAFQgCAFgEACQgDAEgFAEIgJAFQgRAMAAACIArAAIAAAWg");
	this.shape_6.setTransform(282.7,8.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#00726F").s().p("AgTBCIAHgPIAFgQIADgSIABgRIgBgQIgDgSIgFgQIgHgPIATAAIAHAPIAHAQIAEASIACAQIgCARIgEARQgDAJgEAIIgHAPg");
	this.shape_7.setTransform(273,8.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#00726F").s().p("AgVAwIgPgFIAAgZQAFAFAJACQAIACAHAAQAHgBAEgCIAFgEQABgBABgDIgBgFIgEgDIgGgCIgJgCQgPACgJADIADg6IA+AAIAAAXIglAAIgBAOIAIgBQAHAAAHACQAGACAFADQAFAEACAEQADAGAAAJIgBAIIgDAGIgEAGIgGAFQgGAEgHACQgIABgGAAQgJAAgIgBg");
	this.shape_8.setTransform(266.5,8.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#00726F").s().p("AgTAxIgOgEIAAgYQAFAEAHACQAGACAHAAIAIAAIAFgDIAGgHQADgDABgGIgLAEQgEACgHAAQgGgBgHgCQgGgCgFgEQgEgEgDgEQgDgGAAgIIABgIIACgHQADgHAGgEQAFgEAHgDQAHgCAIAAIAJABIAKADIAIAEIAGAHIAFAHIADAIQADAOAAAHIgBAMIgDAKIgFAJIgGAHIgHAFIgIAEQgMACgEAAIgPgBgAgKgZIgDADIgBAGIABAFIAEAEQAEADAFgBIAIAAIAHgDIgCgKIgEgGQgCgDgDgBIgEgBQgGABgEADg");
	this.shape_9.setTransform(257.3,8.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#00726F").s().p("AAFAwIAAgQIgvAAIAAgVIAug7IAaAAIAAA7IAOAAIAAAVIgOAAIAAAQgAgQALIAVAAIAAgag");
	this.shape_10.setTransform(247.8,8.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#00726F").s().p("AABBCIgHgPQgEgIgDgJIgEgRIgCgRIACgQIAEgSQADgIAEgIIAHgPIATAAIgHAPIgFAQQgCAJgBAJIgCAQIACARIADASIAFAQIAHAPg");
	this.shape_11.setTransform(240.8,8.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#00726F").s().p("AgcAwIAkhJIgtAAIAAgXIBLAAIAAASIgmBOg");
	this.shape_12.setTransform(231.2,8.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#00726F").s().p("AgJAiIAAgYIgYAAIAAgTIAYAAIAAgYIASAAIAAAYIAZAAIAAATIgZAAIAAAYg");
	this.shape_13.setTransform(220.2,8.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#00726F").s().p("AgJAeIgDgEQgBgDAAgDQAAgEABgDIADgEQAEgDAFAAQAGAAAEADIADAEIABAHIgBAGIgDAEQgEAEgGAAQgFAAgEgEgAgJgIIgDgEQgBgDAAgEQAAgDABgDIADgEQAEgEAFAAQAGAAAEAEIADAEIABAGIgBAHIgDAEQgEAEgGAAQgFAAgEgEg");
	this.shape_14.setTransform(211.1,10);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#00726F").s().p("AgFAiQgHgCgGgEQgFgFgDgGIgDgHIAAgJIABgHQAAgFACgDIAEgHIAFgFQAGgFAHgCQAFgCAHAAQAGAAAGABIAKAEIAAAVQgEgDgFgBIgJgBIgHABIgFACIgDAFQgBADAAADQAAAEABADIADAFIAFADIAHABIAKgCQAFgBADgCIAAAVQgFACgGABIgMABQgHAAgFgCg");
	this.shape_15.setTransform(205.4,9.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#00726F").s().p("AAJAiIgPgaIgFAAIAAAaIgYAAIAAhDIAYAAIAAAYIAFAAIAOgYIAbAAIgXAhIAYAig");
	this.shape_16.setTransform(198.3,9.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#00726F").s().p("AgWAjQgFgBgDgEQgDgCgCgEIgCgJQAAgGADgFQACgEAFgBQAEgDAGgBIAKgBQAHAAAGACIAAgDQAAgDgEgDQgCgCgGgBQgHAAgGACIgMAEIAAgVIAMgDIAPgBQAHAAAGABQAHACAFAEQAEADADAHQACAGAAAJIAAASQAAAEAFgBIADAAIAAAQQgGACgGAAQgGAAgEgCQgFgCgCgEQgFAEgEACQgGACgHAAQgFAAgEgBgAgIAHQgEACAAAEQAAABAAAAQAAABABAAQAAABAAAAQABABAAABQADABAEAAIADAAIAGgDIAAgJIgHgBQgFAAgCABg");
	this.shape_17.setTransform(189.8,9.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#00726F").s().p("AgKA4IAAgNQgPgCgGgCIgIgDIgHgFIgGgHIgEgHQgCgEAAgEIgCgJIACgIQAAgEACgEIAEgIIAGgGIAHgFIAIgDQAGgDAPgBIAAgNIAXAAIAAANQAHAAANAEIAIADIAHAFIAFAHIAFAHIACAIIAAAIIAAAJIgCAIIgFAHIgFAGIgHAFIgIAEQgNAEgHAAIAAANgAANAVQAFAAAFgDQAEgCADgDQACgDABgEIABgGIgBgGQgBgDgCgDQgDgEgEgCIgKgDgAgVgSQgFACgCAEQgDACgBAEIgBAGIABAHQABADADADQACAEAFACQAEACAHAAIAAgqIgLADg");
	this.shape_18.setTransform(179.3,8.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#00726F").s().p("AgQAUIAJgnIAYAAIgQAng");
	this.shape_19.setTransform(167.7,13.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#00726F").s().p("AgJAxIgKgCIgIgFIgGgGIgFgIIgDgJIgDgTQAAgGADgMIADgJIAFgHIAGgHIAIgEIAKgEIAJgBIALABIAJAEIAIAEIAGAHIAFAHIADAJQADAMAAAGQgBAOgCAFIgDAJIgFAIIgGAGIgIAFIgJACIgLABIgJgBgAgHgYQgDABgCADQgDAEgBAFQgBAGAAAFQAAAGABAGQABAFADADQACAEADACQAEABADABQAEgBAEgBQAEgCACgEQACgDABgFIABgMIgBgLQgBgFgCgEQgCgDgEgBQgEgCgEAAQgDAAgEACg");
	this.shape_20.setTransform(160.9,8.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#00726F").s().p("AgJAxIgKgCIgIgFIgGgGIgFgIIgDgJIgDgTQAAgGADgMIADgJIAFgHIAGgHIAIgEIAKgEIAJgBIALABIAJAEIAIAEIAGAHIAFAHIADAJQADAMAAAGQgBAOgCAFIgDAJIgFAIIgGAGIgIAFIgJACIgLABIgJgBgAgHgYQgDABgCADQgDAEgBAFQgBAGAAAFQAAAGABAGQABAFADADQACAEADACQAEABADABQAEgBAEgBQAEgCACgEQACgDABgFIABgMIgBgLQgBgFgCgEQgCgDgEgBQgEgCgEAAQgDAAgEACg");
	this.shape_21.setTransform(150.7,8.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#00726F").s().p("AgJAxIgKgCIgIgFIgGgGIgFgIIgDgJIgDgTQAAgGADgMIADgJIAFgHIAGgHIAIgEIAKgEIAJgBIALABIAJAEIAIAEIAGAHIAFAHIADAJQADAMAAAGQgBAOgCAFIgDAJIgFAIIgGAGIgIAFIgJACIgLABIgJgBgAgHgYQgDABgCADQgDAEgBAFQgBAGAAAFQAAAGABAGQABAFADADQACAEADACQAEABADABQAEgBAEgBQAEgCACgEQACgDABgFIABgMIgBgLQgBgFgCgEQgCgDgEgBQgEgCgEAAQgDAAgEACg");
	this.shape_22.setTransform(140.5,8.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#00726F").s().p("AgVAwIgPgFIAAgZQAGAFAIACQAHACAIAAQAHgBAFgCIAEgEQACgBAAgDIgCgFIgDgDIgGgCIgJgCQgOACgKADIAEg6IA+AAIAAAXIgmAAIgCAOIAJgBQAIAAAGACQAHACAEADQAFAEACAEQADAGAAAJIgBAIIgDAGIgEAGIgGAFQgFAEgJACQgHABgGAAQgJAAgIgBg");
	this.shape_23.setTransform(131.3,8.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#00726F").s().p("AgcAwIAkhJIgtAAIAAgXIBLAAIAAASIgmBOg");
	this.shape_24.setTransform(122.8,8.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#00726F").s().p("AgSAwQgIgCgFgFQgFgEgDgFQgCgFAAgGIABgIIADgGQAEgGAHgBQgGgFgCgEQgDgFAAgIQAAgFACgFQACgFAFgEQAFgDAHgDQAFgBALgCQAGABALACQAHADAFADQAEAEADAFQACAFAAAFQAAAIgDAFQgDAEgGAFIAGACIAFAFQADADABADIABAIQAAAGgCAFQgDAFgFAEQgFAFgIACQgMACgHAAQgNAAgFgCgAgOALIAAAHQAAAGAEADIAFACIAHABQAFABAEgDQAEgCAAgFQAAgEgDgCIgKgFIgNgFIgDAGgAgJgbQgDACAAADQAAAFAEADIAJAFIAHACQADgDABgEQABgDAAgDQAAgEgEgCQgEgEgFAAQgFAAgEADg");
	this.shape_25.setTransform(113.8,8.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#00726F").s().p("AgkAxIAAgLQAAgGADgKQACgGAFgFQAHgFAPgHIAJgHIAEgEQAAAAAAgBQABgBAAAAQAAgBAAAAQAAgBAAAAQAAgFgDgCQgEgCgEAAQgHAAgJACQgLAFgFAFIAAgZQAFgEAMgEIAQgDQAHAAAHACQAHACAFAEQAFADADAGQADAJAAAFQAAAGgDAFQgCAFgEACQgDAEgFAEIgJAFQgRAMAAACIArAAIAAAWg");
	this.shape_26.setTransform(104.7,8.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#00726F").s().p("AgTBCIAHgPIAFgQIADgSIABgRIgBgQIgDgSIgFgQIgHgPIATAAIAHAPIAHAQIAEASIACAQIgCARIgEARQgDAJgEAIIgHAPg");
	this.shape_27.setTransform(94.9,8.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#00726F").s().p("AgVAwIgPgFIAAgZQAFAFAJACQAIACAHAAQAHgBAFgCIAEgEQABgBAAgDIgBgFIgDgDIgGgCIgJgCQgOACgKADIAEg6IA+AAIAAAXIgnAAIgBAOIAJgBQAIAAAGACQAGACAFADQAFAEACAEQADAGAAAJIgBAIIgDAGIgEAGIgFAFQgHAEgIACQgHABgGAAQgJAAgIgBg");
	this.shape_28.setTransform(88.4,8.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#00726F").s().p("AgTAxIgOgEIAAgYQAFAEAHACQAGACAHAAIAIAAIAFgDIAGgHQADgDABgGIgLAEQgEACgHAAQgGgBgHgCQgGgCgFgEQgEgEgDgEQgDgGAAgIIABgIIACgHQADgHAGgEQAFgEAHgDQAHgCAIAAIAJABIAKADIAIAEIAGAHIAFAHIADAIQADAOAAAHIgBAMIgDAKIgFAJIgGAHIgHAFIgIAEQgMACgEAAIgPgBgAgKgZIgDADIgBAGIABAFIAEAEQAEADAFgBIAIAAIAHgDIgCgKIgEgGQgCgDgDgBIgEgBQgGABgEADg");
	this.shape_29.setTransform(79.3,8.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#00726F").s().p("AAFAwIAAgQIgvAAIAAgVIAug7IAbAAIAAA7IAMAAIAAAVIgMAAIAAAQgAgQALIAVAAIAAgag");
	this.shape_30.setTransform(69.7,8.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#00726F").s().p("AABBCIgHgPQgEgIgDgJIgEgRIgCgRIACgQIAEgSQADgIAEgIIAHgPIATAAIgHAPIgFAQQgCAJgBAJIgCAQIACARIADASIAFAQIAHAPg");
	this.shape_31.setTransform(62.8,8.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#00726F").s().p("AgcAwIAkhJIgtAAIAAgXIBLAAIAAASIgmBOg");
	this.shape_32.setTransform(53.2,8.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#00726F").s().p("AgJAiIAAgYIgYAAIAAgTIAYAAIAAgYIATAAIAAAYIAYAAIAAATIgYAAIAAAYg");
	this.shape_33.setTransform(42.1,8.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#00726F").s().p("AgJAeIgDgEQgBgDAAgDQAAgEABgDIADgEQAEgDAFAAQAGAAAEADIADAEIABAHIgBAGIgDAEQgEAEgGAAQgFAAgEgEgAgJgIIgDgEQgBgDAAgEQAAgDABgDIADgEQAEgEAFAAQAGAAAEAEIADAEIABAGIgBAHIgDAEQgEAEgGAAQgFAAgEgEg");
	this.shape_34.setTransform(33.1,10);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#00726F").s().p("AgJAKQgCgCgBgCIgBgGIABgFQABgDACgBQAEgEAFAAQAGAAAEAEIADAEIABAFIgBAGIgDAEQgEADgGAAQgFAAgEgDg");
	this.shape_35.setTransform(29,12.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#00726F").s().p("AglAhIAAgUIAFABQADAAACgEQADgDACgHIACgiIA6AAIAABDIgZAAIAAgwIgMAAIgBASQgBAKgDAHQgDAHgFAEIgGADIgGABQgFAAgIgCg");
	this.shape_36.setTransform(22.6,9.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#00726F").s().p("AgJAiQgHgDgGgEQgGgFgDgGIgCgIIgBgIIABgIQABgEACgEQACgEAHgHQAFgEAGgCQAGgCAEAAIALABIAIACIAGAFIAFAGIADAGIACAIQABAHgCAHIgrAAIADAEIAFAEQAEACAIABIALgBIAJgDIAAASIgLADIgPABQgGAAgIgCgAgGgPQgDAEAAAFIAVAAQAAgEgCgDIgDgDQgDgCgDABQgDAAgEACg");
	this.shape_37.setTransform(14.7,9.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#00726F").s().p("AgLAyIAAhLIgdAAIAAgYIBRAAIAAAYIgcAAIAABLg");
	this.shape_38.setTransform(6.4,8.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,355.2,18.5);


(lib.Символ40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00726F").s().p("AgTBCIAHgPIAFgQIADgSIABgRIgBgQIgDgSIgFgQIgHgPIATAAIAHAPIAHAQIAEASIACAQIgCARIgEARQgDAJgEAIIgHAPg");
	this.shape.setTransform(256.7,8.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00726F").s().p("AgGAxQgFgBgEgDIgIgFIgIgHIgFgJQgCgFgBgFQgCgHAAgGQAAgFACgGQABgGACgFIAFgJIAHgIIAJgGIAJgDQAGgDAMgBQAIAAAHACQAHACAHACIAAAaQgFgEgGgDQgHgBgHAAQgGgBgFACQgFACgDAEQgFAEgDAFQgCAGAAAGQAAAHACAGQADAFAFAEQADADAFABQAFABAGAAQAIAAAHgCQAGgCAFgEIAAAaQgHADgHACQgIABgIAAQgMgBgGgCg");
	this.shape_1.setTransform(249.7,8.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00726F").s().p("AAJAiIgPgaIgFAAIAAAaIgYAAIAAhDIAYAAIAAAYIAFAAIAOgYIAbAAIgXAhIAYAig");
	this.shape_2.setTransform(238.4,9.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00726F").s().p("AgNAiQgHgCgGgFQgFgFgDgGIgDgIIAAgIIAAgHIADgIQADgGAFgFQAGgEAHgDQAHgCAGAAQAHAAAHACQAHADAGAEQAFAFADAGIACAIIABAHIgBAIIgCAIQgDAGgFAFQgGAFgHACQgHACgHAAQgGAAgHgCgAgFgNIgEAEQgDAEAAAFQAAAGADAEIAEADIAFACIAGgCIAEgDQADgEAAgGQAAgFgDgEIgEgEIgGgBIgFABg");
	this.shape_3.setTransform(229.8,9.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00726F").s().p("AgkAhIAAgUIADABQAEAAADgEQACgDABgHIAEgiIA4AAIAABDIgYAAIAAgwIgMAAIgBASQgBAKgDAHQgDAHgFAEIgFADIgHABQgGAAgGgCg");
	this.shape_4.setTransform(221,9.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#00726F").s().p("AgpAyIAAhjIBKAAIAAAYIgvAAIAAAMIARAAQAJAAAGABQAHACAGAEQAFADADAFQACADAAAEIABAIIgBAJQAAAEgCADQgDAGgFAEQgGAEgHABQgGACgJAAgAgOAbIARAAQAGAAACgCQAEgCgBgGQABgFgEgCQgCgCgGAAIgRAAg");
	this.shape_5.setTransform(212.5,8.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#00726F").s().p("AABBCIgHgPQgEgIgDgJIgEgRIgCgRIACgQIAEgSQADgIAEgIIAHgPIATAAIgHAPIgFAQQgCAJgBAJIgCAQIACARIADASIAFAQIAHAPg");
	this.shape_6.setTransform(205,8.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#00726F").s().p("AgCAcIASgcIgSgbIAWAAIATAbIAAACIgTAagAgmAcIAUgcIgUgbIAYAAIARAbIAAACIgRAag");
	this.shape_7.setTransform(195.2,9.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#00726F").s().p("AAKAxIAAghIgWAhIgWAAIAAhDIAZAAIAAAfIAWgfIAWAAIAABDgAgMgbIgKgDIAAgSIAMAEIAKABIALgBIALgEIAAASIgKADQgGACgGAAQgGAAgGgCg");
	this.shape_8.setTransform(186.6,8.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#00726F").s().p("AgNAiQgHgCgGgFQgFgFgDgGIgDgIIAAgIIAAgHIADgIQADgGAFgFQAGgEAHgDQAHgCAGAAQAHAAAHACQAHADAGAEQAFAFADAGIACAIIABAHIgBAIIgCAIQgDAGgFAFQgGAFgHACQgHACgHAAQgGAAgHgCgAgFgNIgEAEQgDAEAAAFQAAAGADAEIAEADIAFACIAGgCIAEgDQADgEAAgGQAAgFgDgEIgEgEIgGgBIgFABg");
	this.shape_9.setTransform(178.1,9.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#00726F").s().p("AAKAiIAAgYIgTAAIAAAYIgZAAIAAhDIAZAAIAAAZIATAAIAAgZIAZAAIAABDg");
	this.shape_10.setTransform(169.6,9.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#00726F").s().p("AAgAiIgPgYIgFAAIAAAYIgXAAIAAgYIgGAAIgNAYIgaAAIAVgiIgUghIAaAAIAOAaIAEAAIAAgaIAXAAIAAAaIAEAAIAOgaIAaAAIgVAhIAXAig");
	this.shape_11.setTransform(159.6,9.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#00726F").s().p("AgJAiQgHgDgGgEQgGgFgDgGIgCgIIgBgIIABgIQABgEACgEQACgEAHgHQAFgEAGgCQAGgCAEAAIALABIAIACIAGAFIAFAGIADAGIACAIQABAHgCAHIgrAAIADAEIAFAEQAEACAIABIALgBIAJgDIAAASIgLADIgPABQgGAAgIgCgAgGgPQgDAEAAAFIAVAAQAAgEgCgDIgDgDQgDgCgDABQgDAAgEACg");
	this.shape_12.setTransform(149.9,9.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#00726F").s().p("AglAzIAAhjIAVAAIAAAKQADgFAGgDQADgCADgBIAHgBIAHABIAHACQAHADADAGQAEAFADAHQACAGgBAHQABAHgCAGQgDAFgEAFQgDAFgHADIgHADIgHAAQgGAAgFgCQgFgCgDgDIAAAlgAgIgbQgDACgCAEIAAAQQACADADACQAEABAEAAQACAAAEgBIAEgCQACgCAAgDIABgGIgBgGQAAgDgCgDIgEgDQgEgCgCAAQgEAAgEADg");
	this.shape_13.setTransform(141.7,11.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#00726F").s().p("AgJAiQgHgDgGgEQgGgFgDgGIgCgIIgBgIIABgIQABgEACgEQACgEAHgHQAFgEAGgCQAGgCAEAAIALABIAIACIAGAFIAFAGIADAGIACAIQABAHgCAHIgrAAQABACACACIAFAEQAEACAIABIALgBIAJgDIAAASIgLADIgPABQgGAAgIgCgAgGgPQgDAEAAAFIAVAAQAAgEgCgDIgDgDQgDgCgDABQgDAAgEACg");
	this.shape_14.setTransform(133.1,9.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#00726F").s().p("AgNAyQgHgCgFgFIgEgGIgEgIIgCgJIgBgKQAAgKACgFQABgIADgFQADgFAEgFQADgEAFgDQAKgGAQgDIALgCQAGgCADgDIAAAWIgHAEIgIABQgMACgEADQgFACgDAFQgDAFAAAFQAEgEAEgDQAEgDAHAAQAGAAAGACQAFADAEAEQAEADACAFQACAGAAAIIgBAIIgCAHQgDAFgFAFQgFAEgHACQgHACgHAAQgGAAgHgCgAgFAHQgCABgCACQgCADAAAGQAAAGACADIAEAEQADABACABQADgBADgBIAEgEQACgDAAgGQAAgGgCgDQgCgCgCgBQgDgCgDAAQgCAAgDACg");
	this.shape_15.setTransform(125,8.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#00726F").s().p("AgWAjQgFgBgDgEQgDgCgCgEQgCgFAAgEQAAgGADgFQACgEAFgBQAEgDAGgBIAKgBQAHAAAGACIAAgDQAAgDgEgDQgCgCgGgBQgHAAgGACIgMAEIAAgVIAMgDIAPgBQAHAAAGABQAHACAFAEQAEADADAHQACAGAAAJIAAASQAAAEAFgBIADAAIAAAQQgGACgGAAQgGAAgEgCQgFgCgCgEQgFAEgEACQgGACgHAAQgFAAgEgBgAgIAHQgEACAAAEQAAABAAAAQABABAAAAQAAABAAAAQABABAAABQADABAEAAIADAAIAGgDIAAgJIgHgBQgFAAgCABg");
	this.shape_16.setTransform(116.7,9.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#00726F").s().p("AAKAiIAAgYIgTAAIAAAYIgZAAIAAhDIAZAAIAAAZIATAAIAAgZIAZAAIAABDg");
	this.shape_17.setTransform(108.3,9.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#00726F").s().p("AgWAjQgFgBgDgEQgDgCgCgEIgCgJQAAgGADgFQACgEAFgBQAEgDAGgBIAKgBQAHAAAGACIAAgDQAAgDgEgDQgCgCgGgBQgHAAgGACIgMAEIAAgVIAMgDIAPgBQAHAAAGABQAHACAFAEQAEADADAHQACAGAAAJIAAASQAAAEAFgBIADAAIAAAQQgGACgGAAQgGAAgEgCQgFgCgCgEQgFAEgEACQgGACgHAAQgFAAgEgBgAgIAHQgEACAAAEQAAABAAAAQABABAAAAQAAABAAAAQABABAAABQADABAEAAIADAAIAGgDIAAgJIgHgBQgFAAgCABg");
	this.shape_18.setTransform(97,9.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#00726F").s().p("AAKAiIAAgYIgTAAIAAAYIgZAAIAAhDIAZAAIAAAZIATAAIAAgZIAZAAIAABDg");
	this.shape_19.setTransform(88.6,9.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#00726F").s().p("AALAiIAAgSIgHAAIgLASIgbAAIARgWIgGgEIgEgFQgDgEAAgHQAAgFABgEQACgFAEgDQAEgEAFgCQAFgCAHAAIAlAAIAABDgAgDgNQgCACAAAEQAAAEACABQADACACAAIAJAAIAAgPIgJAAQgCAAgDACg");
	this.shape_20.setTransform(77.1,9.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#00726F").s().p("AAKAiIAAgYIgTAAIAAAYIgZAAIAAhDIAZAAIAAAZIATAAIAAgZIAZAAIAABDg");
	this.shape_21.setTransform(69.1,9.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#00726F").s().p("AgxAiIAAhDIAYAAIAAAvIAOAAIAAgvIAXAAIAAAvIAOAAIAAgvIAYAAIAABDg");
	this.shape_22.setTransform(59,9.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#00726F").s().p("AgWAjQgFgBgDgEQgDgCgCgEIgCgJQAAgGADgFQACgEAFgBQAEgDAGgBIAKgBQAHAAAGACIAAgDQAAgDgEgDQgCgCgGgBQgHAAgGACIgMAEIAAgVIAMgDIAPgBQAHAAAGABQAHACAFAEQAEADADAHQACAGAAAJIAAASQAAAEAFgBIADAAIAAAQQgGACgGAAQgGAAgEgCQgFgCgCgEQgFAEgEACQgGACgHAAQgFAAgEgBgAgIAHQgEACAAAEQAAABAAAAQABABAAAAQAAABAAAAQABABAAABQADABAEAAIADAAIAGgDIAAgJIgHgBQgFAAgCABg");
	this.shape_23.setTransform(49.1,9.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#00726F").s().p("AgpAyIAAhjIBLAAIAAAYIgwAAIAAAMIARAAQAJAAAGABQAHACAFAEQAGADACAFQACADABAEIABAIIgBAJQgBAEgCADQgCAGgGAEQgFAEgHABQgGACgJAAgAgOAbIARAAQAFAAADgCQADgCAAgGQAAgFgDgCQgDgCgFAAIgRAAg");
	this.shape_24.setTransform(40.3,8.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#00726F").s().p("AAPAcIgRgaIAAgCIARgbIAYAAIgUAbIAUAcgAgTAcIgTgaIAAgCIATgbIAWAAIgSAbIASAcg");
	this.shape_25.setTransform(30.8,9.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#00726F").s().p("AAcA8IAAgVIhOAAIAAhiIAaAAIAABLIAkAAIAAhLIAaAAIAABLIANAAIAAAsg");
	this.shape_26.setTransform(17.9,9.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#00726F").s().p("AgpAyIAAhjIBKAAIAAAYIgvAAIAAAMIASAAQAIAAAGABQAHACAFAEQAGADADAFQACADAAAEIABAIIgBAJQAAAEgCADQgDAGgGAEQgFAEgHABQgGACgIAAgAgOAbIARAAQAGAAACgCQAEgCgBgGQABgFgEgCQgCgCgGAAIgRAAg");
	this.shape_27.setTransform(7.3,8.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,262.9,18.5);


(lib.Символ39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00726F").s().p("AgQAUIAJgnIAYAAIgQAng");
	this.shape.setTransform(336.6,13.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00726F").s().p("AgJAxIgKgCIgIgFIgGgGIgFgIIgDgJIgDgTQAAgGADgMIADgJIAFgHIAGgHIAIgEIAKgEIAJgBIALABIAJAEIAIAEIAGAHIAFAHIADAJQADAMAAAGQgBAOgCAFIgDAJIgFAIIgGAGIgIAFIgJACIgLABIgJgBgAgHgYQgDABgCADQgDAEgBAFQgBAGAAAFQAAAGABAGQABAFADADQACAEADACQAEABADABQAEgBAEgBQAEgCACgEQACgDABgFIABgMIgBgLQgBgFgCgEQgCgDgEgBQgEgCgEAAQgDAAgEACg");
	this.shape_1.setTransform(329.7,8.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00726F").s().p("AgcAwIAAgWIASAAIAAgvIgSAHIAAgYIAYgKIASAAIAABKIAPAAIAAAWg");
	this.shape_2.setTransform(321.5,8.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00726F").s().p("AgIAKQgDgCgBgCIgBgGIABgFQABgDADgBQADgEAFAAQAGAAAEAEIADAEIABAFIgBAGIgDAEQgEADgGAAQgFAAgDgDg");
	this.shape_3.setTransform(312.7,12.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00726F").s().p("AAWArIAAgSIgrAAIAAASIgWAAIAAgkIAKAAIAFgJIADgNIABgbIA5AAIAAAxIALAAIAAAkgAgEgGQgBAGgDAHIARAAIAAgfIgLAAIgCASg");
	this.shape_4.setTransform(305.9,10.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#00726F").s().p("AgQAUIAJgnIAYAAIgQAng");
	this.shape_5.setTransform(296,13.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#00726F").s().p("AgJAKQgCgCgBgCIgBgGIABgFQABgDACgBQAEgEAFAAQAGAAAEAEIADAEIABAFIgBAGIgDAEQgEADgGAAQgFAAgEgDg");
	this.shape_6.setTransform(292.3,12.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#00726F").s().p("AgNAyQgHgCgFgFIgEgGIgEgIIgCgJIgBgKQAAgKACgFQABgIADgFQADgFAEgFQADgEAFgDQAKgGAQgDIALgCQAGgCADgDIAAAWIgHAEIgIABQgMACgEADQgFACgDAFQgDAFAAAFQAEgEAEgDQAEgDAHAAQAGAAAGACQAFADAEAEQAEADACAFQACAGAAAIIgBAIIgCAHQgDAFgFAFQgFAEgHACQgHACgHAAQgGAAgHgCgAgFAHQgCABgCACQgCADAAAGQAAAGACADIAEAEQADABACABQADgBADgBIAEgEQACgDAAgGQAAgGgCgDQgCgCgCgBQgDgCgDAAQgCAAgDACg");
	this.shape_7.setTransform(286.2,8.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#00726F").s().p("AgWAjQgFgBgDgEQgDgCgCgEIgCgJQAAgGADgFQACgEAFgBQAEgDAGgBIAKgBQAHAAAGACIAAgDQAAgDgEgDQgCgCgGgBQgHAAgGACIgMAEIAAgVIAMgDIAPgBQAHAAAGABQAHACAFAEQAEADADAHQACAGAAAJIAAASQAAAEAFgBIADAAIAAAQQgGACgGAAQgGAAgEgCQgFgCgCgEQgFAEgEACQgGACgHAAQgFAAgEgBgAgIAHQgEACAAAEQAAABAAAAQAAABABAAQAAABAAAAQABABAAABQADABAEAAIADAAIAGgDIAAgJIgHgBQgFAAgCABg");
	this.shape_8.setTransform(277.8,9.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#00726F").s().p("AAKAiIAAgYIgTAAIAAAYIgZAAIAAhDIAZAAIAAAZIATAAIAAgZIAZAAIAABDg");
	this.shape_9.setTransform(269.5,9.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#00726F").s().p("AALAiIAAgSIgHAAIgLASIgbAAIARgWIgGgEIgEgFQgDgEAAgHQAAgFABgEQACgFAEgDQAEgEAFgCQAFgCAHAAIAlAAIAABDgAgDgNQgCACAAAEQAAAEACABQADACACAAIAJAAIAAgPIgJAAQgCAAgDACg");
	this.shape_10.setTransform(257.9,9.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#00726F").s().p("AgWAjQgFgBgDgEQgDgCgCgEIgCgJQAAgGADgFQACgEAFgBQAEgDAGgBIAKgBQAHAAAGACIAAgDQAAgDgEgDQgCgCgGgBQgHAAgGACIgMAEIAAgVIAMgDIAPgBQAHAAAGABQAHACAFAEQAEADADAHQACAGAAAJIAAASQAAAEAFgBIADAAIAAAQQgGACgGAAQgGAAgEgCQgFgCgCgEQgFAEgEACQgGACgHAAQgFAAgEgBgAgIAHQgEACAAAEQAAABAAAAQABABAAAAQAAABAAAAQABABAAABQADABAEAAIADAAIAGgDIAAgJIgHgBQgFAAgCABg");
	this.shape_11.setTransform(250.1,9.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#00726F").s().p("AAJAiIgPgaIgFAAIAAAaIgYAAIAAhDIAYAAIAAAYIAFAAIAOgYIAbAAIgXAhIAYAig");
	this.shape_12.setTransform(242.2,9.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#00726F").s().p("AgFAiQgHgCgGgEQgFgFgDgGIgDgHIAAgJIABgHQAAgFACgDIAEgHIAFgFQAGgFAHgCQAFgCAHAAQAGAAAGABIAKAEIAAAVQgEgDgFgBIgJgBIgHABIgFACIgDAFQgBADAAADQAAAEABADIADAFIAFADIAHABIAKgCQAFgBADgCIAAAVQgFACgGABIgMABQgHAAgFgCg");
	this.shape_13.setTransform(234.3,9.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#00726F").s().p("AAKAiIAAgYIgTAAIAAAYIgZAAIAAhDIAZAAIAAAZIATAAIAAgZIAZAAIAABDg");
	this.shape_14.setTransform(226.6,9.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#00726F").s().p("AgJAiQgHgDgGgEQgGgFgDgGIgCgIIgBgIIABgIQABgEACgEQACgEAHgHQAFgEAGgCQAGgCAEAAIALABIAIACIAGAFIAFAGIADAGIACAIQABAHgCAHIgrAAIADAEIAFAEQAEACAIABIALgBIAJgDIAAASIgLADIgPABQgGAAgIgCgAgGgPQgDAEAAAFIAVAAQAAgEgCgDIgDgDQgDgCgDABQgDAAgEACg");
	this.shape_15.setTransform(218.4,9.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#00726F").s().p("AAKAiIAAgYIgTAAIAAAYIgZAAIAAhDIAZAAIAAAZIATAAIAAgZIAZAAIAABDg");
	this.shape_16.setTransform(210.2,9.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#00726F").s().p("AgFAiQgHgCgGgEQgFgFgDgGIgDgHIAAgJIABgHQAAgFACgDIAEgHIAFgFQAGgFAHgCQAFgCAHAAQAGAAAGABIAKAEIAAAVQgEgDgFgBIgJgBIgHABIgFACIgDAFQgBADAAADQAAAEABADIADAFIAFADIAHABIAKgCQAFgBADgCIAAAVQgFACgGABIgMABQgHAAgFgCg");
	this.shape_17.setTransform(202.4,9.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#00726F").s().p("AgJAiQgHgDgGgEQgGgFgDgGIgCgIIgBgIIABgIQABgEACgEQACgEAHgHQAFgEAGgCQAGgCAEAAIALABIAIACIAGAFIAFAGIADAGIACAIQABAHgCAHIgrAAIADAEIAFAEQAEACAIABIALgBIAJgDIAAASIgLADIgPABQgGAAgIgCgAgGgPQgDAEAAAFIAVAAQAAgEgCgDIgDgDQgDgCgDABQgDAAgEACg");
	this.shape_18.setTransform(195,9.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#00726F").s().p("AgmAzIAAhjIAWAAIAAAKQADgFAGgDQADgCADgBIAGgBIAIABIAIACQAFADAEAGQAEAFADAHQABAGABAHQgBAHgBAGQgDAFgEAFQgEAFgFADIgIADIgIAAQgFAAgFgCQgFgCgDgDIAAAlgAgIgbQgDACgCAEIAAAQQACADADACQAEABAEAAQADAAACgBIAFgCQACgCAAgDIABgGIgBgGQAAgDgCgDIgFgDQgCgCgDAAQgEAAgEADg");
	this.shape_19.setTransform(186.8,11.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#00726F").s().p("AASAyIAAhLIgjAAIAABLIgbAAIAAhjIBZAAIAABjg");
	this.shape_20.setTransform(176.7,8.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#00726F").s().p("AgQAUIAJgnIAYAAIgQAng");
	this.shape_21.setTransform(166,13.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#00726F").s().p("AgWAjQgFgBgDgEQgDgCgCgEIgCgJQAAgGADgFQACgEAFgBQAEgDAGgBIAKgBQAHAAAGACIAAgDQAAgDgEgDQgCgCgGgBQgHAAgGACIgMAEIAAgVIAMgDIAPgBQAHAAAGABQAHACAFAEQAEADADAHQACAGAAAJIAAASQAAAEAFgBIADAAIAAAQQgGACgGAAQgGAAgEgCQgFgCgCgEQgFAEgEACQgGACgHAAQgFAAgEgBgAgIAHQgEACAAAEQAAABAAAAQAAABABAAQAAABAAAAQABABAAABQADABAEAAIADAAIAGgDIAAgJIgHgBQgFAAgCABg");
	this.shape_22.setTransform(160.1,9.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#00726F").s().p("AggAiIAAhDIAoAAQAHAAAFABQAEACADADQADADABADIABAGQAAAGgDAEQgDAEgFABQAGACADAEQADADAAAHIgBAGIgEAGQgCADgFACQgFABgGAAgAgIASIAJAAQAEAAACgBQAAAAABgBQAAAAAAgBQAAAAABgBQAAgBAAgBQAAgDgCgBQgCgCgEAAIgJAAgAgIgFIAIAAQADAAACgCQABAAAAAAQAAgBABAAQAAgBAAgBQAAAAAAgBQAAgDgCgCQgCgCgDABIgIAAg");
	this.shape_23.setTransform(152.2,9.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#00726F").s().p("AAJAiIgPgaIgFAAIAAAaIgYAAIAAhDIAYAAIAAAYIAFAAIAOgYIAbAAIgXAhIAYAig");
	this.shape_24.setTransform(144.4,9.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#00726F").s().p("AgFAiQgHgCgGgEQgFgFgDgGIgDgHIAAgJIABgHQAAgFACgDIAEgHIAFgFQAGgFAHgCQAFgCAHAAQAGAAAGABIAKAEIAAAVQgEgDgFgBIgJgBIgHABIgFACIgDAFQgBADAAADQAAAEABADIADAFIAFADIAHABIAKgCQAFgBADgCIAAAVQgFACgGABIgMABQgHAAgFgCg");
	this.shape_25.setTransform(136.4,9.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#00726F").s().p("AgNAiQgHgCgGgFQgFgFgDgGIgDgIIAAgIIAAgHIADgIQADgGAFgFQAGgEAHgDQAHgCAGAAQAHAAAHACQAHADAGAEQAFAFADAGIACAIIABAHIgBAIIgCAIQgDAGgFAFQgGAFgHACQgHACgHAAQgGAAgHgCgAgFgNIgEAEQgDAEAAAFQAAAGADAEIAEADIAFACIAGgCIAEgDQADgEAAgGQAAgFgDgEIgEgEIgGgBIgFABg");
	this.shape_26.setTransform(128.7,9.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#00726F").s().p("AAdAyIAAg0IgWAfIgNAAIgWgfIAAA0IgaAAIAAhjIAZAAIAdAvIAegvIAZAAIAABjg");
	this.shape_27.setTransform(117.9,8.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#00726F").s().p("AgQAUIAJgnIAYAAIgQAng");
	this.shape_28.setTransform(106.2,13.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#00726F").s().p("AgkAxIAAgLQAAgGADgKQACgGAFgFQAHgFAPgHIAJgHIAEgEQAAAAAAgBQABgBAAAAQAAgBAAAAQAAgBAAAAQAAgFgDgCQgEgCgEAAQgHAAgJACQgLAFgFAFIAAgZQAFgEAMgEIAQgDQAHAAAHACQAHACAFAEQAFADADAGQADAJAAAFQAAAGgDAFQgCAFgEACQgDAEgFAEIgJAFQgRAMAAACIArAAIAAAWg");
	this.shape_29.setTransform(100,8.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#00726F").s().p("AgcAwIAAgWIASAAIAAgvIgSAHIAAgYIAYgKIASAAIAABKIAPAAIAAAWg");
	this.shape_30.setTransform(92.5,8.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#00726F").s().p("AgcAwIAAgWIASAAIAAgvIgSAHIAAgYIAYgKIASAAIAABKIAPAAIAAAWg");
	this.shape_31.setTransform(85.6,8.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#00726F").s().p("AgTAxQgIgCgJgDIAAgZQAGAEALADQAGACAJAAQAFgBAFgCQADgBABgCQAAAAABgBQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgFgEgCQgDgBgFAAIgQAAIAAgVIANAAQAEAAADgCQADgBABgEQgBgEgDgCQgEgCgGAAQgGAAgHACQgJADgGAEIAAgZQAGgDAJgDQAIgCAJAAQAGABAGABQAIACAEADQAGAEACAFQADAFAAAHIgBAHIgDAGQgCACgDACIgGADQAEACAEAAIAFAFIAFAHQABAFAAAEIgBAIIgCAHQgEAEgGAEQgGADgHACQgHABgGAAQgJAAgIgBg");
	this.shape_32.setTransform(77.8,8.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#00726F").s().p("AgkAxIAAgLQAAgGADgKQACgGAFgFQAHgFAPgHIAJgHIAEgEQAAAAAAgBQABgBAAAAQAAgBAAAAQAAgBAAAAQAAgFgDgCQgEgCgEAAQgHAAgJACQgLAFgFAFIAAgZQAFgEAMgEIAQgDQAHAAAHACQAHACAFAEQAFADADAGQADAJAAAFQAAAGgDAFQgCAFgEACQgDAEgFAEIgJAFQgRAMAAACIArAAIAAAWg");
	this.shape_33.setTransform(68.9,8.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#00726F").s().p("AgcAwIAAgWIASAAIAAgvIgSAHIAAgYIAYgKIASAAIAABKIAPAAIAAAWg");
	this.shape_34.setTransform(61.4,8.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#00726F").s().p("AgQAUIAJgnIAYAAIgQAng");
	this.shape_35.setTransform(52.6,13.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#00726F").s().p("AALAiIAAgSIgHAAIgLASIgbAAIARgWIgGgEIgEgFQgDgEAAgHQAAgFABgEQACgFAEgDQAEgEAFgCQAFgCAHAAIAlAAIAABDgAgDgNQgCACAAAEQAAAEACABQADACACAAIAJAAIAAgPIgJAAQgCAAgDACg");
	this.shape_36.setTransform(46.5,9.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#00726F").s().p("AAKAiIAAghIgWAhIgWAAIAAhDIAZAAIAAAhIAWghIAWAAIAABDg");
	this.shape_37.setTransform(38.5,9.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#00726F").s().p("AgFAiQgHgCgGgEQgFgFgDgGIgDgHIAAgJIABgHQAAgFACgDIAEgHIAFgFQAGgFAHgCQAFgCAHAAQAGAAAGABIAKAEIAAAVQgEgDgFgBIgJgBIgHABIgFACIgDAFQgBADAAADQAAAEABADIADAFIAFADIAHABIAKgCQAFgBADgCIAAAVQgFACgGABIgMABQgHAAgFgCg");
	this.shape_38.setTransform(30.7,9.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#00726F").s().p("AgFAiQgHgCgGgEQgFgFgDgGIgDgHIAAgJIABgHQAAgFACgDIAEgHIAFgFQAGgFAHgCQAFgCAHAAQAGAAAGABIAKAEIAAAVQgEgDgFgBIgJgBIgHABIgFACIgDAFQgBADAAADQAAAEABADIADAFIAFADIAHABIAKgCQAFgBADgCIAAAVQgFACgGABIgMABQgHAAgFgCg");
	this.shape_39.setTransform(23.7,9.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#00726F").s().p("AgNAiQgHgCgGgFQgFgFgDgGIgDgIIAAgIIAAgHIADgIQADgGAFgFQAGgEAHgDQAHgCAGAAQAHAAAHACQAHADAGAEQAFAFADAGIACAIIABAHIgBAIIgCAIQgDAGgFAFQgGAFgHACQgHACgHAAQgGAAgHgCgAgFgNIgEAEQgDAEAAAFQAAAGADAEIAEADIAFACIAGgCIAEgDQADgEAAgGQAAgFgDgEIgEgEIgGgBIgFABg");
	this.shape_40.setTransform(15.9,9.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#00726F").s().p("AgoAyIAAhjIAoAAQAHAAAIACQAIACAGADIAFAFIAEAGIADAIIAAAJIAAAJIgDAFIgEAGIgFAFQgGAEgIABQgIACgHAAIgOAAIAAAggAgOgDIAOAAQAGAAADgCIAEgEQABgCAAgDQAAgEgBgCIgEgEQgDgCgGAAIgOAAg");
	this.shape_41.setTransform(7.2,8.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,343.3,18.5);


(lib.Символ38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00726F").s().p("AgQAUIAJgnIAYAAIgQAng");
	this.shape.setTransform(117.3,13.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00726F").s().p("AAFARIAAghIAVAAIgEAhgAgZARIAAghIAWAAIgFAhg");
	this.shape_1.setTransform(112.4,4.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00726F").s().p("AglAzIAAhjIAVAAIAAAKQADgFAGgDQADgCADgBIAHgBIAHABIAHACQAHADADAGQAEAFADAHQACAGgBAHQABAHgCAGQgDAFgEAFQgDAFgHADIgHADIgHAAQgGAAgFgCQgFgCgDgDIAAAlgAgIgbQgDACgCAEIAAAQQACADADACQAEABAEAAQACAAAEgBIAEgCQACgCAAgDIABgGIgBgGQAAgDgCgDIgEgDQgEgCgCAAQgEAAgEADg");
	this.shape_2.setTransform(104.8,11.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00726F").s().p("AgJAiQgHgDgGgEQgGgFgDgGIgCgIIgBgIIABgIQABgEACgEQACgEAHgHQAFgEAGgCQAGgCAEAAIALABIAIACIAGAFIAFAGIADAGIACAIQABAHgCAHIgrAAQABACACACIAFAEQAEACAIABIALgBIAJgDIAAASIgLADIgPABQgGAAgIgCgAgGgPQgDAEAAAFIAVAAQAAgEgCgDIgDgDQgDgCgDABQgDAAgEACg");
	this.shape_3.setTransform(96.2,9.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00726F").s().p("AgSAjQgHgCgFgDIAAgSQAEACAHACQAHACAGAAQAGAAACgCQAEgBgBgDQABgDgEgCIgGAAIgMAAIAAgNIAMAAIAFgBQADgBAAgDQAAgBAAAAQAAgBgBAAQAAgBAAAAQgBAAAAgBQgCgCgEAAQgGAAgIACIgKAEIAAgSQAFgDAHgBQAIgCAGAAQAIAAAHACQAGACAEADQADADACAEIACAHQgBAFgDAFQgDADgFABQAGABAEAEQACAEAAAGQAAAEgBADQgCAEgEADQgFADgGACQgIACgHAAQgIAAgHgBg");
	this.shape_4.setTransform(88.7,9.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#00726F").s().p("AAKAxIAAghIgWAhIgWAAIAAhDIAZAAIAAAfIAWgfIAWAAIAABDgAgMgbIgKgDIAAgSIAMAEIAKABIALgBIALgEIAAASIgKADQgGACgGAAQgGAAgGgCg");
	this.shape_5.setTransform(80.9,8.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#00726F").s().p("AgWAjQgFgBgDgEQgDgCgCgEQgCgFAAgEQAAgGADgFQACgEAFgBQAEgDAGgBIAKgBQAHAAAGACIAAgDQAAgDgEgDQgCgCgGgBQgHAAgGACIgMAEIAAgVIAMgDIAPgBQAHAAAGABQAHACAFAEQAEADADAHQACAGAAAJIAAASQAAAEAFgBIADAAIAAAQQgGACgGAAQgGAAgEgCQgFgCgCgEQgFAEgEACQgGACgHAAQgFAAgEgBgAgIAHQgEACAAAEQAAABAAAAQABABAAAAQAAABAAAAQABABAAABQADABAEAAIADAAIAGgDIAAgJIgHgBQgFAAgCABg");
	this.shape_6.setTransform(72.6,9.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#00726F").s().p("AgKBBIAAgdQgJAAgHgDQgHgDgFgEQgGgFgDgGIgCgHIgBgIQAAgEADgKQADgGAGgFQAFgEAHgDQAHgDAJAAIAAgdIAVAAIAAAdQAJAAAHADQAHADAFAEQAGAFADAGQADAKAAAEIgBAIIgCAHQgDAGgGAFQgFAEgHADQgHADgJAAIAAAdgAALAQIAHgCIAFgEQADgEAAgGQAAgFgDgEIgFgEQgDgCgEAAgAgRgNIgFAEQgDAEAAAFQAAAGADAEIAFAEIAHACIAAgfQgEAAgDACg");
	this.shape_7.setTransform(62.9,9.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#00726F").s().p("AASAyIAAhLIgjAAIAABLIgbAAIAAhjIBZAAIAABjg");
	this.shape_8.setTransform(52,8.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#00726F").s().p("AAFARIAAghIAVAAIgEAhgAgZARIAAghIAWAAIgFAhg");
	this.shape_9.setTransform(43.4,4.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#00726F").s().p("AgMAzIgKgDIgKgFIgHgHIgGgIIgEgJQgCgEAAgFIgBgKIABgJIACgJIAEgJIAGgIIAHgHIAKgEIAKgEQAHgBAFAAQAGAAAGABIALAEIAJAEIAIAHIAGAIIAEAJIADAJIABAJIgBAKIgDAJIgEAJIgGAIIgIAHIgJAFIgLADIgMABIgMgBgAgKgZQgFADgEAEQgDAEgBAFQgCAFAAAEQAAAGACAFQABAFADADQAEAFAFACQAFABAFAAQAFAAAGgBQAFgCADgFQAEgDABgFQACgFAAgGQAAgEgCgFQgBgFgEgEQgDgEgFgDQgGgCgFABQgFgBgFACg");
	this.shape_10.setTransform(31.2,8.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#00726F").s().p("AgLAzIgLgDIgJgFIgIgHIgGgIIgEgJQgCgEgBgFIgBgKIABgJIADgJIAEgJIAGgIIAIgHIAJgEIALgEQAGgBAFAAQAGAAAGABIALAEIAJAEIAIAHIAFAIIAFAJIACAJIABAJIgBAKIgCAJIgFAJIgFAIIgIAHIgJAFIgLADIgMABIgLgBgAgKgZQgFADgEAEQgDAEgCAFQgBAFAAAEQAAAGABAFQACAFADADQAEAFAFACQAFABAFAAQAGAAAFgBQAFgCADgFQADgDACgFQACgFAAgGQAAgEgCgFQgCgFgDgEQgDgEgFgDQgFgCgGABQgFgBgFACg");
	this.shape_11.setTransform(19.6,8.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#00726F").s().p("AgMAzIgKgDIgKgFIgHgHIgGgIIgEgJQgCgEAAgFIgBgKIABgJIACgJIAEgJIAGgIIAHgHIAKgEIAKgEQAGgBAGAAQAGAAAGABIALAEIAJAEIAIAHIAGAIIAEAJIADAJIABAJIgBAKIgDAJIgEAJIgGAIIgIAHIgJAFIgLADIgMABIgMgBgAgKgZQgFADgDAEQgEAEgBAFQgCAFAAAEQAAAGACAFQABAFAEADQADAFAFACQAFABAFAAQAFAAAGgBQAFgCADgFQADgDADgFQABgFAAgGQAAgEgBgFQgDgFgDgEQgDgEgFgDQgGgCgFABQgFgBgFACg");
	this.shape_12.setTransform(7.9,8.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,124,18.5);


(lib.Символ37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#981661").s().p("AgLBLIAAh/IgyAAIAAgXIB7AAIAAAXIgyAAIAAB/g");
	this.shape.setTransform(496,10.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#981661").s().p("AAIBNQgIgBgFgDIgNgHIgLgIIgIgLIgIgKQgDgJgEgRIgbAAIAABAIgZAAIAAiWIAZAAIAABBIAbAAQABgJAGgQIAIgMIAIgKIALgJQAGgEAHgCIANgEQAJgBAIgBQAKABAJABIAQAFIAOAIIAMAKIAIALIAGAOIAEAOIABAOIgBAOIgEAPQgCAHgEAGIgIAMIgMAKQgGAFgIADQgHADgJABQgJACgKABQgIAAgJgCgAAMg1IgLADQgIAEgHAIQgHAJgEAJQgDAKAAAKQAAAKADAKQAEALAHAHQAHAIAIAEIALAEIANABQAJAAAQgFQAJgEAIgIQAGgHAEgLQADgKAAgKQAAgKgDgKQgEgKgGgIQgIgIgJgEQgQgEgJAAg");
	this.shape_1.setTransform(478.7,10.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#981661").s().p("AAmBLIAAg2IggAAIgnA2IgdAAIAsg4QgIgDgHgEQgGgEgFgFQgFgEgCgHQgDgIAAgJQAAgGABgHQABgFADgFQAEgJAJgGQAIgGALgDQAKgDAKAAIA8AAIAACWgAgIgzQgHACgEAEQgFADgCAEQgDAGAAAHQAAAGADAGQACAFAFADQAEAEAHABQAGAAAFAAIAjAAIAAg0IgjAAQgFAAgGABg");
	this.shape_2.setTransform(458.1,10.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#981661").s().p("AAoBLIAAhcIAAgRIhRBtIgWAAIAAiWIAZAAIAABdIgBARIBQhuIAXAAIAACWg");
	this.shape_3.setTransform(442.9,10.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#981661").s().p("AhGBKIAAgWIAKABQAFAAAEgEQAEgCADgHQAEgHAGgXQAEgXAFg/IBgAAIAACWIgZAAIAAh/IgwAAQgGBBgHAYIgHARQgEAHgEAFQgFAGgGADQgHACgHAAQgHAAgIgCg");
	this.shape_4.setTransform(425.6,10.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#981661").s().p("Ag8BLIAAiWIA/AAQAMAAAJADQAKACAHAFQAGAFAEAHQAEAHAAAKQAAAHgCAFQgCAFgDAFIgIAHIgJAEIAKADQAGADAEAEQAFAEACAHQADAHAAAJQAAAGgCAFIgEAKQgFAHgJAFQgIAEgLADQgJACgKgBgAgjA2IAkAAIAMgBQAHgBAFgCQAFgDADgEQADgFAAgIQAAgGgDgFQgDgFgFgDIgKgDIgLAAIgnAAgAgjgMIAmAAIALgBIAIgDQAEgDACgEQACgEAAgGQAAgFgCgEQgDgEgDgDQgEgCgGgBIgMgBIgjAAg");
	this.shape_5.setTransform(411.2,10.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#00726F").s().p("Ag/BLIAAiWIBDAAQAMAAAKADQAKACAHAEQAHAGADAHQAFAHAAAKQAAAGgCAGQgCAFgDAEIgHAHIgKAFQAHACAFABQAGADADAFQAEAEACAHQACAGAAAHQAAAHgBAFQgBAFgDAFQgFAIgKAFQgIAEgLACQgLACgMAAgAgWAsIAZAAQAJAAAFgEQAGgDAAgJQAAgIgGgEQgFgEgJAAIgZAAgAgWgPIAWAAQAIAAAFgDQAEgFAAgGQAAgGgEgFQgFgDgIAAIgWAAg");
	this.shape_6.setTransform(391.7,10.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#00726F").s().p("AgSBNQgIgBgIgDIgOgIIgMgKIgJgMQgDgGgDgIIgEgOQgBgIAAgHQAAgHABgHIAEgPIAGgNIAJgMIAMgKQAGgEAIgDIAQgGQAJgBAJAAQAKAAAJABIAQAGQAIADAGAEQAHAEAFAGIAJAMIAGANIAEAPQABAHAAAHQAAAHgBAIIgEAOQgDAIgDAGIgJAMQgFAFgHAFIgOAIQgIADgIABQgJACgKAAQgJAAgJgCgAgQgmQgHADgFAGQgFAGgDAIQgDAHAAAIQAAAIADAJQADAHAFAFQAFAHAHACQAIAEAIAAQAJAAAIgEQAHgCAGgHQAFgFACgHQADgJAAgIQAAgIgDgHQgCgIgFgGQgGgGgHgDQgIgDgJAAQgIAAgIADg");
	this.shape_7.setTransform(375,10.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#00726F").s().p("AgSBLIAAhyIgsAAIAAgkIB8AAIAAAkIgrAAIAAByg");
	this.shape_8.setTransform(359.7,10.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#00726F").s().p("AAoBLIgJgXIg9AAIgJAXIgpAAIA8iWIApAAIA8CWgAATATIgQgqIgDgQQAAAJgCAHIgQAqIAlAAg");
	this.shape_9.setTransform(346.7,10.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#00726F").s().p("Ag+BLIAAiWIA8AAQANAAAMADQAMACAJAHIAIAGIAGAJQACAGABAGQACAGAAAHQAAAIgCAGQgBAHgCADIgGAJIgIAHQgJAFgMADQgMACgNABIgUAAIAAAvgAgWgFIAWAAQAJAAAFgDQAEgCABgEQACgEAAgFQAAgEgCgEQgBgEgEgBQgFgEgJAAIgWAAg");
	this.shape_10.setTransform(333.1,10.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#00726F").s().p("AAoBLIgJgXIg9AAIgJAXIgpAAIA8iWIApAAIA8CWgAATATIgQgqIgDgQQAAAJgCAHIgQAqIAlAAg");
	this.shape_11.setTransform(317.2,10.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#00726F").s().p("AAcBLIAAhyIg3AAIAAByIgoAAIAAiWICHAAIAACWg");
	this.shape_12.setTransform(300.8,10.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#00726F").s().p("Ag2BLIAAiWIBrAAIAAAjIhDAAIAAAYIA9AAIAAAgIg9AAIAAAYIBFAAIAAAjg");
	this.shape_13.setTransform(286.1,10.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#00726F").s().p("Ag+BLIAAiWIA8AAQANAAAMADQAMACAJAHIAIAGIAGAJQACAGABAGQACAGAAAHQAAAIgCAGQgBAHgCADIgGAJIgIAHQgJAFgMADQgMACgNABIgUAAIAAAvgAgWgFIAWAAQAJAAAFgDQAEgCABgEQACgEAAgFQAAgEgCgEQgBgEgEgBQgFgEgJAAIgWAAg");
	this.shape_14.setTransform(272.3,10.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#00726F").s().p("AAbBLIAAhyIg2AAIAAByIgoAAIAAiWICHAAIAACWg");
	this.shape_15.setTransform(256.3,10.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#00726F").s().p("AAvBLIAAiWIApAAIAACWgAhXBLIAAiWIAoAAIAAAwIAUAAQAPAAAMADQAKADAJAGIAIAHIAGAIQACADABAHQACAGAAAHQAAAIgCAGQgBAGgCAFIgGAJIgIAHQgJAGgKADQgMADgPgBgAgvAoIAWAAQALABAFgEQAEgCABgDQACgDAAgGQAAgFgCgDQgBgDgEgCQgFgEgLAAIgWAAg");
	this.shape_16.setTransform(233.2,10.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#00726F").s().p("AgKBKIgOgGQgHgDgFgEQgGgFgFgGQgFgGgDgHQgEgIgBgJQgCgJAAgKQAAgIACgJQABgKAEgHIAIgPIAKgLIANgJIAOgGQAKgCASgCQAMAAALACQALADAKAEIAAAmQgHgFgKgEQgJgDgLAAQgJAAgJADQgHACgGAGQgHAGgEAJQgEAIAAAKQAAALAEAIQAEAJAHAFQAGAFAHACQAIADAKAAQALAAALgEQAKgDAGgHIAAAnQgKAFgLACQgLADgMAAQgTgCgKgDg");
	this.shape_17.setTransform(215.8,10.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#00726F").s().p("AgKBKIgOgGQgHgDgFgEQgGgFgFgGQgFgGgDgHQgEgIgBgJQgCgJAAgKQAAgIACgJQABgKAEgHIAIgPIAKgLIANgJIAOgGQAKgCASgCQAMAAALACQALADAKAEIAAAmQgHgFgKgEQgJgDgLAAQgJAAgJADQgHACgGAGQgHAGgEAJQgEAIAAAKQAAALAEAIQAEAJAHAFQAGAFAHACQAIADAKAAQALAAALgEQAKgDAGgHIAAAnQgKAFgLACQgLADgMAAQgTgCgKgDg");
	this.shape_18.setTransform(201.5,10.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#00726F").s().p("AAoBLIgJgXIg9AAIgJAXIgpAAIA8iWIApAAIA8CWgAATATIgQgqIgDgQQAAAJgCAHIgQAqIAlAAg");
	this.shape_19.setTransform(187,10.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#00726F").s().p("AhIBJIAAgjQAFACAFgBQAEAAAFgDIAFgJQAEgIAEgUQADgXADg0IBrAAIAACWIgnAAIAAhyIgiAAQAAAcgCAPQgFAbgEAKQgDAJgEAGQgEAHgFAEQgGAFgGADQgHACgHAAQgKAAgJgDg");
	this.shape_20.setTransform(170,10.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#00726F").s().p("AAZBLIgjg6IgTAAIAAA6IgoAAIAAiWIAoAAIAAA6IATAAIAhg6IAtAAIgwBLIAyBLg");
	this.shape_21.setTransform(155.6,10.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#00726F").s().p("Ag2BLIAAiWIBrAAIAAAjIhDAAIAAAYIA9AAIAAAgIg9AAIAAAYIBFAAIAAAjg");
	this.shape_22.setTransform(136.2,10.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#00726F").s().p("AAvBLIAAiWIApAAIAACWgAhXBLIAAiWIAoAAIAAAwIAUAAQAPAAAMADQAKADAJAGIAIAHIAGAIQACADABAHQACAGAAAHQAAAIgCAGQgBAGgCAFIgGAJIgIAHQgJAGgKADQgMADgPgBgAgvAoIAWAAQALABAFgEQAEgCABgDQACgDAAgGQAAgFgCgDQgBgDgEgCQgFgEgLAAIgWAAg");
	this.shape_23.setTransform(119,10.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#00726F").s().p("AAbBLIAAg5Ig2AAIAAA5IgoAAIAAiWIAoAAIAAA7IA2AAIAAg7IApAAIAACWg");
	this.shape_24.setTransform(100.5,10.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#00726F").s().p("AAZBLIAAgzIgSAEIgPABQgNAAgKgDQgKgDgIgGQgHgHgEgKQgEgIAAgNIAAg2IAoAAIAAA0QAAAEACAEQACADADADQAIAEAJAAIAMgBIANgEIAAhBIAoAAIAACWg");
	this.shape_25.setTransform(84.2,10.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#00726F").s().p("AAbBLIAAg+IABgWIg5BUIgmAAIAAiWIAoAAIAAA+IgBAXIA6hVIAmAAIAACWg");
	this.shape_26.setTransform(68.6,10.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#00726F").s().p("AhJBJIAAgjQAGACAFgBQAEAAAFgDIAFgJQAEgIAEgUQAEgXACg0IBsAAIAACWIgpAAIAAhyIggAAQgBAcgCAPQgFAbgEAKQgDAJgEAGQgEAHgFAEQgFAFgHADQgHACgHAAQgKAAgKgDg");
	this.shape_27.setTransform(51.5,10.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#00726F").s().p("AgdBMQgPgCgQgFIAAgnQAMAGASAFQAMACANAAQAKAAAGgEQAEgBADgDQACgDAAgEQAAgIgGgCQgEgDgKAAIgiAAIAAghIAiABQAGAAAEgEQAEgCAAgGQAAgGgGgEQgGgDgLAAQgKgBgLADQgNADgOAHIAAgmQANgGAOgCQAMgCANAAQALAAAMACQALADAJAFQAIAGAEAIQAEAHAAALQAAAGgBAGQgCAFgDAEQgDADgFAEIgKAEQAHACAFACQAFAEAFAEQAEAFACAGQADAHAAAIQAAAHgCAFQgBAFgDAFQgGAIgJAGQgJAEgMACQgLADgKAAQgOAAgNgDg");
	this.shape_28.setTransform(37.2,10.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#00726F").s().p("AAoBLIgJgXIg9AAIgJAXIgpAAIA8iWIApAAIA8CWgAATATIgQgqIgDgQQAAAJgCAHIgQAqIAlAAg");
	this.shape_29.setTransform(22.1,10.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#00726F").s().p("Ag+BLIAAiWIA8AAQANAAAMADQAMACAJAHIAIAGIAGAJQACAGABAGQACAGAAAHQAAAIgCAGQgBAHgCADIgGAJIgIAHQgJAFgMADQgMACgNABIgUAAIAAAvgAgWgFIAWAAQAJAAAFgDQAEgCABgEQACgEAAgFQAAgEgCgEQgBgEgEgBQgFgEgJAAIgWAAg");
	this.shape_30.setTransform(8.6,10.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,503.5,23.3);


(lib.Символ36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#981661").s().p("AgNBLQgEgEgBgHQABgHAEgEQAEgDAHAAQAEAAAEADQAEAEAAAHQAAAHgEAEQgEADgEAAQgHAAgEgDgAgPAcQABgHAFgMQAEgGAIgIIAMgPQAGgJAAgHQAAgFgDgEQgCgDgDgCQgEgDgFgBIgLgBQgJAAgLAEQgJADgJAEIAAgWQAJgFAKgDQAMgDAMAAQAIAAAJACQAJACAHAFQAHAEAEAHQADAIAAAJQAAAGgBAFIgEAKQgFAHgJAKQgUATAAALg");
	this.shape.setTransform(449.8,10.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#981661").s().p("Ag2BKIAAgXQAIADAJABQAKgBAGgEQAHgEAEgIIADgHIg+hrIAcAAIAtBVIAnhVIAbAAIg4B0QgFAKgFAIQgEAGgGAFQgGAEgHACQgGACgIAAQgKAAgLgDg");
	this.shape_1.setTransform(437.4,10.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#981661").s().p("AA3BLIAAhoIgwBGIgNAAIgwhHIAABpIgZAAIAAiWIAXAAIA4BVIA5hVIAXAAIAACWg");
	this.shape_2.setTransform(420.4,10.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#981661").s().p("AgRBMQgJgBgHgDQgIgDgGgFQgHgEgFgGQgEgGgEgGQgEgGgDgHQgCgHgBgIIgBgOIABgOQABgHACgHQADgHAEgHIAIgLQAFgGAHgEQAGgFAIgDIAQgFQAJgBAIgBQAJABAKABIAQAFIANAIIALAKIAJALQAFAHABAHQADAHACAHIABAOIgBAOQgCAIgDAHQgBAHgFAGIgJAMIgLAKQgGAFgHADQgIADgIABQgKACgJABQgIgBgJgCgAgLg1IgMADQgJAEgIAIQgGAJgEAJQgDAKAAAKQAAAKADAKQAEALAGAHQAIAIAJAEIAMAEIALABQAJAAAPgFQAKgEAHgIQAGgHAEgLQADgKABgKQgBgKgDgKQgEgKgGgIQgHgIgKgEQgPgEgJAAg");
	this.shape_3.setTransform(401.7,10.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#981661").s().p("AAoBLIAAhBIhOAAIAABBIgaAAIAAiWIAaAAIAABBIBOAAIAAhBIAYAAIAACWg");
	this.shape_4.setTransform(384.5,10.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#981661").s().p("AgdBMQgOgCgOgGIAAgXQANAFAOADQAMACAPABIALgBIANgFQAFgDADgEQAEgFAAgHQAAgHgDgEQgDgFgFgCQgFgCgGgCIgLgBIghAAIAAgVIAfAAQAFABAFgCQAGgBAEgCQAEgEACgDQACgEAAgFQAAgGgCgEQgCgEgFgDQgFgCgGgBIgNgBQgMAAgLACQgLADgNAGIAAgZQAMgFAMgDQAMgCANAAQALABALACQALADAHAEQAIAGAEAIQAFAHAAALQAAAGgCAGQgCAFgDAEQgEAFgEADIgKAEIALADQAGADAEAEQAFAFACAHQADAGAAAJQAAAHgCAFQgBAFgDAEQgFAJgJAFQgIAEgMADQgKADgKAAQgOAAgNgDg");
	this.shape_5.setTransform(369.4,10.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#981661").s().p("AAzBLIgNggIhLAAIgNAgIgaAAIBAiWIAZAAIBACWgAAdAVIgbg/IgCgJIgBAJIgbA/IA5AAg");
	this.shape_6.setTransform(354.8,10.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#981661").s().p("Ag6BLIAAiWIA2AAQAMAAALADQANADAIAFQAFACADAEIAGAJQADAFABAGQABAGAAAIQAAAGgBAGQgBAGgDAGIgGAGIgIAHQgIAFgNADQgLACgMAAIgdAAIAAA0gAghABIAeAAIANgBQAHAAAFgDQAGgDADgFQADgGAAgHQAAgJgDgGQgDgEgFgEQgFgCgIgCIgNgBIgeAAg");
	this.shape_7.setTransform(341.6,10.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#981661").s().p("AgRBMQgJgBgHgDQgIgDgGgFQgHgEgFgGQgEgGgEgGQgEgGgDgHQgCgHgBgIIgBgOIABgOQABgHACgHQADgHAEgHIAIgLQAFgGAHgEQAGgFAIgDIAQgFQAJgBAIgBQAJABAKABIAQAFIANAIIALAKIAJALQAFAHABAHQADAHACAHIABAOIgBAOQgCAIgDAHQgBAHgFAGIgJAMIgLAKQgGAFgHADQgIADgIABQgKACgJABQgIgBgJgCgAgLg1IgMADQgKAEgHAIQgGAJgEAJQgDAKAAAKQAAAKADAKQAEALAGAHQAHAIAKAEIAMAEIALABQAJAAAPgFQAKgEAHgIQAGgHAEgLQADgKABgKQgBgKgDgKQgEgKgGgIQgHgIgKgEQgPgEgJAAg");
	this.shape_8.setTransform(319.8,10.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#981661").s().p("AAnBLIAAh/IhNAAIAAB/IgZAAIAAiWIB+AAIAACWg");
	this.shape_9.setTransform(302.7,10.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#981661").s().p("AA5BdIAAgjIhxAAIAAAjIgXAAIAAg5IASAAQAHgNAGgQQAEgNADgSQADgWACguIBgAAIAACAIATAAIAAA5gAgSgMIgHAZQgDANgGAKIBFAAIAAhpIguAAQgEAngDASg");
	this.shape_10.setTransform(280.7,11.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#981661").s().p("AAzBLIgNggIhLAAIgNAgIgaAAIBAiWIAZAAIBACWgAAdAVIgbg/IgCgJIgBAJIgbA/IA5AAg");
	this.shape_11.setTransform(264.3,10.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#981661").s().p("Ag6BLIAAiWIAZAAIAAA0IAdAAQAMABALACQANACAIAGIAIAGIAGAHQADAFABAGQABAGAAAIQAAAHgBAFQgBAHgDAEQgCAGgEADIgIAHQgIAFgNADQgLADgMgBgAghA1IAeAAQAHAAAGgBQAIgCAFgDQAFgDADgFQADgGAAgHQAAgJgDgFQgDgGgGgDQgFgCgHgBQgGAAgHAAIgeAAg");
	this.shape_12.setTransform(244.6,10.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#981661").s().p("AgLBLIAAh/IgyAAIAAgXIB7AAIAAAXIgyAAIAAB/g");
	this.shape_13.setTransform(230.2,10.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#981661").s().p("AgKBJIgNgGQgGgDgHgFIgKgLQgFgGgDgHQgEgIgBgIQgCgJAAgJQAAgIACgJQABgJAEgIIAIgOIAKgLIANgJIANgFIANgFIAPgBQALABALACQALADAKAEIAAAZQgIgGgKgDQgKgCgLAAQgMAAgJADQgKADgHAHQgLAKgDAIQgDAGgBAFIgCANQAAAGACAHQABAGADAFQADAHALAKQAIAGAJAEQAKADALABQAMgBALgCQAJgEAIgFIAAAYQgKAFgLACQgLADgMABQgSgCgKgEg");
	this.shape_14.setTransform(216.5,10.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#981661").s().p("AgRBMQgIgBgJgDQgHgDgGgFQgGgEgFgGQgGgGgDgGQgEgGgCgHQgDgHgBgIIgCgOIACgOQABgHADgHQACgHAEgHQADgFAGgGQAFgGAGgEQAGgFAHgDIARgFQAJgBAIgBQAJABAJABIARAFIAOAIIALAKIAJALQADAHADAHQADAHAAAHIABAOIgBAOQAAAIgDAHQgDAHgDAGIgJAMIgLAKQgHAFgHADQgIADgJABQgJACgJABQgIgBgJgCgAgLg1IgLADQgLAEgGAIQgHAJgDAJQgEAKAAAKQAAAKAEAKQADALAHAHQAGAIALAEIALAEIALABQAJAAAPgFQAKgEAHgIQAHgHADgLQAEgKgBgKQABgKgEgKQgDgKgHgIQgHgIgKgEQgPgEgJAAg");
	this.shape_15.setTransform(200.5,10.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#981661").s().p("AAnBLIAAhBIhOAAIAABBIgZAAIAAiWIAZAAIAABBIBOAAIAAhBIAaAAIAACWg");
	this.shape_16.setTransform(183.3,10.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#981661").s().p("Ag6BLIAAiWIAZAAIAAA0IAdAAQAMABALACQANACAIAGIAIAGIAGAHQADAFABAGQABAGAAAIQAAAHgBAFQgBAHgDAEQgCAGgEADIgIAHQgIAFgNADQgLADgMgBgAghA1IAeAAQAHAAAGgBQAIgCAFgDQAFgDADgFQADgGAAgHQAAgJgDgFQgDgGgGgDQgFgCgHgBQgGAAgHAAIgeAAg");
	this.shape_17.setTransform(168.4,10.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#981661").s().p("AhGBKIAAgWIAKABQAFAAAEgEQAEgCADgHQAEgHAGgXQAEgXAFg/IBgAAIAACWIgZAAIAAh/IgwAAQgGBBgHAYIgHARQgEAHgEAFQgFAGgGADQgHACgHAAQgHAAgIgCg");
	this.shape_18.setTransform(151.5,10.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#981661").s().p("Ag0BLIAAiWIBnAAIAAAXIhOAAIAAApIBIAAIAAAVIhIAAIAAArIBPAAIAAAWg");
	this.shape_19.setTransform(137.9,10.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#981661").s().p("Ag7BLIAAiWIBrAAIAAAXIhSAAIAAAlIAjAAQAMAAAKABQALADAHAFQAJAFAFAHQACAEABAHQACAFAAAHQAAAHgCAGQgBAFgCAGQgFAIgJAFQgHAGgLABQgKACgMAAgAgiA1IAkAAIAMgBQAGgBAEgCQAFgDADgFQACgFAAgHQAAgIgCgEQgDgFgFgCQgEgDgGgBIgMgBIgkAAg");
	this.shape_20.setTransform(124,10.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#981661").s().p("AAzBLIgNggIhLAAIgNAgIgaAAIBAiWIAZAAIBACWgAAdAVIgbg/IgCgJIgBAJIgbA/IA5AAg");
	this.shape_21.setTransform(108.3,10.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#981661").s().p("AAoBLIAAhcIAAgRIhQBtIgYAAIAAiWIAaAAIAABdIgBARIBQhuIAXAAIAACWg");
	this.shape_22.setTransform(92,10.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#981661").s().p("Ag6BLIAAiWIA2AAQAMAAALADQANADAIAFQAFACADAEIAGAJQADAFABAGQABAGAAAIQAAAGgBAGQgBAGgDAGIgGAGIgIAHQgIAFgNADQgLACgMAAIgdAAIAAA0gAghABIAeAAIANgBQAHAAAFgDQAGgDADgFQADgGAAgHQAAgJgDgGQgDgEgFgEQgFgCgIgCIgNgBIgeAAg");
	this.shape_23.setTransform(77.1,10.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#981661").s().p("AAzBLIgNggIhLAAIgNAgIgaAAIBAiWIAZAAIBACWgAAdAVIgbg/IgCgJIgBAJIgbA/IA5AAg");
	this.shape_24.setTransform(61.4,10.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#981661").s().p("Ag8BLIAAiWIA/AAQAMAAAJADQAKACAHAFQAGAFAEAHQAEAHAAAKQAAAHgCAFQgCAFgDAFIgIAHIgJAEIAKADQAGADAEAEQAFAEACAHQADAHAAAJQAAAGgCAFIgEAKQgFAHgJAFQgIAEgLADQgJACgKgBgAgjA2IAkAAIAMgBQAHgBAFgCQAFgDADgEQADgFAAgIQAAgGgDgFQgDgFgFgDIgKgDIgLAAIgnAAgAgjgMIAmAAIALgBIAIgDQAEgDACgEQACgEAAgGQAAgFgCgEQgDgEgDgDQgEgCgGgBIgMgBIgjAAg");
	this.shape_25.setTransform(46.4,10.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#981661").s().p("AAzBLIgNggIhLAAIgNAgIgaAAIBAiWIAZAAIBACWgAAdAVIgbg/IgCgJIgBAJIgbA/IA5AAg");
	this.shape_26.setTransform(25.4,10.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#981661").s().p("AAnBLIAAhBIhOAAIAABBIgZAAIAAiWIAZAAIAABBIBOAAIAAhBIAaAAIAACWg");
	this.shape_27.setTransform(9.2,10.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,456,23.3);


(lib.Символ35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#981661").s().p("AgVBJQgCgCgCgEQgCgFAAgFQAAgFACgFQACgDACgDQAHgFAJAAQAHAAAHAFQADADABADQADAFAAAFQAAAFgDAFQgBAEgDACQgGAGgIAAQgJAAgHgGgAgXAXQAAgJAGgJQADgFAHgHIAJgNQAFgFAAgFQAAgHgGgDQgCgDgKAAQgJAAgKADQgJADgHAEIAAgjQAJgEAKgDQALgDAMAAQAJAAAIACQAKACAIAFQAHAEAFAHQAEAIAAAKQAAAGgCAFIgDAKQgFAHgIAJQgTARAAAJg");
	this.shape.setTransform(606.5,10.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#981661").s().p("Ag+BLIAAiWIAoAAIAAAwIAUAAQANAAAMADQAMADAJAGIAIAHIAGAIQACADABAHQACAGAAAHQAAAIgCAGQgBAGgCAFIgGAJIgIAHQgJAGgMADQgMADgNgBgAgWAoIAWAAQAJABAFgEQAEgCABgDQACgDAAgGQAAgFgCgDQgBgDgEgCQgFgEgJAAIgWAAg");
	this.shape_1.setTransform(594.7,10.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#981661").s().p("AgKBKIgOgGQgHgDgFgEQgGgFgFgGQgFgGgDgHQgEgIgBgJQgCgJAAgKQAAgIACgJQABgKAEgHIAIgPIAKgLIANgJIAOgGQAKgCASgCQAMAAALACQALADAKAEIAAAmQgHgFgKgEQgJgDgLAAQgJAAgJADQgHACgGAGQgHAGgEAJQgEAIAAAKQAAALAEAIQAEAJAHAFQAGAFAHACQAIADAKAAQALAAALgEQAKgDAGgHIAAAnQgKAFgLACQgLADgMAAQgTgCgKgDg");
	this.shape_2.setTransform(579.8,10.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#981661").s().p("Ag2BLIAAiWIBrAAIAAAjIhDAAIAAAYIA9AAIAAAgIg9AAIAAAYIBFAAIAAAjg");
	this.shape_3.setTransform(566.3,10.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#981661").s().p("AAsBLIAAhPIghAxIgVAAIghgxIAABPIgoAAIAAiWIAmAAIAtBHIAuhHIAmAAIAACWg");
	this.shape_4.setTransform(549.5,10.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#981661").s().p("AgKBKIgOgGQgHgDgFgEQgGgFgFgGQgFgGgDgHQgEgIgBgJQgCgJAAgKQAAgIACgJQABgKAEgHIAIgPIAKgLIANgJIAOgGQAKgCASgCQAMAAALACQALADAKAEIAAAmQgHgFgKgEQgJgDgLAAQgJAAgJADQgHACgGAGQgHAGgEAJQgEAIAAAKQAAALAEAIQAEAJAHAFQAGAFAHACQAIADAKAAQALAAALgEQAKgDAGgHIAAAnQgKAFgLACQgLADgMAAQgTgCgKgDg");
	this.shape_5.setTransform(532.4,10.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#981661").s().p("AAcBLIAAgxIgPAAIgiAxIguAAIAqg3QgIgCgFgEQgGgEgEgGQgFgEgCgGQgCgHAAgKQAAgGABgGQABgHADgFIAGgJIAIgGQAIgHALgDQALgDALAAIBAAAIAACWgAgKgjQgGAEABAIQgBAKAGAEQAFAEAJAAIAYAAIAAgjIgYAAQgJAAgFAFg");
	this.shape_6.setTransform(512.6,10.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#981661").s().p("AAoBLIgJgXIg9AAIgJAXIgpAAIA8iWIApAAIA8CWgAATATIgQgqIgDgQQAAAJgCAHIgQAqIAlAAg");
	this.shape_7.setTransform(497.4,10.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#981661").s().p("AAZBLIgjg6IgTAAIAAA6IgoAAIAAiWIAoAAIAAA6IATAAIAhg6IAtAAIgwBLIAyBLg");
	this.shape_8.setTransform(482.4,10.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#981661").s().p("AgKBKIgOgGQgHgDgFgEQgGgFgFgGQgFgGgDgHQgEgIgBgJQgCgJAAgKQAAgIACgJQABgKAEgHIAIgPIAKgLIANgJIAOgGQAKgCASgCQAMAAALACQALADAKAEIAAAmQgHgFgKgEQgJgDgLAAQgJAAgJADQgHACgGAGQgHAGgEAJQgEAIAAAKQAAALAEAIQAEAJAHAFQAGAFAHACQAIADAKAAQALAAALgEQAKgDAGgHIAAAnQgKAFgLACQgLADgMAAQgTgCgKgDg");
	this.shape_9.setTransform(466.8,10.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#981661").s().p("Ag2BLIAAiWIBsAAIAAAjIhEAAIAAAYIA9AAIAAAgIg9AAIAAAYIBFAAIAAAjg");
	this.shape_10.setTransform(453.3,10.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#981661").s().p("AAZBLIAAgzIgSAEIgPABQgNAAgKgDQgKgDgIgGQgHgHgEgKQgEgIAAgNIAAg2IAoAAIAAA0QAAAEACAEQACADADADQAIAEAJAAIAMgBIANgEIAAhBIAoAAIAACWg");
	this.shape_11.setTransform(438.3,10.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#981661").s().p("AAbBLIAAg+IABgWIg5BUIgmAAIAAiWIAoAAIAAA+IgBAXIA6hVIAmAAIAACWg");
	this.shape_12.setTransform(422.8,10.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#981661").s().p("AAsBLIAAhPIghAxIgVAAIghgxIAABPIgoAAIAAiWIAmAAIAtBHIAuhHIAmAAIAACWg");
	this.shape_13.setTransform(404.6,10.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#981661").s().p("Ag2BLIAAiWIBrAAIAAAjIhDAAIAAAYIA9AAIAAAgIg9AAIAAAYIBFAAIAAAjg");
	this.shape_14.setTransform(388.3,10.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#981661").s().p("AArBbIAAgfIh4AAIAAiWIAoAAIAAByIA3AAIAAhyIAoAAIAAByIAUAAIAABDg");
	this.shape_15.setTransform(372.9,11.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#981661").s().p("AAoBLIgJgXIg9AAIgJAXIgpAAIA8iWIApAAIA8CWgAATATIgQgqIgDgQQAAAJgCAHIgQAqIAlAAg");
	this.shape_16.setTransform(355.5,10.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#981661").s().p("Ag+BLIAAiWIA8AAQANAAAMADQAMACAJAHIAIAGIAGAJQACAGABAGQACAGAAAHQAAAIgCAGQgBAHgCADIgGAJIgIAHQgJAFgMADQgMACgNABIgUAAIAAAvgAgWgFIAWAAQAJAAAFgDQAEgCABgEQACgEAAgFQAAgEgCgEQgBgEgEgBQgFgEgJAAIgWAAg");
	this.shape_17.setTransform(342,10.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#981661").s().p("AAbBLIAAg+IABgWIg5BUIgmAAIAAiWIAoAAIAAA+IgBAXIA6hVIAmAAIAACWg");
	this.shape_18.setTransform(321.4,10.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#981661").s().p("AhIBJIAAgjQAEACAGgBQAFAAADgDIAHgJQADgIAEgUQADgXADg0IBrAAIAACWIgnAAIAAhyIgiAAQAAAcgCAPQgFAbgEAKQgDAJgEAGQgEAHgFAEQgFAFgHADQgGACgJAAQgJAAgJgDg");
	this.shape_19.setTransform(304.3,10.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#981661").s().p("AAcBLIAAg+IABgWIg6BUIgmAAIAAiWIAoAAIAAA+IgBAXIA6hVIAmAAIAACWg");
	this.shape_20.setTransform(288.5,10.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#981661").s().p("AAbBLIAAg5Ig2AAIAAA5IgoAAIAAiWIAoAAIAAA7IA2AAIAAg7IApAAIAACWg");
	this.shape_21.setTransform(267.4,10.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#981661").s().p("AAbBLIAAg+IABgWIg5BUIgmAAIAAiWIAoAAIAAA+IgBAXIA6hVIAmAAIAACWg");
	this.shape_22.setTransform(250.9,10.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#981661").s().p("AAbBLIAAhyIg2AAIAAByIgoAAIAAiWICHAAIAACWg");
	this.shape_23.setTransform(234.3,10.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#981661").s().p("AAcBLIAAg+IABgWIg6BUIgmAAIAAiWIAoAAIAAA+IgBAXIA6hVIAmAAIAACWg");
	this.shape_24.setTransform(217.8,10.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#981661").s().p("AAyBbIAAgfIhiAAIAAAfIgjAAIAAhCIARAAQAHgNAFgMQAFgOADgQQADgUABgoIBrAAIAABzIATAAIAABCgAgKgLIgGASIgHASIAwAAIAAhQIgeAAQgDAegCAOg");
	this.shape_25.setTransform(200.4,11.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#981661").s().p("AgSBNQgIgBgIgDIgOgIIgMgKIgJgMQgDgGgDgIIgEgOQgBgIAAgHQAAgHABgHIAEgPIAGgNIAJgMIAMgKQAGgEAIgDIAQgGQAJgBAJAAQAKAAAJABIAQAGQAIADAGAEQAHAEAFAGIAJAMIAGANIAEAPQABAHAAAHQAAAHgBAIIgEAOQgDAIgDAGIgJAMQgFAFgHAFIgOAIQgIADgIABQgJACgKAAQgJAAgJgCgAgQgmQgHADgFAGQgFAGgDAIQgDAHAAAIQAAAIADAJQADAHAFAFQAFAHAHACQAIAEAIAAQAJAAAIgEQAHgCAGgHQAFgFACgHQADgJAAgIQAAgIgDgHQgCgIgFgGQgGgGgHgDQgIgDgJAAQgIAAgIADg");
	this.shape_26.setTransform(182.6,10.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#981661").s().p("AhIBJIAAgjQAFACAFgBQAFAAAEgDIAFgJQAEgIAEgUQADgXADg0IBrAAIAACWIgnAAIAAhyIghAAQgBAcgCAPQgFAbgEAKQgDAJgEAGQgEAHgFAEQgGAFgGADQgHACgHAAQgKAAgJgDg");
	this.shape_27.setTransform(165,10.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#981661").s().p("AAsBLIAAhPIghAxIgVAAIghgxIAABPIgoAAIAAiWIAmAAIAtBHIAuhHIAmAAIAACWg");
	this.shape_28.setTransform(147.6,10.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#981661").s().p("AAoBLIgJgXIg9AAIgJAXIgpAAIA8iWIApAAIA8CWgAATATIgQgqIgDgQQAAAJgCAHIgQAqIAlAAg");
	this.shape_29.setTransform(129.5,10.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#981661").s().p("AAHAZIAAgyIAhAAIgHAygAgnAZIAAgyIAhAAIgHAyg");
	this.shape_30.setTransform(112.1,5.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#981661").s().p("AAcBiIAAg+IABgYIg6BWIgmAAIAAiWIAoAAIAAA8IgBAaIA6hWIAmAAIAACWgAgTg/QgIgCgHgFIAAgcQAHAGAKABQAIACAJAAQAJAAAJgCQAJgBAIgGIAAAcQgHAFgIACQgJADgLAAQgKAAgJgDg");
	this.shape_31.setTransform(98.7,7.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#981661").s().p("AAvBLIAAiWIApAAIAACWgAhXBLIAAiWIAoAAIAAAwIAUAAQAPAAAMADQAKADAJAGIAIAHIAGAIQACADABAHQACAGAAAHQAAAIgCAGQgBAGgCAFIgGAJIgIAHQgJAGgKADQgMADgPgBgAgvAoIAWAAQALABAFgEQAEgCABgDQACgDAAgGQAAgFgCgDQgBgDgEgCQgFgEgLAAIgWAAg");
	this.shape_32.setTransform(80.2,10.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#981661").s().p("AgSBLIAAhyIgrAAIAAgkIB8AAIAAAkIgsAAIAAByg");
	this.shape_33.setTransform(63.4,10.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#981661").s().p("AgKBKIgOgGQgHgDgFgEQgGgFgFgGQgFgGgDgHQgEgIgBgJQgCgJAAgKQAAgIACgJQABgKAEgHIAIgPIAKgLIANgJIAOgGQAKgCASgCQAMAAALACQALADAKAEIAAAmQgHgFgKgEQgJgDgLAAQgJAAgJADQgHACgGAGQgHAGgEAJQgEAIAAAKQAAALAEAIQAEAJAHAFQAGAFAHACQAIADAKAAQALAAALgEQAKgDAGgHIAAAnQgKAFgLACQgLADgMAAQgTgCgKgDg");
	this.shape_34.setTransform(49.6,10.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#981661").s().p("AAcBLIAAg+IABgWIg6BUIgmAAIAAiWIAoAAIAAA+IgBAXIA6hVIAmAAIAACWg");
	this.shape_35.setTransform(34.3,10.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#981661").s().p("AAZBLIAAgzIgTAEIgPABQgMAAgKgDQgKgDgHgGQgIgHgEgKQgEgIAAgNIAAg2IApAAIAAA0QAAAEACAEQABADADADQAIAEAJAAIAMgBIANgEIAAhBIAoAAIAACWg");
	this.shape_36.setTransform(18,10.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#981661").s().p("AAHAZIAAgyIAhAAIgHAygAgnAZIAAgyIAhAAIgHAyg");
	this.shape_37.setTransform(5.9,5.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,617.2,23.3);


(lib.Символ34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#981661").s().p("AAhBaIAAhKIABgbIhFBlIgtAAIAAizIAwAAIAABKIgBAcIBEhmIAuAAIAACzg");
	this.shape.setTransform(480.4,12);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#981661").s().p("AgWBaIAAiJIgzAAIAAgqICTAAIAAAqIgyAAIAACJg");
	this.shape_1.setTransform(462.7,12);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#981661").s().p("AAvBaIgKgdIhJAAIgKAdIgxAAIBHizIAxAAIBHCzgAAXAXIgTgzQgDgIgBgKQAAAKgDAIIgTAzIAtAAg");
	this.shape_2.setTransform(447.3,12);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#981661").s().p("AhKBaIAAizIBIAAQAPAAAOADQAPADAKAIIAKAIIAHALQADAFABAIQACAHAAAJQAAAJgCAIQgBAHgDAEIgHALIgKAIQgKAHgPADQgOADgPAAIgYAAIAAA5gAgagGIAaAAQALAAAGgEQAEgDACgEQADgEAAgGQAAgGgDgEQgCgEgEgCQgGgEgLAAIgaAAg");
	this.shape_3.setTransform(431.2,12);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#981661").s().p("AAvBaIgKgdIhJAAIgKAdIgxAAIBHizIAxAAIBHCzgAAXAXIgTgzQgDgIgBgKQAAAKgDAIIgTAzIAtAAg");
	this.shape_4.setTransform(412.3,12);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#981661").s().p("AAhBaIAAiJIhBAAIAACJIgwAAIAAizIChAAIAACzg");
	this.shape_5.setTransform(392.8,12);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#981661").s().p("AgVBcQgKgCgKgEQgJgEgHgFIgOgMQgGgGgFgIQgEgHgDgJQgDgIgCgJQgBgJAAgJQAAgIABgJQACgJADgJQADgIAEgIQAFgHAGgHQAGgGAIgFQAHgGAJgDQAKgEAKgCQALgCAKAAQAMAAAKACQALACAJAEQAJADAIAGQAHAFAGAGQAGAHAFAHQAEAIADAIQADAJACAJQABAJAAAIQAAAJgBAJQgCAJgDAIQgDAJgEAHQgFAIgGAGQgGAHgHAFQgIAFgJAEQgJAEgLACQgKACgMAAQgKAAgLgCgAgTgtQgJADgGAHQgGAHgDAJQgDAJAAAKQAAAKADAJQADAKAGAGQAGAHAJAEQAJAEAKAAQALAAAJgEQAJgEAGgHQAGgGADgKQADgJAAgKQAAgKgDgJQgDgJgGgHQgGgHgJgDQgJgEgLAAQgKAAgJAEg");
	this.shape_6.setTransform(367,12);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#981661").s().p("AAeBaIgphGIgXAAIAABGIgwAAIAAizIAwAAIAABFIAXAAIAmhFIA1AAIg4BYIA7Bbg");
	this.shape_7.setTransform(349.3,12);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#981661").s().p("AAhBaIAAhFIhBAAIAABFIgwAAIAAizIAwAAIAABFIBBAAIAAhFIAwAAIAACzg");
	this.shape_8.setTransform(329.4,12);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#981661").s().p("AAvBaIgKgdIhJAAIgKAdIgxAAIBHizIAxAAIBHCzgAAXAXIgTgzQgDgIgBgKQAAAKgDAIIgTAzIAtAAg");
	this.shape_9.setTransform(309.9,12);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#981661").s().p("AhKBaIAAizIBIAAQAPAAAOADQAPADAKAIIAKAIIAHALQADAFABAIQACAHAAAJQAAAJgCAIQgBAHgDAEIgHALIgKAIQgKAHgPADQgOADgPAAIgYAAIAAA5gAgagGIAaAAQALAAAGgEQAEgDACgEQADgEAAgGQAAgGgDgEQgCgEgEgCQgGgEgLAAIgaAAg");
	this.shape_10.setTransform(293.8,12);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#981661").s().p("AgVBkIAAgWQgZgDgLgEIgPgHQgHgEgFgFQgGgFgFgGQgEgGgDgHQgDgHgCgIQgBgIAAgIQAAgIABgHQACgIADgHQADgHAEgHQAFgGAGgFQAFgFAHgEIAPgGQALgEAZgDIAAgWIAsAAIAAAWQANABAWAGIAPAHQAHAEAGAFIAKALQAEAGADAHQADAHACAIQABAIAAAHQAAAIgBAIQgCAIgDAHQgDAHgEAGIgKALQgGAFgHAEIgPAHQgWAGgNABIAAAWgAAXAnQALgBAIgFQAHgDAFgGQAEgFACgHQABgGAAgGQAAgGgBgFQgCgHgEgFQgFgGgHgEQgIgEgLgBgAgoghQgIAEgFAFQgEAFgCAHQgCAGAAAGQAAAGACAGQACAHAEAFQAFAGAIAEQAIAEALABIAAhNQgLABgIAEg");
	this.shape_11.setTransform(273.2,12);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#981661").s().p("AAhBaIAAhFIhBAAIAABFIgwAAIAAizIAwAAIAABFIBBAAIAAhFIAwAAIAACzg");
	this.shape_12.setTransform(251.9,12);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#981661").s().p("AAvBaIgKgdIhJAAIgKAdIgxAAIBHizIAxAAIBHCzgAAXAXIgTgzQgDgIgBgKQAAAKgDAIIgTAzIAtAAg");
	this.shape_13.setTransform(232.4,12);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#981661").s().p("ABNBaIgmhGIgQAAIAABGIgtAAIAAhGIgQAAIgmBGIg1AAIA0hbIgyhYIA2AAIAjBFIAQAAIAAhFIAtAAIAABFIAQAAIAjhFIA1AAIgxBYIA0Bbg");
	this.shape_14.setTransform(209.6,12);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#981661").s().p("AA7BtIAAgmIh1AAIAAAmIgpAAIAAhPIAUAAQAJgPAGgQQAFgQADgSQAEgYACgxIB/AAIAACKIAXAAIAABPgAgNgNIgGAWQgEALgFAKIA5AAIAAhfIgjAAQgEAjgDARg");
	this.shape_15.setTransform(185.7,13.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#981661").s().p("AhKBaIAAizIBIAAQAPAAAOADQAPADAKAIIAKAIIAHALQADAFABAIQACAHAAAJQAAAJgCAIQgBAHgDAEIgHALIgKAIQgKAHgPADQgOADgPAAIgYAAIAAA5gAgagGIAaAAQALAAAGgEQAEgDACgEQADgEAAgGQAAgGgDgEQgCgEgEgCQgGgEgLAAIgaAAg");
	this.shape_16.setTransform(161.6,12);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#981661").s().p("AgVBcQgKgCgKgEQgJgEgHgFIgOgMQgGgGgFgIQgEgHgDgJQgDgIgCgJQgBgJAAgJQAAgIABgJQACgJADgJQADgIAEgIQAFgHAGgHQAGgGAIgFQAHgGAJgDQAKgEAKgCQALgCAKAAQAMAAAKACQALACAJAEQAJADAIAGQAHAFAGAGQAGAHAFAHQAEAIADAIQADAJACAJQABAJAAAIQAAAJgBAJQgCAJgDAIQgDAJgEAHQgFAIgGAGQgGAHgHAFQgIAFgJAEQgJAEgLACQgKACgMAAQgKAAgLgCgAgTgtQgJADgGAHQgGAHgDAJQgDAJAAAKQAAAKADAJQADAKAGAGQAGAHAJAEQAJAEAKAAQALAAAJgEQAJgEAGgHQAGgGADgKQADgJAAgKQAAgKgDgJQgDgJgGgHQgGgHgJgDQgJgEgLAAQgKAAgJAEg");
	this.shape_17.setTransform(141.9,12);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#981661").s().p("AgMBYQgJgCgIgEQgIgEgHgGQgHgGgFgHQgGgHgEgJQgEgIgCgLQgCgKAAgMQAAgLACgLQACgLAEgJQAEgJAGgIQAFgHAHgGQAHgGAIgEQAIgFAJgCQALgEAWgCQAOAAAOADQANADAMAFIAAAuQgIgHgMgEQgMgEgMAAQgLAAgKADQgJADgIAHQgIAHgFAKQgEALAAAMQAAANAEAKQAFAJAIAGQAIAGAIADQAKADALAAQAOAAAMgFQANgEAHgHIAAAuQgMAGgNADQgNADgPAAQgWgCgMgEg");
	this.shape_18.setTransform(123,12);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#981661").s().p("AgMBYQgJgCgIgEQgIgEgHgGQgHgGgFgHQgGgHgEgJQgEgIgCgLQgCgKAAgMQAAgLACgLQACgLAEgJQAEgJAGgIQAFgHAHgGQAHgGAIgEQAIgFAJgCQALgEAWgCQAOAAAOADQANADAMAFIAAAuQgIgHgMgEQgMgEgMAAQgLAAgKADQgJADgIAHQgIAHgFAKQgEALAAAMQAAANAEAKQAFAJAIAGQAIAGAIADQAKADALAAQAOAAAMgFQANgEAHgHIAAAuQgMAGgNADQgNADgPAAQgWgCgMgEg");
	this.shape_19.setTransform(106.1,12);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#981661").s().p("AhABaIAAizIB/AAIAAAqIhQAAIAAAbIBJAAIAAAnIhJAAIAAAeIBSAAIAAApg");
	this.shape_20.setTransform(90,12);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#981661").s().p("AgVBkIAAgWQgZgDgLgEIgPgHQgHgEgFgFQgGgFgFgGQgEgGgDgHQgDgHgCgIQgBgIAAgIQAAgIABgHQACgIADgHQADgHAEgHQAFgGAGgFQAFgFAHgEIAPgGQALgEAZgDIAAgWIAsAAIAAAWQANABAWAGIAPAHQAHAEAGAFIAKALQAEAGADAHQADAHACAIQABAIAAAHQAAAIgBAIQgCAIgDAHQgDAHgEAGIgKALQgGAFgHAEIgPAHQgWAGgNABIAAAWgAAXAnQALgBAIgFQAHgDAFgGQAEgFACgHQABgGAAgGQAAgGgBgFQgCgHgEgFQgFgGgHgEQgIgEgLgBgAgoghQgIAEgFAFQgEAFgCAHQgCAGAAAGQAAAGACAGQACAHAEAFQAFAGAIAEQAIAEALABIAAhNQgLABgIAEg");
	this.shape_21.setTransform(70.3,12);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#981661").s().p("AgVBcQgKgCgKgEQgJgEgHgFIgOgMQgGgGgFgIQgEgHgDgJQgDgIgCgJQgBgJAAgJQAAgIABgJQACgJADgJQADgIAEgIQAFgHAGgHQAGgGAIgFQAHgGAJgDQAKgEAKgCQALgCAKAAQAMAAAKACQALACAJAEQAJADAIAGQAHAFAGAGQAGAHAFAHQAEAIADAIQADAJACAJQABAJAAAIQAAAJgBAJQgCAJgDAIQgDAJgEAHQgFAIgGAGQgGAHgHAFQgIAFgJAEQgJAEgLACQgKACgMAAQgKAAgLgCgAgTgtQgJADgGAHQgGAHgDAJQgDAJAAAKQAAAKADAJQADAKAGAGQAGAHAJAEQAJAEAKAAQALAAAJgEQAJgEAGgHQAGgGADgKQADgJAAgKQAAgKgDgJQgDgJgGgHQgGgHgJgDQgJgEgLAAQgKAAgJAEg");
	this.shape_22.setTransform(48.4,12);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#981661").s().p("AhKBaIAAizIBIAAQAPAAAOADQAPADAKAIIAKAIIAHALQADAFABAIQACAHAAAJQAAAJgCAIQgBAHgDAEIgHALIgKAIQgKAHgPADQgOADgPAAIgYAAIAAA5gAgagGIAaAAQALAAAGgEQAEgDACgEQADgEAAgGQAAgGgDgEQgCgEgEgCQgGgEgLAAIgaAAg");
	this.shape_23.setTransform(29.8,12);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#981661").s().p("AAhBaIAAiJIhBAAIAACJIgwAAIAAizIChAAIAACzg");
	this.shape_24.setTransform(10.8,12);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,491.2,27.7);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#14716E").s().p("AAPAfIAAgVIgOAAIgNAVIgQAAIARgXIgGgCIgEgFIgDgDIgBgHQAAgEACgEQABgDADgEIAIgEQAEgBAGAAIAeAAIAAA8gAgIgQQgDADAAAEQAAAFADADQAEABAEAAIAPAAIAAgSIgPAAQgEAAgEACg");
	this.shape.setTransform(486.6,20.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#14716E").s().p("AAPAfIAAgnIgfAnIgMAAIAAg8IAOAAIAAAmIAfgmIAMAAIAAA8g");
	this.shape_1.setTransform(479.5,20.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#14716E").s().p("AggAeIAAgLIAFABQADAAADgFQACgDACgHQACgHACgcIAuAAIAAA8IgPAAIAAgxIgSAAIgCAUQgBAKgDAGQgEAIgDADIgEACIgGABIgJgBg");
	this.shape_2.setTransform(471.5,20.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#14716E").s().p("AgSAfQgEgBgDgDIgFgFQgBgEgBgFQABgGACgEQACgDAEgBQAEgCAFgCIAKgBIAOACIAAgCIgBgFIgDgFQgCgCgDAAIgFgBQgHAAgFABIgKADIAAgMIAKgDIANgBQAFAAAFACQAFABAEADQAEAEACAFQACAFAAAHIAAAUQAAABAAAAQAAABAAAAQABABAAAAQAAAAABAAIADABIADAAIAAAKQgDACgFAAQgEAAgDgDQgEgBgCgEQgEAEgGACQgEACgHAAIgIgBgAgNAFIgDADQgBABAAAEQAAAEADACQAEADAEAAQAGgBACgCQAFgCADgDIAAgKIgLgCQgHAAgFADg");
	this.shape_3.setTransform(464.6,20.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#14716E").s().p("AgFAfIAAgxIgWAAIAAgLIA3AAIAAALIgWAAIAAAxg");
	this.shape_4.setTransform(457.8,20.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#14716E").s().p("AAXAtIAAg3IAAgJIguBAIgOAAIAAhZIAOAAIAAA2IAAAKIAwhAIANAAIAABZg");
	this.shape_5.setTransform(449.8,19.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#14716E").s().p("AgJAQIAHgfIAMAAIgKAfg");
	this.shape_6.setTransform(440,24.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#14716E").s().p("AgSAfQgEgBgDgDIgFgFQgBgEgBgFQABgGACgEQACgDAEgBQAEgCAFgCIAKgBIAOACIAAgCIgBgFIgDgFQgCgCgDAAIgFgBQgHAAgFABIgKADIAAgMIAKgDIANgBQAFAAAFACQAFABAEADQAEAEACAFQACAFAAAHIAAAUQAAABAAAAQAAABAAAAQABABAAAAQAAAAABAAIADABIADAAIAAAKQgDACgFAAQgEAAgDgDQgEgBgCgEQgEAEgGACQgEACgHAAIgIgBgAgNAFIgDADQgBABAAAEQAAAEADACQAEADAEAAQAGgBACgCQAFgCADgDIAAgKIgLgCQgHAAgFADg");
	this.shape_7.setTransform(435.3,20.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#14716E").s().p("AAOAfIgTgaIgKAAIAAAaIgOAAIAAg8IAOAAIAAAYIAKAAIAQgYIAQAAIgWAdIAZAfg");
	this.shape_8.setTransform(428.6,20.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#14716E").s().p("AAOAfIgTgaIgKAAIAAAaIgOAAIAAg8IAOAAIAAAYIAKAAIAQgYIAQAAIgWAdIAZAfg");
	this.shape_9.setTransform(421.7,20.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#14716E").s().p("AgLAeQgGgCgFgEQgFgFgCgFIgDgHIAAgHQAAgEADgIQACgHAFgEQAFgEAGgCQAGgCAFAAQAGAAAGACQAGACAFAEQAFAEACAHQADAIAAAEIgBAHIgCAHQgCAFgFAFQgFAEgGACQgGACgGAAQgFAAgGgCgAgHgRIgGAEQgCACgCAEQgCAEABADQgBAEACAEQACADACADIAGAEQAEABADAAQADAAAEgBQAEgCADgCQACgDABgDQACgEAAgEQAAgDgCgEQgBgEgCgCQgDgCgEgCQgEgCgDABQgDgBgEACg");
	this.shape_10.setTransform(414,20.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#14716E").s().p("AAOAfIgTgaIgKAAIAAAaIgOAAIAAg8IAOAAIAAAYIAKAAIAQgYIAQAAIgWAdIAZAfg");
	this.shape_11.setTransform(407.1,20.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#14716E").s().p("AAPAfIAAgnIgfAnIgMAAIAAg8IAOAAIAAAmIAfgmIAMAAIAAA8g");
	this.shape_12.setTransform(399.4,20.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#14716E").s().p("AgiAtIAAhZIA+AAIAAAOIgwAAIAAAVIAVAAQAHAAAFACQAHABAEADQAGADACADIADAHIAAAHIAAAIIgDAGQgCAFgGADQgEADgHACIgMABgAgUAfIAVAAIAHAAIAGgCQADgCACgCQABgDAAgFQAAgEgBgDQgCgDgDgCIgGgCIgHAAIgVAAg");
	this.shape_13.setTransform(391.6,19.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#14716E").s().p("AgWAGIAAgLIAtAAIAAALg");
	this.shape_14.setTransform(383.9,20.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#14716E").s().p("AAPAfIAAgZIgdAAIAAAZIgOAAIAAg8IAOAAIAAAYIAdAAIAAgYIAOAAIAAA8g");
	this.shape_15.setTransform(377,20.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#14716E").s().p("AgSAfQgEgBgDgDIgFgFQgBgEgBgFQABgGACgEQACgDAEgBQAEgCAFgCIAKgBIAOACIAAgCIgBgFIgDgFQgCgCgDAAIgFgBQgHAAgFABIgKADIAAgMIAKgDIANgBQAFAAAFACQAGABADADQAEAEACAFQACAFAAAHIAAAUQAAABAAAAQAAABAAAAQABABAAAAQAAAAABAAIADABIADAAIAAAKQgDACgFAAQgEAAgDgDQgEgBgCgEQgEAEgGACQgEACgHAAIgIgBgAgNAFIgDADQgBABAAAEQgBAEAEACQAEADAEAAQAFgBADgCQAEgCAEgDIAAgKIgLgCQgHAAgFADg");
	this.shape_16.setTransform(369.7,20.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#14716E").s().p("AggAeIAAgLIAFABQADAAADgFQACgDACgHQACgHACgcIAuAAIAAA8IgPAAIAAgxIgSAAIgCAUQgBAKgDAGQgEAIgDADIgEACIgGABIgJgBg");
	this.shape_17.setTransform(361.8,20.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#14716E").s().p("AAPAfIAAgnIgfAnIgMAAIAAg8IAOAAIAAAmIAfgmIAMAAIAAA8g");
	this.shape_18.setTransform(354.5,20.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#14716E").s().p("AAgAtIAAg+IgcApIgHAAIgdgpIAAA+IgOAAIAAhZIANAAIAhAyIAigyIANAAIAABZg");
	this.shape_19.setTransform(344.9,19.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#14716E").s().p("AgGAfIAAgxIgVAAIAAgLIA3AAIAAALIgVAAIAAAxg");
	this.shape_20.setTransform(332.9,20.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#14716E").s().p("AgIAeQgGgCgFgEQgFgEgDgGIgCgHIAAgHQAAgEACgJQADgGAFgFIAKgFIAJgCIAIABIAHACIAGAEIAEAFQAEAGABAGQABAHgCAFIgtAAIADAHIAGAEIAHADIAGABQAGAAAFgBIAJgDIAAAMQgEACgGABIgMABQgGAAgGgCgAgEgSIgGACIgEAGIgCAHIAhAAIgBgGIgCgFQgCgCgDgCQgEgCgEABIgFABg");
	this.shape_21.setTransform(326.4,20.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#14716E").s().p("AgFAfIAAgxIgWAAIAAgLIA3AAIAAALIgWAAIAAAxg");
	this.shape_22.setTransform(319.8,20.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#14716E").s().p("AAPAfIAAgnIgfAnIgMAAIAAg8IAOAAIAAAmIAfgmIAMAAIAAA8g");
	this.shape_23.setTransform(312.9,20.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#14716E").s().p("AgFAeQgFgCgFgDQgFgFgDgFIgCgHIAAgIIAAgGIACgHQACgEAGgHIALgFQAEgCAHAAIAKABQAEABAFACIAAANQgDgCgFgCIgJgBIgIABIgGAEQgDACgBAEQgDAEAAAEQAAAEACAEQACAEADADQADADACAAIAIACIAKgCQAFAAAEgDIAAANIgKADIgLABQgGAAgFgCg");
	this.shape_24.setTransform(305.9,20.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#14716E").s().p("AggAtIAAhYIANAAIAAAJQAEgEAFgDIAHgDIAFgBQAHABAGACQAGACAEAFQADAFADAFQACAHAAAGQAAAHgCAFQgDAEgDAFQgEAEgGADQgGADgHgBIgFAAIgGgCQgFgDgEgEIAAAkgAgFggIgFAEQgFADgDAGIAAAOQADAFAFACIAFAEIAFABQAEgBADgBIAHgEIADgEQACgFAAgEQAAgEgCgEIgDgHIgHgEQgDgCgEAAIgFABg");
	this.shape_25.setTransform(298.9,22.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#14716E").s().p("AgIAeQgGgCgFgEQgFgEgDgGIgCgHIAAgHQAAgEACgJQADgGAFgFIAKgFIAJgCIAIABIAHACIAGAEIAEAFQAEAGABAGQABAHgCAFIgtAAIADAHIAGAEIAHADIAGABQAGAAAFgBIAJgDIAAAMQgEACgGABIgMABQgGAAgGgCgAgEgSIgGACIgEAGIgCAHIAhAAQAAgDgBgDIgCgFQgCgCgDgCQgEgCgEABIgFABg");
	this.shape_26.setTransform(291.2,20.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#14716E").s().p("AgbAfIAAg8IAiAAIAIABIAGADIAEAGIABAGQAAAFgCAEQgDADgDABQAEABADADQADAEAAAGIgBAGQgCADgCACQgCADgEABQgEACgFAAgAgNAUIARAAQAFAAACgCQADgCAAgEQAAgEgDgCQgDgCgEAAIgRAAgAgNgDIAQAAQAFgBABgCQADgBAAgEQAAgEgDgDQgCgBgEAAIgQAAg");
	this.shape_27.setTransform(284.3,20.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#14716E").s().p("AAPAfIAAgnIgfAnIgMAAIAAg8IAOAAIAAAmIAfgmIAMAAIAAA8g");
	this.shape_28.setTransform(276.8,20.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#14716E").s().p("AAPAfIAAgZIgdAAIAAAZIgOAAIAAg8IAOAAIAAAYIAdAAIAAgYIAOAAIAAA8g");
	this.shape_29.setTransform(269.2,20.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#14716E").s().p("AggAsIAAgNQAFACAGAAQAGgBADgCQAEgCADgGIACgDIglhAIAQAAIAaAzIAXgzIAQAAIghBFQgCAFgEAFQgCAFgDACQgEACgEABIgIABQgGAAgHgBg");
	this.shape_30.setTransform(262.1,19.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#14716E").s().p("AAPAfIAAgZIgdAAIAAAZIgOAAIAAg8IAOAAIAAAYIAdAAIAAgYIAOAAIAAA8g");
	this.shape_31.setTransform(251,20.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#14716E").s().p("AAPAfIAAgnIgfAnIgMAAIAAg8IAOAAIAAAmIAfgmIAMAAIAAA8g");
	this.shape_32.setTransform(243.4,20.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#14716E").s().p("AggAeIAAgLIAFABQADAAADgFQACgDACgHQACgHACgcIAuAAIAAA8IgPAAIAAgxIgSAAIgCAUQgCAKgCAGQgEAIgDADIgEACIgGABIgJgBg");
	this.shape_33.setTransform(235.5,20.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#14716E").s().p("AAPAfIAAgxIgdAAIAAAxIgOAAIAAg8IA5AAIAAA8g");
	this.shape_34.setTransform(228.2,20.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#14716E").s().p("AAPAfIAAgnIgfAnIgMAAIAAg8IAOAAIAAAmIAfgmIAMAAIAAA8g");
	this.shape_35.setTransform(220.6,20.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#14716E").s().p("AAUAnIAAgRIg0AAIAAg8IAOAAIAAAwIAcAAIAAgwIAOAAIAAAwIAJAAIAAAdg");
	this.shape_36.setTransform(213,21.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#14716E").s().p("AgFAeQgFgCgFgDQgFgFgDgFIgCgHIgBgIIABgGIACgHQACgEAGgHIALgFQAEgCAHAAIAKABQAFABAEACIAAANQgEgCgFgCIgIgBIgJABIgFAEQgDACgBAEQgCAEAAAEQAAAEABAEQACAEADADQADADACAAIAIACIAKgCQAFAAADgDIAAANIgJADIgLABQgGAAgFgCg");
	this.shape_37.setTransform(205.7,20.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#14716E").s().p("AAPAfIAAgnIgfAnIgMAAIAAg8IAOAAIAAAmIAfgmIAMAAIAAA8g");
	this.shape_38.setTransform(198.7,20.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#14716E").s().p("AAYAnIAAgRIgvAAIAAARIgOAAIAAgcIAJAAIAFgLIADgJQACgJAAgUIAvAAIAAAxIAJAAIAAAcgAgIgFIgFAQIAbAAIAAglIgTAAIgDAVg");
	this.shape_39.setTransform(190.7,21.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#14716E").s().p("AAQAfIgQgXIgPAXIgPAAIAXgfIgWgdIAQAAIANAUIAPgUIAPAAIgXAdIAZAfg");
	this.shape_40.setTransform(180.2,20.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#14716E").s().p("AAPAfIAAgnIgfAnIgMAAIAAg8IAOAAIAAAmIAfgmIAMAAIAAA8g");
	this.shape_41.setTransform(173.1,20.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#14716E").s().p("AAOAfIgTgaIgKAAIAAAaIgOAAIAAg8IAOAAIAAAYIAKAAIAQgYIAQAAIgWAdIAZAfg");
	this.shape_42.setTransform(166.3,20.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#14716E").s().p("AgFAeQgFgCgFgDQgFgFgDgFIgCgHIAAgIIAAgGIACgHQACgEAGgHIALgFQAEgCAHAAIAKABQAEABAFACIAAANQgDgCgFgCIgJgBIgIABIgGAEQgDACgBAEQgCAEgBAEQAAAEACAEQACAEADADQADADACAAIAIACIAKgCQAFAAAEgDIAAANIgKADIgLABQgGAAgFgCg");
	this.shape_43.setTransform(159.2,20.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#14716E").s().p("AAPAfIAAgZIgdAAIAAAZIgOAAIAAg8IAOAAIAAAYIAdAAIAAgYIAOAAIAAA8g");
	this.shape_44.setTransform(152.2,20.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#14716E").s().p("AAPAfIAAgnIgfAnIgMAAIAAg8IAOAAIAAAmIAfgmIAMAAIAAA8g");
	this.shape_45.setTransform(144.6,20.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#14716E").s().p("AAUAnIAAgRIg0AAIAAg8IAOAAIAAAwIAcAAIAAgwIAOAAIAAAwIAJAAIAAAdg");
	this.shape_46.setTransform(137.1,21.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#14716E").s().p("AAPAfIAAgnIgfAnIgMAAIAAg8IAOAAIAAAmIAfgmIAMAAIAAA8g");
	this.shape_47.setTransform(129.1,20.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#14716E").s().p("AAYAnIAAgRIgvAAIAAARIgOAAIAAgcIAJAAIAFgLIADgJQACgJAAgUIAvAAIAAAxIAJAAIAAAcgAgHgFIgGAQIAbAAIAAglIgTAAIgCAVg");
	this.shape_48.setTransform(121.1,21.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#14716E").s().p("AgIAeQgGgCgFgEQgFgEgDgGIgCgHIAAgHQAAgEACgJQADgGAFgFIAKgFIAJgCIAIABIAHACIAGAEIAEAFQAEAGABAGQABAHgCAFIgtAAIADAHIAGAEIAHADIAGABQAGAAAFgBIAJgDIAAAMQgEACgGABIgMABQgGAAgGgCgAgEgSIgGACIgEAGIgCAHIAhAAIgBgGIgCgFQgCgCgDgCQgEgCgEABIgFABg");
	this.shape_49.setTransform(113.5,20.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#14716E").s().p("AAVAfIAAgoIgRAZIgHAAIgRgZIAAAoIgOAAIAAg8IAOAAIAUAeIAVgeIAOAAIAAA8g");
	this.shape_50.setTransform(105.6,20.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#14716E").s().p("AgIAeQgGgCgFgEQgFgEgDgGIgCgHIAAgHQAAgEACgJQADgGAFgFIAKgFIAJgCIAIABIAHACIAGAEIAEAFQAEAGABAGQABAHgCAFIgtAAIADAHIAGAEIAHADIAGABQAGAAAFgBIAJgDIAAAMQgEACgGABIgMABQgGAAgGgCgAgEgSIgGACIgEAGIgCAHIAhAAIgBgGIgCgFQgCgCgDgCQgEgCgEABIgFABg");
	this.shape_51.setTransform(94.7,20.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#14716E").s().p("AAPAfIAAgnIgfAnIgMAAIAAg8IAOAAIAAAmIAfgmIAMAAIAAA8g");
	this.shape_52.setTransform(87.3,20.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#14716E").s().p("AAPAfIAAgZIgdAAIAAAZIgOAAIAAg8IAOAAIAAAYIAdAAIAAgYIAOAAIAAA8g");
	this.shape_53.setTransform(79.7,20.8);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#14716E").s().p("AgIAeQgGgCgFgEQgFgEgDgGIgCgHIAAgHQAAgEACgJQADgGAFgFIAKgFIAJgCIAIABIAHACIAGAEIAEAFQAEAGABAGQABAHgCAFIgtAAIADAHIAGAEIAHADIAGABQAGAAAFgBIAJgDIAAAMQgEACgGABIgMABQgGAAgGgCgAgEgSIgGACIgEAGIgCAHIAhAAIgBgGIgCgFQgCgCgDgCQgEgCgEABIgFABg");
	this.shape_54.setTransform(72.5,20.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#14716E").s().p("AggAeIAAgLIAFABQADAAADgFQACgDACgHQACgHACgcIAuAAIAAA8IgPAAIAAgxIgSAAIgCAUQgBAKgDAGQgEAIgDADIgEACIgGABIgJgBg");
	this.shape_55.setTransform(64.7,20.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#14716E").s().p("AgIAeQgGgCgFgEQgFgEgDgGIgCgHIAAgHQAAgEACgJQADgGAFgFIAKgFIAJgCIAIABIAHACIAGAEIAEAFQAEAGABAGQABAHgCAFIgtAAIADAHIAGAEIAHADIAGABQAGAAAFgBIAJgDIAAAMQgEACgGABIgMABQgGAAgGgCgAgEgSIgGACIgEAGIgCAHIAhAAIgBgGIgCgFQgCgCgDgCQgEgCgEABIgFABg");
	this.shape_56.setTransform(57.8,20.8);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#14716E").s().p("AAYAnIAAgRIgvAAIAAARIgOAAIAAgcIAJAAIAFgLIADgJQACgJAAgUIAvAAIAAAxIAJAAIAAAcgAgHgFIgGAQIAbAAIAAglIgTAAIgCAVg");
	this.shape_57.setTransform(50,21.6);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#14716E").s().p("AgPAfIgKgEIAAgMQAEADAGABIAMACQAFAAAFgCQAAAAABgBQAAAAABAAQAAAAABgBQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAAAgBgBIgCgCIgIgBIgMAAIAAgJIAMAAQAEAAADgCQAEgBgBgEQAAgEgDgCQgFgCgEAAIgMABIgKAEIAAgMIALgEQAGgBAHAAQAEAAAFABQAFACAEACIAFAGQABADABAEQAAAGgEADQgDAEgEAAQAFAAADAEIADAEIABAGQgBAEgBADQgCAEgEACQgDADgGABIgKABIgOgBg");
	this.shape_58.setTransform(42.8,20.8);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#14716E").s().p("AgSAfQgEgBgDgDIgFgFQgBgEAAgFQAAgGACgEQACgDAFgBQADgCAGgCIAJgBIAOACIAAgCIgBgFIgDgFQgCgCgDAAIgFgBQgGAAgHABIgKADIAAgMIAKgDIAPgBQAEAAAFACQAFABAEADQAEAEACAFQACAFAAAHIAAAUQAAABAAAAQAAABAAAAQABABAAAAQAAAAAAAAIADABIAFAAIAAAKQgEACgFAAQgFAAgDgDQgDgBgBgEQgGAEgFACQgEACgHAAIgIgBgAgMAFIgEADQgBABgBAEQABAEADACQAEADAEAAQAFgBADgCQAEgCAEgDIAAgKIgLgCQgHAAgEADg");
	this.shape_59.setTransform(36.2,20.8);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#14716E").s().p("AggAtIAAhYIAMAAIAAAJQAEgEAGgDIAHgDIAGgBQAGABAGACQAGACADAFQAEAFADAFQACAHAAAGQAAAHgCAFQgDAEgEAFQgDAEgGADQgGADgGgBIgGAAIgHgCQgEgDgEgEIAAAkgAgFggIgGAEQgEADgDAGIAAAOQADAFAEACIAGAEIAFABQAEgBADgBIAHgEIADgEQACgFAAgEQAAgEgCgEIgDgHIgHgEQgDgCgEAAIgFABg");
	this.shape_60.setTransform(28.7,22.2);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#14716E").s().p("AAZAnIAAgRIgxAAIAAARIgMAAIAAgcIAIAAIAFgLIADgJQABgJABgUIAuAAIAAAxIAJAAIAAAcgAgHgFIgHAQIAdAAIAAglIgUAAIgCAVg");
	this.shape_61.setTransform(20.3,21.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#14716E").s().p("AgLAeQgHgCgEgEQgFgFgCgFIgCgHIgBgHQAAgEADgIQACgHAFgEQAEgEAHgCQAGgCAFAAQAGAAAGACQAGACAFAEQAEAEADAHQADAIAAAEIgBAHIgCAHQgDAFgEAFQgFAEgGACQgGACgGAAQgFAAgGgCgAgHgRIgGAEQgCACgCAEQgBAEgBADQABAEABAEQACADACADIAGAEQAEABADAAQAEAAADgBQAEgCADgCQACgDABgDQACgEAAgEQAAgDgCgEQgBgEgCgCQgDgCgEgCQgDgCgEABQgDgBgEACg");
	this.shape_62.setTransform(12.4,20.8);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#14716E").s().p("AAPAfIAAgxIgdAAIAAAxIgOAAIAAg8IA5AAIAAA8g");
	this.shape_63.setTransform(4.7,20.8);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#14716E").s().p("AgJAPIAHgdIAMAAIgKAdg");
	this.shape_64.setTransform(554.1,11.3);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#14716E").s().p("AAaAeIAAg8IAOAAIAAA8gAgnAeIAAg8IAOAAIAAAVIARAAQAGAAADACQAEACADACIAFAEQACAEAAAFIgCAIIgFAHQgDACgEACQgDACgGgBgAgZATIAOAAQAHAAADgCQACgCAAgFQAAgFgCgDQgDgCgHAAIgOAAg");
	this.shape_65.setTransform(547.9,7.9);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#14716E").s().p("AAPAeIAAgZIgdAAIAAAZIgOAAIAAg8IAOAAIAAAZIAdAAIAAgZIAOAAIAAA8g");
	this.shape_66.setTransform(539.3,7.9);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#14716E").s().p("AAPAeIAAgmIgfAmIgMAAIAAg8IAOAAIAAAnIAfgnIAMAAIAAA8g");
	this.shape_67.setTransform(531.7,7.9);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#14716E").s().p("AAUAnIAAgRIg0AAIAAg8IAOAAIAAAwIAcAAIAAgwIAOAAIAAAwIAJAAIAAAdg");
	this.shape_68.setTransform(524.1,8.7);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#14716E").s().p("AAPAeIAAgmIgfAmIgMAAIAAg8IAOAAIAAAnIAfgnIAMAAIAAA8g");
	this.shape_69.setTransform(516.1,7.9);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#14716E").s().p("AAYAnIAAgRIgvAAIAAARIgOAAIAAgcIAJAAIAFgLIADgJQACgJAAgUIAvAAIAAAxIAJAAIAAAcgAgHgFIgGAQIAbAAIAAglIgTAAIgCAVg");
	this.shape_70.setTransform(508.1,8.7);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#14716E").s().p("AgIAeQgGgCgFgEQgFgEgDgGIgCgHIAAgHQAAgEACgJQADgGAFgEIAKgHIAJgBIAIAAIAHADIAGAEIAEAFQAEAFABAHQABAHgCAEIgtAAIADAIIAGAFIAHACIAGABQAGABAFgCIAJgDIAAAMQgEACgGABIgMABQgGAAgGgCgAgEgSIgGADIgEAEIgCAHIAhAAIgBgEIgCgGQgCgDgDgBQgEgCgEAAIgFACg");
	this.shape_71.setTransform(500.6,7.9);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#14716E").s().p("AAVAeIAAgnIgRAZIgHAAIgRgZIAAAnIgOAAIAAg8IAOAAIAUAfIAVgfIAOAAIAAA8g");
	this.shape_72.setTransform(492.6,7.9);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#14716E").s().p("AAPArIAAgpIgfApIgMAAIAAg8IAOAAIAAAmIAfgmIAMAAIAAA8gAgIgbQgFgBgEgDIAAgLQAEADAFABIAIABIAJgBQAFgBAEgDIAAALQgEADgFABQgEABgFABQgEgBgEgBg");
	this.shape_73.setTransform(481.4,6.7);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#14716E").s().p("AgLAeQgGgCgFgEQgFgEgDgHIgCgGIAAgHQAAgEACgJQADgFAFgFQAFgEAGgCQAGgCAFAAQAGAAAGACQAGACAEAEQAGAFACAFQADAJAAAEIgBAHIgCAGQgCAHgGAEQgEAEgGACQgGACgGAAQgFAAgGgCgAgHgRIgGAEQgCADgCAEQgBADAAADQAAAEABAEQACAEACACIAGAEQAEABADAAQADAAAEgBQAEgCACgCQADgCACgEQABgEAAgEQAAgDgBgDQgCgEgDgDQgCgDgEgBQgEgBgDAAQgDAAgEABg");
	this.shape_74.setTransform(473.8,7.9);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#14716E").s().p("AgGAeIAAgvIgVAAIAAgNIA3AAIAAANIgVAAIAAAvg");
	this.shape_75.setTransform(466.9,7.9);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#14716E").s().p("AgEAeQgHgCgEgDQgFgFgDgGIgCgGIgBgIIABgGIADgHQABgEAGgGIALgHQAEgBAGAAIAKABQAGABADADIAAAMQgCgCgGgBIgJgCIgIABIgEAEQgEADgCADQgBAEAAAEQgBAEACAFQACAEADACQADACACACIAIABIAKgBQAEgCAEgCIAAANIgJADIgLABQgGAAgEgCg");
	this.shape_76.setTransform(460.7,7.9);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#14716E").s().p("AAPAeIAAgmIgfAmIgMAAIAAg8IAOAAIAAAnIAfgnIAMAAIAAA8g");
	this.shape_77.setTransform(453.7,7.9);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#14716E").s().p("AAYAnIAAgRIgvAAIAAARIgOAAIAAgcIAJAAIAFgLIADgJQACgJAAgUIAvAAIAAAxIAJAAIAAAcgAgHgFIgHAQIAcAAIAAglIgTAAIgCAVg");
	this.shape_78.setTransform(445.7,8.7);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#14716E").s().p("AgaAsIAAgMIAGABQAFABAEgEQAEgDACgIIACgDIgeg9IAPAAIATAtIASgtIAPAAIgdBFIgFAKIgFAHIgGADIgHACIgIgCg");
	this.shape_79.setTransform(438.5,9.4);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#14716E").s().p("AgFAeQgFgCgFgDQgFgFgDgGIgCgGIAAgIIAAgGIACgHQACgEAGgGIALgHQAEgBAHAAIAKABQAEABAFADIAAAMQgEgCgEgBIgJgCIgIABIgGAEQgDADgBADQgDAEAAAEQAAAEACAFQACAEADACQADACACACIAIABIAKgBQAEgCAFgCIAAANIgKADIgMABQgFAAgFgCg");
	this.shape_80.setTransform(431.8,7.9);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#14716E").s().p("AgLAeQgGgCgFgEQgFgEgCgHIgDgGIAAgHQAAgEADgJQACgFAFgFQAFgEAGgCQAGgCAFAAQAGAAAGACQAGACAFAEQAFAFACAFQADAJAAAEIgBAHIgCAGQgCAHgFAEQgFAEgGACQgGACgGAAQgFAAgGgCgAgHgRIgGAEQgCADgCAEQgCADABADQgBAEACAEQACAEACACIAGAEQAEABADAAQADAAAEgBQAEgCADgCQACgCACgEQABgEAAgEQAAgDgBgDQgCgEgCgDQgDgDgEgBQgEgBgDAAQgDAAgEABg");
	this.shape_81.setTransform(424.8,7.9);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#14716E").s().p("AgFAeQgFgCgFgDQgFgFgDgGIgCgGIAAgIIAAgGIADgHQABgEAGgGIALgHQAEgBAGAAIALABQAEABAFADIAAAMQgEgCgEgBIgJgCIgIABIgGAEQgDADgCADQgCAEAAAEQABAEABAFQACAEADACQADACACACIAIABIAKgBQAFgCAEgCIAAANIgKADIgMABQgFAAgFgCg");
	this.shape_82.setTransform(417.8,7.9);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#14716E").s().p("AgWAGIAAgLIAtAAIAAALg");
	this.shape_83.setTransform(411.5,7.8);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#14716E").s().p("AgLAeQgGgCgFgEQgFgEgCgHIgDgGIAAgHQAAgEADgJQACgFAFgFQAFgEAGgCQAGgCAFAAQAGAAAGACQAGACAFAEQAFAFACAFQADAJAAAEIgBAHIgCAGQgCAHgFAEQgFAEgGACQgGACgGAAQgFAAgGgCgAgHgRIgGAEQgCADgCAEQgCADABADQgBAEACAEQACAEACACIAGAEQAEABADAAQADAAAEgBQAEgCADgCQACgCACgEQABgEAAgEQAAgDgBgDQgCgEgCgDQgDgDgEgBQgEgBgDAAQgDAAgEABg");
	this.shape_84.setTransform(404.6,7.9);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#14716E").s().p("AAPAeIAAgZIgdAAIAAAZIgOAAIAAg8IAOAAIAAAZIAdAAIAAgZIAOAAIAAA8g");
	this.shape_85.setTransform(396.9,7.9);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#14716E").s().p("AANAeIAAgUQgKADgFAAQgGAAgEgCIgIgDIgEgHQgCgDAAgGIAAgWIANAAIAAAVIABAFIAEAEQADABAFAAQAHAAAGgBIAAgeIAOAAIAAA8g");
	this.shape_86.setTransform(389.5,7.9);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#14716E").s().p("AgIAeQgGgCgFgEQgFgEgDgGIgCgHIAAgHQAAgEACgJQADgGAFgEIAKgHIAJgBIAIAAIAHADIAGAEIAEAFQAEAFABAHQABAHgCAEIgtAAIADAIIAGAFIAHACIAGABQAGABAFgCIAJgDIAAAMQgEACgGABIgMABQgGAAgGgCgAgEgSIgGADIgEAEIgCAHIAhAAIgBgEIgCgGQgCgDgDgBQgEgCgEAAIgFACg");
	this.shape_87.setTransform(382.8,7.9);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#14716E").s().p("AAYAnIAAgRIgvAAIAAARIgOAAIAAgcIAJAAIAFgLIADgJQACgJAAgUIAvAAIAAAxIAJAAIAAAcgAgHgFIgHAQIAcAAIAAglIgTAAIgCAVg");
	this.shape_88.setTransform(375,8.7);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#14716E").s().p("AggAuIAAhZIANAAIAAAKQAEgFAFgDIAGgDIAGAAQAHAAAGACQAGADAEAEQAEAFACAGQACAFAAAHQAAAGgCAGQgCAEgEAFQgEAFgGACQgGACgHABIgFgBIgGgCQgGgDgDgEIAAAlgAgFggIgFADQgGAEgCAFIAAAPQACAFAGACIAFADIAFACQAEAAAEgCIAFgEIAFgFQABgEAAgEQAAgFgBgEIgFgGIgFgEQgEgBgEgBIgFABg");
	this.shape_89.setTransform(367.1,9.3);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#14716E").s().p("AgIAeQgGgCgFgEQgFgEgDgGIgCgHIAAgHQAAgEACgJQADgGAFgEIAKgHIAJgBIAIAAIAHADIAGAEIAEAFQAEAFABAHQABAHgCAEIgtAAIADAIIAGAFIAHACIAGABQAGABAFgCIAJgDIAAAMQgEACgGABIgMABQgGAAgGgCgAgEgSIgGADIgEAEIgCAHIAhAAIgBgEIgCgGQgCgDgDgBQgEgCgEAAIgFACg");
	this.shape_90.setTransform(359.4,7.9);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#14716E").s().p("AgEAeQgHgCgEgDQgFgFgDgGIgCgGIgBgIIABgGIADgHQABgEAGgGIALgHQAEgBAGAAIAKABQAGABADADIAAAMQgCgCgGgBIgJgCIgIABIgEAEQgEADgCADQgBAEAAAEQgBAEACAFQACAEADACQADACACACIAIABIAKgBQAEgCAEgCIAAANIgJADIgLABQgGAAgEgCg");
	this.shape_91.setTransform(352.7,7.9);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#14716E").s().p("AgEAGQgDgDAAgDQAAgDADgCQACgCACAAQADAAADACQACACAAADQAAADgCADQgDACgDAAQgCAAgCgCg");
	this.shape_92.setTransform(344.9,10.3);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#14716E").s().p("AgFA7IAAgbQgIAAgGgDQgHgCgFgEQgFgEgCgGIgCgGIgBgHQAAgEADgIQACgGAFgEQAFgEAHgDQAGgCAIAAIAAgbIALAAIAAAbQAIAAAHACQAGADAFAEQAFAEADAGQACAIAAAEIAAAHIgCAGQgDAGgFAEQgFAEgGACQgHADgIAAIAAAbgAAGAUIAKgBQAEgCADgDQADgCABgEQACgEAAgEQAAgDgCgDQgBgEgDgDQgDgDgEgBIgKgDgAgOgRQgEABgDADQgDADgCAEQgBADAAADQAAAEABAEQACAEADACQADADAEACIAJABIAAgoIgJADg");
	this.shape_93.setTransform(338.7,7.9);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#14716E").s().p("AgLAeQgGgCgFgEQgFgEgCgHIgCgGIgBgHQAAgEADgJQACgFAFgFQAFgEAGgCQAGgCAFAAQAGAAAGACQAGACAFAEQAEAFADAFQADAJAAAEIgBAHIgCAGQgDAHgEAEQgFAEgGACQgGACgGAAQgFAAgGgCgAgHgRIgGAEQgCADgCAEQgBADgBADQABAEABAEQACAEACACIAGAEQAEABADAAQADAAAEgBQAEgCADgCQACgCABgEQACgEAAgEQAAgDgCgDQgBgEgCgDQgDgDgEgBQgEgBgDAAQgDAAgEABg");
	this.shape_94.setTransform(330.2,7.9);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#14716E").s().p("AggAuIAAhZIAMAAIAAAKQAFgFAFgDIAGgDIAGAAQAHAAAGACQAFADAFAEQAEAFACAGQACAFAAAHQAAAGgCAGQgCAEgEAFQgFAFgFACQgGACgHABIgFgBIgGgCQgGgDgDgEIAAAlgAgFggIgGADQgFAEgCAFIAAAPQACAFAFACIAGADIAFACQAEAAAEgCIAFgEIAFgFQABgEAAgEQAAgFgBgEIgFgGIgFgEQgEgBgEgBIgFABg");
	this.shape_95.setTransform(322.5,9.3);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#14716E").s().p("AAPAeIAAgvIgdAAIAAAvIgOAAIAAg8IA5AAIAAA8g");
	this.shape_96.setTransform(314.5,7.9);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#14716E").s().p("AgKAPIAIgdIANAAIgLAdg");
	this.shape_97.setTransform(305.9,11.3);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#14716E").s().p("AgRAtQgIgBgIgDIAAgPQAHAEAJACIAPABIAHgBIAHgCQADgCACgCQACgDAAgFQAAgEgCgCIgEgFIgHgCIgGAAIgTAAIAAgMIASAAIAGAAIAFgDIAEgEIABgFQAAgDgBgDQgBgCgDgCIgHgCIgGgBIgOACQgHABgIAEIAAgPIAPgEIAPgBQAFAAAHABQAGACAFADQAEADADAEQACAFAAAGIgBAHIgDAGIgEAEIgGADIAGABIAGAEIAEAHQACAEAAAFIgBAHIgCAGQgDAFgGADQgFADgGABIgLABIgRgBg");
	this.shape_98.setTransform(300.6,6.5);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#14716E").s().p("AgFAsIgIgEIgHgFQgEgDgDgEIgEgHIgEgKIgBgLIABgJIAEgKIAEgIIAHgHIAHgFIAIgDIAHgDIAJAAIAMABQAHACAGADIAAAOQgEgDgHgCQgFgCgHAAQgHAAgGACQgFACgFAEQgFAHgDAEIgCAHIAAAGIAAAIIACAHQADAEAFAGQAFAEAFACQAGACAHAAQAHAAAGgCQAGgCAEgDIAAAOQgFADgHACIgNABQgLAAgFgCg");
	this.shape_99.setTransform(292.4,6.5);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#14716E").s().p("AgFAsIgIgEIgIgFQgDgDgCgEIgGgHIgCgKIgBgLIABgJIACgKIAGgIIAFgHIAIgFIAIgDIAGgDIAJAAIAOABQAGACAGADIAAAOQgFgDgFgCQgHgCgGAAQgHAAgGACQgEACgFAEQgHAHgBAEIgCAHIgCAGIACAIIACAHQABAEAHAGQAFAEAEACQAGACAHAAQAHAAAGgCQAHgCADgDIAAAOQgFADgGACIgPABQgKAAgFgCg");
	this.shape_100.setTransform(283.9,6.5);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#14716E").s().p("AAaAeIAAg8IAOAAIAAA8gAgnAeIAAg8IAOAAIAAAVIARAAQAGAAADACQAEACADACIAFAEQACAEAAAFIgCAIIgFAHQgDACgEACQgDACgGgBgAgZATIAOAAQAHAAADgCQACgCAAgFQAAgFgCgDQgDgCgHAAIgOAAg");
	this.shape_101.setTransform(271.7,7.9);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#14716E").s().p("AgfAeIAAgMIADACQAEgBADgEQADgDABgHQACgHACgcIAtAAIAAA8IgOAAIAAgxIgSAAIgCATQgCALgCAFQgEAJgDACIgFADIgFABIgIgBg");
	this.shape_102.setTransform(262.7,8);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#14716E").s().p("AgLAeQgHgCgEgEQgFgEgCgHIgCgGIgBgHQAAgEADgJQACgFAFgFQAEgEAHgCQAGgCAFAAQAGAAAGACQAGACAFAEQAEAFADAFQADAJAAAEIgBAHIgCAGQgDAHgEAEQgFAEgGACQgGACgGAAQgFAAgGgCgAgHgRIgGAEQgCADgCAEQgBADAAADQAAAEABAEQACAEACACIAGAEQAEABADAAQAEAAADgBQAEgCADgCQACgCABgEQACgEAAgEQAAgDgCgDQgBgEgCgDQgDgDgEgBQgDgBgEAAQgDAAgEABg");
	this.shape_103.setTransform(255.4,7.9);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#14716E").s().p("AAOAeIgTgZIgKAAIAAAZIgOAAIAAg8IAOAAIAAAZIAKAAIAQgZIAQAAIgWAeIAZAeg");
	this.shape_104.setTransform(248.5,7.9);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#14716E").s().p("AgrAeIAAg8IAOAAIAAAxIAYAAIAAgxIALAAIAAAxIAYAAIAAgxIAOAAIAAA8g");
	this.shape_105.setTransform(239.4,7.9);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#14716E").s().p("AAPArIAAgpIgfApIgMAAIAAg8IAOAAIAAAmIAfgmIAMAAIAAA8gAgIgbQgFgBgEgDIAAgLQAEADAFABIAIABIAJgBQAFgBAEgDIAAALQgEADgFABQgEABgFABQgEgBgEgBg");
	this.shape_106.setTransform(227.3,6.7);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#14716E").s().p("AgLAeQgGgCgFgEQgFgEgDgHIgBgGIgBgHQAAgEACgJQADgFAFgFQAFgEAGgCQAGgCAFAAQAGAAAGACQAGACAEAEQAFAFADAFQADAJAAAEIgBAHIgCAGQgDAHgFAEQgEAEgGACQgGACgGAAQgFAAgGgCgAgGgRIgHAEQgDADgBAEQgCADAAADQAAAEACAEQABAEADACIAHAEQADABADAAQAEAAADgBQAEgCACgCQADgCACgEQABgEAAgEQAAgDgBgDQgCgEgDgDQgCgDgEgBQgDgBgEAAQgDAAgDABg");
	this.shape_107.setTransform(219.7,7.9);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#14716E").s().p("AAPAeIAAgZIgdAAIAAAZIgOAAIAAg8IAOAAIAAAZIAdAAIAAgZIAOAAIAAA8g");
	this.shape_108.setTransform(212,7.9);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#14716E").s().p("AAPAeIAAgZIgdAAIAAAZIgOAAIAAg8IAOAAIAAAZIAdAAIAAgZIAOAAIAAA8g");
	this.shape_109.setTransform(204.4,7.9);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#14716E").s().p("AgSAfQgEgBgDgCIgFgHQgCgDABgFQgBgGADgEQACgDAFgBQADgCAGgCIAJgBIAOACIAAgCIgBgGIgDgDQgCgCgDgBIgFgBQgGAAgGACIgLACIAAgMIALgDIANgBQAFAAAFABQAGACADAEQAEADACAFQACAFAAAHIAAAUQAAABAAAAQAAABAAAAQABABAAAAQAAAAAAAAIAEABIADAAIAAAKQgDABgFAAQgFAAgDgCQgDgBgBgEQgFAEgGACQgEACgHAAIgIgBgAgMAEIgEAEQgCACAAACQAAAFAEACQAEADAEgBQAGAAACgCQAFgCADgDIAAgLIgLgBQgHAAgEACg");
	this.shape_110.setTransform(197.2,7.9);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#14716E").s().p("AgbAeIAAg8IAhAAIAJABIAGAEIAEAFIABAHQAAAFgCAEQgCADgEABQAEABADADQADAEAAAFIgBAHQgCAEgCACQgDACgDABQgEACgFgBgAgNAUIARAAQAFAAACgBQADgCAAgFQAAgEgDgCQgCgCgFAAIgRAAgAgNgEIAQAAQAEAAADgCQACgBAAgEQAAgEgCgCQgDgCgEAAIgQAAg");
	this.shape_111.setTransform(190.1,7.9);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#14716E").s().p("AgLAeQgGgCgFgEQgFgEgCgHIgCgGIgBgHQAAgEADgJQACgFAFgFQAFgEAGgCQAGgCAFAAQAGAAAGACQAGACAFAEQAEAFADAFQADAJAAAEIgBAHIgCAGQgDAHgEAEQgFAEgGACQgGACgGAAQgFAAgGgCgAgHgRIgGAEQgCADgCAEQgBADgBADQABAEABAEQACAEACACIAGAEQAEABADAAQADAAAEgBQAEgCADgCQACgCABgEQACgEAAgEQAAgDgCgDQgBgEgCgDQgDgDgEgBQgEgBgDAAQgDAAgEABg");
	this.shape_112.setTransform(182.6,7.9);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#14716E").s().p("AggAuIAAhZIANAAIAAAKQADgFAGgDIAHgDIAGAAQAGAAAGACQAGADADAEQAEAFADAGQACAFAAAHQAAAGgCAGQgDAEgEAFQgDAFgGACQgGACgGABIgGgBIgHgCQgEgDgEgEIAAAlgAgFggIgGADQgEAEgDAFIAAAPQADAFAEACIAGADIAFACQAEAAADgCIAHgEIADgFQACgEAAgEQAAgFgCgEIgDgGIgHgEQgDgBgEgBIgFABg");
	this.shape_113.setTransform(174.9,9.3);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#14716E").s().p("AAPAeIAAgmIgfAmIgMAAIAAg8IAOAAIAAAnIAfgnIAMAAIAAA8g");
	this.shape_114.setTransform(166.9,7.9);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#14716E").s().p("AgPAfIgKgEIAAgMQAEADAGABIAMACQAGAAADgCQABAAABgBQAAAAABAAQAAAAABgBQAAAAAAgBQABAAAAgBQAAAAABAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQgBgBAAAAQAAAAgBgBIgDgCIgHgBIgMAAIAAgJIAMAAQAEAAADgCQADgBAAgEQAAgEgEgCQgEgCgEAAIgLABIgLAEIAAgMIALgEQAGgBAHAAQAFAAAEABQAGACADACIAFAGQABADAAAEQAAAGgCADQgEAEgEAAQAFAAADAEIADAEIAAAGQABAEgCADQgCAEgEACQgEADgFABIgKABIgOgBg");
	this.shape_115.setTransform(160,7.9);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#14716E").s().p("AAPAeIAAgmIgfAmIgMAAIAAg8IAOAAIAAAnIAfgnIAMAAIAAA8g");
	this.shape_116.setTransform(153.1,7.9);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#14716E").s().p("AggAeIAAgMIAEACQAEgBADgEQADgDABgHQACgHACgcIAtAAIAAA8IgNAAIAAgxIgTAAIgCATQgBALgDAFQgEAJgDACIgEADIgGABIgJgBg");
	this.shape_117.setTransform(145.1,8);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#14716E").s().p("AgSAfQgEgBgDgCIgFgHQgCgDABgFQgBgGADgEQACgDAFgBQADgCAGgCIAJgBIAOACIAAgCIgBgGIgDgDQgCgCgDgBIgFgBQgGAAgHACIgKACIAAgMIAKgDIAOgBQAFAAAFABQAGACADAEQAEADACAFQACAFAAAHIAAAUQAAABAAAAQAAABAAAAQABABAAAAQAAAAAAAAIAEABIADAAIAAAKQgDABgFAAQgEAAgEgCQgDgBgBgEQgFAEgGACQgEACgHAAIgIgBgAgMAEIgEAEQgCACAAACQAAAFAEACQADADAFgBQAGAAACgCQAFgCADgDIAAgLIgLgBQgHAAgEACg");
	this.shape_118.setTransform(138.1,7.9);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#14716E").s().p("AAPAeIAAgmIgfAmIgMAAIAAg8IAOAAIAAAnIAfgnIAMAAIAAA8g");
	this.shape_119.setTransform(130.6,7.9);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#14716E").s().p("AAUAnIAAgRIg0AAIAAg8IAOAAIAAAwIAcAAIAAgwIAOAAIAAAwIAJAAIAAAdg");
	this.shape_120.setTransform(123,8.7);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#14716E").s().p("AgIAeQgGgCgFgEQgFgEgDgGIgCgHIAAgHQAAgEACgJQADgGAFgEIAKgHIAJgBIAIAAIAHADIAGAEIAEAFQAEAFABAHQABAHgCAEIgtAAIADAIIAGAFIAHACIAGABQAGABAFgCIAJgDIAAAMQgEACgGABIgMABQgGAAgGgCgAgEgSIgGADIgEAEIgCAHIAhAAIgBgEIgCgGQgCgDgDgBQgEgCgEAAIgFACg");
	this.shape_121.setTransform(115.4,7.9);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#14716E").s().p("AAPAeIAAgvIgdAAIAAAvIgOAAIAAg8IA5AAIAAA8g");
	this.shape_122.setTransform(108.1,7.9);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#14716E").s().p("AgFAsIgIgEIgHgFQgEgDgDgEIgFgHIgDgKIgBgLIABgJIADgKIAFgIIAHgHIAHgFIAIgDIAGgDIAJAAIAOABQAGACAGADIAAAOQgFgDgGgCQgFgCgHAAQgHAAgGACQgFACgEAEQgHAHgCAEIgBAHIgBAGIABAIIABAHQACAEAHAGQAEAEAFACQAHACAGAAQAHAAAGgCQAGgCAEgDIAAAOQgFADgGACIgPABQgKAAgFgCg");
	this.shape_123.setTransform(100,6.5);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#14716E").s().p("AggAuIAAhZIANAAIAAAKQADgFAGgDIAHgDIAGAAQAGAAAGACQAGADADAEQAEAFADAGQACAFAAAHQAAAGgCAGQgDAEgEAFQgDAFgGACQgGACgGABIgGgBIgGgCQgFgDgEgEIAAAlgAgFggIgFADQgFAEgDAFIAAAPQADAFAFACIAFADIAFACQAEAAADgCIAHgEIADgFQACgEAAgEQAAgFgCgEIgDgGIgHgEQgDgBgEgBIgFABg");
	this.shape_124.setTransform(88.9,9.3);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#14716E").s().p("AgLAeQgGgCgFgEQgFgEgCgHIgCgGIgBgHQAAgEADgJQACgFAFgFQAFgEAGgCQAGgCAFAAQAGAAAGACQAGACAFAEQAEAFADAFQADAJAAAEIgBAHIgCAGQgDAHgEAEQgFAEgGACQgGACgGAAQgFAAgGgCgAgHgRIgGAEQgCADgCAEQgBADgBADQABAEABAEQACAEACACIAGAEQAEABADAAQADAAAEgBQAEgCADgCQACgCABgEQACgEAAgEQAAgDgCgDQgBgEgCgDQgDgDgEgBQgEgBgDAAQgDAAgEABg");
	this.shape_125.setTransform(80.9,7.9);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#14716E").s().p("AgFAeIAAgvIgWAAIAAgNIA3AAIAAANIgWAAIAAAvg");
	this.shape_126.setTransform(74,7.9);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#14716E").s().p("AAOAeIgTgZIgKAAIAAAZIgOAAIAAg8IAOAAIAAAZIAKAAIAQgZIAQAAIgWAeIAZAeg");
	this.shape_127.setTransform(67.9,7.9);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#14716E").s().p("AgIAeQgGgCgFgEQgFgEgDgGIgCgHIAAgHQAAgEACgJQADgGAFgEIAKgHIAJgBIAIAAIAHADIAGAEIAEAFQAEAFABAHQABAHgCAEIgtAAIADAIIAGAFIAHACIAGABQAGABAFgCIAJgDIAAAMQgEACgGABIgMABQgGAAgGgCgAgEgSIgGADIgEAEIgCAHIAhAAIgBgEIgCgGQgCgDgDgBQgEgCgEAAIgFACg");
	this.shape_128.setTransform(60.6,7.9);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#14716E").s().p("AggAuIAAhZIAMAAIAAAKQAFgFAFgDIAGgDIAHAAQAGAAAGACQAFADAEAEQAEAFADAGQACAFAAAHQAAAGgCAGQgDAEgEAFQgEAFgFACQgGACgGABIgGgBIgHgCQgFgDgDgEIAAAlgAgFggIgGADQgEAEgDAFIAAAPQADAFAEACIAGADIAFACQAEAAADgCIAGgEIAFgFQABgEAAgEQAAgFgBgEIgFgGIgGgEQgDgBgEgBIgFABg");
	this.shape_129.setTransform(53.2,9.3);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#14716E").s().p("AAPAeIAAgmIgfAmIgMAAIAAg8IAOAAIAAAnIAfgnIAMAAIAAA8g");
	this.shape_130.setTransform(45.2,7.9);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#14716E").s().p("AAZAnIAAgRIgxAAIAAARIgMAAIAAgcIAIAAIAFgLIADgJQABgJABgUIAuAAIAAAxIAKAAIAAAcgAgHgFIgHAQIAcAAIAAglIgTAAIgCAVg");
	this.shape_131.setTransform(37.2,8.7);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#14716E").s().p("AgKAPIAIgdIANAAIgLAdg");
	this.shape_132.setTransform(28.2,11.3);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#14716E").s().p("AgEAGQgDgDAAgDQAAgDADgCQACgCACAAQADAAADACQACACAAADQAAADgCADQgDACgDAAQgCAAgCgCg");
	this.shape_133.setTransform(25.4,10.3);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#14716E").s().p("AAVAeIAAgnIgRAZIgHAAIgRgZIAAAnIgOAAIAAg8IAOAAIAUAfIAVgfIAOAAIAAA8g");
	this.shape_134.setTransform(19.6,7.9);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#14716E").s().p("AgEAGQgDgDAAgDQAAgDADgCQACgCACAAQADAAADACQACACAAADQAAADgCADQgDACgDAAQgCAAgCgCg");
	this.shape_135.setTransform(10.7,10.3);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#14716E").s().p("AAYAnIAAgRIgvAAIAAARIgOAAIAAgcIAJAAIAFgLIADgJQACgJAAgUIAvAAIAAAxIAJAAIAAAcgAgHgFIgGAQIAbAAIAAglIgTAAIgCAVg");
	this.shape_136.setTransform(5,8.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,559.9,27.7);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.janfrank();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,76,76);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#14716E").s().p("AAPAfIAAgVIgOAAIgNAVIgQAAIARgXIgGgCIgEgFIgDgDIgBgHQAAgEACgEQABgDADgEIAIgEQAEgBAGAAIAeAAIAAA8gAgIgQQgDADAAAEQAAAFADADQAEABAEAAIAPAAIAAgSIgPAAQgEAAgEACg");
	this.shape.setTransform(290.3,20.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#14716E").s().p("AAPAfIAAgnIgfAnIgMAAIAAg8IAOAAIAAAmIAfgmIAMAAIAAA8g");
	this.shape_1.setTransform(283.2,20.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#14716E").s().p("AAPAfIAAgZIgdAAIAAAZIgOAAIAAg8IAOAAIAAAYIAdAAIAAgYIAOAAIAAA8g");
	this.shape_2.setTransform(275.6,20.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#14716E").s().p("AgSAfQgEgBgDgDIgFgFQgCgEAAgFQAAgGADgEQACgDAEgBQAEgCAFgCIAKgBIAOACIAAgCIgBgFIgDgFQgCgCgDAAIgFgBQgGAAgHABIgKADIAAgMIAKgDIAPgBQAEAAAFACQAGABADADQAEAEACAFQACAFAAAHIAAAUQAAABAAAAQAAABAAAAQABABAAAAQAAAAAAAAIADABIAFAAIAAAKQgEACgFAAQgFAAgDgDQgDgBgCgEQgFAEgFACQgEACgHAAIgIgBgAgMAFIgEADQgBABgBAEQABAEADACQADADAFAAQAGgBACgCQAFgCADgDIAAgKIgLgCQgHAAgEADg");
	this.shape_3.setTransform(268.3,20.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#14716E").s().p("AgFAfIAAgxIgWAAIAAgLIA3AAIAAALIgWAAIAAAxg");
	this.shape_4.setTransform(261.6,20.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#14716E").s().p("AAPAfIAAgnIgfAnIgMAAIAAg8IAOAAIAAAmIAfgmIAMAAIAAA8g");
	this.shape_5.setTransform(254.7,20.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#14716E").s().p("AggAtIAAhYIAMAAIAAAJQAFgEAFgDIAGgDIAHgBQAGABAGACQAFACAEAFQAEAFADAFQACAHAAAGQAAAHgCAFQgDAEgEAFQgEAEgFADQgGADgGgBIgGAAIgHgCQgFgDgDgEIAAAkgAgFggIgGAEQgEADgDAGIAAAOQADAFAEACIAGAEIAFABQAEgBADgBIAGgEIAFgEQABgFAAgEQAAgEgBgEIgFgHIgGgEQgDgCgEAAIgFABg");
	this.shape_6.setTransform(247.1,22.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#14716E").s().p("AgLAsQgGgCgFgFIgEgFIgCgGQgCgFgBgLQAAgIACgFQABgHACgFQADgFAEgEIAHgHQAJgFANgDIAJgCQAEgBADgDIAAANIgGAEIgIABQgLACgFAEIgFAEIgEAFQgCAEgCAHQADgFAGgDIAGgCIAFgBQAGAAAFACQAFACAEAEQAEAEADADQACAGAAAHQAAAHgCAGQgDAGgEAEQgEADgGACQgGACgHAAQgFAAgGgCgAgHAAIgFAEQgDACgBAEQgBADAAADIABAHQABADADADIAFAEQAEACADAAQAEAAADgCQAEgBACgDIAEgGIABgHIgBgHIgEgGIgGgDQgDAAgEAAQgDAAgEAAg");
	this.shape_7.setTransform(239.2,19.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#14716E").s().p("AgLAeQgHgCgEgEQgFgFgDgFIgCgHIAAgHQAAgEACgIQADgHAFgEQAEgEAHgCQAGgCAFAAQAGAAAGACQAGACAEAEQAFAEADAHQADAIAAAEIgBAHIgCAHQgDAFgFAFQgEAEgGACQgGACgGAAQgFAAgGgCgAgGgRIgHAEQgDACgBAEQgBAEAAADQAAAEABAEQABADADADIAHAEQADABADAAQAEAAADgBQAEgCACgCQADgDACgDQABgEAAgEQAAgDgBgEQgCgEgDgCQgCgCgEgCQgDgCgEABQgDgBgDACg");
	this.shape_8.setTransform(231.6,20.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#14716E").s().p("AAOAfIgTgaIgKAAIAAAaIgOAAIAAg8IAOAAIAAAYIAKAAIAQgYIAQAAIgWAdIAZAfg");
	this.shape_9.setTransform(224.7,20.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#14716E").s().p("AAPAfIAAgnIgfAnIgMAAIAAg8IAOAAIAAAmIAfgmIAMAAIAAA8g");
	this.shape_10.setTransform(217,20.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#14716E").s().p("AgfAeIAAgLIADABQAEAAADgFQACgDACgHQACgHACgcIAuAAIAAA8IgPAAIAAgxIgSAAIgCAUQgCAKgCAGQgEAIgDADIgFACIgFABIgIgBg");
	this.shape_11.setTransform(209,20.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#14716E").s().p("AgIAeQgGgCgFgEQgFgEgDgGIgCgHIAAgHQAAgEACgJQADgGAFgFIAKgFIAJgCIAIABIAHACIAGAEIAEAFQAEAGABAGQABAHgCAFIgtAAIADAHIAGAEIAHADIAGABQAGAAAFgBIAJgDIAAAMQgEACgGABIgMABQgGAAgGgCgAgEgSIgGACIgEAGIgCAHIAhAAIgBgGIgCgFQgCgCgDgCQgEgCgEABIgFABg");
	this.shape_12.setTransform(202.1,20.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#14716E").s().p("AgjAtIAAhZIAkAAQAIAAAFACQAGABAEADQAEADACAEQACAFAAAFIgBAIIgDAFIgFAEIgFADIAGABQADABADADQADADABAEQACAEAAAFIgBAHIgDAFQgDAFgFADQgFACgGACIgLABgAgVAgIAVAAIAHgBIAHgBQADgCACgCQACgDAAgFQAAgEgCgDQgCgDgDgBIgGgCIgGgBIgXAAgAgVgGIAXAAIAGgBQADAAACgCIADgEIABgFIgBgGQgBgDgCgBIgGgCIgHgBIgVAAg");
	this.shape_13.setTransform(194.4,19.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#14716E").s().p("AgJAQIAHgfIAMAAIgKAfg");
	this.shape_14.setTransform(184.8,24.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#14716E").s().p("AAPAfIAAgZIgdAAIAAAZIgOAAIAAg8IAOAAIAAAYIAdAAIAAgYIAOAAIAAA8g");
	this.shape_15.setTransform(179.7,20.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#14716E").s().p("AgLAeQgHgCgEgEQgFgFgCgFIgCgHIgBgHQAAgEADgIQACgHAFgEQAEgEAHgCQAGgCAFAAQAGAAAGACQAGACAFAEQAEAEADAHQADAIAAAEIgBAHIgCAHQgDAFgEAFQgFAEgGACQgGACgGAAQgFAAgGgCgAgHgRIgGAEQgCACgCAEQgBAEgBADQABAEABAEQACADACADIAGAEQAEABADAAQAEAAADgBQAEgCADgCQACgDABgDQACgEAAgEQAAgDgCgEQgBgEgCgCQgDgCgEgCQgDgCgEABQgDgBgEACg");
	this.shape_16.setTransform(172.1,20.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#14716E").s().p("AAZAnIAAgRIgwAAIAAARIgNAAIAAgcIAIAAIAFgLIADgJQABgJABgUIAuAAIAAAxIAJAAIAAAcgAgHgFIgHAQIAcAAIAAglIgTAAIgCAVg");
	this.shape_17.setTransform(164.1,21.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#14716E").s().p("AAPAfIAAgZIgdAAIAAAZIgOAAIAAg8IAOAAIAAAYIAdAAIAAgYIAOAAIAAA8g");
	this.shape_18.setTransform(156.2,20.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#14716E").s().p("AgLAeQgGgCgFgEQgFgFgDgFIgBgHIgBgHQAAgEACgIQADgHAFgEQAFgEAGgCQAGgCAFAAQAGAAAGACQAGACAEAEQAFAEADAHQADAIAAAEIgBAHIgCAHQgDAFgFAFQgEAEgGACQgGACgGAAQgFAAgGgCgAgGgRIgHAEQgDACgBAEQgCAEAAADQAAAEACAEQABADADADIAHAEQADABADAAQAEAAADgBQAEgCACgCQADgDACgDQABgEAAgEQAAgDgBgEQgCgEgDgCQgCgCgEgCQgDgCgEABQgDgBgDACg");
	this.shape_19.setTransform(148.6,20.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#14716E").s().p("AgpAsIAAgOIAGABQADAAADgCIADgFQADgEADgOQADgNADgmIA4AAIAABZIgPAAIAAhLIgcAAQgDAmgFAOIgDAKQgDAEgDADQgDAEgDACQgEABgEAAQgFAAgEgBg");
	this.shape_20.setTransform(139.4,19.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#14716E").s().p("AgJAQIAHgfIAMAAIgKAfg");
	this.shape_21.setTransform(130.2,24.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#14716E").s().p("AAhAfIgSgZIgJAAIAAAZIgMAAIAAgZIgIAAIgTAZIgOAAIAWgfIgUgdIAPAAIARAZIAHAAIAAgZIAMAAIAAAZIAIAAIARgZIAPAAIgVAdIAYAfg");
	this.shape_22.setTransform(124,20.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#14716E").s().p("AAZAnIAAgRIgxAAIAAARIgMAAIAAgcIAIAAIAFgLIADgJQABgJABgUIAuAAIAAAxIAJAAIAAAcgAgIgFIgGAQIAdAAIAAglIgUAAIgDAVg");
	this.shape_23.setTransform(114.8,21.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#14716E").s().p("AgIAeQgGgCgFgEQgFgEgDgGIgCgHIAAgHQAAgEACgJQADgGAFgFIAKgFIAJgCIAIABIAHACIAGAEIAEAFQAEAGABAGQABAHgCAFIgtAAIADAHIAGAEIAHADIAGABQAGAAAFgBIAJgDIAAAMQgEACgGABIgMABQgGAAgGgCgAgEgSIgGACIgEAGIgCAHIAhAAQAAgDgBgDIgCgFQgCgCgDgCQgEgCgEABIgFABg");
	this.shape_24.setTransform(107.2,20.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#14716E").s().p("AggAeIAAgLIAFABQADAAADgFQACgDACgHQACgHACgcIAuAAIAAA8IgPAAIAAgxIgSAAIgCAUQgBAKgDAGQgEAIgDADIgEACIgGABIgJgBg");
	this.shape_25.setTransform(99.5,20.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#14716E").s().p("AggAeIAAgLIAFABQADAAADgFQACgDACgHQACgHACgcIAuAAIAAA8IgPAAIAAgxIgSAAIgCAUQgBAKgDAGQgEAIgDADIgEACIgGABIgJgBg");
	this.shape_26.setTransform(91.8,20.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#14716E").s().p("AgLAeQgGgCgFgEQgFgFgDgFIgCgHIAAgHQAAgEACgIQADgHAFgEQAFgEAGgCQAGgCAFAAQAGAAAGACQAGACAEAEQAGAEACAHQADAIAAAEIgBAHIgCAHQgCAFgGAFQgEAEgGACQgGACgGAAQgFAAgGgCgAgHgRIgGAEQgDACgBAEQgBAEAAADQAAAEABAEQABADADADIAGAEQAEABADAAQADAAAEgBQAEgCACgCQADgDACgDQABgEAAgEQAAgDgBgEQgCgEgDgCQgCgCgEgCQgEgCgDABQgDgBgEACg");
	this.shape_27.setTransform(84.5,20.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#14716E").s().p("AAOAfIgTgaIgKAAIAAAaIgOAAIAAg8IAOAAIAAAYIAKAAIAQgYIAQAAIgWAdIAZAfg");
	this.shape_28.setTransform(77.6,20.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#14716E").s().p("AAPArIAAgoIgfAoIgMAAIAAg8IAOAAIAAAnIAfgnIAMAAIAAA8gAgJgbQgEgBgFgDIAAgLQAFADAFABIAIABIAJgBQAEgBAFgDIAAALQgDADgGABQgEACgFgBQgEABgFgCg");
	this.shape_29.setTransform(66.9,19.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#14716E").s().p("AAPAfIAAgnIgfAnIgMAAIAAg8IAOAAIAAAmIAfgmIAMAAIAAA8g");
	this.shape_30.setTransform(59.3,20.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#14716E").s().p("AAOAfIgTgaIgKAAIAAAaIgOAAIAAg8IAOAAIAAAYIAKAAIAQgYIAQAAIgWAdIAZAfg");
	this.shape_31.setTransform(52.5,20.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#14716E").s().p("AgEAeQgHgCgEgDQgFgFgDgFIgCgHIgBgIIABgGIADgHQABgEAGgHIALgFQAEgCAGAAIAKABQAGABADACIAAANQgCgCgGgCIgJgBIgHABIgFAEQgEACgCAEQgCAEAAAEQABAEABAEQACAEADADQADADACAAIAIACIAKgCQAEAAAEgDIAAANIgJADIgMABQgFAAgEgCg");
	this.shape_32.setTransform(45.4,20.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#14716E").s().p("AggAtIAAhYIANAAIAAAJQAEgEAFgDIAHgDIAFgBQAHABAGACQAGACAEAFQADAFADAFQACAHAAAGQAAAHgCAFQgDAEgDAFQgEAEgGADQgGADgHgBIgFAAIgGgCQgFgDgEgEIAAAkgAgFggIgFAEQgFADgDAGIAAAOQADAFAFACIAFAEIAFABQAEgBADgBIAHgEIADgEQACgFAAgEQAAgEgCgEIgDgHIgHgEQgDgCgEAAIgFABg");
	this.shape_33.setTransform(38.4,22.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#14716E").s().p("AgIAeQgGgCgFgEQgFgEgDgGIgCgHIAAgHQAAgEACgJQADgGAFgFIAKgFIAJgCIAIABIAHACIAGAEIAEAFQAEAGABAGQABAHgCAFIgtAAIADAHIAGAEIAHADIAGABQAGAAAFgBIAJgDIAAAMQgEACgGABIgMABQgGAAgGgCgAgEgSIgGACIgEAGIgCAHIAhAAIgBgGIgCgFQgCgCgDgCQgEgCgEABIgFABg");
	this.shape_34.setTransform(30.7,20.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#14716E").s().p("AAPAfIAAgxIgdAAIAAAxIgOAAIAAg8IA5AAIAAA8g");
	this.shape_35.setTransform(23.4,20.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#14716E").s().p("AAVAfIAAgoIgRAZIgHAAIgRgZIAAAoIgOAAIAAg8IAOAAIAUAeIAVgeIAOAAIAAA8g");
	this.shape_36.setTransform(15.2,20.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#14716E").s().p("AAYAtIAAg3IAAgJIgvBAIgOAAIAAhZIAOAAIAAA2IAAAKIAwhAIANAAIAABZg");
	this.shape_37.setTransform(5.9,19.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#14716E").s().p("AAPAeIAAgUIgOAAIgNAUIgQAAIARgVIgGgEIgEgEIgDgEIgBgFQAAgFACgDQABgFADgCIAIgFQAEgCAGAAIAeAAIAAA8gAgIgPQgDACAAAFQAAAEADACQAEACAEAAIAPAAIAAgSIgPAAQgEAAgEADg");
	this.shape_38.setTransform(600,7.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#14716E").s().p("AAPAeIAAgmIgfAmIgMAAIAAg8IAOAAIAAAnIAfgnIAMAAIAAA8g");
	this.shape_39.setTransform(592.9,7.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#14716E").s().p("AAPAeIAAgZIgdAAIAAAZIgOAAIAAg8IAOAAIAAAZIAdAAIAAgZIAOAAIAAA8g");
	this.shape_40.setTransform(585.4,7.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#14716E").s().p("AgIAeQgGgCgFgEQgFgEgDgGIgCgHIAAgHQAAgEACgJQADgGAFgEIAKgHIAJgBIAIAAIAHADIAGAEIAEAFQAEAFABAHQABAHgCAEIgtAAIADAIIAGAFIAHACIAGABQAGABAFgCIAJgDIAAAMQgEACgGABIgMABQgGAAgGgCgAgEgSIgGADIgEAEIgCAHIAhAAIgBgEIgCgGQgCgDgDgBQgEgCgEAAIgFACg");
	this.shape_41.setTransform(578.1,7.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#14716E").s().p("AAPAeIAAgZIgdAAIAAAZIgOAAIAAg8IAOAAIAAAZIAdAAIAAgZIAOAAIAAA8g");
	this.shape_42.setTransform(570.7,7.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#14716E").s().p("AgSAfQgEgBgDgCIgFgHQgCgDABgFQgBgGADgEQACgDAFgBQADgCAGgCIAJgBIAOACIAAgCIgBgGIgDgDQgCgCgDgBIgFgBQgHAAgFACIgLACIAAgMIALgDIANgBQAFAAAFABQAGACADAEQAEADACAFQACAFAAAHIAAAUQAAABAAAAQAAABAAAAQABABAAAAQAAAAAAAAIAEABIADAAIAAAKQgDABgFAAQgFAAgDgCQgDgBgBgEQgGAEgFACQgEACgHAAIgIgBgAgNAEIgDAEQgCACAAACQAAAFAEACQAEADAEgBQAGAAACgCQAFgCADgDIAAgLIgLgBQgHAAgFACg");
	this.shape_43.setTransform(563.5,7.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#14716E").s().p("AggAuIAAhZIAMAAIAAAKQAEgFAGgDIAGgDIAHAAQAGAAAGACQAFADAEAEQAEAFADAGQACAFAAAHQAAAGgCAGQgDAEgEAFQgEAFgFACQgGACgGABIgGgBIgHgCQgFgDgDgEIAAAlgAgFggIgGADQgFAEgCAFIAAAPQACAFAFACIAGADIAFACQAEAAAEgCIAFgEIAFgFQABgEAAgEQAAgFgBgEIgFgGIgFgEQgEgBgEgBIgFABg");
	this.shape_44.setTransform(555.9,9.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#14716E").s().p("AAQAeIgQgVIgPAVIgQAAIAYgeIgWgeIAPAAIAOAWIAPgWIAPAAIgWAeIAXAeg");
	this.shape_45.setTransform(548.5,7.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#14716E").s().p("AgLAeQgGgCgFgEQgFgEgCgHIgCgGIgBgHQAAgEADgJQACgFAFgFQAFgEAGgCQAGgCAFAAQAGAAAGACQAGACAEAEQAFAFADAFQADAJAAAEIgBAHIgCAGQgDAHgFAEQgEAEgGACQgGACgGAAQgFAAgGgCgAgGgRIgHAEQgDADgBAEQgBADgBADQABAEABAEQABAEADACIAHAEQADABADAAQADAAAEgBQAEgCADgCQACgCABgEQACgEAAgEQAAgDgCgDQgBgEgCgDQgDgDgEgBQgEgBgDAAQgDAAgDABg");
	this.shape_46.setTransform(541.3,7.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#14716E").s().p("AgLAeQgGgCgFgEQgFgEgDgHIgBgGIgBgHQAAgEACgJQADgFAFgFQAFgEAGgCQAGgCAFAAQAGAAAGACQAGACAFAEQAEAFADAFQADAJAAAEIgBAHIgCAGQgDAHgEAEQgFAEgGACQgGACgGAAQgFAAgGgCgAgGgRIgHAEQgDADgBAEQgBADgBADQABAEABAEQABAEADACIAHAEQADABADAAQAEAAADgBQAEgCACgCQADgCABgEQACgEAAgEQAAgDgCgDQgBgEgDgDQgCgDgEgBQgDgBgEAAQgDAAgDABg");
	this.shape_47.setTransform(533.7,7.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#14716E").s().p("AgbAeIAAg8IAhAAIAJABIAGAEIAEAFIABAHQAAAFgCAEQgDADgEABQAFABADADQADAEAAAFIgBAHQgBAEgDACQgDACgDABQgEACgGgBgAgNAUIARAAQAFAAADgBQACgCAAgFQAAgEgDgCQgDgCgDAAIgSAAgAgNgEIARAAQADAAADgCQACgBAAgEQAAgEgCgCQgDgCgDAAIgRAAg");
	this.shape_48.setTransform(526.5,7.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#14716E").s().p("AgSAfQgEgBgDgCIgFgHQgCgDAAgFQAAgGADgEQACgDAEgBQAEgCAFgCIAKgBIAOACIAAgCIgBgGIgDgDQgCgCgDgBIgFgBQgHAAgFACIgKACIAAgMIAKgDIAOgBQAEAAAFABQAGACADAEQAEADACAFQACAFAAAHIAAAUQAAABAAAAQAAABAAAAQABABAAAAQAAAAABAAIACABIAFAAIAAAKQgEABgFAAQgEAAgDgCQgEgBgCgEQgFAEgFACQgEACgHAAIgIgBgAgNAEIgDAEQgCACABACQgBAFAEACQADADAFgBQAFAAADgCQAEgCAEgDIAAgLIgLgBQgHAAgFACg");
	this.shape_49.setTransform(519.3,7.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#14716E").s().p("AggAuIAAhZIANAAIAAAKQAEgFAFgDIAHgDIAFAAQAHAAAGACQAGADAEAEQADAFADAGQACAFAAAHQAAAGgCAGQgDAEgDAFQgEAFgGACQgGACgHABIgFgBIgGgCQgFgDgEgEIAAAlgAgFggIgFADQgFAEgDAFIAAAPQADAFAFACIAFADIAFACQAEAAADgCIAHgEIADgFQACgEAAgEQAAgFgCgEIgDgGIgHgEQgDgBgEgBIgFABg");
	this.shape_50.setTransform(511.8,9.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#14716E").s().p("AAZAnIAAgRIgwAAIAAARIgNAAIAAgcIAIAAIAFgLIADgJQABgJABgUIAuAAIAAAxIAJAAIAAAcgAgHgFIgHAQIAcAAIAAglIgTAAIgCAVg");
	this.shape_51.setTransform(503.4,8.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#14716E").s().p("AgPAfIgKgEIAAgMQAEADAGABIAMACQAGAAADgCQABAAABgBQAAAAABAAQAAAAABgBQAAAAAAgBQABAAAAgBQAAAAABAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQgBgBAAAAQAAAAgBgBIgDgCIgHgBIgMAAIAAgJIAMAAQAEAAADgCQADgBAAgEQAAgEgEgCQgEgCgEAAIgLABIgLAEIAAgMIALgEQAGgBAGAAQAGAAAEABQAGACADACIAFAGQABADABAEQgBAGgCADQgEAEgEAAQAFAAADAEIADAEIAAAGQABAEgCADQgCAEgEACQgEADgFABIgKABIgOgBg");
	this.shape_52.setTransform(496.1,7.9);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#14716E").s().p("AgLAeQgHgCgEgEQgFgEgDgHIgBgGIgBgHQAAgEACgJQADgFAFgFQAEgEAHgCQAGgCAFAAQAGAAAGACQAGACAEAEQAFAFADAFQADAJAAAEIgBAHIgCAGQgDAHgFAEQgEAEgGACQgGACgGAAQgFAAgGgCgAgGgRIgHAEQgDADgBAEQgCADAAADQAAAEACAEQABAEADACIAHAEQADABADAAQAEAAADgBQAEgCACgCQADgCACgEQABgEAAgEQAAgDgBgDQgCgEgDgDQgCgDgEgBQgDgBgEAAQgDAAgDABg");
	this.shape_53.setTransform(486.2,7.9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#14716E").s().p("AgWAeIAAg8IAtAAIAAANIgfAAIAAAvg");
	this.shape_54.setTransform(479.8,7.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#14716E").s().p("AgLAeQgHgCgEgEQgFgEgDgHIgCgGIAAgHQAAgEACgJQADgFAFgFQAEgEAHgCQAGgCAFAAQAGAAAGACQAGACAEAEQAGAFACAFQADAJAAAEIgBAHIgCAGQgCAHgGAEQgEAEgGACQgGACgGAAQgFAAgGgCgAgHgRIgGAEQgCADgCAEQgBADAAADQAAAEABAEQACAEACACIAGAEQAEABADAAQADAAAEgBQAEgCACgCQADgCACgEQABgEAAgEQAAgDgBgDQgCgEgDgDQgCgDgEgBQgEgBgDAAQgDAAgEABg");
	this.shape_55.setTransform(472.9,7.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#14716E").s().p("AAPAeIAAgZIgdAAIAAAZIgOAAIAAg8IAOAAIAAAZIAdAAIAAgZIAOAAIAAA8g");
	this.shape_56.setTransform(465.2,7.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#14716E").s().p("AAPAeIAAgZIgdAAIAAAZIgOAAIAAg8IAOAAIAAAZIAdAAIAAgZIAOAAIAAA8g");
	this.shape_57.setTransform(457.6,7.9);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#14716E").s().p("AgIAeQgGgCgFgEQgFgEgDgGIgCgHIAAgHQAAgEACgJQADgGAFgEIAKgHIAJgBIAIAAIAHADIAGAEIAEAFQAEAFABAHQABAHgCAEIgtAAIADAIIAGAFIAHACIAGABQAGABAFgCIAJgDIAAAMQgEACgGABIgMABQgGAAgGgCgAgEgSIgGADIgEAEIgCAHIAhAAIgBgEIgCgGQgCgDgDgBQgEgCgEAAIgFACg");
	this.shape_58.setTransform(450.3,7.9);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#14716E").s().p("AgbAeIAAg8IAhAAIAJABIAGAEIAEAFIABAHQAAAFgCAEQgCADgEABQAEABADADQADAEAAAFIgBAHQgCAEgCACQgCACgEABQgEACgFgBgAgNAUIARAAQAFAAADgBQACgCAAgFQAAgEgDgCQgDgCgEAAIgRAAgAgNgEIAQAAQAEAAADgCQACgBAAgEQAAgEgCgCQgDgCgEAAIgQAAg");
	this.shape_59.setTransform(443.4,7.9);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#14716E").s().p("AgFAeIAAgvIgWAAIAAgNIA3AAIAAANIgWAAIAAAvg");
	this.shape_60.setTransform(436.7,7.9);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#14716E").s().p("AgEAeQgHgCgEgDQgFgFgDgGIgCgGIgBgIIABgGIADgHQABgEAGgGIALgHQAEgBAHAAIAJABQAFABAEADIAAAMQgCgCgGgBIgJgCIgIABIgEAEQgEADgCADQgBAEAAAEQgBAEACAFQACAEADACQADACACACIAIABIAKgBQAEgCAEgCIAAANIgJADIgLABQgGAAgEgCg");
	this.shape_61.setTransform(430.4,7.9);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#14716E").s().p("AgIAeQgGgCgFgEQgFgEgDgGIgCgHIAAgHQAAgEACgJQADgGAFgEIAKgHIAJgBIAIAAIAHADIAGAEIAEAFQAEAFABAHQABAHgCAEIgtAAIADAIIAGAFIAHACIAGABQAGABAFgCIAJgDIAAAMQgEACgGABIgMABQgGAAgGgCgAgEgSIgGADIgEAEIgCAHIAhAAIgBgEIgCgGQgCgDgDgBQgEgCgEAAIgFACg");
	this.shape_62.setTransform(423.8,7.9);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#14716E").s().p("AAjAnIAAgRIhSAAIAAg8IAOAAIAAAwIAXAAIAAgwIAMAAIAAAwIAXAAIAAgwIAOAAIAAAwIAJAAIAAAdg");
	this.shape_63.setTransform(414.9,8.7);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#14716E").s().p("AgLAsQgGgCgFgFIgEgFIgCgGQgCgFgBgLQAAgIACgFQABgHACgFQADgFAEgEIAHgHQAJgFANgDIAJgCQAEgBADgDIAAANIgGAEIgIABQgLACgFAEIgFAEIgEAFQgCAEgCAHQADgFAGgDIAGgCIAFgBQAGAAAFACQAFACAEAEQAEAEADADQACAGAAAHQAAAHgCAGQgDAGgEAEQgEADgGACQgGACgHAAQgFAAgGgCgAgHAAIgFAEQgDACgBAEQgBADAAADIABAHQABADADADIAFAEQAEACADAAQAEAAADgCQAEgBACgDIAEgGIABgHIgBgHIgEgGIgGgDQgDAAgEAAQgDAAgEAAg");
	this.shape_64.setTransform(405.5,6.5);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#14716E").s().p("AgLAeQgGgCgFgEQgFgEgDgHIgBgGIgBgHQAAgEACgJQADgFAFgFQAFgEAGgCQAGgCAFAAQAGAAAGACQAGACAEAEQAFAFADAFQADAJAAAEIgBAHIgCAGQgDAHgFAEQgEAEgGACQgGACgGAAQgFAAgGgCgAgGgRIgHAEQgDADgBAEQgCADAAADQAAAEACAEQABAEADACIAHAEQADABADAAQAEAAADgBQAEgCACgCQADgCACgEQABgEAAgEQAAgDgBgDQgCgEgDgDQgCgDgEgBQgDgBgEAAQgDAAgDABg");
	this.shape_65.setTransform(397.9,7.9);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#14716E").s().p("AAPAeIAAgmIgfAmIgMAAIAAg8IAOAAIAAAnIAfgnIAMAAIAAA8g");
	this.shape_66.setTransform(387.2,7.9);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#14716E").s().p("AAPAeIAAgmIgfAmIgMAAIAAg8IAOAAIAAAnIAfgnIAMAAIAAA8g");
	this.shape_67.setTransform(376.5,7.9);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#14716E").s().p("AAjAnIAAgRIhSAAIAAg8IAOAAIAAAwIAXAAIAAgwIAMAAIAAAwIAXAAIAAgwIAOAAIAAAwIAJAAIAAAdg");
	this.shape_68.setTransform(367.4,8.7);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#14716E").s().p("AgLAeQgHgCgEgEQgFgEgCgHIgDgGIAAgHQAAgEADgJQACgFAFgFQAEgEAHgCQAGgCAFAAQAGAAAGACQAGACAFAEQAFAFACAFQADAJAAAEIgBAHIgCAGQgCAHgFAEQgFAEgGACQgGACgGAAQgFAAgGgCgAgHgRIgGAEQgCADgCAEQgCADABADQgBAEACAEQACAEACACIAGAEQAEABADAAQADAAAEgBQAEgCADgCQACgCABgEQACgEAAgEQAAgDgCgDQgBgEgCgDQgDgDgEgBQgEgBgDAAQgDAAgEABg");
	this.shape_69.setTransform(357.9,7.9);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#14716E").s().p("AAVAeIAAgnIgRAZIgHAAIgRgZIAAAnIgOAAIAAg8IAOAAIAUAfIAVgfIAOAAIAAA8g");
	this.shape_70.setTransform(349.6,7.9);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#14716E").s().p("AgLAeQgGgCgFgEQgFgEgDgHIgCgGIAAgHQAAgEACgJQADgFAFgFQAFgEAGgCQAGgCAFAAQAGAAAGACQAGACAEAEQAGAFACAFQADAJAAAEIgBAHIgCAGQgCAHgGAEQgEAEgGACQgGACgGAAQgFAAgGgCgAgHgRIgGAEQgDADgBAEQgBADAAADQAAAEABAEQABAEADACIAGAEQAEABADAAQADAAAEgBQAEgCACgCQADgCACgEQABgEAAgEQAAgDgBgDQgCgEgDgDQgCgDgEgBQgEgBgDAAQgDAAgEABg");
	this.shape_71.setTransform(341.5,7.9);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#14716E").s().p("AAPAeIAAgvIgdAAIAAAvIgOAAIAAg8IA5AAIAAA8g");
	this.shape_72.setTransform(333.8,7.9);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#14716E").s().p("AAPArIAAgpIgfApIgMAAIAAg8IAOAAIAAAmIAfgmIAMAAIAAA8gAgJgbQgEgBgFgDIAAgLQAGADAEABIAIABIAJgBQAEgBAGgDIAAALQgFADgEABQgFABgFABQgEgBgFgBg");
	this.shape_73.setTransform(323.2,6.7);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#14716E").s().p("AgLAeQgHgCgEgEQgFgEgCgHIgDgGIAAgHQAAgEADgJQACgFAFgFQAEgEAHgCQAGgCAFAAQAGAAAGACQAGACAFAEQAFAFACAFQADAJAAAEIgBAHIgCAGQgCAHgFAEQgFAEgGACQgGACgGAAQgFAAgGgCgAgHgRIgGAEQgCADgCAEQgCADABADQgBAEACAEQACAEACACIAGAEQAEABADAAQADAAAEgBQAEgCADgCQACgCABgEQACgEAAgEQAAgDgCgDQgBgEgCgDQgDgDgEgBQgEgBgDAAQgDAAgEABg");
	this.shape_74.setTransform(315.6,7.9);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#14716E").s().p("AAPAeIAAgZIgdAAIAAAZIgOAAIAAg8IAOAAIAAAZIAdAAIAAgZIAOAAIAAA8g");
	this.shape_75.setTransform(307.9,7.9);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#14716E").s().p("AggAuIAAhZIAMAAIAAAKQAEgFAGgDIAGgDIAHAAQAGAAAGACQAFADAEAEQAEAFADAGQACAFAAAHQAAAGgCAGQgDAEgEAFQgEAFgFACQgGACgGABIgGgBIgHgCQgFgDgDgEIAAAlgAgFggIgGADQgFAEgCAFIAAAPQACAFAFACIAGADIAFACQAEAAAEgCIAFgEIAFgFQABgEAAgEQAAgFgBgEIgFgGIgFgEQgEgBgEgBIgFABg");
	this.shape_76.setTransform(300.3,9.3);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#14716E").s().p("AgSAfQgEgBgDgCIgFgHQgCgDAAgFQAAgGADgEQACgDAEgBQAEgCAFgCIAKgBIAOACIAAgCIgBgGIgDgDQgCgCgDgBIgFgBQgGAAgHACIgKACIAAgMIAKgDIAPgBQAEAAAFABQAGACADAEQAEADACAFQACAFAAAHIAAAUQAAABAAAAQAAABAAAAQABABAAAAQAAAAAAAAIADABIAFAAIAAAKQgEABgFAAQgFAAgDgCQgDgBgCgEQgFAEgFACQgEACgHAAIgIgBgAgMAEIgEAEQgBACgBACQABAFADACQADADAFgBQAGAAACgCQAEgCAEgDIAAgLIgLgBQgHAAgEACg");
	this.shape_77.setTransform(292.6,7.9);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#14716E").s().p("AgGAeIAAgvIgVAAIAAgNIA3AAIAAANIgVAAIAAAvg");
	this.shape_78.setTransform(285.9,7.9);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#14716E").s().p("AAPAeIAAgmIgfAmIgMAAIAAg8IAOAAIAAAnIAfgnIAMAAIAAA8g");
	this.shape_79.setTransform(279,7.9);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#14716E").s().p("AAPAeIAAgZIgdAAIAAAZIgOAAIAAg8IAOAAIAAAZIAdAAIAAgZIAOAAIAAA8g");
	this.shape_80.setTransform(271.4,7.9);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#14716E").s().p("AgSAfQgEgBgDgCIgFgHQgCgDAAgFQAAgGADgEQACgDAEgBQAEgCAFgCIAKgBIAOACIAAgCIgBgGIgDgDQgCgCgDgBIgFgBQgHAAgFACIgKACIAAgMIAKgDIAOgBQAEAAAFABQAGACADAEQAEADACAFQACAFAAAHIAAAUQAAABAAAAQAAABAAAAQABABAAAAQAAAAABAAIACABIAFAAIAAAKQgEABgFAAQgEAAgDgCQgEgBgCgEQgFAEgFACQgEACgHAAIgIgBgAgNAEIgDAEQgCACABACQAAAFADACQADADAFgBQAFAAADgCQAEgCAEgDIAAgLIgLgBQgHAAgFACg");
	this.shape_81.setTransform(264.2,7.9);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#14716E").s().p("AgEAeQgHgCgEgDQgFgFgDgGIgCgGIgBgIIABgGIADgHQABgEAGgGIALgHQAEgBAGAAIAKABQAGABADADIAAAMQgCgCgGgBIgJgCIgIABIgEAEQgEADgCADQgBAEAAAEQgBAEACAFQACAEADACQADACACACIAIABIAKgBQAEgCAEgCIAAANIgJADIgLABQgGAAgEgCg");
	this.shape_82.setTransform(257.3,7.9);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#14716E").s().p("AgWAGIAAgLIAtAAIAAALg");
	this.shape_83.setTransform(251,7.8);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#14716E").s().p("AgLAeQgHgCgEgEQgFgEgDgHIgCgGIAAgHQAAgEACgJQADgFAFgFQAEgEAHgCQAGgCAFAAQAGAAAGACQAGACAEAEQAFAFADAFQADAJAAAEIgBAHIgCAGQgDAHgFAEQgEAEgGACQgGACgGAAQgFAAgGgCgAgGgRIgHAEQgDADgBAEQgCADAAADQAAAEACAEQABAEADACIAHAEQADABADAAQAEAAADgBQAEgCACgCQADgCACgEQABgEAAgEQAAgDgBgDQgCgEgDgDQgCgDgEgBQgDgBgEAAQgDAAgDABg");
	this.shape_84.setTransform(244.1,7.9);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#14716E").s().p("AAOAeIgTgZIgKAAIAAAZIgOAAIAAg8IAOAAIAAAZIAKAAIAQgZIAQAAIgWAeIAZAeg");
	this.shape_85.setTransform(237.2,7.9);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#14716E").s().p("AAPAeIAAgmIgfAmIgMAAIAAg8IAOAAIAAAnIAfgnIAMAAIAAA8g");
	this.shape_86.setTransform(229.5,7.9);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#14716E").s().p("AAYAnIAAgRIgvAAIAAARIgOAAIAAgcIAJAAIAFgLIADgJQACgJAAgUIAvAAIAAAxIAJAAIAAAcgAgHgFIgGAQIAbAAIAAglIgTAAIgCAVg");
	this.shape_87.setTransform(221.5,8.7);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#14716E").s().p("AgIAeQgGgCgFgEQgFgEgDgGIgCgHIAAgHQAAgEACgJQADgGAFgEIAKgHIAJgBIAIAAIAHADIAGAEIAEAFQAEAFABAHQABAHgCAEIgtAAIADAIIAGAFIAHACIAGABQAGABAFgCIAJgDIAAAMQgEACgGABIgMABQgGAAgGgCgAgEgSIgGADIgEAEIgCAHIAhAAIgBgEIgCgGQgCgDgDgBQgEgCgEAAIgFACg");
	this.shape_88.setTransform(213.9,7.9);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#14716E").s().p("AAVAeIAAgnIgRAZIgHAAIgRgZIAAAnIgOAAIAAg8IAOAAIAUAfIAVgfIAOAAIAAA8g");
	this.shape_89.setTransform(206,7.9);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#14716E").s().p("AAPArIAAgpIgfApIgMAAIAAg8IAOAAIAAAmIAfgmIAMAAIAAA8gAgIgbQgFgBgEgDIAAgLQAEADAFABIAIABIAJgBQAFgBAEgDIAAALQgEADgEABQgFABgFABQgEgBgEgBg");
	this.shape_90.setTransform(194.8,6.7);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#14716E").s().p("AgLAeQgGgCgFgEQgFgEgCgHIgCgGIgBgHQAAgEADgJQACgFAFgFQAFgEAGgCQAGgCAFAAQAGAAAGACQAGACAEAEQAFAFADAFQADAJAAAEIgBAHIgCAGQgDAHgFAEQgEAEgGACQgGACgGAAQgFAAgGgCgAgGgRIgHAEQgDADgBAEQgBADgBADQABAEABAEQABAEADACIAHAEQADABADAAQAEAAADgBQAEgCADgCQACgCABgEQACgEAAgEQAAgDgCgDQgBgEgCgDQgDgDgEgBQgDgBgEAAQgDAAgDABg");
	this.shape_91.setTransform(187.2,7.9);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#14716E").s().p("AAPAeIAAgZIgdAAIAAAZIgOAAIAAg8IAOAAIAAAZIAdAAIAAgZIAOAAIAAA8g");
	this.shape_92.setTransform(179.5,7.9);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#14716E").s().p("AANAeIAAgUQgKADgFAAQgFAAgEgCIgIgDIgGgHQgBgDAAgGIAAgWIAOAAIAAAVIABAFIACAEQAEABAFAAQAHAAAGgBIAAgeIAOAAIAAA8g");
	this.shape_93.setTransform(172.1,7.9);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#14716E").s().p("AAPAeIAAgmIgfAmIgMAAIAAg8IAOAAIAAAnIAfgnIAMAAIAAA8g");
	this.shape_94.setTransform(165,7.9);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#14716E").s().p("AgbAeIAAg8IAiAAIAIABIAGAEIAEAFIABAHQAAAFgCAEQgDADgDABQAEABADADQADAEAAAFIgBAHQgCAEgCACQgCACgEABQgEACgFgBgAgNAUIARAAQAFAAACgBQADgCAAgFQAAgEgDgCQgDgCgEAAIgRAAgAgNgEIAQAAQAFAAABgCQADgBAAgEQAAgEgDgCQgCgCgEAAIgQAAg");
	this.shape_95.setTransform(157.9,7.9);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#14716E").s().p("AggAuIAAhZIAMAAIAAAKQAFgFAFgDIAGgDIAHAAQAGAAAGACQAFADAEAEQAEAFADAGQACAFAAAHQAAAGgCAGQgDAEgEAFQgEAFgFACQgGACgGABIgGgBIgHgCQgFgDgDgEIAAAlgAgFggIgGADQgEAEgDAFIAAAPQADAFAEACIAGADIAFACQAEAAADgCIAGgEIAFgFQABgEAAgEQAAgFgBgEIgFgGIgGgEQgDgBgEgBIgFABg");
	this.shape_96.setTransform(150.4,9.3);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#14716E").s().p("AgIAeQgGgCgFgEQgFgEgDgGIgCgHIAAgHQAAgEACgJQADgGAFgEIAKgHIAJgBIAIAAIAHADIAGAEIAEAFQAEAFABAHQABAHgCAEIgtAAIADAIIAGAFIAHACIAGABQAGABAFgCIAJgDIAAAMQgEACgGABIgMABQgGAAgGgCgAgEgSIgGADIgEAEIgCAHIAhAAIgBgEIgCgGQgCgDgDgBQgEgCgEAAIgFACg");
	this.shape_97.setTransform(142.7,7.9);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#14716E").s().p("AAPAeIAAgvIgdAAIAAAvIgOAAIAAg8IA5AAIAAA8g");
	this.shape_98.setTransform(135.3,7.9);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#14716E").s().p("AAaAeIAAg8IAOAAIAAA8gAgnAeIAAg8IAOAAIAAAVIARAAQAGAAADACQAEACADACIAFAEQACAEAAAFIgCAIIgFAHQgDACgEACQgDACgGgBgAgZATIAOAAQAHAAADgCQACgCAAgFQAAgFgCgDQgDgCgHAAIgOAAg");
	this.shape_99.setTransform(123.6,7.9);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#14716E").s().p("AggAuIAAhZIAMAAIAAAKQAEgFAGgDIAGgDIAGAAQAHAAAGACQAFADAEAEQAEAFADAGQACAFAAAHQAAAGgCAGQgDAEgEAFQgEAFgFACQgGACgHABIgFgBIgHgCQgFgDgDgEIAAAlgAgFggIgGADQgFAEgCAFIAAAPQACAFAFACIAGADIAFACQAEAAAEgCIAFgEIAFgFQABgEAAgEQAAgFgBgEIgFgGIgFgEQgEgBgEgBIgFABg");
	this.shape_100.setTransform(114.9,9.3);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#14716E").s().p("AAYAnIAAgRIgvAAIAAARIgOAAIAAgcIAJAAIAFgLIADgJQACgJAAgUIAvAAIAAAxIAJAAIAAAcgAgIgFIgFAQIAcAAIAAglIgUAAIgDAVg");
	this.shape_101.setTransform(106.5,8.7);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#14716E").s().p("AgIAeQgGgCgFgEQgFgEgDgGIgCgHIAAgHQAAgEACgJQADgGAFgEIAKgHIAJgBIAIAAIAHADIAGAEIAEAFQAEAFABAHQABAHgCAEIgtAAIADAIIAGAFIAHACIAGABQAGABAFgCIAJgDIAAAMQgEACgGABIgMABQgGAAgGgCgAgEgSIgGADIgEAEIgCAHIAhAAIgBgEIgCgGQgCgDgDgBQgEgCgEAAIgFACg");
	this.shape_102.setTransform(98.9,7.9);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#14716E").s().p("AgFA7IAAgbQgIAAgGgDQgHgCgFgEQgFgEgCgGIgCgGIgBgHQAAgEADgIQACgGAFgEQAFgEAHgDQAGgCAIAAIAAgbIALAAIAAAbQAIAAAHACQAGADAFAEQAFAEADAGQACAIAAAEIAAAHIgCAGQgDAGgFAEQgFAEgGACQgHADgIAAIAAAbgAAGAUIAKgBQAEgCADgDQADgCABgEQACgEAAgEQAAgDgCgDQgBgEgDgDQgDgDgEgBIgKgDgAgOgRQgEABgDADQgDADgCAEQgBADAAADQAAAEABAEQACAEADACQADADAEACIAJABIAAgoIgJADg");
	this.shape_103.setTransform(90.6,7.9);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#14716E").s().p("AgSAfQgEgBgDgCIgFgHQgCgDABgFQgBgGADgEQACgDAFgBQADgCAGgCIAJgBIAOACIAAgCIgBgGIgDgDQgCgCgDgBIgFgBQgGAAgGACIgLACIAAgMIALgDIANgBQAFAAAFABQAFACAEAEQAEADACAFQACAFAAAHIAAAUQAAABAAAAQAAABAAAAQABABAAAAQAAAAAAAAIAEABIADAAIAAAKQgDABgFAAQgFAAgDgCQgDgBgBgEQgFAEgGACQgEACgHAAIgIgBgAgNAEIgDAEQgCACAAACQAAAFAEACQAEADAEgBQAGAAACgCQAFgCADgDIAAgLIgLgBQgHAAgFACg");
	this.shape_104.setTransform(82.4,7.9);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#14716E").s().p("AAOAeIgTgZIgKAAIAAAZIgOAAIAAg8IAOAAIAAAZIAKAAIAQgZIAQAAIgWAeIAZAeg");
	this.shape_105.setTransform(75.7,7.9);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#14716E").s().p("AgEAGQgDgDAAgDQAAgDADgCQACgCACAAQADAAADACQACACAAADQAAADgCADQgDACgDAAQgCAAgCgCg");
	this.shape_106.setTransform(67.3,10.3);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#14716E").s().p("AgFA7IAAgbQgIAAgGgDQgHgCgFgEQgFgEgCgGIgCgGIgBgHQAAgEADgIQACgGAFgEQAFgEAHgDQAGgCAIAAIAAgbIALAAIAAAbQAIAAAHACQAGADAFAEQAFAEADAGQACAIAAAEIAAAHIgCAGQgDAGgFAEQgFAEgGACQgHADgIAAIAAAbgAAGAUIAKgBQAEgCADgDQADgCABgEQACgEAAgEQAAgDgCgDQgBgEgDgDQgDgDgEgBIgKgDgAgOgRQgEABgDADQgDADgCAEQgBADAAADQAAAEABAEQACAEADACQADADAEACIAJABIAAgoIgJADg");
	this.shape_107.setTransform(61,7.9);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#14716E").s().p("AgLAeQgGgCgFgEQgFgEgCgHIgCgGIgBgHQAAgEADgJQACgFAFgFQAFgEAGgCQAGgCAFAAQAGAAAGACQAGACAFAEQAEAFADAFQADAJAAAEIgBAHIgCAGQgDAHgEAEQgFAEgGACQgGACgGAAQgFAAgGgCgAgHgRIgGAEQgCADgCAEQgBADgBADQABAEABAEQACAEACACIAGAEQAEABADAAQADAAAEgBQAEgCADgCQACgCABgEQACgEAAgEQAAgDgCgDQgBgEgCgDQgDgDgEgBQgEgBgDAAQgDAAgEABg");
	this.shape_108.setTransform(52.5,7.9);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#14716E").s().p("AggAuIAAhZIAMAAIAAAKQAFgFAFgDIAGgDIAGAAQAHAAAGACQAFADAFAEQAEAFACAGQACAFAAAHQAAAGgCAGQgCAEgEAFQgFAFgFACQgGACgHABIgFgBIgGgCQgGgDgDgEIAAAlgAgFggIgGADQgFAEgCAFIAAAPQACAFAFACIAGADIAFACQAEAAAEgCIAFgEIAFgFQABgEAAgEQAAgFgBgEIgFgGIgFgEQgEgBgEgBIgFABg");
	this.shape_109.setTransform(44.8,9.3);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#14716E").s().p("AAPAeIAAgvIgdAAIAAAvIgOAAIAAg8IA5AAIAAA8g");
	this.shape_110.setTransform(36.9,7.9);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#14716E").s().p("AgKAPIAIgdIANAAIgLAdg");
	this.shape_111.setTransform(28.2,11.3);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#14716E").s().p("AgEAGQgDgDAAgDQAAgDADgCQACgCACAAQADAAADACQACACAAADQAAADgCADQgDACgDAAQgCAAgCgCg");
	this.shape_112.setTransform(25.4,10.3);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#14716E").s().p("AAVAeIAAgnIgRAZIgHAAIgRgZIAAAnIgOAAIAAg8IAOAAIAUAfIAVgfIAOAAIAAA8g");
	this.shape_113.setTransform(19.6,7.9);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#14716E").s().p("AgEAGQgDgDAAgDQAAgDADgCQACgCACAAQADAAADACQACACAAADQAAADgCADQgDACgDAAQgCAAgCgCg");
	this.shape_114.setTransform(10.7,10.3);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#14716E").s().p("AAYAnIAAgRIgvAAIAAARIgOAAIAAgcIAJAAIAFgLIADgJQACgJAAgUIAvAAIAAAxIAJAAIAAAcgAgHgFIgGAQIAbAAIAAglIgTAAIgCAVg");
	this.shape_115.setTransform(5,8.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,604.9,40.6);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#981661").s().p("AAhB1IAAhKIABgdIhEBnIguAAIAAizIAwAAIAABIIgBAeIBFhmIAtAAIAACzgAgXhLQgJgDgJgGIAAggQAJAGAMADQAJACALAAQAMAAAJgCQALgDAKgGIAAAgQgJAGgKADQgKADgNAAQgMAAgLgDg");
	this.shape.setTransform(333.6,9.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#981661").s().p("AgxBbQgNgDgMgGIAAguQAJAIAMADQALAEANAAQAKAAAJgBQAKgCAFgDQAIgEAFgGQAGgGACgKIhJAAIAAgmIBJAAQgDgJgGgHQgFgGgHgDQgFgDgKgCQgIgBgKAAQgNAAgLADQgNAEgJAHIAAguQAMgFAOgDQANgDAOAAIASABQAHACAJADQAIACAIAFIAPAKQAHAGAGAHQAFAIAEAJQAEAJADALQACALAAALQAAAMgDAKQgCALgEAIQgEAJgGAHQgFAHgHAGQgHAGgIAEQgIAEgJACQgWAGgMAAQgOAAgNgDg");
	this.shape_1.setTransform(315.4,12);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#981661").s().p("AhKBaIAAizIBIAAQAPAAAOADQAPADAKAIIAKAIIAHALQADAFABAIQACAHAAAJQAAAJgCAIQgBAHgDAEIgHALIgKAIQgKAHgPADQgOADgPAAIgYAAIAAA5gAgagGIAaAAQALAAAGgEQAEgDACgEQADgEAAgGQAAgGgDgEQgCgEgEgCQgGgEgLAAIgaAAg");
	this.shape_2.setTransform(298.7,12);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#981661").s().p("AAeBaIgphGIgXAAIAABGIgwAAIAAizIAwAAIAABFIAXAAIAmhFIA1AAIg4BYIA7Bbg");
	this.shape_3.setTransform(276,12);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#981661").s().p("AAhBaIAAhKIABgbIhEBlIguAAIAAizIAwAAIAABKIgBAcIBFhmIAtAAIAACzg");
	this.shape_4.setTransform(256.1,12);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#981661").s().p("AgMBYQgJgCgIgEQgIgEgHgGQgHgGgFgHQgGgHgEgJQgEgIgCgLQgCgKAAgMQAAgLACgLQACgLAEgJQAEgJAGgIQAFgHAHgGQAHgGAIgEQAIgFAJgCQALgEAWgCQAOAAAOADQANADAMAFIAAAuQgIgHgMgEQgMgEgMAAQgLAAgKADQgJADgIAHQgIAHgFAKQgEALAAAMQAAANAEAKQAFAJAIAGQAIAGAIADQAKADALAAQAOAAAMgFQANgEAHgHIAAAuQgMAGgNADQgNADgPAAQgWgCgMgEg");
	this.shape_5.setTransform(237.7,12);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#981661").s().p("AhBBXIAAgnQALADALAAQAIAAAGgCQAGgEADgGIADgHIhGh7IA1AAIAlBSIAhhSIA1AAIhCCKQgGANgGAIQgHAJgGAGQgHAEgIADQgJACgJAAQgMAAgSgFg");
	this.shape_6.setTransform(221.6,12.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#981661").s().p("AAvBaIgKgdIhJAAIgKAdIgxAAIBHizIAxAAIBHCzgAAXAXIgTgzQgDgIgBgKQAAAKgDAIIgTAzIAtAAg");
	this.shape_7.setTransform(203,12);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#981661").s().p("AAeBaIgqhGIgWAAIAABGIgwAAIAAizIAwAAIAABFIAWAAIAohFIA1AAIg5BYIA7Bbg");
	this.shape_8.setTransform(185.1,12);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#981661").s().p("AhKBaIAAizIBIAAQAPAAAOADQAPADAKAIIAKAIIAHALQADAFABAIQACAHAAAJQAAAJgCAIQgBAHgDAEIgHALIgKAIQgKAHgPADQgOADgPAAIgYAAIAAA5gAgagGIAaAAQALAAAGgEQAEgDACgEQADgEAAgGQAAgGgDgEQgCgEgEgCQgGgEgLAAIgaAAg");
	this.shape_9.setTransform(161.6,12);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#981661").s().p("AgVBcQgKgCgKgEQgJgEgHgFIgOgMQgGgGgFgIQgEgHgDgJQgDgIgCgJQgBgJAAgJQAAgIABgJQACgJADgJQADgIAEgIQAFgHAGgHQAGgGAIgFQAHgGAJgDQAKgEAKgCQALgCAKAAQAMAAAKACQALACAJAEQAJADAIAGQAHAFAGAGQAGAHAFAHQAEAIADAIQADAJACAJQABAJAAAIQAAAJgBAJQgCAJgDAIQgDAJgEAHQgFAIgGAGQgGAHgHAFQgIAFgJAEQgJAEgLACQgKACgMAAQgKAAgLgCgAgTgtQgJADgGAHQgGAHgDAJQgDAJAAAKQAAAKADAJQADAKAGAGQAGAHAJAEQAJAEAKAAQALAAAJgEQAJgEAGgHQAGgGADgKQADgJAAgKQAAgKgDgJQgDgJgGgHQgGgHgJgDQgJgEgLAAQgKAAgJAEg");
	this.shape_10.setTransform(141.9,12);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#981661").s().p("AgMBYQgJgCgIgEQgIgEgHgGQgHgGgFgHQgGgHgEgJQgEgIgCgLQgCgKAAgMQAAgLACgLQACgLAEgJQAEgJAGgIQAFgHAHgGQAHgGAIgEQAIgFAJgCQALgEAWgCQAOAAAOADQANADAMAFIAAAuQgIgHgMgEQgMgEgMAAQgLAAgKADQgJADgIAHQgIAHgFAKQgEALAAAMQAAANAEAKQAFAJAIAGQAIAGAIADQAKADALAAQAOAAAMgFQANgEAHgHIAAAuQgMAGgNADQgNADgPAAQgWgCgMgEg");
	this.shape_11.setTransform(123,12);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#981661").s().p("AgMBYQgJgCgIgEQgIgEgHgGQgHgGgFgHQgGgHgEgJQgEgIgCgLQgCgKAAgMQAAgLACgLQACgLAEgJQAEgJAGgIQAFgHAHgGQAHgGAIgEQAIgFAJgCQALgEAWgCQAOAAAOADQANADAMAFIAAAuQgIgHgMgEQgMgEgMAAQgLAAgKADQgJADgIAHQgIAHgFAKQgEALAAAMQAAANAEAKQAFAJAIAGQAIAGAIADQAKADALAAQAOAAAMgFQANgEAHgHIAAAuQgMAGgNADQgNADgPAAQgWgCgMgEg");
	this.shape_12.setTransform(106.1,12);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#981661").s().p("AhABaIAAizIB/AAIAAAqIhQAAIAAAbIBJAAIAAAnIhJAAIAAAeIBSAAIAAApg");
	this.shape_13.setTransform(90,12);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#981661").s().p("AgVBkIAAgWQgZgDgLgEIgPgHQgHgEgFgFQgGgFgFgGQgEgGgDgHQgDgHgCgIQgBgIAAgIQAAgIABgHQACgIADgHQADgHAEgHQAFgGAGgFQAFgFAHgEIAPgGQALgEAZgDIAAgWIAsAAIAAAWQANABAWAGIAPAHQAHAEAGAFIAKALQAEAGADAHQADAHACAIQABAIAAAHQAAAIgBAIQgCAIgDAHQgDAHgEAGIgKALQgGAFgHAEIgPAHQgWAGgNABIAAAWgAAXAnQALgBAIgFQAHgDAFgGQAEgFACgHQABgGAAgGQAAgGgBgFQgCgHgEgFQgFgGgHgEQgIgEgLgBgAgoghQgIAEgFAFQgEAFgCAHQgCAGAAAGQAAAGACAGQACAHAEAFQAFAGAIAEQAIAEALABIAAhNQgLABgIAEg");
	this.shape_14.setTransform(70.3,12);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#981661").s().p("AgVBcQgKgCgKgEQgJgEgHgFIgOgMQgGgGgFgIQgEgHgDgJQgDgIgCgJQgBgJAAgJQAAgIABgJQACgJADgJQADgIAEgIQAFgHAGgHQAGgGAIgFQAHgGAJgDQAKgEAKgCQALgCAKAAQAMAAAKACQALACAJAEQAJADAIAGQAHAFAGAGQAGAHAFAHQAEAIADAIQADAJACAJQABAJAAAIQAAAJgBAJQgCAJgDAIQgDAJgEAHQgFAIgGAGQgGAHgHAFQgIAFgJAEQgJAEgLACQgKACgMAAQgKAAgLgCgAgTgtQgJADgGAHQgGAHgDAJQgDAJAAAKQAAAKADAJQADAKAGAGQAGAHAJAEQAJAEAKAAQALAAAJgEQAJgEAGgHQAGgGADgKQADgJAAgKQAAgKgDgJQgDgJgGgHQgGgHgJgDQgJgEgLAAQgKAAgJAEg");
	this.shape_15.setTransform(48.4,12);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#981661").s().p("AhKBaIAAizIBIAAQAPAAAOADQAPADAKAIIAKAIIAHALQADAFABAIQACAHAAAJQAAAJgCAIQgBAHgDAEIgHALIgKAIQgKAHgPADQgOADgPAAIgYAAIAAA5gAgagGIAaAAQALAAAGgEQAEgDACgEQADgEAAgGQAAgGgDgEQgCgEgEgCQgGgEgLAAIgaAAg");
	this.shape_16.setTransform(29.8,12);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#981661").s().p("AAhBaIAAiJIhBAAIAACJIgwAAIAAizIChAAIAACzg");
	this.shape_17.setTransform(10.8,12);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,344.5,27.7);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ray();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,76,76);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#14716E").s().p("AAmBJIAAhZIAAgQIhMBpIgXAAIAAiQIAYAAIAABYIAAARIBNhpIAWAAIAACQg");
	this.shape.setTransform(582.9,9.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#14716E").s().p("AAmBJIAAhZIAAgQIhMBpIgXAAIAAiQIAYAAIAABYIAAARIBNhpIAWAAIAACQg");
	this.shape_1.setTransform(566.9,9.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#14716E").s().p("AgwBJIAAiQIBhAAIAAAVIhJAAIAAB7g");
	this.shape_2.setTransform(553.8,9.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#14716E").s().p("AgQBKQgJgCgHgDQgHgDgGgEIgLgKQgFgFgDgHIgGgMQgDgHgBgHIgBgOIABgNQABgHADgGIAGgOIAIgLIALgJIANgIQAHgDAJgBQAIgCAIAAQAJAAAJACQAIABAHADIANAIIALAJIAIALIAHAOQACAGABAHIABANIgBAOQgBAHgCAHIgHAMQgDAHgFAFIgLAKQgGAEgHADQgHADgIACQgJABgJAAQgIAAgIgBgAgLgyIgLACQgJAFgHAIQgGAGgEALQgDAJAAAJQAAAKADAJQAEAKAGAIQAHAHAJAEIALAEIALABQAJAAANgFQAKgEAHgHQAGgIAEgKQADgJAAgKQAAgJgDgJQgEgLgGgGQgHgIgKgFQgNgEgJAAg");
	this.shape_3.setTransform(538.6,9.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#14716E").s().p("AhDBHIAAgWQAEACAGAAQAEgBAEgDQAEgDADgFQAEgHAFgWQAFgWAEg8IBcAAIAACQIgYAAIAAh7IguAAQgGA/gHAXQgDAJgDAHQgEAHgEAFQgFAFgGADQgGADgHgBQgGABgIgDg");
	this.shape_4.setTransform(521.4,9.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#14716E").s().p("AgRBKQgIgCgHgDQgHgDgGgEIgLgKQgFgFgDgHIgHgMQgCgHgBgHIgBgOIABgNQABgHACgGIAHgOIAIgLIALgJIANgIQAHgDAIgBQAJgCAIAAQAJAAAIACQAJABAHADIANAIIALAJIAIALIAGAOQADAGABAHIABANIgBAOQgBAHgDAHIgGAMQgDAHgFAFIgLAKQgGAEgHADQgHADgJACQgIABgJAAQgIAAgJgBgAgLgyIgKACQgKAFgHAIQgHAGgDALQgDAJAAAJQAAAKADAJQADAKAHAIQAHAHAKAEIAKAEIALABQAJAAAOgFQAJgEAHgHQAGgIAEgKQADgJAAgKQAAgJgDgJQgEgLgGgGQgHgIgJgFQgOgEgJAAg");
	this.shape_5.setTransform(505.9,9.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#14716E").s().p("AAmBJIAAhZIAAgQIhMBpIgXAAIAAiQIAYAAIAABYIAAARIBNhpIAWAAIAACQg");
	this.shape_6.setTransform(489.4,9.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#14716E").s().p("AA2BZIAAghIhrAAIAAAhIgWAAIAAg3IARAAQAHgMAFgPQAEgMADgSQAEgVABgsIBcAAIAAB6IASAAIAAA3gAgRgLQgDAMgDALQgEANgFAJIBCAAIAAhkIgtAAQgDAlgDASg");
	this.shape_7.setTransform(473.1,11.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#14716E").s().p("Ag4BJIAAiQIA1AAQALAAALACQAMADAIAFIAHAGIAGAIIAEALIABAMIgBANIgEALQgCADgEADIgHAGQgIAGgMACQgLACgLAAIgdAAIAAAzgAggABIAeAAQAGAAAGgBQAHAAAFgDQAFgCADgGQADgFAAgIQAAgHgDgFQgDgGgFgCQgFgEgHgBIgMgBIgeAAg");
	this.shape_8.setTransform(459.8,9.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#14716E").s().p("AAxBJIgNggIhHAAIgNAgIgZAAIA+iQIAYAAIA9CQgAAcAUIgag8IgCgIIgBAIIgaA8IA3AAg");
	this.shape_9.setTransform(444.7,9.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#14716E").s().p("AAiBJIgqg/IgdAAIAAA/IgYAAIAAiQIAYAAIAAA8IAdAAIAng8IAbAAIgxBHIA0BJg");
	this.shape_10.setTransform(431,9.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#14716E").s().p("AAmBJIAAhZIAAgQIhMBpIgXAAIAAiQIAYAAIAABYIAAARIBNhpIAWAAIAACQg");
	this.shape_11.setTransform(410.1,9.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#14716E").s().p("AgKBJIAAh7IgxAAIAAgVIB2AAIAAAVIgwAAIAAB7g");
	this.shape_12.setTransform(395.8,9.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#14716E").s().p("AgJBHIgNgGIgMgJQgGgEgEgGQgFgGgDgGQgDgIgCgHQgBgJAAgJQAAgHABgJQACgJADgHQADgHAFgGIAKgLQAFgFAHgDIANgGIALgEIAPgBQALAAAKADQALACAJAEIAAAYQgHgFgKgEQgKgCgKAAQgLAAgKADQgIADgIAHQgKAKgDAHQgDAFgBAGQgBAHAAAFQAAAHABAFQABAGADAFQADAHAKAJQAIAHAIADQAKADALABQAMAAAJgEQAKgDAHgFIAAAXQgJAFgLADQgLACgLAAQgRgBgJgDg");
	this.shape_13.setTransform(382.6,9.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#14716E").s().p("AAxBJIgNggIhHAAIgNAgIgZAAIA+iQIAYAAIA9CQgAAcAUIgag8IgCgIIgBAIIgaA8IA3AAg");
	this.shape_14.setTransform(368.8,9.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#14716E").s().p("AhDBHIAAgWQAEACAGAAQAEgBAEgDQAEgDADgFQAEgHAFgWQAFgWAEg8IBcAAIAACQIgYAAIAAh7IguAAQgGA/gHAXQgDAJgDAHQgEAHgEAFQgFAFgGADQgGADgHgBQgGABgIgDg");
	this.shape_15.setTransform(352.6,9.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#14716E").s().p("Ag4BJIAAiQIBmAAIAAAVIhOAAIAAAjIAiAAQALABAJABQAKADAIAEQAIAFAFAHIADAKIABAMIgBAMIgDAKQgFAJgIAFQgIAFgKACQgJACgLAAgAggAzIAiAAIALgBQAGgBAEgCQAFgDADgEQACgFAAgHQAAgHgDgFQgCgEgFgDQgEgCgGgCIgLAAIgiAAg");
	this.shape_16.setTransform(339.1,9.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#14716E").s().p("AgRBKQgIgCgHgDQgHgDgGgEIgLgKQgFgFgDgHIgHgMQgCgHgBgHIgBgOIABgNQABgHACgGIAHgOIAIgLIALgJIANgIQAHgDAIgBQAJgCAIAAQAJAAAIACQAJABAHADIANAIIALAJIAIALIAGAOQADAGABAHIABANIgBAOQgBAHgDAHIgGAMQgDAHgFAFIgLAKQgGAEgHADQgHADgJACQgIABgJAAQgIAAgJgBgAgLgyIgLACQgJAFgHAIQgGAGgEALQgDAJAAAJQAAAKADAJQAEAKAGAIQAHAHAJAEIALAEIALABQAJAAAOgFQAJgEAHgHQAGgIAEgKQADgJAAgKQAAgJgDgJQgEgLgGgGQgHgIgJgFQgOgEgJAAg");
	this.shape_17.setTransform(323.1,9.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#14716E").s().p("AgcBJQgNgCgOgFIAAgXQANAGANACQAMACAOAAIALgBQAHgBAFgDQAFgCADgFQADgFAAgGQAAgGgCgFQgDgEgFgDQgEgCgHgBIgKgBIgfAAIAAgUIAdAAIAKgBQAFgCAEgCQAEgCACgEQACgEAAgFQAAgFgCgEQgDgEgEgDIgLgDIgLgBQgMAAgLACQgLADgMAGIAAgYQAMgFALgCQAMgCANAAQAKAAAKADQALACAHAEQAHAGAFAHQADAIABAJQgBAHgBAEQgCAGgEAEQgDAEgEADIgJAFQAFABAGABQAFADAEAEQAEAFACAGQAEAHAAAIQAAAGgCAFIgEAJQgFAIgIAFQgJAFgLACQgJACgKAAQgNAAgNgCg");
	this.shape_18.setTransform(303.3,9.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#14716E").s().p("AAmBJIAAhZIAAgQIhMBpIgXAAIAAiQIAYAAIAABYIAAARIBNhpIAWAAIAACQg");
	this.shape_19.setTransform(288.8,9.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#14716E").s().p("AA0BJIAAiQIAYAAIAACQgAhLBJIAAiQIAYAAIAAAxIAdAAQANABAJACQAMACAIAGIAHAGIAGAGIAEALIABANIgBAMIgEAKQgCAFgEAEIgHAHQgIAEgMADQgJACgNABgAgzAzIAeAAQAIAAAGgCQAHgBADgCQAFgEADgEQADgFAAgIQAAgIgDgGQgDgFgFgDQgDgCgHgBIgOAAIgeAAg");
	this.shape_20.setTransform(266.5,9.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#14716E").s().p("AgJBHIgNgGIgMgJQgGgEgEgGQgFgGgDgGQgDgIgCgHQgBgJAAgJQAAgHABgJQACgJADgHQADgHAFgGIAKgLQAFgFAHgDIANgGIALgEIAPgBQALAAAKADQALACAJAEIAAAYQgHgFgKgEQgKgCgKAAQgLAAgKADQgIADgIAHQgKAKgDAHQgDAFgBAGQgBAHAAAFQAAAHABAFQABAGADAFQADAHAKAJQAIAHAIADQAKADALABQAMAAAJgEQAKgDAHgFIAAAXQgJAFgLADQgLACgLAAQgRgBgJgDg");
	this.shape_21.setTransform(250.3,9.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#14716E").s().p("AgQBKQgJgCgHgDQgHgDgHgEIgKgKQgFgFgEgHIgFgMQgDgHgBgHIgBgOIABgNQABgHADgGIAFgOQAEgFAFgGIAKgJIAOgIQAHgDAJgBQAIgCAIAAQAJAAAJACQAIABAHADIAOAIIAKAJQAFAGAEAFIAGAOQACAGABAHIABANIgBAOQgBAHgCAHIgGAMQgEAHgFAFIgKAKQgHAEgHADQgHADgIACQgJABgJAAQgIAAgIgBgAgLgyIgLACQgJAFgHAIQgHAGgDALQgDAJAAAJQAAAKADAJQADAKAHAIQAHAHAJAEIALAEIALABQAIAAAOgFQAKgEAHgHQAGgIAEgKQADgJAAgKQAAgJgDgJQgEgLgGgGQgHgIgKgFQgOgEgIAAg");
	this.shape_22.setTransform(235,9.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#14716E").s().p("Ag4BJIAAiQIA1AAQALAAALACQAMADAIAFIAHAGIAGAIIAEALIABAMIgBANIgEALQgCADgEADIgHAGQgIAGgMACQgLACgLAAIgdAAIAAAzgAggABIAeAAQAGAAAGgBQAHAAAFgDQAFgCADgGQADgFAAgIQAAgHgDgFQgDgGgFgCQgFgEgHgBIgMgBIgeAAg");
	this.shape_23.setTransform(220.1,9.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#14716E").s().p("AAlBJIAAh7IhJAAIAAB7IgYAAIAAiQIB5AAIAACQg");
	this.shape_24.setTransform(204.7,9.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#14716E").s().p("AgQBKQgJgCgHgDQgHgDgGgEIgLgKIgJgMIgFgMQgDgHgBgHIgBgOIABgNQABgHADgGIAFgOIAJgLIALgJIANgIQAHgDAJgBQAIgCAIAAQAJAAAJACQAIABAHADIAOAIIAKAJIAIALIAHAOQACAGABAHIABANIgBAOQgBAHgCAHIgHAMQgDAHgFAFIgKAKQgHAEgHADQgHADgIACQgJABgJAAQgIAAgIgBgAgLgyIgLACQgJAFgHAIQgHAGgDALQgDAJAAAJQAAAKADAJQADAKAHAIQAHAHAJAEIALAEIALABQAIAAAOgFQAKgEAHgHQAHgIADgKQADgJAAgKQAAgJgDgJQgDgLgHgGQgHgIgKgFQgOgEgIAAg");
	this.shape_25.setTransform(188.4,9.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#14716E").s().p("Ag5BJIAAiQIA8AAQALAAAJACQAKACAGAFQAHAFADAGQAEAHAAAKQAAAGgCAFQgCAFgDAEIgHAIIgJADIAKADQAFADAEAEQAEAEADAHQACAGAAAIIgBAMIgEAJQgFAHgJAEQgHAFgLACQgIABgKABgAghA0IAiAAIAMgBIALgDQAFgCACgFQADgEAAgIQAAgGgDgFQgCgEgFgDQgEgCgGgBIgKAAIglAAgAghgLIAkAAIAKgBQAFgBADgCQAEgDACgEQABgDAAgGQAAgFgBgEQgCgEgEgCQgEgCgFgCQgFgBgHAAIghAAg");
	this.shape_26.setTransform(173.1,9.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#14716E").s().p("AgyBJIAAiQIBjAAIAAAVIhKAAIAAAoIBEAAIAAAUIhEAAIAAApIBLAAIAAAWg");
	this.shape_27.setTransform(154.5,9.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#14716E").s().p("AA0BJIAAiQIAYAAIAACQgAhLBJIAAiQIAYAAIAAAxIAdAAQANABAJACQAMACAIAGIAHAGIAGAGIAEALIABANIgBAMIgEAKQgCAFgEAEIgHAHQgIAEgMADQgJACgNABgAgzAzIAeAAQAIAAAGgCQAHgBADgCQAFgEADgEQADgFAAgIQAAgIgDgGQgDgFgFgDQgDgCgHgBIgOAAIgeAAg");
	this.shape_28.setTransform(138.3,9.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#14716E").s().p("AA0BJIAAhkIgtBCIgNAAIguhDIAABlIgXAAIAAiQIAVAAIA2BRIA3hRIAWAAIAACQg");
	this.shape_29.setTransform(119.5,9.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#14716E").s().p("AAmBJIAAhZIAAgQIhMBpIgXAAIAAiQIAYAAIAABYIAAARIBNhpIAWAAIAACQg");
	this.shape_30.setTransform(102,9.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#14716E").s().p("AAiBJIAAg3QgKADgKABQgKACgIABQgMAAgKgEQgKgDgHgGQgHgHgEgHQgDgJAAgNIAAgvIAYAAIAAAvQAAAIACAFQADAFAEAEQAFACAHABIAMABQAJAAAIgBQAJgBAIgDIAAhEIAYAAIAACQg");
	this.shape_31.setTransform(86.4,9.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#14716E").s().p("AAxBJIgNggIhHAAIgNAgIgZAAIA+iQIAYAAIA9CQgAAcAUIgag8IgCgIIgBAIIgaA8IA3AAg");
	this.shape_32.setTransform(73.2,9.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#14716E").s().p("AAmBJIAAg+IhLAAIAAA+IgYAAIAAiQIAYAAIAAA+IBLAAIAAg+IAYAAIAACQg");
	this.shape_33.setTransform(57.6,9.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#14716E").s().p("AgcBJQgNgCgNgFIAAgXQAMAGAOACQALACANAAIAMgBQAHgBAEgDQAGgCADgFQADgFAAgGQAAgGgDgFQgCgEgFgDQgEgCgHgBIgKgBIggAAIAAgUIAeAAIAKgBQAGgCADgCQAEgCACgEQACgEABgFQgBgFgCgEQgCgEgFgDIgKgDIgMgBQgMAAgKACQgMADgMAGIAAgYQAMgFAMgCQALgCAMAAQALAAAKADQALACAHAEQAIAGADAHQAEAIABAJQgBAHgCAEQgBAGgDAEQgDAEgFADIgJAFQAGABAEABQAGADAEAEQAFAFACAGQACAHAAAIQABAGgCAFIgEAJQgEAIgKAFQgHAFgMACQgKACgIAAQgOAAgNgCg");
	this.shape_34.setTransform(43.2,9.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#14716E").s().p("AAxBJIgNggIhHAAIgNAgIgZAAIA+iQIAYAAIA9CQgAAcAUIgag8IgCgIIgBAIIgaA8IA3AAg");
	this.shape_35.setTransform(24.3,9.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#14716E").s().p("AAmBJIAAg+IhLAAIAAA+IgYAAIAAiQIAYAAIAAA+IBLAAIAAg+IAYAAIAACQg");
	this.shape_36.setTransform(8.7,9.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,591.8,22.4);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#14716E").s().p("AgKBJIAAh7IgwAAIAAgVIB1AAIAAAVIgvAAIAAB7g");
	this.shape.setTransform(496.7,9.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#14716E").s().p("AAIBKIgNgEQgGgDgGgDQgGgEgEgEIgJgKIgGgLQgEgHgDgRIgbAAIAAA+IgYAAIAAiQIAYAAIAAA+IAbAAQABgJAGgQIAGgLIAJgJQAEgFAGgDIAMgHQAFgCAIgBQAIgCAIAAQAKAAAIACQAJABAHADIANAIIALAJIAIALIAGAOIAEANIABANIgBAOIgEAOIgGAMIgIAMIgLAKQgGAEgHADQgHADgJACQgIABgKAAIgQgBgAAMgyIgLACQgIAFgGAIQgHAGgDALQgDAJAAAJQAAAKADAJQADAKAHAIQAGAHAIAEIALAEIAMABQAJAAAOgFQAKgEAHgHQAGgIADgKQAEgJAAgKQAAgJgEgJQgDgLgGgGQgHgIgKgFQgOgEgJAAg");
	this.shape_1.setTransform(480,9.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#14716E").s().p("AAxBJIgNggIhHAAIgNAgIgZAAIA+iQIAYAAIA9CQgAAcAUIgag8IgCgIIgBAIIgaA8IA3AAg");
	this.shape_2.setTransform(460.5,9.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#14716E").s().p("AAiBJIAAg3QgKADgKABQgKACgIABQgMAAgKgEQgKgDgHgGQgHgHgEgHQgDgJAAgNIAAgvIAYAAIAAAvQAAAIACAFQADAFAEAEQAFACAHABIAMABQAJAAAIgBQAJgBAIgDIAAhEIAYAAIAACQg");
	this.shape_3.setTransform(445.3,9.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#14716E").s().p("AgxBJIAAiQIBiAAIAAAVIhKAAIAAAoIBEAAIAAAUIhEAAIAAApIBLAAIAAAWg");
	this.shape_4.setTransform(432.5,9.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#14716E").s().p("Ag5BJIAAiQIA8AAQALAAAJACQAKACAGAFQAHAFADAGQAEAHAAAKQAAAGgCAFQgCAFgDAEIgHAIIgJADIAKADQAFADAEAEQAEAEADAHQACAGAAAIIgBAMIgEAJQgFAHgJAEQgHAFgLACQgIABgKABgAghA0IAiAAIAMgBIALgDQAFgCACgFQADgEAAgIQAAgGgDgFQgCgEgFgDQgEgCgGgBIgKAAIglAAgAghgLIAkAAIAKgBQAFgBADgCQAEgDACgEQABgDAAgGQAAgFgBgEQgCgEgEgCQgEgCgFgCQgFgBgHAAIghAAg");
	this.shape_5.setTransform(418.9,9.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#14716E").s().p("AgKBJIAAh7IgxAAIAAgVIB3AAIAAAVIgxAAIAAB7g");
	this.shape_6.setTransform(405,9.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#14716E").s().p("AgRBKQgIgCgHgDQgHgDgGgEIgLgKQgFgFgDgHIgHgMQgCgHgBgHIgBgOIABgNQABgHACgGIAHgOIAIgLIALgJIANgIQAHgDAIgBQAJgCAIAAQAJAAAIACQAJABAHADIANAIIALAJIAJALIAFAOQADAGABAHIABANIgBAOQgBAHgDAHIgFAMIgJAMIgLAKQgGAEgHADQgHADgJACQgIABgJAAQgIAAgJgBgAgLgyIgKACQgKAFgHAIQgHAGgDALQgDAJAAAJQAAAKADAJQADAKAHAIQAHAHAKAEIAKAEIALABQAJAAAOgFQAJgEAHgHQAHgIADgKQADgJAAgKQAAgJgDgJQgDgLgHgGQgHgIgJgFQgOgEgJAAg");
	this.shape_7.setTransform(390.8,9.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#981661").s().p("AAuBJIAAiQIAmAAIAACQgAhTBJIAAiQIAnAAIAAAuIATAAQAOgBALADQAKADAIAFIAIAHQADADACAFIAEAKIABAMIgBAOIgEAKQgCAFgDAEIgIAHQgIAGgKACQgLACgOABgAgsAnIAVAAQAKAAAFgDQADgDACgDQACgDAAgFQAAgEgCgEQgCgDgDgCQgFgDgKAAIgVAAg");
	this.shape_8.setTransform(368.1,9.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#981661").s().p("AgRBJIAAhuIgqAAIAAgiIB3AAIAAAiIgpAAIAABug");
	this.shape_9.setTransform(352,9.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#981661").s().p("Ag7BJIAAiQIA6AAQAMAAALACQAMADAIAGIAIAGQADAEACAFIAEALIABAMIgBAOIgEAJQgCAFgDAEIgIAGQgIAGgMACQgLACgMABIgTAAIAAAugAgUgFIAUAAQAJAAAFgDQADgCACgDQACgEAAgFQAAgEgCgEQgCgDgDgBQgFgEgJAAIgUAAg");
	this.shape_10.setTransform(339.1,9.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#981661").s().p("Ag0BJIAAiQIBnAAIAAAhIhAAAIAAAWIA6AAIAAAgIg6AAIAAAXIBCAAIAAAig");
	this.shape_11.setTransform(325.5,9.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#981661").s().p("AAbBJIAAhuIg0AAIAABuIgnAAIAAiQICBAAIAACQg");
	this.shape_12.setTransform(310.9,9.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#981661").s().p("AgJBIIgOgGIgMgIIgKgKQgFgGgDgHQgDgHgCgIQgCgJAAgKQAAgHACgJQACgJADgIQADgHAFgGQAEgGAGgFIAMgJQAGgDAHgCQAKgDARgCQAMAAAKADQALACAKAEIAAAlQgHgGgKgDQgJgDgKAAQgJAAgIADQgHADgGAEQgGAGgEAJQgEAIAAAJQAAALAEAIQAEAHAGAFQAGAFAHACQAIACAJAAQALAAAKgDQAKgDAGgGIAAAlQgKAFgKADQgLABgMAAQgSgBgJgCg");
	this.shape_13.setTransform(296.1,9.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#981661").s().p("AAZBJIgig5IgSAAIAAA5IgnAAIAAiQIAnAAIAAA3IASAAIAgg3IAqAAIguBHIAwBJg");
	this.shape_14.setTransform(283.5,9.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#981661").s().p("AgnBKQgLgDgJgFIAAglQAGAGAKADQAJADAKAAQAKAAAGgBQAIgBAEgCQAGgEAFgFQAFgEABgIIg6AAIAAgfIA5AAQgCgIgEgEQgEgFgHgDQgDgCgHgCIgQgBQgJAAgKACQgKADgHAGIAAglQAJgEAMgCQAKgDAMAAIAOABIAMAEQAHACAHADIAMAJIAJALQAFAGADAHQAEAIACAJQABAJAAAHQAAAKgBAJQgCAIgEAHIgIANIgJAKIgMAIIgOAGQgSADgJAAQgLAAgLgBg");
	this.shape_15.setTransform(268.7,9.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#981661").s().p("Ag0BJIAAiQIBnAAIAAAhIhAAAIAAAWIA6AAIAAAgIg6AAIAAAXIBCAAIAAAig");
	this.shape_16.setTransform(251.2,9.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#981661").s().p("AAuBJIAAiQIAmAAIAACQgAhTBJIAAiQIAnAAIAAAuIATAAQAOgBALADQAKADAIAFIAIAHQADADACAFIAEAKIABAMIgBAOIgEAKQgCAFgDAEIgIAHQgIAGgKACQgLACgOABgAgsAnIAVAAQAKAAAFgDQADgDACgDQACgDAAgFQAAgEgCgEQgCgDgDgCQgFgDgKAAIgVAAg");
	this.shape_17.setTransform(234.7,9.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#981661").s().p("Ag8BJIAAiQIBAAAQAMAAAJACQAKACAHAFQAGAEADAHQAEAHAAAKQAAAGgCAEQgBAFgCAEQgDAFgFADQgDADgGABIALADQAGADADAFQAEAEACAGQACAGAAAHQAAAGgCAGIgDAJQgFAIgJAEQgJAFgKACQgKACgLAAgAgVArIAYAAQAJAAAFgEQAFgEAAgIQAAgIgFgEQgFgDgJAAIgYAAgAgVgOIAVAAQAIAAAFgDQADgFAAgFQAAgHgDgEQgFgDgIAAIgVAAg");
	this.shape_18.setTransform(218.1,9.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#981661").s().p("AgRBKQgIgCgIgCQgHgEgGgDIgLgKQgFgFgDgHIgHgNIgDgOIgCgOIACgOIADgNIAHgOQADgFAFgFQAFgGAGgEQAGgFAHgCQAIgDAIgCQAJgCAIAAQAJAAAJACQAIACAIADQAHACAGAFQAGAEAFAGQAFAFAEAFQAEAHACAHIAEANIABAOIgBAOQgBAIgDAGQgCAIgEAFIgJAMQgFAFgGAFQgGADgHAEQgIACgIACQgJACgJgBQgIABgJgCgAgPgkQgHADgFAGQgFAFgDAHQgCAIAAAHQAAAIACAIQADAIAFAEQAFAGAHADQAHADAIAAQAJAAAHgDQAIgDAEgGQAFgEACgIQADgIAAgIQAAgHgDgIQgCgHgFgFQgEgGgIgDQgHgDgJAAQgIAAgHADg");
	this.shape_19.setTransform(202.2,9.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#981661").s().p("Ag7BJIAAiQIA6AAQAMAAALACQAMADAIAGIAIAGQADAEACAFIAEALIABAMIgBAOIgEAJQgCAFgDAEIgIAGQgIAGgMACQgLACgMABIgTAAIAAAugAgUgFIAUAAQAJAAAFgDQADgCACgDQACgEAAgFQAAgEgCgEQgCgDgDgBQgFgEgJAAIgUAAg");
	this.shape_20.setTransform(187.2,9.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#981661").s().p("AAbBJIAAg8IABgWIg3BSIglAAIAAiQIAnAAIAAA7IgBAXIA3hSIAkAAIAACQg");
	this.shape_21.setTransform(171.8,9.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#981661").s().p("AAqBJIAAhMIgfAuIgVAAIgeguIAABMIgnAAIAAiQIAlAAIAqBEIAshEIAlAAIAACQg");
	this.shape_22.setTransform(154.4,9.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#981661").s().p("Ag0BJIAAiQIBnAAIAAAhIhAAAIAAAWIA6AAIAAAgIg6AAIAAAXIBCAAIAAAig");
	this.shape_23.setTransform(134.5,9.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#981661").s().p("AAbBJIAAg8IABgWIg3BSIglAAIAAiQIAnAAIAAA7IgBAXIA3hSIAkAAIAACQg");
	this.shape_24.setTransform(119.8,9.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#981661").s().p("ABHBXIAAgdIiuAAIAAiQIAnAAIAABtIAlAAIAAhtIAlAAIAABtIAlAAIAAhtIAnAAIAABtIASAAIAABAg");
	this.shape_25.setTransform(100.9,11.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#981661").s().p("Ag0BGIAAggQAIADAJAAQAHAAAFgCQAFgCACgGIACgFIg5hjIAsAAIAdBDIAahDIArAAIg1BvQgEAKgGAHQgFAHgEAFQgGADgHADQgHABgHAAQgKAAgOgEg");
	this.shape_26.setTransform(81.9,9.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#981661").s().p("AAvBXIAAgdIhdAAIAAAdIgiAAIAAg/IARAAQAHgMAEgMQAFgNACgPQAEgTABgnIBmAAIAABuIATAAIAAA/gAgKgKIgFARQgDAJgFAIIAuAAIAAhMIgcAAQgCAdgDANg");
	this.shape_27.setTransform(66.1,11.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#981661").s().p("Ag0BGIAAggQAIADAJAAQAIAAAEgCQAFgCACgGIACgFIg5hjIAsAAIAdBDIAahDIArAAIg1BvQgEAKgGAHQgFAHgEAFQgGADgHADQgHABgHAAQgKAAgOgEg");
	this.shape_28.setTransform(52.3,9.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#981661").s().p("AAvBXIAAgdIhdAAIAAAdIgiAAIAAg/IARAAQAHgMAEgMQAFgNACgPQAEgTABgnIBmAAIAABuIATAAIAAA/gAgKgKIgFARQgDAJgFAIIAuAAIAAhMIgcAAQgCAdgDANg");
	this.shape_29.setTransform(36.4,11.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#981661").s().p("Ag0BJIAAiQIBnAAIAAAhIhAAAIAAAWIA6AAIAAAgIg6AAIAAAXIBCAAIAAAig");
	this.shape_30.setTransform(21.7,9.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#981661").s().p("Ag8BJIAAiQIBAAAQAMAAAKACQAJACAGAFQAHAEADAHQAEAHAAAKQAAAGgBAEQgCAFgDAEQgCAFgFADQgDADgGABIAMADQAFADADAFQAEAEACAGQACAGAAAHQAAAGgCAGIgDAJQgFAIgKAEQgHAFgMACQgJACgLAAgAgWArIAZAAQAJAAAFgEQAFgEAAgIQAAgIgFgEQgFgDgJAAIgZAAgAgVgOIAWAAQAHAAAEgDQAEgFABgFQgBgHgEgEQgEgDgHAAIgWAAg");
	this.shape_31.setTransform(8.3,9.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,503.8,22.4);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.preston();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,79,79);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#981661").s().p("AAhBaIAAhFIhBAAIAABFIgwAAIAAizIAwAAIAABFIBBAAIAAhFIAwAAIAACzg");
	this.shape.setTransform(441.3,12);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#981661").s().p("AgVBcQgKgCgKgEQgJgEgHgFIgOgMQgGgGgFgIQgEgHgDgJQgDgIgCgJQgBgJAAgJQAAgIABgJQACgJADgJQADgIAEgIQAFgHAGgHQAGgGAIgFQAHgGAJgDQAKgEAKgCQALgCAKAAQAMAAAKACQALACAJAEQAJADAIAGQAHAFAGAGQAGAHAFAHQAEAIADAIQADAJACAJQABAJAAAIQAAAJgBAJQgCAJgDAIQgDAJgEAHQgFAIgGAGQgGAHgHAFQgIAFgJAEQgJAEgLACQgKACgMAAQgKAAgLgCgAgTgtQgJADgGAHQgGAHgDAJQgDAJAAAKQAAAKADAJQADAKAGAGQAGAHAJAEQAJAEAKAAQALAAAJgEQAJgEAGgHQAGgGADgKQADgJAAgKQAAgKgDgJQgDgJgGgHQgGgHgJgDQgJgEgLAAQgKAAgJAEg");
	this.shape_1.setTransform(420.9,12);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#981661").s().p("AgMBYQgJgCgIgEQgIgEgHgGQgHgGgFgHQgGgHgEgJQgEgIgCgLQgCgKAAgMQAAgLACgLQACgLAEgJQAEgJAGgIQAFgHAHgGQAHgGAIgEQAIgFAJgCQALgEAWgCQAOAAAOADQANADAMAFIAAAuQgIgHgMgEQgMgEgMAAQgLAAgKADQgJADgIAHQgIAHgFAKQgEALAAAMQAAANAEAKQAFAJAIAGQAIAGAIADQAKADALAAQAOAAAMgFQANgEAHgHIAAAuQgMAGgNADQgNADgPAAQgWgCgMgEg");
	this.shape_2.setTransform(401.9,12);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#981661").s().p("AAhB1IAAhKIABgdIhEBnIguAAIAAizIAwAAIAABIIgBAeIBFhmIAtAAIAACzgAgXhLQgKgDgIgGIAAggQAJAGAMADQAKACAKAAQAMAAAJgCQALgDAKgGIAAAgQgJAGgKADQgKADgNAAQgNAAgKgDg");
	this.shape_3.setTransform(383.7,9.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#981661").s().p("AhABaIAAizICAAAIAAAqIhQAAIAAAbIBIAAIAAAnIhIAAIAAAeIBRAAIAAApg");
	this.shape_4.setTransform(366.2,12);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#981661").s().p("AA0BaIAAheIgnA5IgZAAIgng5IAABeIgwAAIAAizIAuAAIA1BVIA3hVIAtAAIAACzg");
	this.shape_5.setTransform(346.2,12);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#981661").s().p("AAhBaIAAhFIhBAAIAABFIgwAAIAAizIAwAAIAABFIBBAAIAAhFIAwAAIAACzg");
	this.shape_6.setTransform(319.3,12);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#981661").s().p("AgVBcQgKgCgKgEQgJgEgHgFIgOgMQgGgGgFgIQgEgHgDgJQgDgIgCgJQgBgJAAgJQAAgIABgJQACgJADgJQADgIAEgIQAFgHAGgHQAGgGAIgFQAHgGAJgDQAKgEAKgCQALgCAKAAQAMAAAKACQALACAJAEQAJADAIAGQAHAFAGAGQAGAHAFAHQAEAIADAIQADAJACAJQABAJAAAIQAAAJgBAJQgCAJgDAIQgDAJgEAHQgFAIgGAGQgGAHgHAFQgIAFgJAEQgJAEgLACQgKACgMAAQgKAAgLgCgAgTgtQgJADgGAHQgGAHgDAJQgDAJAAAKQAAAKADAJQADAKAGAGQAGAHAJAEQAJAEAKAAQALAAAJgEQAJgEAGgHQAGgGADgKQADgJAAgKQAAgKgDgJQgDgJgGgHQgGgHgJgDQgJgEgLAAQgKAAgJAEg");
	this.shape_7.setTransform(298.9,12);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#981661").s().p("AgWBaIAAiJIgzAAIAAgqICTAAIAAAqIgyAAIAACJg");
	this.shape_8.setTransform(280.6,12);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#981661").s().p("AgMBYQgJgCgIgEQgIgEgHgGQgHgGgFgHQgGgHgEgJQgEgIgCgLQgCgKAAgMQAAgLACgLQACgLAEgJQAEgJAGgIQAFgHAHgGQAHgGAIgEQAIgFAJgCQALgEAWgCQAOAAAOADQANADAMAFIAAAuQgIgHgMgEQgMgEgMAAQgLAAgKADQgJADgIAHQgIAHgFAKQgEALAAAMQAAANAEAKQAFAJAIAGQAIAGAIADQAKADALAAQAOAAAMgFQANgEAHgHIAAAuQgMAGgNADQgNADgPAAQgWgCgMgEg");
	this.shape_9.setTransform(264.3,12);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#981661").s().p("AhBBaIAAizICAAAIAAAqIhQAAIAAAbIBJAAIAAAnIhJAAIAAAeIBTAAIAAApg");
	this.shape_10.setTransform(248.3,12);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#981661").s().p("AhKBaIAAizIBIAAQAPAAAOADQAPADAKAIIAKAIIAHALQADAFABAIQACAHAAAJQAAAJgCAIQgBAHgDAEIgHALIgKAIQgKAHgPADQgOADgPAAIgYAAIAAA5gAgagGIAaAAQALAAAGgEQAEgDACgEQADgEAAgGQAAgGgDgEQgCgEgEgCQgGgEgLAAIgaAAg");
	this.shape_11.setTransform(231.9,12);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#981661").s().p("AAhBaIAAiJIhBAAIAACJIgwAAIAAizIChAAIAACzg");
	this.shape_12.setTransform(212.9,12);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#981661").s().p("AgRASQgEgDgCgEQgCgGAAgFQAAgFACgFQACgEAEgEQAHgGAKAAQALAAAHAGQAEAEACAEQACAFAAAFQAAAFgCAGQgCAEgEADQgHAHgLAAQgKAAgHgHg");
	this.shape_13.setTransform(194.1,18.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#981661").s().p("AhKBaIAAizIBIAAQAPAAAOADQAPADAKAIIAKAIIAHALQADAFABAIQACAHAAAJQAAAJgCAIQgBAHgDAEIgHALIgKAIQgKAHgPADQgOADgPAAIgYAAIAAA5gAgagGIAaAAQALAAAGgEQAEgDACgEQADgEAAgGQAAgGgDgEQgCgEgEgCQgGgEgLAAIgaAAg");
	this.shape_14.setTransform(184.3,12);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#981661").s().p("AhKBaIAAizIBIAAQAPAAAOADQAPADAKAIIAKAIIAHALQADAFABAIQACAHAAAJQAAAJgCAIQgBAHgDAEIgHALIgKAIQgKAHgPADQgOADgPAAIgYAAIAAA5gAgagGIAaAAQALAAAGgEQAEgDACgEQADgEAAgGQAAgGgDgEQgCgEgEgCQgGgEgLAAIgaAAg");
	this.shape_15.setTransform(161.6,12);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#981661").s().p("AgVBcQgKgCgKgEQgJgEgHgFIgOgMQgGgGgFgIQgEgHgDgJQgDgIgCgJQgBgJAAgJQAAgIABgJQACgJADgJQADgIAEgIQAFgHAGgHQAGgGAIgFQAHgGAJgDQAKgEAKgCQALgCAKAAQAMAAAKACQALACAJAEQAJADAIAGQAHAFAGAGQAGAHAFAHQAEAIADAIQADAJACAJQABAJAAAIQAAAJgBAJQgCAJgDAIQgDAJgEAHQgFAIgGAGQgGAHgHAFQgIAFgJAEQgJAEgLACQgKACgMAAQgKAAgLgCgAgTgtQgJADgGAHQgGAHgDAJQgDAJAAAKQAAAKADAJQADAKAGAGQAGAHAJAEQAJAEAKAAQALAAAJgEQAJgEAGgHQAGgGADgKQADgJAAgKQAAgKgDgJQgDgJgGgHQgGgHgJgDQgJgEgLAAQgKAAgJAEg");
	this.shape_16.setTransform(141.9,12);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#981661").s().p("AgMBYQgJgCgIgEQgIgEgHgGQgHgGgFgHQgGgHgEgJQgEgIgCgLQgCgKAAgMQAAgLACgLQACgLAEgJQAEgJAGgIQAFgHAHgGQAHgGAIgEQAIgFAJgCQALgEAWgCQAOAAAOADQANADAMAFIAAAuQgIgHgMgEQgMgEgMAAQgLAAgKADQgJADgIAHQgIAHgFAKQgEALAAAMQAAANAEAKQAFAJAIAGQAIAGAIADQAKADALAAQAOAAAMgFQANgEAHgHIAAAuQgMAGgNADQgNADgPAAQgWgCgMgEg");
	this.shape_17.setTransform(123,12);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#981661").s().p("AgMBYQgJgCgIgEQgIgEgHgGQgHgGgFgHQgGgHgEgJQgEgIgCgLQgCgKAAgMQAAgLACgLQACgLAEgJQAEgJAGgIQAFgHAHgGQAHgGAIgEQAIgFAJgCQALgEAWgCQAOAAAOADQANADAMAFIAAAuQgIgHgMgEQgMgEgMAAQgLAAgKADQgJADgIAHQgIAHgFAKQgEALAAAMQAAANAEAKQAFAJAIAGQAIAGAIADQAKADALAAQAOAAAMgFQANgEAHgHIAAAuQgMAGgNADQgNADgPAAQgWgCgMgEg");
	this.shape_18.setTransform(106.1,12);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#981661").s().p("AhABaIAAizIB/AAIAAAqIhQAAIAAAbIBJAAIAAAnIhJAAIAAAeIBSAAIAAApg");
	this.shape_19.setTransform(90,12);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#981661").s().p("AgVBkIAAgWQgZgDgLgEIgPgHQgHgEgFgFQgGgFgFgGQgEgGgDgHQgDgHgCgIQgBgIAAgIQAAgIABgHQACgIADgHQADgHAEgHQAFgGAGgFQAFgFAHgEIAPgGQALgEAZgDIAAgWIAsAAIAAAWQANABAWAGIAPAHQAHAEAGAFIAKALQAEAGADAHQADAHACAIQABAIAAAHQAAAIgBAIQgCAIgDAHQgDAHgEAGIgKALQgGAFgHAEIgPAHQgWAGgNABIAAAWgAAXAnQALgBAIgFQAHgDAFgGQAEgFACgHQABgGAAgGQAAgGgBgFQgCgHgEgFQgFgGgHgEQgIgEgLgBgAgoghQgIAEgFAFQgEAFgCAHQgCAGAAAGQAAAGACAGQACAHAEAFQAFAGAIAEQAIAEALABIAAhNQgLABgIAEg");
	this.shape_20.setTransform(70.3,12);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#981661").s().p("AgVBcQgKgCgKgEQgJgEgHgFIgOgMQgGgGgFgIQgEgHgDgJQgDgIgCgJQgBgJAAgJQAAgIABgJQACgJADgJQADgIAEgIQAFgHAGgHQAGgGAIgFQAHgGAJgDQAKgEAKgCQALgCAKAAQAMAAAKACQALACAJAEQAJADAIAGQAHAFAGAGQAGAHAFAHQAEAIADAIQADAJACAJQABAJAAAIQAAAJgBAJQgCAJgDAIQgDAJgEAHQgFAIgGAGQgGAHgHAFQgIAFgJAEQgJAEgLACQgKACgMAAQgKAAgLgCgAgTgtQgJADgGAHQgGAHgDAJQgDAJAAAKQAAAKADAJQADAKAGAGQAGAHAJAEQAJAEAKAAQALAAAJgEQAJgEAGgHQAGgGADgKQADgJAAgKQAAgKgDgJQgDgJgGgHQgGgHgJgDQgJgEgLAAQgKAAgJAEg");
	this.shape_21.setTransform(48.4,12);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#981661").s().p("AhKBaIAAizIBIAAQAPAAAOADQAPADAKAIIAKAIIAHALQADAFABAIQACAHAAAJQAAAJgCAIQgBAHgDAEIgHALIgKAIQgKAHgPADQgOADgPAAIgYAAIAAA5gAgagGIAaAAQALAAAGgEQAEgDACgEQADgEAAgGQAAgGgDgEQgCgEgEgCQgGgEgLAAIgaAAg");
	this.shape_22.setTransform(29.8,12);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#981661").s().p("AAhBaIAAiJIhBAAIAACJIgwAAIAAizIChAAIAACzg");
	this.shape_23.setTransform(10.8,12);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,452.1,27.7);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#14716E").s().p("AAaAeIAAg8IAOAAIAAA8gAgnAeIAAg8IAOAAIAAAVIARAAQAGAAADACQAEACADACIAFAEQACAEAAAFIgCAIIgFAHQgDACgEACQgDACgGgBgAgZATIAOAAQAHAAADgCQACgCAAgFQAAgFgCgDQgDgCgHAAIgOAAg");
	this.shape.setTransform(446.5,7.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#14716E").s().p("AgfAeIAAgMIADACQAEgBADgEQADgDABgHQACgHACgcIAtAAIAAA8IgNAAIAAgxIgTAAIgCATQgBALgDAFQgEAJgDACIgFADIgFABIgIgBg");
	this.shape_1.setTransform(437.5,8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#14716E").s().p("AgLAeQgGgCgFgEQgFgEgDgHIgBgGIgBgHQAAgEACgJQADgFAFgFQAFgEAGgCQAGgCAFAAQAGAAAGACQAGACAEAEQAFAFADAFQADAJAAAEIgBAHIgCAGQgDAHgFAEQgEAEgGACQgGACgGAAQgFAAgGgCgAgGgRIgHAEQgDADgBAEQgBADgBADQABAEABAEQABAEADACIAHAEQADABADAAQADAAAEgBQAEgCACgCQADgCABgEQACgEAAgEQAAgDgCgDQgBgEgDgDQgCgDgEgBQgEgBgDAAQgDAAgDABg");
	this.shape_2.setTransform(430.2,7.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#14716E").s().p("AAOAeIgTgZIgKAAIAAAZIgOAAIAAg8IAOAAIAAAZIAKAAIAQgZIAQAAIgWAeIAZAeg");
	this.shape_3.setTransform(423.3,7.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#14716E").s().p("AgrAeIAAg8IAOAAIAAAxIAYAAIAAgxIALAAIAAAxIAYAAIAAgxIAOAAIAAA8g");
	this.shape_4.setTransform(414.2,7.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#14716E").s().p("AAPArIAAgpIgfApIgMAAIAAg8IAOAAIAAAmIAfgmIAMAAIAAA8gAgJgbQgEgBgFgDIAAgLQAFADAFABIAIABIAJgBQAEgBAFgDIAAALQgDADgGABQgEABgFABQgEgBgFgBg");
	this.shape_5.setTransform(402.1,6.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#14716E").s().p("AgLAeQgHgCgEgEQgFgEgCgHIgCgGIgBgHQAAgEADgJQACgFAFgFQAEgEAHgCQAGgCAFAAQAGAAAGACQAGACAFAEQAEAFADAFQADAJAAAEIgBAHIgCAGQgDAHgEAEQgFAEgGACQgGACgGAAQgFAAgGgCgAgHgRIgGAEQgCADgCAEQgBADgBADQABAEABAEQACAEACACIAGAEQAEABADAAQADAAAEgBQAEgCADgCQACgCABgEQACgEAAgEQAAgDgCgDQgBgEgCgDQgDgDgEgBQgEgBgDAAQgDAAgEABg");
	this.shape_6.setTransform(394.4,7.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#14716E").s().p("AAOAeIgTgZIgKAAIAAAZIgOAAIAAg8IAOAAIAAAZIAKAAIAQgZIAQAAIgWAeIAZAeg");
	this.shape_7.setTransform(387.5,7.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#14716E").s().p("AgFAeQgFgCgFgDQgFgFgDgGIgCgGIAAgIIAAgGIACgHQACgEAGgGIALgHQAEgBAHAAIAKABQAEABAFADIAAAMQgEgCgEgBIgJgCIgIABIgGAEQgDADgBADQgDAEAAAEQAAAEACAFQACAEADACQADACACACIAIABIAKgBQAEgCAFgCIAAANIgKADIgMABQgFAAgFgCg");
	this.shape_8.setTransform(380.5,7.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#14716E").s().p("AAPAeIAAgZIgdAAIAAAZIgOAAIAAg8IAOAAIAAAZIAdAAIAAgZIAOAAIAAA8g");
	this.shape_9.setTransform(373.5,7.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#14716E").s().p("AAPAeIAAgmIgfAmIgMAAIAAg8IAOAAIAAAnIAfgnIAMAAIAAA8g");
	this.shape_10.setTransform(365.9,7.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#14716E").s().p("AAUAnIAAgRIg0AAIAAg8IAOAAIAAAwIAcAAIAAgwIAOAAIAAAwIAJAAIAAAdg");
	this.shape_11.setTransform(358.3,8.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#14716E").s().p("AAPAeIAAgmIgfAmIgMAAIAAg8IAOAAIAAAnIAfgnIAMAAIAAA8g");
	this.shape_12.setTransform(350.4,7.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#14716E").s().p("AAZAnIAAgRIgxAAIAAARIgMAAIAAgcIAIAAIAFgLIADgJQABgJABgUIAuAAIAAAxIAJAAIAAAcgAgHgFIgHAQIAdAAIAAglIgUAAIgCAVg");
	this.shape_13.setTransform(342.4,8.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#14716E").s().p("AgIAeQgGgCgFgEQgFgEgDgGIgCgHIAAgHQAAgEACgJQADgGAFgEIAKgHIAJgBIAIAAIAHADIAGAEIAEAFQAEAFABAHQABAHgCAEIgtAAIADAIIAGAFIAHACIAGABQAGABAFgCIAJgDIAAAMQgEACgGABIgMABQgGAAgGgCgAgEgSIgGADIgEAEIgCAHIAhAAIgBgEIgCgGQgCgDgDgBQgEgCgEAAIgFACg");
	this.shape_14.setTransform(334.8,7.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#14716E").s().p("AAgAtIAAg+IgcApIgHAAIgdgpIAAA+IgOAAIAAhZIANAAIAhAyIAigyIANAAIAABZg");
	this.shape_15.setTransform(325.4,6.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#14716E").s().p("AAPArIAAgpIgfApIgMAAIAAg8IAOAAIAAAmIAfgmIAMAAIAAA8gAgIgbQgFgBgEgDIAAgLQAEADAFABIAIABIAJgBQAFgBAEgDIAAALQgEADgFABQgEABgFABQgEgBgEgBg");
	this.shape_16.setTransform(312.7,6.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#14716E").s().p("AgLAeQgGgCgFgEQgFgEgDgHIgBgGIgBgHQAAgEACgJQADgFAFgFQAFgEAGgCQAGgCAFAAQAGAAAGACQAGACAFAEQAEAFADAFQADAJAAAEIgBAHIgCAGQgDAHgEAEQgFAEgGACQgGACgGAAQgFAAgGgCgAgGgRIgHAEQgDADgBAEQgBADgBADQABAEABAEQABAEADACIAHAEQADABADAAQADAAAEgBQAEgCACgCQADgCABgEQACgEAAgEQAAgDgCgDQgBgEgDgDQgCgDgEgBQgDgBgEAAQgDAAgDABg");
	this.shape_17.setTransform(305.1,7.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#14716E").s().p("AAOAeIgTgZIgKAAIAAAZIgOAAIAAg8IAOAAIAAAZIAKAAIAQgZIAQAAIgWAeIAZAeg");
	this.shape_18.setTransform(298.2,7.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#14716E").s().p("AgEAeQgHgCgEgDQgFgFgDgGIgCgGIgBgIIABgGIADgHQABgEAGgGIALgHQAEgBAGAAIAKABQAGABADADIAAAMQgCgCgGgBIgJgCIgHABIgFAEQgEADgCADQgCAEAAAEQABAEABAFQACAEADACQADACACACIAIABIAKgBQAEgCAEgCIAAANIgJADIgMABQgFAAgEgCg");
	this.shape_19.setTransform(291.1,7.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#14716E").s().p("AAYAnIAAgRIgwAAIAAARIgNAAIAAgcIAJAAIAFgLIADgJQACgJAAgUIAuAAIAAAxIAJAAIAAAcgAgIgFIgFAQIAcAAIAAglIgUAAIgDAVg");
	this.shape_20.setTransform(283.7,8.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#14716E").s().p("AggAuIAAhZIANAAIAAAKQAEgFAFgDIAGgDIAGAAQAHAAAGACQAFADAFAEQAEAFACAGQACAFAAAHQAAAGgCAGQgCAEgEAFQgFAFgFACQgGACgHABIgFgBIgGgCQgGgDgDgEIAAAlgAgFggIgFADQgGAEgCAFIAAAPQACAFAGACIAFADIAFACQAEAAAEgCIAFgEIAFgFQABgEAAgEQAAgFgBgEIgFgGIgFgEQgEgBgEgBIgFABg");
	this.shape_21.setTransform(275.8,9.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#14716E").s().p("AgSAfQgEgBgDgCIgFgHQgBgDgBgFQABgGACgEQACgDAEgBQAEgCAFgCIAKgBIAOACIAAgCIgBgGIgDgDQgCgCgDgBIgFgBQgHAAgFACIgKACIAAgMIAKgDIANgBQAFAAAFABQAGACADAEQAEADACAFQACAFAAAHIAAAUQAAABAAAAQAAABAAAAQABABAAAAQAAAAABAAIACABIAFAAIAAAKQgEABgFAAQgEAAgDgCQgEgBgCgEQgEAEgGACQgEACgHAAIgIgBgAgNAEIgDAEQgCACABACQgBAFAEACQADADAFgBQAFAAADgCQAEgCAEgDIAAgLIgLgBQgHAAgFACg");
	this.shape_22.setTransform(268.1,7.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#14716E").s().p("AgbAeIAAg8IAhAAIAJABIAGAEIAEAFIABAHQAAAFgCAEQgCADgEABQAEABADADQADAEAAAFIgBAHQgBAEgDACQgDACgDABQgEACgGgBgAgNAUIARAAQAFAAADgBQACgCAAgFQAAgEgDgCQgDgCgEAAIgRAAgAgNgEIAQAAQAFAAACgCQACgBAAgEQAAgEgCgCQgDgCgEAAIgQAAg");
	this.shape_23.setTransform(261.1,7.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#14716E").s().p("AggAuIAAhZIAMAAIAAAKQAEgFAGgDIAGgDIAHAAQAGAAAGACQAFADAEAEQAEAFADAGQACAFAAAHQAAAGgCAGQgDAEgEAFQgEAFgFACQgGACgGABIgGgBIgHgCQgFgDgDgEIAAAlgAgFggIgGADQgFAEgCAFIAAAPQACAFAFACIAGADIAFACQAEAAAEgCIAFgEIAFgFQABgEAAgEQAAgFgBgEIgFgGIgFgEQgEgBgEgBIgFABg");
	this.shape_24.setTransform(253.5,9.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#14716E").s().p("AgSAfQgEgBgDgCIgFgHQgCgDAAgFQAAgGADgEQACgDAEgBQAEgCAFgCIAKgBIAOACIAAgCIgBgGIgDgDQgCgCgDgBIgFgBQgGAAgHACIgKACIAAgMIAKgDIAPgBQAEAAAFABQAGACADAEQAEADACAFQACAFAAAHIAAAUQAAABAAAAQAAABAAAAQABABAAAAQAAAAAAAAIADABIAFAAIAAAKQgEABgFAAQgFAAgDgCQgDgBgCgEQgFAEgFACQgEACgHAAIgIgBgAgMAEIgEAEQgBACgBACQABAFADACQADADAFgBQAGAAACgCQAFgCADgDIAAgLIgLgBQgHAAgEACg");
	this.shape_25.setTransform(245.8,7.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#14716E").s().p("AgdAtIAAhZIA7AAIAAAOIgtAAIAABLg");
	this.shape_26.setTransform(240.3,6.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#14716E").s().p("AAPAeIAAgmIgfAmIgMAAIAAg8IAOAAIAAAnIAfgnIAMAAIAAA8g");
	this.shape_27.setTransform(229.3,7.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#14716E").s().p("AAPAeIAAgmIgfAmIgMAAIAAg8IAOAAIAAAnIAfgnIAMAAIAAA8g");
	this.shape_28.setTransform(221.7,7.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#14716E").s().p("AgWAeIAAg8IAtAAIAAANIgfAAIAAAvg");
	this.shape_29.setTransform(215.4,7.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#14716E").s().p("AgLAeQgGgCgFgEQgFgEgDgHIgBgGIgBgHQAAgEACgJQADgFAFgFQAFgEAGgCQAGgCAFAAQAGAAAGACQAGACAEAEQAFAFADAFQADAJAAAEIgBAHIgCAGQgDAHgFAEQgEAEgGACQgGACgGAAQgFAAgGgCgAgGgRIgHAEQgDADgBAEQgCADAAADQAAAEACAEQABAEADACIAHAEQADABADAAQAEAAADgBQAEgCACgCQADgCACgEQABgEAAgEQAAgDgBgDQgCgEgDgDQgCgDgEgBQgDgBgEAAQgDAAgDABg");
	this.shape_30.setTransform(208.4,7.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#14716E").s().p("AggAeIAAgMIAEACQAEgBADgEQADgDABgHQACgHACgcIAtAAIAAA8IgNAAIAAgxIgTAAIgCATQgBALgDAFQgEAJgDACIgEADIgGABIgJgBg");
	this.shape_31.setTransform(200.4,8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#14716E").s().p("AgLAeQgGgCgFgEQgFgEgDgHIgBgGIgBgHQAAgEACgJQADgFAFgFQAFgEAGgCQAGgCAFAAQAGAAAGACQAGACAEAEQAFAFADAFQADAJAAAEIgBAHIgCAGQgDAHgFAEQgEAEgGACQgGACgGAAQgFAAgGgCgAgGgRIgHAEQgDADgBAEQgCADAAADQAAAEACAEQABAEADACIAHAEQADABADAAQAEAAADgBQAEgCACgCQADgCACgEQABgEAAgEQAAgDgBgDQgCgEgDgDQgCgDgEgBQgDgBgEAAQgDAAgDABg");
	this.shape_32.setTransform(193.1,7.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#14716E").s().p("AAPAeIAAgmIgfAmIgMAAIAAg8IAOAAIAAAnIAfgnIAMAAIAAA8g");
	this.shape_33.setTransform(185.5,7.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#14716E").s().p("AAYAnIAAgRIgvAAIAAARIgOAAIAAgcIAJAAIAFgLIADgJQACgJAAgUIAvAAIAAAxIAJAAIAAAcgAgHgFIgHAQIAcAAIAAglIgTAAIgCAVg");
	this.shape_34.setTransform(177.5,8.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#14716E").s().p("AggAuIAAhZIAMAAIAAAKQAEgFAGgDIAHgDIAGAAQAGAAAGACQAGADADAEQAEAFADAGQACAFAAAHQAAAGgCAGQgDAEgEAFQgDAFgGACQgGACgGABIgGgBIgHgCQgEgDgEgEIAAAlgAgFggIgFADQgFAEgDAFIAAAPQADAFAFACIAFADIAFACQAEAAADgCIAHgEIADgFQACgEAAgEQAAgFgCgEIgDgGIgHgEQgDgBgEgBIgFABg");
	this.shape_35.setTransform(169.5,9.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#14716E").s().p("AgSAfQgEgBgDgCIgFgHQgBgDAAgFQAAgGACgEQACgDAFgBQADgCAGgCIAJgBIAOACIAAgCIgBgGIgDgDQgCgCgDgBIgFgBQgGAAgHACIgKACIAAgMIAKgDIAPgBQAEAAAFABQAFACAEAEQAEADACAFQACAFAAAHIAAAUQAAABAAAAQAAABAAAAQABABAAAAQAAAAAAAAIAEABIADAAIAAAKQgDABgFAAQgFAAgDgCQgDgBgBgEQgGAEgFACQgEACgHAAIgIgBgAgMAEIgEAEQgBACgBACQABAFADACQADADAFgBQAFAAADgCQAEgCAEgDIAAgLIgLgBQgHAAgEACg");
	this.shape_36.setTransform(161.9,7.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#14716E").s().p("AAOAeIgTgZIgKAAIAAAZIgOAAIAAg8IAOAAIAAAZIAKAAIAQgZIAQAAIgWAeIAZAeg");
	this.shape_37.setTransform(155.1,7.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#14716E").s().p("AgIAeQgGgCgFgEQgFgEgDgGIgCgHIAAgHQAAgEACgJQADgGAFgEIAKgHIAJgBIAIAAIAHADIAGAEIAEAFQAEAFABAHQABAHgCAEIgtAAIADAIIAGAFIAHACIAGABQAGABAFgCIAJgDIAAAMQgEACgGABIgMABQgGAAgGgCgAgEgSIgGADIgEAEIgCAHIAhAAIgBgEIgCgGQgCgDgDgBQgEgCgEAAIgFACg");
	this.shape_38.setTransform(144.7,7.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#14716E").s().p("AAPAeIAAgmIgfAmIgMAAIAAg8IAOAAIAAAnIAfgnIAMAAIAAA8g");
	this.shape_39.setTransform(137.4,7.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#14716E").s().p("AAPAeIAAgZIgdAAIAAAZIgOAAIAAg8IAOAAIAAAZIAdAAIAAgZIAOAAIAAA8g");
	this.shape_40.setTransform(129.8,7.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#14716E").s().p("AgIAeQgGgCgFgEQgFgEgDgGIgCgHIAAgHQAAgEACgJQADgGAFgEIAKgHIAJgBIAIAAIAHADIAGAEIAEAFQAEAFABAHQABAHgCAEIgtAAIADAIIAGAFIAHACIAGABQAGABAFgCIAJgDIAAAMQgEACgGABIgMABQgGAAgGgCgAgEgSIgGADIgEAEIgCAHIAhAAQAAgCgBgCIgCgGQgCgDgDgBQgEgCgEAAIgFACg");
	this.shape_41.setTransform(122.5,7.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#14716E").s().p("AggAeIAAgMIAFACQADgBADgEQACgDACgHQACgHACgcIAuAAIAAA8IgPAAIAAgxIgSAAIgCATQgBALgDAFQgEAJgDACIgEADIgGABIgJgBg");
	this.shape_42.setTransform(114.8,8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#14716E").s().p("AgIAeQgGgCgFgEQgFgEgDgGIgCgHIAAgHQAAgEACgJQADgGAFgEIAKgHIAJgBIAIAAIAHADIAGAEIAEAFQAEAFABAHQABAHgCAEIgtAAIADAIIAGAFIAHACIAGABQAGABAFgCIAJgDIAAAMQgEACgGABIgMABQgGAAgGgCgAgEgSIgGADIgEAEIgCAHIAhAAIgBgEIgCgGQgCgDgDgBQgEgCgEAAIgFACg");
	this.shape_43.setTransform(107.8,7.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#14716E").s().p("AAZAnIAAgRIgxAAIAAARIgMAAIAAgcIAIAAIAFgLIADgJQABgJABgUIAuAAIAAAxIAJAAIAAAcgAgIgFIgGAQIAdAAIAAglIgUAAIgDAVg");
	this.shape_44.setTransform(100,8.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#14716E").s().p("AgFAeIAAgvIgWAAIAAgNIA3AAIAAANIgWAAIAAAvg");
	this.shape_45.setTransform(93.5,7.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#14716E").s().p("AgLAeQgHgCgEgEQgFgEgCgHIgCgGIgBgHQAAgEADgJQACgFAFgFQAEgEAHgCQAGgCAFAAQAGAAAGACQAGACAFAEQAEAFADAFQADAJAAAEIgBAHIgCAGQgDAHgEAEQgFAEgGACQgGACgGAAQgFAAgGgCgAgHgRIgGAEQgCADgCAEQgBADgBADQABAEABAEQACAEACACIAGAEQAEABADAAQAEAAADgBQAEgCADgCQACgCABgEQACgEAAgEQAAgDgCgDQgBgEgCgDQgDgDgEgBQgDgBgEAAQgDAAgEABg");
	this.shape_46.setTransform(86.6,7.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#14716E").s().p("AgKAPIAIgdIANAAIgLAdg");
	this.shape_47.setTransform(77.9,11.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#14716E").s().p("AAeAtIgIgUIgrAAIgIAUIgQAAIAmhZIAOAAIAnBZgAARAMIgQgkIgBgFIAAAFIgQAkIAhAAg");
	this.shape_48.setTransform(72,6.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#14716E").s().p("AgjAtIAAhZIAkAAQAHAAAGACQAGABAEADQAEADACAEQACAFAAAFIgBAIIgDAFIgEAEIgGADIAGABQAEABACADQACADACAEQACAEAAAFIgBAHIgCAFQgDAFgGADQgEACgHACIgMABgAgUAgIAUAAIAIgBIAHgBQADgCABgCQACgDAAgFQAAgEgCgDQgBgDgDgBIgHgCIgGgBIgWAAgAgUgGIAVAAIAHgBQACAAADgCIADgEIABgFIgBgGQgBgDgCgBIgGgCIgHgBIgUAAg");
	this.shape_49.setTransform(63.1,6.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#14716E").s().p("AAgAtIAAg+IgcApIgHAAIgdgpIAAA+IgOAAIAAhZIANAAIAhAyIAigyIANAAIAABZg");
	this.shape_50.setTransform(52.5,6.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#14716E").s().p("AgKAPIAIgdIANAAIgLAdg");
	this.shape_51.setTransform(41.8,11.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#14716E").s().p("AgEAGQgDgDAAgDQAAgDADgCQACgCACAAQADAAADACQACACAAADQAAADgCADQgDACgDAAQgCAAgCgCg");
	this.shape_52.setTransform(39.1,10.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#14716E").s().p("AAPAeIAAgZIgdAAIAAAZIgOAAIAAg8IAOAAIAAAZIAdAAIAAgZIAOAAIAAA8g");
	this.shape_53.setTransform(33.8,7.9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#14716E").s().p("AgEAGQgDgDAAgDQAAgDADgCQACgCACAAQADAAADACQACACAAADQAAADgCADQgDACgDAAQgCAAgCgCg");
	this.shape_54.setTransform(25.4,10.3);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#14716E").s().p("AAVAeIAAgnIgRAZIgHAAIgRgZIAAAnIgOAAIAAg8IAOAAIAUAfIAVgfIAOAAIAAA8g");
	this.shape_55.setTransform(19.6,7.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#14716E").s().p("AgEAGQgDgDAAgDQAAgDADgCQACgCACAAQADAAADACQACACAAADQAAADgCADQgDACgDAAQgCAAgCgCg");
	this.shape_56.setTransform(10.7,10.3);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#14716E").s().p("AAYAnIAAgRIgvAAIAAARIgOAAIAAgcIAJAAIAFgLIADgJQACgJAAgUIAvAAIAAAxIAJAAIAAAcgAgHgFIgGAQIAbAAIAAglIgTAAIgCAVg");
	this.shape_57.setTransform(5,8.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,452.4,14.8);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgJAhQgHgCgFgFQgGgFgDgGIgCgHIgBgIIABgHIACgIQADgFAGgGQAFgEAHgCQAFgCAEAAIAKABIAIADIAHAEIAEAGIADAGIACAHQABAHgCAHIgqAAIADAFIAFADQAEACAIAAIAKgBQAFAAAEgCIAAASIgLACIgOABQgGAAgIgCgAgGgOQgDADAAAGIAUAAQABgEgCgDIgDgEIgGgBQgDAAgEADg");
	this.shape.setTransform(107,20.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgJAhQgHgCgFgFQgGgFgDgGIgCgHIgBgIIABgHIACgIQADgFAGgGQAFgEAHgCQAFgCAEAAIAKABIAIADIAHAEIAEAGIADAGIACAHQABAHgCAHIgqAAIADAFIAFADQAEACAIAAIAKgBQAFAAAEgCIAAASIgLACIgOABQgGAAgIgCgAgGgOQgDADAAAGIAUAAQABgEgCgDIgDgEIgGgBQgDAAgEADg");
	this.shape_1.setTransform(99.3,20.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAKAhIAAgYIgTAAIAAAYIgYAAIAAhBIAYAAIAAAYIATAAIAAgYIAYAAIAABBg");
	this.shape_2.setTransform(91.4,20.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgMAwQgHgCgFgEIgFgGIgDgIIgCgIIgBgLQAAgJACgFQABgHADgGQACgFAEgEIAJgHQAJgGAQgDIALgCQAFgCADgDIAAAWIgHADIgIACQgLABgEADQgFACgDAFQgCAFAAAEQADgEAEgCQAEgDAHAAQAGAAAFADQAFACAEADQAEAEACAEQACAGAAAIIgBAIIgCAHQgDAFgFAFQgFADgGACQgHACgHABQgGgBgGgCgAgFAGQgCABgCACQgBAEAAAFQAAAFABAEIAEAEQADACACAAQADAAADgCIADgEQACgEAAgFQAAgFgCgEIgDgDQgDgCgDAAQgCAAgDACg");
	this.shape_3.setTransform(83.2,18.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgNAhQgHgCgFgFQgGgEgCgHIgDgHIAAgIIAAgHIADgHQACgHAGgEQAFgFAHgCQAHgCAGAAQAHAAAHACQAHACAFAFQAFAEADAHIACAHIABAHIgBAIIgCAHQgDAHgFAEQgFAFgHACQgHACgHAAQgGAAgHgCgAgFgMIgEADQgDAEAAAFQAAAGADAEIAEADIAFABIAGgBIAEgDQADgEAAgGQAAgFgDgEIgEgDQgDgBgDAAQgCAAgDABg");
	this.shape_4.setTransform(75,20.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AglAyIAAhgIAVAAIAAAJQADgFAGgDIAGgDIAGgBIAIABIAHADQAGACAEAGQAEAFACAGQACAGAAAHQAAAHgCAGQgCAFgEAFQgEAFgGADIgHACIgIABQgFAAgFgCQgFgCgDgEIAAAlgAgIgaQgDACgCADIAAAQQACADADACQAEABAEAAQACAAADgBQADAAACgCIACgFIABgGIgBgGIgCgFIgFgEIgFgBQgEAAgEADg");
	this.shape_5.setTransform(66.6,21.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAVAqIAAgSIgpAAIAAASIgWAAIAAgjIAKAAIAEgJIADgMIACgbIA3AAIAAAwIALAAIAAAjgAgDgGQgCAGgDAHIARAAIAAgeIgLAAQAAAKgBAHg");
	this.shape_6.setTransform(57.5,21.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgNAhQgHgCgFgFQgGgEgCgHIgDgHIAAgIIAAgHIADgHQACgHAGgEQAFgFAHgCQAHgCAGAAQAHAAAHACQAHACAFAFQAFAEADAHIACAHIABAHIgBAIIgCAHQgDAHgFAEQgFAFgHACQgHACgHAAQgGAAgHgCgAgFgMIgEADQgDAEAAAFQAAAGADAEIAEADIAFABIAGgBIAEgDQADgEAAgGQAAgFgDgEIgEgDQgDgBgDAAQgCAAgDABg");
	this.shape_7.setTransform(48.7,20.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AASAwIAAhJIgjAAIAABJIgaAAIAAhgIBXAAIAABgg");
	this.shape_8.setTransform(39.2,18.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#981661").s().p("An5DMQhVAAg7g8Qg8g7AAhVIAAAAQAAhUA8g8QA7g7BVAAIPyAAQBWAAA7A7QA8A8AABUIAAAAQAABVg8A7Qg7A8hWAAg");
	this.shape_9.setTransform(71.1,20.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,142.1,41);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.epic();
	this.instance.setTransform(0,0,0.844,0.844);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100.5,62.5);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.logoheart();
	this.instance.setTransform(0,0,0.669,0.669);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,62.9,61.6);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pfizerlogo();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,79,46);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.back();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,750,501);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bubles();
	this.instance.setTransform(941.6,589.6,1,1,-70.1);

	this.instance_1 = new lib.bubles();
	this.instance_1.setTransform(809,723.7,1,1,-104.1);

	this.instance_2 = new lib.bubles();
	this.instance_2.setTransform(285.5,589.6,1,1,-70.1);

	this.instance_3 = new lib.bubles();
	this.instance_3.setTransform(152.8,723.7,1,1,-104.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1544.1,730.4);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhmDHIBLlkIhuAAIAJgpIELAAIgIApIhwAAIhKFkg");
	this.shape.setTransform(170.8,41.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AA8DHIg5ilIhDAAIgjClIgvAAIBVmNIBVAAQB6AAAABkQABBfhlAaIBBCwgAg3gFIAtAAQAzAAAdgXQAdgXAAgsQgBgggSgQQgSgPgqAAIgrAAg");
	this.shape_1.setTransform(137,41.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AiNDHIBUmNIDHAAIgJApIiYAAIgbCBICOAAIgIAnIiPAAIgfCTICZAAIgJApg");
	this.shape_2.setTransform(107.9,41.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AiRDHIBUmNIBYAAQA7AAAeAaQAeAaAAAzQAABDgtAjQgtAjhUABIglAAIgiCcgAg5ACIAlAAQA5AAAegWQAfgZAAgxQAAghgTgQQgTgPgnAAIgrAAg");
	this.shape_3.setTransform(76.7,41.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AA5DHIg5ivIiCCvIgzAAICjjRIhIi8IAvAAIA1CaIB6iaIAyAAIiXC+IBMDPg");
	this.shape_4.setTransform(46,41.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#981661").s().p("AiNDHIBUmNIDHAAIgJApIiYAAIgbCBICOAAIgIAnIiPAAIgfCTICZAAIgJApg");
	this.shape_5.setTransform(18.6,41.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,181.8,80.3);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhhDJQgWgEgTgJIAAguQAtAWAwAAQAtAAAYgUQAagVAAgkQAAgVgPgQQgPgRglgWQgogVgQgYQgRgXABggQgBgzAlgfQAkghA4AAQAbAAAYAFQAXAGAaAMIgSApQgSgKgXgHQgWgFgTAAQgkgBgUAUQgXASAAAhQAAAPAFAKQAEALALAJQAJAKAcAQQAoAXAOANQANAOAIAQQAHARAAAVQAAA7gmAfQgnAghDAAQgdAAgXgEg");
	this.shape.setTransform(332.6,41.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AiNDHIBUmNIDHAAIgJApIiYAAIgbCBICOAAIgIAnIiPAAIgfCTICZAAIgJApg");
	this.shape_1.setTransform(305.6,41.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhsDHIgsmNIAvAAIAaD8QAGA1gBAmIACAAQAQgnAcg1ICBj7IA0AAIjUGNg");
	this.shape_2.setTransform(278.8,41.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhADHIBTmNIAuAAIhTGNg");
	this.shape_3.setTransform(252,41.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AhmDHIBLlkIhuAAIAJgpIELAAIgIApIhwAAIhKFkg");
	this.shape_4.setTransform(234.2,41.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("Ah0CkQgmgpAAhGQAAhGAdg9QAcg+AxgfQAwghA8AAQA2AAApAWIgSAnQgmgUgnABQgvgBgkAbQglAagWA0QgWAzAAA7QAAAzAaAfQAbAdAvAAQAkAAAygPIAAApQgYAIgVAEQgWAEgcAAQhCAAglgpg");
	this.shape_5.setTransform(202.1,41.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AiNDHIBUmNIDHAAIgJApIiYAAIgbCBICOAAIgIAnIiPAAIgfCTICZAAIgJApg");
	this.shape_6.setTransform(170.5,41.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AiRDHIBUmNIBYAAQA7AAAeAaQAeAaAAAzQAABDgtAjQgtAjhUABIglAAIgiCcgAg5ACIAlAAQA5AAAegWQAfgZAAgxQAAghgTgQQgTgPgnAAIgrAAg");
	this.shape_7.setTransform(139.2,41.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AhhDJQgVgEgUgJIAAguQAtAWAwAAQAtAAAYgUQAagVAAgkQAAgVgPgQQgOgRgmgWQgpgVgPgYQgQgXgBggQAAgzAkgfQAkghA6AAQAbAAAXAFQAXAGAaAMIgSApQgSgKgXgHQgWgFgSAAQglgBgVAUQgWASAAAhQAAAPAEAKQAFALALAJQAKAKAaAQQAoAXAOANQAOAOAIAQQAHARAAAVQAAA7gmAfQgnAghDAAQgdAAgXgEg");
	this.shape_8.setTransform(109.1,41.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AA9DHIg6ilIhCAAIgkClIguAAIBUmNIBWAAQB5AAAABkQAABfhkAaIBBCwgAg3gFIAuAAQAyAAAdgXQAdgXgBgsQAAgggSgQQgTgPgpAAIgsAAg");
	this.shape_9.setTransform(79.3,41.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AiNDHIBUmNIDHAAIgJApIiYAAIgbCBICOAAIgIAnIiPAAIgfCTICZAAIgJApg");
	this.shape_10.setTransform(50.3,41.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#981661").s().p("AiRDHIBUmNIBYAAQA7AAAeAaQAeAaAAAzQAABDgtAjQgtAjhUABIglAAIgiCcgAg5ACIAlAAQA5AAAegWQAfgZAAgxQAAghgTgQQgTgPgnAAIgrAAg");
	this.shape_11.setTransform(19,41.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,347.9,80.3);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AA0DHIh8lMIgCAAQgIA8gLA3IgvDZIgtAAIBUmNIAyAAIB7FMIACAAQAIg+AMgxIAvjdIAtAAIhUGNg");
	this.shape.setTransform(38.2,41.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#981661").s().p("AhADHIBTmNIAuAAIhTGNg");
	this.shape_1.setTransform(10.9,41.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,58.8,80.3);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhsDHIgsmNIAuAAIAbD8QAGA1AAAmIABAAQAQgnAcg1ICBj7IA0AAIjUGNg");
	this.shape.setTransform(55.3,41.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#981661").s().p("Ah0CkQgmgpAAhGQAAhGAdg9QAcg+AxgfQAwghA8AAQA2AAApAWIgSAnQgmgUgnABQgvgBgkAbQglAagWA0QgWAzAAA7QAAAzAaAfQAbAdAvAAQAkAAAygPIAAApQgYAIgVAEQgWAEgcAAQhCAAglgpg");
	this.shape_1.setTransform(21.7,41.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,67.6,80.3);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 37
	this.instance = new lib.Символ37();
	this.instance.setTransform(251.7,19.5,1,1,0,0,0,251.7,11.7);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:11.7,alpha:1},14,cjs.Ease.get(1)).wait(55).to({y:3.9,alpha:0},15,cjs.Ease.get(-1)).wait(6));

	// Символ 36
	this.instance_1 = new lib.Символ36();
	this.instance_1.setTransform(228,41.3,1,1,0,0,0,228,11.7);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({_off:false},0).to({y:33.5,alpha:1},14,cjs.Ease.get(1)).wait(56).to({y:25.7,alpha:0},15,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,7.8,503.5,23.3);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 28
	this.instance = new lib.Символ28();
	this.instance.setTransform(295.9,51.6,1,1,0,0,0,295.9,11.2);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({_off:false},0).to({y:37.9,alpha:1},14,cjs.Ease.get(1)).wait(45).to({y:24.9,alpha:0},15,cjs.Ease.get(-1)).wait(1));

	// Символ 27
	this.instance_1 = new lib.Символ27();
	this.instance_1.setTransform(251.8,30.7,1,1,0,0,0,251.8,11.2);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:17.1,alpha:1},14,cjs.Ease.get(1)).wait(45).to({y:4.1,alpha:0},15,cjs.Ease.get(-1)).to({_off:true},1).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,19.5,503.8,22.4);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 26
	this.instance = new lib.Символ26();
	this.instance.setTransform(39.5,48.6,0.066,1,0,0,0,39.5,39.5);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,alpha:1},14,cjs.Ease.get(1)).wait(75).to({alpha:0},10,cjs.Ease.get(-1)).wait(1));

	// Символ 25
	this.instance_1 = new lib.Символ25();
	this.instance_1.setTransform(315.6,47.7,1,1,0,0,0,226,13.8);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(8).to({_off:false},0).to({y:41.2,alpha:1},14,cjs.Ease.get(1)).wait(60).to({y:28.2,alpha:0},13,cjs.Ease.get(-1)).wait(5));

	// Символ 24
	this.instance_2 = new lib.Символ24();
	this.instance_2.setTransform(317.5,69,1,1,0,0,0,226.2,7.4);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(15).to({_off:false},0).to({y:62.5,alpha:1},14,cjs.Ease.get(1)).wait(57).to({y:49.5,alpha:0},13,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(36.9,9.1,5.2,79);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 31
	this.instance = new lib.Символ31();
	this.instance.setTransform(394.1,72.7,1,1,0,0,0,302.4,20.3);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({y:64.2,alpha:1},14,cjs.Ease.get(1)).wait(66).to({y:57.7,alpha:0},10).wait(1));

	// Символ 30
	this.instance_1 = new lib.Символ30();
	this.instance_1.setTransform(262,38.5,1,1,0,0,0,172.2,13.8);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({_off:false},0).to({y:30.1,alpha:1},14,cjs.Ease.get(1)).wait(65).to({y:23.6,alpha:0},10).wait(7));

	// Символ 29
	this.instance_2 = new lib.Символ29();
	this.instance_2.setTransform(39.3,44.6,0.074,1,0,0,0,38,38);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:1,alpha:1},14,cjs.Ease.get(1)).wait(75).to({alpha:0},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(36.5,6.6,5.6,76);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// д. м., директор Специализированной школы ССЗ, проф. сердечно-сосудистой медицины,  подразделение медицинских дисциплин Университет Милан-Бикокка, Италия
	this.instance = new lib.Символ33();
	this.instance.setTransform(370.5,59.1,1,1,0,0,0,279.9,13.8);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(8).to({_off:false},0).to({y:51.3,alpha:1},14,cjs.Ease.get(1)).wait(61).to({y:42.8,alpha:0},14).wait(3));

	// ПРОФЕССОР ДЖАНФРАНКО ПАРАТИ
	this.instance_1 = new lib.Символ34();
	this.instance_1.setTransform(335.1,31.4,1,1,0,0,0,245.6,13.8);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({_off:false},0).to({y:23.6,alpha:1},14,cjs.Ease.get(1)).wait(61).to({y:15.2,alpha:0},14).wait(7));

	// janfrank.png
	this.instance_2 = new lib.Символ32();
	this.instance_2.setTransform(38,38.7,0.074,1,0,0,0,38,38);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:1,alpha:1},14,cjs.Ease.get(1)).wait(71).to({alpha:0},14).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(35.2,0.7,5.6,76);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ35();
	this.instance.setTransform(303.4,20.8,1,1,0,0,0,303.4,11.7);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:11.7,alpha:1},14,cjs.Ease.get(1)).wait(55).to({y:-1.3,alpha:0},10,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,9.1,617.2,23.3);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 41
	this.instance = new lib.Символ41();
	this.instance.setTransform(172.4,63,1,1,0,0,0,172.4,9.2);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(13).to({_off:false},0).to({y:53.9,alpha:1},9,cjs.Ease.get(1)).wait(120).to({alpha:0},10).wait(8));

	// Символ 40
	this.instance_1 = new lib.Символ40();
	this.instance_1.setTransform(131.4,45.5,1,1,0,0,0,131.4,9.2);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(8).to({_off:false},0).to({y:36.4,alpha:1},9,cjs.Ease.get(1)).wait(123).to({alpha:0},10).wait(10));

	// Символ 39
	this.instance_2 = new lib.Символ39();
	this.instance_2.setTransform(170,28.1,1,1,0,0,0,170,9.2);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(4).to({_off:false},0).to({y:19,alpha:1},9,cjs.Ease.get(1)).wait(125).to({alpha:0},10).wait(12));

	// Символ 38
	this.instance_3 = new lib.Символ38();
	this.instance_3.setTransform(62,10.6,1,1,0,0,0,62,9.2);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({y:1.5,alpha:1},9,cjs.Ease.get(1)).wait(127).to({alpha:0},10).wait(14));

	// Символ 42
	this.instance_4 = new lib.Символ42();
	this.instance_4.setTransform(536.3,63.8,1,1,0,0,0,85,7);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(39).to({_off:false},0).to({y:54.7,alpha:1},9,cjs.Ease.get(1)).wait(91).to({alpha:0},10).wait(11));

	// Символ 16
	this.instance_5 = new lib.Символ16();
	this.instance_5.setTransform(532.8,19.4,1.361,1.361,0,0,0,71,20.4);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(30).to({_off:false},0).to({scaleX:1.16,scaleY:1.16,alpha:1},9,cjs.Ease.get(1)).wait(107).to({alpha:0},10).wait(4));

	// Символ 12
	this.instance_6 = new lib.Символ12();
	this.instance_6.setTransform(393.1,20.2,1.274,1.274,0,0,0,39.5,23);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(24).to({_off:false},0).to({regX:39.6,scaleX:0.94,scaleY:0.94,alpha:1},9,cjs.Ease.get(1)).wait(116).to({alpha:0},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,1.4,124,18.5);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 15
	this.instance = new lib.Символ15();
	this.instance.setTransform(89.6,140.7,1,1,0,0,0,50.2,31.2);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:127.7,alpha:1},9,cjs.Ease.get(1)).wait(46).to({y:114.7,alpha:0},10,cjs.Ease.get(-1)).to({_off:true},1).wait(734));

	// Символ 14
	this.instance_1 = new lib.Символ14();
	this.instance_1.setTransform(180.2,140.1,1,1,0,0,0,31.4,30.8);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(5).to({_off:false},0).to({y:127.1,alpha:1},9,cjs.Ease.get(1)).wait(60).to({x:108.7},5,cjs.Ease.get(-1)).to({x:37.2},5,cjs.Ease.get(1)).wait(80).to({alpha:0},5).wait(300).to({alpha:1},5).wait(315).to({alpha:0},10).wait(1));

	// Символ 4
	this.instance_2 = new lib.Символ4();
	this.instance_2.setTransform(280.3,136.1,0.669,0.669,0,0,0,90.9,40.1);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({_off:false},0).to({y:123.1,alpha:1},9,cjs.Ease.get(1)).wait(41).to({y:110.1,alpha:0},10,cjs.Ease.get(-1)).to({_off:true},1).wait(730));

	// Символ 3
	this.instance_3 = new lib.Символ3();
	this.instance_3.setTransform(464.3,136.1,0.669,0.669,0,0,0,173.9,40.1);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(13).to({_off:false},0).to({y:123.1,alpha:1},9,cjs.Ease.get(1)).wait(42).to({y:110.1,alpha:0},10,cjs.Ease.get(-1)).to({_off:true},1).wait(725));

	// Символ 2
	this.instance_4 = new lib.Символ2();
	this.instance_4.setTransform(607.2,136.1,0.669,0.669,0,0,0,29.3,40.1);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(18).to({_off:false},0).to({y:123.1,alpha:1},9,cjs.Ease.get(1)).wait(42).to({y:110.1,alpha:0},10,cjs.Ease.get(-1)).to({_off:true},1).wait(720));

	// Символ 1
	this.instance_5 = new lib.Символ1();
	this.instance_5.setTransform(656.4,136.1,0.669,0.669,0,0,0,33.8,40.1);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(23).to({_off:false},0).to({y:123.1,alpha:1},9,cjs.Ease.get(1)).wait(42).to({y:110.1,alpha:0},10,cjs.Ease.get(-1)).to({_off:true},1).wait(715));

	// Символ 22
	this.instance_6 = new lib.Символ22();
	this.instance_6.setTransform(387.9,120.7,1,1,0,0,0,295.9,21.6);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(89).to({_off:false},0).to({_off:true},81).wait(630));

	// Символ 21
	this.instance_7 = new lib.Символ21();
	this.instance_7.setTransform(272.6,116.6,1,1,0,0,0,271.8,39.5);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(169).to({_off:false},0).to({_off:true},101).wait(530));

	// Символ 20
	this.instance_8 = new lib.Символ20();
	this.instance_8.setTransform(349,123.8,1,1,0,0,0,348.2,42.2);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(269).to({_off:false},0).to({_off:true},101).wait(430));

	// Символ 19
	this.instance_9 = new lib.Символ19();
	this.instance_9.setTransform(327.6,129.2,1,1,0,0,0,326.2,41);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(369).to({_off:false},0).to({_off:true},101).wait(330));

	// Символ 18
	this.instance_10 = new lib.Символ18();
	this.instance_10.setTransform(395.4,128,1,1,0,0,0,303.4,11.7);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(469).to({_off:false},0).to({_off:true},81).wait(250));

	// РАЗЛИЧНЫЕ КЛАССЫ ПРЕПАРАТОВ ВЛИЯЮТ  НА ВАРИАБЕЛЬНОСТЬ АД ПО РАЗНОМУ?
	this.instance_11 = new lib.Символ23();
	this.instance_11.setTransform(344.9,126.4,1,1,0,0,0,254.2,22.5);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(549).to({_off:false},0).to({_off:true},91).wait(160));

	// Символ 17
	this.instance_12 = new lib.Символ17();
	this.instance_12.setTransform(398.7,131.2,1,1,0,0,0,307.9,32.1);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(639).to({_off:false},0).wait(161));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(39.4,109.5,100.5,62.5);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.Символ10();
	this.instance.setTransform(375,250.5,1,1,0,0,0,375,250.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20).to({_off:false},0).to({y:218,alpha:1},39,cjs.Ease.get(-1)).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ10();
	this.instance_1.setTransform(375,217,1,1,0,0,0,375,250.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:90.5},59).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-33.5,750,501);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ8();
	this.instance.setTransform(570.2,182.4,1,1,0,0,0,772,365.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-201.8,-182.8,1544.1,730.4);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ6();
	this.instance.setTransform(644.5,207,1,1,0,0,0,313.5,207);
	this.instance.alpha = 0.102;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:313.4,rotation:6.3,x:550.9,y:164.3},118,cjs.Ease.get(-1)).to({regX:313.5,rotation:12.7,x:460.5,y:123},114,cjs.Ease.get(1)).to({regX:313.4,rotation:-2,x:413,y:209.7},59,cjs.Ease.get(-1)).to({rotation:-16.7,x:366.4,y:295.1},58,cjs.Ease.get(1)).to({regX:313.5,regY:207.1,rotation:-8.3,x:507.4,y:250.5},76,cjs.Ease.get(-1)).to({regY:207,rotation:0,x:644.5,y:207,alpha:0.078},74,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(129.2,-182.8,1544.1,730.4);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ7();
	this.instance.setTransform(464.8,207.8,1,1,0,0,0,772.8,441.8);

	this.instance_1 = new lib.Символ9();
	this.instance_1.setTransform(375,148.5,1,1,0,0,0,375,250.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-178.8,-416.9,1544.1,782.3);


// stage content:



(lib.epic728_90 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ13();
	this.instance.setTransform(458.2,270.6,1,1,0,0,0,448.5,350.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 3
	this.instance_1 = new lib.Символ5();
	this.instance_1.setTransform(371.3,377.5,1,1,0,0,0,375,250.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(181.5,-244.9,1544.1,782.3);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;