(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
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
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
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



(lib.back = function() {
	this.initialize(img.back);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2000,250);


(lib.bars = function() {
	this.initialize(img.bars);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,358,95);


(lib.basket = function() {
	this.initialize(img.basket);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,298);


(lib.button = function() {
	this.initialize(img.button);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,258,67);


(lib.kov = function() {
	this.initialize(img.kov);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,250,255);


(lib.lines = function() {
	this.initialize(img.lines);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,511);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,199,51);


(lib.shield = function() {
	this.initialize(img.shield);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,397,119);


(lib.smolovpngcopy = function() {
	this.initialize(img.smolovpngcopy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,521,300);


(lib.txt = function() {
	this.initialize(img.txt);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,106);


(lib.wallet = function() {
	this.initialize(img.wallet);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,393,119);// helper functions:

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


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.lines();
	this.instance.parent = this;
	this.instance.setTransform(-100,-255.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ16, new cjs.Rectangle(-100,-255.5,200,511), null);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(-130.8,-33.5,1.315,1.315);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ3, new cjs.Rectangle(-130.8,-33.5,261.8,67.1), null);


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// back.jpg
	this.instance = new lib.back();
	this.instance.parent = this;
	this.instance.setTransform(396,-8,0.966,0.966);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol16, new cjs.Rectangle(396,-8,1932.2,241.6), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.wallet();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1.358,1.358);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,533.6,161.6), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.txt();
	this.instance.parent = this;
	this.instance.setTransform(-52,80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(-52,80,300,106), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// logo.png
	this.instance = new lib.button();
	this.instance.parent = this;
	this.instance.setTransform(76,139,0.844,0.844);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(76,139,217.7,56.6), null);


(lib.Symbol3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.shield();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,1.354,1.354);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3_1, new cjs.Rectangle(0,0,537.6,161.2), null);


(lib.Symbol2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.bars();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-120,0,1.707,1.707);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2_1, new cjs.Rectangle(-120,0,611.1,162.2), null);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// basket.png
	this.instance = new lib.basket();
	this.instance.parent = this;
	this.instance.setTransform(115,-13,0.903,0.903);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// kov.png
	this.instance_1 = new lib.kov();
	this.instance_1.parent = this;
	this.instance_1.setTransform(66,4,0.77,0.77);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// smolov.png copy
	this.instance_2 = new lib.smolovpngcopy();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-137,11,0.728,0.728);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Слой_2
	this.instance_3 = new lib.Символ16();
	this.instance_3.parent = this;
	this.instance_3.setTransform(120.1,118.1,1.094,1.094);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(-137,-161.4,523,559), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol16();
	this.instance.parent = this;
	this.instance.setTransform(1052,127,1,1,0,0,0,1000,125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(448,-6,1932.2,241.6), null);


(lib.Symbol1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// wallet.png
	this.instance_1 = new lib.Symbol4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(348.4,115.5,0.854,0.854,0,0,0,151.1,101.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(94).to({_off:false},0).to({x:121.5,alpha:1},15,cjs.Ease.get(1)).wait(40).to({x:-32.8,alpha:0},15).wait(1));

	// shield.png
	this.instance_2 = new lib.Symbol3_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(349.2,116.4,0.854,0.854,0,0,0,180.1,102.5);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(39).to({_off:false},0).to({regX:180,x:146.4,alpha:1},15,cjs.Ease.get(1)).wait(40).to({regX:180.1,x:161.3,alpha:0},15).to({_off:true},47).wait(9));

	// bars.png
	this.instance_3 = new lib.Symbol2_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(255.8,138.2,0.854,0.854,0,0,0,188.7,128);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(39).to({regX:188.6,x:159.2,alpha:0},15,cjs.Ease.get(1)).wait(95).to({regX:188.7,x:347.2},0).to({x:255.8,alpha:1},15,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.9,28.8,522,138.5);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.ico = new lib.Symbol1_1();
	this.ico.parent = this;
	this.ico.setTransform(-1.6,-0.3,0.701,0.701,0,0,0,251.7,97.2);

	this.timeline.addTween(cjs.Tween.get(this.ico).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ2, new cjs.Rectangle(-183.7,-48.2,366.1,97.2), null);


// stage content:
(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//Prepare
		var _this=this;
		function getWindowSize() { 
		                return {
				width: Math.min(document.documentElement.clientWidth,       window.innerWidth || 0),
				height: Math.min(document.documentElement.clientHeight,    window.innerHeight || 0)
		                }
		}
		window._setCanvasSize = function() {
				var windowSize = getWindowSize();
				stage.canvas.style.width = windowSize.width + 'px';
				stage.canvas.style.height = 100 + 'px';
				stage.canvas.width = windowSize.width;
				stage.canvas.height = 100;
					
				
			
				_this.button.x = (windowSize.width*0.9);
				_this.button.y = 50;	
			
				_this.tren.x = (windowSize.width*0.5);
				_this.tren.y = 50;
			
				_this.spart.x = windowSize.width*0.33;
				_this.spart.y = 50;
			
				_this.foot.x = windowSize.width*0.7;
				_this.foot.y = 50;
			
				_this.back.x = windowSize.width/2;
				_this.back.y = 50;
				
				_this.logo.x = windowSize.width*0.1;
				_this.logo.y = 50;
			
				
				
				_this.tren.scaleX = 0.8;
				_this.tren.scaleY = 0.8;
				
				_this.spart.scaleX = 0.8;
				_this.spart.scaleY = 0.8;
				
				_this.foot.scaleX = 0.8;
				_this.foot.scaleY = 0.8;
				
				_this.logo.scaleX = 0.8;
				_this.logo.scaleY = 0.8;
					
				
				_this.button.scaleX = 0.8;
				_this.button.scaleY = 0.8;
			
				
				
				if(stage.canvas.width < 1400){
				
				_this.button.x = (windowSize.width*0.9);
				_this.button.y = 50;	
			
				_this.tren.x = (windowSize.width*0.52);
				_this.tren.y = 40;
			
				_this.spart.x = windowSize.width*0.33;
				_this.spart.y = 50;
			
				_this.foot.x = windowSize.width*0.72;
				_this.foot.y = 50;
			
				_this.back.x = windowSize.width/2;
				_this.back.y = 50;
				
				_this.logo.x = windowSize.width*0.1;
				_this.logo.y = 50;
			
				
				
				_this.tren.scaleX = 0.7;
				_this.tren.scaleY = 0.7;
				
				_this.spart.scaleX = 0.65;
				_this.spart.scaleY = 0.65;
				
				_this.foot.scaleX = 0.6;
				_this.foot.scaleY = 0.6;
				
				_this.logo.scaleX = 0.8;
				_this.logo.scaleY = 0.8;
					
				
				_this.button.scaleX = 0.8;
				_this.button.scaleY = 0.8;
			}
				
			if(stage.canvas.width < 1024){
				
				_this.button.x = (windowSize.width*0.88);
				_this.button.y = 72;	
			
				_this.tren.x = (windowSize.width*0.65);
				_this.tren.y = 40;
			
				_this.spart.x = windowSize.width < 900 ? windowSize.width*0.4 : windowSize.width*0.45;
				_this.spart.y = 50;
			
				_this.foot.x = windowSize.width*0.88;
				_this.foot.y = 28;
			
				_this.back.x = windowSize.width/2;
				_this.back.y = 50;
				
				_this.logo.x = windowSize.width*0.13;
				_this.logo.y = 50;
			
				
				
				_this.tren.scaleX = 0.65;
				_this.tren.scaleY = 0.65;
				
				_this.spart.scaleX = windowSize.width < 900 ? 0.5 : 0.7;
				_this.spart.scaleY = windowSize.width < 900 ? 0.5 : 0.7;
				
				_this.foot.scaleX = 0.35;
				_this.foot.scaleY = 0.35;
				
				_this.logo.scaleX = 0.6;
				_this.logo.scaleY = 0.6;
					
				
				_this.button.scaleX = 0.6;
				_this.button.scaleY = 0.6;
			}
				
			if(stage.canvas.width < 650){
				
				_this.button.x = (windowSize.width*0.88);
				_this.button.y = 72;	
			
				_this.tren.x = (windowSize.width*0.65);
				_this.tren.y = 40;
			
				_this.spart.x = windowSize.width*0.4;
				_this.spart.y = 50;
			
				_this.foot.x = windowSize.width*0.88;
				_this.foot.y = 28;
			
				_this.back.x = windowSize.width/2;
				_this.back.y = 50;
				
				_this.logo.x = windowSize.width*0.13;
				_this.logo.y = 50;
			
				
				
				_this.tren.scaleX = 0.65;
				_this.tren.scaleY = 0.65;
				
				_this.spart.scaleX = 0.4;
				_this.spart.scaleY = 0.4;
				
				_this.foot.scaleX = 0.35;
				_this.foot.scaleY = 0.35;
				
				_this.logo.scaleX = 0.6;
				_this.logo.scaleY = 0.6;
					
				
				_this.button.scaleX = 0.6;
				_this.button.scaleY = 0.6;
			}
			
			if(stage.canvas.width < 590){
				
				_this.button.x = (windowSize.width*0.865);
				_this.button.y = 72;	
			
				_this.tren.x = (windowSize.width*0.52);
				_this.tren.y = 40;
			
				_this.spart.x = windowSize.width*0.16;
				_this.spart.y = 70;
			
				_this.foot.x = windowSize.width*0.865;
				_this.foot.y = 28;
			
				_this.back.x = windowSize.width/2;
				_this.back.y = 50;
				
				_this.logo.x = windowSize.width*0.13;
				_this.logo.y = 25;
			
				
				
				_this.tren.scaleX = 0.65;
				_this.tren.scaleY = 0.65;
				
				_this.spart.scaleX = 0.4;
				_this.spart.scaleY = 0.4;
				
				_this.foot.scaleX = 0.35;
				_this.foot.scaleY = 0.35;
				
				_this.logo.scaleX = 0.45;
				_this.logo.scaleY = 0.45;
					
				
				_this.button.scaleX = 0.6;
				_this.button.scaleY = 0.6;
			}
			
			if(stage.canvas.width < 481){
				
				_this.button.x = (windowSize.width*0.75);
				_this.button.y = 72;	
			
				_this.tren.x = (windowSize.width*0.52);
				_this.tren.y = 440;
			
				_this.spart.x = windowSize.width*0.25;
				_this.spart.y = 70;
			
				_this.foot.x = windowSize.width*0.75;
				_this.foot.y = 28;
			
				_this.back.x = windowSize.width/2;
				_this.back.y = 50;
				
				_this.logo.x = windowSize.width*0.22;
				_this.logo.y = 25;
			
				
				
				_this.tren.scaleX = 0.65;
				_this.tren.scaleY = 0.65;
				
				_this.spart.scaleX = 0.4;
				_this.spart.scaleY = 0.4;
				
				_this.foot.scaleX = 0.35;
				_this.foot.scaleY = 0.35;
				
				_this.logo.scaleX = 0.45;
				_this.logo.scaleY = 0.45;
					
				
				_this.button.scaleX = 0.6;
				_this.button.scaleY = 0.6;
			}
		}
		
		window.onresize=function(){_setCanvasSize();}
		
		//clickTAG
		
		canvas.style.cursor = "pointer";
		canvas.addEventListener("click", function() {
		    window.callClick();
		});
		
		
		
		
		window.onresize();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 6
	this.button = new lib.Symbol2();
	this.button.parent = this;
	this.button.setTransform(1124,180.1,1,1,0,0,0,185,165.1);

	this.timeline.addTween(cjs.Tween.get(this.button).wait(1));

	// Layer 5
	this.foot = new lib.Symbol3();
	this.foot.parent = this;
	this.foot.setTransform(798.5,134.9,1,1,0,0,0,98.5,129.9);

	this.timeline.addTween(cjs.Tween.get(this.foot).wait(1));

	// Layer 4
	this.logo = new lib.Символ3();
	this.logo.parent = this;
	this.logo.setTransform(596.9,245.6);

	this.timeline.addTween(cjs.Tween.get(this.logo).wait(1));

	// Layer 3
	this.tren = new lib.Symbol5();
	this.tren.parent = this;
	this.tren.setTransform(-191.1,-324.2,1,1,0,0,0,125,43.8);

	this.timeline.addTween(cjs.Tween.get(this.tren).wait(1));

	// Layer 2
	this.spart = new lib.Символ2();
	this.spart.parent = this;
	this.spart.setTransform(599.5,-285.7);

	this.timeline.addTween(cjs.Tween.get(this.spart).wait(1));

	// Layer 1
	this.back = new lib.Symbol1();
	this.back.parent = this;
	this.back.setTransform(958,92.6,1,1,0,0,0,1413,94.6);

	this.timeline.addTween(cjs.Tween.get(this.back).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(506.9,-479.5,2378.4,808.6);
// library properties:
lib.properties = {
	width: 1920,
	height: 100,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/back.jpg", id:"back"},
		{src:"images/bars.png", id:"bars"},
		{src:"images/basket.png", id:"basket"},
		{src:"images/button.png", id:"button"},
		{src:"images/kov.png", id:"kov"},
		{src:"images/lines.png", id:"lines"},
		{src:"images/logo.png", id:"logo"},
		{src:"images/shield.png", id:"shield"},
		{src:"images/smolovpngcopy.png", id:"smolovpngcopy"},
		{src:"images/txt.png", id:"txt"},
		{src:"images/wallet.png", id:"wallet"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;