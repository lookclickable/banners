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



(lib._102two = function() {
	this.initialize(img._102two);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,267,228);


(lib._10one = function() {
	this.initialize(img._10one);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,276,238);


(lib._36iph = function() {
	this.initialize(img._36iph);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,269,47);


(lib.Bitmap1 = function() {
	this.initialize(img.Bitmap1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,30,30);


(lib.buty = function() {
	this.initialize(img.buty);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,266,95);


(lib.con1 = function() {
	this.initialize(img.con1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,20,11);


(lib.con2 = function() {
	this.initialize(img.con2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,18,14);


(lib.con3 = function() {
	this.initialize(img.con3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,15,16);


(lib.fullho = function() {
	this.initialize(img.fullho);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,224,44);


(lib.gather = function() {
	this.initialize(img.gather);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,183,47);


(lib.kare = function() {
	this.initialize(img.kare);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,99,36);


(lib.orrr = function() {
	this.initialize(img.orrr);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,82,37);


(lib.PD_logo = function() {
	this.initialize(img.PD_logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,327,64);


(lib.phon2 = function() {
	this.initialize(img.phon2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,340,292);


(lib.phone1 = function() {
	this.initialize(img.phone1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,258,273);


(lib.phone3 = function() {
	this.initialize(img.phone3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,333,246);


(lib.que1 = function() {
	this.initialize(img.que1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,122,160);


(lib.que2 = function() {
	this.initialize(img.que2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,115,159);


(lib.ten1 = function() {
	this.initialize(img.ten1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,118,159);


(lib.ten2 = function() {
	this.initialize(img.ten2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,118,159);


(lib.ten3 = function() {
	this.initialize(img.ten3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,118,159);


(lib.ten4 = function() {
	this.initialize(img.ten4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,118,159);


(lib.win = function() {
	this.initialize(img.win);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,266,65);// helper functions:

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


(lib.Symbol45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0,0.482,1],-35.1,-9.4,35.1,9.4).s().p("An8HwIE8ybIK9C8Ik8Sbg");
	this.shape.setTransform(50.9,68.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol45, new cjs.Rectangle(0,0,101.9,136.9), null);


(lib.Symbol34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol34, new cjs.Rectangle(0,0,30,30), null);


(lib.Symbol29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.PD_logo();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol29, new cjs.Rectangle(0,0,327,64), null);


(lib.Symbol28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#B32F3D","#3B053B","#2F023B","#40073B","#B32F3D"],[0,0.369,0.533,0.671,0.988],-564.2,701.4,564,-701.3).s().p("EiLIBEkMCwRjbKMBmABSDMiwRDbKg");
	this.shape.setTransform(890.5,963.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol28, new cjs.Rectangle(0,0,1781,1927.8), null);


(lib.Symbol27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#B32F3D","#3B053B","#2F023B","#40073B","#B32F3D"],[0,0.369,0.533,0.671,0.988],-564.2,701.4,564,-701.3).s().p("EiLIBEkMCwRjbKMBmABSDMiwRDbKg");
	this.shape.setTransform(890.5,963.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol27, new cjs.Rectangle(0,0,1781,1927.8), null);


(lib.Symbol23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.que2();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.833,0.833);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol23, new cjs.Rectangle(0,0,95.9,132.5), null);


(lib.Symbol22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.que1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.833,0.833);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol22, new cjs.Rectangle(0,0,101.7,133.4), null);


(lib.Symbol21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ten1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.833,0.833);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol21, new cjs.Rectangle(0,0,98.4,132.5), null);


(lib.Symbol20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ten2();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.833,0.833);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol20, new cjs.Rectangle(0,0,98.4,132.5), null);


(lib.Symbol19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ten3();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.833,0.833);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol19, new cjs.Rectangle(0,0,98.4,132.5), null);


(lib.Symbol18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ten4();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.833,0.833);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol18, new cjs.Rectangle(0,0,98.4,132.5), null);


(lib.Symbol17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.kare();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.809,0.809);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol17, new cjs.Rectangle(0,0,80.1,29.2), null);


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.orrr();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.809,0.809);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol16, new cjs.Rectangle(0,0,66.4,30), null);


(lib.Symbol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.fullho();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.809,0.809);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol15, new cjs.Rectangle(0,0,181.3,35.6), null);


(lib.Symbol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.gather();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.809,0.809);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol14, new cjs.Rectangle(0,0,148.1,38.1), null);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._36iph();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol11, new cjs.Rectangle(0,0,269,47), null);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.win();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol10, new cjs.Rectangle(0,0,266,65), null);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.buty();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(0,0,266,95), null);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.phone3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(0,0,333,246), null);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._102two();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(0,0,267,228), null);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.phon2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(0,0,340,292), null);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._10one();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(0,0,276,238), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.phone1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,258,273), null);


(lib.Symbol7copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.con3();
	this.instance.parent = this;
	this.instance.setTransform(5,5,0.367,0.367);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol7copy, new cjs.Rectangle(5,5,5.5,5.9), null);


(lib.Symbol7_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.con3();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol7_1, new cjs.Rectangle(0,0,15,16), null);


(lib.Symbol6copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.con2();
	this.instance.parent = this;
	this.instance.setTransform(6,4,0.393,0.393);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6copy, new cjs.Rectangle(6,4,7.1,5.5), null);


(lib.Symbol6_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.con2();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6_1, new cjs.Rectangle(0,0,18,14), null);


(lib.Symbol2copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.con1();
	this.instance.parent = this;
	this.instance.setTransform(7,4,0.325,0.325);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2copy, new cjs.Rectangle(7,4,6.5,3.6), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.con1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,20,11), null);


(lib.Symbol49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol17();
	this.instance.parent = this;
	this.instance.setTransform(40.1,14.6,1,1,0,0,0,40.1,14.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol49, new cjs.Rectangle(0,0,80.1,29.2), null);


(lib.Symbol48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol16();
	this.instance.parent = this;
	this.instance.setTransform(33.1,15,1,1,0,0,0,33.1,15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol48, new cjs.Rectangle(0,0,66.4,30), null);


(lib.Symbol47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol15();
	this.instance.parent = this;
	this.instance.setTransform(90.6,17.8,1,1,0,0,0,90.6,17.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol47, new cjs.Rectangle(0,0,181.3,35.6), null);


(lib.Symbol46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol14();
	this.instance.parent = this;
	this.instance.setTransform(74,19,1,1,0,0,0,74,19);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol46, new cjs.Rectangle(0,0,148.1,38.1), null);


(lib.Symbol42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol29();
	this.instance.parent = this;
	this.instance.setTransform(123.6,24.1,0.756,0.756,0,0,0,163.5,31.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol42, new cjs.Rectangle(0,0,247.2,48.4), null);


(lib.Symbol38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol8();
	this.instance.parent = this;
	this.instance.setTransform(166.5,123,1,1,0,0,0,166.5,123);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol38, new cjs.Rectangle(0,0,333,246), null);


(lib.Symbol37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol7();
	this.instance.parent = this;
	this.instance.setTransform(133.5,114,1,1,0,0,0,133.5,114);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol37, new cjs.Rectangle(0,0,267,228), null);


(lib.Symbol36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol6();
	this.instance.parent = this;
	this.instance.setTransform(170,146,1,1,0,0,0,170,146);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol36, new cjs.Rectangle(0,0,340,292), null);


(lib.Symbol35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol5();
	this.instance.parent = this;
	this.instance.setTransform(138,119,1,1,0,0,0,138,119);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol35, new cjs.Rectangle(0,0,276,238), null);


(lib.Symbol33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol4();
	this.instance.parent = this;
	this.instance.setTransform(129,136.5,1,1,0,0,0,129,136.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol33, new cjs.Rectangle(0,0,258,273), null);


(lib.Symbol32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol9("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(123.6,44.3,0.929,0.929,0,0,0,133,47.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol32, new cjs.Rectangle(0,0,247.2,88.3), null);


(lib.Symbol31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol11();
	this.instance.parent = this;
	this.instance.setTransform(125,21.9,0.929,0.929,0,0,0,134.5,23.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol31, new cjs.Rectangle(0,0,250,43.7), null);


(lib.Symbol30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol10();
	this.instance.parent = this;
	this.instance.setTransform(123.7,30.2,0.929,0.929,0,0,0,133.1,32.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol30, new cjs.Rectangle(0,0,247.2,60.4), null);


(lib.Symbol26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol28();
	this.instance.parent = this;
	this.instance.setTransform(890.5,963.9,1,1,0,0,0,890.5,963.9);

	this.instance_1 = new lib.Symbol27();
	this.instance_1.parent = this;
	this.instance_1.setTransform(2016.9,-437,1,1,0,0,0,890.5,963.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol26, new cjs.Rectangle(0,-1400.9,2907.4,3328.7), null);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Symbol 17
	this.instance = new lib.Symbol49();
	this.instance.parent = this;
	this.instance.setTransform(829.1,-263.4,1,1,0,0,0,40.1,14.6);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(15).to({_off:false},0).to({y:-363.7},19,cjs.Ease.quadInOut).wait(45).to({scaleX:1.17,scaleY:1.17},20,cjs.Ease.quadInOut).to({scaleX:1,scaleY:1},16,cjs.Ease.quadInOut).wait(19).to({y:-282.7},15,cjs.Ease.get(-1)).wait(1));

	// Symbol 16
	this.instance_1 = new lib.Symbol48();
	this.instance_1.parent = this;
	this.instance_1.setTransform(743.1,-263,1,1,0,0,0,33.1,15);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({_off:false},0).to({y:-363.3},19,cjs.Ease.quadInOut).wait(41).to({regX:33.2,scaleX:1.14,scaleY:1.14,x:743.3},20,cjs.Ease.quadInOut).to({regX:33.1,scaleX:1,scaleY:1,x:743.1},16,cjs.Ease.quadInOut).wait(24).to({y:-282.3},15,cjs.Ease.get(-1)).wait(6));

	// Symbol 15
	this.instance_2 = new lib.Symbol47();
	this.instance_2.parent = this;
	this.instance_2.setTransform(608.6,-264.2,1,1,0,0,0,90.6,17.8);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(5).to({_off:false},0).to({y:-364.5},19,cjs.Ease.quadInOut).wait(37).to({scaleX:1.07,scaleY:1.07,x:608.7},20,cjs.Ease.quadInOut).to({scaleX:1,scaleY:1,x:608.6},16,cjs.Ease.quadInOut).wait(29).to({y:-283.5},15,cjs.Ease.get(-1)).wait(9));

	// Symbol 14
	this.instance_3 = new lib.Symbol46();
	this.instance_3.parent = this;
	this.instance_3.setTransform(430,-267,1,1,0,0,0,74,19);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({y:-367.3},19,cjs.Ease.quadInOut).wait(35).to({scaleX:1.07,scaleY:1.07,x:430.1},20,cjs.Ease.quadInOut).to({scaleX:1,scaleY:1,x:430},16,cjs.Ease.quadInOut).wait(32).to({y:-286.3},15,cjs.Ease.get(-1)).wait(13));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(356,-286,148.1,38.1);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Symbol 22
	this.instance = new lib.Symbol22();
	this.instance.parent = this;
	this.instance.setTransform(363.4,-226.1,0.038,1.004,0,0,0,51,66.7);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({_off:false},0).to({regX:51.1,scaleX:1.02},17,cjs.Ease.quadInOut).to({regX:51,regY:66.8,scaleX:0.97,x:363.3,y:-226},4,cjs.Ease.quadInOut).wait(29).to({y:-247},10,cjs.Ease.quadInOut).to({regX:51.1,regY:66.7,scaleX:0.04,y:-247.1},5,cjs.Ease.quadInOut).to({_off:true},1).wait(70));

	// Symbol 23
	this.instance_1 = new lib.Symbol23();
	this.instance_1.parent = this;
	this.instance_1.setTransform(468.6,-226.8,0.037,1,0,0,0,47.9,66.2);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(18).to({_off:false},0).to({regX:48,scaleX:1.04,x:468.7},17,cjs.Ease.quadInOut).to({regX:47.9,scaleX:1,x:468.6},4,cjs.Ease.quadInOut).wait(82).to({rotation:28.5,x:700.2,y:-223.8},15,cjs.Ease.get(-1)).wait(14));

	// Symbol 21
	this.instance_2 = new lib.Symbol21();
	this.instance_2.parent = this;
	this.instance_2.setTransform(363.1,-246.5,0.045,1,0,0,0,49.2,66.2);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(79).to({_off:false},0).to({regX:49.1,scaleX:1,x:363},5,cjs.Ease.quadInOut).to({y:-225.5},10,cjs.Ease.quadInOut).wait(31).to({rotation:28.5,x:686.7,y:-231.1},15,cjs.Ease.get(-1)).wait(10));

	// Symbol 20
	this.instance_3 = new lib.Symbol20();
	this.instance_3.parent = this;
	this.instance_3.setTransform(255.8,-226.8,0.031,1,0,0,0,49.2,66.2);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(8).to({_off:false},0).to({regX:49.1,scaleX:1.04},17,cjs.Ease.quadInOut).to({scaleX:1},4,cjs.Ease.quadInOut).wait(99).to({rotation:28.5,x:701.2,y:-223.3},15,cjs.Ease.get(-1)).wait(7));

	// Symbol 19
	this.instance_4 = new lib.Symbol19();
	this.instance_4.parent = this;
	this.instance_4.setTransform(148.9,-226.8,0.029,1,0,0,0,49.2,66.2);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(4).to({_off:false},0).to({scaleX:1.04,x:149},17,cjs.Ease.quadInOut).to({regX:49.1,scaleX:1,x:148.8},4,cjs.Ease.quadInOut).wait(106).to({rotation:28.5,x:710.2,y:-218.4},15,cjs.Ease.get(-1)).wait(4));

	// Symbol 18
	this.instance_5 = new lib.Symbol18();
	this.instance_5.parent = this;
	this.instance_5.setTransform(41.8,-226.8,0.041,1,0,0,0,49.1,66.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({scaleX:1.07},17,cjs.Ease.quadInOut).to({scaleX:1},4,cjs.Ease.quadInOut).wait(113).to({rotation:28.5,x:710.2,y:-218.4},15,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(39.8,-293,4,132.5);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// phone1.png
	this.instance = new lib.Symbol33();
	this.instance.parent = this;
	this.instance.setTransform(128.4,434.4,1,1,-41.4,0,0,128.9,136.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:129,regY:136.5,rotation:0,x:271,y:126.5},24,cjs.Ease.quadInOut).to({y:140.3},30,cjs.Ease.quadInOut).to({y:126.5},30,cjs.Ease.quadInOut).to({y:140.3},30,cjs.Ease.quadInOut).to({y:112.7},30,cjs.Ease.quadInOut).to({regY:136.4,rotation:35.2,x:513.8,y:500.7},20,cjs.Ease.quadInOut).to({_off:true},1).wait(185));

	// 10one.png
	this.instance_1 = new lib.Symbol35();
	this.instance_1.parent = this;
	this.instance_1.setTransform(75.1,464.1,1,1,-30,0,0,138,119);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(7).to({_off:false},0).to({rotation:0,x:236,y:151},24,cjs.Ease.quadInOut).to({y:164.8},30,cjs.Ease.quadInOut).to({y:151},30,cjs.Ease.quadInOut).to({y:164.8},30,cjs.Ease.quadInOut).to({y:137.2},30,cjs.Ease.quadInOut).to({rotation:35.2,x:532.1,y:471.2},20,cjs.Ease.quadInOut).to({_off:true},1).wait(178));

	// phon2.png
	this.instance_2 = new lib.Symbol36();
	this.instance_2.parent = this;
	this.instance_2.setTransform(116.9,448.4,1,1,-35.5,0,0,170,146);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(14).to({_off:false},0).to({rotation:0,x:197,y:205},24,cjs.Ease.quadInOut).to({y:218.8},30,cjs.Ease.quadInOut).to({y:205},30,cjs.Ease.quadInOut).to({y:218.8},30,cjs.Ease.quadInOut).to({y:191.2},30,cjs.Ease.quadInOut).to({rotation:35.2,x:522.1,y:469.4},20,cjs.Ease.quadInOut).to({_off:true},1).wait(171));

	// 102two.png
	this.instance_3 = new lib.Symbol37();
	this.instance_3.parent = this;
	this.instance_3.setTransform(51.9,434.3,1,1,-27.2,0,0,133.4,114);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(22).to({_off:false},0).to({regX:133.5,rotation:0,x:197.5,y:242},24,cjs.Ease.quadInOut).to({y:255.8},30,cjs.Ease.quadInOut).to({y:242},30,cjs.Ease.quadInOut).to({y:255.8},30,cjs.Ease.quadInOut).to({y:228.2},30,cjs.Ease.quadInOut).to({regX:133.6,rotation:35.2,x:556.4,y:477.9},20,cjs.Ease.quadInOut).to({_off:true},1).wait(163));

	// phone3.png
	this.instance_4 = new lib.Symbol38();
	this.instance_4.parent = this;
	this.instance_4.setTransform(87.6,498.9,1,1,0,0,0,166.5,123);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(31).to({_off:false},0).to({x:225.5,y:317},24,cjs.Ease.quadInOut).to({y:330.8},30,cjs.Ease.quadInOut).to({y:317},30,cjs.Ease.quadInOut).to({y:330.8},30,cjs.Ease.quadInOut).to({y:303.2},30,cjs.Ease.quadInOut).to({regX:166.6,rotation:35.2,x:536.7,y:479.6},20,cjs.Ease.quadInOut).to({_off:true},1).wait(154));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-58.7,246.5,374.1,375.4);


(lib.Symbol2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.Symbol26();
	this.instance_1.parent = this;
	this.instance_1.setTransform(11.7,441.3,1,1,0,0,0,890.5,963.9);
	this.instance_1.filters = [new cjs.ColorFilter(0.73, 0.73, 0.73, 1, 0, 0, 0, 0)];
	this.instance_1.cache(-2,-1403,2911,3333);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:-1126.9,y:1823.7},349).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-878.8,-1923.5,2907.4,3328.7);


(lib.Symbol5copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol2copy();
	this.instance.parent = this;
	this.instance.setTransform(10,5.5,1,1,0,0,0,10,5.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:0.2,y:5.6},4).to({scaleY:1,y:5.5},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(7,4,6.5,3.6);


(lib.Symbol5_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(255,250,140,0.31)","rgba(255,250,140,0)"],[0,1],0,0,0,0,0,15.4).s().p("AhnBvQgugrgCg/QgCg+ArguQArguA/gCQA+gCAuArQAuAsACA+QACA/gsAtQgrAug/ACIgEAAQg7AAgsgpg");
	this.shape.setTransform(5.7,5.7);

	this.instance_1 = new lib.Symbol34();
	this.instance_1.parent = this;
	this.instance_1.setTransform(3.5,5.8,1,0.78,0,0,0,15.2,15.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.instance_1}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape).wait(8).to({_off:true},1).wait(1));

	// Layer 1
	this.instance_2 = new lib.Symbol2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(10,5.5,1,1,0,0,0,10,5.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleY:0.2,y:5.6},4).to({scaleY:1,y:5.5},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.5,-9.5,30.4,30.4);


(lib.Symbol4copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol6copy();
	this.instance.parent = this;
	this.instance.setTransform(9,7,1,1,0,0,0,9,7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:0.17},2).to({scaleY:1},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(6,4,7.1,5.5);


(lib.Symbol4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance_1 = new lib.Symbol34();
	this.instance_1.parent = this;
	this.instance_1.setTransform(4.9,6.7,1,0.78,0,0,0,15.2,15.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(5));

	// Layer 1
	this.instance_2 = new lib.Symbol6_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(9,7,1,1,0,0,0,9,7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleY:0.17},2).to({scaleY:1},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.3,-5.2,30,23.4);


(lib.Symbol3copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol7copy();
	this.instance.parent = this;
	this.instance.setTransform(7.5,8,1,1,0,0,0,7.5,8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-360},39).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(5,5,5.5,5.9);


(lib.Symbol3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance_5 = new lib.Symbol34();
	this.instance_5.parent = this;
	this.instance_5.setTransform(6.4,10,1,0.78,60,0,0,15.2,15.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(40));

	// Layer 1
	this.instance_6 = new lib.Symbol7_1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(7.5,8,1,1,0,0,0,7.5,8);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({rotation:-360},39).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.2,-9,35.3,37.7);


(lib.Symbol1copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Symbol 5
	this.instance = new lib.Symbol5copy();
	this.instance.parent = this;
	this.instance.setTransform(97,36.5,1,1,180,0,0,10,5.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:142.6,x:76.7,y:429.8},109).wait(1));

	// Symbol 4
	this.instance_1 = new lib.Symbol4copy();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-2,294.2,1,1,91,0,0,9.1,6.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:9,regY:7,rotation:22.6,x:-1.7,y:491.8},62).wait(1).to({rotation:180,x:-3,y:38},0).to({regX:9.1,rotation:95.1,x:-2.2,y:282.5},46).wait(1));

	// Symbol 3
	this.instance_2 = new lib.Symbol3copy();
	this.instance_2.parent = this;
	this.instance_2.setTransform(40.4,397,0.997,0.997,148.4,0,0,7.5,7.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regY:8,scaleX:1,scaleY:1,rotation:142.6,x:39,y:461.8},53).wait(1).to({rotation:180,x:47.5,y:39},0).to({scaleX:1,scaleY:1,rotation:149.4,x:40.6,y:386},55).wait(1));

	// Symbol 5
	this.instance_3 = new lib.Symbol5copy();
	this.instance_3.parent = this;
	this.instance_3.setTransform(255.8,102.1,1,1,-178,0,0,10,5.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:-165,x:251.7,y:462},79).wait(2).to({regY:5.5,rotation:-180,x:256.5,y:36.5},0).to({rotation:-178.2,x:255.8,y:91.1},28).wait(1));

	// Symbol 4
	this.instance_4 = new lib.Symbol4copy();
	this.instance_4.parent = this;
	this.instance_4.setTransform(163.9,203.7,0.998,0.998,-155.4,0,0,8.8,7);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regX:9,scaleX:1,scaleY:1,rotation:-120,x:174,y:441.5},68).wait(1).to({rotation:-180,x:156.5,y:38},0).to({scaleX:1,scaleY:1,rotation:-157,x:163.3,y:193.2},40).wait(1));

	// Symbol 3
	this.instance_5 = new lib.Symbol3copy();
	this.instance_5.parent = this;
	this.instance_5.setTransform(198.9,462.8,0.997,0.997,-123.1,0,0,7.5,8.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regX:7.4,scaleX:1,scaleY:1,rotation:-120,x:198.5,y:485.7},49).wait(1).to({regX:7.5,regY:8,rotation:-180,x:207,y:39},0).to({scaleX:1,scaleY:1,rotation:-124.6,x:199.2,y:451.4},59).wait(1));

	// Symbol 5
	this.instance_6 = new lib.Symbol5copy();
	this.instance_6.parent = this;
	this.instance_6.setTransform(410.8,340.5,0.997,0.997,-120,0,0,9.9,5.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({regX:10,scaleX:1,scaleY:1,rotation:-90,x:404.4,y:492.5},58).wait(1).to({rotation:-180,x:423.4,y:36.5},0).to({scaleX:1,scaleY:1,rotation:-122.3,x:411.2,y:328.7},50).wait(1));

	// Symbol 4
	this.instance_7 = new lib.Symbol4copy();
	this.instance_7.parent = this;
	this.instance_7.setTransform(316.9,144.4,0.997,0.997,132.3,0,0,9,7);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({regY:6.9,scaleX:1,scaleY:1,rotation:10.7,x:300.2,y:415.6},73).wait(1).to({regY:7,rotation:180,x:323.4,y:38},0).to({scaleX:1,scaleY:1,rotation:136.6,x:317.5,y:134.7},35).wait(1));

	// Symbol 3
	this.instance_8 = new lib.Symbol3copy();
	this.instance_8.parent = this;
	this.instance_8.setTransform(388.2,246.2,0.999,0.999,-170.5,0,0,7.5,8);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({scaleX:1,scaleY:1,rotation:-161.2,x:401.9,y:443},64).wait(1).to({rotation:-180,x:373.9,y:39},0).to({scaleX:1,scaleY:1,rotation:-171,x:387.6,y:235.8},44).wait(1));

	// Symbol 5
	this.instance_9 = new lib.Symbol5copy();
	this.instance_9.parent = this;
	this.instance_9.setTransform(582.9,36.5,1,1,180,0,0,10,5.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({rotation:255,x:591.8,y:461.9},109).wait(1));

	// Symbol 4
	this.instance_10 = new lib.Symbol4copy();
	this.instance_10.parent = this;
	this.instance_10.setTransform(471.4,367.8,0.999,0.999,79.7,0,0,9.1,7);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({regX:9,scaleX:1,scaleY:1,rotation:53.8,x:468.3,y:452.9},55).wait(1).to({rotation:180,x:482.9,y:38},0).to({rotation:83,x:471.7,y:357.1},53).wait(1));

	// Symbol 3
	this.instance_11 = new lib.Symbol3copy();
	this.instance_11.parent = this;
	this.instance_11.setTransform(544.5,135.4,0.999,0.999,170,0,0,7.5,8);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({scaleX:1,scaleY:1,rotation:140,x:576.6,y:414.7},74).wait(1).to({rotation:180,x:533.4,y:39},0).to({scaleX:1,scaleY:1,rotation:170.9,x:543.5,y:125.7},34).wait(1));

	// Symbol 5
	this.instance_12 = new lib.Symbol5copy();
	this.instance_12.parent = this;
	this.instance_12.setTransform(508.8,274.5,0.997,0.997,-59.4,0,0,10,5.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({scaleX:1,scaleY:1,rotation:-105,x:506.2,y:433},62).wait(1).to({rotation:0,x:512,y:69.5},0).to({scaleX:1,scaleY:1,rotation:-56.6,x:509,y:265.1},46).wait(1));

	// Symbol 4
	this.instance_13 = new lib.Symbol4copy();
	this.instance_13.parent = this;
	this.instance_13.setTransform(574.4,443.1,0.998,0.998,65.4,0,0,9.1,7);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({scaleX:1,scaleY:1,rotation:75,x:568.9,y:498.2},52).wait(1).to({regX:9,rotation:0,x:612,y:68},0).to({regX:9.1,scaleX:1,scaleY:1,rotation:63.5,x:575.5,y:432.1},56).wait(1));

	// Symbol 3
	this.instance_14 = new lib.Symbol3copy();
	this.instance_14.parent = this;
	this.instance_14.setTransform(561.1,96.5,0.999,0.999,13.1,0,0,7.5,8.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).to({regY:8,scaleX:1,scaleY:1,rotation:173,x:556.9,y:449},85).wait(2).to({rotation:0,x:561.5,y:67},0).to({regY:8.1,rotation:8.8,x:561.2,y:86.7},22).wait(1));

	// Symbol 5
	this.instance_15 = new lib.Symbol5copy();
	this.instance_15.parent = this;
	this.instance_15.setTransform(360.4,213.8,0.999,0.999,6,0,0,10.1,5.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).to({scaleX:1,scaleY:1,rotation:15,x:371.5,y:421.5},68).wait(1).to({regX:10,rotation:0,x:352.5,y:69.5},0).to({regX:10.1,rotation:5.8,x:359.9,y:204.8},40).wait(1));

	// Symbol 4
	this.instance_16 = new lib.Symbol4copy();
	this.instance_16.parent = this;
	this.instance_16.setTransform(474.4,316.9,0.997,0.997,-44.3,0,0,9,7);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).to({scaleX:1,scaleY:1,rotation:-75,x:489.4,y:490},61).wait(1).to({rotation:0,x:452.5,y:68},0).to({regX:9.1,scaleX:1,scaleY:1,rotation:-42.3,x:473.4,y:306},47).wait(1));

	// Symbol 3
	this.instance_17 = new lib.Symbol3copy();
	this.instance_17.parent = this;
	this.instance_17.setTransform(381,367.5,0.998,0.998,117.3,0,0,7.5,8);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).to({scaleX:1,scaleY:1,rotation:158,x:373.9,y:471},57).wait(1).to({rotation:0,x:402,y:67},0).to({scaleX:1,scaleY:1,rotation:113.3,x:381.7,y:357.1},51).wait(1));

	// Symbol 5
	this.instance_18 = new lib.Symbol5copy();
	this.instance_18.parent = this;
	this.instance_18.setTransform(185.5,69.5,1,1,0,0,0,10,5.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).to({regX:10.1,rotation:165,x:161.3,y:482.4},109).wait(1));

	// Symbol 4
	this.instance_19 = new lib.Symbol4copy();
	this.instance_19.parent = this;
	this.instance_19.setTransform(293.6,423.3,0.998,0.998,26.8,0,0,9.1,7);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).to({regX:9,scaleX:1,scaleY:1,rotation:30,x:294.5,y:463.7},51).wait(1).to({rotation:0,x:285.5,y:68},0).to({regX:9.1,scaleX:1,scaleY:1,rotation:26.1,x:293.4,y:413.1},57).wait(1));

	// Symbol 3
	this.instance_20 = new lib.Symbol3copy();
	this.instance_20.parent = this;
	this.instance_20.setTransform(241.1,177.9,0.999,0.999,-11.3,0,0,7.5,8.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).to({scaleX:1,scaleY:1,rotation:-45,x:258.2,y:498.7},74).wait(1).to({regY:8,rotation:0,x:235,y:67},0).to({regY:8.1,scaleX:1,scaleY:1,rotation:-10.3,x:240.3,y:166.7},34).wait(1));

	// Symbol 5
	this.instance_21 = new lib.Symbol5copy();
	this.instance_21.parent = this;
	this.instance_21.setTransform(34.6,322.9,0.997,0.997,39.8,0,0,10.1,5.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_21).to({scaleX:1,scaleY:1,rotation:67.6,x:40.5,y:499.1},63).wait(1).to({regX:10,rotation:0,x:26,y:69.5},0).to({regX:10.1,scaleX:1,scaleY:1,rotation:38.1,x:34.2,y:311.9},45).wait(1));

	// Symbol 4
	this.instance_22 = new lib.Symbol4copy();
	this.instance_22.parent = this;
	this.instance_22.setTransform(131.5,356,0.997,0.997,47.6,0,0,9.1,7);

	this.timeline.addTween(cjs.Tween.get(this.instance_22).to({scaleX:1,scaleY:1,rotation:60,x:132.9,y:430.2},55).wait(1).to({regX:9,rotation:0,x:126,y:68},0).to({regX:9.1,scaleX:1,scaleY:1,rotation:46.1,x:131.4,y:346.7},53).wait(1));

	// Symbol 3
	this.instance_23 = new lib.Symbol3copy();
	this.instance_23.parent = this;
	this.instance_23.setTransform(75.5,67,1,1,0,0,0,7.5,8);

	this.timeline.addTween(cjs.Tween.get(this.instance_23).to({regY:8.1,rotation:52.6,x:78.2,y:467},109).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.7,34.5,590.7,432.1);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Symbol 5
	this.instance = new lib.Symbol5_1();
	this.instance.parent = this;
	this.instance.setTransform(97,36.5,1,1,180,0,0,10,5.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:142.6,x:76.7,y:429.8},76).wait(1));

	// Symbol 4
	this.instance_1 = new lib.Symbol4_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-2,294.2,1,1,91,0,0,9.1,6.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:9,regY:7,rotation:22.6,x:-1.7,y:491.8},41).wait(1).to({rotation:180,x:-3,y:38},0).to({regX:9.1,rotation:95.1,x:-2.2,y:282.5},34).wait(1));

	// Symbol 3
	this.instance_2 = new lib.Symbol3_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(40.4,397,0.997,0.997,148.4,0,0,7.5,7.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regY:8,scaleX:1,scaleY:1,rotation:142.6,x:39,y:461.8},33).wait(1).to({rotation:180,x:47.5,y:39},0).to({scaleX:1,scaleY:1,rotation:149.4,x:40.6,y:386},42).wait(1));

	// Symbol 5
	this.instance_3 = new lib.Symbol5_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(255.8,102.1,1,1,-178,0,0,10,5.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:-165,x:251.7,y:462},57).wait(1).to({regY:5.5,rotation:-180,x:256.5,y:36.5},0).to({rotation:-178.2,x:255.8,y:91.1},18).wait(1));

	// Symbol 4
	this.instance_4 = new lib.Symbol4_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(163.9,203.7,0.998,0.998,-155.4,0,0,8.8,7);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regX:9,scaleX:1,scaleY:1,rotation:-120,x:174,y:441.5},47).wait(1).to({rotation:-180,x:156.5,y:38},0).to({scaleX:1,scaleY:1,rotation:-157,x:163.3,y:193.2},28).wait(1));

	// Symbol 3
	this.instance_5 = new lib.Symbol3_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(198.9,462.8,0.997,0.997,-123.1,0,0,7.5,8.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regX:7.4,scaleX:1,scaleY:1,rotation:-120,x:198.5,y:485.7},29).wait(1).to({regX:7.5,regY:8,rotation:-180,x:207,y:39},0).to({scaleX:1,scaleY:1,rotation:-124.6,x:199.2,y:451.4},46).wait(1));

	// Symbol 5
	this.instance_6 = new lib.Symbol5_1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(410.8,340.5,0.997,0.997,-120,0,0,9.9,5.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({regX:10,scaleX:1,scaleY:1,rotation:-90,x:404.4,y:492.5},37).wait(1).to({rotation:-180,x:423.4,y:36.5},0).to({scaleX:1,scaleY:1,rotation:-122.3,x:411.2,y:328.7},38).wait(1));

	// Symbol 4
	this.instance_7 = new lib.Symbol4_1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(316.9,144.4,0.997,0.997,132.3,0,0,9,7);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({regY:6.9,scaleX:1,scaleY:1,rotation:10.7,x:300.2,y:415.6},52).wait(1).to({regY:7,rotation:180,x:323.4,y:38},0).to({scaleX:1,scaleY:1,rotation:136.6,x:317.5,y:134.7},23).wait(1));

	// Symbol 3
	this.instance_8 = new lib.Symbol3_1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(388.2,246.2,0.999,0.999,-170.5,0,0,7.5,8);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({scaleX:1,scaleY:1,rotation:-161.2,x:401.9,y:443},43).wait(1).to({rotation:-180,x:373.9,y:39},0).to({scaleX:1,scaleY:1,rotation:-171,x:387.6,y:235.8},32).wait(1));

	// Symbol 5
	this.instance_9 = new lib.Symbol5_1();
	this.instance_9.parent = this;
	this.instance_9.setTransform(582.9,36.5,1,1,180,0,0,10,5.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({rotation:255,x:591.8,y:461.9},76).wait(1));

	// Symbol 4
	this.instance_10 = new lib.Symbol4_1();
	this.instance_10.parent = this;
	this.instance_10.setTransform(471.4,367.8,0.999,0.999,79.7,0,0,9.1,7);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({regX:9,scaleX:1,scaleY:1,rotation:53.8,x:468.3,y:452.9},35).wait(1).to({rotation:180,x:482.9,y:38},0).to({rotation:83,x:471.7,y:357.1},40).wait(1));

	// Symbol 3
	this.instance_11 = new lib.Symbol3_1();
	this.instance_11.parent = this;
	this.instance_11.setTransform(544.5,135.4,0.999,0.999,170,0,0,7.5,8);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({scaleX:1,scaleY:1,rotation:140,x:576.6,y:414.7},53).wait(1).to({rotation:180,x:533.4,y:39},0).to({scaleX:1,scaleY:1,rotation:170.9,x:543.5,y:125.7},22).wait(1));

	// Symbol 5
	this.instance_12 = new lib.Symbol5_1();
	this.instance_12.parent = this;
	this.instance_12.setTransform(508.8,274.5,0.997,0.997,-59.4,0,0,10,5.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({scaleX:1,scaleY:1,rotation:-105,x:506.2,y:433},41).wait(1).to({rotation:0,x:512,y:69.5},0).to({scaleX:1,scaleY:1,rotation:-56.6,x:509,y:265.1},34).wait(1));

	// Symbol 4
	this.instance_13 = new lib.Symbol4_1();
	this.instance_13.parent = this;
	this.instance_13.setTransform(574.4,443.1,0.998,0.998,65.4,0,0,9.1,7);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({scaleX:1,scaleY:1,rotation:75,x:568.9,y:498.2},32).wait(1).to({regX:9,rotation:0,x:612,y:68},0).to({regX:9.1,scaleX:1,scaleY:1,rotation:63.5,x:575.5,y:432.1},43).wait(1));

	// Symbol 3
	this.instance_14 = new lib.Symbol3_1();
	this.instance_14.parent = this;
	this.instance_14.setTransform(561.1,96.5,0.999,0.999,13.1,0,0,7.5,8.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).to({regY:8,scaleX:1,scaleY:1,rotation:173,x:556.9,y:449},60).wait(1).to({rotation:0,x:561.5,y:67},0).to({regY:8.1,rotation:8.8,x:561.2,y:86.7},15).wait(1));

	// Symbol 5
	this.instance_15 = new lib.Symbol5_1();
	this.instance_15.parent = this;
	this.instance_15.setTransform(360.4,213.8,0.999,0.999,6,0,0,10.1,5.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).to({scaleX:1,scaleY:1,rotation:15,x:371.5,y:421.5},47).wait(1).to({regX:10,rotation:0,x:352.5,y:69.5},0).to({regX:10.1,rotation:5.8,x:359.9,y:204.8},28).wait(1));

	// Symbol 4
	this.instance_16 = new lib.Symbol4_1();
	this.instance_16.parent = this;
	this.instance_16.setTransform(474.4,316.9,0.997,0.997,-44.3,0,0,9,7);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).to({scaleX:1,scaleY:1,rotation:-75,x:489.4,y:490},40).wait(1).to({rotation:0,x:452.5,y:68},0).to({regX:9.1,scaleX:1,scaleY:1,rotation:-42.3,x:473.4,y:306},35).wait(1));

	// Symbol 3
	this.instance_17 = new lib.Symbol3_1();
	this.instance_17.parent = this;
	this.instance_17.setTransform(381,367.5,0.998,0.998,117.3,0,0,7.5,8);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).to({scaleX:1,scaleY:1,rotation:158,x:373.9,y:471},37).wait(1).to({rotation:0,x:402,y:67},0).to({scaleX:1,scaleY:1,rotation:113.3,x:381.7,y:357.1},38).wait(1));

	// Symbol 5
	this.instance_18 = new lib.Symbol5_1();
	this.instance_18.parent = this;
	this.instance_18.setTransform(185.5,69.5,1,1,0,0,0,10,5.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).to({regX:10.1,rotation:165,x:161.3,y:482.4},76).wait(1));

	// Symbol 4
	this.instance_19 = new lib.Symbol4_1();
	this.instance_19.parent = this;
	this.instance_19.setTransform(293.6,423.3,0.998,0.998,26.8,0,0,9.1,7);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).to({regX:9,scaleX:1,scaleY:1,rotation:30,x:294.5,y:463.7},31).wait(1).to({rotation:0,x:285.5,y:68},0).to({regX:9.1,scaleX:1,scaleY:1,rotation:26.1,x:293.4,y:413.1},44).wait(1));

	// Symbol 3
	this.instance_20 = new lib.Symbol3_1();
	this.instance_20.parent = this;
	this.instance_20.setTransform(241.1,177.9,0.999,0.999,-11.3,0,0,7.5,8.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).to({scaleX:1,scaleY:1,rotation:-45,x:258.2,y:498.7},53).wait(1).to({regY:8,rotation:0,x:235,y:67},0).to({regY:8.1,scaleX:1,scaleY:1,rotation:-10.3,x:240.3,y:166.7},22).wait(1));

	// Symbol 5
	this.instance_21 = new lib.Symbol5_1();
	this.instance_21.parent = this;
	this.instance_21.setTransform(34.6,322.9,0.997,0.997,39.8,0,0,10.1,5.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_21).to({scaleX:1,scaleY:1,rotation:67.6,x:40.5,y:499.1},43).wait(1).to({regX:10,rotation:0,x:26,y:69.5},0).to({regX:10.1,scaleX:1,scaleY:1,rotation:38.1,x:34.2,y:311.9},32).wait(1));

	// Symbol 4
	this.instance_22 = new lib.Symbol4_1();
	this.instance_22.parent = this;
	this.instance_22.setTransform(131.5,356,0.997,0.997,47.6,0,0,9.1,7);

	this.timeline.addTween(cjs.Tween.get(this.instance_22).to({scaleX:1,scaleY:1,rotation:60,x:132.9,y:430.2},35).wait(1).to({regX:9,rotation:0,x:126,y:68},0).to({regX:9.1,scaleX:1,scaleY:1,rotation:46.1,x:131.4,y:346.7},40).wait(1));

	// Symbol 3
	this.instance_23 = new lib.Symbol3_1();
	this.instance_23.parent = this;
	this.instance_23.setTransform(75.5,67,1,1,0,0,0,7.5,8);

	this.timeline.addTween(cjs.Tween.get(this.instance_23).to({regY:8.1,rotation:52.6,x:78.2,y:467},76).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.6,21.1,616,460.3);


