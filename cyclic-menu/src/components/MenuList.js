import "./MenuList.css"
import { MenuItem } from "./MenuItem";
import { items } from "./Items";

export class MenuList {
    constructor(container) {
        this.container = container;
        this.list;
        this.item;
        this.nodes = [];
        this.len;
        this.counter = 0;
    }
    
    init() {
        this.list = document.createElement("ul");
        this.list.classList.add("menu-list");
        this.list.setAttribute("tabindex", 0);
        this.createItems();
        this.container.appendChild(this.list);

        this.nodes = this.list.querySelectorAll("a");
        this.len = this.nodes.length;
        
        this.list.addEventListener("focus", () => this.makeFocus());

        this.list.addEventListener("keydown", (event) => {
            switch (event.key) {
                case "ArrowLeft":
                    this.prev();
                    break;
                case "ArrowRight":
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
            this.counter = this.len - 1;
        }
    }

    next() {
        this.nodes[this.counter].setAttribute("tabindex", -1);
        if (++this.counter >= this.len) {
            this.counter = 0;
        }
    }

    makeFocus() {
        this.nodes[this.counter].setAttribute("tabindex", 0);
        this.nodes[this.counter].focus();
    }
}
