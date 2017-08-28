(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 1100,
	height: 780,
	fps: 24,
	color: "#003333",
	opacity: 1.00,
	manifest: [
		{src:"images/Растровоеизображение1.png?1503839960936", id:"Растровоеизображение1"},
		{src:"images/Растровоеизображение10.png?1503839960936", id:"Растровоеизображение10"},
		{src:"images/ace1.png?1503839960936", id:"ace1"},
		{src:"images/ace2.png?1503839960936", id:"ace2"},
		{src:"images/Button.png?1503839960936", id:"Button"},
		{src:"images/hearts.png?1503839960936", id:"hearts"},
		{src:"images/rombs.png?1503839960936", id:"rombs"},
		{src:"images/spades.png?1503839960936", id:"spades"},
		{src:"images/TextBlock.png?1503839960936", id:"TextBlock"},
		{src:"images/tshirt.png?1503839960936", id:"tshirt"}
	]
};



lib.ssMetadata = [];


// symbols:



(lib.Растровоеизображение1 = function() {
	this.initialize(img.Растровоеизображение1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,404,844);


(lib.Растровоеизображение10 = function() {
	this.initialize(img.Растровоеизображение10);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.ace1 = function() {
	this.initialize(img.ace1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,360,306);


(lib.ace2 = function() {
	this.initialize(img.ace2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,394,265);


(lib.Button = function() {
	this.initialize(img.Button);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,399,121);


(lib.hearts = function() {
	this.initialize(img.hearts);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,354,407);


(lib.rombs = function() {
	this.initialize(img.rombs);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,272,365);


(lib.spades = function() {
	this.initialize(img.spades);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,297,381);


(lib.TextBlock = function() {
	this.initialize(img.TextBlock);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,414,361);


(lib.tshirt = function() {
	this.initialize(img.tshirt);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,318,399);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhV7A87MAAAh51MCr3AAAMAAAB51g");
	mask.setTransform(1998.5,538.1);

	// Слой 1
	this.instance = new lib.Растровоеизображение10();
	this.instance.setTransform(1124.7,0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1448.5,148.1,1100,780);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Button();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,399,121);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Растровоеизображение1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,404,844);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().rr(-118.05,-139.55,236.1,279.1,14.5);
	this.shape.setTransform(118,139.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,236.1,279.1);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ace2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,394,265);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ace1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,360,306);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hearts();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,354,407);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rombs();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,272,365);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.spades();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,297,381);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.tshirt();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,318,399);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AW4UsQhIgcg4g3Qg4g3gchJQgchJAAhaQAAhYAahIQAbhJA1g4QBphxC+gBQBKABA+AXQA+AVAlAkIhOCGQgngYgngMQgngMgoAAQgvAAgmAQQgnAPgeAgQgfAegOArQgQArAAA5QAAAzARAqQAQArAgAiQAgAgAqAQQAqAQA0ABQAugBAqgOQApgOAmgcIBCCFQgRAVgaAQQgaAQgjANQgjAMgjAHQglAFgmAAQhaAAhJgbgAvpUsQhJgcg4g3Qg4g3gchIQgchJAAhbQAAhXAbhHQAchIA4g5QA4g6BJgdQBJgdBZAAQCxAABwBuQA4A3AdBKQAcBJAABbQAABXgcBIQgdBIg5A6Qg5A4hIAcQhIAchXAAQhYAAhJgbgAufLaQgnARgfAhQg+BBAABpQAAAxARAqQAQAqAgAiQAfAiAnARQAnARAtAAQA0gBApgQQAngQAdggQAcgiAPgrQAOgqAAgzQAAg2gPgqQgPgqggggQggghgngRQgngQguAAQgwAAgnAQgA72U8Ig6gBIgdgBIAAsCIHQAAIAACfIkdAAIAAB8QAPgDAXgCQAWgCAdAAQA4AAAuARQAuAQAiAgQAjAiARArQASArAAA3QgBB7hOBEQhOBEiRABQg7AAhIgEgA50P0IgmAFIAACaIAoAFIAaABQBhAAAAhQQAAgmgWgYQgVgYguAAIgkABgACrU6IAAk6IkXAAIAAE6IiwAAIAAsHICwAAIAAEoIEXAAIAAkoICxAAIAAMHgAKDUmQgjgKgSgOIBBiYQAOAKAOAFQAOAEAOAAQAXABAOgIQAPgHAIgRIALgXIlUogIDQAAIDdFwICelwIC5AAIkJJEQgqBeg5AuQg6AthQAAQgjgBgigJgAOJFNIIW0yIqmAAIAAliIRUAAIAADzIo4WhgAmYFNIIP0yIqeAAIAAliIRLAAIAADsIo0WogA7IFNIIT0yIqeAAIAAliIRNAAIAADsIo4WogAZMFMIAAggIgZAAIAAhCIAZAAIAAgWIgZAAIAAhAIAZAAIAAi6IARAAIAhAAIAjAAIAVgBQA2AAAgASQAgAQANAZQAOAbgBAfQAAAagJAVQgJAVgSATQgSARgZAIQgZAJggAAIgQAAIAAANIggAAIAAAWIBQAAIAABCIhQAAIAAAggAarAVIgdAAIAAByIAYADIAWAAQAfAAATgPQATgPAAgeQAAgdgRgPQgRgOgjAAIgRABg");
	mask.setTransform(216.2,144.2);

	// Слой 2
	this.instance = new lib.Символ13();
	this.instance.setTransform(-203.4,97,0.681,0.681,26,0,0,202,421.9);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:810.8},39).to({_off:true},1).wait(60));

	// Слой 1
	this.instance_1 = new lib.TextBlock();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(100));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,414,361);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ10();
	this.instance.setTransform(118,139.5,1,1,0,0,0,118,139.5);
	this.instance.alpha = 0.129;
	this.instance.filters = [new cjs.BlurFilter(55, 55, 1)];
	this.instance.cache(-2,-2,240,283);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28,-28,296,339);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_284 = function() {
		this.gotoAndPlay(235);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(284).call(this.frame_284).wait(1));

	// 5
	this.instance = new lib.Символ3();
	this.instance.setTransform(-378.4,584.2,0.449,0.999,0,-93.5,-65.9,158.8,199.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:158.7,scaleX:0.71,skewX:-63.5,skewY:-51.9,x:-391.5,y:341.1},31,cjs.Ease.get(-1)).to({regX:158.5,scaleX:0.36,scaleY:1,skewX:-55.6,skewY:-48.4,x:-362.8,y:277.1},6).to({regX:158.7,regY:199.3,scaleX:0.05,scaleY:1,skewX:-48.5,skewY:-45.2,x:-337.7,y:220.9},5).to({_off:true},1).wait(242));

	// 4
	this.instance_1 = new lib.Символ3();
	this.instance_1.setTransform(-378.4,585.2,0.449,0.999,0,-93.5,-65.9,158.8,199.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(42).to({regX:158.6,scaleX:0.8,skewX:-63.5,skewY:-57.7,x:-405.5,y:343.4},31,cjs.Ease.get(-1)).to({regX:157.5,regY:199.3,scaleX:0.19,skewX:-39.3,skewY:-98,x:-394.5,y:256.4},6).to({_off:true},1).wait(205));

	// 3
	this.instance_2 = new lib.Символ3();
	this.instance_2.setTransform(-378.4,586.2,0.449,0.999,0,-93.5,-65.9,158.8,199.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(79).to({regX:158.4,regY:199.4,scaleX:0.63,skewX:-74.1,skewY:-113.4,x:-390.6,y:407.6},26,cjs.Ease.get(-1)).to({regX:156.8,regY:199.5,scaleX:0.36,skewX:-59.1,skewY:-144.2,x:-381.9,y:331.6},9).to({_off:true},1).wait(170));

	// 2
	this.instance_3 = new lib.Символ3();
	this.instance_3.setTransform(-378.4,587.2,0.449,0.999,0,-93.5,-65.9,158.8,199.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(118).to({regX:158.6,regY:199.4,scaleX:0.3,skewX:-74,skewY:-46.4,x:-392.5,y:499.1},24,cjs.Ease.get(-1)).to({regX:157.2,scaleX:0.42,skewX:-66.8,skewY:-149.9,x:-370.4,y:457.2},7).to({_off:true},1).wait(135));

	// 1
	this.instance_4 = new lib.Символ3();
	this.instance_4.setTransform(-378.4,579.2,0.449,0.999,0,-93.5,-65.9,158.8,199.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(149).to({regX:157.3,regY:199.4,scaleX:0.04,skewX:-79.3,skewY:-51.7,x:-343,y:518.1},20,cjs.Ease.get(-1)).to({_off:true},1).wait(115));

	// spades.png
	this.instance_5 = new lib.Символ4();
	this.instance_5.setTransform(-334.8,223.6,0.044,1.014,0,-48.3,-22.9,145.8,190.3);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(43).to({_off:false},0).to({regX:148.5,regY:190.5,scaleX:1,scaleY:1,skewX:0,skewY:0,x:-173.7,y:123.5},26,cjs.Ease.get(1)).wait(115).to({y:135},12,cjs.Ease.get(-1)).to({y:147.5},13,cjs.Ease.get(1)).to({y:135},12,cjs.Ease.get(-1)).to({y:123.5},13,cjs.Ease.get(1)).wait(1).to({y:135},12,cjs.Ease.get(-1)).to({y:147.5},13,cjs.Ease.get(1)).to({y:135},12,cjs.Ease.get(-1)).to({y:123.5},12,cjs.Ease.get(1)).wait(1));

	// t5
	this.instance_6 = new lib.Символ9();
	this.instance_6.setTransform(-199.1,148.1,0.916,1.129,0,11.7,4.9,117.1,139.5);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(68).to({_off:false},0).to({alpha:1},11,cjs.Ease.get(1)).wait(105).to({regX:117,skewX:11.6,skewY:4.8,x:-199.2,y:159.7},12,cjs.Ease.get(-1)).to({regX:117.1,skewX:11.7,skewY:4.9,x:-199.1,y:172.1},13,cjs.Ease.get(1)).to({regY:139.4,skewX:11.6,skewY:4.8,y:159.6},12,cjs.Ease.get(-1)).to({regY:139.5,skewX:11.7,skewY:4.9,y:148.1},13,cjs.Ease.get(1)).wait(1).to({regX:117,skewX:11.6,skewY:4.8,x:-199.2,y:159.7},12,cjs.Ease.get(-1)).to({regX:117.1,skewX:11.7,skewY:4.9,x:-199.1,y:172.1},13,cjs.Ease.get(1)).to({regY:139.4,skewX:11.6,skewY:4.8,y:159.6},12,cjs.Ease.get(-1)).to({regY:139.5,skewX:11.7,skewY:4.9,y:148.1},12,cjs.Ease.get(1)).wait(1));

	// rombs.png
	this.instance_7 = new lib.Символ5();
	this.instance_7.setTransform(-396.2,254.9,0.149,0.905,0,-37.6,20.4,131.4,183.3);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(80).to({_off:false},0).to({regX:136,regY:182.5,scaleX:1,scaleY:1,skewX:0,skewY:0,x:-262.2,y:167.5},26,cjs.Ease.get(1)).wait(90).to({y:179},13,cjs.Ease.get(-1)).to({y:191.5},12,cjs.Ease.get(1)).to({y:179},13,cjs.Ease.get(-1)).to({y:177.1},1,cjs.Ease.get(1)).to({y:167.5},11).to({y:179},13,cjs.Ease.get(-1)).to({y:191.5},12,cjs.Ease.get(1)).to({y:179},13,cjs.Ease.get(-1)).wait(1));

	// t4
	this.instance_8 = new lib.Символ9();
	this.instance_8.setTransform(-269.6,220.2,1.025,1.022,0,-3.8,-4.8,117.6,139.7);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(98).to({_off:false},0).to({alpha:1},10,cjs.Ease.get(1)).wait(88).to({regX:117.5,scaleX:1.02,scaleY:1.02,x:-269.7,y:231.9},13,cjs.Ease.get(-1)).to({regX:117.6,scaleX:1.02,scaleY:1.02,x:-269.6,y:244.2},12,cjs.Ease.get(1)).to({regX:117.5,scaleX:1.02,scaleY:1.02,x:-269.8,y:231.9},13,cjs.Ease.get(-1)).to({y:230.1},1,cjs.Ease.get(1)).to({regX:117.6,scaleX:1.02,scaleY:1.02,x:-269.6,y:220.2},11).to({regX:117.5,scaleX:1.02,scaleY:1.02,x:-269.7,y:231.9},13,cjs.Ease.get(-1)).to({regX:117.6,scaleX:1.02,scaleY:1.02,x:-269.6,y:244.2},12,cjs.Ease.get(1)).to({regX:117.5,scaleX:1.02,scaleY:1.02,x:-269.8,y:231.9},13,cjs.Ease.get(-1)).wait(1));

	// hearts.png
	this.instance_9 = new lib.Символ6();
	this.instance_9.setTransform(-380.6,332.7,0.254,0.877,0,-58.5,27.4,168.4,204.1);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(114).to({_off:false},0).to({regX:177,regY:203.5,scaleX:1,scaleY:1,skewX:0,skewY:0,x:-316.2,y:241.5},19,cjs.Ease.get(1)).wait(76).to({y:253},12,cjs.Ease.get(-1)).to({y:265.5},13,cjs.Ease.get(1)).to({y:265.4},1,cjs.Ease.get(-1)).to({y:253},11).to({y:241.5},13,cjs.Ease.get(1)).to({y:253},12,cjs.Ease.get(-1)).to({y:265.5},13,cjs.Ease.get(1)).wait(1));

	// t3
	this.instance_10 = new lib.Символ9();
	this.instance_10.setTransform(-322.1,336.1,0.777,0.788,0,-25.5,-37,117.9,139.5);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(123).to({_off:false},0).to({alpha:1},10,cjs.Ease.get(1)).wait(76).to({regY:139.6,scaleX:0.78,scaleY:0.79,skewX:-25.3,skewY:-37.1,y:347.7},12,cjs.Ease.get(-1)).to({regY:139.5,scaleX:0.78,scaleY:0.79,skewX:-25.5,skewY:-37,y:360.1},13,cjs.Ease.get(1)).to({scaleX:0.78,scaleY:0.79,skewX:-25.3,skewY:-37.1,y:360},1,cjs.Ease.get(-1)).to({regY:139.6,y:347.7},11).to({regY:139.5,scaleX:0.78,scaleY:0.79,skewX:-25.5,skewY:-37,y:336.1},13,cjs.Ease.get(1)).to({regY:139.6,scaleX:0.78,scaleY:0.79,skewX:-25.3,skewY:-37.1,y:347.7},12,cjs.Ease.get(-1)).to({regY:139.5,scaleX:0.78,scaleY:0.79,skewX:-25.5,skewY:-37,y:360.1},13,cjs.Ease.get(1)).wait(1));

	// ace1.png
	this.instance_11 = new lib.Символ7();
	this.instance_11.setTransform(-371.1,454.8,1.036,0.281,0,-54,24,180,154.5);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(150).to({_off:false},0).to({regY:153,scaleX:1,scaleY:1,skewX:0,skewY:0,x:-341.2,y:396},21,cjs.Ease.get(1)).wait(50).to({y:407.5},13,cjs.Ease.get(-1)).to({y:409.5},1,cjs.Ease.get(1)).to({y:420},11,cjs.Ease.get(1)).to({y:407.5},13,cjs.Ease.get(-1)).to({y:396},12,cjs.Ease.get(1)).to({y:407.5},13,cjs.Ease.get(-1)).wait(1));

	// t1
	this.instance_12 = new lib.Символ9();
	this.instance_12.setTransform(-333.7,459.1,0.604,0.804,0,-53.2,-44.3,117.6,139.6);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(161).to({_off:false},0).to({alpha:1},10,cjs.Ease.get(1)).wait(50).to({regY:139.5,scaleX:0.6,scaleY:0.8,skewY:-44.4,x:-333.8,y:470.5},13,cjs.Ease.get(-1)).to({regX:117.7,scaleX:0.6,scaleY:0.8,y:472.6},1,cjs.Ease.get(1)).to({regX:117.6,regY:139.6,scaleX:0.6,scaleY:0.8,skewY:-44.3,x:-333.7,y:483.1},11).to({scaleX:0.6,scaleY:0.8,skewY:-44.4,y:470.5},13,cjs.Ease.get(-1)).to({scaleX:0.6,scaleY:0.8,skewY:-44.3,y:459.1},12,cjs.Ease.get(1)).to({regY:139.5,scaleX:0.6,scaleY:0.8,skewY:-44.4,x:-333.8,y:470.5},13,cjs.Ease.get(-1)).wait(1));

	// ace2.png
	this.instance_13 = new lib.Символ8();
	this.instance_13.setTransform(-358.4,515.6,1,0.062,0,-45.6,10.4,196.9,133.3);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(169).to({_off:false},0).to({regX:197,regY:132.5,scaleY:1,skewX:0,skewY:0,x:-364.2,y:537.5},19,cjs.Ease.get(1)).wait(47).to({y:537.6},0).to({y:549},11).to({y:561.5},13,cjs.Ease.get(1)).to({y:549},12,cjs.Ease.get(-1)).to({y:537.5},13,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-606.5,501.8,456.3,162.6);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ14();
	this.instance.setTransform(199.5,60.5,1,1,0,0,0,199.5,60.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.03,scaleY:1.03,y:60.6},15,cjs.Ease.get(-1)).to({scaleX:1.07,scaleY:1.07},14,cjs.Ease.get(1)).to({scaleX:1.03,scaleY:1.03},15,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,y:60.5},15,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,399,121);


// stage content:



(lib._777_animation_sample = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 1
	this.instance = new lib.Символ1();
	this.instance.setTransform(277.5,635.5,1,1,0,0,0,199.5,60.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ11();
	this.instance_1.setTransform(286,357.5,1,1,0,0,0,207,180.5);

	this.instance_2 = new lib.Символ2();
	this.instance_2.setTransform(1486.5,659,1,1,0,0,0,383.5,528);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(1));

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#29F66C").ss(2.9,1,1).p("EhGmgxMMCNOAAAQD4AACwCvQCwCwAAD5MAAABPqQAAD4iwCwQiwCwj4AAMiNOAAAQj5AAiwiwQiviwAAj4MAAAhPqQAAj5CviwQCwivD5AAg");
	this.shape.setTransform(552.1,429.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 2
	this.instance_3 = new lib.Символ15();
	this.instance_3.setTransform(73.8,846,1,1,0,0,0,1522.3,994.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(175.9,241.9,1970.3,1080);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;