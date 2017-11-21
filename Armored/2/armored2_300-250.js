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



(lib.back = function() {
	this.initialize(img.back);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,700,354);


(lib.bodys = function() {
	this.initialize(img.bodys);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,463,220);


(lib.button = function() {
	this.initialize(img.button);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,250,65);


(lib.cloudia = function() {
	this.initialize(img.cloudia);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,315,196);


(lib.dull = function() {
	this.initialize(img.dull);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,192,101);


(lib.fireloop1_3 = function() {
	this.initialize(img.fireloop1_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,256,256);


(lib.gunbody = function() {
	this.initialize(img.gunbody);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,332,134);


(lib.gunss = function() {
	this.initialize(img.gunss);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,184,99);


(lib.heads = function() {
	this.initialize(img.heads);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,212,169);


(lib.logorealaction = function() {
	this.initialize(img.logorealaction);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,87);


(lib.stones = function() {
	this.initialize(img.stones);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,544,47);// helper functions:

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


(lib.Symbol40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#990000","rgba(102,0,0,0)"],[0.008,0.843],0,0,0,0,0,135).s().p("AutOPQmGl5AAoWQAAoUGGl6QGGl5InAAQIoAAGGF5QGGF6AAIUQAAIWmGF5QmGF5ooAAQonAAmGl5g");
	this.shape.setTransform(133.2,128.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol40, new cjs.Rectangle(0,0,266.4,257.6), null);


(lib.Symbol35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.fireloop1_3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol35, new cjs.Rectangle(0,0,256,256), null);


(lib.Symbol34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFF00").ss(1,1,1).p("AgeADIA9gF");
	this.shape.setTransform(3.1,0.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol34, new cjs.Rectangle(-1,-1,8.2,2.7), null);


(lib.Symbol32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFF00").ss(1,1,1).p("AAsgEIhXAJ");
	this.shape.setTransform(4.4,0.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol32, new cjs.Rectangle(-1,-1,10.8,3), null);


(lib.Symbol26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.button();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.474,0.474);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol26, new cjs.Rectangle(0,0,118.4,30.8), null);


(lib.Symbol23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.fireloop1_3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol23, new cjs.Rectangle(0,0,256,256), null);


(lib.Symbol22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.gunss();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:2},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,184,99);


(lib.Symbol19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.gunbody();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol19, new cjs.Rectangle(0,0,332,134), null);


(lib.Symbol18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bodys();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol18, new cjs.Rectangle(0,0,463,220), null);


(lib.Symbol17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.heads();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#994E12").s().p("AAgAyIgLgGIgPgKQgWgPgIgIQgNgMgIgFIgLgIQgFgEgCgHQgBgIADgGQADgGAHgDQAGgDAHABQAFACAHAEIArAiIAVANIAQAKQAJAIABAIQACAMgMAHQgGADgGAAQgFAAgFgBg");
	this.shape.setTransform(73.8,104.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol17, new cjs.Rectangle(0,0,212,169), null);


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.dull();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol16, new cjs.Rectangle(0,0,192,101), null);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.stones();
	this.instance.parent = this;
	this.instance.setTransform(454.8,0,0.7,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol11, new cjs.Rectangle(74,0,380.8,47), null);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cloudia();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(0,0,315,196), null);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.logorealaction();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.659,0.659);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(0,0,197.9,57.4), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","rgba(255,255,114,0)"],[0,1],-0.1,-0.1,0,-0.1,-0.1,126.6).s().p("Ag1TSQn+gWlbl6QlYl5AVn+QAWn+F4lbQF5lYH+AVQIAAWFZF4QFaF5gVH+QgWIAl6FZQljFGnaAAIg6gBg");
	this.shape.setTransform(39.7,39.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(-83.8,-83.8,247.1,247.1), null);


(lib.Symbol33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Symbol34();
	this.instance.parent = this;
	this.instance.setTransform(-19.7,6.5,1,1,0,0,0,3.1,0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-61.6,y:11.1},3).to({_off:true},1).wait(2));

	// Layer 1
	this.instance_1 = new lib.Symbol34();
	this.instance_1.parent = this;
	this.instance_1.setTransform(3.1,0.3,1,1,0,0,0,3.1,0.3);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({_off:false},0).to({x:-61.6,y:4.6},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.3,5.7,7.2,1.6);


(lib.Symbol31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol32();
	this.instance.parent = this;
	this.instance.setTransform(4.4,0.5,1,1,0,0,0,4.4,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-123.3,y:15.6},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.5,-0.5,9.8,2);


(lib.Symbol30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol23();
	this.instance.parent = this;
	this.instance.setTransform(12.1,6.7,0.047,0.092,-92.8,0,0,126.5,128.6);
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,24.2,13.2);


(lib.Symbol29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol23();
	this.instance.parent = this;
	this.instance.setTransform(21.6,11.8,0.084,0.164,-92.8,0,0,127.3,128);
	this.instance.compositeOperation = "lighter";
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Symbol27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Symbol26();
	this.instance.parent = this;
	this.instance.setTransform(71,18.4,1,1,0,0,0,71,18.4);
	this.instance.alpha = 0.18;
	this.instance.compositeOperation = "lighter";
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	// Layer 1
	this.instance_1 = new lib.Symbol26();
	this.instance_1.parent = this;
	this.instance_1.setTransform(71,18.4,1,1,0,0,0,71,18.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,118.4,30.8);


(lib.Symbol24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol23();
	this.instance.parent = this;
	this.instance.setTransform(21.6,11.8,0.084,0.164,-92.8,0,0,127.3,128);
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,43.1,23.5);


(lib.Symbol21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol30();
	this.instance.parent = this;
	this.instance.setTransform(-7.7,90.7,1,1,0,0,0,12.1,6.5);

	this.instance_1 = new lib.Symbol29();
	this.instance_1.parent = this;
	this.instance_1.setTransform(50.4,60.9,1,1,0,0,0,21.6,11.7);

	this.instance_2 = new lib.Symbol24();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-6.2,86.3,0.561,0.561,0,0,0,21.6,11.7);

	this.instance_3 = new lib.Symbol24();
	this.instance_3.parent = this;
	this.instance_3.setTransform(37.1,95.1,1,1,0,0,0,21.6,11.7);

	this.instance_4 = new lib.Symbol24();
	this.instance_4.parent = this;
	this.instance_4.setTransform(52.8,74.1,1,1,0,0,0,21.6,11.7);
	this.instance_4.alpha = 0.422;

	this.instance_5 = new lib.Symbol22();
	this.instance_5.parent = this;
	this.instance_5.setTransform(92,49.5,1,1,0,0,0,92,49.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Layer 3
	this.instance_6 = new lib.Symbol33();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-16.3,87.8,1,1,0,0,0,3.1,0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// Layer 2
	this.instance_7 = new lib.Symbol31();
	this.instance_7.parent = this;
	this.instance_7.setTransform(65.6,73.3,1,1,0,0,0,4.4,0.5);

	this.instance_8 = new lib.Symbol31();
	this.instance_8.parent = this;
	this.instance_8.setTransform(44.5,94.8,1,1,0,0,0,4.4,0.5);

	this.instance_9 = new lib.Symbol31();
	this.instance_9.parent = this;
	this.instance_9.setTransform(48,62.3,1,1,0,0,0,4.4,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9},{t:this.instance_8},{t:this.instance_7}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol21, new cjs.Rectangle(-42.8,0,226.8,106.8), null);


(lib.Symbol20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol21();
	this.instance.parent = this;
	this.instance.setTransform(92,49.5,1,1,0,0,0,92,49.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,skewX:6.3,skewY:10,x:96.2,y:51.2},36,cjs.Ease.quadInOut).to({scaleX:1,skewX:7.5,skewY:11.7,x:96.8,y:51.5},13).to({scaleX:1,skewX:0,skewY:0,x:92,y:49.5},50,cjs.Ease.quadInOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42.8,0,226.8,106.8);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol7();
	this.instance.parent = this;
	this.instance.setTransform(759.8,110.4,1,1,175.9,0,0,157.5,98);

	this.instance_1 = new lib.Symbol7();
	this.instance_1.parent = this;
	this.instance_1.setTransform(573.8,131.5,1,1,-5.2,0,0,157.5,98);

	this.instance_2 = new lib.Symbol7();
	this.instance_2.parent = this;
	this.instance_2.setTransform(340.8,140.5,1,1,-5.2,0,0,157.5,98);

	this.instance_3 = new lib.Symbol7();
	this.instance_3.parent = this;
	this.instance_3.setTransform(165.7,111.9,1,1,-5.2,0,0,157.5,98);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol13, new cjs.Rectangle(0,0,923.9,252.4), null);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Eg3YAdCIAAjiIAIgEQBvg/BcgmQBvgvBmgVQA2gKB1gLQBvgMA7gNQBbgTC7hKQCzhHBkgSIBtgRQA+gNAngYQASgLAmgfQAigdAWgKQA2geB7AFQB8AFA2gdQAOgHAigXQAdgVATgHQAZgKAqgDQA1gDAQgEIARgFQAwATA8giQATgLAegVQAjgaANgJQBDgoBngQQA/gKCAgGQBzgLBGgfQATgIAkgTQAhgQAYgGQASgFAlgDQAlgCASgEQAXgFAggOIA1gXQA7gXCNgLQCDgLBBgfQATgJAlgUQAhgQAagCQANgBAiACQAeAEARgEQASgEAYgOIAngaQAqgYA4gLQArgHA9AAIAogBQAQAAANgEQAHACAIAAQAbACAhgMIA7gWQAzgUBCgNQAqgJBOgLIEAgnQCwgaBagLQCUgUB3gJQAugDAagIQAmgNARgcQAHgLALgfQAKgdALgMQAYgaA3AHQBNALAPgDQALgCAcgKQAZgKAPgBQAMAAAbAEQAYAEAOgCQAUgCAggUQAjgXAPgDQAPgFAZgBQAegBAKgBQAVgFAbgNIAugZQAhgNBAgOQEUg9EVACQA+ABApAFQA3AHAsAPQAKAEAMAFIAAdzg");
	mask.setTransform(352.5,185.8);

	// Layer 1
	this.instance = new lib.Symbol40();
	this.instance.parent = this;
	this.instance.setTransform(284.4,425,2.564,1.255,0,0,0,133.2,128.8);
	this.instance.compositeOperation = "lighter";

	this.instance_1 = new lib.back();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-18,1,1.069);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(-1.9,177.2,702,194.5), null);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Symbol35();
	this.instance.parent = this;
	this.instance.setTransform(128,184,1,1,0,0,0,128,128);
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(0,56,256,256), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol19();
	this.instance.parent = this;
	this.instance.setTransform(166,148,1,1,0,0,0,166,67);

	this.instance_1 = new lib.Symbol20();
	this.instance_1.parent = this;
	this.instance_1.setTransform(190,51.4,1,1,0,0,0,92,49.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,1.9,332,213.1), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.parent.btnMouseHandler();
	}
	this.frame_39 = function() {
		this.parent.btnMouseHandler();
	}
	this.frame_78 = function() {
		this.parent.btnMouseHandler();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(39).call(this.frame_39).wait(39).call(this.frame_78).wait(62));

	// Layer 7
	this.instance = new lib.Symbol4();
	this.instance.parent = this;
	this.instance.setTransform(-13.4,37.4,3.163,2.409,13.2,0,0,39.2,39.4);
	this.instance.alpha = 0.371;
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-48.5,y:14,alpha:0},13).to({_off:true},1).wait(25).to({_off:false,rotation:13,x:7,y:37.4,alpha:0.371},0).to({x:-39.8,y:11.7,alpha:0},13).to({_off:true},1).wait(25).to({_off:false,rotation:24.2,x:27.6,y:8.6,alpha:0.371},0).to({scaleX:3.51,scaleY:2.68,x:15.9,y:-3.2,alpha:0},13).to({_off:true},1).wait(48));

	// Layer 8
	this.instance_1 = new lib.Symbol4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(5.7,34,1.664,0.728,23.6,0,0,39.2,39.8);
	this.instance_1.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:-29.4,y:10.6,alpha:0},13).to({_off:true},1).wait(25).to({_off:false,regX:39.3,rotation:26,x:23.7,y:32.8,alpha:1},0).to({x:-23.1,y:7.1,alpha:0},13).to({_off:true},1).wait(25).to({_off:false,rotation:33.5,x:39.1,y:3.3,alpha:1},0).to({regX:39.2,regY:39.7,scaleX:1.85,scaleY:0.81,x:28.6,y:-9.3,alpha:0},13).to({_off:true},1).wait(48));

	// Layer 9
	this.instance_2 = new lib.Symbol5();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-38.3,14.5,0.226,0.374,-65.8,0,0,126.8,127.9);
	this.instance_2.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:-73.4,y:-8.9,alpha:0},13).to({_off:true},1).wait(25).to({_off:false,regX:126.9,regY:128.1,rotation:-66,x:-17.9,y:14.6,alpha:1},0).to({x:-64.7,y:-11.1,alpha:0},13).to({_off:true},1).wait(25).to({_off:false,regY:127.8,rotation:-54.7,x:7.6,y:-18.7,alpha:1},0).to({regX:127,regY:127.7,scaleX:0.25,scaleY:0.42,x:-6.4,y:-33.5,alpha:0},13).to({_off:true},1).wait(48));

	// Symbol 18
	this.instance_3 = new lib.Symbol18();
	this.instance_3.parent = this;
	this.instance_3.setTransform(261.5,154.5,1,1,0,0,0,231.5,110.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:231.6,scaleY:1,skewX:2.6,x:266.8},4,cjs.Ease.quadInOut).to({regX:231.5,scaleY:1,skewX:0,x:261.5},4).wait(31).to({skewX:1.6,x:264.6},4,cjs.Ease.quadInOut).to({skewX:0,x:261.5},5,cjs.Ease.quadInOut).wait(30).to({skewX:1.8,x:265},4,cjs.Ease.quadInOut).to({skewX:0,x:261.5},5,cjs.Ease.quadInOut).wait(53));

	// Symbol 17
	this.instance_4 = new lib.Symbol17();
	this.instance_4.parent = this;
	this.instance_4.setTransform(221,86.6,1,1,0,0,0,108,84.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({scaleX:1,scaleY:1,skewX:2.8,x:225.2},4,cjs.Ease.quadInOut).to({scaleX:1,scaleY:1,skewX:0,x:221},4).to({regX:108.1,scaleX:0.97,x:224.2},31,cjs.Ease.quadInOut).to({regX:108.2,skewX:1.6,x:229.1},4,cjs.Ease.quadInOut).to({regX:108.1,skewX:0,x:224.2},5,cjs.Ease.quadInOut).wait(30).to({skewX:1.8,x:229.7},4,cjs.Ease.quadInOut).to({skewX:0,x:224.2},5,cjs.Ease.quadInOut).wait(20).to({regX:108,scaleX:1,x:221},32,cjs.Ease.quadInOut).wait(1));

	// Symbol 16
	this.instance_5 = new lib.Symbol16();
	this.instance_5.parent = this;
	this.instance_5.setTransform(98.1,73.6,1,1,0,0,0,96,50.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({scaleX:1,scaleY:1,skewX:2.8,x:111.3,y:77.8},4,cjs.Ease.quadInOut).to({scaleX:1,scaleY:1,skewX:0,x:98.1,y:73.6},4).to({regY:50.6,scaleX:0.9,scaleY:1,skewX:4,x:113.4,y:73.7},31,cjs.Ease.quadInOut).to({scaleY:1,skewX:5.6,x:124.7,y:77.8},4,cjs.Ease.quadInOut).to({scaleY:1,skewX:4,x:113.4,y:73.7},5,cjs.Ease.quadInOut).wait(10).to({scaleX:0.9,scaleY:1,skewX:15.9,skewY:8.8,x:122.2,y:65.3},20,cjs.Ease.quadInOut).to({regX:96.1,scaleX:0.9,scaleY:1.01,skewX:17.5,skewY:8.9,x:130.5,y:67.4},4,cjs.Ease.quadInOut).to({regX:96,scaleX:0.9,scaleY:1,skewX:15.9,skewY:8.8,x:122.2,y:65.3},5,cjs.Ease.quadInOut).wait(20).to({regY:50.5,scaleX:1,scaleY:1,skewX:0,skewY:0,x:98.1,y:73.6},32,cjs.Ease.quadInOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-460.4,-340.6,953.5,758);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol40();
	this.instance.parent = this;
	this.instance.setTransform(341.5,161.6,2.564,1.255,0,0,0,133.2,128.8);
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,683.1,323.2), null);