(lib.Symbol44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol31();
	this.instance.parent = this;
	this.instance.setTransform(125,21.9,1,1,0,0,0,125,21.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol44, new cjs.Rectangle(0,0,250,43.7), null);


(lib.Symbol43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol32();
	this.instance.parent = this;
	this.instance.setTransform(123.6,44.1,1,1,0,0,0,123.6,44.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol43, new cjs.Rectangle(0,0,247.2,88.3), null);


(lib.Symbol41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol30();
	this.instance.parent = this;
	this.instance.setTransform(123.6,30.2,1,1,0,0,0,123.6,30.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol41, new cjs.Rectangle(0,0,247.2,60.4), null);


(lib.Symbol40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ACPDLQgUgHgOgPQgOgOgHgVQgIgVAAgbIAAhVQAAg1AdgdQAOgPAUgHQAUgIAYAAQAaAAATAIQAUAHAPAPQAcAdAAA1IAABVQAAAbgHAVQgHAVgOAOQgdAegzAAQgYAAgUgIgACWgfQgNAPAAAdIAABVQAAA8AyAAQAaAAANgPQAMgPAAgeIAAhVQAAgdgMgPQgNgPgaAAQgZAAgMAPgAKoDLQgTgIgOgOQgcgdAAg1IAAhZQAAgZAHgUQAHgUAOgPQAbgdAxAAQAyAAAcAdQAOAPAIAUQAHAUAAAZIAABCIibAAIAAAXQAAA7AxAAQAZAAAMgLQAMgLAEgZIA5AAQgCAYgJASQgIASgOANQgdAagxAAQgZAAgSgHgAKjAKIAAAZIBjAAIAAgZQAAg6gyAAQgxAAAAA6gAuWDLQgSgHgPgOQgdgdAAguIAAjHQAAgvAcgcQAdgcAuAAQAVAAASAHQASAHAOANQAcAcACAuIg4AAQgCgXgMgMQgMgNgTAAQgVAAgNANQgNAMAAAXIAAA9QAWgUAhAAQAVAAAQAHQASAHANANQAOAOAHARQAHASAAAVIAAA/QAAAXgHATQgIASgOAPQgeAcgtAAQgWAAgTgHgAuPAKQgNANAAAZIAAA6QAAAYANAOQANANAVAAQAVAAANgNQANgOAAgYIAAg7QAAgYgNgNQgNgNgWAAQgUAAgNANgAyeDLQgTgHgOgPQgcgdgBg2IA3AAQADA7AuAAQANAAAKgEQAJgEAGgHQANgQAAgiIAAgYQAAgfgPgOQgOgNgcAAIglAAIAAglIBIhwIh4AAIAAgyIC8AAIAAAlIhOB4QAVABARAHQAQAIALAOQALANAGARQAGASAAAVIAAAaQAAAdgHAVQgHAWgNAPQgNAPgUAHQgUAIgaAAQgYAAgTgHgAScDMIhAiSIhACSIhAAAIBgjMIhbi9IBBAAIA6CGIA7iGIBAAAIhbC9IBhDMgAH6DMIAAi4QAAgjgLgQQgKgQgWAAQgYAAgOASQgOASAAAfIAAC4Ig4AAIAAknIAoAAIAGAhQAZgpAyAAQAVAAAPAIQAQAHALAPQAXAdAAA6IAAC6gAggDMIAAizIgCggQgDgOgFgJQgKgRgWAAQgZAAgOASQgOASAAAfIAAC4Ig4AAIAAmVIA4AAIAACKQANgSARgJQAQgJAWAAQApAAAVAfQAVAfAAA8IAAC1gAnRDMIAAmJIBrAAQAeAAAXAJQAXAIAQARQAhAhAAA8QAAA+ghAgQgQARgXAIQgXAIgeAAIgwAAIAACLgAmWAMIAwAAQBBAAAAhKQAAgkgQgSQgRgTggAAIgwAAgApTDMIAAknIA4AAIAAEngApQiXQgKgJAAgPQAAgPAKgKQAKgKAPAAQAQAAAKAKQAKAKAAAPQAAAPgKAJQgKAKgQAAQgPAAgKgKg");
	mask.setTransform(125.6,22.3);

	// Layer 2
	this.instance = new lib.Symbol45();
	this.instance.parent = this;
	this.instance.setTransform(-50.9,24.5,1,1,0,0,0,50.9,68.4);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:322.5},29).wait(21));

	// Layer 1
	this.instance_1 = new lib.Symbol44();
	this.instance_1.parent = this;
	this.instance_1.setTransform(125,21.9,1,1,0,0,0,125,21.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(50));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,250,43.7);


