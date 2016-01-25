export class State {
	constructor(name) {
		this.name = name;
		this.running = false;
		this.initialized = false;
	}

	init() {
		this.initialized = true;
	}

	start() {
		this.running = true;
	}

	stop() {
		this.running = false;
	}

	update(delta) {}

	render(delta) {}

	destroy() {}

}