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



(lib.bars = function() {
	this.initialize(img.bars);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,399,95);


(lib.button = function() {
	this.initialize(img.button);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,321,88);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,250,65);


(lib.players = function() {
	this.initialize(img.players);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,362);


(lib.shield = function() {
	this.initialize(img.shield);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,627,128);


(lib.wallet = function() {
	this.initialize(img.wallet);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,119);// helper functions:

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


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(171,34,17,0)","#AB2211","#AB2211","rgba(171,34,17,0)"],[0,0.259,0.753,1],-330.3,0,330.4,0).s().p("EgznAFeIAAq7MBnPAAAIAAK7g");
	this.shape.setTransform(330.4,35);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol10, new cjs.Rectangle(0,0,660.8,70.1), null);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AXgCWIAAgrIieAAIAAArIg2AAIAAhhIAbAAIAKgRQAHgOAEgSQAGgUAFgWQAEgbABgdIACgzICmAAIAADGIAiAAIAABhgAWCgxQgHAtgEARQgJAfgHAJIBSAAIAAiQIgzAAgAKrBsQgNgBgMgFQgMgEgLgIQgKgGgJgJQgJgHgIgLIgLgWQgFgNgDgNQgCgNABgPQgBgNACgOIAIgYQAEgMAHgKQAHgLAJgJQAIgJALgGQALgHALgFIAbgHQAOgDAPAAQANAAAOADQAOABALAFQAOAEAKAIQALAGAJAHQAJAJAGALQAHAKAFAMQAGAMACAOQADANAAAPQAAAOgDAMQgCAOgGAMQgFAMgHALQgGAKgJAJIgUAPQgKAGgOAFQgLAGgOABQgOADgNAAQgPAAgOgDgAKrhZQgNAEgKALQgJAKgHAOQgFAPgBAQQABARAFAMQAHAOAKALQAJAKANAGQAOAGAPAAQASAAANgGQAOgGAJgKQAJgLAEgOQAFgMAAgRQAAgQgFgPQgFgOgLgKQgJgLgNgEQgOgGgPAAQgRAAgMAGgA6tBsQgNgBgMgFQgNgEgKgIQgKgGgKgJQgIgJgHgKQgHgJgFgMQgEgNgDgNQgBgNgBgPQABgNABgOQACgMAEgMQAFgMAFgKQAGgLAKgJQAHgJALgGQAKgHAMgFIAbgHQAPgDAPAAQASAAAdAHQATAIAMAMIgaAqQgNgIgJgDQgOgEgQAAQgOAAgNAEQgMAGgLAJQgIALgHANQgFAPAAASQAAARAFAMQAHAQAIAKQALAJAPAGQANAGARAAQAPAAANgEQAPgFAMgJIAWAqQgFAIgJAEQgJAGgLADQgfAJgQAAQgPAAgOgDgAN9BrIAAj8ICXAAIAAA2IhfAAIAAApQALgDASAAQASAAAPAGQAPAEAMALQAKAKAHAPQAFANAAASQABAUgIAQQgGAPgMALQgOAMgSAEQgRAGgZAAIhEgBgAO1ADIAAAyIAVABQATAAAHgHQAGgGAAgMQAAgNgGgHQgIgJgOAAgAw5BrIAAj6QAqgDAhAAQAXAAAQAEQARAFAKAJQAJAJAHAKQAEAMAAAOQAAATgIAOQgHANgNAJIAAACQAFABAIAGQAGAFAFAGQAFAIAEAJQACAJAAAMQAAAUgHAPQgIAPgNAJQgMAKgSAFQgRAEgVAAQgzAAgVgBgAwAA1QAIABAMAAQAQAAAJgHQAIgGAAgOQAAgLgIgGQgHgGgQAAIgWAAgAwAhbIAAAvIAUAAQALAAAHgGQAHgGAAgOQAAgKgHgGQgIgGgMAAgAZhBoQgMgFgFgDIAUgxQAJAGAJAAQAHAAAFgDQAEgCACgGIAFgHIhui0IBCAAIBHB7IAzh7IA6AAIhWDAQgFAPgIAKQgHAMgKAIQgJAHgKADQgKAFgOAAQgLAAgKgDgARaBrIAAj8ICWAAIAAA2IhcAAIAAAtIBRAAIAAA1IhRAAIAAAuIBgAAIAAA2gAHaBrIAAjGIhYAAIAADGIg5AAIAAj8IDLAAIAAD8gACiBrIgVg1IhjAAIgVA1Ig6AAIBoj8IA0AAIBoD8gAB4AAIgchHIgdBHIA5AAgAh/BrIAAhnIhcAAIAABnIg4AAIAAj8IA4AAIAABgIBcAAIAAhgIA7AAIAAD8gAm7BrIgUg1IhjAAIgVA1Ig7AAIhKAAIhWh4IAAB4Ig4AAIAAj8IA4AAIAABuIBThuIBFAAIheB1IBmCHIBpj8IAzAAIBpD8gAnkAAIgdhHIgdBHIA6AAgAyXBrIgWg1IhjAAIgVA1Ig6AAIBpj8IAzAAIBpD8gAzCAAIgchHIgdBHIA5AAgA3oBrIAAjGIhNAAIAAg2IDSAAIAAA2IhMAAIAADGg");
	this.shape.setTransform(181.4,15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(0,0,362.7,30.1), null);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1.325,1.325);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(0,0,331.2,86.1), null);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.button();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(0,0,321,88), null);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.players();
	this.instance.parent = this;
	this.instance.setTransform(268,14);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(268,14,300,362), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.wallet();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1.358,1.358);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,745.4,161.6), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.shield();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1.354,1.354);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,849,173.3), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bars();
	this.instance.parent = this;
	this.instance.setTransform(-120,0,1.707,1.707);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(-120,0,681.1,162.2), null);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.Symbol9();
	this.instance.parent = this;
	this.instance.setTransform(113,36.7,1,1,0,0,0,181.3,15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 2
	this.instance_1 = new lib.Symbol10();
	this.instance_1.parent = this;
	this.instance_1.setTransform(113.1,35,1,1,0,0,0,330.4,35);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(-217.3,0,660.8,70.1), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// wallet.png
	this.instance = new lib.Symbol4();
	this.instance.parent = this;
	this.instance.setTransform(348.4,115.5,0.854,0.854,0,0,0,151.1,101.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(94).to({_off:false},0).to({x:121.5,alpha:1},15,cjs.Ease.get(1)).wait(40).to({x:-32.8,alpha:0},15).wait(1));

	// shield.png
	this.instance_1 = new lib.Symbol3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(349.2,116.4,0.854,0.854,0,0,0,180.1,102.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(39).to({_off:false},0).to({regX:180,x:146.4,alpha:1},15,cjs.Ease.get(1)).wait(40).to({regX:180.1,x:161.3,alpha:0},15).to({_off:true},47).wait(9));

	// bars.png
	this.instance_2 = new lib.Symbol2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(255.8,138.2,0.854,0.854,0,0,0,188.7,128);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(39).to({regX:188.6,x:159.2,alpha:0},15,cjs.Ease.get(1)).wait(95).to({regX:188.7,x:347.2},0).to({x:255.8,alpha:1},15,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.9,28.8,581.8,138.5);


// stage content:
(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		window._setCanvasSize = function() {
			
		    var s = getWindowSize();
			
				defaultScale = 1,
			
				minWidth = 500,
				minHeight = 500,
			
				scaleW = s.iw / minWidth,
				scaleH = s.ih / minHeight,
				scaleWH = scaleW * scaleH;
		
		    
		    /* Position */
		    
			
			_this.logo.x = ((s.iw > s.ih) ? s.iw * 0.24 : s.iw * 0.5);
			_this.logo.y = ((s.iw > s.ih) ? s.ih * 0.15 : s.ih * 0.1);
			
			_this.ico.x = ((s.iw > s.ih) ? s.iw * 0.71 : s.iw / 2);
			_this.ico.y = ((s.iw > s.ih) ? s.ih * 0.45 : s.ih * 0.35);
			
			_this.spons.x = ((s.iw > s.ih) ? s.iw * 0.73 : s.iw / 2);
			_this.spons.y = ((s.iw > s.ih) ? s.ih * 0.15 : s.ih * 0.21);
			
			_this.players.x = ((s.iw > s.ih) ? s.iw * 0.23 : s.iw / 2);
			_this.players.y = ((s.iw > s.ih) ? s.ih * 0.92 : s.ih * 0.88);
			
			_this.btn.x = ((s.iw > s.ih) ? s.iw * 0.73 : s.iw / 2);
			_this.btn.y = ((s.iw > s.ih) ? s.ih * 0.87 : s.ih * 0.92);
			
			
			function setScale(scale) {
				_this.logo.scaleX = _this.logo.scaleY = ((s.iw > s.ih) ? scale  : scale * 0.8);
				_this.ico.scaleX = _this.ico.scaleY = scale * 0.55;
				_this.spons.scaleX = _this.spons.scaleY = ((s.iw > s.ih) ? scale  : scale * 0.8);
				_this.players.scaleX = _this.players.scaleY = ((s.iw > s.ih) ? scale * 1.1 : scale * 1.2);
				_this.btn.scaleX = _this.btn.scaleY = ((s.iw > s.ih) ? scale * 1.1 : scale * 0.8);
			}
			
			setScale(defaultScale);
			
			
		
		    /* Rescale */
		
		    if(s.iw < minWidth) {
		        setScale(scaleW);
		    }
		
		    if(s.ih < minHeight) {
		        setScale(scaleH);
		    }
		
		    if(s.iw < minWidth && s.ih < minHeight) {
		        setScale(scaleWH);
		    }
		}
				
		window.onresize=function(){_setCanvasSize();}
		window.onresize();
		document.addEventListener("DOMContentLoaded", function(){ _setCanvasSize()});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Symbol 1
	this.ico = new lib.Symbol1();
	this.ico.parent = this;
	this.ico.setTransform(561.5,104.3,0.884,0.884,0,0,0,283.1,98);

	this.timeline.addTween(cjs.Tween.get(this.ico).wait(1));

	// button.png
	this.btn = new lib.Symbol6();
	this.btn.parent = this;
	this.btn.setTransform(528.5,626.6,1,1,0,0,0,160.5,44);

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(1));

	// logo.png
	this.logo = new lib.Symbol8();
	this.logo.parent = this;
	this.logo.setTransform(543.6,-171.3,1,1,0,0,0,165.6,43.1);

	this.timeline.addTween(cjs.Tween.get(this.logo).wait(1));

	// txt.png
	this.spons = new lib.Symbol7();
	this.spons.parent = this;
	this.spons.setTransform(518,-52.5,1,1,0,0,0,112,37.9);

	this.timeline.addTween(cjs.Tween.get(this.spons).wait(1));

	// Symbol 5
	this.players = new lib.Symbol5();
	this.players.parent = this;
	this.players.setTransform(544.1,554.6,1,1,0,0,0,431.1,309.6);

	this.timeline.addTween(cjs.Tween.get(this.players).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(700.7,169.6,660.8,885);
// library properties:
lib.properties = {
	width: 1024,
	height: 768,
	fps: 30,
	color: "#FFFFFF",
	opacity: 0.00,
	webfonts: {},
	manifest: [
		{src:"images/bars.png", id:"bars"},
		{src:"images/button.png", id:"button"},
		{src:"images/logo.png", id:"logo"},
		{src:"images/players.png", id:"players"},
		{src:"images/shield.png", id:"shield"},
		{src:"images/wallet.png", id:"wallet"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;