(lib.Symbol39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol43();
	this.instance.parent = this;
	this.instance.setTransform(123.6,44.1,1,1,0,0,0,123.6,44.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.11,scaleY:1.11,y:44.2},19,cjs.Ease.quadInOut).to({scaleX:1,scaleY:1,y:44.1},20,cjs.Ease.quadInOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,247.2,88.3);


(lib.Symbol25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// tek
	this.instance = new lib.Symbol13("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-243,326.5,1,1,0,0,0,112,40.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(179).to({_off:false},0).to({_off:true},150).wait(21));

	// cards
	this.instance_1 = new lib.Symbol18();
	this.instance_1.parent = this;
	this.instance_1.setTransform(49.1,240.3,1,1,0,0,0,49.1,66.2);

	this.instance_2 = new lib.Symbol12("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(261.9,166.3,1,1,0,0,0,261.9,140.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[]},179).to({state:[{t:this.instance_2}]},20).to({state:[]},150).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,174.1,98.4,132.5);


(lib.Symbol24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Symbol 32
	this.instance = new lib.Symbol39();
	this.instance.parent = this;
	this.instance.setTransform(941.9,190,1,1,0,0,0,123.6,44.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(38).to({x:123.6,y:327.6},0).to({y:190},20,cjs.Ease.quadInOut).wait(61).to({x:801.8},15,cjs.Ease.get(-1)).to({_off:true},1).wait(215));

	// Symbol 31
	this.instance_1 = new lib.Symbol40();
	this.instance_1.parent = this;
	this.instance_1.setTransform(943.3,97.4,1,1,0,0,0,125,21.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(24).to({x:125,y:410},0).to({y:97.4},20,cjs.Ease.quadInOut).wait(79).to({x:803.2},15,cjs.Ease.get(-1)).to({_off:true},1).wait(211));

	// Symbol 30
	this.instance_2 = new lib.Symbol41();
	this.instance_2.parent = this;
	this.instance_2.setTransform(942.8,30.2,1,1,0,0,0,123.6,30.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(28).to({x:124.5,y:-166.4},0).to({y:30.2},20,cjs.Ease.quadInOut).wait(81).to({x:802.7},15,cjs.Ease.get(-1)).to({_off:true},1).wait(205));

	// Symbol 29
	this.instance_3 = new lib.Symbol42();
	this.instance_3.parent = this;
	this.instance_3.setTransform(941.9,-43.6,1,1,0,0,0,123.6,24.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(34).to({x:123.6,y:-240.2},0).to({y:-43.6},20,cjs.Ease.quadInOut).wait(81).to({x:801.8},15,cjs.Ease.get(-1)).to({_off:true},1).wait(199));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(716.4,-67.8,352,302);


(lib.Symbol8_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Symbol 1
	this.instance_1 = new lib.Symbol1copy();
	this.instance_1.parent = this;
	this.instance_1.setTransform(833.8,-28.9,0.988,1,0,0,180,9.7,5.5);

	this.instance_2 = new lib.Symbol1copy();
	this.instance_2.parent = this;
	this.instance_2.setTransform(591.7,-18.6,0.988,1,0,0,180,9.7,5.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(1));

	// Symbol 1
	this.instance_3 = new lib.Symbol1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-185.7,-22.6,1,1,0,0,0,9.8,5.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol8_1, new cjs.Rectangle(-209.1,-7,1057.1,460.3), null);


// stage content:
(lib.pd_iphX_600300 = function(mode,startPosition,loop) {
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

	// cards
	this.instance = new lib.Symbol25();
	this.instance.parent = this;
	this.instance.setTransform(188.4,504.5,1,1,0,0,0,140.4,165.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// tek2
	this.instance_1 = new lib.Symbol24();
	this.instance_1.parent = this;
	this.instance_1.setTransform(461.9,176.5,0.834,0.834,0,0,0,125.1,117.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// phones
	this.instance_2 = new lib.Symbol3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(177.2,225.2,0.871,0.871,0,0,0,234.2,225.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// confeti
	this.instance_3 = new lib.Symbol8_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(299.2,157.1,1,1,6,0,0,301.1,208.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// back
	this.instance_4 = new lib.Symbol2_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(879.8,-417.8,1,1,0,0,0,334.5,160.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33.5,-2351.8,2907.4,3328.7);
// library properties:
lib.properties = {
	id: 'D913EAF4EA1541679DBDC01E03D1CFB9',
	width: 600,
	height: 300,
	fps: 24,
	color: "#000000",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/_102two.png", id:"_102two"},
		{src:"images/_10one.png", id:"_10one"},
		{src:"images/_36iph.png", id:"_36iph"},
		{src:"images/Bitmap1.png", id:"Bitmap1"},
		{src:"images/buty.png", id:"buty"},
		{src:"images/con1.png", id:"con1"},
		{src:"images/con2.png", id:"con2"},
		{src:"images/con3.png", id:"con3"},
		{src:"images/fullho.png", id:"fullho"},
		{src:"images/gather.png", id:"gather"},
		{src:"images/kare.png", id:"kare"},
		{src:"images/orrr.png", id:"orrr"},
		{src:"images/PD_logo.png", id:"PD_logo"},
		{src:"images/phon2.png", id:"phon2"},
		{src:"images/phone1.png", id:"phone1"},
		{src:"images/phone3.png", id:"phone3"},
		{src:"images/que1.png", id:"que1"},
		{src:"images/que2.png", id:"que2"},
		{src:"images/ten1.png", id:"ten1"},
		{src:"images/ten2.png", id:"ten2"},
		{src:"images/ten3.png", id:"ten3"},
		{src:"images/ten4.png", id:"ten4"},
		{src:"images/win.png", id:"win"}
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
an.compositions['D913EAF4EA1541679DBDC01E03D1CFB9'] = {
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