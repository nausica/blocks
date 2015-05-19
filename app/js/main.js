/* jshint devel:true */
console.log('Look at app/js/main.js');
var Konva = require('konva');
var width = window.innerWidth;
var height = window.innerHeight;

var tween = null;

var stage = new Konva.Stage({
	container: 'container',
	width: width,
	height: height
});

var layer = new Konva.Layer();
var dragLayer = new Konva.Layer();

var rect = new Konva.Rect({
	x: ( stage.getWidth() / 2 ) - ( stage.getWidth() / 4 ) - 50,
	y: ( stage.getHeight() / 4 ) * 3 - 130,
	width: 160,
	height: 100,
	fill: 'blue',
	draggable: true,
	shadowColor: 'black',
	shadowBlur: 10,
	shadowOffset: {
		x : 2,
		y : 2
	}
});

var circle = new Konva.Circle({
	x: stage.getWidth() / 2,
	y: ( stage.getHeight() / 4 ) * 3,
	radius: 70,
	fill: 'red',
	opacity: 0.8,
	draggable: true,
	shadowColor: 'black',
	shadowBlur: 10,
	shadowOffset: {
		x : 2,
		y : 2
	}
});

var hexagon = new Konva.RegularPolygon({
	x: ( stage.getWidth() / 2 ) + ( stage.getWidth() / 4 ),
	y: ( stage.getHeight() / 4 ) * 3,
	sides: 3,
	radius: 70,
	fill: 'yellow',
	opacity: 0.8,
	draggable: true,
	shadowColor: 'black',
	shadowBlur: 10,
	shadowOffset: {
		x : 2,
		y : 2
	}
});


var rect_hole = new Konva.Rect({
	x: ( stage.getWidth() / 2 ) - ( stage.getWidth() / 4 ),
	y: ( stage.getHeight() / 4 ),
	width: 160,
	height: 100,
	fill: 'grey',
	shadowBlur: 5,
	shadowOffset: {
		x : 0,
		y : 0
	}
});

var circle_hole = new Konva.Circle({
	x: stage.getWidth() / 2,
	y: ( stage.getHeight() / 4 ),
	radius: 70,
	fill: 'grey',
	opacity: 0.8,
	shadowBlur: 5,
	shadowOffset: {
		x : 0,
		y : 0
	}
});

var hexagon_hole = new Konva.RegularPolygon({
	x: ( stage.getWidth() / 2 ) + ( stage.getWidth() / 4 ),
	y: ( stage.getHeight() / 4 ),
	sides: 3,
	radius: 70,
	fill: 'grey',
	shadowBlur: 5,
	shadowOffset: {
		x : 0,
		y : 0
	}
});
// add the shapes to the layer
layer.add(rect_hole);
layer.add(circle_hole);
layer.add(hexagon_hole);
// add the shapes to the layer
layer.add(rect);
layer.add(circle);
layer.add(hexagon);


stage.add(layer, dragLayer);
/*
stage.on('dragstart', function(evt) {
	var shape = evt.target;
	// moving to another layer will improve dragging performance
	shape.moveTo(dragLayer);
	stage.draw();
  
	if (tween) {
		tween.pause();
	}
	shape.setAttrs({
		shadowOffset: {
			x: 5,
			y: 5
		},
		scale: {
			x: shape.getAttr('startScale') * 1.2,
			y: shape.getAttr('startScale') * 1.2
		}
	});
});

var previousShape;
stage.on("dragmove", function(evt){
	var pos = stage.getPointerPosition();
	var shape = layer.getIntersection(pos);
	if (previousShape && shape) {
		if (previousShape !== shape) {
			// leave from old targer
			previousShape.fire('dragleave', {
				type : 'dragleave',
				target : previousShape,
				evt : evt.evt
			}, true);

			// enter new targer
			shape.fire('dragenter', {
				type : 'dragenter',
				target : shape,
				evt : evt.evt
			}, true);

			previousShape = shape;

		} else {
			previousShape.fire('dragover', {
				type : 'dragover',
				target : previousShape,
				evt : evt.evt
			}, true);
		}
	} else if (!previousShape && shape) {
		previousShape = shape;
		shape.fire('dragenter', {
			type : 'dragenter',
			target : shape,
			evt : evt.evt
		}, true);
	} else if (previousShape && !shape) {
		previousShape.fire('dragleave', {
			type : 'dragleave',
			target : previousShape,
			evt : evt.evt
		}, true);
		previousShape = undefined;
	}
});

stage.on("dragend", function(e){
	var pos = stage.getPointerPosition();
	var shape = layer.getIntersection(pos);
	if (shape) {
		previousShape.fire('drop', {
			type : 'drop',
			target : previousShape,
			evt : e.evt
		}, true);
	}
	previousShape = undefined;
	e.target.moveTo(layer);
	layer.draw();
	dragLayer.draw();
});

stage.on("dragenter", function(e){
	e.target.fill('green');
	layer.draw();
});

stage.on("dragleave", function(e){
	e.target.fill('blue');
	layer.draw();
});

stage.on("drop", function(e){
	e.target.fill('red');
	layer.draw();
});
*/