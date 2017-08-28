(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



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


(lib.Растровоеизображение1 = function() {
	this.initialize(img.Растровоеизображение1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,404,844);


(lib.Растровоеизображение10 = function() {
	this.initialize(img.Растровоеизображение10);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);// helper functions:

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


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhV7A88MAAAh53MCr3AAAMAAAB53g");
	mask.setTransform(1998.5,538.1);

	// Слой 1
	this.instance = new lib.Растровоеизображение10();
	this.instance.parent = this;
	this.instance.setTransform(1124.7,0);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ15, new cjs.Rectangle(1448.5,148.1,1100,780), null);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Button();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ14, new cjs.Rectangle(0,0,399,121), null);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Растровоеизображение1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ13, new cjs.Rectangle(0,0,404,844), null);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().rr(-118.05,-139.55,236.1,279.1,14.5);
	this.shape.setTransform(118,139.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ10, new cjs.Rectangle(0,0,236.1,279.1), null);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ace2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ8, new cjs.Rectangle(0,0,394,265), null);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ace1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ7, new cjs.Rectangle(0,0,360,306), null);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hearts();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ6, new cjs.Rectangle(0,0,354,407), null);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rombs();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ5, new cjs.Rectangle(0,0,272,365), null);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.spades();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ4, new cjs.Rectangle(0,0,297,381), null);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.tshirt();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ3, new cjs.Rectangle(0,0,318,399), null);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AW5UtQhJgcg4g3Qg4g4gchJQgbhJAAhaQAAhYAahHQAahJA1g5QBphxC+AAQBLAAA+AXQA9AVAmAlIhPCFQgmgXgngNQgogLgogBQguABgnAQQgmAPgeAfQgfAfgPAqQgPAsAAA4QAAA0AQAqQARAqAgAiQAgAgApARQAqAQA0AAQAuAAAqgOQAqgOAlgdIBCCGQgRAUgaAQQgaAQgiANQgjAMgkAHQgkAGgnAAQhaAAhIgbgAvqUtQhIgcg4g3Qg4g4gdhIQgchJAAhbQAAhWAchHQAchIA4g6QA4g5BJgdQBIgdBZAAQCxAABwBuQA5A3AcBJQAdBJAABbQAABXgdBIQgcBJg6A5Qg5A4hHAdQhJAchXAAQhYAAhJgbgAugLbQgnAQgeAhQg+BBAABpQAAAxAQAqQAQArAgAiQAfAhAnASQAnAQAtAAQA0AAApgQQAogRAcggQAdgiAOgqQAPgqAAg0QAAg1gQgqQgPgrggggQggghgmgQQgogRguAAQgwAAgnARgA72U9Ig6gCIgdgBIAAsBIHQAAIAACfIkeAAIAAB7QAQgDAWgBQAXgCAcAAQA5AAAuAQQAtAQAjAhQAiAhASArQARAsAAA2QAAB8hPBDQhOBEiRABQg7AAhHgDgA50P0IgnAGIAACaIApAEIAaACQBgAAAAhQQAAgmgVgYQgWgYgugBIgjABgACsU6IAAk5IkYAAIAAE5IixAAIAAsHICxAAIAAEoIEYAAIAAkoICwAAIAAMHgAKDUmQgigKgTgNIBBiYQAPAJAOAFQANAFAPAAQAWAAAPgIQAPgHAHgRIALgWIlUohIDRAAIDcFwICelwIC6AAIkJJFQgqBdg6AuQg5AthQAAQgjAAgjgKgAOJFOIIW0zIqmAAIAAliIRUAAIAADyIo4WjgAmZFOIIQ0zIqeAAIAAliIRMAAIAADsIo1WpgA7JFOIIU0zIqeAAIAAliIRMAAIAADsIo4WpgAZNFNIAAghIgZAAIAAhBIAZAAIAAgXIgZAAIAAhAIAZAAIAAi7IARAAIAhAAIAjAAIAUgBQA3ABAfARQAgAQAOAbQANAbAAAfQAAAZgJAWQgJAVgSASQgSASgaAIQgZAJggAAIgQAAIAAAMIggAAIAAAXIBRAAIAABBIhRAAIAAAhgAarAVIgdAAIAABzIAYACIAWAAQAgABASgQQATgOABgfQAAgdgSgOQgRgPgiABIgSAAg");
	mask.setTransform(216.2,144.2);

	// Слой 2
	this.instance = new lib.Символ13();
	this.instance.parent = this;
	this.instance.setTransform(-203.4,97,0.681,0.681,26,0,0,202,421.9);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:810.8},39).to({_off:true},1).wait(60));

	// Слой 1
	this.instance_1 = new lib.TextBlock();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(100));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,414,361);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ14();
	this.instance.parent = this;
	this.instance.setTransform(199.5,60.5,1,1,0,0,0,199.5,60.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.03,scaleY:1.03,y:60.6},15,cjs.Ease.get(-1)).to({scaleX:1.07,scaleY:1.07},14,cjs.Ease.get(1)).to({scaleX:1.03,scaleY:1.03},15,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,y:60.5},15,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,399,121);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ10();
	this.instance.parent = this;
	this.instance.setTransform(118,139.5,1,1,0,0,0,118,139.5);
	this.instance.alpha = 0.129;
	this.instance.filters = [new cjs.BlurFilter(55, 55, 1)];
	this.instance.cache(-2,-2,240,283);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ9, new cjs.Rectangle(-28,-28,296,339), null);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_171 = function() {
		this.gotoAndPlay(122);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(171).call(this.frame_171).wait(1));

	// 5
	this.instance = new lib.Символ3();
	this.instance.parent = this;
	this.instance.setTransform(-378.4,584.2,0.449,0.999,0,-93.5,-65.9,158.8,199.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:158.6,regY:199.4,scaleX:0.71,skewX:-78.5,skewY:-66.9,x:-391.7,y:341.1},15,cjs.Ease.get(-1)).to({regX:158.7,regY:199.3,scaleX:0.05,skewX:-48.5,skewY:-45.2,x:-337.7,y:220.9},11).to({_off:true},1).wait(145));

	// 4
	this.instance_1 = new lib.Символ3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-378.4,585.2,0.449,0.999,0,-93.5,-65.9,158.8,199.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(15).to({regX:158.6,scaleX:0.8,skewX:-63.5,skewY:-57.7,x:-405.5,y:343.4},16,cjs.Ease.get(-1)).to({regX:157.5,regY:199.2,scaleX:0.19,skewX:-39.3,skewY:-98,x:-394.5,y:256.3},6).to({_off:true},1).wait(134));

	// 3
	this.instance_2 = new lib.Символ3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-378.4,586.2,0.449,0.999,0,-93.5,-65.9,158.8,199.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(36).to({regX:158.4,regY:199.4,scaleX:0.63,skewX:-74.1,skewY:-113.4,x:-390.6,y:407.6},12,cjs.Ease.get(-1)).to({regX:156.8,regY:199.5,scaleX:0.36,skewX:-59.1,skewY:-144.2,x:-381.9,y:331.6},6).to({_off:true},1).wait(117));

	// 2
	this.instance_3 = new lib.Символ3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-378.4,587.2,0.449,0.999,0,-93.5,-65.9,158.8,199.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(45).to({regX:158.6,regY:199.4,scaleX:0.3,skewX:-74,skewY:-46.4,x:-392.5,y:499.1},13,cjs.Ease.get(-1)).to({regX:157.2,scaleX:0.42,skewX:-66.8,skewY:-149.9,x:-370.4,y:457.2},7).to({_off:true},1).wait(106));

	// 1
	this.instance_4 = new lib.Символ3();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-378.4,579.2,0.449,0.999,0,-93.5,-65.9,158.8,199.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(59).to({regX:157.3,regY:199.4,scaleX:0.04,skewX:-79.3,skewY:-51.7,x:-343,y:518.1},10,cjs.Ease.get(-1)).to({_off:true},1).wait(102));

	// spades.png
	this.instance_5 = new lib.Символ4();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-334.8,223.6,0.044,1.014,0,-48.3,-22.9,145.8,190.3);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(27).to({_off:false},0).to({regX:148.5,regY:190.5,scaleX:1,scaleY:1,skewX:0,skewY:0,x:-173.7,y:123.5},11,cjs.Ease.get(1)).wait(33).to({y:135},12,cjs.Ease.get(-1)).to({y:147.5},13,cjs.Ease.get(1)).to({y:135},12,cjs.Ease.get(-1)).to({y:123.5},13,cjs.Ease.get(1)).wait(1).to({y:135},12,cjs.Ease.get(-1)).to({y:147.5},13,cjs.Ease.get(1)).to({y:135},12,cjs.Ease.get(-1)).to({y:123.5},12,cjs.Ease.get(1)).wait(1));

	// t5
	this.instance_6 = new lib.Символ9();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-199.1,148.1,0.916,1.129,0,11.7,4.9,117.1,139.5);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(31).to({_off:false},0).to({alpha:1},11,cjs.Ease.get(1)).wait(29).to({regX:117,skewX:11.6,skewY:4.8,x:-199.2,y:159.7},12,cjs.Ease.get(-1)).to({regX:117.1,skewX:11.7,skewY:4.9,x:-199.1,y:172.1},13,cjs.Ease.get(1)).to({regX:117,regY:139.4,skewX:11.6,skewY:4.8,x:-199.2,y:159.6},12,cjs.Ease.get(-1)).to({regX:117.1,regY:139.5,skewX:11.7,skewY:4.9,x:-199.1,y:148.1},13,cjs.Ease.get(1)).wait(1).to({regX:117,skewX:11.6,skewY:4.8,x:-199.2,y:159.7},12,cjs.Ease.get(-1)).to({regX:117.1,skewX:11.7,skewY:4.9,x:-199.1,y:172.1},13,cjs.Ease.get(1)).to({regX:117,regY:139.4,skewX:11.6,skewY:4.8,x:-199.2,y:159.6},12,cjs.Ease.get(-1)).to({regX:117.1,regY:139.5,skewX:11.7,skewY:4.9,x:-199.1,y:148.1},12,cjs.Ease.get(1)).wait(1));

	// rombs.png
	this.instance_7 = new lib.Символ5();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-396.2,254.9,0.149,0.905,0,-37.6,20.4,131.4,183.3);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(37).to({_off:false},0).to({regX:136,regY:182.5,scaleX:1,scaleY:1,skewX:0,skewY:0,x:-262.2,y:167.5},14,cjs.Ease.get(1)).wait(32).to({y:179},13,cjs.Ease.get(-1)).to({y:191.5},12,cjs.Ease.get(1)).to({y:179},13,cjs.Ease.get(-1)).to({y:177.1},1,cjs.Ease.get(1)).to({y:167.5},11).to({y:179},13,cjs.Ease.get(-1)).to({y:191.5},12,cjs.Ease.get(1)).to({y:179},13,cjs.Ease.get(-1)).wait(1));

	// t4
	this.instance_8 = new lib.Символ9();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-269.7,220.3,1.025,1.022,0,-3.8,-4.8,117.5,139.7);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(43).to({_off:false},0).to({alpha:1},10,cjs.Ease.get(1)).wait(30).to({scaleX:1.02,scaleY:1.02,y:231.9},13,cjs.Ease.get(-1)).to({scaleX:1.02,scaleY:1.02,y:244.3},12,cjs.Ease.get(1)).to({scaleX:1.02,scaleY:1.02,x:-269.8,y:231.9},13,cjs.Ease.get(-1)).to({y:230.1},1,cjs.Ease.get(1)).to({scaleX:1.02,scaleY:1.02,x:-269.7,y:220.3},11).to({scaleX:1.02,scaleY:1.02,y:231.9},13,cjs.Ease.get(-1)).to({scaleX:1.02,scaleY:1.02,y:244.3},12,cjs.Ease.get(1)).to({scaleX:1.02,scaleY:1.02,x:-269.8,y:231.9},13,cjs.Ease.get(-1)).wait(1));

	// hearts.png
	this.instance_9 = new lib.Символ6();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-380.6,332.7,0.254,0.877,0,-58.5,27.4,168.4,204.1);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(54).to({_off:false},0).to({regX:177,regY:203.5,scaleX:1,scaleY:1,skewX:0,skewY:0,x:-316.2,y:241.5},12,cjs.Ease.get(1)).wait(30).to({y:253},12,cjs.Ease.get(-1)).to({y:265.5},13,cjs.Ease.get(1)).to({y:265.4},1,cjs.Ease.get(-1)).to({y:253},11).to({y:241.5},13,cjs.Ease.get(1)).to({y:253},12,cjs.Ease.get(-1)).to({y:265.5},13,cjs.Ease.get(1)).wait(1));

	// t3
	this.instance_10 = new lib.Символ9();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-322.1,336.1,0.777,0.788,0,-25.5,-37,117.9,139.5);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(59).to({_off:false},0).to({alpha:1},7,cjs.Ease.get(1)).wait(30).to({regY:139.6,scaleX:0.78,scaleY:0.79,skewX:-25.3,skewY:-37.1,y:347.7},12,cjs.Ease.get(-1)).to({regY:139.5,scaleX:0.78,scaleY:0.79,skewX:-25.5,skewY:-37,y:360.1},13,cjs.Ease.get(1)).to({scaleX:0.78,scaleY:0.79,skewX:-25.3,skewY:-37.1,y:360},1,cjs.Ease.get(-1)).to({regY:139.6,y:347.7},11).to({regY:139.5,scaleX:0.78,scaleY:0.79,skewX:-25.5,skewY:-37,y:336.1},13,cjs.Ease.get(1)).to({regY:139.6,scaleX:0.78,scaleY:0.79,skewX:-25.3,skewY:-37.1,y:347.7},12,cjs.Ease.get(-1)).to({regY:139.5,scaleX:0.78,scaleY:0.79,skewX:-25.5,skewY:-37,y:360.1},13,cjs.Ease.get(1)).wait(1));

	// ace1.png
	this.instance_11 = new lib.Символ7();
	this.instance_11.parent = this;
	this.instance_11.setTransform(-371.1,454.8,1.036,0.281,0,-54,24,180,154.5);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(66).to({_off:false},0).to({regY:153,scaleX:1,scaleY:1,skewX:0,skewY:0,x:-341.2,y:396},11,cjs.Ease.get(1)).wait(31).to({y:407.5},13,cjs.Ease.get(-1)).to({y:409.5},1,cjs.Ease.get(1)).to({y:420},11,cjs.Ease.get(1)).to({y:407.5},13,cjs.Ease.get(-1)).to({y:396},12,cjs.Ease.get(1)).to({y:407.5},13,cjs.Ease.get(-1)).wait(1));

	// t1
	this.instance_12 = new lib.Символ9();
	this.instance_12.parent = this;
	this.instance_12.setTransform(-333.7,459.1,0.604,0.804,0,-53.2,-44.3,117.6,139.6);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(67).to({_off:false},0).to({alpha:1},10,cjs.Ease.get(1)).wait(31).to({regY:139.5,scaleX:0.6,scaleY:0.8,skewY:-44.4,x:-333.8,y:470.5},13,cjs.Ease.get(-1)).to({regX:117.7,scaleX:0.6,scaleY:0.8,y:472.6},1,cjs.Ease.get(1)).to({regX:117.6,regY:139.6,scaleX:0.6,scaleY:0.8,skewY:-44.3,x:-333.7,y:483.1},11).to({regX:117.5,scaleX:0.6,scaleY:0.8,skewY:-44.4,x:-333.8,y:470.6},13,cjs.Ease.get(-1)).to({regX:117.6,scaleX:0.6,scaleY:0.8,skewY:-44.3,x:-333.7,y:459.1},12,cjs.Ease.get(1)).to({regY:139.5,scaleX:0.6,scaleY:0.8,skewY:-44.4,x:-333.8,y:470.5},13,cjs.Ease.get(-1)).wait(1));

	// ace2.png
	this.instance_13 = new lib.Символ8();
	this.instance_13.parent = this;
	this.instance_13.setTransform(-358.4,515.6,1,0.062,0,-45.6,10.4,196.9,133.3);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(71).to({_off:false},0).to({regX:197,regY:132.5,scaleY:1,skewX:0,skewY:0,x:-364.2,y:537.5},8,cjs.Ease.get(1)).wait(43).to({y:537.6},0).to({y:549},11).to({y:561.5},13,cjs.Ease.get(1)).to({y:549},12,cjs.Ease.get(-1)).to({y:537.5},13,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-606.5,501.8,456.3,162.6);


