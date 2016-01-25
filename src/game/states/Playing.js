import {State} from "../../engine/model/State";

export class Playing extends State{
	constructor() {
		super("Playing");
	}

	start() {
		if(!this.initialized) this.init();
		super.start();
	}

	init() {
		super.init();
	}

}