(lib.Symbol37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(341.5,161.6,1,1,0,0,0,341.5,161.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol37, new cjs.Rectangle(0,0,683.1,323.2), null);


(lib.Symbol28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol27();
	this.instance.parent = this;
	this.instance.setTransform(71,18.4,1,1,0,0,0,71,18.4);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol28, new cjs.Rectangle(0,0,118.4,30.8), null);


(lib.Symbol25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol28();
	this.instance.parent = this;
	this.instance.setTransform(71,18.4,1,1,0,0,0,71,18.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.06,scaleY:1.06},24,cjs.Ease.quadInOut).to({scaleX:1,scaleY:1},25,cjs.Ease.quadInOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,118.4,30.8);


(lib.Symbol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol13();
	this.instance.parent = this;
	this.instance.setTransform(1192.1,126.2,1,1,0,0,0,461.9,126.2);

	this.instance_1 = new lib.Symbol13();
	this.instance_1.parent = this;
	this.instance_1.setTransform(461.9,126.2,1,1,0,0,0,461.9,126.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol15, new cjs.Rectangle(0,0,1654.1,252.4), null);


(lib.Symbol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol15();
	this.instance.parent = this;
	this.instance.setTransform(96.9,126.4,1,1,0,0,0,827.1,126.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:827.1,y:126.2},399).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-730.2,0.2,1654.1,252.4);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Symbol14();
	this.instance.parent = this;
	this.instance.setTransform(840.6,-53.2,1,1,-3.2,0,0,827,126.2);
	this.instance.alpha = 0.07;
	this.instance.compositeOperation = "lighter";

	this.instance_1 = new lib.Symbol14();
	this.instance_1.parent = this;
	this.instance_1.setTransform(695.2,232,1,1,-3.2,0,0,827,126.2);
	this.instance_1.alpha = 0.07;
	this.instance_1.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Layer 3
	this.instance_2 = new lib.Symbol37();
	this.instance_2.parent = this;
	this.instance_2.setTransform(352.7,227.6,1.239,1.239,0,0,0,341.5,161.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Layer 1
	this.instance_3 = new lib.back();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0,0,1,1.068);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol12, new cjs.Rectangle(-865.1,-182.3,1806.3,616.5), null);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var shakeDecay = 0.050000;
		var shake = 0;
		var x0 = this.stage.x;
		var y0 = this.stage.y;
		
		this.addEventListener("tick", shakeBtn.bind(this));
		
		
		this.btnMouseHandler = function () {
		shake = 1; 
		}
		
		function shakeBtn(){
		console.log(0);
		if (shake) {
		this.stage.x = x0 + getRandomNumber(0, shake * 2) - shake;
		this.stage.y = y0 + getRandomNumber(0, shake * 3) - shake;
		shake = shake - shakeDecay;
		if (shake < 0) {
		shake = 0;
		}
		}
		}
		function getRandomNumber (start, end, except) {
		var random = Math.round(start + (Math.random() * (end - start)));
		if (!isNaN(parseFloat(except)) && isFinite(except) && random == except) 
		random = sym.getComposition().getStage().getRandomNumber(start, end, except);
		return random;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(360));

	// Layer 1
	this.instance = new lib.Symbol2();
	this.instance.parent = this;
	this.instance.setTransform(513.7,584.5,0.683,0.683,0,0,0,246.5,132.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:498.1,y:586.3},194,cjs.Ease.quadInOut).to({x:513.7,y:584.5},165,cjs.Ease.quadInOut).wait(1));

	// Symbol 11
	this.instance_1 = new lib.Symbol11();
	this.instance_1.parent = this;
	this.instance_1.setTransform(457,727.3,1,1,0,0,0,272,23.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:391.3,y:729.1},194,cjs.Ease.quadInOut).to({x:457,y:727.3},163,cjs.Ease.quadInOut).wait(3));

	// Symbol 9
	this.instance_2 = new lib.Symbol9();
	this.instance_2.parent = this;
	this.instance_2.setTransform(419,573.8,1,1,0,0,0,350,177);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:393.3,y:575.6},194,cjs.Ease.quadInOut).to({x:419,y:573.8},163,cjs.Ease.quadInOut).wait(3));

	// Layer 5
	this.instance_3 = new lib.Symbol3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(315,635.1,0.723,0.723,0,0,0,166,107.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:261.4,y:637.9},194,cjs.Ease.quadInOut).to({x:315,y:635.1},165,cjs.Ease.quadInOut).wait(1));

	// Symbol 12
	this.instance_4 = new lib.Symbol12();
	this.instance_4.parent = this;
	this.instance_4.setTransform(401,590,1,1,0,0,0,350,189);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:481},194,cjs.Ease.quadInOut).to({x:401},163,cjs.Ease.quadInOut).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-814.1,218.6,1806.3,764.8);


