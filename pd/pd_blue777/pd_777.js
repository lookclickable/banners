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



(lib.b777 = function() {
	this.initialize(img.b777);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,331,236);


(lib.back = function() {
	this.initialize(img.back);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,305);


(lib.bezdep = function() {
	this.initialize(img.bezdep);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,249,130);


(lib.Bitmap1 = function() {
	this.initialize(img.Bitmap1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,48,42);


(lib.bonus = function() {
	this.initialize(img.bonus);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,243,149);


(lib.button = function() {
	this.initialize(img.button);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,281,115);


(lib.kard = function() {
	this.initialize(img.kard);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,329,343);


(lib.kard2 = function() {
	this.initialize(img.kard2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,293,343);


(lib.logopokerdom = function() {
	this.initialize(img.logopokerdom);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,214,64);


(lib.rub = function() {
	this.initialize(img.rub);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,46,76);// helper functions:

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


(lib.Symbol32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.b777();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol32, new cjs.Rectangle(0,0,331,236), null);


(lib.Symbol30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.bezdep();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol30, new cjs.Rectangle(0,0,249,130), null);


(lib.Symbol22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.button();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol22, new cjs.Rectangle(0,0,281,115), null);


(lib.Symbol20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.bonus();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol20, new cjs.Rectangle(0,0,243,149), null);


(lib.Symbol17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.rub();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol17, new cjs.Rectangle(0,0,46,76), null);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.kard();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol11, new cjs.Rectangle(0,0,329,343), null);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.kard2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol10, new cjs.Rectangle(0,0,293,343), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.339,0.339);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,16.3,14.3), null);


(lib.Symbol23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Symbol22();
	this.instance.parent = this;
	this.instance.setTransform(140.5,57.5,1,1,0,0,0,140.5,57.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.03,scaleY:1.03,y:57.6},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,281,115);


(lib.Symbol21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Symbol20();
	this.instance.parent = this;
	this.instance.setTransform(121.5,74.5,1,1,0,0,0,121.5,74.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.04,scaleY:1.04,y:74.6},7,cjs.Ease.get(-1)).to({scaleX:1.09,scaleY:1.09},7,cjs.Ease.get(1)).to({regY:74.4,scaleX:1.04,scaleY:1.04,x:121.6,y:74.5},8,cjs.Ease.get(-1)).to({regY:74.5,scaleX:1,scaleY:1,x:121.5},7,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,243,149);


(lib.Symbol18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Symbol17();
	this.instance.parent = this;
	this.instance.setTransform(23,38,1,1,0,0,0,23,38);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol18, new cjs.Rectangle(0,0,46,76), null);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// kard2.png
	this.instance = new lib.Symbol10();
	this.instance.parent = this;
	this.instance.setTransform(177.5,333.4,1,1,0,0,0,126.5,333.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({rotation:-2.3},4,cjs.Ease.get(-1)).to({regY:333.5,rotation:-5.3,y:333.5},5,cjs.Ease.get(1)).to({regY:333.4,rotation:-2.5,y:333.4},5,cjs.Ease.get(-1)).to({rotation:0},5,cjs.Ease.get(1)).wait(37));

	// Layer_1
	this.instance_1 = new lib.Symbol11();
	this.instance_1.parent = this;
	this.instance_1.setTransform(182.5,332.4,1,1,0,0,0,182.5,331.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regY:331.5,rotation:-2.5,x:182.6,y:332.5},4,cjs.Ease.get(-1)).to({regX:182.4,regY:331.4,rotation:-5.9,x:182.5,y:332.4},5,cjs.Ease.get(1)).to({regY:331.6,rotation:-2.8,y:332.6},5,cjs.Ease.get(-1)).to({regX:182.5,regY:331.4,rotation:0,y:332.4},5,cjs.Ease.get(1)).wait(46));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,344,344);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Symbol 3
	this.instance = new lib.Symbol3();
	this.instance.parent = this;
	this.instance.setTransform(373.3,77.6,0.667,0.667,0,0,0,7.7,6.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.309},9).to({alpha:1},10).wait(1));

	// Symbol 3
	this.instance_1 = new lib.Symbol3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(375.9,104.1,0.667,0.667,0,0,0,7.9,6.9);
	this.instance_1.alpha = 0.461;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:7.7,regY:6.8,x:375.8,alpha:0.309},2).to({alpha:1},10).wait(1).to({regX:7.8,regY:6.9,alpha:0.539},6).wait(1));

	// Symbol 3
	this.instance_2 = new lib.Symbol3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(360.2,56.1,0.667,0.667,0,0,0,7.9,6.9);
	this.instance_2.alpha = 0.859;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:7.7,regY:6.8,x:360.1,alpha:1},2).wait(1).to({alpha:0.309},9).to({regX:7.8,regY:6.9,alpha:0.793},7).wait(1));

	// Symbol 3
	this.instance_3 = new lib.Symbol3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(376.4,91.1,0.667,0.667,0,0,0,7.9,6.9);
	this.instance_3.alpha = 0.691;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:7.7,regY:6.8,x:376.3,alpha:0.309},5).to({alpha:1},10).wait(1).to({regX:7.8,regY:6.9,alpha:0.77},3).wait(1));

	// Symbol 3
	this.instance_4 = new lib.Symbol3();
	this.instance_4.parent = this;
	this.instance_4.setTransform(367.7,67.6,0.667,0.667,0,0,0,7.9,6.9);
	this.instance_4.alpha = 0.66;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regX:7.7,regY:6.8,x:367.6,alpha:1},5).wait(1).to({alpha:0.309},9).to({regX:7.8,regY:6.9,alpha:0.586},4).wait(1));

	// Symbol 3
	this.instance_5 = new lib.Symbol3();
	this.instance_5.parent = this;
	this.instance_5.setTransform(351.3,45.1,0.667,0.667,0,0,0,7.7,6.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({alpha:0.309},9).to({regX:7.8,regY:6.9,alpha:0.93},9).wait(1));

	// Symbol 3
	this.instance_6 = new lib.Symbol3();
	this.instance_6.parent = this;
	this.instance_6.setTransform(341.4,37.1,0.667,0.667,0,0,0,7.9,6.9);
	this.instance_6.alpha = 0.449;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({regX:7.7,regY:6.8,x:341.3,alpha:1},8).wait(1).to({alpha:0.309},9).to({regX:7.8,regY:6.9,alpha:0.379},1).wait(1));

	// Symbol 3
	this.instance_7 = new lib.Symbol3();
	this.instance_7.parent = this;
	this.instance_7.setTransform(328.9,28.6,0.667,0.667,0,0,0,7.9,6.9);
	this.instance_7.alpha = 0.859;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({regX:7.7,regY:6.8,x:328.8,alpha:1},2).wait(1).to({alpha:0.309},9).to({regX:7.8,regY:6.9,alpha:0.793},7).wait(1));

	// Symbol 3
	this.instance_8 = new lib.Symbol3();
	this.instance_8.parent = this;
	this.instance_8.setTransform(308.3,22.3,1,1,0,0,0,7.8,6.8);
	this.instance_8.alpha = 0.609;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({alpha:0.309},4).to({alpha:1},10).wait(1).to({alpha:0.691},4).wait(1));

	// Symbol 3
	this.instance_9 = new lib.Symbol3();
	this.instance_9.parent = this;
	this.instance_9.setTransform(371.3,119.5,1,1,0,0,0,7.8,6.8);
	this.instance_9.alpha = 0.52;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({alpha:1},7).wait(1).to({alpha:0.309},9).to({alpha:0.445},2).wait(1));

	// Symbol 3
	this.instance_10 = new lib.Symbol3();
	this.instance_10.parent = this;
	this.instance_10.setTransform(357,132.4,0.999,0.999,-15.5,0,0,7.9,6.9);
	this.instance_10.alpha = 0.461;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({regX:7.8,regY:6.8,scaleX:1,scaleY:1,rotation:-15.7,x:356.8,y:132.3,alpha:0.309},2).to({alpha:1},10).wait(1).to({regY:6.9,scaleX:1,scaleY:1,rotation:-15.6,x:356.9,y:132.4,alpha:0.539},6).wait(1));

	// Symbol 3
	this.instance_11 = new lib.Symbol3();
	this.instance_11.parent = this;
	this.instance_11.setTransform(327.3,133.8,1,1,0,0,0,7.8,6.8);
	this.instance_11.alpha = 0.73;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({alpha:1},4).wait(1).to({alpha:0.309},9).to({alpha:0.656},5).wait(1));

	// Symbol 3
	this.instance_12 = new lib.Symbol3();
	this.instance_12.parent = this;
	this.instance_12.setTransform(305.3,124.8,1,1,0,0,0,7.8,6.8);
	this.instance_12.alpha = 0.93;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({alpha:1},1).wait(1).to({alpha:0.309},9).to({alpha:0.863},8).wait(1));

	// Symbol 3
	this.instance_13 = new lib.Symbol3();
	this.instance_13.parent = this;
	this.instance_13.setTransform(288.8,112.8,1,1,0,0,0,7.8,6.8);
	this.instance_13.alpha = 0.461;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({alpha:0.309},2).to({alpha:1},10).wait(1).to({alpha:0.539},6).wait(1));

	// Symbol 3
	this.instance_14 = new lib.Symbol3();
	this.instance_14.parent = this;
	this.instance_14.setTransform(275.8,100.3,1,1,0,0,0,7.8,6.8);
	this.instance_14.alpha = 0.609;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).to({alpha:0.309},4).to({alpha:1},10).wait(1).to({alpha:0.691},4).wait(1));

	// Symbol 3
	this.instance_15 = new lib.Symbol3();
	this.instance_15.parent = this;
	this.instance_15.setTransform(266.3,87.3,1,1,0,0,0,7.8,6.8);
	this.instance_15.alpha = 0.52;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).to({alpha:1},7).wait(1).to({alpha:0.309},9).to({alpha:0.445},2).wait(1));

	// Symbol 3
	this.instance_16 = new lib.Symbol3();
	this.instance_16.parent = this;
	this.instance_16.setTransform(259.8,73.8,1,1,0,0,0,7.8,6.8);
	this.instance_16.alpha = 0.379;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).to({alpha:1},9).wait(1).to({alpha:0.309},9).wait(1));

	// Symbol 3
	this.instance_17 = new lib.Symbol3();
	this.instance_17.parent = this;
	this.instance_17.setTransform(257.3,59.8,1,1,0,0,0,7.8,6.8);
	this.instance_17.alpha = 0.789;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).to({alpha:1},3).wait(1).to({alpha:0.309},9).to({alpha:0.723},6).wait(1));

	// Symbol 3
	this.instance_18 = new lib.Symbol3();
	this.instance_18.parent = this;
	this.instance_18.setTransform(259.8,45.3,1,1,0,0,0,7.8,6.8);
	this.instance_18.alpha = 0.93;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).to({alpha:1},1).wait(1).to({alpha:0.309},9).to({alpha:0.863},8).wait(1));

	// Symbol 3
	this.instance_19 = new lib.Symbol3();
	this.instance_19.parent = this;
	this.instance_19.setTransform(269.8,30.8,1,1,0,0,0,7.8,6.8);
	this.instance_19.alpha = 0.789;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).to({alpha:1},3).wait(1).to({alpha:0.309},9).to({alpha:0.723},6).wait(1));

	// Symbol 3
	this.instance_20 = new lib.Symbol3();
	this.instance_20.parent = this;
	this.instance_20.setTransform(286.3,21.8,1,1,0,0,0,7.8,6.8);
	this.instance_20.alpha = 0.609;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).to({alpha:0.309},4).to({alpha:1},10).wait(1).to({alpha:0.691},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(249.5,15,132.5,126.6);


(lib.Symbol33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EBHLgNxICdALMAAeAmWMiULAA1gEgzGgCaIgK3KMBZcAAAMhXzAXSg");
	mask.setTransform(317.1,156.8);

	// Layer_2
	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(382,81.9,5.573,5.42,0,19.7,6.3,313.2,73.9);
	this.instance.alpha = 0.309;
	this.instance.compositeOperation = "lighter";

	this.instance_1 = new lib.Symbol1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(456.4,96.7,4.405,4.284,0,-161.8,-175.2,313.4,74);
	this.instance_1.alpha = 0.309;
	this.instance_1.compositeOperation = "lighter";

	this.instance_2 = new lib.Symbol1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(383.6,89.4,4.216,4.153,0,-147.8,-157.7,313.4,74.1);
	this.instance_2.alpha = 0.309;
	this.instance_2.compositeOperation = "lighter";

	this.instance_3 = new lib.Symbol1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(416.1,124.2,2.99,2.818,0,-165.3,-173.8,313.4,74.1);
	this.instance_3.alpha = 0.309;
	this.instance_3.compositeOperation = "lighter";

	this.instance_4 = new lib.Symbol1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-266.8,-43.2,2.189,2.189,0,0,0,7.8,6.8);
	this.instance_4.alpha = 0.309;
	this.instance_4.compositeOperation = "lighter";

	this.instance_5 = new lib.Symbol1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(401,106.8,1.648,1.648,0,0,0,313.5,74.1);
	this.instance_5.alpha = 0.309;
	this.instance_5.compositeOperation = "lighter";

	this.instance_6 = new lib.Symbol1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(413.9,115.8,1.352,1.227,0,-177.7,-177.8,313.2,73.9);
	this.instance_6.alpha = 0.309;
	this.instance_6.compositeOperation = "lighter";

	this.instance_7 = new lib.Symbol1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(97.9,37.4,1,1,0,0,0,7.8,6.8);
	this.instance_7.alpha = 0.309;
	this.instance_7.compositeOperation = "lighter";

	var maskedShapeInstanceList = [this.instance,this.instance_1,this.instance_2,this.instance_3,this.instance_4,this.instance_5,this.instance_6,this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Layer_1
	this.instance_8 = new lib.back();
	this.instance_8.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol33, new cjs.Rectangle(0,-6.9,748,327.4), null);


(lib.Symbol28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.bonus = new lib.Symbol21();
	this.bonus.parent = this;
	this.bonus.setTransform(121.5,74.5,1,1,0,0,0,121.5,74.5);

	this.timeline.addTween(cjs.Tween.get(this.bonus).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol28, new cjs.Rectangle(0,0,243,149), null);


(lib.Symbol19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Symbol18();
	this.instance.parent = this;
	this.instance.setTransform(32.6,43,1,1,16,0,0,23,38.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol19, new cjs.Rectangle(0,0,65.2,85.7), null);


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_89 = function() {
		this.gotoAndPlay(1);
	}
	this.frame_90 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(89).call(this.frame_89).wait(1).call(this.frame_90).wait(1));

	// Layer_1
	this.instance = new lib.Symbol19();
	this.instance.parent = this;
	this.instance.setTransform(23,38.1,1,1,0,0,0,32.5,42.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(15).to({regX:32.6,scaleX:0.17,x:23.1},9).to({regX:32.5,scaleX:1,x:23},10).wait(1).to({regX:32.6,scaleX:0.17,x:23.1},9).to({regX:32.5,scaleX:1,x:23},10).wait(37));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.5,-4.8,65.2,85.7);


(lib.Symbol29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Symbol16();
	this.instance.parent = this;
	this.instance.setTransform(32.6,42.9,1,1,0,0,0,23,38);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol29, new cjs.Rectangle(0,0,65.2,85.7), null);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bonus
	this.instance = new lib.Symbol28();
	this.instance.parent = this;
	this.instance.setTransform(-187.1,279.7,1,1,0,0,0,121.5,74.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({x:122.5,y:188.5},14,cjs.Ease.backOut).wait(56).to({x:716.1,y:22.1},14,cjs.Ease.backIn).to({_off:true},1).wait(4));

	// rub
	this.instance_1 = new lib.Symbol29();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-98.2,257.3,1,1,0,0,0,32.5,42.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:391,y:130.1},14,cjs.Ease.backOut).wait(56).to({x:874.6,y:-11.5},14,cjs.Ease.backIn).to({_off:true},1).wait(8));

	// bezdep
	this.instance_2 = new lib.Symbol30();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-157.3,317.2,1,1,0,0,0,124.5,65);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(8).to({_off:false},0).to({x:290.5,y:194},14,cjs.Ease.backOut).wait(56).to({x:727.5,y:74.8},14,cjs.Ease.backIn).wait(1));

	// 777mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ay8LZIl7BiQgfACgHgeIg1jFQgCgOADgEIAGgJILAjAQANgEAFACIAKAGIAEAFIAwCgIiHOvIkxBMgAmMUfIgEAAQgKAAgNgRIB6swIl7BiQgfACgIgeIg0jFQgCgPADgDIAGgKILAjAQANgDAEABIALAHIAEAFIAuCfIiFOvIkYBHgAHxQyIgHgIQABAHgGgWIB7ssIl7BiQgfACgHgfIg1jFQgCgOADgEIAGgJILAi/QAOgDAEABIAKAGIAEAGIAwCeIiHOvIkWBHIgLABQgJAAABgCg");
	mask.setTransform(-168.4,157.1);

	// 777
	this.instance_3 = new lib.Symbol32();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-198.3,236.2,1,1,0,0,0,165.5,118);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:238.5,y:118},14,cjs.Ease.backOut).wait(56).to({x:728.9,y:-28.6},14,cjs.Ease.backIn).to({_off:true},1).wait(8));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-363.8,118.2,331,236);


