import "./styles/App.css";
import { MenuList } from "./MenuList";

export class App {
    constructor() {
        this.container;
        this.menu;
    }

    init() {
        this.container = document.createElement("div");
        this.container.classList.add("wrapper");
        document.body.prepend(this.container);
        this.initMenu();
    }

    initMenu() {
        this.menu = new MenuList(this.container);
        this.menu.init();
    }
}
