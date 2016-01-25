import {Game} from "../engine/model/Game";
import {states} from "./states/states";

export class VoxelGame extends Game {
	constructor() {
		super();
		this.states = states;
	}

	init() {
		this.setState(this.states.get("Intro"));
		super.init();
	}

	update() {
		super.update();
	}
	
	render() {
		super.render();
	}

}