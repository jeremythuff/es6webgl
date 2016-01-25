import {State} from "../../engine/model/State";

export class Intro extends State{
	constructor() {
		super("Intro");
	}

	start() {
		super.init();
		super.start();
	}

}