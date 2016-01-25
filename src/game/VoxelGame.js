import {Game} from "../engine/model/Game";
import {states} from "./states/states";

export class VoxelGame extends Game {
	constructor() {
		super();
		this.states = states;
		this.currentState = this.states.get("Intro");
	}

	update() {
		super.update();
	}
	
	render() {
		super.render();
	}

}