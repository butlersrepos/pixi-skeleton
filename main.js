// You can use either `new PIXI.WebGLRenderer`, `new PIXI.CanvasRenderer`, or `PIXI.autoDetectRenderer`
// which will try to choose the best renderer for the environment you are in.
var height = 480;
var width = 640;

var renderer = new PIXI.WebGLRenderer( width, height );
document.body.appendChild( renderer.view );

var container = new PIXI.Container();

requestAnimationFrame( animate );

function animate() {
	requestAnimationFrame( animate );

	renderer.render( container );
}