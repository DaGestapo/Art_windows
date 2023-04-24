export class LastGridPosition {
    constructor(id) {
        this.block = document.querySelector(`#${id}`);
        this.elements = this.block.querySelectorAll('section');
        this.button = this.block.querySelector('button');
        this.length = this.elements.length;
 
    }

    centralize() {
        const length = this.length;
        if(length % 2 === 0) return;

        const lastElm = this.elements[ length - 1 ];

        lastElm.style.gridColumn = `1 / 2 span`;
        lastElm.style.margin = `0 26%`;

        this.hideButton();
    }

    hideButton() {
        const button = this.button;
        button.style.display = "none";
    }

    normalize() {
        const length = this.length;
        if(length % 2 === 0) return;

        const lastElm = this.elements[ length - 1 ];

        lastElm.style.gridColumn = '1 / 1';
        lastElm.style.margin = `0`;

        this.hideButton();
    }
}