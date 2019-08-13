import "./MenuItem.css";

export class MenuItem {
    constructor(container, items) {
        this.container = container;
        this.items = items;
        this.item;
        this.link;
    }

    init() {
        this.items.forEach((elem) => {
            this.item = document.createElement("li");
            this.link = document.createElement("a");
            this.link.setAttribute("tabindex", -1);
            this.link.setAttribute("href", elem.link);
            this.link.innerText = elem.name;
            this.item.appendChild(this.link);
            this.container.appendChild(this.item);
        });
    }
}