// stage content:
(lib.pd_777 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.instance = new lib.Symbol23();
	this.instance.parent = this;
	this.instance.setTransform(513.5,257.5,1,1,0,0,0,140.5,57.5);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_5
	this.instance_1 = new lib.Symbol9();
	this.instance_1.parent = this;
	this.instance_1.setTransform(688,130,1,1,0,0,0,172,172);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Layer_4
	this.txt = new lib.Symbol12();
	this.txt.parent = this;
	this.txt.setTransform(287,151.5,1,1,0,0,0,227,131.5);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1));

	// Layer_2
	this.instance_2 = new lib.logopokerdom();
	this.instance_2.parent = this;
	this.instance_2.setTransform(19,24);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Layer_1
	this.instance_3 = new lib.Symbol33();
	this.instance_3.parent = this;
	this.instance_3.setTransform(321,153.5,1,1,0,0,0,320,152.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(16.2,-86.2,1163.8,690);
// library properties:
lib.properties = {
	id: '4B0A67A368F445E88A7B6CBE6103A667',
	width: 640,
	height: 305,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/b777.png", id:"b777"},
		{src:"images/back.jpg", id:"back"},
		{src:"images/bezdep.png", id:"bezdep"},
		{src:"images/Bitmap1.png", id:"Bitmap1"},
		{src:"images/bonus.png", id:"bonus"},
		{src:"images/button.png", id:"button"},
		{src:"images/kard.png", id:"kard"},
		{src:"images/kard2.png", id:"kard2"},
		{src:"images/logopokerdom.png", id:"logopokerdom"},
		{src:"images/rub.png", id:"rub"}
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
an.compositions['4B0A67A368F445E88A7B6CBE6103A667'] = {
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