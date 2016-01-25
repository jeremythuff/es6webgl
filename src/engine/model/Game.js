import {VoxelEngine} from "../VoxelEngine";

export class Game {
	
	constructor(engine) {
		this.engine = new VoxelEngine(this);
		this.states = new Map();
		this.currentState = null;
		this.running = false;
	}

	init() {}

	start() {
		this.init();
		this.running = true;
	}

	stop()  {
		this.destroy();
		this.running = false;	
	}

	setState(state) {
		this.currentState.stop();
		this.currentState = state;
		this.currentState.start();
	}

	getState() {
		return this.currentState;
	}

	update(delta) {
		if(this.currentState && this.currentState.running)
		this.currentState.update(delta);
	}

	render(delta) {
		if(this.currentState && this.currentState.running)
		this.currentState.render(delta);
	}

	destroy() {
		for(let state of this.states.values()) {
			state.destroy();
		}
	}

}