import {navbar} from "./navbar.js";
import {hero} from "./hero.js";
const container = React.createElement("div",{id:'container'},[navbar(),hero()]);
export default container;