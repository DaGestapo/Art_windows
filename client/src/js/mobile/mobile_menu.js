export class MobileMenu {
    constructor() {
        this.menuEl = document.querySelector('.mobile_menu');
        this.hamburger = document.querySelector('.block1__hamburger');
        this.header = document.querySelector('.block1__header');
        this.curtains = document.querySelector('.block1__curtains');
        this.checker = false;

        this.setPositionOnClose();
        this.listener();
    }

    positionOnOpen() {
        const header = this.header;
        const headerHeight = header.getBoundingClientRect().height;
        return headerHeight;
    }

    positionOnClose() {
        return -this.menuEl.offsetHeight;
    }

    listener() {
        const button = this.hamburger;
        const menu = this.menuEl;
        const header = this.header;
        const curtains = this.curtains;

        button.addEventListener('click', handler);

        let openY = this.positionOnOpen(),
            closeY = this.positionOnClose() - 300;
            
        function handler() {

            if(!this.checker) {
                menu.classList.add('open');
                header.classList.add('open');
                menu.style.top = `${openY}px`;
                curtains.style.top = `${0}px`;

                this.checker = true;
            } else {
                menu.classList.remove('open');

                curtains.style.top = `${-curtains.offsetHeight}px`;
                menu.style.top = `${closeY}px`;
        
                setTimeout( () => {
                    header.classList.remove('open');
                }, 110)

                this.checker = false;
            }

        }
        
    }

    setPositionOnClose() {
        const menu = this.menuEl;
        const curtains = this.curtains;

        menu.style.top = `${-menu.offsetHeight - 300}px`;
        curtains.style.top = `${-curtains.offsetHeight}px`;
    }

    menuState() {
        return this.checker;
    }

}
