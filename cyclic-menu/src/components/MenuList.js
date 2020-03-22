import "./styles/MenuList.css"
import { MenuItem } from "./MenuItem";
import { items } from "./Items";

const KEYS = {
    ARROW_LEFT: "ArrowLeft",
    ARROW_RIGHT: "ArrowRight"
}

export class MenuList {
    constructor(container) {
        this.container = container;
        this.list;
        this.item;
        this.nodes = [];
        this.length;
        this.counter = 0;
    }
    
    init() {
        this.list = document.createElement("ul");
        this.list.classList.add("menu-list");
        this.list.setAttribute("tabindex", 0);
        this.createItems();
        this.container.appendChild(this.list);

        this.nodes = this.list.querySelectorAll("a");
        this.length = this.nodes.length;
        
        document.addEventListener("load", this.makeFocus());
        this.list.addEventListener("focus", () => this.makeFocus());

        this.list.addEventListener("keydown", (event) => {
            switch (event.key) {
                case KEYS.ARROW_LEFT:
                    this.prev();
                    break;
                case KEYS.ARROW_RIGHT:
                    this.next();
                    break;
            }
            this.makeFocus();
        });
    }

    createItems() {
        this.item = new MenuItem(this.list, items);
        this.item.init(); 
    }

    prev() {
        this.nodes[this.counter].setAttribute("tabindex", -1);
        if (--this.counter < 0) {
            this.counter = this.length - 1;
        }
    }

    next() {
        this.nodes[this.counter].setAttribute("tabindex", -1);
        if (++this.counter >= this.length) {
            this.counter = 0;
        }
    }

    makeFocus() {
        this.nodes[this.counter].setAttribute("tabindex", 0);
        this.nodes[this.counter].focus();
    }
}
