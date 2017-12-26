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
p.nominalBounds = new cjs.Rectangle(0,0,1920,292);


(lib.barspngcopy = function() {
	this.initialize(img.barspngcopy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,399,95);


(lib.button = function() {
	this.initialize(img.button);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,321,88);


(lib.lines = function() {
	this.initialize(img.lines);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,511);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,199,51);


(lib.players = function() {
	this.initialize(img.players);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,362);


(lib.shieldpngcopy = function() {
	this.initialize(img.shieldpngcopy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,627,128);


(lib.walletpngcopy = function() {
	this.initialize(img.walletpngcopy);
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
	this.instance.setTransform(-94,-122,1.094,1.094);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol16, new cjs.Rectangle(-94,-122,2100.8,319.5), null);


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


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// wallet.png copy
	this.instance = new lib.walletpngcopy();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1.369,1.369);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,751.9,163), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// logo.png
	this.instance = new lib.button();
	this.instance.parent = this;
	this.instance.setTransform(76,130,0.844,0.844);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(76,130,270.9,74.3), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.shieldpngcopy();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1.37,1.37);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,859.1,175.4), null);


(lib.Symbol2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bars.png copy
	this.instance_1 = new lib.barspngcopy();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-120,0,1.709,1.709);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2_1, new cjs.Rectangle(-120,0,682.1,162.4), null);


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


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// kov.png
	this.instance = new lib.players();
	this.instance.parent = this;
	this.instance.setTransform(-13,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой_2
	this.instance_1 = new lib.Символ16();
	this.instance_1.parent = this;
	this.instance_1.setTransform(120.1,118.1,1.094,1.094);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(-13,-161.4,300,559), null);


(lib.Symbol3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.spons = new lib.Symbol7();
	this.spons.parent = this;
	this.spons.setTransform(106.1,130,1,1,0,0,0,112,37.9);

	this.timeline.addTween(cjs.Tween.get(this.spons).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3_1, new cjs.Rectangle(-223.3,92.1,660.8,70.1), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol16();
	this.instance.parent = this;
	this.instance.setTransform(1052,127,1,1,0,0,0,1000,125);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:1044.6},39,cjs.Ease.get(-1)).to({x:1038},35,cjs.Ease.get(1)).to({x:1044.7},36,cjs.Ease.get(-1)).to({x:1052},39,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42,-120,2100.8,319.5);


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
	this.instance_2 = new lib.Symbol3();
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
p.nominalBounds = new cjs.Rectangle(-7.9,28.8,582.7,138.8);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.ico = new lib.Symbol1_1();
	this.ico.parent = this;
	this.ico.setTransform(-16.6,-0.3,0.624,0.624,0,0,0,251.7,97.1);

	this.timeline.addTween(cjs.Tween.get(this.ico).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ2, new cjs.Rectangle(-178.6,-42.9,363.6,86.6), null);


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
					
				
			if(stage.canvas.width < 1920){
				_this.button.x = (windowSize.width*0.9);
				_this.button.y = 50;	
			
				_this.tren.x = (windowSize.width*0.5);
				_this.tren.y = 50;
			
				_this.spart.x = windowSize.width*0.31;
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
			}
				
				
				if(stage.canvas.width < 1400){
				
				_this.button.x = (windowSize.width*0.9);
				_this.button.y = 50;	
			
				_this.tren.x = (windowSize.width*0.52);
				_this.tren.y = 40;
			
				_this.spart.x = windowSize.width*0.31;
				_this.spart.y = 50;
			
				_this.foot.x = windowSize.width*0.70;
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
				
			if(stage.canvas.width < 1101){
				
				_this.button.x = (windowSize.width*0.88);
				_this.button.y = 72;	
			
				_this.tren.x = (windowSize.width*0.65);
				_this.tren.y = 40;
			
				_this.spart.x = windowSize.width < 900 ? windowSize.width*0.4 : windowSize.width*0.4;
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
				
			if(stage.canvas.width < 651){
				
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
	this.button.setTransform(1151,181.1,1,1,0,0,0,212,166.1);

	this.timeline.addTween(cjs.Tween.get(this.button).wait(1));

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

	// Layer 5
	this.foot = new lib.Symbol3_1();
	this.foot.parent = this;
	this.foot.setTransform(810.5,133,1,1,0,0,0,110.5,128);

	this.timeline.addTween(cjs.Tween.get(this.foot).wait(1));

	// Layer 1
	this.back = new lib.Symbol1();
	this.back.parent = this;
	this.back.setTransform(598,128.7,1,1,0,0,0,1053,130.7);

	this.timeline.addTween(cjs.Tween.get(this.back).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(103,-479.5,2100.8,808.6);
// library properties:
lib.properties = {
	width: 1200,
	height: 100,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/back.jpg", id:"back"},
		{src:"images/barspngcopy.png", id:"barspngcopy"},
		{src:"images/button.png", id:"button"},
		{src:"images/lines.png", id:"lines"},
		{src:"images/logo.png", id:"logo"},
		{src:"images/players.png", id:"players"},
		{src:"images/shieldpngcopy.png", id:"shieldpngcopy"},
		{src:"images/walletpngcopy.png", id:"walletpngcopy"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;