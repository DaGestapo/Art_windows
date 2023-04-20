export class BoxIcons {
    constructor(classNameOfBlock) {
        this.block = document.querySelector(`.${classNameOfBlock}`);
        this.boxIcons = this.block.querySelectorAll('box-icon');
        this.color = '#1BB2DE';

        this.setColor();
    }

    setColor() {
        const boxIcons = this.boxIcons;

        boxIcons.forEach( item => {
            item.setAttribute('color', this.color);
        });
    }

    setSize(sm) {
        const boxIcons = this.boxIcons;

        boxIcons.forEach( item => {
            item.setAttribute('size', sm);
        });
    }
}