// stage content:
(lib.armored2_300250 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol6();
	this.instance.parent = this;
	this.instance.setTransform(150.8,25.5,0.717,0.717,0,0,0,100,28.8);

	this.instance_1 = new lib.Symbol25();
	this.instance_1.parent = this;
	this.instance_1.setTransform(168.2,221.7,1.514,1.514,0,0,0,71.2,18.6);
	this.instance_1.shadow = new cjs.Shadow("rgba(255,0,0,1)",0,0,9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Symbol 8
	this.instance_2 = new lib.Symbol8();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-65.1,87.2,0.752,0.752,0,0,0,89.9,534.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-595,-25.3,1358.7,575.1);
// library properties:
lib.properties = {
	id: 'E53605797F974581978B361F28F9D90A',
	width: 300,
	height: 250,
	fps: 26,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/back.jpg", id:"back"},
		{src:"images/bodys.png", id:"bodys"},
		{src:"images/button.png", id:"button"},
		{src:"images/cloudia.png", id:"cloudia"},
		{src:"images/dull.png", id:"dull"},
		{src:"images/fireloop1_3.png", id:"fireloop1_3"},
		{src:"images/gunbody.png", id:"gunbody"},
		{src:"images/gunss.png", id:"gunss"},
		{src:"images/heads.png", id:"heads"},
		{src:"images/logorealaction.png", id:"logorealaction"},
		{src:"images/stones.png", id:"stones"}
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
an.compositions['E53605797F974581978B361F28F9D90A'] = {
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