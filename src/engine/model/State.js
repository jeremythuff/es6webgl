export class State {
	constructor(name) {
		this.name = name;
		this.running = false;
	}

	init() {}

	start() {
		this.running = true;
	}

	start() {
		this.running = false;
	}

	update(delta) {}

	render(delta) {}

	destroy() {}

}