// stage content:
(lib._777_animation_sample = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 1
	this.instance = new lib.Символ1();
	this.instance.parent = this;
	this.instance.setTransform(277.5,635.5,1,1,0,0,0,199.5,60.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1496.9,646.4,1,1,0,0,0,383.5,528);

	this.instance_2 = new lib.Символ11();
	this.instance_2.parent = this;
	this.instance_2.setTransform(286,357.5,1,1,0,0,0,207,180.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(1));

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#29F66C").ss(2.9,1,1).p("EhGngxNMCNPAAAQD5AACvCwQCwCwAAD4MAAABPrQAAD5iwCvQivCwj5AAMiNPAAAQj5AAiviwQiwivAAj5MAAAhPrQAAj4CwiwQCviwD5AAg");
	this.shape.setTransform(552.1,429.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 2
	this.instance_3 = new lib.Символ15();
	this.instance_3.parent = this;
	this.instance_3.setTransform(73.8,846,1,1,0,0,0,1522.3,994.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(175.9,241.9,1970.3,1080);
// library properties:
lib.properties = {
	id: '0323905DC8DC4BEC88A8FCC3285093CA',
	width: 1100,
	height: 780,
	fps: 24,
	color: "#003333",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/ace1.png", id:"ace1"},
		{src:"images/ace2.png", id:"ace2"},
		{src:"images/Button.png", id:"Button"},
		{src:"images/hearts.png", id:"hearts"},
		{src:"images/rombs.png", id:"rombs"},
		{src:"images/spades.png", id:"spades"},
		{src:"images/TextBlock.png", id:"TextBlock"},
		{src:"images/tshirt.png", id:"tshirt"},
		{src:"images/Растровоеизображение1.png", id:"Растровоеизображение1"},
		{src:"images/Растровоеизображение10.png", id:"Растровоеизображение10"}
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
an.compositions['0323905DC8DC4BEC88A8FCC3285093CA'] = {
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