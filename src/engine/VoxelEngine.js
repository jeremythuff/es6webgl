import {Utils} from "./utils/Utils";


export class VoxelEngine {
	
	constructor(game) {
		this.game = game;
		this.utils = new Utils();
		this.startLoop();
	}

	startLoop() {
		let engine = this;
		let clock = new THREE.Clock();
	    
	    let lastFrame = new Date();
	    let raf = window.requestAnimationFrame 		 ||
	        	  window.mozRequestAnimationFrame    ||
	              window.webkitRequestAnimationFrame ||
	              window.msRequestAnimationFrame     ||
	              window.oRequestAnimationFrame;
	    
	    function loop( now ) {	        
            raf(loop);
            let delta = clock.getDelta();

            if ( engine.game.running !== false ) {
            	engine.game.update( delta );
            	if ( delta < 160 ) {
	                engine.game.render( delta );		           
	            }
	        }
	         lastFrame = now;
		        
		}
		    
		loop(lastFrame);
		      
	}

}