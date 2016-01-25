import {Intro} from "./Intro";
import {MainMenu} from "./MainMenu";
import {Playing} from "./Playing";
import {GenerateMap} from "./GenerateMap";

let states = new Map();

states.set("Intro", new Intro());
states.set("MainMenu", new MainMenu());
states.set("Playing", new Playing());
states.set("GenerateMap", new GenerateMap());

export {states};